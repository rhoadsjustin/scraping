const puppeteer = require('puppeteer');

let scrape = async () => {
    // Actual Scraping goes Here...
    const browser = await puppeteer.launch({healess: false});
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');

    // Return a value
    const result = await page.evaluate(() => {
        // return something
        let data = [];
        let elements = document.querySelectorAll('.product_pod');

        for(var element of elements){
            let title = element.childNodes[5].innerText;
            let price = element.childNodes[7].children[0].innerText;
            
            data.push({title, price})
        }
        return data;

    })
    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});