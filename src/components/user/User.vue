<template>
    <div>
        <h2>User page</h2>
        <hr>
        <!-- this component isnt recreated and that for it will only output first number, 
        only the path changes but we would load the same component over again,
        thats why we have to watch to route params to change, listening to $route param 
        change property or whatever property we need-->
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary">Back to Home</button>
        <hr>
        <!-- za nested routes (vezuje ga za komponentu) -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        // data(){
        //     return{
        //         // to access parametars passing in routes.js
        //         id: this.$route.params.id
        //     }
        // },
        // watch:{
        //     '$route'(to){
        //         this.id = to.params.id;
        //     }

        // },
        methods: {
            navigateToHome(){
                // ovde isto mozemo da prosledimo / ili objekat sa nazivom rute i parametrom ako ga ima koji prima
                this.$router.push({name: 'root'});
            }
        }
    }
</script>

<style scoped>

</style>