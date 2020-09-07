window.addEventListener('load', ()=> document.querySelector('.preloader').classList.add('hidePreloader'));

//immediately invoked function using ES6 arrow function
const CreateCars = (()=>{
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
    function produceCars(){
        makeCar('chevy', 'american')
        makeCar('mercedes', 'german', 'img/car-german-1.jpeg', true)
        makeCar('bmw', 'german', 'img/car-german-2.jpeg', true)
        makeCar('bmw', 'german', 'img/car-german-3.jpeg', false, 'some model')
        makeCar('bmw', 'german', 'img/car-german-4.jpeg', undefined, 'other model')
        makeCar('mercedes', 'german', 'img/car-german-5.jpeg', false)
        makeCar('chevy','american','img/car-american-1.jpeg')
        makeCar('chevy','american','img/car-american-2.jpeg', false)
        makeCar('chevy','american','img/car-american-3.jpeg', false)
        makeCar('chevy','american','img/car-american-4.jpeg', false)
        makeCar('chevy','american','img/car-american-5.jpeg', false)
    }
    produceCars();
    //console.log(cars);

    //special cars
    const specialCars = cars.filter(car=>car.special===true);
    //console.log(specialCars);

    return{
        cars,
        specialCars
    }
})();

// display special cars Module
const DisplaySpecialCars =((CreateCars)=>{
    const specialCars = CreateCars.specialCars;
    // console.log(CreateCars.specialCars);

    //targeting the featured car section with css class
    const info = document.querySelector('.featured-info');

    //document loaded event
    document.addEventListener('DOMContentLoaded', ()=>{
        info.innerHTML = '';

        let data = '';

        specialCars.forEach(item=>{
            data += ` <!-- single item -->
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span data-img="${item.img}" class="featured-icon mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!-- end of single item -->`
        })
        info.innerHTML = data;
    })

    //change img
    info.addEventListener('click', (event)=>{
        if(event.target.parentElement.classList.contains('featured-icon')){
            //targeting the data-img in icon span
            const img = event.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
        }
    })
    
})(CreateCars);

const DisplayCarInventory = ((CreateCars)=>{
    //all cars 
    const cars = CreateCars.cars;
    //car container 
    const inventory = document.querySelector('.inventory-container');
    //content loaded
    document.addEventListener('DOMContentLoaded',()=>{
        inventory.innerHTML = '';

        let output = '';

        cars.forEach((car)=>{
            output += ` <!-- single car -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
                <div class="card car-card">
                    <img src="${car.img}" class="card-img-top car-img" alt="">
                    <!-- card-body -->
                    <div class="card-body">
                        <div class="car-info d-flex justify-content-between">
                            <!-- first flex child -->
                            <div class="car-text text-uppercase">
                                <h6 class="font-weight-bold">${car.make}</h6>
                                <h6>${car.model}</h6>
                            </div>
                            <!-- second flex child -->
                            <h5 class="car-value align-self-center py-2 px-3">
                                $<span class="car-price">${car.price}</span>
                            </h5>
                        </div>
                    </div>
                    <div class="card-footer text-capitalize d-flex justify-content-between">
                        <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                        <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                        <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
                    </div>
                </div>
            </div>
            <!--end of single car -->`
        })
        inventory.innerHTML = output;
    })
    
})(CreateCars);