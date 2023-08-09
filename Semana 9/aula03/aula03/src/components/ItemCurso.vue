<template>
  <div>
    <h3>Título: {{ titulo }}</h3>
    <h3>Duração: {{ duracao }} horas</h3>
    <h3>Vagas: {{ vagas }}</h3>
    <button @click="$emit('increver', titulo)">Increver-se</button>
  </div>
</template>

<script>
export default {
  props:[
    "titulo",
    "duracao",
    "vagas"
  ]
}
</script>

<style scoped>
</style>