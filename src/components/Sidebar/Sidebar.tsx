import React, { useState } from 'react'
import { CalendarIcon, ExitIcon, FinMenIcon, HomeIcon, MapIcon, SearchIcon, SettingsIcon, UserIcon, VidgetIcon, TableIcon } from '../../assets/svg';

const FirstPathSidebarTitleSelectors = [
   { title: 'Главная', id: 1, icon: <HomeIcon />, },
   { title: 'Поиск адресов', id: 2, icon: <SearchIcon />, },
   { title: 'Таблицы', id: 3, icon: <TableIcon />, },
   { title: 'Календарь', id: 4, icon: <CalendarIcon />, },
   { title: 'Карты', id: 5, icon: <MapIcon />, },
   { title: 'Виджеты', id: 6, icon: <VidgetIcon />, },
   { title: 'Настройки', id: 7, icon: <SettingsIcon />, },
]
const UserSettingTitleSelectors = [
   { title: 'Настройки профиля', id: 8, icon: <UserIcon />, },
   { title: 'Управление финансами', id: 9, icon: <FinMenIcon />, },
]
const SecondPathTitleSelectors = [
   { title: 'Выход', id: 1, icon: <ExitIcon />, }
]

const IconList = [
   <CalendarIcon />,
   <ExitIcon />,
   <FinMenIcon />,
   <HomeIcon />,
   <MapIcon />,
   <SearchIcon />,
   <SettingsIcon />,
   <TableIcon />,
   <UserIcon />,
   <VidgetIcon />
]

const Sidebar = () => {
   const [open, setOpen] = useState(true);
   const handleClick = () => setOpen(!open)
   return (
      <>

      </>
   )
}

export default Sidebar
