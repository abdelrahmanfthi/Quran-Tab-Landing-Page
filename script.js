import { clickLabelElement, observeElements} from "./utils.js";
const labelElements = document.querySelectorAll('label');
const sectionElements = document.querySelectorAll('section');
labelElements.forEach(clickLabelElement);
observeElements(sectionElements);
