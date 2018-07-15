$(document).ready(() => {

	$('#searchForm').submit(e => {
		e.preventDefault();

		var searchWord = $('#searchText').val();

		// console.log(searchWord);

		getWordDefinitions(searchWord);
	})
	// document.getElementById('searchForm').addEventHandler('submit', (e) => {
	// 	e.preventDefault();
	// })
})

function getWordDefinitions(searchWord) {

	var baseApi = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/";
	const app_id = "4cf9449f";
	const app_key = "e8446653a29df554281def02e7692cec";
	searchWord = searchWord.toLowerCase();
	var ecodedSearchWord = encodeURIComponent(searchWord);
	var api = baseApi + ecodedSearchWord;
	var merKey = '3199599e-55e7-4f2d-8401-b0f94267520b';
	var merUrl = 'https://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + ecodedSearchWord + '?key=' + merKey;

	$.ajax({
		// beforeSend: function(xhrObj){
  //               xhrObj.setRequestHeader("Accept","application/json");
  //               xhrObj.setRequestHeader("app_id","4cf9449f");
  //               xhrObj.setRequestHeader("app_key","f93a38a43c97cd0063b0756707f8e032");
  //       },
		type: 'GET',
		url: merUrl,
		// dataType: 'jsonp',
		// contentType: "application/json;charset=utf-8",
		// headers: {
		// 	"Accept": "application/json",
  // 			"app_id": "4cf9449f",
  // 			"app_key": "e8446653a29df554281def02e7692cec"
		// },
    	// async: false,
		success: (data, textStatus, jqXHR) => {
    	// $('div#preloader').addClass('hidden');
			console.log(data);
			// console.log(data.query.pages);
			// var pages = data.query.pages;
			// var output = "";
			// $.each(pages, (pageId, page) => {
			// 	// console.log(page.title);
			// 	output += `
			// 		<div class="well">
			// 			<h4>${page.title}</h4>
			// 			<hr>
			// 			<div id="extract">${page.extract}</div>
			// 			<button class="btn btn-primary" onclick="openWikiPage('${page.title}')" id="viewButton" href="#" target="_blank">View Full Article</button>
			// 		</div>

			// 	`;
			// });

			// $('#results').html(output);
			
			// $('#searchForm').find('input:text').val('');
			// // formReset();
		}
	});
}