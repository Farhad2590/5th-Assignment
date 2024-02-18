const seats = document.getElementsByClassName('seat');
let selectedSeats = 0;

for (const seat of seats) {
    seat.addEventListener("click", function (event) {
        if (selectedSeats >= 4) {
            console.log("You have already selected 4 tickets");
        } else {
            selectedSeats++;
            seat.classList.add('selected');
            seat.classList.add('bg-green-500');
            console.log("Button type diyechi");
            console.log("Total selected seats: " + selectedSeats);

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
            const seatClass = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[5].childNodes[7].innerText;

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
            console.log(Seatcontainer);
        }
    });
}
