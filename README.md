# 💼 HR Dashboard (Advanced)

An interactive and responsive HR performance dashboard built with Next.js, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for HR managers to track employee performance, manage bookmarks, and view detailed insights.

### 🔧 **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)

---

## 🚀 **Challenge: Build a Mini HR Performance Dashboard**

> You're building a Dashboard for HR Managers to track employee performance, manage bookmarks, and view detailed insights.

---

### 📸 **Screenshots & Demo**

**Light Mode**  
<img src="https://github.com/parth5404/hr_dash_flam/raw/main/images/light.png" alt="Light Mode Preview" width="400"/>

**Dark Mode**  
<img src="https://github.com/parth5404/hr_dash_flam/raw/main/images/dark.png" alt="Dark Mode Preview" width="400"/>

### 🎯 **Core Features Implemented**

#### 1. 🏠 **Dashboard Homepage (`/`)**

- Fetches and displays a list of 20 dummy users from an external API.
- Renders responsive user cards with:
  - Full Name, Email, Department, and a randomized performance rating.
  - Buttons to `View Profile` and `Bookmark`.

#### 2. 🔍 **Search & Filter**

- A sticky header with a search bar to filter users by name, email, or department in real-time.
- A dropdown menu to filter users by a single department or performance rating.
- A "Clear Filters" button appears when any filter is active.

#### 3. 👤 **Dynamic User Details Page (`/employee/[id]`)**

- A full-page, responsive profile view with a modern header and user details.
- A tabbed UI with `Overview`, `Projects`, and `Feedback` sections.
- Components for each tab are lazy-loaded with `React.Suspense` to improve performance.

#### 4. 📌 **Bookmark Manager (`/bookmarks`)**

- A protected route that lists all bookmarked employees.
- Includes a "Delete All" button to clear all bookmarks.
- Displays an elegant empty state when no employees are bookmarked.

#### 5. 📊 **Analytics Page (`/analytics`)**

- A dedicated page for data visualizations.
- Includes a radar chart showing department-wise average ratings.
- Includes a bar chart showing a mock trend of new bookmarks over the last 7 days.

---

### ⚙️ **Technical Requirements Met**

- Built with the **Next.js App Router**.
- Uses **client-side data fetching** for the main user list.
- **Custom Hooks**:
  - `useSearch`: For fuzzy-searching employees.
  - `useAvg`: For calculating average department ratings.
- **Reusable Components**:
  - `Card`, `Button`, `Input`, `DropdownMenu`, `Tooltip`, etc.
- **Responsive Design**: The entire application is fully responsive from mobile to desktop.
- **Dark/Light Mode**: A theme toggle is available on all pages to switch between light and dark modes.

---

### 🧠 **Advanced Expectations Met**

- **State Management**: Uses **Zustand** for centralized and efficient state management.
- **Component-level Loading**: Implemented lazy loading for tabbed content on the profile page using `React.Suspense`.
- **Modular Folder Structure**: The project is organized into `components/`, `hooks/`, `app/`, and `store/` directories.
- **Form Handling**: A fully functional form is implemented in the "Feedback" tab and the "Create User" page.

---

### ⭐ **Bonus Features Implemented**

- **Authentication**: Implemented a mock login screen using **NextAuth.js**, with the `/bookmark` route protected.
- **Create User Page**: A full-page form with validation for adding new users to the system.

---

### 📦 **Setup & Installation**

To get a local copy up and running, follow these simple steps.

#### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

#### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/hr_dash_flam.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd hr_dash_flam
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

#### Running the Application

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
