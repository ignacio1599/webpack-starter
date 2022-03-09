import './styles.css';
import { todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach(todo =>crearTodoHtml(todo));


