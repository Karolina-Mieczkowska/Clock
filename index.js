const dateContainer = document.querySelector('.date__container');

setInterval(function() {
    return dateContainer.innerHTML = new Date().toLocaleTimeString();
}, 1000);

