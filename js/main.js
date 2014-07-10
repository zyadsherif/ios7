var pressTimer

$(".app").mouseup(function(){
  clearTimeout(pressTimer)
  // Clear timeout
  return false;
}).mousedown(function(){
  // Set timeout
  pressTimer = window.setTimeout(function() { 
    $('body').toggleClass('delete');
  },1000)
  return false; 
});

$('.home-button').click(function() {
    $('body').removeClass('delete');
})

$('.x-box').click(function() {
	$(this).parent('div').fadeOut('slow');
})
