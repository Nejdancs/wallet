const email = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const name = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії0-9]+$/;
const password = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,12}$/;

const regEx = { email, name, password };

export default regEx;
