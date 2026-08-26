#!/usr/bin/env bash
set -euo pipefail

curl --fail-with-body --silent --show-error \
  --request POST 'https://api.indexnow.org/IndexNow' \
  --header 'Content-Type: application/json; charset=utf-8' \
  --write-out 'indexnow_http=%{http_code}\n' \
  --data '{
    "host": "lihuawei-topsun.github.io",
    "key": "0b32949b850c428d8d4d5b5b16646db3",
    "keyLocation": "https://lihuawei-topsun.github.io/robotics-field-integration/0b32949b850c428d8d4d5b5b16646db3.txt",
    "urlList": [
      "https://lihuawei-topsun.github.io/robotics-field-integration/",
      "https://lihuawei-topsun.github.io/robotics-field-integration/?lang=zh",
      "https://lihuawei-topsun.github.io/robotics-field-integration/?lang=en",
      "https://lihuawei-topsun.github.io/robotics-field-integration/industrial-inspection-robot-selection.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/engineering-notes.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/unitree-robot-fail-closed-control.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/go2-autocharge-timeout-detect.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/unitree-go2w-secondary-development.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/unitree-g1-arm-walking-integration.html",
      "https://lihuawei-topsun.github.io/robotics-field-integration/sitemap.xml"
    ]
  }'
