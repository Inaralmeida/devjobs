import React from 'react'
import Button from '../shared/Button'
import {
  StylesBodyDescriptionJob,
  StylesNameJob
} from './BodyDescriptionJob.styles'
import Text from '../shared/Text'
import { DotOutline } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

const BodyDescriptionJob = () => {
  const { gray600 } = useTheme()
  return (
    <StylesBodyDescriptionJob className="content">
      <StylesNameJob title="name job" className="nameJob">
        <div>
          <div className="timeAndContract">
            <Text as="paragraph">time</Text>
            <DotOutline size={24} weight="fill" color={gray600} />
            <Text as="paragraph">contract</Text>
          </div>
          <Text as="title">name job</Text>
          <Text as="link">location</Text>
        </div>
        <Button label="Apply Now" variant="primary" />
      </StylesNameJob>
      <section title="description job">
        <Text as="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          ullam maxime? Laboriosam sapiente molestiae, voluptate, consequatur
          facere, dicta et unde nostrum excepturi aspernatur ratione cupiditate
          neque quam deleniti libero dolores. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Officia, ullam maxime? Laboriosam
          sapiente molestiae, voluptate, consequatur facere, dicta et unde
          nostrum excepturi aspernatur ratione cupiditate neque quam deleniti
          libero dolores.
        </Text>
      </section>

      <section title="Requirements">
        <Text as="subtitle">Requirements</Text>
        <Text as="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          ullam maxime? Laboriosam sapiente molestiae, voluptate, consequatur
          facere, dicta et unde nostrum excepturi aspernatur ratione cupiditate
          neque quam deleniti libero dolores.
        </Text>

        <Text as="paragraph">Lorem ipsum dolor sit</Text>
        <Text as="paragraph">Lorem ipsum dolor sit</Text>
        <Text as="paragraph">Lorem ipsum dolor sit</Text>
        <Text as="paragraph">Lorem ipsum dolor sit</Text>
      </section>

      <section title="What You Will Do">
        <Text as="subtitle">What You Will Do</Text>
        <Text as="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          ullam maxime? Laboriosam sapiente molestiae, voluptate, consequatur
          facere, dicta et unde nostrum excepturi aspernatur ratione cupiditate
          neque quam deleniti libero dolores.
        </Text>

        <ol>
          <Text as="paragraph">Lorem ipsum dolor sit</Text>
          <Text as="paragraph">Lorem ipsum dolor sit</Text>
          <Text as="paragraph">Lorem ipsum dolor sit</Text>
          <Text as="paragraph">Lorem ipsum dolor sit</Text>
        </ol>
      </section>
    </StylesBodyDescriptionJob>
  )
}

export default BodyDescriptionJob
