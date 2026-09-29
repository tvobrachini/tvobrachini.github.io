export const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

// Scrolls to the top and drops any #section from the address bar, keeping the query string
// and without adding a history entry.
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};
