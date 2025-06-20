import User from './User.js';

export default function Login(app) {
  
  app.post('/api/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const user = await User.findOne({ username });
      
      if (!user) {
        return res.json({ success: false, message: 'User not found' });
      }
      
      if (user.password !== password) {
        return res.json({ success: false, message: 'Invalid password' });
      }
      
      res.json({ 
        success: true, 
        user: { 
          username: user.username,
          email: user.email
        } 
      });
      
    } catch (error) {
      res.json({ success: false, message: 'Login failed' });
    }
  });

  app.post('/api/signup', async (req, res) => {
    try {
      const { username, password, email } = req.body;
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.json({ success: false, message: 'Username already exists' });
      }
      
      const newUser = new User({
        username,
        password,
        email
      });
      
      await newUser.save();
      
      res.json({ 
        success: true, 
        message: 'Account created! You can now login.' 
      });
      
    } catch (error) {
      res.json({ success: false, message: 'Signup failed' });
    }
  });
}