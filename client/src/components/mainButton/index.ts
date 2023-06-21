const URL = 'http://localhost:3000'

export function handleMainButton() {
  const mainButton = document.querySelector('.main__button')

  if (mainButton) {
    mainButton.addEventListener('click', async () => {
      try {
        const res = fetch(`${URL}/list`)
        const response = await res

        const data = await response.json()

        const list = data.map((item: any) => {
          const listElement = document.createElement('li')
          listElement.setAttribute('class', 'list__item')
          listElement.textContent = item.description
          return listElement
        })

        const listElement = document.querySelector('.list')
        listElement!.textContent = ''
        list.forEach((item: any) => {
          listElement?.appendChild(item)
        })
      } catch (err) {
        throw new Error(err as string)
      }
    })
  }

  return () => {
    if (mainButton) {
      mainButton.removeEventListener('click', () => {})
    }
  }
}