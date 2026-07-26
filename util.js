export function q(w,e){
	let r=``
	if(typeof w[1]==="object"){
		r+=`
			<li>${w[0]}</li>
			<ol>
		`
		for(let t of Object.entries(w[1])){
			r+=q(t,e)
		}
		r+=`
			</ol>
		`
	}
	else if(typeof w[1]==="number"){
		r+=`
			<li>
				<span style="color: ${e(w[1])}">\u2588</span>
				<span style="opacity: 0.75">${w[0]}</span>
				<span>${e(w[1])}<span>
				<span style="opacity: 0.25">${w[1]}</span>
			</li>
		`
	}
	else{
		r+=`
			<li>
				<span style="opacity: 0.75">${w[0]}</span>
				<span style="opacity: 0.25">${w[1]}</span>
			</li>
		`
	}
	return r
}