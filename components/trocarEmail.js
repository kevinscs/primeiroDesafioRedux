import store from '../store/configureStore.js';
import { modificarEmail } from '../store/aluno.js';

function validaEmail(email) {
    if(email) {
        return true;
    } else {
        return false;
    };
};

// Function criada para troca de E-mail. Responsavel por fazer o dispatch de Email.
function trocarEmail() {
    const { value } = document.getElementById('input');
    console.log('email')
    validaEmail(value) ? store.dispatch(modificarEmail(value)) : '' ;
};

export default trocarEmail;
