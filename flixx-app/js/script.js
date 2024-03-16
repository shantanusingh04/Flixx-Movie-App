// b318957234b583368d2458a1c3f74ece
// https://api.themoviedb.org/3/movie/550?api_key=b318957234b583368d2458a1c3f74ece
const global={
    currentPage:window.location.pathname,
};
function highlightActiveLink(){
    const links=document.querySelectorAll('.nav-link')
    links.forEach((link)=>{
        if(link.getAttribute('href')===global.currentPage){
            link.classList.add('active')
        }
    })
}

function init(){
    switch(global.currentPage){
        case '/':
            case '/index.html':
            console.log('Home')
            break;
            case '/shows.html':
                console.log('Shows')
                break;
            case '/movie-details.html':
                console.log('Movies')
                break;
            case '/tv-details.html':
                console.log('TV Shows')
                break;
            case '/search.html':
                console.log('Search')
                break;
    }
    highlightActiveLink()
}
document.addEventListener('DOMContentLoaded',init);