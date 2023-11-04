<template>
  <div>
 
    <div class="mb-6">
      <label for="newTask" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">New task</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
               leading-tight focus:outline-none focus:shadow-outline"
               id="username" type="text" v-model.lazy="label" placeholder="Your task">   
    </div>
    <div class="mb-6">
      <label for="newTask" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
               leading-tight focus:outline-none focus:shadow-outline"
               id="dueDate" type="date" v-model.lazy="dueDate" placeholder="Due date">   
    </div>
    <div>
      <button type="submit" class="btn_submit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="addTask">
        Submit
      </button>
    </div>
    <!-- <form class="formTask m-auto" @submit="">
  </form> -->
  </div>

</template>

<style>
  .formTask{
    width: 400px;
  }
</style>
<script>
 import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      label: "",
      dueDate: Date
    };
  },
  // props: ['addTask'],
  // emits: ['addTask'],
  methods: {
    onSubmit(e){
      e.preventDefault();
      this.$emit("addTask", { task: this.label})
    },
    addTask(){
      this.$emit('addTask', {id: uuidv4(), name: this.label, done: false, date: new Date(this.dueDate)});
      this.label = '';
      this.dueDate = '';
    }
  }

}
</script>