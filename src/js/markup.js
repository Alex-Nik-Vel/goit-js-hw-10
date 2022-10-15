import { countryList, countryInfo } from './refs';
export function countriesListMarkup(countryInput) {
  const markup = countryInput
    .map(
      ({ flags, name }) =>
        `<li class='countries__item '>
            <img src='${flags.svg}' alt='${name.official}' class='countries__flag' width='40'/>
            <p class='text countries__name'>${name.official}</p>
        </li>`,
    )
    .join('');
  countryList.insertAdjacentHTML('beforeend', markup);
}

export function countryCardMarkup({ name, capital, population, flags, languages }) {
  const languagesList = Object.values(languages)
    .map(
      language =>
        `<li class='country__item'>
            <p class='text'>${language}</p>
         </li>`,
    )
    .join('');

  const markup = `
    <div class='country wrapper'>
    <img src='${flags.svg}' alt='${name.official}' class='country__flag' width='200' />
        <div class='country_descr'>
            <h1 class='country__title'>${name.official}</h1>
            <p class='country__text'><b>Capital:&emsp;</b><span class='text'>${capital}</span></p>
            <p class='country__text'><b>Population:&emsp;</b><span class='text'>${population}</span></p>
            <p class='country__text'><b>Languages:</b></p>
            <ul class='country__list'>${languagesList}</ul>
        </div>
        
    </div>`;
  countryInfo.insertAdjacentHTML('beforeend', markup);
}