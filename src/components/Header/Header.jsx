import React from 'react'
import logo from '../../Assets/GloboLogo.png'

const Header = () => {
  return (
    <div className='text-lg'>
      <div className='w-px h-2'>
        <img src={logo} alt='globo logo'className='h-2 w-px'/>
      </div>
      Header
    </div>
  )
}

export default Header