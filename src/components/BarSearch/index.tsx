import { useState } from 'react'
import Button from '../shared/Button'
import CheckBox from '../shared/CheckBox'
import Input from '../shared/Input'
import { StylesBarSearch } from './BarSearch.styles'

const BarSearch = () => {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [searchByLocation, setSearchByLocation] = useState('')
  const [optionsContratc, setOptionsContratc] = useState([
    { label: 'Part Time', checked: false },
    { label: 'Full Time', checked: false }
  ])

  const handleSetTypeContract = (label: string) => {
    console.log(label)
    const newList = optionsContratc.map((option) => {
      if (option.label === label) {
        return {
          ...option,
          checked: !option.checked
        }
      } else {
        return option
      }
    })
    console.log(newList)
    setOptionsContratc(newList)
  }
  return (
    <StylesBarSearch className="content">
      <section title="filter by title, companies or espertise">
        <Input
          type="title"
          placeholder="filter by title, companies or espertise"
          aria-label="filter by title, companies or espertise"
          value={searchByTitle}
          onChange={(e) => setSearchByTitle(e.target.value)}
        />
      </section>
      <section title="filter by location">
        <Input
          type="location"
          placeholder="filter by location"
          aria-label="filter by location"
          value={searchByLocation}
          onChange={(e) => setSearchByLocation(e.target.value)}
        />
      </section>

      <section title="type contract" className="section__checkbox">
        <CheckBox options={optionsContratc} setValue={handleSetTypeContract} />
        <Button title="button search">Search</Button>
      </section>
    </StylesBarSearch>
  )
}

export default BarSearch
