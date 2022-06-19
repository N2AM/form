describe('Signup Test', () => {
  it('Visits Signup page', () => {
    cy.visit('/')
    cy.contains('Welcome to FedEx Let’s get started ...')
    cy.contains('Enter your contact information. Already have an account? log in.')
    cy.contains("Let's have an account!")
  })
})
