import React from 'react';

const faqs = [
  {
    question: 'What is CineVerse?',
    answer:
      'CineVerse is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    question: 'How much does CineVerse cost?',
    answer:
      'Watch CineVerse on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'Watch anywhere, anytime. Sign in with your CineVerse account to watch instantly on the web at cineverse.com from your personal computer or on any internet-connected device that offers the CineVerse app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'CineVerse is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
];

const FAQSection = ({ data = faqs }) => {
  return (
    <section className="py-8 md:py-12">
      <div className="px-2 md:px-4">
        <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {data.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#181818] p-4 rounded-lg cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium text-white/90 group-hover:text-[#E50914] transition-colors">
                {faq.question}
                <span className="">
                  expand_more
                </span>
              </summary>
              <p className="text-white/70 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
