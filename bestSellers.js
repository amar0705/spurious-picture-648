let bestSellers= [
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    },
    {
        title:"Freshwater/White Prawn/Seegadi",
        subtitle:"Freshwater/White Prawn/Seegadi",
        quantity:"500gms",
        price:200,
        discount:10,
        delivery:"Today 5PM-7PM",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
    }
]

document.querySelector("#slider").innerHTML=""

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
        calPrice = calPrice - (((elem.discount)/100)*calPrice)
    }

    let mrp = document.createElement("p")
    mrp.setAttribute("class", "item-price")
    mrp.innerText = `₹${calPrice}`

    let btn = document.createElement("button")
    btn.setAttribute("class", "cart-add-btn")
    btn.innerText = "Add to Cart"

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