export const COLOR_TYPES = ['primary', 'success', 'warning', 'danger']

const themeColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'light',
  'dark'
]

const colors = [
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  'white',
  'gray',
  'gray-dark'
]

export const PRESET_COLOR_MAP = {
  bg: [...themeColors, ...colors, 'body', 'transparent'],
  text: [
    ...themeColors,
    ...colors,
    'body',
    'muted',
    'black-50',
    'white-50',
    'reset'
  ],
  border: [...themeColors, ...colors]
}
