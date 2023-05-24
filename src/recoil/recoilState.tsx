import { atom } from 'recoil';

export const isDarkThemeState = atom<boolean>({
  key: 'isDarkThemeState',
  default: false,
});

export const cartItemCountState = atom<number>({
  key: 'cartItemCountState',
  default: 0,
});