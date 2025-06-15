export default function Hello(app) {
  app.get('/home', (req, res) => {
    res.send('You are on home page!')
  })
  app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
  })
}
