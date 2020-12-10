class Car {


    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor(carProperties) {
        this.speed = 0;
        this._price = carProperties.price;
        this.maxSpeed = carProperties.maxSpeed;
        this.isOn = false;
        this.distance = 0;

    }
    /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
    static getSpecs(car) {
        console.log(`maxSpeed:${car.maxSpeed},speed:${car.speed},isOn:${car.isOn},distance:${car.distance},price:${car.price}, `);

    }


    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price;
    }
    set price(newprice) {
        this._price = newprice;

    }
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
        console.log('brrr Car is working');

    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
        console.log('Car turned off');
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        const wishedSpeed = this.speed + value;
        if (wishedSpeed <= this.maxSpeed) {
            this.speed += value;
            console.log(`Car accelerated to ${this.speed}`);
            return;
        }
        if (wishedSpeed > this.maxSpeed) {
            this.speed = this.maxSpeed;
            console.log(`Car accelerated to MAX speed ${this.speed}`);
            return;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        const wishedSpeed = this.speed - value;
        if (wishedSpeed <= 0) {
            this.speed = 0;
            console.log(`Car Stopped, dont forget to turn off before exit`);
            return;
        }
        if (wishedSpeed > 0) {
            this.speed -= value;
            console.log(`Car decelerate to speed: ${this.speed}`);
            return;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {

            this.distance = this.speed * hours;
        }
    }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000