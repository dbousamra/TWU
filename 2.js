// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function isTrafficJam(numberOfAutoRickshaws, isAfterEightPm) {
    var answer = false;
    if (!isAfterEightPm) {
        if (numberOfAutoRickshaws > 40) { 
          answer = true; 
        }
    }
    return answer;
}

writeAnswer(isTrafficJam(30, false));

//--- SPECS -------------------------
describe("The auto fare calculator", function () {
    
  it("Given 30 rickshaws on road, at 3pm, isTrafficJam should return false", function () {
    expect(isTrafficJam(30, false)).toBe(false);
  });
    
  it("Given 41 rickshaws on road, at 3pm, isTrafficJam should return true", function () {
    expect(isTrafficJam(41, false)).toBe(true);
  });
  
  it("Given 60 rickshaws on road, at 10pm, isTrafficJam should return false", function () {
    expect(isTrafficJam(60, true)).toBe(false);
  });
});