console.log("Hello world!");
async function populate(){
    const requestURL = 'https://raw.githubusercontent.com/elliedeli/airbnb-listings/refs/heads/main/listings.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const json = await response.json();
    populateListings(json)
}

function populateListings(obj){
    const container = document.querySelector(".container");
    const listings = obj.listings;
    for (const listing of listings)
    {
        //create Elements based off Data   
        const listingArticle = document.createElement("article");
        const listingName = document.createElement("h2");
        const listingInfo = document.createElement("div");
        const listingDesc = document.createElement("p");
        const listingButton = document.createElement("button");

        //add text content to elements
        listingName.textContent = listing.name;
        listingDesc.textContent = listing.desc;
        
        //stuff with ID (url and image)
        var listingUrl = "https://airbnb.com/h/" + listing.id;
        console.log(listingUrl);
        var listingImageUrl = "./media/" + listing.id + ".jpeg";
        console.log(listingImageUrl);

        //Description
        const descList = document.createElement("ul");
        const descBeds = document.createElement("li");
        const descBaths = document.createElement("li");
        const descBedrooms = document.createElement("li");
        const descGuests = document.createElement("li");
        descBeds.innerHTML = '<i class="fa-solid fa-bed"></i>   ' + listing.beds;
        descBaths.innerHTML = '<i class="fa-solid fa-bath"></i>' + listing.beds;
        descBedrooms.innerHTML = '<i class="fa-solid fa-door-closed"></i>' + listing.bedrooms;
        descGuests.innerHTML = '<i class="fa-solid fa-users"></i>   ' + listing.guests;
        descList.appendChild(descGuests);
        descList.appendChild(descBedrooms);
        descList.appendChild(descBeds);
        descList.appendChild(descBaths);
        descList.classList.add("info")
        listingInfo.appendChild(descList);


        //image
        const listingImage = document.createElement("img");
        listingImage.src = listingImageUrl;
        listingImage.width = "300";
        listingImage.height = "300";
  
        //button
        listingButton.textContent = "Book Now!"
        const anchorElement = document.createElement("a");
        anchorElement.href = listingUrl;
        anchorElement.target = "_blank"
        anchorElement.rel = "noopener noreferrer"

        //appending Elements
        anchorElement.appendChild(listingButton)
        listingArticle.appendChild(listingName);
        listingArticle.appendChild(listingInfo);
        listingArticle.appendChild(listingImage);
        listingArticle.appendChild(listingDesc);
        listingArticle.appendChild(anchorElement);
        container.appendChild(listingArticle);

    }
}

populate();