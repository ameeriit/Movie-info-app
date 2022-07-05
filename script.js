let search = document.querySelector('.search_input');
let container = document.querySelector('.container');
let search_btn = document.querySelector('.search_btn');
let result = document.querySelector('.result');
let message = document.querySelector('.message');

let key = "http://www.omdbapi.com/?i=tt3896198&apikey=7aff2db7";
let getMovie = () => {
    let movieName = search.value;
    let url = 'https:www.omdbapi.com/?t=${movieName}&apikey=${key}';
    if (movieName != '') {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == 'True') {
                result.innerHTML = ''
                    < h2 class="title"; >
                        ${data.Title}</h2 >
                            <div class="poster">
                                <img src="${data.Poster}" alt="image poster" />
                            </div>
            }
        })
    }
}

