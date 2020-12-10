class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;

    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        } else {
            console.log(`Элемента ${item} нет в текущих товарах`);

        }
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Шмелемента');