let news = [];
let page = 1;
async function fetchNews() {
	let API_KEY = 'a23ef4dd350d42109aeedbc2fbaf292c';
	let url = `https://newsapi.org/v2/everything?q=news&apiKey=${API_KEY}&page=${page}`;
	let result = await fetch(url);
	let data = await result.json();
	console.log(data);
	news = news.concat(data.articles);
	console.log('news', news);
	renderNews(news);
	renderCount(news);
	page++;
}

function renderNews(newsList) {
	const html = newsList.map(article => {
		return `<div class="card m-4">
							<img src="${article.urlToImage}" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${article.title}</h5>
								<p class="card-text">${article.content}</p>
								<a class="btn btn-primary" href="${article.url}" role="button">Read more</a>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									<h6 class="far fa-newspaper">&nbsp;&nbsp;${article.source.name}</h6> <br/>
									<h6 class="far fa-clock">&nbsp;&nbsp;${moment(article.publishedAt).fromNow()}</h6></li>
								</li>
							</ul>
						</div>`;
	});
	document.getElementById('articles-list').innerHTML = html.join('');
}

function renderCount(articles) {
	document.getElementById('count').innerHTML = articles.length;
}

fetchNews();