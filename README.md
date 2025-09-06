# 🎴 Memory Card Game  

> A fun and minimalistic memory card game built with **React.js**.  
Challenge yourself with different difficulty levels, beat the timer, and collect the highest score!  

---

## 📛 Badges
<p align="center">
  <img src="https://img.shields.io/github/stars/USERNAME/memory-card-game?style=for-the-badge&logo=github" alt="GitHub stars" />
  <img src="https://img.shields.io/github/license/USERNAME/memory-card-game?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/React-18.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/npm-9.0.0-CB3837?style=for-the-badge&logo=npm" alt="NPM" />
</p>

---

## 🚀 Live Demo  
👉 [Play Memory Card Game here!](https://USERNAME.github.io/memory-card-game/)  

*(Ganti `USERNAME` dengan username GitHub kamu)*  

---

## ✨ Features
- 🕹️ **Memory Game** with cute emoji cards  
- ⏱️ **Timer** to track how fast you can finish  
- ⭐ **Score system** (+10 for each correct match)  
- 🎚️ **Multiple difficulty levels** (Easy, Medium, Hard)  
- 🎉 **Confetti celebration** when you win  
- 🔄 **Reset / Play again button**  
- 💡 Built using **React Hooks** (`useState`, `useEffect`)  
- 🎨 Minimalist & fun UI with CSS animations  

---

## 🚀 Tech Stack
- [React.js](https://react.dev/) – UI library  
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – Styling & animations  
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  

---

## 📸 Preview  
![preview](https://via.placeholder.com/800x400.png?text=Memory+Card+Game+Preview)  
*(Ganti dengan screenshot aplikasi kamu)*

---

## 🛠️ Installation & Setup (Local)
Clone repo ini dan jalankan secara lokal:  

```bash
# Clone repository
git clone https://github.com/USERNAME/memory-card-game.git

# Masuk ke folder
cd memory-card-game

# Install dependencies
npm install

# Jalankan server lokal
npm start
```

Game akan berjalan di:  
👉 `http://localhost:3000`

---

## 🌍 Deploy ke GitHub Pages
1. Install package untuk deploy:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Tambahkan ke `package.json`:  
   ```json
   "homepage": "https://USERNAME.github.io/memory-card-game",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy dengan perintah:
   ```bash
   npm run deploy
   ```
4. Akses game di:  
   👉 `https://USERNAME.github.io/memory-card-game`

---

## 🎮 Cara Bermain
1. Pilih tingkat kesulitan: **Mudah, Sedang, atau Sulit**  
2. Klik kartu untuk membukanya  
3. Cocokkan dua kartu dengan emoji yang sama  
4. Dapatkan skor tertinggi dengan waktu tercepat!  
5. Jika semua kartu berhasil dibuka → 🎉 kamu menang dan dapat confetti!  

---

## 📂 Project Structure
```
src/
├── components/
│   ├── Card.js
│   ├── DifficultySelector.js
│   └── Confetti.js
├── App.js
├── index.css
└── index.js
```

---

## 💡 Future Improvements
- 🔊 Sound effects (flip, match, win)  
- 🏆 Highscore & leaderboard system  
- 🌙 Dark mode toggle  
- 📱 Responsive mobile-friendly layout  

---

## 👨‍💻 Author
Developed with ❤️ by [**Your Name**](https://github.com/USERNAME)  

---

⚡ Feel free to fork this repo, improve it, and submit pull requests!  
