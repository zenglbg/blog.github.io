// https://nuxt.com/docs/api/configuration/nuxt-config
// https://v3.nuxtjs.org/api/configuration/nuxt.config
// 获取当前执行命令的自定义环境
const ExcutingAnOrder = process.env.npm_lifecycle_script.split(" ");
const env = ExcutingAnOrder[ExcutingAnOrder.length - 1];

export default defineNuxtConfig({
  app: {
    baseURL: "",
    head: {
      title: "zlbg",
      titleTemplate: "%s - 最爱",
      // meta标签
      meta: [],
      // link方式引入的css或者文件
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://img.zlbg.cc/images/blog/icon-logo/extlbg.png",
        },
      ],
      // script文件
      // script: [{ src: '/zl/easemob.js', defer: true }],
    },
  },
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    importStyle: "css",
    themes: ["dark"],
    /** Options */
  },
});
