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

const btplus = document.createElement("button");
const btminus = document.createElement("button");
const bttimes = document.createElement("button");
const btdiv = document.createElement("button");

btplus.textContent = "+";
btminus.textContent = "-";
bttimes.textContent = "x";
btdiv.textContent = "/";

const btnholder = document.querySelector("#buttons");

btnholder.appendChild(btplus);
btnholder.appendChild(btminus);
btnholder.appendChild(bttimes);
btnholder.appendChild(btdiv);

