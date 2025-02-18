import './assets/styles/reset.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Main from './components/Main/Main'
import { store } from './store/store'

createRoot(document.querySelector('#root') as HTMLDivElement).render(
	<StrictMode>
		<Provider store={store}>		
				<Main/>
		</Provider>
	</StrictMode>
)
