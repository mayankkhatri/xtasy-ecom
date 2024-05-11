// Functionality

var prodDetail = document.getElementById("detail-dsc");
var prodSummary = document.getElementById("desc-summary");
const prodSummaryOld = document.getElementById("desc-summary").innerText;
var readMore = document.getElementById("read-more");
var readLess = document.getElementById("read-less");

readMore.addEventListener("click", function () {
  prodSummary.innerText = prodDetail.innerText;
  readLess.style.display = "block";
});

readLess.addEventListener("click", function () {
  prodSummary.innerText = prodSummaryOld;
  readLess.style.display = "none";
});

//! FLickity
// Initialize big carousel
var bigCarousel = document.querySelector(".big-carousel");
var bigFlkty = new Flickity(bigCarousel, {
  // Flickity options for big carousel
  contain: true,
  wrapAround: true,
  autoPlay: 3000,

  on: {
    change: function (index) {
      // Highlight corresponding item in small carousel
      smallFlkty.select(index);
    },
  },
});

// Initialize small carousel
var smallCarousel = document.querySelector(".small-carousel");
var smallFlkty = new Flickity(smallCarousel, {
  // Flickity options for small carousel
  cellAlign: "left",
  contain: true,
  wrapAround: false,
  prevNextButtons: false,
  pageDots: false,
});

// Synchronize big and small carousels
smallFlkty.on("select", function () {
  var index = smallFlkty.selectedIndex;
  bigFlkty.select(index);
});

// Click event on small carousel items
smallCarousel.addEventListener("click", function (event) {
  var cellElem = event.target.closest(".product-image");
  if (cellElem) {
    var index = smallFlkty.getCellElements().indexOf(cellElem);
    bigFlkty.select(index);
  }
});

// Manually highlight first item in small carousel on page load
var firstSmallCell = smallCarousel.querySelector(".product-image");
firstSmallCell.classList.add("highlight");

// Highlight current image in small carousel
bigFlkty.on("change", function (index) {
  var smallCells = smallFlkty.getCellElements();
  smallCells.forEach(function (cell, cellIndex) {
    cell.classList.toggle("highlight", cellIndex === index);
  });
});

$(document).ready(function () {
  $(".reviews-carousel").flickity({
    // cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: false, // Hide page dots
    prevNextButtons: true, // Show navigation arrows
  });
});

// Fancy Box

$(document).ready(function () {
  $(".product-image-big").each(function () {
    $(this)
      .find("img")
      .each(function () {
        $(this).wrap(
          '<a data-fancybox="product-gallery" href="' +
            $(this).attr("src") +
            '"></a>'
        );
      });
  });
});

$(document).ready(function () {
  $(".review-images").each(function () {
    $(this)
      .find("img")
      .each(function () {
        $(this).wrap(
          '<a data-fancybox="review-gallery" href="' +
            $(this).attr("src") +
            '"></a>'
        );
      });
  });
});

// Caruousel Tag swipe
const textArray = [
  "📈 42 sold in the last hour",
  "⚡ Only 14 units left",
  "🤯 1.3k+ Sold in last 30 days",
  "☝🏻 Price Increasing Soon",
  "🔥 Selling Fast",
];
let currentIndex = 0;
const carouselText = document.getElementById("carousel-text");

setInterval(() => {
  carouselText.classList.add("change");

  setTimeout(() => {
    carouselText.textContent = textArray[currentIndex];
    carouselText.classList.remove("change");
    currentIndex = (currentIndex + 1) % textArray.length;
  }, 100); // Delay for the wiping animation
}, 2700); // Interval for text change

// Side slasher

const textArrayy = [
  "📞 24/7 Support",
  "📦 Fast & Easy Returns",
  "⭐ 1Yr Product Warranty",
  "✅ Cash on delivery",
];
let currentIndexx = 0;
const carouselTextt = document.getElementById("carousel-textt");

setInterval(() => {
  currentIndexx = (currentIndexx + 1) % textArrayy.length;
  carouselTextt.textContent = textArrayy[currentIndexx];
}, 2500); // Change text every 3 seconds (adjust as needed)

// show slasher
const sideSlasher = document.getElementById("side-slasher");
const sideBuy = document.getElementById("buy-scroll");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;
  const scrollPosition = window.scrollY;

  const scrollPercentage =
    (scrollPosition / (scrollHeight - windowHeight)) * 100;

  if (scrollPercentage >= 1) {
    sideSlasher.style.display = "block";
  }

  if (scrollPercentage >= 25) {
    sideBuy.style.display = "block";
    sideSlasher.style.bottom = "66px";
  } else {
    sideBuy.style.display = "none";
    sideSlasher.style.bottom = "12px";
  }
});

// down scroll gif

const downGif = document.getElementById("down-gif");
let scrollTimer;

setTimeout(() => {
  if (!window.scrollY) {
    downGif.style.display = "block";
  }
}, 5000); // Show after 3 seconds if user hasn't scrolled

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimer);
  downGif.style.display = "none"; // Hide the down-gif on scroll
});

// Card Swiper

const buyButton = document.getElementById("buy");
const buySection = document.querySelector(".buy-product");
const cancelButton = document.getElementById("cancel");
const scrollBuyButton = document.getElementById("buy-scroll");

buyButton.addEventListener("click", function () {
  buySection.style.bottom = "0";
});

scrollBuyButton.addEventListener("click", function () {
  buySection.style.bottom = "0";
});

cancelButton.addEventListener("click", function () {
  buySection.style.bottom = "-100vh";
});

// Apply Coupon

document.addEventListener("DOMContentLoaded", function () {
  const applyNowBtn = document.getElementById("apply-now");
  const salePrice = document.querySelector(".sale-price");
  const couponDiv = document.getElementById("coupon-div");
  const offTag = document.getElementById("off");

  applyNowBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Change sale price and hide coupon div
    salePrice.innerText = "₹1,399";
    offTag.innerText = "55% OFF";
    couponDiv.style.display = "none";
    downGif.style.bottom = "10px";

    // Save coupon applied flag to local storage
    localStorage.setItem("couponApplied", "true");
  });

  // Check if coupon was previously applied
  const couponApplied = localStorage.getItem("couponApplied");
  if (couponApplied === "true") {
    salePrice.innerText = "₹1,399"; // Change sale price
    offTag.innerText = "55% OFF";
    couponDiv.style.display = "none"; // Hide coupon div
  }
});

// cancel confirm
const confirmCancel = document.getElementById("confirm-cancel");
const confirmDiv = document.querySelector(".order-confirmed");

confirmCancel.addEventListener("click", function () {
  confirmDiv.style.display = "none";
});

// No form order
const downSwipeCancel = document.getElementById("down-swipe");
downSwipeCancel.addEventListener("click", function () {
  buySection.style.bottom = "-100vh";
  confirmDiv.style.display = "block";
});

// Google Sheets Data Collect
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzeDPuGgg6vQhP0j1_aAMK4pvsffMP_etd2kvVTT_ulgiGOKqe9QwluWGEKadhOr-nThA/exec";

const form = document.forms["order-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      buySection.style.bottom = "-100vh";
      confirmDiv.style.display = "block";
    })

    .catch((error) => console.error("Error!", error.message));
});

// Reminder form submit

// Reminder click to visible
const reminderButton = document.getElementById("reminder");
const reminderSection = document.querySelector(".reminder-form-sec");

reminderButton.addEventListener("click", function () {
  reminderSection.style.display = "block";
});

const remForm = document.forms["reminder-form"];

remForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(remForm) })
    .then((response) => {
      reminderSection.style.display = "none";
    })

    .catch((error) => console.error("Error!", error.message));
});

// click submit to display none
const downreminder = document.getElementById("down-remind");
downreminder.addEventListener("click", function () {
  reminderSection.style.display = "none";
});

// Lazy Loading image
document.addEventListener("DOMContentLoaded", function () {
  var lazyLoadImages = document.querySelectorAll(".lazy-load");
  lazyLoadImages.forEach(function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
  });
});

// miscllaneous
const oline = document.getElementById("online");
oline.addEventListener("click", function () {
  alert("Only Delivery Not Available Right Now! Please Choose Pay on Delivery");
});

// Google Analytics

function trackButtonClick() {
  gtag("event", "button_click", {
    event_category: "Button Click",
    event_label: "Added to cart",
  });
}

// FB Pixel data 
  function trackAddToCart() {
    fbq('track', 'AddToCart');
  }

function trackPurchase() {
    fbq('track', 'Purchase', {
      value: 100, // Insert the value of the purchase here
      currency: 'USD' // Insert the currency code here
    });
  }
