import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.addedProduct;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if (items[addedProduct.id]) {
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + productPrice
                );
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [addedProduct.id]: updatedCartItem,
                    },
                    totalAmount: state.totalAmount + prodPrice,
                };
            } else {
                const newCartItem = new CartItem(
                    1,
                    prodPrice,
                    prodTitle,
                    prodPrice
                );
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: newCartItem },
                    totalAmount: state.totalAmount + prodPrice,
                };
            }
    }
    return state;
};