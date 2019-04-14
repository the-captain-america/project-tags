import { themeConf } from 'config.js';
const updateTheme = {
  id: 'updateTheme',
  label: 'themeAdjuster',
  defaultTheme: themeConf.theme,
  options: [
    {
      themeName: 'themedefault',
      buttonColor: '#ffffff',
      textColor: '#323332'
    },
    {
      themeName: 'theme2',
      buttonColor: '#ffffff',
      textColor: '#323332'
    }
  ]
};

const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeAdjuster.Sidebar',
  defaultTheme: themeConf.sidebar,
  options: [
    {
      themeName: 'themedefault',
      buttonColor: '#323332',
      backgroundColor: undefined,
      textColor: '#788195'
    },
    {
      themeName: 'theme1',
      buttonColor: '#e0364c',
      backgroundColor: '#e0364c',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme2',
      buttonColor: '#6534ff',
      backgroundColor: '#6534ff',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme3',
      buttonColor: '#4482FF',
      backgroundColor: '#4482FF',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme4',
      buttonColor: '#422e62',
      backgroundColor: '#422e62',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme5',
      buttonColor: '#22144c',
      backgroundColor: '#22144c',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme6',
      buttonColor: '#4670a2',
      backgroundColor: '#4670a2',
      textColor: '#ffffff'
    },
    {
      themeName: 'theme7',
      buttonColor: '#494982',
      backgroundColor: '#494982',
      textColor: '#ffffff'
    }
  ]
};

const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeAdjuster.Background',
  defaultTheme: themeConf.layout,
  options: [
    {
      themeName: 'default',
      buttonColor: '#ffffff',
      backgroundColor: '',
      textColor: ''
    },
    {
      themeName: 'primary',
      buttonColor: '',
      backgroundColor: '',
      textColor: ''
    },
    {
      themeName: 'secondary',
      buttonColor: '',
      backgroundColor: '',
      textColor: ''
    },
    {
      themeName: 'tertiary',
      buttonColor: '',
      backgroundColor: '',
      textColor: ''
    }
  ]
};
const generatedTheme = {
  updateTheme,
  sidebarTheme,
  layoutTheme
};

export function getThemeStatus(attribute, selectedName) {
  let selecetedTheme = {};
  generatedTheme[attribute].options.forEach(theme => {
    if (theme.themeName === selectedName) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}

export default generatedTheme;
