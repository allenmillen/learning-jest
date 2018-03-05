const api = require("peatio-client")({})

test("peatio-api public sys tests", () => {
  expect.assertions(1);
  return api.get_md("btcusd").then(data => {
    expect(data.asks.length).toBeGreaterThan(0);
  });
});
