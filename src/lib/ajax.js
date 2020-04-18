import axios from 'axios';
const BASE_URL = 'http://ec2-52-62-179-225.ap-southeast-2.compute.amazonaws.com'

export default {

  getAllWines(){
    const url = `${BASE_URL}/user`
    return axios.get(url)
  },

  getSingleWine(wine){
    const url = `${BASE_URL}/user/${wine}`
    return axios.get(url)
  },

  addWine(wineName, description, img){
    const url = `${BASE_URL}/add`
    return axios.post(url, {
      wineName, description, img
    })
  },

  updateSingleWine(wine, newName, newDescription, newImg, id){
    const url = `${BASE_URL}/user/${wine}`
    return axios.put(url, {
      newName, newDescription, newImg, id
    })
  },

  deleteWine(wine){
    const url = `${BASE_URL}/user/${wine}`
    return axios.delete(url)
  },

  signIn(userName, password){
    const url = `${BASE_URL}/signIn`
    return axios.post(url, {
      userName, password
    })
  }



}; // export
