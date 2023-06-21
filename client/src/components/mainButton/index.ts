const URL = 'http://localhost:3000'

export function handleMainButton() {
  const mainButton = document.querySelector('.main__button')
  console.log('aqui', mainButton)
  
  if (mainButton) {
    mainButton.addEventListener('click', async () => {
      console.log('aqui')
      try {
        const list = fetch(`${URL}/list`)
        const response = await list

        console.log(response)
      } catch (error) {
        
      }
    })
  }

  return () => {
    if (mainButton) {
      mainButton.removeEventListener('click', () => {})
    }
  }
}