const util = require("util")

const env = process.env.ENV || "local"
const cfg_path = util.format("../../env/%s/config.json", env)
const cfg = require(cfg_path)
const api = require("peatio-client")(cfg["peatio-api"])

test("peatio-api private sys tests", () => {
  expect.assertions(1);
  return api.get_balances().then(data => {
    expect(data.accounts.length).toBeGreaterThan(0);
  });
});
