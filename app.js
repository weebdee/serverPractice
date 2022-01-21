document.querySelector('#som').addEventListener('input', () =>{
	const request = new XMLHttpRequest()
	request.open('GET', 'data.json')
	request.setRequestHeader('Content-type', 'app/json')
	request.send()
	request.addEventListener('load', () => {
		const data = JSON.parse(request.response)
		document.getElementById('usd').value = document.getElementById('som').value / data.usd
	})
})

document.querySelector('#usd').addEventListener('input', () =>{
	const request = new XMLHttpRequest()
	request.open('GET', 'data.json')
	request.setRequestHeader('Content-type', 'app/json')
	request.send()
	request.addEventListener('load', () => {
		const data = JSON.parse(request.response)
		document.getElementById('som').value = document.getElementById('usd').value * data.usd
	})
})



