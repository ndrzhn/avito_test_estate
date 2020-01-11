import axios from 'axios';
import { fetchItemData } from '../store/actions/actions.js';

export const getItem = ({ id }) => (dispatch) => {
	axios.get(`http://134.209.138.34/item/${id}`)
        .then(({ data }) => {
            dispatch(fetchItemData(data));
        });
};
