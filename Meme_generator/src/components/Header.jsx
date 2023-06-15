import React from 'react'
import './Header.css'


function Header() {
  return (
    <>
    <div className="header">
        <div className='troll-header'>
            <img src='./Troll.png' className='troll' alt="meme" />
            <p>MemeGenerator</p>
        </div>

            <div class="header-description">
                <p>React Course - Project1</p>
            </div>
    </div>
       </>
  )
}

export default Header