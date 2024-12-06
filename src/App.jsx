import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import GlowingImage from './components/glowingimage'
import GlowingText from './components/glowingText'
import './App.css'

function App() {
	const [count, setCount] = useState(Number.parseInt(localStorage.getItem('count')) || 0)

	//watch for changes in the count
	useEffect(() => {
		//store the count in local storage
		localStorage.setItem('count', count)
	}, [count])

	return (
		<>
			<div className="container">
				<div className="imagecontainer">
					<a href="https://vite.dev" target="_blank">
						<GlowingImage image={viteLogo}></GlowingImage>
					</a>
				</div>
				<div className="imagecontainer">
					<a href="https://vite.dev" target="_blank">
						<GlowingImage image={reactLogo} hasHoles={true}></GlowingImage>
					</a>
				</div>
			</div>
			<GlowingText><h1 className='textColor'>Vite + React</h1></GlowingText>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
