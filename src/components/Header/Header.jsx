import React from 'react'
import logo from '../../Assets/GloboLogo.png'

const Header = () => {
  return (
    <div className='flex w-full py-[-10rem] px-4 '>
      <div className='flex flex-row '>
        <img className='w-20 h-36 mx-auto mt-[-3rem] bg-white' src={logo} alt="/" />
        <div>
        <h1 className='text-xl italic #c2410c float-right '>Providing houses all over the world</h1> 
       </div>
      </div>
    </div>
  )
}

export default Header