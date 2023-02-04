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
  // block by comparing the id to the current hour. 
  
  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  
  //How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//  THIS IS FROM THE STARTER CODE
// $(function () { 

//


let todaysDate = dayjs(); 
$('#currentDay').text(todaysDate.format('dddd, MMMM D')); 
//uses dayjs to give us the date. attached it to the #currentday id and made it into text. used the date format from the sample gif

let hourOfDay=dayjs().get('hour');
//this gives us the current hour of the day in 0-23 format. ie 12:00 am=0,   1:00 am=1, etc
// console.log(hourOfDay);

let currentTime = dayjs().format();
//gives us exact time and date right now

//puts event listener on save button
$('.saveBtn').on('click', function () {
  var value = $(this).siblings('.description').val();
  var key = $(this).parent().attr('id');

  // saves the key and value into local storage
  localStorage.setItem(key, value);

});
  //"this" sets it up so that whichever save button is clicked will have an event and its info
  //We needed to target the textarea element and used .siblings(.description) to target the description class and the .val method to target the value of that textarea


//each one of these variables get the "value" from each "key" in local storage
let hour9value= localStorage.getItem('hour-9')
let hour10value= localStorage.getItem('hour-10');
let hour11value= localStorage.getItem('hour-11')
let hour12value= localStorage.getItem('hour-12')
let hour1value= localStorage.getItem('hour-1')
let hour2value= localStorage.getItem('hour-2')
let hour3value= localStorage.getItem('hour-3')
let hour4value= localStorage.getItem('hour-4')
let hour5value= localStorage.getItem('hour-5')

//grabs the id from the corresponding div (this was the unique attribute) and the .description class (to get the textbox) and places the "value" of the key/value pair into the textbox on the screen.
$('#hour-9 .description').val(hour9value);
// console.log($('#hour-9 .description').val(hour9value))
$('#hour-10 .description').val(hour10value);
$('#hour-11 .description').val(hour11value);
$('#hour-12 .description').val(hour12value);
$('#hour-1 .description').val(hour1value);
$('#hour-2 .description').val(hour2value);
$('#hour-3 .description').val(hour3value);
$('#hour-4 .description').val(hour4value);
$('#hour-5 .description').val(hour5value);


//array of all html textboxes, targeted via the description class
let textareaArray=$(".description");

//for loop that targets of the textarea boxes
//added an id and each textarea to used the number of the id attribute to compare to hourOfDay to complete our logic. depending on whether the array id was greater than, less than, or equal to the hourOfDay, we applied the corresponding class to the textarea in order to color code the calendar

for (let i = 0; i < textareaArray.length; i++) {
 
  if ($(textareaArray[i]).attr('id')==hourOfDay) {
    $(textareaArray[i]).addClass("present");
  }
  if ($(textareaArray[i]).attr('id')>hourOfDay) {
    $(textareaArray[i]).addClass("future");
  }
  if ($(textareaArray[i]).attr('id')<hourOfDay) {
    $(textareaArray[i]).addClass("past");
  }
  
}
console.log($(textareaArray[0]))

