const FETCH_DATA = 'FETCH_DATA';
const FETCH_ITEM_DATA = 'FETCH_ITEM_DATA';

export const fetchData = (payload) => ({
	type: FETCH_DATA,
	payload
});

export const fetchItemData = (payload) => ({
	type: FETCH_ITEM_DATA,
	payload
});
