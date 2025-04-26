const add = function() {
    return arguments[0] + arguments[1];
}

const sub = function() {
    return arguments[0] - arguments[1];
}

const mult = function() {
    return arguments[0] * arguments[1];
}

const div = function() {
    return arguments[0] / arguments[1];
}

const equals = function() {
    const a1 = arguments[0];
    const a2 = arguments[2];
    const op = arguments[1];

    if (op == "+") {
        return add(a1, a2);
    } else if (op == "-") {
        return sub(a1, a2);
    } else if (op == "x") {
        return mult(a1, a2);
    } else if (op == "/") {
        return div(a1, a2);
    }
}

const inputField = document.createElement("h1");
const inputHolder = document.querySelector("#top");




inputHolder.appendChild(inputField);

const btplus = document.createElement("button");
const btminus = document.createElement("button");
const bttimes = document.createElement("button");
const btdiv = document.createElement("button");
const bteq = document.createElement("button");

btplus.textContent = "+";
btminus.textContent = "-";
bttimes.textContent = "x";
btdiv.textContent = "/";
bteq.textContent = "=";

const opClick = function(e) {
    inputField.textContent += (e.target.textContent)
}

btplus.addEventListener("click", opClick);
btminus.addEventListener("click", opClick);
bttimes.addEventListener("click", opClick);
btdiv.addEventListener("click", opClick);


const btnholder = document.querySelector("#buttons");

btnholder.appendChild(btplus);
btnholder.appendChild(btminus);
btnholder.appendChild(bttimes);
btnholder.appendChild(btdiv);
btnholder.appendChild(bteq);



const buttonClick = function(e) {
    inputField.textContent += (e.target.textContent)
}





const createNumButton = function() {
    const num = arguments[0];
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.classList.add("numButton")
    btn.addEventListener("click", buttonClick);
    return btn;
}

const addNumButtons = function() {
    const numButtonHolder = document.querySelector("#numButtons");
    const row1 = document.createElement("div");

    row1.style.display = "flex";
    row1.style.flexDirection = "row";
    row1.classList.add("rowNumButtons");

    for (let i = 0; i < 5; i++) {
        row1.appendChild(createNumButton(i));
    }

    const row2 = document.createElement("div");

    row2.style.display = "flex";
    row2.style.flexDirection = "row";
    row2.classList.add("rowNumButtons");

    for (let i = 5; i < 10; i++) {
        row2.appendChild(createNumButton(i));
    }
    numButtonHolder.appendChild(row1);
    numButtonHolder.appendChild(row2);
}

addNumButtons();


