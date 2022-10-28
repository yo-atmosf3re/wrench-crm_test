import React from 'react'
import { UserIconFromHeader, WrenchIcon } from '../../assets/svg'

const Header = () => {
   return (
      <header className='header'>
         <div className='header__container'>
            <div className="container__logo-title">
               <div className="logo-title__logo">
                  <WrenchIcon />
               </div>
               <div className="logo-title__title">
                  Wrench CRM
               </div>
            </div>
            <div className="container__auth-block">
               <div className="auth-block__logo">
                  <UserIconFromHeader />
               </div>
               <div className="auth-block__user-name">
                  Имя Фамилия
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
