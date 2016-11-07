const _quotes = {
	"GE" : {
		Name: "General Electric",
		LastPrice: 25.22
	},
	"KO" : {
		Name: "Coke",
		LastPrice: 50
	},
	"MSFT" : {
		Name: "Microsoft",
		LastPrice: 52.80
	}
}

import fetchJsonp from 'fetch-jsonp'

export default {
	getQuote (symbol, cb) {
		fetchJsonp('http://dev.markitondemand.com/Api/Quote/jsonp?symbol=' + symbol)
		.then(function(response){
			return response.json()
		})
		.then(function(json){
			console.log(json)
			cb(json.Data)
		})
		// setTimeout(() => cb(_quotes[symbol] || {}), 100)
	}
}