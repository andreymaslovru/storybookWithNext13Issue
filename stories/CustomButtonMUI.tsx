import React from 'react'
import MuiButton, {
  ButtonProps as MuiButtonProps
} from '@material-ui/core/Button'

const CustomButtonMUI: React.FC<MuiButtonProps> = ({...rest}) => {
  return (
    <MuiButton {...rest} />
  )
}

export default CustomButtonMUI