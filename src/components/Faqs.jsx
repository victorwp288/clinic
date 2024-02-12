import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does the beauty clinic offer skincare treatments?',
      answer:
        'Yes, we offer a variety of skincare treatments. Please check our services page for more details.',
    },
    {
      question: 'Can I pay for my treatments via purchase order?',
      answer: 'Absolutely, we are happy to accept your payments in all forms.',
    },
    {
      question: 'How do I apply for a job at the beauty clinic?',
      answer:
        'Please visit our careers page to see current job openings and apply.',
    },
  ],
  [
    {
      question:
        'What was that testimonial about the excellent service all about?',
      answer:
        'Our clients often share their positive experiences with us. We strive to provide the best service possible.',
    },
    {
      question:
        'The beauty clinic sounds amazing but why do I still feel compelled to book an appointment?',
      answer:
        'This is the power of excellent visual design and detailed service descriptions. You just can’t resist it, no matter how busy you are.',
    },
    {
      question:
        'I found other clinics with a similar name, are you sure you can use this name?',
      answer:
        'We have legally registered our name and have all the necessary permissions to use it.',
    },
  ],
  [
    {
      question: 'How do you schedule appointments?',
      answer:
        'You can schedule an appointment through our website or by calling us directly.',
    },
    {
      question: 'Can we expect more services in the future?',
      answer:
        'We are always looking to expand our services based on customer needs and feedback.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
