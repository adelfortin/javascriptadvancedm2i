const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Répertoire créé : ${dirPath}`);
    } else {
        console.log(`Le répertoire existe déjà : ${dirPath}`);
    }
};

const generateTreeFromText = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
        const dirPath = line.trim();
        if (dirPath) {
            const fullPath = path.join(__dirname, dirPath);
            createDirectory(fullPath);
        }
    }
};

const filePath = '../arborescence.txt'; 
generateTreeFromText(filePath);
