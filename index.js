
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
    
    
    //dataView.style.display = 'block';
    //console.log(data);
    //console.log(data.Countries);

    let theseCountries = data.Countries;
    //console.log(theseCountries);

    for (currentcountry of theseCountries) {
        let tableBody = document.getElementById('covidData');
        let row = document.createElement('tr');
        let country = document.createElement('th');
        let newCases = document.createElement('td');
        let totalCases = document.createElement('td');
        let totalRecovery = document.createElement('td');
        let totalDeaths = document.createElement('td');

        country.textContent = currentcountry.Country;
        newCases.textContent = currentcountry.NewConfirmed;
        totalCases.textContent = currentcountry.TotalConfirmed;
        totalRecovery.textContent = currentcountry.TotalRecovered;
        totalDeaths.textContent = currentcountry.TotalDeaths;

        //console.log(country, newCases, totalCases, totalRecovery, totalDeaths);

        row.appendChild(country);
        row.appendChild(newCases);
        row.appendChild(totalCases);
        row.appendChild(totalRecovery);
        row.appendChild(totalDeaths);

        //console.log(row);

        tableBody.appendChild(row);


        //iterate through the array
        // grab every 30th index
        //display index on 
        
        let menu = document.getElementsByClassName('menu');
        
        //Every 30th country
        
        


    }

    
    
};