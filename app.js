// cPanel CloudLinux Passenger startup file
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use tsx CLI directly via current node executable (avoids permission issues with bin symlinks)
const proc = spawn(
  process.execPath,
  [resolve(__dirname, 'node_modules/tsx/dist/cli.mjs'), 'server.ts'],
  {
    stdio: 'inherit',
    cwd: __dirname,
    env: { ...process.env, NODE_ENV: 'production' }
  }
);

proc.on('exit', (code) => process.exit(code ?? 0));
process.on('SIGTERM', () => proc.kill('SIGTERM'));
process.on('SIGINT', () => proc.kill('SIGINT'));
