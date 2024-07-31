const text = document.querySelector(".web-sec");

const textLoad = () => {
    setTimeout(() => {
        text.textcontent = "backend";
    }, 0);

setTimeout(() => {
    text.textcontent = "web Devloper";
}, 4000);
setTimeout(() => {
    text.textcontent = "Graphics";
}, 8000);
}

textLoad();