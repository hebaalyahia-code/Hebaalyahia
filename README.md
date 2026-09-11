# موقع هبة اليحيى — hebaalyahia.com

موقع ثابت (HTML + CSS + JS) بنسختين عربية وإنجليزية. التصميم هو **الاتجاه الرابع** المعتمد.

| الصفحة | الملف | الرابط بعد الرفع |
|---|---|---|
| العربية (الرئيسية) | `index.html` | `https://www.hebaalyahia.com/` |
| الإنجليزية | `index-en.html` | `https://www.hebaalyahia.com/index-en.html` |

اسم الصفحة الإنجليزية `index-en.html` هو نفس اسمها في الموقع الحالي، فالروابط القديمة تبقى شغالة.

## هيكل المجلد

```
index.html            النسخة العربية
index-en.html         النسخة الإنجليزية
assets/
  css/ar.css          تنسيق العربية (RTL)
  css/en.css          تنسيق الإنجليزية (LTR)
  js/main.js          كود مشترك: الكشف عند التمرير، عدّاد الأرقام، الهيدر، نموذج التواصل
  img/logo.png        الشعار
  img/partners/       شعارات الشركاء الـ12
  img/favicon-32.png · apple-touch-icon.png · icon-512.png
  video/silk.webm     فيديو الحرير (الأساسي)
  video/silk.mp4      بديل لسفاري
  video/silk-poster.jpg  لقطة ثابتة تظهر قبل تحميل الفيديو
robots.txt · sitemap.xml · .nojekyll
```

## الرفع على GitHub

### من المتصفح (بدون أوامر)
1. افتحي المستودع على github.com، ثم **Add file → Upload files**
2. اسحبي **محتويات** المجلد (مو المجلد نفسه)، يعني `index.html` و`index-en.html` و`assets` وباقي الملفات
3. اكتبي رسالة مثل «تصميم الموقع الجديد» واضغطي **Commit changes**

> ملف `.nojekyll` مخفي على الماك. اضغطي `Cmd + Shift + .` داخل المجلد عشان يظهر ويرتفع مع باقي الملفات.

### من الطرفية
```bash
cd github-site
git init
git add .
git commit -m "تصميم الموقع الجديد — الاتجاه الرابع"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### تفعيل GitHub Pages
**Settings → Pages → Build and deployment**: Source = *Deploy from a branch*، Branch = `main` / `(root)`.

### الدومين hebaalyahia.com
- لو المستودع يخدم الدومين من قبل، **لا تحذفين ملف `CNAME`** الموجود فيه
- لو مستودع جديد: من **Settings → Pages → Custom domain** اكتبي `www.hebaalyahia.com` وفعّلي **Enforce HTTPS**. بعدها أضيفي في لوحة الدومين سجل `CNAME` لـ `www` يشير إلى `USERNAME.github.io`

### الملفات القديمة
صفحات الموقع الحالي `portfolio.html` ومجلد `projects/` ما لها روابط في التصميم الجديد، لأن قسم «أبرز الأعمال» استُبدل بالملف التعريفي. خليها في المستودع إذا تبين روابطها القديمة تبقى شغالة، أو احذفيها.

## ملاحظات قبل الإطلاق

- **نموذج التواصل**: عند الإرسال يفتح برنامج البريد عند الزائر والرسالة جاهزة لـ `heba.signature@gmail.com`، لأن GitHub Pages ما يدعم خوادم. لو تبين الرسائل توصل مباشرة بدون برنامج بريد، اربطيه بخدمة مثل Formspree: تضيفين `action` للنموذج وتشيلين جزء النموذج من `main.js`.
- **البريد**: لتغييره (مثلًا إلى `heba@hebaalyahia.com`) ابحثي عن `heba.signature@gmail.com` في الملفين `index.html` و`index-en.html`.
- **شعار جامعة الملك سعود** (`07-ksu.png`) يحتاج نسخة بخلفية شفافة. استبدليه بنفس الاسم.
- **الخطوط**: Cairo وJost من Google Fonts.
- **الحركة**: الكشف عند التمرير ما يخفي المحتوى إلا إذا تأكد إن المتصفح يدعمه، وفيه كشف احتياطي تلقائي بعد ١٫٦ ثانية. لا تحذفين هالجزء.
