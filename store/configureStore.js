// Import dos reducers para criação do reducer
import aluno from './aluno.js';
import aulas from './aulas.js';

// Combinando os reducers 
const reducer = Redux.combineReducers({ aluno, aulas });

// Criando a store
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
