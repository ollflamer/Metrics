import nodemailer from 'nodemailer';

/**
 * Утилита для отправки электронных писем
 * Использует nodemailer и настройки из переменных окружения
 */
export default class SMTPService {
  constructor(config) {
    this.config = config;
    this.transporter = this.createTransporter();
  }

  /**
   * Создает транспорт nodemailer с настройками из конфигурации
   * @returns {nodemailer.Transporter} Объект транспорта nodemailer
   */
  createTransporter() {
    return nodemailer.createTransport({
      host: this.config.smtpHost,
      port: parseInt(this.config.smtpPort),
      secure: this.config.smtpSecure === 'true',
      auth: {
        user: this.config.smtpUser,
        pass: this.config.smtpPass
      },
      tls: {
        rejectUnauthorized: false 
      },
      debug: process.env.NODE_ENV !== 'production'
    });
  }

  /**
   * Отправляет электронное письмо
   * @param {Object} options Опции для отправки письма
   * @param {string} options.to Email получателя
   * @param {string} options.subject Тема письма
   * @param {string} options.html HTML-содержимое письма
   * @param {string} [options.from] Email отправителя (если не указан, используется из конфигурации)
   * @returns {Promise<Object>} Результат отправки письма
   */
  async sendMail(options) {
    const mailOptions = {
      from: options.from || `"${options.fromName || 'Сервис обратной связи'}" <${this.config.smtpUser}>`,
      to: options.to || this.config.emailRecipient,
      subject: options.subject,
      html: options.html
    };

    if (options.cc) mailOptions.cc = options.cc;
    if (options.bcc) mailOptions.bcc = options.bcc;
    if (options.attachments) mailOptions.attachments = options.attachments;

    return await this.transporter.sendMail(mailOptions);
  }

  /**
   * Отправляет сообщение с формы обратной связи
   * @param {Object} formData Данные формы
   * @param {string} formData.name Имя отправителя
   * @param {string} formData.email Email отправителя
   * @param {string} formData.phone Телефон отправителя
   * @param {string} [formData.message] Сообщение (опционально)
   * @param {Object} [reqInfo] Информация о запросе
   * @returns {Promise<Object>} Результат отправки письма
   */
  async sendFeedbackEmail(formData, reqInfo = {}) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
        <h2 style="color: #3b82f6; border-bottom: 1px solid #eee; padding-bottom: 10px;">Новое сообщение с формы обратной связи</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Имя:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Телефон:</strong> ${formData.phone}</p>
          <p><strong>Сообщение:</strong> ${formData.message || 'Не указано'}</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 10px; border-radius: 4px; margin-top: 20px; color: #6b7280; font-size: 14px;">
          <p>Сообщение отправлено: ${new Date().toLocaleString('ru-RU')}</p>
          ${reqInfo.ip ? `<p>IP: ${reqInfo.ip}</p>` : ''}
          ${reqInfo.userAgent ? `<p>Браузер: ${reqInfo.userAgent}</p>` : ''}
        </div>
      </div>
    `;


    return await this.sendMail({
      subject: `Новое сообщение от ${formData.name}`,
      html: html,
      fromName: 'Форма обратной связи'
    });
  }
}
