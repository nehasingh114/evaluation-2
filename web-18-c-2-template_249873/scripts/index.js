async function getData(){
    const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    try {
       let res = await fetch(url);
       let data = await res.json();
       console.log(data);
       return data.menu.data;
    } catch (error) {
        console.log("error:", error);
    }

}


function append(data){
    let container = document.getElementById("menu");
    container.innerHTML = null;

    data.forEach(function(el){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let type = document.createElement("h1");
        type.innerText = el.title;

        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Add to Bucket";
        button.id = "add_to_bucket";
        button.addEventListener("click", function(){
            sendData(el);
        })


        div.append(image, type, price, button);
        container.append(div);
    })


}

function Data(i, t, p){
    this.image = i,
    this.type = t,
    this. price = p
}

function sendData(data){
    let dataArr = JSON.parse(localStorage.getItem("coffee")) || [];

    let image = data.image;
    let type = data.title;
    let price = data.price;

    let dataObj = new Data(image, type, price);
    
    dataArr.push(dataObj);
    localStorage.setItem("coffee", JSON.stringify(dataArr));
    dataCount();
}

function dataCount(){
   let dataArr = JSON.parse(localStorage.getItem("coffee")) || [];
   
   let count = document.getElementById("coffee_count");
   count.innerHTML = null;
   let p = document.createElement("p");
   p.innerText = dataArr.length;
   count.append(p);

}
dataCount();





 async function main(){
     let data = await getData();
     append(data);
 }

 main();



 function bucketNav(){
     window.location.href="bucket.html";
 }

 function productNav(){
   window.location.reload();
}