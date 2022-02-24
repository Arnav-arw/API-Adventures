const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Server listening on port ${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        name: 'T-shirt',
        brand: 'Nike',
        size: 'M',
        color: 'red',
        cost: '$10'
    }) // 200 is the status code for OK
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!'})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});