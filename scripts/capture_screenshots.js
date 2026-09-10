import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const ROUTES = [
  { name: 'home', path: '#/' },
  { name: 'booths', path: '#/booths' },
  { name: 'booth_detail', path: '#/booths/b4-1-1' },
  { name: 'map_4f', path: '#/map?floor=4' },
  { name: 'map_5f', path: '#/map?floor=5' },
  { name: 'schedule', path: '#/schedule' },
  { name: 'my_course', path: '#/my-course' },
  { name: 'teacher', path: '#/teacher' },
];

async function capture() {
  console.log('Starting screenshot capture...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  let consoleErrors = 0;

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.error(`[Browser Error]: ${msg.text()}`);
      consoleErrors++;
    }
  });

  page.on('pageerror', (err) => {
    console.error(`[Page Error]: ${err.message}`);
    consoleErrors++;
  });

  for (const route of ROUTES) {
    const url = `http://localhost:5173/${route.path}`;

    // 1. PC 뷰포트 (1440 x 900)
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise((r) => setTimeout(r, 600)); // 애니메이션 안정화 대기
    const pcPath = path.join(OUTPUT_DIR, `${route.name}_pc_1440.png`);
    await page.screenshot({ path: pcPath, fullPage: false });
    console.log(`✓ Saved PC screenshot: ${route.name}`);

    // 2. 모바일 뷰포트 (375 x 812, iPhone X 비율)
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise((r) => setTimeout(r, 600));
    const mobilePath = path.join(OUTPUT_DIR, `${route.name}_mobile_375.png`);
    await page.screenshot({ path: mobilePath, fullPage: false });
    console.log(`✓ Saved Mobile screenshot: ${route.name}`);
  }

  await browser.close();
  console.log(`\nAll screenshots saved to ${OUTPUT_DIR}!`);
  console.log(`Total Console / Page Errors: ${consoleErrors}`);

  if (consoleErrors > 0) {
    process.exit(1);
  }
}

capture().catch((err) => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
