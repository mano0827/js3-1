'usestrict'

{
  const tableBody = document.getElementById('todo-body')
  const text = document.getElementById('text');
  const todos = [];

  document.querySelector('button').addEventListener('click', () => {
    const todo = {};
    todo.tableComment = text.value;
    todo.tableStatus = '作業中'

    if (todo) {
      todos.push(todo);
      text.value = '';
      showTodos();
    }
  });
  
  const showTodos = () => {
    tableBody.textContent = '';
    todos.forEach((todo, number) => {
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);
      const tableId = document.createElement('td');
      const comment = document.createElement('td');
      const status = document.createElement('td');
      const action = document.createElement('td');
      
      tableId.textContent = number;
      comment.textContent = todo.tableComment;
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(comment);
      tableRecord.appendChild(status);
      tableRecord.appendChild(action);
      
      status.appendChild(createStatusButton());
      action.appendChild(createRemoveButton(tableRecord));
    });
  };
  
  createStatusButton = () => {
    const statusBtn = document.createElement('button')
    statusBtn.textContent = '作業中'
    return statusBtn;
  };
  createRemoveButton = (tableRecord) => {
    const number = tableRecord.roeIndex-1;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '削除'

    removeBtn.addEventListener('click',() => {
      todos.splice(number,1);
      showTodos();
    })

    return removeBtn;
    

  };
}
