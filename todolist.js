let todaysdate=document.getElementById('todaysdate');
var today=new Date();

// var day = today.getDate(); 
// var month = today.getMonth() + 1; 
// var year = today.getFullYear();
// var date=day +'-'+ month +'-'+ year;
var date=today.toUTCString().slice(0,16);

todaysdate.textContent=`Date: ${date}`;

let addbtn = document.getElementById('add');
let enterkey = document.getElementById('todoform');
//let todocontent=document.getElementById('listitems');

addbtn.addEventListener('click', addChapter);
enterkey.addEventListener('keyup', function(event){
    let parentlist = document.getElementById('list');
    if (event.key === "Enter" ) {
        
        
        if(parentlist.children[0].className=="emptymsg"){
            parentlist.children[0].remove();
        }
        let task = document.getElementById('todoform').value;
        let newlist = document.createElement('li');
        
        newlist.className = "liststyle"
        newlist.innerHTML = `<button class="deletebtn" id="deletebtn" onclick="deletelist(this)">X</button>
                            <h4 id="listitems">${task}</h4>
                            <button id="editbtn" class="editbtn" onclick="editlist(this)">Edit</button>
                            <button id="strikebtn" class="strikebtn" onclick="strikelist(this)">Strike</button>`
        parentlist.appendChild(newlist);
    }

    
});




function addChapter(e) {

        let parentlist = document.getElementById('list');
        
        if(parentlist.children[0].className=="emptymsg"){
            parentlist.children[0].remove();
        }

        let task = document.getElementById('todoform').value;
        let newlist = document.createElement('li');
        
        newlist.className = "liststyle"
        newlist.innerHTML = `<button class="deletebtn" id="deletebtn" onclick="deletelist(this)">X</button>
                            <h4 id="listitems">${task}</h4>
                            <button id="editbtn" class="editbtn" onclick="editlist(this)">Edit</button>
                            <button id="strikebtn" class="strikebtn" onclick="strikelist(this)">Strike</button>`
        parentlist.appendChild(newlist);
    


}

function strikelist(currentelement) {

    var n = 2;
    var tasktext = currentelement;
    console.log(tasktext);
    for (var i = 0; i < n; i++) {
        tasktext = tasktext.previousElementSibling;
    };


    if (currentelement.textContent == 'Strike') {
        tasktext.style.textDecoration = 'line-through';
        currentelement.textContent = 'Unstrike';
    } else {

        currentelement.textContent = 'Strike';
        tasktext.style.textDecoration = 'none';
    }




}

function deletelist(currentelement){
    currentelement.parentElement.remove();
    let parentlist=document.getElementById('list');
    // console.log(parentlist.children)
    if(parentlist.children.length <=0){
        let emptymsg=document.createElement('h3');
        emptymsg.classList.add("emptymsg");
        emptymsg.textContent= 'What do You Want To Do Today';
        parentlist.appendChild(emptymsg);
    }
}

function editlist(currentelement) {

    if(currentelement.textContent=='Edit'){
       currentelement.textContent="Done";
       let todocontent=currentelement.previousElementSibling.textContent;
       let currInput=document.createElement('input');
       currInput.id='listitems';
       currInput.type='text';
       currInput.placeholder='please make ur changes';
       currInput.value=todocontent;

       currentelement.parentElement.replaceChild(currInput,currentelement.previousElementSibling);
    }else{
        currentelement.textContent='Edit';
        let todocontent=currentelement.previousElementSibling.value;
        let editedele=document.createElement('h3');
        editedele.id='listitems';
        editedele.textContent=todocontent; 

        currentelement.parentElement.replaceChild(editedele,currentelement.previousElementSibling);

    }
    
}