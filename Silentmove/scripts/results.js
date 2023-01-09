window.onload = function() {
  const searchResults = JSON.parse(localStorage.getItem("searchResults")); // getting the filtered search results
  const resultsContainer = document.getElementById("results-container"); // selecting the results-container
  resultsContainer.innerHTML = ""; // deleting an previous data inside the results-container

  // display the search results
  if (searchResults.length > 0) {
  searchResults.forEach((result) => { // forEach result creates a card and inserts data from the properties JSON.
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-property-container">
            <div class="image-container">
                <a href="${result.url}"><img src="${result.picture}" alt="Property picture" class="card-property-image"></a>
</div>
<div class="card-property-elements">
<div class="property-type-date">
<p class="card-property-type">${result.type}</p>
<div class="dot"><img src="card-property-icons/dot.svg" alt=""></div>
<p class="card-property-date">${result.added.year}</p>
</div>
<p class="card-property-price">£${result.price.toLocaleString()}</p>
<p class="card-property-location">${result.location}</p>
</div>
<div class="card-property-bed-bath">
<p class="card-property-bedrooms"><strong>${result.bedrooms}</strong> Bedrooms</p>
<p class="card-property-bathrooms"><strong>${result.bathrooms}</strong> Bathrooms</p>
</div>
<div class="card-property-realtor-container">
<p class="realtor-text">REALTOR</p>
<div class="realtor-container">
<img src="realtor1.webp" alt="" class="realtor-image">
<div class="realtor-info">
<p class="realtor-name">Anne-Gaelle Colom</p>
<p class="realtor-telephone">(555) 555-4321</p>
</div>
</div>
</div>
`;
    resultsContainer.appendChild(card);
  });
  } else {
      resultsContainer.style.padding = "25em 1em";
      resultsContainer.innerHTML += '<p class="no-results">No results found</p>';
  }

}