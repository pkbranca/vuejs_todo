<template>
  <div class="mt-5 text-left">
    <div class="card taskContainer w-100 mb-6 p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-between"
      v-for="(task, index) in tasks" :key="index" >
      <!-- <input type="radio" id="yes" value="true" v-model="task.done" @click="updateTaskStatus(index)"> -->
      <div class="flex">
        <div class="task_radio" :class="{'selected': task?.done}" @click="updateTaskStatus(task)" >
            <div class="check"></div>
        </div>
        <div class="taskInformation">
          <p class="taskName" :class="{'line-through taskDone ': task?.done}">{{ task?.name }}</p>
          <p class="dueDate">Due date: {{ $date(task?.date).format('DD MMM') }}</p>
        </div>
     </div>
      <div class="task_option">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props:  ['tasks'],
  data: function(){
    return{
    }
  },
  methods:{
    updateTaskStatus(task){
      this.$emit('updateStatus', task.id);
    }
  }
}
</script>
<style scoped>
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
.taskName.selected{
  
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