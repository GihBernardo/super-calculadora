function start() {
    configureButton();
}

let numberA;
let numberB;

function getInputValues() {
    numberA = Number(document.getElementById("input-number-A").value);
    numberB = Number(document.getElementById("input-number-B").value);
}

function configureButton() {
    const buttonClick = document.getElementById("button-calculate");
    buttonClick.addEventListener("click", process);
}

function sum() {
    const sumResult = document.getElementById("sum");
    const sumOp = numberA + numberB;

    sumResult.textContent = sumOp;
}

function subtractionA() {
    const subAResult = document.getElementById("subtraction-A");
    const subAOp = numberA - numberB;

    subAResult.textContent = subAOp;
}

function subtractionB() {
    const subBResult = document.getElementById("subtraction-B");
    const subBOp = numberB - numberA;

    subBResult.textContent = subBOp;
}

function divisionA() {
    const divAResult = document.getElementById("division-A");
    const divAOp = numberA / numberB;

    divAResult.textContent = divAOp.toFixed(2);
}

function divisionB() {
    const divBResult = document.getElementById("division-B");
    const divBOp = numberB / numberA;

    divBResult.textContent = divBOp.toFixed(2);
}

function multiplication() {
    const multResult = document.getElementById("multiplication");
    const multOp = numberA * numberB;

    multResult.textContent = multOp;
}

function powerA() {
    const powAResult = document.getElementById("power-A");
    const powAOp = Math.pow(numberA, numberB);

    powAResult.textContent = powAOp.toFixed(2);
}

function powerB() {
    const powBResult = document.getElementById("power-B");
    const powBOp = Math.pow(numberB, numberA);

    powBResult.textContent = powBOp.toFixed(2);
}

function squareRootA() {
    const squareRootAResult = document.getElementById("square-root-A");
    const squareRootAOp = Math.sqrt(numberA);

    squareRootAResult.textContent = squareRootAOp.toFixed(2);
}

function squareRootB() {
    const squareRootBResult = document.getElementById("square-root-B");
    const squareRootBOp = Math.sqrt(numberB);

    squareRootBResult.textContent = squareRootBOp.toFixed(2);
}

function factorialA() {
    const facAResult = document.getElementById("factorial-A");
    let facAOp = 1;

    for (var i = 1; i <= numberA; i++) {
        facAOp *= i;
    }

    facAResult.textContent = facAOp;
}

function factorialB() {
    const facBResult = document.getElementById("factorial-B");
    let facBOp = 1;

    for (var i = 1; i <= numberB; i++) {
        facBOp *= i;
    }

    facBResult.textContent = facBOp;
}

function percentageA() {
    const perAResult = document.getElementById("percentage-A");
    const perAOp = (numberB / numberA) * 100;

    perAResult.textContent = perAOp.toFixed(2) + "%";
}

function percentageB() {
    const perBResult = document.getElementById("percentage-B");
    const perBOp = (numberA / numberB) * 100;

    perBResult.textContent = perBOp.toFixed(2) + "%";
}

function average() {
    const avgResult = document.getElementById("average");
    const avgOp = (numberA + numberB) / 2;

    avgResult.textContent = avgOp;
}

function process() {
    getInputValues();
    sum();
    subtractionA();
    subtractionB();
    divisionA();
    divisionB();
    multiplication();
    powerA();
    powerB();
    squareRootA();
    squareRootB();
    factorialA();
    factorialB();
    percentageA();
    percentageB();
    average();
}

start();
