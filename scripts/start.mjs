import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const serverPath = join(process.cwd(), ".next", "standalone", "server.js");

if (!existsSync(serverPath)) {
  console.error(`Server não encontrado em ${serverPath}`);
  process.exit(1);
}

const port = process.env.PORT || "8080";

const child = spawn(process.execPath, [serverPath], {
  stdio: "inherit",
  env: {
    ...process.env,
    PORT: port,
    // Railway define HOSTNAME do container; Next usa isso no bind e falha.
    HOSTNAME: "0.0.0.0",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
