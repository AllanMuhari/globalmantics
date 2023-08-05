import React from 'react'
import logo from '../../Assets/GloboLogo.png'

const Header = () => {
  return (
    <div>
      <div className='flex flex-row '>
        <img className='h-36' src={logo} alt='globo logo'/>
        <div>
        <h1 className='text-xl italic #c2410c float-right '>Providing houses all over the world</h1> 
       </div>
      </div>
    </div>
  )
}

export default Header