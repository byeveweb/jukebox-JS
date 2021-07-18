import { boxVideoList, contentVideoList, contentPlayList, readToPlayList } from "./modules/videoList.js"

//Cargamos el listado de box List Videos
boxVideoList()






//Listeners
loadEventListeners()


function loadEventListeners() {

    //Envent for add list
    contentVideoList.addEventListener('click', readToPlayList)

    //Event for delete list
    contentPlayList.addEventListener('click', readToPlayList)

}