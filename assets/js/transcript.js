fetch("https://ci-swapi.herokuapp.com/api/")
    .then(response => response.text()) // or response.json()
    .then(data => displayData(data))
    .catch((e) => {
        console.log("Error: ", e);
    })

function displayData(data) {
    document.getElementById("content").innerText = data;
}