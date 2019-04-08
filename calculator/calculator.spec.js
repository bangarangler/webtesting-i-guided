const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  describe("calculator.add()", () => {
    describe("add()", () => {
      // test case
      it("should add sum of 2 number", () => {
        // assertions
        expect(add(2, 2)).toBe(4);
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
      });

      // should return the passed value, if only one value provided
      it(`should return the passed value, if only one value provided`, () => {
        expect(add(1)).toBe(1);
        expect(add(99)).toBe(99);
      });

      // should calculate the sum of any number of arguments sepearated by
      // comma
      it(`should add sum of any number or args seperated by comma`, () => {
        expect(add(1, 2, 3)).toBe(6);
        expect(add(1, 2, 3, 4)).toBe(10);
      });

      // should handle an array of numbers
      it(`should handle an array of numbers`, () => {
        expect(add([1, 2, 3])).toBe(6);
        expect(add([1, 2, 3, 4])).toBe(10);
      });

      it.todo(`passing strings`);
      it.todo(`not passing values`);
      it.todo(`passing null, undefined, obj, arr, strings, NaN`);
    });
  });

});

// can add 2 and 2
//console.log("the sum is: ", sum);

// test case
//test(`adds 2 and 2`, function() {
//// Arrange
//const expected = 4;
//const value1 = 2;
//const value2 = 2;

////Act
//const sum = add(value1, value2);

//// Assert
//expect(sum).toEqual(expected)
//})
