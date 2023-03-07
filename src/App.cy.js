import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })

  it('has the correct title', () => {
    cy.mount(<App />)

    cy.get('.Header-text').should('contain.text','F1 Schedule')
  })
})