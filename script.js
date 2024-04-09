var dates = [];

function add(element, date) {
    if (dates.find(d => d == date)) {
        element.classList.remove('selected')
        dates = dates.filter(d => d != date);
    } else {
        element.classList.add('selected')
        dates.push(date);
    }
}

async function submit() {
    let response = await fetch('http://echo.jsontest.com/key/value/one/two');
    let data = await response.json();
    console.log(data);
}
