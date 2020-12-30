const expect = require('chai').expect;
const repo = require('../repositorie/repo');
const random = require('../helper/random.helper');
let list, deleteItemId;;
let testData = {
    text: random.generateRandomString(80),
    imageSrc: 'testing.jpg'
};

describe('create 5 functional test cases and automate them', function () {
    before(async () => {
        const res = await repo.getItems();
        expect(res).to.have.status(200);
        expect(res.body.length).to.not.be.null;
        expect(res.body.length).to.not.be.equal(0);
        let oldId = res.body[res.body.length -1].id;
        list = res.body;
        testData.id = oldId + 1;
    });
    afterEach(async () => {
        globalTotalTest++;
    });

    it(`1 - Return add new item success`, async () => {
        try {
        deleteItemId = testData.id;
        list.push({id: testData.id, text : testData.text, imageSrc: testData.imageSrc})
        const res = await repo.updateItem(list);
        expect(res).to.have.status(200);
        expect(res.body.some(e => e.id == testData.id)).to.be.equal(true);
        globalTestSuss++;
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: '',
                result: `Pass`
            });
        } catch (err) {
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: `Error when add new Item (${err})`,
                result: `Fail`
            });

            globalTestFail++;
            throw new Error(`Error when add new Item (${err})`);
        }
    }).timeout(150000);

    it(`2 - Return update item success`, async () => {
        try {
        let pos = random.getRandomInt(0,list.length);
        list[pos].text = 'testing';
        const res = await repo.updateItem(list);
        expect(res).to.have.status(200);
        expect(res.body[pos].text).to.be.contain('testing');
        globalTestSuss++;
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: '',
                result: `Pass`
            });
        } catch (err) {
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: `Error when update a item (${err})`,
                result: `Fail`
            });

            globalTestFail++;
            throw new Error(`Error when update a item (${err})`);
        }
    }).timeout(150000);

    it(`3 - Return delete item success`, async () => {
        try {
        const res = await repo.deleteItem(deleteItemId);
        expect(res).to.have.status(200);
        console.log('delete id ',deleteItemId);
        globalTestSuss++;
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: '',
                result: `Pass`
            });
        } catch (err) {
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: `Error when delete a item (${err})`,
                result: `Fail`
            });

            globalTestFail++;
            throw new Error(`Error when delete a item (${err})`);
        }
    }).timeout(150000);

    it(`4 - Return max long in description in the new item success`, async () => {
        try {
        deleteItemId = testData.id;
        list.push({id: testData.id, text : random.generateRandomString(402) , imageSrc: testData.imageSrc})
        const res = await repo.updateItem(list);    
        expect(res).to.have.status(401);
        expect(res.body.some(e => e.id == testData.id)).to.be.equal(true);
        globalTestSuss++;
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: '',
                result: `Pass`
            });
        } catch (err) {
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: `Error when include max long in description in the new Item, missing validation (${err})`,
                result: `Fail`
            });

            globalTestFail++;
            throw new Error(`Error when include max long in description in the new Item, missing validation (${err})`);
        }
    }).timeout(150000);

    it(`5 - Return validation to text 'Creators: Matt Duffer, Ross Duffer'`, async () => {
        try {
        const res = await repo.getItems();
        expect(res).to.have.status(200);
        let list = res.body;
        let result = list.some(e => e.text === 'Creators: Matt Duffer, Ross Duffer');
        expect(result).to.be.equal(true);
        let filters = list.find(e => e.text === 'Creators: Matt Duffer, Ross Duffer');
        console.log('it found: ', filters);
        globalTestSuss++;
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: '',
                result: `Pass`
            });
        } catch (err) {
            globalTestCases.push({
                testCases: `${this.title}`,
                tests: `${this.tests[2].title}`,
                error: `Error when check the text in the item (${err})`,
                result: `Fail`
            });

            globalTestFail++;
            throw new Error(`Error when check the text in the item (${err})`);
        }
    }).timeout(150000);

})
