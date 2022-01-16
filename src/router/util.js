import $router from "./index.js"

function toName(name, params) {
	if (!!!name) {
		return;
	}
	console.log("params", params);
	return $router.push({
		"name": name,
		"params": params
	});
};

function toPath(path, query) {
	if (!!!path) {
		return;
	}
	console.log("query", query);
	return $router.push({
		"path": path,
		"query": query
	});
};

function newWindow(href, type) { //,parent
	let validate = ['_parent', '_media'].includes(type);
	if (validate) {
		return window.open(href, type);
	}
	window.open(href, '_parent');
};
const functions = {
	toName:toName,
	toPath:toPath,
	newWindow:newWindow
}

function getValueBykey (array,key) {
	let value ;
	for (let item in array) {
		// console.log(item)
		if(item == key) value = functions[item];
	}
	// console.log(value)
	return value;
}

function toRoute({
	type,url,params
}) {
	console.log(type)
	const keys = Object.keys(functions);
	// ['toName', 'toPath','newWindow']
	let validate = keys.includes(type);
	if (validate) {
		let to = getValueBykey(functions,type);
		to&&to(url,params)
	}
}
export default {
	toRoute:toRoute,
	...functions,
}
