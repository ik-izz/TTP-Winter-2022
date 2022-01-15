//Selects the container class and stores it in the variable conatainer
const container = document.querySelector('.container');
//Selects the rows and seats and stores it in the variable seats
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
//Selects the ID count and stores it in the variable count
const count = document.getElementById('count');
//Selects the ID total and stores it in the variable total
const total = document.getElementById('total');
//Selects the ID movie and stores it in the variable movieSelect
const movieSelect = document.getElementById('movie');

populateUI();

//initializes ticketPrice to the price of movie
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  //stores values in local storage
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    //updates selected seat
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    //updates total price
    total.innerText = selectedSeatsCount * ticketPrice;
  }
  
  // Get data from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }


const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });
 
// Seat click event
container.addEventListener('click', e => {
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')
    ) {
      e.target.classList.toggle('selected');
  
      updateSelectedCount();
    }
  });
  
  // Initial count and total set
  updateSelectedCount();
  