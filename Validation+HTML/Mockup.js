const images=document.querySelectorAll(".img");
const imgContainer=document.getElementById('imgContainer');
const round=document.getElementsByClassName('round');
let index=0;
round[0].className="round active";
function slideImage(){
    index++;
    if(index>images.length-1){
        index=0;
        round[3].className="round";
    }
   if(index==1){
    round[3].className="round";
    round[0].className="round";
    round[index].className="round active";
    }
    else if(index==2){
        round[1].className="round";
        round[2].className="round active";
    }
    else if(index==3){
        round[2].className="round";
        round[3].className="round active" ; 
    }
    
    imgContainer.style.transform='translateX('+`${-index*645}`+'px)';
}
setInterval(slideImage,3000);