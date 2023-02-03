// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  //use the id in the containing time-block as a key to save the user input in  local storage. 
  
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//  THIS IS FROM THE STARTER CODE
// $(function () { 

let todaysDate = dayjs(); 
$('#currentDay').text(todaysDate.format('dddd, MMMM D')); //putting todays date on the screen

let currentTime = dayjs().format();
// console.log(currentTime);

// let possibleTimes=[9, 10, 11, 12, 1, 2, 3, 4, 5] 


let hourOfDay=dayjs().get('hour');
console.log(hourOfDay);


//if statement w/ possible times and hour of day
//connect possible times w/ 


newDate = dayjs().hour(12);
console.log(newDate);
//12 is a placeholder and we need it to be i

// let textboxInput=$('.description').val;


$('.saveBtn').on('click', function () {
  // get nearby values
  var value = $(this).siblings('.description').val();
  var key = $(this).parent().attr('id');

  // save in localStorage
  localStorage.setItem(key, value);

});
let hour10value= localStorage.getItem('hour-10');
//   make variable

$('#hour-10 .description').val(hour10value);

//hour-10 parent, description child
//getelementbyid / queryselector
//we're only grabbing textarea

//.val is a function, receives value of what's in local storage hr 10

console.log(localStorage.getItem('hour-10'));

//saving savebtn class