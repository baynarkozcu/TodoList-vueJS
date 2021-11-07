<template>
  <div class="container">
      <div class="row">
          <div class="col-12  p-2">
              <h3 class="text-center">Yapılacaklar Listesi</h3>
              <addSection/>
              <listSection/>

          </div>
      </div>
  </div>
</template>

<script>

import addSection from "@/components/addSection";
import listSection from "@/components/listSection";

export default {
  
  components: {
    addSection,
    listSection
  },


    data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "Bootcamp #2" },
          { id: 2, text: "Bootcamp #2.1" },
          { id: 3, text: "Bootcamp #2.2" },
          { id: 4, text: "Bootcamp #2.3" },
          { id: 5, text: "Bootcamp #2.4" },
          { id: 6, text: "Bootcamp #2.5" }
        ]
      } 
    }
  },

  provide() {
    return {
      provideData: this.provideData,
      addItem: this.addItem,
      deleteItem: this.deleteItem
    };
  },

  methods: {
    addItem(item) {
      this.provideData.todoList.push({
        id: this.provideData.todoList.length + 1,
        text: item
      });
    },

    deleteItem(todo) {
      this.provideData.todoList = this.provideData.todoList.filter(
        item => item !== todo
      );
    }
  },
}

</script>



