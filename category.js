let category= [
    {
        title:"Today's Deal",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
    },
    {
        title:"Chicken",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"
    },
    {
        title:"Fish & Seafoods",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"
    },
    {
        title:"Mutton",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"
    },
    {
        title:"Ready to Cook",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"
    },
    {
        title:"Prawns",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"
    },
    {
        title:"Cold Cuts",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"
    },
    {
        title:"Spreads",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"
    },
    {
        title:"Eggs",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"
    },
    {
        title:"Biryani & Kebabs",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"
    },
    {
        title:"Combos",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png"
    },
    {
        title:"Plant-Based-Meat",
        img:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"
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


