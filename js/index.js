const gloacademyList = document.querySelector(".glo-academy-list");
const trendingList = document.querySelector(".trending-list");
const musicList = document.querySelector(".music-list");
// console.log(gloacademyList);

const showViews = (a) => {
    if(!!a){
        const num = parseInt(a);
        if(num<1000) return num.toString();
        else if(num<1e6){
            if (num<1e5) return (Math.floor(num/100)/10).toString()+'K';
            return Math.floor(num/1000).toString()+'K';
        }
        else {
            if(num<1e7){
                return (Math.floor(num/100000)/10).toString()+'M';
            }
            else return Math.floor(num/1000000).toString()+'M';
        }
    }
    else return '';

}

const createCard = (datavideo) => {
    // console.log(datavideo);

    const imgUrl = datavideo.snippet.thumbnails.high.url;
    const videoId = datavideo.id.videoId;
    const title = datavideo.snippet.title;
    const dateVideo = datavideo.snippet.publishedAt;
    const channelTitle = datavideo.snippet.channelTitle;
    let viewCountHTML = '';
    // const viewCount = datavideo.statistics.viewCount;
    // console.log(datavideo.statistics);

    const card = document.createElement('div');

    if(!!datavideo.statistics) {
        console.log(datavideo.statistics.viewCount);
        let viewCount = showViews(datavideo.statistics.viewCount);
        console.log(viewCount);
        viewCountHTML = `
        <span class="video-views">${viewCount} views</span>
        `
    }    
    card.classList.add('video-card');
    card.innerHTML = `      
        <div class="video-thumb">
            <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
            </a>
        </div>
        <h3 class="video-title">${title}</h3>
        <div class="video-info">
            <span class="video-counter">
                ${viewCountHTML}
                <span class="video-date">${dateVideo}</span>
            </span>
            <span class="video-channel">${channelTitle}</span>
        </div>
    `;
    
    return card;
    
}

const createList = (wrapper, listVideo) =>{
    wrapper.textContent = '';
    // const cards = createCard
    listVideo.forEach(item => {
        // console.log(item);
        card = createCard(item);
        wrapper.append(card)
    });
}

const list = ['a', 'b', 'c'];
createList(gloacademyList, gloAcademy);
createList(trendingList, trending);
createList(musicList, music);