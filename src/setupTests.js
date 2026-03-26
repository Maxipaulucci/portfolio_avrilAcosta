// jest-dom adds custom matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

window.matchMedia = (query) => ({
  matches: true,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
});
