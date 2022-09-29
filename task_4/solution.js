// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data = JSON.parse(json);
    return data.products;
}

// Напишите функцию renderProductsCards(json)
function renderProductsCards(json) {
    clearProducts();
    products = parseProducts(json); 
    length = products.length;
    for (let i = 0; i <= length - 1; i += 1) {
        addProduct(products[i]);
    }
}
