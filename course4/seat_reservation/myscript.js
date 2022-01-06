
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
    
    resSeats();
}());

function resSeats() {
    for (const key in reservedSeats) {
        if ( reservedSeats.hasOwnProperty(key)) {
            const obj = reservedSeats[key].seat;
            const resSeat = document.getElementById(`${obj}`);
            resSeat.className = 'r';
            resSeat.innerHTML = 'R';
        }
    }
}





/*__________ Selecting seats __________*/

(function(){
    'use strict';

    let selectedSeats = []; //array for selecting seats
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
            document.querySelector('#selectedseats').innerHTML = `You have selected ${selectedSeats.length} seats <br> Click "Reserve Seats" button`; 
            console.log(selectedSeats);     
        });  
          
    });


    /*________ Open and Close Form Event Handlers __________*/

    document.querySelector('#reserve').addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('#resform').style.display = "block";
        manageConfirmForm()
    });
    document.querySelector('#cancel').addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('#resform').style.display = "none";
    });


    function manageConfirmForm() {
        let selectedstring = selectedSeats.toString();
        selectedstring = selectedstring.replace(/,/g, ', ');
        selectedstring = selectedstring.replace(/,(?=[^,]*$)/, ' and');
        if (selectedSeats.length > 0) {
            document.querySelector('#confirmers').style.display = "block";
            if (selectedSeats.length === 1) {
                document.querySelector('#selectedseats').innerHTML = `You have selected ${selectedSeats[0]} seat`;
            }
            else {
                document.querySelector('#selectedseats').innerHTML = `You have selected ${selectedstring} seats`;
            }
            
        }
        else {
            document.querySelector('#selectedseats').innerHTML = 'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.'
            document.querySelector('#confirmers').style.display = "none";
            document.querySelector('#error').addEventListener('click', event => {
                event.preventDefault();
                document.querySelector('#resform').style.display = "none";                
            })
        }
    }

    manageConfirmForm()




    /*__________ Reservation Form __________*/

    document.querySelector('#confirmers').addEventListener('submit', event => {
        event.preventDefault();
        const formData = event.target.elements;
        let firstName = formData[0].value;
        let lastName = formData[1].value;
        processReservation(firstName, lastName, selectedSeats);
        resSeats();
        selectedSeats = [];
    });
    
    function processReservation(fname, lname, seats) {
        seats.forEach( eachSeat => {
            let reservationNumber =  `record${Object.keys(reservedSeats).length + 1}`;
            reservedSeats[reservationNumber] = {
                seat: eachSeat,
                owner: {
                    fname: fname,
                    lname: lname,
                }
            }
            console.log(reservedSeats);
            document.querySelector('#confirmers').style.display = "none";
            document.querySelector('#selectedseats').innerHTML = 'Seats Reserved';
        }); 
    } 
}());






