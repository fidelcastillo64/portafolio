import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faThumbsUp,
  faBars,
  faUser,
  faInfo,
  faFolder,
  faHouse,
  faGraduationCap,
  faChartLine,
  faLaptopCode,
  faChevronDown,
  faXmark,
  faArrowRight,
  faMessage,
  faFileArrowDown,
  faSun,
  faMoon,
  faLightbulb,
  faCode,
  faDatabase

} from '@fortawesome/free-solid-svg-icons';

// Función para inicializar y añadir los iconos a la librería
export function initializeFontAwesome() {
  library.add(
    faUserSecret,
    faThumbsUp,
    faBars,
    faUser,
    faInfo,
    faFolder,
    faHouse,
    faGraduationCap,
    faChartLine,
    faLaptopCode,
    faChevronDown,
    faXmark,
    faArrowRight,
    faMessage,
    faFileArrowDown,
    faSun,
    faMoon,
    faLightbulb,
    faCode,
    faDatabase
  );
}