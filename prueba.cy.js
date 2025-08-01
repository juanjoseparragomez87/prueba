describe('Flujo completo de usuario', () => {
  const username = 'usuarioPrueba' + Date.now()
  const email = `${username}@dominio.com`
  const password = 'Password123'

  const article = {
    title: 'Artículo de prueba',
    description: 'Mi artículo',
    body: 'texto prueba',
    updatedBody: 'esta es la actualizacion'
  }

  it('Registro de un nuevo usuario', () => {
    cy.visit('http://localhost:4100/#/register')
    cy.get('input[placeholder="Username"]').type(username)
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('button[type="submit"]').click()
  })

  it('Inicio de sesión', () => {
    cy.visit('http://localhost:4100/#/login')
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('button[type="submit"]').click()
  })

  it('Publicación de un artículo', () => {

  })

  it('Edición del artículo', () => {

  })

  it('Eliminación del artículo', () => {

  })

  it('Verificación de que el artículo fue eliminado', () => {

  })
})
