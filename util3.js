export function q(w,e){
	let r=``
	for(let t in Object.getOwnPropertyDescriptors(Object.getPrototypeOf(Object.getPrototypeOf(w)))){
		if(typeof w[t]==="number"){
			r+=`
				<li>
					<span style="color: ${e(w[t])}">\u2588</span>
					<span style="opacity: 0.66">${t}</span>
					${e(w[t])}
					<span style="opacity: 0.33">${w[t]}</span>
				</li>
			`
		}
		else{
			r+=`
				<li>
					<span style="opacity: 0.66">${t}</span>
					<span style="opacity: 0.33">${w[t]}</span>
				</li>
			`
		}
	}
	return r
}