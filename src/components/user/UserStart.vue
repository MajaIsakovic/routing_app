<template>
    <div>
        <h2>User start component</h2>
        <p>Please select a user</p>
        <hr>
        <ul class="list-group">
            <router-link tag="li"
                        to="/user/1"
                        class="list-group-item"
                        style="cursor-pointer">User 1</router-link>
            <router-link tag="li"
                        to="/user/2"
                        class="list-group-item"
                        style="cursor-pointer">User 2</router-link>
            <router-link tag="li"
                        to="/user/3"
                        class="list-group-item"
                        style="cursor-pointer">User 2</router-link>
        </ul>
    </div>
</template>