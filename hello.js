const totalPrice = cart.reduce((total, item) => item.price + total, 0);

console.log(totalPrice);
