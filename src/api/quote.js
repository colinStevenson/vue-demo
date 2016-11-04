const _quote = {
	Name: "Microsoft",
	LastPrice: 52.80
}

export default {
	getQuote (cb) {
		setTimeout(() => cb(_quote), 100)
	}
}