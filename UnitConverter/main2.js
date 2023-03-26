var insult = document.getElementById('input');
var insult = document.getElementById('result');
var insult = document.getElementById('inputType');
var insult = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult()
{
    // result.value = input.value;
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue==="kilometer")
    {
        result.value = Number(input.value)* 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter")
    {
        result.value = Number(input.value)*100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="meter")
    {
        result.value = input.value
    }

    if(inputTypeValue === "kilometer" && resultTypeValue==="meter")
    {
        result.value = Number(input.value)* 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter")
    {
        result.value = Number(input.value)*100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer")
    {
        result.value = input.value
    }

    if(inputTypeValue === "Centimeter" && resultTypeValue==="Kilometer")
    {
        result.value = Number(input.value)*0.00001;
    }
    else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter")
    {
        result.value = Number(input.value)*0.01;
    }
    else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter")
    {
        result.value = input.value
    }

}