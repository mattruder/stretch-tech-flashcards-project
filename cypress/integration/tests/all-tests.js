describe("Flashcards App", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#createDeckLink').click()
    cy.get('.field-name-deck').type('deck1')
    cy.get('.field-word-search').type('hello')
    cy.get('.button-word-search').click()
    cy.get('.button-add-card').click()
    cy.get('.field-word-search').type('bye')
    cy.get('.button-word-search').click()
    cy.get('.button-add-card').click()
    cy.get('.button-save-deck').click()
    cy.get('.nav-bar').click()
  })

  it('User should see a homepage with a nav bar, my decks button and create deck button', () => {
    cy.get('.nav-bar').contains('What the Deck...?')
    cy.get('.below-navbar-content').contains('My Decks')
    cy.get('.below-navbar-content').contains('Create New Deck')
  })

  it('User should be taken to the My Decks page when clicking My Decks link', () => {
    cy.get('#myDecksLink').click()
    cy.get('.my-decks').contains('deck1')
  })

  it('User should be able to view the cards in a deck', () => {
    cy.get('#myDecksLink').click()
    cy.get('#viewCardsLink').click()
    cy.get('.view-all-cards-container').contains('hello')
    cy.get('.view-all-cards-container').contains('bye')
  })

  it('User should be able to edit a deck by removing and adding cards', () => {
    cy.get('#myDecksLink').click()
    cy.get('#editDeckLink').click()
    cy.get('#hello').click()
    cy.get('.display-cards-container').should('not.have.value', "hello")
    cy.get('.display-cards-container').contains('bye')
    cy.get('.field-word-search').type('orange')
    cy.get('.button-word-search').click()
    cy.get('.button-add-card').click()
    cy.get('.display-cards-container').contains('orange')
  })

  it('User should not be able to search for a word if it is not a real word', () => {
    cy.get('#myDecksLink').click()
    cy.get('#editDeckLink').click()
    cy.get('.field-word-search').type('asdfasdfasdf')
    cy.get('.button-word-search').click()
    cy.get('.edit-deck-area').should('not.have.value', 'asdfasdfasdf')
  })

  it('User should be able to access the My Decks page from the Create/Edit Decks page', () => {
    cy.get('#createDeckLink').click()
    cy.get('#myDecksLinkInCreate').click()
    .url().should('eq', 'http://localhost:3000/my-decks')
  })

  it('User should be able to access the Create Decks page from the My Decks page', () => {
    cy.get('#myDecksLink').click()
    cy.get('.link-create-deck-from-my-decks').click()
    .url().should('eq', 'http://localhost:3000/create-new-deck')
  })

})
