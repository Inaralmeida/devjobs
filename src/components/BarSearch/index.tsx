import { useEffect, useState } from 'react'
import Button from '../shared/Button'
import CheckBox from '../shared/CheckBox'
import Input from '../shared/Input'
import { StylesBarSearch } from './BarSearch.styles'

type BarSearchProps = {
  handleChange: (value: string) => void
  searchJobs: () => void
  valueSearch: string
}
const BarSearch = ({ handleChange, searchJobs }: BarSearchProps) => {
  const [searchByTitle, setSearchByTitle] = useState('')
  const [searchByLocation, setSearchByLocation] = useState('')
  const [optionsContratc, setOptionsContratc] = useState([
    { label: 'Part Time', checked: false },
    { label: 'Full Time', checked: false }
  ])

  useEffect(() => {
    handleChange(searchByTitle)
  }, [searchByTitle, searchByLocation])
  const handleSetTypeContract = (label: string) => {
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
        <Button title="button search" onClick={searchJobs}>
          Search
        </Button>
      </section>
    </StylesBarSearch>
  )
}

export default BarSearch
