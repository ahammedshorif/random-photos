const imgConEl=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");

btnEl.addEventListener("click",()=>{   
    addNewImages();
 });


 function addNewImages(){
    for(let i=0;i<8;i++){
    const newImgEl=document.createElement("img");
    newImgEl.src=`https://picsum.photos/200/300?random=${Math.floor( Math.random()*1000)}`;
     imgConEl.appendChild(newImgEl);
 }
    
}