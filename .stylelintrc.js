/*
 * @authror : Leiyin.lin
 * @Date : 2020-12-24
 * @Timestamp : 2020-12-24 19:50
 * @Project : webpack-vue-evo
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : .stylelintrc.js
 * @Description : ...
 */
module.exports = {
  processors: [],
  plugins: [],
  extends: "stylelint-config-standard",
  rules: {
    "max-empty-lines": 2,
    "font-family-no-missing-generic-family-keyword": [false, {
      "ignoreFontFamilies": ["Arial"]
    }]
  }
};
