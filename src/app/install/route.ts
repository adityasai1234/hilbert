import { NextResponse } from 'next/server'

const script = `#!/usr/bin/env bash
set -euo pipefail

BOLD="\\033[1m"
GREEN="\\033[0;32m"
YELLOW="\\033[0;33m"
RED="\\033[0;31m"
RESET="\\033[0m"

echo ""
echo "\${BOLD}hilbert\${RESET} — open source AI research agent"
echo ""

# Check for Python 3
if ! command -v python3 &>/dev/null; then
  echo "\${RED}Error:\${RESET} Python 3 is required but not found."
  echo "Install it from https://python.org and re-run this script."
  exit 1
fi

PYTHON_VERSION=\$(python3 -c 'import sys; print(sys.version_info.minor)')
if [ "\$PYTHON_VERSION" -lt 10 ]; then
  echo "\${RED}Error:\${RESET} Python 3.10+ is required (you have 3.\$PYTHON_VERSION)."
  exit 1
fi

# Check for pip
if ! python3 -m pip --version &>/dev/null; then
  echo "\${YELLOW}pip not found — installing...\${RESET}"
  curl -fsSL https://bootstrap.pypa.io/get-pip.py | python3
fi

echo "\${GREEN}Installing hilbert...\${RESET}"
python3 -m pip install --upgrade hilbert

echo ""
echo "\${GREEN}✓ hilbert installed successfully!\${RESET}"
echo ""
echo "Get started:"
echo "  hilbert /deepresearch \\"transformer attention\\""
echo "  hilbert /lit \\"federated learning privacy\\""
echo ""
echo "Docs: https://hilber.addyhacks.xyz/docs"
`

export async function GET() {
  return new NextResponse(script, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}
