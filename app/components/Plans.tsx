'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'プランA',
    title: 'ゼロからブランド設計コース',
    description: 'まだ具体的な商品・プロダクトが無い状態。「健康食品を作りたい」「農産物をブランド化したい」など"構想"はあるが、形にできていない方向け。',
    features: [
      'ブランドコンセプト定義',
      'プロダクト企画',
      'EC・販売チャネル準備',
      'PR計画と実行',
      '初年度売上500万円を目指す',
    ],
  },
  {
    name: 'プランB',
    title: '既存プロダクト拡販コース',
    description: 'すでに健康食品などの商品はあるが、売上が伸び悩む企業。「ECは作ったけど全然売れない」「商品が埋もれて認知されていない」方向け。',
    features: [
      'ブランド再構築・差別化戦略',
      'ECサイト・LP改善',
      'PR施策 & ファンコミュニティ構築',
      '効果測定 & PDCA',
      '3～6ヵ月で売上2～3倍を目指す',
    ],
  },
]

export default function Plans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="plans" className="py-24 sm:py-32 bg-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Plans</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            プラン詳細
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            経営者の状況や既存の商品有無に応じて、2つのプランをご用意しました。
            大きな投資を避けながら、月額30万円（年間360万円）で段階的にブランドを構築します。
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-primary-600">{plan.name}</h3>
                  <p className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                    月額30万円〜
                  </p>
                </div>
                <p className="mt-4 font-display text-xl font-semibold leading-7 text-gray-900">{plan.title}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                className="mt-8 block rounded-full bg-primary-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 transition-colors"
              >
                無料相談を予約
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 