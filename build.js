const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const prettier = require('prettier');

// Paths
const templatesDir = path.join(__dirname, 'templates');
const scaffoldPath = path.join(__dirname, 'scaffold.html');
const distDir = __dirname; //path.join(__dirname, 'dist');

// Format HTML using Prettier
const formatHTML = (html) => {
  return prettier.format(html, { parser: 'html' });
};

// Utility to replace the placeholder with the template content
const generateHTML = (scaffold, content) => {
  return scaffold.replace('{{page_content}}', content);
};

// Build a single file
const buildFile = async (fileName) => {
  const scaffold = fs.readFileSync(scaffoldPath, 'utf-8');
  const templatePath = path.join(templatesDir, fileName);
  const templateContent = fs.readFileSync(templatePath, 'utf-8');
  const result = generateHTML(scaffold, templateContent);
  const formattedResult = await formatHTML(result); // Format the HTML with Prettier

  const outputPath = path.join(distDir, fileName);
  fs.writeFileSync(outputPath, formattedResult, 'utf-8');
  console.log(`Built: ${fileName}`);
};

// Build all files in the templates directory
const buildAll = () => {
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

  const templates = fs
    .readdirSync(templatesDir)
    .filter((file) => file.endsWith('.html'));
  templates.forEach(buildFile);
};

// Watch files for changes
const watchFiles = () => {
  chokidar.watch([templatesDir, scaffoldPath]).on('change', (filePath) => {
    console.log(`File changed: ${filePath}`);
    buildAll();
  });
};

// Run the build script
if (process.argv.includes('--watch')) {
  console.log('Watching files...');
  buildAll();
  watchFiles();
} else {
  buildAll();
}
