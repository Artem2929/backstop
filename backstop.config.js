module.exports={
  "id": "backstop_default",
  "viewports": [
    {
      "label": "desktop",
      "width": 1366,
      "height": 768
    },
    {
      "label": "phone",
      "width": 320,
      "height":640
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://otomistrz.pl",
      "referenceUrl": "",
      "delay": 1000,
      // "readyEvent": "",
      // "readySelector": "",
      // "delay": 5000,
      // "hideSelectors": [],
      // "removeSelectors": [],
      // "hoverSelector": "",
      // "clickSelector": "",
      // "postInteractionWait": 0,
      // "selectors": [],
      // "selectorExpansion": true,
      // "expect": 0,
      // "misMatchThreshold" : 0.1,
      // "requireSameDimensions": true
    },
    {
    "label": "BackstopJS newpage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://otomistrz.pl/lokalizacja-oklejanie-mebli/",
      "referenceUrl": "",
      "delay": 1000
  }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 10,
  "debug": false,
  "debugWindow": false
}
