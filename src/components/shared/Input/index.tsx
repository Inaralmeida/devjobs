import { MagnifyingGlass, MapPin } from '@phosphor-icons/react'
import React from 'react'
import { useTheme } from 'styled-components'
import { StylesInput } from './input.styles'

type InputProps = {
  icon?: React.ReactNode
  value: string
  type: 'title' | 'location'
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ icon, value, type, ...rest }: InputProps) => {
  const { violet500 } = useTheme()
  return (
    <StylesInput>
      {type === 'title' ? (
        <MagnifyingGlass size={24} weight="fill" color={violet500} />
      ) : (
        <MapPin size={24} weight="fill" color={violet500} />
      )}
      <input type="text" {...rest} value={value} />
    </StylesInput>
  )
}

export default Input
