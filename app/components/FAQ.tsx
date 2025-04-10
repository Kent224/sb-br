'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: '大手コンサルや制作会社とどう違う？',
    answer: 'Slow Baseは農業や地域企業の事情を理解し、月額30万円で親身に伴走します。大手のように高額ではなく、中長期のブランディングを一緒に作り上げるスタンスです。',
  },
  {
    question: '本当に売れるようになりますか？',
    answer: '短期で売上結果を出すために、LP・広告運用を動かしながらPDCAを回し、同時にブランドの土台を固めます。継続的な努力で成果を積み上げていくイメージです。',
  },
  {
    question: 'すでに商品があるが、ECでは全く売れません…',
    answer: '既存商品でも大丈夫です。プランBで"再ブランディング"に着手し、PR戦略やECサイト改修をご提案します。',
  },
  {
    question: '実績や事例はありますか？',
    answer: 'もちだ農園様（青パパイヤドリンク）など、農業副業で始めた商品を短期で売り上げUPさせた実績があります。詳しくはお問い合わせください。',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="faq" className="py-24 sm:py-32 bg-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-4xl divide-y divide-gray-900/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600 text-center">FAQ</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            よくある質問
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform text-primary-600 transition-transform duration-200'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </motion.div>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 