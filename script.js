const pdfkit = require('pdfkit');
const fs = require('fs');

const pdf = new pdfkit({ size: 'B5' });
pdf.pipe(fs.createWriteStream("plik.pdf"));
pdf.info.Author = "Eryk Kruszakin";
pdf.registerFont('lato', 'Lato-Regular.ttf');
pdf.registerFont('lato-bold', 'Lato-Bold.ttf');
pdf.font('lato');
pdf.fontSize(20).text("Zespół Szkół Elektrycznych");
pdf.fontSize(16).text("4TR, Kruszakin Eryk");
pdf.image('zse-logo.png', { align: 'left', width: 30});
pdf.font('lato-bold');
pdf.fontSize(14).text("Znane mi technologie Web:", {underline: true});

const punkty = [
  "HTML5, CSS3, ES6",
  "Joomla, WordPress, PrestaShop",
  "Node.js i React"
];

pdf.list(punkty, { bulletRadius: 2,  textIndent: 10,  align: 'left' });
pdf.text("Więcej", {link: 'http://www.google.com'})


pdf.end();
