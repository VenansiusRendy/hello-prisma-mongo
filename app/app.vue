<template>
  <div>
    <button @click="submit">Post</button>
    <button @click="getUsers">Get</button>
    <p>{{ users }}</p>
  </div>
</template>
<script setup>
const users = ref('')
const submit = async () => {
  console.log('submit clicked')
  const user = await $fetch('/api/users', {
    method: 'POST'
  })
  console.log(user);
  
}
const getUsers = async () => {
  users.value = await useFetch('/api/users')
  console.log(users)
}
</script>
