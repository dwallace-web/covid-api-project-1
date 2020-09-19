
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
const displaytable = document.getElementById('displaytable');
const tableBody = document.getElementById('covidData');
const dropdown = document.querySelector('.dropdown');
const placeholder = document.getElementById('placeholder');

displaytable.style.display = 'none';
dropdown.style.display = 'none';

submitBtn.addEventListener('click', fetchResults);
const dropdownMenu = document.querySelector('.dropdown-menu');
let totalCaseArray = [];

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
    let totalCaseArray = [];
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    };
    while (dropdownMenu.firstChild) {
        dropdownMenu.removeChild(dropdownMenu.firstChild);
    };
    // while (placeholder.firstChild){
    //     placeholder.removeChild(placeholder.firstChild);    
    // };
    

    displaytable.style.display = 'inline';
    dropdown.style.display = 'inline';

    console.log(data);
    let countryObject = data.Countries;
    console.log(data.Countries);

    for (const thesecountries in countryObject) {
        let row = document.createElement('tr');
        let country = document.createElement('th');
        let newCases = document.createElement('td');
        let totalCases = document.createElement('td');
        let totalRecovery = document.createElement('td');
        let totalDeaths = document.createElement('td');

        country.textContent = countryObject[thesecountries].Country;
        country.id = countryObject[thesecountries].Country;
        newCases.textContent = countryObject[thesecountries].NewConfirmed;
        totalCases.textContent = countryObject[thesecountries].TotalConfirmed;
        totalRecovery.textContent = countryObject[thesecountries].TotalRecovered;
        totalDeaths.textContent = countryObject[thesecountries].TotalDeaths;

        //console.log(country, newCases, totalCases, totalRecovery, totalDeaths);

        row.appendChild(country);
        row.appendChild(newCases);
        row.appendChild(totalCases);
        row.appendChild(totalRecovery);
        row.appendChild(totalDeaths);

        //console.log(row);
        tableBody.appendChild(row);
        //create dropdown
        if(countryObject.indexOf(countryObject[thesecountries]) % 18 === 0) {
            
            let item = document.createElement('a');
            item.textContent = countryObject[thesecountries].Country;
            item.className = 'dropdown-item';
            item.setAttribute('href', "#" + countryObject[thesecountries].Country);
            console.log(item);
            dropdownMenu.appendChild(item);
        }

        totalCaseArray.push(countryObject[thesecountries].TotalConfirmed);        
    }

    console.log(totalCaseArray);
    const totalCaseCountSum = totalCaseArray.reduce((a,b) => a + b, 0)
    console.log(totalCaseCountSum);
    
    let blurb = document.createElement('p');
    totalCountries = data.Countries.length;
    blurb.textContent = `There are ${totalCountries} countries in the API. There are ${totalCaseCountSum} total cases in the API.`;
    blurb.className = 'copyBlurb';
    console.log(blurb);
    
    placeholder.appendChild(blurb);

};