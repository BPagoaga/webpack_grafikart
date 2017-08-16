import { log2 } from './log.js'
// import * as obj from './log.js'
import config from './config'
import img from '@css/logolord.png'
import css from '@css/app.scss'

console.log(config)
console.log(css)
console.log(img)
console.log('hi')
// console.log(obj)

/**
 * LAZY LOADING
 */
// document.getElementById('button').addEventListener('click', () => {
//     import ('jquery').then($ => {
//         $('body').css('backgroundColor', '#FF0000')
//     })
// })

log2('Salut')
log2('webpack')
