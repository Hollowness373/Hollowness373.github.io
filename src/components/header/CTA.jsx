import React from 'react'
import CV from "../../assets/curriculum-vitae.pdf"

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA