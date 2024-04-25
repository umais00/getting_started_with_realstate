// Property Data - Replace this with dynamic data from an API or other source
const propertyData = [
  {
    id: 1,
    location: "London SE6",
    details: "9 beds · 4 baths · Rent:  £8,000",
},
{
    id: 2,
    location: "Luton, LU4",
    details: "5 beds · 3 baths · Rent:  £2,700",
},
{
    id: 3,
    location: "Purley, CR8",
    details: "4 beds · 2 baths · Rent:  £3,200",
},
{
    id: 4,
    location: "Surrey KT18",
    details: "3 beds · 2 baths · Rent: £3,400",
},
{
    id: 5,
    location: "Ramsgate CT11",
    details: "4 beds· 2 baths · Rent: £2,800",
},
{
    id: 6,
    location: "London, SW15",
    details: "1 bed · 1 bath · Rent:  £1,750",
},
{
    id: 7,
    location: "Romford RM1",
    details: "7 beds · 4 baths · Rent: £7,000",
},
{
    id: 8,
    location: "Middlesex, HA6",
    details: "7 beds · 7 baths · Rent:  £7,000",
},
{
    id: 9,
    location: "London, NW4",
    details: "4 beds · 3 baths · Rent:  £4,000",
},
{
    id: 10,
    location: "London E7",
    details: "5 beds · 2 baths · Rent:  £5,000",
},
{
    id: 11,
    location: "Hampshire PO4",
    details: "3 beds · 1 bath · Rent:  £1,750",
},
{
    id: 12,
    location: "Smethwick, B67",
    details: "7 beds · 5 baths · Rent:  £3,000",
},
{
    id: 13,
    location: "Worthing, BN14",
    details: "6 beds · 5 baths · Rent:  £2,500",
},
{
    id: 14,
    location: "Upton Park Road E7",
    details: "7 beds · 3 baths · Rent:  £7,500",
},
{
    id: 15,
    location: "Smethwick B66",
    details: "5 beds · 5 baths · Rent:  £2,750",
},
{
    id: 16,
    location: "Thornton Heath CR7",
    details: "4 beds · 1 bath · Rent:  £3,500",
},
{
    id: 17,
    location: "Coventry CV1",
    details: "5 beds · 5 baths · Rent:  £2,500",
},
{
    id: 18,
    location: " Coventry CV1",
    details: "2 beds · 1 bath · Rent:  £975",
},
{
    id: 19,
    location: "London, E15",
    details: "4 beds · 2 bath · Rent: £3,650",
},
{
    id: 20,
    location: "Gloucester GL1",
    details: "6 beds · 2 bath · Rent: £3,000",
},
{
    id: 21,
    location: "Bedfordshire LU4",
    details: "4 beds · 2 bath · Rent: £2,100",
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
window.onload = renderPropertyList;

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
