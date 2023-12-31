import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../pageHeaderContent'

function Contact() {
  return (
    <section id='portfolio' className='portfolio'>
    <PageHeaderContent
    headerText = 'My Contact'
    icon={<BsInfoCircleFill size={40}/>}
    />
  </section>
  )
}

export default Contact
