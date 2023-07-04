import Text from '../shared/Text'
import * as S from './DescriptionWithList.styles'

type DescriptionWithListProps = {
  title: string
  description: string
  list: string[]
  typeList: 'ol' | 'ul'
}

const DescriptionWithList = ({
  title,
  description,
  list,
  typeList
}: DescriptionWithListProps) => {
  return (
    <S.StyleDescriptionWithList title={title}>
      <Text as="subtitle">{title}</Text>
      <Text as="paragraph">{description}</Text>

      <ul>
        {list.map((item, i) => {
          return (
            <S.StyleItemList
              numberitem={i + 1}
              key={i}
              className={typeList === 'ol' ? 'number' : 'disc'}
            >
              <Text as="paragraph">{item}</Text>
            </S.StyleItemList>
          )
        })}
      </ul>
    </S.StyleDescriptionWithList>
  )
}

export default DescriptionWithList

