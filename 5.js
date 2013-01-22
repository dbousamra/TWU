function linesReverser(lines) {
  var localLines = _(lines).map(function (arr) {
    return arr.slice();
  }); // defensively copy nested array. Have to use map because it's nested, and lines.slice() would be a shallow copy.
  localLines[1].reverse();
  return _.flatten(localLines);
}

function rewriteAd(lines) {
  var reversedLines = linesReverser(lines);
  return {
    words: reversedLines,
    count: reversedLines.length
  }
}

//--- SPECS -------------------------
describe("The newspaper restructurer", function () {
  var input = [
    ["zara", "dhyaan", "dein"],
    ["mazarat", "chahenge"],
    ["attention", "please"]
  ];
  it("The linesReverser function should given a nested array of lines, reverse the second line, and flatten the nested arrays.", function () {
    var output = ["zara", "dhyaan", "dein", "chahenge", "mazarat", "attention", "please"];
    expect(linesReverser(input)).toEqual(output);
  });

  it("The rewriteAd function should return an object of linesReversed and the line count", function () {
    var output2 = {
      words: ["zara", "dhyaan", "dein", "chahenge", "mazarat", "attention", "please"],
      count: 7
    }
    expect(rewriteAd(input)).toEqual(output2);
  });
});