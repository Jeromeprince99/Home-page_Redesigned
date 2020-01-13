(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LeaderClasses';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./description/description.component */ "./src/app/description/description.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _featureone_featureone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featureone/featureone.component */ "./src/app/featureone/featureone.component.ts");
/* harmony import */ var _featuretwo_featuretwo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./featuretwo/featuretwo.component */ "./src/app/featuretwo/featuretwo.component.ts");
/* harmony import */ var _featurethree_featurethree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./featurethree/featurethree.component */ "./src/app/featurethree/featurethree.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _featurefour_featurefour_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./featurefour/featurefour.component */ "./src/app/featurefour/featurefour.component.ts");
/* harmony import */ var _featurefive_featurefive_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./featurefive/featurefive.component */ "./src/app/featurefive/featurefive.component.ts");
/* harmony import */ var _offline_events_offline_events_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./offline-events/offline-events.component */ "./src/app/offline-events/offline-events.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/testimonials/testimonials.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _testimonial_modal_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./testimonial-modal/testimonial-modal.component */ "./src/app/testimonial-modal/testimonial-modal.component.ts");
/* harmony import */ var _testimonial_modal2_testimonial_modal2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonial-modal2/testimonial-modal2.component */ "./src/app/testimonial-modal2/testimonial-modal2.component.ts");
/* harmony import */ var _testimonial_modal3_testimonial_modal3_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./testimonial-modal3/testimonial-modal3.component */ "./src/app/testimonial-modal3/testimonial-modal3.component.ts");
/* harmony import */ var _testimonial_modal4_testimonial_modal4_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./testimonial-modal4/testimonial-modal4.component */ "./src/app/testimonial-modal4/testimonial-modal4.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _footerbottom_footerbottom_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footerbottom/footerbottom.component */ "./src/app/footerbottom/footerbottom.component.ts");
/* harmony import */ var _descriptioncontainer_descriptioncontainer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./descriptioncontainer/descriptioncontainer.component */ "./src/app/descriptioncontainer/descriptioncontainer.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _description_description_component__WEBPACK_IMPORTED_MODULE_7__["DescriptionComponent"],
                _feature_feature_component__WEBPACK_IMPORTED_MODULE_8__["FeatureComponent"],
                _featureone_featureone_component__WEBPACK_IMPORTED_MODULE_9__["FeatureoneComponent"],
                _featuretwo_featuretwo_component__WEBPACK_IMPORTED_MODULE_10__["FeaturetwoComponent"],
                _featurethree_featurethree_component__WEBPACK_IMPORTED_MODULE_11__["FeaturethreeComponent"],
                _featurefour_featurefour_component__WEBPACK_IMPORTED_MODULE_14__["FeaturefourComponent"],
                _featurefive_featurefive_component__WEBPACK_IMPORTED_MODULE_15__["FeaturefiveComponent"],
                _offline_events_offline_events_component__WEBPACK_IMPORTED_MODULE_16__["OfflineEventsComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__["TestimonialsComponent"],
                _testimonial_modal_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_19__["TestimonialModalComponent"],
                _testimonial_modal2_testimonial_modal2_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialModal2Component"],
                _testimonial_modal3_testimonial_modal3_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialModal3Component"],
                _testimonial_modal4_testimonial_modal4_component__WEBPACK_IMPORTED_MODULE_22__["TestimonialModal4Component"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _footerbottom_footerbottom_component__WEBPACK_IMPORTED_MODULE_24__["FooterbottomComponent"],
                _descriptioncontainer_descriptioncontainer_component__WEBPACK_IMPORTED_MODULE_25__["DescriptioncontainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"]
            ],
            providers: [],
            entryComponents: [
                _testimonial_modal_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_19__["TestimonialModalComponent"],
                _testimonial_modal2_testimonial_modal2_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialModal2Component"],
                _testimonial_modal3_testimonial_modal3_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialModal3Component"],
                _testimonial_modal4_testimonial_modal4_component__WEBPACK_IMPORTED_MODULE_22__["TestimonialModal4Component"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/description/description.component.html":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"description-container\">\n  <img  class=\"description-bg-image\" src=\"../../assets/images/Header.svg\">\n  <div class=\"description-inside-container\">\n    <div class=\"description-space\">\n      <span>\n        Leader Classes  harnesses the world's best Career Advancement and\n        Leadership Development resources, helping you gain Expert Knowledge,\n        Practical Guidance and Actionable Insights from Extraordinary Leaders\n        and World Class Institutions through Specialized, Affordable, Online \n        and Offline Programs custom crafted to Accelerate your Career and\n        Business Success while transforming you into a better and more effective Leader\n      </span>\n      <br>\n      <br>\n      <span>\n        To see for yourself the quality of our Video Content and how it can help you,\n        we invite you to view our Founder CEO's introductory Video providing\n        <a href=\"/videos/career-acceleration-insights-video\" target=\"_blank\" style=\"color:blue;text-decoration:none;\">\n          Expert Insights to Accelerate your Career\n        </a> \n        if you have not done the same already\n      </span>\n    \n      </div>\n      <div class=\"description-image\">\n        <img  src=\"../../assets/images/description-image.jpg\">\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/description/description.component.scss":
/*!********************************************************!*\
  !*** ./src/app/description/description.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".description-container {\n  color: white;\n  position: relative; }\n  .description-container .description-bg-image {\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: auto;\n    position: absolute; }\n  .description-container .description-inside-container {\n    position: absolute;\n    top: 0;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    position: inherit; }\n  .description-container .description-inside-container .description-space {\n      padding: 50px;\n      width: 50%;\n      text-align: center;\n      margin: auto;\n      margin-top: 50px; }\n  .description-container .description-inside-container .description-image {\n      padding: 30px;\n      width: 50%;\n      margin-top: 40px; }\n  .description-container .description-inside-container .description-image img {\n        width: 100%;\n        height: auto; }\n  @media screen and (max-width: 850px) {\n  .description-container .description-bg-image {\n    display: none; }\n  .description-container .description-inside-container {\n    position: inherit;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse; }\n    .description-container .description-inside-container .description-space {\n      width: 100%;\n      color: black; }\n    .description-container .description-inside-container .description-image {\n      display: contents; }\n      .description-container .description-inside-container .description-image img {\n        margin-top: 60px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzY3JpcHRpb24vQzpcXG15IGZvbGRlclxcdmlzdWFsLXN0dWRpb19jb2RlX3Byb2plY3RzXFxMZWFkZXJDbGFzc2VzLmNvbSBXZWJzaXRlIEhvbWUgUGFnZSBSZWRlc2lnbmVkXFxMZWFkZXJDbGFzc2VzL3NyY1xcYXBwXFxkZXNjcmlwdGlvblxcZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGdEI7SUFJUSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFSMUI7SUFXUSxrQkFBa0I7SUFDbEIsTUFBSztJQUNMLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWZ6QjtNQWlCWSxhQUFhO01BQ2IsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZ0JBQWdCLEVBQUE7RUFyQjVCO01Bd0JZLGFBQWE7TUFDYixVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7RUExQjVCO1FBNEJnQixXQUFXO1FBQ1gsWUFBVyxFQUFBO0VBTTNCO0VBQ0k7SUFFUSxhQUFhLEVBQUE7RUFGckI7SUFLWSxpQkFBaUI7SUFDakIsNEJBQThCO0lBQTlCLDhCQUE4QjtZQUE5Qiw4QkFBOEIsRUFBQTtJQU4xQztNQVFZLFdBQVc7TUFDWCxZQUFZLEVBQUE7SUFUeEI7TUFZWSxpQkFBaUIsRUFBQTtNQVo3QjtRQWNnQixnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmRlc2NyaXB0aW9uLWJnLWltYWdle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24taW5zaWRlLWNvbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uLXNwYWNleyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcHRpb24taW1hZ2V7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KXtcclxuICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXJ7XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uLWJnLWltYWdle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcHRpb24taW5zaWRlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24tc3BhY2V7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1pbWFnZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/description/description.component.ts":
/*!******************************************************!*\
  !*** ./src/app/description/description.component.ts ***!
  \******************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/description/description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/descriptioncontainer/descriptioncontainer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/descriptioncontainer/descriptioncontainer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  descriptioncontainer works!\n</p>\n"

/***/ }),

/***/ "./src/app/descriptioncontainer/descriptioncontainer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/descriptioncontainer/descriptioncontainer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uY29udGFpbmVyL2Rlc2NyaXB0aW9uY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/descriptioncontainer/descriptioncontainer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/descriptioncontainer/descriptioncontainer.component.ts ***!
  \************************************************************************/
/*! exports provided: DescriptioncontainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptioncontainerComponent", function() { return DescriptioncontainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptioncontainerComponent = /** @class */ (function () {
    function DescriptioncontainerComponent() {
    }
    DescriptioncontainerComponent.prototype.ngOnInit = function () {
    };
    DescriptioncontainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-descriptioncontainer',
            template: __webpack_require__(/*! ./descriptioncontainer.component.html */ "./src/app/descriptioncontainer/descriptioncontainer.component.html"),
            styles: [__webpack_require__(/*! ./descriptioncontainer.component.scss */ "./src/app/descriptioncontainer/descriptioncontainer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptioncontainerComponent);
    return DescriptioncontainerComponent;
}());



/***/ }),

/***/ "./src/app/feature/feature.component.html":
/*!************************************************!*\
  !*** ./src/app/feature/feature.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"features\">\n  <span class=\"heading\">Our Leader Classes</span>\n  <featureone></featureone>\n  <featuretwo></featuretwo>\n  <featurethree></featurethree>\n  <featurefour></featurefour>\n  <featurefive></featurefive>\n  <offline-events></offline-events>\n</div>\n  "

/***/ }),

/***/ "./src/app/feature/feature.component.scss":
/*!************************************************!*\
  !*** ./src/app/feature/feature.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".features {\n  position: relative; }\n  .features .heading {\n    font-size: 30px;\n    color: rgba(0, 0, 0, 0.7);\n    text-align: center;\n    padding: 20px;\n    padding-bottom: 30px;\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9DOlxcbXkgZm9sZGVyXFx2aXN1YWwtc3R1ZGlvX2NvZGVfcHJvamVjdHNcXExlYWRlckNsYXNzZXMuY29tIFdlYnNpdGUgSG9tZSBQYWdlIFJlZGVzaWduZWRcXExlYWRlckNsYXNzZXMvc3JjXFxhcHBcXGZlYXR1cmVcXGZlYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFBQTtFQURyQjtJQUdRLGVBQWM7SUFDZCx5QkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlc3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.scss */ "./src/app/feature/feature.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/featurefive/featurefive.component.html":
/*!********************************************************!*\
  !*** ./src/app/featurefive/featurefive.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"featurefive-container\">   \n  <div class=\"content-wrapper\">\n    <div class=\"content\">\n      Ingesting an extraordinary amount of this exceptionally valuable content on \n      100+ topics of strategic importance from \n      conferences, reports, documents,  articles, blogs, \n      journals, books, websites, interviews,  magazines, videos, podcasts.\n    </div>\n    <div class=\"content\">\n      Curates and harmoniously blends this with our rich experience \n      of partnering with over 10000+ senior management/executive level \n      leaders and 35+ world class organizations primarily in India \n      and the US, for nearly two decades, guiding and learning \n      from them in our earlier ventures    </div>\n    <div class=\"content\">\n      Contextualizes and structures this into simple, extremely \n      affordable, highly valuable, exceptional leadership development \n      programs relevant to your career stage and business needs\n    </div>\n    <div class=\"content\">\n      Courses accessible from our website\n    </div>\n    <div class=\"content\">\n      All these content offered in extremely affordable price\n    </div>\n    <div class=\"content\">\n      See our Annual <a style=\"text-decoration:none;\" href=\"https://www.leaderclasses.com/membership\">Subscription</a>\n    </div>\n  </div> \n  <div class=\"image\">\n    <img class=\"imageprop\" src=\"../../assets/images/conference-image.JPG\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/featurefive/featurefive.component.scss":
/*!********************************************************!*\
  !*** ./src/app/featurefive/featurefive.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featurefive-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n  .featurefive-container .content-wrapper {\n    width: 50%;\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 400;\n    padding: 20px; }\n  .featurefive-container .content-wrapper .content {\n      padding: 10px; }\n  .featurefive-container .image {\n    width: 50%; }\n  .featurefive-container .image .imageprop {\n      width: 100%;\n      height: 100%;\n      padding: 20px;\n      box-shadow: 0 20px 30px 0 #f1f1f1; }\n  @media screen and (max-width: 950px) {\n  .featurefive-container {\n    flex-wrap: wrap; }\n    .featurefive-container .content-wrapper {\n      width: 100%; }\n    .featurefive-container .image {\n      width: 90%; } }\n  @media screen and (max-width: 600px) {\n  .featurefive-container {\n    position: relative; }\n    .featurefive-container .content-wrapper {\n      padding-top: 150px; } }\n  @media screen and (max-width: 500px) {\n  .featurefive-container .content-wrapper {\n    padding-top: 225px; } }\n  @media screen and (max-width: 400px) {\n  .featurefive-container .content-wrapper {\n    padding-top: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWZpdmUvQzpcXG15IGZvbGRlclxcdmlzdWFsLXN0dWRpb19jb2RlX3Byb2plY3RzXFxMZWFkZXJDbGFzc2VzLmNvbSBXZWJzaXRlIEhvbWUgUGFnZSBSZWRlc2lnbmVkXFxMZWFkZXJDbGFzc2VzL3NyY1xcYXBwXFxmZWF0dXJlZml2ZVxcZmVhdHVyZWZpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQUh2QjtJQUtRLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUFackI7TUFjWSxhQUFhLEVBQUE7RUFkekI7SUFrQlEsVUFBVSxFQUFBO0VBbEJsQjtNQW9CWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGFBQWE7TUFDYixpQ0FBaUMsRUFBQTtFQUs3QztFQUNJO0lBQ0ksZUFBZSxFQUFBO0lBRG5CO01BR1EsV0FBVyxFQUFBO0lBSG5CO01BTVEsVUFBVSxFQUFBLEVBQ2I7RUFJVDtFQUNJO0lBQ0ksa0JBQWtCLEVBQUE7SUFEdEI7TUFHUSxrQkFBa0IsRUFBQSxFQUNyQjtFQUlUO0VBQ0k7SUFFUSxrQkFBa0IsRUFBQSxFQUNyQjtFQUlUO0VBQ0k7SUFFUSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVmaXZlL2ZlYXR1cmVmaXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVmaXZlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY29udGVudC13cmFwcGVye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWFnZXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIC5pbWFnZXByb3B7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IDAgI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KXtcclxuICAgIC5mZWF0dXJlZml2ZS1jb250YWluZXJ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAuZmVhdHVyZWZpdmUtY29udGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY29udGVudC13cmFwcGVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAuZmVhdHVyZWZpdmUtY29udGFpbmVye1xyXG4gICAgICAgIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIC5mZWF0dXJlZml2ZS1jb250YWluZXJ7XHJcbiAgICAgICAgLmNvbnRlbnQtd3JhcHBlcntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/featurefive/featurefive.component.ts":
/*!******************************************************!*\
  !*** ./src/app/featurefive/featurefive.component.ts ***!
  \******************************************************/
/*! exports provided: FeaturefiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturefiveComponent", function() { return FeaturefiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturefiveComponent = /** @class */ (function () {
    function FeaturefiveComponent() {
    }
    FeaturefiveComponent.prototype.ngOnInit = function () {
    };
    FeaturefiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featurefive',
            template: __webpack_require__(/*! ./featurefive.component.html */ "./src/app/featurefive/featurefive.component.html"),
            styles: [__webpack_require__(/*! ./featurefive.component.scss */ "./src/app/featurefive/featurefive.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturefiveComponent);
    return FeaturefiveComponent;
}());



/***/ }),

/***/ "./src/app/featurefour/featurefour.component.html":
/*!********************************************************!*\
  !*** ./src/app/featurefour/featurefour.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"featurefour-container\">   \n  <div class=\"background-image\">\n    <img class=\"image-props\" src=\"../../assets/images/Body-image-svg.svg\">\n  </div> \n  <div class=\"content\">\n      <span style=\"position: relative;\">Thoughts, Actions, Advice, Life and Inspiration are taken from World's famous popular Personalities</span>\n      <div class=\"slidefour-container\" style=\"position: absolute;\">\n        <owl-carousel-o [options]=\"customOptions\" style=\"position: relative;\">\n          <ng-container>\n            <ng-template carouselSlide id=\"1\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage1\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>World Leaders</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"2\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage2\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Visionaries and Pioneers</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"3\">\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage3\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Business Legends</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"4\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage4\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Global Business Leaders</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"5\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage5\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Investors</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"6\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage6\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Innovators</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"7\" >\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage7\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Futurists</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"8\">\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage8\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Thought Leaders</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"9\">\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage9\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>World Class Professors</span>\n                </div>     \n              </div>    \n            </ng-template>  \n            <ng-template carouselSlide id=\"10\">\n              <div  class=\"image-card\">\n                <div class=\"image-wrapper\">\n                  <img class=\"imagefour-prop\" [attr.src]=\"this.currentImage10\">\n                </div>\n                <div class=\"text-wrapper\">\n                  <span>Distinguished Entrepreneurs</span>\n                </div>     \n              </div>    \n            </ng-template>  \n          </ng-container>\n        </owl-carousel-o>\n      </div>    \n    </div> \n \n</div>"

/***/ }),

/***/ "./src/app/featurefour/featurefour.component.scss":
/*!********************************************************!*\
  !*** ./src/app/featurefour/featurefour.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featurefour-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 5vw;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-bottom: 40px;\n  position: relative; }\n  .featurefour-container .background-image {\n    position: relative; }\n  .featurefour-container .background-image .image-props {\n      width: 100%;\n      position: relative; }\n  .featurefour-container .content {\n    font-size: 20px;\n    top: 70px !important;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 300;\n    padding: 20px;\n    position: absolute;\n    top: 150px;\n    color: white;\n    width: 90vw;\n    margin-left: auto;\n    margin-right: auto; }\n  @keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  /* Firefox < 16 */\n  /* Safari, Chrome and Opera > 12.1 */\n  @-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  .owl-theme .owl-nav [class*='owl-'] {\n  color: #FFF;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: white;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px; }\n  .slidefour-container {\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90vw;\n  top: auto;\n  position: absolute;\n  margin-top: 30px; }\n  .slidefour-container .image-card {\n    height: auto;\n    border-radius: 10px;\n    box-shadow: 0 20px 30px 0 #f1f1f1;\n    margin: 3px;\n    display: inline-block; }\n  .slidefour-container .image-card .image-wrapper .imagefour-prop {\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      -webkit-animation-name: fadein;\n              animation-name: fadein;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite;\n      -webkit-animation-timing-function: linear;\n              animation-timing-function: linear; }\n  .slidefour-container .image-card .text-wrapper {\n      background-color: white;\n      color: black;\n      text-align: center;\n      padding: 10px;\n      font-weight: 300;\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n      font-size: 20px; }\n  .owl-carousel .owl-item img {\n  height: 300px; }\n  .cdk-overlay-pane {\n  overflow: scroll !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZWZvdXIvQzpcXG15IGZvbGRlclxcdmlzdWFsLXN0dWRpb19jb2RlX3Byb2plY3RzXFxMZWFkZXJDbGFzc2VzLmNvbSBXZWJzaXRlIEhvbWUgUGFnZSBSZWRlc2lnbmVkXFxMZWFkZXJDbGFzc2VzL3NyY1xcYXBwXFxmZWF0dXJlZm91clxcZmVhdHVyZWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTtFQVB0QjtJQVNRLGtCQUFrQixFQUFBO0VBVDFCO01BV1ksV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBWjlCO0lBZ0JRLGVBQWU7SUFDZixvQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQUkxQjtFQUNBO0lBQU8sVUFBVSxFQUFBO0VBQ2pCO0lBQU8sVUFBVSxFQUFBLEVBQUE7RUFHakIsaUJBQUE7RUFNQSxvQ0FBQTtFQUNBO0VBQ0E7SUFBTyxVQUFVLEVBQUE7RUFDakI7SUFBTyxVQUFVLEVBQUEsRUFBQTtFQUdqQixzQkFBQTtFQU1BLGlCQUFBO0VBTUE7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQVBwQjtJQVNRLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxxQkFBcUIsRUFBQTtFQWI3QjtNQWdCZ0IsNEJBQTRCO01BQzVCLDZCQUE2QjtNQUM3Qiw4QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsMkNBQW1DO2NBQW5DLG1DQUFtQztNQUNuQyx5Q0FBZ0M7Y0FBaEMsaUNBQWdDLEVBQUE7RUFyQmhEO01BeUJZLHVCQUF1QjtNQUN2QixZQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQiw4QkFBOEI7TUFDOUIsK0JBQStCO01BQy9CLGVBQWUsRUFBQTtFQUszQjtFQUNJLGFBQWEsRUFBQTtFQUdqQjtFQUNJLDJCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZWZvdXIvZmVhdHVyZWZvdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZWZvdXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1dnc7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmJhY2tncm91bmQtaW1hZ2V7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5pbWFnZS1wcm9wc3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdG9wOiA3MHB4IWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbmZyb20geyBvcGFjaXR5OiAwOyB9XHJcbnRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggPCAxNiAqL1xyXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxudG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxudG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxudG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogT3BlcmEgPCAxMi4xICovXHJcbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcclxuZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxudG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPSdvd2wtJ10ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNsaWRlZm91ci1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOjkwdnc7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgLmltYWdlLWNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggMCAjZjFmMWYxO1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAuaW1hZ2Utd3JhcHBlcnsgICAgICAgIFxyXG4gICAgICAgICAgICAuaW1hZ2Vmb3VyLXByb3B7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtd3JhcHBlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwwLDApO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1ne1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/featurefour/featurefour.component.ts":
/*!******************************************************!*\
  !*** ./src/app/featurefour/featurefour.component.ts ***!
  \******************************************************/
/*! exports provided: FeaturefourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturefourComponent", function() { return FeaturefourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FeaturefourComponent = /** @class */ (function () {
    function FeaturefourComponent() {
        this.images1 = ['../../assets/images/Abdul Kalam.jpg',
            '../../assets/images/Barack Obama.jpg',
            '../../assets/images/Benjamin.jpg',
            '../../assets/images/Shinzo Abe.jpg'
        ];
        this.images2 = ['../../assets/images/JRD Tata.jpg',
            '../../assets/images/Steve Jobs.jpg',
            '../../assets/images/Jeff Bezos.jpg',
            '../../assets/images/ElonMusk.jpg'
        ];
        this.images3 = ['../../assets/images/Warren Buffetr.jpg',
            '../../assets/images/Billl Gates.jpg',
            '../../assets/images/Jack Ma.jpg',
            '../../assets/images/Herb Kelleher.jpg'
        ];
        this.images4 = ['../../assets/images/Ratan Tata.jpg',
            '../../assets/images/Jack Welch.jpg',
            '../../assets/images/Ambani.jpg',
            '../../assets/images/Mary Bara.jpg'
        ];
        this.images5 = ['../../assets/images/John Doerr.jpg',
            '../../assets/images/Michael Moritz.jpg',
            '../../assets/images/Masayoshi Son.jpg',
            '../../assets/images/Mary Meeker.jpg'
        ];
        this.images6 = ['../../assets/images/Vinton Cerf.jpg',
            '../../assets/images/Klas Schwab.jpg',
            '../../assets/images/Haso.jpg',
            '../../assets/images/Larry Pag.jpg'
        ];
        this.images7 = ['../../assets/images/Ray Kurzweil.jpg',
            '../../assets/images/Michio kaka.jpg',
            '../../assets/images/Alwi Toffler.jpg',
            '../../assets/images/John Naisbitt.jpg'
        ];
        this.images8 = ['../../assets/images/Jim Collins.jpg',
            '../../assets/images/tom Peter.jpg',
            '../../assets/images/Daniel Gollmanm.jpg',
            '../../assets/images/Robin Sharma.jpg'
        ];
        this.images9 = ['../../assets/images/Peter Druker.jpg',
            '../../assets/images/John Kotter.jpg',
            '../../assets/images/Philip Kotler.jpg',
            '../../assets/images/Michael Porter.jpg'
        ];
        this.images10 = ['../../assets/images/Fred Smith.jpg',
            '../../assets/images/Richard Branson.jpg',
            '../../assets/images/Michael Bloomberg.jpg',
            '../../assets/images/Narayan Murthy.jpg'
        ];
        this.customOptions = {
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 2000,
            animateOut: true,
            animateIn: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                800: {
                    items: 3
                }
            },
            nav: false
        };
    }
    FeaturefourComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (v) {
            _this.currentImage1 = _this.images1[v % 4];
            _this.currentImage2 = _this.images2[v % 4];
            _this.currentImage3 = _this.images3[v % 4];
            _this.currentImage4 = _this.images4[v % 4];
            _this.currentImage5 = _this.images5[v % 4];
            _this.currentImage6 = _this.images6[v % 4];
            _this.currentImage7 = _this.images7[v % 4];
            _this.currentImage8 = _this.images8[v % 4];
            _this.currentImage9 = _this.images9[v % 4];
            _this.currentImage10 = _this.images10[v % 4];
        }))
            .subscribe();
    };
    FeaturefourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featurefour',
            template: __webpack_require__(/*! ./featurefour.component.html */ "./src/app/featurefour/featurefour.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./featurefour.component.scss */ "./src/app/featurefour/featurefour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturefourComponent);
    return FeaturefourComponent;
}());



/***/ }),

/***/ "./src/app/featureone/featureone.component.html":
/*!******************************************************!*\
  !*** ./src/app/featureone/featureone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"featureone-container\"> \n  <div class=\"content\">\n    Relentlessly tracks and learns from \n    100+ fulltime/executive development \n    programs at pre-eminent universities\n  </div>\n  <div class=\"image\">\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/MIT.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/Cambridge.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/Stanford.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/Berkely.png\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/Oxford.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/Hardwarduniv.jpg\" class=\"image-options\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/featureone/featureone.component.scss":
/*!******************************************************!*\
  !*** ./src/app/featureone/featureone.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featureone-container {\n  width: 100%;\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n  .featureone-container .image {\n    width: 50%;\n    text-align: center; }\n  .featureone-container .image .image-wapper {\n      display: inline; }\n  .featureone-container .image .image-wapper .image-options {\n        width: 150px;\n        height: 150px;\n        box-shadow: 0 20px 30px 0 #e0e0e0;\n        margin: 30px; }\n  .featureone-container .content {\n    width: 50%;\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 400;\n    padding: 20px; }\n  @media all and (max-width: 860px) and (min-width: 1px) {\n  .featureone-container .image {\n    width: 100%; }\n  .featureone-container .content {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZW9uZS9DOlxcbXkgZm9sZGVyXFx2aXN1YWwtc3R1ZGlvX2NvZGVfcHJvamVjdHNcXExlYWRlckNsYXNzZXMuY29tIFdlYnNpdGUgSG9tZSBQYWdlIFJlZGVzaWduZWRcXExlYWRlckNsYXNzZXMvc3JjXFxhcHBcXGZlYXR1cmVvbmVcXGZlYXR1cmVvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQUpuQjtJQU1RLFVBQVM7SUFDVCxrQkFBa0IsRUFBQTtFQVAxQjtNQVNZLGVBQWUsRUFBQTtFQVQzQjtRQVlnQixZQUFZO1FBQ1osYUFBYTtRQUNiLGlDQUFpQztRQUNqQyxZQUFZLEVBQUE7RUFmNUI7SUFxQlEsVUFBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQUlyQjtFQUNJO0lBRVEsV0FBVyxFQUFBO0VBRm5CO0lBS1EsV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlb25lL2ZlYXR1cmVvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZW9uZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5pbWFnZXtcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5pbWFnZS13YXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZS1vcHRpb25ze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IDAgI2UwZTBlMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjg2MHB4KSBhbmQgKG1pbi13aWR0aDoxcHgpe1xyXG4gICAgLmZlYXR1cmVvbmUtY29udGFpbmVye1xyXG4gICAgICAgIC5pbWFnZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/featureone/featureone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/featureone/featureone.component.ts ***!
  \****************************************************/
/*! exports provided: FeatureoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureoneComponent", function() { return FeatureoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureoneComponent = /** @class */ (function () {
    function FeatureoneComponent() {
    }
    FeatureoneComponent.prototype.ngOnInit = function () {
    };
    FeatureoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featureone',
            template: __webpack_require__(/*! ./featureone.component.html */ "./src/app/featureone/featureone.component.html"),
            styles: [__webpack_require__(/*! ./featureone.component.scss */ "./src/app/featureone/featureone.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureoneComponent);
    return FeatureoneComponent;
}());



/***/ }),

/***/ "./src/app/featurethree/featurethree.component.html":
/*!**********************************************************!*\
  !*** ./src/app/featurethree/featurethree.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"featurethree-container\">   \n    <div class=\"content\">\n        <span>50+ renowned High Potential (Hi-Po) Executive Leadership Development programs of Top Tier Organisations</span>\n    </div> \n</div>\n  \n  <div class=\"slide-container\">\n    <owl-carousel-o [options]=\"customOptions\">\n      <ng-container>\n        <ng-template carouselSlide id=\"1\"><img class=\"image-prop\" src=\"../../assets/images/google.png\"></ng-template>  \n        <ng-template carouselSlide id=\"2\"><img class=\"image-prop\" src=\"../../assets/images/apple.png\"></ng-template>  \n        <ng-template carouselSlide id=\"3\"><img class=\"image-prop\" src=\"../../assets/images/citi.jpg\"></ng-template>  \n        <ng-template carouselSlide id=\"4\"><img class=\"image-prop\" src=\"../../assets/images/coca cola.png\"></ng-template>  \n        <ng-template carouselSlide id=\"5\"><img class=\"image-prop\" src=\"../../assets/images/GE.png\"></ng-template>  \n        <ng-template carouselSlide id=\"6\"><img class=\"image-prop\" src=\"../../assets/images/Goldman sachs.png\"></ng-template>  \n        <ng-template carouselSlide id=\"7\"><img class=\"image-prop\" src=\"../../assets/images/gsk.jpg\"></ng-template>  \n        <ng-template carouselSlide id=\"8\"><img class=\"image-prop\" src=\"../../assets/images/unilever.png\"></ng-template>  \n        <ng-template carouselSlide id=\"9\"><img class=\"image-prop\" src=\"../../assets/images/SPA.jpg\"></ng-template>  \n        <ng-template carouselSlide id=\"10\"><img class=\"image-prop\" src=\"../../assets/images/shell.jpg\"></ng-template>  \n        <ng-template carouselSlide id=\"11\"><img class=\"image-prop\" src=\"../../assets/images/P&G.jpg\"></ng-template>  \n        <ng-template carouselSlide id=\"12\"><img class=\"image-prop\" src=\"../../assets/images/nestle.png\"></ng-template>  \n        <ng-template carouselSlide id=\"13\"><img class=\"image-prop\" src=\"../../assets/images/microsoft.png\"></ng-template>\n        <ng-template carouselSlide id=\"14\"><img class=\"image-prop\" src=\"../../assets/images/JP Morgan.png\"></ng-template>\n      </ng-container>\n    </owl-carousel-o>\n  </div>    \n  "

/***/ }),

/***/ "./src/app/featurethree/featurethree.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/featurethree/featurethree.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featurethree-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 8vw;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-bottom: 40px; }\n  .featurethree-container .content {\n    width: 100%;\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 400;\n    padding: 20px; }\n  .image-prop {\n  width: 100px !important;\n  height: 100px !important;\n  margin: 10px; }\n  .owl-theme .owl-nav [class*='owl-'] {\n  color: #FFF;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: white;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px; }\n  .slide-container {\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXRocmVlL0M6XFxteSBmb2xkZXJcXHZpc3VhbC1zdHVkaW9fY29kZV9wcm9qZWN0c1xcTGVhZGVyQ2xhc3Nlcy5jb20gV2Vic2l0ZSBIb21lIFBhZ2UgUmVkZXNpZ25lZFxcTGVhZGVyQ2xhc3Nlcy9zcmNcXGFwcFxcZmVhdHVyZXRocmVlXFxmZWF0dXJldGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQixFQUFBO0VBTnhCO0lBUVEsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQUdyQjtFQUNJLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsWUFBWSxFQUFBO0VBRWhCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmV0aHJlZS9mZWF0dXJldGhyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZXRocmVlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHZ3O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAgICAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuLmltYWdlLXByb3B7XHJcbiAgICB3aWR0aDogMTAwcHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPSdvd2wtJ10ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNsaWRlLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6OTB2d1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/featurethree/featurethree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/featurethree/featurethree.component.ts ***!
  \********************************************************/
/*! exports provided: FeaturethreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturethreeComponent", function() { return FeaturethreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FeaturethreeComponent = /** @class */ (function () {
    function FeaturethreeComponent() {
        this.customOptions = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            animateOut: true,
            animateIn: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 100,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                200: {
                    items: 2
                },
                400: {
                    items: 3
                },
                600: {
                    items: 4
                },
                800: {
                    items: 5
                },
                1000: {
                    items: 6
                },
                1200: {
                    items: 7
                }
            },
            nav: false
        };
    }
    FeaturethreeComponent.prototype.ngOnInit = function () {
    };
    FeaturethreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featurethree',
            template: __webpack_require__(/*! ./featurethree.component.html */ "./src/app/featurethree/featurethree.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./featurethree.component.scss */ "./src/app/featurethree/featurethree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturethreeComponent);
    return FeaturethreeComponent;
}());



/***/ }),

/***/ "./src/app/featuretwo/featuretwo.component.html":
/*!******************************************************!*\
  !*** ./src/app/featuretwo/featuretwo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"featuretwo-container\">   \n  <div class=\"image\">\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/World-economic-forum.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/The-aspen-institute.png\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/brookings.jpg\" class=\"image-options\">\n    </div>\n    <div class=\"image-wapper\">\n      <img src=\"../../assets/images/EMKF.png\" class=\"image-options\">\n    </div>\n  </div> \n  <div class=\"content\">\n    Gets the learning from Economy and Globalization majors\n  </div>   \n</div>"

/***/ }),

/***/ "./src/app/featuretwo/featuretwo.component.scss":
/*!******************************************************!*\
  !*** ./src/app/featuretwo/featuretwo.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".featuretwo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8vw;\n  background-color: rgba(0, 0, 0, 0.1); }\n  .featuretwo-container .image {\n    width: 50%;\n    text-align: center;\n    padding: 20px; }\n  .featuretwo-container .image .image-wapper {\n      display: inline; }\n  .featuretwo-container .image .image-wapper img {\n        vertical-align: middle;\n        border-style: none; }\n  .featuretwo-container .image .image-wapper .image-options {\n        width: 150px;\n        height: 150px;\n        box-shadow: 0 20px 30px 0 #e0e0e0;\n        margin: 30px; }\n  .featuretwo-container .content {\n    width: 50%;\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 400;\n    padding: 20px; }\n  @media screen and (max-width: 950px) {\n  .featuretwo-container {\n    flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse; }\n    .featuretwo-container .image {\n      width: 100%; }\n    .featuretwo-container .content {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXR3by9DOlxcbXkgZm9sZGVyXFx2aXN1YWwtc3R1ZGlvX2NvZGVfcHJvamVjdHNcXExlYWRlckNsYXNzZXMuY29tIFdlYnNpdGUgSG9tZSBQYWdlIFJlZGVzaWduZWRcXExlYWRlckNsYXNzZXMvc3JjXFxhcHBcXGZlYXR1cmV0d29cXGZlYXR1cmV0d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9DQUFpQyxFQUFBO0VBTHJDO0lBT1EsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFUckI7TUFXWSxlQUFlLEVBQUE7RUFYM0I7UUFhZ0Isc0JBQXNCO1FBQ3RCLGtCQUFrQixFQUFBO0VBZGxDO1FBaUJnQixZQUFZO1FBQ1osYUFBYTtRQUNiLGlDQUFpQztRQUNqQyxZQUFZLEVBQUE7RUFwQjVCO0lBMEJRLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUFJckI7RUFDSTtJQUNJLGVBQWU7SUFDZiw0QkFBOEI7SUFBOUIsOEJBQThCO1lBQTlCLDhCQUE4QixFQUFBO0lBRmxDO01BSVEsV0FBVyxFQUFBO0lBSm5CO01BT1EsV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJldHdvL2ZlYXR1cmV0d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZXR3by1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgLmltYWdle1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmltYWdlLXdhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWFnZS1vcHRpb25ze1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IDAgI2UwZTBlMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpe1xyXG4gICAgLmZlYXR1cmV0d28tY29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgLmltYWdle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/featuretwo/featuretwo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/featuretwo/featuretwo.component.ts ***!
  \****************************************************/
/*! exports provided: FeaturetwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturetwoComponent", function() { return FeaturetwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturetwoComponent = /** @class */ (function () {
    function FeaturetwoComponent() {
    }
    FeaturetwoComponent.prototype.ngOnInit = function () {
    };
    FeaturetwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'featuretwo',
            template: __webpack_require__(/*! ./featuretwo.component.html */ "./src/app/featuretwo/featuretwo.component.html"),
            styles: [__webpack_require__(/*! ./featuretwo.component.scss */ "./src/app/featuretwo/featuretwo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturetwoComponent);
    return FeaturetwoComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"footer-container\">\n  <div class=\"content-footer\">\n    <div class=\"text-wrapper\">\n      <div class=\"heading\">\n        Campus Partners\n      </div>\n      <div class=\"heading-question\">\n        Do you want to represent an Institution?\n      </div>        \n      <div class=\"content\">\n        LeaderClasses is at a very interesting phase of its growth\n         and is actively looking to expand our Campus Partnerships Pan-India.\n      </div>\n      <div class=\"content\">\n        If you are an Institutional Representative of a University / College \n        interested in building a relation with us, we invite you to review our \"\n        <a style=\"text-decoration:none; color:black;\" href=\"/campus-partners\">Campus Partners</a> \n        page and submit your details via our Campus Partners form.\n      </div>     \n      <div class=\"content\">\n        We look forward to hearing from you soon and\n        will advise interest/next steps within 5 Business Days\n        of receipt of your\n        <a  style=\"text-decoration:none; color: black;\" href=\"https://www.leaderclasses.com/campus-partners-form\">\n        Campus Partners Form</a>.\n      </div>\n      <div class=\"content\">\n        Thanks for your Time and Attention! \n      </div>\n      <div class=\"content\">\n        Team - LeaderClasses.\n      </div>\n      <div class=\"contact-button\">\n        <a style=\"text-decoration: none; color: black;\" href=\"https://www.leaderclasses.com/leaderclasses-contact-form\">Contact</a>\n      </div>\n    </div>\n  </div>    \n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  width: 100%; }\n  .footer-container .content-footer {\n    position: relative;\n    background-color: #4dc3ff;\n    color: white;\n    padding: 50px;\n    text-align: center;\n    display: -webkit-box;\n    display: flex; }\n  .footer-container .content-footer .text-wrapper {\n      position: relative; }\n  .footer-container .content-footer .text-wrapper .heading {\n        font-size: 40px;\n        padding: 10px; }\n  .footer-container .content-footer .text-wrapper .heading-question {\n        font-size: 30px;\n        padding: 10px; }\n  .footer-container .content-footer .text-wrapper .content {\n        font-size: 20px;\n        font-weight: 300;\n        padding: 10px; }\n  .footer-container .content-footer .text-wrapper .contact-button {\n        margin: 20px auto;\n        padding: 0px;\n        border: 1px solid white;\n        color: #4dc3ff;\n        width: 80px;\n        border-radius: 5px;\n        background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxteSBmb2xkZXJcXHZpc3VhbC1zdHVkaW9fY29kZV9wcm9qZWN0c1xcTGVhZGVyQ2xhc3Nlcy5jb20gV2Vic2l0ZSBIb21lIFBhZ2UgUmVkZXNpZ25lZFxcTGVhZGVyQ2xhc3Nlcy9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUdRLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhLEVBQUE7RUFSckI7TUFVWSxrQkFBa0IsRUFBQTtFQVY5QjtRQVlnQixlQUFlO1FBQ2YsYUFBYSxFQUFBO0VBYjdCO1FBZ0JnQixlQUFlO1FBQ2YsYUFBYSxFQUFBO0VBakI3QjtRQW9CZ0IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhLEVBQUE7RUF0QjdCO1FBeUJnQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsV0FBVztRQUNYLGtCQUFrQjtRQUNsQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jb250ZW50LWZvb3RlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRkYzNmZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAudGV4dC13cmFwcGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZy1xdWVzdGlvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFjdC1idXR0b257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZGMzZmY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footerbottom/footerbottom.component.html":
/*!**********************************************************!*\
  !*** ./src/app/footerbottom/footerbottom.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bottom-container\">\n  <div class=\"social-media-container\">\n    Share    <br>    \n    <a href=\"https://www.linkedin.com/shareArticle?mini=true&amp;url=linkedin.com/company/leaderclasses&amp;title=&amp;summary=&amp;source=\" >\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d25603ab18bb047f72c5ec1_iconfinder_linked_in_online_social_media_734393.png\" width=\"48\" height=\"48\" alt=\"leaderclasses Linkedin share\">\n    </a>\n    <a href=\"https://twitter.com/home?status=https%3A//twitter.com/leaderclasses\">\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d255eddb18bb065352c5da8_iconfinder_twitter_online_social_media_734367.png\" width=\"48\" height=\"48\" alt=\"leaderclasses twitter share\" class=\"image-23\">\n    </a>\n    <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLeaderClasses-105817960762777%2F%3Fmodal%3Dadmin_todo_tour&amp;amp;src=sdkpreparse\">\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d255ec6a6f2f1c98f4a7984_iconfinder_online_social_media_facebook_734386.png\" width=\"48\" height=\"48\" alt=\"leaderclasses facbook share\" class=\"image-64\">\n    </a>\n    <br>\n    Follow Us<br>\n    <a href=\"https://www.linkedin.com/company/leaderclasses\" >\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d25603ab18bb047f72c5ec1_iconfinder_linked_in_online_social_media_734393.png\" width=\"48\" height=\"48\" alt=\"leaderclasses linkedin Follow\">\n    </a>\n    <a href=\"https://twitter.com/leaderclasses\">\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d255eddb18bb065352c5da8_iconfinder_twitter_online_social_media_734367.png\" width=\"48\" height=\"48\" alt=\"leaderclasses twitter Follow\" >\n    </a>\n    <a href=\"#\">\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d255ec6a6f2f1c98f4a7984_iconfinder_online_social_media_facebook_734386.png\" width=\"48\" height=\"48\" alt=\"leaderclasses Facbook Follow\">\n    </a>\n    <a href=\"https://www.instagram.com/leaderclassesofficial\">\n      <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d9f1a45c6ed5f0923e1e188_2018_social_media_popular_app_logo_instagram-512.png\" width=\"48\" height=\"48\" alt=\"leaderclasses Instagram Follow\" srcset=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d9f1a45c6ed5f0923e1e188_2018_social_media_popular_app_logo_instagram-512-p-500.png 500w, https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d9f1a45c6ed5f0923e1e188_2018_social_media_popular_app_logo_instagram-512.png 512w\" sizes=\"(max-width: 479px) 100vw, 48px\">\n    </a>\n  </div>\n  <div class=\"support-container\">\n    <a href=\"https://www.leaderclasses.com/contact\" style=\"padding:10px;\" target=\"_blank\" >Contact</a><br>\n    <a href=\"https://www.leaderclasses.com/terms-and-conditions\" style=\"padding:10px;\" target=\"_blank\">Terms</a><br>\n    <a href=\"https://www.leaderclasses.com/privacy\" style=\"padding:10px;\" target=\"_blank\" >Privacy</a>\n  </div>\n</div>\n<div class=\"footer-bottom-container\">\n  <div class=\"content-container\">\n    © 2019 LeaderClasses ( Awesome Firms ) and its owners. All rights reserved.<br>\n    All trademarks, logos and intellectual property featured belong to their respective owners.\n    They do not endorse us in any way.\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footerbottom/footerbottom.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/footerbottom/footerbottom.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-bottom-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.1); }\n  .footer-bottom-container .social-media-container {\n    width: 50%;\n    padding: 30px; }\n  .footer-bottom-container .social-media-container img {\n      width: 30px;\n      height: 30px;\n      margin: 10px; }\n  .footer-bottom-container .support-container {\n    width: 50%;\n    padding: 30px; }\n  .footer-bottom-container .content-container {\n    width: 100%;\n    text-align: center;\n    padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyYm90dG9tL0M6XFxteSBmb2xkZXJcXHZpc3VhbC1zdHVkaW9fY29kZV9wcm9qZWN0c1xcTGVhZGVyQ2xhc3Nlcy5jb20gV2Vic2l0ZSBIb21lIFBhZ2UgUmVkZXNpZ25lZFxcTGVhZGVyQ2xhc3Nlcy9zcmNcXGFwcFxcZm9vdGVyYm90dG9tXFxmb290ZXJib3R0b20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0NBQW9DLEVBQUE7RUFOeEM7SUFRUSxVQUFVO0lBQ1YsYUFBYSxFQUFBO0VBVHJCO01BWVksV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZLEVBQUE7RUFkeEI7SUFrQlEsVUFBVTtJQUNWLGFBQWEsRUFBQTtFQW5CckI7SUFzQlEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3RlcmJvdHRvbS9mb290ZXJib3R0b20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJvdHRvbS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC5zb2NpYWwtbWVkaWEtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydC1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footerbottom/footerbottom.component.ts":
/*!********************************************************!*\
  !*** ./src/app/footerbottom/footerbottom.component.ts ***!
  \********************************************************/
/*! exports provided: FooterbottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterbottomComponent", function() { return FooterbottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterbottomComponent = /** @class */ (function () {
    function FooterbottomComponent() {
    }
    FooterbottomComponent.prototype.ngOnInit = function () {
    };
    FooterbottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footerbottom',
            template: __webpack_require__(/*! ./footerbottom.component.html */ "./src/app/footerbottom/footerbottom.component.html"),
            styles: [__webpack_require__(/*! ./footerbottom.component.scss */ "./src/app/footerbottom/footerbottom.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterbottomComponent);
    return FooterbottomComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <navbar></navbar>\n  <description></description>\n  <feature></feature>\n  <testimonials></testimonials>\n  <footer></footer>\n  <footerbottom></footerbottom>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav navbar navbar-expand-sm justify-content-between \" style=\"background-color: #4dc3ff;\">\n  <div>\n    <div class=\"nav-item\" style=\"font-size:1.5rem; font-weight: lighter;\">\n      LeaderClasses\n    </div>\n  </div>\n  <div style=\"position: relative; display: flex;\">\n    <div class=\"nav-item\" id=\"active\" >\n      <a href=\"https://www.leaderclasses.com/about-us\">\n      About\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/faq\">\n      FAQ\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/membership\">\n      Membership\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/videos/career-acceleration-insights-video\">\n      Videos\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/campus-partners\">\n      Campus Partners\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/careers\">\n      Career\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"active\">\n      <a href=\"https://www.leaderclasses.com/careers\">\n      Login\n      </a>\n    </div>\n    <div class=\"nav-item\" id=\"toggle\" >\n      <img (click)=\"toggle()\" class=\"hamburger-menu\" src=\"../../assets/images/menu-button-black.svg\">\n    </div>\n  </div>\n</div>\n\n<div  class=\"slide\" [ngClass]=\"{'hide': !togglebool}\">\n  <div style=\"position: relative;\">\n    <div >\n      <div class=\"nav-item toggle-item\">\n        <a href=\"https://www.leaderclasses.com/about-us\">\n        About\n        </a>\n      </div>\n      <div class=\"nav-item toggle-item\" >\n        <a href=\"https://www.leaderclasses.com/faq\">\n        FAQ\n        </a>\n      </div> \n      <div class=\"nav-item toggle-item\">\n        <a href=\"https://www.leaderclasses.com/membership\">\n        Membership\n        </a>\n      </div>\n      <div class=\"nav-item toggle-item\" >\n        <a href=\"https://www.leaderclasses.com/videos/career-acceleration-insights-video\">\n        Videos\n        </a>\n      </div>\n      <div class=\"nav-item toggle-item\" >\n        <a href=\"https://www.leaderclasses.com/campus-partners\">\n        Campus Partners\n        </a>\n      </div>\n      <div class=\"nav-item toggle-item\" >\n        <a href=\"https://www.leaderclasses.com/careers\">\n        Career\n        </a>\n      </div>\n      <div class=\"nav-item toggle-item\" >\n        <a href=\"https://www.leaderclasses.com/careers\">\n        Login\n        </a>\n      </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 10px;\n  top: 0;\n  position: fixed;\n  width: 100%;\n  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);\n  z-index: 999;\n  color: white; }\n  .nav #toggle {\n    display: none; }\n  @media all and (max-width: 940px) and (min-width: 1px) {\n  .nav #active {\n    display: none; }\n  .nav #toggle {\n    display: -webkit-box;\n    display: flex; }\n    .nav #toggle .hamburger-menu {\n      width: 25px; } }\n  @media all and (min-width: 941px) {\n  .slide {\n    display: none; } }\n  .nav-item {\n  display: inline;\n  margin: 10px;\n  cursor: pointer; }\n  .nav-item a:-webkit-any-link {\n    text-decoration: none !important;\n    color: white !important; }\n  .toggle-item {\n  background-color: #4dc3ff;\n  display: block !important;\n  padding: 8px;\n  margin: 0px;\n  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1); }\n  .slide {\n  position: absolute;\n  width: 100%;\n  max-height: 500px;\n  overflow: hidden;\n  -webkit-transition: max-height 400ms ease-out;\n  transition: max-height 400ms ease-out;\n  top: 60px;\n  position: fixed;\n  z-index: 999; }\n  .slide.hide {\n  max-height: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxteSBmb2xkZXJcXHZpc3VhbC1zdHVkaW9fY29kZV9wcm9qZWN0c1xcTGVhZGVyQ2xhc3Nlcy5jb20gV2Vic2l0ZSBIb21lIFBhZ2UgUmVkZXNpZ25lZFxcTGVhZGVyQ2xhc3Nlcy9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLGVBQWU7RUFDZixXQUFXO0VBQ1gsOENBQTJDO0VBQzNDLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFWaEI7SUFZUSxhQUFhLEVBQUE7RUFJckI7RUFDSTtJQUVRLGFBQWEsRUFBQTtFQUZyQjtJQUtRLG9CQUFhO0lBQWIsYUFBYSxFQUFBO0lBTHJCO01BT1ksV0FBVSxFQUFBLEVBQ2I7RUFLYjtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0VBR0w7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWMsRUFBQTtFQUhsQjtJQUtRLGdDQUErQjtJQUMvQix1QkFBc0IsRUFBQTtFQUs5QjtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCw4Q0FBMkMsRUFBQTtFQUcvQztFQUNJLGtCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw2Q0FBNkM7RUFHN0MscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgI3RvZ2dsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NDBweCkgYW5kIChtaW4td2lkdGg6IDFweCkge1xyXG4gICAgLm5hdnsgICAgICAgIFxyXG4gICAgICAgICNhY3RpdmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0b2dnbGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5oYW1idXJnZXItbWVudXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDk0MXB4KSB7XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1pdGVte1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBhOi13ZWJraXQtYW55LWxpbmsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgIH0gICAgXHJcbiAgICBcclxufVxyXG4gIFxyXG4udG9nZ2xlLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRjM2ZmO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnNsaWRle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6NTAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCA0MDBtcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgNDAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5zbGlkZS5oaWRle1xyXG4gICAgbWF4LWhlaWdodDogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.togglebool = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggle = function () {
        if (this.togglebool) {
            this.togglebool = false;
        }
        else {
            this.togglebool = true;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/offline-events/offline-events.component.html":
/*!**************************************************************!*\
  !*** ./src/app/offline-events/offline-events.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offline-events-container\">\n  <div class=\"description\">\n    <h2 class=\"heading\">\n      High Impact Offline Events\n    </h2>\n    <div class=\"content\">\n      Members are also invited to specialized, high impact, one-Day, Career Advancement \n      Strategic Transformation (CAST) workshops held \n      offline at select cities countries, for an immersive learning networking experience enabling them to\n      broaden and deepen their leadership foundations while learning first hand with us and\n      efficiently network build relationships with their finest peers.\n    </div>\n    <div class=\"content\">\n      These high impact, one day, offline CAST events are aligned to the strategic \n      career management leadership development needs at three stages of our members' life.\n    </div>    \n  </div>\n  <div class=\"cards-container\">\n    <div class=\"cards\">\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1); max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">Commerce and other students</div>\n        <div class=\"card-body\" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious Chartered Accountants, Commerce, \n            Business, Arts, Sciences other Students aspiring to progress\n             to Director Higher level roles within 10-12 years of completing their education</p>\n        </div>\n      </div>\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1; max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">Budding Leaders for Engineering Students</div>\n        <div class=\"card-body\" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious Engineering Students aspiring to\n             progress to Director / GM / VP / Higher level roles within \n             10-12 years of completing their education.</p>\n        </div>\n      </div>\n\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1; max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">MS / Phd / ME / M.tech Students</div>\n        <div class=\"card-body \" style=\"color:black;\">\n          <p class=\"card-text\"> Ambitious MS, PhD, ME and M.Tech Students \n             aspiring to progress to Director / GM / VP / Higher level roles\n              within 10-12 years of completing their education.</p>\n        </div>\n      </div>\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1;  max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">MBA students</div>\n        <div class=\"card-body \" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious MBA Students aspiring to progress\n             to Director / GM / VP / Higher level roles within 10-12 years \n             of completing their education.</p>\n        </div>\n      </div>\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1; max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">Working Professionals</div>\n        <div class=\"card-body\" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious MBA Students aspiring to progress\n            to Director / GM / VP / Higher level roles within 10-12 years \n            of completing their education.</p>\n        </div>\n      </div>\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1; max-width: 18rem; display: inline-block; margin: 20px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">Future Leaders</div>\n        <div class=\"card-body\" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious Working Professionals\n             ( Annual Gross Compensation Upto INR 50 Lakhs per annum if\n              based in India and upto USD 200K p.a if based outside India ) \n              keen on accelerating their success to transition into our Future\n               Leaders category within the next 6-8 years.</p>\n        </div>\n      </div>\n\n      <div class=\"card text-info mb-3\" style=\"box-shadow: 0 20px 30px 0 #f1f1f1; max-width: 100%; display: inline-block; margin: 10px 50px;\">\n        <div class=\"card-header\" style=\"text-align: center;background-color: #4dc3ff;\n        color: white;\">Emerging Leaders</div>\n        <div class=\"card-body\" style=\"color:black;\">\n          <p class=\"card-text\">Ambitious Country / Multi-Country / Global Business Heads / Function Heads / Country Heads / Country Managers / C-Level Professionals / Partners / Senior Partners / Managing Directors / Presidents, Entrepreneurs, Family Business Leaders, Founders / Co-Founders / Founding Team Members of Growth and Expansion Stage Ventures ( Annual Compensation > INR 1 Crore p.a in India and Over US $ 500K if based outside India ) keen on evolving within the next decade to Global / Group C-Level / Board Level roles typically offering an Annual Compensation > US $ 1 Million in India and Over US $ 5 Million if based outside India.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"padding: 35px 60px;\">\n    <div class=\"content\">To know more about and to join our exclusive,\n      exceptional network of ambitious minds, we invite you to review our\n      <a style=\"text-decoration:none;\" href=\"https://www.leaderclasses.com/membership\">Membership</a> page.\n      We look forward to hearing from and having you in our exceptional network, soon.\n   </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/offline-events/offline-events.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/offline-events/offline-events.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offline-events-container {\n  background-color: rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 3vw;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-bottom: 20px;\n  color: rgba(0, 0, 0, 0.7); }\n  .offline-events-container .description {\n    width: 100%;\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    padding-left: 40px;\n    padding-right: 20px;\n    font-weight: 400;\n    padding: 20px; }\n  .offline-events-container .description .content {\n      padding: 10px; }\n  .offline-events-container .cards-container {\n    width: 100%;\n    padding: 20px; }\n  .offline-events-container .cards-container .cards {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmbGluZS1ldmVudHMvQzpcXG15IGZvbGRlclxcdmlzdWFsLXN0dWRpb19jb2RlX3Byb2plY3RzXFxMZWFkZXJDbGFzc2VzLmNvbSBXZWJzaXRlIEhvbWUgUGFnZSBSZWRlc2lnbmVkXFxMZWFkZXJDbGFzc2VzL3NyY1xcYXBwXFxvZmZsaW5lLWV2ZW50c1xcb2ZmbGluZS1ldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBaUM7RUFDakMsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXNCLEVBQUE7RUFSMUI7SUFVUSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBakJyQjtNQW1CWSxhQUFhLEVBQUE7RUFuQnpCO0lBdUJRLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUF4QnJCO01BMEJZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZiw4QkFBbUI7TUFBbkIsNkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29mZmxpbmUtZXZlbnRzL29mZmxpbmUtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmxpbmUtZXZlbnRzLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3Z3O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICAgICAgIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZHMtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmNhcmRze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/offline-events/offline-events.component.ts":
/*!************************************************************!*\
  !*** ./src/app/offline-events/offline-events.component.ts ***!
  \************************************************************/
/*! exports provided: OfflineEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineEventsComponent", function() { return OfflineEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OfflineEventsComponent = /** @class */ (function () {
    function OfflineEventsComponent() {
    }
    OfflineEventsComponent.prototype.ngOnInit = function () {
    };
    OfflineEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'offline-events',
            template: __webpack_require__(/*! ./offline-events.component.html */ "./src/app/offline-events/offline-events.component.html"),
            styles: [__webpack_require__(/*! ./offline-events.component.scss */ "./src/app/offline-events/offline-events.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfflineEventsComponent);
    return OfflineEventsComponent;
}());



/***/ }),

/***/ "./src/app/testimonial-modal/testimonial-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/testimonial-modal/testimonial-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-wrap: wrap; position: relative;\">\n  <span style=\"position: absolute; top: 2px; right: 2px; display: block;cursor: pointer;font-size: 30px;\n  font-weight: bold;\" (click)=\"function()\">X</span>\n  <span class=\"biography\" style=\"display: inline-flex; padding: 30px;\">\n    An MBA from the University of Chicago and a CFA charter holder, Ram brings \n    over 26+ of experience gained at Citibank,\n    Standard Chartered and Barclays across various geographies and divisions to his \n    current responsibility of designing and executing country strategy for Barclays in India,                  \n    with accountability for financial performance and market position for the Bank. \n    Additionally, Ram is also a member of the \n    European Business Group Banking Finance Committee representing the firms interests.\n  </span>\n  <div style=\"display: inline-flex;margin: 0px auto;\">  \n      <div class=\"html-embed w-embed w-iframe\">\n        <iframe src=\"//fast.wistia.net/embed/iframe/tyz4jtbdeh\" scrolling=\"no\" class=\"wistia_embed\" name=\"wistia_embed\" allowfullscreen=\"\" alt=\"video of Ram Gopal, CEO, Barclays India providing CEO testimonials for Leaderclasses\" style=\"width:100%\"></iframe>\n      </div>\n  </div>\n</div>\n\n\n \n"

/***/ }),

/***/ "./src/app/testimonial-modal/testimonial-modal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/testimonial-modal/testimonial-modal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsLW1vZGFsL3Rlc3RpbW9uaWFsLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/testimonial-modal/testimonial-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/testimonial-modal/testimonial-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: TestimonialModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialModalComponent", function() { return TestimonialModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TestimonialModalComponent = /** @class */ (function () {
    function TestimonialModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    TestimonialModalComponent.prototype.ngOnInit = function () {
    };
    TestimonialModalComponent.prototype.function = function () {
        this.dialogRef.close();
    };
    TestimonialModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'testimonial-modal',
            template: __webpack_require__(/*! ./testimonial-modal.component.html */ "./src/app/testimonial-modal/testimonial-modal.component.html"),
            styles: [__webpack_require__(/*! ./testimonial-modal.component.scss */ "./src/app/testimonial-modal/testimonial-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], TestimonialModalComponent);
    return TestimonialModalComponent;
}());



/***/ }),

/***/ "./src/app/testimonial-modal2/testimonial-modal2.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal2/testimonial-modal2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-wrap: wrap; position: relative;\">\n  <span style=\"position: absolute; top: 2px; right: 2px; display: block;cursor: pointer;font-size: 30px;\n  font-weight: bold;\" (click)=\"function()\">X</span>\n  <span class=\"biography\" style=\"display: inline-flex; padding: 30px;\">    \n    An Alumnus of IIT-BHU and IIMA, Gunjan brings over 28+ years at work at \n    Gillette, Philips,Sennheiser and Bosch Siemens in Strategy, Consumer Marketing\n    and Market Development across Europe and Asia to his current role as Chairman of the \n    Region Asia Pacific Board of Bosch Siemens Home Appliances Asia Pacific Business.\n  </span>\n  <div style=\"display: inline-flex;margin: 0px auto;\">  \n      <div class=\"html-embed w-embed w-iframe\">\n        <iframe  src=\"//fast.wistia.net/embed/iframe/zy9cntdbjy\" scrolling=\"no\" class=\"wistia_embed\" name=\"wistia_embed\" allowfullscreen=\"true\" alt=\"video of Gunjan Srivastava, Chairman - Region Asia Pacific Board, Bosch Siemens Home Appliances providing CEO testimonials for Leaderclasses\" style=\"width:100%\">\n        </iframe>\n      </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/testimonial-modal2/testimonial-modal2.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal2/testimonial-modal2.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsLW1vZGFsMi90ZXN0aW1vbmlhbC1tb2RhbDIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/testimonial-modal2/testimonial-modal2.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/testimonial-modal2/testimonial-modal2.component.ts ***!
  \********************************************************************/
/*! exports provided: TestimonialModal2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialModal2Component", function() { return TestimonialModal2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TestimonialModal2Component = /** @class */ (function () {
    function TestimonialModal2Component(dialogRef) {
        this.dialogRef = dialogRef;
    }
    TestimonialModal2Component.prototype.ngOnInit = function () {
    };
    TestimonialModal2Component.prototype.function = function () {
        this.dialogRef.close();
    };
    TestimonialModal2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'testimonial-modal2',
            template: __webpack_require__(/*! ./testimonial-modal2.component.html */ "./src/app/testimonial-modal2/testimonial-modal2.component.html"),
            styles: [__webpack_require__(/*! ./testimonial-modal2.component.scss */ "./src/app/testimonial-modal2/testimonial-modal2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], TestimonialModal2Component);
    return TestimonialModal2Component;
}());



/***/ }),

/***/ "./src/app/testimonial-modal3/testimonial-modal3.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal3/testimonial-modal3.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"display: flex; flex-wrap: wrap; position: relative;\">\n  <span style=\"position: absolute; top: 2px; right: 2px; display: block;cursor: pointer;font-size: 30px;\n  font-weight: bold;\" (click)=\"function()\">X</span>\n  <span class=\"biography\" style=\"display: inline-flex; padding: 30px;\">    \n    An ISB Alumnus, Achint is an Industry \n    Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey\n    and Viacom across Product Development, Strategy, Corporate Development, \n    Innovation and Market Development to his current role \n    of building Myntra leveraging his Digital Strategy and Execution expertise.\n  </span>\n  <div style=\"display: inline-flex;margin: 0px auto;\">  \n      <div class=\"html-embed w-embed w-iframe\">\n        <iframe src=\"//fast.wistia.net/embed/iframe/2pzbkn5sl6\" \n          scrolling=\"no\" class=\"wistia_embed\" name=\"wistia_embed\" \n          allowfullscreen=\"true\" \n          alt=\"video of Achint Setia, Vice President, Marketing at \n          Myntra providing CEO testimonials for Leaderclasses\" style=\"width:100%\">\n      </iframe>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/testimonial-modal3/testimonial-modal3.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal3/testimonial-modal3.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsLW1vZGFsMy90ZXN0aW1vbmlhbC1tb2RhbDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/testimonial-modal3/testimonial-modal3.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/testimonial-modal3/testimonial-modal3.component.ts ***!
  \********************************************************************/
/*! exports provided: TestimonialModal3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialModal3Component", function() { return TestimonialModal3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TestimonialModal3Component = /** @class */ (function () {
    function TestimonialModal3Component(dialogRef) {
        this.dialogRef = dialogRef;
    }
    TestimonialModal3Component.prototype.ngOnInit = function () {
    };
    TestimonialModal3Component.prototype.function = function () {
        this.dialogRef.close();
    };
    TestimonialModal3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial-modal3',
            template: __webpack_require__(/*! ./testimonial-modal3.component.html */ "./src/app/testimonial-modal3/testimonial-modal3.component.html"),
            styles: [__webpack_require__(/*! ./testimonial-modal3.component.scss */ "./src/app/testimonial-modal3/testimonial-modal3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], TestimonialModal3Component);
    return TestimonialModal3Component;
}());



/***/ }),

/***/ "./src/app/testimonial-modal4/testimonial-modal4.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal4/testimonial-modal4.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"display: flex; flex-wrap: wrap; position: relative;\">\n  <span style=\"position: absolute; top: 2px; right: 2px; display: block;cursor: pointer;font-size: 30px;\n  font-weight: bold;\" (click)=\"function()\">X</span>\n  <span class=\"biography\" style=\"display: inline-flex; padding: 30px;\">\n    An IIFT Alumnus, Nitin is an Industry Fast Tracker from the E-Commerce \n    and FMCG sectors, bringing his experience in Corporate Finance, Marketing, \n    Category Management and Market Development at Flipkart, Shopclues \n    and Rivigo to his current role of heading \n    the Consumer IoT business of Hero Electronix planned for a 2019 launch. \n  </span>\n  <div style=\"display: inline-flex;margin: 0px auto;\">  \n      <div class=\"html-embed w-embed w-iframe\">\n        <iframe src=\"//fast.wistia.net/embed/iframe/ednmcs3w67\" scrolling=\"no\" \n        class=\"wistia_embed\" name=\"wistia_embed\" allowfullscreen=\"true\" \n        alt=\"video of Nitin Kochhar, COO at Hero \n        Electronix providing CEO testimonials for Leaderclasses\" style=\"width:100%\"></iframe>\n      </div>\n  </div>\n</div>\n\n\n "

/***/ }),

/***/ "./src/app/testimonial-modal4/testimonial-modal4.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/testimonial-modal4/testimonial-modal4.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsLW1vZGFsNC90ZXN0aW1vbmlhbC1tb2RhbDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/testimonial-modal4/testimonial-modal4.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/testimonial-modal4/testimonial-modal4.component.ts ***!
  \********************************************************************/
/*! exports provided: TestimonialModal4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialModal4Component", function() { return TestimonialModal4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var TestimonialModal4Component = /** @class */ (function () {
    function TestimonialModal4Component(dialogRef) {
        this.dialogRef = dialogRef;
    }
    TestimonialModal4Component.prototype.ngOnInit = function () {
    };
    TestimonialModal4Component.prototype.function = function () {
        this.dialogRef.close();
    };
    TestimonialModal4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonial-modal4',
            template: __webpack_require__(/*! ./testimonial-modal4.component.html */ "./src/app/testimonial-modal4/testimonial-modal4.component.html"),
            styles: [__webpack_require__(/*! ./testimonial-modal4.component.scss */ "./src/app/testimonial-modal4/testimonial-modal4.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], TestimonialModal4Component);
    return TestimonialModal4Component;
}());



/***/ }),

/***/ "./src/app/testimonials/testimonials.component.html":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"testimonials-container\">\n  <h2 style=\"padding: 60px;\n  padding-top: 35px;\n  text-align: center;\n  width: 100%;\n  color: rgba(0,0,0,0.5);\n  top: 20px;\n  position: relative;\">CEO Testimonials</h2>\n  <div class=\"cards-slider-container\">\n      <owl-carousel-o [options]=\"customOptions\" style=\"position: relative;\">\n        <ng-container>          \n          <ng-template carouselSlide id=\"5\" >\n            <div  class=\"image-card\">\n              <div class=\"image-wrapper\">\n                <img class=\"imagefour-prop\" src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d22ce7f420c544e6a3d3d81_ram.jpg\"   alt=\"Image of Ram Gopal, CEO, Barclays India In LeaderClasses CEO testimonials sections\">\n              </div>\n              <div class=\"text-wrapper\">\n                <span>Ram Gopal   \n                  <a style=\"display:inline;\" href=\"https://in.linkedin.com/in/ram-gopal-19944723\" target=\"_blank\">\n                   <img style=\"display:inline; height:15px; width:15px;\" src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2444fb70f33437aca3a268_linkedin.png\" width=\"4px\" height=\"4px\">\n                  </a>\n                  <br>Chief Executive Officer <br>Barclays, India<br>\n                </span>\n                  <span (click)=\"openDialog()\" style=\"font-size:15px; cursor:pointer; color: blue;\">Click here to view his biography and his video testimonial</span>\n                  \n              </div>     \n            </div>    \n          </ng-template>  \n          <ng-template carouselSlide id=\"8\">\n            <div  class=\"image-card\">\n              <div class=\"image-wrapper\">\n                <img class=\"imagefour-prop\" src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2c54f5187e93ca69c6132b_459789-srivastava.jpg\">\n              </div>\n              <div class=\"text-wrapper\">\n                <span>Gunjan Srivastava  \n                  <a href=\"https://sg.linkedin.com/in/gunjan-srivastava-2719b14?trk=people-guest_profile-result-card_result-card_full-click\" target=\"_blank\" class=\"w-inline-block\">\n                    <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2444fb70f33437aca3a268_linkedin.png\" style=\"width: 15px; display: inline-block; height: 15px;\">\n                  </a>\n                  <br>Chairman - Region Asia Pacific Board. Bosch Siemens Home Appliances.<br>\n                </span>\n                  <span (click)=\"openDialog2()\" style=\"font-size:15px; cursor:pointer; color: blue;\">Click here to view his biography and his video testimonial</span>\n              </div>     \n            </div>    \n          </ng-template>  \n          <ng-template carouselSlide id=\"9\">\n            <div  class=\"image-card\">\n              <div class=\"image-wrapper\">\n                <img class=\"imagefour-prop\" src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2c52ba9ea87fc6110e3b01_Achint_Setia.jpg\">\n              </div>\n              <div class=\"text-wrapper\">\n                <span>Gunjan Srivastava  \n                  <a href=\"https://in.linkedin.com/in/achintsetia\" target=\"_blank\">\n                    <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2444fb70f33437aca3a268_linkedin.png\" style=\"width: 15px; display: inline-block; height: 15px;\">\n                  </a>\n                  <br>Vice President, Marketing at Myntra<br>\n                </span>\n                  <span (click)=\"openDialog3()\" style=\"font-size:15px; cursor:pointer; color: blue;\">Click here to view his biography and his video testimonial</span>\n              </div>     \n            </div>    \n          </ng-template>  \n          <ng-template carouselSlide id=\"10\">\n            <div  class=\"image-card\">\n              <div class=\"image-wrapper\">\n                <img class=\"imagefour-prop\" src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d22e15cc79ae86fa59f3857_nitin.jpg\">\n              </div>\n              <div class=\"text-wrapper\">\n                <span>Nitin Kochhar\n                  <a href=\"https://in.linkedin.com/in/nitin-kochhar-4672401\" target=\"_blank\">\n                    <img src=\"https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2444fb70f33437aca3a268_linkedin.png\"  style=\"width: 15px; display: inline-block; height: 15px;\">\n                  </a>\n                  <br>COO @ Hero Electronix<br>\n                </span>\n                  <span (click)=\"openDialog4()\" style=\"font-size:15px; cursor:pointer; color: blue;\">Click here to view his biography and his video testimonial</span>\n              </div>     \n            </div>    \n          </ng-template>  \n        </ng-container>\n      </owl-carousel-o>\n    </div>    \n</div>"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonials-container {\n  margin-bottom: 30px; }\n  .testimonials-container .cards-slider-container {\n    padding-right: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90vw;\n    top: auto;\n    margin-top: 30px; }\n  .testimonials-container .cards-slider-container .image-card {\n      height: auto;\n      border-radius: 10px;\n      box-shadow: 0 20px 30px 0 #f1f1f1;\n      margin: 3px;\n      display: inline-block; }\n  .testimonials-container .cards-slider-container .image-card .image-wrapper {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  .testimonials-container .cards-slider-container .image-card .image-wrapper .imagefour-prop {\n          border-radius: 50%;\n          height: 150px !important;\n          width: 150px !important; }\n  .testimonials-container .cards-slider-container .image-card .text-wrapper {\n        background-color: white;\n        color: black;\n        text-align: center;\n        padding: 10px;\n        font-weight: 300;\n        border-bottom-left-radius: 8px;\n        border-bottom-right-radius: 8px;\n        font-size: 20px; }\n  .content {\n  font-size: 20px;\n  top: 70px !important;\n  text-align: center;\n  margin: auto;\n  padding-left: 40px;\n  padding-right: 20px;\n  font-weight: 300;\n  padding: 20px;\n  position: absolute;\n  top: 150px;\n  color: white;\n  width: 90vw;\n  margin-left: auto;\n  margin-right: auto; }\n  .owl-theme .owl-nav [class*='owl-'] {\n  color: #FFF;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: white;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px; }\n  .owl-carousel .owl-item img {\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWxzL0M6XFxteSBmb2xkZXJcXHZpc3VhbC1zdHVkaW9fY29kZV9wcm9qZWN0c1xcTGVhZGVyQ2xhc3Nlcy5jb20gV2Vic2l0ZSBIb21lIFBhZ2UgUmVkZXNpZ25lZFxcTGVhZGVyQ2xhc3Nlcy9zcmNcXGFwcFxcdGVzdGltb25pYWxzXFx0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFBQTtFQUR0QjtJQUdRLG1CQUFtQjtJQUNuQixpQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7RUFSeEI7TUFVWSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGlDQUFpQztNQUNqQyxXQUFXO01BQ1gscUJBQXFCLEVBQUE7RUFkakM7UUFnQmdCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCLEVBQUE7RUFqQnZDO1VBbUJvQixrQkFBa0I7VUFDbEIsd0JBQXNCO1VBQ3RCLHVCQUFxQixFQUFBO0VBckJ6QztRQXlCZ0IsdUJBQXVCO1FBQ3ZCLFlBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsZUFBZSxFQUFBO0VBTTNCO0VBQ0ksZUFBZTtFQUNmLG9CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0aW1vbmlhbHMtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgLmNhcmRzLXNsaWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDo5MHZ3O1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIC5pbWFnZS1jYXJke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IDAgI2YxZjFmMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgLmltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuaW1hZ2Vmb3VyLXByb3B7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50ZXh0LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwwLDApO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHRvcDogNzBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbi5vd2wtdGhlbWUgLm93bC1uYXYgW2NsYXNzKj0nb3dsLSddIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZ3tcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/testimonials/testimonials.component.ts":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _testimonial_modal_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testimonial-modal/testimonial-modal.component */ "./src/app/testimonial-modal/testimonial-modal.component.ts");
/* harmony import */ var _testimonial_modal2_testimonial_modal2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testimonial-modal2/testimonial-modal2.component */ "./src/app/testimonial-modal2/testimonial-modal2.component.ts");
/* harmony import */ var _testimonial_modal3_testimonial_modal3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testimonial-modal3/testimonial-modal3.component */ "./src/app/testimonial-modal3/testimonial-modal3.component.ts");
/* harmony import */ var _testimonial_modal4_testimonial_modal4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testimonial-modal4/testimonial-modal4.component */ "./src/app/testimonial-modal4/testimonial-modal4.component.ts");







var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent(dialog) {
        this.dialog = dialog;
        this.customOptions = {
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 1500,
            animateOut: true,
            animateIn: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 100,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                800: {
                    items: 3
                }
            },
            nav: false
        };
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_testimonial_modal_testimonial_modal_component__WEBPACK_IMPORTED_MODULE_3__["TestimonialModalComponent"], {
            width: 'auto',
            height: 'auto'
        });
    };
    TestimonialsComponent.prototype.openDialog2 = function () {
        var dialogRef = this.dialog.open(_testimonial_modal2_testimonial_modal2_component__WEBPACK_IMPORTED_MODULE_4__["TestimonialModal2Component"], {
            width: 'auto',
            height: 'auto'
        });
    };
    TestimonialsComponent.prototype.openDialog3 = function () {
        var dialogRef = this.dialog.open(_testimonial_modal3_testimonial_modal3_component__WEBPACK_IMPORTED_MODULE_5__["TestimonialModal3Component"], {
            width: 'auto',
            height: 'auto'
        });
    };
    TestimonialsComponent.prototype.openDialog4 = function () {
        var dialogRef = this.dialog.open(_testimonial_modal4_testimonial_modal4_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialModal4Component"], {
            width: 'auto',
            height: 'auto'
        });
    };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/testimonials/testimonials.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my folder\visual-studio_code_projects\LeaderClasses.com Website Home Page Redesigned\LeaderClasses\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map