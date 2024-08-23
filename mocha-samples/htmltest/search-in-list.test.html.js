import {expect} from '/node_modules/chai/chai.js';

describe("search-in-list in html page", () => {
  const field = document.querySelector("#searchfield");
  const form = document.querySelector("#search");    

  it("should contain the required html elements", () => {
    expect(form instanceof HTMLFormElement).to.be.true;
    expect(field instanceof HTMLInputElement).to.be.true;
  });

  it("should highlight Boot and Box on entry of B and deselect when cleared", () => {
    field.value = "B";
    field.dispatchEvent(new InputEvent("input"));

    const items = document.querySelectorAll("li.treffer")
    expect(items.length).to.be.eq(2)
    expect(items[0].textContent).to.be.eq("Box");
    expect(items[1].textContent).to.be.eq("Boot");

    field.value = "";
    field.dispatchEvent(new InputEvent("input"));
    const items2 = document.querySelectorAll("li.treffer")
    expect(items2.length).to.be.eq(0)
  });

});

mocha.run();
