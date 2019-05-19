import Vue from 'vue';
import Router from 'vue-router';

import MainMenu from '../Pages/ManMenu-cos/MainMenu'
import AttributeMenu from '../Pages/ManMenu-cos/AttributeMenu'
import ControlMenu from '../Pages/ManMenu-cos/ControlMenu'
import InsertMenu from '../Pages/ManMenu-cos/InsertMenu'
import PositionMenu from '../Pages/ManMenu-cos/PositionMenu'
import AnimationMenu from '../Pages/ManMenu-cos/AnimationMenu'

// // CATEGORIES
// import CSSPage from '../docs/categories/CSSPage';
// import ComponentsPage from '../docs/categories/ComponentsPage';
// import AdvancedPage from '../docs/categories/AdvancedPage';
// import NavigationMenuPage from '../docs/categories/NavigationMenuPage';
// import FormsMenuPage from '../docs/categories/FormsMenuPage';
// import TablesPage from '../docs/categories/TablesPage';
// import ModalsPage from '../docs/categories/ModalsPage';
// import AddonsPage from '../docs/categories/AddonsPage';

// // FREE
// import AnimationsPage from '../docs/AnimationsPage';
// import AlertPage from '../docs/AlertPage';
// import AccordionPage from '../docs/AccordionPage';
// import BadgePage from '../docs/BadgePage';
// import BackgroundImagePage from '../docs/BackgroundImagePage';
// import BlogComponentsPage from '../docs/BlogComponentsPage';
// import ButtonPage from '../docs/ButtonPage';
// import ButtonsGroupPage from '../docs/ButtonsGroupPage';
// import BreadcrumbPage from '../docs/BreadcrumbPage';
// import CardPage from '../docs/CardPage';
// import CarouselPage from '../docs/CarouselPage';
// import ChartPage from '../docs/ChartPage';
// import CollapsePage from '../docs/CollapsePage';
// import DataTablePage from '../docs/DataTablePage';
// import DropdownPage from '../docs/DropdownPage';
// import EdgeHeaderPage from '../docs/EdgeHeaderPage';
// import FaPage from '../docs/FaPage';
// import FooterPage from '../docs/FooterPage';
// import FormsPage from '../docs/FormsPage';
// import GradientPage from '../docs/GradientPage';
// import GoogleMapsPage from '../docs/GoogleMapsPage';
// import GridPage from '../docs/GridPage';
// import HamburgerMenuPage from '../docs/HamburgerMenuPage';
// import HomePage from '../docs/HomePage';
// import HoverPage from '../docs/HoverPage';
// import IframePage from '../docs/IframePage';
// import InputsPage from '../docs/InputsPage';
// import InputGroupPage from '../docs/InputGroupPage';
// import JumbotronPage from '../docs/JumbotronPage';
// import LiveDemoPage from '../docs/LiveDemoPage';
// import ListGroupPage from '../docs/ListGroupPage';
// import MasksPage from '../docs/MasksPage';
// import MediaPage from '../docs/MediaPage';
// import ModalPage from '../docs/ModalPage';
// import ModalEventsPage from '../docs/ModalEventsPage';
// import ModalExamplesPage from '../docs/ModalExamplesPage';
// import ModalFormsPage from '../docs/ModalFormsPage';
// import ModalStylesPage from '../docs/ModalStylesPage';
// import SelectPageFree from '../docs/SelectPage';
// import NavsPage from '../docs/NavsPage';
// import NavbarPage from '../docs/NavbarPage';
// import NavigationPage from '../docs/NavigationPage';
// import PaginationPage from '../docs/PaginationPage';
// import PanelPage from '../docs/PanelPage';
// import PopoverPage from '../docs/PopoverPage';
// import ProgressBarsPage from '../docs/ProgressBarsPage';
// import SearchPage from '../docs/SearchPage';
// import CustomColorsScrollbarPage from '../docs/CustomColorsScrollbarPage';
// import SliderPage from '../docs/SliderPage';
// import SpinnersPage from '../docs/SpinnersPage';
// import TabsPage from '../docs/TabsPage';
// import TablePage from '../docs/TablePage';
// import TableAdditionalPage from '../docs/TableAdditionalPage';
// import TableResponsivePage from '../docs/TableResponsivePage';
// import TablePaginationPage from '../docs/TablePaginationPage';
// import TableScrollPage from '../docs/TableScrollPage';
// import TableSearchPage from '../docs/TableSearchPage';
// import TableSortPage from '../docs/TableSortPage';
// import TooltipPage from '../docs/TooltipPage';
// import ValidationPage from '../docs/ValidationPage';
// import VideoCarouselPage from '../docs/VideoCarouselPage';
// import VideoPage from '../docs/VideoPage';
// import WavesPage from '../docs/WavesPage';
// import StretchedLinkPage from '../docs/StretchedLinkPage';
// import NotificationsFreePage from '../docs/NotificationsPage';
// import MasonryPage from '../docs/MasonryPage';
// import SwitchPage from '../docs/SwitchPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:MainMenu
    },
    {
      path: '/insert',
      component:InsertMenu
    },
    {
      path: '/attribute',
      component:AttributeMenu
    },
    {
      path: '/control',
      component:ControlMenu
    },
    {
      path: '/position',
      component:PositionMenu
    },
    {
      path: '/animation',
      component:AnimationMenu
    },{
      path: '*',
      redirect:'/'
    }
  ]
});
