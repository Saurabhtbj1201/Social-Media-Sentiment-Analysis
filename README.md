# Social Media Sentiment Analysis Project

A professional web application designed to analyze public sentiment across major social media and e-commerce platforms. Leveraging Machine Learning and Natural Language Processing (NLP), this tool provides real-time insights into user opinions on Twitter, YouTube, and Amazon.

## 🚀 Features

- **🐦 Twitter Analysis**: Detect emotional tone (Positive, Negative, Neutral) in tweets using Logistic Regression.
- **📺 YouTube Analysis**: Evaluate viewer comments with detailed VADER metrics (Compound, Positive, Neutral, Negative scores).
- **🛒 Amazon Review Analysis**: Classify product reviews to gauge customer satisfaction.
- **🎨 Modern UI**: Features a professional Dark Mode interface built with **Material UI (MUI)**.
- **📱 Responsive Design**: Fully optimized for seamless experience on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: 
  - React.js
  - Material UI (@mui/material)
  - React Router
  - Axios
- **Backend**: 
  - Flask (Python)
  - Scikit-learn
  - NLTK (VADER, Stopwords)
  - Gunicorn (Production Server)

## ⚙️ Installation & Running

Follow these steps to set up the project locally.

### Prerequisites
- Node.js & npm installed
- Python 3.8+ installed

### 1. Clone the Repository
```bash
git clone https://github.com/Saurabhtbj1201/Social-Media-Sentiment-Analysis-Project.git
cd Social-Media-Sentiment-Analysis-Minor-Project-main
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
pip install -r requirements.txt
python -m nltk.downloader vader_lexicon stopwords wordnet omw-1.4
python server.py
```
> The backend server will start at `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and start the React app:
```bash
cd frontend
npm install
npm start
```
> The application will open at `http://localhost:3000`.

## ☁️ Deployment

This project is configured for easy deployment on **Render** as a single web service.

1. **Push** your code to a GitHub repository.
2. Create a **New Web Service** on Render.
3. Connect your repository.
4. Configure the settings:
   - **Build Command**: `./render-build.sh`
   - **Start Command**: `cd backend && gunicorn server:app`
   - **Environment**: Python 3
5. Click **Deploy**.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨💻 Developer
<div align="center">

### © Made with ❤️ by Saurabh Kumar. All Rights Reserved 2025

<!-- Profile Section with Photo and Follow Button -->
<a href="https://github.com/Saurabhtbj1201">
  <img src="https://github.com/Saurabhtbj1201.png" width="100" style="border-radius: 50%; border: 3px solid #0366d6;" alt="Saurabh Profile"/>
</a>

### [Saurabh Kumar](https://github.com/Saurabhtbj1201)

<a href="https://github.com/Saurabhtbj1201">
  <img src="https://img.shields.io/github/followers/Saurabhtbj1201?label=Follow&style=social" alt="GitHub Follow"/>
</a>

### 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saurabhtbj1201)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/saurabhtbj1201)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/saurabhtbj1201)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/saurabh.tbj)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://gu-saurabh.site)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/9798024301)

---

<p align="center">

  <strong>Made with ❤️ by Saurabh Kumar</strong>
  <br>
  ⭐ Star this repo if you find it helpful!
</p>

![Repo Views](https://komarev.com/ghpvc/?username=Saurabhtbj1201&style=flat-square&color=red)

</div>

---

<div align="center">

### 💝 If you like this project, please give it a ⭐ and share it with others!

**Happy Coding! 🚀**

</div>
