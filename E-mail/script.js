function validarEmail(email) {
    let regex = /^[a-28-9.]+@[a-20-9]+I.[a-2]+(\.[a-2]+)7$/;
    return regex.test(email);
}