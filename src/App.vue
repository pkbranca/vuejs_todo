<template>
  <div id="app">
    <div class="card m-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-sans font-bold text-xl mb-5">To Do List</h4>
      <ToDoForm v-bind:editTask="currentTask" @addTask="addTask"/>
      <TaskList v-bind:tasks="tasks" @updateStatus="updateStatus" @editTaskInformation="editTaskInformation"/>
    </div>

  </div>
</template>

<script>
import ToDoForm from './components/ToDoForm.vue';
import TaskList from './components/TaskList.vue';
import { v4 as uuidv4 } from 'uuid';

import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';

export default {
  setup(){
   const toast = useToast();
   return {toast}
 },
  name: 'App',
  components: {
    ToDoForm,
    TaskList
  },
  data() {
    return {
    currentTask: {
      id: '',
      name: '',
      date: '',
      done: false
    },
    tasks: [
      { id: '4fe2d942-584b-439b-a5fc-bd9f564d8d47', name: 'lusho', date: '2016-04-10', done: false},
      { id: '299f289c-01de-482b-af0c-0cf108401e8f',name: 'donlusho', date: '2016-04-11', done: true}
      ]
    }
  },
  methods: {
    addTask(e){
      if(e.task.date !== "" && e.task.name !== "" ){
        if(e.task.id !== ""){
          const taskUpdate = this.tasks.find((x)=> x.id === e.task.id);
          taskUpdate.name = e.task.name;
          taskUpdate.date = e.task.date;
          taskUpdate.done = e.task.done;
        }else{
          e.task.id = uuidv4();
          this.tasks.push(e.task);
        }

        this.currentTask = {
          id: '',
          name: '',
          date: '',
          done: false
        };

        this.$toast.open('Task saved');
      }
    },
    editTaskInformation(editTask){
      this.currentTask = editTask;
    },
    updateStatus(updateId){
      const toDoToUpdate = this.tasks.find((item) => item.id === updateId);
      toDoToUpdate.done = !toDoToUpdate.done;
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
  width: 600px;
  background-color: #f9f9f9;
}
@media only screen and (max-width: 1024px) {
    .card{
      width: 90%;
    }
}
</style>
