// Handle link opening events
const linkHandlers = {
  whatsapp: () => window.open("https://api.whatsapp.com/send?phone=447522256422", "_blank", "popup=yes"),
  insta: () => window.open("https://www.instagram.com/gettingstartedinproperty/?fbclid=IwAR1Z6k4tz_dwfAxYh_zPTIXuNt_7Qc32BaBmYnzklK4LDb8j-8Ge5OBeEQ8", "_blank", "popup=yes"),
  fb: () => window.open("https://www.facebook.com/profile.php?id=61551096562233", "_blank", "popup=yes"),
  invest: () => window.open("https://www.gettingstartedinproperty.co.uk/invest", "popup=yes"),
};

const linkElements = document.querySelectorAll(".open-link"); // Select all elements with class "open-link"
linkElements.forEach((element) => {
  const linkType = element.dataset.linkType; // Get link type from data attribute
  element.addEventListener("click", () => linkHandlers[linkType]());
});

// Functions for deal reservation and callback request
function reserveDeal() {
  // Redirect to the Stripe checkout page
  window.location.href = "https://buy.stripe.com/8wM6ry343bX06aY28h";
}

function requestCallback() {
  // Get investor name and contact number
  let investorName;
  let contactNumber;
  try {
    investorName = prompt("Please enter your name:");
    contactNumber = prompt("Please enter your contact number:");
  } catch (error) {
    console.error(error);
    return;
  }

  // Check if both name and number are provided
  if (!investorName || !contactNumber) {
    alert("Please provide both name and number to request a call-back.");
    return;
  }

  // Generate email body with pre-populated fields
  const emailBody = `Name: ${investorName}
Contact Number: ${contactNumber}
Deal Link: ${window.location.href}`;

  // Encode email body and generate email URL
  const encodedBody = encodeURIComponent(emailBody);
  const callbackUrl = `mailto:sales@gettingstartedinproperty.co.uk?subject=Callback Request&body=${encodedBody}`;

  // Redirect to email client
  window.location.href = callbackUrl;
}

// Initialize Swiper (unchanged)
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

