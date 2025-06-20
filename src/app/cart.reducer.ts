import { Action, createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, reset } from './cart.actions';

export const initialState = 0;

// /**
//  * Define a reducer function for add to cart
//  */
const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { amount }) => state + amount),
  on(reset, (state) => 0)
);

export function cartReducer(state: number | undefined, action: Action) {
  return _cartReducer(state, action);
}

const _cartRemover = createReducer(
  initialState,
  on(removeFromCart, (state) => state - 1),
  on(reset, (state) => 0)
);

export function cartRemover(state: number | undefined, action: Action) {
  return _cartRemover(state, action);
}
