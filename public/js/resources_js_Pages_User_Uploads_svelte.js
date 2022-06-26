"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_Uploads_svelte"],{

/***/ "./node_modules/svelte-file-dropzone/src/components/Dropzone.svelte":
/*!**************************************************************************!*\
  !*** ./node_modules/svelte-file-dropzone/src/components/Dropzone.svelte ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var file_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-selector */ "./node_modules/file-selector/dist/es5/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/index */ "./node_modules/svelte-file-dropzone/src/utils/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* node_modules\svelte-file-dropzone\src\components\Dropzone.svelte generated by Svelte v3.42.2 */





function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-817dg2", ".dropzone.svelte-817dg2{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out}.dropzone.svelte-817dg2:focus{border-color:#2196f3}");
} // (350:8)       


function fallback_block(ctx) {
  var p;
  return {
    c: function c() {
      p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      p.textContent = "Drag 'n' drop some files here, or click to select files";
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, p, anchor);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(p);
    }
  };
}

function create_fragment(ctx) {
  var div;
  var input;
  var t;
  var div_class_value;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[28]["default"];
  var default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[27], null);
  var default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "accept",
      /*accept*/
      ctx[0]);
      input.multiple =
      /*multiple*/
      ctx[1];
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "file");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "autocomplete", "off");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "tabindex", "-1");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(input, "display", "none");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "tabindex", "0");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = "" + ((
      /*disableDefaultStyles*/
      ctx[4] ? '' : 'dropzone') + " " +
      /*containerClasses*/
      ctx[2] + " svelte-817dg2"));
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style",
      /*containerStyles*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, input);
      /*input_binding*/

      ctx[29](input);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }
      /*div_binding*/


      ctx[30](div);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "change",
        /*onDropCb*/
        ctx[14]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "click", onInputElementClick), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "keydown",
        /*composeKeyboardHandler*/
        ctx[16](
        /*onKeyDownCb*/
        ctx[7])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "focus",
        /*composeKeyboardHandler*/
        ctx[16](
        /*onFocusCb*/
        ctx[8])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "blur",
        /*composeKeyboardHandler*/
        ctx[16](
        /*onBlurCb*/
        ctx[9])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click",
        /*composeHandler*/
        ctx[15](
        /*onClickCb*/
        ctx[10])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "dragenter",
        /*composeDragHandler*/
        ctx[17](
        /*onDragEnterCb*/
        ctx[11])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "dragover",
        /*composeDragHandler*/
        ctx[17](
        /*onDragOverCb*/
        ctx[12])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "dragleave",
        /*composeDragHandler*/
        ctx[17](
        /*onDragLeaveCb*/
        ctx[13])), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "drop",
        /*composeDragHandler*/
        ctx[17](
        /*onDropCb*/
        ctx[14]))];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (!current || dirty[0] &
      /*accept*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "accept",
        /*accept*/
        ctx[0]);
      }

      if (!current || dirty[0] &
      /*multiple*/
      2) {
        input.multiple =
        /*multiple*/
        ctx[1];
      }

      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] &
        /*$$scope*/
        134217728)) {
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[27], !current ? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[27]) : (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[27], dirty, null), null);
        }
      }

      if (!current || dirty[0] &
      /*disableDefaultStyles, containerClasses*/
      20 && div_class_value !== (div_class_value = "" + ((
      /*disableDefaultStyles*/
      ctx[4] ? '' : 'dropzone') + " " +
      /*containerClasses*/
      ctx[2] + " svelte-817dg2"))) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value);
      }

      if (!current || dirty[0] &
      /*containerStyles*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style",
        /*containerStyles*/
        ctx[3]);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(default_slot_or_fallback, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(default_slot_or_fallback, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      /*input_binding*/

      ctx[29](null);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      /*div_binding*/

      ctx[30](null);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function onInputElementClick(event) {
  event.stopPropagation();
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  var accept = $$props.accept;
  var _$$props$disabled = $$props.disabled,
      disabled = _$$props$disabled === void 0 ? false : _$$props$disabled;
  var _$$props$getFilesFrom = $$props.getFilesFromEvent,
      getFilesFromEvent = _$$props$getFilesFrom === void 0 ? file_selector__WEBPACK_IMPORTED_MODULE_1__.fromEvent : _$$props$getFilesFrom;
  var _$$props$maxSize = $$props.maxSize,
      maxSize = _$$props$maxSize === void 0 ? Infinity : _$$props$maxSize;
  var _$$props$minSize = $$props.minSize,
      minSize = _$$props$minSize === void 0 ? 0 : _$$props$minSize;
  var _$$props$multiple = $$props.multiple,
      multiple = _$$props$multiple === void 0 ? true : _$$props$multiple;
  var _$$props$preventDropO = $$props.preventDropOnDocument,
      preventDropOnDocument = _$$props$preventDropO === void 0 ? true : _$$props$preventDropO;
  var _$$props$noClick = $$props.noClick,
      noClick = _$$props$noClick === void 0 ? false : _$$props$noClick;
  var _$$props$noKeyboard = $$props.noKeyboard,
      noKeyboard = _$$props$noKeyboard === void 0 ? false : _$$props$noKeyboard;
  var _$$props$noDrag = $$props.noDrag,
      noDrag = _$$props$noDrag === void 0 ? false : _$$props$noDrag;
  var _$$props$noDragEvents = $$props.noDragEventsBubbling,
      noDragEventsBubbling = _$$props$noDragEvents === void 0 ? false : _$$props$noDragEvents;
  var _$$props$containerCla = $$props.containerClasses,
      containerClasses = _$$props$containerCla === void 0 ? "" : _$$props$containerCla;
  var _$$props$containerSty = $$props.containerStyles,
      containerStyles = _$$props$containerSty === void 0 ? "" : _$$props$containerSty;
  var _$$props$disableDefau = $$props.disableDefaultStyles,
      disableDefaultStyles = _$$props$disableDefau === void 0 ? false : _$$props$disableDefau;
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.createEventDispatcher)(); //state

  var state = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  };
  var rootRef;
  var inputRef;

  function resetState() {
    state.isFileDialogActive = false;
    state.isDragActive = false;
    state.draggedFiles = [];
    state.acceptedFiles = [];
    state.fileRejections = [];
  } // Fn for opening the file dialog programmatically


  function openFileDialog() {
    if (inputRef) {
      $$invalidate(6, inputRef.value = null, inputRef); // TODO check if null needs to be set

      state.isFileDialogActive = true;
      inputRef.click();
    }
  } // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone


  function onKeyDownCb(event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef || !rootRef.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  } // Update focus state for the dropzone


  function onFocusCb() {
    state.isFocused = true;
  }

  function onBlurCb() {
    state.isFocused = false;
  } // Cb to open the file dialog when click occurs on the dropzone


  function onClickCb() {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isIeOrEdge)()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }

  function onDragEnterCb(event) {
    event.preventDefault();
    stopPropagation(event);
    dragTargetsRef = [].concat(_toConsumableArray(dragTargetsRef), [event.target]);

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isEvtWithFiles)(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isPropagationStopped)(event) && !noDragEventsBubbling) {
          return;
        }

        state.draggedFiles = draggedFiles;
        state.isDragActive = true;
        dispatch("dragenter", {
          dragEvent: event
        });
      });
    }
  }

  function onDragOverCb(event) {
    event.preventDefault();
    stopPropagation(event);

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isEvtWithFiles)(event)) {
      dispatch("dragover", {
        dragEvent: event
      });
    }

    return false;
  }

  function onDragLeaveCb(event) {
    event.preventDefault();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.filter(function (target) {
      return rootRef && rootRef.contains(target);
    }); // Make sure to remove a target present multiple times only once
    // (Firefox may fire dragenter/dragleave multiple times on the same element)

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef = targets;

    if (targets.length > 0) {
      return;
    }

    state.isDragActive = false;
    state.draggedFiles = [];

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isEvtWithFiles)(event)) {
      dispatch("dragleave", {
        dragEvent: event
      });
    }
  }

  function onDropCb(event) {
    event.preventDefault();
    stopPropagation(event);
    dragTargetsRef = [];

    if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isEvtWithFiles)(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if ((0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isPropagationStopped)(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var fileRejections = [];
        files.forEach(function (file) {
          var _fileAccepted = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.fileAccepted)(file, accept),
              _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
              accepted = _fileAccepted2[0],
              acceptError = _fileAccepted2[1];

          var _fileMatchSize = (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.fileMatchSize)(file, minSize, maxSize),
              _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
              sizeMatch = _fileMatchSize2[0],
              sizeError = _fileMatchSize2[1];

          if (accepted && sizeMatch) {
            acceptedFiles.push(file);
          } else {
            var errors = [acceptError, sizeError].filter(function (e) {
              return e;
            });
            fileRejections.push({
              file: file,
              errors: errors
            });
          }
        });

        if (!multiple && acceptedFiles.length > 1) {
          // Reject everything and empty accepted files
          acceptedFiles.forEach(function (file) {
            fileRejections.push({
              file: file,
              errors: [_utils_index__WEBPACK_IMPORTED_MODULE_2__.TOO_MANY_FILES_REJECTION]
            });
          });
          acceptedFiles.splice(0);
        }

        state.acceptedFiles = acceptedFiles;
        state.fileRejections = fileRejections;
        dispatch("drop", {
          acceptedFiles: acceptedFiles,
          fileRejections: fileRejections,
          event: event
        });

        if (fileRejections.length > 0) {
          dispatch("droprejected", {
            fileRejections: fileRejections,
            event: event
          });
        }

        if (acceptedFiles.length > 0) {
          dispatch("dropaccepted", {
            acceptedFiles: acceptedFiles,
            event: event
          });
        }
      });
    }

    resetState();
  }

  function composeHandler(fn) {
    return disabled ? null : fn;
  }

  function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  }

  function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  }

  function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  }

  var dragTargetsRef = [];

  function onDocumentDrop(event) {
    if (rootRef && rootRef.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef = [];
  } // Update file dialog active state when the window is focused on


  function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (state.isFileDialogActive) {
      setTimeout(function () {
        if (inputRef) {
          var _inputRef = inputRef,
              files = _inputRef.files;

          if (!files.length) {
            state.isFileDialogActive = false;
            dispatch("filedialogcancel");
          }
        }
      }, 300);
    }
  }

  (0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)(function () {
    window.addEventListener("focus", onWindowFocus, false);

    if (preventDropOnDocument) {
      document.addEventListener("dragover", _utils_index__WEBPACK_IMPORTED_MODULE_2__.onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
  });
  (0,svelte__WEBPACK_IMPORTED_MODULE_3__.onDestroy)(function () {
    window.removeEventListener("focus", onWindowFocus, false);

    if (preventDropOnDocument) {
      document.removeEventListener("dragover", _utils_index__WEBPACK_IMPORTED_MODULE_2__.onDocumentDragOver);
      document.removeEventListener("drop", onDocumentDrop);
    }
  });

  function input_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      inputRef = $$value;
      $$invalidate(6, inputRef);
    });
  }

  function div_binding($$value) {
    svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks[$$value ? 'unshift' : 'push'](function () {
      rootRef = $$value;
      $$invalidate(5, rootRef);
    });
  }

  $$self.$$set = function ($$props) {
    if ('accept' in $$props) $$invalidate(0, accept = $$props.accept);
    if ('disabled' in $$props) $$invalidate(18, disabled = $$props.disabled);
    if ('getFilesFromEvent' in $$props) $$invalidate(19, getFilesFromEvent = $$props.getFilesFromEvent);
    if ('maxSize' in $$props) $$invalidate(20, maxSize = $$props.maxSize);
    if ('minSize' in $$props) $$invalidate(21, minSize = $$props.minSize);
    if ('multiple' in $$props) $$invalidate(1, multiple = $$props.multiple);
    if ('preventDropOnDocument' in $$props) $$invalidate(22, preventDropOnDocument = $$props.preventDropOnDocument);
    if ('noClick' in $$props) $$invalidate(23, noClick = $$props.noClick);
    if ('noKeyboard' in $$props) $$invalidate(24, noKeyboard = $$props.noKeyboard);
    if ('noDrag' in $$props) $$invalidate(25, noDrag = $$props.noDrag);
    if ('noDragEventsBubbling' in $$props) $$invalidate(26, noDragEventsBubbling = $$props.noDragEventsBubbling);
    if ('containerClasses' in $$props) $$invalidate(2, containerClasses = $$props.containerClasses);
    if ('containerStyles' in $$props) $$invalidate(3, containerStyles = $$props.containerStyles);
    if ('disableDefaultStyles' in $$props) $$invalidate(4, disableDefaultStyles = $$props.disableDefaultStyles);
    if ('$$scope' in $$props) $$invalidate(27, $$scope = $$props.$$scope);
  };

  return [accept, multiple, containerClasses, containerStyles, disableDefaultStyles, rootRef, inputRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, composeHandler, composeKeyboardHandler, composeDragHandler, disabled, getFilesFromEvent, maxSize, minSize, preventDropOnDocument, noClick, noKeyboard, noDrag, noDragEventsBubbling, $$scope, slots, input_binding, div_binding];
}

var Dropzone = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Dropzone, _SvelteComponent);

  var _super = _createSuper(Dropzone);

  function Dropzone(options) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      accept: 0,
      disabled: 18,
      getFilesFromEvent: 19,
      maxSize: 20,
      minSize: 21,
      multiple: 1,
      preventDropOnDocument: 22,
      noClick: 23,
      noKeyboard: 24,
      noDrag: 25,
      noDragEventsBubbling: 26,
      containerClasses: 2,
      containerStyles: 3,
      disableDefaultStyles: 4
    }, add_css, [-1, -1]);
    return _this;
  }

  return Dropzone;
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropzone);

/***/ }),

/***/ "./resources/js/Pages/User/Uploads.svelte":
/*!************************************************!*\
  !*** ./resources/js/Pages/User/Uploads.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_file_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-file-dropzone */ "./node_modules/svelte-file-dropzone/src/components/Dropzone.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* resources\js\Pages\User\Uploads.svelte generated by Svelte v3.42.2 */




function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
} // (51:8) {#each files as item}


function create_each_block(ctx) {
  var img;
  var img_src_value;
  var t0;
  var div;
  return {
    c: function c() {
      img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div.textContent = "".concat(percentage);
      if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value =
      /*image*/
      ctx[1])) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "h-40");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, img, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*image*/
      2 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value =
      /*image*/
      ctx[1])) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(img);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
}

function create_fragment(ctx) {
  var div1;
  var div0;
  var t7;
  var dropzone;
  var t8;
  var ol;
  var current;
  dropzone = new svelte_file_dropzone__WEBPACK_IMPORTED_MODULE_1__.default({});
  dropzone.$on("drop",
  /*handleFilesSelect*/
  ctx[2]);
  var each_value =
  /*files*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  return {
    c: function c() {
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<h4 class=\"text-3xl font-medium\">Upload Your Photos</h4> \n        <ul class=\"mt-8 max-w-3xl space-y-3 list-disc list-outside\"><li>Your uploads will be distributed for free under the Pexels license. Learn more</li> \n            <li>To increase the chance of being featured, please ensure that your submissions meet our guidelines.</li> \n            <li>We&#39;ll review your submission. If it gets selected, you will receive an email notification and your content will be featured in our search.</li></ul>";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(dropzone.$$.fragment);
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      ol = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("ol");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "flex flex-col items-center py-10 h-full");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "flex flex-col mx-6");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(dropzone, div1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, ol);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(ol, null);
      }

      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*percentage, image, files*/
      3) {
        each_value =
        /*files*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(ol, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(dropzone.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(dropzone.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(dropzone);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
    }
  };
}

var percentage = '';

function instance($$self, $$props, $$invalidate) {
  var $page;
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_2__.page, function ($$value) {
    return $$invalidate(3, $page = $$value);
  });
  var files = [];
  var image = '';
  var token = $page.token.data;

  function handleFilesSelect(e) {
    $$invalidate(0, files = e.detail.acceptedFiles);

    for (var i = 0; i < files.length; i++) {
      $$invalidate(1, image = URL.createObjectURL(files[i]));
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/upload');
      xhr.setRequestHeader('X-CSRF-TOKEN', token);
      xhr.send(JSON.stringify({
        image: files[i]
      }));
    }
  } // console.log(e.detail);
  // const { acceptedFiles, fileRejections } = e.detail;


  return [files, image, handleFilesSelect];
}

var Uploads = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Uploads, _SvelteComponent);

  var _super = _createSuper(Uploads);

  function Uploads(options) {
    var _this;

    _classCallCheck(this, Uploads);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
    return _this;
  }

  return Uploads;
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uploads);

/***/ }),

/***/ "./node_modules/file-selector/dist/es5/file-selector.js":
/*!**************************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file-selector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ "./node_modules/file-selector/dist/es5/file.js");


var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        var items, files;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
                var files, err_1, items;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}
//# sourceMappingURL=file-selector.js.map

/***/ }),

/***/ "./node_modules/file-selector/dist/es5/file.js":
/*!*****************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMON_MIME_TYPES": () => (/* binding */ COMMON_MIME_TYPES),
/* harmony export */   "toFileWithPath": () => (/* binding */ toFileWithPath)
/* harmony export */ });
var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/file-selector/dist/es5/index.js":
/*!******************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* reexport safe */ _file_selector__WEBPACK_IMPORTED_MODULE_0__.fromEvent)
/* harmony export */ });
/* harmony import */ var _file_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-selector */ "./node_modules/file-selector/dist/es5/file-selector.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/svelte-file-dropzone/src/utils/attr-accept.js":
/*!********************************************************************!*\
  !*** ./node_modules/svelte-file-dropzone/src/utils/attr-accept.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-accept
 *
 * Inspired by https://github.com/enyo/dropzone
 *
 * @param file {File} https://developer.mozilla.org/en-US/docs/Web/API/File
 * @param acceptedFiles {string}
 * @returns {boolean}
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(file, acceptedFiles) {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(",");
    const fileName = file.name || "";
    const mimeType = (file.type || "").toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, "");

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
}


/***/ }),

/***/ "./node_modules/svelte-file-dropzone/src/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/svelte-file-dropzone/src/utils/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FILE_INVALID_TYPE": () => (/* binding */ FILE_INVALID_TYPE),
/* harmony export */   "FILE_TOO_LARGE": () => (/* binding */ FILE_TOO_LARGE),
/* harmony export */   "FILE_TOO_SMALL": () => (/* binding */ FILE_TOO_SMALL),
/* harmony export */   "TOO_MANY_FILES": () => (/* binding */ TOO_MANY_FILES),
/* harmony export */   "getInvalidTypeRejectionErr": () => (/* binding */ getInvalidTypeRejectionErr),
/* harmony export */   "getTooLargeRejectionErr": () => (/* binding */ getTooLargeRejectionErr),
/* harmony export */   "getTooSmallRejectionErr": () => (/* binding */ getTooSmallRejectionErr),
/* harmony export */   "TOO_MANY_FILES_REJECTION": () => (/* binding */ TOO_MANY_FILES_REJECTION),
/* harmony export */   "fileAccepted": () => (/* binding */ fileAccepted),
/* harmony export */   "fileMatchSize": () => (/* binding */ fileMatchSize),
/* harmony export */   "allFilesAccepted": () => (/* binding */ allFilesAccepted),
/* harmony export */   "isPropagationStopped": () => (/* binding */ isPropagationStopped),
/* harmony export */   "isEvtWithFiles": () => (/* binding */ isEvtWithFiles),
/* harmony export */   "isKindFile": () => (/* binding */ isKindFile),
/* harmony export */   "onDocumentDragOver": () => (/* binding */ onDocumentDragOver),
/* harmony export */   "isIeOrEdge": () => (/* binding */ isIeOrEdge),
/* harmony export */   "composeEventHandlers": () => (/* binding */ composeEventHandlers)
/* harmony export */ });
/* harmony import */ var _attr_accept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr-accept */ "./node_modules/svelte-file-dropzone/src/utils/attr-accept.js");


// Error codes
const FILE_INVALID_TYPE = "file-invalid-type";
const FILE_TOO_LARGE = "file-too-large";
const FILE_TOO_SMALL = "file-too-small";
const TOO_MANY_FILES = "too-many-files";

// File Errors
const getInvalidTypeRejectionErr = (accept) => {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  const messageSuffix = Array.isArray(accept)
    ? `one of ${accept.join(", ")}`
    : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: `File type must be ${messageSuffix}`,
  };
};

const getTooLargeRejectionErr = (maxSize) => {
  return {
    code: FILE_TOO_LARGE,
    message: `File is larger than ${maxSize} bytes`,
  };
};

const getTooSmallRejectionErr = (minSize) => {
  return {
    code: FILE_TOO_SMALL,
    message: `File is smaller than ${minSize} bytes`,
  };
};

const TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files",
};

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
function fileAccepted(file, accept) {
  const isAcceptable =
    file.type === "application/x-moz-file" || (0,_attr_accept__WEBPACK_IMPORTED_MODULE_0__.default)(file, accept);
  return [
    isAcceptable,
    isAcceptable ? null : getInvalidTypeRejectionErr(accept),
  ];
}

function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize)
      return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize)
      return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function allFilesAccepted({
  files,
  accept,
  minSize,
  maxSize,
  multiple,
}) {
  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every((file) => {
    const [accepted] = fileAccepted(file, accept);
    const [sizeMatch] = fileMatchSize(file, minSize, maxSize);
    return accepted && sizeMatch;
  });
}

// React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}

function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
  return Array.prototype.some.call(
    event.dataTransfer.types,
    (type) => type === "Files" || type === "application/x-moz-file"
  );
}

function isKindFile(item) {
  return typeof item === "object" && item !== null && item.kind === "file";
}

// allow the entire document to be a drag target
function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return (
    userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1
  );
}

function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}

function isIeOrEdge(userAgent = window.navigator.userAgent) {
  return isIe(userAgent) || isEdge(userAgent);
}

/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
function composeEventHandlers(...fns) {
  return (event, ...args) =>
    fns.some((fn) => {
      if (!isPropagationStopped(event) && fn) {
        fn(event, ...args);
      }
      return isPropagationStopped(event);
    });
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);