module.exports = {
  apps: [
    {
      name: "db-Mysql",
      script: "./bin/index.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
