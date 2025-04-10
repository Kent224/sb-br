'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CaseStudy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="case-study" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Case Study</h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            導入事例
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="font-display text-2xl font-bold tracking-tight text-gray-900">もちだ農園さま</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              広島県で「青パパイヤドリンク」を販売するもちだ農園（建設業をメインにしており、事業展開として農業を開始）
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">課題</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600">
              <li>ECサイトは作ったがネットでの販売実績なし</li>
            </ul>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">支援内容</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600">
              <li>ブランドストーリー構築：広島・世羅高原の魅力 × 青パパイヤの価値</li>
              <li>LP制作 & 広告運用：自然・健康・美容効果をわかりやすく打ち出す</li>
              <li>顧客フィードバック収集：アンケートフォームで実感コメントを掲載 → 信頼度UP</li>
            </ul>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">結果</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              短期で売上増＋ブランディング強化 → 今後さらなる新商品開発や事業拡大を視野に
            </p>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <img
                  className="mx-auto h-48 w-full rounded-lg object-cover"
                  src="/images/case-study-1.jpg"
                  alt="もちだ農園の青パパイヤドリンク"
                />
                <a
                  href="#contact"
                  className="mt-8 block w-full rounded-full bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
                >
                  無料相談を予約
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  まずはお気軽にご相談ください。
                  <br />
                  あなたの事業に合わせた最適なプランをご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 