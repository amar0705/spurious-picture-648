
document.querySelector("#cart-menu").innerHTML=""

let localStorageCart = [...JSON.parse(localStorage.getItem("cartItems")), ...JSON.parse(localStorage.getItem("cartItems2"))]
console.log(localStorageCart)

let totalCost = localStorageCart.reduce((acc,el)=>acc+(el.price*el.cartQty),0)
document.querySelector("#footer").innerText = "Total amount:"+" "+totalCost

localStorageCart.forEach((elem)=>{
    let outerDiv = document.createElement("div")
    outerDiv.setAttribute("class", "slide")
  
    let image = document.createElement("img")
    image.setAttribute("src",elem.img)
    image.setAttribute("class","image-slider")

    let innerDiv = document.createElement("div")
    innerDiv.setAttribute("class", "slider-innerDiv")

    let title = document.createElement("p")
    title.innerText = elem.title

    let subtitle = document.createElement("p")
    subtitle.innerText = elem.subtitle
    subtitle.setAttribute("class", "section-subtitles")


    let quantity = document.createElement("h5")
    quantity.innerText = elem.quantity

    let priceDiv = document.createElement("div")
    priceDiv.setAttribute("class","price-div")


    let calPrice = elem.price
    if(elem.discount>0){
        calPrice = calPrice - Math.floor(((elem.discount)/100)*calPrice)
    }

    let mrp = document.createElement("p")
    mrp.setAttribute("class", "item-price")
    mrp.innerText = `₹${calPrice}`

    let btn;
    
    // if(elem.cartQty===0){--
        btn = document.createElement("button")
        btn.setAttribute("class", "cart-add-btn")
        btn.innerText = `Add to Cart ${elem.cartQty}`
        // btn.addEventListener("click", function(){
        //     elem.cartQty = elem.cartQty+1
        //     btn.innerText = `Added to Cart (${elem.cartQty})`
        //     localStorage.setItem("cartItems", JSON.stringify(bestSellers.filter(item=>item.cartQty>0)))
        // })
    // }
    // else{
    //     btn = document.createElement("div")
    //     btn.setAttribute("class", "add-to-cart-div-btn")
        
    //     let minus = document.createElement("img")
    //     let text = document.createElement("p")

    //     minus.setAttribute("src", "https://www.pngall.com/wp-content/uploads/5/Red-Minus-PNG-HD-Image.png")
    //     minus.addEventListener("click", function(){
    //         elem.cartQty = elem.cartQty-1
    //         text.innerText = elem.cartQty
    //         localStorage.setItem("cartItems", JSON.stringify(bestSellers.filter(item=>item.cartQty>0)))   
    //     })


    //     let plus = document.createElement("img")
    //     plus.setAttribute("src", "https://www.clipartmax.com/png/middle/76-764590_red-plus-sign-transparent.png")
    //     plus.addEventListener("click", function(){
    //         elem.cartQty = elem.cartQty+1
    //         text.innerText = elem.cartQty
    //         localStorage.setItem("cartItems", JSON.stringify(bestSellers.filter(item=>item.cartQty>0)))       
    //     })

    //     btn.append(minus, text, plus)
        
    // }


    priceDiv.append(mrp, btn)

    let bottomDiv = document.createElement("div")
    bottomDiv.setAttribute("class","delivery-div")
    
    let deliveryPara = document.createElement("p")
    deliveryPara.innerText = elem.delivery;

    let deliveryImage = document.createElement("img")
    deliveryImage.setAttribute("src", "https://www.licious.in/img/rebranding/express_delivery.svg")

    bottomDiv.append(deliveryImage, deliveryPara)

    innerDiv.append(title, subtitle, quantity, priceDiv, bottomDiv)

    
    outerDiv.append(image, innerDiv)

    document.querySelector("#cart-menu").append(outerDiv)


});