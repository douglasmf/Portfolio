import React from 'react'
import * as S from './TitleSection.style'

const TitleSection = (props) => {
  return (
    <S.Title><span className='tag'>{'<'}</span> {props.name} <span className='tag'>{'/>'}</span></S.Title>
  )
}

export default TitleSection