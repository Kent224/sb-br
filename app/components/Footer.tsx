const navigation = {
  main: [
    { name: 'サービス概要', href: '#service' },
    { name: 'プラン詳細', href: '#plans' },
    { name: '導入事例', href: '#case-study' },
    { name: 'よくある質問', href: '#faq' },
    { name: 'お問い合わせ', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary-600 transition-colors">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Slow Base, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 