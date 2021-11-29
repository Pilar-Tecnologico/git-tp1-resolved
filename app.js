const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    return countries.find(country => country.iso3 === isoCode); //usamos find() que nos traer el primer elemento que cumpla la propiedad deseada. Sabemos que el código ISO3 es único, por lo que no tendriamos problemas.
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    const country = getCountryByIso3(isoCode); //reutilizamos el código del primer ejercicio
    return country.translations[language]; //buscamos solamente el valor que necesitamos usando [] para tomar el valor de una propiedad pasada por variable (language)
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    return countries.filter(country => country.subregion === subregion); //usamos filter() para traer un subarray filtrado que cumpla la propiedad.
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();