
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
   



//--------------2.Get all the countries with a population of less than 2 lakhs using Filter function---------------------------------

  let pop = apiResult.filter(result => result.population < 200000).sort((a,b)=>a.name.common.localeCompare(b.name.common));
  // console.log(pop)
  for (let j=0; j<pop.length; j++) {
    let popConName = pop[j].name.common;
    let popCount = pop[j].population;
    console.log(j+1, popConName, popCount)
    document.getElementById('2').innerHTML += `${j+1}.  ${popConName}, Population : ${popCount} ${'<br>'}`
  }


//--------------3.Print the following details name, capital, flag, using forEach function--------------------------

let details = apiResult.forEach((e,index) => {  
  
  console.log(`${index+1}. Country name: ${(e.name.common)}, 
  Capital: ${e.capital}, 
  Flag: ${e.flags.svg}`);
  document.getElementById("3").innerHTML += (`${index+1}. Country name: ${(e.name.common)}, 
  Capital: ${e.capital}, 
  Flag: ${e.flags.png} ${'<br>'}`);
  
});  


//-------------4.Print the total population of countries using reduce function------------

let totalPopulation = apiResult.reduce((acc,ele)=> acc+ele.population ,0);
console.log("The total population of countries is " + totalPopulation)
document.getElementById("4").innerHTML= ("The total population of countries is " + totalPopulation);


//--------------5. Print the country that uses US dollars as currency-----------------=


      let usd = apiResult.filter(ele=> {
        const usdCountry = ele.currencies;
        
        return usdCountry && usdCountry.USD

      })

      let usdName = usd.forEach((item, index) => {
        console.log(`${index+1}. Country Name : ${item.name.common}, USD`)
        document.getElementById('5').innerHTML += (`${index+1}. Country Name : ${item.name.common}, USD ${'<br>'}`)
      })
      

}
