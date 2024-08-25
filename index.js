import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

const user_id = "mekala_manikanta_09102003";
const email = "mekala.manikanta2021@vitstudent.ac.in";
const roll_number = "21BEC0992";

app.get('/bfhl', (req, res) => {
  res.json({"operation_code":1});
});

app.post('/bfhl', (req, res) => {
  if (req.body == undefined) {
    res.json({"is_success":false, "error": "Invalid request"})
  }
  const data = req.body.data;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highest_lowercase_alphabet = alphabets.filter(item => item.toLowerCase() === item).sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))[0];
  const highestLowercaseAlphabetArray = highest_lowercase_alphabet.length > 0 ? [highest_lowercase_alphabet[0]] : []; 
  res.json({"is_success":true, "user_id": user_id, "email": email,
    "roll_number": roll_number, "numbers": numbers, "alphabets": alphabets,
    "highest_lowercase_alphabet": highestLowercaseAlphabetArray
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});