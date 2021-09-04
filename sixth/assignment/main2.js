var form=document.getElementById('form');
var text=document.getElementById('inputtext');
var todos=document.getElementById('todos');

var storeditem=localStorage.getItem("storeditem");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addlist();
});

function addlist(){
    var listval=text.value;
 
    if(listval){
        var el=document.createElement('li');
  
        el.innerText=listval;
      
        // complete
        // el.addEventListener('click',(e) => {
        //   el.classList.add('completed');
        // });
       
            el.addEventListener('click',(e) => {
                if(el.classList.contains('completed')){
                el.classList.remove('completed')
            }else{
                    el.classList.add('completed');
                }
            }); 


            // el.addEventListener('click',(e) => {
            //     if(el.classList.contains('completed')){
            //     el.classList.add('notcompleted')}else{
            //         el.classList.add('completed');
            //     }
            // });
        
        //remove

   el.addEventListener('contextmenu',(e) => {
       e.preventDefault();
          el.remove();
        });
        todos.appendChild(el);
       for (let index = 0; index < todos.length; index++) {
           const element = todos[index];
           localStorage.setItem('storeditem',todos[index]);
       }
        
    }

    text.value='';
   
}

     