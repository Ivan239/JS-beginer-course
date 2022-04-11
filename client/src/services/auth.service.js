import axios from 'axios'

class AuthService {
  API_ENDPOINT = 'http://localhost:3003'

  // We will save token in auth service field
  TOKEN

  // We would get status of auth by looking into token.
  // -------
  // Note that this method don't notify react component to do rerender,
  // but we design app in way that when TOKEN changed, page would be rerendered
  // and therefore would access changed value
  // But we can refuse from this antipattern with using context or redux state
  isAuthorized() {
    return !!this.TOKEN
  }

  async register(login, password) {
    try {
      const response = await axios.post(`${this.API_ENDPOINT}/register`, { login, password })

      if (response.data?.token) {
        this.TOKEN = response.data.token
      }
    } catch (e) {
      if (e.response) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  }

  async login(login, password) {
    try {
      const response = await axios.post(`${this.API_ENDPOINT}/login`, { login, password })

      if (response.data?.token) {
        this.TOKEN = response.data.token
      }
    } catch (e) {
      if (e.response) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  }

  // Logout is just vanishing token in our case
  logout() {
    this.TOKEN = undefined
  }
}

const authService = new AuthService()

export default authService
