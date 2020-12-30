include('alert.js')

function Plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('Out').innerHTML = result;
}

function Minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('Out').innerHTML = result;
}

function Multiply() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('Out').innerHTML = result;
}

function Chase() {
    var num1, num2, result, out_text;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    out_text = "Result: "

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.getElementById('Out').innerHTML = result;

}

function ClearValue() {
    var num1, num2, reset, reset_out;
    reset = null;
    num1 = document.getElementById('n1').value = reset;

    num2 = document.getElementById('n2').value = reset;
    document.getElementById('Out').innerHTML = reset;
}