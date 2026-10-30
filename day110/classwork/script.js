// N1
let product = {
    productName : 'iPhone',
    price : 1000,
    quantity : 10,
    inStock : true,
    allProductPrice(){
        return product.price * product.quantity
    },
    isStock(){
        return product.inStock ? "yes we have this nproduct" : "no we dont have this product"
    }
}
console.log('total:',product.allProductPrice())
console.log(product.isStock())