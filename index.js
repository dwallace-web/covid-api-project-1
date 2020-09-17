
/* 
-Choose type of data that you want to see - cases, recoveries, deaths
-Get data from a date range format with ?from=2020-03-01T00:00:00Z &to=2020-04-01T00:00:00Z
-Take Data and build a heading with the selection
-Build a new row with each date and data type
-Clear data when a new request is made
*/

const startURL = 'https://api.covid19api.com/summary';
const form = document.getElementsByClassName('data-form');
const submitBtn = document.querySelector('.submit');
const dataView = document.getElementById('displaymedia');
const nav = document.querySelector('nav');

dataView.style.display = 'none';
nav.style.display = 'none';

submitBtn.addEventListener('click', fetchResults);


function fetchResults(e) {
    console.log(e);
    e.preventDefault();

    let url = startURL //country

    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log('error', error));

}


function displayData(data) {
    
    dataView.style.display = 'inline';
    nav.style.display = 'inline';

    console.log(data);
    console.log(data.Countries);

    let countryObject = data.Countries;

    for (const thesecountries in countryObject) {  
        //build the menu
        /* if(countryObject.indexOf(countryObject[thesecountries]) % 30 === 0) {
            console.log(countryObject[thesecountries].Country);
            
            let navItem = document.createElement('li')
            let navCountry = document.createElement('a');
            let navItem = document.
            navCountry.textContent = countryObject[thesecountries].Country;
            nav.appendChild(navCountry);

        } */

        //console.log(countryObject[thesecountries]);

        let tableBody = document.getElementById('covidData');
        let row = document.createElement('tr');
        let country = document.createElement('th');
        let newCases = document.createElement('td');
        let totalCases = document.createElement('td');
        let totalRecovery = document.createElement('td');
        let totalDeaths = document.createElement('td');

        country.textContent = countryObject[thesecountries].Country;
        newCases.textContent = countryObject[thesecountries].NewConfirmed;
        totalCases.textContent = countryObject[thesecountries].TotalConfirmed;
        totalRecovery.textContent = countryObject[thesecountries].TotalRecovered;
        totalDeaths.textContent = countryObject[thesecountries].TotalDeaths;
        
        console.log(country, newCases, totalCases, totalRecovery, totalDeaths);

        row.appendChild(country);
        row.appendChild(newCases);
        row.appendChild(totalCases);
        row.appendChild(totalRecovery);
        row.appendChild(totalDeaths);

        //console.log(row);

        tableBody.appendChild(row);
        
        //create breaks
        /* if(countryObject.indexOf(countryObject[thesecountries]) % 30 === 0) {
            console.log(countryObject[thesecountries].Country);
            
            let menu = document.querySelector('.menu');
            let menuCountry = document.createElement('p');
            menuCountry.textContent = countryObject[thesecountries].Country;
            menu.appendChild(menuCountry);

        } */

    }

    
    
};