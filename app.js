require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res)=>{
	res.render('index')
})

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => console.log("Listening on port " + PORT))
