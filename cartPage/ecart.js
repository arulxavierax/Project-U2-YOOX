

var women=JSON.parse(localStorage.getItem("cartProduct"))
display(women)

// var cartArr=[]

function display(data){
    data.forEach(function(ele,index){
        var tr=document.createElement("tr")
        
        var inside=document.createElement("tr")
        inside.setAttribute("class","inside")

        var img=document.createElement("img")
        img.setAttribute("src",ele.productImage)

        var td1=document.createElement("td")
        td1.innerText=ele.productName
         
        var td2=document.createElement("td")
        td2.innerText=ele.productCatogary

        var td3=document.createElement("td")
        td3.innerText=ele.productActualPrice

        var td4=document.createElement("td")
        td4.innerText=ele.productDiscountOff

        // var cartObj={
        //     productimg:ele.productImage,
        //     name:ele.productName,
        //     catogery:ele.productCatogary,
        //     ActualPrice:ele.productActualPrice,
        //     offer:ele.productDiscountOff,
        //     discount:ele.productDiscountPrice
        // }
        // cartArr.push(cartObj)
        // console.log(cartArr)


        var itemred=document.createElement("td")
        itemred.innerText="-"
        itemred.style.cursor="pointer"
        itemred.style.fontSize="30px"
        itemred.addEventListener("click",function(){
            subfunction(ele)
        })
        var count=0
        var offPrice=Number(ele.productDiscountPrice.replace("US $",""))
        function subfunction(ele){
        count--
        td5.innerText="$"+count*offPrice
        // localStorage.setItem("count",(count))
        
        }
        
        var item=document.createElement("td")
        item.innerText="+"
        item.style.cursor="pointer"
        item.style.fontSize="30px"
        item.addEventListener("click",function(){
            addfunction(ele)
        })
        
        var offPrice=Number(ele.productDiscountPrice.replace("US $",""))
        function addfunction(ele){
        count++
        td5.innerText="$"+count*offPrice    
        // localStorage.setItem("count",(count))
        }
       

        var tr2=document.createElement("tr")
        tr2.setAttribute("id","counter")
        tr2.append(item,itemred)

        var td5=document.createElement("td")
        
        // var change=Number(ele.productActualPrice.replace("$",""))
        // console.log(typeof(change))

        var rmv=document.createElement("td")
        rmv.innerText="Remove"
        rmv.style.color="red"
        rmv.style.cursor="pointer"
        rmv.addEventListener("click",function(){
            rowdelete(ele,index)
        })

        inside.append(img,td1)
        tr.append(inside,td2,td3,td4,tr2,td5,rmv)

        document.querySelector("#content").append(tr)
   
    })
    function rowdelete(ele,index){
        women.splice(index,1)
        localStorage.setItem("cartProduct",JSON.stringify(women))
        window.location.reload()
        console.log("deleted")
       
    }


    var h1=document.createElement("h3")
    h1.innerText="$"+data.reduce(function(sum,ele){
        return sum+Number(ele.productDiscountPrice.replace("US $",""))
    },0)

    document.querySelector("#item").append(h1)   
}
var click=document.querySelector("#box")
click.addEventListener("click",boxfunction)

function boxfunction(){
     shiph.innerText="$"+click.value
     localStorage.setItem("shippingprice",JSON.stringify(shiph.innerText))
    }
 
var shiph=document.createElement("h3")
document.querySelector("#in").append(shiph)

var add1=document.querySelector("#item>h3+h3").innerText
var addd1=Number(add1.replace("$",""))
console.log(addd1)

var add2=Number(JSON.parse(localStorage.getItem("shippingprice").replace("$","")))
console.log(add2)

var totalh=document.createElement("h3")
// totalh.innerText=(addd1+add2)-500
// document.querySelector("#ordertotal").append(totalh)
totalh.innerText=addd1+add2
if(totalh.innerText==19.95){
    totalh.innerText=""
    document.querySelector("#ordertotal").append(totalh)
    // alert("Add items to Bag")
    // event.preventDefault()
}
else{
    totalh.innerText=addd1+add2
    document.querySelector("#ordertotal").append(totalh)
}
document.querySelector("#ordertotal").append(totalh)

var payment=document.createElement("h3")
// payment.innerText="$ 0.00"
// document.querySelector("#pay").append(payment)

// promo  code

var btn=document.querySelector("#btn")
btn.addEventListener("click",function(){
    promosubmit()
})
function promosubmit(){
    event.preventDefault()
    
    var promo=document.querySelector("#promo").value
    if(promo=="MASAI360" && add2+addd1>2500){
        alert("Promocode Added Successfully")
        totalh.innerText=(addd1+add2)-500
        document.querySelector("#ordertotal").append(totalh)
        payment.innerText="$ 0.00"
        document.querySelector("#pay").append(payment)
        
    }
    else{
        alert("Not Valid")
        totalh.innerText=addd1+add2
        document.querySelector("#ordertotal").append(totalh)
        payment.innerText="$ 0.00"
        document.querySelector("#pay").append(payment)
       
    }
}