

let bestSellers= [
    {
        id:1,
        title:"Chicken Curry Cut - Small Pieces",
        subtitle:"Fresh Nakhre & fresh bone-in & boneless chicken cuts",
        quantity:"500gms",
        price:179,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp",
        cartQty: 0
    },
    {
        id:2,
        title:"Chicken Curry Cut - Small Pieces (Large Pack)",
        subtitle:"Fresh Nakhre & fresh bone-in & boneless chicken cuts",
        quantity:"1000gms",
        price:345,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg?format=webp",
        cartQty: 0
    },
    {
        id:3,
        title:"Chicken Breast - Boneless",
        subtitle:"Juicy, Boneless fillets: special nakhre for special cuts",
        quantity:"500gms",
        price:269,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
        cartQty: 0
    },
    {
        id:4,
        title:"Classic Eggs - pack of 12",
        subtitle:"Farm to fork nakhre antibiotic residue-free eggs",
        quantity:"Pieces: 12",
        price:125,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg?format=webp",
        cartQty: 0
    },
    {
        id:5,
        title:"Rohu (Rui) Medium - Bengali Cut, No Head",
        subtitle:"Nakhre that fly fish to you, cut & cleaned for curries",
        quantity:"500gms",
        price:259,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp",
        cartQty: 0
    },
    {
        id:6,
        title:"Goat Curry Cut- Small Pieces",
        subtitle:"Bite-sized cut of rich goat on the bone",
        quantity:"450gms",
        price:525,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/452a3295-208c-d0b0-0afa-0be964004ba7/original/Rich-Goat-Curry-Cut-(Small---19-to-21-Pieces)--Hero-Shot.jpg?format=webp",
        cartQty: 0
    },
    {
        id:7,
        title:"Catla (Theppu) Medium- Bengali Cut, No Head",
        subtitle:"Nakhre that fly fish to you, cut & cleaned for curries",
        quantity:"500gms",
        price:339,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1ea5ff1f-52f3-c7aa-953a-a4d287e40247/original/p0_tile_images-15_(2).jpg?format=webp",
        cartQty: 0
    },
    {
        id:8,
        title:"Chicken Curry Cut- Large Pieces",
        subtitle:"Fresh Nakhre & fresh bone-in & boneless chicken cuts",
        quantity:"500gms",
        price:179,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ca5adea0-fcd4-9787-416a-7b95b3a670b4/original/ChickenLC.jpg?format=webp",
        cartQty: 0
    }
]

document.querySelector("#slider").innerHTML=""
localStorage.setItem("cartItems", JSON.stringify([]))



bestSellers.forEach((elem)=>{
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
    
        btn = document.createElement("button")
        btn.setAttribute("class", "cart-add-btn")
        btn.innerText = "Add to Cart"
        btn.addEventListener("click", function(){
            elem.cartQty = elem.cartQty+1
            btn.innerText = `Cart (${elem.cartQty})`
            localStorage.setItem("cartItems", JSON.stringify(bestSellers.filter(item=>item.cartQty>0)))
        })

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

    document.querySelector("#slider").append(outerDiv)


});

