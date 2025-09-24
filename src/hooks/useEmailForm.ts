import { useState } from "react";
import emailjs from "@emailjs/browser";

interface BrochureFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  number?: string;
  project: string;
  budget?: string;
  offer?: string;
}

interface UseEmailFormReturn {
  sendEmail: (data: BrochureFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
  resetStatus: () => void;
}

export const useEmailForm = (
  serviceId: string,
  templateId: string,
  publicKey: string
): UseEmailFormReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (data: BrochureFormData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        first_name: data.firstName,
        last_name: data.lastName,
        from_email: data.email,
        company: data.company || '',
        phone: data.number || '',
        project: data.project,
        budget: data.budget || '',
        offer: data.offer || '',
        message: `Demande de brochure pour le projet: ${data.project}${data.budget ? `, Budget: ${data.budget}` : ''}${data.offer ? `, Offre: ${data.offer}` : ''}${data.company ? `, Société: ${data.company}` : ''}`,
        submission_date: new Date().toISOString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l'envoi"
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetStatus = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    sendEmail,
    isLoading,
    error,
    isSuccess,
    resetStatus,
  };
};
