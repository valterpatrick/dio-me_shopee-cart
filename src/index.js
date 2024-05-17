import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("hello shopee");

const item1 = await createItem("hotwhells ferrrari", 20.99, 1);
const item2 = await createItem("hotwhells lamborghini", 39.99, 3);

// Adiciona 2 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//await cartService.removeItemByIndex(myCart, 2);
await cartService.removeItem(myCart, item2); 
await cartService.removeItem(myCart, item2); 

await cartService.displayCart(myCart);

// Deleta 2 itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);