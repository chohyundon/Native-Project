const emailRegx = /^\w{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/
const passwordRegx = /^(?=.*[\W_])\S{6,15}$/
const nameRegx = /^[가-힣]{2,6}$/
const residentNumber = /^\d{6}$/
const lastResidentNumber = /^\d$/;

export  {emailRegx, passwordRegx, nameRegx, residentNumber, lastResidentNumber}