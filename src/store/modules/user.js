// 用户操作
import { login, getInfo, smsLogin } from '../../api/sys/user'
import { getToken, setToken, removeToken } from '../../utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    header: '',
    userId: '',
    roles: '',
    userIcon: '',
    userName: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_HEADER: (state, header) => {
    state.header = header
  },
  SET_USERNAME: (state, username) => {
    state.userName = username
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERID: (state, userid) => {
    state.userId = userid
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERICON: (state, usericon) => {
    state.userIcon = usericon
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username, password: password }).then(res => {
        // 放到 Vuex
        commit('SET_TOKEN', res.data)
        setToken(res.data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 用户短信登录
  smsLogin({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      smsLogin(userInfo).then(res => {
        commit('SET_TOKEN', res.msg)
        setToken(res.msg, userInfo.remember)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const { data } = res
        const { username, header, userId } = data
        commit('SET_NAME', username)
        commit('SET_HEADER', header)
        commit('SET_USERID', userId)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 登出
  logout({ commit, state }) {
    return new Promise((resolve) => {
      removeToken()
      resolve()
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
    })
  },

  // 刷新token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

