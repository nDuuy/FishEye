// function WorkFactory(data) {


//     // debugger

//     const { title, image, video, } = data;
//     const picture = `assets/images/${image}`;
//     const videoData = `assets/images/${video}`;



//     function getUserWorkDOM() {
//         const PictureDivs = document.createElement('div');
//         PictureDivs.className = 'thumb-imgfull';

//         var PicVideo = getMedia()

//         const TitleSpan = document.createElement('span');

//         const PictureTitle = document.createElement('p');
//         text.textContent = title

//         PictureDivs.appendChild(PictureTitle);
//         PictureDivs.appendChild(TitleSpan);
//         PictureDivs.appendChild(PicVideo)

//         return (PictureDivs);
//     };

//     function getMedia() {
//         // debugger
//         var userMedia = undefined
//         userMedia.className = 'thumb-img';


//         if (image != undefined) {
//             userMedia = document.createElement('img')
//             userMedia.setAttribute("src", picture)
//             userMedia.setAttribute("alt", title)
//         }

//         else if (video != undefined) {
//             userMedia = document.createElement('video')
//             userMedia.setAttribute("src", videoData)
//             userMedia.setAttribute("alt", title)
//         }

//         return (userMedia);



//     };

//     return { getUserWorkDOM };
// }