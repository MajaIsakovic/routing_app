<template>
    <div>
        <h2>User edit component</h2>
        <!-- Extracting query params: preko key-->
        <p>Locale: {{ $route.query.locale}}</p>
        <p>Analitycs: {{ $route.query.q }}</p>
        <button class="btn btn-success" @click="confirmed = true">Confirm</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                confirmed: false
            }
        },
        //unutar komponente je i jedino mesto gde ovo mozemo proveriti
        beforeRouteLeave(to, from, next){
            if(this.confirmed){
                next();
            } else {
                if(confirm('Are you sure?')){
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>