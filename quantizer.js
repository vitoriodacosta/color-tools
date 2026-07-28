import{
	QuantizerCelebi,
	Score,
	hexFromArgb
}from"https://esm.sh/@material/material-color-utilities"
import*as q from"./util.js"
import*as w from"./util2.js"
document.getElementById("1").addEventListener("change",(e)=>{
	document.getElementById("2").src=URL.createObjectURL(e.target.files[0])
	document.getElementById("2").onload=(r)=>{
		URL.revokeObjectURL(r.target.src)
		document.getElementById("3").getContext("2d").drawImage(document.getElementById("2"),0,0,64,64)
		document.getElementById("4").innerHTML=q.q(Score.score(QuantizerCelebi.quantize(new Uint32Array(document.getElementById("3").getContext("2d").getImageData(0,0,64,64).data.buffer),128)),w.q(hexFromArgb))
	}
})