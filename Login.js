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
          _id: user._id,
          username: user.username,
          email: user.email,
          userId: user.id,
        } 
      });
      
    } catch (error) {
      res.json({ success: false, message: 'Login failed' });
    }
  });

  app.post('/api/signup', async (req, res) => {
    try {
      const { username, password, email, phone, first_name, last_name, bio } = req.body;
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.json({ success: false, message: 'Username already exists' });
      }
      
      const userCount = await User.countDocuments();
      const userId = (1000 + userCount + 1).toString();
      
      const newUser = new User({
        _id: userId,
        username,
        password,
        email,
        phone: phone || "",
        first_name: first_name || "",
        last_name: last_name || "",
        bio: bio || ""
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