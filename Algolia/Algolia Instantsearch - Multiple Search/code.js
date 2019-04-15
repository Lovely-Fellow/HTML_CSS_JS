document.addEventListener("DOMContentLoaded", function(event) { 
	var movies = instantsearch({
	appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'movies',
  searchFunction: function(helper) {
    var query = movies.helper.state.query;
    products.helper.setQuery(query);
    products.helper.search();
    helper.search();
  }
});

var products = instantsearch({
	appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'ikea'
});

var productsHits = instantsearch.widgets.hits({
	container: document.querySelector('#products'),
  hitsPerPage: 3,
  templates: {item: '{{{_highlightResult.name.value}}}'}
});

var moviesHits = instantsearch.widgets.hits({
	container: document.querySelector('#movies'),
  hitsPerPage: 3,
  templates: {item: '{{{_highlightResult.title.value}}}'}
});

var searchBox = instantsearch.widgets.searchBox({
  container: document.querySelector('#searchBox')
});

movies.addWidget(moviesHits);
movies.addWidget(searchBox);
products.addWidget(productsHits);
products.start();
movies.start();

});