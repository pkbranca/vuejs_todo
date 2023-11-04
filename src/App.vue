<template>
  <div id="app">
    <div class="card m-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-sans font-bold text-xl mb-5">To Do List</h4>
      <ToDoForm  @addTask="addTask"/>
      <TaskList v-bind:tasks="tasks" @updateStatus="updateStatus"/>
    </div>
  </div>
</template>

<script>
import ToDoForm from './components/ToDoForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
     ToDoForm,
    TaskList
  },
  data() {
    return {
    tasks: [
      { id: '4fe2d942-584b-439b-a5fc-bd9f564d8d47', name: 'lusho', date: new Date(), done: false},
      { id: '299f289c-01de-482b-af0c-0cf108401e8f',name: 'donlusho', date: new Date(), done: true}
      ]
    }
  },
  methods: {
    addTask(e){
      if(!isNaN(e.date)){
        this.tasks.push(e);
      }
    },
    updateStatus(updateId){
      const toDoToUpdate = this.tasks.find((item) => item.id === updateId);
      toDoToUpdate.done = !toDoToUpdate.done;
      // this.tasks[index].done = !this.tasks[index].done;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

.card{
  background-color: #f9f9f9;
}
@media only screen and (max-width: 1024px) {
    .card{
      width: 90%;
    }
}
</style>
