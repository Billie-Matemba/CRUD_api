document.addEventListener('alpine:init', () => {
    Alpine.data('CRUD', () => ({
        cars: [],
        showTable: false,
        popular: '',
        newcolor: '',
        newmake: '',
        newmodel: '',
        newregNumber: '',
        removeregNumber: '',
        

        fetchCars() {
            axios.get('http://localhost:3000/api/Cars')
                .then(result => {                        
                    console.log(result.data.cars);
                    this.cars = result.data.cars;
                });
        },

        PopularCar() {
            axios.get('http://localhost:3000/api/popularCar')
            .then(result=>{
                console.log(result.data.mostPopularCar);
                this.popular = result.data.mostPopularCar;
            })

        },

        addCar() {
            return axios.post('http://localhost:3000/api/addCar',{
                // "cars": [],
                "color": this.newcolor,
                "make": this.newmake,
                "model": this.newmodel,
                "reg_number": this.newregNumber, 
            })
            .then(response =>{
                this.cars = response.data.cars;
                this.newcolor = '';
                this.newmake = '';
                this.newmodel = '';
                this.newregNumber = '';
            })
        },

        deleteCar() {
            return axios.post('http://localhost:3000/api/removeCar',{
                // "cars": [],
                "reg_number": this.removeregNumber 
            })
            .then(response =>{
                this.cars = response.data.cars;
                this.removeregNumber = '';

            })
        },

    }));
});