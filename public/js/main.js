/** creating button click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js sadece ana sayfada çalışsın
if (document.querySelector(".input")) {
    var typed = new Typed(".input", {
        strings: ["Full Stack Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true
    });
}

// Video click effect
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    videos.forEach(video => {
        // Create click me text
        const clickMeText = document.createElement('div');
        clickMeText.className = 'click-me';
        clickMeText.textContent = 'Click me';
        video.parentElement.style.position = 'relative';
        video.parentElement.appendChild(clickMeText);
        
        // Videonun sesini kapat
        video.muted = true;
        
        // Mouse üzerine gelince
        video.addEventListener('mouseenter', function() {
            if (!isTouchDevice && video.paused) {
                clickMeText.style.display = 'flex';
            }
        });
        
        // Mouse üzerinden çekilince
        video.addEventListener('mouseleave', function() {
            if (!isTouchDevice) {
                clickMeText.style.display = 'none';
            }
        });

        // Click event
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                clickMeText.style.display = 'none';
            } else {
                video.pause();
                if (!isTouchDevice && isMouseOverVideo(video)) {
                    clickMeText.style.display = 'flex';
                } else if (isTouchDevice) {
                    clickMeText.style.display = 'flex';
                }
            }
        });

        // Video oynatma durumu değiştiğinde
        video.addEventListener('play', function() {
            clickMeText.style.display = 'none';
        });

        video.addEventListener('pause', function() {
            if (isTouchDevice) {
                clickMeText.style.display = 'flex';
            }
        });

        // Dokunmatik cihazlar için başlangıç durumu
        if (isTouchDevice && video.paused) {
            clickMeText.style.display = 'flex';
        }
    });
});

// Mouse'un video üzerinde olup olmadığını kontrol eden yardımcı fonksiyon
function isMouseOverVideo(video) {
    const rect = video.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
} 