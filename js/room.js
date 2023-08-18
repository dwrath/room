let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let paragraph = document.querySelector('.paragraph-text');
let header = document.querySelector('.header-text');
let image = document.querySelector('.header-img');
let data = [{img:'./images/desktop-image-hero-1.jpg', header: 'Discover innovative ways to decorate', paragraph:'We provide unmatched quality, comfort, and style for property owners across the country.\n' +
        '                Our experts combine form and function in bringing your vision to life. Create a room in your\n' +
        '                own style with our collection and make your property a reflection of you and what you love.'},{img:'./images/desktop-image-hero-2.jpg', header: ' We are available all across the globe', paragraph:'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. \n' +
        '  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our \n' +
        '  store locator. Any questions? Don\'t hesitate to contact us today.'},{img:'./images/desktop-image-hero-3.jpg', header: 'Manufactured with the best materials', paragraph:' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \n' +
        '  to ensure that every product is made as perfect and as consistent as possible. With three decades of \n' +
        '  experience in this industry, we understand what customers want for their home and office.'}]

let pointer = 0

leftArrow.addEventListener('click', ()=>{
    pointer--;
    if(pointer === -1){
        pointer = 2
    }
    if(pointer === 0){
        image.src = data[0].img;
        header.innerHTML = data[0].header;
        paragraph.innerHTML = data[0].paragraph;
    }else if(pointer === 1){
        image.src = data[1].img;
        header.innerHTML = data[1].header;
        paragraph.innerHTML = data[1].paragraph;
    }else if(pointer === 2){
        image.src = data[2].img;
        header.innerHTML = data[2].header;
        paragraph.innerHTML = data[2].paragraph;
    }
})
rightArrow.addEventListener('click',()=>{
    pointer++;
    if(pointer === 3){
        pointer = 0
    }
    if(pointer === 0){
        image.src = data[0].img;
        header.innerHTML = data[0].header;
        paragraph.innerHTML = data[0].paragraph;
    }else if(pointer === 1){
        image.src = data[1].img;
        header.innerHTML = data[1].header;
        paragraph.innerHTML = data[1].paragraph;
    }else if(pointer === 2){
        image.src = data[2].img;
        header.innerHTML = data[2].header;
        paragraph.innerHTML = data[2].paragraph;
    }
})