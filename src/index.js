import './css/styles.css';
import fetchCountries from './js/fetchCountries.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { searchInput, countryList, countryInfo } from './js/refs';
import { countriesListMarkup, countryCardMarkup } from './js/markup';

const DEBOUNCE_DELAY = 300;

searchInput.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

// fetchCountries();

  
function onInputCountry(evt) {
    console.log(evt);
    console.log('evt.target.value',evt.target.value);
  resetMarkup();

  const inputCountry = evt.target.value.trim();

  if (inputCountry === '') return;
  fetchCountries(inputCountry)
    .then(renderMarkup)
    .catch(err => Notify.failure('Oops, there is no country with that name'));
}
// чистимо розмітку
function resetMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function renderMarkup(countryInput) {
  const countries = countryInput.length;

  if (countries > 10)
    return Notify.info('Too many matches found. Please enter a more specific name.');

    if (countries >= 2 && countries <= 10) {
        countriesListMarkup(countryInput)
    };

    if (countries === 1) {
        countryCardMarkup(countryInput[0])
    };
}

