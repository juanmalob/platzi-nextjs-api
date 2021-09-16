import ButtonOk from '@components/general/ButtonOk'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Rating, Button, Icon } from 'semantic-ui-react'

const AboutPage = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <h1>Sobre los aguacates</h1>
      <ButtonOk />
      <Rating rating={1} maxRating={5} />
      <Button size="small" color="green">
        <Icon name="download" />
        Download
      </Button>
    </section>
  )
}

export default AboutPage
