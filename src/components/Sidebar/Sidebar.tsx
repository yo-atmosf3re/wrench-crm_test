import React, { useState } from 'react'
import { CalendarIcon, ExitIcon, FinMenIcon, HomeIcon, MapIcon, SearchIcon, SettingsIcon, UserIcon, VidgetIcon, TableIcon } from '../../assets/svg';
import { CheckMarkIcon } from '../../assets/svg/ChekMark';
import { Link } from 'react-router-dom'

const FirstPathSidebarTitleSelectors = [
   { title: 'Главная', id: 1, icon: <HomeIcon />, url: 'home-page' },
   { title: 'Поиск адресов', id: 2, icon: <SearchIcon />, url: 'search-address' },
   { title: 'Таблицы', id: 3, icon: <TableIcon />, url: 'table' },
   { title: 'Календарь', id: 4, icon: <CalendarIcon />, url: 'calendar' },
   { title: 'Карты', id: 5, icon: <MapIcon />, url: 'map' },
   { title: 'Виджеты', id: 6, icon: <VidgetIcon />, url: 'vidgets' },
]
const UserSettingTitleSelectors = [
   { title: 'Настройки профиля', id: 1, icon: <UserIcon />, url: 'settings-profile' },
   { title: 'Управление финансами', id: 2, icon: <FinMenIcon />, url: 'fin-managment' },
]
const SecondPathTitleSelectors = [
   { title: 'Выход', id: 1, icon: <ExitIcon />, url: 'exit' }
]
const RemoveStyleLink = {
   textDecoration: 'none',
   color: 'inherit'
}



const Sidebar = () => {
   const [active, setActive] = useState(false)
   const onClickSetActive = () => setActive(!active)
   return (
      <aside className='container__sidebar'>
         <div className="sidebar__container">
            <div className="container__title-menu">Меню</div>
            <div className="container__sidebar-list">
               {
                  FirstPathSidebarTitleSelectors.map((f, i) => (
                     <div key={i} className='sidebar-list__path-one'>
                        <div className="path-one__logo">
                           {f.icon}
                        </div>
                        <Link style={RemoveStyleLink} to={f.url}>
                           <div className="path-one__text">
                              {f.title}
                           </div>
                        </Link>
                     </div>
                  ))
               }
               {
                  <div className='sidebar-list__path-one'>
                     <div className="path-one__logo">
                        <SettingsIcon />
                     </div>
                     <div onClick={onClickSetActive} className="path-one__middle-text">
                        Настройки
                        {
                           active && UserSettingTitleSelectors.map((u, i) => (
                              <div key={i} className='sidebar-list__path-two'>
                                 <div className="path-two__logo">{u.icon}</div>
                                 <Link style={RemoveStyleLink} to={u.url}>
                                    <div className="path-two__text">{u.title}</div>
                                 </Link>
                              </div>
                           )
                           )
                        }
                     </div>
                     <div className={active ? 'path-one__checkmark-true' : 'path-one__checkmark-false'}>
                        {/* <div className={classnames(['path-one__checkmark-false'], active, 'path-one__checkmark-true')}> */}
                        <CheckMarkIcon />
                     </div>
                  </div>
               }
               {
                  SecondPathTitleSelectors.map((s, i) => (
                     <div key={i} className='sidebar-list__path-one'>
                        <div className="path-one__logo">
                           {s.icon}
                        </div>
                        <Link style={RemoveStyleLink} to={s.url}>
                           <div className="path-one__text">
                              {s.title}
                           </div>
                        </Link>
                     </div>
                  ))
               }
            </div>
         </div>
      </aside>
   )
}

export default Sidebar
