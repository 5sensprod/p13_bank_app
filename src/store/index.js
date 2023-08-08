import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'

/**
 * Configures and creates the Redux store for the application.
 *
 * Le store utilise `rootReducer` pour définir la structure initiale de l'état global.
 * En utilisant `configureStore` de Redux Toolkit, cela configure automatiquement
 * des fonctionnalités comme le middleware Redux Thunk pour les actions asynchrones
 * et le middleware Redux DevTools pour le débogage.
 *
 * @example
 * ```jsx
 * import { Provider } from 'react-redux';
 * import store from './store';
 *
 * const App = () => (
 *   <Provider store={store}>
 *     <YourComponent />
 *   </Provider>
 * );
 * ```
 *
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
const store = configureStore({
  reducer: rootReducer,
})

export default store
