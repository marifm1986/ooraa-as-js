import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FormData, initialFormData, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from './constants';

interface UseQuoteFormOptions {
  emailSubject?: string;
  fromName?: string;
}

export function useQuoteForm(options: UseQuoteFormOptions = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
    setSubmitError(false);
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const templateParams = {
      to_email: 'oxaleinfo@gmail.com',
      emailSubject: options.emailSubject || 'Request a Quote Mail from Jagdeep Singh | OORAA',
      fromName: options.fromName || 'Website Contact Form',
      first_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      user_debt_amount: formData.debtAmount,
      user_state: formData.state,
      reply_to: formData.email
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    )
    .then((res) => {
      console.log('Email sent successfully:', res);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        closeModal();
      }, 2000);
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      setIsSubmitting(false);
      setSubmitError(true);
    });
  };

  // For non-form button clicks (backwards compatibility)
  const handleButtonSubmit = () => {
    setIsSubmitting(true);
    setSubmitError(false);

    const templateParams = {
      to_email: 'oxaleinfo@gmail.com',
      emailSubject: options.emailSubject || 'Request a Quote Mail from Jagdeep Singh | OORAA',
      fromName: options.fromName || 'Website Contact Form',
      first_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      user_debt_amount: formData.debtAmount,
      user_state: formData.state,
      reply_to: formData.email
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    )
    .then((res) => {
      console.log('Email sent successfully:', res);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => {
        closeModal();
      }, 2000);
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      setIsSubmitting(false);
      setSubmitError(true);
    });
  };

  const handleRetry = () => {
    setSubmitError(false);
  };

  return {
    isModalOpen,
    isSubmitting,
    submitSuccess,
    submitError,
    formData,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
    handleButtonSubmit,
    handleRetry
  };
}
