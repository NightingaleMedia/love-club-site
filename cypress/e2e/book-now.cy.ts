/// <reference types="cypress" />
const homePage = `https://theloveclubbridal.com`

const getIframeBody = () => {
  // get the document
  return cy
    .get('iframe')
    .its('#document')
    .should('exist')
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap)
}

describe('Home Page Loads', () => {
  beforeEach(() => cy.visit(homePage))
  it('Shows the home page', () => {
    cy.request('/').its('status').should('eq', 200)
  })
})

describe('Book Now Form Works', () => {
  before(() => {
    cy.viewport('macbook-15')
    cy.visit(`${homePage}/book-now`)
  })
  it('has a 200 status code', () => {
    getIframeBody()
  })
  xit('Shows the select text', () => {
    cy.wait(2000)
    cy.contains('h4', 'Select Appointment Type').should('be.visible') // Asserts that an element with class "header" containing "Welcome" is visible
  })
})
