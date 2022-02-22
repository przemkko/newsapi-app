export const isServer = (): boolean => {
  // if window is undefined then you're almost certainly not in a browser
  // This doesn't account for being in a worker
  return typeof window === 'undefined';
};
