let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let message = document.querySelector("#message");
let turn = 0;
let cnt=0;
const winnings = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWinner=()=>{
    for(let i=0;i<8;i++){
        let i1=winnings[i][0];
        let i2=winnings[i][1];
        let i3=winnings[i][2];
        if(boxes[i1].innerText===boxes[i2].innerText && boxes[i1].innerText===boxes[i3].innerText && boxes[i1].innerText!==""){
            disableBoxes();
            setbgColor(i1,i2,i3);
            msg.classList.remove("hide");
            message.innerText=`Congrats!, Winner is Player ${boxes[i1].innerText}`;
            return;
        }
    }
};

const setbgColor=(i1,i2,i3)=>{
    boxes[i1].style.backgroundColor="white";
    boxes[i2].style.backgroundColor="white";
    boxes[i3].style.backgroundColor="white";
};
const enableBoxes=()=>{
    for(let i=0;i<9;i++){
        boxes[i].disabled=false;
        boxes[i].innerText="";
        boxes[i].style.backgroundColor="#264653";
    }
};
const disableBoxes=()=>{
    for(let i=0;i<9;i++){
        boxes[i].disabled=true;
    }
};
const resetGame=()=>{
    msg.classList.add("hide");
    turn=0;
    cnt=0;
    enableBoxes();
};
const Draw=()=>{
    msg.classList.remove("hide");
    message.innerText=`The Match is Draw!!`;
};
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn===0 ){
            box.innerText="X";
            box.style.color="#ef233c";
            turn=1;
        }
        else if(turn===1){
            box.innerText="O";
            box.style.color="#e9c46a";
            turn=0;
        }
        box.disabled=true;
        cnt++;
        if(cnt===9){
            Draw();
        }
        checkWinner();
    });
});
newbtn.addEventListener("click",()=>{
    resetGame();
});
rstbtn.addEventListener("click",()=>{
    resetGame();
});