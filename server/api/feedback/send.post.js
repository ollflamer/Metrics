import { useRuntimeConfig } from '#imports';
import SMTPService from '../../utils/smtp';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    const config = useRuntimeConfig();
    
    if (!body.name || !body.email || !body.phone) {
      return {
        success: false,
        message: 'Пожалуйста, заполните все обязательные поля'
      };
    }
    
    console.log('Получены данные формы для отправки по SMTP:', body);
    
    const smtpService = new SMTPService(config);
    
    const reqInfo = {
      ip: event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress,
      userAgent: event.node.req.headers['user-agent']
    };
    
    try {
      const info = await smtpService.sendFeedbackEmail(body, reqInfo);
      
      console.log('Письмо успешно отправлено через SMTP:', info.messageId);
      
      return {
        success: true,
        message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
        messageId: info.messageId
      };
    } catch (emailError) {
      console.error('Ошибка при отправке письма через SMTP:', emailError);
      
      return {
        success: false,
        message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.',
        error: emailError.message
      };
    }
  } catch (error) {
    console.error('Ошибка при обработке формы обратной связи:', error);
    
    // Возвращаем общую ошибку
    return {
      success: false,
      message: 'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.',
      error: error.message
    };
  }
});
