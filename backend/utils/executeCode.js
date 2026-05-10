const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const executeCode = (code, language, input = "") => {
  return new Promise((resolve, reject) => {
    let filePath;
    let command;

    try {
      // ================= JS =================
      if (language === "javascript") {
        filePath = path.join(__dirname, "code.js");
        fs.writeFileSync(filePath, code);

        command = `echo "${input}" | node "${filePath}"`;
      }

      // ================= PYTHON =================
      else if (language === "python") {
        filePath = path.join(__dirname, "code.py");
        fs.writeFileSync(filePath, code);

        command = `echo "${input}" | python "${filePath}"`;
      }

      // ================= C++ =================
      else if (language === "cpp") {
        filePath = path.join(__dirname, "code.cpp");
        const outputPath = path.join(__dirname, "code.exe");

        fs.writeFileSync(filePath, code);

        command = `g++ "${filePath}" -o "${outputPath}" && echo "${input}" | "${outputPath}"`;
      }

      // ================= JAVA =================
      else if (language === "java") {
        filePath = path.join(__dirname, "Main.java");

        fs.writeFileSync(filePath, code);

        command = `javac "${filePath}" && echo "${input}" | java -cp "${__dirname}" Main`;
      }

      // ================= INVALID =================
      else {
        return reject("Unsupported language");
      }

      // ================= EXECUTE =================
      exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
        if (error) {
          return reject(stderr || error.message);
        }
        if (stderr) {
          return reject(stderr);
        }

        resolve(stdout);
      });

    } catch (err) {
      reject(err.message);
    }
  });
};

module.exports = executeCode;