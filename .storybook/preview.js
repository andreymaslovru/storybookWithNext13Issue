import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withTheme = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]