import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <div className='footerConteiner'>
      <h4 className='titleFooter'>ENCONTRANOS EN</h4>
      <div className='redesFooter'>
        <a
          href='https://www.instagram.com/tu_cuenta'
          target='_blank'
          rel='noopener noreferrer'
          className='iconLink'
        >
          <InstagramIcon fontSize='large' />
        </a>
        <a
          href='https://www.facebook.com/tu_pagina'
          target='_blank'
          rel='noopener noreferrer'
          className='iconLink'
        >
          <FacebookIcon fontSize='large' />
        </a>
      </div>
    </div>
  )
}

export default Footer
