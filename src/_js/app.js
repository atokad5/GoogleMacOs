import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import sideBar from './sidebar.js';
import Emails from './email.js';
import Chats from './chat.js';
sideBar();
Emails();
Chats();