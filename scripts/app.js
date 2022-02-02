'use strict';
let productsData = [];
let productsList = document.querySelectorAll('.product_item');

productsList.forEach(function (productItem) {
	let name = productItem.querySelector('.product_heading').innerText;
	let description = productItem.querySelector('.product_description_text').innerText;
	let price = +productItem.querySelector('.product_price_value').innerText;
	productsData.push(
		{
			name,
			description,
			price,
		}
	);
});

let cart = [];
let addToCartBtn = document.querySelectorAll('.add_cart_btn');
let cartItemsCount = document.querySelector('.cart_count');
let tableItemCart = document.querySelector('.table_item_cart');
let cartBtn = document.querySelector('.cart_btn');
let tableTotalPrice = document.querySelector('.table_total_price');
let tableItemCartHeadding = document.querySelector('.table_item_cart_headding');
let totalPrice = 0;

addToCartBtn.forEach(function (btn) {
	btn.addEventListener('click', addToCart);
});
cartBtn.addEventListener('mouseover', showTableItemCart);
cartBtn.addEventListener('mouseout', hideTableItemCart);

//сдаётся мне, что через задницу как-то всё ниже)). Пока делаю, как понимаю...

function addToCart(event) {
	productsData.forEach(function (product) {
		// console.log(product);
		if (product.name === event.path[2].querySelector('.product_heading').innerText) {
			//не помню, не смог сообразить как получить ссылку на род.- род. элемент event, сделал так.
			console.log(event.path[2].querySelector('.product_heading').innerText);
			cart.push(product);
			console.log(cart);
			cartItemsCount.innerText = cart.length;
			getTotalPrice(product);
			insertInTableItemCart(product);
		}
	})
}

function showTableItemCart(event) {
	if (cart.length !== 0) {
		tableItemCart.classList.remove('table_item_cart_hidden');
	}
}
function hideTableItemCart(event) {
	tableItemCart.classList.add('table_item_cart_hidden');
}
function insertInTableItemCart(product) {
	tableItemCartHeadding.insertAdjacentHTML('afterend', 
	`<div class="table_item_cart_row"><div>${product.name}</div>
 	<div>$${product.price}</div>`);
	tableTotalPrice.innerText = `$${totalPrice}`;
}
function getTotalPrice(product) {
	totalPrice += product.price;
	console.log(totalPrice);
}
//Игорь, спасибо за курс... конечно, с 0 - это далеко не просто, особенно когда работаешь, семья и т.д.). 
// 1. Самое главное, что у меня пока нет понимания, что и в каких случаях применяется, т.е. мы что-то изучаем, а в каких практических случаях это применять?, а в каких другую методику?, имеено из практики...
//2. Хорошо бы, как раз знать практические алгоритмы (очень утомительно пересматривать видео с решением по несколько раз)). Т.е как правильно решить ту или иную задачу... А то, как велосипед изобретать, я принципиально не смотрю решение пока не сдам работу. ) 
//3. Когда изучаешь тему с полного 0, даже вопрос правильно сформулировать сложно)) 
//4. В любом случае - СПАСИБО ВАМ БОЛЬШОЕ!

