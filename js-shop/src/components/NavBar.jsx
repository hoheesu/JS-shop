import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function NavBar() {
  const menuList = ['여성','남성','신생아/유아','유아','J&S Home','Sale','지속가능성']
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <p>로그인</p>
        </div>
      </div>
      <div>
        <h1>
          <img src={require('../images/jslogo.png')} width={100}/>
        </h1>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu)=>{
            return <li>{menu}</li>
          })}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input type="search" placeholder='드레스'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar