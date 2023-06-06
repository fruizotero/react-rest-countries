
export function codes(countries = []) {

    let countriesCode = {}

    countries.forEach((el) => {
        let name = el.name.common;
        let code = el.cca3;
        countriesCode[code] = name;
    });
    // sessionStorage.setItem("codes", JSON.stringify(countriesCode));

    return countriesCode;
}