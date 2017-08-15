import { log2 } from './log.js'
import * as obj from './log.js'

console.log(obj)

document.getElementById('button').addEventListener('click', () => {
    import ('jquery').then($ => {
        $('body').css('backgroundColor', '#FF0000')
    })
})

log2('Salut')
log2('webpack')