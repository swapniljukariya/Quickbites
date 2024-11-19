# QuickBites 🍔🍕  

**QuickBites** is a modern food ordering web application where users can browse restaurants, filter them based on preferences, and search for their favorite meals. Built using React, it provides a smooth and interactive user experience. It also includes a **Contact Us** page powered by **EmailJS**, allowing users to send messages without requiring a backend.

---

## 🌟 Features

1. **Restaurant Listings**:
   - Displays a dynamic list of restaurants with real-time data.
2. **Search Functionality**:
   - Allows users to search for restaurants by name or keyword.
3. **Filters**:
   - Filter restaurants by:
     - Ratings (4.3+)
     - Fast Delivery
     - Pure Veg Options
     - Price Categories (Low, Mid).
4. **Carousel**:
   - A visually appealing carousel showcasing restaurant highlights.
5. **Offline Support**:
   - Notifies users when offline and prevents unnecessary actions.
6. **Responsive Design**:
   - Fully responsive for desktops, tablets, and mobile devices.
7. **State Management**:
   - Combines **Redux** and **Context API** for efficient state handling.
     - **Redux**: For managing global restaurant and filter states.
     - **Context API**: For lightweight and component-specific state management.
8. **Contact Form**:
   - Integrated **EmailJS** service for sending messages directly from the app without a backend.

---

## 🛠️ Technologies Used

### Frontend:
- **React.js**: UI development.
- **Redux**: State management for global data.
- **Context API**: For local state management.
- **Tailwind CSS**: For styling.
- **FontAwesome**: For icons.

### Backend:
- **Swiggy APIs**: To fetch real-time restaurant data.

### Email Service:
- **EmailJS**: For sending messages directly from the app without requiring a backend.

### Development Tools:
- **CRA**: For faster React builds.
- **ESLint**: For code linting.
- **Git/GitHub**: For version control and collaboration.


src/
├── Components/
├── CustomHooks/
├── Utils/
├── App.css
├── App.test.js
├── Constant.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js
├── style.css






## 📩 Adding EmailJS Integration for Contact Page

### 1. **Install the EmailJS Library**
Run the following command to install EmailJS:

```bash
npm install emailjs-com
```

### 2. **Create a Contact Form**
Add the following code to `src/pages/Contact.jsx`:

```jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',  // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        form.current,
        'your_user_id'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name:</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
```

### 3. **EmailJS Configuration**
1. Go to [EmailJS Dashboard](https://www.emailjs.com/) and:
   - Create an account.
   - Set up an email service.
   - Create an email template.

2. Replace the placeholders in the above code:
   - `'your_service_id'`: Your service ID from EmailJS.
   - `'your_template_id'`: Your email template ID.
   - `'your_user_id'`: Your public key from EmailJS.

### 4. **Add Contact Page to Router**
Add the `Contact` page route to your `App.js` file:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```

### 5. **Test the Form**
Navigate to `/contact` in your app, fill out the form, and test the email functionality.

---

## 🚀 How to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/swapniljukariya/Quickbites
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd quickbites
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
5. **Open in Browser**:
   - Visit `http://localhost:5173` to view the app.

---

## 📈 Future Improvements

1. **User Authentication**:
   - Add login/signup functionality.
2. **Order Management**:
   - Allow users to place and track orders.
3. **Restaurant Reviews**:
   - Add a feature for users to leave ratings and reviews.
4. **Backend Integration**:
   - Replace mock APIs with a custom Node.js/Express backend.

---

