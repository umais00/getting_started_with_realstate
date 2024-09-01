// Property Data - Replace this with dynamic data from an API or other source
const propertyData = [
  {
    id: 1,
    location: "Bristol BS7",
    details: "4 beds · 2 bath · Rent: £2,500",
  },
  {
    id: 2,
    location: "London E7",
    details: "7 beds · 3 baths · Rent: £6,249",
  },
  {
    id: 3,
    location: "Raven Row, London E1",
    details: "5 beds · 2 baths · Rent: £6,000",
  },
  {
    id: 4,
    location: "Birmingham, B18",
    details: "5 beds · 3 baths · Rent: £1,800",
  },
  {
    id: 5,
    location: "High Wycombe HP12",
    details: "4 beds · 1 bath · Rent: £2,400",
  },
  {
    id: 6,
    location: "Lansdowne Road, Leicester LE2",
    details: "5 beds · 2 baths · Rent: £1,400",
  },
  {
    id: 7,
    location: "Birmingham B14",
    details: "3 beds · 1 bath · Rent: £1,500",
  },
  {
    id: 8,
    location: "Berkshire SL2",
    details: "6 beds · 3 baths · Rent: £6,500",
  },
  {
    id: 9,
    location: "Berkshire SL1",
    details: "6 beds · 6 baths · Rent: £7,000",
  },

  {
    id: 10,
    location: "Luton LU2",
    details: "5 beds · 4 baths · Rent: £3,100",
  }



];


// Function to create a list item for each property
function createPropertyListItem(property) {
  const li = document.createElement("li");
  li.classList.add("card", `property-${property.id}`);
  li.id = `property-${property.id}`;
  li.innerHTML = `<span>${property.location} - ${property.details}</span>`;
  return li;
}

// Function to render the property list
function renderPropertyList() {
  const propertyListContainer = document.getElementById("propertyList");

  // Clear existing list before rendering
  propertyListContainer.innerHTML = "";

  propertyData.forEach((property) => {
    const listItem = createPropertyListItem(property);
    propertyListContainer.appendChild(listItem);

    // Add event listener for click events
    listItem.addEventListener("click", () => {
      const propertyId = listItem.id.split("-")[1];
      window.open(`property${propertyId}.html`, "_blank");
    });
  });
}

// Call the function to render the property list when the page loads
window.onload = () => {
  // Reverse the propertyData array
  propertyData.reverse();
  renderPropertyList();
};
// Event listeners for social media links
document.getElementById("whatsapp").addEventListener("click", () => {
  window.open(
    "https://api.whatsapp.com/send?phone=447522256422",
    "_blank",
    "popup=yes"
  );
});

document.getElementById("insta").addEventListener("click", () => {
  window.open(
    "https://www.instagram.com/gettingstartedinproperty/?fbclid=IwAR1Z6k4tz_dwfAxYh_zPTIXuNt_7Qc32BaBmYnzklK4LDb8j-8Ge5OBeEQ8",
    "_blank",
    "popup=yes"
  );
});

document.getElementById("fb").addEventListener("click", () => {
  window.open(
    "https://www.facebook.com/profile.php?id=61551096562233",
    "_blank",
    "popup=yes"
  );
});

// FILTER OPTION
let para = document.getElementById("paraInDiv");
let filterOptions = document.getElementById("filterOptions");

document.getElementById("filter").addEventListener("click", () => {
  if (window.getComputedStyle(filterOptions).display === "none") {
    // If filterOptions is hidden, show it
    filterOptions.style.display = "block";
    filterOptions.style.transform = "translateX(0)";
    para.style.display = "none";
    para.style.transform = "translateX(-200px)";
  } else {
    setTimeout(() => {
      // If filterOptions is visible, hide it
      filterOptions.style.display = "none";
      para.style.display = "block";
    }, 700);
    setTimeout(() => {
      para.style.transform = "translateX(0)";
    }, 800);

    filterOptions.style.transform = "translateX(100px)";
  }
});

// Function to sort propertyData by price
function sortByPrice(order) {
  propertyData.sort((a, b) => {
    const priceA = extractPrice(a.details);
    const priceB = extractPrice(b.details);

    return order === "lowToHigh" ? priceA - priceB : priceB - priceA;
  });

  renderPropertyList();
}

// Function to extract price from property details
function extractPrice(details) {
  const match = details.match(/Rent: £(\d{1,3}(,\d{3})*(\.\d{1,2})?)/);
  const price = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  return price;
}
