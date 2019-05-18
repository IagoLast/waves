const $select = document.querySelector('#beach');
const $search = document.querySelector('#search');

$search.addEventListener('click', onSearchBtnClick);

function onSearchBtnClick() {
    // const selectedValue = $select.value;
    getForecast();
}

async function getForecast(id) {
    const lat = 41.377908;
    const lng = 2.194483;

    const raw = await fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
        headers: {
            'Authorization': '8882fc88-7988-11e9-a9b7-0242ac130004-8882fd8c-7988-11e9-a9b7-0242ac130004'
        }
    });
    const data = await raw.json();
    console.log(data);
    return data;
}


// , 