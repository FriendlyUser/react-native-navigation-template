import {Theme as NavigationTheme } from '@react-navigation/native';

// default theme and light theme
export const LightTheme: NavigationTheme = {
  dark: false,
  colors: {
    primary: '#221E1F',
    background: '#FFFFFF',
    card: '#221E1F',
    text: '#FFFFFF',
    border: '#000000',
    notification: '#221E1F',
  },
};

export const DarkTheme = {
  dark: true,
};

// import {Appearance} from 'react-native';
// const colorScheme = Appearance.getColorScheme();
// export const Theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
export const Theme = LightTheme;
