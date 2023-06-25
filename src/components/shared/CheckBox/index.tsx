import { useState, useEffect } from 'react'
import { Check } from '@phosphor-icons/react'
import { StyleCheckBox, StyleOptionCheckBox } from './checkbox.styles'

type CheckboxProps = {
  setValue: (value: string) => void
  options: {
    label: string
    checked: boolean
  }[]
}

const CheckBox = ({ options, setValue }: CheckboxProps) => {
  const [listOptions, setListOptions] = useState(options)
  useEffect(() => {
    setListOptions(options)
  }, [options])
  return (
    <StyleCheckBox>
      {listOptions.map((option, i) => {
        return (
          <StyleOptionCheckBox key={i} onClick={() => setValue(option.label)}>
            <span className={option.checked ? 'active' : ''}>
              {option.checked && <Check size={20} weight="bold" color="#fff" />}
            </span>
            {option.label}
          </StyleOptionCheckBox>
        )
      })}
    </StyleCheckBox>
  )
}

export default CheckBox
