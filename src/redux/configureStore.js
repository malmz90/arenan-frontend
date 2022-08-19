import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './reducers/user'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'main-root',
  storage,
}

const reducer = combineReducers({
  user: user,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware())

const Persistor = persistStore(store)

export { Persistor }
export default store
