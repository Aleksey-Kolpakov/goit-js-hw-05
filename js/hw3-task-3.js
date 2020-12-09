const findBestEmployee = function(employees) {
    const keys = Object.keys(employees);
    const values = Object.values(employees);
    let higestValue = values[0];
           for (let i = 1; i < values.length; i += 1) {
        if (higestValue < values[i]) {
            higestValue = values[i];
        }
    }
    const bestEmployee = keys[values.indexOf(higestValue)];
    return bestEmployee;
}
    
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
    
