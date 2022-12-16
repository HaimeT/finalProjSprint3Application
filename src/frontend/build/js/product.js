//post user's info from local storage onto website

  async function postProduct() {
    try {
      //await and fetch the data from the database
      const response = await fetch(`http://localhost:8080/item/all`)
      //await and parse the response into a JavaScript Object
      const responseJSON = await response.json(); 

      for (let i = 0; i < responseJSON.length; i++) {
        let myObj = responseJSON[i];
        console.log(myObj)
      //post user's info onto website
      const listProductsDiv = document.getElementById("list-items"); //locate where to display element
      const card = document.createElement("div"); // Creates div element object
      let cardHTML = 
          `<div class="card" style="border: 2px solid black;">
          <img src="${myObj.image_url}" class="card-img-top mx-auto d-block">
          <div class="card-body">
            <h5 class="card-title">${myObj.name}</h5>
            <h3 class="card-title">$${myObj.price}</h3>
            <p class="card-text"> ${myObj.description}</p>
            <a href="#" class="btn btn-dark">Add to Cart</a>
          </div>
          </div>`;
      card.innerHTML = cardHTML; //upload data
      listProductsDiv.append(card); //append or add rather than replacing
      
      }

    }
  
  catch (e) {
    console.log(e)
  }
}
  

postProduct();