import nodemailer from 'nodemailer';
import { useRuntimeConfig } from '#imports';

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
    
    console.log('Получены данные формы:', body);
    
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: parseInt(config.smtpPort),
      secure: config.smtpSecure === 'true',
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      },
      tls: {
        rejectUnauthorized: false
      },
      debug: true
    });
    
    const mailOptions = {
      from: `"Форма обратной связи" <${config.smtpUser}>`,
      to: config.emailRecipient,
      subject: `Новое сообщение от ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #3b82f6; border-bottom: 1px solid #eee; padding-bottom: 10px;">Новое сообщение с формы обратной связи</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Имя:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Телефон:</strong> ${body.phone}</p>
            <p><strong>Сообщение:</strong> ${body.message || 'Не указано'}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 10px; border-radius: 4px; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>Сообщение отправлено: ${new Date().toLocaleString('ru-RU')}</p>
            <p>IP: ${event.node.req.headers['x-forwarded-for'] || event.node.req.socket.remoteAddress}</p>
          </div>
        </div>
      `
    };
    
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Письмо успешно отправлено:', info.messageId);
      
      return {
        success: true,
        message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
        messageId: info.messageId
      };
    } catch (emailError) {
      console.error('Ошибка при отправке email:', emailError);
      
      return {
        success: false,
        message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.',
        error: emailError.message
      };
    }
  } catch (error) {
    console.error('Ошибка при обработке формы:', error);
    
    return {
      success: false,
      message: 'Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.',
      error: error.message
    };
  }
});
