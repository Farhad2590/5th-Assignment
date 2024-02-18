function addColor(className) {
    const classElements = document.getElementsByClassName(className);
    for (const element of classElements) {
        element.classList.add('bg-green-500');
    }
}
function getTextandString(inputId){
    const string = document.getElementById(inputId);
    const stringText = string.textContent;
    const stringConverted = parseInt(stringText);
    return stringConverted;
}
function setInputById(inputId , text){
    const nuumber = document.getElementById(inputId);
    nuumber.textContent = text;
}