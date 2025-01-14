
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Librarys
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faReply,faRetweet,faStar,faEdit,faUser,faEnvelope,faMapMarked,faUserLock } from '@fortawesome/free-solid-svg-icons'

library.add(faReply,faRetweet,faStar,faEdit,faUser,faEnvelope,faMapMarked,faUserLock)

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/App/App');
