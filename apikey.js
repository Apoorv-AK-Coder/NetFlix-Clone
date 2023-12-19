let p = fetch("https://api.themoviedb.org/3/discover/movie?api_key=7ee6bd2b1a240379b50d2b8ac4ddfeb0")

p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    return response.result()
}).then((value2) => {
    console.log(value2)
})

let elm = document.getElementById("intro");

let html = fetch("https://api.themoviedb.org/3/discover/movie?api_key=7ee6bd2b1a240379b50d2b8ac4ddfeb0");
console.log(elm);
// elm.insertAdjacentHTML('beforebegin', html);

// elm.insertAdjacentHTML('afterbegin', html);

elm.insertAdjacentHTML('beforeend', html);

// elm.insertAdjacentHTML('afterend', html);