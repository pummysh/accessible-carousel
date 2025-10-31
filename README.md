# Accessible Carousel Assignment

## 👩‍💻 Author
**Pummy Sharma**

---

## 🎯 Objective
This project implements an **accessible carousel** using **React Slick**, following the **W3C ARIA Carousel Authoring Practices** to ensure it’s usable by both sighted and non-sighted users.

It supports:
- Keyboard navigation
- Screen reader announcements
- Proper ARIA roles and labels
- Seamless slide navigation behavior as per W3C guidelines

---

## 🚀 Live Demo
👉 **Deployed on Netlify:** [https://incandescent-trifle-a01ceb.netlify.app/](https://incandescent-trifle-a01ceb.netlify.app/)  
*(Replace with your actual Netlify URL after deployment.)*

---

## 🧠 Features
- **Keyboard Accessible**
  - `→` / `←` : Move to next or previous slide  
  - `Home` : Jump to first slide  
  - `End` : Jump to last slide  
- **Screen Reader Support**
  - Uses `aria-live="polite"` to announce slide changes.  
  - Proper `role="group"`, `aria-roledescription="slide"`, and `aria-label` attributes.
- **Fully Responsive**
  - Works well on desktop and mobile devices.
- **React Slick Integration**
  - Smooth transitions, focus management, and consistent behavior.

---

## 🛠️ Tech Stack
- **React**
- **React Slick**
- **Vite** (for fast development)
- **Tailwind CSS** (optional, if used)
- **ARIA Roles and Attributes** for accessibility

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-folder>
