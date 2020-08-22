"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Create = _interopRequireDefault(require("../views/Create.vue"));

var _Update = _interopRequireDefault(require("../views/Update.vue"));

var _routerNames = _interopRequireDefault(require("./routerNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: _routerNames["default"].Home,
  component: _Home["default"]
}, {
  path: '/create',
  name: _routerNames["default"].Create,
  component: _Create["default"]
}, {
  path: '/update/:id',
  name: _routerNames["default"].Update,
  component: _Update["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;