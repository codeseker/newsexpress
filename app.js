// my api key df579f885cf74846b35bfa63bf4f6858

let apiKey = 'df579f885cf74846b35bfa63bf4f6858';
let src = 'in';

let newAccordion = document.getElementById('newAccordion');



const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${src}&apiKey=${apiKey}`, true);


xhr.onload = function display() {
    let json = JSON.parse(this.responseText);
    let article = json.articles;

    let newsHtml = "";
    article.forEach(function (element, index) {

        let news = `<div class="accordion accordion-flush my - 3" id="newAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                Breaking News: ${element["title"]}
                            </button>
                        </h2>
                        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"> ${element["content"]} <a href="${element["url"]}" >Read More at</a>.</div>
                        </div>
                    </div>
            </div>`;
        if (element["content"] != null) {
            newsHtml += news;
        }
    });

    newAccordion.innerHTML = newsHtml;
}

xhr.send();