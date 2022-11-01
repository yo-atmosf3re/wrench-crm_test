import React, { ChangeEvent, useCallback, useState } from 'react'
import { SVG_PATH, universalSvg } from '../../utils/universalSvg';

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "3815df32b28623d15cde2b203d0791cbfa06b5a0";
const query = 'Москва'
const options = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Token " + token,
    withCredentials: true,
  },
  body: JSON.stringify({ query: query })
};

export interface SuggestionsType {
  value: string
  unrestricted_value: string
  data: any
}

const Search = () => {
  // const [suggestions, setSuggestions] = useState<any>('Loading');
  // useEffect(() => {
  //   (async () => {
  //     fetch(url, options as any)
  //       .then(response => response.json())
  //       .then(data => setSuggestions(data))
  //       .catch(error => console.log(error))
  //   })()
  // }, [])

  const [inputText, setInputText] = useState('')
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
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
          value={inputText}
          onChange={inputHandler}
          placeholder='Введите интересующий вас адрес'
          className="input-block__field" />
        <button className='input-block__button'>
          {universalSvg(SVG_PATH.SEARCH_BUTTON_ICON, '#ffffff')}
          <p>Поиск</p>
        </button>
      </div>
      <div className="search__address-block">
        <div className="address-block__title">Адреса</div>
        <div className="address-block__search-result">
        </div>
      </div>
    </div>
  )
}

export default Search
