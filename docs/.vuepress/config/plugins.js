const secret = require("./secret");
const moment = require("moment-timezone");
moment.locale("zh-cn");
moment.tz.setDefault("Asia/Shanghai");

module.exports = {
  "@vuepress/last-updated": {
    transformer: (timestamp) => {
      return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新",
    },
  },
  "@vssue/vuepress-plugin-vssue": {
    // 设置 `platform` 而不是 `api`
    platform: "github-v4",
    // 其他的 Vssue 配置
    owner: "huwanlong",
    repo: "docs",
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
  },
  "@vuepress/back-to-top": true,
  "@vuepress/google-analytics": {
    ga: secret.ga,
  },
  "@vuepress/medium-zoom": {
    selector: "img.custom",
  },
  "@vuepress/nprogress": {},
};
