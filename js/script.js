window.addEventListener('load', ()=> document.querySelector('.preloader').classList.add('hidePreloader'));

//immediately invoked function using ES6 arrow function
const createCars = (()=>{
    //car data
    const cars = [];

    //car class
    class Car{
        constructor(make,country,img,special,model,price,type,trans,gas){
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas
        }
    }

    //car creation function with default values
    function makeCar(make,country,img ='img/car-default.jpeg',special=true,model='new model',price=10000,type='sedan',trans='automatic',gas='50'){
        const car = new Car(make,country,img,special,model,price,type,trans,gas);
        cars.push(car);
    }
    
    //produce car function
})();