name: React Build Workflow
 
on:
  push:
  workflow_dispatch:
 
jobs:
  build:
    runs-on: ubuntu-latest
 
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
 
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
 
      - name: Install dependencies
        run: npm install
 
      - name: run json file
        run: |
         package.json | tee output.txt
 
 
      - name: Upload production build
        uses: actions/upload-artifact@v4
        with:
          name: React-Build
          path: output.txt
