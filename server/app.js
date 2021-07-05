const { default: axios } = require('axios')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001;
const path = __dirname + '/views';
app.use(cors());
app.use(express.static(path));

app.get('/', (request, response)=>{
    response.sendFile(path+"index.html")
})

app.get('/products', (request, response) => {
    const { count, skip } = request.query;
    axios.get('https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6').then((res) => {
        const result = res.data.products;
        let filteredData = result;
        if(count && skip) {
            filteredData = result.slice(Number(skip), Number(count) + Number(skip));
        }
        const trimmedData = filteredData.map((product)=>{
            return {
                brand: product.brand,
                productName: product.productName,
                sizes: product.sizes,
                mrp: product.mrp,
                searchImage: product.searchImage,
                productId: product.productId
            }
        })
        response.send({ products: trimmedData, totalCount: result.length });
    })
})

// app.get('/qwe', (req, res)=>{
//     // res.sendFile('../public/index.html')
//     // express.static('public')
//     res.render()
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})