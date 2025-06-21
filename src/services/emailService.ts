import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ineeyv7'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_ychlsk1'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'kG0TRgyik3-fVAIzD'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  attachments?: File[];
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Convert files to base64 for email attachment
    const attachmentPromises = data.attachments?.map(async (file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }) || [];

    const attachmentData = await Promise.all(attachmentPromises);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      subject: data.subject || 'Contact Form Submission',
      message: data.message,
      attachments: attachmentData.length > 0 ? attachmentData.join('\n\n') : 'No attachments',
      attachment_count: data.attachments?.length || 0,
      to_email: 'itscoder150@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

