import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
      userId: 0,
      firstName: "Rogério",
      lastName: "Silva",
      email: "rs@gmail.com",
      password: "123456",
      ableToRequest: true,
      type: "admin",
      nRequisitionsNow: 0,
      photo: ""
    },
    {
      userId: 1,
      firstName: "Oscar",
      lastName: "Sousa",
      email: "os@gmail.com",
      password: "123456",
      ableToRequest: true,
      type: "user",
      nRequisitionsNow: 0,
      photo: ""
    }
    ],

    books: [{
      bookId: 0,
      cover: "",
      title: "",
      author: "",
      publisher: "",
      idTag: [1, 2],
      launchDate: "",
      nPages: 100,
      description: "",
      nViews: 100,
      availability: true,
      bookStatus: "Good"
    },
    {
      bookId: 1,
      cover: "",
      title: "",
      author: "",
      publisher: "",
      idTag: [1, 2],
      launchDate: "",
      nPages: 200,
      description: "",
      nViews: 200,
      availability: true,
      bookStatus: "Worn"
    }],

    reviews: [{
      reviewId: 0,
      bookId: 0,
      userId: 1,
      rating: 4,
      date: "",
      comment: "",
    },
    {
      reviewId: 0,
      bookId: 0,
      userId: 0,
      rating: 4,
      date: "",
      comment: "",
    }],

    requisitions: [{
      requisitionId: 0,
      bookId: 0,
      userId: 0,
      requisitionDate: "",
      deliveryDate: "",
      deliveryBookStatus: ""
    },
    {
      requisitionId: 1,
      bookId: 0,
      userId: 0,
      requisitionDate: "",
      deliveryDate: "",
      deliveryBookStatus: ""
    }],

    tags: [{
      tagId: 1,
      tagDescription: "Desporto"
    },
    {
      tagId: 2,
      tagDescription: "Ciência"
    }],

    bookSuggestions: [{
      suggestionId: 0,
      suggestionTitle: "",
      suggestionAuthor: "",
      userId: ""
    }],

    ClickedBook: 1, //Id do book clicked, 1 temporary id

  },
  mutations: {

  },
  actions: {

  },

  getters: {
    Login: (state) => (user) => {
      let verification = false
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].email == user.email && state.users[i].password == user.password) {
          verification = true
        }
      }
     return verificacion 
    },


    Signup: (state) => (user) => {
      let strError = ""
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].email == user.email) {
          strError += "Email já existe /n"
        }

        if (user.password != user.password2) {
          strError += "Passwords diferentes /n"
        }
      }

      return strError
    },

    getLastId: (state) => {
      let lastId = 0
        if (state.users.length > 0) {
          lastId = state.users[state.users.length - 1].userId + 1
        }
      return lastId
    },


    //For book page
    ClickedBook(state){
      return state.ClickedBook

    },
    books(state){
      return state.books

    },
    requisitions(state){
      return state.requisitions
    }
  }
})
