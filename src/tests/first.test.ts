  it("Load and Check a page with Jest", async () => {
    await page.goto("https://www.moneysupermarket.com/shop/car-insurance/questionset/your-car");
    expect(await page.title()).toBe("Question Set - Your Car");
  });