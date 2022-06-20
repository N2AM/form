describe('Signup Test', () => {
  before(() => {
    cy.visit('/')
  })

  it('Visits Signup page', () => {
    cy.contains('Welcome to FedEx Let’s get started ...')
    cy.contains('Enter your contact information. Already have an account? log in.')
    cy.contains("Let's have an account!")
  })
  it('Validate successful signup', () => {
    cy.fixture('user').then((userTestdata) => {
      cy.get('#firstName').type(userTestdata.firstName)
      cy.get('#lastName').type(userTestdata.lastName)
      cy.get('#email').type(userTestdata.email)
      cy.get('#password').type(userTestdata.password)
      cy.get('#submitBtn').click()
      cy.get('#confirmBtn').click()
    })

  })
})
