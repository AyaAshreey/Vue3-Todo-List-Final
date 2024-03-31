<template>
  <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <input type="text" v-model="todoState.todo" />
    <todoButton @click="createTodo()"/>
  </div>
  <!-- <h1>{{ todoState.todo }}</h1> -->
  <p v-show="todoState.invalid" class="err-msg"> {{ todoState.errMsg }}</p>
</template>
<!-- ================================================================================================= -->
<script setup>
  import { reactive, defineEmits } from "vue";
  import todoButton from "../components/todoButton.vue"
  const emit = defineEmits(["create-todo"]);
  const todoState = reactive({
    todo:"",
    invalid:"",
    errMsg:"",
  });

  const createTodo = () => {
    todoState.invalid= null;
    if(todoState.todo !== ""){
        emit("create-todo" , todoState.todo);
        todoState.todo ="";
        return
    }
    todoState.invalid =true;
    todoState.errMsg = "Todo Value Can not be Empty"
  };
</script>
<!-- ================================================================================================= -->
<style lang="scss" scoped>
  .input-wrap {
    display: flex;
    transition: 250ms ease;
    border: 2px solid #41b080;
    &.input-err {
    border-color: red;
  }

    &:focus-within {
      box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
        0 -2px 4px -2px rgb(0 0 0 / 0.1);
    }

    input {
      width: 100%;
      padding: 8px 6px;
      border: none;

      &:focus {
        outline: none;
      }
    }


  }
  .err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
