import User from './User.js';
import { v4 as uuidv4 } from 'uuid';

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
      
      // changing id from number to string
      // const userCount = await User.countDocuments();
      const userId = uuidv4();
      
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
      console.log(error)
      res.json({ success: false, message: 'Signup failed' });
    }
  });
}