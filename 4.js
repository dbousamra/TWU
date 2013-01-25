function computeAutoFare(d, w, n) {
  var baseFare = 20 + 8 * (d-1) + 4 * w;
  if (n) { 
    return baseFare + (0.50 * baseFare); 
  }
  else { 
    return baseFare; 
  }
}

//--- SPECS -------------------------
describe("The auto fare calculator", function () {
    
  it("Given the kilometers travelled is 6, and the minutes spent waiting in traffic is 8, in day time.", function () {
    expect(computeAutoFare(6, 8, false)).toBe(92);
  });
    
  it("Given the kilometers travelled is 3.5, and the minutes spent waiting in traffic is 4, in night time.", function () {
    expect(computeAutoFare(3.5, 4, true)).toBe(84);
  });
});