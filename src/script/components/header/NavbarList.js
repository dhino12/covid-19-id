class NavbarList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
         this.innerHTML = `
            <nav class="navbar fixed-top navbar-expand-lg navbar-light blur blur-rounded top-0 shadow py-2 px-3 w-75" style="margin: 30px auto;">
                <div class="container">
                    <img src="https://i.ibb.co/GT54Gqb/Covid-19-Logo.png" class="logo" alt="Covid-19-Logo" width="30px"
                        height="30px">
                    <a class="navbar-brand" href="#"><b>COVID-19</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto">
                            <a class="nav-link me-3 active" aria-current="page" href="#body">Home</a>
                            <a class="nav-link me-3" href="#tentang">Tentang</a>
                            <a class="nav-link me-3" href="#provinsi">Provinsi</a>
                            <a class="nav-link me-3" href="#gejala">Gejala</a>
                            <a class="nav-link me-3" href="#penularan">Penularan</a>
                            <a class="nav-link me-3" href="#pencegahan">Pencegahan</a>
                            <a class="nav-link me-3 disabled">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
         `;
    }
}

customElements.define('nav-list', NavbarList);
