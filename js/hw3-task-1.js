const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
    premium: true,
    userPrint() {
        const keys = Object.keys(user);
        for (const key of keys) {
            console.log(`${key} - ${this[key]}`)
        }
  }
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';
console.log(user);
user.userPrint();
