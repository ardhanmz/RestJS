var db = require('../../Config/database');
var dbFunc = require('../../Config/db-function');
var ErrorSomething = "Crap Error";

var ExampleModel ={
    selectExampleToDB: selectExample,
    updateExampleToDB: updateExample,
    insertExampleToDB: insertExample,
    deleteExampleToDB: deleteExample
};
// TODO Function to make DB Transaction
function selectExample() {
    var query = "SELECT * FROM EXAMPLE ";
    return new Promise(((resolve, reject) => {
        //TODO make Select Transaction to DB
        db.query(query,(error, values)=>{
            if(error){
                reject(error);
            }else if(values){
                resolve(values);
            }else {
                console.log(ErrorSomething);
            }
        })
    }))
}

// TODO Function to make DB Transaction
function updateExample(parameterA, parameterB) {
    var query = "UPDATE EXAMPLE SET A='"+parameterA+"'," +
        "'"+parameterB+"' WHERE CONDITION";
    return new Promise(((resolve, reject) => {
        //TODO make Select Transaction to DB
        db.query(query,(error, values)=>{
            if(error){
                reject(error);
            }else if(values){
                resolve(values);
            }else {
                console.log(ErrorSomething);
            }
        })
    }))
}

// TODO Function to make DB Transaction
function insertExample(parameterA, parameterB) {
    var query = "INSERT INTO EXAMPLE(COLUMNA, COLUMNB) VALUES('"+parameterA+"'," +
        "'"+parameterB+"')";
    return new Promise(((resolve, reject) => {
        //TODO make Select Transaction to DB
        db.query(query,(error, values)=>{
            if(error){
                reject(error);
            }else if(values){
                resolve(values);
            }else {
                console.log(ErrorSomething);
            }
        })
    }))
}

function deleteExample(id) {
    var query = "DELETE FROM EXAMPLE WHERE id='"+id+"'";
    return new Promise(((resolve, reject) => {
        //TODO make Select Transaction to DB
        db.query(query,(error, values)=>{
            if(error){
                reject(error);
            }else if(values){
                resolve(values);
            }else {
                console.log(ErrorSomething);
            }
        })
    }))
}

module.exports = ExampleModel;