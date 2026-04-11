// Neo-WAHHa — HTML Course Data (Auto-extracted)
const HTML_COURSE = {
  id: "html",
  title: "تعلّم HTML — مغامرة بناء المواقع",
  icon: "🏗️",
  description: "تعلم أساسيات HTML لبناء صفحات الإنترنت من الصفر",
  color: "#f97316",
  lessons: [
    {
      id: "html-1",
      index: 0,
      title: "مرحباً بك يا مبرمج الغد!",
      type: "intro",
      content: [{"type":"text","text":"\n# مرحباً بك يا مبرمج الغد! 🌐\nهل تعرف كيف تُصنع صفحات الإنترنت؟ اليوم ستتعلم السر!\n"},{"type":"text","text":"\n## ما هو HTML؟\nHTML هي لغة خاصة تفهمها المتصفحات مثل Chrome و Safari.\nتخيّل أن المتصفح طباخ جائع — وHTML هي الوصفة التي تخبره بالضبط ماذا يعمل وكيف يعرض الصفحة!\nبدون HTML لن يظهر شيء على الشاشة.\n"},{"type":"process","steps":["\n## هيكل الصفحة\nنتعلم كيف تُبنى أي صفحة إنترنت من الصفر\n","\n## النصوص والصور\nنضيف عناوين وفقرات وصور رائعة\n","\n## الروابط والقوائم\nنصنع روابط وقوائم تنظّم معلوماتنا\n","\n## التصميم بـ CSS\nنلوّن ونجمّل موقعنا بألوان مبهجة!\n"]}],
      questions: [],
      codeExamples: [],
      activities: []
    },
    {
      id: "html-2",
      index: 1,
      title: "كيف يعمل الإنترنت؟",
      type: "challenge",
      content: [{"type":"text","text":"\n# كيف يعمل الإنترنت؟ 🔍\n"},{"type":"timeline","events":[{"date":"خطوة 1","content":"\n## تكتب اسم الموقع\nمثلاً: www.google.com — في شريط عنوان المتصفح\n"},{"date":"خطوة 2","content":"\n## المتصفح يسأل\nيرسل طلباً إلى الخادم (Server) — وهو جهاز قوي في مكان ما في العالم\n"},{"date":"خطوة 3","content":"\n## الخادم يرسل الملف\nيرسل ملف HTML الذي يحتوي على كل محتوى الصفحة\n"},{"date":"خطوة 4","content":"\n## المتصفح يعرض الصفحة\nيقرأ كود HTML ويحوّله إلى الصفحة الجميلة التي تراها على شاشتك!\n"}]},{"type":"tabs","tabs":[{"label":"HTML","content":"\n## HTML — هيكل المنزل 🏠\nمثل هيكل المنزل — الجدران والأسقف والأبواب.\nبدون HTML لا يوجد شيء على الإطلاق. هو الأساس الذي يُبنى عليه كل شيء.\n"},{"label":"CSS","content":"\n## CSS — الديكور والألوان 🎨\nمثل طلاء الجدران والستائر والديكور — يجعل المنزل جميلاً.\nCSS يضيف الألوان والخطوط والتصاميم على هيكل HTML.\n"},{"label":"JavaScript","content":"\n## JavaScript — الحركة والتفاعل ⚡\nمثل الكهرباء والأجهزة في المنزل — يجعله يتفاعل ويتحرك.\nJavaScript يجعل الصفحة تتفاعل عند الضغط على الأزرار والقوائم.\nسنتعلمه في دورة قادمة!\n"}]}],
      questions: [{"question":"ما هو الملف الذي يرسله الخادم للمتصفح ليعرض الصفحة؟","options":[{"text":"ملف Word (.docx)","correct":false,"feedback":"ملف Word مخصص للكتابة فقط ولا يفهمه المتصفح."},{"text":"ملف HTML","correct":true,"feedback":"ممتاز! المتصفح يفهم HTML ويحوّله إلى صفحة جميلة."},{"text":"ملف صورة (.jpg)","correct":false,"feedback":"الصورة جزء من الصفحة فقط، وليست الصفحة كلها."},{"text":"ملف PDF","correct":false,"feedback":"PDF يُعرض داخل المتصفح لكنه ليس صفحة إنترنت حقيقية."}]}],
      codeExamples: [],
      activities: []
    },
    {
      id: "html-3",
      index: 2,
      title: "هيكل HTML — أول صفحة!",
      type: "lesson",
      content: [{"type":"text","text":"\n# 🏗️ نبني أول صفحة HTML!\nكل صفحة إنترنت في العالم تبدأ بنفس الهيكل — دعنا نتعلمه معاً.\n"},{"type":"text","text":"\n## الوسوم (Tags) — قطع الليغو\nHTML تعمل بـوسوم (Tags).\nكل وسم له شكل مميز:\n- وسم الفتح: <html>\n- وسم الإغلاق: </html>\nكل شيء بينهما هو محتوى الوسم.\nفكّر فيها مثل أقواس — تفتح ثم تُغلق!\n"},{"type":"process","steps":["\n## <html> — الغلاف الكبير\nيحتوي على كل الصفحة. كل شيء آخر يجلس بداخله. مثل الصندوق الخارجي.\n","\n## <head> — الدماغ السري\nيحتوي على معلومات الصفحة مثل العنوان الذي يظهر في التبويب. الزوار لا يرونه مباشرة.\n","\n## <body> — الجسم المرئي\nكل ما تراه على الصفحة — النصوص والصور والروابط — يجلس هنا. هذا ما يرى الزوار!\n"]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nانسخ الكود أعلاه في أي محرر نصوص (Notepad) واحفظه بامتداد .html ثم افتحه بالمتصفح — ستظهر صفحتك الأولى!\n"}],
      questions: [],
      codeExamples: ["<!DOCTYPE html>\n<html>\n  <head>\n    <title>موقعي الأول</title>\n  </head>\n  <body>\n    <h1>مرحباً بالعالم!</h1>\n    <p>هذه أول صفحة أبنيها بنفسي!</p>\n  </body>\n</html>"],
      activities: []
    },
    {
      id: "html-4",
      index: 3,
      title: "تحدي: رتّب الوسوم!",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🎯 تحدي: رتّب الوسوم!\nهل تذكر ما تعلمته؟ حان وقت الاختبار الممتع!\n"}],
      questions: [{"question":"أين يجب أن يكون وسم <title> الذي يظهر في تبويب المتصفح؟","options":[{"text":"داخل <body>","correct":false,"feedback":"لا — الـ body للمحتوى المرئي فقط."},{"text":"داخل <head>","correct":true,"feedback":"ممتاز! العنوان يذهب في head لأنه معلومة عن الصفحة وليس محتوى مرئياً."},{"text":"خارج <html>","correct":false,"feedback":"كل شيء في HTML يجب أن يكون داخل وسم html."},{"text":"في أي مكان","correct":false,"feedback":"الترتيب مهم جداً في HTML! لكل وسم مكانه الصحيح."}]},{"question":"أي وسم هو الغلاف الرئيسي الذي يحتوي على كل صفحة HTML؟","options":[{"text":"<body>","correct":false,"feedback":"الـ body مهم لكنه يجلس داخل وسم آخر أكبر منه."},{"text":"<head>","correct":false,"feedback":"الـ head جزء من الصفحة لكنه ليس الغلاف الكامل."},{"text":"<html>","correct":true,"feedback":"صحيح! وسم html هو الصندوق الكبير الذي يحتوي على كل شيء."},{"text":"<title>","correct":false,"feedback":"الـ title عنوان صغير يجلس داخل head."}]}],
      codeExamples: [],
      activities: [{"type":"sorting","categories":[{"title":"داخل <head>","items":["<title>","<meta>"]},{"title":"داخل <body>","items":["<h1>","<p>","<img>"]}]}]
    },
    {
      id: "html-5",
      index: 4,
      title: "العناوين والفقرات",
      type: "challenge",
      content: [{"type":"text","text":"\n# ✏️ نكتب! العناوين والفقرات\nفي كل مقالة وموقع تزوره، هناك عناوين وفقرات. دعنا نتعلم كيف نصنعها!\n"},{"type":"tabs","tabs":[{"label":"h1 — العنوان الملك","content":"\n## <h1> — العنوان الأكبر 👑\nأكبر وأهم عنوان في الصفحة. استخدمه مرة واحدة فقط في كل صفحة.\nسيظهر بحجم ضخم وجريء.\n"},{"label":"h2 إلى h4","content":"\n## العناوين الفرعية 📌\nتستخدم لتقسيم المحتوى إلى أقسام:\nكلما زاد الرقم، صغر الحجم.\n"},{"label":"p — الفقرة","content":"\n## <p> — الفقرة العادية 📝\nكل النصوص العادية تذهب داخل وسم p:\nكل <p> يبدأ في سطر جديد تلقائياً.\n"},{"label":"تنسيق النص","content":"\n## وسوم التنسيق ✨\nداخل الفقرات يمكنك تنسيق النص:\nجربهم جميعاً!\n"}]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nاكتب صفحتك الأولى:\n1. ضع h1 باسمك\n2. أضف h2 بعنوان \"أصدقائي\"\n3. اكتب فقرة p تعرّف فيها بصديقك\n4. جرّب strong لتجعل اسمه غامقاً\nانسخ الكود، عدّله، وشاهد النتيجة!\n"}],
      questions: [{"question":"تريد كتابة العنوان الرئيسي الوحيد لصفحتك. أي وسم تستخدم؟","options":[{"text":"<h6>","correct":false,"feedback":"h6 هو أصغر عنوان! العنوان الرئيسي يجب أن يكون الأكبر."},{"text":"<p>","correct":false,"feedback":"الـ p للفقرات النصية العادية وليس للعناوين."},{"text":"<h1>","correct":true,"feedback":"ممتاز! h1 هو أكبر وأهم عنوان في الصفحة."},{"text":"<h3>","correct":false,"feedback":"h3 عنوان فرعي مناسب للأقسام وليس للعنوان الرئيسي."}]}],
      codeExamples: ["<body>\n  <h1>موقع أحمد</h1>\n  \n  <h2>عن نفسي</h2>\n  <p>اسمي <strong>أحمد</strong> وعمري 11 سنة.</p>\n  <p>أحب <em>البرمجة</em> والكرة والرسم.</p>\n  \n  <h2>هواياتي</h2>\n  <h3>الرياضة</h3>\n  <p>ألعب كرة القدم كل أسبوع!</p>\n</body>"],
      activities: []
    },
    {
      id: "html-6",
      index: 5,
      title: "الروابط — أبواب الإنترنت",
      type: "lesson",
      content: [{"type":"text","text":"\n# 🔗 الروابط — أبواب الإنترنت\nبدون الروابط لن يكون هناك \"إنترنت\" — فكل الصفحات متصلة ببعضها بالروابط!\n"},{"type":"text","text":"\n## وسم الرابط <a>\nوسم <a> يعني Anchor (مرساة) — وهو ما تضغط عليه للانتقال لصفحة أخرى.\nأهم خاصية هي href — وهي تعني الوجهة التي سيذهب إليها الزائر عند الضغط.\nhref = Hypertext Reference = عنوان الوجهة\n"},{"type":"tabs","tabs":[{"label":"رابط خارجي","content":"\n## الرابط الخارجي 🌍\nينقلك إلى موقع آخر على الإنترنت:\nمهم: ابدأ بـ https:// دائماً للمواقع الخارجية!\n"},{"label":"رابط داخلي","content":"\n## الرابط الداخلي 🏠\nينقلك لصفحة أخرى في نفس موقعك:\nلا تحتاج https:// هنا — فقط اسم الملف!\n"},{"label":"فتح في تبويب جديد","content":"\n## فتح في تبويب جديد 🪟\nأضف target=\"_blank\" لفتح الرابط في تبويب جديد:\nمفيد جداً لروابط المصادر والمراجع!\n"}]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nاكتب صفحة بها 3 روابط لمواقعك المفضلة. جرّب إضافة target=\"_blank\" لأحدها وشاهد الفرق!\n"}],
      questions: [],
      codeExamples: ["<body>\n  <h1>موقعي المفضل</h1>\n  \n  <p>هذه بعض المواقع التي أحبها:</p>\n  \n  <a href=\"https://www.youtube.com\" target=\"_blank\">يوتيوب</a>\n  <br>\n  <a href=\"https://www.google.com\">جوجل</a>\n  <br>\n  <a href=\"about.html\">عن موقعي</a>\n</body>"],
      activities: []
    },
    {
      id: "html-7",
      index: 6,
      title: "الصور — اجعل موقعك جميلاً",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🖼️ الصور — اجعل موقعك جميلاً!\nالمواقع بدون صور مملة جداً. الآن سنتعلم كيف نضيف الصور بالطريقة الصحيحة.\n"},{"type":"process","steps":["\n## وسم <img> — بلا إغلاق!\nوسم الصورة لا يحتاج وسم إغلاق — هو من الوسوم الذاتية الإغلاق.\n","\n## خاصية src — مصدر الصورة\nsrc تعني Source — وهي عنوان الصورة (مثل رابط الصورة على الإنترنت أو اسم الملف).\n","\n## خاصية alt — النص البديل\nalt مهمة جداً! تصف الصورة للمكفوفين وتظهر إذا لم تُحمَّل الصورة.\n","\n## خصائص الحجم width و height\nتتحكم في حجم الصورة بالبكسل:\nأو استخدم CSS للتحكم الأفضل!\n"]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nأضف صورة من الإنترنت لصفحتك باستخدام هذا العنوان: https://picsum.photos/300/200\nثم حاول تغيير الأرقام وشاهد ماذا يحدث!\n"}],
      questions: [{"question":"ما الخاصية التي تحدد مصدر (رابط أو اسم) الصورة في وسم img؟","options":[{"text":"alt","correct":false,"feedback":"الـ alt للنص البديل الذي يصف الصورة."},{"text":"href","correct":false,"feedback":"الـ href للروابط وسم a وليس للصور."},{"text":"src","correct":true,"feedback":"ممتاز! src تعني Source وهي مصدر الصورة."},{"text":"width","correct":false,"feedback":"الـ width يتحكم في عرض الصورة فقط."}]}],
      codeExamples: ["<body>\n  <h1>معرض صوري</h1>\n  \n  <!-- صورة من الإنترنت -->\n  <img \n    src=\"https://picsum.photos/400/300\" \n    alt=\"صورة جميلة من الإنترنت\"\n    width=\"400\"\n    height=\"300\"\n  >\n  \n  <p>هذه صورتي المفضلة!</p>\n  \n  <!-- صورة محلية -->\n  <img src=\"كلبي.jpg\" alt=\"صورة كلبي الصغير\">\n</body>"],
      activities: []
    },
    {
      id: "html-8",
      index: 7,
      title: "تحدي: الروابط والصور",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🎮 تحدي: أكمل الكود!\nهل تتذكر ما تعلمته؟ جهّز نفسك!\n"}],
      questions: [{"question":"أي كود صحيح لإنشاء رابط لموقع جوجل يفتح في تبويب جديد؟","options":[{"text":"<a src=\"https://google.com\" new>جوجل</a>","correct":false,"feedback":"الرابط يستخدم href وليس src، وfتح التبويب يحتاج target=\"blank\"."},{"text":"<a href=\"https://google.com\" target=\"_blank\">جوجل</a>","correct":true,"feedback":"ممتاز! href للرابط وtarget=blank لفتحه في تبويب جديد."},{"text":"<link href=\"https://google.com\">جوجل</link>","correct":false,"feedback":"وسم link له استخدام مختلف في HTML."},{"text":"<a href=\"google.com\">جوجل</a>","correct":false,"feedback":"تحتاج https:// في بداية روابط المواقع الخارجية."}]},{"question":"ما المشكلة في هذا الكود؟ <img href=\"صورة.jpg\" alt=\"صورة جميلة\">","options":[{"text":"لا يوجد وسم إغلاق","correct":false,"feedback":"وسم img لا يحتاج وسم إغلاق — هو وسم ذاتي الإغلاق!"},{"text":"الخاصية يجب أن تكون src وليس href","correct":true,"feedback":"صحيح! الصور تستخدم src لتحديد المصدر. href خاص بالروابط."},{"text":"alt غير مطلوبة","correct":false,"feedback":"بالعكس! alt مهمة جداً ويجب دائماً تضمينها."},{"text":"لا مشكلة في الكود","correct":false,"feedback":"توجد مشكلة — ابحث في الخصائص بعناية!"}]}],
      codeExamples: [],
      activities: [{"type":"matching","title":"طابق الخاصية بوظيفتها","items":[{"choice":"href","match":"عنوان الوجهة في الرابط"},{"choice":"src","match":"مصدر الصورة"},{"choice":"alt","match":"النص البديل للصورة"},{"choice":"target=\"blank\"","match":"فتح الرابط في تبويب جديد"},{"choice":"width","match":"عرض الصورة بالبكسل"}]}]
    },
    {
      id: "html-9",
      index: 8,
      title: "القوائم — نظّم أفكارك",
      type: "lesson",
      content: [{"type":"text","text":"\n# 📋 القوائم — نظّم أفكارك\nكل موقع به قوائم — قائمة التنقل، قائمة المنتجات، قائمة الخطوات... دعنا نتقن صنعها!\n"},{"type":"tabs","tabs":[{"label":"ul — قائمة بنقاط","content":"\n## <ul> — Unordered List قائمة غير مرتبة 🔵\nتستخدم عندما ترتيب العناصر لا يهم:\nستظهر بنقاط (•) تلقائياً.\n"},{"label":"ol — قائمة مرقمة","content":"\n## <ol> — Ordered List قائمة مرتبة 🔢\nتستخدم عندما الترتيب مهم جداً مثل الخطوات:\nستظهر بأرقام (1، 2، 3) تلقائياً.\n"},{"label":"قوائم متداخلة","content":"\n## القوائم المتداخلة Nested Lists 🪆\nيمكنك وضع قائمة داخل قائمة:\n"}]},{"type":"text","text":"\n## متى تستخدم كل نوع؟\nul (نقاط) عندما:\n- قائمة مكونات الوصفة\n- قائمة الهوايات\n- قائمة الأصدقاء\nol (أرقام) عندما:\n- خطوات عمل شيء ما\n- ترتيب الأفضل لأسوأ\n- تعليمات يجب اتباعها بالترتيب\n"},{"type":"text","text":"\n## جرّب بنفسك! 💻\nاصنع صفحة تحتوي على:\n1. قائمة ul بأشياءك المفضلة (3 أشياء على الأقل)\n2. قائمة ol لخطوات صنع شيء تحبه (مثل كيك أو عصير)\n3. حاول وضع قائمة داخل قائمة!\n"}],
      questions: [],
      codeExamples: ["<body>\n  <h1>قائمة تسوقي</h1>\n  \n  <h2>ما أريد شراءه:</h2>\n  <ul>\n    <li>قلم رصاص</li>\n    <li>دفتر</li>\n    <li>مسطرة</li>\n  </ul>\n  \n  <h2>خطوات الوصول للمدرسة:</h2>\n  <ol>\n    <li>أستيقظ الساعة 7</li>\n    <li>أرتدي ملابسي</li>\n    <li>آكل الفطور</li>\n    <li>أركب الباص</li>\n  </ol>\n</body>"],
      activities: []
    },
    {
      id: "html-10",
      index: 9,
      title: "الجداول — البيانات بشكل منظم",
      type: "lesson",
      content: [{"type":"text","text":"\n# 📊 الجداول — البيانات بشكل منظم\nالجداول تساعدنا على عرض البيانات بطريقة واضحة ومنظمة — مثل جدول مواعيدك المدرسي!\n"},{"type":"process","steps":["\n## <table> — الجدول الكبير\nيحتوي على كل محتوى الجدول:\n","\n## <tr> — صف الجدول\ntr = Table Row — كل صف في جدولك:\n","\n## <th> — خلية العنوان\nth = Table Header — للعناوين (تظهر غامقة تلقائياً):\n","\n## <td> — خلية البيانات\ntd = Table Data — للبيانات العادية:\n"]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nاصنع جدول مواعيدك المدرسي الخاص:\n1. ضع أيام الأسبوع في العمود الأول\n2. ضع المواد الدراسية في الصف الأول\n3. املأ بقية الخلايا بالمعلومات\n4. لاحظ كيف تنظّم البيانات!\n"}],
      questions: [],
      codeExamples: ["<table>\n  <!-- صف العناوين -->\n  <tr>\n    <th>اليوم</th>\n    <th>الرياضيات</th>\n    <th>العربي</th>\n    <th>العلوم</th>\n  </tr>\n  \n  <!-- صفوف البيانات -->\n  <tr>\n    <td>الأحد</td>\n    <td>الحصة 1</td>\n    <td>الحصة 2</td>\n    <td>الحصة 3</td>\n  </tr>\n  \n  <tr>\n    <td>الاثنين</td>\n    <td>الحصة 2</td>\n    <td>الحصة 1</td>\n    <td>الحصة 4</td>\n  </tr>\n</table>"],
      activities: []
    },
    {
      id: "html-11",
      index: 10,
      title: "تحدي: القوائم والجداول",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🎯 تحدي: القوائم والجداول\nأظهر ما تعلمته!\n"}],
      questions: [{"question":"تريد عمل قائمة خطوات طبخ وصفة. أي نوع قائمة تختار؟","options":[{"text":"<ul> — قائمة بنقاط","correct":false,"feedback":"الـ ul للعناصر التي لا يهم ترتيبها. خطوات الطبخ يجب اتباعها بالترتيب!"},{"text":"<ol> — قائمة مرقمة","correct":true,"feedback":"ممتاز! ol للخطوات المرتبة لأن الترتيب مهم جداً في الوصفات."},{"text":"<table> — جدول","correct":false,"feedback":"الجدول للبيانات المنظمة في صفوف وأعمدة، وليس للخطوات المتسلسلة."},{"text":"أي منهما يصلح","correct":false,"feedback":"الترتيب مهم للخطوات — ol هو الأنسب هنا."}]},{"question":"ما الوسم الصحيح لخلية العنوان في جدول HTML؟","options":[{"text":"<td>","correct":false,"feedback":"td للبيانات العادية. العناوين لها وسم خاص يجعلها غامقة تلقائياً."},{"text":"<tr>","correct":false,"feedback":"tr للصف كله وليس لخلية واحدة."},{"text":"<th>","correct":true,"feedback":"ممتاز! th تعني Table Header وتجعل النص غامقاً تلقائياً."},{"text":"<table>","correct":false,"feedback":"table هو الغلاف الكبير للجدول كله."}]}],
      codeExamples: [],
      activities: [{"type":"sorting","categories":[{"title":"وسوم القائمة","items":["<ul>","<ol>","<li>"]},{"title":"وسوم الجدول","items":["<table>","<tr>","<th>","<td>"]}]},{"type":"matching","title":"طابق الوسم بوظيفته","items":[{"choice":"<ul>","match":"قائمة بنقاط (غير مرتبة)"},{"choice":"<ol>","match":"قائمة مرقمة (مرتبة)"},{"choice":"<li>","match":"عنصر داخل القائمة"},{"choice":"<tr>","match":"صف في الجدول"},{"choice":"<td>","match":"خلية بيانات عادية"}]}]
    },
    {
      id: "html-12",
      index: 11,
      title: "النماذج — تحدّث مع زوار موقعك",
      type: "lesson",
      content: [{"type":"text","text":"\n# 📝 النماذج — تحدّث مع زوار موقعك!\nكل مرة تسجلت في موقع أو أرسلت رسالة — استخدمت نموذج HTML. الآن ستتعلم كيف تصنع واحداً!\n"},{"type":"process","steps":["\n## <form> — الإطار الكبير\nيحتوي على كل عناصر النموذج:\n","\n## <label> — التسمية\nيخبر المستخدم ما يجب كتابته:\n","\n## <input> — حقل الإدخال\nأنواع كثيرة: text, email, password, number...\n","\n## <button> — الزر\nللإرسال أو أي إجراء:\n"]},{"type":"tabs","tabs":[{"label":"النص والبريد","content":"\n## حقول النص والبريد 📧\n"},{"label":"الاختيارات","content":"\n## أزرار الاختيار ✅\n"},{"label":"القائمة المنسدلة","content":"\n## القائمة المنسدلة (Select) 📋\n"}]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nانسخ النموذج وعدّله:\n- أضف حقلاً لرقم الهاتف type=\"tel\"\n- أضف اختيارات Radio لتحديد الجنس\n- غيّر الخيارات في القائمة المنسدلة\n"}],
      questions: [],
      codeExamples: ["<form>\n  <h2>سجّل في موقعي!</h2>\n  \n  <label>الاسم:</label>\n  <input type=\"text\" placeholder=\"اكتب اسمك هنا\">\n  <br><br>\n  \n  <label>البريد الإلكتروني:</label>\n  <input type=\"email\" placeholder=\"بريدك@مثال.com\">\n  <br><br>\n  \n  <label>كلمة المرور:</label>\n  <input type=\"password\">\n  <br><br>\n  \n  <label>هوايتك المفضلة:</label>\n  <select>\n    <option>البرمجة</option>\n    <option>الرسم</option>\n    <option>الرياضة</option>\n  </select>\n  <br><br>\n  \n  <button type=\"submit\">سجّل الآن!</button>\n</form>"],
      activities: []
    },
    {
      id: "html-13",
      index: 12,
      title: "تطبيق: نموذج تسجيل كامل",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🚀 تطبيق: نموذج تسجيل كامل\nحان وقت البناء! ستصنع نموذج تسجيل لموقع خيالي يسمى \"نادي المبرمجين الصغار\"\n"},{"type":"accordion","items":[{"title":"","content":"أنشئ ملف HTML جديد وأضف هيكل HTML الأساسي مع عنوان للصفحة:\n"},{"title":"","content":"\n"},{"title":"","content":"\n"},{"title":"","content":"\n"},{"title":"","content":"احفظ الملف بامتداد .html وافتحه في المتصفح. ستجد نموذجاً كاملاً!\n"}]}],
      questions: [{"question":"أي نوع input تستخدم عندما تريد السماح للمستخدم بـ اختيار خيار واحد فقط من مجموعة خيارات؟","options":[{"text":"type=\"checkbox\"","correct":false,"feedback":"Checkbox يسمح باختيار أكثر من خيار في نفس الوقت."},{"text":"type=\"text\"","correct":false,"feedback":"text لإدخال نص حر وليس للاختيار بين خيارات."},{"text":"type=\"radio\"","correct":true,"feedback":"ممتاز! radio يسمح باختيار خيار واحد فقط من المجموعة."},{"text":"<select>","correct":false,"feedback":"Select يعمل أيضاً لكن الجواب الأدق هنا هو radio."}]}],
      codeExamples: ["<!DOCTYPE html>\n<html>\n<head>\n  <title>نادي المبرمجين الصغار</title>\n</head>\n<body>\n\n  <h1>انضم لنادي المبرمجين الصغار!</h1>\n  <p>سجّل الآن وابدأ رحلتك في عالم البرمجة.</p>\n  \n  <form>\n    <h2>بيانات التسجيل</h2>\n    \n    <label>الاسم الأول:</label>\n    <input type=\"text\" placeholder=\"اسمك الأول\"><br><br>\n    \n    <label>الاسم الأخير:</label>\n    <input type=\"text\" placeholder=\"اسمك الأخير\"><br><br>\n    \n    <label>البريد الإلكتروني:</label>\n    <input type=\"email\" placeholder=\"بريدك@مثال.com\"><br><br>\n    \n    <label>كلمة المرور:</label>\n    <input type=\"password\"><br><br>\n    \n    <label>مستواك في البرمجة:</label>\n    <select>\n      <option>مبتدئ تماماً</option>\n      <option>تعلمت قليلاً</option>\n      <option>متوسط</option>\n    </select><br><br>\n    \n    <label>هواياتك:</label><br>\n    <input type=\"checkbox\"> رسم\n    <input type=\"checkbox\"> رياضة\n    <input type=\"checkbox\"> قراءة<br><br>\n    \n    <button type=\"submit\">سجّل الآن!</button>\n  </form>\n\n</body>\n</html>"],
      activities: []
    },
    {
      id: "html-14",
      index: 13,
      title: "CSS — ألوان وأشكال!",
      type: "lesson",
      content: [{"type":"text","text":"\n# 🎨 CSS — الوان وأشكال!\nتخيّل بيتاً بدون طلاء أو ديكور — هكذا تبدو صفحتك بدون CSS! اليوم نجعل موقعك يبهر كل من يراه.\n"},{"type":"text","text":"\n## ما هو CSS؟\nCSS = Cascading Style Sheets — صفحات الأنماط المتتالية.\nهو لغة تخبر المتصفح كيف يُجمّل عناصر HTML:\n- الألوان والخطوط\n- الأحجام والمسافات\n- الخلفيات والحدود\nكل خاصية CSS لها اسم وقيمة مفصولان بـ : وتنتهي بـ ;\n"},{"type":"tabs","tabs":[{"label":"Inline CSS","content":"\n## CSS مباشر (Inline) 🖊️\nيُكتب مباشرة داخل الوسم:\nمتى تستخدمه؟ لتنسيق عنصر واحد فقط بسرعة.\n"},{"label":"Internal CSS","content":"\n## CSS داخلي (Internal) 📋\nيُكتب داخل وسم <style> في الـ head:\nمتى تستخدمه؟ لتنسيق صفحة HTML واحدة كاملة.\n"},{"label":"External CSS","content":"\n## CSS خارجي (External) 📁\nملف CSS منفصل تربطه بـ HTML:\nملف style.css:\nملف index.html:\nمتى تستخدمه؟ للمواقع الكبيرة ذات الصفحات المتعددة — الاحترافيون دائماً يستخدمون هذا النوع!\n"}]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nأضف CSS لصفحتك:\n1. غيّر لون الخلفية (background-color)\n2. غيّر لون العنوان (color)\n3. غيّر حجم الخط (font-size)\n4. وسّط النص (text-align: center)\nجرّب ألواناً مثل: red, blue, green, pink, orange, #ff6b6b\n"}],
      questions: [],
      codeExamples: ["<head>\n  <style>\n    /* خلفية الصفحة */\n    body {\n      background-color: lightyellow;\n      font-family: Arial, sans-serif;\n    }\n    \n    /* العنوان الرئيسي */\n    h1 {\n      color: purple;\n      font-size: 40px;\n      text-align: center;\n    }\n    \n    /* الفقرات */\n    p {\n      color: darkblue;\n      font-size: 18px;\n      line-height: 1.6;\n    }\n    \n    /* الروابط */\n    a {\n      color: orange;\n      text-decoration: none;\n    }\n  </style>\n</head>"],
      activities: []
    },
    {
      id: "html-15",
      index: 14,
      title: "CSS Box Model — صندوق التصميم",
      type: "lesson",
      content: [{"type":"text","text":"\n# 📦 صندوق التصميم — Box Model\nكل عنصر HTML هو في الحقيقة صندوق — وفهم هذا الصندوق هو سر التصميم الاحترافي!\n"},{"type":"text","text":"\n## طبقات الصندوق\nكل عنصر HTML له 4 طبقات:\nContent (المحتوى) — النص أو الصورة الفعلية\nPadding (الحشو) — المسافة بين المحتوى والحدود. مثل البطانة داخل الصندوق.\nBorder (الحدود) — الإطار حول العنصر. يمكن تلوينه وتغيير سمكه.\nMargin (الهامش) — المسافة بين هذا العنصر والعناصر المجاورة.\n"},{"type":"tabs","tabs":[{"label":"Padding","content":"\n## Padding — الحشو الداخلي 🛋️\nيضيف مسافة داخل العنصر بين المحتوى والحدود:\n"},{"label":"Border","content":"\n## Border — الحدود 🖼️\nإطار حول العنصر:\n"},{"label":"Margin","content":"\n## Margin — الهامش الخارجي 📐\nيضيف مسافة خارج العنصر بين العناصر المجاورة:\n"}]},{"type":"text","text":"\n## جرّب بنفسك! 💻\nاصنع بطاقة ملونة:\n1. ضع نص داخل <div>\n2. أضف padding لتوسيع المساحة الداخلية\n3. أضف border بلون ما\n4. جرّب border-radius: 15px لزوايا دائرية\n5. غيّر لون الخلفية بـ background-color\n"}],
      questions: [],
      codeExamples: ["<style>\n  .بطاقة {\n    /* المحتوى */\n    width: 300px;\n    \n    /* الحشو — مسافة داخلية */\n    padding: 20px;\n    \n    /* الحدود */\n    border: 3px solid purple;\n    border-radius: 10px; /* زوايا دائرية */\n    \n    /* الهامش — مسافة خارجية */\n    margin: 30px;\n    \n    /* خلفية */\n    background-color: lavender;\n  }\n</style>\n\n<div class=\"بطاقة\">\n  <h2>أهلاً!</h2>\n  <p>أنا بطاقة بصندوق جميل!</p>\n</div>"],
      activities: []
    },
    {
      id: "html-16",
      index: 15,
      title: "تحدي CSS: جمّل الصفحة!",
      type: "challenge",
      content: [{"type":"text","text":"\n# 🎨 تحدي CSS: جمّل هذه الصفحة!\nأظهر مهاراتك في التنسيق!\n"}],
      questions: [{"question":"تريد جعل النص مُوسَّطاً في الصفحة. أي خاصية CSS تستخدم؟","options":[{"text":"margin: center;","correct":false,"feedback":"margin ليس له قيمة center مباشرة لتوسيط النص."},{"text":"align: center;","correct":false,"feedback":"align ليست خاصية CSS صالحة بهذا الشكل."},{"text":"text-align: center;","correct":true,"feedback":"ممتاز! text-align: center; تُوسّط النص أفقياً."},{"text":"font-align: center;","correct":false,"feedback":"font-align ليست خاصية CSS موجودة."}]},{"question":"أين تكتب CSS الداخلي (Internal) لكي يؤثر على كامل صفحة HTML؟","options":[{"text":"داخل <body>","correct":false,"feedback":"الـ body للمحتوى المرئي. CSS الداخلي له مكان آخر."},{"text":"داخل وسم <style> في <head>","correct":true,"feedback":"صحيح! وسم style داخل head هو مكان CSS الداخلي."},{"text":"في ملف منفصل","correct":false,"feedback":"الملف المنفصل هو CSS الخارجي (External) وليس الداخلي."},{"text":"مباشرة داخل الوسم","correct":false,"feedback":"هذا هو CSS المباشر (Inline) وليس الداخلي."}]}],
      codeExamples: [],
      activities: [{"type":"matching","title":"طابق خاصية CSS بتأثيرها","items":[{"choice":"color","match":"لون النص"},{"choice":"background-color","match":"لون خلفية العنصر"},{"choice":"font-size","match":"حجم الخط"},{"choice":"border-radius","match":"تدوير زوايا العنصر"},{"choice":"margin","match":"المسافة الخارجية بين العناصر"},{"choice":"padding","match":"المسافة الداخلية في العنصر"}]},{"type":"sorting","categories":[{"title":"خصائص النص","items":["color","font-size","text-align"]},{"title":"خصائص الصندوق (Box)","items":["margin","padding","border"]},{"title":"خصائص الخلفية","items":["background-color","background-image"]}]}]
    },
    {
      id: "html-17",
      index: 16,
      title: "المشروع النهائي — موقعي الأول!",
      type: "lesson",
      content: [{"type":"text","text":"\n# 🏆 المشروع النهائي — موقعي الأول!\nحان الوقت الذي انتظرته! ستبني موقعك الأول الكامل من الصفر باستخدام كل ما تعلمته.\n"},{"type":"text","text":"\n## متطلبات موقعك\nموقعك يجب أن يحتوي على كل هذه العناصر:\n"},{"type":"list","items":["الهيكل الأساسي — DOCTYPE, html, head, body وعنوان للصفحة في title","عنوان رئيسي h1 باسم موقعك + عنوانان فرعيان h2 على الأقل","صورة واحدة على الأقل مع alt مناسب","رابط واحد لموقعك المفضل يفتح في تبويب جديد","قائمة (ul أو ol) بثلاثة عناصر على الأقل","جدول بصفوف وأعمدة","نموذج بسيط (name + email + زر إرسال)","CSS — لون خلفية، لون نص، حجم خط مختلف عن الافتراضي"],"mode":"Numbered"},{"type":"accordion","items":[{"title":"","content":"لا تحاول كتابة كل شيء دفعة واحدة! ابدأ بـ:\n1. الهيكل الفارغ (html, head, body)\n2. ثم العنوان والفقرات\n3. ثم الصورة والرابط\n4. ثم القائمة\n5. ثم الجدول\n6. ثم النموذج\n7. أخيراً CSS\n"},{"title":"","content":"الموقع سيكون أجمل إذا اخترت موضوعاً تهتم به:\n- موقع عن لعبتك المفضلة\n- موقع عن حيوانك الأليف\n- موقع عن رياضتك المحببة\n- موقع عن فريقك الرياضي\n- موقع عن هوايتك\n"},{"title":"","content":"بعد كل إضافة جديدة:\n1. احفظ الملف (Ctrl+S)\n2. اذهب للمتصفح\n3. اضغط F5 لتحديث الصفحة\n4. تأكد من ظهور ما أضفته بشكل صحيح\n5. إذا كان هناك خطأ، راجع الوسوم والإغلاق\n"},{"title":"","content":"\n"}]}],
      questions: [],
      codeExamples: ["<!DOCTYPE html>\n<html>\n<head>\n  <title>موقع أحمد المبرمج الصغير</title>\n  <style>\n    body { background-color: #e8f4f8; font-family: Arial; }\n    h1   { color: #6a0dad; text-align: center; font-size: 36px; }\n    h2   { color: #1a5276; border-bottom: 2px solid #6a0dad; }\n    img  { border-radius: 10px; margin: 10px; }\n    table, th, td { border: 1px solid #999; border-collapse: collapse; padding: 8px; }\n    th   { background-color: #6a0dad; color: white; }\n    form { background: white; padding: 20px; border-radius: 10px; }\n  </style>\n</head>\n<body>\n\n  <h1>مرحباً في موقع أحمد! 👋</h1>\n  \n  <h2>عن نفسي</h2>\n  <img src=\"https://picsum.photos/200\" alt=\"صورتي\" width=\"200\">\n  <p>اسمي <strong>أحمد</strong>، عمري 11 سنة، وأنا مبرمج صغير!</p>\n  \n  <h2>هواياتي المفضلة</h2>\n  <ul>\n    <li>البرمجة وبناء المواقع</li>\n    <li>كرة القدم</li>\n    <li>قراءة روايات الخيال العلمي</li>\n  </ul>\n  \n  <h2>جدول دراستي</h2>\n  <table>\n    <tr><th>اليوم</th><th>المادة المفضلة</th></tr>\n    <tr><td>الأحد</td><td>الرياضيات</td></tr>\n    <tr><td>الاثنين</td><td>العلوم</td></tr>\n    <tr><td>الثلاثاء</td><td>الحاسب</td></tr>\n  </table>\n  \n  <h2>موقعي المفضل</h2>\n  <a href=\"https://www.youtube.com\" target=\"_blank\">زيارة يوتيوب</a>\n  \n  <h2>تواصل معي</h2>\n  <form>\n    <label>اسمك:</label><input type=\"text\"><br><br>\n    <label>بريدك:</label><input type=\"email\"><br><br>\n    <button type=\"submit\">أرسل رسالة!</button>\n  </form>\n\n</body>\n</html>"],
      activities: []
    },
    {
      id: "html-18",
      index: 17,
      title: "الاختبار النهائي",
      type: "exam",
      content: [{"type":"text","text":"\n# 🎓 الاختبار النهائي\nأثبت أنك مبرمج HTML حقيقي! 8 أسئلة تغطي كل ما تعلمته.\n"}],
      questions: [{"question":"ما اختصار كلمة HTML؟","options":[{"text":"HyperText Markup Language","correct":true,"feedback":"ممتاز! هذا هو الاسم الكامل لـ HTML."},{"text":"HighText Machine Learning","correct":false,"feedback":"هذا ليس صحيحاً. HTML تعني لغة ترميز النص التشعبي."},{"text":"HyperText Making Links","correct":false,"feedback":"قريب من الصواب لكن الكلمات ليست صحيحة."},{"text":"Home Tool Markup Language","correct":false,"feedback":"HTML = HyperText Markup Language."}]},{"question":"ما هو الترتيب الصحيح لهيكل HTML؟","options":[{"text":"<body> ثم <head> ثم <html>","correct":false,"feedback":"الترتيب معكوس تماماً."},{"text":"<html> يحتوي على <head> و <body>","correct":true,"feedback":"ممتاز! html هو الغلاف الكبير الذي يحتوي على head وbody."},{"text":"<head> يحتوي على <html> و <body>","correct":false,"feedback":"لا — head هو جزء داخل html."},{"text":"الترتيب لا يهم في HTML","correct":false,"feedback":"الترتيب مهم جداً في HTML!"}]},{"question":"تريد إضافة صورة من الإنترنت. أي كود صحيح؟","options":[{"text":"<img href=\"https://picsum.photos/200\" alt=\"صورة\">","correct":false,"feedback":"الصور تستخدم src وليس href."},{"text":"<image src=\"https://picsum.photos/200\" alt=\"صورة\">","correct":false,"feedback":"الوسم الصحيح هو img وليس image."},{"text":"<img src=\"https://picsum.photos/200\" alt=\"صورة\">","correct":true,"feedback":"ممتاز! img مع src وalt هو الكود الصحيح."},{"text":"<img>https://picsum.photos/200</img>","correct":false,"feedback":"img وسم ذاتي الإغلاق ويستخدم خاصية src."}]},{"question":"أي خاصية CSS تُغيّر لون الخلفية للعنصر؟","options":[{"text":"color","correct":false,"feedback":"color تُغيّر لون النص وليس الخلفية."},{"text":"background-color","correct":true,"feedback":"ممتاز! background-color تُحدد لون خلفية العنصر."},{"text":"bg-color","correct":false,"feedback":"هذه الخاصية غير موجودة في CSS."},{"text":"fill-color","correct":false,"feedback":"fill-color تُستخدم في SVG وليس في CSS العادي."}]},{"question":"ما الفرق بين Padding وMargin في CSS؟","options":[{"text":"لا فرق بينهما — كلاهما يضيف مسافة","correct":false,"feedback":"يضيفان مسافة لكن في مكانين مختلفين."},{"text":"Padding المسافة الداخلية، Margin المسافة الخارجية","correct":true,"feedback":"ممتاز! Padding داخل العنصر، Margin خارجه بين العناصر."},{"text":"Margin المسافة الداخلية، Padding المسافة الخارجية","correct":false,"feedback":"العكس هو الصحيح! Padding داخلي، Margin خارجي."},{"text":"Padding للنص، Margin للصور","correct":false,"feedback":"كلاهما يعملان على كل العناصر وليسا مخصصَين لنوع محدد."}]}],
      codeExamples: [],
      activities: [{"type":"sorting","categories":[{"title":"وسوم HTML","items":["<h1>","<p>","<a>","<img>"]},{"title":"خصائص CSS","items":["color","font-size","padding","margin"]}]},{"type":"matching","title":"طابق الوسم بوصفه","items":[{"choice":"<ul>","match":"قائمة غير مرتبة بنقاط"},{"choice":"<tr>","match":"صف في جدول HTML"},{"choice":"<form>","match":"إطار النموذج التفاعلي"},{"choice":"<strong>","match":"نص غامق ومهم"},{"choice":"<title>","match":"عنوان يظهر في تبويب المتصفح"}]}]
    },
    {
      id: "html-19",
      index: 18,
      title: "أنت الآن مبرمج HTML!",
      type: "intro",
      content: [{"type":"text","text":"\n# 🌟 تهانينا! أنت الآن مبرمج HTML!\nأتممت الدورة بنجاح وأصبحت تعرف بناء صفحات الإنترنت!\n"},{"type":"text","text":"\n## مراجعة سريعة — اقلب البطاقات!\n"},{"type":"flashcards","cards":[]},{"type":"text","text":"\n## الخطوات التالية في رحلتك البرمجية\n"},{"type":"list","items":["HTML — أتقنته! ابنِ المزيد من الصفحات","CSS المتقدم — تعلّم Flexbox وGrid للتصميم الاحترافي","JavaScript — أضف الحركة والتفاعل لموقعك","مشاريع حقيقية — ابنِ موقعاً كاملاً لتعرضه للعالم!"],"mode":"Staircase"},{"type":"text","text":"\n## رسالة لك يا مبرمج الغد\nكل موقع رائع تراه على الإنترنت بدأ بشخص تعلّم HTML تماماً مثلك.\nاستمر في الممارسة، استمر في البناء، واستمر في التعلم.\nالعالم الرقمي ينتظر إبداعك!\n"}],
      questions: [],
      codeExamples: [],
      activities: []
    },
  ]
};

const CSS_COURSE = {
  id: "css", title: "تعلّم CSS — فن التصميم", icon: "🎨",
  description: "قريباً — تعلم تصميم وتجميل صفحات الويب",
  color: "#3b82f6", locked: true, lessons: []
};

const JS_COURSE = {
  id: "js", title: "تعلّم JavaScript — البرمجة التفاعلية", icon: "⚡",
  description: "قريباً — اجعل مواقعك تتفاعل وتتحرك",
  color: "#eab308", locked: true, lessons: []
};

const ALL_COURSES = [HTML_COURSE, CSS_COURSE, JS_COURSE];
