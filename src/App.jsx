import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	const logobg = React.createRef();
	const logo = React.createRef();

	useEffect(() => {
		//draw svg to canvas
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		//disable image smoothing
		ctx.imageSmoothingEnabled = false;
		canvas.width = logo.current.width;
		canvas.height = logo.current.height;

		const img = new Image();
		//set canvas size to same as logo
		img.src = viteLogo;
		img.onload = () => {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		}

		logo.current.addEventListener('mouseleave', (e) => {
			logobg.current.classList.remove('hoverglow');
		})
		logo.current.addEventListener('mousemove', (e) => {
			//get mouse position on logo ignoring any padding
			const computedStyle = window.getComputedStyle(logo.current);

			const rect = logo.current.getBoundingClientRect();
			const x = e.clientX - rect.left - computedStyle.paddingLeft.replace('px', '');
			const y = e.clientY - rect.top - computedStyle.paddingTop.replace('px', '');
			console.log(x, y);
			const pixel = ctx.getImageData(x, y, 1, 1).data;
			console.log(pixel[3] == 255);
			if (pixel[3] == 255) {
				logobg.current.classList.add('hoverglow');
			} else {
				logobg.current.classList.remove('hoverglow');
			}
		});

	})

	return (
		<>
			<div className="container">
				<div className="imagecontainer">
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logobg" alt="Vite logo" ref={logobg} />
						<img src={viteLogo} className="logo" alt="Vite logo" ref={logo} />
					</a>
				</div>
				<div className="imagecontainer">
					<a href="https://vite.dev" target="_blank">
						<img src={reactLogo} className="logobg react" alt="React logo" />
						<img src={reactLogo} className="logo react" alt="React logo" />
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
