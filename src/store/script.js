import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import { configureStore } from '@reduxjs/toolkit'





let reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    wishList: wishListReducer
}
)

// export const store = createStore(
//     reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = configureStore({
    reducer
})


















