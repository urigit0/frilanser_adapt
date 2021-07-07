$(document).ready(function () {
   $('.header__burger').click(function () {
      $(".header").toggleClass('change');
   })
   //******************************************************************
   $(".btntop__button").click(function () {
      $(document.body).scrollTop(0);
      $(document.documentElement).scrollTop(0);
   })
   //******************************************************************
   $(window).scroll(function () {
      if ($(document.body).scrollTop() || $(document.documentElement).scrollTop() > 20) {
         $(".btntop__button").css('display', 'block');
      }
      else { $(".btntop__button").css('display', 'none'); }
   });
   //****************************************************************** 
   let slideIndex = 1;
   showSlides(0);
   function currentSlide(n) {
      slideIndex = n;
      showSlides(n);
   }
   function showSlides(n) {
      let i;
      let slides = $(".twitter__slide");
      let dots = $(".twitter__dot");
      for (i = 0; i < slides.length; i++) {
         $(slides[i]).css('display', 'none');
         $(dots[i]).removeClass("active-dot");
      }
      $(slides[n]).css('display', 'block');
      $(dots[n]).addClass("active-dot");
   }
});