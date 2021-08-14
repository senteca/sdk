const { execSync } = require('child_process');

const apiUrl = process.env.API_URL || process.env.PLATFORM_URL;
if (apiUrl) {
  execSync('npm run generate', { env: { ...process.env, API_URL: apiUrl } });
}

execSync('npm run build');
