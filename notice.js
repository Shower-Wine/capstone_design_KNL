let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["김해준 20171536", "나창원 20171538", "이경수 20191499"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {

    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    }
    else {
        setTimeout(resetTyping, 1000);
    }
}

dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);