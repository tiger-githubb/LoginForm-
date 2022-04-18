import { createStore } from "vuex";
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut }  from 'firebase/auth' ;

export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      
      
      try {
        await signInWithEmailAndPassword(auth , email, password)
      }
      catch (error) {
        switch (error.code) {
      case 'auth/user-not-found' :
        alert("Utilisateur non trouvé")
        break
      case 'auth/wrong-password' :
        alert("Mauvais mot de passe")
        break
      default :
        alert("Quelque chose a mal tourné")
        }
        return
      }
      commit ('SET_USER', auth.currentUser)
      router.push('/')
        
  },


  async register({ commit }, { email, password }) {
    
    
      try {
        await createUserWithEmailAndPassword(auth , email, password)
      }
      catch (error) {
        switch (error.code) {
      case 'auth/email-already-in-use' :
        alert("Email déjà utilisé")
        break
      case 'auth/invalid-email' :
        alert("Email invalide")
        break
        case 'auth/operation-not-allowed' :
        alert("Opération non autorisée")
        break
         case 'auth/weak-password' :
        alert("Mot de passe faible")
        break 
      default :
        alert("Quelque chose a mal tourné")
        
        }
        return
      }
      commit ('SET_USER', auth.currentUser)
      router.push('/')
  },

  async logout({ commit }) {
    await signOut(auth)
    commit ('CLEAR_USER')
    router.push('/login')
  },
  fetchUser({ commit }) {
    auth.onAuthStateChanged( user  => { 
      if (user === null) {
        commit('CLEAR_USER')
      } else {
        commit('SET_USER', user)
        if (router.isReady && router.currentRoute.value.path === '/login') {
          router.push('/')
        }
      }

      })
      }
  },
  modules: {
  },
});
