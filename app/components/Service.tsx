'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    name: 'ブランドコンセプトをゼロから設計',
    description: '事業背景・社長の想い・商品の強みなどをヒアリングし、「何を、誰に、どのように」売るのかを明確化します。大手コンサルでは得づらい親身で丁寧なサポートを重視します。',
  },
  {
    name: 'プロダクト企画やEC構築にも対応',
    description: '新たな健康食品や加工品を「売れる形」に落とし込み、デザインやコピーをご提案。Shopify等を活用したECサイト構築や、SNS広告の運用もフォローします。',
  },
  {
    name: '短期で成果を出しつつ、長期でブランドを育てる',
    description: '初期3～6ヶ月間は、販売チャネル拡大と認知UPを狙う短期施策を実施。同時に、中長期でのブランディングをしっかり固めて"持続する"仕組みを作ります。',
  },
]

export default function Service() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="service" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Service</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            サービスの特徴
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            中小企業の経営者や事業展開の位置付けで農業を始めた方でも、
            無理なくコストを抑えつつ"売れるブランド"を構築できるよう、Slow Baseが伴走します。
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <dt className="font-display text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 