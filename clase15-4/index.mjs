// modulo http
import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'



const app = http.createServer(async(peticion, respuesta)=>{//<-- se va a ejecutar solamente cuando haya una peticion o request
    //console.log (peticion.url)


    if(peticion.method === 'GET')
        if(peticion.url === '/'){
            respuesta.statusCode = 200
            return respuesta.end('estas en la raiz')
        }
        if(peticion.url === '/suma'){
            const resultado = (6 + 6).toString()
            respuesta.statusCode = 200
            return respuesta.end(resultado)
    }
if(peticion.method === 'POST'){
    if(peticion.url === '/proceso-formulario'){
        //
        /*respuesta.on('data', (datos)=>{
            console.log(datos)
        })*/
       return respuesta.end('Se hizo una petición con el metodo POST')
    }

    if(peticion.url === '/guardar-datos'){
        const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
        const datosApi = await respuestaApi.text()
        try{
            await fsp.writeFile(path.join('./datosapi.txt'), datosApi)
            respuesta.statusCode = 201 // 201 = se ha creado el recurso
            return respuesta.end('Datos guardados')
        }catch(e){ 
            respuesta.statusCode = 500 //500 = error de parte del server, dw
            return respuesta.end('Error en el servidor')

        }
    }
}
    //Fallback
    respuesta.statusCode = 404
    respuesta.end('recurso no encontrado')
    
    
    //respuesta.end('SOS RE WACHIN') //<--- siempre en el ultimo lugar -> no se puede ejecutar dos veces 
})

app.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})
