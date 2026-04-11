const fs = require('fs');
const lessons = JSON.parse(fs.readFileSync('./html-course-extracted.json', 'utf8'));

let js = `// Neo-WAHHa — HTML Course Data (Auto-extracted)
const HTML_COURSE = {
  id: "html",
  title: "تعلّم HTML — مغامرة بناء المواقع",
  icon: "🏗️",
  description: "تعلم أساسيات HTML لبناء صفحات الإنترنت من الصفر",
  color: "#f97316",
  lessons: [
`;

lessons.forEach((l, i) => {
  js += `    {
      id: "html-${i + 1}",
      index: ${i},
      title: ${JSON.stringify(l.title)},
      type: "${l.questions.length > 2 ? 'exam' : l.questions.length > 0 ? 'challenge' : l.code_examples.length > 0 ? 'lesson' : 'intro'}",
      content: ${JSON.stringify(l.content)},
      questions: ${JSON.stringify(l.questions)},
      codeExamples: ${JSON.stringify(l.code_examples)},
      activities: ${JSON.stringify(l.activities)}
    },
`;
});

js += `  ]
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
`;

fs.writeFileSync('./js/data/html-course.js', js);
console.log('Written html-course.js, size:', js.length);
