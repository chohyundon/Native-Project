const today = new Date();
const getYear = today.getFullYear()
const getMonth = ('0' + (today.getMonth() + 1)).slice(-2);
const getDay = ('0' + today.getDate()).slice(-2);

export const createAt = `${getYear}-${getMonth}-${getDay}`;


