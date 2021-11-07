<template>
    <ul>
        <todoItem v-for="todo in provideData.todoList" :key="todo.id" :item="todo" />
    </ul>
</template>

<script>
import todoItem from "@/components/todoItem";
export default {
    inject: ["provideData"],

    components: {
        todoItem
    }
};
</script>