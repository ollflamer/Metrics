// Обработчик POST-запроса для формы обратной связи
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    if (!body.name || !body.email || !body.phone) {
      return {
        success: false,
        message: 'Пожалуйста, заполните все обязательные поля'
      }
    }
    
    console.log('Получены данные формы:', body)
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return {
      success: true,
      message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
    }
  } catch (error) {
    console.error('Ошибка при обработке формы:', error)
    

    return {
      success: false,
      message: 'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.'
    }
  }
})
