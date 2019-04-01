let app = new Vue({
    el: "#app",
    data(){
        return {
            robots: [],
            filteredRobots: [],
            france: [],
            spain: []
        }
    },
    methods: {
        fullName(robot){
            return `${robot.first_name} ${robot.last_name}`;
        },
        filter(type){
            if(type==='France'){
                this.filteredRobots = this.france;
            }
            else if(type === 'Spain'){
                this.filteredRobots = this.spain;
            }
            else if(type === 'Belgium'){
                this.filteredRobots = this.females;
            }
            else{
                this.filteredRobots = this.robots;
            }
        }
    },
    mounted(){

        
        axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
        .then(response => {
            this.robots = response.data;
            this.france = this.robots.filter(robot => robot.gender === 'France');
            this.females = this.robots.filter(robot => robot.gender === 'Spain');
            this.filteredRobots = this.robots;
        })
    }
});