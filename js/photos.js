//console.log('hello word');
//load data
const loadphoto = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayphoto(data.slice(0, 20));
    //console.log(data);
}



//display all photo and other element
const displayphoto = (photos) => {
    console.log(photos)
    const displayPhotoContaioner = document.getElementById('photo-container');

    photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
    
    <div class="card">
                    <img  src=${photo.thumbnailUrl} onclick="loadPhotoDetailsInfo('${photo.id}')"  class="card-img-top" alt="...">
                   
                </div>
               
    `;
        displayPhotoContaioner.appendChild(photoDiv);

    })

}




//click details
const loadPhotoDetailsInfo = async id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    displayPhotoDetails(data);
}

const displayPhotoDetails = photo => {

    //console.log(photo)

    // const photoDescription = document.getElementById('photo-infodetails');
    const photoDescription = document.getElementById('photo-loader-handler');
    console.log(photoDescription);
    photoDescription.innerHTML = `
        <div class="card p-4">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Title: ${photo.title}</h5>
            <p>AlbumId: ${photo.albumId}</p>
            <p> Url : ${photo.url}</p>
        </div>
    </div>

        `;


}



loadphoto();