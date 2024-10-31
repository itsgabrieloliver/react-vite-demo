import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import GlowingImage from './components/glowingimage'
import './App.css'

function App() {
	const [count, setCount] = useState(0)


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
			<h1>Vite + React</h1>
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
