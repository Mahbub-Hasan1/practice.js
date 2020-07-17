
function giveYouAreSonka(sonka){
    var sam = 0;
    for(i = 0; i < sonka.length; i++){
        var eliment = sonka[i];
        sam = sam + eliment;
    }
    return sam;
}

var result = giveYouAreSonka([40, 45, 30, 20, 22, 23, 23]);
console.log("mot =", result);
