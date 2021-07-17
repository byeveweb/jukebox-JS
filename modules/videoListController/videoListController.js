import { boxVideoList, boxPlayList } from "./../variables.js";
import { videoList } from "./../db.js"
import { UIboxList } from './../UIController/uiVideoListController.js'
import { readToListener, cleanAndPrintBox, emplyBoxList } from './../helpers.js'
import { editToListSearchVideo } from "./searchVideoListController.js";

export let videoListEdit = [...videoList]
export let playList = []

export const videoInit = () => {

    //Print to Inicial List
    UIboxList(videoListEdit, boxVideoList)

    //Listeners
    readToListener(boxVideoList, 'click', addToListVideo)
    readToListener(boxPlayList, 'click', addToListVideo)

    //Prin to msg emply
    emplyBoxList(playList, boxPlayList)


}



//AddToListVideo
function addToListVideo(e) {

    e.preventDefault()
    const video = e.target.parentElement

    //If is Search Mode or List Mode
    if (boxVideoList.hasAttribute('data-search')) {

        editToListSearchVideo(video)

    } else {
        editToListVideo(video)
    }

}

//This function takes care of to add or delete video to list action
export function putList(video, item) {


    if (video.querySelector('a').classList.contains('add-list')) {

        //Delete videoListEdit
        videoListEdit = videoListEdit.filter(video => video.id !== item.id)

        //Add to Play List
        playList = [...playList, item]

    }

    if (video.querySelector('a').classList.contains('remove-list')) {

        //Delete playList
        playList = playList.filter(video => video.id !== item.id)

        //Add to Video List and order
        videoListEdit = [...videoListEdit, item]
        videoListEdit = videoListEdit.sort(function(a, b) {
            return a.id - b.id
        })

    }


}


//This function call to event click in List Mode
function editToListVideo(video) {

    const itemVideo = {
        id: video.querySelector('a').getAttribute('data-id'),
        titulo: video.querySelector('.titulo').textContent,
        artista: video.querySelector('.artista').textContent
    }

    //The video item selected put in the list 
    putList(video, itemVideo)

    //Clean And Print Box and Emply Box
    cleanAndPrintBox(boxVideoList, boxPlayList, videoListEdit, playList)

}