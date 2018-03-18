const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const SUBJECT_CODE = 'COMP20005';
const URL_BASE = 'https://sws.unimelb.edu.au/2018/Reports/List.aspx?objects='+ SUBJECT_CODE + '&weeks=1-22&days=1-7&periods=1-21&template=module_by_group_list';

axios.get(URL)
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);   

            console.log($);

        }
    }, (error) => console.log(error));


