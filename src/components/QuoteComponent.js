import React, { useState, useEffect } from 'react';

function QuoteComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'x-api-key': '0smTTb8VETACcVJ8fiBi6g==qvs9eeuaVBA1E6No',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }

  return (
    <div className="quotes">
      <p>{quote}</p>
      <p><b>{author}</b></p>
    </div>
  );
}

export default QuoteComponent;
