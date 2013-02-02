// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function kiteGame(numberOfKites) {
    var playedGame = _.range(1, numberOfKites + 1).map(audienceReact)
    writeAnswer(playedGame.join("\n"))
}

function audienceReact(kite) {
    return (kite % 3 === 0 ? 'Peche! ' : '') + (kite % 5 === 0 ? 'Ipo kaate! ' : '') || kite.toString();
}

kiteGame(100);

//--- SPECS -------------------------
describe("The kite game simulation", function () {
    
  it("Given the 5th kite, the audience should shout Ipo Kaate!", function () {
    expect(audienceReact(5)).toBe("Ipo kaate! ");
  });
    
  it("Given the 15th kite, the audience should shout Peche! Ipo Kaate!", function () {
    expect(audienceReact(15)).toBe("Peche! Ipo kaate! ");
  });
    
  it("Given the 3rd kite, the audience should shout Peche! Ipo Kaate!", function () {
    expect(audienceReact(3)).toBe("Peche! ");
  });
    
  it("Given the 7th kite, the audience should shout 7", function () {
    expect(audienceReact(7)).toBe("7");
  });
});