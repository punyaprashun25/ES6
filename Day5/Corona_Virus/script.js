let searchBtn = document.querySelector(".search-btn");
let countryBox = document.querySelector(".country-val"); 
let updateBox = document.querySelector(".update-val"); 
let totalBox = document.querySelector(".total-val"); 
let deathBox = document.querySelector(".death-val"); 
let recoveredBox = document.querySelector(".recovered-val");
let pieReplaceBox = document.querySelector(".pieReplace");
let pie = document.getElementById("myChart");

searchBtn.addEventListener("click", () => {
    let country = document.getElementById("search");
    createData(country.value);
});
async function createData(country) {
    const url = `https://covid-19-tracking.p.rapidapi.com/v1/${country}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4333735405msh71644b09a9d2b8ap1b2647jsncb879284679c',
            'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let country_val = result["Country_text"];
        if(country_val=="World")
        {
            alert("No such country found..showing world report of corona")
        }
        let last_update_val = result["Last Update"];
        let total_val = result["Total Cases_text"];
        let death_val = result["Total Deaths_text"];
        let recovered_val = result["Total Recovered_text"];
        
        //modifying values
        countryBox.innerHTML = country_val;
        updateBox.innerHTML = last_update_val;
        totalBox.innerHTML = total_val;
        deathBox.innerHTML = death_val;
        recoveredBox.innerHTML = recovered_val;
        console.log(result);
        createPie(country_val, total_val, death_val, recovered_val);

    } catch (error) {
        alert("Error Occured...Try again!");
    }
}
function createPie(country, total_val, death_val, recovered_val) {
    
    const xValues = ["Total Deaths", "Total Recovered", "Unknown Data"];
    const total_values = Number(`${total_val}`.split(",").join(""));
    const death_values = Number(`${death_val}`.split(",").join(""));
    const recovered_values = Number(`${recovered_val}`.split(",").join(""));
    // checks before drawing he pie char that values are correct or not
    if(isNaN(recovered_values) || isNaN(death_values))
    {
        pieReplaceBox.style.display = "block";
        pie.style.display= "none";
        return;
    }
    pieReplaceBox.style.display = "none";
    pie.style.display = "block";
    const yValues = [death_values, recovered_values, (total_values - (death_values + recovered_values))];
    const barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: `Coronavirus Report of ${country}`
            }
        }
    });
}

