export function convertYoutubeURLtoEmbed(videoURL: string): string {
    // videoURL: https://www.youtube.com/embed/zLaVP8IhIuc?enablejsapi=1&wmode=opaque&autoplay=1

    return (
        `<iframe
            src=${videoURL}
            title="YouTube video player" 
            frameBorder="0" >
        </iframe>`
    )   
}

export function getYoutubeVideoID(videoURL: string): string{
    // videoURL: https://www.youtube.com/embed/zLaVP8IhIuc?enablejsapi=1&wmode=opaque&autoplay=1

    if(!videoURL){
        return ""
    }

    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = videoURL.match(regExp);
    return (match&&match[7].length==11)? match[7] : "";
}

