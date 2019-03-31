# Riky Todo Reducer (untuk React.js + Redux)


# Install
```sh
$ npm install riky-todo-reducer
```

2 . Tambah Script yang ada di index.js
```sh
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import rootReducer from 'riky-todo-reducer'; //tambah script ini

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

```

# mapDispatchToProps
mapDispatchToProps yang dapat anda gunakan :
```sh
const mapDispatchToProps = dispatch => {
  return {
    postTodos: (value) => dispatch({ 
      type: "ADD_TODO", 
      payLoad: {
        id        : value.id,
        text      : value.text,
        completed : value.completed
      }
    }),
    updateTodos: (value) => dispatch({
      type: "UPDATE_TODO",
      payLoad: {
        id        : value.id,
        text      : value.text,
        completed : value.completed
      }
    }),
    doneTodo: (value) => dispatch({
      type: "DONE_TODO",
      payLoad: {
        id        : value.id,
        completed : value.completed
      }
    }),
    deleteTodo: (value) => dispatch({
      type: "DELETE_TODO",
      payLoad: {
        id        : value.id,
        completed : value.completed
      }
    }),
    clearData: () => dispatch({
      type: "CLEAR_DATA"
    })
  };
};
```

# mapStateToProps
mapStateToProps yang dapat anda gunakan :
```sh
const mapStateToProps = (state) => {
  var rowTodo = state.listTodos.filter(function (item) {
    return item.completed === true;
  });

  var rowDone = state.listTodos.filter(function (item) {
    return item.completed === false;
  });

  return {
    rowTodo,
    rowDone,
  }
}
```

# Selamat Mencoba Library riky-todo-reducer
