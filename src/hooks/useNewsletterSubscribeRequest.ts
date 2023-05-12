import { useState } from "react";

export function useNewsletterSubscribeRequest<T>() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubscribe = async (data: T) => {
    setPending(true);

    try {
      const url = `${process.env.baseUrl}/.netlify/functions/newsletter`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(
          "You are already subscribed, no need to subscribe again"
        );
      }

      setSuccess(true);
    } catch (error) {
      setError(error as Error);
    } finally {
      setPending(false);
    }
  };

  return {
    pending,
    success,
    error,
    onSubscribe,
  };
}
