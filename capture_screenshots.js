const puppeteer = require('puppeteer-core');
const path = require('path');

const targets = [
  {
    name: 'option-a',
    url: 'http://localhost:8080/templates/option-a/index.html'
  },
  {
    name: 'option-b',
    url: 'http://localhost:8080/templates/option-b/index.html'
  },
  {
    name: 'option-c',
    url: 'http://localhost:8080/templates/option-c/index.html'
  },
  {
    name: 'gallery',
    url: 'http://localhost:8080/index.html'
  }
];

async function capture() {
  console.log('Launching headless Chrome for screenshots...');
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  const outputDir = path.join(__dirname, 'artifacts', 'screenshots');

  for (const target of targets) {
    console.log(`\nProcessing ${target.name} (${target.url})...`);

    // 1. Desktop Screenshot (1440px)
    {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      await page.goto(target.url, { waitUntil: ['load', 'networkidle0'], timeout: 30000 });
      // Short delay to ensure Tailwind CDN and Google Fonts render
      await new Promise(r => setTimeout(r, 1500));
      const desktopPath = path.join(outputDir, `${target.name}-desktop.png`);
      await page.screenshot({ path: desktopPath, fullPage: target.name !== 'gallery' });
      console.log(`Saved: ${desktopPath}`);
      await page.close();
    }

    // 2. Mobile Screenshot (390px)
    if (target.name !== 'gallery') {
      const page = await browser.newPage();
      await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
      await page.goto(target.url, { waitUntil: ['load', 'networkidle0'], timeout: 30000 });
      await new Promise(r => setTimeout(r, 1500));
      const mobilePath = path.join(outputDir, `${target.name}-mobile.png`);
      await page.screenshot({ path: mobilePath, fullPage: true });
      console.log(`Saved: ${mobilePath}`);
      await page.close();
    }
  }

  await browser.close();
  console.log('\nAll screenshots captured successfully.');
}

capture().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
