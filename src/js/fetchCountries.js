// функция fetchCountries(name) -- делает HTTP - запрос 
// на ресурс name и возвращает промис с массивом стран - результатом запроса
export default function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1/name/';
    const FILTER = '?fields=name,capital,population,flags,languages';
    const resp = fetch(`${BASE_URL}${name}${FILTER}`);
    return resp.then(response => {
    if (!response.ok) {
        throw new Error(response.status)
    }
    console.log('response!!!', response);
    return response.json();
}).catch(err => console.log(err))
}
