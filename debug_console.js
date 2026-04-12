const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const messages = [];
  page.on('console', (msg) => messages.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', (err) => messages.push(`pageerror: ${err.message}`));
  await page.goto('http://127.0.0.1:4173');
  await page.waitForTimeout(2000);
  console.log(messages.join('\n'));
  await browser.close();
})();
