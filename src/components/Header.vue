<template>
    <div>
        <ul class="nav nav-pills">
            <!-- umesto a href koristimo komponentu sa kojom vue router dolazi -->
            <!-- fodamo atribut to -->
            <!-- exact da ne bude stalno svaka aktiva ruta koja pocinje sa / -->
               <router-link to="/" class="nav-link" tag="li" active-class="active" exact><a>Home</a></router-link>
           
               <router-link to="/user" class="nav-link" tag="li" active-class="active"><a>User 1</a></router-link>
               <!-- <router-link to="/user/2" class="nav-link" tag="li" active-class="active"><a>User 2</a></router-link> -->
           
        </ul>
    </div>
</template>


<style scoped>  

</style>