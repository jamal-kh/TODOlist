const textIn = document.getElementById("textInput"),
      btnIn  = document.getElementById("buttonInput"),
      op     = document.getElementsByClassName("op"),
      list   = document.getElementById("list"),
      gar    = document.getElementById("garpge");

let all = [];

if(localStorage.getItem("all")){
    all = JSON.parse(localStorage.getItem("all"));
}

function addToLOcal(){
    localStorage.setItem("all" , JSON.stringify(all));
}

btnIn.onclick = () => {
    if(textIn.value === ""){
        alert("that input should'nt be empty");
    }else{
        all.push({Values: textIn.value , Checks : 'uncheck' , ids : Date.now()});
        addToLOcal();
        showData();
    }
    textIn.value = "";
}

function check(event){
    let t = event.currentTarget.dataset.id;

    for(let i = 0 ; i < list.children.length;i++){
        if(all[i].ids == t){
            if(all[i].Checks == "check"){
                all[i].Checks = "uncheck";
            }else{
                all[i].Checks = "check";
            }
        }
    }
    addToLOcal();
    showData()

}
function dle(event){
    let e = event.currentTarget.dataset.id;
    all.map((x , y)=>{
        if(x.ids == e){
            return all.splice(y,1);
        }
    })
    addToLOcal();
    showData();
    
} 
op[0].onclick = () => showData();
op[1].onclick = () => {
    list.innerHTML = all.map((x) =>{
        if(x.Checks == 'uncheck'){
            return `
            <li class="p-2 border border-light bg-light mb-1 d-flex align-items-center who" data-or="${x.Checks}">
                <div class="d-flex align-items-center p-0 m-0" onclick="check(event)" data-id="${x.ids}">
                    <span class="checkBox border border-dark" data-id="${x.ids}"></span>
                    <p class="h-auto my-0 mx-1" data-id="${x.ids}">${x.Values}</p>
                </div>
                <div class="garpge text-center" onclick="dle(event)" data-id="${x.ids}">
                        <i class="fa-solid fa-trash-can" ></i>
                </div>
            </li>
            `
        }
}).join("")
}
op[2].onclick = () => {
    list.innerHTML = all.map((x) =>{
        if(x.Checks == 'check'){
            return `
            <li class="p-2 border border-light bg-light mb-1 d-flex align-items-center who" data-or="${x.Checks}">
                <div class="d-flex align-items-center p-0 m-0" onclick="check(event)" data-id="${x.ids}">
                    <span class="checkBox border border-dark" data-id="${x.ids}"></span>
                    <p class="h-auto my-0 mx-1" data-id="${x.ids}">${x.Values}</p>
                </div>
                <div class="garpge text-center" onclick="dle(event)" data-id="${x.ids}">
                        <i class="fa-solid fa-trash-can" ></i>
                </div>
            </li>
            `
        }
}).join("")
}
function showData() {
    list.innerHTML = all.map((x) =>{
            return `
        <li class="p-2 border border-light bg-light mb-1 d-flex align-items-center who" data-or="${x.Checks}">
            <div class="d-flex align-items-center p-0 m-0" onclick="check(event)" data-id="${x.ids}">
                <span class="checkBox border border-dark" data-id="${x.ids}"></span>
                <p class="h-auto my-0 mx-1" data-id="${x.ids}">${x.Values}</p>
            </div>
            <div class="garpge text-center" onclick="dle(event)" data-id="${x.ids}">
                    <i class="fa-solid fa-trash-can" ></i>
            </div>
        </li>
        `
    }).join("")
}
showData()
