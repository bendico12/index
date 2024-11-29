const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grapcursor: true,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        
        300: {
            slidesPerView: 3
        },
        425: {
            slidesPerView: 3
        },
        450: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
        
       
        
    }
  });