//export default ngModule => {
//  describe(`test`, () => {
//    beforeEach(window.module(ngModule.name));
//
//    it(`test should false`, () => {
//      expect(true).to.be.true;
//    });
//  });
//}


describe("A test suite", function() {
  beforeEach(function() { });
  afterEach(function() { });

  it('should fail', function() {
    expect(true).to.be.false;
  });

  it('should success', function() {
    expect(true).to.be.true;
  });
});
