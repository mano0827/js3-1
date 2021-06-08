'usestrict'

{
  const tableBody = document.getElementById('todo-body')
  const text = document.getElementById('text');
  const todos = [];
  
  
  
  const workBtn = document.createElement('button');
  workBtn.textContent = '作業中'
  document.querySelector('button').addEventListener('click', () => {
    const todo = {};
    todo.tableComment = text.value;
    todo.tableStatus = workBtn;
    
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
      const work = todo.tableStatus
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(comment);
      tableRecord.appendChild(status);
      status.appendChild(work);
        tableRecord.appendChild(action);

        
        // work.appendChild(createStatusButton());
        action.appendChild(createRemoveButton(tableRecord));
      });
    };
    
    // createStatusButton = () => {
    workBtn.addEventListener('click', () => {
      if (workBtn.textContent === '作業中') {
        workBtn.textContent = '完了'
      } else{
        workBtn.textContent = '作業中'
      };
      return workBtn;
    })
    
  
  // };
  
  createRemoveButton = (tableRecord) => {
    const number = tableRecord.rowIndex - 1;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '削除'
    
    removeBtn.addEventListener('click', () => {
      todos.splice(number, 1);
      showTodos();
    })
    
    return removeBtn;
    
  };
}

