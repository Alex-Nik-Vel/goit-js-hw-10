fetch("".concat("https://restcountries.com/#api-endpoints-v3-name").concat(name).concat("?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error;return console.log(n),n.json()}));
//# sourceMappingURL=index.544088dd.js.map
