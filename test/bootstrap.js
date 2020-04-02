const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

// puppeteer选项
const options = {
  headless: false,
  timeout: 2000
};

// 暴露变量
before (async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(options);
});

// 关闭浏览器，复位数据
after (function () {
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});