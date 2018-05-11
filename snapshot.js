const puppeteer = require('puppeteer');

async function doScreenCapture(url, site_name) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    fullPage: true,
    path:`${site_name}.png`
  });
  await browser.close();
}

const news_sites = [
  {
    name: 'reuters',
    url: 'https://www.reuters.com/'
  }, {
    name: 'reuters_china',
    url: 'https://cn.reuters.com/'
  }, {
    name: 'reuters_japan',
    url: 'https://jp.reuters.com/'
  }, {
    name: 'reuters_germany',
    url: 'https://de.reuters.com/'
  }, {
    name: 'reuters_ara',
    url: 'https://ara.reuters.com/'
  }
];

for (var i = 0; i < news_sites.length; i++) {
  doScreenCapture(news_sites[i]['url'], news_sites[i]['name']);
}
