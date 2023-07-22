// DOM MANIPULATION


// Goal -> retail site
    // dynamically change the entire site with the click of a button

let majorContainer = {
//-----------------------------------------Mens section -------------------//
mens: {
headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
productImages: [
{
name: 'Sneakers',
pic: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
},

{
name: 'Boots',
pic: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
},

{
name: 'Flannels',
pic: 'https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
},

{
name: 'Scarves',
pic: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
},

{
name: 'Hoodies',
pic: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
},

{
name: 'Hats',
pic: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80',
},
],

textDescription: `Browse our entire selection of men's clothing at H&M. From basics and loungewear to sweaters and suiting, we have something for every season and occasion. Whether you prefer bright colors and loud patterns or neutral, solid colors, find the clothes that match your style.`,

lowImage: 'https://images.unsplash.com/photo-1637548739071-7c24bbcab218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
},

//------------Women section--------------------//
womens: {
headImage: "https://st3.depositphotos.com/5354238/17785/i/1600/depositphotos_177858980-stock-photo-women-clothes-front-store-background.jpg",
optionTags: ["Dresses", "Shoes", "Handbags", "Jewelry"],
productImages: [
{
name: 'Dresses',
pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHnGAH0iNLG3fXleRAo-o8dAVOMVJPDKOxrnbss-gWjpQ4doKKTNG4oyey6CQNB_4T6E&usqp=CAU',
},

{
name: 'Shoes',
pic: 'https://ak.picdn.net/shutterstock/videos/1050728971/thumb/8.jpg',
},

{
name: 'Handbags',
pic: 'https://nypost.com/wp-content/uploads/sites/2/2021/03/purses.jpg?quality=75&strip=all',
},

{
name: 'Jewelry',
pic: 'https://cache.net-a-porter.com/content/images/story-head-content-24thOctober2022-1666086890596.jpeg/w1900_q65.jpeg',
},

{
name: 'Pajamas',
pic: 'https://akns-images.eonline.com/eol_images/Entire_Site/2023214/rs_1024x759-230314125604-1024-pj-set.cm.31423.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top',
},

{
name: 'Makeup',
pic: 'https://m.media-amazon.com/images/I/71KSEo-x+KL._AC_UF1000,1000_QL80_.jpg',
},

],
textDescription: `Clothing fashion is a dynamic expression of individuality and style, featuring classic pieces and trend-setting designs. Each season brings new colors, fabrics, and silhouettes, captivating fashion enthusiasts with its artistic flair. It shapes identities and influences how we present ourselves to the world, embracing tradition and innovation. Clothing fashion offers a beautiful amalgamation of self-expression and cultural influences, making it an integral part of our lives.`,
lowImage: 'https://img.freepik.com/free-photo/lady-poses-dressing-room-with-bright-clothes-shoes-girl-beret-lilac-blouse-looking-camera-pink-background_197531-17602.jpg'
},

//----------------------Kids section-------------------------//
kids: {
headImage: "https://mommyp-prod.s3.amazonaws.com/styles/image620x420/s3/nj-best-baby-stores-the-charming-toobydoo-boutique-can-be-found-in-downtown-princeton_best_baby_stores_nj_photo_courtesy_of_toobydoo_1.jpg?itok=En0fh4ZP",
optionTags: ["clothes", "Shoes", "Toys", "Kids Room"],
productImages: [
{
name: 'Baby Girl',
pic: 'https://m.media-amazon.com/images/I/51JtyZ9YEqL._AC_.jpg',
},

{
name: 'Baby Boy',
pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUNlbvEMxrT39KienvxpWrifj4JuSdbjUONw5IJ_0NoeJBnXVN-UPFKCA3rTV-xkF2t4&usqp=CAU',
},

{
name: 'Toddler Girl',
pic: 'https://m.media-amazon.com/images/I/71IBVSif7EL._AC_SY500_.jpg',
},

{
name: 'Toddler Boy',
pic: 'https://i5.walmartimages.com/asr/a42aeb0a-2b8f-42c8-9f39-cf3aa3ceac63_1.923f83f867091bc6597866b10fa88fd3.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
},

{
name: 'Toys',
pic: 'https://interiordesignshop.net/wp-content/uploads/2016/11/hamleys-iconic-bus.jpg',
},

{
name: 'Kids Room',
pic: 'https://media.architecturaldigest.com/photos/574f51cc1cd9644b0beb1e6a/master/w_1600%2Cc_limit/KinderModern-high-design-kids-room_02.jpg',
},

],

textDescription: `Kids have fun imaginations and personalities to match. So, when they’re out exploring the world around them, consider kids’ clothes from our store that’ll help keep them feeling comfy and looking cool`,
lowImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgaxFmko6LmMjNxn2nHtmcQouPXMeSDDbUw48qjehSvknUhdHQ1YUEQ92Cs5yQ48dmug&usqp=CAU'
}
}


let mainImageItem = document.querySelector('.mainImage')
const topPic = document.querySelector('.topPic')
let options = document.querySelectorAll('.choice')
let productItem = document.querySelectorAll('.productItem')
let pic = document.querySelector('.polaroid')
let textBox = document.querySelector('.textContainer')


// create all functions
const changeAll = (item) => {
    changeTopPic(item)
    changeOptions(item)
    changeImages(item)
    changeTextDes(item)
    changeBottomPic(item)
}

// change the top image 
const changeTopPic = (item) => {

if(item === "mens"){
    topPic.src = majorContainer.mens.headImage
} else if(item === "womens"){
    topPic.src = majorContainer.womens.headImage
} else if(item === "kids"){
    topPic.src = majorContainer.kids.headImage
}
}

// function to change the mens/ womens and kids section

const changeOptions = (item) => {
if(item === 'mens'){
    item = majorContainer.mens.optionTags
    console.log(item.length)
} else if(item === 'womens'){
    item = majorContainer.womens.optionTags
} else if(item === 'kids'){
    item = majorContainer.kids.optionTags
}


for(let i = 0; i < item.length; i++)
{options[i].innerText = item[i].toUpperCase()
}
}


// change images
const changeImages = (item) => {

let pict = document.createElement('img')
pict.setAttribute('src', '')
if(item === 'mens'){
    item = majorContainer.mens.productImages
} else if(item === 'womens'){
    item = majorContainer.womens.productImages
} else if(item === 'kids'){
    item = majorContainer.kids.productImages
}

for(let i = 0; i < item.length; i++){
productItem[i].innerHTML = `<img src='${item[i].pic}'> <p class="titleItem">${item[i].name}</p>`

}
}

// function to change the text description
const changeTextDes = (item) => {
if(item === 'mens'){
item = majorContainer.mens.textDescription
} else if(item === 'womens'){
    item = majorContainer.womens.textDescription
} else if(item === 'kids'){
    item = majorContainer.kids.textDescription
}
textBox.innerHTML = `<h2> ${item} </h2>`
}


// function to change change the bottom image

const changeBottomPic = (item) => {
if(item === 'mens'){
    item = majorContainer.mens.lowImage
} else if(item === 'womens'){
    item = majorContainer.womens.lowImage
} else if(item === 'kids'){
    item = majorContainer.kids.lowImage
}

pic.src = item
console.log(pic)
}

