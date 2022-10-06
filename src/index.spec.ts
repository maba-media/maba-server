import Pessoa from '.'

it('should sum', () => {
  const pessoa = new Pessoa()
  expect(pessoa.digaMeuNome()).toBe('Marcelo')
})
