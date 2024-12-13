


let api = "https://fakestoreapi.com/products"


async function getApi(url){
    
    let store = await fetch(url)
    let data = await store.json()
    console.log(data);

let card =""

data.forEach(element => {
    

card += `<div class="card m-3 p-2" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="img">
                <div class="card-body">
                  <h5 class="card-title"><b>${element.category}</b></h5>
                  <p class="card-text">${element.title}</p>
                  <h5 class="card-price">${element.price}</b></h5>
                  <a href="#" class="btn btn-success">Add to Cart</a>
                </div>
              </div>

`
document.getElementById("display-products").innerHTML = card


});





    
}

getApi(api)