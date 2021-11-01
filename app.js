const app = Vue.createApp({
    data() {
        return {
            todoList : [
                {id: 1, title: "Markete Gidilecek", isComplated: false},
                {id: 2, title: "Ders Çalışılacak", isComplated: true},
                {id: 3, title: "Haftalık Çözmen Geereken Soru Miktarı 500", isComplated: false},
                {id: 4, title: "Salı günü saat 22.00 da Toplantı Olacak.", isComplated: false},
            ]
        };
    },

    methods: {
        addQuestion(event){
            this.todoList.push(event.target.value);
            event.target.value = "";
        },

        removeQuestion(question){
            this.todoList = this.todoList.filter(todo => todo != question);
        }
    }
}).mount("#app");