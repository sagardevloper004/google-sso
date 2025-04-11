# Next.js Google Single Sign-On with NextAuth

This project demonstrates how to implement Google Single Sign-On (SSO) in a Next.js application using NextAuth.js for authentication.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js (version 12 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nextjs-google-sso
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env.local` file in the root of the project and add your Google Client ID and Client Secret:

   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

   You can obtain the Client ID and Client Secret by creating a project in the [Google Developer Console](https://console.developers.google.com/).

### Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## get sql database table 

1. sqlite3 database.sqlite
2. SELECT * FROM users;

### Features

- Google Single Sign-On authentication
- Custom navigation bar
- Responsive design

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgments

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Google Developer Console](https://console.developers.google.com/)"# google-sso" 
