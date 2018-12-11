/* alert("Works!"); */
"use strict";

//Step 1: Make request via axios
axios.get("https://www.redbullshopus.com/products.json")
.then((response) => {
    const data = response.data;
    console.log(data);
    console.log(typeof data);

// create a loop that brings in all the data
for (let i=0; i<data.products.length; i++) {

        // create new div tag
        
        const div = document.createElement("div");
        const img = document.createElement("img");
        //div.innerHTML += `<img>${data.products[0].images[0].src}`;
        img.src = data.products[i].images[0].src;
        img.style.height = "300px";
        img.style.width = "300px";
        div.appendChild(img);
        // Step 2: Adds response data to div tag
        div.innerHTML += `<h2>${ data.products[i].title }</h2>`;
        div.innerHTML += `<p class="productType">${"Product Type: " +  data.products[0].product_type }</p>`;
        div.innerHTML += `<p class="price">${"Price: $" + data.products[i].variants[0].price }</p>`;
        // adds div tag to body
        document.body.appendChild(div);
    }
}); 
    