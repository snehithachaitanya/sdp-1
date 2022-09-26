import React, { useState } from 'react'
import './App.css'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Pay() {
	const [name, setName] = useState('snehitha')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:3009/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_5RxQaocfhFTitY' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'event payment',
			description: 'happy event',
			image: 'http://localhost:3009/kllogo.png',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: '2100030086@kluniversity.in',
				phone_number: '9989503256'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<div className='pbg'>
			<header className="App-header">
				<a
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button>
					click hear to proceed
					</button>
				</a>
			</header>
		</div>
	)
}

export default Pay