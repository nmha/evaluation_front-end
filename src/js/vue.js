// let navLis = document.querySelectorAll(".selection-pays");
// let active = document.querySelector(".scrolling");

// navLis.forEach((navLi) => {
//   navLi.addEventListener("click", () => {
//     /*  console.log("test"); */
//     let projects = document.querySelectorAll(".book-scroll");
//     projects[0].classList.add("active");
//     console.log("ok");
//   });
// });


// let app = new Vue({
//     el: "#app",
//     data(){
//         return {
//             france: [],
//             spain: [],
//             belgium: [],
//             all: []
//         }
//     },
//     methods: {
//         filter(type){
//             if(type==='France'){
//                 this.all = this.france;
//             }
//             else if(type === 'Spain'){
//                 this.all = this.spain;
//             }
//             else if(type === 'Belgium'){
//                 this.all = this.belgium;
//             }
//             else{
//                 this.all = this.all;
//             }
//         }
//     },
//     mounted(){

        
//         axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
//         .then(response => {
//             this.all = response.data;
//             this.france = this.all.filter(t => t.countryName === 'France');
//             this.spain = this.all.filter(t => t.countryName === 'Spain');
//             this.belgium = this.all.filter(t => t.countryName === 'Belgium');
//         })
//     }
// });





new Vue({
    el: "#app",
    data() {
      return {
        trips: [],
        selectedCountry: null,
        numberOfTravelers: 0,
      
      }
    },
    created() {
      axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
        .then(response => {
          this.trips = response.data
        })
       
    },
    computed: {
        selectedTrips(){
           if (this.selectedCountry != null) {
          return this.trips.filter(t => t.countryName === this.selectedCountry)[0].trips;
        } else {
          return [];
        }
      },
     
    },
    methods: {
      selectCountry(country) {
        this.selectedCountry = country; 
        this.basket = [];
      },
      
    }
  })
  