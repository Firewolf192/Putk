


let procesor = document.querySelector("#cpu");
let memory = document.querySelector("#ram");
let zasilacz = document.querySelector("#zas");


let procesorImage = document.querySelector("#proc");
let memoryImage = document.querySelector("#mem");
let zasilaczImage = document.querySelector("#z");



function showProcesorInformations(){
    if(procesor.classList.contains("hidden")){
        procesor.classList.remove("hidden");
    } else{
        procesor.classList.add("hidden");
    };
  
};

procesorImage.addEventListener("click", showProcesorInformations);


function showMemoryInformations(){
    if(memory.classList.contains("hidden")){
        memory.classList.remove("hidden");
    }else{
        memory.classList.add("hidden")
    }
   
};

memoryImage.addEventListener("click", showMemoryInformations)


function showZasilaczInformations(){
    if(zasilacz.classList.contains("hidden")){
        zasilacz.classList.remove("hidden");
    }else{
        zasilacz.classList.add("hidden")
    }
   
};

zasilaczImage.addEventListener("click", showZasilaczInformations)