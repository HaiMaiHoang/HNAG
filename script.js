//QC 1
window.onload = function(){
    const track = document.getElementById('SliderTrack');
    const TotalLength = track.querySelectorAll('img').length;
    let index = 0;
    setInterval(() => {
        index = (index + 1) % TotalLength;
        track.style.transform = `translateX(-${index * 1240}px)`;
    }, 3500);
}

let tong = 3;
    function gotoPage(pageNumber) {
        const slider = document.getElementById("slider");
        const percentage = pageNumber * -104.5 / tong;
        slider.style.transform = `translateX(${percentage}%)`;
}
