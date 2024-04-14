import { ref } from "vue";

const header = ref("TODP APP");
const newItem = ref("");
const newItemPri = ref(false);
const todos = ref([
  { id: 1, task: "Do homework" },
  { id: 2, task: "start reading" },
  { id: 3, task: "write a poem!!" },
  { id: 4, task: "feed the cat" },
]);
const handelAdd = () => {
  todos.value.push({
    id: todos.value.length + 1,
    task: newItem.value,
  });
  newItem.value = "";
};
