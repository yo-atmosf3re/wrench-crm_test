import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { SVG_PATH, universalSvg } from '../../utils/universalSvg';

const Url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const Token = "3815df32b28623d15cde2b203d0791cbfa06b5a0";

export interface SuggestionsType {
  value: string
  unrestricted_value: string
  data: Record<string, string | null>
}

const Search = () => {
  let [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState('')
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleClick = async () => {
    try {
      const response = await fetch(Url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + Token,
        },
        body: JSON.stringify({ query: inputText })
      })
      const result = await response.json()
      setSuggestions(result)
      console.log(suggestions)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(suggestions, 'v2')
  return (
    <div className='main__search'>
      <div className="search__block-title">
        Поиск адресов
      </div>
      <div className="search__block-description">
        Введите интересующий вас адрес
      </div>
      <form className="search__input-block">
        <input
          value={inputText}
          onChange={inputHandler}
          placeholder='Введите интересующий вас адрес'
          className="input-block__field" />
        <button
          onClick={handleClick}
          className='input-block__button'>
          {universalSvg(SVG_PATH.SEARCH_BUTTON_ICON, '#ffffff')}
          <p>Поиск</p>
        </button>
      </form>
      <div className="search__address-block">
        <div className="address-block__title">Адреса</div>
        {
          // suggestions &&
          // suggestions.map((a, i) => <div key={i} className="address-block__search-result">
          //   {
          //     a
          //   }
          // </div>)
        }
      </div>
    </div>
  )
}

export default Search
