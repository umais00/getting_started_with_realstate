// Helper function to open links
function openLink(url, options = "_blank", features = "popup=yes") {
  window.open(url, options, features);
}

// Individual link handler functions
function openWhatsapp() {
  openLink("https://api.whatsapp.com/send?phone=447522256422");
}

function openInsta() {
  openLink("https://www.instagram.com/gettingstartedinproperty/?fbclid=IwAR1Z6k4tz_dwfAxYh_zPTIXuNt_7Qc32BaBmYnzklK4LDb8j-8Ge5OBeEQ8");
}

function openFb() {
  openLink("https://www.facebook.com/profile.php?id=61551096562233");
}

function openInvest() {
  openLink("https://www.gettingstartedinproperty.co.uk/invest");
}

// Handle link opening events
const linkHandlers = {
  whatsapp: openWhatsapp,
  insta: openInsta,
  fb: openFb,
  invest: openInvest,
};

// Event delegation for better performance
document.addEventListener("click", (event) => {
  const element = event.target.closest(".open-link");
  if (element) {
    const linkType = element.dataset.linkType;
    if (linkHandlers[linkType]) {
      linkHandlers[linkType]();
    }
  }
});

// Function for deal reservation
function reserveDeal() {
  openLink("https://buy.stripe.com/8wM6ry343bX06aY28h");
}

// Function for callback request
function requestCallback() {
  const investorName = prompt("Please enter your name:");
  const contactNumber = prompt("Please enter your contact number:");

  if (!investorName || !contactNumber) {
    alert("Please provide both name and number to request a call-back.");
    return;
  }

  const emailBody = `Name: ${investorName}\nContact Number: ${contactNumber}\nDeal Link: ${window.location.href}`;
  const encodedBody = encodeURIComponent(emailBody);
  const callbackUrl = `mailto:sales@gettingstartedinproperty.co.uk?subject=Callback Request&body=${encodedBody}`;

  window.location.href = callbackUrl;
}

// Initialize Swiper only if necessary
if (document.querySelector(".mySwiper")) {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 700,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
  });
}
