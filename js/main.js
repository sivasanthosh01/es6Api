const row=document.querySelector(".row");
console.log(row);

let getMovie=()=>{
    fetch("https://api.tvmaze.com/shows/1/episodes?specials=1")
    .then((res)=>
        res.json())
    .then((res)=>{
        for(data of res){
            console.log(data);
            create_API(data)
        }
    })
    .catch(()=>{
        console.log("Error");
    })
}
getMovie();

    let create_API=(data)=>{
    row.innerHTML+=` <div class="col">
    <div class="card">
        <div class="img">
            <img src="${data.image.medium}" alt="loading">
        </div>
        <div class="movieInfo">
            <h1 class="title">${data.name}</h1>
            <p class="date">Date: ${data.airdate}</p>
            <p class="rating">Rating ${data.rating.average}</p>
            <button><a href="${data.url}">More...</a></button>
        </div>
    </div>
    
</div>`
console.log(data.url,"url");
}