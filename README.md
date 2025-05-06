# 🚀 Node.js & TypeScript Project Setup

> **Optimize your backend development with TypeScript, Express, and Axios!**

## 📌 Features
- ⚡ TypeScript for strong typing and maintainability
- 📦 Express for efficient server-side development
- 🔥 Axios for flexible API communication

---

## 🛠 Installation & Setup

### 1️⃣ Install TypeScript Globally
```bash
npm install --global typescript ts-node ts-node-dev
```
Verify installation:
```bash
tsc -v
npm list -g --depth=0
```
Install a specific TypeScript version:
```bash
npm install --global typescript@4.x.x
```
Uninstall TypeScript:
```bash
npm uninstall --global typescript
```
Initialize TypeScript configuration:
```bash
tsc --init
```

---

### 2️⃣ Install Dependencies
```bash
npm i express @types/express --save-dev
npm i axios @types/axios --save-dev
```

---

## 📜 Usage & Running the Project

### 3️⃣ Compile & Run TypeScript
Compile:
```bash
tsc server.ts
node server.js
```
Run without compiling separately:
```bash
ts-node server.ts
```
Run with auto-restart (like nodemon for TypeScript):
```bash
ts-node-dev src/server.ts
```

---

## 🏗 Project Structure
```
📦 project-root
 ┣ 📂 src
 ┃ ┣ 📜 server.ts
 ┃ ┣ 📜 config.ts
 ┃ ┗ 📂 utils
 ┣ 📂 dist
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

---

## ⚙️ Environment Configuration
Set up `.env` file:
```plaintext
PORT=3000
DB_URL=<your-database-url>
```

---

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project. Let's build something great together!

---

## 📜 License
This project is licensed under the MIT License.

---

💡 **Happy Coding!** 🎉
