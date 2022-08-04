require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'));

const indexRouter = require('./routes/routes.js');
app.use('/',indexRouter)

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => console.log("Listening on port " + PORT))

