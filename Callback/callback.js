//sync simple exampl for callback function
function callBackFunction(name){
    console.log("I'm "+ name);
}
function processUserInput(callback) {
    var name = "callback function";
    callback(name);
  }
  processUserInput(callBackFunction);

// async callback function
async function dummyFunction(api,callBack){
    await fetch(api)
    .then(response => response.json())
    .then(data => callBack(data));
}
function listEmployee(response) {
    let data = response.data;
    data.map((e) => (
        console.log(e.id , e.employee_name , e.employee_salary , e.employee_age)
    ))
}
dummyFunction('https://dummy.restapiexample.com/api/v1/employees',listEmployee);