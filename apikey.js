// let p = fetch("https://api.themoviedb.org/3/discover/movie?api_key=7ee6bd2b1a240379b50d2b8ac4ddfeb0");

// Now Playing Api

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7ee6bd2b1a240379b50d2b8ac4ddfeb0").then((response) => response.json())
  .then((data) => {
    console.log(data);

    const date = data.results[9];

    data.results.map((arr) => {
      const box = document.querySelector(".api1");
      const html = `
             <div class="slide images1">
             <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
              </div>
             `;
      box.insertAdjacentHTML("beforeend", html);
    });

  });


  // Now Playing Api

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7ee6bd2b1a240379b50d2b8ac4ddfeb0").then((response) => response.json())
.then((data) => {
  console.log(data);

  const date = data.results[9];

  data.results.map((arr) => {
    const box = document.querySelector(".api2");
    const html = `
           <div class="slide images1">
           <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
            </div>
           `;
    box.insertAdjacentHTML("beforeend", html);
  });

});
