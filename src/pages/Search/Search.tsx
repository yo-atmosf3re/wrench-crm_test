import React, { ChangeEvent, useEffect, useState } from 'react'
import { WhiteSearchIcon } from '../../assets/svg/SearchIconFromButton'
import axios from 'axios'

const AddressList = [
  { title: 'город Москва, улица Ленина 13, дом 32', id: 1, },
  { title: 'город Санкт-Петербург, улица Ленина 13, дом 32', id: 2, },
  { title: 'город Краснодар, улица Ленина 13, дом 32', id: 3, },
  { title: 'город Ростов-На-Дону, улица Ленина 13, дом 32', id: 4, },
  { title: 'город Самара, улица Ленина 13, дом 32', id: 5, },
  { title: 'город Тверь, улица Ленина 13, дом 32', id: 6, },
  { title: 'город Екатеринбург, улица Ленина 13, дом 32', id: 7, },
  { title: 'город Омск, улица Ленина 13, дом 32', id: 8, },
  { title: 'город Магнитогорск, улица Ленина 13, дом 32', id: 9, },
  { title: 'город Челябинск, улица Ленина 13, дом 32', id: 10, },
]

const Search = () => {
  const [inputText, setInputText] = useState('')
  const [data, setData] = useState()
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText)

  };
  return (
    <div className='main__search'>
      <div className="search__block-title">
        Поиск адресов
      </div>
      <div className="search__block-description">
        Введите интересующий вас адрес
      </div>
      <div className="search__input-block">
        <input
          onChange={inputHandler}
          placeholder='Введите интересующий вас адрес'
          className="input-block__field" />
        <button className='input-block__button'>
          <WhiteSearchIcon />
          <p>Поиск</p>
        </button>
      </div>
      <div className="search__address-block">
        <div className="address-block__title">Адреса</div>
        <div className="address-block__search-result">
          {
            // data.map((a) => (
            //   <div key={i} className="search-result__item">
            //     {a.title}
            //   </div>
            // ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search
