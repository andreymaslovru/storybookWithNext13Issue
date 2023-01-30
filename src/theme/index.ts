import fonts from '@/public/fonts'
import { createTheme } from '@material-ui/core/styles'

const typography = {
  ...fonts.sourceCodePro.style
}

const theme = createTheme({
  typography,
  overrides: {
    MuiButton: {
      root: {
        margin: 0,
        ...fonts.sourceCodePro.style,
        color: 'red',
        fontWeight: 'bold'
      }
    }
  }
})

export default theme