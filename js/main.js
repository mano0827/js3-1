'usestrict'

{
  const tableBody = document.getElementById('todo-body')
  const text = document.getElementById('text');
  const btn = document.getElementById('btn');
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
      const Comment = document.createElement('td');
      const Status = document.createElement('td');
      const Action = document.createElement('td');
      
      tableId.textContent = number;
      Comment.textContent = todo.tableComment;
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(Comment);
      tableRecord.appendChild(Status);
      tableRecord.appendChild(Action);
      
      Status.appendChild(createStatusButton());
      Action.appendChild(createRemoveButton());
    });
  };
  
  createStatusButton = () => {
    const statusBtn = document.createElement('button')
    statusBtn.textContent = '作業中'
    return statusBtn;
  };
  createRemoveButton = () => {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '削除'
    return removeBtn;
  };
}
