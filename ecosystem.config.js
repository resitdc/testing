module.exports = {
  apps: [
    {
      name: "dbs-test",
      script: "npx",
      args: "serve -s -l 9999 build",
      interpreter: "none",
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
