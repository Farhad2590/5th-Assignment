// seat-id-selected
const allBtn = document.getElementsByClassName('seat');
let seat = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function () {
        if (seat >= 4) {
            alert('you have already selected 4 tickets')
        }
        else {
            seat ++;
            btn.classList.add('selected');
            btn.classList.add("bg-green-500");
            const number = getText("seat-id-selected")
            if (!isNaN(number)) {
                setInputElement('seat-id-selected', number + 1)

            }
            const seatNum = getText("available-seat")
            console.log(seatNum)
            if(!isNaN(seatNum)){
                setInputElement('available-seat', seatNum - 1)
            }
           
            

        }


        console.log('click')

    })

}
function getText(input) {
    const textEquale = document.getElementById(input);
    // const textEquale2 = textEquale.textContent;
    const text = parseInt(textEquale.textContent)
    return text;
}
function setInputElement(id, value) {
    const inputElement = document.getElementById(id);
    inputElement.innerText = value;




}
// function addColor(className) {
//     const classElements = document.getElementsByClassName(className);
//     for (const element of classElements) {
//         element.classList.add('bg-green-500');
//     }
// }




