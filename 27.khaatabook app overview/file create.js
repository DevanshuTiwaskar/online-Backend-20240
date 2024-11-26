const express = require('express');
const app  = express();
const path = require('path');
const fs = require('fs');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) =>{
    res.send("hey")
})


app.get('/create', (req, res) =>{
    const today = new Date();

        // Extract day, month, and year
        const day = String(today.getDate()).padStart(2, '0'); // Ensure two-digit day
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = today.getFullYear();
    
        const fn = `${day}-${month}-${year}.txt`;
        
        fs.writeFile(`./file/${fn}`,"data",function(err){
            if(err) return res.send("something went wrong");
            else res.send("File created successfully");
        })
})

app.listen(3000, () => console.log('Server started on port 3000'));