const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => calculate("add"));
document.getElementById("sub").addEventListener("click", () => calculate("sub"));
document.getElementById("mul").addEventListener("click", () => calculate("mul"));
document.getElementById("div").addEventListener("click", () => calculate("div"));
document.getElementById("clear").addEventListener("click", clearAll);

function calculate(type) {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let ans;

    switch (type) {
        case "add": ans = a + b; break;
        case "sub": ans = a - b; break;
        case "mul": ans = a * b; break;
        case "div": ans = b === 0 ? "Cannot divide by zero" : a / b; break;
    }

    result.textContent = "Result: " + ans;
}

function clearAll() {
    num1.value = "";
    num2.value = "";
    result.textContent = "Result will appear here";
}
