/*=========================================
BREW HAVEN JAVASCRIPT
=========================================*/

// =============================
// SEARCH BOX
// =============================

const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("searchBox");

if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function (e) {

        e.preventDefault();

        searchBox.classList.toggle("active");

    });

}

// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =============================
// DARK MODE
// =============================

const darkMode = document.getElementById("darkMode");

if (darkMode) {

    darkMode.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            darkMode.innerHTML = "☀️";

        } else {

            darkMode.innerHTML = "🌙";

        }

    });

}

// =============================
// ACTIVE NAVIGATION
// =============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// =============================
// ORDER BUTTON
// =============================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        window.location.href = "menu.html";

    });

});
// ===============================
// SEARCH BOX
// ===============================

const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("searchBox");

if(searchBtn){

    searchBtn.onclick = function(e){

        e.preventDefault();

        searchBox.classList.toggle("show-search");

    };

}

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

if(topBtn){

    topBtn.onclick = function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

}
// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkMode");

if(darkBtn){

darkBtn.onclick = function(){

document.body.classList.toggle("dark");

};

}
// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");

if(togglePassword){

togglePassword.onclick = function(){

if(password.type==="password"){

password.type="text";

togglePassword.classList.remove("fa-eye");

togglePassword.classList.add("fa-eye-slash");

}

else{

password.type="password";

togglePassword.classList.remove("fa-eye-slash");

togglePassword.classList.add("fa-eye");

}

};

}
// ===============================
// ACTIVE NAVIGATION
// ===============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

const href = link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

});
// ===============================
// ADD TO CART ANIMATION
// ===============================

const cartButtons = document.querySelectorAll(".btn");

cartButtons.forEach(button=>{

if(button.innerText.includes("Cart")){

button.addEventListener("click",function(){

button.innerHTML="✓ Added";

button.style.background="#28a745";

setTimeout(()=>{

button.innerHTML="Add To Cart";

button.style.background="";

},1500);

});

}

});
//===============================
// RESERVATION FORM
//===============================

const reservationForm = document.getElementById("reservationForm");

if(reservationForm){

reservationForm.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank you! Your reservation has been received. We look forward to serving you at Brew Haven!");

reservationForm.reset();

});

}