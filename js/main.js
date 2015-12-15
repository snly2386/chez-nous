$(document).ready(function(){
  $(".home-nav-item").css('opacity', 0);
  $(".fly-logo").css('opacity', 0);
  var counter = 100
  $('.home-nav-item').each(function(){
    var that = $(this)
    setTimeout(function(){
      that.addClass('animated fadeInUp')
    }, counter)
    counter += 200;
  })

  setTimeout(function(){
    $('.fly-logo').animate({'opacity' : 1}, 100)
    $('.fly-logo').addClass('animated zoomIn')
  }, 1000)

  // $('.home-title-text').each(function(){
  //   var that = $(this)
  //   setTimeout(function(){
  //     that.animate({'opacity' : 1}, 100)
  //     that.addClass('animated fadeInUp')
  //   }, counter)
  //   counterNew += 200
  // })
});