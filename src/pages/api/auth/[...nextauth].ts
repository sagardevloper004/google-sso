import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import knex from 'knex';

// Initialize Knex
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite',
  },
  useNullAsDefault: true,
});

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if the user already exists
        const existingUser = await db('users').where({ email: user.email }).first();

        if (!existingUser) {
          // Insert new user into the database
          await db('users').insert({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        console.log('User signed in and saved to database:', user);
        return true; // Allow sign-in
      } catch (error) {
        console.error('Error saving user to database:', error);
        return false; // Reject sign-in on error
      }
    },
    async session({ session, token, user }) {
      // Add custom properties to the session object
      console.log('Session:', session);
      session.user.id = token.sub; // Example: Add user ID to session
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // Modify the JWT token if needed
      console.log('JWT token:', token);
      if (user) {
        token.id = user.id; // Example: Add user ID to token
      }
      return token;
    },
  },
});