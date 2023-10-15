const express=require('express');
const connecttodb=require('./db');
const cors = require('cors');
const app = express();
const port = 5000;
const cookieParser=require('cookie-parser');

connecttodb();
app.use(cors());

app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/auth',require('./Routes/auth'));
app.use('/notes',require('./Routes/notes'));
app.use('/blogs',require('./Routes/blogg'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

