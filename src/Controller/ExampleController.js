var exampleModel = require('../Model/ExampleModel');

//TODO construct API ENDPOINT and function to Handle endpoint
function init(router) {
    router.route('/user/getListUser').get(getListUser);
}

// TODO function to handle endpoint from REST client
function getListUser(){
    getListUserService().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

//TODO service function to get some value from model
function getListUserService(){
    return new Promise((resolve,reject) => {
        exampleModel.selectExampleToDB().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

module.exports.init = init;