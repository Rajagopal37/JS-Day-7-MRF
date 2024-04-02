
  const api = new XMLHttpRequest ();
  api.open("GET","https://restcountries.com/v3.1/all")
  api.send();

  api.onload = function () {
     
    let apiResult = JSON.parse(api.response);
    console.log(apiResult)

//---------------1.  Get all the countries from Asia continent /region using Filter function -------------------------------
    let asia  = apiResult.filter(asia=>asia.region === "Asia").sort((a,b)=>a.name.common.localeCompare(b.name.common))
    for ( let i=0; i<asia.length; i++) {
      let asiaName = asia[i].name.common ; 
      console.log(`Asia Continent Country  ${(i+1)} . ${asiaName} `);
      document.getElementById("1").innerHTML += `${(i+1)}. ${asiaName} ${'<br>'}`}
   
  }

  //--------------2.Get all the countries with a population of less than 2 lakhs using Filter function---------------------------------








// Fetch data from the API
// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     

//     // Problem 2: Get all countries with a population of less than 2 lakhs using JS Filter function
//     const lessThan2LakhPopulation = data.filter(country => country.population < 200000);
//     console.log('Countries with population less than 2 lakhs:', lessThan2LakhPopulation);

//     // Problem 3: Print name, capital, flag of each country using JS forEach function
//     data.forEach(country => {
//       console.log('Name:', country.name.common);
//       console.log('Capital:', country.capital);
//       console.log('Flag:', country.flags.svg);
//     });

//     // Problem 4: Print the total population of countries using JS reduce function
//     const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
//     console.log('Total population of countries:', totalPopulation);

//     // Problem 5: Print the country that uses US dollars as currency
//     const usDollarCountries = data.filter(country => {
//       const currencies = Object.values(country.currencies);
//       return currencies.includes('USD');
//     });
//     console.log('Countries that use US dollars as currency:', usDollarCountries);
//   })
//   .catch(error => console.error('Error fetching data:', error));