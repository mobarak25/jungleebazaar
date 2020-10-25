<template>
    <div class="w-25 border p-4 m-auto">
        <h3>This is add user component h3</h3>
        <h5>Click me</h5>
        <form @submit.prevent="submitUser">
            <input
                class="form-control mb-2"
                type="text"
                v-model="name"
                placeholder="Name"
            />

            <input
                class="form-control mb-2"
                type="text"
                v-model="email"
                placeholder="Email"
            />

            <button class="btn btn-secondary btn-block" type="submit">
                Add
            </button>
        </form>
        {{ name }}
    </div>
</template>

<script>
var $ = window.$;
export default {
    name: "AddUser",

    data() {
        return {
            name: "",
            email: "",
        };
    },

    methods: {
        submitUser() {
            this.$emit("add-user", { name: this.name, email: this.email });
            this.name = "";
            this.email = "";
        },
    },

    mounted() {
        $("h5").click(function () {
            alert("click me");
        });
    },
};
</script>

<style  scoped>
</style>

