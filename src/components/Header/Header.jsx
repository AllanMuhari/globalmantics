import React from 'react'
import logo from '../../Assets/GloboLogo.png'

const Header = () => {
  return (
    <div>
      <div className='w-px h-2'>
        <img src={logo} alt='globo logo'/>
      </div>
       <div>
        <h1 className='text-2xl font-bold'>Globo News</h1>
       </div>
    </div>
  )
}

export default Header