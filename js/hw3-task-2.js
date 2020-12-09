const countProps = function(obj) {
    const keys = Object.keys(obj);
    let quantity = 0;
    for (const key of keys) {
        quantity += 1;
    }
    return quantity;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3