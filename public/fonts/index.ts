import {
  Source_Code_Pro as fontSourceCodePro
} from '@next/font/google'


const sourceCodePro = fontSourceCodePro({
  weight: ['500'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
})

const fonts = {
  sourceCodePro
}

export default fonts
