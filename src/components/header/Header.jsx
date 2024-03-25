import React, { useState } from 'react'

function Header() {
  const [test,setTest] = useState(1) 
  return (
    <header className=''>
      <div>
        <ul className='flex justify-between backdrop-blur-sm bg-white/30'>
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
      </div>
    </header>
  )
}

export default Header