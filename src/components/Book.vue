<template>
  <mdb-card class="card-height">
    <div class="card-horizontal card-height">
      <img class="card-height" :src="image" alt="Card image cap">
    <mdb-card-body>
      <mdb-card-title>{{title}}</mdb-card-title>
      <mdb-card-text>
        <p>Author: {{author}}</p>
        <p>Date Published: {{datePublishedFormatted}}</p>
        <p>ISBN: {{isbn}}</p>
        <p>MSRP: {{msrp}}</p>
        <p>Edition: {{edition}}</p>
        <p>Pages: {{pages}}</p>
      </mdb-card-text>
    </mdb-card-body>
    </div>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardImage } from 'mdbvue';
import moment from 'moment';

export default {
  name: "Book",
  components: {
    mdbCard, 
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardImage
  },
  data: function() {
    return {
      datePublishedFormatted: moment(this.datePublished).format('MM-DD-YYYY')
    }
  },
  props: {
    id: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    datePublished: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    msrp: {
      type: String,
      required: true
    },
    edition: {
      type: String,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.card-height {
  height: 20em;
}
.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}
</style>

