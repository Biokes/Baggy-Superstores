// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer, { addItem } from '@/redux/cartSlice';
// import { CartAndIcon, CartItem } from '@/interfaces/interfaces';
//
// describe('Cart Reducers', () => {
//     let store: ReturnType<typeof configureStore>;
//
//     beforeEach(() => {
//         // Create a new store instance before each test
//         store = configureStore({
//             reducer: {
//                 cart: cartReducer,
//             },
//         });
//     });
//
//     it('should add an item to the cart and update state correctly', () => {
//         // Initial state
//         const initialState: CartAndIcon = store.getState().cart;
//         expect(initialState.isRed).toBe(false);
//         expect(initialState.cart.length).toBe(0);
//
//         // Define a cart item
//         const cartItem: CartItem = {
//             quantity: 1,
//             bag: {
//                 image: 'image',
//                 store: 'name',
//                 price: '$12',
//             },
//         };
//
//         // Dispatch the addItem action
//         store.dispatch(addItem(cartItem));
//
//         // Get the updated state
//         const updatedState: CartAndIcon = store.getState().cart;
//         expect(updatedState.isRed).toBe(true);
//         expect(updatedState.cart.length).toBe(1);
//         expect(updatedState.cart[0]).toEqual(cartItem);
//     });
// });
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem } from '@/redux/cartSlice';
import { CartAndIcon, CartItem } from '@/interfaces/interfaces';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from "@/components/homePage/navbar";
import {Provider} from "react-redux";


describe('Cart Reducers', () => {
    let store: ReturnType<typeof setupStore>;
    const setupStore = () => configureStore({
            reducer: {
                cart: cartReducer,
            },
        });
    beforeEach(() => {
        store = setupStore();
    })

    it('tests item is added to cart and red icon on cart is shown', () => {
        const initialState: CartAndIcon = store.getState().cart;
        expect(initialState.isRed).toBe(false);
        expect(initialState.cart.length).toBe(0);
        const cartItem: CartItem = {
            quantity: 1,
            bag: {
                image: 'image',
                store: 'name',
                price: '$12',
            },
        };
        store.dispatch(addItem(cartItem));
        const updatedState: CartAndIcon = store.getState().cart;
        expect(updatedState.isRed).toBe(true);
        expect(updatedState.cart.length).toBe(1);
        expect(updatedState.cart[0]).toEqual(cartItem);
        console.log(updatedState.cart[0])
    });

    it('test that when cart is viewed, red icon on cart is off',()=>{
        const initialState: CartAndIcon = store.getState().cart;
        expect(initialState.isRed).toBe(false);
        expect(initialState.cart.length).toBe(0);
        const cartItem: CartItem = {
            quantity: 1,
            bag: {
                image: 'image',
                store: 'name',
                price: '$12',
            },
        };
        store.dispatch(addItem(cartItem));
        let updatedState: CartAndIcon = store.getState().cart;
        expect(updatedState.isRed).toBe(true);
        expect(updatedState.cart.length).toBe(1);
        expect(updatedState.cart[0]).toEqual(cartItem);
        console.log(updatedState.cart[0])
        render(<Navbar props={0} />);
        let cartIcon = screen.getByTestId('cart-icon')
        fireEvent.click(cartIcon);
        render(
            <Provider store={store}>
                <Navbar props={0} />
            </Provider>
        );

        cartIcon = screen.getByTestId('cart-icon');
        fireEvent.click(cartIcon);

        updatedState = store.getState().cart;
        expect(updatedState.isRed).toBe(false);
    });
});
