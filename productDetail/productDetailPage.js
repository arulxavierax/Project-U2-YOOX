


var deatails_prod_data = JSON.parse(localStorage.getItem("selectedProduct"));

// console.log(deatails_prod_data);
displayDataProduct(deatails_prod_data);

function displayDataProduct(data) {

    data.forEach(function (element) {

        var imgDiv = document.createElement("img");
        imgDiv.src = element.productImage;

        imagedivProduct.append(imgDiv);

        var pname = document.createElement("h4");
        pname.innerText = element.productName;

        var prodcato = document.createElement("p");
        prodcato.innerText = element.productCatogary;
        prodcato.setAttribute("class", "prodCato")

        var actualprodprice = document.createElement("span");
        actualprodprice.innerText = "US  $" + " " + element.productActualPrice;
        // actualprodprice.createAttribute("class","actPP");

        var poff = document.createElement("span");
        poff.innerText = element.productDiscountOff;
        // ...............................................................



        var discprodprice = document.createElement("p");
        discprodprice.innerText = "US  $" + " " + element.productDiscountPrice;

        var helpDiv = document.createElement("div");
        helpDiv.setAttribute("class", "helpDiv")

        var help = document.createElement("p");
        help.innerText = "Need more help? View the Size Guide !";

        helpDiv.append(help)

        var lAvailable = document.createElement("p");
        lAvailable.innerText = "LAST ONE AVAILABLE";

        var addbutton = document.createElement("button");
        addbutton.innerText = "ADD TO SHOPPING BAG"
        addbutton.setAttribute("class", "addButton")
        addbutton.addEventListener("click", function () {
            funToCart(element);
        })

        var dreambutton = document.createElement("button");
        dreambutton.innerText = "ADD TO DREAM BOX"
        dreambutton.setAttribute("class", "dreamButton")

        proddata_div.append(pname, prodcato, actualprodprice, poff, discprodprice, helpDiv, lAvailable, addbutton, dreambutton);


    });


    var toCartArr = JSON.parse(localStorage.getItem("cartProduct"))||[];

    function funToCart(ele) {
        // console.log("Click");
        // var toCartArr = []
        toCartArr.push(ele);
        localStorage.setItem("cartProduct", JSON.stringify(toCartArr));
        window.location.href = "../cartPage/cart.html";
        // Arul link the page with your page 
    }



}