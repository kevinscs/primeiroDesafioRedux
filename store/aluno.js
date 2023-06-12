// InitialState
const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

// Contantes 
const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL';

// Action creator
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });

// Function reducer
function reducer(state = aluno, action) {
  switch(action.type) {
    case INCREMENTAR_TEMPO:
      return { ...state, diasRestantes: state.diasRestantes + 1 };
    case REDUZIR_TEMPO:
      return { ...state, diasRestantes: state.diasRestantes - 1 };
    case MODIFICAR_EMAIL:
      return { ...state, email: state.email = action.payload };
    default:
      return state;
  }
};

export default reducer;
