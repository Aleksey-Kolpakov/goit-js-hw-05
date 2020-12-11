const Account = function ({ email, login }) {
    this.email = email;
    this.login = login;

}
Account.prototype.getInfo = function () {
    console.log(` Login:${this.login}, Email:${this.email}`);
}

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com