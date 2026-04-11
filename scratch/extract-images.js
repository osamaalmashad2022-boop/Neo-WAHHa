const fs = require('fs');
const content = fs.readFileSync('c:/Users/mm/Desktop/Neo-WAHHa/______HTML_______________________________static/lesson-data.js', 'utf8');

const b64 = content.replace('const lessonData = "', '').replace('";', '').trim();
const jsonStr = Buffer.from(b64, 'base64').toString('utf8');
const data = JSON.parse(jsonStr);

function findImages(obj) {
    if (!obj) return;
    if (typeof obj === 'object') {
        if (obj.type === 'imageTile' && obj.data && obj.data.image) {
            console.log(obj.data.image.altText + " ||| " + obj.data.image.source);
        } else if (obj.backgroundImage && obj.backgroundImage.source) {
            console.log(obj.backgroundImage.altText + " ||| " + obj.backgroundImage.source);
        }
        for (const key in obj) {
            findImages(obj[key]);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach(findImages);
    }
}

findImages(data);
