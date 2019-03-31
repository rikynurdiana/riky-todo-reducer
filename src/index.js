const initState = {
  listTodos: [
    {
      id: 1,
      text: 'Todo 1',
      completed: true
    },
    {
      id: 2,
      text: 'Todo 2',
      completed: true
    },
    {
      id: 3,
      text: 'Todo 3',
      completed: false
    }
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        listTodos: state.listTodos.concat({
          id: action.payLoad.id,
          text: action.payLoad.text,
          completed: action.payLoad.completed
        })
      }
    case 'DONE_TODO':
      const done = state.listTodos.map(e => {
        if (e.id === action.payLoad.id) {
          e = { ...e, completed: action.payLoad.completed };
        }
        return e;
      });

      return {
        ...state,
        listTodos: done
      }
    case 'UPDATE_TODO':
      const update = state.listTodos.map(e => {
        if (e.id === action.payLoad.id) {
          e = { ...e, text: action.payLoad.text };
        }
        return e;
      });

      return {
        ...state,
        listTodos: update
      }
    case 'DELETE_TODO':
      var remove = state.listTodos.filter(e => e.id !== action.payLoad.id);
      return {
        ...state,
        listTodos: remove
      }
    case 'CLEAR_DATA':
      return {
        ...state,
        listTodos: []
      }
    default:
      return state;
  }
}

export default rootReducer