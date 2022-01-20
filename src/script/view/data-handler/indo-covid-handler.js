import ComponentQuerySelector from '../selector/ComponentQuerySelector';

class IndoCovidHandler extends ComponentQuerySelector {
    constructor() {
        super();
    }

    setCovidData(caseCovid) {
        console.log(caseCovid);
        const caseList = this.getIndoCovidSelector();
        caseList.dataCovid = caseCovid;
    }
}

export default IndoCovidHandler;
