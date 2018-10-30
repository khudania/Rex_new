window.sr = ScrollReveal();
sr.reveal('.navbar', {
   duration:2000,
   origin:'bottom'
});
sr.reveal('.showcase-top', {
    duration:2000,
    origin:'top',
    distance:'300px'
 });
sr.reveal('.showcase-left', {
   duration:2000,
   origin:'left',
   distance:'300px'
});
sr.reveal('.showcase-right', {
   duration:2000,
   origin:'right',
   distance:'300px'
});
sr.reveal('.showcase-bottom', {
    duration:2000,
    origin:'bottom',
    distance:'300px'
 });
sr.reveal('.showcase-btn', {
   duration:2000,
   delay:2000,
   origin:'bottom'

});

sr.reveal('#testimonial div', {
   duration:2000,
   origin:'bottom'

});
sr.reveal('.info-left', {
   duration:2000,
   origin:'left',
   distance:'300px',
   viewFactor:0.2
});

sr.reveal('.info-right', {
   duration:2000,
   origin:'right',
   distance:'300px',
   viewFactor:0.2
});


// $('.panel-collapse').on('show.bs.collapse', function () {
//     $(this).siblings('.panel-heading').addClass('active');
//   });

//   $('.panel-collapse').on('hide.bs.collapse', function () {
//     $(this).siblings('.panel-heading').removeClass('active');
//   });

$(".open-button").on("click", function() {
    $(this).closest('.collapse-group').find('.collapse').collapse('show');
  });
  
  $(".close-button").on("click", function() {
    $(this).closest('.collapse-group').find('.collapse').collapse('hide');
  });