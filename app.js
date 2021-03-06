// Add here your javascript code

var search = instantsearch({
  // Replace with your own values
  appId: 'latency',
  apiKey: '6be0576ff61c053d5f9a3225e2a90f76', // search only API key, no ADMIN key
  indexName: 'movies',
  urlSync: true,
});

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    loadingIndicator: true,
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item:
        '<img src={{{image}}} />' +
        '<div class="title">{{{_highlightResult.title.value}}}</div>'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#genre',
    attributeName: 'genre',
    operator: 'or',
    limit: 10,
    searchForFacetValues: true,
    templates: {
      header: 'Genres'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#year',
    attributeName: 'year',
    operator: 'or',
    limit: 10,
    templates: {
      header: 'Years'
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinedValues({
    container: '#current-refined-values',
    clearAll: 'after',
    clearsQuery: true,
    attributes: [
      { name: 'genre', label: 'Genres' },
      { name: 'year', label: 'Years' },
    ],
    onlyListedAttributes: true,
  })
);

search.start();
