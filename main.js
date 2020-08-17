let picArray = ["./images/openroad.jpg", "./images/minibus2.jpg", "./images/airpot.jpg", "./images/openroad.jpg","./images/schools.jpeg"];
let forwardIndex = 0;
let reverseIndex = picArray.length;

//SELECTORS
let quoteBtn = document.getElementById('quoteBtn');
let leftArrowBtn = document.getElementById('leftArrow');
let rightArrowBtn = document.getElementById('rightArrow');
let centerImg = document.getElementById('mainPics');


//EVENT LISTENERS
quoteBtn.onclick = () =>{
    console.log('quote button clicked!');
}
leftArrowBtn.onclick = () => {
    console.log('left arrow!');
    setTimeout(function() {
        centerImg.src = picArray[reverseIndex];
        if(reverseIndex === 0 ){
            reverseIndex = picArray.length;
        }
    }, 500);
    reverseIndex--;
}

rightArrowBtn.onclick = () => {
    setTimeout(function(){
        centerImg.src = picArray[forwardIndex];
        if(forwardIndex === 4){
            forwardIndex = 0;

        }
    }, 500);

    forwardIndex++;
   
}