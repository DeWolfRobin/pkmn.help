const Redux = require("redux")

const initialState = {
  tab: 1,
  type0: "normal",
  type1: "normal",
  type2: "none",
  ability: "none",
  status: "none",
}

const table = {
  ChangeTab(state, action) {
    return {tab: action.value}
  },
  UpdateType0(state, action) {
    return {type0: action.value}
  },
  UpdateType1(state, action) {
    return {type1: action.value}
  },
  UpdateType2(state, action) {
    return {type2: action.value}
  },
  UpdateStatus(state, action) {
    return {status: action.value}
  },
  UpdateAbility(state, action) {
    return {ability: action.value}
  },
}

function update(a, b) {
  return Object.assign({}, a, b)
}

function normalize(state) {
  const type1 = state.type1
  const type2 = state.type2
  if (type1 === type2) {
    return update(state, {type1, type2: "none"})
  } else {
    return state
  }
}

function reducer(state, action) {
  if (table.hasOwnProperty(action.type)) {
    const handler = table[action.type]
    const delta = handler(state, action)
    return normalize(Object.assign({}, state, delta))
  } else {
    return state
  }
}

const store =
  Redux.createStore(
    reducer,
    initialState,
    // Redux DevTools for Chrome
    window.devToolsExtension && window.devToolsExtension()
  )

module.exports = store
