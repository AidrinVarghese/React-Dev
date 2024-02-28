"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTasks = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchTasks = function fetchTasks(offset) {
  return regeneratorRuntime.async(function fetchTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://d60e33ed-236f-40ea-b67d-ae6003a9496b.mock.pstmn.io/tasks?offset=".concat(offset)).then(function (res) {
            return res.data;
          }) // .then(res => res.data)
          ["catch"](function (err) {
            return err;
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.fetchTasks = fetchTasks;