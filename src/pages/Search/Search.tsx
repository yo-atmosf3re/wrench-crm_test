import React, { ChangeEvent, useState } from 'react'
import { SVG_PATH, universalSvg } from '../../utils/universalSvg';
import { Skeleton } from './Skeleton';

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
  const [isFetching, setIsFetching] = useState(false)

  const fetchData = async () => {
    try {
      setIsFetching(true)
      const response = await fetch(Url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + Token,
        },
        body: JSON.stringify({ query: inputText, count: 10 })
      })
      const result = await response.json()
      setSuggestions(result.suggestions)
      setIsFetching(false)
      console.log(suggestions)
    } catch (error) {
      console.log(error)
    }
  }
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleClick = () => {
    fetchData()
  }
  const skeletons = [...new Array(suggestions.length)].map((_, i) => <Skeleton key={i} />)

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
        <button
          disabled={inputText.length <= 3 || !inputText}
          onClick={handleClick}
          className='input-block__button'>
          {universalSvg(SVG_PATH.SEARCH_BUTTON_ICON, '#ffffff')}
          <p>Поиск</p>
        </button>
      </div>
      <div className="search__address-block">
        <div className="address-block__title">Адреса</div>
        <div className="address-block__search-result">
          {
            isFetching
              ?
              skeletons.map((s, i) => <div key={i} className='search-result__item'>{s}</div>)
              :
              suggestions.map((address: SuggestionsType, i) => <div className='search-result__item' key={i} >
                {
                  address.value
                }
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Search
