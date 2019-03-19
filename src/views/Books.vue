<template>
  <div class="container">
    <p class="d-flex justify-content-end">
      <router-link to="/new-book">
        <button type="button" class="btn btn-primary">Add Book</button>
      </router-link>
    </p>
    <div class="mb-5">
      <div v-for="book in books" v-bind:key="book.id" class="mb-3">
      <Book :title="book.title" :author="book.author" :datePublished="book.datePublished" :isbn="book.isbn" :msrp="book.msrp" :edition="book.edition" :pages="book.pages" :image="book.image"></Book>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Book from '@/components/Book'

export default {
  name: "Books",
  components: {
    Book
  },
  data: () => {
    return {
      books: []
    }
  },
  methods: {
    loadBooks: function() {
      axios.get(`http://${process.env.VUE_APP_DB_HOST}:8080/books`).then((response) => {
          this.books = response.data
          console.log(response.data);
        }, (error) => {
          console.log(error)
        });
    }
  },
  mounted: function() {
    console.log(process.env);
    this.loadBooks();
  }
}
</script>

<style scoped>

</style>

