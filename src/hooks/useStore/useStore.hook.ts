import { useDispatch as _useDispatch, useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
