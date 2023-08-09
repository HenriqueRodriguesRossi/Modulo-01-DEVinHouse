<template>
  <h1>Lista de curso: </h1>

  <ItemCurso v-for="(curso, index) in listaCursos" v-bind:key="index" v-bind:titulo="curso.titulo"
    v-bind:duracao="curso.duracao" v-bind:vagas="curso.vagas" @increver="inscrever" />

  <p>Nome completo: {{ nomeCompleto }}</p> <br> <br>

  <p>Ano de nascimento: {{ anoNascimento }}</p>

  <input type="number" v-model="numero"> <br>
  <span>{{ quadrado }}</span>
</template>

<script>
//import Card from './components/Card.vue'
import ItemCurso from './components/ItemCurso.vue'

export default {
  components: {
    ItemCurso
  },
  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS", duracao: 20, vagas: 40
        },
        {
          titulo: "Javascript", duracao: 20, vagas: 40
        },
        {
          titulo: "PHP", duracao: 20, vagas: 40
        },
      ],
      nome: "Henrique",
      sobrenome: "Rossi",
      idade: 21,
      numero: 0,
      quadrado: 0
    }
  },
  computed: {
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    anoNascimento() {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const anoNascimento = anoAtual - this.idade;
      return anoNascimento
    }
  },
  watch: {
    numero: function (newValue, oldValue) {
      this.quadrado = newValue * newValue;
    }
  },

  methods: {
    inscrever(titulo) {
      alert(`Está inscrito no curso ${titulo}`)
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
