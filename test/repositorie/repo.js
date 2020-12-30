let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const header = require('../mock/headers.mock');
let url = 'https://immense-hollows-74271.herokuapp.com';

class Repo {    
   
    getItems(){
        return chai.request(`${url}`)
        .get('/api/items')
        .set(header.getHeader());
    }

    getViewList(testData,type) {
        return chai.request(`${url}`)
            .get(`/views/list.html`)
            .set(header.getHeader());
    }

    getViewForm(testData) {
        return chai.request(`${url}`)
            .get(`/views/form.html?id=${testData.id}&imageSrc=${testData.imageSrc}&text=${testData.text}`)
            .set(header.getHeader());
    }
    updateItem(items){
        return chai.request(`${url}`)
            .put(`/api/items/`)
            .set(header.getHeader())
            .send(items);
    }

    deleteItem(id){
        return chai.request(`${url}`)
        .delete(`/api/items/${id}`)
    }
    
}

module.exports = new Repo();
