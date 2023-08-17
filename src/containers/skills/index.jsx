import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../pageHeaderContent'

function Skill() {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
      headerText = 'My Skills'
      icon={<BsInfoCircleFill size={40}/>}
      />
    </section>
  )
}

export default Skill
