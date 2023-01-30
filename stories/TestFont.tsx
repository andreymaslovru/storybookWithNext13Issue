import React from 'react'
import { Roboto_Flex as fontRobotoFlex } from '@next/font/google'

const robotoFlex = fontRobotoFlex({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['400', '500', '600', '700']
})

interface TestFontProps {
  value: string
}

export const TestFont: React.FC<TestFontProps> = ({ value }) => {
  return (
    <div className={robotoFlex.className}>
      {value}
    </div>
  )
}