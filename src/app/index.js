/** --------------------------------------------------------
 *
 *  @file Angular App
 *  @copyright 2019
 *  @author penholder designerd
 *  @version 1.2
 *
 */
//--------------------------------------------------------
// modules
import M from 'materialize-css'
import './App'
// styles
import '../styles/index.scss'
//--------------------------------------------------------
//>>     DOM READY
/**
 * @param {Function} callback - function to call after DOM is ready
 */
//--------------------------------------------------------
const domReady = callback => {
	document.readyState === 'interactive' || document.readyState === 'complete'
		? callback()
		: document.addEventListener('DOMContentLoaded', callback)
}
//
domReady(() => {
	M.AutoInit()
	console.log('DOM')
})
//--------------------------------------------------------
