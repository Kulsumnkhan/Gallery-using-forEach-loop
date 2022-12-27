var cl = console.log;

var imagesArray = [
    "https://source.unsplash.com/random/?trees",
    "https://source.unsplash.com/random/?village",
    "https://source.unsplash.com/random/?sunlight",
    "https://source.unsplash.com/random/?food",
    "https://source.unsplash.com/random/?candles",
    "https://source.unsplash.com/random/?fashion",
    "https://source.unsplash.com/random/?mirror",
    "https://source.unsplash.com/random/?space",
    "https://source.unsplash.com/random/?exercise",
    "https://source.unsplash.com/random/?wedding",
    "https://source.unsplash.com/random/?stairs",
    "https://source.unsplash.com/random/?petcats",
];

// var imageContainer = document.getElementById("imageContainer");
// var result = "";
// for (var i = 0; i < imagesArray.length; i++) {
//     result += `
//         <div class="col-4 mb-4">
//             <div class="card myThumbnail">
//                 <div class="card-body">
//                     <img src="${imagesArray[i]}" alt="Random Unsplash Images">
//                 </div>
//             </div>
//         </div>
//     `
// }

// cl(result);
// imageContainer.innerHTML = result;

{/* <div class="col-4">
        <div class="card myThumbnail">
            <div class="card-body">
            <img src="https://source.unsplash.com/random/?trees" alt="">
            </div>
        </div>
    </div> */}

var imageContainer = document.getElementById('imageContainer')

result = "";
imagesArray.forEach(function(images){
    result +=
    `
    <div class="col-4 mb-4">
        <div class="card myThumbnail">
            <div class="card-body">
            <img src="${images}" alt="Random Unsplash Images">
            </div>
        </div>
    </div>
    `
})
cl(result);
imageContainer.innerHTML = result;