let next = document.getElementById('next');
let prev = document.getElementById('prev');
let container = document.querySelector('.container');
let list  = document.querySelector('.container .list');
let thumbnail = document.querySelector('.container .thumbnail');


next.onclick = function () {
    showSlider('next')
    
}

prev.onclick = function () {
    showSlider('prev')
   
}

let runningTime = 1000;
let runTimeOut;

function showSlider(type) {
    let sliderItems = document.querySelectorAll('.container .list .item')
    let thumbnailItems = document.querySelectorAll('.container .thumbnail .item')

    if (type === 'next') {
        list.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        container.classList.add('next')
    } else {
        let positionLastItem = sliderItems.length - 1;
        list.prepend(sliderItems[positionLastItem]);
        thumbnail.prepend(thumbnailItems[positionLastItem])
        container.classList.add('prev')

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('prev')
        
    }, runningTime);
    
}