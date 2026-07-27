export function q(w){
	return(e)=>{
		return w((((e>>24)&0xff)<<24)|((e&0xff)<<16)|(((e>>8)&0xff)<<8)|((e>>16)&0xff))
	}
}