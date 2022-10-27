import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const TitleSidebarSelectors = [

]

const Sidebar = () => {
   return (
      <>
         <Drawer
            variant="permanent"
            sx={{
               width: 240,
               flexShrink: 0,
               [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
         >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
               <List>
                  <div>Меню</div>
                  {['Главная', 'Поиск адресов', 'Таблицы', 'Календарь', 'Карты', 'Виджеты', 'Настройки', 'Настройки профиля', 'Управление финансами', 'Выход'].map((text, index) => (
                     <ListItem key={text} disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                           </ListItemIcon>
                           <ListItemText primary={text} />
                        </ListItemButton>
                     </ListItem>
                  ))}
               </List>
               {/* <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                     <ListItem key={text} disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                           </ListItemIcon>
                           <ListItemText primary={text} />
                        </ListItemButton>
                     </ListItem>
                  ))}
               </List> */}
            </Box>
         </Drawer>
      </>
   )
}

export default Sidebar
