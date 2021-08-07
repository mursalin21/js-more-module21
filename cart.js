const products = [
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name:'phone', price: 55000, quantity: 1}
];

let totalPrice = 0;

for(const product of products){
    totalPrice += (product.price * product.quantity);
}

console.log(totalPrice);