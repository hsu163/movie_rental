import { useState } from 'react';
import './FAQ.css'; 

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Omelas Movie Rental?",
      answer: "Omelas is a premium movie rental service offering the latest releases and classic films at free. Enjoy high-quality streaming on any device with our state-of-the-art platform."
    },
    {
      question: "How much does Omelas cost?",
      answer: "Omelas operates on free model. You can rent movies at no cost by creating user account."
    },
    {
      question: "Where can I watch?",
      answer: "You can stream Omelas movies on any device with our app (iOS, Android, smart TVs) or through our website. Download titles for offline viewing when you're on the go."
    },
    {
      question: "Can I download movies?",
      answer: "Yes! Most titles are available for download on mobile devices through our app. Downloads expire when your rental period ends or after 30 days, whichever comes first."
    }

  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find quick answers to common questions about Omelas movie rentals. Can't find what you're looking for? Contact our support team.</p>
      </div>
      
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '×' : '+'}</span>
            </button>
            <div 
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default FAQ;