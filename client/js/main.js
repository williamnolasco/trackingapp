var icon_gift = document.querySelector('.icon-gift');
var modal_mail_only = document.querySelector('.modal-mail-only');

icon_gift.addEventListener('click', function(){
	modal_mail_only.style.display = 'block';
});

window.onclick = function(event){
	if( event.target === modal_mail_only ){
		modal_mail_only.style.display = 'none';
	}
}