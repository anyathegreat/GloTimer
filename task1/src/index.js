import updateTimer from './modules/timer.js';
import menu from "./modules/menu.js";
import modal from "./modules/modal.js"
import scroll  from "./modules/scroll.js";
import calculator from './modules/calculator.js';
import validator from './modules/validator.js';
import tabs from './modules/tabs.js';
import {slider} from "./modules/slider.js"


updateTimer();
menu();
modal();
scroll();
calculator();
validator();
tabs();
slider(".portfolio-content", ".portfolio-item");