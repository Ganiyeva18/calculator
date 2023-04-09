var parent = document.querySelector(".parent");
for(var i=0; i<products.length;i++){
	parent.innerHTML+=`
	<div class = "child">
	<div class="products-img" style="background-image:url(${products [i].img})"></div>
	<h1>${ products[i].title}</h1>
	<p>${ products[i].discription}</p>
	<p>${ products[i].price}</p>
	<button class = "plus"> + </button>
	<p class = "text"> 1 </p>
	<button class = "minus"> - </button>
</div>
	`
}