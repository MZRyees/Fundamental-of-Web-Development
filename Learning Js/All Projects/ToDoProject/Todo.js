let todoList = [
    {
        item:'By Milk', 
        dueDate:'10/12/2026'},
         {
            item:'Study Hard',
             dueDate:'10/12/2026'}, 
             {
                item:'Go To College', 
                dueDate:'10/12/2026'}
];
displayItem();
function addToDo(){
    let inputElement = document.querySelector('#input_type');
    let dateElement = document.querySelector('#todo_Date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value = '';
    dateElement.value = ' ';
    displayItem();
}
function displayItem(){
    let container_Element = document.querySelector('.todo_container');

    let newHtml = '';
    container_Element.innerText = ' ';
    for(let i = 0;i<todoList.length;i++){
        // let item = todoList[i].item;
        // let dueDate =  todoList[i].dueDate;
        let{item, dueDate} =todoList[i];
       newHtml+=`
       <span> ${item}</span>
       <span> ${dueDate}</span>
       <button class="btn_delete" onclick = "todoList.splice(${i},1);displayItem();">
       Delete
       </button>
       `;
       container_Element.innerText + "\n"+todoList[i];
    }
    container_Element.innerHTML = newHtml;
}