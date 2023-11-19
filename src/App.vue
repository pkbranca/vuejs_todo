<template>
  <div id="app">
    <div class="card m-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h4 class="font-sans font-bold text-xl mb-5">To Do List</h4>
      <ToDoForm v-bind:editTask="currentTask" @addTask="addTask"/>
      <TaskList
        @updateStatus="updateStatus" 
        @deleteTaskInformation="deleteTaskInformation"
        @cloneInformation="cloneInformation"
        @editTaskInformation="editTaskInformation"/>
    </div>
     <confirm-delete
      v-show="isConfirmDeleteModalVisible"
      modalHeadline="Delete task"
      deleteMessage="Are you sure?"
      @deleteRecordEvent="deleteTaskConfirmation"
      @close="closeConfirmDeleteModal"
    />    
  </div>
</template>

<script>
import ToDoForm from './components/ToDoForm.vue';
import TaskList from './components/TaskList.vue';
import { v4 as uuidv4 } from 'uuid';
import ConfirmDelete from './components/ConfirmDelete.vue';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { mapGetters } from 'vuex'




export default {
  name: 'App',
  components: {
    ToDoForm,
    TaskList,
    ConfirmDelete
  },
  data() {
    return {
    isConfirmDeleteModalVisible: false,
    deleteTaskId: '',
      currentTask: {
        id: '',
        name: '',
        date: '',
        done: false
      },
    }
  },

  methods: {
    deleteTaskConfirmation(){
      this.isConfirmDeleteModalVisible = false;
      this.$store.commit('deleteTask', this.deleteTaskId);
      this.deleteTaskId = '';
    },
    
    closeConfirmDeleteModal(){
      this.isConfirmDeleteModalVisible = false;
    },

    cloneInformation(e){
      let cloneTask = {
        id: uuidv4(),
        name: e.name,
        date: e.date,
        task: e.task
      };
      this.$store.commit('addTask', cloneTask);
    },
    deleteTaskInformation(e){
      this.isConfirmDeleteModalVisible= true;
      this.deleteTaskId = e.id;
    },
    addTask(e){
      if(e.task.date !== "" && e.task.name !== "" ){
        if(e.task.id !== ""){
          this.$store.commit('editTask', e.task);
        }else{
          e.task.id = uuidv4();
          this.$store.commit('addTask', e.task);
        }
        this.cleanCurrentTask();
        this.$toast.open('Task saved');
      }
    },
    editTaskInformation(editTask){
      this.currentTask = { ...editTask };
    },
    updateStatus(updateId){
      this.$store.commit('updateStatus', updateId);
    },
    cleanCurrentTask(){
      this.currentTask = {
          id: '',
          name: '',
          date: '',
          done: false
        };
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
