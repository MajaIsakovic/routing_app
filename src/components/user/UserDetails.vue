<template>
    <div>
        <h2>User details component</h2>
        <p>user loaded has ID: {{ $route.params.id }}</p>
        <!-- :to nam dozvoljava da bindujemo jos ne samo string -->
        <!-- <router-link class="btn btn-primary" tag="button" :to="'/user/' + $route.params.id + '/edit'">Edit user</router-link> -->
        <!-- isto tako mozemo da prosledimo objekat bindovanom atributu sa "name" rute koji definisemo u router.js 
        i "params" gde se ocekuje id ili bilo koji drugi parametar ako ga ima  -->
        <!-- query parametri: objekat sa key value prosledimo isto u to atribut koji bindujemo  -->
        <router-link class="btn btn-primary" tag="button" 
                    :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 }}">
                    Edit user</router-link>
    </div>
</template>

<script>
    export default {
        //ove je ustvari jedan od life cicle hook 3bg:
        beforeRouteEnter( to, from, next ){
            //ako odavde ne pozovemo next ova komponenta se nece loadovati.
            //i npr proveravamo je li user autentifikovan if(true){ next(){else}{next(false)}} pa onda zovemo next
            next();

            //a ako hocemo da se komponenta ucita prosledimo next funkciji callback
            // next(vm => {
            //     vm.link;
            // });
        }
    }
</script>