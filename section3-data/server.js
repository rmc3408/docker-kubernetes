const fs = require('fs')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/feedback', express.static('feedback'))

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'feedback.html')
  console.log('Path', filePath)
  res.sendFile(filePath)
})

app.get('/exists', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'exists.html')
  res.sendFile(filePath)
})

app.post('/create', async (req, res) => {
  const { title, text: content } = req.body

  const adjTitle = title.toLowerCase()

  const tempFilePath = path.join(__dirname, 'temp', adjTitle + '.txt')
  const finalFilePath = path.join(__dirname, 'feedback', adjTitle + '.txt')

  fs.writeFileSync(tempFilePath, content)
  let fileExists = fs.existsSync(finalFilePath)

  if (fileExists) {
    res.redirect('/exists')
  } else {
    fs.copyFileSync(tempFilePath, finalFilePath)
    fs.unlinkSync(tempFilePath)
    res.redirect('/')
  }
})

app.listen(80, () => console.log('Listening on port 80'))
