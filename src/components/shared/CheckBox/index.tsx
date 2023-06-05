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
  return (
    <StyleCheckBox>
      {options.map((option, i) => {
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

/*
const [options, setOptions] = useState([
    { label: 'remoto', checked: false },
    { label: 'presencial', checked: false }
  ])

  const handleSetOption = (key: string) => {
    const newList = options.map((option) => {
      if (option.label === key) {
        return { ...option, checked: !option.checked }
      } else {
        return option
      }
    })

    setOptions(newList)
  }

*/
