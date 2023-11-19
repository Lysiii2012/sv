var swiper = new Swiper(".headerSwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".popUpSlider", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-b-next",
      prevEl: ".swiper-b-prev",
    },
  });


  const formBy = document.querySelectorAll('.by-now');
  const openForm = document.querySelectorAll('.overlay-form')
  const closenForm = document.querySelectorAll('.close-form')


 const overlay = document.body
  const iconProd = document.querySelectorAll('.pop-up-item')
  const moreInf = document.querySelectorAll('.item-product')



  formBy.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openForm.forEach(form => {
        form.classList.add('show');
         
         closenForm.forEach(close => {
        close.addEventListener('click', () => {
          form.classList.remove('show')
        })
      })
       
      })
    })
  })

  const closePop = document.querySelectorAll('.close-pop-up');

  moreInf.forEach(item => {
    item.addEventListener('click', (event) => {
        const clickedClass = event.currentTarget.id;
        const correspondingIconProd = document.querySelector(`.pop-up-item.${clickedClass}`);

        if (correspondingIconProd) {
            correspondingIconProd.classList.add('show');
            overlay.classList.add('overlay');
        }
    });
});

closePop.forEach(it => {
    it.addEventListener('click', () => {
        iconProd.forEach(popUpItem => {
            popUpItem.classList.remove('show');
        });
        overlay.classList.remove('overlay');
    });
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    document.querySelector('.nav-mob').classList.toggle('show')
  });
});

