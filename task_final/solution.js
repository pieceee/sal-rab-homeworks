function sendRequest(name, phone, address, goods, sum) {
    let orderInormation = {data: {}};

    let data = {client: "", order: {address: "",sum: 0}, goods: []};

    data.client = `${name} ${phone}`;

    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    data.order.sum = sum;

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        let good = {title: "", count: 0};
        good.title = goods[i].title; 
        good.count = goods[i].count; 
        data.goods.push(good);
    };

    orderInormation.data=data;

    let jsonData = JSON.stringify(orderInormation);

    return jsonData;
}
