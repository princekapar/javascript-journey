const accessKey = "zKFadcrHthxKLIYI7ensSdM05gLT_AT49sz2JGUSr0E"
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-btn");
const searchReasult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keywrod = " ";
let page = 1;

async function searchImages() {
    keywrod = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywrod}&client_id=${accessKey}&per_page=16`

    const response = await fetch(url)
    const data = await response.json();

    if (page === 1) {
        searchReasult.innerHTML = "";
    }
        
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchReasult.appendChild(imageLink);
    })

    showMoreBtn.style.display="block"
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;

    searchImages();
})


showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages();
})