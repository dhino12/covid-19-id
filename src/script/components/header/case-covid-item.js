class CaseCovidItem extends HTMLElement {
    constructor() {
        super();
    }

    set itemCovid(item) {
        this._itemCovid = item;
        this.render();
    }

    connectedCallback() {
        this._classList = this.getAttribute('class');
    }

    render() {
        this.innerHTML = `
            <h1 class="fw-bold text-gradient bg-gradient-primary">4000+</h1>
            <p>${this._itemCovid}</p>
        `;
    }
}

customElements.define('case-covid-item', CaseCovidItem);
