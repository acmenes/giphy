//look up the giphy API and understand it
//figure out axios get requests

// key: uKOyq6RttCZdDx6VFyaYzFLDj9MxrzTs

const searchButton = document.querySelector("#search")
const randomButton = document.querySelector("#random-gif")
const removeButton = document.querySelector("#delete")
const gifsHere = document.querySelector("#gifs-here")

async function getGif(searchterm) {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=uKOyq6RttCZdDx6VFyaYzFLDj9MxrzTs&q=${searchterm}`)
    console.log(res)
    let numResults = res.data.data.length
    console.log(res.data.data.length)
    let dataArray = res.data.data
    console.log(dataArray)
    if (numResults) {
        const randomGif = Math.floor(Math.random() * dataArray.length)
        console.log(randomGif)
        console.log(dataArray[randomGif].embed_url)
        const img = document.createElement("img")
        img.src = dataArray[randomGif].embed_url
        gifsHere.appendChild(img)

    }

    // let showData = JSON.stringify(res.data.data)
    // console.log(showData)
    // // console.log(res.data.data.length)

    // console.log(randomGif)
    // console.log(res.data)
}

async function getRandomGif() {
    const res = await axios.get("https://api.giphy.com/v1/gifs/random?api_key=uKOyq6RttCZdDx6VFyaYzFLDj9MxrzTs&tag=&rating=g")
    console.log(res)
    console.log(res.data.data.image_url)
    const img = document.createElement("img")
    img.src = res.data.data.image_url
    gifsHere.appendChild(img)

}

searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    getGif();
})

randomButton.addEventListener("click", function (e) {
    e.preventDefault();
    getRandomGif();
})

removeButton.addEventListener("click", function (e) {
    e.preventDefault();
    gifsHere.remove("img")
})

// getRandomGif();

// getGif("uKOyq6RttCZdDx6VFyaYzFLDj9MxrzTs");