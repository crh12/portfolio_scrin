const contentTitle = document.querySelector('header .hd_bg p');
const roundTxt = document.querySelector('.round_txt_wrap');

console.log(contentTitle.textContent)

const mSwiper = new Swiper ('.m_swiper', {
  direction: 'vertical',
  mousewheel: true,
  speed: 400,
  on:{
    slideChange: function(){
      if (this.realIndex >= 1) {/* 1 이상 if문 */
        // roundTxt.style.right = '-117px';
        roundTxt.style.top = '-130px';
        roundTxt.style.animationPlayState = 'running';
        if (this.realIndex == 1) {/* 특정 index if문 */
          setTimeout(function(){contentTitle.style.transform = 'translateX(calc(100% + 1px))'}, 0)
          setTimeout(function(){
            contentTitle.textContent = 'PROFILE'; 
            contentTitle.style.padding = '4.5px 16px';
            contentTitle.style.color = '#fff';
            contentTitle.style.backgroundColor = '#1A1A1A';
          }, 200)
          setTimeout(function(){contentTitle.style.transform = 'translateX(0)'}, 300)
        } else if (this.realIndex >= 2 && this.realIndex <= 5) {
          contentTitle.textContent = 'UI/UX'
        } else contentTitle.textContent = 'GRAPHIC'
        // else {
        //   contentTitle.textContent = 'WEB DESIGN & PUBLISH'
        //   contentTitle.style.padding = '0';
        //   contentTitle.style.color = '#000';
        //   contentTitle.style.backgroundColor = 'transparent';
        // }
      }
      else {
        // roundTxt.style.right = '-300px'
        roundTxt.style.top = 'calc(100% - 130px)'
        // roundTxt.style.animationPlayState = 'paused';
        contentTitle.textContent = 'WEB DESIGN & PUBLISH'
        contentTitle.style.padding = '0';
        contentTitle.style.color = '#000';
        contentTitle.style.backgroundColor = 'transparent';
      };
    }
  },
});

const snsSwiper = new Swiper ('.sns_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
  slidesPerView:3,
});

const bnrSwiper = new Swiper ('.bnr_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
  slidesPerView:3,
});

