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
      cover: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publisher: "Scholastic",
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
      cover: "https://img.bertrand.pt/images/sangue-e-fogo---a-historia-dos-reis-targaryen-george-r-r-martin/NDV8MjI2MTk0NjV8MTg0OTc1NTl8MTU0NjQ3MzYwMDAwMA==/502x",
      title: "Sangue e Fogo - A História dos Reis Targaryen",
      author: "George R. R. Martin",
      publisher: "Scholastic",
      idTag: [1, 2],
      launchDate: "",
      nPages: 100,
      description: "",
      nViews: 100,
      availability: true,
      bookStatus: "Good"
    },
    {
      bookId: 2,
      cover: "https://img.bertrand.pt/images/onde-caem-os-anjos-nora-roberts/NDV8MTk3MDA3OTl8MTU1MzEwODN8MTQ5OTM4MjAwMDAwMA==/502x",
      title: "Onde Caem os Anjos",
      author: "Nora Roberts ",
      publisher: "Scholastic",
      idTag: [1, 2],
      launchDate: "",
      nPages: 100,
      description: "",
      nViews: 100,
      availability: true,
      bookStatus: "Good"
    },
    {
      bookId: 3,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51z3fT5zLvL._SX390_BO1,204,203,200_.jpg",
      title: "Fullstack Vue: The Complete Guide to Vue.js",
      author: "Hassan Djirdeh",
      publisher: "CreateSpace Independent Publishing Platform",
      idTag: [1, 2],
      launchDate: "",
      nPages: 320,
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
     return verification 
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
