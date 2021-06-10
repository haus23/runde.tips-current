class ColorSchemeService {

  constructor() {

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const themeSettings = localStorage.colorScheme;

    // Set initial mode
    if (themeSettings !== 'light' && darkModeQuery.matches) {
      this.setDarkMode(true);
    }

    darkModeQuery.addEventListener('change', () => {
      this.setDarkMode(darkModeQuery.matches);
    });
  }

  setDarkMode(enabled) {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.colorScheme = 'light';
    }
  }
}

const colorSchemeService = new ColorSchemeService();

export default colorSchemeService;
