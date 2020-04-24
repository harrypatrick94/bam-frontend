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
  addSeller(name, description, img, link){
    const url = `${BASE_URL}/addSeller`
    return axios.post(url, {
      name, description, img, link
    })
  },
  addWine(wineName, description, img){
    const url = `${BASE_URL}/add`
    return axios.post(url, {
      wineName, description, img
    })
  },
  updateSingleSeller(seller, newName, newDescription, newImg, newLink, id){
    const url = `${BASE_URL}/sellers/${seller}`
    return axios.put(url, {
      newName, newDescription, newImg, newLink, id
    })
  },
  updateSingleWine(wine, newName, newDescription, newImg, id){
    const url = `${BASE_URL}/wines/${wine}`
    return axios.put(url, {
      newName, newDescription, newImg, id
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
  }



}; // export
