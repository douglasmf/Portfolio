import React from 'react'
import * as S from './Contact.style'
import TitleSection from '../../../../components/TitleSection/TitleSection'
import FormContato from '../../../../components/FormContato/FormContato'
import SocialContato from '../../../../components/SocialContato/SocialContato'

const Contact = (props) => {
  return (
    <S.ContactContainer className={props.className}>
      <TitleSection name='Contact' />
      <S.ContactsContain>
        <FormContato/>
        <SocialContato/>
      </S.ContactsContain>
    </S.ContactContainer>
  )
}

export default Contact