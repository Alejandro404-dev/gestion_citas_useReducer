import { citas_db } from "../data/citas_db.js";

const localStorageCitas = () => {
    const citas = localStorage.getItem('listaDeCitas')
    return citas ? JSON.parse(citas) : citas_db
}

// ESTADO INICIAL
export const initialState = {
    listaDeCitas: localStorageCitas(),
    seleccionarCitas: ''
}

// REDUCER
export const citasReducer = (state, action) => {

    if (action.type === 'SELECT_CITA') {

        const seleccionarCitas = state.listaDeCitas.find(cita => cita.id === action.id)
        return {
            ...state,
            seleccionarCitas

        }
    }
    if (action.type === 'ACTUALIZAR_CITAS') {

        const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? { ...cita, available: action.available } : cita)
        return {
            ...state,
            listaDeCitas
        }
    }
     if (action.type === 'RESERVAR_CITAS') {
            const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? { ...cita, available: false } : cita)
            return {
                ...state,
                listaDeCitas
            }

        }

     if (action.type === 'CANCELAR_CITA') {
            const listaDeCitas = state.listaDeCitas.map(cita => cita.id === action.id ? { ...cita, available: true } : cita)
            return {
                ...state,
                listaDeCitas
            }

        }

    if (action.type === 'RESET_FORM') {
        return {listaDeCitas: citas_db, seleccionarCitas: '' }
        
    }




    return state



}