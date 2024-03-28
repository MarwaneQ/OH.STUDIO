import React, { useState } from 'react'

function Header() {
  const [test,setTest] = useState(1) 
  return (
    <header className='backdrop-filter backdrop-blur-[20px]'>
      <nav className='backdrop-filter backdrop-blur-[20px]'>
        <ul className='flex'>
          <div>
            <li>
              <a href="">Home</a>
            </li>
          </div>
          <div>
            <li>
              <a href="">Profile</a>
            </li>
          </div>
          <div>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header