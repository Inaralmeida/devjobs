import { DotOutline } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import Avatar from '../Avatar'
import Text from '../shared/Text'
import { StylesCardJob } from './cardJob.styles'

type CardJobProps = {
  id: number
  logo: string
  logoBackground: string
  position: string
  contract: string
  postedAt: string
  location: string
  company: string
}

const CardJob = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  contract,
  postedAt,
  location
}: CardJobProps) => {
  const { gray600 } = useTheme()

  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(`/jobs/${id}`)
  }
  return (
    <StylesCardJob onClick={handleClickCard}>
      <picture>
        <Avatar
          alt={company}
          background={logoBackground}
          src={logo}
          type="thumb"
        />
      </picture>
      <div>
        <article>
          <Text as="paragraph">{postedAt}</Text>
          <DotOutline size={24} weight="fill" color={gray600} />
          <Text as="paragraph">{contract}</Text>
        </article>
        <Text as="subtitle" fontSize={'20px'}>
          {position}
        </Text>
        <Text as="paragraph">{company}</Text>
      </div>
      <Text as="link">{location}</Text>
    </StylesCardJob>
  )
}

export default CardJob
