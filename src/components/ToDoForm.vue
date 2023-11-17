<template>
  <div>
 
    <form @submit="addTask">
      <div class="mb-6">
        <label for="newTask" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">New task</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none focus:shadow-outline"
                 id="username" type="text"
                 required
                 v-model.lazy="localValue.name"
                 placeholder="Your task">
      </div>
      <div class="mb-6">
        <label for="newTask" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                 leading-tight focus:outline-none focus:shadow-outline"
                 type="date"
                 required
                 v-model.lazy="localValue.date"
                 placeholder="Due date">
      </div>
      <div>
        <button type="submit" class="btn_submit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  </div>

</template>

<style>
  .formTask{
    width: 400px;
  }
</style>
<script>

export default {
  props: {
    editTask: {
      id: '',
      name: '',
      date: '',
    }
  },
  computed: {
            localValue: {
                get: function() {
                    return this.editTask;
                }
            }
        },
  data() {
    return {
    };
  },
  methods: {
    addTask(e){
      e.preventDefault();
      this.$emit('addTask', { task: this.localValue});
    }
  }

}
</script>