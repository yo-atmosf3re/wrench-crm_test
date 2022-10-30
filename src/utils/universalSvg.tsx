import React from 'react'

export const universalSvg = (path: string, rest?: string, color?: string) => {
   return (
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
         <path d={path} fill={color || '#1C1C1E'} />
         {
            rest &&
            <path
               d={rest}
               fill={color || '#1C1C1E'}
            />
         }
      </svg>
   )
}

export enum SVG_NAME {
   CALENDAR_ICON = 'CALENDAR_ICON',
   CHEKMARK_ICON = 'CHEKMARK_ICON',
   EXIT_ICON = 'EXIT_ICON',
   FINMIN_ICON = 'FINMIN_ICON',
   HOME_ICON = 'HOME_ICON',
   MAP_ICON = 'MAP_ICON',
   SEARCH_ICON = 'SEARCH_ICON',
   SEARCH_BUTTON_ICON = 'SEARCH_BUTTON_ICON',
   SETTINGS_ICON = 'SETTINGS_ICON',
   TABLE_ICON = 'TABLE_ICON',
   USER_ICON = 'USER_ICON',
   USER_HEADER_ICON = 'USER_HEADER_ICON',
   VIDGET_ICON = 'VIDGET_ICON',
   WRENCH_ICON = 'WRENCH_ICON',
}

export enum SVG_PATH {
   CALENDAR_ICON_P1 = 'M7.10938 14.4H10.6649V17.6H7.10938V14.4ZM7.10938 20.8H10.6649V24H7.10938V20.8ZM14.2205 14.4H17.776V17.6H14.2205V14.4ZM14.2205 20.8H17.776V24H14.2205V20.8ZM21.3316 14.4H24.8872V17.6H21.3316V14.4ZM21.3316 20.8H24.8872V24H21.3316V20.8Z" fill="#1C1C1E',
   CALENDAR_ICON_P2 = 'M3.55556 32H28.4444C30.4053 32 32 30.5648 32 28.8V6.4C32 4.6352 30.4053 3.2 28.4444 3.2H24.8889V0H21.3333V3.2H10.6667V0H7.11111V3.2H3.55556C1.59467 3.2 0 4.6352 0 6.4V28.8C0 30.5648 1.59467 32 3.55556 32ZM28.4444 9.6L28.4462 28.8H3.55556V9.6H28.4444Z',
   CHEKMARK_ICON = 'M6.06699 0.749999C6.25944 0.416666 6.74056 0.416667 6.93301 0.75L12.5622 10.5C12.7546 10.8333 12.5141 11.25 12.1292 11.25H0.870834C0.485934 11.25 0.245372 10.8333 0.437822 10.5L6.06699 0.749999Z',
   EXIT_ICON = 'M2.46137 0C1.80857 0 1.18251 0.25934 0.720918 0.720968C0.259322 1.1826 0 1.8087 0 2.46154V29.5385C0 30.1913 0.259322 30.8174 0.720918 31.279C1.18251 31.7407 1.80857 32 2.46137 32H20.9216C21.248 32 21.5611 31.8703 21.7919 31.6395C22.0227 31.4087 22.1523 31.0957 22.1523 30.7692C22.1523 30.4428 22.0227 30.1298 21.7919 29.8989C21.5611 29.6681 21.248 29.5385 20.9216 29.5385H2.46137V2.46154H20.9216C21.248 2.46154 21.5611 2.33187 21.7919 2.10105C22.0227 1.87024 22.1523 1.55719 22.1523 1.23077C22.1523 0.904349 22.0227 0.591298 21.7919 0.360484C21.5611 0.12967 21.248 0 20.9216 0H2.46137ZM26.1004 9.59015C25.8693 9.35905 25.5558 9.22921 25.229 9.22921C24.9022 9.22921 24.5888 9.35905 24.3577 9.59015C24.1266 9.82126 23.9968 10.1347 23.9968 10.4615C23.9968 10.7884 24.1266 11.1018 24.3577 11.3329L27.7962 14.7692H11.0762C10.7498 14.7692 10.4367 14.8989 10.2059 15.1297C9.97514 15.3605 9.84548 15.6736 9.84548 16C9.84548 16.3264 9.97514 16.6395 10.2059 16.8703C10.4367 17.1011 10.7498 17.2308 11.0762 17.2308H27.7962L24.3577 20.6671C24.1266 20.8982 23.9968 21.2116 23.9968 21.5385C23.9968 21.8653 24.1266 22.1787 24.3577 22.4098C24.5888 22.641 24.9022 22.7708 25.229 22.7708C25.5558 22.7708 25.8693 22.641 26.1004 22.4098L31.6384 16.8714C31.7531 16.7571 31.844 16.6212 31.906 16.4717C31.9681 16.3222 32 16.1619 32 16C32 15.8381 31.9681 15.6778 31.906 15.5283C31.844 15.3788 31.7531 15.2429 31.6384 15.1286L26.1004 9.59015Z',
   FINMIN_ICON = 'M24 0H8C6.24 0 4.8 1.44 4.8 3.2V6.4C4.8 8.16 6.24 9.6 8 9.6H24C25.76 9.6 27.2 8.16 27.2 6.4V3.2C27.2 1.44 25.76 0 24 0ZM24 6.4H8V3.2H24V6.4ZM28.8 32H3.2C1.44 32 0 30.56 0 28.8V27.2H32V28.8C32 30.56 30.56 32 28.8 32ZM26.448 13.104C26.1956 12.5381 25.7848 12.0572 25.2653 11.7194C24.7458 11.3816 24.1397 11.2012 23.52 11.2H8.48C7.216 11.2 6.064 11.952 5.552 13.104L0 25.6H32L26.448 13.104ZM12 22.4H10.4C9.952 22.4 9.6 22.048 9.6 21.6C9.6 21.152 9.952 20.8 10.4 20.8H12C12.448 20.8 12.8 21.152 12.8 21.6C12.8 22.048 12.448 22.4 12 22.4ZM12 19.2H10.4C9.952 19.2 9.6 18.848 9.6 18.4C9.6 17.952 9.952 17.6 10.4 17.6H12C12.448 17.6 12.8 17.952 12.8 18.4C12.8 18.848 12.448 19.2 12 19.2ZM12 16H10.4C9.952 16 9.6 15.648 9.6 15.2C9.6 14.752 9.952 14.4 10.4 14.4H12C12.448 14.4 12.8 14.752 12.8 15.2C12.8 15.648 12.448 16 12 16ZM16.8 22.4H15.2C14.752 22.4 14.4 22.048 14.4 21.6C14.4 21.152 14.752 20.8 15.2 20.8H16.8C17.248 20.8 17.6 21.152 17.6 21.6C17.6 22.048 17.248 22.4 16.8 22.4ZM16.8 19.2H15.2C14.752 19.2 14.4 18.848 14.4 18.4C14.4 17.952 14.752 17.6 15.2 17.6H16.8C17.248 17.6 17.6 17.952 17.6 18.4C17.6 18.848 17.248 19.2 16.8 19.2ZM16.8 16H15.2C14.752 16 14.4 15.648 14.4 15.2C14.4 14.752 14.752 14.4 15.2 14.4H16.8C17.248 14.4 17.6 14.752 17.6 15.2C17.6 15.648 17.248 16 16.8 16ZM21.6 22.4H20C19.552 22.4 19.2 22.048 19.2 21.6C19.2 21.152 19.552 20.8 20 20.8H21.6C22.048 20.8 22.4 21.152 22.4 21.6C22.4 22.048 22.048 22.4 21.6 22.4ZM21.6 19.2H20C19.552 19.2 19.2 18.848 19.2 18.4C19.2 17.952 19.552 17.6 20 17.6H21.6C22.048 17.6 22.4 17.952 22.4 18.4C22.4 18.848 22.048 19.2 21.6 19.2ZM21.6 16H20C19.552 16 19.2 15.648 19.2 15.2C19.2 14.752 19.552 14.4 20 14.4H21.6C22.048 14.4 22.4 14.752 22.4 15.2C22.4 15.648 22.048 16 21.6 16Z',
   HOME_ICON_P1 = 'M31.0021 16.9954C30.8703 16.9962 30.7396 16.971 30.6175 16.9212C30.4954 16.8714 30.3844 16.7981 30.2907 16.7054L15.9722 2.40145L1.65375 16.7054C1.46207 16.8692 1.2155 16.9549 0.963321 16.9451C0.711143 16.9354 0.471928 16.8311 0.293478 16.6529C0.115028 16.4748 0.0104878 16.236 0.000747269 15.9842C-0.00899327 15.7325 0.0767835 15.4863 0.240937 15.295L15.2708 0.290872C15.4586 0.10457 15.7125 0 15.9773 0C16.242 0 16.4959 0.10457 16.6837 0.290872L31.7136 15.295C31.8514 15.4354 31.9448 15.6133 31.982 15.8064C32.0192 15.9995 31.9985 16.1992 31.9226 16.3807C31.8467 16.5621 31.7189 16.7172 31.5552 16.8265C31.3915 16.9359 31.1991 16.9946 31.0021 16.9954Z',
   HOME_ICON_P2 = 'M15.9731 5.78284L3.94922 17.8261V29.9995C3.94922 30.53 4.16035 31.0389 4.53617 31.4141C4.91199 31.7892 5.42172 32 5.95321 32H12.9672V21.9973H18.9791V32H25.9931C26.5246 32 27.0343 31.7892 27.4101 31.4141C27.7859 31.0389 27.9971 30.53 27.9971 29.9995V17.7561L15.9731 5.78284Z',
   MAP_ICON = 'M12.442 32C10.197 30.085 8.1161 27.9857 6.22101 25.7239C3.37712 22.3272 1.56217e-06 17.2687 1.56217e-06 12.4483C-0.00123179 9.98645 0.727874 7.5796 2.09505 5.53232C3.46222 3.48504 5.40601 1.88935 7.6804 0.947206C9.9548 0.00505985 12.4576 -0.241197 14.872 0.239601C17.2864 0.720399 19.5039 1.90664 21.2439 3.6482C22.4023 4.8015 23.3205 6.1731 23.9454 7.68363C24.5702 9.19415 24.8892 10.8136 24.884 12.4483C24.884 17.2687 21.5069 22.3272 18.663 25.7239C16.7679 27.9857 14.687 30.085 12.442 32ZM12.442 7.11596C11.0278 7.11596 9.67152 7.67776 8.67152 8.67776C7.67152 9.67776 7.10973 11.034 7.10973 12.4483C7.10973 13.8625 7.67152 15.2188 8.67152 16.2188C9.67152 17.2188 11.0278 17.7806 12.442 17.7806C13.8562 17.7806 15.2125 17.2188 16.2125 16.2188C17.2125 15.2188 17.7743 13.8625 17.7743 12.4483C17.7743 11.034 17.2125 9.67776 16.2125 8.67776C15.2125 7.67776 13.8562 7.11596 12.442 7.11596Z',
   SEARCH_ICON = 'M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z',
   SEARCH_BUTTON_ICON = 'M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z',
   SETTINGS_ICON = 'M19.0029 34H12.9998C12.6237 34.0001 12.2588 33.8676 11.9658 33.6246C11.6727 33.3815 11.469 33.0425 11.3885 32.6638L10.7173 29.461C9.8219 29.0566 8.97285 28.5508 8.1858 27.9531L5.15624 28.9476C4.79764 29.0655 4.41072 29.0534 4.05972 28.9133C3.70872 28.7732 3.41477 28.5136 3.22668 28.1775L0.218553 22.8208C0.0324337 22.4844 -0.0374308 22.0929 0.0203897 21.7103C0.0782102 21.3277 0.260292 20.9766 0.536847 20.7145L2.88695 18.5045C2.78007 17.5034 2.78007 16.4932 2.88695 15.4921L0.536847 13.2872C0.2599 13.025 0.0775708 12.6736 0.0197409 12.2906C-0.038089 11.9076 0.0320114 11.5157 0.218553 11.1792L3.22008 5.8191C3.40818 5.48304 3.70213 5.2234 4.05312 5.08332C4.40412 4.94323 4.79104 4.93112 5.14964 5.049L8.17921 6.0435C8.58161 5.7375 9.00051 5.4519 9.43259 5.1935C9.84984 4.9521 10.2786 4.7328 10.7173 4.5373L11.3902 1.3379C11.4703 0.959136 11.6736 0.619969 11.9663 0.376633C12.2591 0.133297 12.6237 0.000407942 12.9998 0H19.0029C19.3789 0.000407942 19.7436 0.133297 20.0363 0.376633C20.3291 0.619969 20.5324 0.959136 20.6125 1.3379L21.2919 4.539C22.1868 4.94343 23.0353 5.44917 23.8218 6.0469L26.853 5.0524C27.2114 4.93496 27.5979 4.94729 27.9486 5.08735C28.2992 5.22742 28.5929 5.4868 28.7809 5.8225L31.7825 11.1826C32.1651 11.8745 32.0331 12.75 31.4642 13.2889L29.1141 15.4989C29.2209 16.5 29.2209 17.5102 29.1141 18.5113L31.4642 20.7213C32.0331 21.2619 32.1651 22.1357 31.7825 22.8276L28.7809 28.1877C28.5928 28.5238 28.2989 28.7834 27.9479 28.9235C27.5969 29.0636 27.21 29.0757 26.8514 28.9578L23.8218 27.9633C23.0354 28.5606 22.1868 29.0658 21.2919 29.4695L20.6125 32.6638C20.532 33.0423 20.3286 33.381 20.0359 33.624C19.7432 33.867 19.3787 33.9997 19.0029 34ZM8.77786 24.1893L10.1302 25.2093C10.4353 25.4405 10.7519 25.653 11.0818 25.8468C11.3918 26.0321 11.7085 26.1987 12.0367 26.35L13.5754 27.0453L14.329 30.6H17.6769L18.4306 27.0436L19.9693 26.3483C20.6405 26.0423 21.2787 25.6632 21.8708 25.2161L23.2231 24.1961L26.5908 25.3011L28.2647 22.3125L25.6541 19.8594L25.8388 18.139C25.9212 17.3859 25.9212 16.626 25.8388 15.8746L25.6541 14.1542L28.2664 11.696L26.5908 8.7057L23.2248 9.8107L21.8708 8.7907C21.2784 8.34138 20.6409 7.95895 19.9693 7.65L18.4306 6.9547L17.6769 3.4H14.329L13.5704 6.9564L12.0367 7.65C11.3641 7.95363 10.7264 8.33336 10.1351 8.7822L8.78116 9.8022L5.41681 8.6972L3.73958 11.696L6.35025 14.1457L6.16554 15.8678C6.08308 16.6209 6.08308 17.3808 6.16554 18.1322L6.35025 19.8526L3.73958 22.3057L5.41351 25.2943L8.77786 24.1893ZM15.9947 23.8C14.2452 23.8 12.5672 23.0836 11.3301 21.8083C10.093 20.5331 9.39796 18.8035 9.39796 17C9.39796 15.1965 10.093 13.4669 11.3301 12.1917C12.5672 10.9164 14.2452 10.2 15.9947 10.2C17.7443 10.2 19.4222 10.9164 20.6594 12.1917C21.8965 13.4669 22.5915 15.1965 22.5915 17C22.5915 18.8035 21.8965 20.5331 20.6594 21.8083C19.4222 23.0836 17.7443 23.8 15.9947 23.8ZM15.9947 13.6C15.3488 13.6007 14.7173 13.7968 14.1786 14.1641C13.6399 14.5313 13.2176 15.0536 12.9642 15.666C12.7108 16.2784 12.6373 16.954 12.753 17.609C12.8687 18.2641 13.1685 18.8697 13.615 19.3507C14.0616 19.8317 14.6353 20.167 15.2651 20.315C15.8948 20.4629 16.5528 20.4171 17.1575 20.183C17.7622 19.949 18.2869 19.5371 18.6665 18.9984C19.0462 18.4598 19.2641 17.8181 19.2931 17.153V17.833V17C19.2931 16.0983 18.9456 15.2335 18.327 14.5958C17.7085 13.9582 16.8695 13.6 15.9947 13.6Z',
   TABLE_ICON = 'M2.46154 0C1.79487 0 1.21795 0.24359 0.730769 0.730769C0.24359 1.21795 0 1.79487 0 2.46154V12.3077C0 12.9744 0.24359 13.5513 0.730769 14.0385C1.21795 14.5256 1.79487 14.7692 2.46154 14.7692H12.3077C12.9744 14.7692 13.5513 14.5256 14.0385 14.0385C14.5256 13.5513 14.7692 12.9744 14.7692 12.3077V2.46154C14.7692 1.79487 14.5256 1.21795 14.0385 0.730769C13.5513 0.24359 12.9744 0 12.3077 0H2.46154ZM2.46154 2.46154H12.3077V12.3077H2.46154V2.46154ZM19.6923 0C19.0256 0 18.4487 0.24359 17.9615 0.730769C17.4744 1.21795 17.2308 1.79487 17.2308 2.46154V12.3077C17.2308 12.9744 17.4744 13.5513 17.9615 14.0385C18.4487 14.5256 19.0256 14.7692 19.6923 14.7692H29.5385C30.2051 14.7692 30.7821 14.5256 31.2692 14.0385C31.7564 13.5513 32 12.9744 32 12.3077V2.46154C32 1.79487 31.7564 1.21795 31.2692 0.730769C30.7821 0.24359 30.2051 0 29.5385 0H19.6923ZM2.46154 17.2308C1.79487 17.2308 1.21795 17.4744 0.730769 17.9615C0.24359 18.4487 0 19.0256 0 19.6923V29.5385C0 30.2051 0.24359 30.7821 0.730769 31.2692C1.21795 31.7564 1.79487 32 2.46154 32H12.3077C12.9744 32 13.5513 31.7564 14.0385 31.2692C14.5256 30.7821 14.7692 30.2051 14.7692 29.5385V19.6923C14.7692 19.0256 14.5256 18.4487 14.0385 17.9615C13.5513 17.4744 12.9744 17.2308 12.3077 17.2308H2.46154ZM2.46154 19.6923H12.3077V29.5385H2.46154V19.6923ZM19.6923 17.2308C19.0256 17.2308 18.4487 17.4744 17.9615 17.9615C17.4744 18.4487 17.2308 19.0256 17.2308 19.6923V29.5385C17.2308 30.2051 17.4744 30.7821 17.9615 31.2692C18.4487 31.7564 19.0256 32 19.6923 32H29.5385C30.2051 32 30.7821 31.7564 31.2692 31.2692C31.7564 30.7821 32 30.2051 32 29.5385V19.6923C32 19.0256 31.7564 18.4487 31.2692 17.9615C30.7821 17.4744 30.2051 17.2308 29.5385 17.2308H19.6923ZM19.6923 19.6923H29.5385V29.5385H19.6923V19.6923Z',
   USER_ICON = 'M14.9999 17.0285C19.426 17.0285 23.0141 13.4404 23.0141 9.01426C23.0141 4.5881 19.426 1 14.9999 1C10.5737 1 6.9856 4.5881 6.9856 9.01426C6.9856 13.4404 10.5737 17.0285 14.9999 17.0285Z',
   USER_HEADER_ICON = 'M23.9995 22.4489C27.161 22.4489 29.724 19.886 29.724 16.7245C29.724 13.5629 27.161 11 23.9995 11C20.838 11 18.275 13.5629 18.275 16.7245C18.275 19.886 20.838 22.4489 23.9995 22.4489Z',
   VIDGET_ICON = 'M28.8 5.94483H19.8624L23.5312 2.2676L21.2688 0L16 5.28091L10.7312 0L8.4688 2.2676L12.1376 5.94483H3.2C1.4352 5.94483 0 7.38333 0 9.15219V26.7926C0 28.5615 1.4352 30 3.2 30H28.8C30.5648 30 32 28.5615 32 26.7926V9.15219C32 7.38333 30.5648 5.94483 28.8 5.94483ZM3.2 26.7926V9.15219H28.8L28.8032 26.7926H3.2Z',
   WRENCH_ICON = 'M39.3636 0.772202C34.7478 -0.888638 29.3847 0.129442 25.6861 3.828C21.9876 7.52652 20.9695 12.8897 22.6303 17.5055L0 40.1358L7.86416 48L30.4945 25.3696C35.1104 27.0304 40.4735 26.0123 44.172 22.3138C47.8706 18.6152 48.8887 13.2521 47.2278 8.63628L39.2697 16.5944L33.6014 14.3986L31.4055 8.73028L39.3636 0.772202ZM9.4472 38.5528C10.3497 39.4553 10.3497 40.9185 9.4472 41.821C8.54472 42.7235 7.08148 42.7235 6.179 41.821C5.27648 40.9185 5.27648 39.4552 6.179 38.5528C7.08148 37.6503 8.54472 37.6503 9.4472 38.5528Z',
}

export const svgIcons: Record<string, string>[] = [
   { name: SVG_NAME.CALENDAR_ICON, path: SVG_PATH.CALENDAR_ICON_P1 },
   { name: SVG_NAME.CHEKMARK_ICON, path: SVG_PATH.CHEKMARK_ICON },
   { name: SVG_NAME.EXIT_ICON, path: SVG_PATH.EXIT_ICON },
   { name: SVG_NAME.FINMIN_ICON, path: SVG_PATH.FINMIN_ICON },
   { name: SVG_NAME.HOME_ICON, path: SVG_PATH.HOME_ICON_P1 },
   { name: SVG_NAME.MAP_ICON, path: SVG_PATH.MAP_ICON },
   { name: SVG_NAME.SEARCH_ICON, path: SVG_PATH.SEARCH_ICON },
   { name: SVG_NAME.SEARCH_BUTTON_ICON, path: SVG_PATH.SEARCH_BUTTON_ICON },
   { name: SVG_NAME.SETTINGS_ICON, path: SVG_PATH.SETTINGS_ICON },
   { name: SVG_NAME.TABLE_ICON, path: SVG_PATH.TABLE_ICON },
   { name: SVG_NAME.USER_ICON, path: SVG_PATH.USER_ICON },
   { name: SVG_NAME.USER_HEADER_ICON, path: SVG_PATH.USER_HEADER_ICON },
   { name: SVG_NAME.VIDGET_ICON, path: SVG_PATH.VIDGET_ICON },
   { name: SVG_NAME.WRENCH_ICON, path: SVG_PATH.WRENCH_ICON },
]