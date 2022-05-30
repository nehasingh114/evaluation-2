// On clicking remove button the item should be removed from DOM as well as localstorage.

function append(){
    let data = JSON.parse(localStorage.getItem("coffee")) || [];

    let container = document.getElementById("bucket");
    container.innerHTML = null;

    data.forEach(function(el, index){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let type = document.createElement("h1");
        type.innerText = el.type;

        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.id = "remove_coffee";
        button.addEventListener("click", function(){
            removeData(index);
        })


        div.append(image, type, price, button);
        container.append(div);
    })


}

 append();

 function priceCount(){
    let data = JSON.parse(localStorage.getItem("coffee")) || [];
    let h3 = document.getElementById("total_amount");

    let amount = 0;
    data.forEach(function(el){
        amount = amount + el.price;
    });

    h3.append(amount);

 }
 priceCount();