"use strict";
(self["webpackChunkBrain_Squeezes_UI"] = self["webpackChunkBrain_Squeezes_UI"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/signup/signup.component */ 1535);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categories/categories.component */ 5035);
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/questions/questions.component */ 3089);
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tags/tags.component */ 7677);
/* harmony import */ var _components_profile_options_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-options/profile-view/profile-view.component */ 192);
/* harmony import */ var _components_profile_options_activity_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-options/activity/activity.component */ 4264);
/* harmony import */ var _components_profile_options_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile-options/settings/settings.component */ 3608);
/* harmony import */ var _core_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/video-call/video-call.component */ 6824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);













const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'signup',
  component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
}, {
  path: 'dashboard',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
}, {
  path: 'categories',
  component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesComponent
}, {
  path: 'questions',
  component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__.QuestionsComponent
}, {
  path: 'tags',
  component: _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_5__.TagsComponent
}, {
  path: 'profile-options/profile',
  component: _components_profile_options_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_6__.ProfileViewComponent
}, {
  path: 'profile-options/settings',
  component: _components_profile_options_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__.SettingsComponent
}, {
  path: 'profile-options/activity',
  component: _components_profile_options_activity_activity_component__WEBPACK_IMPORTED_MODULE_7__.ActivityComponent
}, {
  path: 'videocall',
  component: _core_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_9__.AppVideoCallComponent
}, {
  path: '**',
  redirectTo: '/login'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/layout.component */ 843);


class AppComponent {
  constructor() {
    this.title = 'Brain_Squeezes_UI';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-layout");
        }
      },
      dependencies: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/signup/signup.component */ 1535);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ 843);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 2661);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/categories/categories.component */ 5035);
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/questions/questions.component */ 3089);
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tags/tags.component */ 7677);
/* harmony import */ var _components_profile_options_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile-options/profile-view/profile-view.component */ 192);
/* harmony import */ var _components_profile_options_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile-options/settings/settings.component */ 3608);
/* harmony import */ var _components_profile_options_activity_activity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile-options/activity/activity.component */ 4264);
/* harmony import */ var _components_profile_options_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile-options/logout/logout.component */ 8106);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _components_core_directives_file_drag_drop_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/core/directives/file-drag-drop/file-drag-drop.directive */ 7006);
/* harmony import */ var _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/qanda-popup/qanda-popup.component */ 6930);
/* harmony import */ var _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/qanda-accordian/qanda-accordian.component */ 7722);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @swimlane/ngx-charts */ 3399);
/* harmony import */ var _core_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/video-call/video-call.component */ 6824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 7580);



























class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__.NgxChartsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrModule.forRoot({
        //timeOut: 10000,
        positionClass: 'toast-top-right'
        //preventDuplicates: true,
      })]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.NavbarComponent, _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_8__.CategoriesComponent, _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_9__.QuestionsComponent, _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_10__.TagsComponent, _components_profile_options_profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_11__.ProfileViewComponent, _components_profile_options_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_profile_options_activity_activity_component__WEBPACK_IMPORTED_MODULE_13__.ActivityComponent, _components_profile_options_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__.LogoutComponent, _components_core_directives_file_drag_drop_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_15__.FileDragDropDirective, _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_16__.QandAPopupComponent, _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_17__.QandaAccordianComponent, _core_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_18__.AppVideoCallComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_24__.NgxChartsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrModule]
  });
})();

/***/ }),

/***/ 5035:
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesComponent: () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/shared/common.service */ 7313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/qanda-popup/qanda-popup.component */ 6930);
/* harmony import */ var _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/qanda-accordian/qanda-accordian.component */ 7722);





function CategoriesComponent_div_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_7_div_14_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const que_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onUpdateAnswersModel(que_r7.qid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "(Answers)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-qanda-accordian", 35)(8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const que_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Question Id: ", "#", "", que_r7.qid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", que_r7);
  }
}
function CategoriesComponent_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Questions in the category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_7_div_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.isQuestionType(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "+ Ask Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CategoriesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "h2", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_div_7_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const i_r4 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.toggleAccordion(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21)(4, "table", 22)(5, "tbody")(6, "tr")(7, "td", 23)(8, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 25)(11, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CategoriesComponent_div_7_div_14_Template, 9, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CategoriesComponent_div_7_div_15_Template, 5, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("collapsed", ctx_r0.expandedIndex !== i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r3.categoryType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", file_r3.queLen, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("collapse", ctx_r0.expandedIndex !== i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.categororizedQues);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.categororizedQues.length == 0);
  }
}
function CategoriesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-qanda-accordian", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ans_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ans_r15)("question_type", false);
  }
}
function CategoriesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Previous Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CategoriesComponent {
  constructor(commonService) {
    this.commonService = commonService;
    this.expandedIndex = -1;
    this.updatedAnswers = [];
    this.categororizedQues = [];
    this.questions = [{
      qid: 1,
      title: 'How to handle route guards in Angular?',
      description: 'I need to prevent unauthorized users from accessing certain routes. What is the best way to implement route guards?',
      uid: 1,
      authorName: 'surya',
      categoryId: 3,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard.png',
      extension: 'image/jpeg',
      rating: 14
    }, {
      qid: 2,
      title: 'Angular Change Detection Optimization',
      description: 'How can I optimize change detection for performance improvement in a large-scale Angular app?',
      uid: 2,
      authorName: 'prakash',
      categoryId: 2,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection.png',
      extension: 'image/jpeg',
      rating: 12
    }, {
      qid: 3,
      title: 'Error: ExpressionChangedAfterItHasBeenCheckedError',
      description: "I'm getting this error in my Angular component. How do I fix it?",
      uid: 3,
      authorName: 'vyshnav',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error.png',
      extension: 'image/jpeg',
      rating: 9
    }, {
      qid: 4,
      title: 'Lazy Loading Modules in Angular',
      description: 'How can I implement lazy loading for better performance in my Angular application?',
      uid: 4,
      authorName: 'bharat',
      categoryId: 4,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading.png',
      extension: 'image/jpeg',
      rating: 7
    }, {
      qid: 5,
      title: 'Best Practices for Angular State Management',
      description: 'Should I use NgRx or a simpler solution for state management in Angular?',
      uid: 5,
      authorName: 'chiranjeevi',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management.png',
      extension: 'image/jpeg',
      rating: 15
    }, {
      qid: 6,
      title: 'Optimizing Angular Performance for Large Apps',
      description: 'What are the best strategies to reduce rendering time and improve performance in Angular applications?',
      uid: 6,
      authorName: 'Praveen Suggula',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance.png',
      extension: 'image/jpeg',
      rating: 10
    }];
    this.answers = [{
      aid: 1,
      description: 'Use Angular route guards like CanActivate and CanDeactivate. Implement authentication checks in the guard to prevent unauthorized access.',
      uid: 2,
      authorName: 'prakash',
      qid: 1,
      categoryId: 3,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard_solution.png',
      extension: 'image/jpeg',
      rating: 20
    }, {
      aid: 2,
      description: 'For better performance, use ChangeDetectionStrategy.OnPush and trackBy in *ngFor. Also, avoid unnecessary bindings.',
      uid: 3,
      authorName: 'vyshnav',
      qid: 2,
      categoryId: 2,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection_solution.png',
      extension: 'image/jpeg',
      rating: 17
    }, {
      aid: 3,
      description: "The 'ExpressionChangedAfterItHasBeenCheckedError' usually occurs due to modifying component properties after change detection. Try wrapping updates in setTimeout or using ChangeDetectorRef.detectChanges().",
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 3,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error_solution.png',
      extension: 'image/jpeg',
      rating: 14
    }, {
      aid: 4,
      description: 'To enable lazy loading, define your routes using loadChildren and ensure your feature modules are standalone.',
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 4,
      categoryId: 4,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading_solution.png',
      extension: 'image/jpeg',
      rating: 11
    }, {
      aid: 5,
      description: 'For small applications, BehaviorSubject and services are enough. For large apps, use NgRx or Akita for better state management.',
      uid: 6,
      authorName: 'niranjan',
      qid: 5,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management_solution.png',
      extension: 'image/jpeg',
      rating: 9
    }, {
      aid: 6,
      description: 'Use lazy loading, OnPush change detection, trackBy in *ngFor, and avoid heavy computations in templates.',
      uid: 2,
      authorName: 'prakash',
      qid: 6,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance_solution.png',
      extension: 'image/jpeg',
      rating: 8
    }];
  }
  ngOnInit() {
    this.lupFileTypes = [{
      cid: 1,
      categoryType: 'Angular',
      queLen: 0
    }, {
      cid: 2,
      categoryType: 'React',
      queLen: 0
    }, {
      cid: 3,
      categoryType: 'SQL',
      queLen: 0
    }, {
      cid: 4,
      categoryType: '.Net Core',
      queLen: 0
    }, {
      cid: 5,
      categoryType: 'Java',
      queLen: 0
    }];
    this.lupFileTypes.forEach(fileType => {
      fileType.queLen = this.questions.filter(x => x.categoryId == fileType.cid).length || 0;
    });
  }
  toggleAccordion(index) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
    this.categororizedQues = this.questions.filter(x => x.categoryId == this.lupFileTypes[index].cid);
  }
  onUpdateAnswersModel(queId) {
    this.updatedAnswers = this.answers.filter(x => x.qid == queId);
  }
  isQuestionType(isQuestion) {
    if (isQuestion) {
      this.commonService.onToggleQandAType(true);
    } else {
      this.commonService.onToggleQandAType(false);
    }
  }
  static {
    this.ɵfac = function CategoriesComponent_Factory(t) {
      return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      decls: 24,
      vars: 3,
      consts: [[1, "container"], [2, "color", "#AAA7A7"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn", "themebgColor", "text-white", "floatright", 2, "margin-top", "-50px", "font-weight", "600", 3, "click"], ["id", "accordionExample", 1, "accordion"], ["class", "accordion-item mt-1", 4, "ngFor", "ngForOf"], ["id", "answersModel", "tabindex", "-1", "data-bs-backdrop", "static", "aria-labelledby", "exampleModalLabel", "aria-modal", "true", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", 2, "min-width", "85%"], [1, "modal-content"], [1, "modal-header", "themebgColor"], ["id", "noteModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white", "opacity-100"], [1, "modal-body"], [1, "input-group", "d-inline", "my-3"], [1, "panel", "panel-default"], [1, "panel-body"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn-sm", "themebgColor", "text-white", "btnOptions", 3, "click"], [1, "accordion-item", "mt-1"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", 1, "accordion-button", 3, "click"], [1, "d-flex", "justify-content-between", "w-100"], ["width", "100%", 1, "careerTable"], ["width", "70%"], [2, "color", "#095b35"], ["width", "30% floatLeft"], [2, "color", "red", "font-weight", "600"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse"], ["class", "m-3", 4, "ngFor", "ngForOf"], ["class", "m-3", 4, "ngIf"], [1, "m-3"], [1, "m-1", "mt-0", "accordian"], [1, "accordion-body", "container"], [1, "mb-0", "themeColor"], ["href", "", "data-bs-toggle", "modal", "title", "To check available answers", "data-bs-target", "#answersModel", 1, "themeColor", 2, "font-size", "large", "color", "orange", 3, "click"], [3, "data"], [1, "themeColor"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn", "themebgColor", "text-white", 3, "click"], [3, "data", "question_type"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_3_listener() {
            return ctx.isQuestionType(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "+ Ask Question");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CategoriesComponent_div_7_Template, 16, 8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Answers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CategoriesComponent_div_19_Template, 2, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CategoriesComponent_div_20_Template, 3, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoriesComponent_Template_button_click_21_listener() {
            return ctx.isQuestionType(false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "+ Add Answer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-qanda-popup");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lupFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.updatedAnswers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updatedAnswers.length == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_1__.QandAPopupComponent, _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_2__.QandaAccordianComponent],
      styles: [".btnOptions[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5idG5PcHRpb25zeyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7006:
/*!***************************************************************************************!*\
  !*** ./src/app/components/core/directives/file-drag-drop/file-drag-drop.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileDragDropDirective: () => (/* binding */ FileDragDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class FileDragDropDirective {
  constructor() {
    this.draggedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {}
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.draggedFile.emit(files);
    }
  }
  static {
    this.ɵfac = function FileDragDropDirective_Factory(t) {
      return new (t || FileDragDropDirective)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FileDragDropDirective,
      selectors: [["", "appFileDragDrop", ""]],
      hostBindings: function FileDragDropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function FileDragDropDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function FileDragDropDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function FileDragDropDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      outputs: {
        draggedFile: "draggedFile"
      }
    });
  }
}

/***/ }),

/***/ 4441:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared/common.service */ 7313);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 3399);
/* harmony import */ var _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/qanda-popup/qanda-popup.component */ 6930);




class DashboardComponent {
  constructor(commonService) {
    this.commonService = commonService;
    this.single = [];
    this.view = [600, 400]; // Increased size for better visibility
    // Statistics for dashboard
    this.totalQuestions = 200; // Simulated data
    this.totalAnswers = 540;
    this.activeUsers = 35;
    // Chart Options
    this.xAxisLabel = 'Technology';
    this.yAxisLabel = 'No. of Questions';
    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#3366CC']
    };
  }
  ngOnInit() {
    // Chart Data Initialization
    this.single = [{
      name: 'Angular',
      value: 50
    }, {
      name: 'Java',
      value: 80
    }, {
      name: 'React',
      value: 65
    }, {
      name: 'TypeScript',
      value: 45
    }, {
      name: 'Python',
      value: 30
    }];
  }
  onSelect(event) {
    console.log('Chart Item Selected:', event);
  }
  isQuestionType(isQuestion) {
    this.commonService.onToggleQandAType(isQuestion);
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 59,
      vars: 12,
      consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "dashboard-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn", "themebgColor", "text-white", "ask-question-btn", 3, "click"], [1, "stats-container"], [1, "stat-box"], [1, "chart-container"], [3, "view", "scheme", "results", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"], [1, "tech-container"], [1, "tech-title"], [1, "tech-buttons"], [1, "tech-btn", "angular"], [1, "fab", "fa-angular"], [1, "tech-btn", "typescript"], [1, "fab", "fa-js-square"], [1, "tech-btn", "node"], [1, "fab", "fa-node-js"], [1, "tech-btn", "cli"], [1, "fas", "fa-terminal"], [1, "tech-btn", "rxjs"], [1, "fas", "fa-sync-alt"], [1, "tech-btn", "dotnet"], [1, "fas", "fa-code"], [1, "tech-btn", "karma"], [1, "fas", "fa-check-circle"], [1, "tech-btn", "html"], [1, "fab", "fa-html5"], [1, "tech-btn", "css"], [1, "fab", "fa-css3-alt"], [1, "tech-btn", "bootstrap"], [1, "fab", "fa-bootstrap"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() {
            return ctx.isQuestionType(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " + Ask Question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Total Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5)(13, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Total Answers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5)(18, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Active Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6)(23, "ngx-charts-bar-vertical", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function DashboardComponent_Template_ngx_charts_bar_vertical_select_23_listener($event) {
            return ctx.onSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8)(25, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Technologies Used in BrainSqueezers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10)(28, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Angular 16.2.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " TypeScript 5.1.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Node.js 16.1.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Angular CLI 16.2.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " RxJS 7.8.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " .NET Core 8.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Karma-Jasmine 5.1.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " HTML5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " CSS3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Bootstrap 5.3.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-qanda-popup");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalQuestions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalAnswers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.activeUsers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("results", ctx.single)("xAxis", true)("yAxis", true)("showXAxisLabel", true)("showYAxisLabel", true)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
        }
      },
      dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.BarVerticalComponent, _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_1__.QandAPopupComponent],
      styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n\n\n.dashboard-title[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: bold;\n  font-size: 26px;\n}\n\n\n\n.ask-question-btn[_ngcontent-%COMP%] {\n  background: #10DDB8;\n  color: white;\n  font-weight: 600;\n  padding: 10px 18px;\n  border-radius: 5px;\n  transition: 0.3s ease-in-out;\n  border: none;\n}\n\n.ask-question-btn[_ngcontent-%COMP%]:hover {\n  background: #0bb095;\n  transform: scale(1.05);\n}\n\n\n\n.stats-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  gap: 15px;\n}\n\n.stat-box[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8f9fa;\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: 0.3s ease-in-out;\n}\n\n.stat-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n\n.stat-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #444;\n  font-weight: bold;\n}\n\n.stat-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #10DDB8;\n}\n\n\n\n.chart-container[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  margin-top: 20px;\n  padding: 15px;\n  border-radius: 8px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);\n}\n\n\n\n.tech-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.tech-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n\n\n.tech-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  justify-content: center;\n}\n\n\n\n.tech-btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 10px 16px;\n  font-size: 15px;\n  font-weight: 500;\n  color: #333;\n  border-radius: 8px; \n\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n  min-width: 180px;\n  justify-content: center;\n}\n\n\n\n.tech-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f1f1;\n  transform: scale(1.05);\n}\n\n\n\n.tech-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.angular[_ngcontent-%COMP%] {\n  border-left: 4px solid #dd1b16;\n}\n\n.typescript[_ngcontent-%COMP%] {\n  border-left: 4px solid #007acc;\n}\n\n.node[_ngcontent-%COMP%] {\n  border-left: 4px solid #68a063;\n}\n\n.cli[_ngcontent-%COMP%] {\n  border-left: 4px solid #ff6600;\n}\n\n.rxjs[_ngcontent-%COMP%] {\n  border-left: 4px solid #b7178c;\n}\n\n.karma[_ngcontent-%COMP%] {\n  border-left: 4px solid #2dce89;\n}\n\n.html[_ngcontent-%COMP%] {\n  border-left: 4px solid #f16529;\n}\n\n.css[_ngcontent-%COMP%] {\n  border-left: 4px solid #2965f1;\n}\n\n.bootstrap[_ngcontent-%COMP%] {\n  border-left: 4px solid #563d7c;\n}\n\n.dotnet[_ngcontent-%COMP%] {\n  border-left: 4px solid #512bd4;\n}\n\n\n\n@media (max-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .stats-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .stat-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tech-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .ask-question-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px 14px;\n  }\n  .tech-btn[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 8px 12px;\n    min-width: 160px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFBO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUEsbUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQSx3QkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUEsa0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBLGtDQUFBO0FBQ0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQSx5Q0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBLGlCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBLHlCQUFBO0FBQ0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBLEVBQUEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQSxpQkFBQTtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBLDJCQUFBO0FBQ0E7RUFDSSxlQUFBO0FBQ0o7O0FBRUEsa0NBQUE7QUFDQTtFQUFXLDhCQUFBO0FBRVg7O0FBREE7RUFBYyw4QkFBQTtBQUtkOztBQUpBO0VBQVEsOEJBQUE7QUFRUjs7QUFQQTtFQUFPLDhCQUFBO0FBV1A7O0FBVkE7RUFBUSw4QkFBQTtBQWNSOztBQWJBO0VBQVMsOEJBQUE7QUFpQlQ7O0FBaEJBO0VBQVEsOEJBQUE7QUFvQlI7O0FBbkJBO0VBQU8sOEJBQUE7QUF1QlA7O0FBdEJBO0VBQWEsOEJBQUE7QUEwQmI7O0FBekJBO0VBQVUsOEJBQUE7QUE2QlY7O0FBNUJBLG1DQUFBO0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUErQk47RUE1QkU7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBOEJOO0VBM0JFO0lBQ0ksV0FBQTtFQTZCTjtFQTFCRTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUE0Qk47QUFDRjtBQXpCQTtFQUNJO0lBQ0ksZUFBQTtFQTJCTjtFQXhCRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQTBCTjtFQXZCRTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBeUJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09IEdMT0JBTCBTVFlMRVMgPT09PT09PSAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiA9PT09PT09IEhFQURFUiBTRUNUSU9OID09PT09PT0gKi9cclxuLmRhc2hib2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4vKiBBc2sgUXVlc3Rpb24gQnV0dG9uICovXHJcbi5hc2stcXVlc3Rpb24tYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMEREQjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFzay1xdWVzdGlvbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBiYjA5NTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi8qID09PT09PT0gU1RBVFMgU0VDVElPTiA9PT09PT09ICovXHJcbi5zdGF0cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5zdGF0LWJveCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zdGF0LWJveDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbn1cclxuXHJcbi5zdGF0LWJveCBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RhdC1ib3ggcCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMTBEREI4O1xyXG59XHJcblxyXG4vKiA9PT09PT09IENIQVJUIFNFQ1RJT04gPT09PT09PSAqL1xyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi8qID09PT09PT0gVEVDSE5PTE9HSUVTIFNFQ1RJT04gPT09PT09PSAqL1xyXG4udGVjaC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRlY2gtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIFRlY2ggQnV0dG9ucyAqL1xyXG4udGVjaC1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRGVmYXVsdCBCdXR0b24gU3R5bGUgKi9cclxuLnRlY2gtYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFByb2Zlc3Npb25hbCAmIHN0cnVjdHVyZWQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBIb3ZlciBFZmZlY3QgKi9cclxuLnRlY2gtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4vKiBJY29ucyBmb3IgVGVjaG5vbG9naWVzICovXHJcbi50ZWNoLWJ0biBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogU3BlY2lmaWMgQ29sb3JzIGZvciBFYWNoIFRlY2ggKi9cclxuLmFuZ3VsYXIgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICNkZDFiMTY7IH1cclxuLnR5cGVzY3JpcHQgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDdhY2M7IH1cclxuLm5vZGUgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICM2OGEwNjM7IH1cclxuLmNsaSB7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmNjYwMDsgfVxyXG4ucnhqcyB7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2I3MTc4YzsgfVxyXG4ua2FybWEgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyZGNlODk7IH1cclxuLmh0bWwgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmMTY1Mjk7IH1cclxuLmNzcyB7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzI5NjVmMTsgfVxyXG4uYm9vdHN0cmFwIHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNTYzZDdjOyB9XHJcbi5kb3RuZXQgeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1MTJiZDQ7IH1cclxuLyogPT09PT09PSBSRVNQT05TSVZFTkVTUyA9PT09PT09ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdHMtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXQtYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGVjaC1idXR0b25zIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmRhc2hib2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hc2stcXVlc3Rpb24tYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlY2gtYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 843:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authentication/authentication.service */ 2059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 2661);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ 9847);








function LayoutComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar", 6)(2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 7)(5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ul_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onMenuToggled());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("toggleChanged", ctx_r0.isMenuToggled);
  }
}
function LayoutComponent_app_navbar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-navbar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("logoutUser", function LayoutComponent_app_navbar_4_Template_app_navbar_logoutUser_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.userLoggedIn = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LayoutComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.isMenuToggled = false;
    this.userLoggedIn = false;
    this.onMenuShow = false;
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      this.onMenuShow = event.urlAfterRedirects.includes("/login") || event.urlAfterRedirects.includes("/signup") ? false : true;
    });
    this.authService.userLoggedIn.subscribe(x => this.userLoggedIn = x);
  }
  ngOnInit() {}
  onMenuToggled() {
    if (!this.isMenuToggled) {
      document.getElementById('accordionSidebar')?.classList.add('toggled');
      this.isMenuToggled = true;
    } else {
      document.getElementById('accordionSidebar')?.classList.remove('toggled');
      this.isMenuToggled = false;
    }
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 6,
      vars: 2,
      consts: [["id", "wrapper"], ["class", "navbar-nav sidebar sidebar-bright themebgColor", "id", "accordionSidebar", 4, "ngIf"], ["id", "content-wrapper", 1, "d-flex", "flex-column", "main_layout"], ["id", "content", 1, "main_content"], [3, "logoutUser", 4, "ngIf"], ["id", "accordionSidebar", 1, "navbar-nav", "sidebar", "sidebar-bright", "themebgColor"], [3, "toggleChanged"], [1, "text-center", "d-none", "d-md-inline"], ["id", "sidebarToggle", 1, "rounded-circle", "border-0", "toggle-btn", 3, "click"], [1, "fas", "fa-left-right"], [3, "logoutUser"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LayoutComponent_ul_1_Template, 7, 1, "ul", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LayoutComponent_app_navbar_4_Template, 1, 0, "app-navbar", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userLoggedIn || ctx.onMenuShow);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userLoggedIn || ctx.onMenuShow);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent],
      styles: [".main_layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fbGF5b3V0e1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authentication/authentication.service */ 2059);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);







function LoginComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls["username"].hasError("required"));
  }
}
function LoginComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_span_21_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.passwordType = "Password");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_span_22_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.passwordType = "Text");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_23_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loginForm.controls["password"].hasError("required"));
  }
}
class LoginComponent {
  constructor(router, fb, authService, toastr) {
    this.router = router;
    this.fb = fb;
    this.authService = authService;
    this.toastr = toastr;
    this.passwordType = 'Password';
    this.formvalid = false;
    this.loginForm = this.fb.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {}
  login() {
    if (this.loginForm.invalid) {
      this.formvalid = true;
    } else {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: response => {
          this.toastr.success(response.message);
          localStorage.setItem('username', this.loginForm.value.username);
          localStorage.setItem('userID', response.userID);
          this.loginForm.reset();
          this.authService.onLoginUser(true);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          if (err?.error.message) {
            this.toastr.error(err?.error.message);
          } else {
            this.toastr.error("Unavailable SQL Server");
          }
        }
      });
    }
  }
  fbLogin(fbAuthSuccess) {
    this.authService.onLoginUser(fbAuthSuccess);
    this.router.navigate(['/dashboard']);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 44,
      vars: 6,
      consts: [[1, "themebgColor", "h-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-12", "col-md-9"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], ["src", "../../../assets/images/brain.jpg", 1, "col-lg-6", "d-none", "d-lg-block"], [1, "col-lg-6"], [1, "p-4"], [1, "text-center"], [1, "h4", "text-gray-900", "mb-4"], [1, "user", 3, "formGroup"], [1, "form-group"], ["src", "../../../assets/images/user.png", 1, "user-icon"], ["type", "text", "formControlName", "username", "id", "exampleInputUsername", "placeholder", "*Enter username", 1, "form-control", "form-control-user"], ["class", "color-red", 4, "ngIf"], [1, "form-group", "pt-2"], ["src", "../../../assets/images/password.png", 1, "password-icon"], ["formControlName", "password", "placeholder", "*Password", 1, "form-control", "form-control-user", 3, "type"], ["class", "fa fa-eye showPassword cursor", 3, "click", 4, "ngIf"], ["class", "fa fa-eye-slash showPassword cursor", 3, "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-user", "btn-block", "login-btn", 3, "click"], [1, "form-group", "pt-2", "cursor"], ["routerLink", "/login"], ["src", "../../../assets/images/google.png", 1, "floatLeft"], [1, "form-group", "cursor", 2, "margin-left", "15%"], [1, "demo-login", 3, "click"], ["src", "../../../assets/images/facebook.png"], [1, "demo-text"], [1, "text-center", "floatLeft", 2, "margin", "0px 35px", "font-weight", "600"], ["href", "", 1, "small"], [1, "text-center", 2, "font-weight", "600"], ["routerLink", "/signup", 1, "small"], [1, "color-red"], [4, "ngIf"], [1, "fa", "fa-eye", "showPassword", "cursor", 3, "click"], [1, "fa", "fa-eye-slash", "showPassword", "cursor", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h1", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Brain Squeezes!!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 12)(14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 14)(16, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 18)(20, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_span_21_Template, 1, 0, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 1, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 2, 1, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17)(26, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 23)(30, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 26)(33, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_33_listener() {
            return ctx.fbLogin(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u21E8 Click here for Demo Login.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 30)(39, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 32)(42, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Create an Account!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.loginForm.controls["username"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.passwordType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordType == "Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordType == "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.loginForm.controls["password"].dirty);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".showPassword[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 18px;\n  margin: -35px 18px 0px 0px;\n}\n\n\n\n.demo-login[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n}\n\n\n\n.demo-text[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n\n\n.demo-login[_ngcontent-%COMP%]:hover   .demo-text[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQSxvQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUEsa0JBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQSxpQkFBQTtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dQYXNzd29yZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMThweDsgIFxyXG4gIG1hcmdpbjogLTM1cHggMThweCAwcHggMHB4O1xyXG59XHJcblxyXG4vKiBEZW1vIExvZ2luIExpbmsgKi9cclxuLmRlbW8tbG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIFJlZCBTcGFuIFRleHQgKi9cclxuLmRlbW8tdGV4dCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qIEhvdmVyIEVmZmVjdCAqL1xyXG4uZGVtby1sb2dpbjpob3ZlciAuZGVtby10ZXh0IHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




class NavbarComponent {
  constructor(router) {
    this.router = router;
    this.isMenuToggled = true;
    this.loginHeader = false;
    this.userLoggedIn = false;
    this.bgColor = 'white';
    this.logoutUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.userName = '';
    this.userName = localStorage.getItem('username') || '';
  }
  logout() {
    this.logoutUser.emit(false);
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      outputs: {
        logoutUser: "logoutUser"
      },
      decls: 57,
      vars: 4,
      consts: [[1, "container-fluid", "justify-content-between"], [1, "d-flex"], [1, "input-group", "w-auto", "my-auto", "d-none", "d-sm-flex"], ["autocomplete", "off", "type", "search", "placeholder", "Search", 1, "form-control", 2, "min-width", "125px"], [1, "input-group-text", "border-0", "d-none", "d-lg-flex", "cursor", "themebgColor", "text-white"], [1, "fa", "fa-search"], [1, "navbar-nav", "flex-row", "d-none", "d-md-flex"], [1, "notification-container"], ["id", "navbarDropdownMenuLink", "role", "button", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "hidden-arrow"], [1, "fa", "fa-bell", "fa-lg"], [1, "badge", "rounded-pill", "badge-notification", "bg-danger"], [1, "notification-dropdown", "dropdown-menu", "dropdown-menu-end"], ["href", "", 1, "dropdown-item"], [1, "chatbox-container", "px-2"], ["href", "", "id", "navbarDropdownMenuLink", "role", "button", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "hidden-arrow"], [1, "fa", "fa-comments", "fa-lg"], [1, "chatbox-dropdown", "dropdown-menu", "dropdown-menu-end"], [1, "navbar-nav", "flex-row"], ["c", "", 1, "profile-container"], [1, "nav-link", "d-sm-flex", "align-items-sm-center"], [1, "d-none", "d-sm-block", "ms-1"], ["src", "../../../assets/images/profile_picture.png", "height", "35", "alt", "", 1, "rounded-circle"], [1, "profile-dropdown", "dropdown-menu", "dropdown-menu-end"], ["routerLink", "/profile-options/profile", 1, "dropdown-item"], ["routerLink", "/profile-options/settings", 1, "dropdown-item"], ["routerLink", "/profile-options/activity", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "div", 0)(2, "div", 1)(3, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11)(14, "li")(15, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notification a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "notification b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "notification c");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 16)(29, "li")(30, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "message 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "message 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "message 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 17)(39, "li", 18)(40, "a", 19)(41, "strong", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 22)(45, "li")(46, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_55_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar navbar-expand navbar-light bg-", ctx.bgColor, "  topbar mb-4 static-top shadow");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
      styles: [".notification-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.notification-dropdown[_ngcontent-%COMP%] {\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n}\n\n.notification-container[_ngcontent-%COMP%]:hover   .notification-dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.chatbox-dropdown[_ngcontent-%COMP%] {\n  display: none;\n  top: 75%;\n  left: 55%;\n  z-index: 1;\n}\n\n.chatbox-container[_ngcontent-%COMP%]:hover   .chatbox-dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.profile-dropdown[_ngcontent-%COMP%] {\n  display: none;\n  top: 85%;\n  left: 83%;\n  z-index: 1;\n}\n\n.profile-container[_ngcontent-%COMP%]:hover   .profile-dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tY29udGFpbmVyOmhvdmVyIC5ub3RpZmljYXRpb24tZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jaGF0Ym94LWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDc1JTtcclxuICAgIGxlZnQ6IDU1JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jaGF0Ym94LWNvbnRhaW5lcjpob3ZlciAuY2hhdGJveC1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnByb2ZpbGUtZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRvcDogODUlO1xyXG4gICAgbGVmdDogODMlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyOmhvdmVyIC5wcm9maWxlLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4264:
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-options/activity/activity.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityComponent: () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ActivityComponent {
  static {
    this.ɵfac = function ActivityComponent_Factory(t) {
      return new (t || ActivityComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivityComponent,
      selectors: [["app-activity"]],
      decls: 2,
      vars: 0,
      template: function ActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "activity works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8106:
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-options/logout/logout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LogoutComponent {
  static {
    this.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 192:
/*!***********************************************************************************!*\
  !*** ./src/app/components/profile-options/profile-view/profile-view.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileViewComponent: () => (/* binding */ ProfileViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ProfileViewComponent {
  static {
    this.ɵfac = function ProfileViewComponent_Factory(t) {
      return new (t || ProfileViewComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileViewComponent,
      selectors: [["app-profile-view"]],
      decls: 2,
      vars: 0,
      template: function ProfileViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile-view works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3608:
/*!***************************************************************************!*\
  !*** ./src/app/components/profile-options/settings/settings.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SettingsComponent {
  static {
    this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 2,
      vars: 0,
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3089:
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionsComponent: () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared/common.service */ 7313);
/* harmony import */ var src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/QandA/qand-aservice.service */ 2099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/qanda-popup/qanda-popup.component */ 6930);
/* harmony import */ var _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/qanda-accordian/qanda-accordian.component */ 7722);






function QuestionsComponent_div_6_hr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "hr");
  }
}
function QuestionsComponent_div_6_h4_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Answers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuestionsComponent_div_6_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-qanda-accordian", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ans_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ans_r6)("question_type", false);
  }
}
function QuestionsComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuestionsComponent_div_6_div_7_div_1_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ans_r6 = ctx.$implicit;
    const que_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ans_r6.qid === que_r1.qid);
  }
}
function QuestionsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-qanda-accordian", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, QuestionsComponent_div_6_hr_5_Template, 1, 0, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, QuestionsComponent_div_6_h4_6_Template, 2, 0, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, QuestionsComponent_div_6_div_7_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const que_r1 = ctx.$implicit;
    const ind_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Question Id: ", "#", "", que_r1.qid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", que_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onAnswersAvailable(ind_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onAnswersAvailable(ind_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.answers);
  }
}
class QuestionsComponent {
  constructor(commonService, qandAService) {
    this.commonService = commonService;
    this.qandAService = qandAService;
    //I need a help to create an angular application with detailed explanation. I have clearly recorded a quick video file for more details about my project architecture.Please go through it once!!
    this.questions = [{
      qid: 1,
      title: 'How to handle route guards in Angular?',
      description: 'I need to prevent unauthorized users from accessing certain routes. What is the best way to implement route guards?',
      uid: 1,
      authorName: 'surya',
      categoryId: 3,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard.png',
      extension: 'image/jpeg',
      rating: 14
    }, {
      qid: 2,
      title: 'Angular Change Detection Optimization',
      description: 'How can I optimize change detection for performance improvement in a large-scale Angular app?',
      uid: 2,
      authorName: 'prakash',
      categoryId: 2,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection.png',
      extension: 'image/jpeg',
      rating: 12
    }, {
      qid: 3,
      title: 'Error: ExpressionChangedAfterItHasBeenCheckedError',
      description: "I'm getting this error in my Angular component. How do I fix it?",
      uid: 3,
      authorName: 'vyshnav',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error.png',
      extension: 'image/jpeg',
      rating: 9
    }, {
      qid: 4,
      title: 'Lazy Loading Modules in Angular',
      description: 'How can I implement lazy loading for better performance in my Angular application?',
      uid: 4,
      authorName: 'bharat',
      categoryId: 4,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading.png',
      extension: 'image/jpeg',
      rating: 7
    }, {
      qid: 5,
      title: 'Best Practices for Angular State Management',
      description: 'Should I use NgRx or a simpler solution for state management in Angular?',
      uid: 5,
      authorName: 'chiranjeevi',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management.png',
      extension: 'image/jpeg',
      rating: 15
    }, {
      qid: 6,
      title: 'Optimizing Angular Performance for Large Apps',
      description: 'What are the best strategies to reduce rendering time and improve performance in Angular applications?',
      uid: 6,
      authorName: 'Praveen Suggula',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance.png',
      extension: 'image/jpeg',
      rating: 10
    }];
    this.answers = [{
      aid: 1,
      description: 'Use Angular route guards like CanActivate and CanDeactivate. Implement authentication checks in the guard to prevent unauthorized access.',
      uid: 2,
      authorName: 'prakash',
      qid: 1,
      categoryId: 3,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard_solution.png',
      extension: 'image/jpeg',
      rating: 20
    }, {
      aid: 2,
      description: 'For better performance, use ChangeDetectionStrategy.OnPush and trackBy in *ngFor. Also, avoid unnecessary bindings.',
      uid: 3,
      authorName: 'vyshnav',
      qid: 2,
      categoryId: 2,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection_solution.png',
      extension: 'image/jpeg',
      rating: 17
    }, {
      aid: 3,
      description: "The 'ExpressionChangedAfterItHasBeenCheckedError' usually occurs due to modifying component properties after change detection. Try wrapping updates in setTimeout or using ChangeDetectorRef.detectChanges().",
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 3,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error_solution.png',
      extension: 'image/jpeg',
      rating: 14
    }, {
      aid: 4,
      description: 'To enable lazy loading, define your routes using loadChildren and ensure your feature modules are standalone.',
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 4,
      categoryId: 4,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading_solution.png',
      extension: 'image/jpeg',
      rating: 11
    }, {
      aid: 5,
      description: 'For small applications, BehaviorSubject and services are enough. For large apps, use NgRx or Akita for better state management.',
      uid: 6,
      authorName: 'niranjan',
      qid: 5,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management_solution.png',
      extension: 'image/jpeg',
      rating: 9
    }, {
      aid: 6,
      description: 'Use lazy loading, OnPush change detection, trackBy in *ngFor, and avoid heavy computations in templates.',
      uid: 2,
      authorName: 'prakash',
      qid: 6,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance_solution.png',
      extension: 'image/jpeg',
      rating: 8
    }];
    this.ansCount = 0;
  }
  ngOnInit() {
    this.qandAService.getQandAList("Question", 2).subscribe(x => console.log(x));
    this.questions = this.questions.sort((a, b) => b.qid - a.qid);
  }
  onAnswersLength(queIndex, ansIndex) {
    this.answers[ansIndex].qid == this.questions[queIndex].qid ? this.ansCount++ : this.ansCount;
    return this.ansCount;
  }
  onAnswersAvailable(queIndex) {
    return this.answers.filter(x => x.qid == this.questions[queIndex].qid).length > 0 ? true : false;
  }
  isQuestionType(isQuestion) {
    if (isQuestion) {
      this.commonService.onToggleQandAType(true);
    } else {
      this.commonService.onToggleQandAType(false);
    }
  }
  static {
    this.ɵfac = function QuestionsComponent_Factory(t) {
      return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_1__.QandAService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: QuestionsComponent,
      selectors: [["app-questions"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "recent-questions"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn", "ask-question-btn", 3, "click"], ["class", "m-3 mt-0 accordian", 4, "ngFor", "ngForOf"], [1, "m-3", "mt-0", "accordian"], [1, "container", "question-container"], [1, "mb-0", "themeColor"], [3, "data"], [4, "ngIf"], ["class", "mb-0 answer-heading", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mb-0", "answer-heading"], [3, "data", "question_type"]],
      template: function QuestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Recent Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionsComponent_Template_button_click_4_listener() {
            return ctx.isQuestionType(true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " + Ask Question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, QuestionsComponent_div_6_Template, 8, 6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-qanda-popup");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.questions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _core_qanda_popup_qanda_popup_component__WEBPACK_IMPORTED_MODULE_2__.QandAPopupComponent, _core_qanda_accordian_qanda_accordian_component__WEBPACK_IMPORTED_MODULE_3__.QandaAccordianComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2661:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function SidebarComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidebarComponent_hr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 5);
  }
}
function SidebarComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidebarComponent_hr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 5);
  }
}
function SidebarComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SidebarComponent_hr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 5);
  }
}
function SidebarComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class SidebarComponent {
  constructor() {
    this.toggleChanged = false;
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      inputs: {
        toggleChanged: "toggleChanged"
      },
      decls: 24,
      vars: 7,
      consts: [["routerLink", "/dashboard", 1, "sidebar-brand", "d-md-flex", "align-items-center", "justify-content-center", "cursor"], [1, "sidebar-brand-icon-a"], ["src", "../../../assets/images/b_icon.png", "alt", ""], [1, "nav-link"], [1, "sidebar-brand-icon-b"], [1, "sidebar-divider", "d-none", "d-md-block"], ["routerLink", "/dashboard", 1, "nav-item", "cursor"], ["src", "../../../assets/images/dashboard.png", "alt", ""], ["class", "nav-link", 4, "ngIf"], ["class", "sidebar-divider d-none d-md-block", 4, "ngIf"], ["routerLink", "/categories", 1, "nav-item", "cursor"], ["src", "../../../assets/images/categorize.png", "alt", ""], ["routerLink", "/questions", 1, "nav-item", "cursor"], ["src", "../../../assets/images/tasks.png", "alt", ""], ["routerLink", "/tags", 1, "nav-item", "cursor"], ["src", "../../../assets/images/tags.png", "alt", ""]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3)(4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brain Squeezes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_a_11_Template, 3, 0, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_hr_12_Template, 1, 0, "hr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SidebarComponent_a_15_Template, 3, 0, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_hr_16_Template, 1, 0, "hr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_a_19_Template, 3, 0, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_hr_20_Template, 1, 0, "hr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidebarComponent_a_23_Template, 3, 0, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleChanged);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1535:
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authentication/authentication.service */ 2059);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);







function SignupComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_14_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.controls["firstName"].hasError("required"));
  }
}
function SignupComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_17_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.signUpForm.controls["lastName"].hasError("required"));
  }
}
function SignupComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Enter a valid email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_21_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupComponent_div_21_div_2_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.controls["email"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.signUpForm.controls["email"].hasError("email"));
  }
}
function SignupComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_24_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.signUpForm.controls["username"].hasError("required"));
  }
}
function SignupComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_28_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.signUpForm.controls["password"].hasError("required"));
  }
}
function SignupComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Required password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SignupComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupComponent_div_31_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.signUpForm.controls["password"].hasError("required"));
  }
}
class SignupComponent {
  constructor(router, fb, authService, toastr) {
    this.router = router;
    this.fb = fb;
    this.authService = authService;
    this.toastr = toastr;
    this.formvalid = false;
    this.signUpForm = this.fb.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {}
  signUp() {
    if (this.signUpForm.invalid) {
      this.formvalid = true;
    } else {
      console.log(this.signUpForm.value);
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: response => {
          this.toastr.success(response.message);
          this.signUpForm.reset();
          this.router.navigate(['/login']);
        },
        error: err => {
          this.toastr.error(err?.error.message);
        }
      });
    }
  }
  static {
    this.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 49,
      vars: 7,
      consts: [[1, "container"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-5", "d-none", "d-lg-block"], [1, "col-lg-12"], [1, "p-3"], [1, "text-center", "pt-3"], [1, "h4", "text-gray-900", "mb-4"], [1, "user", "register", 3, "formGroup"], [1, "form-group", "row", "pt-3"], [1, "col-sm-6", "mb-3", "mb-sm-0"], ["type", "text", "placeholder", "*First Name", "formControlName", "firstName", 1, "form-control", "form-control-user"], ["class", "color-red", 4, "ngIf"], [1, "col-sm-6"], ["type", "text", "placeholder", "*Last Name", "formControlName", "lastName", 1, "form-control", "form-control-user"], ["type", "email", "placeholder", "*Email Address", "formControlName", "email", "email", "", 1, "form-control", "form-control-user"], ["type", "text", "placeholder", "*Username (unique)", "formControlName", "username", 1, "form-control", "form-control-user"], ["type", "password", "placeholder", "*Password", "formControlName", "password", 1, "form-control", "form-control-user"], ["type", "password", "placeholder", "*Repeat Password", "formControlName", "repeatPassword", 1, "form-control", "form-control-user"], [1, "form-group", "pt-4"], [1, "btn", "btn-primary", "btn-user", "btn-block", "login-btn", 3, "click"], [1, "form-group", "px-4"], ["href", ""], ["src", "../../../assets/images/google.png", 1, "floatLeft"], [1, "form-group", 2, "margin-left", "10%"], ["src", "../../../assets/images/facebook.png", 1, ""], [1, "forget-password"], [1, "text-center", "floatLeft", 2, "margin", "0px 35px", "font-weight", "600"], ["href", "", 1, "small"], [1, "text-center", 2, "font-weight", "600"], ["routerLink", "/login", 1, "small"], [1, "color-red"], [4, "ngIf"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create an Account!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 9)(11, "div", 10)(12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignupComponent_div_14_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SignupComponent_div_17_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SignupComponent_div_21_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignupComponent_div_24_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10)(26, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SignupComponent_div_28_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SignupComponent_div_31_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20)(33, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_33_listener() {
            return ctx.signUp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Register Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22)(37, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25)(40, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 27)(43, "div", 28)(44, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 30)(47, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Already have an account? Login!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["firstName"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["lastName"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["email"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["username"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["password"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.signUpForm.controls["password"].dirty);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7677:
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsComponent: () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TagsComponent {
  static {
    this.ɵfac = function TagsComponent_Factory(t) {
      return new (t || TagsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagsComponent,
      selectors: [["app-tags"]],
      decls: 2,
      vars: 0,
      template: function TagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tags works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7722:
/*!*******************************************************************!*\
  !*** ./src/app/core/qanda-accordian/qanda-accordian.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QandaAccordianComponent: () => (/* binding */ QandaAccordianComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/shared/common.service */ 7313);
/* harmony import */ var src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/QandA/qand-aservice.service */ 2099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);





function QandaAccordianComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34)(2, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.question_type ? "Title: " + ctx_r0.data.title : ctx_r0.data.title);
  }
}
function QandaAccordianComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 36);
  }
}
function QandaAccordianComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.notRateUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_i_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_i_13_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onRateUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_i_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_i_18_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.notRateDown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_i_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_i_19_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onRateDown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_img_21_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onBookmark());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_img_22_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.onBookmark());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function QandaAccordianComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_div_34_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.toggleQandAType(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+ Add Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class QandaAccordianComponent {
  constructor(router, commonService, qandAService) {
    this.router = router;
    this.commonService = commonService;
    this.qandAService = qandAService;
    this.bookmarked = false;
    this.rateUp = 'not-voted';
    this.rateDown = 'not-voted';
    this.upvoteCount = 0;
    this.expandedIndex = -1;
    this.bodyHeight = 500;
    this.question_type = true;
    this.data = {};
  }
  ngOnInit() {
    this.upvoteCount = this.data.rating;
  }
  toggleAccordion(index) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
  }
  onRateUp() {
    if (this.rateUp === 'not-voted') {
      this.rateUp = 'voted';
      this.upvoteCount++;
    }
  }
  notRateUp() {
    if (this.rateUp === 'voted') {
      this.rateUp = 'not-voted';
      this.upvoteCount--;
    }
  }
  onRateDown() {
    if (this.rateDown === 'not-voted') {
      this.rateDown = 'voted';
      // Decrement the upvote count
      this.upvoteCount--;
    }
  }
  notRateDown() {
    if (this.rateDown === 'voted') {
      this.rateDown = 'not-voted';
      // Increment the upvote count
      this.upvoteCount++;
    }
  }
  onBookmark() {
    this.bookmarked = !this.bookmarked;
  }
  toggleQandAType(isQuestion) {
    if (isQuestion) {
      this.commonService.onToggleQandAType(true);
    } else {
      this.commonService.onToggleQandAType(false);
    }
  }
  downloadFile(type, file_id) {
    //let type = 'question';
    //let file_id = '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png';
    this.qandAService.GetSelectedDocumentData(type, file_id).subscribe(x => {
      const a = document.createElement('a');
      a.href = x.result;
      a.download = file_id.split('_').slice(1).join('_');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
  previewFile(type, file_id) {
    this.qandAService.GetSelectedDocumentData('question', '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png').subscribe(x => {
      var image = new Image();
      image.src = x.result;
      image.width = 1000;
      image.height = 500;
      var w = window.open("", '_blank');
      w?.document.write(image.outerHTML);
    });
  }
  static {
    this.ɵfac = function QandaAccordianComponent_Factory(t) {
      return new (t || QandaAccordianComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_1__.QandAService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: QandaAccordianComponent,
      selectors: [["app-qanda-accordian"]],
      inputs: {
        question_type: "question_type",
        data: "data"
      },
      decls: 43,
      vars: 12,
      consts: [[1, "container"], [1, "floatright", "mx-5", "mb-2"], ["src", "../../../assets/images/user_account.png", 1, "floatLeft", "cursor", 2, "width", "25px"], [1, "cursor", 2, "font-size", "15px"], [4, "ngIf"], ["class", "mx-1 mb-2 profile mb-1", 4, "ngIf"], [1, "body"], [1, "mx-1", "tools", "bodyheight", "w100", 2, "margin-top", "-24px"], [1, "div", 2, "width", "100%"], [2, "width", "20%", "margin-right", "-10px"], ["class", "fas fa-caret-up cursor rate active", 3, "click", 4, "ngIf"], ["class", "fas fa-caret-up cursor rate inactive", 3, "click", 4, "ngIf"], [1, "votecount"], [2, "float", "right", "margin-top", "-27px"], [2, "width", "20%", "margin-left", "-8px"], ["class", "fas fa-caret-up fa-rotate-180 cursor rate rate-down active", 3, "click", 4, "ngIf"], ["class", "fas fa-caret-up fa-rotate-180 cursor rate rate-down inactive", 3, "click", 4, "ngIf"], [1, "mx-1", "tools", "bodyheight"], ["class", "floatLeft mb-2 cursor", "style", "width: 25px;", "src", "../../../assets/images/bookmark_outlined.png", 3, "click", 4, "ngIf"], ["class", "floatLeft mb-2 cursor", "style", "width: 25px;", "src", "../../../assets/images/bookmark_booked.png", 3, "click", 4, "ngIf"], ["src", "../../../assets/images/chat_message.png", 1, "floatLeft", "cursor", 2, "width", "25px"], [1, "mb-3", "content", "bodyheight", 2, "font-size", "18px"], [1, "mx-2", "w-100"], ["href", "https://brain-squeezes-w6kx.vercel.app/", "target", "_blank"], ["src", "../../../assets/images/video_call.png", 1, "floatLeft", "mb-2", "cursor", "mb-2", 2, "width", "20px"], ["src", "../../../assets/images/call.png", 1, "floatLeft", "mb-2", "cursor", "mt-2", 2, "width", "20px"], [1, "mx-1", "profile", 2, "min-height", "100px"], [1, "w-100"], ["style", "width: 20%;", "class", "floatLeft", 4, "ngIf"], [1, "floatright", 2, "width", "26%"], [1, "btn", "themebgColor", "text-white", "mx-4", "btnOptions", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paperclip", "fa-lg", 3, "click"], [1, "floatright", 2, "width", "20%"], [1, "btn", "themebgColor", "text-white", "mx-2", "btnOptions", 3, "click"], [1, "profile", "mb-2", "overflowAuto"], [1, "floatLeft", "mx-2"], [1, "mx-1", "mb-2", "profile", "mb-1"], [1, "fas", "fa-caret-up", "cursor", "rate", "active", 3, "click"], [1, "fas", "fa-caret-up", "cursor", "rate", "inactive", 3, "click"], [1, "fas", "fa-caret-up", "fa-rotate-180", "cursor", "rate", "rate-down", "active", 3, "click"], [1, "fas", "fa-caret-up", "fa-rotate-180", "cursor", "rate", "rate-down", "inactive", 3, "click"], ["src", "../../../assets/images/bookmark_outlined.png", 1, "floatLeft", "mb-2", "cursor", 2, "width", "25px", 3, "click"], ["src", "../../../assets/images/bookmark_booked.png", 1, "floatLeft", "mb-2", "cursor", 2, "width", "25px", 3, "click"], [1, "floatLeft", 2, "width", "20%"], ["data-bs-toggle", "modal", "data-bs-target", "#filesModal", 1, "btn-sm", "themebgColor", "text-white", "btnOptions", 3, "click"]],
      template: function QandaAccordianComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "em", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, QandaAccordianComponent_ng_container_6_Template, 4, 1, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QandaAccordianComponent_div_7_Template, 1, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QandaAccordianComponent_i_12_Template, 1, 0, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, QandaAccordianComponent_i_13_Template, 1, 0, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "strong", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, QandaAccordianComponent_i_18_Template, 1, 0, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, QandaAccordianComponent_i_19_Template, 1, 0, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, QandaAccordianComponent_img_21_Template, 1, 0, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, QandaAccordianComponent_img_22_Template, 1, 0, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "div", 22)(28, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 26)(33, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, QandaAccordianComponent_div_34_Template, 3, 0, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 29)(36, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_Template_button_click_36_listener() {
            return ctx.downloadFile("question", ctx.data.file_id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_Template_i_click_37_listener() {
            return ctx.downloadFile("question", ctx.data.file_id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u00A0 Download \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 32)(40, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_Template_button_click_40_listener() {
            return ctx.previewFile("question", ctx.data.file_id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QandaAccordianComponent_Template_i_click_41_listener() {
            return ctx.previewFile("question", ctx.data.file_id);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\u00A0 Preview \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.authorName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateUp === "voted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateUp === "not-voted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.upvoteCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateDown === "voted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateDown === "not-voted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.bookmarked);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bookmarked);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.question_type);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".profile[_ngcontent-%COMP%] {\n  width: 87%;\n  min-height: 30px;\n  margin-left: 8% !important;\n}\n\n.body[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%] {\n  width: 3%;\n  float: left;\n}\n.body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 87%;\n  float: left;\n  padding: 2px 5px;\n  background-color: #D9D9D9;\n  color: #6C6C6C;\n  margin-left: 2.5px;\n  overflow: auto;\n}\n.body[_ngcontent-%COMP%]   .bodyheight[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 10px;\n  margin-left: 10px;\n  min-height: 60px;\n  max-height: 500px;\n}\n\n.btnOptions[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: none;\n}\n\n.rate[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-bottom: -20px;\n  margin-left: -20px;\n}\n\n.rate-down[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-top: -20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #6C6C6C;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  color: #D9D9D9;\n}\n\n.votecount[_ngcontent-%COMP%] {\n  width: 60%;\n  font-size: 22px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9xYW5kYS1hY2NvcmRpYW4vcWFuZGEtYWNjb3JkaWFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFHSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQVI7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgLnRvb2xzIHtcclxuICAgICAgICB3aWR0aDogMyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7IFxyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gICAgICAgIGNvbG9yOiAjNkM2QzZDO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5ib2R5aGVpZ2h0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG59XHJcbi5idG5PcHRpb25ze1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucmF0ZSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7ICBcclxuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLnJhdGUtZG93biB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzZDNkM2QztcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjRDlEOUQ5O1xyXG59XHJcblxyXG4udm90ZWNvdW50IHtcclxuICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgZm9udC1zaXplOiAyMnB4OyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6930:
/*!***********************************************************!*\
  !*** ./src/app/core/qanda-popup/qanda-popup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QandAPopupComponent: () => (/* binding */ QandAPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/QandA/qand-aservice.service */ 2099);
/* harmony import */ var src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared/common.service */ 7313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_core_directives_file_drag_drop_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/directives/file-drag-drop/file-drag-drop.directive */ 7006);








function QandAPopupComponent_input_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 31);
  }
}
function QandAPopupComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *Required title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QandAPopupComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QandAPopupComponent_div_13_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.QandAForm.controls["title"].hasError("required"));
  }
}
function QandAPopupComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *Required description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QandAPopupComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QandAPopupComponent_div_15_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.QandAForm.controls["description"].hasError("required"));
  }
}
function QandAPopupComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.selectedCategoryType.name);
  }
}
function QandAPopupComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QandAPopupComponent_li_20_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const file_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.onCategoryTypeClick($event.target.innerText, file_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r10.categoryType);
  }
}
function QandAPopupComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " *Please select category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QandAPopupComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QandAPopupComponent_div_22_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.QandAForm.controls["category"].hasError("required"));
  }
}
function QandAPopupComponent_b_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Selected Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function QandAPopupComponent_div_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", file_r15.name, " - ", ctx_r14.filesSize(file_r15), "");
  }
}
function QandAPopupComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, QandAPopupComponent_div_26_li_2_Template, 2, 2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.selectedFiles);
  }
}
class QandAPopupComponent {
  constructor(toastr, fb, qandAService, commonService) {
    this.toastr = toastr;
    this.fb = fb;
    this.qandAService = qandAService;
    this.commonService = commonService;
    this.selectedCategoryType = {
      name: '* Select Category',
      id: '0'
    };
    this.selectedFiles = [];
    this.formvalid = false;
    this.QandAForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      file: ['']
    });
    this.type_question = true;
    this.commonService.questionType.subscribe(x => this.type_question = x);
  }
  ngOnInit() {
    this.lupFileTypes = [{
      id: 1,
      categoryType: 'Angular',
      ratings: 112
    }, {
      id: 2,
      categoryType: 'React',
      ratings: 6
    }, {
      id: 3,
      categoryType: 'SQL',
      ratings: 22
    }, {
      id: 4,
      categoryType: '.Net Core',
      ratings: 44
    }, {
      id: 5,
      categoryType: 'Java',
      ratings: 55
    }];
  }
  onCategoryTypeClick(value, id) {
    this.selectedCategoryType.name = value;
    this.selectedCategoryType.id = id;
    this.QandAForm.controls['category'].setValue(id);
    return false;
  }
  UploadDraggedFiles(draggedFilesList) {
    if (draggedFilesList != null && draggedFilesList !== undefined && draggedFilesList.length > 0) {
      this.ValidateFilesList(draggedFilesList);
    }
  }
  filesSize(filesize) {
    let selectedfilesize = filesize.size / 1024;
    let filesizetype = Number.parseFloat(selectedfilesize.toFixed(2)) + ' KB';
    if (selectedfilesize > 1024) {
      selectedfilesize = selectedfilesize / 1024;
      filesizetype = Number.parseFloat(selectedfilesize.toFixed(2)) + ' MB';
    }
    return filesizetype;
  }
  OnFileUpload(selectedFile) {
    if (selectedFile != null && selectedFile !== undefined && selectedFile.length > 0) {
      this.ValidateFilesList(selectedFile);
    }
  }
  ValidateFilesList(files) {
    for (const file of files) {
      if (file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'application/pdf' || file.type == 'video/mp4' || file.type == 'video/mp3' || file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/vnd.ms-excel' || file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.selectedFiles.push(file);
      } else {
        this.toastr.error('Invalid File Type');
      }
    }
    this.QandAForm.controls['file'].setValue(this.selectedFiles[0]);
  }
  dismissParentPopups() {
    let answersModel = document.getElementsByClassName('modal-backdrop');
    if (answersModel.length > 0) {
      Object.keys(answersModel).forEach(item => {
        answersModel[item].classList.remove('modal-backdrop');
      });
    }
  }
  submitQandA() {
    // upload image along with question
    if (this.QandAForm.invalid) {
      this.formvalid = true;
    } else {
      console.log(this.QandAForm.value);
      const userID = localStorage.getItem('userID')?.toString();
      const formdata = new FormData();
      formdata.append("file", this.QandAForm.value.file);
      formdata.append("uid", userID ? userID : '1');
      formdata.append("qid", "5"); // need to remove and set int with auto increment in sql using identity
      formdata.append("categoryId", this.selectedCategoryType.id);
      formdata.append("title", this.QandAForm.value.title);
      formdata.append("description", this.QandAForm.value.description);
      this.qandAService.UploadDocumentData(formdata).subscribe(res => {
        if (res.errors && res.errors.length > 0) {
          this.toastr.error(res.errors[0]);
        } else {
          this.toastr.success(res.message, "Success");
          let closeQandA = document.getElementById('closeQandA');
          if (closeQandA) {
            closeQandA.click();
          }
          //this.submittedObject = formdata;
        }
      });
    }
  }

  static {
    this.ɵfac = function QandAPopupComponent_Factory(t) {
      return new (t || QandAPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_QandA_qand_aservice_service__WEBPACK_IMPORTED_MODULE_0__.QandAService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_shared_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: QandAPopupComponent,
      selectors: [["app-qanda-popup"]],
      decls: 42,
      vars: 11,
      consts: [["id", "filesModal", "tabindex", "-1", "data-bs-backdrop", "static", "aria-labelledby", "exampleModalLabel", "aria-modal", "true", "role", "dialog", "appFileDragDrop", "", 1, "modal", "fade", 3, "draggedFile"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "themebgColor"], ["id", "noteModalLabel", 1, "modal-title", "text-white"], ["type", "button", "id", "closeQandA", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-white", "opacity-100", 3, "click"], [1, "modal-body", 2, "color", "#F4EFEF"], [1, "input-group", "d-inline", "my-3"], [1, "panel", "panel-default"], [1, "panel-body"], [3, "formGroup"], ["style", "font-size: 16px;", "formControlName", "title", "class", "form-control form-control-sm mb-3", "rows", "3", "placeholder", "*Please Enter Title", 4, "ngIf"], ["class", "color-red mb-2", 4, "ngIf"], ["formControlName", "description", "rows", "3", 1, "form-control", "form-control-sm", "mb-3", 2, "font-size", "16px", 3, "placeholder"], [1, "dropdown", "w-100"], [1, "floatLeft", "w-50"], ["class", "btn dropdown-toggle themebgColor text-white mx-4", "type", "button", "data-target", "#dropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 4, "ngIf"], ["id", "dropdown", "aria-labelledby", "fileType", 1, "dropdown-menu", "dropdown-menu-end", "ulmenu"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "color-red mt-2", 4, "ngIf"], [1, "text-dark", 2, "margin", "25px"], [4, "ngIf"], ["id", "list", 4, "ngIf"], [1, "floatLeft", "w-50", "mt-1"], ["type", "file", "for", "files", 1, "btn", "themebgColor", "text-white", 2, "margin-right", "16%"], ["aria-hidden", "true", 1, "fa", "fa-paperclip", "fa-lg"], ["type", "file", "id", "files", "name", "files", 2, "display", "none", 3, "change"], [1, "mt-3", "floatLeft", 2, "font-size", "14px"], [1, "themeColor"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-secondary", "text-white", "floatright", "mx-3", "px-4", 2, "margin-top", "10%", 3, "click"], ["type", "submit", 1, "btn", "themebgColor", "text-white", "floatright", "px-4", 2, "margin-top", "10%", 3, "click"], ["formControlName", "title", "rows", "3", "placeholder", "*Please Enter Title", 1, "form-control", "form-control-sm", "mb-3", 2, "font-size", "16px"], [1, "color-red", "mb-2"], ["type", "button", "data-target", "#dropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "themebgColor", "text-white", "mx-4"], [3, "click"], ["href", "#", 1, "dropdown-item"], [1, "color-red", "mt-2"], ["id", "list"], ["class", "color-red", 4, "ngFor", "ngForOf"], [1, "color-red"]],
      template: function QandAPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("draggedFile", function QandAPopupComponent_Template_div_draggedFile_0_listener($event) {
            return ctx.UploadDraggedFiles($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QandAPopupComponent_Template_button_click_6_listener() {
            return ctx.dismissParentPopups();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, QandAPopupComponent_input_12_Template, 1, 0, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, QandAPopupComponent_div_13_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, QandAPopupComponent_div_15_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14)(17, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, QandAPopupComponent_button_18_Template, 2, 1, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, QandAPopupComponent_li_20_Template, 3, 1, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, QandAPopupComponent_div_22_Template, 2, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20)(24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, QandAPopupComponent_b_25_Template, 2, 0, "b", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, QandAPopupComponent_div_26_Template, 3, 1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 23)(28, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Upload File ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function QandAPopupComponent_Template_input_change_31_listener($event) {
            return ctx.OnFileUpload($event.target.files);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 27)(33, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "* Acceptable file formats .jpg, .png, .pdf, .doc, .xls, .MP3, .MP4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "* File size must be below 100MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QandAPopupComponent_Template_button_click_38_listener() {
            return ctx.dismissParentPopups();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QandAPopupComponent_Template_button_click_40_listener() {
            return ctx.submitQandA();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Create ", ctx.type_question ? "Question" : "Answer", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.QandAForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type_question);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.QandAForm.controls["title"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("placeholder", "*Enter your ", ctx.type_question ? "question" : "answer", "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.QandAForm.controls["description"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type_question);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lupFileTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formvalid || ctx.QandAForm.controls["category"].dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFiles.length != 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFiles.length != 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _components_core_directives_file_drag_drop_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__.FileDragDropDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6824:
/*!*********************************************************!*\
  !*** ./src/app/core/video-call/video-call.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppVideoCallComponent: () => (/* binding */ AppVideoCallComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AppVideoCallComponent {
  ngOnInit() {
    console.log("ngOnInit is called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit is called");
    // Place your script here if needed
  }

  static {
    this.ɵfac = function AppVideoCallComponent_Factory(t) {
      return new (t || AppVideoCallComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppVideoCallComponent,
      selectors: [["app-video-call"]],
      decls: 3,
      vars: 0,
      consts: [["id", "root"]],
      template: function AppVideoCallComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "video-call works!s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n#myRoot[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS92aWRlby1jYWxsL3ZpZGVvLWNhbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG5cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI215Um9vdCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */", "#root[_ngcontent-%COMP%] {\n      width: 100vw;\n      height: 100vh;\n    }"]
    });
  }
}

/***/ }),

/***/ 2099:
/*!*********************************************************!*\
  !*** ./src/app/services/QandA/qand-aservice.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QandAService: () => (/* binding */ QandAService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class QandAService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://localhost:7184/api/';
  }
  // Upload Files with form Data
  UploadDocumentData(document) {
    return this.http.post(`${this.baseUrl}FileUpload/`, document).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      return response;
    }));
  }
  GetSelectedDocumentData(type, file_id) {
    let documentReq = {
      Type: type,
      file_id: file_id
    };
    return this.http.post(`${this.baseUrl}FileUpload/fileDetails`, documentReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      return response;
    }));
  }
  getQandAList(type, uid) {
    let documentReq = {
      type: type,
      uid: +uid
    };
    return this.http.post(`${this.baseUrl}QandA/GetQandAList`, documentReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      return response;
    }));
  }
  static {
    this.ɵfac = function QandAService_Factory(t) {
      return new (t || QandAService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QandAService,
      factory: QandAService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2059:
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AuthenticationService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://localhost:7184/api/User/';
    this.observableLoginChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false); // Local subject variable to pass next calls
    this.userLoggedIn = this.observableLoginChange.asObservable();
  }
  signUp(userObject) {
    const userRequest = {
      Role: "User",
      Token: "",
      LastName: userObject.lastName,
      UserName: userObject.username,
      FirstName: userObject.firstName,
      email: userObject.email,
      password: userObject.password
    };
    return this.http.post(`${this.baseUrl}signup`, userRequest);
  }
  login(loginObj) {
    const userRequest = {
      Role: "",
      Token: "",
      LastName: "",
      UserName: loginObj.username,
      FirstName: "",
      email: "",
      password: loginObj.password
    };
    return this.http.post(`${this.baseUrl}authentication`, userRequest);
  }
  onLoginUser(loginStatus) {
    this.observableLoginChange.next(loginStatus);
  }
  static {
    this.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7313:
/*!***************************************************!*\
  !*** ./src/app/services/shared/common.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CommonService {
  constructor() {
    this.observableQueTypeChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.questionType = this.observableQueTypeChange.asObservable();
  }
  onToggleQandAType(isQuestionType) {
    this.observableQueTypeChange.next(isQuestionType);
  }
  static {
    this.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map