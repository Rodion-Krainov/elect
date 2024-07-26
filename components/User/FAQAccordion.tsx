import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Why do we need sport?',
    answer:
      'Engaging in sport activities helps maintain physical health, improves mental well-being, and fosters social connections.',
  },
  {
    question:
      'Where do we need to go for sport? I have asked all my colleagues but they have no idea also. So all of us are in search for SC.',
    answer:
      'The sports center (SC) is located at the main campus. You can find detailed directions on the university website or contact the administration for assistance.',
  },
  {
    question:
      'Is there any possibility to get sport hours for going to the lectures? It is really far away from my home. Something about five minutes. I am really tired from going there and back every day.',
    answer:
      'Unfortunately, attending lectures does not count towards sport hours. However, you can check if there are any nearby sports activities that you can participate in to earn sport hours.',
  },
  {
    question:
      'Is there any possibility to get sport hours without doing any sport?',
    answer:
      'Sport hours are awarded based on participation in physical activities. It is important to engage in sports for your health and well-being.',
  },
  {
    question:
      'I am a professional Dota player, may I close the sport based on my achievements there?',
    answer:
      'While being a professional Dota player is commendable, sport hours are typically earned through physical activities. You can discuss with the administration if there are any special considerations for your achievements.',
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left py-2 px-4 bg-gray-200 mt-2"
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 border border-t-0">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
