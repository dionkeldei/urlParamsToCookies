import UrlParams from './urlParams'
import Cookies from './cookie'

var params = UrlParams.get()

function init(){
  for(var x in params){
    Cookie.set(x,params[x],1)
  }
}

init()
