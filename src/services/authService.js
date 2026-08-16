// Standalone Frontend Authentication Service (No backend server required)

export const authService = {
  async login(email, password) {
    // Simulate minor network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!email || !password) {
      throw new Error('Email and password are required.');
    }

    if (password.length < 4) {
      throw new Error('Password must be at least 4 characters long.');
    }

    const user = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: email.split('@')[0] || 'Salesforce Architect',
      email: email,
      role: 'Enterprise Architect',
      company: 'Acme Corp',
    };

    const token = 'mock_jwt_token_' + Date.now();

    localStorage.setItem('arqpulse_token', token);
    localStorage.setItem('arqpulse_user', JSON.stringify(user));

    return { user, token };
  },

  async getCurrentUser() {
    const savedUser = localStorage.getItem('arqpulse_user');
    return savedUser ? JSON.parse(savedUser) : null;
  },

  async forgotPassword(email) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (!email) throw new Error('Please enter a valid email address.');
    return { message: `Password reset link sent to ${email}` };
  },

  async socialLogin(provider) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const user = {
      id: `usr_${provider.toLowerCase()}_` + Date.now(),
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`,
      role: 'Enterprise Admin',
      company: 'Global Salesforce Org',
    };

    const token = `mock_oauth_${provider.toLowerCase()}_` + Date.now();

    localStorage.setItem('arqpulse_token', token);
    localStorage.setItem('arqpulse_user', JSON.stringify(user));

    return { user, token };
  },

  logout() {
    localStorage.removeItem('arqpulse_token');
    localStorage.removeItem('arqpulse_user');
  }
};
