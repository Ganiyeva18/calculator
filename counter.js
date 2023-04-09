// var plusBtn = document.querySelector('.plus');
// var minusBtn = document.querySelector('.minus');
// var text = document.querySelector('.text')
// plusBtn.onclick = function(){
// 	text.innerText = ++text.innerText
// }
// minusBtn.onclick = function(){
// 	text.innerText = --text.innerText
// 	if (text.innerText < 0) {
// 		text.innerText = 0
// 	}
// }

window.onclick = function(event){
	if (event.target.classList.contains('plus')){
		var current = event.target.closest('.child');
	current.querySelector('.text').innerText =++
     current.querySelector('.text').innerText;
}

if (event.target.classList.contains ('minus')){
		var current = event.target.closest('.child');
	current.querySelector('.text').innerText =--
     current.querySelector('.text').innerText;
     if (current.querySelector ('.text').innerText < 0) {
 		current.querySelector ('.text').innerText = 0
 	}
}
}

