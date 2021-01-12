let audio = $("audio");
let div = $(".key");

$(document).keyup(function (event) {
    switch (event.which) {
        case 65:
            audio[0].play();
            time(0);
            break;

        case 83:
            audio[1].play();
            time(1);
            break;

        case 68:
            audio[2].play();
            time(2);
            break;

        case 70:
            audio[3].play();
            time(3);
            break;

        case 71:
            audio[4].play();
            time(4);
            break;

        case 72:
            audio[5].play();
            time(5);
            break;

        case 74:
            audio[6].play();
            time(6);
            break;

        case 75:
            audio[7].play();
            time(7);
            break;

        case 76:
            audio[8].play();
            time(8);
            break;
    }
});

function time(x) {
    div[x].classList.add("playing");
    setTimeout(function () {
        div[x].classList.remove("playing");
    }, 200);
}