<template>
    <div>
        <h2>User page</h2>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Back to Home</button>
    </div>
</template>

<script>
    export default{
        methods: {
            navigateToHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>