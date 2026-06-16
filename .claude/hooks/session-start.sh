#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo '{"async": true, "asyncTimeout": 300000}'

cd "$CLAUDE_PROJECT_DIR"

# 의존성 설치
npm install

# 개발 서버 백그라운드 실행 (미리보기 패널 활성화용)
nohup npx vite --port 5173 --host > /tmp/vite.log 2>&1 &

echo "Dev server starting on port 5173"
