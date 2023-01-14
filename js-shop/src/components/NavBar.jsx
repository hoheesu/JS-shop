import React,{ useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function NavBar({ authenticate, setAuthenticate }) {
  const navigate =  useNavigate()
  const goToLogin = () => {
    authenticate ? setAuthenticate(false): navigate('/login') 
    
  }
  const goToMain = () => {
    navigate('/')
  }
  const searchKey = (event) => {
    if(event.key === 'Enter') {
      let keyword = event.target.value
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }
  useEffect(()=>{

  },[authenticate])
  const menuList = ['여성','남성','신생아/유아','유아','J&S Home','Sale','지속가능성']
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <p>{authenticate ? '로그아웃' : '로그인'}</p>
        </div>
      </div>
      <h1 onClick={goToMain}>
        <img src={require('../images/jslogo.png')} width={100}/>
      </h1>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu)=>{
            return <li>{menu}</li>
          })}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input type="search" placeholder='드레스' onKeyPress={event => searchKey(event)}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar