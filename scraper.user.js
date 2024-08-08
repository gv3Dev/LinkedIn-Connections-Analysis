// ==UserScript==
// @name         LinkedIn Connections Scraper
// @namespace    http://tampermonkey.net/
// @version      2024-08-08
// @description  Scrapes connections for analysis and predictions
// @author       GV3Dev
// @match        https://www.linkedin.com/mynetwork/invite-connect/connections/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==



let scraperIsOn = false, scraper = null, scrapedData = [];

const stopScraping = (btn, max, header) => {
    clearTimeout(scraper);
    scraper = null;
    scraperIsOn = false;
    btn.innerText = "Start Scraping";
    btn.style.backgroundColor="springgreen";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    alert(`Click the export button to download a csv of ( ${scrapedData.length} / ${max} ) scraped connections.\n\nRefresh page to re-scrape.`);
};

const handleScrapeState = (btn) => {
    const header = document.querySelector("header.mn-connections__header>h1");
    const max = parseInt(header.innerText);
    if (!scraperIsOn) {
        scraperIsOn = true;
        btn.innerText = "Stop Scraping";
        btn.style.backgroundColor = "red";
        scrapeConnections(btn, max, header);
    } else {
        stopScraping(btn, max, header);
    }
};

const scrapeConnections = (btn, max, header) => {
    const connections = document.querySelectorAll("li.mn-connection-card.artdeco-list");
    const needsScraping = Array.from(connections).filter((elem) => (!elem.hasAttribute("scrapedALR")));
    const wave = needsScraping.map((connection) => {
        let scrapedJSON = {};
        scrapedJSON.userURL = connection.querySelector("a").href;
        scrapedJSON.userPFP = connection.querySelector("img.presence-entity__image").src;
        scrapedJSON.userOccupation = connection.querySelector("span.mn-connection-card__occupation").innerText;
        scrapedJSON.name = connection.querySelector("span.mn-connection-card__name").innerText;
        connection.setAttribute("scrapedALR", "true");
        return scrapedJSON;
    });

    scrapedData = scrapedData.concat(wave);
    window.scrollBy({ top: 300, left: 0, behavior: 'smooth' });

    const showMore = document.querySelector("button.scaffold-finite-scroll__load-button");
    if (showMore) { showMore.click(); }

    if (scrapedData.length >= max) {
        stopScraping(btn, max, header);
    } else {
        scraper = setTimeout(() => scrapeConnections(btn, max, header), 250);
    }
};

const handleExportData = (btn)=>{
    if(scrapedData.length>0){
        downloadCSV(JSONtoCSV(scrapedData), "LinkedIn-Connections.csv");
    }else{
        alert("Please scrape some of your connections before trying to export 🤔");
    }
}

const main = async () => {
    const appendBox = await waitForElem(".scaffold-layout__aside");
    const scrapeControls = document.createElement("div");
    scrapeControls.className = "scrape-controls";
    scrapeControls.innerHTML = `
        <button id="scrape-state-switch" class="scraper-button">Start Scraping</button>
        <button id="scrape-export" class="scraper-button">Export as CSV</button>
    `;
    appendBox.append(scrapeControls);
    const scrapeStateBtn = scrapeControls.querySelector("#scrape-state-switch");
    const scrapeExport = scrapeControls.querySelector("#scrape-export");

    scrapeStateBtn.addEventListener("click", () => { handleScrapeState(scrapeStateBtn); });
    scrapeExport.addEventListener("click", () => { handleExportData(scrapeExport) });

    const style = document.createElement("style");
    style.textContent = `
        .scrape-controls {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 300px;
            position: fixed;
            height: 30px;
            margin: 5px;
            padding: 5px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .scraper-button {
            flex: 0.5;
            padding: 5px 10px;
            background: white;
            border:1px solid black;
            color: black;
            border-radius: 5px;
            outline: none;
            cursor: pointer;
            margin-left: 5px;
        }
        #scrape-state-switch {
           background-color: springgreen;
       }
    `;
    document.head.append(style);
};

main();



// Helper Functions


function downloadCSV(csv, filename) {
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function JSONtoCSV(arr) {
    if (!arr || !arr.length) return '';
    const headers = Object.keys(arr[0]);
    const rows = arr.map(row => headers.map(header => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    return csv;
}


async function waitForElem(selector) {
    return new Promise((resolve) => {
        const checkElement = () => {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
            } else {
                requestAnimationFrame(checkElement);
            }
        };
        checkElement();
    });
}
