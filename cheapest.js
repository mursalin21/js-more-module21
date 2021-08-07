const phones = [
    {
        name: 'samsung s20',
        price: 45000,
        camera: 10,
        storage: 32
    },
    {
        name: 'walton m32',
        price: 15000,
        camera: 8,
        storage: 8
    },
    {
        name: 'xiaomi m3',
        price: 12000,
        camera: 16,
        storage: 128
    },
    {
        name: 'Oppo a22',
        price: 17000,
        camera: 32,
        storage: 32
    },
    {
        name: 'nokia n95',
        price: 8000,
        camera: 4,
        storage: 64
    },
    {
        name: 'htc h81',
        price: 25000,
        camera: 16,
        storage: 32
    }
];

let cheapest = phones[0].name;
let cheapestPrice = phones[0].price;

for(const phone of phones){
    if(phone.price < cheapestPrice){
        cheapest = phone.name;
        cheapestPrice = phone.price;
    }
}
console.log(cheapest, cheapestPrice);