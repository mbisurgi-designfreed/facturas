import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getClientes = () => {
    return async (dispatch) => {
        const URL = `${API_URL}/api/cliente`;

        try {
            const res = await axios.get(URL, { headers: { authorization: localStorage.getItem('token') } });

            if (res) {
                dispatch({
                    type: 'clientes_list',
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
};