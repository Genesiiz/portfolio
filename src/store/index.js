import { writable } from 'svelte/store';

// Toggle show map
const lightOff = writable(false);

export const lightOffStore = {
  subscribe: lightOff.subscribe,
  setlightOff: val => {
    lightOff.set(val);
  }
}