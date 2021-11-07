<template>
    <div class="d-flex justify-content-start p-4">
        <input v-model="todoText" type="text" id="todoText" @keydown.enter="addItem(todoText)" class="form-control m-2"  />
        <button class="btn btn-sm btn-warning  m-2" @click="addItem(todoText)"> Yeni</button>
    </div>
</template>

<script>
export default {
    inject: ['addItem'],

    data() {
        return {
            todoText: null
        };
    },
}
</script>