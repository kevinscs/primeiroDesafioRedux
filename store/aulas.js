// InitialState
const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

// Contants
const COMPLETAR_AULA = 'COMPLETAR_AULA';
const COMPLETAR_CURSO = 'COMPLETAR_CURSO';
const RESETAR_CURSO = 'RESETAR_CURSO';

// Action Creator
export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const complet = () => ({ type: COMPLETAR_CURSO});
export const reset = () => ({ type: RESETAR_CURSO });

// Reducer Function
const reducer = immer.produce((state, action) => {
  switch(action.type) {
    case COMPLETAR_AULA:
      const index = state.findIndex((item) => item.id === action.payload);
      if(!isNaN(index) && state[index]) state[index].completa = true;
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => aula.completa = true);
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => aula.completa = false);
      break;
  }
}, aulas);

export default reducer;
