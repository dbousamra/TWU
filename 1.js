// helper function for output
function writeAnswer(answer) { 
    $('div.answer').append($('<div>').text(answer));
}

function kiteGame(numberOfKites) {
    var playedGame = _.range(1, 10).map(audienceReact)
    writeAnswer(playedGame.join("\n"))
}

function audienceReact(kite) {
    return (kite % 3 === 0 ? 'Peche! ' : '') + (kite % 5 === 0 ? 'Ipo kaate! ' : '') || kite;
}

kiteGame(100);

/*
Comments:

The testability of this solution is better than the other solution I provided, because the core logic in determining what people say, is decoupled from presentation. One can now test the logic on it's own. It also uses higher order functions and is purely immutable (another testing win yay!). Yes it's just a simple exercise, but may as well do it right.

Downside is it's not pure JS (though you could implement the HOF's pretty easily).

*/