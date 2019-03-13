<template>
  <div class="container">
    <section class="form-simple">
      <mdb-row>
        <mdb-col
          md="5"
          class="mx-auto"
        >
          <mdb-card>
            <div class="header pt-3 grey lighten-2">
              <mdb-row class="d-flex justify-content-start">
                <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">New Book</h3>
              </mdb-row>
            </div>
            <mdb-card-body class="mx-4 mt-4">
              <mdb-input
                label="Title"
                type="text"
                v-model="title"
              />
              <mdb-input
                label="Author"
                type="text"
                v-model="author"
              />
              <mdb-input
                label="ISBN"
                type="text"
                v-model="isbn"
              />
              <mdb-numeric-input
                placeholder="MSRP"
                v-model="msrp"
              />
              <mdb-input
                label="Edition"
                type="text"
                v-model="edition"
              />
              <mdb-numeric-input
                placeholder="Pages"
                v-model="pages"
              />
              <mdb-input
                label="Image"
                type="text"
                v-model="image"
              />
              <mdb-date-picker
                :date="startDate"
                :option="option"
                @getValue="getPickerValue"
              ></mdb-date-picker>
              <div class="text-center mb-4 mt-5">
                <mdb-btn
                  color="primary"
                  type="button"
                  @click="saveBook"
                  class="btn-block z-depth-2"
                >Save</mdb-btn>
              </div>
              <div class="text-center mb-4">
                <mdb-btn
                  color="blue-grey"
                  type="button"
                  class="btn-block z-depth-2"
                >Cancel</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn,
  mdbDatePicker,
  mdbNumericInput
} from "mdbvue";
import axios from "axios";

export default {
  name: "NewBook",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbDatePicker,
    mdbNumericInput
  },
  data() {
    return {
      datePublished: "",
      title: "",
      author: "",
      isbn: "",
      msrp: 0.0,
      edition: "",
      pages: 0,
      image: "",
      startDate: {
        date: ""
      },
      option: {
        type: "day",
        week: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        format: "YYYY-MM-DD",
        placeholder: "Date Published",
        inputStyle: {
          display: "inline-block",
          padding: "6px",
          "line-height": "22px",
          "font-size": "16px",
          border: "2px solid #fff",
          "box-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.2)",
          "border-radius": "2px",
          color: "primary"
        },
        color: {
          header: "primary",
          headerText: "white",
          checkedDay: "primary"
        },
        buttons: {
          ok: "Ok",
          cancel: "Cancel"
        }
      }
    };
  },
  methods: {
    getPickerValue: function(value) {
      this.datePublished = value;
      // console.log(value);
    },
    saveBook: function() {
      let self = this;
      let bookBody = {
        title: self.title,
        author: self.author,
        isbn: self.isbn,
        msrp: self.msrp,
        edition: self.edition,
        pages: self.pages,
        image: self.image,
        datePublished: self.datePublished
      };

      // console.log(bookBody);

      axios
        .post(`http://localhost:8080/book`, bookBody)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped>
.form-simple .font-small {
  font-size: 0.8rem;
}

.form-simple .header {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
</style>


