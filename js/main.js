
'usestrict'

{
  const tableBody = document.getElementById('todo-body')
  const text = document.getElementById('text');
  const todos = [];

  
  document.querySelector('button').addEventListener('click',() => {
   
    const workBtn = document.createElement('button');
    const tableIds = todos.length;
    workBtn.textContent = '作業中'
    const todo = {
    tableIds,
    tableComment:text.value,
    tableStatus:workBtn,
    };



    workBtn.addEventListener('click', () => {
      if (workBtn.textContent === '作業中') {
        workBtn.textContent = '完了'
      } else {
        workBtn.textContent = '作業中'
      };
      return workBtn;
    })
    
    createRemoveButton = (tableRecord) => {
      const number = tableRecord.rowIndex -1;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '削除'
      
      removeBtn.addEventListener('click', () => {
        todos.splice(tableRecord, 1);
        todos.forEach((value,index) => {
          todos[index].tableIds = index;
        })
        showTodos(todos);
      })
      
      return removeBtn;
    };
    
    if (todo) {
      todos.push(todo);
      text.value = '';
      showTodos(todos);
      change();
    }
  });



  const showTodos = (argTodos) => {
    tableBody.textContent = '';
    argTodos.forEach((todo) => {
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);
      const tableId = document.createElement('td');
      const comment = document.createElement('td');
      const status = document.createElement('td');
      const action = document.createElement('td');
      tableId.textContent = todo.tableIds;
      comment.textContent = todo.tableComment;
      const work = todo.tableStatus
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(comment);
      tableRecord.appendChild(status);
      status.appendChild(work);
      tableRecord.appendChild(action);
      action.appendChild(createRemoveButton(todo.tableIds));

  
    });
  };


  function change() {
    const radioAll = document.getElementById('radioAll');
    const radioWork = document.getElementById('radioWork');
    const radioDone = document.getElementById('radioDone');

    if (radioAll.checked) {
      return showTodos(todos);
    } else if (radioWork.checked) {
      const todoWork = todos.filter((todo) => {
        return todo.tableStatus.textContent === '作業中'
      })
      return showTodos(todoWork);
    } else if (radioDone.checked) {
      const todoDone = todos.filter((todo) => {
        return todo.tableStatus.textContent === '完了'
      })
      return showTodos(todoDone);
    }
  }


}

