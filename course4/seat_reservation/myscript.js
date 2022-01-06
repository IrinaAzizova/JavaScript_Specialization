
/*__________ Creating the seats _________*/

function makeRows(sectionLength, rowLength, placement) {
    const rows = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'
    ];
    let html = '';
    let counter = 1;

    rows.forEach(row => {
        switch(placement) {
            case "left":html += `<div class="label">${row}</div>`; break;
            case 'right': counter += (rowLength - sectionLength); break;
            default: counter += ((rowLength - sectionLength) / 2);
        }

        for (let i=0; i<(sectionLength); i++) {
            html += `<div class="a" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch(placement) {
            case 'left': counter += (rowLength - sectionLength); break;
            case 'right': html += `<div class="label">${row}</div>`; break;
            default: counter += ((rowLength - sectionLength) / 2);
        }
    });   
    document.getElementById(placement).innerHTML = html;
};

makeRows(3, 15, 'left');
makeRows(3, 15, 'right');
makeRows(9, 15, 'middle');





/*_________ database imitation __________*/  

var reservedSeats = {
	record1: {
		seat: "b19",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record2: {
		seat: "b20",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record3: {
		seat: "b21",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record4: {
		seat: "b22",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	}
};





/*_________ Making the reserved seats __________*/

(function(){
    'use strict';

    for (const key in reservedSeats) {
        if ( reservedSeats.hasOwnProperty(key)) {
            const obj = reservedSeats[key].seat;
            const resSeat = document.getElementById(`${obj}`);
            resSeat.className = 'r';
            resSeat.innerHTML = 'R';
        }
    }
}());





/*__________ Selecting seats __________*/

(function(){
    'use strict';

    const selectedSeats = []; //array for selecting seats
    const seats = document.querySelectorAll('.a')

    seats.forEach( seat => {
        seat.addEventListener('click', () => {            
            switch (seat.className) {
                case 'a': 
                    selectedSeats.push(seat.id);
                    seat.className = 's';
                    break;
                case 's': 
                    const seatArrayIndex = selectedSeats.indexOf(seat.id);
                    selectedSeats.splice(seatArrayIndex, 1);
                    seat.className = 'a';
                    break;
            }   
            console.log(selectedSeats);     
        });  
          
    });
}())

