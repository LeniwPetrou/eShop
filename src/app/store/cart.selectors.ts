import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './app.state';

export const selectCart = createFeatureSelector<CartState>('cart');

export const cartSelector = createSelector(
  selectCart,
  (state) => state?.products ?? []
);

export const cartItemsCount = createSelector(
  cartSelector,
  (orders) => orders.length
);
