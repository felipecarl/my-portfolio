// Runs before React hydrates (see app/layout.tsx). Reads the saved theme
// synchronously and stamps it onto <html> so the first paint is already the
// right color scheme — without this, the page would flash the default theme
// then flip once JS runs (a "flash of unstyled/wrong theme").
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;
