<template>
  <div class="mt-5 text-left">
    <div class="card taskContainer w-100 mb-6 p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-between"
      v-for="(task, index) in tasks" :key="index" >
      <div class="flex">
        <div class="task_radio cursor-pointer" :class="{'selected': task?.done}" @click="updateTaskStatus(task)" >
            <div class="check"></div>
        </div>
        <div class="taskInformation">
          <p class="taskName" :class="{'line-through taskDone ': task?.done}">{{ task?.name }}</p>
          <p class="dueDate">Due date: {{ $date(task?.date).format('DD MMM') }}</p>
        </div>
     </div>
      <div class="task_option">
        <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-ellipsis-vertical" @click="openOptions(task)"/>
        <div class="task_optionsPopover shadow" :class="[taskOptionOpen.id == task.id? 'visible':'hidden']">
          <div class="p-3 popOverOption" @click="editTaskInformation(task)">
            <font-awesome-icon icon="fa-solid fa-pen"></font-awesome-icon>
            <div class="inline ml-2">Edit task</div>
          </div>
          <div class="p-3 popOverOption" @click="cloneInformation(task)">
            <font-awesome-icon icon="fa-solid fa-clone"></font-awesome-icon>
            <div class="inline ml-2">Clone task</div>
          </div>
          <div class="p-3 popOverOption" @click="deleteTaskInformation(task)">
            <font-awesome-icon icon="fa-solid fa-trash"></font-awesome-icon>
            <div class="inline ml-2">Delete task</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props:  ['tasks'],
  data: function(){
    return{
      taskOptionOpen: {},

    }
  },
  methods:{
    updateTaskStatus(task){
      this.$emit('updateStatus', task.id);
    },
    cloneInformation(task){
      this.taskOptionOpen = {};
      this.$emit('cloneInformation',task);
    },
    editTaskInformation(task){
      this.taskOptionOpen = {};
      this.$emit('editTaskInformation',task);
    },
    deleteTaskInformation(task){
      this.taskOptionOpen = {};
      this.$emit('deleteTaskInformation', task);
    },
    openOptions(task){
      if(task === this.taskOptionOpen){
        this.taskOptionOpen = {};
      }else{
        this.taskOptionOpen = task;
      }
    }
  }
}
</script>

<style scoped>
  .task_optionsPopover{
    border: 1px solid #ededed;
    position: absolute;
    background-color: #FFF;
    left: -90px;
    width: 150px;
    z-index: 2;
  }
  .task_option{
    position: relative;
  }
.popOverOption:hover {
    background-color: #ededed;
    cursor: pointer;
  }

  .task_option{
    margin: auto 0;
  }
  .task_radio{
    width: 20px;
    height: 20px;
    margin: auto 0;
    background-color: #fff;
    border: 1px solid #979797;
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
  }
  .taskDone{
    color: gray;
  }
  .task_radio.selected{
    background-color: #00b4d8;
    border: 1px solid #00b4d8;
  }

  .check{
    visibility: hidden;
    transform: rotate(45deg);
    height: 11px;
    width: 6px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
  .task_radio.selected .check{
    visibility: visible;
    position: absolute;
    bottom: 5px;
    left: 6px;
  }
  .taskContainer{
    display: flex;
  }
  .taskInformation{
    display: flex;
    margin-left: 20px;
    flex-direction: column;
  }
  .taskName{
    font-size: 18px;
  }
  .dueDate{
    color: gray;
    font-size: 14px;
    line-height: 10px;
  }
  .card{
    background-color: #FFF;
  }
</style>
