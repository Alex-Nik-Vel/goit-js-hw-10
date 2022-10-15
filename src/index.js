import './css/styles.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import debounce from 'lodash.debounce';
// const DEBOUNCE_DELAY = 300;


// const refs = {
//     searchInput: document.querySelector('search-box'),
//     countryList: document.querySelector('.country-list'),
//     countryInfo: document.querySelector('.country-info'),
// };

// refs.searchInput.addEventListener('input',
//     debounce(onInputCountry, DEBOUNCE_DELAY));

const BASE_URL = 'https://restcountries.com/#api-endpoints-v3-name';
const FITER = '?fields=name,capital,population,flags,languages';
const resp = fetch(`${BASE_URL}${name}${FITER}`);
resp.then(response => {
    if (!response.ok) {
        throw new Error()
    }
    console.log(response);
    return response.json();
});