let category= [
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    }
]

document.querySelector(".sub-section").innerHTML=""

category.forEach((elem)=>{

    let outerDiv = document.createElement("div")

    let innerDiv = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute("src",elem.img)
    image.setAttribute("class","grid-image")

    innerDiv.append(image)
    innerDiv.setAttribute("class", "inner-div")

    let desc = document.createElement("p")
    desc.innerText = elem.title;

    outerDiv.append(innerDiv, desc)
    outerDiv.setAttribute("class", "outer-div")

    document.querySelector(".sub-section").append(outerDiv)

});