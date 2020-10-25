<template>
    <div class="w-25 border p-4 m-auto mt-3">
        <h4>this is user show component</h4>
        <ul>
            <li v-for="(user, index) in emitedUsers" :key="index">
                {{ user.name }} == {{ user.email }}
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    name: "ShowUser",
    props: ["emitedUsers"],
};
</script>

<style>
</style>