/*

12. Write a JavaScript function to parse an URL.

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));


*/

const URL = 'https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'

function parseUrl(url) {
  let parsedURL = url.split(':') //'https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'
  let protocol = parsedURL[0]

  parsedURL = parsedURL[1].replace('//', '') //tomo el estante y le quito el // inicial

  let host, path, params;
  
  [parsedURL, params]  = parsedURL.split('?'); //sque dos elementos, el host y el resto

  // de la URL restante, saco path(rstante) y host

  [host, ...path] = parsedURL.split('/')

  path = path.reduce((acum, path_elem, id) => acum+= `${id==0?'':'/'}${path_elem}`, '/') //concateno todos los elementos del path dando como valor inicial '/'. La priemra vez, no antecede con '/', para no tenerlo doble

  // de params, saco todos los params
  params = params.split('&') //key=value&key=value

  let params_object = {}; //creo objeto vacio que ire llenando

  params.forEach(q_param => {
    //por cada par lo recorro y voy separando sus partes
    let [key, value] = q_param.split('=')

    params_object[key] = value //le voy agregando cada key,value
  })

  // [path, ...parsedURL] = parsedURL.split('?');//saco todos los elementos del path (exce)

  return {
    protocol,
    host,
    path,
    params: params_object
  }

}

let urlParsed = parseUrl(URL);

console.log(urlParsed);