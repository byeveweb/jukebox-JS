//Las listas
const videoList = [{
        titulo: 'Titulo 1',
        artista: 'Artista 1',
        id: 1
    },
    {
        titulo: 'Titulo 2',
        artista: 'Artista 2',
        id: 2
    },

    {
        titulo: 'Titulo 3',
        artista: 'Artista 3',
        id: 3
    }
]

export const contentVideoList = document.querySelector('#video-list')
export const contentPlayList = document.querySelector('#play-list')

let playList = []
let videoListEdit = [...videoList]



//Pintamos las listas -> Esto a UI
export const boxVideoList = () => videoListEdit.map(video => {
    const { artista, titulo, id } = video
    const div = document.createElement('div')
    div.classList.add('box-video')
    div.innerHTML += `
    <h3 class="my-4"> ${titulo}</h3>
    <h5 class="my-4">${artista}</h5>
    <a href="#" class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded add-list" data-id="${id}">Añadir</a>
    `
    contentVideoList.appendChild(div)
    
})



const boxPlayList = () => playList.map(video => {
    const { artista, titulo, id } = video
    const div = document.createElement('div')
    div.classList.add('box-video')
    div.innerHTML += `
    <h3 class="my-4"> ${titulo}</h3>
    <h5 class="my-4">${artista}</h5>
    <a href="#" class="my-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded remove-list" data-id="${id}">Eliminar</a>
    `
    contentPlayList.appendChild(div)
})



//Limpiamos las listas
const cleanList = (content) => {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}



//Funciones que necesiatmos
export function readToPlayList(e) {
    
    e.preventDefault()
    
    //Capturamos el id
    const video = e.target.parentElement

    
    addDataVideo(video)
    
    //Limpiamos la playList
    cleanList(contentPlayList)
    cleanList(contentVideoList)
    
    //Imprimimos las Listas
    boxVideoList()
    boxPlayList()
    
    
}




function addDataVideo(video) {


    const itemVideo = {
        titulo: video.querySelector('h3').textContent,
        artista: video.querySelector('h5').textContent,
        id: video.querySelector('a').getAttribute('data-id')
    }
    
    
    console.log('llega la playlist...', playList)

    if (video.childNodes[5].classList.contains('add-list')) {


        videoListEdit = videoListEdit.filter(video => video.id !== parseInt(itemVideo.id))
        playList = [...playList, itemVideo]




     
        
    }
    
    if (video.childNodes[5].classList.contains('remove-list')) {

       
        playList = playList.filter(video => video.id !== itemVideo.id)
        console.log(videoListEdit)
        videoListEdit = [...videoListEdit, itemVideo]
        console.log(videoListEdit)
        
    }


}




