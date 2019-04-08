describe("honest function", () => {
  function honest() {
    return true;
  }

  test(`an honest function should always tell the truth`, () => {
    expect(honest()).toBeTruthy();
  });
});
