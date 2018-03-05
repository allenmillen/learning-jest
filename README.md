# learning-jest

Pre-requisites
- have node.js, npm, and git installed
- have admin rights on your machine
- commands are provided for Ubuntu OS (but might work for MacOS as well)
- have access to Peatio installation to run tests against

Steps
1. Install jest testing framework globally "sudo npm install jest -g"
2. Download the test suite "git clone https://github.com/allenmillen/learning-jest.git"
3. Get into the test suite folder "cd learning-jest/"
4. Dowload dependencies "npm install"
5. Run test suite "jest"

Scenarios

1) tests most likely fail because you do not have local Peatio installed and running
-- either install local Peatio
-- or edit env/local/config.json file and provide valid URL

2) Next tests will likely fail due to absense valid access key/secret
- generate them
-- go to Settings
-- click "Set" button in "Api Tokens" cell
-- click "Create New Token" button
- edit env/local/config.json and specify newly generated access key/secret

3) Tests might fail due to absense of trades in order book or absense of funds
- make sure you have orders placed in orderbook and some funds deposited
