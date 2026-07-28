import*as w from"https://esm.sh/@material/material-color-utilities"
import{
	q
}from"./util3.js"
document.getElementById("4").addEventListener("keydown",(e)=>{
	if(e.key==="Enter"){
		document.getElementById("9").innerHTML=q(new w[`Scheme${document.getElementById("1").value}`](w.Hct.from(+document.getElementById("2").value,+document.getElementById("3").value,+document.getElementById("4").value),document.getElementById("6").checked,+document.getElementById("7").value,document.getElementById("8").value),w.hexFromArgb)
	}
})
document.getElementById("5").addEventListener("keydown",(r)=>{
	if(r.key==="Enter"){
		document.getElementById("9").innerHTML=q(new w[`Scheme${document.getElementById("1").value}`](w.Hct.fromInt(w.argbFromHex(document.getElementById("5").value)),document.getElementById("6").checked,+document.getElementById("7").value,document.getElementById("8").value),w.hexFromArgb)
	}
})