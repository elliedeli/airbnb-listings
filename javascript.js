console.log("Hello world!");
async function populate(){
    const data = await fetch('listings.json');
    const json = await data.json();
    thing(json)
}

function thing(obj){
    const row = document.querySelector("row");
    const listings = obj.listings;
    for (const listing of listings)
    {
        
        const listingArticle = document.createElement("article");
        const listingName = document.createElement("h2");
        const listingInfo = document.createElement("ul");
        const listingDesc = document.createElement("p");
        listingName.textContent = listing.name;
        listingDesc.textContent = listing.desc;
        
        listingArticle.appendChild(listingName);
        listingArticle.appendChild(listingDesc);
        row.appendChild(listingArticle);

    }
}

populate();