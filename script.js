// スクロールアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // 一度表示された要素は監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // 下部のマージンを追加して、少し早めにアニメーションを開始
    });

    // アニメーションを適用する要素を選択
    document.querySelectorAll('.section, .feature-card, .plan-card').forEach(element => {
        observer.observe(element);
    });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// フォーム送信処理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // ここでフォームデータの処理を行う
        console.log('送信されたデータ:', data);
        
        // 送信完了メッセージ
        alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
        contactForm.reset();
    });
}

// ヘッダーのスクロール効果
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // 下にスクロール
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // 上にスクロール
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
}); 