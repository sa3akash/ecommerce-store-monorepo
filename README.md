# **E-Commerce Monorepo**

This is a **monorepo** for an advanced e-commerce application with a **Node.js API**, a **Next.js Web Client**, and an **Admin Dashboard**. The project is built using modern technologies like TypeScript, Tailwind CSS, and Docker, and includes features like product management, user authentication, payment integration, and more.

---

## **Features**

### **API (Node.js)**
- **RESTful API** built with Express.js.
- **Authentication**: JWT-based user authentication.
- **Product Management**: CRUD operations for products.
- **Order Management**: Create, update, and track orders.
- **Payment Integration**: Stripe payment gateway.
- **Database**: MongoDB for data storage.
- **Advanced Features**:
  - Rate limiting.
  - Request validation.
  - CORS support.
  - Error handling middleware.

### **Web Client (Next.js)**
- **User Authentication**: Login, registration, and password reset.
- **Product Catalog**: Browse products by category, search, and filter.
- **Shopping Cart**: Add/remove products, update quantities.
- **Checkout**: Secure checkout process with Stripe integration.
- **Order History**: View past orders and track their status.
- **Responsive Design**: Tailwind CSS for a modern, responsive UI.
- **Advanced Features**:
  - Server-side rendering (SSR) for better SEO.
  - Static site generation (SSG) for performance.
  - Image optimization with Next.js Image component.

### **Admin Dashboard (Next.js)**
- **Dashboard Overview**: Sales, orders, and user statistics.
- **Product Management**: Add, edit, and delete products.
- **Order Management**: View and update order status.
- **User Management**: View and manage users.
- **Advanced Features**:
  - Role-based access control (RBAC).
  - Real-time updates with WebSocket or polling.
  - Data visualization with charts (e.g., Chart.js).

---

## **Technologies Used**

### **Core Technologies**
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Docker**: Containerization for consistent development and deployment.
- **GitHub Actions**: CI/CD pipeline for automated testing and deployment.

### **Frontend**
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: UI library for building interactive user interfaces.
- **Axios**: HTTP client for API requests.
- **React Hook Form**: Form management library.
- **Zustand**: State management library.

### **Backend**
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Stripe**: Payment gateway for processing payments.

### **DevOps**
- **Docker**: Containerization for consistent environments.
- **Docker Compose**: Orchestration for multi-container applications.
- **GitHub Actions**: CI/CD for automated testing and deployment.

---

## **Project Structure**

```
ecommerce-monorepo/
├── apps/
│   ├── api/                # Node.js API
│   ├── web/                # Next.js Web Client
│   └── admin/              # Next.js Admin Dashboard
├── libs/
│   ├── ui/                 # Shared UI components
│   ├── form/               # Shared form utilities
│   └── network/            # Shared network utilities
├── package.json            # Root package.json
├── tsconfig.json           # Root TypeScript config
├── eslintrc.js             # ESLint configuration
├── prettierrc.js           # Prettier configuration
├── .editorconfig           # EditorConfig
├── Dockerfile              # Dockerfile for the API
├── docker-compose.yml      # Docker Compose for local development
├── .github/
│   └── workflows/          # GitHub Actions workflows
└── README.md               # Project documentation
```

---

## **Getting Started**

### **Prerequisites**
- Node.js (v18 or higher)
- Docker (optional, for containerized development)
- MongoDB (or Docker to run MongoDB locally)
- Stripe API key (for payment integration)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/sa3akash/ecommerce-store-monorepo.git
   cd ecommerce-store-monorepo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `apps/api` folder:
     ```env
     MONGO_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
   - Create a `.env` file in the `apps/web` and `apps/admin` folders:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3001
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the applications:
   - **API**: `http://localhost:5500`
   - **Web Client**: `http://localhost:3002`
   - **Admin Dashboard**: `http://localhost:3003`

---

## **Running with Docker**

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. Access the applications:
   - **API**: `http://localhost:5500`
   - **Web Client**: `http://localhost:3002`
   - **Admin Dashboard**: `http://localhost:3003`

---

## **Scripts**

### **Root Monorepo Scripts**
- `npm run dev`: Start all applications in development mode.
- `npm run build`: Build all applications.
- `npm run lint`: Run ESLint for all applications.
- `npm run format`: Format code using Prettier.
- `npm run test`: Run tests for all applications.

### **API Scripts**
- `npm run dev`: Start the API in development mode.
- `npm run build`: Build the API.
- `npm run start`: Start the API in production mode.

### **Web Client Scripts**
- `npm run dev`: Start the Web Client in development mode.
- `npm run build`: Build the Web Client.
- `npm run start`: Start the Web Client in production mode.

### **Admin Dashboard Scripts**
- `npm run dev`: Start the Admin Dashboard in development mode.
- `npm run build`: Build the Admin Dashboard.
- `npm run start`: Start the Admin Dashboard in production mode.

---

<!-- ## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

--- -->

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Next.js](https://nextjs.org/) for the React framework.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Stripe](https://stripe.com/) for payment integration.
- [Docker](https://www.docker.com/) for containerization.

---

## **Contact**

For questions or feedback, please reach out to:

- **Your Name**
- **Email**: sa2avroo@gmail.com
- **GitHub**: [your-username](https://github.com/sa3akash)

---