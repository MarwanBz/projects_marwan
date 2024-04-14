const app = Vue.createApp({
  data() {
    
    return {
      header: 'TODO APP',
      newItem: '',
      todos: [
      ],
    };
    
  },
  methods: {
    handleAdd() {
      this.newItem.length != 0;
      this.todos.push({
        id: this.todos.length + 1,
        task: this.newItem,
      });
      this.newItem = "";
      
      console.log(JSON.stringify(this.todos));
    },

    cancelTask() {
      this.newItem = '';
    },

    clearTasks() {
      confirm("Are you sure?", (this.todos = []));
      
    },

  },
  // a way to define a data property inside our components that depends on other data that we have inside that components || it is values that depends  on other value
  computed: {},
});

app.mount("#app");
