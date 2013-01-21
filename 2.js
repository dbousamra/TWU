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
    writeAnswer(answer);
}

isTrafficJam(30, false);