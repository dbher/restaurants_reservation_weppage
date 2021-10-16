const menuElement = document.querySelector('#side-dish')

const menuData = [
	'side-dish', '소주', '막걸리', '위스키', '참이슬'
]

for (let i = 0; i < menuData.length; i++)
{
	const liElement = document.createElement('li')
	liElement.textContent = menuData[i]
	menuElement.appendChild(liElement)
}

console.log(menuElement)