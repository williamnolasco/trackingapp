 var icon_gift = document.querySelector('.icon-gift');
var modal_mail_only = document.querySelector('.modal-mail-only');
var button_modal = document.querySelector('.button-modal');

icon_gift.addEventListener('click', function(){
	modal_mail_only.style.display = 'block';
});
button_modal.addEventListener('click', function(){
	modal_mail_only.style.display = 'block';
});

window.onclick = function(event){
	if( event.target === modal_mail_only ){
		modal_mail_only.style.display = 'none';
	}
}


var slider_father = $('.slider-father');

function move_right() {
    slider_father.animate({
        left: '-100%'
    }, 1000, function() {
        $('.slider-child:first').insertAfter('.slider-child:last');
        slider_father.css('left', '0%');
    });
}

function autoplay() {
    var autoscrolling = setInterval(function() {
        move_right();
    }, 3000);
}

autoplay();

var slider_father_m = $('.slider-father-m');

function move_right_m() {
    slider_father_m.animate({
        left: '-100%'
    }, 1000, function() {
        $('.slider-child-m:first').insertAfter('.slider-child-m:last');
        slider_father_m.css('left', '0%');
    });
}

function autoplay_m() {
    var autoscrolling_m = setInterval(function() {
        move_right_m();
    }, 3000);
}

autoplay_m();

//Despalzando hacia abajo
var move_down = document.querySelector('.move-down');

move_down.addEventListener('click', function(){
    $('body, html').animate({
        scrollTop: $('.functioning-container').offset().top
    }, 1000);
});


