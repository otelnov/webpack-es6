export default ngModule => {
  describe(`test`, () => {
    beforeEach(window.module(ngModule.name));

    it(`test should false`, () => {
      expect(true).to.be.true;
    });
  });
}
