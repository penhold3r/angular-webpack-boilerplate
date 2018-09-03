/** --------------------------------------------------------
*
*  @file Angular App 
*  @copyright 2018
*  @author penholder designerd
*  @version 1.0
*
*/
//--------------------------------------------------------
// modules
import M from 'materialize-css';
import './modules/App';
// styles
import '../styles/index.scss';
import 'materialize-css/sass/materialize.scss';
//--------------------------------------------------------
//>>     DOM READY
/**
 * @param {Function} callback - function to call after DOM is ready
 */
//--------------------------------------------------------
const domReady = callback => {
   document.readyState === 'interactive' || document.readyState === 'complete'
      ? callback()
      : document.addEventListener('DOMContentLoaded', callback);
};
/**
 * @callback Main - callback function of domReady()
 */
const Main = () => {

   M.AutoInit();
};
//
domReady(Main);
//--------------------------------------------------------