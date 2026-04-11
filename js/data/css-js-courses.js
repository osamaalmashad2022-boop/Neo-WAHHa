// Neo-WAHHa — CSS & JavaScript Course Data (Auto-extracted from Mindsmith)

const CSS_COURSE = {
  "id": "css",
  "title": "تعلّم CSS — فن التصميم",
  "icon": "🎨",
  "description": "تعلم تصميم وتجميل صفحات الويب باستخدام CSS",
  "color": "#3b82f6",
  "lessons": [
    {
      "id": "css-1",
      "index": 0,
      "title": "مرحباً بك في عالم CSS! 🎨",
      "type": "intro",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Vibrant colorful abstract digital art with floating CSS and ](https://storage.googleapis.com/mindsmith/uploads%2Fb6819cbc-0fff-4565-8c4b-cba91875f00d%2Fgenerated-image.webp)\n\n# 🎨 CSS للأطفال\n\n## صمّم موقعك الشخصي بنفسك!\n"
        },
        {
          "type": "text",
          "text": "\nفي هذا الدرس ستتعلم كيف تُلوّن وتُزيّن صفحات الويب باستخدام CSS. اتبع الخطوات وفي النهاية سيكون عندك موقعك الشخصي الجاهز!\n"
        }
      ],
      "questions": [],
      "codeExamples": [],
      "activities": []
    },
    {
      "id": "css-2",
      "index": 1,
      "title": "ما هو CSS؟",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n# ما هو CSS؟\n"
        },
        {
          "type": "text",
          "text": "\n## HTML هو الهيكل، CSS هو الجمال!\nتخيّل أن HTML هو عظام صفحة الويب — يُحدد ما هو موجود.\nأما CSS فهو الملابس والألوان — يُحدد كيف تبدو الأشياء!\nبدون CSS، كل المواقع ستبدو بيضاء وعادية جداً. مع CSS، تتحول إلى تحف فنية رائعة! 🎨\n"
        },
        {
          "type": "text",
          "text": "\n![Two side-by-side webpage screenshots: left shows a plain uns](./assets/images/image-10f5b124-acb9-45d7-99fe-c3e6f9e3beb5-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 💡 كيف نكتب CSS؟\nالصيغة الأساسية:\nمثال: h1 { color: red; }\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* هذا أول كود CSS في حياتك! */\n\nh1 {\n  color: blue;\n}\n\np {\n  color: green;\n}\n\nbody {\n  background-color: lightyellow;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-3",
      "index": 2,
      "title": "🌈 الألوان والخلفيات",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Colorful paint splashes in rainbow colors on a dark backgrou](https://storage.googleapis.com/mindsmith/uploads%2F9de87b10-0d7d-4f0f-bc9e-a3376de850ba%2Fgenerated-image.webp)\n\n# 🌈 الألوان والخلفيات\nأوّل خطوة في تصميم موقعك — اختر ألوانك!\n"
        },
        {
          "type": "tabs",
          "tabs": [
            {
              "label": "🖊️ لون النص",
              "content": "\n## خاصية color\nتستخدم لتغيير لون النص في أي عنصر HTML.\nطرق كتابة اللون:\n- باسمه: red, blue, green, purple\n- بكود HEX: #ff5733\n- بـ RGB: rgb(255, 87, 51)\n"
            },
            {
              "label": "🎨 لون الخلفية",
              "content": "\n## خاصية background-color\nتستخدم لتغيير لون خلفية أي عنصر.\nنصيحة: اختر لون نص ولون خلفية متناسقين حتى يكون النص مقروءاً بوضوح!\n"
            },
            {
              "label": "💡 نصائح الألوان",
              "content": "\n## اختر ألوانك بذكاء!\n- نص داكن على خلفية فاتحة ← سهل القراءة\n- نص فاتح على خلفية داكنة ← يبدو احترافياً\n- لا تستخدم أكثر من 3-4 ألوان في الصفحة الواحدة\nأمثلة ألوان HEX جميلة:\n- #3498db ← أزرق جميل\n- #e74c3c ← أحمر جذاب\n- #2ecc71 ← أخضر نضر\n- #9b59b6 ← بنفسجي رائع\n"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nعدّل الألوان في الكود التالي وشاهد النتيجة:\n"
        },
        {
          "type": "text",
          "text": "\n💡 جرّب هذه الألوان: red, blue, green, orange, pink, purple, gold, tomato, skyblue\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* لوّن موقعك! غيّر أي لون وجرّب */\n\nbody {\n  background-color: lightyellow;\n}\n\nh1 {\n  color: purple;\n}\n\np {\n  color: #333333;\n}\n\n.my-name {\n  color: white;\n  background-color: #e74c3c;\n  padding: 5px 10px;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-4",
      "index": 3,
      "title": "✍️ الخطوط والنصوص",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n# ✍️ الخطوط والنصوص\nعنوان موقعك يجب أن يكون مميزاً!\n"
        },
        {
          "type": "process",
          "steps": [
            "\n## font-size — حجم الخط\nيُحدد كبر أو صغر النص، ويُقاس بـ px (بكسل).\n",
            "\n## font-family — نوع الخط\nيُحدد شكل وأسلوب الحروف.\nجرّب: Arial, Verdana, Georgia, Courier New\n",
            "\n## font-weight — ثقل الخط\nيُحدد إذا كان النص عريضاً أو رفيعاً.\n",
            "\n## text-align — محاذاة النص\nيُحدد مكان النص في الصفحة.\n"
          ]
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nنسّق عنوان موقعك:\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* نسّق عنوان موقعك الشخصي! */\n\nh1 {\n  font-size: 48px;\n  font-family: Arial;\n  font-weight: bold;\n  text-align: center;\n  color: #2c3e50;\n}\n\np {\n  font-size: 18px;\n  font-family: Georgia;\n  text-align: right;\n  color: #555;\n}\n\n.subtitle {\n  font-size: 22px;\n  font-weight: 300;\n  text-align: center;\n  color: #7f8c8d;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-5",
      "index": 4,
      "title": "📦 المسافات: margin و padding",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n# 📦 المسافات: margin و padding\nرتّب عناصر موقعك بشكل احترافي!\n"
        },
        {
          "type": "text",
          "text": "\n## الفرق بين margin و padding\nتخيّل صندوق هدية:\n- padding = المساحة بين الهدية وجدران الصندوق (داخلي)\n- margin = المساحة بين الصندوق والأشياء حوله (خارجي)\n"
        },
        {
          "type": "text",
          "text": "\n![Clean CSS box model diagram showing four nested colored rect](./assets/images/image-6c8747ea-f4ea-406f-adb6-264bee231a5a-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 💡 اختصار رائع!\nبدلاً من كتابة 4 أسطر، يمكنك كتابة سطر واحد:\npadding: 10px 20px 10px 20px; ← أعلى / يمين / أسفل / يسار\nأو مختصر: padding: 10px 20px; ← (أعلى وأسفل 10px) + (يمين ويسار 20px)\n"
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nعدّل المسافات:\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* رتّب عناصر موقعك! */\n\n.my-card {\n  padding: 20px;          /* مسافة داخلية من كل الاتجاهات */\n  margin: 30px auto;      /* auto = توسيط أفقي */\n  background-color: #ecf0f1;\n  width: 400px;\n}\n\n.profile-name {\n  padding: 10px 25px;     /* أعلى وأسفل 10px، يمين ويسار 25px */\n  margin-bottom: 15px;    /* مسافة خارجية من الأسفل فقط */\n  background-color: #3498db;\n  color: white;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-6",
      "index": 5,
      "title": "🔲 الحدود والزوايا",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Abstract geometric shapes with colorful glowing borders and ](https://storage.googleapis.com/mindsmith/uploads%2Fdab4b579-a451-4b2d-8131-e0328c077b69%2Fgenerated-image.webp)\n\n# 🔲 الحدود والزوايا\nأضف إطارات مميزة لعناصر موقعك!\n"
        },
        {
          "type": "accordion",
          "items": [
            {
              "title": "📏 border — إضافة حدود للعناصر",
              "content": "تكتب border بثلاثة أجزاء:\nأنواع الحدود:\n- solid ← خط مستمر ——\n- dashed ← خط متقطع - - -\n- dotted ← نقاط . . .\n- double ← خطان متوازيان"
            },
            {
              "title": "⭕ border-radius — زوايا مدوّرة وناعمة",
              "content": "تُحوّل الزوايا الحادة إلى زوايا ناعمة وجميلة!\nكلما زاد الرقم كلما زادت الاستدارة!"
            },
            {
              "title": "✨ الجمع بينهما — بطاقات احترافية!",
              "content": "الجمع بين border و border-radius يُعطيك بطاقات أنيقة:\nهذا هو أسلوب تصميم البطاقة الاحترافية التي تراها في كل المواقع الجميلة!"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nصمّم إطاراً مميزاً:\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* صمّم إطارات رائعة! */\n\n/* صورة البروفايل — دائرية بإطار */\n.profile-picture {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 4px solid purple;\n}\n\n/* بطاقة جميلة */\n.my-card {\n  border: 2px solid #3498db;\n  border-radius: 20px;\n  padding: 25px;\n  background-color: white;\n}\n\n/* زر بشكل حبة دواء */\n.pill-button {\n  border: 2px solid #e74c3c;\n  border-radius: 50px;\n  padding: 10px 30px;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-7",
      "index": 6,
      "title": "🖼️ تنسيق الصور",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n# 🖼️ تنسيق الصور\nاجعل صور موقعك تبدو احترافية!\n"
        },
        {
          "type": "text",
          "text": "\n## الخصائص الأساسية لتنسيق الصور\nwidth و height — لضبط الحجم:\nwidth: 100% — الصورة تملأ عرض الحاوية بالكامل.\nborder-radius: 50% — تجعل الصورة دائرية تماماً!\nobject-fit: cover — تملأ المساحة دون تشويه الصورة.\n"
        },
        {
          "type": "text",
          "text": "\n![Cute smiling cartoon child avatar with colorful circular bor](./assets/images/image-9dec78e0-b31d-4990-98cf-e4bcff156b93-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nنسّق صور موقعك:\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* نسّق صور موقعك! */\n\n/* صورة البروفايل — دائرية */\n.profile-img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;        /* دائرة! */\n  border: 4px solid #9b59b6;\n  object-fit: cover;\n}\n\n/* صورة بانر عريضة */\n.banner-img {\n  width: 100%;               /* تملأ العرض كاملاً */\n  height: 300px;\n  object-fit: cover;\n  border-radius: 15px;\n}\n\n/* صورة صغيرة بإطار */\n.thumbnail {\n  width: 80px;\n  height: 80px;\n  border-radius: 10px;\n  border: 2px solid #e74c3c;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-8",
      "index": 7,
      "title": "🖱️ تأثيرات Hover التفاعلية",
      "type": "lesson",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Glowing neon interactive buttons with light hover glow effec](https://storage.googleapis.com/mindsmith/uploads%2Fa6319de3-e468-480f-bd86-0c4a1b71c5d5%2Fgenerated-image.webp)\n\n# 🖱️ تأثيرات Hover\nاجعل موقعك تفاعلياً ومثيراً!\n"
        },
        {
          "type": "text",
          "text": "\n## ما هو تأثير hover؟\nهو التأثير الذي يحدث عندما تُحرّك الماوس فوق عنصر ما.\nمثل عندما تمرّر الماوس على زر في موقع فيتغير لونه — هذا هو hover!\nنكتبه بإضافة :hover بعد اسم العنصر:\n"
        },
        {
          "type": "text",
          "text": "\n## ✨ اجعل التأثير سلساً!\nأضف transition للعنصر لجعل التغيير تدريجياً وليس مفاجئاً:\n0.3s يعني 0.3 ثانية — جرّب 0.1s للسرعة أو 1s للبطء!\n"
        },
        {
          "type": "text",
          "text": "\n## 🧪 جرّب بنفسك!\nصمّم زراً تفاعلياً رائعاً:\n"
        }
      ],
      "questions": [],
      "codeExamples": [
        "/* صمّم زر تفاعلي رائع! */\n\n.my-button {\n  background-color: #e74c3c;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px 35px;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;   /* تأثير انتقالي سلس */\n}\n\n.my-button:hover {\n  background-color: #c0392b;   /* لون أغمق */\n  border-radius: 25px;          /* زوايا تتغير */\n  transform: scale(1.05);       /* يكبر قليلاً */\n}\n\n/* جرّب hover على رابط أيضاً! */\na:hover {\n  color: #e74c3c;\n  text-decoration: underline;\n}"
      ],
      "activities": []
    },
    {
      "id": "css-9",
      "index": 8,
      "title": "🏆 اختبر نفسك!",
      "type": "exam",
      "content": [
        {
          "type": "text",
          "text": "\n# 🏆 اختبر نفسك!\nهل أصبحت خبيراً في CSS؟\n"
        }
      ],
      "questions": [
        {
          "question": "## السؤال 1 — ما هي خاصية CSS المستخدمة لتغيير لون النص؟",
          "options": [
            {
              "text": "background-color",
              "correct": false,
              "feedback": "لا، `background-color` تغيّر لون الخلفية وليس النص. الخاصية الصحيحة هي `color`."
            },
            {
              "text": "color",
              "correct": true,
              "feedback": "ممتاز! إجابة صحيحة! 🎉"
            },
            {
              "text": "font-color",
              "correct": false,
              "feedback": "هذه الخاصية غير موجودة في CSS! الخاصية الصحيحة لتغيير لون النص هي `color`."
            },
            {
              "text": "text-color",
              "correct": false,
              "feedback": "هذه الخاصية غير موجودة في CSS. الخاصية الصحيحة هي `color`."
            }
          ]
        },
        {
          "question": "## السؤال 2 — ماذا يفعل `border-radius: 50%` مع صورة مربعة؟",
          "options": [
            {
              "text": "يجعلها مثلثاً",
              "correct": false,
              "feedback": "CSS لا يمكنه تحويل العناصر إلى مثلثات بهذه الطريقة. `border-radius: 50%` يُحوّل المربع إلى دائرة."
            },
            {
              "text": "يُحوّلها إلى دائرة كاملة",
              "correct": true,
              "feedback": "ممتاز! إجابة صحيحة! 🎉"
            },
            {
              "text": "يُزيل الصورة تماماً",
              "correct": false,
              "feedback": "لا، `border-radius` لا يُزيل الصورة أبداً. هو يُغيّر شكل الإطار فقط."
            },
            {
              "text": "يجعلها تختفي عند التحويم",
              "correct": false,
              "feedback": "لا، هذا يتم باستخدام `:hover` وليس `border-radius`. `border-radius: 50%` يُحوّل المربع إلى دائرة."
            }
          ]
        },
        {
          "question": "## السؤال 4 — أيّ كود CSS يجعل الزر يتفاعل عند تحريك الماوس عليه؟\n\n```css\nbutton:hover {\n  color: red;\n}\n```",
          "options": [
            {
              "text": "button:click { color: red; }",
              "correct": false,
              "feedback": "`:click` غير موجود في CSS. للتفاعل عند الضغط يمكن استخدام `:active`، لكن للتحويم بالماوس نستخدم `:hover`."
            },
            {
              "text": "button:hover { color: red; }",
              "correct": true,
              "feedback": "ممتاز! إجابة صحيحة! 🎉"
            },
            {
              "text": "button.hover { color: red; }",
              "correct": false,
              "feedback": "`.hover` يعني `class` اسمه `hover` وليس تأثير التحويم. التأثير الصحيح يُكتب بنقطتين: `:hover`."
            },
            {
              "text": "button-hover { color: red; }",
              "correct": false,
              "feedback": "هذه صيغة خاطئة. لاستهداف حالة `hover` يجب كتابة `:hover` مع نقطتين بعد اسم العنصر."
            }
          ]
        },
        {
          "question": "## السؤال 5 — ما الفرق بين `font-weight: bold` و `font-weight: normal`؟",
          "options": [
            {
              "text": "bold يُكبّر الخط، normal يُصغّره",
              "correct": false,
              "feedback": "لا، حجم الخط تتحكم فيه `font-size` وليس `font-weight`. القيمة `bold` تجعل النص عريضاً فقط."
            },
            {
              "text": "bold يُغيّر لون الخط، normal يُعيده للأصل",
              "correct": false,
              "feedback": "لا، `font-weight` لا تؤثر على اللون أبداً. اللون يتحكم فيه `color`."
            },
            {
              "text": "bold يجعل النص عريضاً، normal يجعله بوزنه الطبيعي",
              "correct": true,
              "feedback": "ممتاز! إجابة صحيحة! 🎉"
            },
            {
              "text": "bold يجعل النص مائلاً، normal يجعله مستقيماً",
              "correct": false,
              "feedback": "الإمالة تتحكم فيها `font-style: italic`. أما `font-weight: bold` فيجعل النص عريضاً فقط."
            }
          ]
        }
      ],
      "codeExamples": [],
      "activities": [
        {
          "type": "matching",
          "title": "طابق كل خاصية CSS مع وظيفتها!",
          "items": [
            {
              "choice": "padding",
              "match": "المسافة الداخلية بين المحتوى وحواف العنصر"
            },
            {
              "choice": "margin",
              "match": "المسافة الخارجية بين العنصر والعناصر المجاورة"
            },
            {
              "choice": "font-size",
              "match": "التحكم في حجم الخط"
            },
            {
              "choice": "border-radius",
              "match": "تدوير زوايا العنصر"
            }
          ]
        }
      ]
    },
    {
      "id": "css-10",
      "index": 9,
      "title": "🎉 موقعك جاهز!",
      "type": "intro",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Celebratory colorful confetti and stars exploding on a vibra](https://storage.googleapis.com/mindsmith/uploads%2Fdf074f7e-875f-4340-8158-9a33b5dd61d0%2Fgenerated-image.webp)\n\n# 🎉 أحسنت! موقعك جاهز!\nلقد أصبحت مصمماً حقيقياً للويب!\n"
        },
        {
          "type": "text",
          "text": "\n## ماذا تعلّمت في هذا الدرس؟\n"
        },
        {
          "type": "flashcards",
          "cards": [
            {
              "front": "🌈 الألوان",
              "back": "`color` للنص `background-color` للخلفية\nمثال: `h1 { color: red; }`"
            },
            {
              "front": "✍️ الخطوط",
              "back": "`font-size` للحجم `font-family` للنوع `font-weight` للثقل `text-align` للمحاذاة"
            },
            {
              "front": "📦 المسافات",
              "back": "`padding` = داخلي `margin` = خارجي\nمثال: `padding: 20px; margin: 10px auto;`"
            },
            {
              "front": "🔲 الحدود",
              "back": "`border: 3px solid blue;` `border-radius: 50%;` = دائرة\nأنواع: `solid`, `dashed`, `dotted`"
            },
            {
              "front": "🖼️ الصور",
              "back": "`width` و `height` للحجم `border-radius: 50%;` = دائرية `object-fit: cover;` = بدون تشويه"
            },
            {
              "front": "🖱️ Hover",
              "back": "`button:hover { color: red; }`\nأضف `transition: all 0.3s ease;` للتأثير السلس!"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🚀 الخطوات القادمة في عالم البرمجة!\n- CSS Flexbox — ترتيب العناصر بشكل احترافي\n- CSS Grid — تصميم شبكات مذهلة\n- CSS Animations — حركات وتأثيرات سينمائية\n- JavaScript — أضف تفاعلاً حقيقياً لموقعك!\nموارد مجانية رائعة: w3schools.com/css ← تعلّم أكثر بأمثلة تفاعلية\n"
        },
        {
          "type": "text",
          "text": "\n## استمر في التعلّم والإبداع!\nكل موقع جميل تراه على الإنترنت بدأ بنفس الأكواد التي تعلمتها اليوم. أنت على الطريق الصحيح! 🌟\n"
        }
      ],
      "questions": [],
      "codeExamples": [],
      "activities": []
    }
  ]
};

const JS_COURSE = {
  "id": "js",
  "title": "تعلّم JavaScript — البرمجة التفاعلية",
  "icon": "⚡",
  "description": "تعلم إضافة التفاعل والحركة لمواقعك باستخدام JavaScript",
  "color": "#eab308",
  "lessons": [
    {
      "id": "js-1",
      "index": 0,
      "title": "مرحباً بك في عالم JavaScript!",
      "type": "intro",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Vibrant colorful coding workspace with glowing neon code on ](https://storage.googleapis.com/mindsmith/uploads%2Fbc06ccf1-37f0-49fc-82bc-31d024a01f6d%2Fgenerated-image.webp)\n\n# 🚀 مرحباً بك في عالم JavaScript!\nاكتشف لغة البرمجة الأكثر شعبية في العالم — وابدأ رحلتك كمبرمج محترف!\n"
        },
        {
          "type": "text",
          "text": "\n## لماذا JavaScript؟ 🤔\nأنت تعرف بالفعل HTML و CSS — رائع! الآن حان وقت JavaScript، اللغة التي تجعل صفحات الويب تتحرك وتتفاعل.\nبدون JavaScript، المواقع مجرد صور ثابتة. معها، تصبح ألعاباً وتطبيقات حية!\n"
        },
        {
          "type": "text",
          "text": "\n![Cute cartoon kids building a colorful interactive website wi](./assets/images/image-6ebbe471-c829-4bee-9b3d-971584b448eb-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🗺️ ماذا ستتعلم في هذا الدرس؟\n"
        },
        {
          "type": "process",
          "steps": [
            "\n## 📦 المتغيرات\nتخزين البيانات مثل الصناديق السحرية\n",
            "\n## ➕ العمليات\nحسابات رياضية داخل الكود\n",
            "\n## 🤔 الشروط\nاتخاذ القرارات `if`/`else`\n",
            "\n## 🔄 الحلقات\nتكرار الأوامر تلقائياً\n",
            "\n## ⚙️ الدوال\nتنظيم الكود وإعادة استخدامه\n",
            "\n## 📝 النصوص\nالتعامل مع الكلمات والجمل\n",
            "\n## 📋 المصفوفات\nقوائم منظمة من البيانات\n"
          ]
        }
      ],
      "questions": [],
      "codeExamples": [],
      "activities": []
    },
    {
      "id": "js-2",
      "index": 1,
      "title": "📦 المتغيرات — Variables",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n# 📦 المتغيرات — Variables\nفكّر فيها كصناديق سحرية تحفظ فيها أي شيء تريد!\n"
        },
        {
          "type": "text",
          "text": "\n## ما هو المتغير؟\nالمتغير هو اسم تعطيه لمكان في الذاكرة لتخزين قيمة.\nتخيّل أن عندك صناديق:\n- 📦 `let` — صندوق عادي، يمكن تغيير محتواه\n- 🔒 `const` — صندوق مقفل، لا يتغير أبداً\n- ⚠️ `var` — صندوق قديم، تجنّبه في الكود الحديث!\n"
        },
        {
          "type": "text",
          "text": "\n![Three cute cartoon boxes labeled let, const, and var with di](./assets/images/image-d3301e0c-2fc7-40ea-9635-47c4b06b9994-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 💻 شاهد المثال:\n"
        },
        {
          "type": "text",
          "text": "\n## 🎯 أنواع البيانات في JavaScript\n"
        },
        {
          "type": "tabs",
          "tabs": [
            {
              "label": "📝 String (نص)",
              "content": "\n### ما هو؟\nأي نص بين علامتي تنصيص.\nأمثلة:\nاستخدامه: أسماء، رسائل، أي كلام!\n"
            },
            {
              "label": "🔢 Number (رقم)",
              "content": "\n### ما هو؟\nأي رقم — سواء صحيح أو عشري.\nأمثلة:\nاستخدامه: درجات، أسعار، أعمار، أي رقم!\n"
            },
            {
              "label": "✅ Boolean (صح/خطأ)",
              "content": "\n### ما هو؟\nقيمتان فقط: `true` (صح) أو `false` (خطأ).\nأمثلة:\nاستخدامه: الحالات، القرارات، الفحوصات!\n"
            },
            {
              "label": "❓ Undefined / Null",
              "content": "\n### ما هو؟\n- `undefined`: متغير أُنشئ بدون قيمة\n- `null`: قيمة فارغة متعمدة\nأمثلة:\nاستخدامه: عندما لا تعرف القيمة بعد!\n"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🎮 جرّب بنفسك!\nعدّل الكود أدناه: غيّر اسمك وعمرك ثم جرّب إضافة متغير جديد من نوع `Boolean`!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 تحدي سريع!\nما النوع الذي تخزنه المتغيرات في هذا الكود؟\n\n```javascript\nlet myScore = 95;\n```",
          "options": [
            {
              "text": "نص (String)",
              "correct": false,
              "feedback": "لا! النص يكون بين علامات التنصيص مثل \"95\". هذا رقم بدون علامات."
            },
            {
              "text": "رقم (Number)",
              "correct": true,
              "feedback": "ممتاز! 🎉 95 بدون علامات تنصيص هو رقم (`Number`)."
            },
            {
              "text": "Boolean",
              "correct": false,
              "feedback": "لا! `Boolean` قيمتها إما `true` أو `false` فقط."
            },
            {
              "text": "Undefined",
              "correct": false,
              "feedback": "لا! `Undefined` يعني لا توجد قيمة، لكن هنا عندنا قيمة 95."
            }
          ]
        }
      ],
      "codeExamples": [
        "// 📦 إنشاء متغيرات\nlet myName = \"أحمد\";        // نص (String)\nlet myAge = 12;              // رقم (Number)\nlet isCool = true;           // صح أو خطأ (Boolean)\n\nconst PI = 3.14;             // ثابت لا يتغير\n\n// طباعة القيم\nconsole.log(myName);         // أحمد\nconsole.log(myAge);          // 12\nconsole.log(\"عمري: \" + myAge + \" سنة\");",
        "// ✏️ جرّب تغيير هذه القيم!\nlet myName = \"اكتب اسمك هنا\";\nlet myAge = 12;\nlet myFavoriteGame = \"ماين كرافت\";\nlet isExcited = true;\n\n// اطبع معلوماتك\nconsole.log(\"اسمي: \" + myName);\nconsole.log(\"عمري: \" + myAge + \" سنة\");\nconsole.log(\"لعبتي المفضلة: \" + myFavoriteGame);\nconsole.log(\"متحمس للبرمجة؟ \" + isExcited);"
      ],
      "activities": []
    },
    {
      "id": "js-3",
      "index": 2,
      "title": "➕ العمليات الحسابية",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n# ➕ العمليات الحسابية\nJavaScript آلة حاسبة خارقة — دعها تحل الرياضيات بدلاً منك!\n"
        },
        {
          "type": "text",
          "text": "\n## 🧮 المعاملات الرياضية في JavaScript\n"
        },
        {
          "type": "tabs",
          "tabs": [
            {
              "label": "➕ الجمع +",
              "content": "\n### الجمع\nيجمع رقمين أو أكثر معاً.\nتنبيه: \"3\" + 4 يعطي \"34\" وليس 7 — لأن \"3\" نص!\n"
            },
            {
              "label": "➖ الطرح -",
              "content": "\n### الطرح\nيطرح رقم من آخر.\n"
            },
            {
              "label": "✖️ الضرب *",
              "content": "\n### الضرب\nيضرب رقمين.\n"
            },
            {
              "label": "➗ القسمة /",
              "content": "\n### القسمة\nيقسم رقماً على آخر.\n"
            },
            {
              "label": "% الباقي",
              "content": "\n### باقي القسمة (Modulo)\nيعطيك الباقي من القسمة.\nاستخدامه: معرفة الأرقام الزوجية والفردية!\n"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🎮 مثال: احسب درجاتك في اللعبة!\n"
        },
        {
          "type": "text",
          "text": "\n## 🎮 تحدي الآلة الحاسبة!\nعدّل الكود أدناه واصنع آلة حاسبة بسيطة — جرب ضرب عمرك في 365 لتعرف عدد الأيام التي عشتها!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 ما ناتج هذا الكود؟\n\n```javascript\nlet result = 17 % 5;\nconsole.log(result);\n```",
          "options": [
            {
              "text": "3",
              "correct": false,
              "feedback": "قريب! 17 ÷ 5 = 3 والباقي 2، ليس 3."
            },
            {
              "text": "2",
              "correct": true,
              "feedback": "ممتاز! 🎉 17 ÷ 5 = 3 والباقي 2. هذا هو ناتج `%`!"
            },
            {
              "text": "5",
              "correct": false,
              "feedback": "لا! جرّب تقسيم 17 على 5 وانظر للباقي."
            },
            {
              "text": "0",
              "correct": false,
              "feedback": "لا! 0 يعني القسمة بدون باقي، لكن 17 ÷ 5 لها باقي."
            }
          ]
        }
      ],
      "codeExamples": [
        "// 🎮 نظام نقاط لعبة\nlet baseScore = 1000;\nlet bonusPoints = 250;\nlet penaltyPoints = 75;\nlet multiplier = 2;\n\n// حساب النتيجة النهائية\nlet finalScore = (baseScore + bonusPoints - penaltyPoints) * multiplier;\n\nconsole.log(\"النقاط الأساسية: \" + baseScore);\nconsole.log(\"المكافأة: +\" + bonusPoints);\nconsole.log(\"العقوبة: -\" + penaltyPoints);\nconsole.log(\"المضاعف: x\" + multiplier);\nconsole.log(\"━━━━━━━━━━━━━━━━━━\");\nconsole.log(\"نتيجتك النهائية: \" + finalScore);",
        "// ✏️ جرّب بنفسك!\nlet myAge = 12;\nlet daysLived = myAge * 365;\nconsole.log(\"عشت \" + daysLived + \" يوم!\");\n\n// جرّب أيضاً:\nlet num1 = 50;\nlet num2 = 8;\nconsole.log(num1 + \" + \" + num2 + \" = \" + (num1 + num2));\nconsole.log(num1 + \" - \" + num2 + \" = \" + (num1 - num2));\nconsole.log(num1 + \" * \" + num2 + \" = \" + (num1 * num2));\nconsole.log(num1 + \" / \" + num2 + \" = \" + (num1 / num2));\nconsole.log(num1 + \" % \" + num2 + \" = \" + (num1 % num2));"
      ],
      "activities": []
    },
    {
      "id": "js-4",
      "index": 3,
      "title": "🤔 الشروط — If / Else",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Two paths in a magical glowing forest, one path leads to tre](https://storage.googleapis.com/mindsmith/uploads%2F8665332d-7790-4958-be12-7533cb25e2fe%2Fgenerated-image.webp)\n\n# 🤔 الشروط — If / Else\nكيف يتخذ الكمبيوتر قراراته؟ الجواب: بالشروط!\n"
        },
        {
          "type": "text",
          "text": "\n## كيف تعمل الشروط؟\nتخيّل أنك تلعب لعبة مغامرة:\n- إذا وجدت المفتاح → افتح الباب\n- وإلا → ابحث عن مفتاح آخر\nهذا بالضبط ما تفعله `if` / `else` في JavaScript — تتحقق من شرط وتقرر ماذا تفعل!\n"
        },
        {
          "type": "text",
          "text": "\n![Cute cartoon robot standing at a fork in the road with a big](./assets/images/image-1f7c008a-f4f9-4f95-bdfe-c7ec28a9ffa8-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🏗️ بنية جملة الشرط\n"
        },
        {
          "type": "process",
          "steps": [
            "\n## 1️⃣ `if`\nالشرط الأساسي — إذا كان الشرط صحيحاً:\n",
            "\n## 2️⃣ `else if`\nشرط إضافي — وإلا إذا:\n",
            "\n## 3️⃣ `else`\nالحل الأخير — وإلا (في جميع الحالات الأخرى):\n"
          ]
        },
        {
          "type": "text",
          "text": "\n## 🔍 عوامل المقارنة\n"
        },
        {
          "type": "accordion",
          "items": [
            {
              "title": "`==` و `===` (يساوي)",
              "content": "- `==` يقارن القيمة فقط: 5 == \"5\" → true\n- `===` يقارن القيمة والنوع: 5 === \"5\" → false\nنصيحة: استخدم `===` دائماً — أدق وأأمن!"
            },
            {
              "title": "`!=` و `!==` (لا يساوي)",
              "content": "- `!=` يتحقق من اختلاف القيمة\n- `!==` يتحقق من اختلاف القيمة أو النوع"
            },
            {
              "title": "> و < و >= و <= (أكبر/أصغر)",
              "content": "- `>` أكبر من\n- `<` أصغر من\n- `>=` أكبر من أو يساوي\n- `<=` أصغر من أو يساوي"
            },
            {
              "title": "`&&` و `||` و `!` (و / أو / ليس)",
              "content": "- `&&` (AND): كلا الشرطين صحيح\n- `||` (OR): أحد الشرطين صحيح\n- `!` (NOT): عكس الشرط"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🗺️ لعبة المغامرة — جرّب الشروط!\n"
        },
        {
          "type": "text",
          "text": "\n## 🎮 جرّب بنفسك!\nغيّر قيمة `playerScore` و `hasSword` وشاهد كيف تتغير النتيجة. جرّب قيماً مختلفة!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 ما ناتج هذا الكود؟\n\n```javascript\nlet score = 15;\nif (score > 20) {\n  console.log(\"كبير\");\n} else if (score > 10) {\n  console.log(\"متوسط\");\n} else {\n  console.log(\"صغير\");\n}\n```",
          "options": [
            {
              "text": "كبير",
              "correct": false,
              "feedback": "لا! 15 ليس أكبر من 20، لذا الشرط الأول خاطئ."
            },
            {
              "text": "متوسط",
              "correct": true,
              "feedback": "ممتاز! 🎉 15 ليس أكبر من 20، لكنه أكبر من 10، فيطبع متوسط!"
            },
            {
              "text": "صغير",
              "correct": false,
              "feedback": "لا! الكود يصل لـ `else` فقط إذا فشلت الشروط السابقة كلها."
            },
            {
              "text": "لا يطبع شيئاً",
              "correct": false,
              "feedback": "بالعكس! سيطبع شيئاً — أعد قراءة الشروط."
            }
          ]
        }
      ],
      "codeExamples": [
        "// 🗺️ لعبة مغامرة بسيطة\nlet playerScore = 75;\nlet hasSword = true;\nlet bossHealth = 100;\n\nconsole.log(\"=== لعبة المغامرة ===\");\n\n// هل اللاعب جاهز للقتال؟\nif (playerScore >= 50 && hasSword) {\n  console.log(\"أنت جاهز للمعركة!\");\n  \n  // نتيجة المعركة\n  if (playerScore >= 80) {\n    console.log(\"انتصرت ببطولة! 🏆\");\n  } else if (playerScore >= 60) {\n    console.log(\"انتصرت بصعوبة! ⚔️\");\n  } else {\n    console.log(\"انتصرت بالكاد... 😅\");\n  }\n} else {\n  console.log(\"أنت بحاجة لتدريب أكثر! 💪\");\n}",
        "// ✏️ غيّر هذه القيم وجرّب!\nlet myScore = 45;         // جرّب: 90, 65, 45, 20\nlet myLevel = 3;          // جرّب: 1, 5, 10\n\nif (myScore >= 90) {\n  console.log(\"🥇 ممتاز — العبة نجم!\");\n} else if (myScore >= 70) {\n  console.log(\"🥈 جيد جداً — استمر!\");\n} else if (myScore >= 50) {\n  console.log(\"🥉 جيد — يمكنك التحسين!\");\n} else {\n  console.log(\"💪 حاول مرة أخرى — أنت تستطيع!\");\n}\n\nconsole.log(\"مستواك الحالي: \" + myLevel);"
      ],
      "activities": []
    },
    {
      "id": "js-5",
      "index": 4,
      "title": "🔄 الحلقات — Loops",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Cartoon spinning circular arrows in bright neon colors formi](https://storage.googleapis.com/mindsmith/uploads%2Fc05bed12-37a4-471c-be6b-54bcc817c6e9%2Fgenerated-image.webp)\n\n# 🔄 الحلقات — Loops\nلا تكرر نفسك! دع الكمبيوتر يكرر العمل عنك مئات المرات!\n"
        },
        {
          "type": "text",
          "text": "\n## لماذا نحتاج الحلقات؟\nتخيّل أنك تريد طباعة \"أهلاً\" 100 مرة! بدون حلقات ستكتب 100 سطر.\nمع الحلقات:\nسطران فقط يعملان 100 مرة! ✨\n"
        },
        {
          "type": "text",
          "text": "\n![Cute cartoon robot doing the same task over and over in a lo](./assets/images/image-ae48c8d4-66ba-494b-adb8-14b89caa249f-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🔁 حلقة `for` — الأكثر استخداماً\n"
        },
        {
          "type": "text",
          "text": "\n## 🔂 حلقة `while` — متى نستخدمها؟\n"
        },
        {
          "type": "tabs",
          "tabs": [
            {
              "label": "بنية `while`",
              "content": "\n### حلقة `while`\nتستمر طالما الشرط صحيح.\nمتى تستخدمها؟ عندما لا تعرف كم مرة ستتكرر الحلقة مسبقاً.\n"
            },
            {
              "label": "`for` vs `while`",
              "content": "\n### متى أستخدم كل واحدة؟\nحلقة `for` → عندما تعرف العدد مسبقاً:\nحلقة `while` → عندما لا تعرف العدد:\n"
            },
            {
              "label": "⚠️ تحذير مهم",
              "content": "\n### ⚠️ الحلقة اللا نهائية!\nإذا نسيت تغيير المتغير، ستدور الحلقة إلى الأبد وتتجمد الصفحة!\n"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🎮 تحدي النجوم!\nعدّل الكود ليطبع نمطاً مثلثاً من النجوم — ابدأ بنجمة واحدة وأضف نجمة في كل سطر!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 كم مرة يطبع هذا الكود كلمة \"مرحباً\"؟",
          "options": [
            {
              "text": "3 مرات",
              "correct": false,
              "feedback": "لا! `i` تبدأ من 0 وتصل لـ 3 (0, 1, 2, 3) — أعد العد!"
            },
            {
              "text": "4 مرات",
              "correct": true,
              "feedback": "ممتاز! 🎉 `i` = 0, 1, 2, 3 → أربع قيم → أربع مرات!"
            },
            {
              "text": "5 مرات",
              "correct": false,
              "feedback": "لا! الشرط `i < 4` يعني توقف عند 4 (لا تشمل 4 نفسها)."
            },
            {
              "text": "لا تنتهي",
              "correct": false,
              "feedback": "لا! `i` تزيد `i` في كل دورة حتى تصل لـ 4 وتتوقف"
            }
          ]
        }
      ],
      "codeExamples": [
        "// 🔁 بنية حلقة for\n// for (البداية; الشرط; التغيير)\n\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"العدد: \" + i);\n}\n// يطبع: 1, 2, 3, 4, 5\n\n// مثال ممتع: نجوم الدرجات\nlet stars = \"\";\nfor (let i = 0; i < 5; i++) {\n  stars += \"⭐\";\n  console.log(stars);\n}\n// ⭐\n// ⭐⭐\n// ⭐⭐⭐ ...",
        "// ✏️ جرّب الحلقات!\n// تحدي 1: اطبع الأرقام من 1 لـ 10\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nconsole.log(\"---\");\n\n// تحدي 2: اطبع الأرقام الزوجية فقط (بين 1 و 20)\nfor (let i = 2; i <= 20; i += 2) {\n  console.log(i + \" زوجي\");\n}\n\nconsole.log(\"---\");\n\n// تحدي 3: العد التنازلي!\nfor (let i = 5; i >= 1; i--) {\n  console.log(i + \"... 🚀\");\n}\nconsole.log(\"انطلق!\");"
      ],
      "activities": []
    },
    {
      "id": "js-6",
      "index": 5,
      "title": "⚙️ الدوال — Functions",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n# ⚙️ الدوال — Functions\nاكتب مرة واحدة، استخدم ألف مرة — سر الكود المحترف!\n"
        },
        {
          "type": "text",
          "text": "\n## ما هي الدالة؟ 🤔\nالدالة هي وصفة برمجية — تكتبها مرة واحدة ثم تستدعيها كلما احتجتها!\nبدلاً من إعادة كتابة نفس الكود 10 مرات، اكتب دالة واستخدمها 10 مرات.\nمثال من الحياة: مقبض الباب هو \"دالة\" تفتح الباب — لا تحتاج تعيد تركيب الباب كل مرة!\n"
        },
        {
          "type": "text",
          "text": "\n![Cute cartoon function machine box with input arrow going in ](./assets/images/image-a59ba651-0305-4e0d-876c-ac88cf6dd608-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🏗️ كيف تكتب دالة؟\n"
        },
        {
          "type": "process",
          "steps": [
            "\n## 1️⃣ تعريف الدالة\nاستخدم كلمة `function` ثم اسم الدالة:\n",
            "\n## 2️⃣ المعاملات (Parameters)\nمعلومات تُدخلها للدالة:\n",
            "\n## 3️⃣ استدعاء الدالة\nاستخدم اسمها مع القوسين:\n",
            "\n## 4️⃣ القيمة المُعادة (`return`)\nأعد نتيجة من الدالة:\n"
          ]
        },
        {
          "type": "text",
          "text": "\n## ⚡ Arrow Functions — الطريقة الحديثة\n"
        },
        {
          "type": "text",
          "text": "\n## 🎮 جرّب بنفسك!\nاكمل الدوال في الكود — اكتب دالة تحسب مساحة المستطيل وأخرى تحسب محيطه!\n"
        },
        {
          "type": "text",
          "text": "\n## 🃏 راجع المصطلحات\n"
        },
        {
          "type": "flashcards",
          "cards": [
            {
              "front": "`function`",
              "back": "الكلمة المفتاحية لإنشاء دالة في JavaScript"
            },
            {
              "front": "Parameters",
              "back": "المعاملات — القيم التي تُدخلها للدالة بين القوسين"
            },
            {
              "front": "`return`",
              "back": "تُعيد قيمة من الدالة إلى مكان الاستدعاء"
            },
            {
              "front": "Arrow Function `=>`",
              "back": "طريقة حديثة وأقصر لكتابة الدوال: `const fn = () => result`"
            },
            {
              "front": "استدعاء الدالة",
              "back": "كتابة اسم الدالة مع القوسين: `myFunction()`"
            }
          ]
        }
      ],
      "questions": [
        {
          "question": "## 🧩 ما الذي يعيده هذا الكود؟",
          "options": [
            {
              "text": "7",
              "correct": false,
              "feedback": "لا! الدالة تضرب العدد في 2، لا تعيده كما هو."
            },
            {
              "text": "14",
              "correct": true,
              "feedback": "ممتاز! 🎉 7 × 2 = 14. الدالة تضاعف أي رقم تدخله!"
            },
            {
              "text": "2",
              "correct": false,
              "feedback": "لا! `num` هو 7 و`num * 2` = 14 وليس 2."
            },
            {
              "text": "double(7)",
              "correct": false,
              "feedback": "لا! الكود يُشغّل الدالة ويطبع النتيجة الرقمية."
            }
          ]
        }
      ],
      "codeExamples": [
        "// الطريقة التقليدية\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// نفس الشيء بـ Arrow Function (أقصر!)\nconst multiply2 = (a, b) => a * b;\n\nconsole.log(multiply(4, 5));   // 20\nconsole.log(multiply2(4, 5));  // 20 - نفس النتيجة!\n\n// دالة لحساب العمر\nconst getAge = (birthYear) => 2024 - birthYear;\nconsole.log(\"عمري: \" + getAge(2012) + \" سنة\");",
        "// ✏️ أكمل هذه الدوال!\n\n// دالة الترحيب\nfunction welcome(name, age) {\n  return \"مرحباً \" + name + \"! عمرك \" + age + \" سنة.\";\n}\nconsole.log(welcome(\"أحمد\", 12));\n\n// دالة حساب مساحة المستطيل\nfunction rectangleArea(width, height) {\n  return width * height;  // المساحة = الطول × العرض\n}\nconsole.log(\"المساحة: \" + rectangleArea(5, 3) + \" وحدة مربعة\");\n\n// تحدي: دالة تقرر من الفائز\nfunction getWinner(player1Score, player2Score) {\n  if (player1Score > player2Score) {\n    return \"اللاعب الأول فاز! 🏆\";\n  } else if (player2Score > player1Score) {\n    return \"اللاعب الثاني فاز! 🏆\";\n  } else {\n    return \"تعادل! 🤝\";\n  }\n}\nconsole.log(getWinner(85, 70));"
      ],
      "activities": []
    },
    {
      "id": "js-7",
      "index": 6,
      "title": "📝 النصوص — Strings",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n# 📝 النصوص — Strings\nالكلمات والجمل في JavaScript — تعلّم كيف تتحكم بها!\n"
        },
        {
          "type": "text",
          "text": "\n## إنشاء النصوص\nهناك 3 طرق لكتابة نص في JavaScript:\n- علامات تنصيص مزدوجة \"نص\"\n- علامات تنصيص مفردة 'نص'\n- Backticks `نص` — الأقوى والأحدث!\nالفرق الكبير في الـ Backticks: تستطيع وضع متغيرات داخلها مباشرة!\n"
        },
        {
          "type": "text",
          "text": "\n![Colorful text bubbles floating in digital space with JavaScr](./assets/images/image-470059ff-769d-44c6-9e7b-45f57a0fabf1-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 🔗 دمج النصوص\n"
        },
        {
          "type": "text",
          "text": "\n## 🛠️ الأدوات السحرية للنصوص (Methods)\n"
        },
        {
          "type": "accordion",
          "items": [
            {
              "title": "📏 `.length` — طول النص",
              "content": "يعطيك عدد الأحرف في النص:"
            },
            {
              "title": "🔠 `.toUpperCase()` و `.toLowerCase()`",
              "content": "تحوّل النص لأحرف كبيرة أو صغيرة:"
            },
            {
              "title": "🔍 `.indexOf()` — البحث في النص",
              "content": "يبحث عن كلمة ويعطيك موضعها (أو -1 إذا لم يجدها):"
            },
            {
              "title": "✂️ `.slice()` — قطع جزء من النص",
              "content": "يأخذ جزءاً من النص:"
            },
            {
              "title": "🔄 `.replace()` — استبدال نص",
              "content": "يستبدل كلمة بأخرى:"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🎮 صمّم بطاقة تعريفية شخصية!\nعدّل الكود وأنشئ بطاقة تعريفية عنك باستخدام النصوص وطرق معالجتها!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 ما ناتج هذا الكود؟\n\n```javascript\nlet word = \"JavaScript\";\nconsole.log(word.length);\n```",
          "options": [
            {
              "text": "9",
              "correct": false,
              "feedback": "قريب! كلمة JavaScript تتكون من 10 حروف."
            },
            {
              "text": "10",
              "correct": true,
              "feedback": "ممتاز! 🎉 كلمة JavaScript تتكون من 10 حروف."
            },
            {
              "text": "11",
              "correct": false,
              "feedback": "لا! كلمة JavaScript تتكون من 10 حروف."
            },
            {
              "text": "\"JavaScript\"",
              "correct": false,
              "feedback": "لا! `.length` يعيد رقماً (عدد الحروف) وليس النص نفسه."
            }
          ]
        }
      ],
      "codeExamples": [
        "let firstName = \"محمد\";\nlet lastName = \"علي\";\nlet age = 12;\n\n// طريقة 1: Concatenation (+)\nlet msg1 = \"مرحباً \" + firstName + \" \" + lastName;\nconsole.log(msg1);  // مرحباً محمد علي\n\n// طريقة 2: Template Literals (أسهل وأوضح!)\nlet msg2 = `مرحباً ${firstName} ${lastName}! عمرك ${age} سنة.`;\nconsole.log(msg2);  // مرحباً محمد علي! عمرك 12 سنة.\n\n// حتى يمكن عمل حسابات داخل الـ Template!\nlet msg3 = `بعد 5 سنوات ستكون عمرك ${age + 5}!`;\nconsole.log(msg3);",
        "// ✏️ صمّم بطاقتك الشخصية!\nlet myName = \"اكتب اسمك\";\nlet myHobby = \"البرمجة\";\nlet myFavColor = \"الأزرق\";\n\n// بطاقة تعريفية\nconsole.log(\"=== بطاقتي الشخصية ===\");\nconsole.log(`الاسم: ${myName.toUpperCase()}`);\nconsole.log(`الطول: ${myName.length} حرف`);\nconsole.log(`هوايتي: ${myHobby}`);\nconsole.log(`لوني المفضل: ${myFavColor}`);\n\n// تحدي: هل اسمك يحتوي على حرف معين؟\nlet letter = \"م\";\nif (myName.indexOf(letter) !== -1) {\n  console.log(`اسمك يحتوي على حرف ${letter}!`);\n} else {\n  console.log(`اسمك لا يحتوي على حرف ${letter}.`);\n}"
      ],
      "activities": []
    },
    {
      "id": "js-8",
      "index": 7,
      "title": "📋 المصفوفات — Arrays",
      "type": "challenge",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Colorful rows of boxes lined up like an array, each box with](https://storage.googleapis.com/mindsmith/uploads%2F00eac4ac-8763-415e-ba57-77c3f460c55e%2Fgenerated-image.webp)\n\n# 📋 المصفوفات — Arrays\nقوائم منظمة لتخزين عشرات القيم في متغير واحد!\n"
        },
        {
          "type": "text",
          "text": "\n## ما هي المصفوفة؟ 📦📦📦\nبدلاً من إنشاء متغير لكل عنصر:\nاستخدم مصفوفة واحدة:\nأبسط وأنظف بكثير!\n"
        },
        {
          "type": "text",
          "text": "\n![Cartoon train with numbered wagons each containing different](./assets/images/image-c669c9e7-9469-4549-9729-efec78fa7d4a-AR.png)\n"
        },
        {
          "type": "text",
          "text": "\n## 💻 أساسيات المصفوفات\n"
        },
        {
          "type": "text",
          "text": "\n## 🛠️ أدوات المصفوفات (Methods)\n"
        },
        {
          "type": "tabs",
          "tabs": [
            {
              "label": "➕ `.push()` — إضافة",
              "content": "\n### إضافة عنصر للنهاية\nاستخدامه: إضافة عنصر جديد لآخر القائمة.\n"
            },
            {
              "label": "➖ `.pop()` — حذف",
              "content": "\n### حذف آخر عنصر\nملاحظة: `.pop()` تحذف وتُعيد العنصر المحذوف!\n"
            },
            {
              "label": "🔄 التكرار على المصفوفة",
              "content": "\n### استخدام `for` loop مع `Array`\n"
            },
            {
              "label": "🔍 `.indexOf()` — البحث",
              "content": "\n### البحث عن عنصر\n"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🎮 تحدي: قائمة ألعابك المفضلة!\nأنشئ مصفوفة بألعابك المفضلة، أضف لعبة جديدة، ثم اطبع القائمة كاملة بحلقة!\n"
        }
      ],
      "questions": [
        {
          "question": "## 🧩 ما قيمة `animals[2]` في هذا المحتوى؟\n\n```javascript\nlet animals = [\"قطة\", \"كلب\", \"أرنب\", \"طائر\"];\n```",
          "options": [
            {
              "text": "كلب",
              "correct": false,
              "feedback": "لا! `animals[2]` هو العنصر الثالث (Index يبدأ من 0: 0=قطة, 1=كلب, 2=أرنب)."
            },
            {
              "text": "أرنب",
              "correct": true,
              "feedback": "ممتاز! 🎉 Index 0=قطة, 1=كلب, 2=أرنب. صحيح!"
            },
            {
              "text": "قطة",
              "correct": false,
              "feedback": "لا! قطة في Index 0. `animals[2]` هو العنصر الثالث."
            },
            {
              "text": "طائر",
              "correct": false,
              "feedback": "لا! طائر في Index 3. `animals[2]` هو العنصر في الموضع الثالث."
            }
          ]
        }
      ],
      "codeExamples": [
        "// إنشاء مصفوفة\nlet fruits = [\"تفاحة\", \"موزة\", \"برتقالة\", \"مانجو\"];\n\n// الوصول للعناصر (Index يبدأ من 0!)\nconsole.log(fruits[0]);  // تفاحة (الأول)\nconsole.log(fruits[1]);  // موزة (الثاني)\nconsole.log(fruits[3]);  // مانجو (الرابع)\n\n// طول المصفوفة\nconsole.log(fruits.length);  // 4\n\n// تغيير عنصر\nfruits[1] = \"كيوي\";\nconsole.log(fruits);  // [تفاحة, كيوي, برتقالة, مانجو]",
        "// ✏️ قائمة ألعابك المفضلة!\nlet myGames = [\"ماين كرافت\", \"فورتنايت\", \"روبلوكس\"];\n\nconsole.log(\"=== قائمة ألعابي ===\");\nconsole.log(\"عدد الألعاب: \" + myGames.length);\n\n// اطبع القائمة\nfor (let i = 0; i < myGames.length; i++) {\n  console.log((i + 1) + \". \" + myGames[i]);\n}\n\n// أضف لعبة جديدة\nmyGames.push(\"ببجي\");\nconsole.log(\"\\nبعد الإضافة:\");\nconsole.log(myGames);\n\n// احذف آخر لعبة\nlet removed = myGames.pop();\nconsole.log(`تمت إزالة: ${removed}`);\nconsole.log(\"القائمة الآن: \" + myGames);"
      ],
      "activities": []
    },
    {
      "id": "js-9",
      "index": 8,
      "title": "🏆 التحدي النهائي!",
      "type": "exam",
      "content": [
        {
          "type": "text",
          "text": "\n\n![Epic gold trophy surrounded by confetti stars and sparkles, ](https://storage.googleapis.com/mindsmith/uploads%2F6123bd88-caac-4f8d-9f91-1a50557f864b%2Fgenerated-image.webp)\n\n# 🏆 التحدي النهائي!\nلقد تعلمت كل الأساسيات — الآن حان وقت اختبار قدراتك الحقيقية!\n"
        },
        {
          "type": "text",
          "text": "\n## 🃏 مراجعة سريعة — هل تتذكر؟\n"
        },
        {
          "type": "flashcards",
          "cards": [
            {
              "front": "`let` vs `const`",
              "back": "`let` = متغير قابل للتغيير `const` = ثابت لا يتغير أبداً"
            },
            {
              "front": "% (Modulo)",
              "back": "يعطيك باقي القسمة 10 % 3 = 1"
            },
            {
              "front": "`===` (Triple Equals)",
              "back": "يقارن القيمة والنوع معاً أدق من `==` التي تقارن القيمة فقط"
            },
            {
              "front": "`for` loop",
              "back": "`for (let i = 0; i < n; i++)` تكرر الكود `n` مرة"
            },
            {
              "front": "`function`",
              "back": "كتلة كود مُسماة يمكن استدعاؤها `function myFn() { ... }`"
            },
            {
              "front": "Template Literal",
              "back": "نص بين backticks يقبل متغيرات: `` `مرحباً ${name}!` ``"
            },
            {
              "front": "Array index",
              "back": "يبدأ دائماً من 0 `arr[0]` = العنصر الأول"
            }
          ]
        },
        {
          "type": "text",
          "text": "\n## 🚀 مشروعك النهائي — آلة حاسبة ذكية!\n"
        },
        {
          "type": "text",
          "text": "\n## 🎯 التحدي\nالكود أدناه يحتوي على آلة حاسبة بسيطة تستخدم كل ما تعلمناه:\n- متغيرات\n- عمليات حسابية\n- شروط `if`/`else`\n- دوال `functions`\n- مصفوفات\nجرّب تغيير الأرقام والعمليات وشاهد ما يحدث!\n"
        },
        {
          "type": "text",
          "text": "\n\n![Colorful celebration with confetti, stars, trophies and fire](https://storage.googleapis.com/mindsmith/uploads%2F9085d00b-fa3f-4a40-a664-006fa9137e0d%2Fgenerated-image.webp)\n\n# 🎉 تهانينا — أنت الآن مبرمج JavaScript!\nلقد أتممت الدرس وتعلمت:\n📦 المتغيرات · ➕ العمليات · 🤔 الشروط · 🔄 الحلقات · ⚙️ الدوال · 📝 النصوص · 📋 المصفوفات\nالخطوة القادمة: استخدم JavaScript مع HTML وCSS لتصنع مواقعك التفاعلية! 🚀\n"
        }
      ],
      "questions": [
        {
          "question": "## سؤال 1: أي كلمة تستخدم لمتغير لا يتغير أبداً؟",
          "options": [
            {
              "text": "let",
              "correct": false,
              "feedback": "لا! `let` يُنشئ متغيراً قابلاً للتغيير."
            },
            {
              "text": "var",
              "correct": false,
              "feedback": "لا! `var` قديمة ولا تمنع التغيير."
            },
            {
              "text": "const",
              "correct": true,
              "feedback": "ممتاز! `const` تُنشئ ثابتاً لا يتغير."
            },
            {
              "text": "fix",
              "correct": false,
              "feedback": "لا! `fix` ليست كلمة مفتاحية في JavaScript."
            }
          ]
        },
        {
          "question": "## سؤال 2: ما ناتج 9 % 4؟",
          "options": [
            {
              "text": "2",
              "correct": false,
              "feedback": "لا! 9 ÷ 4 = 2 والباقي 1، ليس 2."
            },
            {
              "text": "1",
              "correct": true,
              "feedback": "ممتاز! 9 ÷ 4 = 2 والباقي 1."
            },
            {
              "text": "4",
              "correct": false,
              "feedback": "لا! هذا ليس ناتج `%`."
            },
            {
              "text": "0",
              "correct": false,
              "feedback": "لا! الباقي ليس صفراً هنا."
            }
          ]
        },
        {
          "question": "## سؤال 3: أي عامل يتحقق من القيمة والنوع معاً؟",
          "options": [
            {
              "text": "==",
              "correct": false,
              "feedback": "لا! `==` يتحقق من القيمة فقط."
            },
            {
              "text": "===",
              "correct": true,
              "feedback": "ممتاز! `===` يتحقق من القيمة والنوع معاً."
            },
            {
              "text": "=",
              "correct": false,
              "feedback": "لا! `=` للتعيين وليس للمقارنة."
            },
            {
              "text": "≠",
              "correct": false,
              "feedback": "لا! `≠` يتحقق من عدم المساواة في القيمة."
            }
          ]
        },
        {
          "question": "## سؤال 4: ما الذي يحدث إذا نسيت `i++` داخل `while loop`؟",
          "options": [
            {
              "text": "تتوقف الحلقة فوراً",
              "correct": false,
              "feedback": "لا! بالعكس — ستستمر إلى الأبد!"
            },
            {
              "text": "تدور الحلقة إلى الأبد (infinite loop)",
              "correct": true,
              "feedback": "ممتاز! نسيان التحديث يُسبب حلقة لا نهائية تُجمّد البرنامج."
            },
            {
              "text": "تعطي خطأ وتتوقف",
              "correct": false,
              "feedback": "لا! لن يكون هناك خطأ — ستستمر بدون توقف."
            },
            {
              "text": "لا يحدث شيء",
              "correct": false,
              "feedback": "لا! شيء خطير سيحدث — تجمّد الصفحة!"
            }
          ]
        },
        {
          "question": "## سؤال 5: ما الذي تفعله كلمة `return` في الدالة؟",
          "options": [
            {
              "text": "تحذف الدالة",
              "correct": false,
              "feedback": "لا! `return` لا تحذف شيئاً."
            },
            {
              "text": "تُعيد قيمة من الدالة إلى مكان الاستدعاء",
              "correct": true,
              "feedback": "ممتاز! `return` ترجع نتيجة الدالة لمن استدعاها."
            },
            {
              "text": "تُكرر الدالة",
              "correct": false,
              "feedback": "لا! للتكرار نستخدم الحلقات."
            },
            {
              "text": "تطبع القيمة على الشاشة",
              "correct": false,
              "feedback": "لا! `console.log` يطبع، أما `return` فترجع القيمة."
            }
          ]
        },
        {
          "question": "## سؤال 6: ما ناتج هذا الكود؟\n\n```javascript\nlet myName = \"ahmed\";\nconsole.log(myName.toUpperCase());\n```",
          "options": [
            {
              "text": "ahmed",
              "correct": false,
              "feedback": "لا! `.toUpperCase()` تحوّل للأحرف الكبيرة، وليس الصغيرة."
            },
            {
              "text": "AHMED",
              "correct": true,
              "feedback": "ممتاز! 🎉 الدالة `.toUpperCase()` تحوّل النص لأحرف كبيرة."
            },
            {
              "text": "Ahmed",
              "correct": false,
              "feedback": "لا! هذا هو النص الأصلي بدون تحويل."
            },
            {
              "text": "5",
              "correct": false,
              "feedback": "لا! الرقم 5 هو طول الكلمة (`.length`) وليس `.toUpperCase()`."
            }
          ]
        },
        {
          "question": "## سؤال 7: ماذا تفعل `arr.push(\"value\")`؟",
          "options": [
            {
              "text": "تحذف أول عنصر في المصفوفة",
              "correct": false,
              "feedback": "لا! pop() تحذف آخر عنصر. push() تُضيف."
            },
            {
              "text": "تُضيف عنصراً جديداً في نهاية المصفوفة",
              "correct": true,
              "feedback": "ممتاز! push() تُضيف عنصراً في آخر المصفوفة."
            },
            {
              "text": "تُضيف عنصراً في بداية المصفوفة",
              "correct": false,
              "feedback": "لا! للإضافة في البداية نستخدم unshift(). push() في النهاية."
            },
            {
              "text": "تطبع المصفوفة",
              "correct": false,
              "feedback": "لا! console.log يطبع، push() تُضيف عنصراً."
            }
          ]
        }
      ],
      "codeExamples": [
        "// 🏆 مشروع الآلة الحاسبة الذكية\n// يستخدم: متغيرات + عمليات + شروط + دوال + مصفوفات\n\n// ===== الدوال الحسابية =====\nfunction calculate(num1, operator, num2) {\n  if (operator === \"+\") return num1 + num2;\n  if (operator === \"-\") return num1 - num2;\n  if (operator === \"*\") return num1 * num2;\n  if (operator === \"/\") {\n    if (num2 === 0) return \"خطأ: لا يمكن القسمة على صفر!\";\n    return num1 / num2;\n  }\n  if (operator === \"%\") return num1 % num2;\n  return \"عملية غير معروفة!\";\n}\n\n// ===== سجل العمليات =====\nlet history = [];\n\nfunction doMath(num1, operator, num2) {\n  let result = calculate(num1, operator, num2);\n  let entry = `${num1} ${operator} ${num2} = ${result}`;\n  history.push(entry);\n  return result;\n}\n\n// ===== جرّب العمليات =====\nconsole.log(\"=== الآلة الحاسبة الذكية ===\");\nconsole.log(doMath(25, \"+\", 17));\nconsole.log(doMath(100, \"-\", 38));\nconsole.log(doMath(7, \"*\", 8));\nconsole.log(doMath(50, \"/\", 4));\nconsole.log(doMath(17, \"%\", 5));\nconsole.log(doMath(10, \"/\", 0));  // ماذا سيحدث؟\n\n// ===== عرض السجل =====\nconsole.log(\"\\n=== سجل العمليات ===\");\nfor (let i = 0; i < history.length; i++) {\n  console.log(`${i + 1}. ${history[i]}`);\n}\nconsole.log(`\\nإجمالي العمليات: ${history.length}`);"
      ],
      "activities": []
    }
  ]
};