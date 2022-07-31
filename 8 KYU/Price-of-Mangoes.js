// There's a "3 for 2" offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free


function mango(quantity, price) {
    return quantity * price - (Math.floor(quantity / 3) * price);
}