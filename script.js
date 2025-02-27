let boxs=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbutton");
newBtn=document.querySelector("#new-game");
msgContainer=document.querySelector(".msg-container");
msg=document.querySelector("#msg");

let turno=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno===true){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
            box.disabled=true;
            checkWinner();
    });
});

const resetGame=()=>{
    turno=true;
    enableBox();
    msgContainer.classList.add("hide");
}

const disableBox=() =>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableBox=() =>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";  
    }
}

const showWinner =(Winner)=>{
    msg.innerText=`Congratulation Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1val=boxs[pattern[0]].innerText;
        let pos2val=boxs[pattern[1]].innerText;
        let pos3val=boxs[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&& pos3val !=""){
            if(pos1val===pos2val&& pos2val===pos3val){
    
                showWinner(pos1val);
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);