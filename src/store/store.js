import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    tasks: [
      { id: '4fe2d942-584b-439b-a5fc-bd9f564d8d47', name: 'complete psychometric test', date: '2025-04-10', done: false},
      { id: '299f289c-01de-482b-af0c-0cf108401e8f',name: 'complete front-end tasks', date: '2020-04-11', done: true}
      ],
  },
  getters: {
    allTasks: state => {
        return state.tasks;
    }
  },
  mutations: {
    addTask(state, todo){
      state.tasks.push(todo);
    },
    editTask(state, task){
      const taskUpdate = state.tasks.find((x)=> x.id === task.id);
      taskUpdate.name = task.name;
      taskUpdate.date = task.date;
      taskUpdate.done = task.done;
    },
    deleteTask(state, deleteTaskId){
      state.tasks = state.tasks.filter(x=> x.id !== deleteTaskId);
     
    },
    updateStatus(state, updateId){
      const toDoToUpdate = state.tasks.find((item) => item.id === updateId);
      toDoToUpdate.done = !toDoToUpdate.done;
    }
  }
});