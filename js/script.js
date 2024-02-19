const seats = document.getElementsByClassName('seat');
let selectedSeats = 0;


for (const seat of seats) {
    seat.addEventListener("pointerdown", function (event) {
        if (selectedSeats >= 4) {
            alert("You have already selected 4 tickets");
        } else {

            if (!seat.classList.contains('selected')) {
                selectedSeats++;
                seat.classList.add('selected');
                seat.classList.add('bg-green-500');


                const text = getTextandString('seat-selected');
                if (!isNaN(text)) {
                    setInputById('seat-selected', text + 1);
                }


                const text1 = getTextandString('seat-left');
                if (!isNaN(text1)) {
                    setInputById('seat-left', text1 - 1);
                }


                const seatName = event.target.innerText;
                const seatPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5].childNodes[3].innerText;
                const seatClass = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerText;
                const prices = parseInt(seatPrice);


                const currentPrice = document.getElementById('prices-ticket');
                const currentString = currentPrice.innerText;
                const currentPriceConverted = parseInt(currentString);
                const newPrice = prices + currentPriceConverted;
                currentPrice.innerText = newPrice;


                const Seatcontainer = document.getElementById('seat-container');
                const li = document.createElement("li");
                const p = document.createElement("p");
                p.innerText = seatName;
                const p2 = document.createElement("p");
                p2.innerText = seatClass;
                const p3 = document.createElement("p");
                p3.innerText = seatPrice;
                li.classList.add('flex');
                li.classList.add('justify-between');
                li.appendChild(p);
                li.appendChild(p2);
                li.appendChild(p3);
                Seatcontainer.appendChild(li);


                const grandPrice = getInputString('grand-total')
                const newPrice2 = prices + grandPrice;
                grandPrice.innerText = newPrice2;
                setInnerString('grand-total', newPrice2);


                if (selectedSeats >= 1) {
                    document.getElementById('submit-btn').disabled = false;
                    document.getElementById('btn-apply').disabled = false;
                }
            }
        }
    });
}


document.getElementById('btn-apply').addEventListener('click', function () {
    const couponField = document.getElementById('coupon-code');
    const coupon = couponField.value;

    if (coupon == 'NEW15') {

        const total = document.getElementById('prices-ticket').innerText;
        const payPrice = parseFloat(total);
        const discount = percentage(payPrice, 15);


        const afterDiscount = payPrice - discount;
        const payPlease = document.getElementById('grand-total');
        payPlease.innerText = afterDiscount;

        const input_field = document.getElementById('input-field');
        input_field.classList.add('hidden')
    }
    else if (coupon == 'Couple 20') {
        console.log("Price Will be updated");
        const total = document.getElementById('prices-ticket').innerText;
        const payPrice = parseFloat(total);
        const discount = percentage(payPrice, 20);
        const afterDiscount = payPrice - discount;
        const payPlease = document.getElementById('grand-total');
        payPlease.innerText = afterDiscount;
        const input_field = document.getElementById('input-field');
        input_field.classList.add('hidden')
    }
    else {
        alert("Wrong Coupon");
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const section = document.getElementsByClassName('sections');
    modal.classList.remove('hidden');
    for (const select of section) {
        select.classList.add('hidden');
    }
})