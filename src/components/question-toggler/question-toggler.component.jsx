import { useState } from "react";
import './question-toggler.styles.scss'


function QuestionToggler({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleQuestion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={toggleQuestion}>
          <h2>{question}</h2>
          <div className={`arrow ${isOpen ? 'open' : ''}`}></div>
        </div>
        {isOpen && <div className="accordion-content">{answer}</div>}
      </div>
    );
  }
  
  export default QuestionToggler;