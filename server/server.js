const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const cheerioTableParser = require('cheerio-tableparser');

const SUBJECT_CODE = 'ELEN30009';
const URL_BASE = 'https://sws.unimelb.edu.au/2018/Reports/List.aspx?objects=ELEN30009&weeks=1-23&days=1-7&periods=1-21&template=module_by_group_list';

axios.get(URL_BASE)
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html, {
                normalizeWhitespace: true,
                xmlMode: true
            });   

            let classList = [];

            cheerioTableParser($);
            const data = $('.cyon_table').parsetable(true, true, true);
            // console.log('Table',data);

            const table = $('tbody');
            
            $('tbody tr').each((i, elem) => {

            });

            console.log(classList);


                        

        }
    }, (error) => console.log(error));

    
    

app.listen(3000, () => {
    console.log("Server is running!");
})