import React from 'react'

const Footer = () => {
    const year =new Date().getFullYear()
  return (
    <footer>
      <p className='footer'>Copyright @Harshit Singh Tomar {year}</p>
    </footer>
  )
}

export default Footer
