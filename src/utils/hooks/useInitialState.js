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
    }

    const onPurchase = () => {
        const purchase = [...ShoppingCart];
        const emptyCart = [];
        const newOrder = [...orders];
        newOrder.push(purchase);
        saveOrder(newOrder);
        saveShoppingCart(emptyCart);
    }
    return {
        ShoppingCart,
        addToCart,
        removeFromCart,
        onPurchase,
    };
};

export default useInitialState;

