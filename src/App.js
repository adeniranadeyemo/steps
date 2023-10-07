import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  let [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: 'Niran' });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }

    // Bad Practice
    // test.name = 'Fred';
    setTest({ name: 'Joshua' });
  }

  function handleToOne() {
    if (step) {
      setStep((s) => (s = 1));
    }
  }

  function handleToTwo() {
    if (step) {
      setStep((s) => (s = 2));
    }
    setTest({ name: 'Joshua' });
  }

  function handleToThree() {
    if (step) {
      setStep((s) => (s = 3));
    }

    // Bad Practice
    // test.name = 'Fred';
    setTest({ name: 'Joshua' });
  }

  return (
    <div>
      <button
        className='close'
        onClick={() => {
          setIsOpen((isO) => !isO);
          setTest({ name: 'Niran' });
        }}
      >
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''} onClick={handleToOne}>
              1
            </div>
            <div className={step >= 2 ? 'active' : ''} onClick={handleToTwo}>
              2
            </div>
            <div className={step >= 3 ? 'active' : ''} onClick={handleToThree}>
              3
            </div>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}, {test.name}
          </p>

          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
