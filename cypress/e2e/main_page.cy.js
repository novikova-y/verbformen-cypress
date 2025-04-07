import 'cypress-iframe';

describe('Main Page is Present Test', () => {
  it('Should agree to Datenschutz and load page', () => {
    cy.visit('https://www.verbformen.de/');

    // Wait for the iframe to be loaded
    cy.get('iframe#sp_message_iframe_890776').should('be.visible').then(($iframe) => {
      const iframeBody = $iframe.contents().find('body');

      // Once iframe is loaded, find the "Zustimmen" button and click it
      cy.wrap(iframeBody).find('button[title="Zustimmen"]').click();
    });

    // Check if the main page is present
    cy.title().should('include', 'Netzverb Wörterbuch');
  });
});
