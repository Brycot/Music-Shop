import { useState } from "react";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

const useInitialState = () => {
    const {
        item: orders,
        saveItem: saveOrder,
        sincronizeItem: sincronizeOrder,
        loading: loadingOrder,
        error: loadingError,
    } = useLocalStorage("ORDERS", []);

    const {
        item: ShoppingCart,
        saveItem: saveShoppingCart,
        sincronizeItem: sincronizeShoppingCart,
        loading,
        error,
    } = useLocalStorage("ShoppingCart", []);

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const addToCart = (payload) => {
        const newCart = [...ShoppingCart];
        newCart.push(payload);
        saveShoppingCart(newCart);
    };
    const removeFromCart = (indexValue) => {
        const productIndex = ShoppingCart.findIndex(
            (product) => product.id === indexValue
        );
        const newCart = [...ShoppingCart];
        newCart.splice(productIndex, 1);
        saveShoppingCart(newCart);
    };

    const onPurchase = () => {
        const date = orderDate();
        const id = newOrderID(orders);
        const purchase = [...ShoppingCart];
        const emptyCart = [];
        const newOrder = [...orders];
        newOrder.push({
            buy: purchase,
            date: date,
            id: id,
        });
        saveOrder(newOrder);
        saveShoppingCart(emptyCart);
    };
    return {
        ShoppingCart,
        orders,
        addToCart,
        removeFromCart,
        onPurchase,
        loadingOrder,
    };
};
function newOrderID(orderList) {
    if (!orderList.length) {
        return 1;
    }
    const idList = orderList.map((order) => order.id);
    const idMax = Math.max(...idList);
    return idMax + 1;
}
function orderDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const actualDate = `${day}-${month}-${year}`;
    return actualDate;
}
export default useInitialState;
