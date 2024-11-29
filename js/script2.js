const menu_btn = document.querySelector('.hamburgur');
const menu = document.querySelector('.menu');
const body = document.body; 

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    
    if (menu.classList.contains('is-active')) {
        body.classList.add('no-scroll'); 
    } else {
        body.classList.remove('no-scroll');
    }
});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0
    };
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    };
    showSlider();
}
// auto run slidxer
let refershInterval = setInterval(() => {
    next.click();
},7000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    // clear auto time run slider
    clearInterval(refershInterval);
    refershInterval = setInterval(() => {
        next.click();
    }, 5000)
}
// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
// 슬라이더에 마우스 호버 이벤트 추가
const slider = document.querySelector('.slider .list');

slider.addEventListener('mouseenter', () => {
    clearInterval(refershInterval); // 마우스가 올라올 때 자동 슬라이드 정지
});

slider.addEventListener('mouseleave', () => {
    // 마우스가 떠날 때 자동 슬라이드 재시작
    clearInterval(refershInterval);
    refershInterval = setInterval(() => {
        next.click();
    }, 10000);
});
window.addEventListener('scroll', function() {
    const indicator = document.querySelector('.scroll-indicator');
    indicator.style.display = 'none';
  });
  