import React, { useState } from "react";
import FAQData from "../FAQ/FAQData";
import { FaPlus, FaTimes } from "react-icons/fa"; // Importera plus-ikonen och kryss-ikonen från react-icons
import './FAQ.css'

function FAQ() {
  const [faqs, setFaqs] = useState(FAQData.map((faq) => ({ ...faq, open: false })));

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className='portfolio' id ="faq">
        
        <div className="faq-container">
        <h1 classname ="faq-title">FAQ</h1>
        {faqs.map((faq, index) => (
            <div key={index}>
            <div
                className={"faq " + (faq.open ? "open" : "")}
                onClick={() => toggleFAQ(index)}
            >
                <div className="faq-question">
                {faq.question}
                {/* Villkorlig rendering av ikonen beroende på om frågan är öppen eller inte */}
                {faq.open ? <FaTimes className="faq-plus-icon" /> : <FaPlus className="faq-plus-icon" />}
                </div>
                <div className="faq-answer">{faq.answer}</div>
            </div>
            <hr className="faq-divider" />
            </div>
        ))}
        </div>
    </div>
  );
}

export default FAQ;

