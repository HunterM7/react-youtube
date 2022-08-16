import './App.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
	return (
		<div className='app'>
			<Header />
			<aside className='aside'>
				<Sidebar />
			</aside>
			<main className='main'>
				<Main />
			</main>
		</div>
	)
}

export default App
