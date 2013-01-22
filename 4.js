var validDenominations = [5, 10, 20, 50, 100, 500, 1000];

function countMoney(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    if (!_(validDenominations).contains(input[i])) {
      break;
    } else {
      sum += input[i];   
    }
  }
  return sum;
}

//--- SPECS -------------------------
describe("The Indian money counter", function () {

  it("Given input denominations 10, 20, 100, the calculated amount should be 130", function () {
    expect(countMoney([10, 20, 100])).toEqual(130);
  });

  it("Given input denominations 20, 50, 10, 20, 13, 500, the calculated amount should be 100", function () {
    expect(countMoney([20, 50, 10, 20, 13, 500])).toEqual(100);
  });
  
  it("Given input denominations 1, 10, 20 the calculated amount should be 0", function () {
    expect(countMoney([1, 10, 20])).toEqual(0);
  });
  
  it("Given input denominations 10, 20, 1, the calculated amount should be 30", function () {
    expect(countMoney([10, 20, 1])).toEqual(30);
  });
});