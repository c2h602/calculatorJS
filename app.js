

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multBtn = document.getElementById("mult");
const divBtn = document.getElementById("div");
let action = "";

plusBtn.onclick = function ()
{
    action = "+";
}

minusBtn.onclick = function ()
{
    action = "-";
}

multBtn.onclick = function ()
{
    action = "*";
}

divBtn.onclick = function ()
{
    action = "/";
}

function printResult(result)
{
    if (result < 0)
    {
        resultElement.style.color = "red";
    }
    else 
    {
        resultElement.style.color = "green";
    }

    resultElement.textContent = result;
}

function calculateResultWithAction(inp1, inp2, actionSymbol)
{
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    if (actionSymbol == "+")
    {
       return num1 + num2;
    }

    if (actionSymbol == "-")
    {
       return num1 - num2;
    }

    if (actionSymbol == "*")
    {
       return num1 * num2;
    }

    if (actionSymbol == "/")
    {
       return num1 / num2;
    }
}

submitBtn.onclick = function ()
{
    const result = calculateResultWithAction(input1, input2, action);
    printResult(result);
}
