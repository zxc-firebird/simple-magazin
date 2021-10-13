var cart = {}; // корзина


$('document').ready(function() {
    loadGoods();
    checkCart();
});

function loadGoods() { // Загрузка товаров на страницу
    $.getJSON('goods.json', function(data) {
        console.log(data);
        var out = '';

        for(var key in data) {
            out += '<div class="single-goods">';
            out += '<p>'+data[key]['name']+'</p>';
            out += '<p>Цена: '+data[key]['price']+'</p>';
            out += '<img src"'+data[key].image+'">';
            out += '<button class="add-to-cart" data-art=">'+key+'"Купить</button>';
            out += '</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() { // Добавить товар в корзину
    var articul = $(this).attr('data-art');

    if(cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    cart[articul] = 1;
    
}

function checkCart() { // Проверка наличие корзины в ЛокалСторадж
    if(localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart() { // Вывод корзины
    var out = '';

    for(var w in cart) {
        out += w + '---' + cart[w]+'<br>';
    }
    $('#mini-cart').html(out);
}