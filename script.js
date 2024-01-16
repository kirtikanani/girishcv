console.log('Add your name in {{name}}');
console.log('Add the current date in {{date}}');
console.log('Add a dialog that triggers when the visitor clicks Contact information');

// current dates

var d = new Date();
var day = d.getDate();
var fullDay = ("0" + day).slice(-2);

var month = d.getMonth() + 1;
var fullMonth = ("0" + month).slice(-2);

var year = d.getFullYear();
var shortYear = d.getFullYear().toString().substr(-2);

var date1 = fullMonth + "/" + fullDay + "/" + year;
var d = document.querySelector("#DDMMYYYY");
d.innerHTML = date1;

var locale = "en-us";
var dd = new Date();
var shortMonth = dd.toLocaleString(locale, { month: "short" });
var longMonth = dd.toLocaleString(locale, { month: "long" });


// name show using js

let h1 = document.querySelector(".name_header");

let x = document.createElement("span");
x.textContent = "Girish K";



h1.replaceWith(x);


// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Open modal
function openModal() {
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}