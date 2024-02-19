
function getTextandString(inputId) {
    const string = document.getElementById(inputId);
    const stringText = string.textContent;
    const stringConverted = parseInt(stringText);
    return stringConverted;
}
function setInputById(inputId, text) {
    const nuumber = document.getElementById(inputId);
    nuumber.textContent = text;
}

function getInputString(inputId) {
    const String = document.getElementById(inputId);
    const Price = String.innerText;
    const stringConverted = parseInt(Price);

    return stringConverted;
}
function setInnerString(id,value){
    document.getElementById(id).innerText = value;
}
function percentage(num, per)
{
  return (num/100)*per;
}