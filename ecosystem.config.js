module.exports = {
  apps: [
    {
      script: "build/main.js",
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "68.183.224.95",
      ref: "origin/main",
      repo: "git@github.com:notblessy/ekspresi.git",
      path: "/var/app",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
