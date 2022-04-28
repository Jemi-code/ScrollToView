let reveal = () => {
    const reveals = document.querySelectorAll(".section");

    for(let i = 0; i < reveals.length; i++){
        let winHeight = window.innerHeight;
        let secTop = reveals[i].getBoundingClientRect().top;
        const revPoint = 150;

        if(secTop < winHeight - revPoint){
            reveals[i].classList.add('show');
        } else{
            reveals[i].classList.remove('show');
        }
    }
}

window.addEventListener("scroll", reveal);

console.log("Hey");