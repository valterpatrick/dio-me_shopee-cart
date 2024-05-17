// Ações que o carrinho pode fazer

// ✔ Adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
};

//Deletar item no carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1){
        userCart.splice(index, 1);
    }
};

//Remover item no carrinhopelo indice. Diminui um item
async function removeItemByIndex(userCart, index){
    const deleteIndex = index -1;

    if (index >= 0 && index <= userCart.length){
        userCart.splice(deleteIndex, 1);
    }
};

//Remover item no carrinho. Diminui um item
async function removeItem(userCart, item){
    //Encontrar o item
    const indexFound = userCart.findIndex((p) => p.name === item.name);    

    //Se não encontrar
    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    } 
    
    //Se o item for maior que 1, subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //se o item for igual a 1, deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
};

//Calcular o total do carrinho
async function calculateTotal(userCart){
    console.log("\nShopee Cart Total is:");
    
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`💰 Total ${result}`);    
};

async function displayCart(userCart){
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()} `);
    });
};

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}; 