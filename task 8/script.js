let orders = [];

let order1 = {
    table: 1,
    dishes: [
        { name: "Кава", price: 30 },
        { name: "Чізкейк", price: 50 },
    ],
    status: "в обробці"
};

let order2 = {
    table: 2,
    dishes: [
        { name: "Лате", price: 40 },
        { name: "Тірамісу", price: 60 },
        { name: "Форшмак", price: 170 },
        { name: "Судак запечений", price: 480 },
    ],
    status: "готується"
};

let order3 = {
    table: 3,
    dishes: [
        { name: "Сангрия", price: 90 },
        { name: "Наполеон", price: 160 },
        { name: "Крокеты", price: 130 },
        { name: "Дорада на грилі", price: 580 },
    ],
    status: "запізднюється"
};
let order4 = {
    table: 4,
    dishes: [
        { name: "Сок", price: 20 },
        { name: "Хліб", price: 30 },
        { name: "Сало", price: 40 },
        { name: "Салат Мімоза", price: 120 },
    ],
    status: "на переробці"
};

function addOrder(orders, order) {
    orders.push(order)
}


function getTotalAmount(orders, tableNumber) {

    let orderToPay = orders.find((order) => (order.table === tableNumber))
    let dishes = Object.values(orderToPay)[1]    // Ты бы знал сколько я мучался с этим... часа 3-4 убил просто потому что каждый раз когда старался применить метод
    // то получал ответ что этот метод не функция. Потом я понял что фигня в том что каждый раз когда я нахожу запрашиваемый заказ - это объект. А с объектом эти ж методы
    // не работают. Теоретически наверное можно было бы использовать reduce вначале чтобы создать массив, но мой мозг думает в том направлении что ты видишь тут))
    let totalNow = dishes.reduce((accumulator, elem) => {
        const total = accumulator + elem.price
        return total
    }, 0) // через часик тыканий я понял что мы здесь оказывается задаем значение для accumulator )))
    return console.log(`The total for table number ${tableNumber} is ${totalNow}UAH`)

}

function changeOrderStatus(orders, tableNumber, status) {
    let orderToChange = orders.find((order) => (order.table === tableNumber))
    let arrayOrder = Object.entries(orderToChange)
    arrayOrder.splice(2, 2, ['status', status])
    let changedOrder = Object.fromEntries(arrayOrder)
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].table === tableNumber) {
            Object.assign(orders[i], changedOrder)
            return console.log(`You have changed status for table number ${tableNumber} to "${status}"`)
        }
    }
}
// ну как ты понял, для меня это дз - чистой воды ностальгия по предыдущему дз. Когда мы учили стринги и чуть чуть массивов, а чтобы выполнить дз 
// мой мозг говорит что надо знать все про массивы иначе не выйдет ничего. Вот тут также само только теперь объекты))) Буду оч благодарен если подскажешь
// как тут работать без обращения к обьектам. Просто у меня вся беда в том что нам надо не просто вытащить информацию из объекта, но и перезаписать ее
// в уже существующем. Я тут творил Бог знает что.... но как ни крути, не могу вовнутрь объетка чтото запихнуть при помощи методов для array. Короче подскажи 
// как ты это видишь, спасибо)) Ну и да я понимаю что скорее всего то что я сделал в 10 строк - делается на самом деле в 3 строки, но тот факт что я смог уже победа.


function cancelOrder(orders, tableNumber) {
    let orderToCancel = orders.findIndex((order) => (order.table === tableNumber))
    orders.splice(orderToCancel, 1)
    return console.log(`You have cancelled order for table number ${tableNumber}`)

}

addOrder(orders, order1)
addOrder(orders, order2)
addOrder(orders, order3)
addOrder(orders, order4)
console.log(orders)
getTotalAmount(orders, 3)
changeOrderStatus(orders, 2, "відмова від замовлення")
console.log(orders)
cancelOrder(orders, 2)
console.log(orders)

