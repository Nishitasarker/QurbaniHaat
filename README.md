# 🐂 QurbaniHaat – Modern Livestock Marketplace

**QurbaniHat** is a full-featured digital platform designed to simplify the process of browsing and booking livestock for the holy occasion of Qurbani. Built with a focus on modern web technologies, it offers a seamless experience for users to find cows and goats based on their specific preferences.

---

## 📖 Project Overview
QurbaniHat serves as a bridge between livestock sellers and buyers. In this platform, users can explore a wide variety of animals with detailed specifications like breed, weight, and location. The application includes a secure authentication system, a dynamic booking process, and a personalized user dashboard to manage profile information.

---

## 🛠️ Technologies Used

### **Core Technologies:**
* **JavaScript (ES6+):** The primary programming language used for logic and interactivity.
* **Next.js:** A powerful React framework used for optimized routing and Server-Side Rendering (SSR).
* **React.js:** Used for building a component-based, dynamic user interface.
* **Tailwind CSS:** For crafting a modern, utility-first, and fully responsive design.
* **DaisyUI:** A Tailwind CSS component library used for elegant UI elements like Navbars and Footers.

### **Authentication & Backend:**
* **Better-Auth:** Implemented for secure user authentication, including Google Social Login and session management.
* **JSON Data:** Managed livestock information through a structured JSON data system for fast fetching.

### **Key NPM Packages:**
* **Lottie-React:** For high-quality, lightweight animations to enhance user engagement.
* **React-Hot-Toast:** For providing instant, beautiful feedback via toast notifications.
* **Lucide-React:** For a clean and professional icon set throughout the application.

---

## ✨ Main Features

* **Responsive Layout:** The platform is meticulously designed to be fully responsive across Mobile, Tablet, and Desktop devices.
* **Advanced Sorting:** Users can sort animals by price on the "All Animals" page to find the best fit for their budget.
* **Private Booking System:** A dedicated booking form (accessible only to logged-in users) that allows users to place orders instantly.
* **User Profile & Update:** A secure `/my-profile` route where users can view their information and update their Name and Profile Picture.
* **Social Authentication:** Quick and easy login via Google.
* **Real-time Notifications:** Success and error messages are displayed using toast notifications for a better UX.
* **Custom 404 Page:** A unique "Not Found" page to handle broken links gracefully.

---

## 🚀 Live Demo & Repository
* **Live Site:** [Visit QurbaniHat](https://qurbani-haat-two.vercel.app)
* **GitHub Repository:** [Source Code](https://github.com/Nishitasarker/QurbaniHaat)

---

## 🗺️ Application Routes

| Route | Access Type | Description |
| :--- | :--- | :--- |
| `/` | Public | Hero section, Featured animals, and Qurbani tips. |
| `/animals` | Public | Full livestock list with price sorting. |
| `/login` | Public | Secure login with Email/Password or Google. |
| `/register` | Public | User registration with Profile Image upload link. |
| `/details-page` | **Private** | Detailed animal view and booking form. |
| `/my-profile` | **Private** | User dashboard and profile overview. |

---

## ⚙️ Local Setup Instructions

1.  **Clone the project
```bash
    git clone [https://github.com/nishitasarkerjui/qurbanihat-client.git](https://github.com/nishitasarkerjui/qurbanihat-client.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Setup:** Create a `.env.local` file and add your `BETTER_AUTH_SECRET` and Google Client credentials.
4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

**Developed with ❤️ by [Nishita Sarker Jui](https://github.com/nishitasarkerjui)**