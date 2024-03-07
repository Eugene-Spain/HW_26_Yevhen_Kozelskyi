// Задача: Вам потрібно розробити систему управління замовленнями для кафе. Кожне замовлення представляється як об'єкт, 
// що містить інформацію про стіл, список страв (масив об'єктів з назвою та ціною) та статус замовлення. Ваше завдання — реалізувати наступні функції:

// addOrder(orders, order) - додати нове замовлення в систему.

// getTotalAmount(orders, tableNumber) - розрахувати загальну суму замовлення для конкретного столу.

// changeOrderStatus(orders, tableNumber, status) - змінити статус замовлення для конкретного столу.

// cancelOrder(orders, tableNumber) - скасувати замовлення для конкретного столу (видалити його з системи).

let orders = [];

let order1 = {
 table: 1,
 dishes: [
  { name: "Кава", price: 30 },
  { name: "Чізкейк", price: 50 }
 ],
 status: "в обробці"
};

let order2 = {
 table: 2,
 dishes: [
  { name: "Лате", price: 40 },
  { name: "Тірамісу", price: 60 }
 ],
 status: "готується"
};

function addOrder(orders, order)  {
    orders.push(order)
}


    function getTotalAmount(orders, tableNumber){
    
    let orderToPay = orders.find((order) => (order.table === tableNumber))
    console.log(orderToPay)
    return orderToPay
    let anotherArray = orderToPay[1].map((dish) => total += dish.price )
    console.log(total)
    console.log(anotherArray)
}


// let sum = [1, 2, 3, 4].reduce((accumulator, elem) => {
//     const result = accumulator + elem
//     console.log(`${accumulator} + ${elem} = ${result}`);
//     return result
// }, 0)
// let newUsers = users.reduce((accumulator, user) => {
//     return [...accumulator, {...user, age: user.age + 5, key: (Math.random()*10000).toFixed(0)}]
// }, [])

addOrder(orders, order1)
addOrder(orders, order2)
console.log(orders)
getTotalAmount(orders, 1)


