import axios from 'axios';
const BASE_URL = 'http://ec2-52-62-179-225.ap-southeast-2.compute.amazonaws.com'

export default {

  getAllSellers(){
    const url = `${BASE_URL}/sellers`
    return axios.get(url)
  },
  getAllWines(){
    const url = `${BASE_URL}/wines`
    return axios.get(url)
  },
  getSingleSeller(seller){
    const url = `${BASE_URL}/sellers/${seller}`
    return axios.get(url)
  },
  getSingleWine(wine){
    const url = `${BASE_URL}/wines/${wine}`
    return axios.get(url)
  },
  addSeller(name, description, img, link, business){
    const url = `${BASE_URL}/sellers/add`
    return axios.post(url, {
      name, description, img, link, business
    })
  },
  addWine(wineName, description, img, fizzFactor){
    const url = `${BASE_URL}/wines/add`
    return axios.post(url, {
      wineName, description, img, fizzFactor
    })
  },
  updateSingleSeller(newName, newDescription, newImg, newLink, newBusiness, id){
    const url = `${BASE_URL}/sellers/update`
    return axios.put(url, {
      newName, newDescription, newImg, newLink, newBusiness, id
    })
  },
  updateSingleWine(newName, newDescription, newImg, newFizzFactor, id){
    const url = `${BASE_URL}/wines/update`
    return axios.put(url, {
      newName, newDescription, newImg, newFizzFactor, id
    })
  },
  deleteSeller(seller){
    const url = `${BASE_URL}/sellers/${seller}`
    return axios.delete(url)
  },
  deleteWine(wine){
    const url = `${BASE_URL}/wines/${wine}`
    return axios.delete(url)
  },

  signIn(userName, password){
    const url = `${BASE_URL}/signIn`
    return axios.post(url, {
      userName, password
    })
  },
  checkLogin(props){
    if (window.localStorage.getItem("token")) {
      const token = window.localStorage.getItem("token")
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      props.history.push("/signIn")
    }
  }


}; // export
