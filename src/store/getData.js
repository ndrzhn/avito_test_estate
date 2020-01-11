import axios from 'axios';
import { fetchData } from '../store/actions/actions.js';

export const getData = () => (dispatch) => {
	axios.get(`http://134.209.138.34/items`)
        .then(({ data }) => {
            dispatch(fetchData(data));
        });
};
