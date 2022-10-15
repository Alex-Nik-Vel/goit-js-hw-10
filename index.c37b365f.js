fetch(`https://restcountries.com/#api-endpoints-v3-name${name}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error;return console.log(e),e.json()}));
//# sourceMappingURL=index.c37b365f.js.map
