// I have no clue of what's in here
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] = void 0;
        var allRecipesData = [
          {
            id: 0,
            name: "Biscuits",
            img: "img/biscuits.jpg",
          },
          {
            id: 1,
            name: "Bulgogi",
            img: "img/bulgogi.jpg",
          },
          {
            id: 2,
            name: "Calamari",
            img: "img/calamari.jpg",
          },
          {
            id: 3,
            name: "Ceviche",
            img: "img/ceviche.jpg",
          },
          {
            id: 4,
            name: "Cheeseburger",
            img: "img/cheeseburger.jpg",
          },
          {
            id: 5,
            name: "Churrasco",
            img: "img/churrasco.jpg",
          },
          {
            id: 6,
            name: "Dumplings",
            img: "img/dumplings.jpg",
          },
          {
            id: 7,
            name: "Fish & Chips",
            img: "img/fishnchips.jpg",
          },
          {
            id: 8,
            name: "Hummus",
            img: "img/hummus.jpg",
          },
          {
            id: 9,
            name: "Masala Dosa",
            img: "img/masaladosa.jpg",
          },
          {
            id: 10,
            name: "Pad Thai",
            img: "img/padthai.jpg",
          },
        ];
        var _default = allRecipesData;
        exports["default"] = _default;
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.App = App;

        var _react = _interopRequireDefault(require("react"));

        var _AllRecipes = require("../features/allRecipes/AllRecipes.js");

        var _SearchTerm = require("../features/searchTerm/SearchTerm.js");

        var _FavoriteRecipes = require("../features/favoriteRecipes/FavoriteRecipes.js");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function App() {
          return /*#__PURE__*/ _react["default"].createElement(
            "main",
            null,
            /*#__PURE__*/ _react["default"].createElement(
              "section",
              null,
              /*#__PURE__*/ _react["default"].createElement(
                _SearchTerm.SearchTerm,
                null
              )
            ),
            /*#__PURE__*/ _react["default"].createElement(
              "section",
              null,
              /*#__PURE__*/ _react["default"].createElement(
                "h2",
                null,
                "Favorite Recipes"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                _FavoriteRecipes.FavoriteRecipes,
                null
              )
            ),
            /*#__PURE__*/ _react["default"].createElement("hr", null),
            /*#__PURE__*/ _react["default"].createElement(
              "section",
              null,
              /*#__PURE__*/ _react["default"].createElement(
                "h2",
                null,
                "All Recipes"
              ),
              /*#__PURE__*/ _react["default"].createElement(
                _AllRecipes.AllRecipes,
                null
              )
            )
          );
        }
      },
      {
        "../features/allRecipes/AllRecipes.js": 6,
        "../features/favoriteRecipes/FavoriteRecipes.js": 8,
        "../features/searchTerm/SearchTerm.js": 10,
        react: undefined,
      },
    ],
    3: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] = void 0;

        var _toolkit = require("@reduxjs/toolkit");

        var _favoriteRecipesSlice = _interopRequireDefault(
          require("../features/favoriteRecipes/favoriteRecipesSlice")
        );

        var _searchTermSlice = _interopRequireDefault(
          require("../features/searchTerm/searchTermSlice")
        );

        var _allRecipesSlice = _interopRequireDefault(
          require("../features/allRecipes/allRecipesSlice")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var _default = (0, _toolkit.configureStore)({
          reducer: {
            favoriteRecipes: _favoriteRecipesSlice["default"],
            searchTerm: _searchTermSlice["default"],
            allRecipes: _allRecipesSlice["default"],
          },
        });

        exports["default"] = _default;
      },
      {
        "../features/allRecipes/allRecipesSlice": 7,
        "../features/favoriteRecipes/favoriteRecipesSlice": 9,
        "../features/searchTerm/searchTermSlice": 11,
        "@reduxjs/toolkit": undefined,
      },
    ],
    4: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] = FavoriteButton;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function FavoriteButton(_ref) {
          var children = _ref.children,
            onClickHandler = _ref.onClickHandler,
            icon = _ref.icon;
          return /*#__PURE__*/ _react["default"].createElement(
            "button",
            {
              className: "favorite-button",
              onClick: onClickHandler,
            },
            /*#__PURE__*/ _react["default"].createElement("img", {
              className: "heart-icon",
              alt: "",
              src: icon,
            }),
            children
          );
        }
      },
      { react: undefined },
    ],
    5: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] = Recipe;

        var _react = _interopRequireDefault(require("react"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function Recipe(_ref) {
          var recipe = _ref.recipe,
            children = _ref.children;
          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              key: recipe.id,
              className: "recipe",
              tabIndex: 0,
            },
            /*#__PURE__*/ _react["default"].createElement(
              "span",
              {
                className: "recipe-container",
              },
              /*#__PURE__*/ _react["default"].createElement(
                "h3",
                {
                  className: "recipe-name",
                },
                recipe.name
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "div",
                {
                  className: "image-container",
                },
                /*#__PURE__*/ _react["default"].createElement("img", {
                  src: recipe.img,
                  alt: "",
                  className: "recipe-image",
                })
              )
            ),
            children
          );
        }
      },
      { react: undefined },
    ],
    6: [
      function (require, module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            // eslint-disable-next-line no-func-assign
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            // eslint-disable-next-line no-func-assign
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.AllRecipes = void 0;

        var _react = _interopRequireWildcard(require("react"));

        var _reactRedux = require("react-redux");

        var _favoriteRecipesSlice = require("../favoriteRecipes/favoriteRecipesSlice.js");

        var _allRecipesSlice = require("./allRecipesSlice.js");

        var _FavoriteButton = _interopRequireDefault(
          require("../../components/FavoriteButton")
        );

        var _Recipe = _interopRequireDefault(
          require("../../components/Recipe")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();
          // eslint-disable-next-line no-func-assign
          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };
          return cache;
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return { default: obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }

        var favoriteIconURL =
          "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

        var AllRecipes = function AllRecipes() {
          var allRecipes = (0, _reactRedux.useSelector)(
            _allRecipesSlice.selectFilteredAllRecipes
          );
          var dispatch = (0, _reactRedux.useDispatch)();

          var onFirstRender = function onFirstRender() {
            dispatch((0, _allRecipesSlice.loadData)());
          };

          (0, _react.useEffect)(onFirstRender, []);

          var onAddRecipeHandler = function onAddRecipeHandler(recipe) {
            dispatch((0, _favoriteRecipesSlice.addRecipe)(recipe));
          };

          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "recipes-container",
            },
            allRecipes.map(function (recipe) {
              return /*#__PURE__*/ _react["default"].createElement(
                _Recipe["default"],
                {
                  recipe: recipe,
                  key: recipe.id,
                },
                /*#__PURE__*/ _react["default"].createElement(
                  _FavoriteButton["default"],
                  {
                    onClickHandler: function onClickHandler() {
                      return onAddRecipeHandler(recipe);
                    },
                    icon: favoriteIconURL,
                  },
                  "Add to Favorites"
                )
              );
            })
          );
        };

        exports.AllRecipes = AllRecipes;
      },
      {
        "../../components/FavoriteButton": 4,
        "../../components/Recipe": 5,
        "../favoriteRecipes/favoriteRecipesSlice.js": 9,
        "./allRecipesSlice.js": 7,
        react: undefined,
        "react-redux": undefined,
      },
    ],
    7: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] =
          exports.selectFilteredAllRecipes =
          exports.selectAllRecipes =
          exports.loadData =
            void 0;

        var _data = _interopRequireDefault(require("../../../data.js"));

        var _searchTermSlice = require("../searchTerm/searchTermSlice.js");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        var loadData = function loadData() {
          return {
            type: "allRecipes/loadData",
            payload: _data["default"],
          };
        };

        exports.loadData = loadData;
        var initialState = [];

        var allRecipesReducer = function allRecipesReducer() {
          var allRecipes =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case "allRecipes/loadData":
              return action.payload;

            case "favoriteRecipes/addRecipe":
              return allRecipes.filter(function (recipe) {
                return recipe.id !== action.payload.id;
              });

            case "favoriteRecipes/removeRecipe":
              return [].concat(_toConsumableArray(allRecipes), [
                action.payload,
              ]);

            default:
              return allRecipes;
          }
        };

        var selectAllRecipes = function selectAllRecipes(state) {
          return state.allRecipes;
        };

        exports.selectAllRecipes = selectAllRecipes;

        var selectFilteredAllRecipes = function selectFilteredAllRecipes(
          state
        ) {
          var allRecipes = selectAllRecipes(state);
          var searchTerm = (0, _searchTermSlice.selectSearchTerm)(state);
          return allRecipes.filter(function (recipe) {
            return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
          });
        };

        exports.selectFilteredAllRecipes = selectFilteredAllRecipes;
        var _default = allRecipesReducer;
        exports["default"] = _default;
      },
      { "../../../data.js": 1, "../searchTerm/searchTermSlice.js": 11 },
    ],
    8: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.FavoriteRecipes = void 0;

        var _react = _interopRequireDefault(require("react"));

        var _reactRedux = require("react-redux");

        var _favoriteRecipesSlice = require("./favoriteRecipesSlice.js");

        var _FavoriteButton = _interopRequireDefault(
          require("../../components/FavoriteButton")
        );

        var _Recipe = _interopRequireDefault(
          require("../../components/Recipe")
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var unfavoriteIconUrl =
          "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg";

        var FavoriteRecipes = function FavoriteRecipes() {
          var favoriteRecipes = (0, _reactRedux.useSelector)(
            _favoriteRecipesSlice.selectFilteredFavoriteRecipes
          );
          var dispatch = (0, _reactRedux.useDispatch)();

          var onRemoveRecipeHandler = function onRemoveRecipeHandler(recipe) {
            dispatch((0, _favoriteRecipesSlice.removeRecipe)(recipe));
          };

          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "recipes-container",
            },
            favoriteRecipes.map(createRecipeComponent)
          ); // Helper Function

          function createRecipeComponent(recipe) {
            return /*#__PURE__*/ _react["default"].createElement(
              _Recipe["default"],
              {
                recipe: recipe,
                key: recipe.id,
              },
              /*#__PURE__*/ _react["default"].createElement(
                _FavoriteButton["default"],
                {
                  onClickHandler: function onClickHandler() {
                    return onRemoveRecipeHandler(recipe);
                  },
                  icon: unfavoriteIconUrl,
                },
                "Remove Favorite"
              )
            );
          }
        };

        exports.FavoriteRecipes = FavoriteRecipes;
      },
      {
        "../../components/FavoriteButton": 4,
        "../../components/Recipe": 5,
        "./favoriteRecipesSlice.js": 9,
        react: undefined,
        "react-redux": undefined,
      },
    ],
    9: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports["default"] =
          exports.removeRecipe =
          exports.addRecipe =
          exports.selectFilteredFavoriteRecipes =
          exports.selectFavoriteRecipes =
          exports.favoriteRecipesSlice =
            void 0;

        var _toolkit = require("@reduxjs/toolkit");

        var _searchTermSlice = require("../searchTerm/searchTermSlice.js");

        // Slice Object
        ///////////////////////////////////////
        var favoriteRecipesSlice = (0, _toolkit.createSlice)({
          name: "favoriteRecipes",
          initialState: [],
          reducers: {
            addRecipe: function addRecipe(state, action) {
              state.push(action.payload);
            },
            removeRecipe: function removeRecipe(state, action) {
              state.filter(function (recipe) {
                return recipe.id !== action.payload.id;
              });
            },
          },
        }); // Selectors
        ///////////////////////////////////////

        exports.favoriteRecipesSlice = favoriteRecipesSlice;

        var selectFavoriteRecipes = function selectFavoriteRecipes(state) {
          return state.favoriteRecipes;
        };

        exports.selectFavoriteRecipes = selectFavoriteRecipes;

        var selectFilteredFavoriteRecipes =
          function selectFilteredFavoriteRecipes(state) {
            var favoriteRecipes = selectFavoriteRecipes(state);
            var searchTerm = (0, _searchTermSlice.selectSearchTerm)(state);
            return favoriteRecipes.filter(function (recipe) {
              return recipe.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
          }; // Exports
        ///////////////////////////////////////

        exports.selectFilteredFavoriteRecipes = selectFilteredFavoriteRecipes;
        var _favoriteRecipesSlice = favoriteRecipesSlice.actions,
          addRecipe = _favoriteRecipesSlice.addRecipe,
          removeRecipe = _favoriteRecipesSlice.removeRecipe;
        exports.removeRecipe = removeRecipe;
        exports.addRecipe = addRecipe;
        var _default = favoriteRecipesSlice.reducer;
        exports["default"] = _default;
      },
      { "../searchTerm/searchTermSlice.js": 11, "@reduxjs/toolkit": undefined },
    ],
    10: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.SearchTerm = void 0;

        var _react = _interopRequireDefault(require("react"));

        var _reactRedux = require("react-redux");

        var _searchTermSlice = require("./searchTermSlice.js");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var searchIconUrl =
          "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg";
        var clearIconUrl =
          "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg";

        var SearchTerm = function SearchTerm() {
          var searchTerm = (0, _reactRedux.useSelector)(
            _searchTermSlice.selectSearchTerm
          );
          var dispatch = (0, _reactRedux.useDispatch)();

          var onSearchTermChangeHandler = function onSearchTermChangeHandler(
            e
          ) {
            var userInput = e.target.value;
            dispatch((0, _searchTermSlice.setSearchTerm)(userInput));
          };

          var onClearSearchTermHandler = function onClearSearchTermHandler() {
            dispatch((0, _searchTermSlice.clearSearchTerm)());
          };

          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              id: "search-container",
            },
            /*#__PURE__*/ _react["default"].createElement("img", {
              id: "search-icon",
              alt: "",
              src: searchIconUrl,
            }),
            /*#__PURE__*/ _react["default"].createElement("input", {
              id: "search",
              type: "text",
              value: searchTerm,
              onChange: onSearchTermChangeHandler,
              placeholder: "Search recipes",
            }),
            searchTerm.length > 0 &&
              /*#__PURE__*/ _react["default"].createElement(
                "button",
                {
                  onClick: onClearSearchTermHandler,
                  type: "button",
                  id: "search-clear-button",
                },
                /*#__PURE__*/ _react["default"].createElement("img", {
                  src: clearIconUrl,
                  alt: "",
                })
              )
          );
        };

        exports.SearchTerm = SearchTerm;
      },
      {
        "./searchTermSlice.js": 11,
        react: undefined,
        "react-redux": undefined,
      },
    ],
    11: [
      function (require, module, exports) {
        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.setSearchTerm = setSearchTerm;
        exports.clearSearchTerm = clearSearchTerm;
        exports["default"] = exports.selectSearchTerm = void 0;
        var initialState = "";

        var searchTermReducer = function searchTermReducer() {
          var state =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialState;
          var action = arguments.length > 1 ? arguments[1] : undefined;

          switch (action.type) {
            case "searchTerm/setSearchTerm":
              return action.payload;

            case "searchTerm/clearSearchTerm":
              return "";

            default:
              return state;
          }
        };

        function setSearchTerm(term) {
          return {
            type: "searchTerm/setSearchTerm",
            payload: term,
          };
        }

        function clearSearchTerm() {
          return {
            type: "searchTerm/clearSearchTerm",
          };
        }

        var selectSearchTerm = function selectSearchTerm(state) {
          return state.searchTerm;
        };

        exports.selectSearchTerm = selectSearchTerm;
        var _default = searchTermReducer;
        exports["default"] = _default;
      },
      {},
    ],
    12: [
      function (require, module, exports) {
        var _react = _interopRequireDefault(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _reactRedux = require("react-redux");

        var _App = require("./app/App.js");

        var _store = _interopRequireDefault(require("./app/store.js"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        _reactDom["default"].render(
          /*#__PURE__*/ _react["default"].createElement(
            _reactRedux.Provider,
            {
              store: _store["default"],
            },
            /*#__PURE__*/ _react["default"].createElement(_App.App, null)
          ),
          document.getElementById("root")
        );
      },
      {
        "./app/App.js": 2,
        "./app/store.js": 3,
        react: undefined,
        "react-dom": undefined,
        "react-redux": undefined,
      },
    ],
  },
  {},
  [12]
);
