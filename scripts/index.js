const logo = document.querySelector('header a')
const contentTitle = document.querySelector('header .hd_bg p');
const roundTxt = document.querySelector('.round_txt_wrap');
const circle = document.querySelectorAll('.abil .circle');
const popup_bg = document.querySelector('.popup_bg');
const sns = document.querySelectorAll('.sns_swiper .swiper-slide');
const bnr = document.querySelectorAll('.bnr_swiper .swiper-slide');
const detail = document.querySelectorAll('.detailed_swiper .swiper-slide');

popup_bg.style.display = 'none';

logo.addEventListener('click', ()=>{
  mSwiper.slideTo(0);
})

function titleChange(name){
  setTimeout(function(){contentTitle.style.transform = 'translateX(calc(100% + 1px))'}, 0)
          setTimeout(function(){
            contentTitle.textContent = `${name}`; 
            contentTitle.style.padding = '4.5px 16px';
            contentTitle.style.color = '#fff';
            contentTitle.style.backgroundColor = '#1A1A1A';
          }, 200)
          setTimeout(function(){contentTitle.style.transform = 'translateX(0)'}, 300)
};

const mSwiper = new Swiper ('.m_swiper', {
  direction: 'vertical',
  mousewheel: true,
  speed: 400,
  on:{
    slideChange: function(){
      if (this.realIndex >= 1) {/* 1 이상 if문 */
        roundTxt.style.top = '-130px';
        roundTxt.style.animationPlayState = 'running';
        if (this.realIndex == 1) {/* 특정 index 내부 if문 */
          titleChange('PROFILE');
          for(let i of circle){
            i.style.animationPlayState = 'running';
          };
        } else if (this.realIndex >= 2 && this.realIndex <= 5) {
          if (contentTitle.textContent != 'UI/UX') titleChange('UI/UX');
        } else {titleChange('GRAPHIC');}
      }
      else {
        roundTxt.style.top = 'calc(100% - 130px)'
        setTimeout(function(){contentTitle.style.transform = 'translateX(calc(100% + 1px))'}, 0)
          setTimeout(function(){
            contentTitle.textContent = 'WEB DESIGN & PUBLISH'; 
            contentTitle.style.padding = '0';
            contentTitle.style.color = '#000';
            contentTitle.style.backgroundColor = 'transparent';
          }, 200)
          setTimeout(function(){contentTitle.style.transform = 'translateX(0)'}, 300)
      };
    }
  },
});

const snsSwiper = new Swiper('.sns_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
  slidesPerView:2.5,
});

const bnrSwiper = new Swiper('.bnr_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:4000,
  slidesPerView:2,
});

const detailedSwiper = new Swiper('.detailed_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
});

sns.forEach((target, index)=>{
  target.addEventListener('click',()=>{
    popup_bg.style.display = 'block';
    popup_bg.children[0].scrollTo(0,0);
    popup_bg.children[0].children[0].src = `./images/sns_0${index + 1}.jpg`;
    popup_bg.children[0].children[0].style.width = 'auto';
    popup_bg.children[0].children[0].style.height = '100%';
    popup_bg.children[0].style.overflow = 'hidden';
    popup_bg.children[0].style.width = '600px';
    popup_bg.children[0].style.marginTop = '100px';
  })
});

bnr.forEach((target, index)=>{
  target.addEventListener('click',()=>{
    popup_bg.style.display = 'block';
    popup_bg.children[0].scrollTo(0,0);
    popup_bg.children[0].children[0].src = `./images/bnr_0${index + 1}.jpg`;
    popup_bg.children[0].children[0].style.width = '100%';
    popup_bg.children[0].children[0].style.height = 'auto';
    popup_bg.children[0].style.overflow = 'auto';
    popup_bg.children[0].style.width = '900px';
    popup_bg.children[0].style.marginTop = '250px';
  })
});

detail.forEach((target, index)=>{
  target.addEventListener('click',()=>{
    popup_bg.style.display = 'block';
    popup_bg.children[0].scrollTo(0,0);
    popup_bg.children[0].children[0].src = `./images/detail_0${index + 1}.jpg`;
    popup_bg.children[0].children[0].style.width = '100%';
    popup_bg.children[0].children[0].style.height = 'auto';
    popup_bg.children[0].style.overflow = 'auto';
    popup_bg.children[0].style.width = '700px';
    popup_bg.children[0].style.marginTop = '100px';
  })
});

popup_bg.addEventListener('click', ()=>{
  popup_bg.style.display = 'none';
});