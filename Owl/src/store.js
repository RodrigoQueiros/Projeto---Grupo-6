import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLoggedin: -1,
    
    loggedIn: false,

    currentBookId: 0,

    users: [{
      userId: 0,
      firstName: "Rogério",
      lastName: "Silva",
      email: "rs@gmail.com",
      password: "123456",
      ableToRequest: true,
      type: "admin",
      nRequisitionsNow: 0,
      photo: "https://i.imgur.com/6NIOn6z.jpg"
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
      photo: "https://i.imgur.com/6NIOn6z.jpg"
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
      description: "O harry potter é muito fixe e o carlos leu tudo, mas quando foi ver o filme ficou apaixonado pela hermione e depois nunca mais viu nada a frente. O harry potter é muito fixe e o carlos leu tudo, mas quando foi ver o filme ficou apaixonado pela hermione e depois nunca mais viu nada a frente. O harry potter é muito fixe e o carlos leu tudo, mas quando foi ver o filme ficou apaixonado pela hermione e depois nunca mais viu nada a frente.",
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
      description: "ola ola ola",
      nViews: 100,
      availability: true,
      bookStatus: "Good"
    },
    {
      bookId: 2,
      cover: "https://img.bertrand.pt/images/onde-caem-os-anjos-nora-roberts/NDV8MTk3MDA3OTl8MTU1MzEwODN8MTQ5OTM4MjAwMDAwMA==/502x",
      title: "Onde Caem os Anjos",
      author: "Nora Roberts",
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
      availability: false,
      bookStatus: "Worn"
    }],

    reviews: [{
      reviewId: 0,
      bookId: 0,
      userId: 1,
      rating: 4,
      date: "2018-07-11",
      comment: "This is a review test test. This is a review test test. This is a review test test. This is a review test test.This is a review test test.",
      upVote: [3,4,5],
      downVote: [1]
    },
    {
      reviewId: 1,
      bookId: 0,
      userId: 0,
      rating: 4,
      date: "2018-07-11",
      comment: "This is a review test test. This is a review test test. This is a review test test. This is a review test test. This is a review test test. ",
      upVote: [2,5,6,7],
      downVote: [4,5,6]
    }],

    requisitions: [{
      requisitionId: 0,
      bookId: 2,
      userId: 0,
      requisitionDate: "",
      deliveryDate: "",
      deliveryBookStatus: "",
      active: true
    },
    {
      requisitionId: 1,
      bookId: 0,
      userId: 0,
      requisitionDate: "",
      deliveryDate: "",
      deliveryBookStatus: "",
      active: false
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

    

  },

  getters: {
    Login: (state) => (user) => {
      let verification = false
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].email == user.email && state.users[i].password == user.password) {
          verification = true
          state.userLoggedin = state.users[i].userId
          localStorage.setItem("userLoggedIn", state.userLoggedin)
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

    getLastIdReq: (state) => {
      let lastId = 0
        if (state.requisitions.length > 0) {
          lastId = state.requisitions[state.requisitions.length - 1].requisitionId + 1
        }
      return lastId
    },

    getUserLoggedIn(state){
      return state.userLoggedin

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
    },
    users(state){
      return state.users
    },
    reviews(state){
      return state.reviews
    }
  },

  mutations: {
    open_book(state, payload) {
      
      state.currentBookId = payload
      
    },


  },

  actions:{
    open_book(context,payload){
      context.commit('open_book',payload)
    }

  }
})
