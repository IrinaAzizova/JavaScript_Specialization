const carManufacture = {
    name: 'Honda',
    model: 'Accord',
    trimlevel: 'ex',
    baseFeatures: ['weels', 'engine', 'seats'],
    entertainment: 'crappy audio system'
};

const dealership = Object.create(carManufacture);

dealership.equipment = 'roof rack';
dealership.warranty = 'extended';
dealership.branding = 'License plate frame';

const myCar = Object.create(dealership);

myCar.custom = 'After market trailer hitch';
myCar.bumperSticker = 'Save the Llamas!';
myCar.entertainment = 'Fancy audio system';

/* console.log(myCar.model);
console.log(myCar.branding);
console.log(myCar.entertainment); */

for (const key in myCar) {
    if (myCar.hasOwnProperty(key)){
        const val = myCar[key];
        console.log(`Key is ${key} and value is ${val}`);
    }
    
}
