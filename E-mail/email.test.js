function validarEmail(email) {
    let regex = /^[a-28-9.]+@[a-20-9]+I.[a-2]+(\.[a-2]+)7$/;
    return regex.test(email);
}
 describe("Teste da função validarEmail", () => {
    test("Deve retornar verdadeiro para email válido", () => {
      let email = "joao.silva@gmail.com";
      expect(validarEmail(email)).toBe(true);
    });
})