import {expect} from 'chai';

describe('template spec', () => {
  beforeEach("", () => {
    cy.visit('http://localhost:8080/search-in-list.html')
  })
 
  it("contains the form as expected", () => {
    cy.window().then((win) => {
      cy.get("#search").should( (jqForm) => expect(jqForm[0]).to.be.instanceof(win.HTMLFormElement) );
      cy.get("#searchfield").should( (jqField) => expect(jqField[0]).to.be.instanceof(win.HTMLInputElement) );
    })
  })

  it("should highlight Boot and Box on entry of B and deselect when cleared", () => {
    cy.get("#searchfield").type("B");
    cy.get("li.treffer").should( items => {
      expect(items.length).to.be.eq(2)
      expect(items[0].textContent).to.be.eq("Box");
      expect(items[1].textContent).to.be.eq("Boot");
    });
    cy.get("#searchfield").clear();
    cy.get("li.treffer").should("have.length", 0);
  });


})