(function (factory) {
	typeof define === 'function' && define.amd ? define('app', factory) :
	factory();
}((function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jquery = createCommonjsModule(function (module) {
	/*!
	 * jQuery JavaScript Library v3.6.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright OpenJS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2021-03-02T17:08Z
	 */
	(function (global, factory) {

	  {
	    // For CommonJS and CommonJS-like environments where a proper `window`
	    // is present, execute the factory and get jQuery.
	    // For environments that do not have a `window` with a `document`
	    // (such as Node.js), expose a factory as module.exports.
	    // This accentuates the need for the creation of a real `window`.
	    // e.g. var jQuery = require("jquery")(window);
	    // See ticket #14549 for more info.
	    module.exports = global.document ? factory(global, true) : function (w) {
	      if (!w.document) {
	        throw new Error("jQuery requires a window with a document");
	      }

	      return factory(w);
	    };
	  } // Pass this if window is not defined yet

	})(typeof window !== "undefined" ? window : commonjsGlobal, function (window, noGlobal) {

	  var arr = [];
	  var getProto = Object.getPrototypeOf;
	  var slice = arr.slice;
	  var flat = arr.flat ? function (array) {
	    return arr.flat.call(array);
	  } : function (array) {
	    return arr.concat.apply([], array);
	  };
	  var push = arr.push;
	  var indexOf = arr.indexOf;
	  var class2type = {};
	  var toString = class2type.toString;
	  var hasOwn = class2type.hasOwnProperty;
	  var fnToString = hasOwn.toString;
	  var ObjectFunctionString = fnToString.call(Object);
	  var support = {};

	  var isFunction = function isFunction(obj) {
	    // Support: Chrome <=57, Firefox <=52
	    // In some browsers, typeof returns "function" for HTML <object> elements
	    // (i.e., `typeof document.createElement( "object" ) === "function"`).
	    // We don't want to classify *any* DOM node as a function.
	    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
	    // Plus for old WebKit, typeof returns "function" for HTML collections
	    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
	    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
	  };

	  var isWindow = function isWindow(obj) {
	    return obj != null && obj === obj.window;
	  };

	  var document = window.document;
	  var preservedScriptAttributes = {
	    type: true,
	    src: true,
	    nonce: true,
	    noModule: true
	  };

	  function DOMEval(code, node, doc) {
	    doc = doc || document;
	    var i,
	        val,
	        script = doc.createElement("script");
	    script.text = code;

	    if (node) {
	      for (i in preservedScriptAttributes) {
	        // Support: Firefox 64+, Edge 18+
	        // Some browsers don't support the "nonce" property on scripts.
	        // On the other hand, just using `getAttribute` is not enough as
	        // the `nonce` attribute is reset to an empty string whenever it
	        // becomes browsing-context connected.
	        // See https://github.com/whatwg/html/issues/2369
	        // See https://html.spec.whatwg.org/#nonce-attributes
	        // The `node.getAttribute` check was added for the sake of
	        // `jQuery.globalEval` so that it can fake a nonce-containing node
	        // via an object.
	        val = node[i] || node.getAttribute && node.getAttribute(i);

	        if (val) {
	          script.setAttribute(i, val);
	        }
	      }
	    }

	    doc.head.appendChild(script).parentNode.removeChild(script);
	  }

	  function toType(obj) {
	    if (obj == null) {
	      return obj + "";
	    } // Support: Android <=2.3 only (functionish RegExp)


	    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
	  }
	  /* global Symbol */
	  // Defining this global in .eslintrc.json would create a danger of using the global
	  // unguarded in another place, it seems safer to define global only for this module


	  var version = "3.6.0",
	      // Define a local copy of jQuery
	  jQuery = function (selector, context) {
	    // The jQuery object is actually just the init constructor 'enhanced'
	    // Need init if jQuery is called (just allow error to be thrown if not included)
	    return new jQuery.fn.init(selector, context);
	  };

	  jQuery.fn = jQuery.prototype = {
	    // The current version of jQuery being used
	    jquery: version,
	    constructor: jQuery,
	    // The default length of a jQuery object is 0
	    length: 0,
	    toArray: function () {
	      return slice.call(this);
	    },
	    // Get the Nth element in the matched element set OR
	    // Get the whole matched element set as a clean array
	    get: function (num) {
	      // Return all the elements in a clean array
	      if (num == null) {
	        return slice.call(this);
	      } // Return just the one element from the set


	      return num < 0 ? this[num + this.length] : this[num];
	    },
	    // Take an array of elements and push it onto the stack
	    // (returning the new matched element set)
	    pushStack: function (elems) {
	      // Build a new jQuery matched element set
	      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

	      ret.prevObject = this; // Return the newly-formed element set

	      return ret;
	    },
	    // Execute a callback for every element in the matched set.
	    each: function (callback) {
	      return jQuery.each(this, callback);
	    },
	    map: function (callback) {
	      return this.pushStack(jQuery.map(this, function (elem, i) {
	        return callback.call(elem, i, elem);
	      }));
	    },
	    slice: function () {
	      return this.pushStack(slice.apply(this, arguments));
	    },
	    first: function () {
	      return this.eq(0);
	    },
	    last: function () {
	      return this.eq(-1);
	    },
	    even: function () {
	      return this.pushStack(jQuery.grep(this, function (_elem, i) {
	        return (i + 1) % 2;
	      }));
	    },
	    odd: function () {
	      return this.pushStack(jQuery.grep(this, function (_elem, i) {
	        return i % 2;
	      }));
	    },
	    eq: function (i) {
	      var len = this.length,
	          j = +i + (i < 0 ? len : 0);
	      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
	    },
	    end: function () {
	      return this.prevObject || this.constructor();
	    },
	    // For internal use only.
	    // Behaves like an Array's method, not like a jQuery method.
	    push: push,
	    sort: arr.sort,
	    splice: arr.splice
	  };

	  jQuery.extend = jQuery.fn.extend = function () {
	    var options,
	        name,
	        src,
	        copy,
	        copyIsArray,
	        clone,
	        target = arguments[0] || {},
	        i = 1,
	        length = arguments.length,
	        deep = false; // Handle a deep copy situation

	    if (typeof target === "boolean") {
	      deep = target; // Skip the boolean and the target

	      target = arguments[i] || {};
	      i++;
	    } // Handle case when target is a string or something (possible in deep copy)


	    if (typeof target !== "object" && !isFunction(target)) {
	      target = {};
	    } // Extend jQuery itself if only one argument is passed


	    if (i === length) {
	      target = this;
	      i--;
	    }

	    for (; i < length; i++) {
	      // Only deal with non-null/undefined values
	      if ((options = arguments[i]) != null) {
	        // Extend the base object
	        for (name in options) {
	          copy = options[name]; // Prevent Object.prototype pollution
	          // Prevent never-ending loop

	          if (name === "__proto__" || target === copy) {
	            continue;
	          } // Recurse if we're merging plain objects or arrays


	          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
	            src = target[name]; // Ensure proper type for the source value

	            if (copyIsArray && !Array.isArray(src)) {
	              clone = [];
	            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
	              clone = {};
	            } else {
	              clone = src;
	            }

	            copyIsArray = false; // Never move original objects, clone them

	            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
	          } else if (copy !== undefined) {
	            target[name] = copy;
	          }
	        }
	      }
	    } // Return the modified object


	    return target;
	  };

	  jQuery.extend({
	    // Unique for each copy of jQuery on the page
	    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	    // Assume jQuery is ready without the ready module
	    isReady: true,
	    error: function (msg) {
	      throw new Error(msg);
	    },
	    noop: function () {},
	    isPlainObject: function (obj) {
	      var proto, Ctor; // Detect obvious negatives
	      // Use toString instead of jQuery.type to catch host objects

	      if (!obj || toString.call(obj) !== "[object Object]") {
	        return false;
	      }

	      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

	      if (!proto) {
	        return true;
	      } // Objects with prototype are plain iff they were constructed by a global Object function


	      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
	      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
	    },
	    isEmptyObject: function (obj) {
	      var name;

	      for (name in obj) {
	        return false;
	      }

	      return true;
	    },
	    // Evaluates a script in a provided context; falls back to the global one
	    // if not specified.
	    globalEval: function (code, options, doc) {
	      DOMEval(code, {
	        nonce: options && options.nonce
	      }, doc);
	    },
	    each: function (obj, callback) {
	      var length,
	          i = 0;

	      if (isArrayLike(obj)) {
	        length = obj.length;

	        for (; i < length; i++) {
	          if (callback.call(obj[i], i, obj[i]) === false) {
	            break;
	          }
	        }
	      } else {
	        for (i in obj) {
	          if (callback.call(obj[i], i, obj[i]) === false) {
	            break;
	          }
	        }
	      }

	      return obj;
	    },
	    // results is for internal usage only
	    makeArray: function (arr, results) {
	      var ret = results || [];

	      if (arr != null) {
	        if (isArrayLike(Object(arr))) {
	          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
	        } else {
	          push.call(ret, arr);
	        }
	      }

	      return ret;
	    },
	    inArray: function (elem, arr, i) {
	      return arr == null ? -1 : indexOf.call(arr, elem, i);
	    },
	    // Support: Android <=4.0 only, PhantomJS 1 only
	    // push.apply(_, arraylike) throws on ancient WebKit
	    merge: function (first, second) {
	      var len = +second.length,
	          j = 0,
	          i = first.length;

	      for (; j < len; j++) {
	        first[i++] = second[j];
	      }

	      first.length = i;
	      return first;
	    },
	    grep: function (elems, callback, invert) {
	      var callbackInverse,
	          matches = [],
	          i = 0,
	          length = elems.length,
	          callbackExpect = !invert; // Go through the array, only saving the items
	      // that pass the validator function

	      for (; i < length; i++) {
	        callbackInverse = !callback(elems[i], i);

	        if (callbackInverse !== callbackExpect) {
	          matches.push(elems[i]);
	        }
	      }

	      return matches;
	    },
	    // arg is for internal usage only
	    map: function (elems, callback, arg) {
	      var length,
	          value,
	          i = 0,
	          ret = []; // Go through the array, translating each of the items to their new values

	      if (isArrayLike(elems)) {
	        length = elems.length;

	        for (; i < length; i++) {
	          value = callback(elems[i], i, arg);

	          if (value != null) {
	            ret.push(value);
	          }
	        } // Go through every key on the object,

	      } else {
	        for (i in elems) {
	          value = callback(elems[i], i, arg);

	          if (value != null) {
	            ret.push(value);
	          }
	        }
	      } // Flatten any nested arrays


	      return flat(ret);
	    },
	    // A global GUID counter for objects
	    guid: 1,
	    // jQuery.support is not used in Core but other projects attach their
	    // properties to it so it needs to exist.
	    support: support
	  });

	  if (typeof Symbol === "function") {
	    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	  } // Populate the class2type map


	  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
	    class2type["[object " + name + "]"] = name.toLowerCase();
	  });

	  function isArrayLike(obj) {
	    // Support: real iOS 8.2 only (not reproducible in simulator)
	    // `in` check used to prevent JIT error (gh-2145)
	    // hasOwn isn't used here due to false negatives
	    // regarding Nodelist length in IE
	    var length = !!obj && "length" in obj && obj.length,
	        type = toType(obj);

	    if (isFunction(obj) || isWindow(obj)) {
	      return false;
	    }

	    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	  }

	  var Sizzle =
	  /*!
	   * Sizzle CSS Selector Engine v2.3.6
	   * https://sizzlejs.com/
	   *
	   * Copyright JS Foundation and other contributors
	   * Released under the MIT license
	   * https://js.foundation/
	   *
	   * Date: 2021-02-16
	   */
	  function (window) {
	    var i,
	        support,
	        Expr,
	        getText,
	        isXML,
	        tokenize,
	        compile,
	        select,
	        outermostContext,
	        sortInput,
	        hasDuplicate,
	        // Local document vars
	    setDocument,
	        document,
	        docElem,
	        documentIsHTML,
	        rbuggyQSA,
	        rbuggyMatches,
	        matches,
	        contains,
	        // Instance-specific data
	    expando = "sizzle" + 1 * new Date(),
	        preferredDoc = window.document,
	        dirruns = 0,
	        done = 0,
	        classCache = createCache(),
	        tokenCache = createCache(),
	        compilerCache = createCache(),
	        nonnativeSelectorCache = createCache(),
	        sortOrder = function (a, b) {
	      if (a === b) {
	        hasDuplicate = true;
	      }

	      return 0;
	    },
	        // Instance methods
	    hasOwn = {}.hasOwnProperty,
	        arr = [],
	        pop = arr.pop,
	        pushNative = arr.push,
	        push = arr.push,
	        slice = arr.slice,
	        // Use a stripped-down indexOf as it's faster than native
	    // https://jsperf.com/thor-indexof-vs-for/5
	    indexOf = function (list, elem) {
	      var i = 0,
	          len = list.length;

	      for (; i < len; i++) {
	        if (list[i] === elem) {
	          return i;
	        }
	      }

	      return -1;
	    },
	        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
	        // Regular expressions
	    // http://www.w3.org/TR/css3-selectors/#whitespace
	    whitespace = "[\\x20\\t\\r\\n\\f]",
	        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
	        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
	    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
	    // or strings [capture 3 or capture 4]"
	    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
	        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	    // 1. quoted (capture 3; capture 4 or capture 5)
	    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
	    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
	    ".*" + ")\\)|)",
	        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	    rwhitespace = new RegExp(whitespace + "+", "g"),
	        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
	        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
	        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
	        rdescend = new RegExp(whitespace + "|>"),
	        rpseudo = new RegExp(pseudos),
	        ridentifier = new RegExp("^" + identifier + "$"),
	        matchExpr = {
	      "ID": new RegExp("^#(" + identifier + ")"),
	      "CLASS": new RegExp("^\\.(" + identifier + ")"),
	      "TAG": new RegExp("^(" + identifier + "|[*])"),
	      "ATTR": new RegExp("^" + attributes),
	      "PSEUDO": new RegExp("^" + pseudos),
	      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
	      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
	      // For use in libraries implementing .is()
	      // We use this for POS matching in `select`
	      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
	    },
	        rhtml = /HTML$/i,
	        rinputs = /^(?:input|select|textarea|button)$/i,
	        rheader = /^h\d$/i,
	        rnative = /^[^{]+\{\s*\[native \w/,
	        // Easily-parseable/retrievable ID or TAG or CLASS selectors
	    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        rsibling = /[+~]/,
	        // CSS escapes
	    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
	        funescape = function (escape, nonHex) {
	      var high = "0x" + escape.slice(1) - 0x10000;
	      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
	      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
	      // Support: IE <=11+
	      // For values outside the Basic Multilingual Plane (BMP), manually construct a
	      // surrogate pair
	      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	    },
	        // CSS string/identifier serialization
	    // https://drafts.csswg.org/cssom/#common-serializing-idioms
	    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	        fcssescape = function (ch, asCodePoint) {
	      if (asCodePoint) {
	        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	        if (ch === "\0") {
	          return "\uFFFD";
	        } // Control characters and (dependent upon position) numbers get escaped as code points


	        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
	      } // Other potentially-special ASCII characters get backslash-escaped


	      return "\\" + ch;
	    },
	        // Used for iframes
	    // See setDocument()
	    // Removing the function wrapper causes a "Permission Denied"
	    // error in IE
	    unloadHandler = function () {
	      setDocument();
	    },
	        inDisabledFieldset = addCombinator(function (elem) {
	      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
	    }, {
	      dir: "parentNode",
	      next: "legend"
	    }); // Optimize for push.apply( _, NodeList )


	    try {
	      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
	      // Detect silently failing push.apply
	      // eslint-disable-next-line no-unused-expressions

	      arr[preferredDoc.childNodes.length].nodeType;
	    } catch (e) {
	      push = {
	        apply: arr.length ? // Leverage slice if possible
	        function (target, els) {
	          pushNative.apply(target, slice.call(els));
	        } : // Support: IE<9
	        // Otherwise append directly
	        function (target, els) {
	          var j = target.length,
	              i = 0; // Can't trust NodeList.length

	          while (target[j++] = els[i++]) {}

	          target.length = j - 1;
	        }
	      };
	    }

	    function Sizzle(selector, context, results, seed) {
	      var m,
	          i,
	          elem,
	          nid,
	          match,
	          groups,
	          newSelector,
	          newContext = context && context.ownerDocument,
	          // nodeType defaults to 9, since context defaults to document
	      nodeType = context ? context.nodeType : 9;
	      results = results || []; // Return early from calls with invalid selector or context

	      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
	        return results;
	      } // Try to shortcut find operations (as opposed to filters) in HTML documents


	      if (!seed) {
	        setDocument(context);
	        context = context || document;

	        if (documentIsHTML) {
	          // If the selector is sufficiently simple, try using a "get*By*" DOM method
	          // (excepting DocumentFragment context, where the methods don't exist)
	          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
	            // ID selector
	            if (m = match[1]) {
	              // Document context
	              if (nodeType === 9) {
	                if (elem = context.getElementById(m)) {
	                  // Support: IE, Opera, Webkit
	                  // TODO: identify versions
	                  // getElementById can match elements by name instead of ID
	                  if (elem.id === m) {
	                    results.push(elem);
	                    return results;
	                  }
	                } else {
	                  return results;
	                } // Element context

	              } else {
	                // Support: IE, Opera, Webkit
	                // TODO: identify versions
	                // getElementById can match elements by name instead of ID
	                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
	                  results.push(elem);
	                  return results;
	                }
	              } // Type selector

	            } else if (match[2]) {
	              push.apply(results, context.getElementsByTagName(selector));
	              return results; // Class selector
	            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
	              push.apply(results, context.getElementsByClassName(m));
	              return results;
	            }
	          } // Take advantage of querySelectorAll


	          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
	          // Exclude object elements
	          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
	            newSelector = selector;
	            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
	            // descendant combinators, which is not what we want.
	            // In such cases, we work around the behavior by prefixing every selector in the
	            // list with an ID selector referencing the scope context.
	            // The technique has to be used as well when a leading combinator is used
	            // as such selectors are not recognized by querySelectorAll.
	            // Thanks to Andrew Dupont for this technique.

	            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
	              // Expand context for sibling selectors
	              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
	              // supports it & if we're not changing the context.

	              if (newContext !== context || !support.scope) {
	                // Capture the context ID, setting it first if necessary
	                if (nid = context.getAttribute("id")) {
	                  nid = nid.replace(rcssescape, fcssescape);
	                } else {
	                  context.setAttribute("id", nid = expando);
	                }
	              } // Prefix every selector in the list


	              groups = tokenize(selector);
	              i = groups.length;

	              while (i--) {
	                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
	              }

	              newSelector = groups.join(",");
	            }

	            try {
	              push.apply(results, newContext.querySelectorAll(newSelector));
	              return results;
	            } catch (qsaError) {
	              nonnativeSelectorCache(selector, true);
	            } finally {
	              if (nid === expando) {
	                context.removeAttribute("id");
	              }
	            }
	          }
	        }
	      } // All others


	      return select(selector.replace(rtrim, "$1"), context, results, seed);
	    }
	    /**
	     * Create key-value caches of limited size
	     * @returns {function(string, object)} Returns the Object data after storing it on itself with
	     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	     *	deleting the oldest entry
	     */


	    function createCache() {
	      var keys = [];

	      function cache(key, value) {
	        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	        if (keys.push(key + " ") > Expr.cacheLength) {
	          // Only keep the most recent entries
	          delete cache[keys.shift()];
	        }

	        return cache[key + " "] = value;
	      }

	      return cache;
	    }
	    /**
	     * Mark a function for special use by Sizzle
	     * @param {Function} fn The function to mark
	     */


	    function markFunction(fn) {
	      fn[expando] = true;
	      return fn;
	    }
	    /**
	     * Support testing using an element
	     * @param {Function} fn Passed the created element and returns a boolean result
	     */


	    function assert(fn) {
	      var el = document.createElement("fieldset");

	      try {
	        return !!fn(el);
	      } catch (e) {
	        return false;
	      } finally {
	        // Remove from its parent by default
	        if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        } // release memory in IE


	        el = null;
	      }
	    }
	    /**
	     * Adds the same handler for all of the specified attrs
	     * @param {String} attrs Pipe-separated list of attributes
	     * @param {Function} handler The method that will be applied
	     */


	    function addHandle(attrs, handler) {
	      var arr = attrs.split("|"),
	          i = arr.length;

	      while (i--) {
	        Expr.attrHandle[arr[i]] = handler;
	      }
	    }
	    /**
	     * Checks document order of two siblings
	     * @param {Element} a
	     * @param {Element} b
	     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	     */


	    function siblingCheck(a, b) {
	      var cur = b && a,
	          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

	      if (diff) {
	        return diff;
	      } // Check if b follows a


	      if (cur) {
	        while (cur = cur.nextSibling) {
	          if (cur === b) {
	            return -1;
	          }
	        }
	      }

	      return a ? 1 : -1;
	    }
	    /**
	     * Returns a function to use in pseudos for input types
	     * @param {String} type
	     */


	    function createInputPseudo(type) {
	      return function (elem) {
	        var name = elem.nodeName.toLowerCase();
	        return name === "input" && elem.type === type;
	      };
	    }
	    /**
	     * Returns a function to use in pseudos for buttons
	     * @param {String} type
	     */


	    function createButtonPseudo(type) {
	      return function (elem) {
	        var name = elem.nodeName.toLowerCase();
	        return (name === "input" || name === "button") && elem.type === type;
	      };
	    }
	    /**
	     * Returns a function to use in pseudos for :enabled/:disabled
	     * @param {Boolean} disabled true for :disabled; false for :enabled
	     */


	    function createDisabledPseudo(disabled) {
	      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	      return function (elem) {
	        // Only certain elements can match :enabled or :disabled
	        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
	        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
	        if ("form" in elem) {
	          // Check for inherited disabledness on relevant non-disabled elements:
	          // * listed form-associated elements in a disabled fieldset
	          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
	          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
	          // * option elements in a disabled optgroup
	          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
	          // All such elements have a "form" property.
	          if (elem.parentNode && elem.disabled === false) {
	            // Option elements defer to a parent optgroup if present
	            if ("label" in elem) {
	              if ("label" in elem.parentNode) {
	                return elem.parentNode.disabled === disabled;
	              } else {
	                return elem.disabled === disabled;
	              }
	            } // Support: IE 6 - 11
	            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


	            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

	            /* jshint -W018 */
	            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
	          }

	          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
	          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
	          // even exist on them, let alone have a boolean value.
	        } else if ("label" in elem) {
	          return elem.disabled === disabled;
	        } // Remaining elements are neither :enabled nor :disabled


	        return false;
	      };
	    }
	    /**
	     * Returns a function to use in pseudos for positionals
	     * @param {Function} fn
	     */


	    function createPositionalPseudo(fn) {
	      return markFunction(function (argument) {
	        argument = +argument;
	        return markFunction(function (seed, matches) {
	          var j,
	              matchIndexes = fn([], seed.length, argument),
	              i = matchIndexes.length; // Match elements found at the specified indexes

	          while (i--) {
	            if (seed[j = matchIndexes[i]]) {
	              seed[j] = !(matches[j] = seed[j]);
	            }
	          }
	        });
	      });
	    }
	    /**
	     * Checks a node for validity as a Sizzle context
	     * @param {Element|Object=} context
	     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	     */


	    function testContext(context) {
	      return context && typeof context.getElementsByTagName !== "undefined" && context;
	    } // Expose support vars for convenience


	    support = Sizzle.support = {};
	    /**
	     * Detects XML nodes
	     * @param {Element|Object} elem An element or a document
	     * @returns {Boolean} True iff elem is a non-HTML XML node
	     */

	    isXML = Sizzle.isXML = function (elem) {
	      var namespace = elem && elem.namespaceURI,
	          docElem = elem && (elem.ownerDocument || elem).documentElement; // Support: IE <=8
	      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	      // https://bugs.jquery.com/ticket/4833

	      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
	    };
	    /**
	     * Sets document-related variables once based on the current document
	     * @param {Element|Object} [doc] An element or document object to use to set the document
	     * @returns {Object} Returns the current document
	     */


	    setDocument = Sizzle.setDocument = function (node) {
	      var hasCompare,
	          subWindow,
	          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
	      // Support: IE 11+, Edge 17 - 18+
	      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	      // two documents; shallow comparisons work.
	      // eslint-disable-next-line eqeqeq

	      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
	        return document;
	      } // Update global variables


	      document = doc;
	      docElem = document.documentElement;
	      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
	      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	      // Support: IE 11+, Edge 17 - 18+
	      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	      // two documents; shallow comparisons work.
	      // eslint-disable-next-line eqeqeq

	      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
	        // Support: IE 11, Edge
	        if (subWindow.addEventListener) {
	          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
	        } else if (subWindow.attachEvent) {
	          subWindow.attachEvent("onunload", unloadHandler);
	        }
	      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
	      // IE/Edge & older browsers don't support the :scope pseudo-class.
	      // Support: Safari 6.0 only
	      // Safari 6.0 supports :scope but it's an alias of :root there.


	      support.scope = assert(function (el) {
	        docElem.appendChild(el).appendChild(document.createElement("div"));
	        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
	      });
	      /* Attributes
	      ---------------------------------------------------------------------- */
	      // Support: IE<8
	      // Verify that getAttribute really returns attributes and not properties
	      // (excepting IE8 booleans)

	      support.attributes = assert(function (el) {
	        el.className = "i";
	        return !el.getAttribute("className");
	      });
	      /* getElement(s)By*
	      ---------------------------------------------------------------------- */
	      // Check if getElementsByTagName("*") returns only elements

	      support.getElementsByTagName = assert(function (el) {
	        el.appendChild(document.createComment(""));
	        return !el.getElementsByTagName("*").length;
	      }); // Support: IE<9

	      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
	      // Check if getElementById returns elements by name
	      // The broken getElementById methods don't pick up programmatically-set names,
	      // so use a roundabout getElementsByName test

	      support.getById = assert(function (el) {
	        docElem.appendChild(el).id = expando;
	        return !document.getElementsByName || !document.getElementsByName(expando).length;
	      }); // ID filter and find

	      if (support.getById) {
	        Expr.filter["ID"] = function (id) {
	          var attrId = id.replace(runescape, funescape);
	          return function (elem) {
	            return elem.getAttribute("id") === attrId;
	          };
	        };

	        Expr.find["ID"] = function (id, context) {
	          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
	            var elem = context.getElementById(id);
	            return elem ? [elem] : [];
	          }
	        };
	      } else {
	        Expr.filter["ID"] = function (id) {
	          var attrId = id.replace(runescape, funescape);
	          return function (elem) {
	            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
	            return node && node.value === attrId;
	          };
	        }; // Support: IE 6 - 7 only
	        // getElementById is not reliable as a find shortcut


	        Expr.find["ID"] = function (id, context) {
	          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
	            var node,
	                i,
	                elems,
	                elem = context.getElementById(id);

	            if (elem) {
	              // Verify the id attribute
	              node = elem.getAttributeNode("id");

	              if (node && node.value === id) {
	                return [elem];
	              } // Fall back on getElementsByName


	              elems = context.getElementsByName(id);
	              i = 0;

	              while (elem = elems[i++]) {
	                node = elem.getAttributeNode("id");

	                if (node && node.value === id) {
	                  return [elem];
	                }
	              }
	            }

	            return [];
	          }
	        };
	      } // Tag


	      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
	        if (typeof context.getElementsByTagName !== "undefined") {
	          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
	        } else if (support.qsa) {
	          return context.querySelectorAll(tag);
	        }
	      } : function (tag, context) {
	        var elem,
	            tmp = [],
	            i = 0,
	            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	        results = context.getElementsByTagName(tag); // Filter out possible comments

	        if (tag === "*") {
	          while (elem = results[i++]) {
	            if (elem.nodeType === 1) {
	              tmp.push(elem);
	            }
	          }

	          return tmp;
	        }

	        return results;
	      }; // Class

	      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
	        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
	          return context.getElementsByClassName(className);
	        }
	      };
	      /* QSA/matchesSelector
	      ---------------------------------------------------------------------- */
	      // QSA and matchesSelector support
	      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


	      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
	      // We allow this because of a bug in IE8/9 that throws an error
	      // whenever `document.activeElement` is accessed on an iframe
	      // So, we allow :focus to pass through QSA all the time to avoid the IE error
	      // See https://bugs.jquery.com/ticket/13378

	      rbuggyQSA = [];

	      if (support.qsa = rnative.test(document.querySelectorAll)) {
	        // Build QSA regex
	        // Regex strategy adopted from Diego Perini
	        assert(function (el) {
	          var input; // Select is set to empty string on purpose
	          // This is to test IE's treatment of not explicitly
	          // setting a boolean content attribute,
	          // since its presence should be enough
	          // https://bugs.jquery.com/ticket/12359

	          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
	          // Nothing should be selected when empty strings follow ^= or $= or *=
	          // The test attribute must be unknown in Opera but "safe" for WinRT
	          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

	          if (el.querySelectorAll("[msallowcapture^='']").length) {
	            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
	          } // Support: IE8
	          // Boolean attributes and "value" are not treated correctly


	          if (!el.querySelectorAll("[selected]").length) {
	            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
	          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


	          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
	            rbuggyQSA.push("~=");
	          } // Support: IE 11+, Edge 15 - 18+
	          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
	          // Adding a temporary attribute to the document before the selection works
	          // around the issue.
	          // Interestingly, IE 10 & older don't seem to have the issue.


	          input = document.createElement("input");
	          input.setAttribute("name", "");
	          el.appendChild(input);

	          if (!el.querySelectorAll("[name='']").length) {
	            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
	          } // Webkit/Opera - :checked should return selected option elements
	          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	          // IE8 throws error here and will not see later tests


	          if (!el.querySelectorAll(":checked").length) {
	            rbuggyQSA.push(":checked");
	          } // Support: Safari 8+, iOS 8+
	          // https://bugs.webkit.org/show_bug.cgi?id=136851
	          // In-page `selector#id sibling-combinator selector` fails


	          if (!el.querySelectorAll("a#" + expando + "+*").length) {
	            rbuggyQSA.push(".#.+[+~]");
	          } // Support: Firefox <=3.6 - 5 only
	          // Old Firefox doesn't throw on a badly-escaped identifier.


	          el.querySelectorAll("\\\f");
	          rbuggyQSA.push("[\\r\\n\\f]");
	        });
	        assert(function (el) {
	          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
	          // The type and name attributes are restricted during .innerHTML assignment

	          var input = document.createElement("input");
	          input.setAttribute("type", "hidden");
	          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
	          // Enforce case-sensitivity of name attribute

	          if (el.querySelectorAll("[name=d]").length) {
	            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
	          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	          // IE8 throws error here and will not see later tests


	          if (el.querySelectorAll(":enabled").length !== 2) {
	            rbuggyQSA.push(":enabled", ":disabled");
	          } // Support: IE9-11+
	          // IE's :disabled selector does not pick up the children of disabled fieldsets


	          docElem.appendChild(el).disabled = true;

	          if (el.querySelectorAll(":disabled").length !== 2) {
	            rbuggyQSA.push(":enabled", ":disabled");
	          } // Support: Opera 10 - 11 only
	          // Opera 10-11 does not throw on post-comma invalid pseudos


	          el.querySelectorAll("*,:x");
	          rbuggyQSA.push(",.*:");
	        });
	      }

	      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	        assert(function (el) {
	          // Check to see if it's possible to do matchesSelector
	          // on a disconnected node (IE 9)
	          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
	          // Gecko does not error, returns false instead

	          matches.call(el, "[s!='']:x");
	          rbuggyMatches.push("!=", pseudos);
	        });
	      }

	      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
	      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	      /* Contains
	      ---------------------------------------------------------------------- */

	      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
	      // Purposefully self-exclusive
	      // As in, an element does not contain itself

	      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
	        var adown = a.nodeType === 9 ? a.documentElement : a,
	            bup = b && b.parentNode;
	        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
	      } : function (a, b) {
	        if (b) {
	          while (b = b.parentNode) {
	            if (b === a) {
	              return true;
	            }
	          }
	        }

	        return false;
	      };
	      /* Sorting
	      ---------------------------------------------------------------------- */
	      // Document order sorting

	      sortOrder = hasCompare ? function (a, b) {
	        // Flag for duplicate removal
	        if (a === b) {
	          hasDuplicate = true;
	          return 0;
	        } // Sort on method existence if only one input has compareDocumentPosition


	        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

	        if (compare) {
	          return compare;
	        } // Calculate position if both inputs belong to the same document
	        // Support: IE 11+, Edge 17 - 18+
	        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	        // two documents; shallow comparisons work.
	        // eslint-disable-next-line eqeqeq


	        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
	        1; // Disconnected nodes

	        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
	          // Choose the first element that is related to our preferred document
	          // Support: IE 11+, Edge 17 - 18+
	          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	          // two documents; shallow comparisons work.
	          // eslint-disable-next-line eqeqeq
	          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
	            return -1;
	          } // Support: IE 11+, Edge 17 - 18+
	          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	          // two documents; shallow comparisons work.
	          // eslint-disable-next-line eqeqeq


	          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
	            return 1;
	          } // Maintain original order


	          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
	        }

	        return compare & 4 ? -1 : 1;
	      } : function (a, b) {
	        // Exit early if the nodes are identical
	        if (a === b) {
	          hasDuplicate = true;
	          return 0;
	        }

	        var cur,
	            i = 0,
	            aup = a.parentNode,
	            bup = b.parentNode,
	            ap = [a],
	            bp = [b]; // Parentless nodes are either documents or disconnected

	        if (!aup || !bup) {
	          // Support: IE 11+, Edge 17 - 18+
	          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	          // two documents; shallow comparisons work.

	          /* eslint-disable eqeqeq */
	          return a == document ? -1 : b == document ? 1 :
	          /* eslint-enable eqeqeq */
	          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
	        } else if (aup === bup) {
	          return siblingCheck(a, b);
	        } // Otherwise we need full lists of their ancestors for comparison


	        cur = a;

	        while (cur = cur.parentNode) {
	          ap.unshift(cur);
	        }

	        cur = b;

	        while (cur = cur.parentNode) {
	          bp.unshift(cur);
	        } // Walk down the tree looking for a discrepancy


	        while (ap[i] === bp[i]) {
	          i++;
	        }

	        return i ? // Do a sibling check if the nodes have a common ancestor
	        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
	        // Support: IE 11+, Edge 17 - 18+
	        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	        // two documents; shallow comparisons work.

	        /* eslint-disable eqeqeq */
	        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
	        /* eslint-enable eqeqeq */
	        0;
	      };
	      return document;
	    };

	    Sizzle.matches = function (expr, elements) {
	      return Sizzle(expr, null, null, elements);
	    };

	    Sizzle.matchesSelector = function (elem, expr) {
	      setDocument(elem);

	      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	        try {
	          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

	          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
	          // fragment in IE 9
	          elem.document && elem.document.nodeType !== 11) {
	            return ret;
	          }
	        } catch (e) {
	          nonnativeSelectorCache(expr, true);
	        }
	      }

	      return Sizzle(expr, document, null, [elem]).length > 0;
	    };

	    Sizzle.contains = function (context, elem) {
	      // Set document vars if needed
	      // Support: IE 11+, Edge 17 - 18+
	      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	      // two documents; shallow comparisons work.
	      // eslint-disable-next-line eqeqeq
	      if ((context.ownerDocument || context) != document) {
	        setDocument(context);
	      }

	      return contains(context, elem);
	    };

	    Sizzle.attr = function (elem, name) {
	      // Set document vars if needed
	      // Support: IE 11+, Edge 17 - 18+
	      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	      // two documents; shallow comparisons work.
	      // eslint-disable-next-line eqeqeq
	      if ((elem.ownerDocument || elem) != document) {
	        setDocument(elem);
	      }

	      var fn = Expr.attrHandle[name.toLowerCase()],
	          // Don't get fooled by Object.prototype properties (jQuery #13807)
	      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
	    };

	    Sizzle.escape = function (sel) {
	      return (sel + "").replace(rcssescape, fcssescape);
	    };

	    Sizzle.error = function (msg) {
	      throw new Error("Syntax error, unrecognized expression: " + msg);
	    };
	    /**
	     * Document sorting and removing duplicates
	     * @param {ArrayLike} results
	     */


	    Sizzle.uniqueSort = function (results) {
	      var elem,
	          duplicates = [],
	          j = 0,
	          i = 0; // Unless we *know* we can detect duplicates, assume their presence

	      hasDuplicate = !support.detectDuplicates;
	      sortInput = !support.sortStable && results.slice(0);
	      results.sort(sortOrder);

	      if (hasDuplicate) {
	        while (elem = results[i++]) {
	          if (elem === results[i]) {
	            j = duplicates.push(i);
	          }
	        }

	        while (j--) {
	          results.splice(duplicates[j], 1);
	        }
	      } // Clear input after sorting to release objects
	      // See https://github.com/jquery/sizzle/pull/225


	      sortInput = null;
	      return results;
	    };
	    /**
	     * Utility function for retrieving the text value of an array of DOM nodes
	     * @param {Array|Element} elem
	     */


	    getText = Sizzle.getText = function (elem) {
	      var node,
	          ret = "",
	          i = 0,
	          nodeType = elem.nodeType;

	      if (!nodeType) {
	        // If no nodeType, this is expected to be an array
	        while (node = elem[i++]) {
	          // Do not traverse comment nodes
	          ret += getText(node);
	        }
	      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
	        // Use textContent for elements
	        // innerText usage removed for consistency of new lines (jQuery #11153)
	        if (typeof elem.textContent === "string") {
	          return elem.textContent;
	        } else {
	          // Traverse its children
	          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
	            ret += getText(elem);
	          }
	        }
	      } else if (nodeType === 3 || nodeType === 4) {
	        return elem.nodeValue;
	      } // Do not include comment or processing instruction nodes


	      return ret;
	    };

	    Expr = Sizzle.selectors = {
	      // Can be adjusted by the user
	      cacheLength: 50,
	      createPseudo: markFunction,
	      match: matchExpr,
	      attrHandle: {},
	      find: {},
	      relative: {
	        ">": {
	          dir: "parentNode",
	          first: true
	        },
	        " ": {
	          dir: "parentNode"
	        },
	        "+": {
	          dir: "previousSibling",
	          first: true
	        },
	        "~": {
	          dir: "previousSibling"
	        }
	      },
	      preFilter: {
	        "ATTR": function (match) {
	          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

	          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

	          if (match[2] === "~=") {
	            match[3] = " " + match[3] + " ";
	          }

	          return match.slice(0, 4);
	        },
	        "CHILD": function (match) {
	          /* matches from matchExpr["CHILD"]
	          	1 type (only|nth|...)
	          	2 what (child|of-type)
	          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	          	4 xn-component of xn+y argument ([+-]?\d*n|)
	          	5 sign of xn-component
	          	6 x of xn-component
	          	7 sign of y-component
	          	8 y of y-component
	          */
	          match[1] = match[1].toLowerCase();

	          if (match[1].slice(0, 3) === "nth") {
	            // nth-* requires argument
	            if (!match[3]) {
	              Sizzle.error(match[0]);
	            } // numeric x and y parameters for Expr.filter.CHILD
	            // remember that false/true cast respectively to 0/1


	            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
	            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
	          } else if (match[3]) {
	            Sizzle.error(match[0]);
	          }

	          return match;
	        },
	        "PSEUDO": function (match) {
	          var excess,
	              unquoted = !match[6] && match[2];

	          if (matchExpr["CHILD"].test(match[0])) {
	            return null;
	          } // Accept quoted arguments as-is


	          if (match[3]) {
	            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
	          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
	          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
	          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
	            // excess is a negative index
	            match[0] = match[0].slice(0, excess);
	            match[2] = unquoted.slice(0, excess);
	          } // Return only captures needed by the pseudo filter method (type and argument)


	          return match.slice(0, 3);
	        }
	      },
	      filter: {
	        "TAG": function (nodeNameSelector) {
	          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
	          return nodeNameSelector === "*" ? function () {
	            return true;
	          } : function (elem) {
	            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
	          };
	        },
	        "CLASS": function (className) {
	          var pattern = classCache[className + " "];
	          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
	            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
	          });
	        },
	        "ATTR": function (name, operator, check) {
	          return function (elem) {
	            var result = Sizzle.attr(elem, name);

	            if (result == null) {
	              return operator === "!=";
	            }

	            if (!operator) {
	              return true;
	            }

	            result += "";
	            /* eslint-disable max-len */

	            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
	            /* eslint-enable max-len */
	          };
	        },
	        "CHILD": function (type, what, _argument, first, last) {
	          var simple = type.slice(0, 3) !== "nth",
	              forward = type.slice(-4) !== "last",
	              ofType = what === "of-type";
	          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
	          function (elem) {
	            return !!elem.parentNode;
	          } : function (elem, _context, xml) {
	            var cache,
	                uniqueCache,
	                outerCache,
	                node,
	                nodeIndex,
	                start,
	                dir = simple !== forward ? "nextSibling" : "previousSibling",
	                parent = elem.parentNode,
	                name = ofType && elem.nodeName.toLowerCase(),
	                useCache = !xml && !ofType,
	                diff = false;

	            if (parent) {
	              // :(first|last|only)-(child|of-type)
	              if (simple) {
	                while (dir) {
	                  node = elem;

	                  while (node = node[dir]) {
	                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
	                      return false;
	                    }
	                  } // Reverse direction for :only-* (if we haven't yet done so)


	                  start = dir = type === "only" && !start && "nextSibling";
	                }

	                return true;
	              }

	              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

	              if (forward && useCache) {
	                // Seek `elem` from a previously-cached index
	                // ...in a gzip-friendly way
	                node = parent;
	                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	                // Defend against cloned attroperties (jQuery gh-1709)

	                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	                cache = uniqueCache[type] || [];
	                nodeIndex = cache[0] === dirruns && cache[1];
	                diff = nodeIndex && cache[2];
	                node = nodeIndex && parent.childNodes[nodeIndex];

	                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
	                diff = nodeIndex = 0) || start.pop()) {
	                  // When found, cache indexes on `parent` and break
	                  if (node.nodeType === 1 && ++diff && node === elem) {
	                    uniqueCache[type] = [dirruns, nodeIndex, diff];
	                    break;
	                  }
	                }
	              } else {
	                // Use previously-cached element index if available
	                if (useCache) {
	                  // ...in a gzip-friendly way
	                  node = elem;
	                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	                  // Defend against cloned attroperties (jQuery gh-1709)

	                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	                  cache = uniqueCache[type] || [];
	                  nodeIndex = cache[0] === dirruns && cache[1];
	                  diff = nodeIndex;
	                } // xml :nth-child(...)
	                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


	                if (diff === false) {
	                  // Use the same loop as above to seek `elem` from the start
	                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
	                      // Cache the index of each encountered element
	                      if (useCache) {
	                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
	                        // Defend against cloned attroperties (jQuery gh-1709)

	                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
	                        uniqueCache[type] = [dirruns, diff];
	                      }

	                      if (node === elem) {
	                        break;
	                      }
	                    }
	                  }
	                }
	              } // Incorporate the offset, then check against cycle size


	              diff -= last;
	              return diff === first || diff % first === 0 && diff / first >= 0;
	            }
	          };
	        },
	        "PSEUDO": function (pseudo, argument) {
	          // pseudo-class names are case-insensitive
	          // http://www.w3.org/TR/selectors/#pseudo-classes
	          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	          // Remember that setFilters inherits from pseudos
	          var args,
	              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
	          // arguments are needed to create the filter function
	          // just as Sizzle does

	          if (fn[expando]) {
	            return fn(argument);
	          } // But maintain support for old signatures


	          if (fn.length > 1) {
	            args = [pseudo, pseudo, "", argument];
	            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
	              var idx,
	                  matched = fn(seed, argument),
	                  i = matched.length;

	              while (i--) {
	                idx = indexOf(seed, matched[i]);
	                seed[idx] = !(matches[idx] = matched[i]);
	              }
	            }) : function (elem) {
	              return fn(elem, 0, args);
	            };
	          }

	          return fn;
	        }
	      },
	      pseudos: {
	        // Potentially complex pseudos
	        "not": markFunction(function (selector) {
	          // Trim the selector passed to compile
	          // to avoid treating leading and trailing
	          // spaces as combinators
	          var input = [],
	              results = [],
	              matcher = compile(selector.replace(rtrim, "$1"));
	          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
	            var elem,
	                unmatched = matcher(seed, null, xml, []),
	                i = seed.length; // Match elements unmatched by `matcher`

	            while (i--) {
	              if (elem = unmatched[i]) {
	                seed[i] = !(matches[i] = elem);
	              }
	            }
	          }) : function (elem, _context, xml) {
	            input[0] = elem;
	            matcher(input, null, xml, results); // Don't keep the element (issue #299)

	            input[0] = null;
	            return !results.pop();
	          };
	        }),
	        "has": markFunction(function (selector) {
	          return function (elem) {
	            return Sizzle(selector, elem).length > 0;
	          };
	        }),
	        "contains": markFunction(function (text) {
	          text = text.replace(runescape, funescape);
	          return function (elem) {
	            return (elem.textContent || getText(elem)).indexOf(text) > -1;
	          };
	        }),
	        // "Whether an element is represented by a :lang() selector
	        // is based solely on the element's language value
	        // being equal to the identifier C,
	        // or beginning with the identifier C immediately followed by "-".
	        // The matching of C against the element's language value is performed case-insensitively.
	        // The identifier C does not have to be a valid language name."
	        // http://www.w3.org/TR/selectors/#lang-pseudo
	        "lang": markFunction(function (lang) {
	          // lang value must be a valid identifier
	          if (!ridentifier.test(lang || "")) {
	            Sizzle.error("unsupported lang: " + lang);
	          }

	          lang = lang.replace(runescape, funescape).toLowerCase();
	          return function (elem) {
	            var elemLang;

	            do {
	              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	                elemLang = elemLang.toLowerCase();
	                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
	              }
	            } while ((elem = elem.parentNode) && elem.nodeType === 1);

	            return false;
	          };
	        }),
	        // Miscellaneous
	        "target": function (elem) {
	          var hash = window.location && window.location.hash;
	          return hash && hash.slice(1) === elem.id;
	        },
	        "root": function (elem) {
	          return elem === docElem;
	        },
	        "focus": function (elem) {
	          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
	        },
	        // Boolean properties
	        "enabled": createDisabledPseudo(false),
	        "disabled": createDisabledPseudo(true),
	        "checked": function (elem) {
	          // In CSS3, :checked should return both checked and selected elements
	          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	          var nodeName = elem.nodeName.toLowerCase();
	          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
	        },
	        "selected": function (elem) {
	          // Accessing this property makes selected-by-default
	          // options in Safari work properly
	          if (elem.parentNode) {
	            // eslint-disable-next-line no-unused-expressions
	            elem.parentNode.selectedIndex;
	          }

	          return elem.selected === true;
	        },
	        // Contents
	        "empty": function (elem) {
	          // http://www.w3.org/TR/selectors/#empty-pseudo
	          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	          //   but not by others (comment: 8; processing instruction: 7; etc.)
	          // nodeType < 6 works because attributes (2) do not appear as children
	          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
	            if (elem.nodeType < 6) {
	              return false;
	            }
	          }

	          return true;
	        },
	        "parent": function (elem) {
	          return !Expr.pseudos["empty"](elem);
	        },
	        // Element/input types
	        "header": function (elem) {
	          return rheader.test(elem.nodeName);
	        },
	        "input": function (elem) {
	          return rinputs.test(elem.nodeName);
	        },
	        "button": function (elem) {
	          var name = elem.nodeName.toLowerCase();
	          return name === "input" && elem.type === "button" || name === "button";
	        },
	        "text": function (elem) {
	          var attr;
	          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
	          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
	        },
	        // Position-in-collection
	        "first": createPositionalPseudo(function () {
	          return [0];
	        }),
	        "last": createPositionalPseudo(function (_matchIndexes, length) {
	          return [length - 1];
	        }),
	        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
	          return [argument < 0 ? argument + length : argument];
	        }),
	        "even": createPositionalPseudo(function (matchIndexes, length) {
	          var i = 0;

	          for (; i < length; i += 2) {
	            matchIndexes.push(i);
	          }

	          return matchIndexes;
	        }),
	        "odd": createPositionalPseudo(function (matchIndexes, length) {
	          var i = 1;

	          for (; i < length; i += 2) {
	            matchIndexes.push(i);
	          }

	          return matchIndexes;
	        }),
	        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
	          var i = argument < 0 ? argument + length : argument > length ? length : argument;

	          for (; --i >= 0;) {
	            matchIndexes.push(i);
	          }

	          return matchIndexes;
	        }),
	        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
	          var i = argument < 0 ? argument + length : argument;

	          for (; ++i < length;) {
	            matchIndexes.push(i);
	          }

	          return matchIndexes;
	        })
	      }
	    };
	    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

	    for (i in {
	      radio: true,
	      checkbox: true,
	      file: true,
	      password: true,
	      image: true
	    }) {
	      Expr.pseudos[i] = createInputPseudo(i);
	    }

	    for (i in {
	      submit: true,
	      reset: true
	    }) {
	      Expr.pseudos[i] = createButtonPseudo(i);
	    } // Easy API for creating new setFilters


	    function setFilters() {}

	    setFilters.prototype = Expr.filters = Expr.pseudos;
	    Expr.setFilters = new setFilters();

	    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	      var matched,
	          match,
	          tokens,
	          type,
	          soFar,
	          groups,
	          preFilters,
	          cached = tokenCache[selector + " "];

	      if (cached) {
	        return parseOnly ? 0 : cached.slice(0);
	      }

	      soFar = selector;
	      groups = [];
	      preFilters = Expr.preFilter;

	      while (soFar) {
	        // Comma and first run
	        if (!matched || (match = rcomma.exec(soFar))) {
	          if (match) {
	            // Don't consume trailing commas as valid
	            soFar = soFar.slice(match[0].length) || soFar;
	          }

	          groups.push(tokens = []);
	        }

	        matched = false; // Combinators

	        if (match = rcombinators.exec(soFar)) {
	          matched = match.shift();
	          tokens.push({
	            value: matched,
	            // Cast descendant combinators to space
	            type: match[0].replace(rtrim, " ")
	          });
	          soFar = soFar.slice(matched.length);
	        } // Filters


	        for (type in Expr.filter) {
	          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
	            matched = match.shift();
	            tokens.push({
	              value: matched,
	              type: type,
	              matches: match
	            });
	            soFar = soFar.slice(matched.length);
	          }
	        }

	        if (!matched) {
	          break;
	        }
	      } // Return the length of the invalid excess
	      // if we're just parsing
	      // Otherwise, throw an error or return tokens


	      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
	      tokenCache(selector, groups).slice(0);
	    };

	    function toSelector(tokens) {
	      var i = 0,
	          len = tokens.length,
	          selector = "";

	      for (; i < len; i++) {
	        selector += tokens[i].value;
	      }

	      return selector;
	    }

	    function addCombinator(matcher, combinator, base) {
	      var dir = combinator.dir,
	          skip = combinator.next,
	          key = skip || dir,
	          checkNonElements = base && key === "parentNode",
	          doneName = done++;
	      return combinator.first ? // Check against closest ancestor/preceding element
	      function (elem, context, xml) {
	        while (elem = elem[dir]) {
	          if (elem.nodeType === 1 || checkNonElements) {
	            return matcher(elem, context, xml);
	          }
	        }

	        return false;
	      } : // Check against all ancestor/preceding elements
	      function (elem, context, xml) {
	        var oldCache,
	            uniqueCache,
	            outerCache,
	            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

	        if (xml) {
	          while (elem = elem[dir]) {
	            if (elem.nodeType === 1 || checkNonElements) {
	              if (matcher(elem, context, xml)) {
	                return true;
	              }
	            }
	          }
	        } else {
	          while (elem = elem[dir]) {
	            if (elem.nodeType === 1 || checkNonElements) {
	              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
	              // Defend against cloned attroperties (jQuery gh-1709)

	              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

	              if (skip && skip === elem.nodeName.toLowerCase()) {
	                elem = elem[dir] || elem;
	              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
	                // Assign to newCache so results back-propagate to previous elements
	                return newCache[2] = oldCache[2];
	              } else {
	                // Reuse newcache so results back-propagate to previous elements
	                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

	                if (newCache[2] = matcher(elem, context, xml)) {
	                  return true;
	                }
	              }
	            }
	          }
	        }

	        return false;
	      };
	    }

	    function elementMatcher(matchers) {
	      return matchers.length > 1 ? function (elem, context, xml) {
	        var i = matchers.length;

	        while (i--) {
	          if (!matchers[i](elem, context, xml)) {
	            return false;
	          }
	        }

	        return true;
	      } : matchers[0];
	    }

	    function multipleContexts(selector, contexts, results) {
	      var i = 0,
	          len = contexts.length;

	      for (; i < len; i++) {
	        Sizzle(selector, contexts[i], results);
	      }

	      return results;
	    }

	    function condense(unmatched, map, filter, context, xml) {
	      var elem,
	          newUnmatched = [],
	          i = 0,
	          len = unmatched.length,
	          mapped = map != null;

	      for (; i < len; i++) {
	        if (elem = unmatched[i]) {
	          if (!filter || filter(elem, context, xml)) {
	            newUnmatched.push(elem);

	            if (mapped) {
	              map.push(i);
	            }
	          }
	        }
	      }

	      return newUnmatched;
	    }

	    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	      if (postFilter && !postFilter[expando]) {
	        postFilter = setMatcher(postFilter);
	      }

	      if (postFinder && !postFinder[expando]) {
	        postFinder = setMatcher(postFinder, postSelector);
	      }

	      return markFunction(function (seed, results, context, xml) {
	        var temp,
	            i,
	            elem,
	            preMap = [],
	            postMap = [],
	            preexisting = results.length,
	            // Get initial elements from seed or context
	        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
	            // Prefilter to get matcher input, preserving a map for seed-results synchronization
	        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
	            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
	        [] : // ...otherwise use results directly
	        results : matcherIn; // Find primary matches

	        if (matcher) {
	          matcher(matcherIn, matcherOut, context, xml);
	        } // Apply postFilter


	        if (postFilter) {
	          temp = condense(matcherOut, postMap);
	          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

	          i = temp.length;

	          while (i--) {
	            if (elem = temp[i]) {
	              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
	            }
	          }
	        }

	        if (seed) {
	          if (postFinder || preFilter) {
	            if (postFinder) {
	              // Get the final matcherOut by condensing this intermediate into postFinder contexts
	              temp = [];
	              i = matcherOut.length;

	              while (i--) {
	                if (elem = matcherOut[i]) {
	                  // Restore matcherIn since elem is not yet a final match
	                  temp.push(matcherIn[i] = elem);
	                }
	              }

	              postFinder(null, matcherOut = [], temp, xml);
	            } // Move matched elements from seed to results to keep them synchronized


	            i = matcherOut.length;

	            while (i--) {
	              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
	                seed[temp] = !(results[temp] = elem);
	              }
	            }
	          } // Add elements to results, through postFinder if defined

	        } else {
	          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

	          if (postFinder) {
	            postFinder(null, results, matcherOut, xml);
	          } else {
	            push.apply(results, matcherOut);
	          }
	        }
	      });
	    }

	    function matcherFromTokens(tokens) {
	      var checkContext,
	          matcher,
	          j,
	          len = tokens.length,
	          leadingRelative = Expr.relative[tokens[0].type],
	          implicitRelative = leadingRelative || Expr.relative[" "],
	          i = leadingRelative ? 1 : 0,
	          // The foundational matcher ensures that elements are reachable from top-level context(s)
	      matchContext = addCombinator(function (elem) {
	        return elem === checkContext;
	      }, implicitRelative, true),
	          matchAnyContext = addCombinator(function (elem) {
	        return indexOf(checkContext, elem) > -1;
	      }, implicitRelative, true),
	          matchers = [function (elem, context, xml) {
	        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

	        checkContext = null;
	        return ret;
	      }];

	      for (; i < len; i++) {
	        if (matcher = Expr.relative[tokens[i].type]) {
	          matchers = [addCombinator(elementMatcher(matchers), matcher)];
	        } else {
	          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

	          if (matcher[expando]) {
	            // Find the next relative operator (if any) for proper handling
	            j = ++i;

	            for (; j < len; j++) {
	              if (Expr.relative[tokens[j].type]) {
	                break;
	              }
	            }

	            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	            tokens.slice(0, i - 1).concat({
	              value: tokens[i - 2].type === " " ? "*" : ""
	            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
	          }

	          matchers.push(matcher);
	        }
	      }

	      return elementMatcher(matchers);
	    }

	    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
	      var bySet = setMatchers.length > 0,
	          byElement = elementMatchers.length > 0,
	          superMatcher = function (seed, context, xml, results, outermost) {
	        var elem,
	            j,
	            matcher,
	            matchedCount = 0,
	            i = "0",
	            unmatched = seed && [],
	            setMatched = [],
	            contextBackup = outermostContext,
	            // We must always have either seed elements or outermost context
	        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
	            // Use integer dirruns iff this is the outermost matcher
	        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
	            len = elems.length;

	        if (outermost) {
	          // Support: IE 11+, Edge 17 - 18+
	          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	          // two documents; shallow comparisons work.
	          // eslint-disable-next-line eqeqeq
	          outermostContext = context == document || context || outermost;
	        } // Add elements passing elementMatchers directly to results
	        // Support: IE<9, Safari
	        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


	        for (; i !== len && (elem = elems[i]) != null; i++) {
	          if (byElement && elem) {
	            j = 0; // Support: IE 11+, Edge 17 - 18+
	            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	            // two documents; shallow comparisons work.
	            // eslint-disable-next-line eqeqeq

	            if (!context && elem.ownerDocument != document) {
	              setDocument(elem);
	              xml = !documentIsHTML;
	            }

	            while (matcher = elementMatchers[j++]) {
	              if (matcher(elem, context || document, xml)) {
	                results.push(elem);
	                break;
	              }
	            }

	            if (outermost) {
	              dirruns = dirrunsUnique;
	            }
	          } // Track unmatched elements for set filters


	          if (bySet) {
	            // They will have gone through all possible matchers
	            if (elem = !matcher && elem) {
	              matchedCount--;
	            } // Lengthen the array for every element, matched or not


	            if (seed) {
	              unmatched.push(elem);
	            }
	          }
	        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
	        // makes the latter nonnegative.


	        matchedCount += i; // Apply set filters to unmatched elements
	        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	        // no element matchers and no seed.
	        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
	        // numerically zero.

	        if (bySet && i !== matchedCount) {
	          j = 0;

	          while (matcher = setMatchers[j++]) {
	            matcher(unmatched, setMatched, context, xml);
	          }

	          if (seed) {
	            // Reintegrate element matches to eliminate the need for sorting
	            if (matchedCount > 0) {
	              while (i--) {
	                if (!(unmatched[i] || setMatched[i])) {
	                  setMatched[i] = pop.call(results);
	                }
	              }
	            } // Discard index placeholder values to get only actual matches


	            setMatched = condense(setMatched);
	          } // Add matches to results


	          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

	          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	            Sizzle.uniqueSort(results);
	          }
	        } // Override manipulation of globals by nested matchers


	        if (outermost) {
	          dirruns = dirrunsUnique;
	          outermostContext = contextBackup;
	        }

	        return unmatched;
	      };

	      return bySet ? markFunction(superMatcher) : superMatcher;
	    }

	    compile = Sizzle.compile = function (selector, match
	    /* Internal Use Only */
	    ) {
	      var i,
	          setMatchers = [],
	          elementMatchers = [],
	          cached = compilerCache[selector + " "];

	      if (!cached) {
	        // Generate a function of recursive functions that can be used to check each element
	        if (!match) {
	          match = tokenize(selector);
	        }

	        i = match.length;

	        while (i--) {
	          cached = matcherFromTokens(match[i]);

	          if (cached[expando]) {
	            setMatchers.push(cached);
	          } else {
	            elementMatchers.push(cached);
	          }
	        } // Cache the compiled function


	        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

	        cached.selector = selector;
	      }

	      return cached;
	    };
	    /**
	     * A low-level selection function that works with Sizzle's compiled
	     *  selector functions
	     * @param {String|Function} selector A selector or a pre-compiled
	     *  selector function built with Sizzle.compile
	     * @param {Element} context
	     * @param {Array} [results]
	     * @param {Array} [seed] A set of elements to match against
	     */


	    select = Sizzle.select = function (selector, context, results, seed) {
	      var i,
	          tokens,
	          token,
	          type,
	          find,
	          compiled = typeof selector === "function" && selector,
	          match = !seed && tokenize(selector = compiled.selector || selector);
	      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
	      // (the latter of which guarantees us context)

	      if (match.length === 1) {
	        // Reduce context if the leading compound selector is an ID
	        tokens = match[0] = match[0].slice(0);

	        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

	          if (!context) {
	            return results; // Precompiled matchers will still verify ancestry, so step up a level
	          } else if (compiled) {
	            context = context.parentNode;
	          }

	          selector = selector.slice(tokens.shift().value.length);
	        } // Fetch a seed set for right-to-left matching


	        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

	        while (i--) {
	          token = tokens[i]; // Abort if we hit a combinator

	          if (Expr.relative[type = token.type]) {
	            break;
	          }

	          if (find = Expr.find[type]) {
	            // Search, expanding context for leading sibling combinators
	            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
	              // If seed is empty or no tokens remain, we can return early
	              tokens.splice(i, 1);
	              selector = seed.length && toSelector(tokens);

	              if (!selector) {
	                push.apply(results, seed);
	                return results;
	              }

	              break;
	            }
	          }
	        }
	      } // Compile and execute a filtering function if one is not provided
	      // Provide `match` to avoid retokenization if we modified the selector above


	      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
	      return results;
	    }; // One-time assignments
	    // Sort stability


	    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
	    // Always assume duplicates if they aren't passed to the comparison function

	    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

	    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	    // Detached nodes confoundingly follow *each other*

	    support.sortDetached = assert(function (el) {
	      // Should return 1, but returns 4 (following)
	      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
	    }); // Support: IE<8
	    // Prevent attribute/property "interpolation"
	    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

	    if (!assert(function (el) {
	      el.innerHTML = "<a href='#'></a>";
	      return el.firstChild.getAttribute("href") === "#";
	    })) {
	      addHandle("type|href|height|width", function (elem, name, isXML) {
	        if (!isXML) {
	          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
	        }
	      });
	    } // Support: IE<9
	    // Use defaultValue in place of getAttribute("value")


	    if (!support.attributes || !assert(function (el) {
	      el.innerHTML = "<input/>";
	      el.firstChild.setAttribute("value", "");
	      return el.firstChild.getAttribute("value") === "";
	    })) {
	      addHandle("value", function (elem, _name, isXML) {
	        if (!isXML && elem.nodeName.toLowerCase() === "input") {
	          return elem.defaultValue;
	        }
	      });
	    } // Support: IE<9
	    // Use getAttributeNode to fetch booleans when getAttribute lies


	    if (!assert(function (el) {
	      return el.getAttribute("disabled") == null;
	    })) {
	      addHandle(booleans, function (elem, name, isXML) {
	        var val;

	        if (!isXML) {
	          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
	        }
	      });
	    }

	    return Sizzle;
	  }(window);

	  jQuery.find = Sizzle;
	  jQuery.expr = Sizzle.selectors; // Deprecated

	  jQuery.expr[":"] = jQuery.expr.pseudos;
	  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	  jQuery.text = Sizzle.getText;
	  jQuery.isXMLDoc = Sizzle.isXML;
	  jQuery.contains = Sizzle.contains;
	  jQuery.escapeSelector = Sizzle.escape;

	  var dir = function (elem, dir, until) {
	    var matched = [],
	        truncate = until !== undefined;

	    while ((elem = elem[dir]) && elem.nodeType !== 9) {
	      if (elem.nodeType === 1) {
	        if (truncate && jQuery(elem).is(until)) {
	          break;
	        }

	        matched.push(elem);
	      }
	    }

	    return matched;
	  };

	  var siblings = function (n, elem) {
	    var matched = [];

	    for (; n; n = n.nextSibling) {
	      if (n.nodeType === 1 && n !== elem) {
	        matched.push(n);
	      }
	    }

	    return matched;
	  };

	  var rneedsContext = jQuery.expr.match.needsContext;

	  function nodeName(elem, name) {
	    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	  }

	  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

	  function winnow(elements, qualifier, not) {
	    if (isFunction(qualifier)) {
	      return jQuery.grep(elements, function (elem, i) {
	        return !!qualifier.call(elem, i, elem) !== not;
	      });
	    } // Single element


	    if (qualifier.nodeType) {
	      return jQuery.grep(elements, function (elem) {
	        return elem === qualifier !== not;
	      });
	    } // Arraylike of elements (jQuery, arguments, Array)


	    if (typeof qualifier !== "string") {
	      return jQuery.grep(elements, function (elem) {
	        return indexOf.call(qualifier, elem) > -1 !== not;
	      });
	    } // Filtered directly for both simple and complex selectors


	    return jQuery.filter(qualifier, elements, not);
	  }

	  jQuery.filter = function (expr, elems, not) {
	    var elem = elems[0];

	    if (not) {
	      expr = ":not(" + expr + ")";
	    }

	    if (elems.length === 1 && elem.nodeType === 1) {
	      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
	    }

	    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
	      return elem.nodeType === 1;
	    }));
	  };

	  jQuery.fn.extend({
	    find: function (selector) {
	      var i,
	          ret,
	          len = this.length,
	          self = this;

	      if (typeof selector !== "string") {
	        return this.pushStack(jQuery(selector).filter(function () {
	          for (i = 0; i < len; i++) {
	            if (jQuery.contains(self[i], this)) {
	              return true;
	            }
	          }
	        }));
	      }

	      ret = this.pushStack([]);

	      for (i = 0; i < len; i++) {
	        jQuery.find(selector, self[i], ret);
	      }

	      return len > 1 ? jQuery.uniqueSort(ret) : ret;
	    },
	    filter: function (selector) {
	      return this.pushStack(winnow(this, selector || [], false));
	    },
	    not: function (selector) {
	      return this.pushStack(winnow(this, selector || [], true));
	    },
	    is: function (selector) {
	      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
	      // so $("p:first").is("p:last") won't return true for a doc with two "p".
	      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
	    }
	  }); // Initialize a jQuery object
	  // A central reference to the root jQuery(document)

	  var rootjQuery,
	      // A simple way to check for HTML strings
	  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	  // Strict HTML recognition (#11290: must start with <)
	  // Shortcut simple #id case for speed
	  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	      init = jQuery.fn.init = function (selector, context, root) {
	    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

	    if (!selector) {
	      return this;
	    } // Method init() accepts an alternate rootjQuery
	    // so migrate can support jQuery.sub (gh-2101)


	    root = root || rootjQuery; // Handle HTML strings

	    if (typeof selector === "string") {
	      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
	        // Assume that strings that start and end with <> are HTML and skip the regex check
	        match = [null, selector, null];
	      } else {
	        match = rquickExpr.exec(selector);
	      } // Match html or make sure no context is specified for #id


	      if (match && (match[1] || !context)) {
	        // HANDLE: $(html) -> $(array)
	        if (match[1]) {
	          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
	          // Intentionally let the error be thrown if parseHTML is not present

	          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

	          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
	            for (match in context) {
	              // Properties of context are called as methods if possible
	              if (isFunction(this[match])) {
	                this[match](context[match]); // ...and otherwise set as attributes
	              } else {
	                this.attr(match, context[match]);
	              }
	            }
	          }

	          return this; // HANDLE: $(#id)
	        } else {
	          elem = document.getElementById(match[2]);

	          if (elem) {
	            // Inject the element directly into the jQuery object
	            this[0] = elem;
	            this.length = 1;
	          }

	          return this;
	        } // HANDLE: $(expr, $(...))

	      } else if (!context || context.jquery) {
	        return (context || root).find(selector); // HANDLE: $(expr, context)
	        // (which is just equivalent to: $(context).find(expr)
	      } else {
	        return this.constructor(context).find(selector);
	      } // HANDLE: $(DOMElement)

	    } else if (selector.nodeType) {
	      this[0] = selector;
	      this.length = 1;
	      return this; // HANDLE: $(function)
	      // Shortcut for document ready
	    } else if (isFunction(selector)) {
	      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
	      selector(jQuery);
	    }

	    return jQuery.makeArray(selector, this);
	  }; // Give the init function the jQuery prototype for later instantiation


	  init.prototype = jQuery.fn; // Initialize central reference

	  rootjQuery = jQuery(document);
	  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	      // Methods guaranteed to produce a unique set when starting from a unique set
	  guaranteedUnique = {
	    children: true,
	    contents: true,
	    next: true,
	    prev: true
	  };
	  jQuery.fn.extend({
	    has: function (target) {
	      var targets = jQuery(target, this),
	          l = targets.length;
	      return this.filter(function () {
	        var i = 0;

	        for (; i < l; i++) {
	          if (jQuery.contains(this, targets[i])) {
	            return true;
	          }
	        }
	      });
	    },
	    closest: function (selectors, context) {
	      var cur,
	          i = 0,
	          l = this.length,
	          matched = [],
	          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

	      if (!rneedsContext.test(selectors)) {
	        for (; i < l; i++) {
	          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
	            // Always skip document fragments
	            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
	            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	              matched.push(cur);
	              break;
	            }
	          }
	        }
	      }

	      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
	    },
	    // Determine the position of an element within the set
	    index: function (elem) {
	      // No argument, return index in parent
	      if (!elem) {
	        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	      } // Index in selector


	      if (typeof elem === "string") {
	        return indexOf.call(jQuery(elem), this[0]);
	      } // Locate the position of the desired element


	      return indexOf.call(this, // If it receives a jQuery object, the first element is used
	      elem.jquery ? elem[0] : elem);
	    },
	    add: function (selector, context) {
	      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
	    },
	    addBack: function (selector) {
	      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
	    }
	  });

	  function sibling(cur, dir) {
	    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

	    return cur;
	  }

	  jQuery.each({
	    parent: function (elem) {
	      var parent = elem.parentNode;
	      return parent && parent.nodeType !== 11 ? parent : null;
	    },
	    parents: function (elem) {
	      return dir(elem, "parentNode");
	    },
	    parentsUntil: function (elem, _i, until) {
	      return dir(elem, "parentNode", until);
	    },
	    next: function (elem) {
	      return sibling(elem, "nextSibling");
	    },
	    prev: function (elem) {
	      return sibling(elem, "previousSibling");
	    },
	    nextAll: function (elem) {
	      return dir(elem, "nextSibling");
	    },
	    prevAll: function (elem) {
	      return dir(elem, "previousSibling");
	    },
	    nextUntil: function (elem, _i, until) {
	      return dir(elem, "nextSibling", until);
	    },
	    prevUntil: function (elem, _i, until) {
	      return dir(elem, "previousSibling", until);
	    },
	    siblings: function (elem) {
	      return siblings((elem.parentNode || {}).firstChild, elem);
	    },
	    children: function (elem) {
	      return siblings(elem.firstChild);
	    },
	    contents: function (elem) {
	      if (elem.contentDocument != null && // Support: IE 11+
	      // <object> elements with no `data` attribute has an object
	      // `contentDocument` with a `null` prototype.
	      getProto(elem.contentDocument)) {
	        return elem.contentDocument;
	      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	      // Treat the template element as a regular one in browsers that
	      // don't support it.


	      if (nodeName(elem, "template")) {
	        elem = elem.content || elem;
	      }

	      return jQuery.merge([], elem.childNodes);
	    }
	  }, function (name, fn) {
	    jQuery.fn[name] = function (until, selector) {
	      var matched = jQuery.map(this, fn, until);

	      if (name.slice(-5) !== "Until") {
	        selector = until;
	      }

	      if (selector && typeof selector === "string") {
	        matched = jQuery.filter(selector, matched);
	      }

	      if (this.length > 1) {
	        // Remove duplicates
	        if (!guaranteedUnique[name]) {
	          jQuery.uniqueSort(matched);
	        } // Reverse order for parents* and prev-derivatives


	        if (rparentsprev.test(name)) {
	          matched.reverse();
	        }
	      }

	      return this.pushStack(matched);
	    };
	  });
	  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

	  function createOptions(options) {
	    var object = {};
	    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
	      object[flag] = true;
	    });
	    return object;
	  }
	  /*
	   * Create a callback list using the following parameters:
	   *
	   *	options: an optional list of space-separated options that will change how
	   *			the callback list behaves or a more traditional option object
	   *
	   * By default a callback list will act like an event callback list and can be
	   * "fired" multiple times.
	   *
	   * Possible options:
	   *
	   *	once:			will ensure the callback list can only be fired once (like a Deferred)
	   *
	   *	memory:			will keep track of previous values and will call any callback added
	   *					after the list has been fired right away with the latest "memorized"
	   *					values (like a Deferred)
	   *
	   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	   *
	   *	stopOnFalse:	interrupt callings when a callback returns false
	   *
	   */


	  jQuery.Callbacks = function (options) {
	    // Convert options from String-formatted to Object-formatted if needed
	    // (we check in cache first)
	    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

	    var // Flag to know if list is currently firing
	    firing,
	        // Last fire value for non-forgettable lists
	    memory,
	        // Flag to know if list was already fired
	    fired,
	        // Flag to prevent firing
	    locked,
	        // Actual callback list
	    list = [],
	        // Queue of execution data for repeatable lists
	    queue = [],
	        // Index of currently firing callback (modified by add/remove as needed)
	    firingIndex = -1,
	        // Fire callbacks
	    fire = function () {
	      // Enforce single-firing
	      locked = locked || options.once; // Execute callbacks for all pending executions,
	      // respecting firingIndex overrides and runtime changes

	      fired = firing = true;

	      for (; queue.length; firingIndex = -1) {
	        memory = queue.shift();

	        while (++firingIndex < list.length) {
	          // Run callback and check for early termination
	          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
	            // Jump to end and forget the data so .add doesn't re-fire
	            firingIndex = list.length;
	            memory = false;
	          }
	        }
	      } // Forget the data if we're done with it


	      if (!options.memory) {
	        memory = false;
	      }

	      firing = false; // Clean up if we're done firing for good

	      if (locked) {
	        // Keep an empty list if we have data for future add calls
	        if (memory) {
	          list = []; // Otherwise, this object is spent
	        } else {
	          list = "";
	        }
	      }
	    },
	        // Actual Callbacks object
	    self = {
	      // Add a callback or a collection of callbacks to the list
	      add: function () {
	        if (list) {
	          // If we have memory from a past run, we should fire after adding
	          if (memory && !firing) {
	            firingIndex = list.length - 1;
	            queue.push(memory);
	          }

	          (function add(args) {
	            jQuery.each(args, function (_, arg) {
	              if (isFunction(arg)) {
	                if (!options.unique || !self.has(arg)) {
	                  list.push(arg);
	                }
	              } else if (arg && arg.length && toType(arg) !== "string") {
	                // Inspect recursively
	                add(arg);
	              }
	            });
	          })(arguments);

	          if (memory && !firing) {
	            fire();
	          }
	        }

	        return this;
	      },
	      // Remove a callback from the list
	      remove: function () {
	        jQuery.each(arguments, function (_, arg) {
	          var index;

	          while ((index = jQuery.inArray(arg, list, index)) > -1) {
	            list.splice(index, 1); // Handle firing indexes

	            if (index <= firingIndex) {
	              firingIndex--;
	            }
	          }
	        });
	        return this;
	      },
	      // Check if a given callback is in the list.
	      // If no argument is given, return whether or not list has callbacks attached.
	      has: function (fn) {
	        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
	      },
	      // Remove all callbacks from the list
	      empty: function () {
	        if (list) {
	          list = [];
	        }

	        return this;
	      },
	      // Disable .fire and .add
	      // Abort any current/pending executions
	      // Clear all callbacks and values
	      disable: function () {
	        locked = queue = [];
	        list = memory = "";
	        return this;
	      },
	      disabled: function () {
	        return !list;
	      },
	      // Disable .fire
	      // Also disable .add unless we have memory (since it would have no effect)
	      // Abort any pending executions
	      lock: function () {
	        locked = queue = [];

	        if (!memory && !firing) {
	          list = memory = "";
	        }

	        return this;
	      },
	      locked: function () {
	        return !!locked;
	      },
	      // Call all callbacks with the given context and arguments
	      fireWith: function (context, args) {
	        if (!locked) {
	          args = args || [];
	          args = [context, args.slice ? args.slice() : args];
	          queue.push(args);

	          if (!firing) {
	            fire();
	          }
	        }

	        return this;
	      },
	      // Call all the callbacks with the given arguments
	      fire: function () {
	        self.fireWith(this, arguments);
	        return this;
	      },
	      // To know if the callbacks have already been called at least once
	      fired: function () {
	        return !!fired;
	      }
	    };

	    return self;
	  };

	  function Identity(v) {
	    return v;
	  }

	  function Thrower(ex) {
	    throw ex;
	  }

	  function adoptValue(value, resolve, reject, noValue) {
	    var method;

	    try {
	      // Check for promise aspect first to privilege synchronous behavior
	      if (value && isFunction(method = value.promise)) {
	        method.call(value).done(resolve).fail(reject); // Other thenables
	      } else if (value && isFunction(method = value.then)) {
	        method.call(value, resolve, reject); // Other non-thenables
	      } else {
	        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
	        // * false: [ value ].slice( 0 ) => resolve( value )
	        // * true: [ value ].slice( 1 ) => resolve()
	        resolve.apply(undefined, [value].slice(noValue));
	      } // For Promises/A+, convert exceptions into rejections
	      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	      // Deferred#then to conditionally suppress rejection.

	    } catch (value) {
	      // Support: Android 4.0 only
	      // Strict mode functions invoked without .call/.apply get global-object context
	      reject.apply(undefined, [value]);
	    }
	  }

	  jQuery.extend({
	    Deferred: function (func) {
	      var tuples = [// action, add listener, callbacks,
	      // ... .then handlers, argument index, [final state]
	      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
	          state = "pending",
	          promise = {
	        state: function () {
	          return state;
	        },
	        always: function () {
	          deferred.done(arguments).fail(arguments);
	          return this;
	        },
	        "catch": function (fn) {
	          return promise.then(null, fn);
	        },
	        // Keep pipe for back-compat
	        pipe: function
	          /* fnDone, fnFail, fnProgress */
	        () {
	          var fns = arguments;
	          return jQuery.Deferred(function (newDefer) {
	            jQuery.each(tuples, function (_i, tuple) {
	              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
	              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
	              // deferred.done(function() { bind to newDefer or newDefer.resolve })
	              // deferred.fail(function() { bind to newDefer or newDefer.reject })

	              deferred[tuple[1]](function () {
	                var returned = fn && fn.apply(this, arguments);

	                if (returned && isFunction(returned.promise)) {
	                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
	                } else {
	                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
	                }
	              });
	            });
	            fns = null;
	          }).promise();
	        },
	        then: function (onFulfilled, onRejected, onProgress) {
	          var maxDepth = 0;

	          function resolve(depth, deferred, handler, special) {
	            return function () {
	              var that = this,
	                  args = arguments,
	                  mightThrow = function () {
	                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
	                // https://promisesaplus.com/#point-59
	                // Ignore double-resolution attempts

	                if (depth < maxDepth) {
	                  return;
	                }

	                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
	                // https://promisesaplus.com/#point-48

	                if (returned === deferred.promise()) {
	                  throw new TypeError("Thenable self-resolution");
	                } // Support: Promises/A+ sections 2.3.3.1, 3.5
	                // https://promisesaplus.com/#point-54
	                // https://promisesaplus.com/#point-75
	                // Retrieve `then` only once


	                then = returned && ( // Support: Promises/A+ section 2.3.4
	                // https://promisesaplus.com/#point-64
	                // Only check objects and functions for thenability
	                typeof returned === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

	                if (isFunction(then)) {
	                  // Special processors (notify) just wait for resolution
	                  if (special) {
	                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
	                  } else {
	                    // ...and disregard older resolution values
	                    maxDepth++;
	                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
	                  } // Handle all other returned values

	                } else {
	                  // Only substitute handlers pass on context
	                  // and multiple values (non-spec behavior)
	                  if (handler !== Identity) {
	                    that = undefined;
	                    args = [returned];
	                  } // Process the value(s)
	                  // Default process is resolve


	                  (special || deferred.resolveWith)(that, args);
	                }
	              },
	                  // Only normal processors (resolve) catch and reject exceptions
	              process = special ? mightThrow : function () {
	                try {
	                  mightThrow();
	                } catch (e) {
	                  if (jQuery.Deferred.exceptionHook) {
	                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
	                  } // Support: Promises/A+ section 2.3.3.3.4.1
	                  // https://promisesaplus.com/#point-61
	                  // Ignore post-resolution exceptions


	                  if (depth + 1 >= maxDepth) {
	                    // Only substitute handlers pass on context
	                    // and multiple values (non-spec behavior)
	                    if (handler !== Thrower) {
	                      that = undefined;
	                      args = [e];
	                    }

	                    deferred.rejectWith(that, args);
	                  }
	                }
	              }; // Support: Promises/A+ section 2.3.3.3.1
	              // https://promisesaplus.com/#point-57
	              // Re-resolve promises immediately to dodge false rejection from
	              // subsequent errors


	              if (depth) {
	                process();
	              } else {
	                // Call an optional hook to record the stack, in case of exception
	                // since it's otherwise lost when execution goes async
	                if (jQuery.Deferred.getStackHook) {
	                  process.stackTrace = jQuery.Deferred.getStackHook();
	                }

	                window.setTimeout(process);
	              }
	            };
	          }

	          return jQuery.Deferred(function (newDefer) {
	            // progress_handlers.add( ... )
	            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

	            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

	            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
	          }).promise();
	        },
	        // Get a promise for this deferred
	        // If obj is provided, the promise aspect is added to the object
	        promise: function (obj) {
	          return obj != null ? jQuery.extend(obj, promise) : promise;
	        }
	      },
	          deferred = {}; // Add list-specific methods

	      jQuery.each(tuples, function (i, tuple) {
	        var list = tuple[2],
	            stateString = tuple[5]; // promise.progress = list.add
	        // promise.done = list.add
	        // promise.fail = list.add

	        promise[tuple[1]] = list.add; // Handle state

	        if (stateString) {
	          list.add(function () {
	            // state = "resolved" (i.e., fulfilled)
	            // state = "rejected"
	            state = stateString;
	          }, // rejected_callbacks.disable
	          // fulfilled_callbacks.disable
	          tuples[3 - i][2].disable, // rejected_handlers.disable
	          // fulfilled_handlers.disable
	          tuples[3 - i][3].disable, // progress_callbacks.lock
	          tuples[0][2].lock, // progress_handlers.lock
	          tuples[0][3].lock);
	        } // progress_handlers.fire
	        // fulfilled_handlers.fire
	        // rejected_handlers.fire


	        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
	        // deferred.resolve = function() { deferred.resolveWith(...) }
	        // deferred.reject = function() { deferred.rejectWith(...) }

	        deferred[tuple[0]] = function () {
	          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
	          return this;
	        }; // deferred.notifyWith = list.fireWith
	        // deferred.resolveWith = list.fireWith
	        // deferred.rejectWith = list.fireWith


	        deferred[tuple[0] + "With"] = list.fireWith;
	      }); // Make the deferred a promise

	      promise.promise(deferred); // Call given func if any

	      if (func) {
	        func.call(deferred, deferred);
	      } // All done!


	      return deferred;
	    },
	    // Deferred helper
	    when: function (singleValue) {
	      var // count of uncompleted subordinates
	      remaining = arguments.length,
	          // count of unprocessed arguments
	      i = remaining,
	          // subordinate fulfillment data
	      resolveContexts = Array(i),
	          resolveValues = slice.call(arguments),
	          // the primary Deferred
	      primary = jQuery.Deferred(),
	          // subordinate callback factory
	      updateFunc = function (i) {
	        return function (value) {
	          resolveContexts[i] = this;
	          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

	          if (! --remaining) {
	            primary.resolveWith(resolveContexts, resolveValues);
	          }
	        };
	      }; // Single- and empty arguments are adopted like Promise.resolve


	      if (remaining <= 1) {
	        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

	        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
	          return primary.then();
	        }
	      } // Multiple arguments are aggregated like Promise.all array elements


	      while (i--) {
	        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
	      }

	      return primary.promise();
	    }
	  }); // These usually indicate a programmer mistake during development,
	  // warn about them ASAP rather than swallowing them by default.

	  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	  jQuery.Deferred.exceptionHook = function (error, stack) {
	    // Support: IE 8 - 9 only
	    // Console exists when dev tools are open, which can happen at any time
	    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
	      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
	    }
	  };

	  jQuery.readyException = function (error) {
	    window.setTimeout(function () {
	      throw error;
	    });
	  }; // The deferred used on DOM ready


	  var readyList = jQuery.Deferred();

	  jQuery.fn.ready = function (fn) {
	    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
	    // happens at the time of error handling instead of callback
	    // registration.
	    .catch(function (error) {
	      jQuery.readyException(error);
	    });
	    return this;
	  };

	  jQuery.extend({
	    // Is the DOM ready to be used? Set to true once it occurs.
	    isReady: false,
	    // A counter to track how many items to wait for before
	    // the ready event fires. See #6781
	    readyWait: 1,
	    // Handle when the DOM is ready
	    ready: function (wait) {
	      // Abort if there are pending holds or we're already ready
	      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
	        return;
	      } // Remember that the DOM is ready


	      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

	      if (wait !== true && --jQuery.readyWait > 0) {
	        return;
	      } // If there are functions bound, to execute


	      readyList.resolveWith(document, [jQuery]);
	    }
	  });
	  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

	  function completed() {
	    document.removeEventListener("DOMContentLoaded", completed);
	    window.removeEventListener("load", completed);
	    jQuery.ready();
	  } // Catch cases where $(document).ready() is called
	  // after the browser event has already occurred.
	  // Support: IE <=9 - 10 only
	  // Older IE sometimes signals "interactive" too soon


	  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
	    // Handle it asynchronously to allow scripts the opportunity to delay ready
	    window.setTimeout(jQuery.ready);
	  } else {
	    // Use the handy event callback
	    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

	    window.addEventListener("load", completed);
	  } // Multifunctional method to get and set values of a collection
	  // The value/s can optionally be executed if it's a function


	  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	    var i = 0,
	        len = elems.length,
	        bulk = key == null; // Sets many values

	    if (toType(key) === "object") {
	      chainable = true;

	      for (i in key) {
	        access(elems, fn, i, key[i], true, emptyGet, raw);
	      } // Sets one value

	    } else if (value !== undefined) {
	      chainable = true;

	      if (!isFunction(value)) {
	        raw = true;
	      }

	      if (bulk) {
	        // Bulk operations run against the entire set
	        if (raw) {
	          fn.call(elems, value);
	          fn = null; // ...except when executing function values
	        } else {
	          bulk = fn;

	          fn = function (elem, _key, value) {
	            return bulk.call(jQuery(elem), value);
	          };
	        }
	      }

	      if (fn) {
	        for (; i < len; i++) {
	          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
	        }
	      }
	    }

	    if (chainable) {
	      return elems;
	    } // Gets


	    if (bulk) {
	      return fn.call(elems);
	    }

	    return len ? fn(elems[0], key) : emptyGet;
	  }; // Matches dashed string for camelizing


	  var rmsPrefix = /^-ms-/,
	      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

	  function fcamelCase(_all, letter) {
	    return letter.toUpperCase();
	  } // Convert dashed to camelCase; used by the css and data modules
	  // Support: IE <=9 - 11, Edge 12 - 15
	  // Microsoft forgot to hump their vendor prefix (#9572)


	  function camelCase(string) {
	    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	  }

	  var acceptData = function (owner) {
	    // Accepts only:
	    //  - Node
	    //    - Node.ELEMENT_NODE
	    //    - Node.DOCUMENT_NODE
	    //  - Object
	    //    - Any
	    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	  };

	  function Data() {
	    this.expando = jQuery.expando + Data.uid++;
	  }

	  Data.uid = 1;
	  Data.prototype = {
	    cache: function (owner) {
	      // Check if the owner object already has a cache
	      var value = owner[this.expando]; // If not, create one

	      if (!value) {
	        value = {}; // We can accept data for non-element nodes in modern browsers,
	        // but we should not, see #8335.
	        // Always return an empty object.

	        if (acceptData(owner)) {
	          // If it is a node unlikely to be stringify-ed or looped over
	          // use plain assignment
	          if (owner.nodeType) {
	            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
	            // configurable must be true to allow the property to be
	            // deleted when data is removed
	          } else {
	            Object.defineProperty(owner, this.expando, {
	              value: value,
	              configurable: true
	            });
	          }
	        }
	      }

	      return value;
	    },
	    set: function (owner, data, value) {
	      var prop,
	          cache = this.cache(owner); // Handle: [ owner, key, value ] args
	      // Always use camelCase key (gh-2257)

	      if (typeof data === "string") {
	        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
	      } else {
	        // Copy the properties one-by-one to the cache object
	        for (prop in data) {
	          cache[camelCase(prop)] = data[prop];
	        }
	      }

	      return cache;
	    },
	    get: function (owner, key) {
	      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
	      owner[this.expando] && owner[this.expando][camelCase(key)];
	    },
	    access: function (owner, key, value) {
	      // In cases where either:
	      //
	      //   1. No key was specified
	      //   2. A string key was specified, but no value provided
	      //
	      // Take the "read" path and allow the get method to determine
	      // which value to return, respectively either:
	      //
	      //   1. The entire cache object
	      //   2. The data stored at the key
	      //
	      if (key === undefined || key && typeof key === "string" && value === undefined) {
	        return this.get(owner, key);
	      } // When the key is not a string, or both a key and value
	      // are specified, set or extend (existing objects) with either:
	      //
	      //   1. An object of properties
	      //   2. A key and value
	      //


	      this.set(owner, key, value); // Since the "set" path can have two possible entry points
	      // return the expected data based on which path was taken[*]

	      return value !== undefined ? value : key;
	    },
	    remove: function (owner, key) {
	      var i,
	          cache = owner[this.expando];

	      if (cache === undefined) {
	        return;
	      }

	      if (key !== undefined) {
	        // Support array or space separated string of keys
	        if (Array.isArray(key)) {
	          // If key is an array of keys...
	          // We always set camelCase keys, so remove that.
	          key = key.map(camelCase);
	        } else {
	          key = camelCase(key); // If a key with the spaces exists, use it.
	          // Otherwise, create an array by matching non-whitespace

	          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
	        }

	        i = key.length;

	        while (i--) {
	          delete cache[key[i]];
	        }
	      } // Remove the expando if there's no more data


	      if (key === undefined || jQuery.isEmptyObject(cache)) {
	        // Support: Chrome <=35 - 45
	        // Webkit & Blink performance suffers when deleting properties
	        // from DOM nodes, so set to undefined instead
	        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
	        if (owner.nodeType) {
	          owner[this.expando] = undefined;
	        } else {
	          delete owner[this.expando];
	        }
	      }
	    },
	    hasData: function (owner) {
	      var cache = owner[this.expando];
	      return cache !== undefined && !jQuery.isEmptyObject(cache);
	    }
	  };
	  var dataPriv = new Data();
	  var dataUser = new Data(); //	Implementation Summary
	  //
	  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
	  //	2. Improve the module's maintainability by reducing the storage
	  //		paths to a single mechanism.
	  //	3. Use the same single mechanism to support "private" and "user" data.
	  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
	  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      rmultiDash = /[A-Z]/g;

	  function getData(data) {
	    if (data === "true") {
	      return true;
	    }

	    if (data === "false") {
	      return false;
	    }

	    if (data === "null") {
	      return null;
	    } // Only convert to a number if it doesn't change the string


	    if (data === +data + "") {
	      return +data;
	    }

	    if (rbrace.test(data)) {
	      return JSON.parse(data);
	    }

	    return data;
	  }

	  function dataAttr(elem, key, data) {
	    var name; // If nothing was found internally, try to fetch any
	    // data from the HTML5 data-* attribute

	    if (data === undefined && elem.nodeType === 1) {
	      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
	      data = elem.getAttribute(name);

	      if (typeof data === "string") {
	        try {
	          data = getData(data);
	        } catch (e) {} // Make sure we set the data so it isn't changed later


	        dataUser.set(elem, key, data);
	      } else {
	        data = undefined;
	      }
	    }

	    return data;
	  }

	  jQuery.extend({
	    hasData: function (elem) {
	      return dataUser.hasData(elem) || dataPriv.hasData(elem);
	    },
	    data: function (elem, name, data) {
	      return dataUser.access(elem, name, data);
	    },
	    removeData: function (elem, name) {
	      dataUser.remove(elem, name);
	    },
	    // TODO: Now that all calls to _data and _removeData have been replaced
	    // with direct calls to dataPriv methods, these can be deprecated.
	    _data: function (elem, name, data) {
	      return dataPriv.access(elem, name, data);
	    },
	    _removeData: function (elem, name) {
	      dataPriv.remove(elem, name);
	    }
	  });
	  jQuery.fn.extend({
	    data: function (key, value) {
	      var i,
	          name,
	          data,
	          elem = this[0],
	          attrs = elem && elem.attributes; // Gets all values

	      if (key === undefined) {
	        if (this.length) {
	          data = dataUser.get(elem);

	          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
	            i = attrs.length;

	            while (i--) {
	              // Support: IE 11 only
	              // The attrs elements can be null (#14894)
	              if (attrs[i]) {
	                name = attrs[i].name;

	                if (name.indexOf("data-") === 0) {
	                  name = camelCase(name.slice(5));
	                  dataAttr(elem, name, data[name]);
	                }
	              }
	            }

	            dataPriv.set(elem, "hasDataAttrs", true);
	          }
	        }

	        return data;
	      } // Sets multiple values


	      if (typeof key === "object") {
	        return this.each(function () {
	          dataUser.set(this, key);
	        });
	      }

	      return access(this, function (value) {
	        var data; // The calling jQuery object (element matches) is not empty
	        // (and therefore has an element appears at this[ 0 ]) and the
	        // `value` parameter was not undefined. An empty jQuery object
	        // will result in `undefined` for elem = this[ 0 ] which will
	        // throw an exception if an attempt to read a data cache is made.

	        if (elem && value === undefined) {
	          // Attempt to get data from the cache
	          // The key will always be camelCased in Data
	          data = dataUser.get(elem, key);

	          if (data !== undefined) {
	            return data;
	          } // Attempt to "discover" the data in
	          // HTML5 custom data-* attrs


	          data = dataAttr(elem, key);

	          if (data !== undefined) {
	            return data;
	          } // We tried really hard, but the data doesn't exist.


	          return;
	        } // Set the data...


	        this.each(function () {
	          // We always store the camelCased key
	          dataUser.set(this, key, value);
	        });
	      }, null, value, arguments.length > 1, null, true);
	    },
	    removeData: function (key) {
	      return this.each(function () {
	        dataUser.remove(this, key);
	      });
	    }
	  });
	  jQuery.extend({
	    queue: function (elem, type, data) {
	      var queue;

	      if (elem) {
	        type = (type || "fx") + "queue";
	        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

	        if (data) {
	          if (!queue || Array.isArray(data)) {
	            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
	          } else {
	            queue.push(data);
	          }
	        }

	        return queue || [];
	      }
	    },
	    dequeue: function (elem, type) {
	      type = type || "fx";

	      var queue = jQuery.queue(elem, type),
	          startLength = queue.length,
	          fn = queue.shift(),
	          hooks = jQuery._queueHooks(elem, type),
	          next = function () {
	        jQuery.dequeue(elem, type);
	      }; // If the fx queue is dequeued, always remove the progress sentinel


	      if (fn === "inprogress") {
	        fn = queue.shift();
	        startLength--;
	      }

	      if (fn) {
	        // Add a progress sentinel to prevent the fx queue from being
	        // automatically dequeued
	        if (type === "fx") {
	          queue.unshift("inprogress");
	        } // Clear up the last queue stop function


	        delete hooks.stop;
	        fn.call(elem, next, hooks);
	      }

	      if (!startLength && hooks) {
	        hooks.empty.fire();
	      }
	    },
	    // Not public - generate a queueHooks object, or return the current one
	    _queueHooks: function (elem, type) {
	      var key = type + "queueHooks";
	      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
	        empty: jQuery.Callbacks("once memory").add(function () {
	          dataPriv.remove(elem, [type + "queue", key]);
	        })
	      });
	    }
	  });
	  jQuery.fn.extend({
	    queue: function (type, data) {
	      var setter = 2;

	      if (typeof type !== "string") {
	        data = type;
	        type = "fx";
	        setter--;
	      }

	      if (arguments.length < setter) {
	        return jQuery.queue(this[0], type);
	      }

	      return data === undefined ? this : this.each(function () {
	        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

	        jQuery._queueHooks(this, type);

	        if (type === "fx" && queue[0] !== "inprogress") {
	          jQuery.dequeue(this, type);
	        }
	      });
	    },
	    dequeue: function (type) {
	      return this.each(function () {
	        jQuery.dequeue(this, type);
	      });
	    },
	    clearQueue: function (type) {
	      return this.queue(type || "fx", []);
	    },
	    // Get a promise resolved when queues of a certain type
	    // are emptied (fx is the type by default)
	    promise: function (type, obj) {
	      var tmp,
	          count = 1,
	          defer = jQuery.Deferred(),
	          elements = this,
	          i = this.length,
	          resolve = function () {
	        if (! --count) {
	          defer.resolveWith(elements, [elements]);
	        }
	      };

	      if (typeof type !== "string") {
	        obj = type;
	        type = undefined;
	      }

	      type = type || "fx";

	      while (i--) {
	        tmp = dataPriv.get(elements[i], type + "queueHooks");

	        if (tmp && tmp.empty) {
	          count++;
	          tmp.empty.add(resolve);
	        }
	      }

	      resolve();
	      return defer.promise(obj);
	    }
	  });
	  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
	  var cssExpand = ["Top", "Right", "Bottom", "Left"];
	  var documentElement = document.documentElement;

	  var isAttached = function (elem) {
	    return jQuery.contains(elem.ownerDocument, elem);
	  },
	      composed = {
	    composed: true
	  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	  // Check attachment across shadow DOM boundaries when possible (gh-3504)
	  // Support: iOS 10.0-10.2 only
	  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	  // leading to errors. We need to check for `getRootNode`.


	  if (documentElement.getRootNode) {
	    isAttached = function (elem) {
	      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
	    };
	  }

	  var isHiddenWithinTree = function (elem, el) {
	    // isHiddenWithinTree might be called from jQuery#filter function;
	    // in that case, element will be second argument
	    elem = el || elem; // Inline style trumps all

	    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
	    // Support: Firefox <=43 - 45
	    // Disconnected elements can have computed display: none, so first confirm that elem is
	    // in the document.
	    isAttached(elem) && jQuery.css(elem, "display") === "none";
	  };

	  function adjustCSS(elem, prop, valueParts, tween) {
	    var adjusted,
	        scale,
	        maxIterations = 20,
	        currentValue = tween ? function () {
	      return tween.cur();
	    } : function () {
	      return jQuery.css(elem, prop, "");
	    },
	        initial = currentValue(),
	        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
	        // Starting value computation is required for potential unit mismatches
	    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

	    if (initialInUnit && initialInUnit[3] !== unit) {
	      // Support: Firefox <=54
	      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
	      initial = initial / 2; // Trust units reported by jQuery.css

	      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

	      initialInUnit = +initial || 1;

	      while (maxIterations--) {
	        // Evaluate and update our best guess (doubling guesses that zero out).
	        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
	        jQuery.style(elem, prop, initialInUnit + unit);

	        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
	          maxIterations = 0;
	        }

	        initialInUnit = initialInUnit / scale;
	      }

	      initialInUnit = initialInUnit * 2;
	      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

	      valueParts = valueParts || [];
	    }

	    if (valueParts) {
	      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

	      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

	      if (tween) {
	        tween.unit = unit;
	        tween.start = initialInUnit;
	        tween.end = adjusted;
	      }
	    }

	    return adjusted;
	  }

	  var defaultDisplayMap = {};

	  function getDefaultDisplay(elem) {
	    var temp,
	        doc = elem.ownerDocument,
	        nodeName = elem.nodeName,
	        display = defaultDisplayMap[nodeName];

	    if (display) {
	      return display;
	    }

	    temp = doc.body.appendChild(doc.createElement(nodeName));
	    display = jQuery.css(temp, "display");
	    temp.parentNode.removeChild(temp);

	    if (display === "none") {
	      display = "block";
	    }

	    defaultDisplayMap[nodeName] = display;
	    return display;
	  }

	  function showHide(elements, show) {
	    var display,
	        elem,
	        values = [],
	        index = 0,
	        length = elements.length; // Determine new display value for elements that need to change

	    for (; index < length; index++) {
	      elem = elements[index];

	      if (!elem.style) {
	        continue;
	      }

	      display = elem.style.display;

	      if (show) {
	        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
	        // check is required in this first loop unless we have a nonempty display value (either
	        // inline or about-to-be-restored)
	        if (display === "none") {
	          values[index] = dataPriv.get(elem, "display") || null;

	          if (!values[index]) {
	            elem.style.display = "";
	          }
	        }

	        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
	          values[index] = getDefaultDisplay(elem);
	        }
	      } else {
	        if (display !== "none") {
	          values[index] = "none"; // Remember what we're overwriting

	          dataPriv.set(elem, "display", display);
	        }
	      }
	    } // Set the display of the elements in a second loop to avoid constant reflow


	    for (index = 0; index < length; index++) {
	      if (values[index] != null) {
	        elements[index].style.display = values[index];
	      }
	    }

	    return elements;
	  }

	  jQuery.fn.extend({
	    show: function () {
	      return showHide(this, true);
	    },
	    hide: function () {
	      return showHide(this);
	    },
	    toggle: function (state) {
	      if (typeof state === "boolean") {
	        return state ? this.show() : this.hide();
	      }

	      return this.each(function () {
	        if (isHiddenWithinTree(this)) {
	          jQuery(this).show();
	        } else {
	          jQuery(this).hide();
	        }
	      });
	    }
	  });
	  var rcheckableType = /^(?:checkbox|radio)$/i;
	  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
	  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

	  (function () {
	    var fragment = document.createDocumentFragment(),
	        div = fragment.appendChild(document.createElement("div")),
	        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
	    // Check state lost if the name is set (#11217)
	    // Support: Windows Web Apps (WWA)
	    // `name` and `type` must use .setAttribute for WWA (#14901)

	    input.setAttribute("type", "radio");
	    input.setAttribute("checked", "checked");
	    input.setAttribute("name", "t");
	    div.appendChild(input); // Support: Android <=4.1 only
	    // Older WebKit doesn't clone checked state correctly in fragments

	    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
	    // Make sure textarea (and checkbox) defaultValue is properly cloned

	    div.innerHTML = "<textarea>x</textarea>";
	    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
	    // IE <=9 replaces <option> tags with their contents when inserted outside of
	    // the select element.

	    div.innerHTML = "<option></option>";
	    support.option = !!div.lastChild;
	  })(); // We have to close these tags to support XHTML (#13200)


	  var wrapMap = {
	    // XHTML parsers do not magically insert elements in the
	    // same way that tag soup parsers do. So we cannot shorten
	    // this by omitting <tbody> or other required elements.
	    thead: [1, "<table>", "</table>"],
	    col: [2, "<table><colgroup>", "</colgroup></table>"],
	    tr: [2, "<table><tbody>", "</tbody></table>"],
	    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	    _default: [0, "", ""]
	  };
	  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	  wrapMap.th = wrapMap.td; // Support: IE <=9 only

	  if (!support.option) {
	    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
	  }

	  function getAll(context, tag) {
	    // Support: IE <=9 - 11 only
	    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
	    var ret;

	    if (typeof context.getElementsByTagName !== "undefined") {
	      ret = context.getElementsByTagName(tag || "*");
	    } else if (typeof context.querySelectorAll !== "undefined") {
	      ret = context.querySelectorAll(tag || "*");
	    } else {
	      ret = [];
	    }

	    if (tag === undefined || tag && nodeName(context, tag)) {
	      return jQuery.merge([context], ret);
	    }

	    return ret;
	  } // Mark scripts as having already been evaluated


	  function setGlobalEval(elems, refElements) {
	    var i = 0,
	        l = elems.length;

	    for (; i < l; i++) {
	      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
	    }
	  }

	  var rhtml = /<|&#?\w+;/;

	  function buildFragment(elems, context, scripts, selection, ignored) {
	    var elem,
	        tmp,
	        tag,
	        wrap,
	        attached,
	        j,
	        fragment = context.createDocumentFragment(),
	        nodes = [],
	        i = 0,
	        l = elems.length;

	    for (; i < l; i++) {
	      elem = elems[i];

	      if (elem || elem === 0) {
	        // Add nodes directly
	        if (toType(elem) === "object") {
	          // Support: Android <=4.0 only, PhantomJS 1 only
	          // push.apply(_, arraylike) throws on ancient WebKit
	          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
	        } else if (!rhtml.test(elem)) {
	          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
	        } else {
	          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

	          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
	          wrap = wrapMap[tag] || wrapMap._default;
	          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

	          j = wrap[0];

	          while (j--) {
	            tmp = tmp.lastChild;
	          } // Support: Android <=4.0 only, PhantomJS 1 only
	          // push.apply(_, arraylike) throws on ancient WebKit


	          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

	          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

	          tmp.textContent = "";
	        }
	      }
	    } // Remove wrapper from fragment


	    fragment.textContent = "";
	    i = 0;

	    while (elem = nodes[i++]) {
	      // Skip elements already in the context collection (trac-4087)
	      if (selection && jQuery.inArray(elem, selection) > -1) {
	        if (ignored) {
	          ignored.push(elem);
	        }

	        continue;
	      }

	      attached = isAttached(elem); // Append to fragment

	      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

	      if (attached) {
	        setGlobalEval(tmp);
	      } // Capture executables


	      if (scripts) {
	        j = 0;

	        while (elem = tmp[j++]) {
	          if (rscriptType.test(elem.type || "")) {
	            scripts.push(elem);
	          }
	        }
	      }
	    }

	    return fragment;
	  }

	  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	  function returnTrue() {
	    return true;
	  }

	  function returnFalse() {
	    return false;
	  } // Support: IE <=9 - 11+
	  // focus() and blur() are asynchronous, except when they are no-op.
	  // So expect focus to be synchronous when the element is already active,
	  // and blur to be synchronous when the element is not already active.
	  // (focus and blur are always synchronous in other supported browsers,
	  // this just defines when we can count on it).


	  function expectSync(elem, type) {
	    return elem === safeActiveElement() === (type === "focus");
	  } // Support: IE <=9 only
	  // Accessing document.activeElement can throw unexpectedly
	  // https://bugs.jquery.com/ticket/13393


	  function safeActiveElement() {
	    try {
	      return document.activeElement;
	    } catch (err) {}
	  }

	  function on(elem, types, selector, data, fn, one) {
	    var origFn, type; // Types can be a map of types/handlers

	    if (typeof types === "object") {
	      // ( types-Object, selector, data )
	      if (typeof selector !== "string") {
	        // ( types-Object, data )
	        data = data || selector;
	        selector = undefined;
	      }

	      for (type in types) {
	        on(elem, type, selector, data, types[type], one);
	      }

	      return elem;
	    }

	    if (data == null && fn == null) {
	      // ( types, fn )
	      fn = selector;
	      data = selector = undefined;
	    } else if (fn == null) {
	      if (typeof selector === "string") {
	        // ( types, selector, fn )
	        fn = data;
	        data = undefined;
	      } else {
	        // ( types, data, fn )
	        fn = data;
	        data = selector;
	        selector = undefined;
	      }
	    }

	    if (fn === false) {
	      fn = returnFalse;
	    } else if (!fn) {
	      return elem;
	    }

	    if (one === 1) {
	      origFn = fn;

	      fn = function (event) {
	        // Can use an empty set, since event contains the info
	        jQuery().off(event);
	        return origFn.apply(this, arguments);
	      }; // Use same guid so caller can remove using origFn


	      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
	    }

	    return elem.each(function () {
	      jQuery.event.add(this, types, fn, data, selector);
	    });
	  }
	  /*
	   * Helper functions for managing events -- not part of the public interface.
	   * Props to Dean Edwards' addEvent library for many of the ideas.
	   */


	  jQuery.event = {
	    global: {},
	    add: function (elem, types, handler, data, selector) {
	      var handleObjIn,
	          eventHandle,
	          tmp,
	          events,
	          t,
	          handleObj,
	          special,
	          handlers,
	          type,
	          namespaces,
	          origType,
	          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

	      if (!acceptData(elem)) {
	        return;
	      } // Caller can pass in an object of custom data in lieu of the handler


	      if (handler.handler) {
	        handleObjIn = handler;
	        handler = handleObjIn.handler;
	        selector = handleObjIn.selector;
	      } // Ensure that invalid selectors throw exceptions at attach time
	      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


	      if (selector) {
	        jQuery.find.matchesSelector(documentElement, selector);
	      } // Make sure that the handler has a unique ID, used to find/remove it later


	      if (!handler.guid) {
	        handler.guid = jQuery.guid++;
	      } // Init the element's event structure and main handler, if this is the first


	      if (!(events = elemData.events)) {
	        events = elemData.events = Object.create(null);
	      }

	      if (!(eventHandle = elemData.handle)) {
	        eventHandle = elemData.handle = function (e) {
	          // Discard the second event of a jQuery.event.trigger() and
	          // when an event is called after a page has unloaded
	          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
	        };
	      } // Handle multiple events separated by a space


	      types = (types || "").match(rnothtmlwhite) || [""];
	      t = types.length;

	      while (t--) {
	        tmp = rtypenamespace.exec(types[t]) || [];
	        type = origType = tmp[1];
	        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

	        if (!type) {
	          continue;
	        } // If event changes its type, use the special event handlers for the changed type


	        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

	        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

	        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

	        handleObj = jQuery.extend({
	          type: type,
	          origType: origType,
	          data: data,
	          handler: handler,
	          guid: handler.guid,
	          selector: selector,
	          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
	          namespace: namespaces.join(".")
	        }, handleObjIn); // Init the event handler queue if we're the first

	        if (!(handlers = events[type])) {
	          handlers = events[type] = [];
	          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

	          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
	            if (elem.addEventListener) {
	              elem.addEventListener(type, eventHandle);
	            }
	          }
	        }

	        if (special.add) {
	          special.add.call(elem, handleObj);

	          if (!handleObj.handler.guid) {
	            handleObj.handler.guid = handler.guid;
	          }
	        } // Add to the element's handler list, delegates in front


	        if (selector) {
	          handlers.splice(handlers.delegateCount++, 0, handleObj);
	        } else {
	          handlers.push(handleObj);
	        } // Keep track of which events have ever been used, for event optimization


	        jQuery.event.global[type] = true;
	      }
	    },
	    // Detach an event or set of events from an element
	    remove: function (elem, types, handler, selector, mappedTypes) {
	      var j,
	          origCount,
	          tmp,
	          events,
	          t,
	          handleObj,
	          special,
	          handlers,
	          type,
	          namespaces,
	          origType,
	          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

	      if (!elemData || !(events = elemData.events)) {
	        return;
	      } // Once for each type.namespace in types; type may be omitted


	      types = (types || "").match(rnothtmlwhite) || [""];
	      t = types.length;

	      while (t--) {
	        tmp = rtypenamespace.exec(types[t]) || [];
	        type = origType = tmp[1];
	        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

	        if (!type) {
	          for (type in events) {
	            jQuery.event.remove(elem, type + types[t], handler, selector, true);
	          }

	          continue;
	        }

	        special = jQuery.event.special[type] || {};
	        type = (selector ? special.delegateType : special.bindType) || type;
	        handlers = events[type] || [];
	        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

	        origCount = j = handlers.length;

	        while (j--) {
	          handleObj = handlers[j];

	          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
	            handlers.splice(j, 1);

	            if (handleObj.selector) {
	              handlers.delegateCount--;
	            }

	            if (special.remove) {
	              special.remove.call(elem, handleObj);
	            }
	          }
	        } // Remove generic event handler if we removed something and no more handlers exist
	        // (avoids potential for endless recursion during removal of special event handlers)


	        if (origCount && !handlers.length) {
	          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
	            jQuery.removeEvent(elem, type, elemData.handle);
	          }

	          delete events[type];
	        }
	      } // Remove data and the expando if it's no longer used


	      if (jQuery.isEmptyObject(events)) {
	        dataPriv.remove(elem, "handle events");
	      }
	    },
	    dispatch: function (nativeEvent) {
	      var i,
	          j,
	          ret,
	          matched,
	          handleObj,
	          handlerQueue,
	          args = new Array(arguments.length),
	          // Make a writable jQuery.Event from the native event object
	      event = jQuery.event.fix(nativeEvent),
	          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
	          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

	      args[0] = event;

	      for (i = 1; i < arguments.length; i++) {
	        args[i] = arguments[i];
	      }

	      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

	      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
	        return;
	      } // Determine handlers


	      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

	      i = 0;

	      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
	        event.currentTarget = matched.elem;
	        j = 0;

	        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
	          // If the event is namespaced, then each handler is only invoked if it is
	          // specially universal or its namespaces are a superset of the event's.
	          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
	            event.handleObj = handleObj;
	            event.data = handleObj.data;
	            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

	            if (ret !== undefined) {
	              if ((event.result = ret) === false) {
	                event.preventDefault();
	                event.stopPropagation();
	              }
	            }
	          }
	        }
	      } // Call the postDispatch hook for the mapped type


	      if (special.postDispatch) {
	        special.postDispatch.call(this, event);
	      }

	      return event.result;
	    },
	    handlers: function (event, handlers) {
	      var i,
	          handleObj,
	          sel,
	          matchedHandlers,
	          matchedSelectors,
	          handlerQueue = [],
	          delegateCount = handlers.delegateCount,
	          cur = event.target; // Find delegate handlers

	      if (delegateCount && // Support: IE <=9
	      // Black-hole SVG <use> instance trees (trac-13180)
	      cur.nodeType && // Support: Firefox <=42
	      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
	      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
	      // Support: IE 11 only
	      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
	      !(event.type === "click" && event.button >= 1)) {
	        for (; cur !== this; cur = cur.parentNode || this) {
	          // Don't check non-elements (#13208)
	          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
	            matchedHandlers = [];
	            matchedSelectors = {};

	            for (i = 0; i < delegateCount; i++) {
	              handleObj = handlers[i]; // Don't conflict with Object.prototype properties (#13203)

	              sel = handleObj.selector + " ";

	              if (matchedSelectors[sel] === undefined) {
	                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
	              }

	              if (matchedSelectors[sel]) {
	                matchedHandlers.push(handleObj);
	              }
	            }

	            if (matchedHandlers.length) {
	              handlerQueue.push({
	                elem: cur,
	                handlers: matchedHandlers
	              });
	            }
	          }
	        }
	      } // Add the remaining (directly-bound) handlers


	      cur = this;

	      if (delegateCount < handlers.length) {
	        handlerQueue.push({
	          elem: cur,
	          handlers: handlers.slice(delegateCount)
	        });
	      }

	      return handlerQueue;
	    },
	    addProp: function (name, hook) {
	      Object.defineProperty(jQuery.Event.prototype, name, {
	        enumerable: true,
	        configurable: true,
	        get: isFunction(hook) ? function () {
	          if (this.originalEvent) {
	            return hook(this.originalEvent);
	          }
	        } : function () {
	          if (this.originalEvent) {
	            return this.originalEvent[name];
	          }
	        },
	        set: function (value) {
	          Object.defineProperty(this, name, {
	            enumerable: true,
	            configurable: true,
	            writable: true,
	            value: value
	          });
	        }
	      });
	    },
	    fix: function (originalEvent) {
	      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
	    },
	    special: {
	      load: {
	        // Prevent triggered image.load events from bubbling to window.load
	        noBubble: true
	      },
	      click: {
	        // Utilize native event to ensure correct state for checkable inputs
	        setup: function (data) {
	          // For mutual compressibility with _default, replace `this` access with a local var.
	          // `|| data` is dead code meant only to preserve the variable through minification.
	          var el = this || data; // Claim the first handler

	          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
	            // dataPriv.set( el, "click", ... )
	            leverageNative(el, "click", returnTrue);
	          } // Return false to allow normal processing in the caller


	          return false;
	        },
	        trigger: function (data) {
	          // For mutual compressibility with _default, replace `this` access with a local var.
	          // `|| data` is dead code meant only to preserve the variable through minification.
	          var el = this || data; // Force setup before triggering a click

	          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
	            leverageNative(el, "click");
	          } // Return non-false to allow normal event-path propagation


	          return true;
	        },
	        // For cross-browser consistency, suppress native .click() on links
	        // Also prevent it if we're currently inside a leveraged native-event stack
	        _default: function (event) {
	          var target = event.target;
	          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
	        }
	      },
	      beforeunload: {
	        postDispatch: function (event) {
	          // Support: Firefox 20+
	          // Firefox doesn't alert if the returnValue field is not set.
	          if (event.result !== undefined && event.originalEvent) {
	            event.originalEvent.returnValue = event.result;
	          }
	        }
	      }
	    }
	  }; // Ensure the presence of an event listener that handles manually-triggered
	  // synthetic events by interrupting progress until reinvoked in response to
	  // *native* events that it fires directly, ensuring that state changes have
	  // already occurred before other listeners are invoked.

	  function leverageNative(el, type, expectSync) {
	    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	    if (!expectSync) {
	      if (dataPriv.get(el, type) === undefined) {
	        jQuery.event.add(el, type, returnTrue);
	      }

	      return;
	    } // Register the controller as a special universal handler for all event namespaces


	    dataPriv.set(el, type, false);
	    jQuery.event.add(el, type, {
	      namespace: false,
	      handler: function (event) {
	        var notAsync,
	            result,
	            saved = dataPriv.get(this, type);

	        if (event.isTrigger & 1 && this[type]) {
	          // Interrupt processing of the outer synthetic .trigger()ed event
	          // Saved data should be false in such cases, but might be a leftover capture object
	          // from an async native handler (gh-4350)
	          if (!saved.length) {
	            // Store arguments for use when handling the inner native event
	            // There will always be at least one argument (an event object), so this array
	            // will not be confused with a leftover capture object.
	            saved = slice.call(arguments);
	            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
	            // Support: IE <=9 - 11+
	            // focus() and blur() are asynchronous

	            notAsync = expectSync(this, type);
	            this[type]();
	            result = dataPriv.get(this, type);

	            if (saved !== result || notAsync) {
	              dataPriv.set(this, type, false);
	            } else {
	              result = {};
	            }

	            if (saved !== result) {
	              // Cancel the outer synthetic event
	              event.stopImmediatePropagation();
	              event.preventDefault(); // Support: Chrome 86+
	              // In Chrome, if an element having a focusout handler is blurred by
	              // clicking outside of it, it invokes the handler synchronously. If
	              // that handler calls `.remove()` on the element, the data is cleared,
	              // leaving `result` undefined. We need to guard against this.

	              return result && result.value;
	            } // If this is an inner synthetic event for an event with a bubbling surrogate
	            // (focus or blur), assume that the surrogate already propagated from triggering the
	            // native event and prevent that from happening again here.
	            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
	            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
	            // less bad than duplication.

	          } else if ((jQuery.event.special[type] || {}).delegateType) {
	            event.stopPropagation();
	          } // If this is a native event triggered above, everything is now in order
	          // Fire an inner synthetic event with the original arguments

	        } else if (saved.length) {
	          // ...and capture the result
	          dataPriv.set(this, type, {
	            value: jQuery.event.trigger( // Support: IE <=9 - 11+
	            // Extend with the prototype to reset the above stopImmediatePropagation()
	            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
	          }); // Abort handling of the native event

	          event.stopImmediatePropagation();
	        }
	      }
	    });
	  }

	  jQuery.removeEvent = function (elem, type, handle) {
	    // This "if" is needed for plain objects
	    if (elem.removeEventListener) {
	      elem.removeEventListener(type, handle);
	    }
	  };

	  jQuery.Event = function (src, props) {
	    // Allow instantiation without the 'new' keyword
	    if (!(this instanceof jQuery.Event)) {
	      return new jQuery.Event(src, props);
	    } // Event object


	    if (src && src.type) {
	      this.originalEvent = src;
	      this.type = src.type; // Events bubbling up the document may have been marked as prevented
	      // by a handler lower down the tree; reflect the correct value.

	      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
	      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
	      // Support: Safari <=6 - 7 only
	      // Target should not be a text node (#504, #13143)

	      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
	      this.currentTarget = src.currentTarget;
	      this.relatedTarget = src.relatedTarget; // Event type
	    } else {
	      this.type = src;
	    } // Put explicitly provided properties onto the event object


	    if (props) {
	      jQuery.extend(this, props);
	    } // Create a timestamp if incoming event doesn't have one


	    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

	    this[jQuery.expando] = true;
	  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


	  jQuery.Event.prototype = {
	    constructor: jQuery.Event,
	    isDefaultPrevented: returnFalse,
	    isPropagationStopped: returnFalse,
	    isImmediatePropagationStopped: returnFalse,
	    isSimulated: false,
	    preventDefault: function () {
	      var e = this.originalEvent;
	      this.isDefaultPrevented = returnTrue;

	      if (e && !this.isSimulated) {
	        e.preventDefault();
	      }
	    },
	    stopPropagation: function () {
	      var e = this.originalEvent;
	      this.isPropagationStopped = returnTrue;

	      if (e && !this.isSimulated) {
	        e.stopPropagation();
	      }
	    },
	    stopImmediatePropagation: function () {
	      var e = this.originalEvent;
	      this.isImmediatePropagationStopped = returnTrue;

	      if (e && !this.isSimulated) {
	        e.stopImmediatePropagation();
	      }

	      this.stopPropagation();
	    }
	  }; // Includes all common event props including KeyEvent and MouseEvent specific props

	  jQuery.each({
	    altKey: true,
	    bubbles: true,
	    cancelable: true,
	    changedTouches: true,
	    ctrlKey: true,
	    detail: true,
	    eventPhase: true,
	    metaKey: true,
	    pageX: true,
	    pageY: true,
	    shiftKey: true,
	    view: true,
	    "char": true,
	    code: true,
	    charCode: true,
	    key: true,
	    keyCode: true,
	    button: true,
	    buttons: true,
	    clientX: true,
	    clientY: true,
	    offsetX: true,
	    offsetY: true,
	    pointerId: true,
	    pointerType: true,
	    screenX: true,
	    screenY: true,
	    targetTouches: true,
	    toElement: true,
	    touches: true,
	    which: true
	  }, jQuery.event.addProp);
	  jQuery.each({
	    focus: "focusin",
	    blur: "focusout"
	  }, function (type, delegateType) {
	    jQuery.event.special[type] = {
	      // Utilize native event if possible so blur/focus sequence is correct
	      setup: function () {
	        // Claim the first handler
	        // dataPriv.set( this, "focus", ... )
	        // dataPriv.set( this, "blur", ... )
	        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

	        return false;
	      },
	      trigger: function () {
	        // Force setup before trigger
	        leverageNative(this, type); // Return non-false to allow normal event-path propagation

	        return true;
	      },
	      // Suppress native focus or blur as it's already being fired
	      // in leverageNative.
	      _default: function () {
	        return true;
	      },
	      delegateType: delegateType
	    };
	  }); // Create mouseenter/leave events using mouseover/out and event-time checks
	  // so that event delegation works in jQuery.
	  // Do the same for pointerenter/pointerleave and pointerover/pointerout
	  //
	  // Support: Safari 7 only
	  // Safari sends mouseenter too often; see:
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	  // for the description of the bug (it existed in older Chrome versions as well).

	  jQuery.each({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout",
	    pointerenter: "pointerover",
	    pointerleave: "pointerout"
	  }, function (orig, fix) {
	    jQuery.event.special[orig] = {
	      delegateType: fix,
	      bindType: fix,
	      handle: function (event) {
	        var ret,
	            target = this,
	            related = event.relatedTarget,
	            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
	        // NB: No relatedTarget if the mouse left/entered the browser window

	        if (!related || related !== target && !jQuery.contains(target, related)) {
	          event.type = handleObj.origType;
	          ret = handleObj.handler.apply(this, arguments);
	          event.type = fix;
	        }

	        return ret;
	      }
	    };
	  });
	  jQuery.fn.extend({
	    on: function (types, selector, data, fn) {
	      return on(this, types, selector, data, fn);
	    },
	    one: function (types, selector, data, fn) {
	      return on(this, types, selector, data, fn, 1);
	    },
	    off: function (types, selector, fn) {
	      var handleObj, type;

	      if (types && types.preventDefault && types.handleObj) {
	        // ( event )  dispatched jQuery.Event
	        handleObj = types.handleObj;
	        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
	        return this;
	      }

	      if (typeof types === "object") {
	        // ( types-object [, selector] )
	        for (type in types) {
	          this.off(type, selector, types[type]);
	        }

	        return this;
	      }

	      if (selector === false || typeof selector === "function") {
	        // ( types [, fn] )
	        fn = selector;
	        selector = undefined;
	      }

	      if (fn === false) {
	        fn = returnFalse;
	      }

	      return this.each(function () {
	        jQuery.event.remove(this, types, fn, selector);
	      });
	    }
	  });
	  var // Support: IE <=10 - 11, Edge 12 - 13 only
	  // In IE/Edge using regex groups here causes severe slowdowns.
	  // See https://connect.microsoft.com/IE/feedback/details/1736512/
	  rnoInnerhtml = /<script|<style|<link/i,
	      // checked="checked" or checked
	  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

	  function manipulationTarget(elem, content) {
	    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
	      return jQuery(elem).children("tbody")[0] || elem;
	    }

	    return elem;
	  } // Replace/restore the type attribute of script elements for safe DOM manipulation


	  function disableScript(elem) {
	    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	    return elem;
	  }

	  function restoreScript(elem) {
	    if ((elem.type || "").slice(0, 5) === "true/") {
	      elem.type = elem.type.slice(5);
	    } else {
	      elem.removeAttribute("type");
	    }

	    return elem;
	  }

	  function cloneCopyEvent(src, dest) {
	    var i, l, type, pdataOld, udataOld, udataCur, events;

	    if (dest.nodeType !== 1) {
	      return;
	    } // 1. Copy private data: events, handlers, etc.


	    if (dataPriv.hasData(src)) {
	      pdataOld = dataPriv.get(src);
	      events = pdataOld.events;

	      if (events) {
	        dataPriv.remove(dest, "handle events");

	        for (type in events) {
	          for (i = 0, l = events[type].length; i < l; i++) {
	            jQuery.event.add(dest, type, events[type][i]);
	          }
	        }
	      }
	    } // 2. Copy user data


	    if (dataUser.hasData(src)) {
	      udataOld = dataUser.access(src);
	      udataCur = jQuery.extend({}, udataOld);
	      dataUser.set(dest, udataCur);
	    }
	  } // Fix IE bugs, see support tests


	  function fixInput(src, dest) {
	    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

	    if (nodeName === "input" && rcheckableType.test(src.type)) {
	      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
	    } else if (nodeName === "input" || nodeName === "textarea") {
	      dest.defaultValue = src.defaultValue;
	    }
	  }

	  function domManip(collection, args, callback, ignored) {
	    // Flatten any nested arrays
	    args = flat(args);
	    var fragment,
	        first,
	        scripts,
	        hasScripts,
	        node,
	        doc,
	        i = 0,
	        l = collection.length,
	        iNoClone = l - 1,
	        value = args[0],
	        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

	    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
	      return collection.each(function (index) {
	        var self = collection.eq(index);

	        if (valueIsFunction) {
	          args[0] = value.call(this, index, self.html());
	        }

	        domManip(self, args, callback, ignored);
	      });
	    }

	    if (l) {
	      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
	      first = fragment.firstChild;

	      if (fragment.childNodes.length === 1) {
	        fragment = first;
	      } // Require either new content or an interest in ignored elements to invoke the callback


	      if (first || ignored) {
	        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
	        hasScripts = scripts.length; // Use the original fragment for the last item
	        // instead of the first because it can end up
	        // being emptied incorrectly in certain situations (#8070).

	        for (; i < l; i++) {
	          node = fragment;

	          if (i !== iNoClone) {
	            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

	            if (hasScripts) {
	              // Support: Android <=4.0 only, PhantomJS 1 only
	              // push.apply(_, arraylike) throws on ancient WebKit
	              jQuery.merge(scripts, getAll(node, "script"));
	            }
	          }

	          callback.call(collection[i], node, i);
	        }

	        if (hasScripts) {
	          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

	          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

	          for (i = 0; i < hasScripts; i++) {
	            node = scripts[i];

	            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
	              if (node.src && (node.type || "").toLowerCase() !== "module") {
	                // Optional AJAX dependency, but won't run scripts if not present
	                if (jQuery._evalUrl && !node.noModule) {
	                  jQuery._evalUrl(node.src, {
	                    nonce: node.nonce || node.getAttribute("nonce")
	                  }, doc);
	                }
	              } else {
	                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
	              }
	            }
	          }
	        }
	      }
	    }

	    return collection;
	  }

	  function remove(elem, selector, keepData) {
	    var node,
	        nodes = selector ? jQuery.filter(selector, elem) : elem,
	        i = 0;

	    for (; (node = nodes[i]) != null; i++) {
	      if (!keepData && node.nodeType === 1) {
	        jQuery.cleanData(getAll(node));
	      }

	      if (node.parentNode) {
	        if (keepData && isAttached(node)) {
	          setGlobalEval(getAll(node, "script"));
	        }

	        node.parentNode.removeChild(node);
	      }
	    }

	    return elem;
	  }

	  jQuery.extend({
	    htmlPrefilter: function (html) {
	      return html;
	    },
	    clone: function (elem, dataAndEvents, deepDataAndEvents) {
	      var i,
	          l,
	          srcElements,
	          destElements,
	          clone = elem.cloneNode(true),
	          inPage = isAttached(elem); // Fix IE cloning issues

	      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
	        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
	        destElements = getAll(clone);
	        srcElements = getAll(elem);

	        for (i = 0, l = srcElements.length; i < l; i++) {
	          fixInput(srcElements[i], destElements[i]);
	        }
	      } // Copy the events from the original to the clone


	      if (dataAndEvents) {
	        if (deepDataAndEvents) {
	          srcElements = srcElements || getAll(elem);
	          destElements = destElements || getAll(clone);

	          for (i = 0, l = srcElements.length; i < l; i++) {
	            cloneCopyEvent(srcElements[i], destElements[i]);
	          }
	        } else {
	          cloneCopyEvent(elem, clone);
	        }
	      } // Preserve script evaluation history


	      destElements = getAll(clone, "script");

	      if (destElements.length > 0) {
	        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
	      } // Return the cloned set


	      return clone;
	    },
	    cleanData: function (elems) {
	      var data,
	          elem,
	          type,
	          special = jQuery.event.special,
	          i = 0;

	      for (; (elem = elems[i]) !== undefined; i++) {
	        if (acceptData(elem)) {
	          if (data = elem[dataPriv.expando]) {
	            if (data.events) {
	              for (type in data.events) {
	                if (special[type]) {
	                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
	                } else {
	                  jQuery.removeEvent(elem, type, data.handle);
	                }
	              }
	            } // Support: Chrome <=35 - 45+
	            // Assign undefined instead of using delete, see Data#remove


	            elem[dataPriv.expando] = undefined;
	          }

	          if (elem[dataUser.expando]) {
	            // Support: Chrome <=35 - 45+
	            // Assign undefined instead of using delete, see Data#remove
	            elem[dataUser.expando] = undefined;
	          }
	        }
	      }
	    }
	  });
	  jQuery.fn.extend({
	    detach: function (selector) {
	      return remove(this, selector, true);
	    },
	    remove: function (selector) {
	      return remove(this, selector);
	    },
	    text: function (value) {
	      return access(this, function (value) {
	        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
	          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	            this.textContent = value;
	          }
	        });
	      }, null, value, arguments.length);
	    },
	    append: function () {
	      return domManip(this, arguments, function (elem) {
	        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	          var target = manipulationTarget(this, elem);
	          target.appendChild(elem);
	        }
	      });
	    },
	    prepend: function () {
	      return domManip(this, arguments, function (elem) {
	        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
	          var target = manipulationTarget(this, elem);
	          target.insertBefore(elem, target.firstChild);
	        }
	      });
	    },
	    before: function () {
	      return domManip(this, arguments, function (elem) {
	        if (this.parentNode) {
	          this.parentNode.insertBefore(elem, this);
	        }
	      });
	    },
	    after: function () {
	      return domManip(this, arguments, function (elem) {
	        if (this.parentNode) {
	          this.parentNode.insertBefore(elem, this.nextSibling);
	        }
	      });
	    },
	    empty: function () {
	      var elem,
	          i = 0;

	      for (; (elem = this[i]) != null; i++) {
	        if (elem.nodeType === 1) {
	          // Prevent memory leaks
	          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

	          elem.textContent = "";
	        }
	      }

	      return this;
	    },
	    clone: function (dataAndEvents, deepDataAndEvents) {
	      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
	      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	      return this.map(function () {
	        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
	      });
	    },
	    html: function (value) {
	      return access(this, function (value) {
	        var elem = this[0] || {},
	            i = 0,
	            l = this.length;

	        if (value === undefined && elem.nodeType === 1) {
	          return elem.innerHTML;
	        } // See if we can take a shortcut and just use innerHTML


	        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	          value = jQuery.htmlPrefilter(value);

	          try {
	            for (; i < l; i++) {
	              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

	              if (elem.nodeType === 1) {
	                jQuery.cleanData(getAll(elem, false));
	                elem.innerHTML = value;
	              }
	            }

	            elem = 0; // If using innerHTML throws an exception, use the fallback method
	          } catch (e) {}
	        }

	        if (elem) {
	          this.empty().append(value);
	        }
	      }, null, value, arguments.length);
	    },
	    replaceWith: function () {
	      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

	      return domManip(this, arguments, function (elem) {
	        var parent = this.parentNode;

	        if (jQuery.inArray(this, ignored) < 0) {
	          jQuery.cleanData(getAll(this));

	          if (parent) {
	            parent.replaceChild(elem, this);
	          }
	        } // Force callback invocation

	      }, ignored);
	    }
	  });
	  jQuery.each({
	    appendTo: "append",
	    prependTo: "prepend",
	    insertBefore: "before",
	    insertAfter: "after",
	    replaceAll: "replaceWith"
	  }, function (name, original) {
	    jQuery.fn[name] = function (selector) {
	      var elems,
	          ret = [],
	          insert = jQuery(selector),
	          last = insert.length - 1,
	          i = 0;

	      for (; i <= last; i++) {
	        elems = i === last ? this : this.clone(true);
	        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
	        // .get() because push.apply(_, arraylike) throws on ancient WebKit

	        push.apply(ret, elems.get());
	      }

	      return this.pushStack(ret);
	    };
	  });
	  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	  var getStyles = function (elem) {
	    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	    // IE throws on elements created in popups
	    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	    var view = elem.ownerDocument.defaultView;

	    if (!view || !view.opener) {
	      view = window;
	    }

	    return view.getComputedStyle(elem);
	  };

	  var swap = function (elem, options, callback) {
	    var ret,
	        name,
	        old = {}; // Remember the old values, and insert the new ones

	    for (name in options) {
	      old[name] = elem.style[name];
	      elem.style[name] = options[name];
	    }

	    ret = callback.call(elem); // Revert the old values

	    for (name in options) {
	      elem.style[name] = old[name];
	    }

	    return ret;
	  };

	  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

	  (function () {
	    // Executing both pixelPosition & boxSizingReliable tests require only one layout
	    // so they're executed at the same time to save the second computation.
	    function computeStyleTests() {
	      // This is a singleton, we need to execute it only once
	      if (!div) {
	        return;
	      }

	      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
	      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
	      documentElement.appendChild(container).appendChild(div);
	      var divStyle = window.getComputedStyle(div);
	      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

	      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
	      // Some styles come back with percentage values, even though they shouldn't

	      div.style.right = "60%";
	      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
	      // Detect misreporting of content dimensions for box-sizing:border-box elements

	      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
	      // Detect overflow:scroll screwiness (gh-3699)
	      // Support: Chrome <=64
	      // Don't get tricked when zoom affects offsetWidth (gh-4029)

	      div.style.position = "absolute";
	      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
	      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
	      // it will also be a sign that checks already performed

	      div = null;
	    }

	    function roundPixelMeasures(measure) {
	      return Math.round(parseFloat(measure));
	    }

	    var pixelPositionVal,
	        boxSizingReliableVal,
	        scrollboxSizeVal,
	        pixelBoxStylesVal,
	        reliableTrDimensionsVal,
	        reliableMarginLeftVal,
	        container = document.createElement("div"),
	        div = document.createElement("div"); // Finish early in limited (non-browser) environments

	    if (!div.style) {
	      return;
	    } // Support: IE <=9 - 11 only
	    // Style of cloned element affects source element cloned (#8908)


	    div.style.backgroundClip = "content-box";
	    div.cloneNode(true).style.backgroundClip = "";
	    support.clearCloneStyle = div.style.backgroundClip === "content-box";
	    jQuery.extend(support, {
	      boxSizingReliable: function () {
	        computeStyleTests();
	        return boxSizingReliableVal;
	      },
	      pixelBoxStyles: function () {
	        computeStyleTests();
	        return pixelBoxStylesVal;
	      },
	      pixelPosition: function () {
	        computeStyleTests();
	        return pixelPositionVal;
	      },
	      reliableMarginLeft: function () {
	        computeStyleTests();
	        return reliableMarginLeftVal;
	      },
	      scrollboxSize: function () {
	        computeStyleTests();
	        return scrollboxSizeVal;
	      },
	      // Support: IE 9 - 11+, Edge 15 - 18+
	      // IE/Edge misreport `getComputedStyle` of table rows with width/height
	      // set in CSS while `offset*` properties report correct values.
	      // Behavior in IE 9 is more subtle than in newer versions & it passes
	      // some versions of this test; make sure not to make it pass there!
	      //
	      // Support: Firefox 70+
	      // Only Firefox includes border widths
	      // in computed dimensions. (gh-4529)
	      reliableTrDimensions: function () {
	        var table, tr, trChild, trStyle;

	        if (reliableTrDimensionsVal == null) {
	          table = document.createElement("table");
	          tr = document.createElement("tr");
	          trChild = document.createElement("div");
	          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
	          tr.style.cssText = "border:1px solid"; // Support: Chrome 86+
	          // Height set through cssText does not get applied.
	          // Computed height then comes back as 0.

	          tr.style.height = "1px";
	          trChild.style.height = "9px"; // Support: Android 8 Chrome 86+
	          // In our bodyBackground.html iframe,
	          // display for all div elements is set to "inline",
	          // which causes a problem only in Android 8 Chrome 86.
	          // Ensuring the div is display: block
	          // gets around this issue.

	          trChild.style.display = "block";
	          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
	          trStyle = window.getComputedStyle(tr);
	          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
	          documentElement.removeChild(table);
	        }

	        return reliableTrDimensionsVal;
	      }
	    });
	  })();

	  function curCSS(elem, name, computed) {
	    var width,
	        minWidth,
	        maxWidth,
	        ret,
	        // Support: Firefox 51+
	    // Retrieving style before computed somehow
	    // fixes an issue with getting wrong values
	    // on detached elements
	    style = elem.style;
	    computed = computed || getStyles(elem); // getPropertyValue is needed for:
	    //   .css('filter') (IE 9 only, #12537)
	    //   .css('--customProperty) (#3144)

	    if (computed) {
	      ret = computed.getPropertyValue(name) || computed[name];

	      if (ret === "" && !isAttached(elem)) {
	        ret = jQuery.style(elem, name);
	      } // A tribute to the "awesome hack by Dean Edwards"
	      // Android Browser returns percentage for some values,
	      // but width seems to be reliably pixels.
	      // This is against the CSSOM draft spec:
	      // https://drafts.csswg.org/cssom/#resolved-values


	      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
	        // Remember the original values
	        width = style.width;
	        minWidth = style.minWidth;
	        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

	        style.minWidth = style.maxWidth = style.width = ret;
	        ret = computed.width; // Revert the changed values

	        style.width = width;
	        style.minWidth = minWidth;
	        style.maxWidth = maxWidth;
	      }
	    }

	    return ret !== undefined ? // Support: IE <=9 - 11 only
	    // IE returns zIndex value as an integer.
	    ret + "" : ret;
	  }

	  function addGetHookIf(conditionFn, hookFn) {
	    // Define the hook, we'll check on the first run if it's really needed.
	    return {
	      get: function () {
	        if (conditionFn()) {
	          // Hook not needed (or it's not possible to use it due
	          // to missing dependency), remove it.
	          delete this.get;
	          return;
	        } // Hook needed; redefine it so that the support test is not executed again.


	        return (this.get = hookFn).apply(this, arguments);
	      }
	    };
	  }

	  var cssPrefixes = ["Webkit", "Moz", "ms"],
	      emptyStyle = document.createElement("div").style,
	      vendorProps = {}; // Return a vendor-prefixed property or undefined

	  function vendorPropName(name) {
	    // Check for vendor prefixed names
	    var capName = name[0].toUpperCase() + name.slice(1),
	        i = cssPrefixes.length;

	    while (i--) {
	      name = cssPrefixes[i] + capName;

	      if (name in emptyStyle) {
	        return name;
	      }
	    }
	  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


	  function finalPropName(name) {
	    var final = jQuery.cssProps[name] || vendorProps[name];

	    if (final) {
	      return final;
	    }

	    if (name in emptyStyle) {
	      return name;
	    }

	    return vendorProps[name] = vendorPropName(name) || name;
	  }

	  var // Swappable if display is none or starts with table
	  // except "table", "table-cell", or "table-caption"
	  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	      rcustomProp = /^--/,
	      cssShow = {
	    position: "absolute",
	    visibility: "hidden",
	    display: "block"
	  },
	      cssNormalTransform = {
	    letterSpacing: "0",
	    fontWeight: "400"
	  };

	  function setPositiveNumber(_elem, value, subtract) {
	    // Any relative (+/-) values have already been
	    // normalized at this point
	    var matches = rcssNum.exec(value);
	    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
	    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	  }

	  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
	    var i = dimension === "width" ? 1 : 0,
	        extra = 0,
	        delta = 0; // Adjustment may not be necessary

	    if (box === (isBorderBox ? "border" : "content")) {
	      return 0;
	    }

	    for (; i < 4; i += 2) {
	      // Both box models exclude margin
	      if (box === "margin") {
	        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
	      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


	      if (!isBorderBox) {
	        // Add padding
	        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

	        if (box !== "padding") {
	          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
	        } else {
	          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
	        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
	        // "padding" or "margin"

	      } else {
	        // For "content", subtract padding
	        if (box === "content") {
	          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	        } // For "content" or "padding", subtract border


	        if (box !== "margin") {
	          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
	        }
	      }
	    } // Account for positive content-box scroll gutter when requested by providing computedVal


	    if (!isBorderBox && computedVal >= 0) {
	      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
	      // Assuming integer scroll gutter, subtract the rest and round down
	      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
	      // Use an explicit zero to avoid NaN (gh-3964)
	      )) || 0;
	    }

	    return delta;
	  }

	  function getWidthOrHeight(elem, dimension, extra) {
	    // Start with computed style
	    var styles = getStyles(elem),
	        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
	    // Fake content-box until we know it's needed to know the true value.
	    boxSizingNeeded = !support.boxSizingReliable() || extra,
	        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
	        valueIsBorderBox = isBorderBox,
	        val = curCSS(elem, dimension, styles),
	        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
	    // Return a confounding non-pixel value or feign ignorance, as appropriate.

	    if (rnumnonpx.test(val)) {
	      if (!extra) {
	        return val;
	      }

	      val = "auto";
	    } // Support: IE 9 - 11 only
	    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
	    // In those cases, the computed value can be trusted to be border-box.


	    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
	    // IE/Edge misreport `getComputedStyle` of table rows with width/height
	    // set in CSS while `offset*` properties report correct values.
	    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
	    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
	    // This happens for inline elements with no explicit setting (gh-3571)
	    val === "auto" || // Support: Android <=4.1 - 4.3 only
	    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
	    elem.getClientRects().length) {
	      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
	      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
	      // retrieved value as a content box dimension.

	      valueIsBorderBox = offsetProp in elem;

	      if (valueIsBorderBox) {
	        val = elem[offsetProp];
	      }
	    } // Normalize "" and auto


	    val = parseFloat(val) || 0; // Adjust for the element's box model

	    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
	    val) + "px";
	  }

	  jQuery.extend({
	    // Add in style property hooks for overriding the default
	    // behavior of getting and setting a style property
	    cssHooks: {
	      opacity: {
	        get: function (elem, computed) {
	          if (computed) {
	            // We should always get a number back from opacity
	            var ret = curCSS(elem, "opacity");
	            return ret === "" ? "1" : ret;
	          }
	        }
	      }
	    },
	    // Don't automatically add "px" to these possibly-unitless properties
	    cssNumber: {
	      "animationIterationCount": true,
	      "columnCount": true,
	      "fillOpacity": true,
	      "flexGrow": true,
	      "flexShrink": true,
	      "fontWeight": true,
	      "gridArea": true,
	      "gridColumn": true,
	      "gridColumnEnd": true,
	      "gridColumnStart": true,
	      "gridRow": true,
	      "gridRowEnd": true,
	      "gridRowStart": true,
	      "lineHeight": true,
	      "opacity": true,
	      "order": true,
	      "orphans": true,
	      "widows": true,
	      "zIndex": true,
	      "zoom": true
	    },
	    // Add in properties whose names you wish to fix before
	    // setting or getting the value
	    cssProps: {},
	    // Get and set the style property on a DOM Node
	    style: function (elem, name, value, extra) {
	      // Don't set styles on text and comment nodes
	      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
	        return;
	      } // Make sure that we're working with the right name


	      var ret,
	          type,
	          hooks,
	          origName = camelCase(name),
	          isCustomProp = rcustomProp.test(name),
	          style = elem.style; // Make sure that we're working with the right name. We don't
	      // want to query the value if it is a CSS custom property
	      // since they are user-defined.

	      if (!isCustomProp) {
	        name = finalPropName(origName);
	      } // Gets hook for the prefixed version, then unprefixed version


	      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

	      if (value !== undefined) {
	        type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)

	        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
	          value = adjustCSS(elem, name, ret); // Fixes bug #9237

	          type = "number";
	        } // Make sure that null and NaN values aren't set (#7116)


	        if (value == null || value !== value) {
	          return;
	        } // If a number was passed in, add the unit (except for certain CSS properties)
	        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
	        // "px" to a few hardcoded values.


	        if (type === "number" && !isCustomProp) {
	          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
	        } // background-* props affect original clone's values


	        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
	          style[name] = "inherit";
	        } // If a hook was provided, use that value, otherwise just set the specified value


	        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
	          if (isCustomProp) {
	            style.setProperty(name, value);
	          } else {
	            style[name] = value;
	          }
	        }
	      } else {
	        // If a hook was provided get the non-computed value from there
	        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
	          return ret;
	        } // Otherwise just get the value from the style object


	        return style[name];
	      }
	    },
	    css: function (elem, name, extra, styles) {
	      var val,
	          num,
	          hooks,
	          origName = camelCase(name),
	          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
	      // want to modify the value if it is a CSS custom property
	      // since they are user-defined.

	      if (!isCustomProp) {
	        name = finalPropName(origName);
	      } // Try prefixed name followed by the unprefixed name


	      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

	      if (hooks && "get" in hooks) {
	        val = hooks.get(elem, true, extra);
	      } // Otherwise, if a way to get the computed value exists, use that


	      if (val === undefined) {
	        val = curCSS(elem, name, styles);
	      } // Convert "normal" to computed value


	      if (val === "normal" && name in cssNormalTransform) {
	        val = cssNormalTransform[name];
	      } // Make numeric if forced or a qualifier was provided and val looks numeric


	      if (extra === "" || extra) {
	        num = parseFloat(val);
	        return extra === true || isFinite(num) ? num || 0 : val;
	      }

	      return val;
	    }
	  });
	  jQuery.each(["height", "width"], function (_i, dimension) {
	    jQuery.cssHooks[dimension] = {
	      get: function (elem, computed, extra) {
	        if (computed) {
	          // Certain elements can have dimension info if we invisibly show them
	          // but it must have a current display style that would benefit
	          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
	          // Table columns in Safari have non-zero offsetWidth & zero
	          // getBoundingClientRect().width unless display is changed.
	          // Support: IE <=11 only
	          // Running getBoundingClientRect on a disconnected node
	          // in IE throws an error.
	          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
	            return getWidthOrHeight(elem, dimension, extra);
	          }) : getWidthOrHeight(elem, dimension, extra);
	        }
	      },
	      set: function (elem, value, extra) {
	        var matches,
	            styles = getStyles(elem),
	            // Only read styles.position if the test has a chance to fail
	        // to avoid forcing a reflow.
	        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
	            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
	        boxSizingNeeded = scrollboxSizeBuggy || extra,
	            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
	            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
	        // faking a content-box to get border and padding (gh-3699)

	        if (isBorderBox && scrollboxSizeBuggy) {
	          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
	        } // Convert to pixels if value adjustment is needed


	        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
	          elem.style[dimension] = value;
	          value = jQuery.css(elem, dimension);
	        }

	        return setPositiveNumber(elem, value, subtract);
	      }
	    };
	  });
	  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
	    if (computed) {
	      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
	        marginLeft: 0
	      }, function () {
	        return elem.getBoundingClientRect().left;
	      })) + "px";
	    }
	  }); // These hooks are used by animate to expand properties

	  jQuery.each({
	    margin: "",
	    padding: "",
	    border: "Width"
	  }, function (prefix, suffix) {
	    jQuery.cssHooks[prefix + suffix] = {
	      expand: function (value) {
	        var i = 0,
	            expanded = {},
	            // Assumes a single number if not a string
	        parts = typeof value === "string" ? value.split(" ") : [value];

	        for (; i < 4; i++) {
	          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
	        }

	        return expanded;
	      }
	    };

	    if (prefix !== "margin") {
	      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
	    }
	  });
	  jQuery.fn.extend({
	    css: function (name, value) {
	      return access(this, function (elem, name, value) {
	        var styles,
	            len,
	            map = {},
	            i = 0;

	        if (Array.isArray(name)) {
	          styles = getStyles(elem);
	          len = name.length;

	          for (; i < len; i++) {
	            map[name[i]] = jQuery.css(elem, name[i], false, styles);
	          }

	          return map;
	        }

	        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
	      }, name, value, arguments.length > 1);
	    }
	  });

	  function Tween(elem, options, prop, end, easing) {
	    return new Tween.prototype.init(elem, options, prop, end, easing);
	  }

	  jQuery.Tween = Tween;
	  Tween.prototype = {
	    constructor: Tween,
	    init: function (elem, options, prop, end, easing, unit) {
	      this.elem = elem;
	      this.prop = prop;
	      this.easing = easing || jQuery.easing._default;
	      this.options = options;
	      this.start = this.now = this.cur();
	      this.end = end;
	      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
	    },
	    cur: function () {
	      var hooks = Tween.propHooks[this.prop];
	      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
	    },
	    run: function (percent) {
	      var eased,
	          hooks = Tween.propHooks[this.prop];

	      if (this.options.duration) {
	        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
	      } else {
	        this.pos = eased = percent;
	      }

	      this.now = (this.end - this.start) * eased + this.start;

	      if (this.options.step) {
	        this.options.step.call(this.elem, this.now, this);
	      }

	      if (hooks && hooks.set) {
	        hooks.set(this);
	      } else {
	        Tween.propHooks._default.set(this);
	      }

	      return this;
	    }
	  };
	  Tween.prototype.init.prototype = Tween.prototype;
	  Tween.propHooks = {
	    _default: {
	      get: function (tween) {
	        var result; // Use a property on the element directly when it is not a DOM element,
	        // or when there is no matching style property that exists.

	        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
	          return tween.elem[tween.prop];
	        } // Passing an empty string as a 3rd parameter to .css will automatically
	        // attempt a parseFloat and fallback to a string if the parse fails.
	        // Simple values such as "10px" are parsed to Float;
	        // complex values such as "rotate(1rad)" are returned as-is.


	        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

	        return !result || result === "auto" ? 0 : result;
	      },
	      set: function (tween) {
	        // Use step hook for back compat.
	        // Use cssHook if its there.
	        // Use .style if available and use plain properties where available.
	        if (jQuery.fx.step[tween.prop]) {
	          jQuery.fx.step[tween.prop](tween);
	        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
	          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
	        } else {
	          tween.elem[tween.prop] = tween.now;
	        }
	      }
	    }
	  }; // Support: IE <=9 only
	  // Panic based approach to setting things on disconnected nodes

	  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	    set: function (tween) {
	      if (tween.elem.nodeType && tween.elem.parentNode) {
	        tween.elem[tween.prop] = tween.now;
	      }
	    }
	  };
	  jQuery.easing = {
	    linear: function (p) {
	      return p;
	    },
	    swing: function (p) {
	      return 0.5 - Math.cos(p * Math.PI) / 2;
	    },
	    _default: "swing"
	  };
	  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

	  jQuery.fx.step = {};
	  var fxNow,
	      inProgress,
	      rfxtypes = /^(?:toggle|show|hide)$/,
	      rrun = /queueHooks$/;

	  function schedule() {
	    if (inProgress) {
	      if (document.hidden === false && window.requestAnimationFrame) {
	        window.requestAnimationFrame(schedule);
	      } else {
	        window.setTimeout(schedule, jQuery.fx.interval);
	      }

	      jQuery.fx.tick();
	    }
	  } // Animations created synchronously will run synchronously


	  function createFxNow() {
	    window.setTimeout(function () {
	      fxNow = undefined;
	    });
	    return fxNow = Date.now();
	  } // Generate parameters to create a standard animation


	  function genFx(type, includeWidth) {
	    var which,
	        i = 0,
	        attrs = {
	      height: type
	    }; // If we include width, step value is 1 to do all cssExpand values,
	    // otherwise step value is 2 to skip over Left and Right

	    includeWidth = includeWidth ? 1 : 0;

	    for (; i < 4; i += 2 - includeWidth) {
	      which = cssExpand[i];
	      attrs["margin" + which] = attrs["padding" + which] = type;
	    }

	    if (includeWidth) {
	      attrs.opacity = attrs.width = type;
	    }

	    return attrs;
	  }

	  function createTween(value, prop, animation) {
	    var tween,
	        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
	        index = 0,
	        length = collection.length;

	    for (; index < length; index++) {
	      if (tween = collection[index].call(animation, prop, value)) {
	        // We're done with this property
	        return tween;
	      }
	    }
	  }

	  function defaultPrefilter(elem, props, opts) {
	    var prop,
	        value,
	        toggle,
	        hooks,
	        oldfire,
	        propTween,
	        restoreDisplay,
	        display,
	        isBox = "width" in props || "height" in props,
	        anim = this,
	        orig = {},
	        style = elem.style,
	        hidden = elem.nodeType && isHiddenWithinTree(elem),
	        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

	    if (!opts.queue) {
	      hooks = jQuery._queueHooks(elem, "fx");

	      if (hooks.unqueued == null) {
	        hooks.unqueued = 0;
	        oldfire = hooks.empty.fire;

	        hooks.empty.fire = function () {
	          if (!hooks.unqueued) {
	            oldfire();
	          }
	        };
	      }

	      hooks.unqueued++;
	      anim.always(function () {
	        // Ensure the complete handler is called before this completes
	        anim.always(function () {
	          hooks.unqueued--;

	          if (!jQuery.queue(elem, "fx").length) {
	            hooks.empty.fire();
	          }
	        });
	      });
	    } // Detect show/hide animations


	    for (prop in props) {
	      value = props[prop];

	      if (rfxtypes.test(value)) {
	        delete props[prop];
	        toggle = toggle || value === "toggle";

	        if (value === (hidden ? "hide" : "show")) {
	          // Pretend to be hidden if this is a "show" and
	          // there is still data from a stopped show/hide
	          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
	            hidden = true; // Ignore all other no-op show/hide data
	          } else {
	            continue;
	          }
	        }

	        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
	      }
	    } // Bail out if this is a no-op like .hide().hide()


	    propTween = !jQuery.isEmptyObject(props);

	    if (!propTween && jQuery.isEmptyObject(orig)) {
	      return;
	    } // Restrict "overflow" and "display" styles during box animations


	    if (isBox && elem.nodeType === 1) {
	      // Support: IE <=9 - 11, Edge 12 - 15
	      // Record all 3 overflow attributes because IE does not infer the shorthand
	      // from identically-valued overflowX and overflowY and Edge just mirrors
	      // the overflowX value there.
	      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

	      restoreDisplay = dataShow && dataShow.display;

	      if (restoreDisplay == null) {
	        restoreDisplay = dataPriv.get(elem, "display");
	      }

	      display = jQuery.css(elem, "display");

	      if (display === "none") {
	        if (restoreDisplay) {
	          display = restoreDisplay;
	        } else {
	          // Get nonempty value(s) by temporarily forcing visibility
	          showHide([elem], true);
	          restoreDisplay = elem.style.display || restoreDisplay;
	          display = jQuery.css(elem, "display");
	          showHide([elem]);
	        }
	      } // Animate inline elements as inline-block


	      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
	        if (jQuery.css(elem, "float") === "none") {
	          // Restore the original display value at the end of pure show/hide animations
	          if (!propTween) {
	            anim.done(function () {
	              style.display = restoreDisplay;
	            });

	            if (restoreDisplay == null) {
	              display = style.display;
	              restoreDisplay = display === "none" ? "" : display;
	            }
	          }

	          style.display = "inline-block";
	        }
	      }
	    }

	    if (opts.overflow) {
	      style.overflow = "hidden";
	      anim.always(function () {
	        style.overflow = opts.overflow[0];
	        style.overflowX = opts.overflow[1];
	        style.overflowY = opts.overflow[2];
	      });
	    } // Implement show/hide animations


	    propTween = false;

	    for (prop in orig) {
	      // General show/hide setup for this element animation
	      if (!propTween) {
	        if (dataShow) {
	          if ("hidden" in dataShow) {
	            hidden = dataShow.hidden;
	          }
	        } else {
	          dataShow = dataPriv.access(elem, "fxshow", {
	            display: restoreDisplay
	          });
	        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


	        if (toggle) {
	          dataShow.hidden = !hidden;
	        } // Show elements before animating them


	        if (hidden) {
	          showHide([elem], true);
	        }
	        /* eslint-disable no-loop-func */


	        anim.done(function () {
	          /* eslint-enable no-loop-func */
	          // The final step of a "hide" animation is actually hiding the element
	          if (!hidden) {
	            showHide([elem]);
	          }

	          dataPriv.remove(elem, "fxshow");

	          for (prop in orig) {
	            jQuery.style(elem, prop, orig[prop]);
	          }
	        });
	      } // Per-property setup


	      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

	      if (!(prop in dataShow)) {
	        dataShow[prop] = propTween.start;

	        if (hidden) {
	          propTween.end = propTween.start;
	          propTween.start = 0;
	        }
	      }
	    }
	  }

	  function propFilter(props, specialEasing) {
	    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

	    for (index in props) {
	      name = camelCase(index);
	      easing = specialEasing[name];
	      value = props[index];

	      if (Array.isArray(value)) {
	        easing = value[1];
	        value = props[index] = value[0];
	      }

	      if (index !== name) {
	        props[name] = value;
	        delete props[index];
	      }

	      hooks = jQuery.cssHooks[name];

	      if (hooks && "expand" in hooks) {
	        value = hooks.expand(value);
	        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
	        // Reusing 'index' because we have the correct "name"

	        for (index in value) {
	          if (!(index in props)) {
	            props[index] = value[index];
	            specialEasing[index] = easing;
	          }
	        }
	      } else {
	        specialEasing[name] = easing;
	      }
	    }
	  }

	  function Animation(elem, properties, options) {
	    var result,
	        stopped,
	        index = 0,
	        length = Animation.prefilters.length,
	        deferred = jQuery.Deferred().always(function () {
	      // Don't match elem in the :animated selector
	      delete tick.elem;
	    }),
	        tick = function () {
	      if (stopped) {
	        return false;
	      }

	      var currentTime = fxNow || createFxNow(),
	          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
	          // Support: Android 2.3 only
	      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	      temp = remaining / animation.duration || 0,
	          percent = 1 - temp,
	          index = 0,
	          length = animation.tweens.length;

	      for (; index < length; index++) {
	        animation.tweens[index].run(percent);
	      }

	      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

	      if (percent < 1 && length) {
	        return remaining;
	      } // If this was an empty animation, synthesize a final progress notification


	      if (!length) {
	        deferred.notifyWith(elem, [animation, 1, 0]);
	      } // Resolve the animation and report its conclusion


	      deferred.resolveWith(elem, [animation]);
	      return false;
	    },
	        animation = deferred.promise({
	      elem: elem,
	      props: jQuery.extend({}, properties),
	      opts: jQuery.extend(true, {
	        specialEasing: {},
	        easing: jQuery.easing._default
	      }, options),
	      originalProperties: properties,
	      originalOptions: options,
	      startTime: fxNow || createFxNow(),
	      duration: options.duration,
	      tweens: [],
	      createTween: function (prop, end) {
	        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
	        animation.tweens.push(tween);
	        return tween;
	      },
	      stop: function (gotoEnd) {
	        var index = 0,
	            // If we are going to the end, we want to run all the tweens
	        // otherwise we skip this part
	        length = gotoEnd ? animation.tweens.length : 0;

	        if (stopped) {
	          return this;
	        }

	        stopped = true;

	        for (; index < length; index++) {
	          animation.tweens[index].run(1);
	        } // Resolve when we played the last frame; otherwise, reject


	        if (gotoEnd) {
	          deferred.notifyWith(elem, [animation, 1, 0]);
	          deferred.resolveWith(elem, [animation, gotoEnd]);
	        } else {
	          deferred.rejectWith(elem, [animation, gotoEnd]);
	        }

	        return this;
	      }
	    }),
	        props = animation.props;

	    propFilter(props, animation.opts.specialEasing);

	    for (; index < length; index++) {
	      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

	      if (result) {
	        if (isFunction(result.stop)) {
	          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
	        }

	        return result;
	      }
	    }

	    jQuery.map(props, createTween, animation);

	    if (isFunction(animation.opts.start)) {
	      animation.opts.start.call(elem, animation);
	    } // Attach callbacks from options


	    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	    jQuery.fx.timer(jQuery.extend(tick, {
	      elem: elem,
	      anim: animation,
	      queue: animation.opts.queue
	    }));
	    return animation;
	  }

	  jQuery.Animation = jQuery.extend(Animation, {
	    tweeners: {
	      "*": [function (prop, value) {
	        var tween = this.createTween(prop, value);
	        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
	        return tween;
	      }]
	    },
	    tweener: function (props, callback) {
	      if (isFunction(props)) {
	        callback = props;
	        props = ["*"];
	      } else {
	        props = props.match(rnothtmlwhite);
	      }

	      var prop,
	          index = 0,
	          length = props.length;

	      for (; index < length; index++) {
	        prop = props[index];
	        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
	        Animation.tweeners[prop].unshift(callback);
	      }
	    },
	    prefilters: [defaultPrefilter],
	    prefilter: function (callback, prepend) {
	      if (prepend) {
	        Animation.prefilters.unshift(callback);
	      } else {
	        Animation.prefilters.push(callback);
	      }
	    }
	  });

	  jQuery.speed = function (speed, easing, fn) {
	    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
	      complete: fn || !fn && easing || isFunction(speed) && speed,
	      duration: speed,
	      easing: fn && easing || easing && !isFunction(easing) && easing
	    }; // Go to the end state if fx are off

	    if (jQuery.fx.off) {
	      opt.duration = 0;
	    } else {
	      if (typeof opt.duration !== "number") {
	        if (opt.duration in jQuery.fx.speeds) {
	          opt.duration = jQuery.fx.speeds[opt.duration];
	        } else {
	          opt.duration = jQuery.fx.speeds._default;
	        }
	      }
	    } // Normalize opt.queue - true/undefined/null -> "fx"


	    if (opt.queue == null || opt.queue === true) {
	      opt.queue = "fx";
	    } // Queueing


	    opt.old = opt.complete;

	    opt.complete = function () {
	      if (isFunction(opt.old)) {
	        opt.old.call(this);
	      }

	      if (opt.queue) {
	        jQuery.dequeue(this, opt.queue);
	      }
	    };

	    return opt;
	  };

	  jQuery.fn.extend({
	    fadeTo: function (speed, to, easing, callback) {
	      // Show any hidden elements after setting opacity to 0
	      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
	      .end().animate({
	        opacity: to
	      }, speed, easing, callback);
	    },
	    animate: function (prop, speed, easing, callback) {
	      var empty = jQuery.isEmptyObject(prop),
	          optall = jQuery.speed(speed, easing, callback),
	          doAnimation = function () {
	        // Operate on a copy of prop so per-property easing won't be lost
	        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

	        if (empty || dataPriv.get(this, "finish")) {
	          anim.stop(true);
	        }
	      };

	      doAnimation.finish = doAnimation;
	      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
	    },
	    stop: function (type, clearQueue, gotoEnd) {
	      var stopQueue = function (hooks) {
	        var stop = hooks.stop;
	        delete hooks.stop;
	        stop(gotoEnd);
	      };

	      if (typeof type !== "string") {
	        gotoEnd = clearQueue;
	        clearQueue = type;
	        type = undefined;
	      }

	      if (clearQueue) {
	        this.queue(type || "fx", []);
	      }

	      return this.each(function () {
	        var dequeue = true,
	            index = type != null && type + "queueHooks",
	            timers = jQuery.timers,
	            data = dataPriv.get(this);

	        if (index) {
	          if (data[index] && data[index].stop) {
	            stopQueue(data[index]);
	          }
	        } else {
	          for (index in data) {
	            if (data[index] && data[index].stop && rrun.test(index)) {
	              stopQueue(data[index]);
	            }
	          }
	        }

	        for (index = timers.length; index--;) {
	          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
	            timers[index].anim.stop(gotoEnd);
	            dequeue = false;
	            timers.splice(index, 1);
	          }
	        } // Start the next in the queue if the last step wasn't forced.
	        // Timers currently will call their complete callbacks, which
	        // will dequeue but only if they were gotoEnd.


	        if (dequeue || !gotoEnd) {
	          jQuery.dequeue(this, type);
	        }
	      });
	    },
	    finish: function (type) {
	      if (type !== false) {
	        type = type || "fx";
	      }

	      return this.each(function () {
	        var index,
	            data = dataPriv.get(this),
	            queue = data[type + "queue"],
	            hooks = data[type + "queueHooks"],
	            timers = jQuery.timers,
	            length = queue ? queue.length : 0; // Enable finishing flag on private data

	        data.finish = true; // Empty the queue first

	        jQuery.queue(this, type, []);

	        if (hooks && hooks.stop) {
	          hooks.stop.call(this, true);
	        } // Look for any active animations, and finish them


	        for (index = timers.length; index--;) {
	          if (timers[index].elem === this && timers[index].queue === type) {
	            timers[index].anim.stop(true);
	            timers.splice(index, 1);
	          }
	        } // Look for any animations in the old queue and finish them


	        for (index = 0; index < length; index++) {
	          if (queue[index] && queue[index].finish) {
	            queue[index].finish.call(this);
	          }
	        } // Turn off finishing flag


	        delete data.finish;
	      });
	    }
	  });
	  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
	    var cssFn = jQuery.fn[name];

	    jQuery.fn[name] = function (speed, easing, callback) {
	      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
	    };
	  }); // Generate shortcuts for custom animations

	  jQuery.each({
	    slideDown: genFx("show"),
	    slideUp: genFx("hide"),
	    slideToggle: genFx("toggle"),
	    fadeIn: {
	      opacity: "show"
	    },
	    fadeOut: {
	      opacity: "hide"
	    },
	    fadeToggle: {
	      opacity: "toggle"
	    }
	  }, function (name, props) {
	    jQuery.fn[name] = function (speed, easing, callback) {
	      return this.animate(props, speed, easing, callback);
	    };
	  });
	  jQuery.timers = [];

	  jQuery.fx.tick = function () {
	    var timer,
	        i = 0,
	        timers = jQuery.timers;
	    fxNow = Date.now();

	    for (; i < timers.length; i++) {
	      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

	      if (!timer() && timers[i] === timer) {
	        timers.splice(i--, 1);
	      }
	    }

	    if (!timers.length) {
	      jQuery.fx.stop();
	    }

	    fxNow = undefined;
	  };

	  jQuery.fx.timer = function (timer) {
	    jQuery.timers.push(timer);
	    jQuery.fx.start();
	  };

	  jQuery.fx.interval = 13;

	  jQuery.fx.start = function () {
	    if (inProgress) {
	      return;
	    }

	    inProgress = true;
	    schedule();
	  };

	  jQuery.fx.stop = function () {
	    inProgress = null;
	  };

	  jQuery.fx.speeds = {
	    slow: 600,
	    fast: 200,
	    // Default speed
	    _default: 400
	  }; // Based off of the plugin by Clint Helfers, with permission.
	  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

	  jQuery.fn.delay = function (time, type) {
	    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
	    type = type || "fx";
	    return this.queue(type, function (next, hooks) {
	      var timeout = window.setTimeout(next, time);

	      hooks.stop = function () {
	        window.clearTimeout(timeout);
	      };
	    });
	  };

	  (function () {
	    var input = document.createElement("input"),
	        select = document.createElement("select"),
	        opt = select.appendChild(document.createElement("option"));
	    input.type = "checkbox"; // Support: Android <=4.3 only
	    // Default value for a checkbox should be "on"

	    support.checkOn = input.value !== ""; // Support: IE <=11 only
	    // Must access selectedIndex to make default options select

	    support.optSelected = opt.selected; // Support: IE <=11 only
	    // An input loses its value after becoming a radio

	    input = document.createElement("input");
	    input.value = "t";
	    input.type = "radio";
	    support.radioValue = input.value === "t";
	  })();

	  var boolHook,
	      attrHandle = jQuery.expr.attrHandle;
	  jQuery.fn.extend({
	    attr: function (name, value) {
	      return access(this, jQuery.attr, name, value, arguments.length > 1);
	    },
	    removeAttr: function (name) {
	      return this.each(function () {
	        jQuery.removeAttr(this, name);
	      });
	    }
	  });
	  jQuery.extend({
	    attr: function (elem, name, value) {
	      var ret,
	          hooks,
	          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

	      if (nType === 3 || nType === 8 || nType === 2) {
	        return;
	      } // Fallback to prop when attributes are not supported


	      if (typeof elem.getAttribute === "undefined") {
	        return jQuery.prop(elem, name, value);
	      } // Attribute hooks are determined by the lowercase version
	      // Grab necessary hook if one is defined


	      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
	        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
	      }

	      if (value !== undefined) {
	        if (value === null) {
	          jQuery.removeAttr(elem, name);
	          return;
	        }

	        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
	          return ret;
	        }

	        elem.setAttribute(name, value + "");
	        return value;
	      }

	      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
	        return ret;
	      }

	      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

	      return ret == null ? undefined : ret;
	    },
	    attrHooks: {
	      type: {
	        set: function (elem, value) {
	          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
	            var val = elem.value;
	            elem.setAttribute("type", value);

	            if (val) {
	              elem.value = val;
	            }

	            return value;
	          }
	        }
	      }
	    },
	    removeAttr: function (elem, value) {
	      var name,
	          i = 0,
	          // Attribute names can contain non-HTML whitespace characters
	      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
	      attrNames = value && value.match(rnothtmlwhite);

	      if (attrNames && elem.nodeType === 1) {
	        while (name = attrNames[i++]) {
	          elem.removeAttribute(name);
	        }
	      }
	    }
	  }); // Hooks for boolean attributes

	  boolHook = {
	    set: function (elem, value, name) {
	      if (value === false) {
	        // Remove boolean attributes when set to false
	        jQuery.removeAttr(elem, name);
	      } else {
	        elem.setAttribute(name, name);
	      }

	      return name;
	    }
	  };
	  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
	    var getter = attrHandle[name] || jQuery.find.attr;

	    attrHandle[name] = function (elem, name, isXML) {
	      var ret,
	          handle,
	          lowercaseName = name.toLowerCase();

	      if (!isXML) {
	        // Avoid an infinite loop by temporarily removing this function from the getter
	        handle = attrHandle[lowercaseName];
	        attrHandle[lowercaseName] = ret;
	        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
	        attrHandle[lowercaseName] = handle;
	      }

	      return ret;
	    };
	  });
	  var rfocusable = /^(?:input|select|textarea|button)$/i,
	      rclickable = /^(?:a|area)$/i;
	  jQuery.fn.extend({
	    prop: function (name, value) {
	      return access(this, jQuery.prop, name, value, arguments.length > 1);
	    },
	    removeProp: function (name) {
	      return this.each(function () {
	        delete this[jQuery.propFix[name] || name];
	      });
	    }
	  });
	  jQuery.extend({
	    prop: function (elem, name, value) {
	      var ret,
	          hooks,
	          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

	      if (nType === 3 || nType === 8 || nType === 2) {
	        return;
	      }

	      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
	        // Fix name and attach hooks
	        name = jQuery.propFix[name] || name;
	        hooks = jQuery.propHooks[name];
	      }

	      if (value !== undefined) {
	        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
	          return ret;
	        }

	        return elem[name] = value;
	      }

	      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
	        return ret;
	      }

	      return elem[name];
	    },
	    propHooks: {
	      tabIndex: {
	        get: function (elem) {
	          // Support: IE <=9 - 11 only
	          // elem.tabIndex doesn't always return the
	          // correct value when it hasn't been explicitly set
	          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	          // Use proper attribute retrieval(#12072)
	          var tabindex = jQuery.find.attr(elem, "tabindex");

	          if (tabindex) {
	            return parseInt(tabindex, 10);
	          }

	          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
	            return 0;
	          }

	          return -1;
	        }
	      }
	    },
	    propFix: {
	      "for": "htmlFor",
	      "class": "className"
	    }
	  }); // Support: IE <=11 only
	  // Accessing the selectedIndex property
	  // forces the browser to respect setting selected
	  // on the option
	  // The getter ensures a default option is selected
	  // when in an optgroup
	  // eslint rule "no-unused-expressions" is disabled for this code
	  // since it considers such accessions noop

	  if (!support.optSelected) {
	    jQuery.propHooks.selected = {
	      get: function (elem) {
	        /* eslint no-unused-expressions: "off" */
	        var parent = elem.parentNode;

	        if (parent && parent.parentNode) {
	          parent.parentNode.selectedIndex;
	        }

	        return null;
	      },
	      set: function (elem) {
	        /* eslint no-unused-expressions: "off" */
	        var parent = elem.parentNode;

	        if (parent) {
	          parent.selectedIndex;

	          if (parent.parentNode) {
	            parent.parentNode.selectedIndex;
	          }
	        }
	      }
	    };
	  }

	  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    jQuery.propFix[this.toLowerCase()] = this;
	  }); // Strip and collapse whitespace according to HTML spec
	  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

	  function stripAndCollapse(value) {
	    var tokens = value.match(rnothtmlwhite) || [];
	    return tokens.join(" ");
	  }

	  function getClass(elem) {
	    return elem.getAttribute && elem.getAttribute("class") || "";
	  }

	  function classesToArray(value) {
	    if (Array.isArray(value)) {
	      return value;
	    }

	    if (typeof value === "string") {
	      return value.match(rnothtmlwhite) || [];
	    }

	    return [];
	  }

	  jQuery.fn.extend({
	    addClass: function (value) {
	      var classes,
	          elem,
	          cur,
	          curValue,
	          clazz,
	          j,
	          finalValue,
	          i = 0;

	      if (isFunction(value)) {
	        return this.each(function (j) {
	          jQuery(this).addClass(value.call(this, j, getClass(this)));
	        });
	      }

	      classes = classesToArray(value);

	      if (classes.length) {
	        while (elem = this[i++]) {
	          curValue = getClass(elem);
	          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

	          if (cur) {
	            j = 0;

	            while (clazz = classes[j++]) {
	              if (cur.indexOf(" " + clazz + " ") < 0) {
	                cur += clazz + " ";
	              }
	            } // Only assign if different to avoid unneeded rendering.


	            finalValue = stripAndCollapse(cur);

	            if (curValue !== finalValue) {
	              elem.setAttribute("class", finalValue);
	            }
	          }
	        }
	      }

	      return this;
	    },
	    removeClass: function (value) {
	      var classes,
	          elem,
	          cur,
	          curValue,
	          clazz,
	          j,
	          finalValue,
	          i = 0;

	      if (isFunction(value)) {
	        return this.each(function (j) {
	          jQuery(this).removeClass(value.call(this, j, getClass(this)));
	        });
	      }

	      if (!arguments.length) {
	        return this.attr("class", "");
	      }

	      classes = classesToArray(value);

	      if (classes.length) {
	        while (elem = this[i++]) {
	          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

	          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

	          if (cur) {
	            j = 0;

	            while (clazz = classes[j++]) {
	              // Remove *all* instances
	              while (cur.indexOf(" " + clazz + " ") > -1) {
	                cur = cur.replace(" " + clazz + " ", " ");
	              }
	            } // Only assign if different to avoid unneeded rendering.


	            finalValue = stripAndCollapse(cur);

	            if (curValue !== finalValue) {
	              elem.setAttribute("class", finalValue);
	            }
	          }
	        }
	      }

	      return this;
	    },
	    toggleClass: function (value, stateVal) {
	      var type = typeof value,
	          isValidValue = type === "string" || Array.isArray(value);

	      if (typeof stateVal === "boolean" && isValidValue) {
	        return stateVal ? this.addClass(value) : this.removeClass(value);
	      }

	      if (isFunction(value)) {
	        return this.each(function (i) {
	          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
	        });
	      }

	      return this.each(function () {
	        var className, i, self, classNames;

	        if (isValidValue) {
	          // Toggle individual class names
	          i = 0;
	          self = jQuery(this);
	          classNames = classesToArray(value);

	          while (className = classNames[i++]) {
	            // Check each className given, space separated list
	            if (self.hasClass(className)) {
	              self.removeClass(className);
	            } else {
	              self.addClass(className);
	            }
	          } // Toggle whole class name

	        } else if (value === undefined || type === "boolean") {
	          className = getClass(this);

	          if (className) {
	            // Store className if set
	            dataPriv.set(this, "__className__", className);
	          } // If the element has a class name or if we're passed `false`,
	          // then remove the whole classname (if there was one, the above saved it).
	          // Otherwise bring back whatever was previously saved (if anything),
	          // falling back to the empty string if nothing was stored.


	          if (this.setAttribute) {
	            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
	          }
	        }
	      });
	    },
	    hasClass: function (selector) {
	      var className,
	          elem,
	          i = 0;
	      className = " " + selector + " ";

	      while (elem = this[i++]) {
	        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
	          return true;
	        }
	      }

	      return false;
	    }
	  });
	  var rreturn = /\r/g;
	  jQuery.fn.extend({
	    val: function (value) {
	      var hooks,
	          ret,
	          valueIsFunction,
	          elem = this[0];

	      if (!arguments.length) {
	        if (elem) {
	          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

	          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
	            return ret;
	          }

	          ret = elem.value; // Handle most common string cases

	          if (typeof ret === "string") {
	            return ret.replace(rreturn, "");
	          } // Handle cases where value is null/undef or number


	          return ret == null ? "" : ret;
	        }

	        return;
	      }

	      valueIsFunction = isFunction(value);
	      return this.each(function (i) {
	        var val;

	        if (this.nodeType !== 1) {
	          return;
	        }

	        if (valueIsFunction) {
	          val = value.call(this, i, jQuery(this).val());
	        } else {
	          val = value;
	        } // Treat null/undefined as ""; convert numbers to string


	        if (val == null) {
	          val = "";
	        } else if (typeof val === "number") {
	          val += "";
	        } else if (Array.isArray(val)) {
	          val = jQuery.map(val, function (value) {
	            return value == null ? "" : value + "";
	          });
	        }

	        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

	        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
	          this.value = val;
	        }
	      });
	    }
	  });
	  jQuery.extend({
	    valHooks: {
	      option: {
	        get: function (elem) {
	          var val = jQuery.find.attr(elem, "value");
	          return val != null ? val : // Support: IE <=10 - 11 only
	          // option.text throws exceptions (#14686, #14858)
	          // Strip and collapse whitespace
	          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	          stripAndCollapse(jQuery.text(elem));
	        }
	      },
	      select: {
	        get: function (elem) {
	          var value,
	              option,
	              i,
	              options = elem.options,
	              index = elem.selectedIndex,
	              one = elem.type === "select-one",
	              values = one ? null : [],
	              max = one ? index + 1 : options.length;

	          if (index < 0) {
	            i = max;
	          } else {
	            i = one ? index : 0;
	          } // Loop through all the selected options


	          for (; i < max; i++) {
	            option = options[i]; // Support: IE <=9 only
	            // IE8-9 doesn't update selected after form reset (#2551)

	            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
	            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
	              // Get the specific value for the option
	              value = jQuery(option).val(); // We don't need an array for one selects

	              if (one) {
	                return value;
	              } // Multi-Selects return an array


	              values.push(value);
	            }
	          }

	          return values;
	        },
	        set: function (elem, value) {
	          var optionSet,
	              option,
	              options = elem.options,
	              values = jQuery.makeArray(value),
	              i = options.length;

	          while (i--) {
	            option = options[i];
	            /* eslint-disable no-cond-assign */

	            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
	              optionSet = true;
	            }
	            /* eslint-enable no-cond-assign */

	          } // Force browsers to behave consistently when non-matching value is set


	          if (!optionSet) {
	            elem.selectedIndex = -1;
	          }

	          return values;
	        }
	      }
	    }
	  }); // Radios and checkboxes getter/setter

	  jQuery.each(["radio", "checkbox"], function () {
	    jQuery.valHooks[this] = {
	      set: function (elem, value) {
	        if (Array.isArray(value)) {
	          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
	        }
	      }
	    };

	    if (!support.checkOn) {
	      jQuery.valHooks[this].get = function (elem) {
	        return elem.getAttribute("value") === null ? "on" : elem.value;
	      };
	    }
	  }); // Return jQuery for attributes-only inclusion

	  support.focusin = "onfocusin" in window;

	  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	      stopPropagationCallback = function (e) {
	    e.stopPropagation();
	  };

	  jQuery.extend(jQuery.event, {
	    trigger: function (event, data, elem, onlyHandlers) {
	      var i,
	          cur,
	          tmp,
	          bubbleType,
	          ontype,
	          handle,
	          special,
	          lastElement,
	          eventPath = [elem || document],
	          type = hasOwn.call(event, "type") ? event.type : event,
	          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

	      if (elem.nodeType === 3 || elem.nodeType === 8) {
	        return;
	      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


	      if (rfocusMorph.test(type + jQuery.event.triggered)) {
	        return;
	      }

	      if (type.indexOf(".") > -1) {
	        // Namespaced trigger; create a regexp to match event type in handle()
	        namespaces = type.split(".");
	        type = namespaces.shift();
	        namespaces.sort();
	      }

	      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

	      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

	      event.isTrigger = onlyHandlers ? 2 : 3;
	      event.namespace = namespaces.join(".");
	      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

	      event.result = undefined;

	      if (!event.target) {
	        event.target = elem;
	      } // Clone any incoming data and prepend the event, creating the handler arg list


	      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

	      special = jQuery.event.special[type] || {};

	      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
	        return;
	      } // Determine event propagation path in advance, per W3C events spec (#9951)
	      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


	      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
	        bubbleType = special.delegateType || type;

	        if (!rfocusMorph.test(bubbleType + type)) {
	          cur = cur.parentNode;
	        }

	        for (; cur; cur = cur.parentNode) {
	          eventPath.push(cur);
	          tmp = cur;
	        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


	        if (tmp === (elem.ownerDocument || document)) {
	          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
	        }
	      } // Fire handlers on the event path


	      i = 0;

	      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
	        lastElement = cur;
	        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

	        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

	        if (handle) {
	          handle.apply(cur, data);
	        } // Native handler


	        handle = ontype && cur[ontype];

	        if (handle && handle.apply && acceptData(cur)) {
	          event.result = handle.apply(cur, data);

	          if (event.result === false) {
	            event.preventDefault();
	          }
	        }
	      }

	      event.type = type; // If nobody prevented the default action, do it now

	      if (!onlyHandlers && !event.isDefaultPrevented()) {
	        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
	          // Call a native DOM method on the target with the same name as the event.
	          // Don't do default actions on window, that's where global variables be (#6170)
	          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
	            // Don't re-trigger an onFOO event when we call its FOO() method
	            tmp = elem[ontype];

	            if (tmp) {
	              elem[ontype] = null;
	            } // Prevent re-triggering of the same event, since we already bubbled it above


	            jQuery.event.triggered = type;

	            if (event.isPropagationStopped()) {
	              lastElement.addEventListener(type, stopPropagationCallback);
	            }

	            elem[type]();

	            if (event.isPropagationStopped()) {
	              lastElement.removeEventListener(type, stopPropagationCallback);
	            }

	            jQuery.event.triggered = undefined;

	            if (tmp) {
	              elem[ontype] = tmp;
	            }
	          }
	        }
	      }

	      return event.result;
	    },
	    // Piggyback on a donor event to simulate a different one
	    // Used only for `focus(in | out)` events
	    simulate: function (type, elem, event) {
	      var e = jQuery.extend(new jQuery.Event(), event, {
	        type: type,
	        isSimulated: true
	      });
	      jQuery.event.trigger(e, null, elem);
	    }
	  });
	  jQuery.fn.extend({
	    trigger: function (type, data) {
	      return this.each(function () {
	        jQuery.event.trigger(type, data, this);
	      });
	    },
	    triggerHandler: function (type, data) {
	      var elem = this[0];

	      if (elem) {
	        return jQuery.event.trigger(type, data, elem, true);
	      }
	    }
	  }); // Support: Firefox <=44
	  // Firefox doesn't have focus(in | out) events
	  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	  //
	  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	  // focus(in | out) events fire after focus & blur events,
	  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

	  if (!support.focusin) {
	    jQuery.each({
	      focus: "focusin",
	      blur: "focusout"
	    }, function (orig, fix) {
	      // Attach a single capturing handler on the document while someone wants focusin/focusout
	      var handler = function (event) {
	        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
	      };

	      jQuery.event.special[fix] = {
	        setup: function () {
	          // Handle: regular nodes (via `this.ownerDocument`), window
	          // (via `this.document`) & document (via `this`).
	          var doc = this.ownerDocument || this.document || this,
	              attaches = dataPriv.access(doc, fix);

	          if (!attaches) {
	            doc.addEventListener(orig, handler, true);
	          }

	          dataPriv.access(doc, fix, (attaches || 0) + 1);
	        },
	        teardown: function () {
	          var doc = this.ownerDocument || this.document || this,
	              attaches = dataPriv.access(doc, fix) - 1;

	          if (!attaches) {
	            doc.removeEventListener(orig, handler, true);
	            dataPriv.remove(doc, fix);
	          } else {
	            dataPriv.access(doc, fix, attaches);
	          }
	        }
	      };
	    });
	  }

	  var location = window.location;
	  var nonce = {
	    guid: Date.now()
	  };
	  var rquery = /\?/; // Cross-browser xml parsing

	  jQuery.parseXML = function (data) {
	    var xml, parserErrorElem;

	    if (!data || typeof data !== "string") {
	      return null;
	    } // Support: IE 9 - 11 only
	    // IE throws on parseFromString with invalid input.


	    try {
	      xml = new window.DOMParser().parseFromString(data, "text/xml");
	    } catch (e) {}

	    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];

	    if (!xml || parserErrorElem) {
	      jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function (el) {
	        return el.textContent;
	      }).join("\n") : data));
	    }

	    return xml;
	  };

	  var rbracket = /\[\]$/,
	      rCRLF = /\r?\n/g,
	      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	      rsubmittable = /^(?:input|select|textarea|keygen)/i;

	  function buildParams(prefix, obj, traditional, add) {
	    var name;

	    if (Array.isArray(obj)) {
	      // Serialize array item.
	      jQuery.each(obj, function (i, v) {
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v);
	        } else {
	          // Item is non-scalar (array or object), encode its numeric index.
	          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
	        }
	      });
	    } else if (!traditional && toType(obj) === "object") {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
	      }
	    } else {
	      // Serialize scalar item.
	      add(prefix, obj);
	    }
	  } // Serialize an array of form elements or a set of
	  // key/values into a query string


	  jQuery.param = function (a, traditional) {
	    var prefix,
	        s = [],
	        add = function (key, valueOrFunction) {
	      // If value is a function, invoke it and use its return value
	      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
	      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
	    };

	    if (a == null) {
	      return "";
	    } // If an array was passed in, assume that it is an array of form elements.


	    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
	      // Serialize the form elements
	      jQuery.each(a, function () {
	        add(this.name, this.value);
	      });
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in a) {
	        buildParams(prefix, a[prefix], traditional, add);
	      }
	    } // Return the resulting serialization


	    return s.join("&");
	  };

	  jQuery.fn.extend({
	    serialize: function () {
	      return jQuery.param(this.serializeArray());
	    },
	    serializeArray: function () {
	      return this.map(function () {
	        // Can add propHook for "elements" to filter or add form elements
	        var elements = jQuery.prop(this, "elements");
	        return elements ? jQuery.makeArray(elements) : this;
	      }).filter(function () {
	        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

	        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
	      }).map(function (_i, elem) {
	        var val = jQuery(this).val();

	        if (val == null) {
	          return null;
	        }

	        if (Array.isArray(val)) {
	          return jQuery.map(val, function (val) {
	            return {
	              name: elem.name,
	              value: val.replace(rCRLF, "\r\n")
	            };
	          });
	        }

	        return {
	          name: elem.name,
	          value: val.replace(rCRLF, "\r\n")
	        };
	      }).get();
	    }
	  });
	  var r20 = /%20/g,
	      rhash = /#.*$/,
	      rantiCache = /([?&])_=[^&]*/,
	      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	      // #7653, #8125, #8152: local protocol detection
	  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      rnoContent = /^(?:GET|HEAD)$/,
	      rprotocol = /^\/\//,

	  /* Prefilters
	   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	   * 2) These are called:
	   *    - BEFORE asking for a transport
	   *    - AFTER param serialization (s.data is a string if s.processData is true)
	   * 3) key is the dataType
	   * 4) the catchall symbol "*" can be used
	   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	   */
	  prefilters = {},

	  /* Transports bindings
	   * 1) key is the dataType
	   * 2) the catchall symbol "*" can be used
	   * 3) selection will start with transport dataType and THEN go to "*" if needed
	   */
	  transports = {},
	      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	  allTypes = "*/".concat("*"),
	      // Anchor tag for parsing the document origin
	  originAnchor = document.createElement("a");
	  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

	  function addToPrefiltersOrTransports(structure) {
	    // dataTypeExpression is optional and defaults to "*"
	    return function (dataTypeExpression, func) {
	      if (typeof dataTypeExpression !== "string") {
	        func = dataTypeExpression;
	        dataTypeExpression = "*";
	      }

	      var dataType,
	          i = 0,
	          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

	      if (isFunction(func)) {
	        // For each dataType in the dataTypeExpression
	        while (dataType = dataTypes[i++]) {
	          // Prepend if requested
	          if (dataType[0] === "+") {
	            dataType = dataType.slice(1) || "*";
	            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
	          } else {
	            (structure[dataType] = structure[dataType] || []).push(func);
	          }
	        }
	      }
	    };
	  } // Base inspection function for prefilters and transports


	  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	    var inspected = {},
	        seekingTransport = structure === transports;

	    function inspect(dataType) {
	      var selected;
	      inspected[dataType] = true;
	      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
	        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

	        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
	          options.dataTypes.unshift(dataTypeOrTransport);
	          inspect(dataTypeOrTransport);
	          return false;
	        } else if (seekingTransport) {
	          return !(selected = dataTypeOrTransport);
	        }
	      });
	      return selected;
	    }

	    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	  } // A special extend for ajax options
	  // that takes "flat" options (not to be deep extended)
	  // Fixes #9887


	  function ajaxExtend(target, src) {
	    var key,
	        deep,
	        flatOptions = jQuery.ajaxSettings.flatOptions || {};

	    for (key in src) {
	      if (src[key] !== undefined) {
	        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
	      }
	    }

	    if (deep) {
	      jQuery.extend(true, target, deep);
	    }

	    return target;
	  }
	  /* Handles responses to an ajax request:
	   * - finds the right dataType (mediates between content-type and expected dataType)
	   * - returns the corresponding response
	   */


	  function ajaxHandleResponses(s, jqXHR, responses) {
	    var ct,
	        type,
	        finalDataType,
	        firstDataType,
	        contents = s.contents,
	        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

	    while (dataTypes[0] === "*") {
	      dataTypes.shift();

	      if (ct === undefined) {
	        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
	      }
	    } // Check if we're dealing with a known content-type


	    if (ct) {
	      for (type in contents) {
	        if (contents[type] && contents[type].test(ct)) {
	          dataTypes.unshift(type);
	          break;
	        }
	      }
	    } // Check to see if we have a response for the expected dataType


	    if (dataTypes[0] in responses) {
	      finalDataType = dataTypes[0];
	    } else {
	      // Try convertible dataTypes
	      for (type in responses) {
	        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
	          finalDataType = type;
	          break;
	        }

	        if (!firstDataType) {
	          firstDataType = type;
	        }
	      } // Or just use first one


	      finalDataType = finalDataType || firstDataType;
	    } // If we found a dataType
	    // We add the dataType to the list if needed
	    // and return the corresponding response


	    if (finalDataType) {
	      if (finalDataType !== dataTypes[0]) {
	        dataTypes.unshift(finalDataType);
	      }

	      return responses[finalDataType];
	    }
	  }
	  /* Chain conversions given the request and the original response
	   * Also sets the responseXXX fields on the jqXHR instance
	   */


	  function ajaxConvert(s, response, jqXHR, isSuccess) {
	    var conv2,
	        current,
	        conv,
	        tmp,
	        prev,
	        converters = {},
	        // Work with a copy of dataTypes in case we need to modify it for conversion
	    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

	    if (dataTypes[1]) {
	      for (conv in s.converters) {
	        converters[conv.toLowerCase()] = s.converters[conv];
	      }
	    }

	    current = dataTypes.shift(); // Convert to each sequential dataType

	    while (current) {
	      if (s.responseFields[current]) {
	        jqXHR[s.responseFields[current]] = response;
	      } // Apply the dataFilter if provided


	      if (!prev && isSuccess && s.dataFilter) {
	        response = s.dataFilter(response, s.dataType);
	      }

	      prev = current;
	      current = dataTypes.shift();

	      if (current) {
	        // There's only work to do if current dataType is non-auto
	        if (current === "*") {
	          current = prev; // Convert response if prev dataType is non-auto and differs from current
	        } else if (prev !== "*" && prev !== current) {
	          // Seek a direct converter
	          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

	          if (!conv) {
	            for (conv2 in converters) {
	              // If conv2 outputs current
	              tmp = conv2.split(" ");

	              if (tmp[1] === current) {
	                // If prev can be converted to accepted input
	                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

	                if (conv) {
	                  // Condense equivalence converters
	                  if (conv === true) {
	                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
	                  } else if (converters[conv2] !== true) {
	                    current = tmp[0];
	                    dataTypes.unshift(tmp[1]);
	                  }

	                  break;
	                }
	              }
	            }
	          } // Apply converter (if not an equivalence)


	          if (conv !== true) {
	            // Unless errors are allowed to bubble, catch and return them
	            if (conv && s.throws) {
	              response = conv(response);
	            } else {
	              try {
	                response = conv(response);
	              } catch (e) {
	                return {
	                  state: "parsererror",
	                  error: conv ? e : "No conversion from " + prev + " to " + current
	                };
	              }
	            }
	          }
	        }
	      }
	    }

	    return {
	      state: "success",
	      data: response
	    };
	  }

	  jQuery.extend({
	    // Counter for holding the number of active queries
	    active: 0,
	    // Last-Modified header cache for next request
	    lastModified: {},
	    etag: {},
	    ajaxSettings: {
	      url: location.href,
	      type: "GET",
	      isLocal: rlocalProtocol.test(location.protocol),
	      global: true,
	      processData: true,
	      async: true,
	      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

	      /*
	      timeout: 0,
	      data: null,
	      dataType: null,
	      username: null,
	      password: null,
	      cache: null,
	      throws: false,
	      traditional: false,
	      headers: {},
	      */
	      accepts: {
	        "*": allTypes,
	        text: "text/plain",
	        html: "text/html",
	        xml: "application/xml, text/xml",
	        json: "application/json, text/javascript"
	      },
	      contents: {
	        xml: /\bxml\b/,
	        html: /\bhtml/,
	        json: /\bjson\b/
	      },
	      responseFields: {
	        xml: "responseXML",
	        text: "responseText",
	        json: "responseJSON"
	      },
	      // Data converters
	      // Keys separate source (or catchall "*") and destination types with a single space
	      converters: {
	        // Convert anything to text
	        "* text": String,
	        // Text to html (true = no transformation)
	        "text html": true,
	        // Evaluate text as a json expression
	        "text json": JSON.parse,
	        // Parse text as xml
	        "text xml": jQuery.parseXML
	      },
	      // For options that shouldn't be deep extended:
	      // you can add your own custom options here if
	      // and when you create one that shouldn't be
	      // deep extended (see ajaxExtend)
	      flatOptions: {
	        url: true,
	        context: true
	      }
	    },
	    // Creates a full fledged settings object into target
	    // with both ajaxSettings and settings fields.
	    // If target is omitted, writes into ajaxSettings.
	    ajaxSetup: function (target, settings) {
	      return settings ? // Building a settings object
	      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
	      ajaxExtend(jQuery.ajaxSettings, target);
	    },
	    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
	    ajaxTransport: addToPrefiltersOrTransports(transports),
	    // Main method
	    ajax: function (url, options) {
	      // If url is an object, simulate pre-1.5 signature
	      if (typeof url === "object") {
	        options = url;
	        url = undefined;
	      } // Force options to be an object


	      options = options || {};
	      var transport,
	          // URL without anti-cache param
	      cacheURL,
	          // Response headers
	      responseHeadersString,
	          responseHeaders,
	          // timeout handle
	      timeoutTimer,
	          // Url cleanup var
	      urlAnchor,
	          // Request state (becomes false upon send and true upon completion)
	      completed,
	          // To know if global events are to be dispatched
	      fireGlobals,
	          // Loop variable
	      i,
	          // uncached part of the url
	      uncached,
	          // Create the final options object
	      s = jQuery.ajaxSetup({}, options),
	          // Callbacks context
	      callbackContext = s.context || s,
	          // Context for global events is callbackContext if it is a DOM node or jQuery collection
	      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
	          // Deferreds
	      deferred = jQuery.Deferred(),
	          completeDeferred = jQuery.Callbacks("once memory"),
	          // Status-dependent callbacks
	      statusCode = s.statusCode || {},
	          // Headers (they are sent all at once)
	      requestHeaders = {},
	          requestHeadersNames = {},
	          // Default abort message
	      strAbort = "canceled",
	          // Fake xhr
	      jqXHR = {
	        readyState: 0,
	        // Builds headers hashtable if needed
	        getResponseHeader: function (key) {
	          var match;

	          if (completed) {
	            if (!responseHeaders) {
	              responseHeaders = {};

	              while (match = rheaders.exec(responseHeadersString)) {
	                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
	              }
	            }

	            match = responseHeaders[key.toLowerCase() + " "];
	          }

	          return match == null ? null : match.join(", ");
	        },
	        // Raw string
	        getAllResponseHeaders: function () {
	          return completed ? responseHeadersString : null;
	        },
	        // Caches the header
	        setRequestHeader: function (name, value) {
	          if (completed == null) {
	            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
	            requestHeaders[name] = value;
	          }

	          return this;
	        },
	        // Overrides response content-type header
	        overrideMimeType: function (type) {
	          if (completed == null) {
	            s.mimeType = type;
	          }

	          return this;
	        },
	        // Status-dependent callbacks
	        statusCode: function (map) {
	          var code;

	          if (map) {
	            if (completed) {
	              // Execute the appropriate callbacks
	              jqXHR.always(map[jqXHR.status]);
	            } else {
	              // Lazy-add the new callbacks in a way that preserves old ones
	              for (code in map) {
	                statusCode[code] = [statusCode[code], map[code]];
	              }
	            }
	          }

	          return this;
	        },
	        // Cancel the request
	        abort: function (statusText) {
	          var finalText = statusText || strAbort;

	          if (transport) {
	            transport.abort(finalText);
	          }

	          done(0, finalText);
	          return this;
	        }
	      }; // Attach deferreds

	      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
	      // Handle falsy url in the settings object (#10093: consistency with old signature)
	      // We also use the url parameter if available

	      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

	      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

	      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

	      if (s.crossDomain == null) {
	        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
	        // IE throws exception on accessing the href property if url is malformed,
	        // e.g. http://example.com:80x/

	        try {
	          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
	          // Anchor's host property isn't correctly set when s.url is relative

	          urlAnchor.href = urlAnchor.href;
	          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
	        } catch (e) {
	          // If there is an error parsing the URL, assume it is crossDomain,
	          // it can be rejected by the transport if it is invalid
	          s.crossDomain = true;
	        }
	      } // Convert data if not already a string


	      if (s.data && s.processData && typeof s.data !== "string") {
	        s.data = jQuery.param(s.data, s.traditional);
	      } // Apply prefilters


	      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

	      if (completed) {
	        return jqXHR;
	      } // We can fire global events as of now if asked to
	      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


	      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

	      if (fireGlobals && jQuery.active++ === 0) {
	        jQuery.event.trigger("ajaxStart");
	      } // Uppercase the type


	      s.type = s.type.toUpperCase(); // Determine if request has content

	      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
	      // and/or If-None-Match header later on
	      // Remove hash to simplify url manipulation

	      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

	      if (!s.hasContent) {
	        // Remember the hash so we can put it back
	        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

	        if (s.data && (s.processData || typeof s.data === "string")) {
	          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

	          delete s.data;
	        } // Add or update anti-cache param if needed


	        if (s.cache === false) {
	          cacheURL = cacheURL.replace(rantiCache, "$1");
	          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
	        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


	        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
	      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
	        s.data = s.data.replace(r20, "+");
	      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


	      if (s.ifModified) {
	        if (jQuery.lastModified[cacheURL]) {
	          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
	        }

	        if (jQuery.etag[cacheURL]) {
	          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
	        }
	      } // Set the correct header, if data is being sent


	      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
	        jqXHR.setRequestHeader("Content-Type", s.contentType);
	      } // Set the Accepts header for the server, depending on the dataType


	      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

	      for (i in s.headers) {
	        jqXHR.setRequestHeader(i, s.headers[i]);
	      } // Allow custom headers/mimetypes and early abort


	      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
	        // Abort if not done already and return
	        return jqXHR.abort();
	      } // Aborting is no longer a cancellation


	      strAbort = "abort"; // Install callbacks on deferreds

	      completeDeferred.add(s.complete);
	      jqXHR.done(s.success);
	      jqXHR.fail(s.error); // Get transport

	      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

	      if (!transport) {
	        done(-1, "No Transport");
	      } else {
	        jqXHR.readyState = 1; // Send global event

	        if (fireGlobals) {
	          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
	        } // If request was aborted inside ajaxSend, stop there


	        if (completed) {
	          return jqXHR;
	        } // Timeout


	        if (s.async && s.timeout > 0) {
	          timeoutTimer = window.setTimeout(function () {
	            jqXHR.abort("timeout");
	          }, s.timeout);
	        }

	        try {
	          completed = false;
	          transport.send(requestHeaders, done);
	        } catch (e) {
	          // Rethrow post-completion exceptions
	          if (completed) {
	            throw e;
	          } // Propagate others as results


	          done(-1, e);
	        }
	      } // Callback for when everything is done


	      function done(status, nativeStatusText, responses, headers) {
	        var isSuccess,
	            success,
	            error,
	            response,
	            modified,
	            statusText = nativeStatusText; // Ignore repeat invocations

	        if (completed) {
	          return;
	        }

	        completed = true; // Clear timeout if it exists

	        if (timeoutTimer) {
	          window.clearTimeout(timeoutTimer);
	        } // Dereference transport for early garbage collection
	        // (no matter how long the jqXHR object will be used)


	        transport = undefined; // Cache response headers

	        responseHeadersString = headers || ""; // Set readyState

	        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

	        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

	        if (responses) {
	          response = ajaxHandleResponses(s, jqXHR, responses);
	        } // Use a noop converter for missing script but not if jsonp


	        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
	          s.converters["text script"] = function () {};
	        } // Convert no matter what (that way responseXXX fields are always set)


	        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

	        if (isSuccess) {
	          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	          if (s.ifModified) {
	            modified = jqXHR.getResponseHeader("Last-Modified");

	            if (modified) {
	              jQuery.lastModified[cacheURL] = modified;
	            }

	            modified = jqXHR.getResponseHeader("etag");

	            if (modified) {
	              jQuery.etag[cacheURL] = modified;
	            }
	          } // if no content


	          if (status === 204 || s.type === "HEAD") {
	            statusText = "nocontent"; // if not modified
	          } else if (status === 304) {
	            statusText = "notmodified"; // If we have data, let's convert it
	          } else {
	            statusText = response.state;
	            success = response.data;
	            error = response.error;
	            isSuccess = !error;
	          }
	        } else {
	          // Extract error from statusText and normalize for non-aborts
	          error = statusText;

	          if (status || !statusText) {
	            statusText = "error";

	            if (status < 0) {
	              status = 0;
	            }
	          }
	        } // Set data for the fake xhr object


	        jqXHR.status = status;
	        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

	        if (isSuccess) {
	          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
	        } else {
	          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
	        } // Status-dependent callbacks


	        jqXHR.statusCode(statusCode);
	        statusCode = undefined;

	        if (fireGlobals) {
	          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
	        } // Complete


	        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

	        if (fireGlobals) {
	          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

	          if (! --jQuery.active) {
	            jQuery.event.trigger("ajaxStop");
	          }
	        }
	      }

	      return jqXHR;
	    },
	    getJSON: function (url, data, callback) {
	      return jQuery.get(url, data, callback, "json");
	    },
	    getScript: function (url, callback) {
	      return jQuery.get(url, undefined, callback, "script");
	    }
	  });
	  jQuery.each(["get", "post"], function (_i, method) {
	    jQuery[method] = function (url, data, callback, type) {
	      // Shift arguments if data argument was omitted
	      if (isFunction(data)) {
	        type = type || callback;
	        callback = data;
	        data = undefined;
	      } // The url can be an options object (which then must have .url)


	      return jQuery.ajax(jQuery.extend({
	        url: url,
	        type: method,
	        dataType: type,
	        data: data,
	        success: callback
	      }, jQuery.isPlainObject(url) && url));
	    };
	  });
	  jQuery.ajaxPrefilter(function (s) {
	    var i;

	    for (i in s.headers) {
	      if (i.toLowerCase() === "content-type") {
	        s.contentType = s.headers[i] || "";
	      }
	    }
	  });

	  jQuery._evalUrl = function (url, options, doc) {
	    return jQuery.ajax({
	      url: url,
	      // Make this explicit, since user can override this through ajaxSetup (#11264)
	      type: "GET",
	      dataType: "script",
	      cache: true,
	      async: false,
	      global: false,
	      // Only evaluate the response if it is successful (gh-4126)
	      // dataFilter is not invoked for failure responses, so using it instead
	      // of the default converter is kludgy but it works.
	      converters: {
	        "text script": function () {}
	      },
	      dataFilter: function (response) {
	        jQuery.globalEval(response, options, doc);
	      }
	    });
	  };

	  jQuery.fn.extend({
	    wrapAll: function (html) {
	      var wrap;

	      if (this[0]) {
	        if (isFunction(html)) {
	          html = html.call(this[0]);
	        } // The elements to wrap the target around


	        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

	        if (this[0].parentNode) {
	          wrap.insertBefore(this[0]);
	        }

	        wrap.map(function () {
	          var elem = this;

	          while (elem.firstElementChild) {
	            elem = elem.firstElementChild;
	          }

	          return elem;
	        }).append(this);
	      }

	      return this;
	    },
	    wrapInner: function (html) {
	      if (isFunction(html)) {
	        return this.each(function (i) {
	          jQuery(this).wrapInner(html.call(this, i));
	        });
	      }

	      return this.each(function () {
	        var self = jQuery(this),
	            contents = self.contents();

	        if (contents.length) {
	          contents.wrapAll(html);
	        } else {
	          self.append(html);
	        }
	      });
	    },
	    wrap: function (html) {
	      var htmlIsFunction = isFunction(html);
	      return this.each(function (i) {
	        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
	      });
	    },
	    unwrap: function (selector) {
	      this.parent(selector).not("body").each(function () {
	        jQuery(this).replaceWith(this.childNodes);
	      });
	      return this;
	    }
	  });

	  jQuery.expr.pseudos.hidden = function (elem) {
	    return !jQuery.expr.pseudos.visible(elem);
	  };

	  jQuery.expr.pseudos.visible = function (elem) {
	    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	  };

	  jQuery.ajaxSettings.xhr = function () {
	    try {
	      return new window.XMLHttpRequest();
	    } catch (e) {}
	  };

	  var xhrSuccessStatus = {
	    // File protocol always yields status code 0, assume 200
	    0: 200,
	    // Support: IE <=9 only
	    // #1450: sometimes IE returns 1223 when it should be 204
	    1223: 204
	  },
	      xhrSupported = jQuery.ajaxSettings.xhr();
	  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	  support.ajax = xhrSupported = !!xhrSupported;
	  jQuery.ajaxTransport(function (options) {
	    var callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest

	    if (support.cors || xhrSupported && !options.crossDomain) {
	      return {
	        send: function (headers, complete) {
	          var i,
	              xhr = options.xhr();
	          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

	          if (options.xhrFields) {
	            for (i in options.xhrFields) {
	              xhr[i] = options.xhrFields[i];
	            }
	          } // Override mime type if needed


	          if (options.mimeType && xhr.overrideMimeType) {
	            xhr.overrideMimeType(options.mimeType);
	          } // X-Requested-With header
	          // For cross-domain requests, seeing as conditions for a preflight are
	          // akin to a jigsaw puzzle, we simply never set it to be sure.
	          // (it can always be set on a per-request basis or even using ajaxSetup)
	          // For same-domain requests, won't change header if already provided.


	          if (!options.crossDomain && !headers["X-Requested-With"]) {
	            headers["X-Requested-With"] = "XMLHttpRequest";
	          } // Set headers


	          for (i in headers) {
	            xhr.setRequestHeader(i, headers[i]);
	          } // Callback


	          callback = function (type) {
	            return function () {
	              if (callback) {
	                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

	                if (type === "abort") {
	                  xhr.abort();
	                } else if (type === "error") {
	                  // Support: IE <=9 only
	                  // On a manual native abort, IE9 throws
	                  // errors on any property access that is not readyState
	                  if (typeof xhr.status !== "number") {
	                    complete(0, "error");
	                  } else {
	                    complete( // File: protocol always yields status 0; see #8605, #14207
	                    xhr.status, xhr.statusText);
	                  }
	                } else {
	                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
	                  // IE9 has no XHR2 but throws on binary (trac-11426)
	                  // For XHR2 non-text, let the caller handle it (gh-2498)
	                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
	                    binary: xhr.response
	                  } : {
	                    text: xhr.responseText
	                  }, xhr.getAllResponseHeaders());
	                }
	              }
	            };
	          }; // Listen to events


	          xhr.onload = callback();
	          errorCallback = xhr.onerror = xhr.ontimeout = callback("error"); // Support: IE 9 only
	          // Use onreadystatechange to replace onabort
	          // to handle uncaught aborts

	          if (xhr.onabort !== undefined) {
	            xhr.onabort = errorCallback;
	          } else {
	            xhr.onreadystatechange = function () {
	              // Check readyState before timeout as it changes
	              if (xhr.readyState === 4) {
	                // Allow onerror to be called first,
	                // but that will not handle a native abort
	                // Also, save errorCallback to a variable
	                // as xhr.onerror cannot be accessed
	                window.setTimeout(function () {
	                  if (callback) {
	                    errorCallback();
	                  }
	                });
	              }
	            };
	          } // Create the abort callback


	          callback = callback("abort");

	          try {
	            // Do send the request (this may raise an exception)
	            xhr.send(options.hasContent && options.data || null);
	          } catch (e) {
	            // #14683: Only rethrow if this hasn't been notified as an error yet
	            if (callback) {
	              throw e;
	            }
	          }
	        },
	        abort: function () {
	          if (callback) {
	            callback();
	          }
	        }
	      };
	    }
	  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

	  jQuery.ajaxPrefilter(function (s) {
	    if (s.crossDomain) {
	      s.contents.script = false;
	    }
	  }); // Install script dataType

	  jQuery.ajaxSetup({
	    accepts: {
	      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
	    },
	    contents: {
	      script: /\b(?:java|ecma)script\b/
	    },
	    converters: {
	      "text script": function (text) {
	        jQuery.globalEval(text);
	        return text;
	      }
	    }
	  }); // Handle cache's special case and crossDomain

	  jQuery.ajaxPrefilter("script", function (s) {
	    if (s.cache === undefined) {
	      s.cache = false;
	    }

	    if (s.crossDomain) {
	      s.type = "GET";
	    }
	  }); // Bind script tag hack transport

	  jQuery.ajaxTransport("script", function (s) {
	    // This transport only deals with cross domain or forced-by-attrs requests
	    if (s.crossDomain || s.scriptAttrs) {
	      var script, callback;
	      return {
	        send: function (_, complete) {
	          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
	            charset: s.scriptCharset,
	            src: s.url
	          }).on("load error", callback = function (evt) {
	            script.remove();
	            callback = null;

	            if (evt) {
	              complete(evt.type === "error" ? 404 : 200, evt.type);
	            }
	          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

	          document.head.appendChild(script[0]);
	        },
	        abort: function () {
	          if (callback) {
	            callback();
	          }
	        }
	      };
	    }
	  });
	  var oldCallbacks = [],
	      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

	  jQuery.ajaxSetup({
	    jsonp: "callback",
	    jsonpCallback: function () {
	      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
	      this[callback] = true;
	      return callback;
	    }
	  }); // Detect, normalize options and install callbacks for jsonp requests

	  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	    var callbackName,
	        overwritten,
	        responseContainer,
	        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

	    if (jsonProp || s.dataTypes[0] === "jsonp") {
	      // Get callback name, remembering preexisting value associated with it
	      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

	      if (jsonProp) {
	        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
	      } else if (s.jsonp !== false) {
	        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
	      } // Use data converter to retrieve json after script execution


	      s.converters["script json"] = function () {
	        if (!responseContainer) {
	          jQuery.error(callbackName + " was not called");
	        }

	        return responseContainer[0];
	      }; // Force json dataType


	      s.dataTypes[0] = "json"; // Install callback

	      overwritten = window[callbackName];

	      window[callbackName] = function () {
	        responseContainer = arguments;
	      }; // Clean-up function (fires after converters)


	      jqXHR.always(function () {
	        // If previous value didn't exist - remove it
	        if (overwritten === undefined) {
	          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
	        } else {
	          window[callbackName] = overwritten;
	        } // Save back as free


	        if (s[callbackName]) {
	          // Make sure that re-using the options doesn't screw things around
	          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

	          oldCallbacks.push(callbackName);
	        } // Call if it was a function and we have a response


	        if (responseContainer && isFunction(overwritten)) {
	          overwritten(responseContainer[0]);
	        }

	        responseContainer = overwritten = undefined;
	      }); // Delegate to script

	      return "script";
	    }
	  }); // Support: Safari 8 only
	  // In Safari 8 documents created via document.implementation.createHTMLDocument
	  // collapse sibling forms: the second one becomes a child of the first one.
	  // Because of that, this security measure has to be disabled in Safari 8.
	  // https://bugs.webkit.org/show_bug.cgi?id=137337

	  support.createHTMLDocument = function () {
	    var body = document.implementation.createHTMLDocument("").body;
	    body.innerHTML = "<form></form><form></form>";
	    return body.childNodes.length === 2;
	  }(); // Argument "data" should be string of html
	  // context (optional): If specified, the fragment will be created in this context,
	  // defaults to document
	  // keepScripts (optional): If true, will include scripts passed in the html string


	  jQuery.parseHTML = function (data, context, keepScripts) {
	    if (typeof data !== "string") {
	      return [];
	    }

	    if (typeof context === "boolean") {
	      keepScripts = context;
	      context = false;
	    }

	    var base, parsed, scripts;

	    if (!context) {
	      // Stop scripts or inline event handlers from being executed immediately
	      // by using document.implementation
	      if (support.createHTMLDocument) {
	        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
	        // so any parsed elements with URLs
	        // are based on the document's URL (gh-2965)

	        base = context.createElement("base");
	        base.href = document.location.href;
	        context.head.appendChild(base);
	      } else {
	        context = document;
	      }
	    }

	    parsed = rsingleTag.exec(data);
	    scripts = !keepScripts && []; // Single tag

	    if (parsed) {
	      return [context.createElement(parsed[1])];
	    }

	    parsed = buildFragment([data], context, scripts);

	    if (scripts && scripts.length) {
	      jQuery(scripts).remove();
	    }

	    return jQuery.merge([], parsed.childNodes);
	  };
	  /**
	   * Load a url into a page
	   */


	  jQuery.fn.load = function (url, params, callback) {
	    var selector,
	        type,
	        response,
	        self = this,
	        off = url.indexOf(" ");

	    if (off > -1) {
	      selector = stripAndCollapse(url.slice(off));
	      url = url.slice(0, off);
	    } // If it's a function


	    if (isFunction(params)) {
	      // We assume that it's the callback
	      callback = params;
	      params = undefined; // Otherwise, build a param string
	    } else if (params && typeof params === "object") {
	      type = "POST";
	    } // If we have elements to modify, make the request


	    if (self.length > 0) {
	      jQuery.ajax({
	        url: url,
	        // If "type" variable is undefined, then "GET" method will be used.
	        // Make value of this field explicit since
	        // user can override it through ajaxSetup method
	        type: type || "GET",
	        dataType: "html",
	        data: params
	      }).done(function (responseText) {
	        // Save response for use in complete callback
	        response = arguments;
	        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
	        // Exclude scripts to avoid IE 'Permission Denied' errors
	        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
	        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
	        // but they are ignored because response was set above.
	        // If it fails, this function gets "jqXHR", "status", "error"
	      }).always(callback && function (jqXHR, status) {
	        self.each(function () {
	          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
	        });
	      });
	    }

	    return this;
	  };

	  jQuery.expr.pseudos.animated = function (elem) {
	    return jQuery.grep(jQuery.timers, function (fn) {
	      return elem === fn.elem;
	    }).length;
	  };

	  jQuery.offset = {
	    setOffset: function (elem, options, i) {
	      var curPosition,
	          curLeft,
	          curCSSTop,
	          curTop,
	          curOffset,
	          curCSSLeft,
	          calculatePosition,
	          position = jQuery.css(elem, "position"),
	          curElem = jQuery(elem),
	          props = {}; // Set position first, in-case top/left are set even on static elem

	      if (position === "static") {
	        elem.style.position = "relative";
	      }

	      curOffset = curElem.offset();
	      curCSSTop = jQuery.css(elem, "top");
	      curCSSLeft = jQuery.css(elem, "left");
	      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
	      // top or left is auto and position is either absolute or fixed

	      if (calculatePosition) {
	        curPosition = curElem.position();
	        curTop = curPosition.top;
	        curLeft = curPosition.left;
	      } else {
	        curTop = parseFloat(curCSSTop) || 0;
	        curLeft = parseFloat(curCSSLeft) || 0;
	      }

	      if (isFunction(options)) {
	        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	        options = options.call(elem, i, jQuery.extend({}, curOffset));
	      }

	      if (options.top != null) {
	        props.top = options.top - curOffset.top + curTop;
	      }

	      if (options.left != null) {
	        props.left = options.left - curOffset.left + curLeft;
	      }

	      if ("using" in options) {
	        options.using.call(elem, props);
	      } else {
	        curElem.css(props);
	      }
	    }
	  };
	  jQuery.fn.extend({
	    // offset() relates an element's border box to the document origin
	    offset: function (options) {
	      // Preserve chaining for setter
	      if (arguments.length) {
	        return options === undefined ? this : this.each(function (i) {
	          jQuery.offset.setOffset(this, options, i);
	        });
	      }

	      var rect,
	          win,
	          elem = this[0];

	      if (!elem) {
	        return;
	      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
	      // Support: IE <=11 only
	      // Running getBoundingClientRect on a
	      // disconnected node in IE throws an error


	      if (!elem.getClientRects().length) {
	        return {
	          top: 0,
	          left: 0
	        };
	      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


	      rect = elem.getBoundingClientRect();
	      win = elem.ownerDocument.defaultView;
	      return {
	        top: rect.top + win.pageYOffset,
	        left: rect.left + win.pageXOffset
	      };
	    },
	    // position() relates an element's margin box to its offset parent's padding box
	    // This corresponds to the behavior of CSS absolute positioning
	    position: function () {
	      if (!this[0]) {
	        return;
	      }

	      var offsetParent,
	          offset,
	          doc,
	          elem = this[0],
	          parentOffset = {
	        top: 0,
	        left: 0
	      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

	      if (jQuery.css(elem, "position") === "fixed") {
	        // Assume position:fixed implies availability of getBoundingClientRect
	        offset = elem.getBoundingClientRect();
	      } else {
	        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
	        // when a statically positioned element is identified

	        doc = elem.ownerDocument;
	        offsetParent = elem.offsetParent || doc.documentElement;

	        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
	          offsetParent = offsetParent.parentNode;
	        }

	        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
	          // Incorporate borders into its offset, since they are outside its content origin
	          parentOffset = jQuery(offsetParent).offset();
	          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
	          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
	        }
	      } // Subtract parent offsets and element margins


	      return {
	        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
	        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
	      };
	    },
	    // This method will return documentElement in the following cases:
	    // 1) For the element inside the iframe without offsetParent, this method will return
	    //    documentElement of the parent window
	    // 2) For the hidden or detached element
	    // 3) For body or html element, i.e. in case of the html node - it will return itself
	    //
	    // but those exceptions were never presented as a real life use-cases
	    // and might be considered as more preferable results.
	    //
	    // This logic, however, is not guaranteed and can change at any point in the future
	    offsetParent: function () {
	      return this.map(function () {
	        var offsetParent = this.offsetParent;

	        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
	          offsetParent = offsetParent.offsetParent;
	        }

	        return offsetParent || documentElement;
	      });
	    }
	  }); // Create scrollLeft and scrollTop methods

	  jQuery.each({
	    scrollLeft: "pageXOffset",
	    scrollTop: "pageYOffset"
	  }, function (method, prop) {
	    var top = "pageYOffset" === prop;

	    jQuery.fn[method] = function (val) {
	      return access(this, function (elem, method, val) {
	        // Coalesce documents and windows
	        var win;

	        if (isWindow(elem)) {
	          win = elem;
	        } else if (elem.nodeType === 9) {
	          win = elem.defaultView;
	        }

	        if (val === undefined) {
	          return win ? win[prop] : elem[method];
	        }

	        if (win) {
	          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
	        } else {
	          elem[method] = val;
	        }
	      }, method, val, arguments.length);
	    };
	  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
	  // Add the top/left cssHooks using jQuery.fn.position
	  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	  // getComputedStyle returns percent when specified for top/left/bottom/right;
	  // rather than make the css module depend on the offset module, just check for it here

	  jQuery.each(["top", "left"], function (_i, prop) {
	    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
	      if (computed) {
	        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

	        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
	      }
	    });
	  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

	  jQuery.each({
	    Height: "height",
	    Width: "width"
	  }, function (name, type) {
	    jQuery.each({
	      padding: "inner" + name,
	      content: type,
	      "": "outer" + name
	    }, function (defaultExtra, funcName) {
	      // Margin is only for outerHeight, outerWidth
	      jQuery.fn[funcName] = function (margin, value) {
	        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
	            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	        return access(this, function (elem, type, value) {
	          var doc;

	          if (isWindow(elem)) {
	            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
	            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
	          } // Get document width or height


	          if (elem.nodeType === 9) {
	            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	            // whichever is greatest

	            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
	          }

	          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
	          jQuery.css(elem, type, extra) : // Set width or height on the element
	          jQuery.style(elem, type, value, extra);
	        }, type, chainable ? margin : undefined, chainable);
	      };
	    });
	  });
	  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
	    jQuery.fn[type] = function (fn) {
	      return this.on(type, fn);
	    };
	  });
	  jQuery.fn.extend({
	    bind: function (types, data, fn) {
	      return this.on(types, null, data, fn);
	    },
	    unbind: function (types, fn) {
	      return this.off(types, null, fn);
	    },
	    delegate: function (selector, types, data, fn) {
	      return this.on(types, selector, data, fn);
	    },
	    undelegate: function (selector, types, fn) {
	      // ( namespace ) or ( selector, types [, fn] )
	      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
	    },
	    hover: function (fnOver, fnOut) {
	      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
	    }
	  });
	  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
	    // Handle event binding
	    jQuery.fn[name] = function (data, fn) {
	      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
	    };
	  }); // Support: Android <=4.0 only
	  // Make sure we trim BOM and NBSP

	  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
	  // arguments.
	  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	  // However, it is not slated for removal any time soon

	  jQuery.proxy = function (fn, context) {
	    var tmp, args, proxy;

	    if (typeof context === "string") {
	      tmp = fn[context];
	      context = fn;
	      fn = tmp;
	    } // Quick check to determine if target is callable, in the spec
	    // this throws a TypeError, but we will just return undefined.


	    if (!isFunction(fn)) {
	      return undefined;
	    } // Simulated bind


	    args = slice.call(arguments, 2);

	    proxy = function () {
	      return fn.apply(context || this, args.concat(slice.call(arguments)));
	    }; // Set the guid of unique handler to the same of original handler, so it can be removed


	    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	    return proxy;
	  };

	  jQuery.holdReady = function (hold) {
	    if (hold) {
	      jQuery.readyWait++;
	    } else {
	      jQuery.ready(true);
	    }
	  };

	  jQuery.isArray = Array.isArray;
	  jQuery.parseJSON = JSON.parse;
	  jQuery.nodeName = nodeName;
	  jQuery.isFunction = isFunction;
	  jQuery.isWindow = isWindow;
	  jQuery.camelCase = camelCase;
	  jQuery.type = toType;
	  jQuery.now = Date.now;

	  jQuery.isNumeric = function (obj) {
	    // As of jQuery 3.0, isNumeric is limited to
	    // strings and numbers (primitives or objects)
	    // that can be coerced to finite numbers (gh-2662)
	    var type = jQuery.type(obj);
	    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    !isNaN(obj - parseFloat(obj));
	  };

	  jQuery.trim = function (text) {
	    return text == null ? "" : (text + "").replace(rtrim, "");
	  }; // Register as a named AMD module, since jQuery can be concatenated with other

	  var // Map over jQuery in case of overwrite
	  _jQuery = window.jQuery,
	      // Map over the $ in case of overwrite
	  _$ = window.$;

	  jQuery.noConflict = function (deep) {
	    if (window.$ === jQuery) {
	      window.$ = _$;
	    }

	    if (deep && window.jQuery === jQuery) {
	      window.jQuery = _jQuery;
	    }

	    return jQuery;
	  }; // Expose jQuery and $ identifiers, even in AMD
	  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	  // and CommonJS for browser emulators (#13566)


	  if (typeof noGlobal === "undefined") {
	    window.jQuery = window.$ = jQuery;
	  }

	  return jQuery;
	});
	});

	var top = 'top';
	var bottom = 'bottom';
	var right = 'right';
	var left = 'left';
	var auto = 'auto';
	var basePlacements = [top, bottom, right, left];
	var start = 'start';
	var end = 'end';
	var clippingParents = 'clippingParents';
	var viewport = 'viewport';
	var popper = 'popper';
	var reference = 'reference';
	var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
	  return acc.concat([placement + "-" + start, placement + "-" + end]);
	}, []);
	var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
	  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
	}, []); // modifiers that need to read the DOM

	var beforeRead = 'beforeRead';
	var read = 'read';
	var afterRead = 'afterRead'; // pure-logic modifiers

	var beforeMain = 'beforeMain';
	var main = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

	function getNodeName(element) {
	  return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getWindow(node) {
	  if (node == null) {
	    return window;
	  }

	  if (node.toString() !== '[object Window]') {
	    var ownerDocument = node.ownerDocument;
	    return ownerDocument ? ownerDocument.defaultView || window : window;
	  }

	  return node;
	}

	function isElement(node) {
	  var OwnElement = getWindow(node).Element;
	  return node instanceof OwnElement || node instanceof Element;
	}

	function isHTMLElement(node) {
	  var OwnElement = getWindow(node).HTMLElement;
	  return node instanceof OwnElement || node instanceof HTMLElement;
	}

	function isShadowRoot(node) {
	  // IE 11 has no ShadowRoot
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }

	  var OwnElement = getWindow(node).ShadowRoot;
	  return node instanceof OwnElement || node instanceof ShadowRoot;
	}

	// and applies them to the HTMLElements such as popper and arrow

	function applyStyles(_ref) {
	  var state = _ref.state;
	  Object.keys(state.elements).forEach(function (name) {
	    var style = state.styles[name] || {};
	    var attributes = state.attributes[name] || {};
	    var element = state.elements[name]; // arrow is optional + virtual elements

	    if (!isHTMLElement(element) || !getNodeName(element)) {
	      return;
	    } // Flow doesn't support to extend this property, but it's the most
	    // effective way to apply styles to an HTMLElement
	    // $FlowFixMe[cannot-write]


	    Object.assign(element.style, style);
	    Object.keys(attributes).forEach(function (name) {
	      var value = attributes[name];

	      if (value === false) {
	        element.removeAttribute(name);
	      } else {
	        element.setAttribute(name, value === true ? '' : value);
	      }
	    });
	  });
	}

	function effect(_ref2) {
	  var state = _ref2.state;
	  var initialStyles = {
	    popper: {
	      position: state.options.strategy,
	      left: '0',
	      top: '0',
	      margin: '0'
	    },
	    arrow: {
	      position: 'absolute'
	    },
	    reference: {}
	  };
	  Object.assign(state.elements.popper.style, initialStyles.popper);
	  state.styles = initialStyles;

	  if (state.elements.arrow) {
	    Object.assign(state.elements.arrow.style, initialStyles.arrow);
	  }

	  return function () {
	    Object.keys(state.elements).forEach(function (name) {
	      var element = state.elements[name];
	      var attributes = state.attributes[name] || {};
	      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

	      var style = styleProperties.reduce(function (style, property) {
	        style[property] = '';
	        return style;
	      }, {}); // arrow is optional + virtual elements

	      if (!isHTMLElement(element) || !getNodeName(element)) {
	        return;
	      }

	      Object.assign(element.style, style);
	      Object.keys(attributes).forEach(function (attribute) {
	        element.removeAttribute(attribute);
	      });
	    });
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var applyStyles$1 = {
	  name: 'applyStyles',
	  enabled: true,
	  phase: 'write',
	  fn: applyStyles,
	  effect: effect,
	  requires: ['computeStyles']
	};

	function getBasePlacement(placement) {
	  return placement.split('-')[0];
	}

	var max = Math.max;
	var min = Math.min;
	var round = Math.round;

	function getBoundingClientRect(element, includeScale) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }

	  var rect = element.getBoundingClientRect();
	  var scaleX = 1;
	  var scaleY = 1;

	  if (isHTMLElement(element) && includeScale) {
	    var offsetHeight = element.offsetHeight;
	    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
	    // Fallback to 1 in case both values are `0`

	    if (offsetWidth > 0) {
	      scaleX = round(rect.width) / offsetWidth || 1;
	    }

	    if (offsetHeight > 0) {
	      scaleY = round(rect.height) / offsetHeight || 1;
	    }
	  }

	  return {
	    width: rect.width / scaleX,
	    height: rect.height / scaleY,
	    top: rect.top / scaleY,
	    right: rect.right / scaleX,
	    bottom: rect.bottom / scaleY,
	    left: rect.left / scaleX,
	    x: rect.left / scaleX,
	    y: rect.top / scaleY
	  };
	}

	// means it doesn't take into account transforms.

	function getLayoutRect(element) {
	  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
	  // Fixes https://github.com/popperjs/popper-core/issues/1223

	  var width = element.offsetWidth;
	  var height = element.offsetHeight;

	  if (Math.abs(clientRect.width - width) <= 1) {
	    width = clientRect.width;
	  }

	  if (Math.abs(clientRect.height - height) <= 1) {
	    height = clientRect.height;
	  }

	  return {
	    x: element.offsetLeft,
	    y: element.offsetTop,
	    width: width,
	    height: height
	  };
	}

	function contains(parent, child) {
	  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

	  if (parent.contains(child)) {
	    return true;
	  } // then fallback to custom implementation with Shadow DOM support
	  else if (rootNode && isShadowRoot(rootNode)) {
	    var next = child;

	    do {
	      if (next && parent.isSameNode(next)) {
	        return true;
	      } // $FlowFixMe[prop-missing]: need a better way to handle this...


	      next = next.parentNode || next.host;
	    } while (next);
	  } // Give up, the result is false


	  return false;
	}

	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}

	function isTableElement(element) {
	  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getDocumentElement(element) {
	  // $FlowFixMe[incompatible-return]: assume body is always available
	  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
	  element.document) || window.document).documentElement;
	}

	function getParentNode(element) {
	  if (getNodeName(element) === 'html') {
	    return element;
	  }

	  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
	    // $FlowFixMe[incompatible-return]
	    // $FlowFixMe[prop-missing]
	    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
	    element.parentNode || ( // DOM Element detected
	    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
	    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
	    getDocumentElement(element) // fallback

	  );
	}

	function getTrueOffsetParent(element) {
	  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
	  getComputedStyle$1(element).position === 'fixed') {
	    return null;
	  }

	  return element.offsetParent;
	} // `.offsetParent` reports `null` for fixed elements, while absolute elements
	// return the containing block


	function getContainingBlock(element) {
	  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

	  if (isIE && isHTMLElement(element)) {
	    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
	    var elementCss = getComputedStyle$1(element);

	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }

	  var currentNode = getParentNode(element);

	  if (isShadowRoot(currentNode)) {
	    currentNode = currentNode.host;
	  }

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
	    // create a containing block.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

	    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
	      return currentNode;
	    } else {
	      currentNode = currentNode.parentNode;
	    }
	  }

	  return null;
	} // Gets the closest ancestor positioned element. Handles some edge cases,
	// such as table ancestors and cross browser bugs.


	function getOffsetParent(element) {
	  var window = getWindow(element);
	  var offsetParent = getTrueOffsetParent(element);

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
	    return window;
	  }

	  return offsetParent || getContainingBlock(element) || window;
	}

	function getMainAxisFromPlacement(placement) {
	  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function within(min$1, value, max$1) {
	  return max(min$1, min(value, max$1));
	}
	function withinMaxClamp(min, value, max) {
	  var v = within(min, value, max);
	  return v > max ? max : v;
	}

	function getFreshSideObject() {
	  return {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  };
	}

	function mergePaddingObject(paddingObject) {
	  return Object.assign({}, getFreshSideObject(), paddingObject);
	}

	function expandToHashMap(value, keys) {
	  return keys.reduce(function (hashMap, key) {
	    hashMap[key] = value;
	    return hashMap;
	  }, {});
	}

	var toPaddingObject = function toPaddingObject(padding, state) {
	  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : padding;
	  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	};

	function arrow(_ref) {
	  var _state$modifiersData$;

	  var state = _ref.state,
	      name = _ref.name,
	      options = _ref.options;
	  var arrowElement = state.elements.arrow;
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var basePlacement = getBasePlacement(state.placement);
	  var axis = getMainAxisFromPlacement(basePlacement);
	  var isVertical = [left, right].indexOf(basePlacement) >= 0;
	  var len = isVertical ? 'height' : 'width';

	  if (!arrowElement || !popperOffsets) {
	    return;
	  }

	  var paddingObject = toPaddingObject(options.padding, state);
	  var arrowRect = getLayoutRect(arrowElement);
	  var minProp = axis === 'y' ? top : left;
	  var maxProp = axis === 'y' ? bottom : right;
	  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
	  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
	  var arrowOffsetParent = getOffsetParent(arrowElement);
	  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
	  // outside of the popper bounds

	  var min = paddingObject[minProp];
	  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
	  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

	  var axisProp = axis;
	  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
	}

	function effect$1(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options;
	  var _options$element = options.element,
	      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

	  if (arrowElement == null) {
	    return;
	  } // CSS selector


	  if (typeof arrowElement === 'string') {
	    arrowElement = state.elements.popper.querySelector(arrowElement);

	    if (!arrowElement) {
	      return;
	    }
	  }

	  if (process.env.NODE_ENV !== "production") {
	    if (!isHTMLElement(arrowElement)) {
	      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
	    }
	  }

	  if (!contains(state.elements.popper, arrowElement)) {
	    if (process.env.NODE_ENV !== "production") {
	      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
	    }

	    return;
	  }

	  state.elements.arrow = arrowElement;
	} // eslint-disable-next-line import/no-unused-modules


	var arrow$1 = {
	  name: 'arrow',
	  enabled: true,
	  phase: 'main',
	  fn: arrow,
	  effect: effect$1,
	  requires: ['popperOffsets'],
	  requiresIfExists: ['preventOverflow']
	};

	function getVariation(placement) {
	  return placement.split('-')[1];
	}

	var unsetSides = {
	  top: 'auto',
	  right: 'auto',
	  bottom: 'auto',
	  left: 'auto'
	}; // Round the offsets to the nearest suitable subpixel based on the DPR.
	// Zooming can change the DPR, but it seems to report a value that will
	// cleanly divide the values into the appropriate subpixels.

	function roundOffsetsByDPR(_ref) {
	  var x = _ref.x,
	      y = _ref.y;
	  var win = window;
	  var dpr = win.devicePixelRatio || 1;
	  return {
	    x: round(x * dpr) / dpr || 0,
	    y: round(y * dpr) / dpr || 0
	  };
	}

	function mapToStyles(_ref2) {
	  var _Object$assign2;

	  var popper = _ref2.popper,
	      popperRect = _ref2.popperRect,
	      placement = _ref2.placement,
	      variation = _ref2.variation,
	      offsets = _ref2.offsets,
	      position = _ref2.position,
	      gpuAcceleration = _ref2.gpuAcceleration,
	      adaptive = _ref2.adaptive,
	      roundOffsets = _ref2.roundOffsets,
	      isFixed = _ref2.isFixed;
	  var _offsets$x = offsets.x,
	      x = _offsets$x === void 0 ? 0 : _offsets$x,
	      _offsets$y = offsets.y,
	      y = _offsets$y === void 0 ? 0 : _offsets$y;

	  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref3.x;
	  y = _ref3.y;
	  var hasX = offsets.hasOwnProperty('x');
	  var hasY = offsets.hasOwnProperty('y');
	  var sideX = left;
	  var sideY = top;
	  var win = window;

	  if (adaptive) {
	    var offsetParent = getOffsetParent(popper);
	    var heightProp = 'clientHeight';
	    var widthProp = 'clientWidth';

	    if (offsetParent === getWindow(popper)) {
	      offsetParent = getDocumentElement(popper);

	      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
	        heightProp = 'scrollHeight';
	        widthProp = 'scrollWidth';
	      }
	    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


	    offsetParent = offsetParent;

	    if (placement === top || (placement === left || placement === right) && variation === end) {
	      sideY = bottom;
	      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
	      offsetParent[heightProp];
	      y -= offsetY - popperRect.height;
	      y *= gpuAcceleration ? 1 : -1;
	    }

	    if (placement === left || (placement === top || placement === bottom) && variation === end) {
	      sideX = right;
	      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
	      offsetParent[widthProp];
	      x -= offsetX - popperRect.width;
	      x *= gpuAcceleration ? 1 : -1;
	    }
	  }

	  var commonStyles = Object.assign({
	    position: position
	  }, adaptive && unsetSides);

	  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
	    x: x,
	    y: y
	  }) : {
	    x: x,
	    y: y
	  };

	  x = _ref4.x;
	  y = _ref4.y;

	  if (gpuAcceleration) {
	    var _Object$assign;

	    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	  }

	  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
	}

	function computeStyles(_ref5) {
	  var state = _ref5.state,
	      options = _ref5.options;
	  var _options$gpuAccelerat = options.gpuAcceleration,
	      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
	      _options$adaptive = options.adaptive,
	      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
	      _options$roundOffsets = options.roundOffsets,
	      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

	  if (process.env.NODE_ENV !== "production") {
	    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

	    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
	      return transitionProperty.indexOf(property) >= 0;
	    })) {
	      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
	    }
	  }

	  var commonStyles = {
	    placement: getBasePlacement(state.placement),
	    variation: getVariation(state.placement),
	    popper: state.elements.popper,
	    popperRect: state.rects.popper,
	    gpuAcceleration: gpuAcceleration,
	    isFixed: state.options.strategy === 'fixed'
	  };

	  if (state.modifiersData.popperOffsets != null) {
	    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.popperOffsets,
	      position: state.options.strategy,
	      adaptive: adaptive,
	      roundOffsets: roundOffsets
	    })));
	  }

	  if (state.modifiersData.arrow != null) {
	    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
	      offsets: state.modifiersData.arrow,
	      position: 'absolute',
	      adaptive: false,
	      roundOffsets: roundOffsets
	    })));
	  }

	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-placement': state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var computeStyles$1 = {
	  name: 'computeStyles',
	  enabled: true,
	  phase: 'beforeWrite',
	  fn: computeStyles,
	  data: {}
	};

	var passive = {
	  passive: true
	};

	function effect$2(_ref) {
	  var state = _ref.state,
	      instance = _ref.instance,
	      options = _ref.options;
	  var _options$scroll = options.scroll,
	      scroll = _options$scroll === void 0 ? true : _options$scroll,
	      _options$resize = options.resize,
	      resize = _options$resize === void 0 ? true : _options$resize;
	  var window = getWindow(state.elements.popper);
	  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

	  if (scroll) {
	    scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', instance.update, passive);
	    });
	  }

	  if (resize) {
	    window.addEventListener('resize', instance.update, passive);
	  }

	  return function () {
	    if (scroll) {
	      scrollParents.forEach(function (scrollParent) {
	        scrollParent.removeEventListener('scroll', instance.update, passive);
	      });
	    }

	    if (resize) {
	      window.removeEventListener('resize', instance.update, passive);
	    }
	  };
	} // eslint-disable-next-line import/no-unused-modules


	var eventListeners = {
	  name: 'eventListeners',
	  enabled: true,
	  phase: 'write',
	  fn: function fn() {},
	  effect: effect$2,
	  data: {}
	};

	var hash = {
	  left: 'right',
	  right: 'left',
	  bottom: 'top',
	  top: 'bottom'
	};
	function getOppositePlacement(placement) {
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	var hash$1 = {
	  start: 'end',
	  end: 'start'
	};
	function getOppositeVariationPlacement(placement) {
	  return placement.replace(/start|end/g, function (matched) {
	    return hash$1[matched];
	  });
	}

	function getWindowScroll(node) {
	  var win = getWindow(node);
	  var scrollLeft = win.pageXOffset;
	  var scrollTop = win.pageYOffset;
	  return {
	    scrollLeft: scrollLeft,
	    scrollTop: scrollTop
	  };
	}

	function getWindowScrollBarX(element) {
	  // If <html> has a CSS width greater than the viewport, then this will be
	  // incorrect for RTL.
	  // Popper 1 is broken in this case and never had a bug report so let's assume
	  // it's not an issue. I don't think anyone ever specifies width on <html>
	  // anyway.
	  // Browsers where the left scrollbar doesn't cause an issue report `0` for
	  // this (e.g. Edge 2019, IE11, Safari)
	  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getViewportRect(element) {
	  var win = getWindow(element);
	  var html = getDocumentElement(element);
	  var visualViewport = win.visualViewport;
	  var width = html.clientWidth;
	  var height = html.clientHeight;
	  var x = 0;
	  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
	  // can be obscured underneath it.
	  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
	  // if it isn't open, so if this isn't available, the popper will be detected
	  // to overflow the bottom of the screen too early.

	  if (visualViewport) {
	    width = visualViewport.width;
	    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
	    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
	    // errors due to floating point numbers, so we need to check precision.
	    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
	    // Feature detection fails in mobile emulation mode in Chrome.
	    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
	    // 0.001
	    // Fallback here: "Not Safari" userAgent

	    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
	      x = visualViewport.offsetLeft;
	      y = visualViewport.offsetTop;
	    }
	  }

	  return {
	    width: width,
	    height: height,
	    x: x + getWindowScrollBarX(element),
	    y: y
	  };
	}

	// of the `<html>` and `<body>` rect bounds if horizontally scrollable

	function getDocumentRect(element) {
	  var _element$ownerDocumen;

	  var html = getDocumentElement(element);
	  var winScroll = getWindowScroll(element);
	  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	  var y = -winScroll.scrollTop;

	  if (getComputedStyle$1(body || html).direction === 'rtl') {
	    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	  }

	  return {
	    width: width,
	    height: height,
	    x: x,
	    y: y
	  };
	}

	function isScrollParent(element) {
	  // Firefox wants us to check `-x` and `-y` variations as well
	  var _getComputedStyle = getComputedStyle$1(element),
	      overflow = _getComputedStyle.overflow,
	      overflowX = _getComputedStyle.overflowX,
	      overflowY = _getComputedStyle.overflowY;

	  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getScrollParent(node) {
	  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
	    // $FlowFixMe[incompatible-return]: assume body is always available
	    return node.ownerDocument.body;
	  }

	  if (isHTMLElement(node) && isScrollParent(node)) {
	    return node;
	  }

	  return getScrollParent(getParentNode(node));
	}

	/*
	given a DOM element, return the list of all scroll parents, up the list of ancesors
	until we get to the top window object. This list is what we attach scroll listeners
	to, because if any of these parent elements scroll, we'll need to re-calculate the
	reference element's position.
	*/

	function listScrollParents(element, list) {
	  var _element$ownerDocumen;

	  if (list === void 0) {
	    list = [];
	  }

	  var scrollParent = getScrollParent(element);
	  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	  var win = getWindow(scrollParent);
	  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	  var updatedList = list.concat(target);
	  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
	  updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function rectToClientRect(rect) {
	  return Object.assign({}, rect, {
	    left: rect.x,
	    top: rect.y,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  });
	}

	function getInnerBoundingClientRect(element) {
	  var rect = getBoundingClientRect(element);
	  rect.top = rect.top + element.clientTop;
	  rect.left = rect.left + element.clientLeft;
	  rect.bottom = rect.top + element.clientHeight;
	  rect.right = rect.left + element.clientWidth;
	  rect.width = element.clientWidth;
	  rect.height = element.clientHeight;
	  rect.x = rect.left;
	  rect.y = rect.top;
	  return rect;
	}

	function getClientRectFromMixedType(element, clippingParent) {
	  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
	} // A "clipping parent" is an overflowable container with the characteristic of
	// clipping (or hiding) overflowing elements with a position different from
	// `initial`


	function getClippingParents(element) {
	  var clippingParents = listScrollParents(getParentNode(element));
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
	  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

	  if (!isElement(clipperElement)) {
	    return [];
	  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


	  return clippingParents.filter(function (clippingParent) {
	    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
	  });
	} // Gets the maximum area that the element is visible in due to any number of
	// clipping parents


	function getClippingRect(element, boundary, rootBoundary) {
	  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
	  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
	  var firstClippingParent = clippingParents[0];
	  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
	    var rect = getClientRectFromMixedType(element, clippingParent);
	    accRect.top = max(rect.top, accRect.top);
	    accRect.right = min(rect.right, accRect.right);
	    accRect.bottom = min(rect.bottom, accRect.bottom);
	    accRect.left = max(rect.left, accRect.left);
	    return accRect;
	  }, getClientRectFromMixedType(element, firstClippingParent));
	  clippingRect.width = clippingRect.right - clippingRect.left;
	  clippingRect.height = clippingRect.bottom - clippingRect.top;
	  clippingRect.x = clippingRect.left;
	  clippingRect.y = clippingRect.top;
	  return clippingRect;
	}

	function computeOffsets(_ref) {
	  var reference = _ref.reference,
	      element = _ref.element,
	      placement = _ref.placement;
	  var basePlacement = placement ? getBasePlacement(placement) : null;
	  var variation = placement ? getVariation(placement) : null;
	  var commonX = reference.x + reference.width / 2 - element.width / 2;
	  var commonY = reference.y + reference.height / 2 - element.height / 2;
	  var offsets;

	  switch (basePlacement) {
	    case top:
	      offsets = {
	        x: commonX,
	        y: reference.y - element.height
	      };
	      break;

	    case bottom:
	      offsets = {
	        x: commonX,
	        y: reference.y + reference.height
	      };
	      break;

	    case right:
	      offsets = {
	        x: reference.x + reference.width,
	        y: commonY
	      };
	      break;

	    case left:
	      offsets = {
	        x: reference.x - element.width,
	        y: commonY
	      };
	      break;

	    default:
	      offsets = {
	        x: reference.x,
	        y: reference.y
	      };
	  }

	  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

	  if (mainAxis != null) {
	    var len = mainAxis === 'y' ? 'height' : 'width';

	    switch (variation) {
	      case start:
	        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
	        break;

	      case end:
	        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
	        break;
	    }
	  }

	  return offsets;
	}

	function detectOverflow(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      _options$placement = _options.placement,
	      placement = _options$placement === void 0 ? state.placement : _options$placement,
	      _options$boundary = _options.boundary,
	      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
	      _options$rootBoundary = _options.rootBoundary,
	      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
	      _options$elementConte = _options.elementContext,
	      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
	      _options$altBoundary = _options.altBoundary,
	      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
	      _options$padding = _options.padding,
	      padding = _options$padding === void 0 ? 0 : _options$padding;
	  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
	  var altContext = elementContext === popper ? reference : popper;
	  var popperRect = state.rects.popper;
	  var element = state.elements[altBoundary ? altContext : elementContext];
	  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
	  var referenceClientRect = getBoundingClientRect(state.elements.reference);
	  var popperOffsets = computeOffsets({
	    reference: referenceClientRect,
	    element: popperRect,
	    strategy: 'absolute',
	    placement: placement
	  });
	  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
	  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
	  // 0 or negative = within the clipping rect

	  var overflowOffsets = {
	    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
	    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
	    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
	    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	  };
	  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

	  if (elementContext === popper && offsetData) {
	    var offset = offsetData[placement];
	    Object.keys(overflowOffsets).forEach(function (key) {
	      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
	      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
	      overflowOffsets[key] += offset[axis] * multiply;
	    });
	  }

	  return overflowOffsets;
	}

	function computeAutoPlacement(state, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options = options,
	      placement = _options.placement,
	      boundary = _options.boundary,
	      rootBoundary = _options.rootBoundary,
	      padding = _options.padding,
	      flipVariations = _options.flipVariations,
	      _options$allowedAutoP = _options.allowedAutoPlacements,
	      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	  var variation = getVariation(placement);
	  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
	    return getVariation(placement) === variation;
	  }) : basePlacements;
	  var allowedPlacements = placements$1.filter(function (placement) {
	    return allowedAutoPlacements.indexOf(placement) >= 0;
	  });

	  if (allowedPlacements.length === 0) {
	    allowedPlacements = placements$1;

	    if (process.env.NODE_ENV !== "production") {
	      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
	    }
	  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


	  var overflows = allowedPlacements.reduce(function (acc, placement) {
	    acc[placement] = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding
	    })[getBasePlacement(placement)];
	    return acc;
	  }, {});
	  return Object.keys(overflows).sort(function (a, b) {
	    return overflows[a] - overflows[b];
	  });
	}

	function getExpandedFallbackPlacements(placement) {
	  if (getBasePlacement(placement) === auto) {
	    return [];
	  }

	  var oppositePlacement = getOppositePlacement(placement);
	  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
	}

	function flip(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;

	  if (state.modifiersData[name]._skip) {
	    return;
	  }

	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
	      specifiedFallbackPlacements = options.fallbackPlacements,
	      padding = options.padding,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      _options$flipVariatio = options.flipVariations,
	      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
	      allowedAutoPlacements = options.allowedAutoPlacements;
	  var preferredPlacement = state.options.placement;
	  var basePlacement = getBasePlacement(preferredPlacement);
	  var isBasePlacement = basePlacement === preferredPlacement;
	  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
	    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      padding: padding,
	      flipVariations: flipVariations,
	      allowedAutoPlacements: allowedAutoPlacements
	    }) : placement);
	  }, []);
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var checksMap = new Map();
	  var makeFallbackChecks = true;
	  var firstFittingPlacement = placements[0];

	  for (var i = 0; i < placements.length; i++) {
	    var placement = placements[i];

	    var _basePlacement = getBasePlacement(placement);

	    var isStartVariation = getVariation(placement) === start;
	    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
	    var len = isVertical ? 'width' : 'height';
	    var overflow = detectOverflow(state, {
	      placement: placement,
	      boundary: boundary,
	      rootBoundary: rootBoundary,
	      altBoundary: altBoundary,
	      padding: padding
	    });
	    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

	    if (referenceRect[len] > popperRect[len]) {
	      mainVariationSide = getOppositePlacement(mainVariationSide);
	    }

	    var altVariationSide = getOppositePlacement(mainVariationSide);
	    var checks = [];

	    if (checkMainAxis) {
	      checks.push(overflow[_basePlacement] <= 0);
	    }

	    if (checkAltAxis) {
	      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
	    }

	    if (checks.every(function (check) {
	      return check;
	    })) {
	      firstFittingPlacement = placement;
	      makeFallbackChecks = false;
	      break;
	    }

	    checksMap.set(placement, checks);
	  }

	  if (makeFallbackChecks) {
	    // `2` may be desired in some cases – research later
	    var numberOfChecks = flipVariations ? 3 : 1;

	    var _loop = function _loop(_i) {
	      var fittingPlacement = placements.find(function (placement) {
	        var checks = checksMap.get(placement);

	        if (checks) {
	          return checks.slice(0, _i).every(function (check) {
	            return check;
	          });
	        }
	      });

	      if (fittingPlacement) {
	        firstFittingPlacement = fittingPlacement;
	        return "break";
	      }
	    };

	    for (var _i = numberOfChecks; _i > 0; _i--) {
	      var _ret = _loop(_i);

	      if (_ret === "break") break;
	    }
	  }

	  if (state.placement !== firstFittingPlacement) {
	    state.modifiersData[name]._skip = true;
	    state.placement = firstFittingPlacement;
	    state.reset = true;
	  }
	} // eslint-disable-next-line import/no-unused-modules


	var flip$1 = {
	  name: 'flip',
	  enabled: true,
	  phase: 'main',
	  fn: flip,
	  requiresIfExists: ['offset'],
	  data: {
	    _skip: false
	  }
	};

	function getSideOffsets(overflow, rect, preventedOffsets) {
	  if (preventedOffsets === void 0) {
	    preventedOffsets = {
	      x: 0,
	      y: 0
	    };
	  }

	  return {
	    top: overflow.top - rect.height - preventedOffsets.y,
	    right: overflow.right - rect.width + preventedOffsets.x,
	    bottom: overflow.bottom - rect.height + preventedOffsets.y,
	    left: overflow.left - rect.width - preventedOffsets.x
	  };
	}

	function isAnySideFullyClipped(overflow) {
	  return [top, right, bottom, left].some(function (side) {
	    return overflow[side] >= 0;
	  });
	}

	function hide(_ref) {
	  var state = _ref.state,
	      name = _ref.name;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var preventedOffsets = state.modifiersData.preventOverflow;
	  var referenceOverflow = detectOverflow(state, {
	    elementContext: 'reference'
	  });
	  var popperAltOverflow = detectOverflow(state, {
	    altBoundary: true
	  });
	  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	  state.modifiersData[name] = {
	    referenceClippingOffsets: referenceClippingOffsets,
	    popperEscapeOffsets: popperEscapeOffsets,
	    isReferenceHidden: isReferenceHidden,
	    hasPopperEscaped: hasPopperEscaped
	  };
	  state.attributes.popper = Object.assign({}, state.attributes.popper, {
	    'data-popper-reference-hidden': isReferenceHidden,
	    'data-popper-escaped': hasPopperEscaped
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var hide$1 = {
	  name: 'hide',
	  enabled: true,
	  phase: 'main',
	  requiresIfExists: ['preventOverflow'],
	  fn: hide
	};

	function distanceAndSkiddingToXY(placement, rects, offset) {
	  var basePlacement = getBasePlacement(placement);
	  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

	  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
	    placement: placement
	  })) : offset,
	      skidding = _ref[0],
	      distance = _ref[1];

	  skidding = skidding || 0;
	  distance = (distance || 0) * invertDistance;
	  return [left, right].indexOf(basePlacement) >= 0 ? {
	    x: distance,
	    y: skidding
	  } : {
	    x: skidding,
	    y: distance
	  };
	}

	function offset(_ref2) {
	  var state = _ref2.state,
	      options = _ref2.options,
	      name = _ref2.name;
	  var _options$offset = options.offset,
	      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
	  var data = placements.reduce(function (acc, placement) {
	    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
	    return acc;
	  }, {});
	  var _data$state$placement = data[state.placement],
	      x = _data$state$placement.x,
	      y = _data$state$placement.y;

	  if (state.modifiersData.popperOffsets != null) {
	    state.modifiersData.popperOffsets.x += x;
	    state.modifiersData.popperOffsets.y += y;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var offset$1 = {
	  name: 'offset',
	  enabled: true,
	  phase: 'main',
	  requires: ['popperOffsets'],
	  fn: offset
	};

	function popperOffsets(_ref) {
	  var state = _ref.state,
	      name = _ref.name; // Offsets are the actual position the popper needs to have to be
	  // properly positioned near its reference element
	  // This is the most basic placement, and will be adjusted by
	  // the modifiers in the next step

	  state.modifiersData[name] = computeOffsets({
	    reference: state.rects.reference,
	    element: state.rects.popper,
	    strategy: 'absolute',
	    placement: state.placement
	  });
	} // eslint-disable-next-line import/no-unused-modules


	var popperOffsets$1 = {
	  name: 'popperOffsets',
	  enabled: true,
	  phase: 'read',
	  fn: popperOffsets,
	  data: {}
	};

	function getAltAxis(axis) {
	  return axis === 'x' ? 'y' : 'x';
	}

	function preventOverflow(_ref) {
	  var state = _ref.state,
	      options = _ref.options,
	      name = _ref.name;
	  var _options$mainAxis = options.mainAxis,
	      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
	      _options$altAxis = options.altAxis,
	      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
	      boundary = options.boundary,
	      rootBoundary = options.rootBoundary,
	      altBoundary = options.altBoundary,
	      padding = options.padding,
	      _options$tether = options.tether,
	      tether = _options$tether === void 0 ? true : _options$tether,
	      _options$tetherOffset = options.tetherOffset,
	      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	  var overflow = detectOverflow(state, {
	    boundary: boundary,
	    rootBoundary: rootBoundary,
	    padding: padding,
	    altBoundary: altBoundary
	  });
	  var basePlacement = getBasePlacement(state.placement);
	  var variation = getVariation(state.placement);
	  var isBasePlacement = !variation;
	  var mainAxis = getMainAxisFromPlacement(basePlacement);
	  var altAxis = getAltAxis(mainAxis);
	  var popperOffsets = state.modifiersData.popperOffsets;
	  var referenceRect = state.rects.reference;
	  var popperRect = state.rects.popper;
	  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
	    placement: state.placement
	  })) : tetherOffset;
	  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
	    mainAxis: tetherOffsetValue,
	    altAxis: tetherOffsetValue
	  } : Object.assign({
	    mainAxis: 0,
	    altAxis: 0
	  }, tetherOffsetValue);
	  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	  var data = {
	    x: 0,
	    y: 0
	  };

	  if (!popperOffsets) {
	    return;
	  }

	  if (checkMainAxis) {
	    var _offsetModifierState$;

	    var mainSide = mainAxis === 'y' ? top : left;
	    var altSide = mainAxis === 'y' ? bottom : right;
	    var len = mainAxis === 'y' ? 'height' : 'width';
	    var offset = popperOffsets[mainAxis];
	    var min$1 = offset + overflow[mainSide];
	    var max$1 = offset - overflow[altSide];
	    var additive = tether ? -popperRect[len] / 2 : 0;
	    var minLen = variation === start ? referenceRect[len] : popperRect[len];
	    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
	    // outside the reference bounds

	    var arrowElement = state.elements.arrow;
	    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
	      width: 0,
	      height: 0
	    };
	    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
	    var arrowPaddingMin = arrowPaddingObject[mainSide];
	    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
	    // to include its full size in the calculation. If the reference is small
	    // and near the edge of a boundary, the popper can overflow even if the
	    // reference is not overflowing as well (e.g. virtual elements with no
	    // width or height)

	    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
	    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
	    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
	    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
	    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
	    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
	    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
	    var tetherMax = offset + maxOffset - offsetModifierValue;
	    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
	    popperOffsets[mainAxis] = preventedOffset;
	    data[mainAxis] = preventedOffset - offset;
	  }

	  if (checkAltAxis) {
	    var _offsetModifierState$2;

	    var _mainSide = mainAxis === 'x' ? top : left;

	    var _altSide = mainAxis === 'x' ? bottom : right;

	    var _offset = popperOffsets[altAxis];

	    var _len = altAxis === 'y' ? 'height' : 'width';

	    var _min = _offset + overflow[_mainSide];

	    var _max = _offset - overflow[_altSide];

	    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

	    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

	    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

	    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

	    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

	    popperOffsets[altAxis] = _preventedOffset;
	    data[altAxis] = _preventedOffset - _offset;
	  }

	  state.modifiersData[name] = data;
	} // eslint-disable-next-line import/no-unused-modules


	var preventOverflow$1 = {
	  name: 'preventOverflow',
	  enabled: true,
	  phase: 'main',
	  fn: preventOverflow,
	  requiresIfExists: ['offset']
	};

	function getHTMLElementScroll(element) {
	  return {
	    scrollLeft: element.scrollLeft,
	    scrollTop: element.scrollTop
	  };
	}

	function getNodeScroll(node) {
	  if (node === getWindow(node) || !isHTMLElement(node)) {
	    return getWindowScroll(node);
	  } else {
	    return getHTMLElementScroll(node);
	  }
	}

	function isElementScaled(element) {
	  var rect = element.getBoundingClientRect();
	  var scaleX = round(rect.width) / element.offsetWidth || 1;
	  var scaleY = round(rect.height) / element.offsetHeight || 1;
	  return scaleX !== 1 || scaleY !== 1;
	} // Returns the composite rect of an element relative to its offsetParent.
	// Composite means it takes into account transforms as well as layout.


	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }

	  var isOffsetParentAnElement = isHTMLElement(offsetParent);
	  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	  var documentElement = getDocumentElement(offsetParent);
	  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
	  var scroll = {
	    scrollLeft: 0,
	    scrollTop: 0
	  };
	  var offsets = {
	    x: 0,
	    y: 0
	  };

	  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
	    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
	    isScrollParent(documentElement)) {
	      scroll = getNodeScroll(offsetParent);
	    }

	    if (isHTMLElement(offsetParent)) {
	      offsets = getBoundingClientRect(offsetParent, true);
	      offsets.x += offsetParent.clientLeft;
	      offsets.y += offsetParent.clientTop;
	    } else if (documentElement) {
	      offsets.x = getWindowScrollBarX(documentElement);
	    }
	  }

	  return {
	    x: rect.left + scroll.scrollLeft - offsets.x,
	    y: rect.top + scroll.scrollTop - offsets.y,
	    width: rect.width,
	    height: rect.height
	  };
	}

	function order(modifiers) {
	  var map = new Map();
	  var visited = new Set();
	  var result = [];
	  modifiers.forEach(function (modifier) {
	    map.set(modifier.name, modifier);
	  }); // On visiting object, check for its dependencies and visit them recursively

	  function sort(modifier) {
	    visited.add(modifier.name);
	    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
	    requires.forEach(function (dep) {
	      if (!visited.has(dep)) {
	        var depModifier = map.get(dep);

	        if (depModifier) {
	          sort(depModifier);
	        }
	      }
	    });
	    result.push(modifier);
	  }

	  modifiers.forEach(function (modifier) {
	    if (!visited.has(modifier.name)) {
	      // check for visited object
	      sort(modifier);
	    }
	  });
	  return result;
	}

	function orderModifiers(modifiers) {
	  // order based on dependencies
	  var orderedModifiers = order(modifiers); // order based on phase

	  return modifierPhases.reduce(function (acc, phase) {
	    return acc.concat(orderedModifiers.filter(function (modifier) {
	      return modifier.phase === phase;
	    }));
	  }, []);
	}

	function debounce(fn) {
	  var pending;
	  return function () {
	    if (!pending) {
	      pending = new Promise(function (resolve) {
	        Promise.resolve().then(function () {
	          pending = undefined;
	          resolve(fn());
	        });
	      });
	    }

	    return pending;
	  };
	}

	function format(str) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return [].concat(args).reduce(function (p, c) {
	    return p.replace(/%s/, c);
	  }, str);
	}

	var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
	var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
	var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
	function validateModifiers(modifiers) {
	  modifiers.forEach(function (modifier) {
	    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
	    .filter(function (value, index, self) {
	      return self.indexOf(value) === index;
	    }).forEach(function (key) {
	      switch (key) {
	        case 'name':
	          if (typeof modifier.name !== 'string') {
	            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
	          }

	          break;

	        case 'enabled':
	          if (typeof modifier.enabled !== 'boolean') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
	          }

	          break;

	        case 'phase':
	          if (modifierPhases.indexOf(modifier.phase) < 0) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
	          }

	          break;

	        case 'fn':
	          if (typeof modifier.fn !== 'function') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }

	          break;

	        case 'effect':
	          if (modifier.effect != null && typeof modifier.effect !== 'function') {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
	          }

	          break;

	        case 'requires':
	          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
	          }

	          break;

	        case 'requiresIfExists':
	          if (!Array.isArray(modifier.requiresIfExists)) {
	            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
	          }

	          break;

	        case 'options':
	        case 'data':
	          break;

	        default:
	          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
	            return "\"" + s + "\"";
	          }).join(', ') + "; but \"" + key + "\" was provided.");
	      }

	      modifier.requires && modifier.requires.forEach(function (requirement) {
	        if (modifiers.find(function (mod) {
	          return mod.name === requirement;
	        }) == null) {
	          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
	        }
	      });
	    });
	  });
	}

	function uniqueBy(arr, fn) {
	  var identifiers = new Set();
	  return arr.filter(function (item) {
	    var identifier = fn(item);

	    if (!identifiers.has(identifier)) {
	      identifiers.add(identifier);
	      return true;
	    }
	  });
	}

	function mergeByName(modifiers) {
	  var merged = modifiers.reduce(function (merged, current) {
	    var existing = merged[current.name];
	    merged[current.name] = existing ? Object.assign({}, existing, current, {
	      options: Object.assign({}, existing.options, current.options),
	      data: Object.assign({}, existing.data, current.data)
	    }) : current;
	    return merged;
	  }, {}); // IE11 does not support Object.values

	  return Object.keys(merged).map(function (key) {
	    return merged[key];
	  });
	}

	var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
	var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
	var DEFAULT_OPTIONS = {
	  placement: 'bottom',
	  modifiers: [],
	  strategy: 'absolute'
	};

	function areValidElements() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return !args.some(function (element) {
	    return !(element && typeof element.getBoundingClientRect === 'function');
	  });
	}

	function popperGenerator(generatorOptions) {
	  if (generatorOptions === void 0) {
	    generatorOptions = {};
	  }

	  var _generatorOptions = generatorOptions,
	      _generatorOptions$def = _generatorOptions.defaultModifiers,
	      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
	      _generatorOptions$def2 = _generatorOptions.defaultOptions,
	      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	  return function createPopper(reference, popper, options) {
	    if (options === void 0) {
	      options = defaultOptions;
	    }

	    var state = {
	      placement: 'bottom',
	      orderedModifiers: [],
	      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
	      modifiersData: {},
	      elements: {
	        reference: reference,
	        popper: popper
	      },
	      attributes: {},
	      styles: {}
	    };
	    var effectCleanupFns = [];
	    var isDestroyed = false;
	    var instance = {
	      state: state,
	      setOptions: function setOptions(setOptionsAction) {
	        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
	        cleanupModifierEffects();
	        state.options = Object.assign({}, defaultOptions, state.options, options);
	        state.scrollParents = {
	          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
	          popper: listScrollParents(popper)
	        }; // Orders the modifiers based on their dependencies and `phase`
	        // properties

	        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

	        state.orderedModifiers = orderedModifiers.filter(function (m) {
	          return m.enabled;
	        }); // Validate the provided modifiers so that the consumer will get warned
	        // if one of the modifiers is invalid for any reason

	        if (process.env.NODE_ENV !== "production") {
	          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
	            var name = _ref.name;
	            return name;
	          });
	          validateModifiers(modifiers);

	          if (getBasePlacement(state.options.placement) === auto) {
	            var flipModifier = state.orderedModifiers.find(function (_ref2) {
	              var name = _ref2.name;
	              return name === 'flip';
	            });

	            if (!flipModifier) {
	              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
	            }
	          }

	          var _getComputedStyle = getComputedStyle$1(popper),
	              marginTop = _getComputedStyle.marginTop,
	              marginRight = _getComputedStyle.marginRight,
	              marginBottom = _getComputedStyle.marginBottom,
	              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
	          // cause bugs with positioning, so we'll warn the consumer


	          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
	            return parseFloat(margin);
	          })) {
	            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
	          }
	        }

	        runModifierEffects();
	        return instance.update();
	      },
	      // Sync update – it will always be executed, even if not necessary. This
	      // is useful for low frequency updates where sync behavior simplifies the
	      // logic.
	      // For high frequency updates (e.g. `resize` and `scroll` events), always
	      // prefer the async Popper#update method
	      forceUpdate: function forceUpdate() {
	        if (isDestroyed) {
	          return;
	        }

	        var _state$elements = state.elements,
	            reference = _state$elements.reference,
	            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
	        // anymore

	        if (!areValidElements(reference, popper)) {
	          if (process.env.NODE_ENV !== "production") {
	            console.error(INVALID_ELEMENT_ERROR);
	          }

	          return;
	        } // Store the reference and popper rects to be read by modifiers


	        state.rects = {
	          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
	          popper: getLayoutRect(popper)
	        }; // Modifiers have the ability to reset the current update cycle. The
	        // most common use case for this is the `flip` modifier changing the
	        // placement, which then needs to re-run all the modifiers, because the
	        // logic was previously ran for the previous placement and is therefore
	        // stale/incorrect

	        state.reset = false;
	        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
	        // is filled with the initial data specified by the modifier. This means
	        // it doesn't persist and is fresh on each update.
	        // To ensure persistent data, use `${name}#persistent`

	        state.orderedModifiers.forEach(function (modifier) {
	          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
	        });
	        var __debug_loops__ = 0;

	        for (var index = 0; index < state.orderedModifiers.length; index++) {
	          if (process.env.NODE_ENV !== "production") {
	            __debug_loops__ += 1;

	            if (__debug_loops__ > 100) {
	              console.error(INFINITE_LOOP_ERROR);
	              break;
	            }
	          }

	          if (state.reset === true) {
	            state.reset = false;
	            index = -1;
	            continue;
	          }

	          var _state$orderedModifie = state.orderedModifiers[index],
	              fn = _state$orderedModifie.fn,
	              _state$orderedModifie2 = _state$orderedModifie.options,
	              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
	              name = _state$orderedModifie.name;

	          if (typeof fn === 'function') {
	            state = fn({
	              state: state,
	              options: _options,
	              name: name,
	              instance: instance
	            }) || state;
	          }
	        }
	      },
	      // Async and optimistically optimized update – it will not be executed if
	      // not necessary (debounced to run at most once-per-tick)
	      update: debounce(function () {
	        return new Promise(function (resolve) {
	          instance.forceUpdate();
	          resolve(state);
	        });
	      }),
	      destroy: function destroy() {
	        cleanupModifierEffects();
	        isDestroyed = true;
	      }
	    };

	    if (!areValidElements(reference, popper)) {
	      if (process.env.NODE_ENV !== "production") {
	        console.error(INVALID_ELEMENT_ERROR);
	      }

	      return instance;
	    }

	    instance.setOptions(options).then(function (state) {
	      if (!isDestroyed && options.onFirstUpdate) {
	        options.onFirstUpdate(state);
	      }
	    }); // Modifiers have the ability to execute arbitrary code before the first
	    // update cycle runs. They will be executed in the same order as the update
	    // cycle. This is useful when a modifier adds some persistent data that
	    // other modifiers need to use, but the modifier is run after the dependent
	    // one.

	    function runModifierEffects() {
	      state.orderedModifiers.forEach(function (_ref3) {
	        var name = _ref3.name,
	            _ref3$options = _ref3.options,
	            options = _ref3$options === void 0 ? {} : _ref3$options,
	            effect = _ref3.effect;

	        if (typeof effect === 'function') {
	          var cleanupFn = effect({
	            state: state,
	            name: name,
	            instance: instance,
	            options: options
	          });

	          var noopFn = function noopFn() {};

	          effectCleanupFns.push(cleanupFn || noopFn);
	        }
	      });
	    }

	    function cleanupModifierEffects() {
	      effectCleanupFns.forEach(function (fn) {
	        return fn();
	      });
	      effectCleanupFns = [];
	    }

	    return instance;
	  };
	}
	var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
	var createPopper$1 = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers
	}); // eslint-disable-next-line import/no-unused-modules

	var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
	var createPopper$2 = /*#__PURE__*/popperGenerator({
	  defaultModifiers: defaultModifiers$1
	}); // eslint-disable-next-line import/no-unused-modules



	var Popper = /*#__PURE__*/Object.freeze({
		__proto__: null,
		popperGenerator: popperGenerator,
		detectOverflow: detectOverflow,
		createPopperBase: createPopper,
		createPopper: createPopper$2,
		createPopperLite: createPopper$1,
		top: top,
		bottom: bottom,
		right: right,
		left: left,
		auto: auto,
		basePlacements: basePlacements,
		start: start,
		end: end,
		clippingParents: clippingParents,
		viewport: viewport,
		popper: popper,
		reference: reference,
		variationPlacements: variationPlacements,
		placements: placements,
		beforeRead: beforeRead,
		read: read,
		afterRead: afterRead,
		beforeMain: beforeMain,
		main: main,
		afterMain: afterMain,
		beforeWrite: beforeWrite,
		write: write,
		afterWrite: afterWrite,
		modifierPhases: modifierPhases,
		applyStyles: applyStyles$1,
		arrow: arrow$1,
		computeStyles: computeStyles$1,
		eventListeners: eventListeners,
		flip: flip$1,
		hide: hide$1,
		offset: offset$1,
		popperOffsets: popperOffsets$1,
		preventOverflow: preventOverflow$1
	});

	/*!
	  * Bootstrap v5.1.3 (https://getbootstrap.com/)
	  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	  */
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/index.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const MAX_UID = 1000000;
	const MILLISECONDS_MULTIPLIER = 1000;
	const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

	const toType = obj => {
	  if (obj === null || obj === undefined) {
	    return `${obj}`;
	  }

	  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
	};
	/**
	 * --------------------------------------------------------------------------
	 * Public Util Api
	 * --------------------------------------------------------------------------
	 */


	const getUID = prefix => {
	  do {
	    prefix += Math.floor(Math.random() * MAX_UID);
	  } while (document.getElementById(prefix));

	  return prefix;
	};

	const getSelector = element => {
	  let selector = element.getAttribute('data-bs-target');

	  if (!selector || selector === '#') {
	    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
	    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
	    // `document.querySelector` will rightfully complain it is invalid.
	    // See https://github.com/twbs/bootstrap/issues/32273

	    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
	      return null;
	    } // Just in case some CMS puts out a full URL with the anchor appended


	    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
	      hrefAttr = `#${hrefAttr.split('#')[1]}`;
	    }

	    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
	  }

	  return selector;
	};

	const getSelectorFromElement = element => {
	  const selector = getSelector(element);

	  if (selector) {
	    return document.querySelector(selector) ? selector : null;
	  }

	  return null;
	};

	const getElementFromSelector = element => {
	  const selector = getSelector(element);
	  return selector ? document.querySelector(selector) : null;
	};

	const getTransitionDurationFromElement = element => {
	  if (!element) {
	    return 0;
	  } // Get transition-duration of the element


	  let {
	    transitionDuration,
	    transitionDelay
	  } = window.getComputedStyle(element);
	  const floatTransitionDuration = Number.parseFloat(transitionDuration);
	  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

	  if (!floatTransitionDuration && !floatTransitionDelay) {
	    return 0;
	  } // If multiple durations are defined, take the first


	  transitionDuration = transitionDuration.split(',')[0];
	  transitionDelay = transitionDelay.split(',')[0];
	  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
	};

	const triggerTransitionEnd = element => {
	  element.dispatchEvent(new Event(TRANSITION_END));
	};

	const isElement$1 = obj => {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  if (typeof obj.jquery !== 'undefined') {
	    obj = obj[0];
	  }

	  return typeof obj.nodeType !== 'undefined';
	};

	const getElement = obj => {
	  if (isElement$1(obj)) {
	    // it's a jQuery object or a node element
	    return obj.jquery ? obj[0] : obj;
	  }

	  if (typeof obj === 'string' && obj.length > 0) {
	    return document.querySelector(obj);
	  }

	  return null;
	};

	const typeCheckConfig = (componentName, config, configTypes) => {
	  Object.keys(configTypes).forEach(property => {
	    const expectedTypes = configTypes[property];
	    const value = config[property];
	    const valueType = value && isElement$1(value) ? 'element' : toType(value);

	    if (!new RegExp(expectedTypes).test(valueType)) {
	      throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
	    }
	  });
	};

	const isVisible = element => {
	  if (!isElement$1(element) || element.getClientRects().length === 0) {
	    return false;
	  }

	  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
	};

	const isDisabled = element => {
	  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
	    return true;
	  }

	  if (element.classList.contains('disabled')) {
	    return true;
	  }

	  if (typeof element.disabled !== 'undefined') {
	    return element.disabled;
	  }

	  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
	};

	const findShadowRoot = element => {
	  if (!document.documentElement.attachShadow) {
	    return null;
	  } // Can find the shadow root otherwise it'll return the document


	  if (typeof element.getRootNode === 'function') {
	    const root = element.getRootNode();
	    return root instanceof ShadowRoot ? root : null;
	  }

	  if (element instanceof ShadowRoot) {
	    return element;
	  } // when we don't find a shadow root


	  if (!element.parentNode) {
	    return null;
	  }

	  return findShadowRoot(element.parentNode);
	};

	const noop = () => {};
	/**
	 * Trick to restart an element's animation
	 *
	 * @param {HTMLElement} element
	 * @return void
	 *
	 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
	 */


	const reflow = element => {
	  // eslint-disable-next-line no-unused-expressions
	  element.offsetHeight;
	};

	const getjQuery = () => {
	  const {
	    jQuery
	  } = window;

	  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
	    return jQuery;
	  }

	  return null;
	};

	const DOMContentLoadedCallbacks = [];

	const onDOMContentLoaded = callback => {
	  if (document.readyState === 'loading') {
	    // add listener on the first call when the document is in loading state
	    if (!DOMContentLoadedCallbacks.length) {
	      document.addEventListener('DOMContentLoaded', () => {
	        DOMContentLoadedCallbacks.forEach(callback => callback());
	      });
	    }

	    DOMContentLoadedCallbacks.push(callback);
	  } else {
	    callback();
	  }
	};

	const isRTL = () => document.documentElement.dir === 'rtl';

	const defineJQueryPlugin = plugin => {
	  onDOMContentLoaded(() => {
	    const $ = getjQuery();
	    /* istanbul ignore if */

	    if ($) {
	      const name = plugin.NAME;
	      const JQUERY_NO_CONFLICT = $.fn[name];
	      $.fn[name] = plugin.jQueryInterface;
	      $.fn[name].Constructor = plugin;

	      $.fn[name].noConflict = () => {
	        $.fn[name] = JQUERY_NO_CONFLICT;
	        return plugin.jQueryInterface;
	      };
	    }
	  });
	};

	const execute = callback => {
	  if (typeof callback === 'function') {
	    callback();
	  }
	};

	const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
	  if (!waitForTransition) {
	    execute(callback);
	    return;
	  }

	  const durationPadding = 5;
	  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
	  let called = false;

	  const handler = ({
	    target
	  }) => {
	    if (target !== transitionElement) {
	      return;
	    }

	    called = true;
	    transitionElement.removeEventListener(TRANSITION_END, handler);
	    execute(callback);
	  };

	  transitionElement.addEventListener(TRANSITION_END, handler);
	  setTimeout(() => {
	    if (!called) {
	      triggerTransitionEnd(transitionElement);
	    }
	  }, emulatedDuration);
	};
	/**
	 * Return the previous/next element of a list.
	 *
	 * @param {array} list    The list of elements
	 * @param activeElement   The active element
	 * @param shouldGetNext   Choose to get next or previous element
	 * @param isCycleAllowed
	 * @return {Element|elem} The proper element
	 */


	const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
	  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

	  if (index === -1) {
	    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
	  }

	  const listLength = list.length;
	  index += shouldGetNext ? 1 : -1;

	  if (isCycleAllowed) {
	    index = (index + listLength) % listLength;
	  }

	  return list[Math.max(0, Math.min(index, listLength - 1))];
	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): dom/event-handler.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */


	const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
	const stripNameRegex = /\..*/;
	const stripUidRegex = /::\d+$/;
	const eventRegistry = {}; // Events storage

	let uidEvent = 1;
	const customEvents = {
	  mouseenter: 'mouseover',
	  mouseleave: 'mouseout'
	};
	const customEventsRegex = /^(mouseenter|mouseleave)/i;
	const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
	/**
	 * ------------------------------------------------------------------------
	 * Private methods
	 * ------------------------------------------------------------------------
	 */

	function getUidEvent(element, uid) {
	  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
	}

	function getEvent(element) {
	  const uid = getUidEvent(element);
	  element.uidEvent = uid;
	  eventRegistry[uid] = eventRegistry[uid] || {};
	  return eventRegistry[uid];
	}

	function bootstrapHandler(element, fn) {
	  return function handler(event) {
	    event.delegateTarget = element;

	    if (handler.oneOff) {
	      EventHandler.off(element, event.type, fn);
	    }

	    return fn.apply(element, [event]);
	  };
	}

	function bootstrapDelegationHandler(element, selector, fn) {
	  return function handler(event) {
	    const domElements = element.querySelectorAll(selector);

	    for (let {
	      target
	    } = event; target && target !== this; target = target.parentNode) {
	      for (let i = domElements.length; i--;) {
	        if (domElements[i] === target) {
	          event.delegateTarget = target;

	          if (handler.oneOff) {
	            EventHandler.off(element, event.type, selector, fn);
	          }

	          return fn.apply(target, [event]);
	        }
	      }
	    } // To please ESLint


	    return null;
	  };
	}

	function findHandler(events, handler, delegationSelector = null) {
	  const uidEventList = Object.keys(events);

	  for (let i = 0, len = uidEventList.length; i < len; i++) {
	    const event = events[uidEventList[i]];

	    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
	      return event;
	    }
	  }

	  return null;
	}

	function normalizeParams(originalTypeEvent, handler, delegationFn) {
	  const delegation = typeof handler === 'string';
	  const originalHandler = delegation ? delegationFn : handler;
	  let typeEvent = getTypeEvent(originalTypeEvent);
	  const isNative = nativeEvents.has(typeEvent);

	  if (!isNative) {
	    typeEvent = originalTypeEvent;
	  }

	  return [delegation, originalHandler, typeEvent];
	}

	function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
	  if (typeof originalTypeEvent !== 'string' || !element) {
	    return;
	  }

	  if (!handler) {
	    handler = delegationFn;
	    delegationFn = null;
	  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
	  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


	  if (customEventsRegex.test(originalTypeEvent)) {
	    const wrapFn = fn => {
	      return function (event) {
	        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
	          return fn.call(this, event);
	        }
	      };
	    };

	    if (delegationFn) {
	      delegationFn = wrapFn(delegationFn);
	    } else {
	      handler = wrapFn(handler);
	    }
	  }

	  const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
	  const events = getEvent(element);
	  const handlers = events[typeEvent] || (events[typeEvent] = {});
	  const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

	  if (previousFn) {
	    previousFn.oneOff = previousFn.oneOff && oneOff;
	    return;
	  }

	  const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
	  const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
	  fn.delegationSelector = delegation ? handler : null;
	  fn.originalHandler = originalHandler;
	  fn.oneOff = oneOff;
	  fn.uidEvent = uid;
	  handlers[uid] = fn;
	  element.addEventListener(typeEvent, fn, delegation);
	}

	function removeHandler(element, events, typeEvent, handler, delegationSelector) {
	  const fn = findHandler(events[typeEvent], handler, delegationSelector);

	  if (!fn) {
	    return;
	  }

	  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
	  delete events[typeEvent][fn.uidEvent];
	}

	function removeNamespacedHandlers(element, events, typeEvent, namespace) {
	  const storeElementEvent = events[typeEvent] || {};
	  Object.keys(storeElementEvent).forEach(handlerKey => {
	    if (handlerKey.includes(namespace)) {
	      const event = storeElementEvent[handlerKey];
	      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
	    }
	  });
	}

	function getTypeEvent(event) {
	  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
	  event = event.replace(stripNameRegex, '');
	  return customEvents[event] || event;
	}

	const EventHandler = {
	  on(element, event, handler, delegationFn) {
	    addHandler(element, event, handler, delegationFn, false);
	  },

	  one(element, event, handler, delegationFn) {
	    addHandler(element, event, handler, delegationFn, true);
	  },

	  off(element, originalTypeEvent, handler, delegationFn) {
	    if (typeof originalTypeEvent !== 'string' || !element) {
	      return;
	    }

	    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
	    const inNamespace = typeEvent !== originalTypeEvent;
	    const events = getEvent(element);
	    const isNamespace = originalTypeEvent.startsWith('.');

	    if (typeof originalHandler !== 'undefined') {
	      // Simplest case: handler is passed, remove that listener ONLY.
	      if (!events || !events[typeEvent]) {
	        return;
	      }

	      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
	      return;
	    }

	    if (isNamespace) {
	      Object.keys(events).forEach(elementEvent => {
	        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
	      });
	    }

	    const storeElementEvent = events[typeEvent] || {};
	    Object.keys(storeElementEvent).forEach(keyHandlers => {
	      const handlerKey = keyHandlers.replace(stripUidRegex, '');

	      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
	        const event = storeElementEvent[keyHandlers];
	        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
	      }
	    });
	  },

	  trigger(element, event, args) {
	    if (typeof event !== 'string' || !element) {
	      return null;
	    }

	    const $ = getjQuery();
	    const typeEvent = getTypeEvent(event);
	    const inNamespace = event !== typeEvent;
	    const isNative = nativeEvents.has(typeEvent);
	    let jQueryEvent;
	    let bubbles = true;
	    let nativeDispatch = true;
	    let defaultPrevented = false;
	    let evt = null;

	    if (inNamespace && $) {
	      jQueryEvent = $.Event(event, args);
	      $(element).trigger(jQueryEvent);
	      bubbles = !jQueryEvent.isPropagationStopped();
	      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
	      defaultPrevented = jQueryEvent.isDefaultPrevented();
	    }

	    if (isNative) {
	      evt = document.createEvent('HTMLEvents');
	      evt.initEvent(typeEvent, bubbles, true);
	    } else {
	      evt = new CustomEvent(event, {
	        bubbles,
	        cancelable: true
	      });
	    } // merge custom information in our event


	    if (typeof args !== 'undefined') {
	      Object.keys(args).forEach(key => {
	        Object.defineProperty(evt, key, {
	          get() {
	            return args[key];
	          }

	        });
	      });
	    }

	    if (defaultPrevented) {
	      evt.preventDefault();
	    }

	    if (nativeDispatch) {
	      element.dispatchEvent(evt);
	    }

	    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
	      jQueryEvent.preventDefault();
	    }

	    return evt;
	  }

	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): dom/data.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const elementMap = new Map();
	const Data = {
	  set(element, key, instance) {
	    if (!elementMap.has(element)) {
	      elementMap.set(element, new Map());
	    }

	    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
	    // can be removed later when multiple key/instances are fine to be used

	    if (!instanceMap.has(key) && instanceMap.size !== 0) {
	      // eslint-disable-next-line no-console
	      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
	      return;
	    }

	    instanceMap.set(key, instance);
	  },

	  get(element, key) {
	    if (elementMap.has(element)) {
	      return elementMap.get(element).get(key) || null;
	    }

	    return null;
	  },

	  remove(element, key) {
	    if (!elementMap.has(element)) {
	      return;
	    }

	    const instanceMap = elementMap.get(element);
	    instanceMap.delete(key); // free up element references if there are no instances left for an element

	    if (instanceMap.size === 0) {
	      elementMap.delete(element);
	    }
	  }

	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): base-component.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const VERSION = '5.1.3';

	class BaseComponent {
	  constructor(element) {
	    element = getElement(element);

	    if (!element) {
	      return;
	    }

	    this._element = element;
	    Data.set(this._element, this.constructor.DATA_KEY, this);
	  }

	  dispose() {
	    Data.remove(this._element, this.constructor.DATA_KEY);
	    EventHandler.off(this._element, this.constructor.EVENT_KEY);
	    Object.getOwnPropertyNames(this).forEach(propertyName => {
	      this[propertyName] = null;
	    });
	  }

	  _queueCallback(callback, element, isAnimated = true) {
	    executeAfterTransition(callback, element, isAnimated);
	  }
	  /** Static */


	  static getInstance(element) {
	    return Data.get(getElement(element), this.DATA_KEY);
	  }

	  static getOrCreateInstance(element, config = {}) {
	    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
	  }

	  static get VERSION() {
	    return VERSION;
	  }

	  static get NAME() {
	    throw new Error('You have to implement the static method "NAME", for each component!');
	  }

	  static get DATA_KEY() {
	    return `bs.${this.NAME}`;
	  }

	  static get EVENT_KEY() {
	    return `.${this.DATA_KEY}`;
	  }

	}
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/component-functions.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	const enableDismissTrigger = (component, method = 'hide') => {
	  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
	  const name = component.NAME;
	  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
	    if (['A', 'AREA'].includes(this.tagName)) {
	      event.preventDefault();
	    }

	    if (isDisabled(this)) {
	      return;
	    }

	    const target = getElementFromSelector(this) || this.closest(`.${name}`);
	    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

	    instance[method]();
	  });
	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): alert.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */


	const NAME$d = 'alert';
	const DATA_KEY$c = 'bs.alert';
	const EVENT_KEY$c = `.${DATA_KEY$c}`;
	const EVENT_CLOSE = `close${EVENT_KEY$c}`;
	const EVENT_CLOSED = `closed${EVENT_KEY$c}`;
	const CLASS_NAME_FADE$5 = 'fade';
	const CLASS_NAME_SHOW$8 = 'show';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Alert extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$d;
	  } // Public


	  close() {
	    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

	    if (closeEvent.defaultPrevented) {
	      return;
	    }

	    this._element.classList.remove(CLASS_NAME_SHOW$8);

	    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

	    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
	  } // Private


	  _destroyElement() {
	    this._element.remove();

	    EventHandler.trigger(this._element, EVENT_CLOSED);
	    this.dispose();
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Alert.getOrCreateInstance(this);

	      if (typeof config !== 'string') {
	        return;
	      }

	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }

	      data[config](this);
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	enableDismissTrigger(Alert, 'close');
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Alert to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Alert);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): button.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$c = 'button';
	const DATA_KEY$b = 'bs.button';
	const EVENT_KEY$b = `.${DATA_KEY$b}`;
	const DATA_API_KEY$7 = '.data-api';
	const CLASS_NAME_ACTIVE$3 = 'active';
	const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
	const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$b}${DATA_API_KEY$7}`;
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Button extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$c;
	  } // Public


	  toggle() {
	    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
	    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Button.getOrCreateInstance(this);

	      if (config === 'toggle') {
	        data[config]();
	      }
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
	  event.preventDefault();
	  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
	  const data = Button.getOrCreateInstance(button);
	  data.toggle();
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Button to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Button);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): dom/manipulator.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	function normalizeData(val) {
	  if (val === 'true') {
	    return true;
	  }

	  if (val === 'false') {
	    return false;
	  }

	  if (val === Number(val).toString()) {
	    return Number(val);
	  }

	  if (val === '' || val === 'null') {
	    return null;
	  }

	  return val;
	}

	function normalizeDataKey(key) {
	  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
	}

	const Manipulator = {
	  setDataAttribute(element, key, value) {
	    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
	  },

	  removeDataAttribute(element, key) {
	    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
	  },

	  getDataAttributes(element) {
	    if (!element) {
	      return {};
	    }

	    const attributes = {};
	    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
	      let pureKey = key.replace(/^bs/, '');
	      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
	      attributes[pureKey] = normalizeData(element.dataset[key]);
	    });
	    return attributes;
	  },

	  getDataAttribute(element, key) {
	    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
	  },

	  offset(element) {
	    const rect = element.getBoundingClientRect();
	    return {
	      top: rect.top + window.pageYOffset,
	      left: rect.left + window.pageXOffset
	    };
	  },

	  position(element) {
	    return {
	      top: element.offsetTop,
	      left: element.offsetLeft
	    };
	  }

	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): dom/selector-engine.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const NODE_TEXT = 3;
	const SelectorEngine = {
	  find(selector, element = document.documentElement) {
	    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
	  },

	  findOne(selector, element = document.documentElement) {
	    return Element.prototype.querySelector.call(element, selector);
	  },

	  children(element, selector) {
	    return [].concat(...element.children).filter(child => child.matches(selector));
	  },

	  parents(element, selector) {
	    const parents = [];
	    let ancestor = element.parentNode;

	    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
	      if (ancestor.matches(selector)) {
	        parents.push(ancestor);
	      }

	      ancestor = ancestor.parentNode;
	    }

	    return parents;
	  },

	  prev(element, selector) {
	    let previous = element.previousElementSibling;

	    while (previous) {
	      if (previous.matches(selector)) {
	        return [previous];
	      }

	      previous = previous.previousElementSibling;
	    }

	    return [];
	  },

	  next(element, selector) {
	    let next = element.nextElementSibling;

	    while (next) {
	      if (next.matches(selector)) {
	        return [next];
	      }

	      next = next.nextElementSibling;
	    }

	    return [];
	  },

	  focusableChildren(element) {
	    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
	    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
	  }

	};
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): carousel.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$b = 'carousel';
	const DATA_KEY$a = 'bs.carousel';
	const EVENT_KEY$a = `.${DATA_KEY$a}`;
	const DATA_API_KEY$6 = '.data-api';
	const ARROW_LEFT_KEY = 'ArrowLeft';
	const ARROW_RIGHT_KEY = 'ArrowRight';
	const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	const SWIPE_THRESHOLD = 40;
	const Default$a = {
	  interval: 5000,
	  keyboard: true,
	  slide: false,
	  pause: 'hover',
	  wrap: true,
	  touch: true
	};
	const DefaultType$a = {
	  interval: '(number|boolean)',
	  keyboard: 'boolean',
	  slide: '(boolean|string)',
	  pause: '(string|boolean)',
	  wrap: 'boolean',
	  touch: 'boolean'
	};
	const ORDER_NEXT = 'next';
	const ORDER_PREV = 'prev';
	const DIRECTION_LEFT = 'left';
	const DIRECTION_RIGHT = 'right';
	const KEY_TO_DIRECTION = {
	  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
	  [ARROW_RIGHT_KEY]: DIRECTION_LEFT
	};
	const EVENT_SLIDE = `slide${EVENT_KEY$a}`;
	const EVENT_SLID = `slid${EVENT_KEY$a}`;
	const EVENT_KEYDOWN = `keydown${EVENT_KEY$a}`;
	const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$a}`;
	const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$a}`;
	const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$a}`;
	const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$a}`;
	const EVENT_TOUCHEND = `touchend${EVENT_KEY$a}`;
	const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$a}`;
	const EVENT_POINTERUP = `pointerup${EVENT_KEY$a}`;
	const EVENT_DRAG_START = `dragstart${EVENT_KEY$a}`;
	const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$a}${DATA_API_KEY$6}`;
	const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
	const CLASS_NAME_CAROUSEL = 'carousel';
	const CLASS_NAME_ACTIVE$2 = 'active';
	const CLASS_NAME_SLIDE = 'slide';
	const CLASS_NAME_END = 'carousel-item-end';
	const CLASS_NAME_START = 'carousel-item-start';
	const CLASS_NAME_NEXT = 'carousel-item-next';
	const CLASS_NAME_PREV = 'carousel-item-prev';
	const CLASS_NAME_POINTER_EVENT = 'pointer-event';
	const SELECTOR_ACTIVE$1 = '.active';
	const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
	const SELECTOR_ITEM = '.carousel-item';
	const SELECTOR_ITEM_IMG = '.carousel-item img';
	const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
	const SELECTOR_INDICATORS = '.carousel-indicators';
	const SELECTOR_INDICATOR = '[data-bs-target]';
	const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
	const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
	const POINTER_TYPE_TOUCH = 'touch';
	const POINTER_TYPE_PEN = 'pen';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Carousel extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._items = null;
	    this._interval = null;
	    this._activeElement = null;
	    this._isPaused = false;
	    this._isSliding = false;
	    this.touchTimeout = null;
	    this.touchStartX = 0;
	    this.touchDeltaX = 0;
	    this._config = this._getConfig(config);
	    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
	    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
	    this._pointerEvent = Boolean(window.PointerEvent);

	    this._addEventListeners();
	  } // Getters


	  static get Default() {
	    return Default$a;
	  }

	  static get NAME() {
	    return NAME$b;
	  } // Public


	  next() {
	    this._slide(ORDER_NEXT);
	  }

	  nextWhenVisible() {
	    // Don't call next when the page isn't visible
	    // or the carousel or its parent isn't visible
	    if (!document.hidden && isVisible(this._element)) {
	      this.next();
	    }
	  }

	  prev() {
	    this._slide(ORDER_PREV);
	  }

	  pause(event) {
	    if (!event) {
	      this._isPaused = true;
	    }

	    if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
	      triggerTransitionEnd(this._element);
	      this.cycle(true);
	    }

	    clearInterval(this._interval);
	    this._interval = null;
	  }

	  cycle(event) {
	    if (!event) {
	      this._isPaused = false;
	    }

	    if (this._interval) {
	      clearInterval(this._interval);
	      this._interval = null;
	    }

	    if (this._config && this._config.interval && !this._isPaused) {
	      this._updateInterval();

	      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
	    }
	  }

	  to(index) {
	    this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

	    const activeIndex = this._getItemIndex(this._activeElement);

	    if (index > this._items.length - 1 || index < 0) {
	      return;
	    }

	    if (this._isSliding) {
	      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
	      return;
	    }

	    if (activeIndex === index) {
	      this.pause();
	      this.cycle();
	      return;
	    }

	    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

	    this._slide(order, this._items[index]);
	  } // Private


	  _getConfig(config) {
	    config = { ...Default$a,
	      ...Manipulator.getDataAttributes(this._element),
	      ...(typeof config === 'object' ? config : {})
	    };
	    typeCheckConfig(NAME$b, config, DefaultType$a);
	    return config;
	  }

	  _handleSwipe() {
	    const absDeltax = Math.abs(this.touchDeltaX);

	    if (absDeltax <= SWIPE_THRESHOLD) {
	      return;
	    }

	    const direction = absDeltax / this.touchDeltaX;
	    this.touchDeltaX = 0;

	    if (!direction) {
	      return;
	    }

	    this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
	  }

	  _addEventListeners() {
	    if (this._config.keyboard) {
	      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
	    }

	    if (this._config.pause === 'hover') {
	      EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
	      EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
	    }

	    if (this._config.touch && this._touchSupported) {
	      this._addTouchEventListeners();
	    }
	  }

	  _addTouchEventListeners() {
	    const hasPointerPenTouch = event => {
	      return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
	    };

	    const start = event => {
	      if (hasPointerPenTouch(event)) {
	        this.touchStartX = event.clientX;
	      } else if (!this._pointerEvent) {
	        this.touchStartX = event.touches[0].clientX;
	      }
	    };

	    const move = event => {
	      // ensure swiping with one touch and not pinching
	      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
	    };

	    const end = event => {
	      if (hasPointerPenTouch(event)) {
	        this.touchDeltaX = event.clientX - this.touchStartX;
	      }

	      this._handleSwipe();

	      if (this._config.pause === 'hover') {
	        // If it's a touch-enabled device, mouseenter/leave are fired as
	        // part of the mouse compatibility events on first tap - the carousel
	        // would stop cycling until user tapped out of it;
	        // here, we listen for touchend, explicitly pause the carousel
	        // (as if it's the second time we tap on it, mouseenter compat event
	        // is NOT fired) and after a timeout (to allow for mouse compatibility
	        // events to fire) we explicitly restart cycling
	        this.pause();

	        if (this.touchTimeout) {
	          clearTimeout(this.touchTimeout);
	        }

	        this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
	      }
	    };

	    SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
	      EventHandler.on(itemImg, EVENT_DRAG_START, event => event.preventDefault());
	    });

	    if (this._pointerEvent) {
	      EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
	      EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

	      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
	    } else {
	      EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
	      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
	      EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
	    }
	  }

	  _keydown(event) {
	    if (/input|textarea/i.test(event.target.tagName)) {
	      return;
	    }

	    const direction = KEY_TO_DIRECTION[event.key];

	    if (direction) {
	      event.preventDefault();

	      this._slide(direction);
	    }
	  }

	  _getItemIndex(element) {
	    this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
	    return this._items.indexOf(element);
	  }

	  _getItemByOrder(order, activeElement) {
	    const isNext = order === ORDER_NEXT;
	    return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
	  }

	  _triggerSlideEvent(relatedTarget, eventDirectionName) {
	    const targetIndex = this._getItemIndex(relatedTarget);

	    const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

	    return EventHandler.trigger(this._element, EVENT_SLIDE, {
	      relatedTarget,
	      direction: eventDirectionName,
	      from: fromIndex,
	      to: targetIndex
	    });
	  }

	  _setActiveIndicatorElement(element) {
	    if (this._indicatorsElement) {
	      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
	      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
	      activeIndicator.removeAttribute('aria-current');
	      const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

	      for (let i = 0; i < indicators.length; i++) {
	        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
	          indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
	          indicators[i].setAttribute('aria-current', 'true');
	          break;
	        }
	      }
	    }
	  }

	  _updateInterval() {
	    const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

	    if (!element) {
	      return;
	    }

	    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

	    if (elementInterval) {
	      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
	      this._config.interval = elementInterval;
	    } else {
	      this._config.interval = this._config.defaultInterval || this._config.interval;
	    }
	  }

	  _slide(directionOrOrder, element) {
	    const order = this._directionToOrder(directionOrOrder);

	    const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

	    const activeElementIndex = this._getItemIndex(activeElement);

	    const nextElement = element || this._getItemByOrder(order, activeElement);

	    const nextElementIndex = this._getItemIndex(nextElement);

	    const isCycling = Boolean(this._interval);
	    const isNext = order === ORDER_NEXT;
	    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
	    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

	    const eventDirectionName = this._orderToDirection(order);

	    if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
	      this._isSliding = false;
	      return;
	    }

	    if (this._isSliding) {
	      return;
	    }

	    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

	    if (slideEvent.defaultPrevented) {
	      return;
	    }

	    if (!activeElement || !nextElement) {
	      // Some weirdness is happening, so we bail
	      return;
	    }

	    this._isSliding = true;

	    if (isCycling) {
	      this.pause();
	    }

	    this._setActiveIndicatorElement(nextElement);

	    this._activeElement = nextElement;

	    const triggerSlidEvent = () => {
	      EventHandler.trigger(this._element, EVENT_SLID, {
	        relatedTarget: nextElement,
	        direction: eventDirectionName,
	        from: activeElementIndex,
	        to: nextElementIndex
	      });
	    };

	    if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
	      nextElement.classList.add(orderClassName);
	      reflow(nextElement);
	      activeElement.classList.add(directionalClassName);
	      nextElement.classList.add(directionalClassName);

	      const completeCallBack = () => {
	        nextElement.classList.remove(directionalClassName, orderClassName);
	        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
	        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
	        this._isSliding = false;
	        setTimeout(triggerSlidEvent, 0);
	      };

	      this._queueCallback(completeCallBack, activeElement, true);
	    } else {
	      activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
	      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
	      this._isSliding = false;
	      triggerSlidEvent();
	    }

	    if (isCycling) {
	      this.cycle();
	    }
	  }

	  _directionToOrder(direction) {
	    if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
	      return direction;
	    }

	    if (isRTL()) {
	      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
	    }

	    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
	  }

	  _orderToDirection(order) {
	    if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
	      return order;
	    }

	    if (isRTL()) {
	      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }

	    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
	  } // Static


	  static carouselInterface(element, config) {
	    const data = Carousel.getOrCreateInstance(element, config);
	    let {
	      _config
	    } = data;

	    if (typeof config === 'object') {
	      _config = { ..._config,
	        ...config
	      };
	    }

	    const action = typeof config === 'string' ? config : _config.slide;

	    if (typeof config === 'number') {
	      data.to(config);
	    } else if (typeof action === 'string') {
	      if (typeof data[action] === 'undefined') {
	        throw new TypeError(`No method named "${action}"`);
	      }

	      data[action]();
	    } else if (_config.interval && _config.ride) {
	      data.pause();
	      data.cycle();
	    }
	  }

	  static jQueryInterface(config) {
	    return this.each(function () {
	      Carousel.carouselInterface(this, config);
	    });
	  }

	  static dataApiClickHandler(event) {
	    const target = getElementFromSelector(this);

	    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
	      return;
	    }

	    const config = { ...Manipulator.getDataAttributes(target),
	      ...Manipulator.getDataAttributes(this)
	    };
	    const slideIndex = this.getAttribute('data-bs-slide-to');

	    if (slideIndex) {
	      config.interval = false;
	    }

	    Carousel.carouselInterface(target, config);

	    if (slideIndex) {
	      Carousel.getInstance(target).to(slideIndex);
	    }

	    event.preventDefault();
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
	EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
	  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

	  for (let i = 0, len = carousels.length; i < len; i++) {
	    Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
	  }
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Carousel to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Carousel);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): collapse.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$a = 'collapse';
	const DATA_KEY$9 = 'bs.collapse';
	const EVENT_KEY$9 = `.${DATA_KEY$9}`;
	const DATA_API_KEY$5 = '.data-api';
	const Default$9 = {
	  toggle: true,
	  parent: null
	};
	const DefaultType$9 = {
	  toggle: 'boolean',
	  parent: '(null|element)'
	};
	const EVENT_SHOW$5 = `show${EVENT_KEY$9}`;
	const EVENT_SHOWN$5 = `shown${EVENT_KEY$9}`;
	const EVENT_HIDE$5 = `hide${EVENT_KEY$9}`;
	const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$9}`;
	const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$9}${DATA_API_KEY$5}`;
	const CLASS_NAME_SHOW$7 = 'show';
	const CLASS_NAME_COLLAPSE = 'collapse';
	const CLASS_NAME_COLLAPSING = 'collapsing';
	const CLASS_NAME_COLLAPSED = 'collapsed';
	const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
	const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
	const WIDTH = 'width';
	const HEIGHT = 'height';
	const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
	const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Collapse extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._isTransitioning = false;
	    this._config = this._getConfig(config);
	    this._triggerArray = [];
	    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

	    for (let i = 0, len = toggleList.length; i < len; i++) {
	      const elem = toggleList[i];
	      const selector = getSelectorFromElement(elem);
	      const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

	      if (selector !== null && filterElement.length) {
	        this._selector = selector;

	        this._triggerArray.push(elem);
	      }
	    }

	    this._initializeChildren();

	    if (!this._config.parent) {
	      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
	    }

	    if (this._config.toggle) {
	      this.toggle();
	    }
	  } // Getters


	  static get Default() {
	    return Default$9;
	  }

	  static get NAME() {
	    return NAME$a;
	  } // Public


	  toggle() {
	    if (this._isShown()) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }

	  show() {
	    if (this._isTransitioning || this._isShown()) {
	      return;
	    }

	    let actives = [];
	    let activesData;

	    if (this._config.parent) {
	      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
	      actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
	    }

	    const container = SelectorEngine.findOne(this._selector);

	    if (actives.length) {
	      const tempActiveData = actives.find(elem => container !== elem);
	      activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

	      if (activesData && activesData._isTransitioning) {
	        return;
	      }
	    }

	    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

	    if (startEvent.defaultPrevented) {
	      return;
	    }

	    actives.forEach(elemActive => {
	      if (container !== elemActive) {
	        Collapse.getOrCreateInstance(elemActive, {
	          toggle: false
	        }).hide();
	      }

	      if (!activesData) {
	        Data.set(elemActive, DATA_KEY$9, null);
	      }
	    });

	    const dimension = this._getDimension();

	    this._element.classList.remove(CLASS_NAME_COLLAPSE);

	    this._element.classList.add(CLASS_NAME_COLLAPSING);

	    this._element.style[dimension] = 0;

	    this._addAriaAndCollapsedClass(this._triggerArray, true);

	    this._isTransitioning = true;

	    const complete = () => {
	      this._isTransitioning = false;

	      this._element.classList.remove(CLASS_NAME_COLLAPSING);

	      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

	      this._element.style[dimension] = '';
	      EventHandler.trigger(this._element, EVENT_SHOWN$5);
	    };

	    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	    const scrollSize = `scroll${capitalizedDimension}`;

	    this._queueCallback(complete, this._element, true);

	    this._element.style[dimension] = `${this._element[scrollSize]}px`;
	  }

	  hide() {
	    if (this._isTransitioning || !this._isShown()) {
	      return;
	    }

	    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

	    if (startEvent.defaultPrevented) {
	      return;
	    }

	    const dimension = this._getDimension();

	    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
	    reflow(this._element);

	    this._element.classList.add(CLASS_NAME_COLLAPSING);

	    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

	    const triggerArrayLength = this._triggerArray.length;

	    for (let i = 0; i < triggerArrayLength; i++) {
	      const trigger = this._triggerArray[i];
	      const elem = getElementFromSelector(trigger);

	      if (elem && !this._isShown(elem)) {
	        this._addAriaAndCollapsedClass([trigger], false);
	      }
	    }

	    this._isTransitioning = true;

	    const complete = () => {
	      this._isTransitioning = false;

	      this._element.classList.remove(CLASS_NAME_COLLAPSING);

	      this._element.classList.add(CLASS_NAME_COLLAPSE);

	      EventHandler.trigger(this._element, EVENT_HIDDEN$5);
	    };

	    this._element.style[dimension] = '';

	    this._queueCallback(complete, this._element, true);
	  }

	  _isShown(element = this._element) {
	    return element.classList.contains(CLASS_NAME_SHOW$7);
	  } // Private


	  _getConfig(config) {
	    config = { ...Default$9,
	      ...Manipulator.getDataAttributes(this._element),
	      ...config
	    };
	    config.toggle = Boolean(config.toggle); // Coerce string values

	    config.parent = getElement(config.parent);
	    typeCheckConfig(NAME$a, config, DefaultType$9);
	    return config;
	  }

	  _getDimension() {
	    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
	  }

	  _initializeChildren() {
	    if (!this._config.parent) {
	      return;
	    }

	    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
	    SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
	      const selected = getElementFromSelector(element);

	      if (selected) {
	        this._addAriaAndCollapsedClass([element], this._isShown(selected));
	      }
	    });
	  }

	  _addAriaAndCollapsedClass(triggerArray, isOpen) {
	    if (!triggerArray.length) {
	      return;
	    }

	    triggerArray.forEach(elem => {
	      if (isOpen) {
	        elem.classList.remove(CLASS_NAME_COLLAPSED);
	      } else {
	        elem.classList.add(CLASS_NAME_COLLAPSED);
	      }

	      elem.setAttribute('aria-expanded', isOpen);
	    });
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const _config = {};

	      if (typeof config === 'string' && /show|hide/.test(config)) {
	        _config.toggle = false;
	      }

	      const data = Collapse.getOrCreateInstance(this, _config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }

	        data[config]();
	      }
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
	  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
	    event.preventDefault();
	  }

	  const selector = getSelectorFromElement(this);
	  const selectorElements = SelectorEngine.find(selector);
	  selectorElements.forEach(element => {
	    Collapse.getOrCreateInstance(element, {
	      toggle: false
	    }).toggle();
	  });
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Collapse to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Collapse);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): dropdown.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$9 = 'dropdown';
	const DATA_KEY$8 = 'bs.dropdown';
	const EVENT_KEY$8 = `.${DATA_KEY$8}`;
	const DATA_API_KEY$4 = '.data-api';
	const ESCAPE_KEY$2 = 'Escape';
	const SPACE_KEY = 'Space';
	const TAB_KEY$1 = 'Tab';
	const ARROW_UP_KEY = 'ArrowUp';
	const ARROW_DOWN_KEY = 'ArrowDown';
	const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

	const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
	const EVENT_HIDE$4 = `hide${EVENT_KEY$8}`;
	const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$8}`;
	const EVENT_SHOW$4 = `show${EVENT_KEY$8}`;
	const EVENT_SHOWN$4 = `shown${EVENT_KEY$8}`;
	const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$8}${DATA_API_KEY$4}`;
	const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$8}${DATA_API_KEY$4}`;
	const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$8}${DATA_API_KEY$4}`;
	const CLASS_NAME_SHOW$6 = 'show';
	const CLASS_NAME_DROPUP = 'dropup';
	const CLASS_NAME_DROPEND = 'dropend';
	const CLASS_NAME_DROPSTART = 'dropstart';
	const CLASS_NAME_NAVBAR = 'navbar';
	const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
	const SELECTOR_MENU = '.dropdown-menu';
	const SELECTOR_NAVBAR_NAV = '.navbar-nav';
	const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
	const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
	const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
	const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
	const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
	const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
	const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
	const Default$8 = {
	  offset: [0, 2],
	  boundary: 'clippingParents',
	  reference: 'toggle',
	  display: 'dynamic',
	  popperConfig: null,
	  autoClose: true
	};
	const DefaultType$8 = {
	  offset: '(array|string|function)',
	  boundary: '(string|element)',
	  reference: '(string|element|object)',
	  display: 'string',
	  popperConfig: '(null|object|function)',
	  autoClose: '(boolean|string)'
	};
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Dropdown extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._popper = null;
	    this._config = this._getConfig(config);
	    this._menu = this._getMenuElement();
	    this._inNavbar = this._detectNavbar();
	  } // Getters


	  static get Default() {
	    return Default$8;
	  }

	  static get DefaultType() {
	    return DefaultType$8;
	  }

	  static get NAME() {
	    return NAME$9;
	  } // Public


	  toggle() {
	    return this._isShown() ? this.hide() : this.show();
	  }

	  show() {
	    if (isDisabled(this._element) || this._isShown(this._menu)) {
	      return;
	    }

	    const relatedTarget = {
	      relatedTarget: this._element
	    };
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

	    if (showEvent.defaultPrevented) {
	      return;
	    }

	    const parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

	    if (this._inNavbar) {
	      Manipulator.setDataAttribute(this._menu, 'popper', 'none');
	    } else {
	      this._createPopper(parent);
	    } // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


	    if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
	      [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
	    }

	    this._element.focus();

	    this._element.setAttribute('aria-expanded', true);

	    this._menu.classList.add(CLASS_NAME_SHOW$6);

	    this._element.classList.add(CLASS_NAME_SHOW$6);

	    EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
	  }

	  hide() {
	    if (isDisabled(this._element) || !this._isShown(this._menu)) {
	      return;
	    }

	    const relatedTarget = {
	      relatedTarget: this._element
	    };

	    this._completeHide(relatedTarget);
	  }

	  dispose() {
	    if (this._popper) {
	      this._popper.destroy();
	    }

	    super.dispose();
	  }

	  update() {
	    this._inNavbar = this._detectNavbar();

	    if (this._popper) {
	      this._popper.update();
	    }
	  } // Private


	  _completeHide(relatedTarget) {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

	    if (hideEvent.defaultPrevented) {
	      return;
	    } // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support


	    if ('ontouchstart' in document.documentElement) {
	      [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
	    }

	    if (this._popper) {
	      this._popper.destroy();
	    }

	    this._menu.classList.remove(CLASS_NAME_SHOW$6);

	    this._element.classList.remove(CLASS_NAME_SHOW$6);

	    this._element.setAttribute('aria-expanded', 'false');

	    Manipulator.removeDataAttribute(this._menu, 'popper');
	    EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
	  }

	  _getConfig(config) {
	    config = { ...this.constructor.Default,
	      ...Manipulator.getDataAttributes(this._element),
	      ...config
	    };
	    typeCheckConfig(NAME$9, config, this.constructor.DefaultType);

	    if (typeof config.reference === 'object' && !isElement$1(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
	      // Popper virtual elements require a getBoundingClientRect method
	      throw new TypeError(`${NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
	    }

	    return config;
	  }

	  _createPopper(parent) {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
	    }

	    let referenceElement = this._element;

	    if (this._config.reference === 'parent') {
	      referenceElement = parent;
	    } else if (isElement$1(this._config.reference)) {
	      referenceElement = getElement(this._config.reference);
	    } else if (typeof this._config.reference === 'object') {
	      referenceElement = this._config.reference;
	    }

	    const popperConfig = this._getPopperConfig();

	    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
	    this._popper = createPopper$2(referenceElement, this._menu, popperConfig);

	    if (isDisplayStatic) {
	      Manipulator.setDataAttribute(this._menu, 'popper', 'static');
	    }
	  }

	  _isShown(element = this._element) {
	    return element.classList.contains(CLASS_NAME_SHOW$6);
	  }

	  _getMenuElement() {
	    return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
	  }

	  _getPlacement() {
	    const parentDropdown = this._element.parentNode;

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
	      return PLACEMENT_RIGHT;
	    }

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
	      return PLACEMENT_LEFT;
	    } // We need to trim the value because custom properties can also include spaces


	    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

	    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
	      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
	    }

	    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
	  }

	  _detectNavbar() {
	    return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
	  }

	  _getOffset() {
	    const {
	      offset
	    } = this._config;

	    if (typeof offset === 'string') {
	      return offset.split(',').map(val => Number.parseInt(val, 10));
	    }

	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element);
	    }

	    return offset;
	  }

	  _getPopperConfig() {
	    const defaultBsPopperConfig = {
	      placement: this._getPlacement(),
	      modifiers: [{
	        name: 'preventOverflow',
	        options: {
	          boundary: this._config.boundary
	        }
	      }, {
	        name: 'offset',
	        options: {
	          offset: this._getOffset()
	        }
	      }]
	    }; // Disable Popper if we have a static display

	    if (this._config.display === 'static') {
	      defaultBsPopperConfig.modifiers = [{
	        name: 'applyStyles',
	        enabled: false
	      }];
	    }

	    return { ...defaultBsPopperConfig,
	      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
	    };
	  }

	  _selectMenuItem({
	    key,
	    target
	  }) {
	    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

	    if (!items.length) {
	      return;
	    } // if target isn't included in items (e.g. when expanding the dropdown)
	    // allow cycling to get the last item in case key equals ARROW_UP_KEY


	    getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Dropdown.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return;
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }

	      data[config]();
	    });
	  }

	  static clearMenus(event) {
	    if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) {
	      return;
	    }

	    const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

	    for (let i = 0, len = toggles.length; i < len; i++) {
	      const context = Dropdown.getInstance(toggles[i]);

	      if (!context || context._config.autoClose === false) {
	        continue;
	      }

	      if (!context._isShown()) {
	        continue;
	      }

	      const relatedTarget = {
	        relatedTarget: context._element
	      };

	      if (event) {
	        const composedPath = event.composedPath();
	        const isMenuTarget = composedPath.includes(context._menu);

	        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
	          continue;
	        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


	        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
	          continue;
	        }

	        if (event.type === 'click') {
	          relatedTarget.clickEvent = event;
	        }
	      }

	      context._completeHide(relatedTarget);
	    }
	  }

	  static getParentFromElement(element) {
	    return getElementFromSelector(element) || element.parentNode;
	  }

	  static dataApiKeydownHandler(event) {
	    // If not input/textarea:
	    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
	    // If input/textarea:
	    //  - If space key => not a dropdown command
	    //  - If key is other than escape
	    //    - If key is not up or down => not a dropdown command
	    //    - If trigger inside the menu => not a dropdown command
	    if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
	      return;
	    }

	    const isActive = this.classList.contains(CLASS_NAME_SHOW$6);

	    if (!isActive && event.key === ESCAPE_KEY$2) {
	      return;
	    }

	    event.preventDefault();
	    event.stopPropagation();

	    if (isDisabled(this)) {
	      return;
	    }

	    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
	    const instance = Dropdown.getOrCreateInstance(getToggleButton);

	    if (event.key === ESCAPE_KEY$2) {
	      instance.hide();
	      return;
	    }

	    if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
	      if (!isActive) {
	        instance.show();
	      }

	      instance._selectMenuItem(event);

	      return;
	    }

	    if (!isActive || event.key === SPACE_KEY) {
	      Dropdown.clearMenus();
	    }
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
	EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
	  event.preventDefault();
	  Dropdown.getOrCreateInstance(this).toggle();
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Dropdown to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Dropdown);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/scrollBar.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
	const SELECTOR_STICKY_CONTENT = '.sticky-top';

	class ScrollBarHelper {
	  constructor() {
	    this._element = document.body;
	  }

	  getWidth() {
	    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
	    const documentWidth = document.documentElement.clientWidth;
	    return Math.abs(window.innerWidth - documentWidth);
	  }

	  hide() {
	    const width = this.getWidth();

	    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


	    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


	    this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

	    this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
	  }

	  _disableOverFlow() {
	    this._saveInitialAttribute(this._element, 'overflow');

	    this._element.style.overflow = 'hidden';
	  }

	  _setElementAttributes(selector, styleProp, callback) {
	    const scrollbarWidth = this.getWidth();

	    const manipulationCallBack = element => {
	      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
	        return;
	      }

	      this._saveInitialAttribute(element, styleProp);

	      const calculatedValue = window.getComputedStyle(element)[styleProp];
	      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
	    };

	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }

	  reset() {
	    this._resetElementAttributes(this._element, 'overflow');

	    this._resetElementAttributes(this._element, 'paddingRight');

	    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

	    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
	  }

	  _saveInitialAttribute(element, styleProp) {
	    const actualValue = element.style[styleProp];

	    if (actualValue) {
	      Manipulator.setDataAttribute(element, styleProp, actualValue);
	    }
	  }

	  _resetElementAttributes(selector, styleProp) {
	    const manipulationCallBack = element => {
	      const value = Manipulator.getDataAttribute(element, styleProp);

	      if (typeof value === 'undefined') {
	        element.style.removeProperty(styleProp);
	      } else {
	        Manipulator.removeDataAttribute(element, styleProp);
	        element.style[styleProp] = value;
	      }
	    };

	    this._applyManipulationCallback(selector, manipulationCallBack);
	  }

	  _applyManipulationCallback(selector, callBack) {
	    if (isElement$1(selector)) {
	      callBack(selector);
	    } else {
	      SelectorEngine.find(selector, this._element).forEach(callBack);
	    }
	  }

	  isOverflowing() {
	    return this.getWidth() > 0;
	  }

	}
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/backdrop.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	const Default$7 = {
	  className: 'modal-backdrop',
	  isVisible: true,
	  // if false, we use the backdrop helper without adding any element to the dom
	  isAnimated: false,
	  rootElement: 'body',
	  // give the choice to place backdrop under different elements
	  clickCallback: null
	};
	const DefaultType$7 = {
	  className: 'string',
	  isVisible: 'boolean',
	  isAnimated: 'boolean',
	  rootElement: '(element|string)',
	  clickCallback: '(function|null)'
	};
	const NAME$8 = 'backdrop';
	const CLASS_NAME_FADE$4 = 'fade';
	const CLASS_NAME_SHOW$5 = 'show';
	const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$8}`;

	class Backdrop {
	  constructor(config) {
	    this._config = this._getConfig(config);
	    this._isAppended = false;
	    this._element = null;
	  }

	  show(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return;
	    }

	    this._append();

	    if (this._config.isAnimated) {
	      reflow(this._getElement());
	    }

	    this._getElement().classList.add(CLASS_NAME_SHOW$5);

	    this._emulateAnimation(() => {
	      execute(callback);
	    });
	  }

	  hide(callback) {
	    if (!this._config.isVisible) {
	      execute(callback);
	      return;
	    }

	    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

	    this._emulateAnimation(() => {
	      this.dispose();
	      execute(callback);
	    });
	  } // Private


	  _getElement() {
	    if (!this._element) {
	      const backdrop = document.createElement('div');
	      backdrop.className = this._config.className;

	      if (this._config.isAnimated) {
	        backdrop.classList.add(CLASS_NAME_FADE$4);
	      }

	      this._element = backdrop;
	    }

	    return this._element;
	  }

	  _getConfig(config) {
	    config = { ...Default$7,
	      ...(typeof config === 'object' ? config : {})
	    }; // use getElement() with the default "body" to get a fresh Element on each instantiation

	    config.rootElement = getElement(config.rootElement);
	    typeCheckConfig(NAME$8, config, DefaultType$7);
	    return config;
	  }

	  _append() {
	    if (this._isAppended) {
	      return;
	    }

	    this._config.rootElement.append(this._getElement());

	    EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
	      execute(this._config.clickCallback);
	    });
	    this._isAppended = true;
	  }

	  dispose() {
	    if (!this._isAppended) {
	      return;
	    }

	    EventHandler.off(this._element, EVENT_MOUSEDOWN);

	    this._element.remove();

	    this._isAppended = false;
	  }

	  _emulateAnimation(callback) {
	    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
	  }

	}
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/focustrap.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */


	const Default$6 = {
	  trapElement: null,
	  // The element to trap focus inside of
	  autofocus: true
	};
	const DefaultType$6 = {
	  trapElement: 'element',
	  autofocus: 'boolean'
	};
	const NAME$7 = 'focustrap';
	const DATA_KEY$7 = 'bs.focustrap';
	const EVENT_KEY$7 = `.${DATA_KEY$7}`;
	const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$7}`;
	const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$7}`;
	const TAB_KEY = 'Tab';
	const TAB_NAV_FORWARD = 'forward';
	const TAB_NAV_BACKWARD = 'backward';

	class FocusTrap {
	  constructor(config) {
	    this._config = this._getConfig(config);
	    this._isActive = false;
	    this._lastTabNavDirection = null;
	  }

	  activate() {
	    const {
	      trapElement,
	      autofocus
	    } = this._config;

	    if (this._isActive) {
	      return;
	    }

	    if (autofocus) {
	      trapElement.focus();
	    }

	    EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop

	    EventHandler.on(document, EVENT_FOCUSIN$1, event => this._handleFocusin(event));
	    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
	    this._isActive = true;
	  }

	  deactivate() {
	    if (!this._isActive) {
	      return;
	    }

	    this._isActive = false;
	    EventHandler.off(document, EVENT_KEY$7);
	  } // Private


	  _handleFocusin(event) {
	    const {
	      target
	    } = event;
	    const {
	      trapElement
	    } = this._config;

	    if (target === document || target === trapElement || trapElement.contains(target)) {
	      return;
	    }

	    const elements = SelectorEngine.focusableChildren(trapElement);

	    if (elements.length === 0) {
	      trapElement.focus();
	    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
	      elements[elements.length - 1].focus();
	    } else {
	      elements[0].focus();
	    }
	  }

	  _handleKeydown(event) {
	    if (event.key !== TAB_KEY) {
	      return;
	    }

	    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
	  }

	  _getConfig(config) {
	    config = { ...Default$6,
	      ...(typeof config === 'object' ? config : {})
	    };
	    typeCheckConfig(NAME$7, config, DefaultType$6);
	    return config;
	  }

	}
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): modal.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */


	const NAME$6 = 'modal';
	const DATA_KEY$6 = 'bs.modal';
	const EVENT_KEY$6 = `.${DATA_KEY$6}`;
	const DATA_API_KEY$3 = '.data-api';
	const ESCAPE_KEY$1 = 'Escape';
	const Default$5 = {
	  backdrop: true,
	  keyboard: true,
	  focus: true
	};
	const DefaultType$5 = {
	  backdrop: '(boolean|string)',
	  keyboard: 'boolean',
	  focus: 'boolean'
	};
	const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
	const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
	const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
	const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
	const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
	const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
	const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$6}`;
	const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
	const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
	const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
	const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
	const CLASS_NAME_OPEN = 'modal-open';
	const CLASS_NAME_FADE$3 = 'fade';
	const CLASS_NAME_SHOW$4 = 'show';
	const CLASS_NAME_STATIC = 'modal-static';
	const OPEN_SELECTOR$1 = '.modal.show';
	const SELECTOR_DIALOG = '.modal-dialog';
	const SELECTOR_MODAL_BODY = '.modal-body';
	const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Modal extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._config = this._getConfig(config);
	    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();
	    this._isShown = false;
	    this._ignoreBackdropClick = false;
	    this._isTransitioning = false;
	    this._scrollBar = new ScrollBarHelper();
	  } // Getters


	  static get Default() {
	    return Default$5;
	  }

	  static get NAME() {
	    return NAME$6;
	  } // Public


	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget);
	  }

	  show(relatedTarget) {
	    if (this._isShown || this._isTransitioning) {
	      return;
	    }

	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
	      relatedTarget
	    });

	    if (showEvent.defaultPrevented) {
	      return;
	    }

	    this._isShown = true;

	    if (this._isAnimated()) {
	      this._isTransitioning = true;
	    }

	    this._scrollBar.hide();

	    document.body.classList.add(CLASS_NAME_OPEN);

	    this._adjustDialog();

	    this._setEscapeEvent();

	    this._setResizeEvent();

	    EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
	      EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
	        if (event.target === this._element) {
	          this._ignoreBackdropClick = true;
	        }
	      });
	    });

	    this._showBackdrop(() => this._showElement(relatedTarget));
	  }

	  hide() {
	    if (!this._isShown || this._isTransitioning) {
	      return;
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    this._isShown = false;

	    const isAnimated = this._isAnimated();

	    if (isAnimated) {
	      this._isTransitioning = true;
	    }

	    this._setEscapeEvent();

	    this._setResizeEvent();

	    this._focustrap.deactivate();

	    this._element.classList.remove(CLASS_NAME_SHOW$4);

	    EventHandler.off(this._element, EVENT_CLICK_DISMISS);
	    EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

	    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
	  }

	  dispose() {
	    [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

	    this._backdrop.dispose();

	    this._focustrap.deactivate();

	    super.dispose();
	  }

	  handleUpdate() {
	    this._adjustDialog();
	  } // Private


	  _initializeBackDrop() {
	    return new Backdrop({
	      isVisible: Boolean(this._config.backdrop),
	      // 'static' option will be translated to true, and booleans will keep their value
	      isAnimated: this._isAnimated()
	    });
	  }

	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    });
	  }

	  _getConfig(config) {
	    config = { ...Default$5,
	      ...Manipulator.getDataAttributes(this._element),
	      ...(typeof config === 'object' ? config : {})
	    };
	    typeCheckConfig(NAME$6, config, DefaultType$5);
	    return config;
	  }

	  _showElement(relatedTarget) {
	    const isAnimated = this._isAnimated();

	    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

	    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	      // Don't move modal's DOM position
	      document.body.append(this._element);
	    }

	    this._element.style.display = 'block';

	    this._element.removeAttribute('aria-hidden');

	    this._element.setAttribute('aria-modal', true);

	    this._element.setAttribute('role', 'dialog');

	    this._element.scrollTop = 0;

	    if (modalBody) {
	      modalBody.scrollTop = 0;
	    }

	    if (isAnimated) {
	      reflow(this._element);
	    }

	    this._element.classList.add(CLASS_NAME_SHOW$4);

	    const transitionComplete = () => {
	      if (this._config.focus) {
	        this._focustrap.activate();
	      }

	      this._isTransitioning = false;
	      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
	        relatedTarget
	      });
	    };

	    this._queueCallback(transitionComplete, this._dialog, isAnimated);
	  }

	  _setEscapeEvent() {
	    if (this._isShown) {
	      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
	        if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
	          event.preventDefault();
	          this.hide();
	        } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
	          this._triggerBackdropTransition();
	        }
	      });
	    } else {
	      EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
	    }
	  }

	  _setResizeEvent() {
	    if (this._isShown) {
	      EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
	    } else {
	      EventHandler.off(window, EVENT_RESIZE);
	    }
	  }

	  _hideModal() {
	    this._element.style.display = 'none';

	    this._element.setAttribute('aria-hidden', true);

	    this._element.removeAttribute('aria-modal');

	    this._element.removeAttribute('role');

	    this._isTransitioning = false;

	    this._backdrop.hide(() => {
	      document.body.classList.remove(CLASS_NAME_OPEN);

	      this._resetAdjustments();

	      this._scrollBar.reset();

	      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
	    });
	  }

	  _showBackdrop(callback) {
	    EventHandler.on(this._element, EVENT_CLICK_DISMISS, event => {
	      if (this._ignoreBackdropClick) {
	        this._ignoreBackdropClick = false;
	        return;
	      }

	      if (event.target !== event.currentTarget) {
	        return;
	      }

	      if (this._config.backdrop === true) {
	        this.hide();
	      } else if (this._config.backdrop === 'static') {
	        this._triggerBackdropTransition();
	      }
	    });

	    this._backdrop.show(callback);
	  }

	  _isAnimated() {
	    return this._element.classList.contains(CLASS_NAME_FADE$3);
	  }

	  _triggerBackdropTransition() {
	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    const {
	      classList,
	      scrollHeight,
	      style
	    } = this._element;
	    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

	    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
	      return;
	    }

	    if (!isModalOverflowing) {
	      style.overflowY = 'hidden';
	    }

	    classList.add(CLASS_NAME_STATIC);

	    this._queueCallback(() => {
	      classList.remove(CLASS_NAME_STATIC);

	      if (!isModalOverflowing) {
	        this._queueCallback(() => {
	          style.overflowY = '';
	        }, this._dialog);
	      }
	    }, this._dialog);

	    this._element.focus();
	  } // ----------------------------------------------------------------------
	  // the following methods are used to handle overflowing modals
	  // ----------------------------------------------------------------------


	  _adjustDialog() {
	    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	    const scrollbarWidth = this._scrollBar.getWidth();

	    const isBodyOverflowing = scrollbarWidth > 0;

	    if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
	      this._element.style.paddingLeft = `${scrollbarWidth}px`;
	    }

	    if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
	      this._element.style.paddingRight = `${scrollbarWidth}px`;
	    }
	  }

	  _resetAdjustments() {
	    this._element.style.paddingLeft = '';
	    this._element.style.paddingRight = '';
	  } // Static


	  static jQueryInterface(config, relatedTarget) {
	    return this.each(function () {
	      const data = Modal.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return;
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }

	      data[config](relatedTarget);
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
	  const target = getElementFromSelector(this);

	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  EventHandler.one(target, EVENT_SHOW$3, showEvent => {
	    if (showEvent.defaultPrevented) {
	      // only register focus restorer if modal will actually get shown
	      return;
	    }

	    EventHandler.one(target, EVENT_HIDDEN$3, () => {
	      if (isVisible(this)) {
	        this.focus();
	      }
	    });
	  }); // avoid conflict when clicking moddal toggler while another one is open

	  const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

	  if (allReadyOpen) {
	    Modal.getInstance(allReadyOpen).hide();
	  }

	  const data = Modal.getOrCreateInstance(target);
	  data.toggle(this);
	});
	enableDismissTrigger(Modal);
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Modal to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Modal);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): offcanvas.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$5 = 'offcanvas';
	const DATA_KEY$5 = 'bs.offcanvas';
	const EVENT_KEY$5 = `.${DATA_KEY$5}`;
	const DATA_API_KEY$2 = '.data-api';
	const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
	const ESCAPE_KEY = 'Escape';
	const Default$4 = {
	  backdrop: true,
	  keyboard: true,
	  scroll: false
	};
	const DefaultType$4 = {
	  backdrop: 'boolean',
	  keyboard: 'boolean',
	  scroll: 'boolean'
	};
	const CLASS_NAME_SHOW$3 = 'show';
	const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
	const OPEN_SELECTOR = '.offcanvas.show';
	const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
	const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
	const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
	const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
	const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
	const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
	const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Offcanvas extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._config = this._getConfig(config);
	    this._isShown = false;
	    this._backdrop = this._initializeBackDrop();
	    this._focustrap = this._initializeFocusTrap();

	    this._addEventListeners();
	  } // Getters


	  static get NAME() {
	    return NAME$5;
	  }

	  static get Default() {
	    return Default$4;
	  } // Public


	  toggle(relatedTarget) {
	    return this._isShown ? this.hide() : this.show(relatedTarget);
	  }

	  show(relatedTarget) {
	    if (this._isShown) {
	      return;
	    }

	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
	      relatedTarget
	    });

	    if (showEvent.defaultPrevented) {
	      return;
	    }

	    this._isShown = true;
	    this._element.style.visibility = 'visible';

	    this._backdrop.show();

	    if (!this._config.scroll) {
	      new ScrollBarHelper().hide();
	    }

	    this._element.removeAttribute('aria-hidden');

	    this._element.setAttribute('aria-modal', true);

	    this._element.setAttribute('role', 'dialog');

	    this._element.classList.add(CLASS_NAME_SHOW$3);

	    const completeCallBack = () => {
	      if (!this._config.scroll) {
	        this._focustrap.activate();
	      }

	      EventHandler.trigger(this._element, EVENT_SHOWN$2, {
	        relatedTarget
	      });
	    };

	    this._queueCallback(completeCallBack, this._element, true);
	  }

	  hide() {
	    if (!this._isShown) {
	      return;
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    this._focustrap.deactivate();

	    this._element.blur();

	    this._isShown = false;

	    this._element.classList.remove(CLASS_NAME_SHOW$3);

	    this._backdrop.hide();

	    const completeCallback = () => {
	      this._element.setAttribute('aria-hidden', true);

	      this._element.removeAttribute('aria-modal');

	      this._element.removeAttribute('role');

	      this._element.style.visibility = 'hidden';

	      if (!this._config.scroll) {
	        new ScrollBarHelper().reset();
	      }

	      EventHandler.trigger(this._element, EVENT_HIDDEN$2);
	    };

	    this._queueCallback(completeCallback, this._element, true);
	  }

	  dispose() {
	    this._backdrop.dispose();

	    this._focustrap.deactivate();

	    super.dispose();
	  } // Private


	  _getConfig(config) {
	    config = { ...Default$4,
	      ...Manipulator.getDataAttributes(this._element),
	      ...(typeof config === 'object' ? config : {})
	    };
	    typeCheckConfig(NAME$5, config, DefaultType$4);
	    return config;
	  }

	  _initializeBackDrop() {
	    return new Backdrop({
	      className: CLASS_NAME_BACKDROP,
	      isVisible: this._config.backdrop,
	      isAnimated: true,
	      rootElement: this._element.parentNode,
	      clickCallback: () => this.hide()
	    });
	  }

	  _initializeFocusTrap() {
	    return new FocusTrap({
	      trapElement: this._element
	    });
	  }

	  _addEventListeners() {
	    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
	      if (this._config.keyboard && event.key === ESCAPE_KEY) {
	        this.hide();
	      }
	    });
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Offcanvas.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return;
	      }

	      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
	        throw new TypeError(`No method named "${config}"`);
	      }

	      data[config](this);
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
	  const target = getElementFromSelector(this);

	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  if (isDisabled(this)) {
	    return;
	  }

	  EventHandler.one(target, EVENT_HIDDEN$2, () => {
	    // focus on trigger when it is closed
	    if (isVisible(this)) {
	      this.focus();
	    }
	  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

	  const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

	  if (allReadyOpen && allReadyOpen !== target) {
	    Offcanvas.getInstance(allReadyOpen).hide();
	  }

	  const data = Offcanvas.getOrCreateInstance(target);
	  data.toggle(this);
	});
	EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => SelectorEngine.find(OPEN_SELECTOR).forEach(el => Offcanvas.getOrCreateInstance(el).show()));
	enableDismissTrigger(Offcanvas);
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 */

	defineJQueryPlugin(Offcanvas);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): util/sanitizer.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
	const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
	/**
	 * A pattern that recognizes a commonly useful subset of URLs that are safe.
	 *
	 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
	 */

	const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
	/**
	 * A pattern that matches safe data URLs. Only matches image, video and audio types.
	 *
	 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
	 */

	const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

	const allowedAttribute = (attribute, allowedAttributeList) => {
	  const attributeName = attribute.nodeName.toLowerCase();

	  if (allowedAttributeList.includes(attributeName)) {
	    if (uriAttributes.has(attributeName)) {
	      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
	    }

	    return true;
	  }

	  const regExp = allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp); // Check if a regular expression validates the attribute.

	  for (let i = 0, len = regExp.length; i < len; i++) {
	    if (regExp[i].test(attributeName)) {
	      return true;
	    }
	  }

	  return false;
	};

	const DefaultAllowlist = {
	  // Global attributes allowed on any supplied element below.
	  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
	  a: ['target', 'href', 'title', 'rel'],
	  area: [],
	  b: [],
	  br: [],
	  col: [],
	  code: [],
	  div: [],
	  em: [],
	  hr: [],
	  h1: [],
	  h2: [],
	  h3: [],
	  h4: [],
	  h5: [],
	  h6: [],
	  i: [],
	  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
	  li: [],
	  ol: [],
	  p: [],
	  pre: [],
	  s: [],
	  small: [],
	  span: [],
	  sub: [],
	  sup: [],
	  strong: [],
	  u: [],
	  ul: []
	};

	function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
	  if (!unsafeHtml.length) {
	    return unsafeHtml;
	  }

	  if (sanitizeFn && typeof sanitizeFn === 'function') {
	    return sanitizeFn(unsafeHtml);
	  }

	  const domParser = new window.DOMParser();
	  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
	  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

	  for (let i = 0, len = elements.length; i < len; i++) {
	    const element = elements[i];
	    const elementName = element.nodeName.toLowerCase();

	    if (!Object.keys(allowList).includes(elementName)) {
	      element.remove();
	      continue;
	    }

	    const attributeList = [].concat(...element.attributes);
	    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
	    attributeList.forEach(attribute => {
	      if (!allowedAttribute(attribute, allowedAttributes)) {
	        element.removeAttribute(attribute.nodeName);
	      }
	    });
	  }

	  return createdDocument.body.innerHTML;
	}
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): tooltip.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */


	const NAME$4 = 'tooltip';
	const DATA_KEY$4 = 'bs.tooltip';
	const EVENT_KEY$4 = `.${DATA_KEY$4}`;
	const CLASS_PREFIX$1 = 'bs-tooltip';
	const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
	const DefaultType$3 = {
	  animation: 'boolean',
	  template: 'string',
	  title: '(string|element|function)',
	  trigger: 'string',
	  delay: '(number|object)',
	  html: 'boolean',
	  selector: '(string|boolean)',
	  placement: '(string|function)',
	  offset: '(array|string|function)',
	  container: '(string|element|boolean)',
	  fallbackPlacements: 'array',
	  boundary: '(string|element)',
	  customClass: '(string|function)',
	  sanitize: 'boolean',
	  sanitizeFn: '(null|function)',
	  allowList: 'object',
	  popperConfig: '(null|object|function)'
	};
	const AttachmentMap = {
	  AUTO: 'auto',
	  TOP: 'top',
	  RIGHT: isRTL() ? 'left' : 'right',
	  BOTTOM: 'bottom',
	  LEFT: isRTL() ? 'right' : 'left'
	};
	const Default$3 = {
	  animation: true,
	  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
	  trigger: 'hover focus',
	  title: '',
	  delay: 0,
	  html: false,
	  selector: false,
	  placement: 'top',
	  offset: [0, 0],
	  container: false,
	  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
	  boundary: 'clippingParents',
	  customClass: '',
	  sanitize: true,
	  sanitizeFn: null,
	  allowList: DefaultAllowlist,
	  popperConfig: null
	};
	const Event$2 = {
	  HIDE: `hide${EVENT_KEY$4}`,
	  HIDDEN: `hidden${EVENT_KEY$4}`,
	  SHOW: `show${EVENT_KEY$4}`,
	  SHOWN: `shown${EVENT_KEY$4}`,
	  INSERTED: `inserted${EVENT_KEY$4}`,
	  CLICK: `click${EVENT_KEY$4}`,
	  FOCUSIN: `focusin${EVENT_KEY$4}`,
	  FOCUSOUT: `focusout${EVENT_KEY$4}`,
	  MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
	  MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
	};
	const CLASS_NAME_FADE$2 = 'fade';
	const CLASS_NAME_MODAL = 'modal';
	const CLASS_NAME_SHOW$2 = 'show';
	const HOVER_STATE_SHOW = 'show';
	const HOVER_STATE_OUT = 'out';
	const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
	const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
	const EVENT_MODAL_HIDE = 'hide.bs.modal';
	const TRIGGER_HOVER = 'hover';
	const TRIGGER_FOCUS = 'focus';
	const TRIGGER_CLICK = 'click';
	const TRIGGER_MANUAL = 'manual';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Tooltip extends BaseComponent {
	  constructor(element, config) {
	    if (typeof Popper === 'undefined') {
	      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
	    }

	    super(element); // private

	    this._isEnabled = true;
	    this._timeout = 0;
	    this._hoverState = '';
	    this._activeTrigger = {};
	    this._popper = null; // Protected

	    this._config = this._getConfig(config);
	    this.tip = null;

	    this._setListeners();
	  } // Getters


	  static get Default() {
	    return Default$3;
	  }

	  static get NAME() {
	    return NAME$4;
	  }

	  static get Event() {
	    return Event$2;
	  }

	  static get DefaultType() {
	    return DefaultType$3;
	  } // Public


	  enable() {
	    this._isEnabled = true;
	  }

	  disable() {
	    this._isEnabled = false;
	  }

	  toggleEnabled() {
	    this._isEnabled = !this._isEnabled;
	  }

	  toggle(event) {
	    if (!this._isEnabled) {
	      return;
	    }

	    if (event) {
	      const context = this._initializeOnDelegatedTarget(event);

	      context._activeTrigger.click = !context._activeTrigger.click;

	      if (context._isWithActiveTrigger()) {
	        context._enter(null, context);
	      } else {
	        context._leave(null, context);
	      }
	    } else {
	      if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
	        this._leave(null, this);

	        return;
	      }

	      this._enter(null, this);
	    }
	  }

	  dispose() {
	    clearTimeout(this._timeout);
	    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

	    if (this.tip) {
	      this.tip.remove();
	    }

	    this._disposePopper();

	    super.dispose();
	  }

	  show() {
	    if (this._element.style.display === 'none') {
	      throw new Error('Please use show on visible elements');
	    }

	    if (!(this.isWithContent() && this._isEnabled)) {
	      return;
	    }

	    const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
	    const shadowRoot = findShadowRoot(this._element);
	    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

	    if (showEvent.defaultPrevented || !isInTheDom) {
	      return;
	    } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
	    // This will be removed later in favor of a `setContent` method


	    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
	      this._disposePopper();

	      this.tip.remove();
	      this.tip = null;
	    }

	    const tip = this.getTipElement();
	    const tipId = getUID(this.constructor.NAME);
	    tip.setAttribute('id', tipId);

	    this._element.setAttribute('aria-describedby', tipId);

	    if (this._config.animation) {
	      tip.classList.add(CLASS_NAME_FADE$2);
	    }

	    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

	    const attachment = this._getAttachment(placement);

	    this._addAttachmentClass(attachment);

	    const {
	      container
	    } = this._config;
	    Data.set(tip, this.constructor.DATA_KEY, this);

	    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
	      container.append(tip);
	      EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
	    }

	    if (this._popper) {
	      this._popper.update();
	    } else {
	      this._popper = createPopper$2(this._element, tip, this._getPopperConfig(attachment));
	    }

	    tip.classList.add(CLASS_NAME_SHOW$2);

	    const customClass = this._resolvePossibleFunction(this._config.customClass);

	    if (customClass) {
	      tip.classList.add(...customClass.split(' '));
	    } // If this is a touch-enabled device we add extra
	    // empty mouseover listeners to the body's immediate children;
	    // only needed because of broken event delegation on iOS
	    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


	    if ('ontouchstart' in document.documentElement) {
	      [].concat(...document.body.children).forEach(element => {
	        EventHandler.on(element, 'mouseover', noop);
	      });
	    }

	    const complete = () => {
	      const prevHoverState = this._hoverState;
	      this._hoverState = null;
	      EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

	      if (prevHoverState === HOVER_STATE_OUT) {
	        this._leave(null, this);
	      }
	    };

	    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

	    this._queueCallback(complete, this.tip, isAnimated);
	  }

	  hide() {
	    if (!this._popper) {
	      return;
	    }

	    const tip = this.getTipElement();

	    const complete = () => {
	      if (this._isWithActiveTrigger()) {
	        return;
	      }

	      if (this._hoverState !== HOVER_STATE_SHOW) {
	        tip.remove();
	      }

	      this._cleanTipClass();

	      this._element.removeAttribute('aria-describedby');

	      EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

	      this._disposePopper();
	    };

	    const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
	    // empty mouseover listeners we added for iOS support

	    if ('ontouchstart' in document.documentElement) {
	      [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
	    }

	    this._activeTrigger[TRIGGER_CLICK] = false;
	    this._activeTrigger[TRIGGER_FOCUS] = false;
	    this._activeTrigger[TRIGGER_HOVER] = false;
	    const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);

	    this._queueCallback(complete, this.tip, isAnimated);

	    this._hoverState = '';
	  }

	  update() {
	    if (this._popper !== null) {
	      this._popper.update();
	    }
	  } // Protected


	  isWithContent() {
	    return Boolean(this.getTitle());
	  }

	  getTipElement() {
	    if (this.tip) {
	      return this.tip;
	    }

	    const element = document.createElement('div');
	    element.innerHTML = this._config.template;
	    const tip = element.children[0];
	    this.setContent(tip);
	    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
	    this.tip = tip;
	    return this.tip;
	  }

	  setContent(tip) {
	    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
	  }

	  _sanitizeAndSetContent(template, content, selector) {
	    const templateElement = SelectorEngine.findOne(selector, template);

	    if (!content && templateElement) {
	      templateElement.remove();
	      return;
	    } // we use append for html objects to maintain js events


	    this.setElementContent(templateElement, content);
	  }

	  setElementContent(element, content) {
	    if (element === null) {
	      return;
	    }

	    if (isElement$1(content)) {
	      content = getElement(content); // content is a DOM node or a jQuery

	      if (this._config.html) {
	        if (content.parentNode !== element) {
	          element.innerHTML = '';
	          element.append(content);
	        }
	      } else {
	        element.textContent = content.textContent;
	      }

	      return;
	    }

	    if (this._config.html) {
	      if (this._config.sanitize) {
	        content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
	      }

	      element.innerHTML = content;
	    } else {
	      element.textContent = content;
	    }
	  }

	  getTitle() {
	    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

	    return this._resolvePossibleFunction(title);
	  }

	  updateAttachment(attachment) {
	    if (attachment === 'right') {
	      return 'end';
	    }

	    if (attachment === 'left') {
	      return 'start';
	    }

	    return attachment;
	  } // Private


	  _initializeOnDelegatedTarget(event, context) {
	    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
	  }

	  _getOffset() {
	    const {
	      offset
	    } = this._config;

	    if (typeof offset === 'string') {
	      return offset.split(',').map(val => Number.parseInt(val, 10));
	    }

	    if (typeof offset === 'function') {
	      return popperData => offset(popperData, this._element);
	    }

	    return offset;
	  }

	  _resolvePossibleFunction(content) {
	    return typeof content === 'function' ? content.call(this._element) : content;
	  }

	  _getPopperConfig(attachment) {
	    const defaultBsPopperConfig = {
	      placement: attachment,
	      modifiers: [{
	        name: 'flip',
	        options: {
	          fallbackPlacements: this._config.fallbackPlacements
	        }
	      }, {
	        name: 'offset',
	        options: {
	          offset: this._getOffset()
	        }
	      }, {
	        name: 'preventOverflow',
	        options: {
	          boundary: this._config.boundary
	        }
	      }, {
	        name: 'arrow',
	        options: {
	          element: `.${this.constructor.NAME}-arrow`
	        }
	      }, {
	        name: 'onChange',
	        enabled: true,
	        phase: 'afterWrite',
	        fn: data => this._handlePopperPlacementChange(data)
	      }],
	      onFirstUpdate: data => {
	        if (data.options.placement !== data.placement) {
	          this._handlePopperPlacementChange(data);
	        }
	      }
	    };
	    return { ...defaultBsPopperConfig,
	      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
	    };
	  }

	  _addAttachmentClass(attachment) {
	    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
	  }

	  _getAttachment(placement) {
	    return AttachmentMap[placement.toUpperCase()];
	  }

	  _setListeners() {
	    const triggers = this._config.trigger.split(' ');

	    triggers.forEach(trigger => {
	      if (trigger === 'click') {
	        EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
	      } else if (trigger !== TRIGGER_MANUAL) {
	        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
	        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
	        EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
	        EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
	      }
	    });

	    this._hideModalHandler = () => {
	      if (this._element) {
	        this.hide();
	      }
	    };

	    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

	    if (this._config.selector) {
	      this._config = { ...this._config,
	        trigger: 'manual',
	        selector: ''
	      };
	    } else {
	      this._fixTitle();
	    }
	  }

	  _fixTitle() {
	    const title = this._element.getAttribute('title');

	    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

	    if (title || originalTitleType !== 'string') {
	      this._element.setAttribute('data-bs-original-title', title || '');

	      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
	        this._element.setAttribute('aria-label', title);
	      }

	      this._element.setAttribute('title', '');
	    }
	  }

	  _enter(event, context) {
	    context = this._initializeOnDelegatedTarget(event, context);

	    if (event) {
	      context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
	    }

	    if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
	      context._hoverState = HOVER_STATE_SHOW;
	      return;
	    }

	    clearTimeout(context._timeout);
	    context._hoverState = HOVER_STATE_SHOW;

	    if (!context._config.delay || !context._config.delay.show) {
	      context.show();
	      return;
	    }

	    context._timeout = setTimeout(() => {
	      if (context._hoverState === HOVER_STATE_SHOW) {
	        context.show();
	      }
	    }, context._config.delay.show);
	  }

	  _leave(event, context) {
	    context = this._initializeOnDelegatedTarget(event, context);

	    if (event) {
	      context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
	    }

	    if (context._isWithActiveTrigger()) {
	      return;
	    }

	    clearTimeout(context._timeout);
	    context._hoverState = HOVER_STATE_OUT;

	    if (!context._config.delay || !context._config.delay.hide) {
	      context.hide();
	      return;
	    }

	    context._timeout = setTimeout(() => {
	      if (context._hoverState === HOVER_STATE_OUT) {
	        context.hide();
	      }
	    }, context._config.delay.hide);
	  }

	  _isWithActiveTrigger() {
	    for (const trigger in this._activeTrigger) {
	      if (this._activeTrigger[trigger]) {
	        return true;
	      }
	    }

	    return false;
	  }

	  _getConfig(config) {
	    const dataAttributes = Manipulator.getDataAttributes(this._element);
	    Object.keys(dataAttributes).forEach(dataAttr => {
	      if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
	        delete dataAttributes[dataAttr];
	      }
	    });
	    config = { ...this.constructor.Default,
	      ...dataAttributes,
	      ...(typeof config === 'object' && config ? config : {})
	    };
	    config.container = config.container === false ? document.body : getElement(config.container);

	    if (typeof config.delay === 'number') {
	      config.delay = {
	        show: config.delay,
	        hide: config.delay
	      };
	    }

	    if (typeof config.title === 'number') {
	      config.title = config.title.toString();
	    }

	    if (typeof config.content === 'number') {
	      config.content = config.content.toString();
	    }

	    typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

	    if (config.sanitize) {
	      config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
	    }

	    return config;
	  }

	  _getDelegateConfig() {
	    const config = {};

	    for (const key in this._config) {
	      if (this.constructor.Default[key] !== this._config[key]) {
	        config[key] = this._config[key];
	      }
	    } // In the future can be replaced with:
	    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
	    // `Object.fromEntries(keysWithDifferentValues)`


	    return config;
	  }

	  _cleanTipClass() {
	    const tip = this.getTipElement();
	    const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
	    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

	    if (tabClass !== null && tabClass.length > 0) {
	      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
	    }
	  }

	  _getBasicClassPrefix() {
	    return CLASS_PREFIX$1;
	  }

	  _handlePopperPlacementChange(popperData) {
	    const {
	      state
	    } = popperData;

	    if (!state) {
	      return;
	    }

	    this.tip = state.elements.popper;

	    this._cleanTipClass();

	    this._addAttachmentClass(this._getAttachment(state.placement));
	  }

	  _disposePopper() {
	    if (this._popper) {
	      this._popper.destroy();

	      this._popper = null;
	    }
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tooltip.getOrCreateInstance(this, config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }

	        data[config]();
	      }
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Tooltip to jQuery only if jQuery is present
	 */


	defineJQueryPlugin(Tooltip);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): popover.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$3 = 'popover';
	const DATA_KEY$3 = 'bs.popover';
	const EVENT_KEY$3 = `.${DATA_KEY$3}`;
	const CLASS_PREFIX = 'bs-popover';
	const Default$2 = { ...Tooltip.Default,
	  placement: 'right',
	  offset: [0, 8],
	  trigger: 'click',
	  content: '',
	  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
	};
	const DefaultType$2 = { ...Tooltip.DefaultType,
	  content: '(string|element|function)'
	};
	const Event$1 = {
	  HIDE: `hide${EVENT_KEY$3}`,
	  HIDDEN: `hidden${EVENT_KEY$3}`,
	  SHOW: `show${EVENT_KEY$3}`,
	  SHOWN: `shown${EVENT_KEY$3}`,
	  INSERTED: `inserted${EVENT_KEY$3}`,
	  CLICK: `click${EVENT_KEY$3}`,
	  FOCUSIN: `focusin${EVENT_KEY$3}`,
	  FOCUSOUT: `focusout${EVENT_KEY$3}`,
	  MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
	  MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
	};
	const SELECTOR_TITLE = '.popover-header';
	const SELECTOR_CONTENT = '.popover-body';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Popover extends Tooltip {
	  // Getters
	  static get Default() {
	    return Default$2;
	  }

	  static get NAME() {
	    return NAME$3;
	  }

	  static get Event() {
	    return Event$1;
	  }

	  static get DefaultType() {
	    return DefaultType$2;
	  } // Overrides


	  isWithContent() {
	    return this.getTitle() || this._getContent();
	  }

	  setContent(tip) {
	    this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);

	    this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
	  } // Private


	  _getContent() {
	    return this._resolvePossibleFunction(this._config.content);
	  }

	  _getBasicClassPrefix() {
	    return CLASS_PREFIX;
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Popover.getOrCreateInstance(this, config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }

	        data[config]();
	      }
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Popover to jQuery only if jQuery is present
	 */


	defineJQueryPlugin(Popover);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): scrollspy.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$2 = 'scrollspy';
	const DATA_KEY$2 = 'bs.scrollspy';
	const EVENT_KEY$2 = `.${DATA_KEY$2}`;
	const DATA_API_KEY$1 = '.data-api';
	const Default$1 = {
	  offset: 10,
	  method: 'auto',
	  target: ''
	};
	const DefaultType$1 = {
	  offset: 'number',
	  method: 'string',
	  target: '(string|element)'
	};
	const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
	const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
	const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
	const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
	const CLASS_NAME_ACTIVE$1 = 'active';
	const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
	const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
	const SELECTOR_NAV_LINKS = '.nav-link';
	const SELECTOR_NAV_ITEMS = '.nav-item';
	const SELECTOR_LIST_ITEMS = '.list-group-item';
	const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;
	const SELECTOR_DROPDOWN$1 = '.dropdown';
	const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
	const METHOD_OFFSET = 'offset';
	const METHOD_POSITION = 'position';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class ScrollSpy extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
	    this._config = this._getConfig(config);
	    this._offsets = [];
	    this._targets = [];
	    this._activeTarget = null;
	    this._scrollHeight = 0;
	    EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
	    this.refresh();

	    this._process();
	  } // Getters


	  static get Default() {
	    return Default$1;
	  }

	  static get NAME() {
	    return NAME$2;
	  } // Public


	  refresh() {
	    const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
	    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
	    const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
	    this._offsets = [];
	    this._targets = [];
	    this._scrollHeight = this._getScrollHeight();
	    const targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
	    targets.map(element => {
	      const targetSelector = getSelectorFromElement(element);
	      const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

	      if (target) {
	        const targetBCR = target.getBoundingClientRect();

	        if (targetBCR.width || targetBCR.height) {
	          return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
	        }
	      }

	      return null;
	    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
	      this._offsets.push(item[0]);

	      this._targets.push(item[1]);
	    });
	  }

	  dispose() {
	    EventHandler.off(this._scrollElement, EVENT_KEY$2);
	    super.dispose();
	  } // Private


	  _getConfig(config) {
	    config = { ...Default$1,
	      ...Manipulator.getDataAttributes(this._element),
	      ...(typeof config === 'object' && config ? config : {})
	    };
	    config.target = getElement(config.target) || document.documentElement;
	    typeCheckConfig(NAME$2, config, DefaultType$1);
	    return config;
	  }

	  _getScrollTop() {
	    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
	  }

	  _getScrollHeight() {
	    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	  }

	  _getOffsetHeight() {
	    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
	  }

	  _process() {
	    const scrollTop = this._getScrollTop() + this._config.offset;

	    const scrollHeight = this._getScrollHeight();

	    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

	    if (this._scrollHeight !== scrollHeight) {
	      this.refresh();
	    }

	    if (scrollTop >= maxScroll) {
	      const target = this._targets[this._targets.length - 1];

	      if (this._activeTarget !== target) {
	        this._activate(target);
	      }

	      return;
	    }

	    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
	      this._activeTarget = null;

	      this._clear();

	      return;
	    }

	    for (let i = this._offsets.length; i--;) {
	      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

	      if (isActiveTarget) {
	        this._activate(this._targets[i]);
	      }
	    }
	  }

	  _activate(target) {
	    this._activeTarget = target;

	    this._clear();

	    const queries = SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
	    const link = SelectorEngine.findOne(queries.join(','), this._config.target);
	    link.classList.add(CLASS_NAME_ACTIVE$1);

	    if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
	      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
	    } else {
	      SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
	        // Set triggered links parents as active
	        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
	        SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

	        SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
	          SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
	        });
	      });
	    }

	    EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
	      relatedTarget: target
	    });
	  }

	  _clear() {
	    SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = ScrollSpy.getOrCreateInstance(this, config);

	      if (typeof config !== 'string') {
	        return;
	      }

	      if (typeof data[config] === 'undefined') {
	        throw new TypeError(`No method named "${config}"`);
	      }

	      data[config]();
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
	  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .ScrollSpy to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(ScrollSpy);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): tab.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME$1 = 'tab';
	const DATA_KEY$1 = 'bs.tab';
	const EVENT_KEY$1 = `.${DATA_KEY$1}`;
	const DATA_API_KEY = '.data-api';
	const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
	const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
	const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
	const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
	const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
	const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
	const CLASS_NAME_ACTIVE = 'active';
	const CLASS_NAME_FADE$1 = 'fade';
	const CLASS_NAME_SHOW$1 = 'show';
	const SELECTOR_DROPDOWN = '.dropdown';
	const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
	const SELECTOR_ACTIVE = '.active';
	const SELECTOR_ACTIVE_UL = ':scope > li > .active';
	const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
	const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
	const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Tab extends BaseComponent {
	  // Getters
	  static get NAME() {
	    return NAME$1;
	  } // Public


	  show() {
	    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
	      return;
	    }

	    let previous;
	    const target = getElementFromSelector(this._element);

	    const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

	    if (listElement) {
	      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
	      previous = SelectorEngine.find(itemSelector, listElement);
	      previous = previous[previous.length - 1];
	    }

	    const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
	      relatedTarget: this._element
	    }) : null;
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
	      relatedTarget: previous
	    });

	    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
	      return;
	    }

	    this._activate(this._element, listElement);

	    const complete = () => {
	      EventHandler.trigger(previous, EVENT_HIDDEN$1, {
	        relatedTarget: this._element
	      });
	      EventHandler.trigger(this._element, EVENT_SHOWN$1, {
	        relatedTarget: previous
	      });
	    };

	    if (target) {
	      this._activate(target, target.parentNode, complete);
	    } else {
	      complete();
	    }
	  } // Private


	  _activate(element, container, callback) {
	    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
	    const active = activeElements[0];
	    const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

	    const complete = () => this._transitionComplete(element, active, callback);

	    if (active && isTransitioning) {
	      active.classList.remove(CLASS_NAME_SHOW$1);

	      this._queueCallback(complete, element, true);
	    } else {
	      complete();
	    }
	  }

	  _transitionComplete(element, active, callback) {
	    if (active) {
	      active.classList.remove(CLASS_NAME_ACTIVE);
	      const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

	      if (dropdownChild) {
	        dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
	      }

	      if (active.getAttribute('role') === 'tab') {
	        active.setAttribute('aria-selected', false);
	      }
	    }

	    element.classList.add(CLASS_NAME_ACTIVE);

	    if (element.getAttribute('role') === 'tab') {
	      element.setAttribute('aria-selected', true);
	    }

	    reflow(element);

	    if (element.classList.contains(CLASS_NAME_FADE$1)) {
	      element.classList.add(CLASS_NAME_SHOW$1);
	    }

	    let parent = element.parentNode;

	    if (parent && parent.nodeName === 'LI') {
	      parent = parent.parentNode;
	    }

	    if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
	      const dropdownElement = element.closest(SELECTOR_DROPDOWN);

	      if (dropdownElement) {
	        SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
	      }

	      element.setAttribute('aria-expanded', true);
	    }

	    if (callback) {
	      callback();
	    }
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Tab.getOrCreateInstance(this);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }

	        data[config]();
	      }
	    });
	  }

	}
	/**
	 * ------------------------------------------------------------------------
	 * Data Api implementation
	 * ------------------------------------------------------------------------
	 */


	EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
	  if (['A', 'AREA'].includes(this.tagName)) {
	    event.preventDefault();
	  }

	  if (isDisabled(this)) {
	    return;
	  }

	  const data = Tab.getOrCreateInstance(this);
	  data.show();
	});
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Tab to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Tab);
	/**
	 * --------------------------------------------------------------------------
	 * Bootstrap (v5.1.3): toast.js
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	 * --------------------------------------------------------------------------
	 */

	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */

	const NAME = 'toast';
	const DATA_KEY = 'bs.toast';
	const EVENT_KEY = `.${DATA_KEY}`;
	const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
	const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
	const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
	const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
	const EVENT_HIDE = `hide${EVENT_KEY}`;
	const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
	const EVENT_SHOW = `show${EVENT_KEY}`;
	const EVENT_SHOWN = `shown${EVENT_KEY}`;
	const CLASS_NAME_FADE = 'fade';
	const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

	const CLASS_NAME_SHOW = 'show';
	const CLASS_NAME_SHOWING = 'showing';
	const DefaultType = {
	  animation: 'boolean',
	  autohide: 'boolean',
	  delay: 'number'
	};
	const Default = {
	  animation: true,
	  autohide: true,
	  delay: 5000
	};
	/**
	 * ------------------------------------------------------------------------
	 * Class Definition
	 * ------------------------------------------------------------------------
	 */

	class Toast extends BaseComponent {
	  constructor(element, config) {
	    super(element);
	    this._config = this._getConfig(config);
	    this._timeout = null;
	    this._hasMouseInteraction = false;
	    this._hasKeyboardInteraction = false;

	    this._setListeners();
	  } // Getters


	  static get DefaultType() {
	    return DefaultType;
	  }

	  static get Default() {
	    return Default;
	  }

	  static get NAME() {
	    return NAME;
	  } // Public


	  show() {
	    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

	    if (showEvent.defaultPrevented) {
	      return;
	    }

	    this._clearTimeout();

	    if (this._config.animation) {
	      this._element.classList.add(CLASS_NAME_FADE);
	    }

	    const complete = () => {
	      this._element.classList.remove(CLASS_NAME_SHOWING);

	      EventHandler.trigger(this._element, EVENT_SHOWN);

	      this._maybeScheduleHide();
	    };

	    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


	    reflow(this._element);

	    this._element.classList.add(CLASS_NAME_SHOW);

	    this._element.classList.add(CLASS_NAME_SHOWING);

	    this._queueCallback(complete, this._element, this._config.animation);
	  }

	  hide() {
	    if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
	      return;
	    }

	    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

	    if (hideEvent.defaultPrevented) {
	      return;
	    }

	    const complete = () => {
	      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


	      this._element.classList.remove(CLASS_NAME_SHOWING);

	      this._element.classList.remove(CLASS_NAME_SHOW);

	      EventHandler.trigger(this._element, EVENT_HIDDEN);
	    };

	    this._element.classList.add(CLASS_NAME_SHOWING);

	    this._queueCallback(complete, this._element, this._config.animation);
	  }

	  dispose() {
	    this._clearTimeout();

	    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
	      this._element.classList.remove(CLASS_NAME_SHOW);
	    }

	    super.dispose();
	  } // Private


	  _getConfig(config) {
	    config = { ...Default,
	      ...Manipulator.getDataAttributes(this._element),
	      ...(typeof config === 'object' && config ? config : {})
	    };
	    typeCheckConfig(NAME, config, this.constructor.DefaultType);
	    return config;
	  }

	  _maybeScheduleHide() {
	    if (!this._config.autohide) {
	      return;
	    }

	    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
	      return;
	    }

	    this._timeout = setTimeout(() => {
	      this.hide();
	    }, this._config.delay);
	  }

	  _onInteraction(event, isInteracting) {
	    switch (event.type) {
	      case 'mouseover':
	      case 'mouseout':
	        this._hasMouseInteraction = isInteracting;
	        break;

	      case 'focusin':
	      case 'focusout':
	        this._hasKeyboardInteraction = isInteracting;
	        break;
	    }

	    if (isInteracting) {
	      this._clearTimeout();

	      return;
	    }

	    const nextElement = event.relatedTarget;

	    if (this._element === nextElement || this._element.contains(nextElement)) {
	      return;
	    }

	    this._maybeScheduleHide();
	  }

	  _setListeners() {
	    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
	    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
	    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
	  }

	  _clearTimeout() {
	    clearTimeout(this._timeout);
	    this._timeout = null;
	  } // Static


	  static jQueryInterface(config) {
	    return this.each(function () {
	      const data = Toast.getOrCreateInstance(this, config);

	      if (typeof config === 'string') {
	        if (typeof data[config] === 'undefined') {
	          throw new TypeError(`No method named "${config}"`);
	        }

	        data[config](this);
	      }
	    });
	  }

	}

	enableDismissTrigger(Toast);
	/**
	 * ------------------------------------------------------------------------
	 * jQuery
	 * ------------------------------------------------------------------------
	 * add .Toast to jQuery only if jQuery is present
	 */

	defineJQueryPlugin(Toast);

	var slick = createCommonjsModule(function (module, exports) {

	(function (factory) {

	  {
	    module.exports = factory(jquery);
	  }
	})(function ($) {

	  var Slick = window.Slick || {};

	  Slick = function () {
	    var instanceUid = 0;

	    function Slick(element, settings) {
	      var _ = this,
	          dataSettings;

	      _.defaults = {
	        accessibility: true,
	        adaptiveHeight: false,
	        appendArrows: $(element),
	        appendDots: $(element),
	        arrows: true,
	        asNavFor: null,
	        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
	        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	        autoplay: false,
	        autoplaySpeed: 3000,
	        centerMode: false,
	        centerPadding: '50px',
	        cssEase: 'ease',
	        customPaging: function (slider, i) {
	          return $('<button type="button" />').text(i + 1);
	        },
	        dots: false,
	        dotsClass: 'slick-dots',
	        draggable: true,
	        easing: 'linear',
	        edgeFriction: 0.35,
	        fade: false,
	        focusOnSelect: false,
	        focusOnChange: false,
	        infinite: true,
	        initialSlide: 0,
	        lazyLoad: 'ondemand',
	        mobileFirst: false,
	        pauseOnHover: true,
	        pauseOnFocus: true,
	        pauseOnDotsHover: false,
	        respondTo: 'window',
	        responsive: null,
	        rows: 1,
	        rtl: false,
	        slide: '',
	        slidesPerRow: 1,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        speed: 500,
	        swipe: true,
	        swipeToSlide: false,
	        touchMove: true,
	        touchThreshold: 5,
	        useCSS: true,
	        useTransform: true,
	        variableWidth: false,
	        vertical: false,
	        verticalSwiping: false,
	        waitForAnimate: true,
	        zIndex: 1000
	      };
	      _.initials = {
	        animating: false,
	        dragging: false,
	        autoPlayTimer: null,
	        currentDirection: 0,
	        currentLeft: null,
	        currentSlide: 0,
	        direction: 1,
	        $dots: null,
	        listWidth: null,
	        listHeight: null,
	        loadIndex: 0,
	        $nextArrow: null,
	        $prevArrow: null,
	        scrolling: false,
	        slideCount: null,
	        slideWidth: null,
	        $slideTrack: null,
	        $slides: null,
	        sliding: false,
	        slideOffset: 0,
	        swipeLeft: null,
	        swiping: false,
	        $list: null,
	        touchObject: {},
	        transformsEnabled: false,
	        unslicked: false
	      };
	      $.extend(_, _.initials);
	      _.activeBreakpoint = null;
	      _.animType = null;
	      _.animProp = null;
	      _.breakpoints = [];
	      _.breakpointSettings = [];
	      _.cssTransitions = false;
	      _.focussed = false;
	      _.interrupted = false;
	      _.hidden = 'hidden';
	      _.paused = true;
	      _.positionProp = null;
	      _.respondTo = null;
	      _.rowCount = 1;
	      _.shouldClick = true;
	      _.$slider = $(element);
	      _.$slidesCache = null;
	      _.transformType = null;
	      _.transitionType = null;
	      _.visibilityChange = 'visibilitychange';
	      _.windowWidth = 0;
	      _.windowTimer = null;
	      dataSettings = $(element).data('slick') || {};
	      _.options = $.extend({}, _.defaults, settings, dataSettings);
	      _.currentSlide = _.options.initialSlide;
	      _.originalSettings = _.options;

	      if (typeof document.mozHidden !== 'undefined') {
	        _.hidden = 'mozHidden';
	        _.visibilityChange = 'mozvisibilitychange';
	      } else if (typeof document.webkitHidden !== 'undefined') {
	        _.hidden = 'webkitHidden';
	        _.visibilityChange = 'webkitvisibilitychange';
	      }

	      _.autoPlay = $.proxy(_.autoPlay, _);
	      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
	      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
	      _.changeSlide = $.proxy(_.changeSlide, _);
	      _.clickHandler = $.proxy(_.clickHandler, _);
	      _.selectHandler = $.proxy(_.selectHandler, _);
	      _.setPosition = $.proxy(_.setPosition, _);
	      _.swipeHandler = $.proxy(_.swipeHandler, _);
	      _.dragHandler = $.proxy(_.dragHandler, _);
	      _.keyHandler = $.proxy(_.keyHandler, _);
	      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
	      // Strict HTML recognition (must start with <)
	      // Extracted from jQuery v1.11 source

	      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

	      _.registerBreakpoints();

	      _.init(true);
	    }

	    return Slick;
	  }();

	  Slick.prototype.activateADA = function () {
	    var _ = this;

	    _.$slideTrack.find('.slick-active').attr({
	      'aria-hidden': 'false'
	    }).find('a, input, button, select').attr({
	      'tabindex': '0'
	    });
	  };

	  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
	    var _ = this;

	    if (typeof index === 'boolean') {
	      addBefore = index;
	      index = null;
	    } else if (index < 0 || index >= _.slideCount) {
	      return false;
	    }

	    _.unload();

	    if (typeof index === 'number') {
	      if (index === 0 && _.$slides.length === 0) {
	        $(markup).appendTo(_.$slideTrack);
	      } else if (addBefore) {
	        $(markup).insertBefore(_.$slides.eq(index));
	      } else {
	        $(markup).insertAfter(_.$slides.eq(index));
	      }
	    } else {
	      if (addBefore === true) {
	        $(markup).prependTo(_.$slideTrack);
	      } else {
	        $(markup).appendTo(_.$slideTrack);
	      }
	    }

	    _.$slides = _.$slideTrack.children(this.options.slide);

	    _.$slideTrack.children(this.options.slide).detach();

	    _.$slideTrack.append(_.$slides);

	    _.$slides.each(function (index, element) {
	      $(element).attr('data-slick-index', index);
	    });

	    _.$slidesCache = _.$slides;

	    _.reinit();
	  };

	  Slick.prototype.animateHeight = function () {
	    var _ = this;

	    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

	      _.$list.animate({
	        height: targetHeight
	      }, _.options.speed);
	    }
	  };

	  Slick.prototype.animateSlide = function (targetLeft, callback) {
	    var animProps = {},
	        _ = this;

	    _.animateHeight();

	    if (_.options.rtl === true && _.options.vertical === false) {
	      targetLeft = -targetLeft;
	    }

	    if (_.transformsEnabled === false) {
	      if (_.options.vertical === false) {
	        _.$slideTrack.animate({
	          left: targetLeft
	        }, _.options.speed, _.options.easing, callback);
	      } else {
	        _.$slideTrack.animate({
	          top: targetLeft
	        }, _.options.speed, _.options.easing, callback);
	      }
	    } else {
	      if (_.cssTransitions === false) {
	        if (_.options.rtl === true) {
	          _.currentLeft = -_.currentLeft;
	        }

	        $({
	          animStart: _.currentLeft
	        }).animate({
	          animStart: targetLeft
	        }, {
	          duration: _.options.speed,
	          easing: _.options.easing,
	          step: function (now) {
	            now = Math.ceil(now);

	            if (_.options.vertical === false) {
	              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

	              _.$slideTrack.css(animProps);
	            } else {
	              animProps[_.animType] = 'translate(0px,' + now + 'px)';

	              _.$slideTrack.css(animProps);
	            }
	          },
	          complete: function () {
	            if (callback) {
	              callback.call();
	            }
	          }
	        });
	      } else {
	        _.applyTransition();

	        targetLeft = Math.ceil(targetLeft);

	        if (_.options.vertical === false) {
	          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
	        } else {
	          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
	        }

	        _.$slideTrack.css(animProps);

	        if (callback) {
	          setTimeout(function () {
	            _.disableTransition();

	            callback.call();
	          }, _.options.speed);
	        }
	      }
	    }
	  };

	  Slick.prototype.getNavTarget = function () {
	    var _ = this,
	        asNavFor = _.options.asNavFor;

	    if (asNavFor && asNavFor !== null) {
	      asNavFor = $(asNavFor).not(_.$slider);
	    }

	    return asNavFor;
	  };

	  Slick.prototype.asNavFor = function (index) {
	    var _ = this,
	        asNavFor = _.getNavTarget();

	    if (asNavFor !== null && typeof asNavFor === 'object') {
	      asNavFor.each(function () {
	        var target = $(this).slick('getSlick');

	        if (!target.unslicked) {
	          target.slideHandler(index, true);
	        }
	      });
	    }
	  };

	  Slick.prototype.applyTransition = function (slide) {
	    var _ = this,
	        transition = {};

	    if (_.options.fade === false) {
	      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
	    } else {
	      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
	    }

	    if (_.options.fade === false) {
	      _.$slideTrack.css(transition);
	    } else {
	      _.$slides.eq(slide).css(transition);
	    }
	  };

	  Slick.prototype.autoPlay = function () {
	    var _ = this;

	    _.autoPlayClear();

	    if (_.slideCount > _.options.slidesToShow) {
	      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
	    }
	  };

	  Slick.prototype.autoPlayClear = function () {
	    var _ = this;

	    if (_.autoPlayTimer) {
	      clearInterval(_.autoPlayTimer);
	    }
	  };

	  Slick.prototype.autoPlayIterator = function () {
	    var _ = this,
	        slideTo = _.currentSlide + _.options.slidesToScroll;

	    if (!_.paused && !_.interrupted && !_.focussed) {
	      if (_.options.infinite === false) {
	        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
	          _.direction = 0;
	        } else if (_.direction === 0) {
	          slideTo = _.currentSlide - _.options.slidesToScroll;

	          if (_.currentSlide - 1 === 0) {
	            _.direction = 1;
	          }
	        }
	      }

	      _.slideHandler(slideTo);
	    }
	  };

	  Slick.prototype.buildArrows = function () {
	    var _ = this;

	    if (_.options.arrows === true) {
	      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
	      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

	      if (_.slideCount > _.options.slidesToShow) {
	        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

	        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

	        if (_.htmlExpr.test(_.options.prevArrow)) {
	          _.$prevArrow.prependTo(_.options.appendArrows);
	        }

	        if (_.htmlExpr.test(_.options.nextArrow)) {
	          _.$nextArrow.appendTo(_.options.appendArrows);
	        }

	        if (_.options.infinite !== true) {
	          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
	        }
	      } else {
	        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
	          'aria-disabled': 'true',
	          'tabindex': '-1'
	        });
	      }
	    }
	  };

	  Slick.prototype.buildDots = function () {
	    var _ = this,
	        i,
	        dot;

	    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	      _.$slider.addClass('slick-dotted');

	      dot = $('<ul />').addClass(_.options.dotsClass);

	      for (i = 0; i <= _.getDotCount(); i += 1) {
	        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
	      }

	      _.$dots = dot.appendTo(_.options.appendDots);

	      _.$dots.find('li').first().addClass('slick-active');
	    }
	  };

	  Slick.prototype.buildOut = function () {
	    var _ = this;

	    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
	    _.slideCount = _.$slides.length;

	    _.$slides.each(function (index, element) {
	      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
	    });

	    _.$slider.addClass('slick-slider');

	    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
	    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

	    _.$slideTrack.css('opacity', 0);

	    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
	      _.options.slidesToScroll = 1;
	    }

	    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

	    _.setupInfinite();

	    _.buildArrows();

	    _.buildDots();

	    _.updateDots();

	    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

	    if (_.options.draggable === true) {
	      _.$list.addClass('draggable');
	    }
	  };

	  Slick.prototype.buildRows = function () {
	    var _ = this,
	        a,
	        b,
	        c,
	        newSlides,
	        numOfSlides,
	        originalSlides,
	        slidesPerSection;

	    newSlides = document.createDocumentFragment();
	    originalSlides = _.$slider.children();

	    if (_.options.rows > 0) {
	      slidesPerSection = _.options.slidesPerRow * _.options.rows;
	      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

	      for (a = 0; a < numOfSlides; a++) {
	        var slide = document.createElement('div');

	        for (b = 0; b < _.options.rows; b++) {
	          var row = document.createElement('div');

	          for (c = 0; c < _.options.slidesPerRow; c++) {
	            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

	            if (originalSlides.get(target)) {
	              row.appendChild(originalSlides.get(target));
	            }
	          }

	          slide.appendChild(row);
	        }

	        newSlides.appendChild(slide);
	      }

	      _.$slider.empty().append(newSlides);

	      _.$slider.children().children().children().css({
	        'width': 100 / _.options.slidesPerRow + '%',
	        'display': 'inline-block'
	      });
	    }
	  };

	  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
	    var _ = this,
	        breakpoint,
	        targetBreakpoint,
	        respondToWidth,
	        triggerBreakpoint = false;

	    var sliderWidth = _.$slider.width();

	    var windowWidth = window.innerWidth || $(window).width();

	    if (_.respondTo === 'window') {
	      respondToWidth = windowWidth;
	    } else if (_.respondTo === 'slider') {
	      respondToWidth = sliderWidth;
	    } else if (_.respondTo === 'min') {
	      respondToWidth = Math.min(windowWidth, sliderWidth);
	    }

	    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
	      targetBreakpoint = null;

	      for (breakpoint in _.breakpoints) {
	        if (_.breakpoints.hasOwnProperty(breakpoint)) {
	          if (_.originalSettings.mobileFirst === false) {
	            if (respondToWidth < _.breakpoints[breakpoint]) {
	              targetBreakpoint = _.breakpoints[breakpoint];
	            }
	          } else {
	            if (respondToWidth > _.breakpoints[breakpoint]) {
	              targetBreakpoint = _.breakpoints[breakpoint];
	            }
	          }
	        }
	      }

	      if (targetBreakpoint !== null) {
	        if (_.activeBreakpoint !== null) {
	          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
	            _.activeBreakpoint = targetBreakpoint;

	            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	              _.unslick(targetBreakpoint);
	            } else {
	              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

	              if (initial === true) {
	                _.currentSlide = _.options.initialSlide;
	              }

	              _.refresh(initial);
	            }

	            triggerBreakpoint = targetBreakpoint;
	          }
	        } else {
	          _.activeBreakpoint = targetBreakpoint;

	          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
	            _.unslick(targetBreakpoint);
	          } else {
	            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

	            if (initial === true) {
	              _.currentSlide = _.options.initialSlide;
	            }

	            _.refresh(initial);
	          }

	          triggerBreakpoint = targetBreakpoint;
	        }
	      } else {
	        if (_.activeBreakpoint !== null) {
	          _.activeBreakpoint = null;
	          _.options = _.originalSettings;

	          if (initial === true) {
	            _.currentSlide = _.options.initialSlide;
	          }

	          _.refresh(initial);

	          triggerBreakpoint = targetBreakpoint;
	        }
	      } // only trigger breakpoints during an actual break. not on initialize.


	      if (!initial && triggerBreakpoint !== false) {
	        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
	      }
	    }
	  };

	  Slick.prototype.changeSlide = function (event, dontAnimate) {
	    var _ = this,
	        $target = $(event.currentTarget),
	        indexOffset,
	        slideOffset,
	        unevenOffset; // If target is a link, prevent default action.


	    if ($target.is('a')) {
	      event.preventDefault();
	    } // If target is not the <li> element (ie: a child), find the <li>.


	    if (!$target.is('li')) {
	      $target = $target.closest('li');
	    }

	    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

	    switch (event.data.message) {
	      case 'previous':
	        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

	        if (_.slideCount > _.options.slidesToShow) {
	          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
	        }

	        break;

	      case 'next':
	        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

	        if (_.slideCount > _.options.slidesToShow) {
	          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
	        }

	        break;

	      case 'index':
	        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

	        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

	        $target.children().trigger('focus');
	        break;

	      default:
	        return;
	    }
	  };

	  Slick.prototype.checkNavigable = function (index) {
	    var _ = this,
	        navigables,
	        prevNavigable;

	    navigables = _.getNavigableIndexes();
	    prevNavigable = 0;

	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }

	        prevNavigable = navigables[n];
	      }
	    }

	    return index;
	  };

	  Slick.prototype.cleanUpEvents = function () {
	    var _ = this;

	    if (_.options.dots && _.$dots !== null) {
	      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

	      if (_.options.accessibility === true) {
	        _.$dots.off('keydown.slick', _.keyHandler);
	      }
	    }

	    _.$slider.off('focus.slick blur.slick');

	    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
	      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

	      if (_.options.accessibility === true) {
	        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
	        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
	      }
	    }

	    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

	    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

	    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

	    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

	    _.$list.off('click.slick', _.clickHandler);

	    $(document).off(_.visibilityChange, _.visibility);

	    _.cleanUpSlideEvents();

	    if (_.options.accessibility === true) {
	      _.$list.off('keydown.slick', _.keyHandler);
	    }

	    if (_.options.focusOnSelect === true) {
	      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
	    }

	    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
	    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
	    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
	    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
	  };

	  Slick.prototype.cleanUpSlideEvents = function () {
	    var _ = this;

	    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

	    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
	  };

	  Slick.prototype.cleanUpRows = function () {
	    var _ = this,
	        originalSlides;

	    if (_.options.rows > 0) {
	      originalSlides = _.$slides.children().children();
	      originalSlides.removeAttr('style');

	      _.$slider.empty().append(originalSlides);
	    }
	  };

	  Slick.prototype.clickHandler = function (event) {
	    var _ = this;

	    if (_.shouldClick === false) {
	      event.stopImmediatePropagation();
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  };

	  Slick.prototype.destroy = function (refresh) {
	    var _ = this;

	    _.autoPlayClear();

	    _.touchObject = {};

	    _.cleanUpEvents();

	    $('.slick-cloned', _.$slider).detach();

	    if (_.$dots) {
	      _.$dots.remove();
	    }

	    if (_.$prevArrow && _.$prevArrow.length) {
	      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

	      if (_.htmlExpr.test(_.options.prevArrow)) {
	        _.$prevArrow.remove();
	      }
	    }

	    if (_.$nextArrow && _.$nextArrow.length) {
	      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

	      if (_.htmlExpr.test(_.options.nextArrow)) {
	        _.$nextArrow.remove();
	      }
	    }

	    if (_.$slides) {
	      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
	        $(this).attr('style', $(this).data('originalStyling'));
	      });

	      _.$slideTrack.children(this.options.slide).detach();

	      _.$slideTrack.detach();

	      _.$list.detach();

	      _.$slider.append(_.$slides);
	    }

	    _.cleanUpRows();

	    _.$slider.removeClass('slick-slider');

	    _.$slider.removeClass('slick-initialized');

	    _.$slider.removeClass('slick-dotted');

	    _.unslicked = true;

	    if (!refresh) {
	      _.$slider.trigger('destroy', [_]);
	    }
	  };

	  Slick.prototype.disableTransition = function (slide) {
	    var _ = this,
	        transition = {};

	    transition[_.transitionType] = '';

	    if (_.options.fade === false) {
	      _.$slideTrack.css(transition);
	    } else {
	      _.$slides.eq(slide).css(transition);
	    }
	  };

	  Slick.prototype.fadeSlide = function (slideIndex, callback) {
	    var _ = this;

	    if (_.cssTransitions === false) {
	      _.$slides.eq(slideIndex).css({
	        zIndex: _.options.zIndex
	      });

	      _.$slides.eq(slideIndex).animate({
	        opacity: 1
	      }, _.options.speed, _.options.easing, callback);
	    } else {
	      _.applyTransition(slideIndex);

	      _.$slides.eq(slideIndex).css({
	        opacity: 1,
	        zIndex: _.options.zIndex
	      });

	      if (callback) {
	        setTimeout(function () {
	          _.disableTransition(slideIndex);

	          callback.call();
	        }, _.options.speed);
	      }
	    }
	  };

	  Slick.prototype.fadeSlideOut = function (slideIndex) {
	    var _ = this;

	    if (_.cssTransitions === false) {
	      _.$slides.eq(slideIndex).animate({
	        opacity: 0,
	        zIndex: _.options.zIndex - 2
	      }, _.options.speed, _.options.easing);
	    } else {
	      _.applyTransition(slideIndex);

	      _.$slides.eq(slideIndex).css({
	        opacity: 0,
	        zIndex: _.options.zIndex - 2
	      });
	    }
	  };

	  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
	    var _ = this;

	    if (filter !== null) {
	      _.$slidesCache = _.$slides;

	      _.unload();

	      _.$slideTrack.children(this.options.slide).detach();

	      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

	      _.reinit();
	    }
	  };

	  Slick.prototype.focusHandler = function () {
	    var _ = this;

	    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
	      event.stopImmediatePropagation();
	      var $sf = $(this);
	      setTimeout(function () {
	        if (_.options.pauseOnFocus) {
	          _.focussed = $sf.is(':focus');

	          _.autoPlay();
	        }
	      }, 0);
	    });
	  };

	  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
	    var _ = this;

	    return _.currentSlide;
	  };

	  Slick.prototype.getDotCount = function () {
	    var _ = this;

	    var breakPoint = 0;
	    var counter = 0;
	    var pagerQty = 0;

	    if (_.options.infinite === true) {
	      if (_.slideCount <= _.options.slidesToShow) {
	        ++pagerQty;
	      } else {
	        while (breakPoint < _.slideCount) {
	          ++pagerQty;
	          breakPoint = counter + _.options.slidesToScroll;
	          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	        }
	      }
	    } else if (_.options.centerMode === true) {
	      pagerQty = _.slideCount;
	    } else if (!_.options.asNavFor) {
	      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
	    } else {
	      while (breakPoint < _.slideCount) {
	        ++pagerQty;
	        breakPoint = counter + _.options.slidesToScroll;
	        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	      }
	    }

	    return pagerQty - 1;
	  };

	  Slick.prototype.getLeft = function (slideIndex) {
	    var _ = this,
	        targetLeft,
	        verticalHeight,
	        verticalOffset = 0,
	        targetSlide,
	        coef;

	    _.slideOffset = 0;
	    verticalHeight = _.$slides.first().outerHeight(true);

	    if (_.options.infinite === true) {
	      if (_.slideCount > _.options.slidesToShow) {
	        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
	        coef = -1;

	        if (_.options.vertical === true && _.options.centerMode === true) {
	          if (_.options.slidesToShow === 2) {
	            coef = -1.5;
	          } else if (_.options.slidesToShow === 1) {
	            coef = -2;
	          }
	        }

	        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
	      }

	      if (_.slideCount % _.options.slidesToScroll !== 0) {
	        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
	          if (slideIndex > _.slideCount) {
	            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
	            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
	          } else {
	            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
	            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
	          }
	        }
	      }
	    } else {
	      if (slideIndex + _.options.slidesToShow > _.slideCount) {
	        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
	        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
	      }
	    }

	    if (_.slideCount <= _.options.slidesToShow) {
	      _.slideOffset = 0;
	      verticalOffset = 0;
	    }

	    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
	      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
	    } else if (_.options.centerMode === true && _.options.infinite === true) {
	      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
	    } else if (_.options.centerMode === true) {
	      _.slideOffset = 0;
	      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
	    }

	    if (_.options.vertical === false) {
	      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
	    } else {
	      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
	    }

	    if (_.options.variableWidth === true) {
	      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	      } else {
	        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
	      }

	      if (_.options.rtl === true) {
	        if (targetSlide[0]) {
	          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	        } else {
	          targetLeft = 0;
	        }
	      } else {
	        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	      }

	      if (_.options.centerMode === true) {
	        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
	          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
	        } else {
	          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
	        }

	        if (_.options.rtl === true) {
	          if (targetSlide[0]) {
	            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
	          } else {
	            targetLeft = 0;
	          }
	        } else {
	          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
	        }

	        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
	      }
	    }

	    return targetLeft;
	  };

	  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
	    var _ = this;

	    return _.options[option];
	  };

	  Slick.prototype.getNavigableIndexes = function () {
	    var _ = this,
	        breakPoint = 0,
	        counter = 0,
	        indexes = [],
	        max;

	    if (_.options.infinite === false) {
	      max = _.slideCount;
	    } else {
	      breakPoint = _.options.slidesToScroll * -1;
	      counter = _.options.slidesToScroll * -1;
	      max = _.slideCount * 2;
	    }

	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + _.options.slidesToScroll;
	      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
	    }

	    return indexes;
	  };

	  Slick.prototype.getSlick = function () {
	    return this;
	  };

	  Slick.prototype.getSlideCount = function () {
	    var _ = this,
	        slidesTraversed,
	        swipedSlide,
	        centerOffset;

	    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

	    if (_.options.swipeToSlide === true) {
	      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
	        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
	          swipedSlide = slide;
	          return false;
	        }
	      });

	      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
	      return slidesTraversed;
	    } else {
	      return _.options.slidesToScroll;
	    }
	  };

	  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
	    var _ = this;

	    _.changeSlide({
	      data: {
	        message: 'index',
	        index: parseInt(slide)
	      }
	    }, dontAnimate);
	  };

	  Slick.prototype.init = function (creation) {
	    var _ = this;

	    if (!$(_.$slider).hasClass('slick-initialized')) {
	      $(_.$slider).addClass('slick-initialized');

	      _.buildRows();

	      _.buildOut();

	      _.setProps();

	      _.startLoad();

	      _.loadSlider();

	      _.initializeEvents();

	      _.updateArrows();

	      _.updateDots();

	      _.checkResponsive(true);

	      _.focusHandler();
	    }

	    if (creation) {
	      _.$slider.trigger('init', [_]);
	    }

	    if (_.options.accessibility === true) {
	      _.initADA();
	    }

	    if (_.options.autoplay) {
	      _.paused = false;

	      _.autoPlay();
	    }
	  };

	  Slick.prototype.initADA = function () {
	    var _ = this,
	        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
	        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
	      return val >= 0 && val < _.slideCount;
	    });

	    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
	      'aria-hidden': 'true',
	      'tabindex': '-1'
	    }).find('a, input, button, select').attr({
	      'tabindex': '-1'
	    });

	    if (_.$dots !== null) {
	      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
	        var slideControlIndex = tabControlIndexes.indexOf(i);
	        $(this).attr({
	          'role': 'tabpanel',
	          'id': 'slick-slide' + _.instanceUid + i,
	          'tabindex': -1
	        });

	        if (slideControlIndex !== -1) {
	          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

	          if ($('#' + ariaButtonControl).length) {
	            $(this).attr({
	              'aria-describedby': ariaButtonControl
	            });
	          }
	        }
	      });

	      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
	        var mappedSlideIndex = tabControlIndexes[i];
	        $(this).attr({
	          'role': 'presentation'
	        });
	        $(this).find('button').first().attr({
	          'role': 'tab',
	          'id': 'slick-slide-control' + _.instanceUid + i,
	          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
	          'aria-label': i + 1 + ' of ' + numDotGroups,
	          'aria-selected': null,
	          'tabindex': '-1'
	        });
	      }).eq(_.currentSlide).find('button').attr({
	        'aria-selected': 'true',
	        'tabindex': '0'
	      }).end();
	    }

	    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
	      if (_.options.focusOnChange) {
	        _.$slides.eq(i).attr({
	          'tabindex': '0'
	        });
	      } else {
	        _.$slides.eq(i).removeAttr('tabindex');
	      }
	    }

	    _.activateADA();
	  };

	  Slick.prototype.initArrowEvents = function () {
	    var _ = this;

	    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	      _.$prevArrow.off('click.slick').on('click.slick', {
	        message: 'previous'
	      }, _.changeSlide);

	      _.$nextArrow.off('click.slick').on('click.slick', {
	        message: 'next'
	      }, _.changeSlide);

	      if (_.options.accessibility === true) {
	        _.$prevArrow.on('keydown.slick', _.keyHandler);

	        _.$nextArrow.on('keydown.slick', _.keyHandler);
	      }
	    }
	  };

	  Slick.prototype.initDotEvents = function () {
	    var _ = this;

	    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	      $('li', _.$dots).on('click.slick', {
	        message: 'index'
	      }, _.changeSlide);

	      if (_.options.accessibility === true) {
	        _.$dots.on('keydown.slick', _.keyHandler);
	      }
	    }

	    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
	      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	    }
	  };

	  Slick.prototype.initSlideEvents = function () {
	    var _ = this;

	    if (_.options.pauseOnHover) {
	      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

	      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
	    }
	  };

	  Slick.prototype.initializeEvents = function () {
	    var _ = this;

	    _.initArrowEvents();

	    _.initDotEvents();

	    _.initSlideEvents();

	    _.$list.on('touchstart.slick mousedown.slick', {
	      action: 'start'
	    }, _.swipeHandler);

	    _.$list.on('touchmove.slick mousemove.slick', {
	      action: 'move'
	    }, _.swipeHandler);

	    _.$list.on('touchend.slick mouseup.slick', {
	      action: 'end'
	    }, _.swipeHandler);

	    _.$list.on('touchcancel.slick mouseleave.slick', {
	      action: 'end'
	    }, _.swipeHandler);

	    _.$list.on('click.slick', _.clickHandler);

	    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

	    if (_.options.accessibility === true) {
	      _.$list.on('keydown.slick', _.keyHandler);
	    }

	    if (_.options.focusOnSelect === true) {
	      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	    }

	    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
	    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
	    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
	    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
	    $(_.setPosition);
	  };

	  Slick.prototype.initUI = function () {
	    var _ = this;

	    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	      _.$prevArrow.show();

	      _.$nextArrow.show();
	    }

	    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	      _.$dots.show();
	    }
	  };

	  Slick.prototype.keyHandler = function (event) {
	    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


	    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (event.keyCode === 37 && _.options.accessibility === true) {
	        _.changeSlide({
	          data: {
	            message: _.options.rtl === true ? 'next' : 'previous'
	          }
	        });
	      } else if (event.keyCode === 39 && _.options.accessibility === true) {
	        _.changeSlide({
	          data: {
	            message: _.options.rtl === true ? 'previous' : 'next'
	          }
	        });
	      }
	    }
	  };

	  Slick.prototype.lazyLoad = function () {
	    var _ = this,
	        loadRange,
	        cloneRange,
	        rangeStart,
	        rangeEnd;

	    function loadImages(imagesScope) {
	      $('img[data-lazy]', imagesScope).each(function () {
	        var image = $(this),
	            imageSource = $(this).attr('data-lazy'),
	            imageSrcSet = $(this).attr('data-srcset'),
	            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
	            imageToLoad = document.createElement('img');

	        imageToLoad.onload = function () {
	          image.animate({
	            opacity: 0
	          }, 100, function () {
	            if (imageSrcSet) {
	              image.attr('srcset', imageSrcSet);

	              if (imageSizes) {
	                image.attr('sizes', imageSizes);
	              }
	            }

	            image.attr('src', imageSource).animate({
	              opacity: 1
	            }, 200, function () {
	              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
	            });

	            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
	          });
	        };

	        imageToLoad.onerror = function () {
	          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

	          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
	        };

	        imageToLoad.src = imageSource;
	      });
	    }

	    if (_.options.centerMode === true) {
	      if (_.options.infinite === true) {
	        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
	        rangeEnd = rangeStart + _.options.slidesToShow + 2;
	      } else {
	        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
	        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
	      }
	    } else {
	      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
	      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

	      if (_.options.fade === true) {
	        if (rangeStart > 0) rangeStart--;
	        if (rangeEnd <= _.slideCount) rangeEnd++;
	      }
	    }

	    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

	    if (_.options.lazyLoad === 'anticipated') {
	      var prevSlide = rangeStart - 1,
	          nextSlide = rangeEnd,
	          $slides = _.$slider.find('.slick-slide');

	      for (var i = 0; i < _.options.slidesToScroll; i++) {
	        if (prevSlide < 0) prevSlide = _.slideCount - 1;
	        loadRange = loadRange.add($slides.eq(prevSlide));
	        loadRange = loadRange.add($slides.eq(nextSlide));
	        prevSlide--;
	        nextSlide++;
	      }
	    }

	    loadImages(loadRange);

	    if (_.slideCount <= _.options.slidesToShow) {
	      cloneRange = _.$slider.find('.slick-slide');
	      loadImages(cloneRange);
	    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
	      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
	      loadImages(cloneRange);
	    } else if (_.currentSlide === 0) {
	      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
	      loadImages(cloneRange);
	    }
	  };

	  Slick.prototype.loadSlider = function () {
	    var _ = this;

	    _.setPosition();

	    _.$slideTrack.css({
	      opacity: 1
	    });

	    _.$slider.removeClass('slick-loading');

	    _.initUI();

	    if (_.options.lazyLoad === 'progressive') {
	      _.progressiveLazyLoad();
	    }
	  };

	  Slick.prototype.next = Slick.prototype.slickNext = function () {
	    var _ = this;

	    _.changeSlide({
	      data: {
	        message: 'next'
	      }
	    });
	  };

	  Slick.prototype.orientationChange = function () {
	    var _ = this;

	    _.checkResponsive();

	    _.setPosition();
	  };

	  Slick.prototype.pause = Slick.prototype.slickPause = function () {
	    var _ = this;

	    _.autoPlayClear();

	    _.paused = true;
	  };

	  Slick.prototype.play = Slick.prototype.slickPlay = function () {
	    var _ = this;

	    _.autoPlay();

	    _.options.autoplay = true;
	    _.paused = false;
	    _.focussed = false;
	    _.interrupted = false;
	  };

	  Slick.prototype.postSlide = function (index) {
	    var _ = this;

	    if (!_.unslicked) {
	      _.$slider.trigger('afterChange', [_, index]);

	      _.animating = false;

	      if (_.slideCount > _.options.slidesToShow) {
	        _.setPosition();
	      }

	      _.swipeLeft = null;

	      if (_.options.autoplay) {
	        _.autoPlay();
	      }

	      if (_.options.accessibility === true) {
	        _.initADA();

	        if (_.options.focusOnChange) {
	          var $currentSlide = $(_.$slides.get(_.currentSlide));
	          $currentSlide.attr('tabindex', 0).focus();
	        }
	      }
	    }
	  };

	  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
	    var _ = this;

	    _.changeSlide({
	      data: {
	        message: 'previous'
	      }
	    });
	  };

	  Slick.prototype.preventDefault = function (event) {
	    event.preventDefault();
	  };

	  Slick.prototype.progressiveLazyLoad = function (tryCount) {
	    tryCount = tryCount || 1;

	    var _ = this,
	        $imgsToLoad = $('img[data-lazy]', _.$slider),
	        image,
	        imageSource,
	        imageSrcSet,
	        imageSizes,
	        imageToLoad;

	    if ($imgsToLoad.length) {
	      image = $imgsToLoad.first();
	      imageSource = image.attr('data-lazy');
	      imageSrcSet = image.attr('data-srcset');
	      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
	      imageToLoad = document.createElement('img');

	      imageToLoad.onload = function () {
	        if (imageSrcSet) {
	          image.attr('srcset', imageSrcSet);

	          if (imageSizes) {
	            image.attr('sizes', imageSizes);
	          }
	        }

	        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

	        if (_.options.adaptiveHeight === true) {
	          _.setPosition();
	        }

	        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

	        _.progressiveLazyLoad();
	      };

	      imageToLoad.onerror = function () {
	        if (tryCount < 3) {
	          /**
	           * try to load the image 3 times,
	           * leave a slight delay so we don't get
	           * servers blocking the request.
	           */
	          setTimeout(function () {
	            _.progressiveLazyLoad(tryCount + 1);
	          }, 500);
	        } else {
	          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

	          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

	          _.progressiveLazyLoad();
	        }
	      };

	      imageToLoad.src = imageSource;
	    } else {
	      _.$slider.trigger('allImagesLoaded', [_]);
	    }
	  };

	  Slick.prototype.refresh = function (initializing) {
	    var _ = this,
	        currentSlide,
	        lastVisibleIndex;

	    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
	    // last visible index.

	    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
	      _.currentSlide = lastVisibleIndex;
	    } // if less slides than to show, go to start.


	    if (_.slideCount <= _.options.slidesToShow) {
	      _.currentSlide = 0;
	    }

	    currentSlide = _.currentSlide;

	    _.destroy(true);

	    $.extend(_, _.initials, {
	      currentSlide: currentSlide
	    });

	    _.init();

	    if (!initializing) {
	      _.changeSlide({
	        data: {
	          message: 'index',
	          index: currentSlide
	        }
	      }, false);
	    }
	  };

	  Slick.prototype.registerBreakpoints = function () {
	    var _ = this,
	        breakpoint,
	        currentBreakpoint,
	        l,
	        responsiveSettings = _.options.responsive || null;

	    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
	      _.respondTo = _.options.respondTo || 'window';

	      for (breakpoint in responsiveSettings) {
	        l = _.breakpoints.length - 1;

	        if (responsiveSettings.hasOwnProperty(breakpoint)) {
	          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
	          // ones with the same breakpoint number, we don't want dupes.

	          while (l >= 0) {
	            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
	              _.breakpoints.splice(l, 1);
	            }

	            l--;
	          }

	          _.breakpoints.push(currentBreakpoint);

	          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
	        }
	      }

	      _.breakpoints.sort(function (a, b) {
	        return _.options.mobileFirst ? a - b : b - a;
	      });
	    }
	  };

	  Slick.prototype.reinit = function () {
	    var _ = this;

	    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
	    _.slideCount = _.$slides.length;

	    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
	      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
	    }

	    if (_.slideCount <= _.options.slidesToShow) {
	      _.currentSlide = 0;
	    }

	    _.registerBreakpoints();

	    _.setProps();

	    _.setupInfinite();

	    _.buildArrows();

	    _.updateArrows();

	    _.initArrowEvents();

	    _.buildDots();

	    _.updateDots();

	    _.initDotEvents();

	    _.cleanUpSlideEvents();

	    _.initSlideEvents();

	    _.checkResponsive(false, true);

	    if (_.options.focusOnSelect === true) {
	      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
	    }

	    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

	    _.setPosition();

	    _.focusHandler();

	    _.paused = !_.options.autoplay;

	    _.autoPlay();

	    _.$slider.trigger('reInit', [_]);
	  };

	  Slick.prototype.resize = function () {
	    var _ = this;

	    if ($(window).width() !== _.windowWidth) {
	      clearTimeout(_.windowDelay);
	      _.windowDelay = window.setTimeout(function () {
	        _.windowWidth = $(window).width();

	        _.checkResponsive();

	        if (!_.unslicked) {
	          _.setPosition();
	        }
	      }, 50);
	    }
	  };

	  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
	    var _ = this;

	    if (typeof index === 'boolean') {
	      removeBefore = index;
	      index = removeBefore === true ? 0 : _.slideCount - 1;
	    } else {
	      index = removeBefore === true ? --index : index;
	    }

	    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
	      return false;
	    }

	    _.unload();

	    if (removeAll === true) {
	      _.$slideTrack.children().remove();
	    } else {
	      _.$slideTrack.children(this.options.slide).eq(index).remove();
	    }

	    _.$slides = _.$slideTrack.children(this.options.slide);

	    _.$slideTrack.children(this.options.slide).detach();

	    _.$slideTrack.append(_.$slides);

	    _.$slidesCache = _.$slides;

	    _.reinit();
	  };

	  Slick.prototype.setCSS = function (position) {
	    var _ = this,
	        positionProps = {},
	        x,
	        y;

	    if (_.options.rtl === true) {
	      position = -position;
	    }

	    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
	    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
	    positionProps[_.positionProp] = position;

	    if (_.transformsEnabled === false) {
	      _.$slideTrack.css(positionProps);
	    } else {
	      positionProps = {};

	      if (_.cssTransitions === false) {
	        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

	        _.$slideTrack.css(positionProps);
	      } else {
	        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

	        _.$slideTrack.css(positionProps);
	      }
	    }
	  };

	  Slick.prototype.setDimensions = function () {
	    var _ = this;

	    if (_.options.vertical === false) {
	      if (_.options.centerMode === true) {
	        _.$list.css({
	          padding: '0px ' + _.options.centerPadding
	        });
	      }
	    } else {
	      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

	      if (_.options.centerMode === true) {
	        _.$list.css({
	          padding: _.options.centerPadding + ' 0px'
	        });
	      }
	    }

	    _.listWidth = _.$list.width();
	    _.listHeight = _.$list.height();

	    if (_.options.vertical === false && _.options.variableWidth === false) {
	      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

	      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
	    } else if (_.options.variableWidth === true) {
	      _.$slideTrack.width(5000 * _.slideCount);
	    } else {
	      _.slideWidth = Math.ceil(_.listWidth);

	      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
	    }

	    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

	    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
	  };

	  Slick.prototype.setFade = function () {
	    var _ = this,
	        targetLeft;

	    _.$slides.each(function (index, element) {
	      targetLeft = _.slideWidth * index * -1;

	      if (_.options.rtl === true) {
	        $(element).css({
	          position: 'relative',
	          right: targetLeft,
	          top: 0,
	          zIndex: _.options.zIndex - 2,
	          opacity: 0
	        });
	      } else {
	        $(element).css({
	          position: 'relative',
	          left: targetLeft,
	          top: 0,
	          zIndex: _.options.zIndex - 2,
	          opacity: 0
	        });
	      }
	    });

	    _.$slides.eq(_.currentSlide).css({
	      zIndex: _.options.zIndex - 1,
	      opacity: 1
	    });
	  };

	  Slick.prototype.setHeight = function () {
	    var _ = this;

	    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
	      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

	      _.$list.css('height', targetHeight);
	    }
	  };

	  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
	    /**
	     * accepts arguments in format of:
	     *
	     *  - for changing a single option's value:
	     *     .slick("setOption", option, value, refresh )
	     *
	     *  - for changing a set of responsive options:
	     *     .slick("setOption", 'responsive', [{}, ...], refresh )
	     *
	     *  - for updating multiple values at once (not responsive)
	     *     .slick("setOption", { 'option': value, ... }, refresh )
	     */
	    var _ = this,
	        l,
	        item,
	        option,
	        value,
	        refresh = false,
	        type;

	    if ($.type(arguments[0]) === 'object') {
	      option = arguments[0];
	      refresh = arguments[1];
	      type = 'multiple';
	    } else if ($.type(arguments[0]) === 'string') {
	      option = arguments[0];
	      value = arguments[1];
	      refresh = arguments[2];

	      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
	        type = 'responsive';
	      } else if (typeof arguments[1] !== 'undefined') {
	        type = 'single';
	      }
	    }

	    if (type === 'single') {
	      _.options[option] = value;
	    } else if (type === 'multiple') {
	      $.each(option, function (opt, val) {
	        _.options[opt] = val;
	      });
	    } else if (type === 'responsive') {
	      for (item in value) {
	        if ($.type(_.options.responsive) !== 'array') {
	          _.options.responsive = [value[item]];
	        } else {
	          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

	          while (l >= 0) {
	            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
	              _.options.responsive.splice(l, 1);
	            }

	            l--;
	          }

	          _.options.responsive.push(value[item]);
	        }
	      }
	    }

	    if (refresh) {
	      _.unload();

	      _.reinit();
	    }
	  };

	  Slick.prototype.setPosition = function () {
	    var _ = this;

	    _.setDimensions();

	    _.setHeight();

	    if (_.options.fade === false) {
	      _.setCSS(_.getLeft(_.currentSlide));
	    } else {
	      _.setFade();
	    }

	    _.$slider.trigger('setPosition', [_]);
	  };

	  Slick.prototype.setProps = function () {
	    var _ = this,
	        bodyStyle = document.body.style;

	    _.positionProp = _.options.vertical === true ? 'top' : 'left';

	    if (_.positionProp === 'top') {
	      _.$slider.addClass('slick-vertical');
	    } else {
	      _.$slider.removeClass('slick-vertical');
	    }

	    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
	      if (_.options.useCSS === true) {
	        _.cssTransitions = true;
	      }
	    }

	    if (_.options.fade) {
	      if (typeof _.options.zIndex === 'number') {
	        if (_.options.zIndex < 3) {
	          _.options.zIndex = 3;
	        }
	      } else {
	        _.options.zIndex = _.defaults.zIndex;
	      }
	    }

	    if (bodyStyle.OTransform !== undefined) {
	      _.animType = 'OTransform';
	      _.transformType = '-o-transform';
	      _.transitionType = 'OTransition';
	      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	    }

	    if (bodyStyle.MozTransform !== undefined) {
	      _.animType = 'MozTransform';
	      _.transformType = '-moz-transform';
	      _.transitionType = 'MozTransition';
	      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
	    }

	    if (bodyStyle.webkitTransform !== undefined) {
	      _.animType = 'webkitTransform';
	      _.transformType = '-webkit-transform';
	      _.transitionType = 'webkitTransition';
	      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
	    }

	    if (bodyStyle.msTransform !== undefined) {
	      _.animType = 'msTransform';
	      _.transformType = '-ms-transform';
	      _.transitionType = 'msTransition';
	      if (bodyStyle.msTransform === undefined) _.animType = false;
	    }

	    if (bodyStyle.transform !== undefined && _.animType !== false) {
	      _.animType = 'transform';
	      _.transformType = 'transform';
	      _.transitionType = 'transition';
	    }

	    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
	  };

	  Slick.prototype.setSlideClasses = function (index) {
	    var _ = this,
	        centerOffset,
	        allSlides,
	        indexOffset,
	        remainder;

	    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

	    _.$slides.eq(index).addClass('slick-current');

	    if (_.options.centerMode === true) {
	      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
	      centerOffset = Math.floor(_.options.slidesToShow / 2);

	      if (_.options.infinite === true) {
	        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
	          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
	        } else {
	          indexOffset = _.options.slidesToShow + index;
	          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
	        }

	        if (index === 0) {
	          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
	        } else if (index === _.slideCount - 1) {
	          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
	        }
	      }

	      _.$slides.eq(index).addClass('slick-center');
	    } else {
	      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
	        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	      } else if (allSlides.length <= _.options.slidesToShow) {
	        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
	      } else {
	        remainder = _.slideCount % _.options.slidesToShow;
	        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

	        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
	          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
	        } else {
	          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
	        }
	      }
	    }

	    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
	      _.lazyLoad();
	    }
	  };

	  Slick.prototype.setupInfinite = function () {
	    var _ = this,
	        i,
	        slideIndex,
	        infiniteCount;

	    if (_.options.fade === true) {
	      _.options.centerMode = false;
	    }

	    if (_.options.infinite === true && _.options.fade === false) {
	      slideIndex = null;

	      if (_.slideCount > _.options.slidesToShow) {
	        if (_.options.centerMode === true) {
	          infiniteCount = _.options.slidesToShow + 1;
	        } else {
	          infiniteCount = _.options.slidesToShow;
	        }

	        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
	          slideIndex = i - 1;
	          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
	        }

	        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
	          slideIndex = i;
	          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
	        }

	        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
	          $(this).attr('id', '');
	        });
	      }
	    }
	  };

	  Slick.prototype.interrupt = function (toggle) {
	    var _ = this;

	    if (!toggle) {
	      _.autoPlay();
	    }

	    _.interrupted = toggle;
	  };

	  Slick.prototype.selectHandler = function (event) {
	    var _ = this;

	    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
	    var index = parseInt(targetElement.attr('data-slick-index'));
	    if (!index) index = 0;

	    if (_.slideCount <= _.options.slidesToShow) {
	      _.slideHandler(index, false, true);

	      return;
	    }

	    _.slideHandler(index);
	  };

	  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
	    var targetSlide,
	        animSlide,
	        oldSlide,
	        slideLeft,
	        targetLeft = null,
	        _ = this,
	        navTarget;

	    sync = sync || false;

	    if (_.animating === true && _.options.waitForAnimate === true) {
	      return;
	    }

	    if (_.options.fade === true && _.currentSlide === index) {
	      return;
	    }

	    if (sync === false) {
	      _.asNavFor(index);
	    }

	    targetSlide = index;
	    targetLeft = _.getLeft(targetSlide);
	    slideLeft = _.getLeft(_.currentSlide);
	    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

	    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
	      if (_.options.fade === false) {
	        targetSlide = _.currentSlide;

	        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	          _.animateSlide(slideLeft, function () {
	            _.postSlide(targetSlide);
	          });
	        } else {
	          _.postSlide(targetSlide);
	        }
	      }

	      return;
	    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
	      if (_.options.fade === false) {
	        targetSlide = _.currentSlide;

	        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	          _.animateSlide(slideLeft, function () {
	            _.postSlide(targetSlide);
	          });
	        } else {
	          _.postSlide(targetSlide);
	        }
	      }

	      return;
	    }

	    if (_.options.autoplay) {
	      clearInterval(_.autoPlayTimer);
	    }

	    if (targetSlide < 0) {
	      if (_.slideCount % _.options.slidesToScroll !== 0) {
	        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
	      } else {
	        animSlide = _.slideCount + targetSlide;
	      }
	    } else if (targetSlide >= _.slideCount) {
	      if (_.slideCount % _.options.slidesToScroll !== 0) {
	        animSlide = 0;
	      } else {
	        animSlide = targetSlide - _.slideCount;
	      }
	    } else {
	      animSlide = targetSlide;
	    }

	    _.animating = true;

	    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

	    oldSlide = _.currentSlide;
	    _.currentSlide = animSlide;

	    _.setSlideClasses(_.currentSlide);

	    if (_.options.asNavFor) {
	      navTarget = _.getNavTarget();
	      navTarget = navTarget.slick('getSlick');

	      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
	        navTarget.setSlideClasses(_.currentSlide);
	      }
	    }

	    _.updateDots();

	    _.updateArrows();

	    if (_.options.fade === true) {
	      if (dontAnimate !== true) {
	        _.fadeSlideOut(oldSlide);

	        _.fadeSlide(animSlide, function () {
	          _.postSlide(animSlide);
	        });
	      } else {
	        _.postSlide(animSlide);
	      }

	      _.animateHeight();

	      return;
	    }

	    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
	      _.animateSlide(targetLeft, function () {
	        _.postSlide(animSlide);
	      });
	    } else {
	      _.postSlide(animSlide);
	    }
	  };

	  Slick.prototype.startLoad = function () {
	    var _ = this;

	    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
	      _.$prevArrow.hide();

	      _.$nextArrow.hide();
	    }

	    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
	      _.$dots.hide();
	    }

	    _.$slider.addClass('slick-loading');
	  };

	  Slick.prototype.swipeDirection = function () {
	    var xDist,
	        yDist,
	        r,
	        swipeAngle,
	        _ = this;

	    xDist = _.touchObject.startX - _.touchObject.curX;
	    yDist = _.touchObject.startY - _.touchObject.curY;
	    r = Math.atan2(yDist, xDist);
	    swipeAngle = Math.round(r * 180 / Math.PI);

	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }

	    if (swipeAngle <= 45 && swipeAngle >= 0) {
	      return _.options.rtl === false ? 'left' : 'right';
	    }

	    if (swipeAngle <= 360 && swipeAngle >= 315) {
	      return _.options.rtl === false ? 'left' : 'right';
	    }

	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return _.options.rtl === false ? 'right' : 'left';
	    }

	    if (_.options.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }

	    return 'vertical';
	  };

	  Slick.prototype.swipeEnd = function (event) {
	    var _ = this,
	        slideCount,
	        direction;

	    _.dragging = false;
	    _.swiping = false;

	    if (_.scrolling) {
	      _.scrolling = false;
	      return false;
	    }

	    _.interrupted = false;
	    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

	    if (_.touchObject.curX === undefined) {
	      return false;
	    }

	    if (_.touchObject.edgeHit === true) {
	      _.$slider.trigger('edge', [_, _.swipeDirection()]);
	    }

	    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
	      direction = _.swipeDirection();

	      switch (direction) {
	        case 'left':
	        case 'down':
	          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
	          _.currentDirection = 0;
	          break;

	        case 'right':
	        case 'up':
	          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
	          _.currentDirection = 1;
	          break;
	      }

	      if (direction != 'vertical') {
	        _.slideHandler(slideCount);

	        _.touchObject = {};

	        _.$slider.trigger('swipe', [_, direction]);
	      }
	    } else {
	      if (_.touchObject.startX !== _.touchObject.curX) {
	        _.slideHandler(_.currentSlide);

	        _.touchObject = {};
	      }
	    }
	  };

	  Slick.prototype.swipeHandler = function (event) {
	    var _ = this;

	    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
	      return;
	    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
	      return;
	    }

	    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
	    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

	    if (_.options.verticalSwiping === true) {
	      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
	    }

	    switch (event.data.action) {
	      case 'start':
	        _.swipeStart(event);

	        break;

	      case 'move':
	        _.swipeMove(event);

	        break;

	      case 'end':
	        _.swipeEnd(event);

	        break;
	    }
	  };

	  Slick.prototype.swipeMove = function (event) {
	    var _ = this,
	        curLeft,
	        swipeDirection,
	        swipeLength,
	        positionOffset,
	        touches,
	        verticalSwipeLength;

	    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

	    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
	      return false;
	    }

	    curLeft = _.getLeft(_.currentSlide);
	    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
	    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
	    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
	    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

	    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
	      _.scrolling = true;
	      return false;
	    }

	    if (_.options.verticalSwiping === true) {
	      _.touchObject.swipeLength = verticalSwipeLength;
	    }

	    swipeDirection = _.swipeDirection();

	    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
	      _.swiping = true;
	      event.preventDefault();
	    }

	    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

	    if (_.options.verticalSwiping === true) {
	      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
	    }

	    swipeLength = _.touchObject.swipeLength;
	    _.touchObject.edgeHit = false;

	    if (_.options.infinite === false) {
	      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
	        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
	        _.touchObject.edgeHit = true;
	      }
	    }

	    if (_.options.vertical === false) {
	      _.swipeLeft = curLeft + swipeLength * positionOffset;
	    } else {
	      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
	    }

	    if (_.options.verticalSwiping === true) {
	      _.swipeLeft = curLeft + swipeLength * positionOffset;
	    }

	    if (_.options.fade === true || _.options.touchMove === false) {
	      return false;
	    }

	    if (_.animating === true) {
	      _.swipeLeft = null;
	      return false;
	    }

	    _.setCSS(_.swipeLeft);
	  };

	  Slick.prototype.swipeStart = function (event) {
	    var _ = this,
	        touches;

	    _.interrupted = true;

	    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
	      _.touchObject = {};
	      return false;
	    }

	    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
	      touches = event.originalEvent.touches[0];
	    }

	    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
	    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
	    _.dragging = true;
	  };

	  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
	    var _ = this;

	    if (_.$slidesCache !== null) {
	      _.unload();

	      _.$slideTrack.children(this.options.slide).detach();

	      _.$slidesCache.appendTo(_.$slideTrack);

	      _.reinit();
	    }
	  };

	  Slick.prototype.unload = function () {
	    var _ = this;

	    $('.slick-cloned', _.$slider).remove();

	    if (_.$dots) {
	      _.$dots.remove();
	    }

	    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
	      _.$prevArrow.remove();
	    }

	    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
	      _.$nextArrow.remove();
	    }

	    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
	  };

	  Slick.prototype.unslick = function (fromBreakpoint) {
	    var _ = this;

	    _.$slider.trigger('unslick', [_, fromBreakpoint]);

	    _.destroy();
	  };

	  Slick.prototype.updateArrows = function () {
	    var _ = this,
	        centerOffset;

	    centerOffset = Math.floor(_.options.slidesToShow / 2);

	    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
	      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

	      if (_.currentSlide === 0) {
	        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

	        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
	        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

	        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
	        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

	        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
	      }
	    }
	  };

	  Slick.prototype.updateDots = function () {
	    var _ = this;

	    if (_.$dots !== null) {
	      _.$dots.find('li').removeClass('slick-active').end();

	      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
	    }
	  };

	  Slick.prototype.visibility = function () {
	    var _ = this;

	    if (_.options.autoplay) {
	      if (document[_.hidden]) {
	        _.interrupted = true;
	      } else {
	        _.interrupted = false;
	      }
	    }
	  };

	  $.fn.slick = function () {
	    var _ = this,
	        opt = arguments[0],
	        args = Array.prototype.slice.call(arguments, 1),
	        l = _.length,
	        i,
	        ret;

	    for (i = 0; i < l; i++) {
	      if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
	      if (typeof ret != 'undefined') return ret;
	    }

	    return _;
	  };
	});
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	/*!
	 * GSAP 3.12.5
	 * https://gsap.com
	 *
	 * @license Copyright 2008-2024, GreenSock. All rights reserved.
	 * Subject to the terms at https://gsap.com/standard-license or for
	 * Club GSAP members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	/* eslint-disable */


	var _config = {
	  autoSleep: 120,
	  force3D: "auto",
	  nullTargetWarn: 1,
	  units: {
	    lineHeight: ""
	  }
	},
	    _defaults = {
	  duration: .5,
	  overwrite: false,
	  delay: 0
	},
	    _suppressOverwrites,
	    _reverting,
	    _context,
	    _bigNum = 1e8,
	    _tinyNum = 1 / _bigNum,
	    _2PI = Math.PI * 2,
	    _HALF_PI = _2PI / 4,
	    _gsID = 0,
	    _sqrt = Math.sqrt,
	    _cos = Math.cos,
	    _sin = Math.sin,
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isUndefined = function _isUndefined(value) {
	  return typeof value === "undefined";
	},
	    _isObject = function _isObject(value) {
	  return typeof value === "object";
	},
	    _isNotFalse = function _isNotFalse(value) {
	  return value !== false;
	},
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _isFuncOrString = function _isFuncOrString(value) {
	  return _isFunction(value) || _isString(value);
	},
	    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
	    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
	_isArray = Array.isArray,
	    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
	    //only numbers (including negatives and decimals) but NOT relative values.
	_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
	_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
	_relExp = /[+-]=-?[.\d]+/,
	    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
	    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
	_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	    _globalTimeline,
	    _win,
	    _coreInitted,
	    _doc,
	    _globals = {},
	    _installScope = {},
	    _coreReady,
	    _install = function _install(scope) {
	  return (_installScope = _merge(scope, _globals)) && gsap;
	},
	    _missingPlugin = function _missingPlugin(property, value) {
	  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
	},
	    _warn = function _warn(message, suppress) {
	  return !suppress && console.warn(message);
	},
	    _addGlobal = function _addGlobal(name, obj) {
	  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
	},
	    _emptyFunc = function _emptyFunc() {
	  return 0;
	},
	    _startAtRevertConfig = {
	  suppressEvents: true,
	  isStart: true,
	  kill: false
	},
	    _revertConfigNoKill = {
	  suppressEvents: true,
	  kill: false
	},
	    _revertConfig = {
	  suppressEvents: true
	},
	    _reservedProps = {},
	    _lazyTweens = [],
	    _lazyLookup = {},
	    _lastRenderedFrame,
	    _plugins = {},
	    _effects = {},
	    _nextGCFrame = 30,
	    _harnessPlugins = [],
	    _callbackNames = "",
	    _harness = function _harness(targets) {
	  var target = targets[0],
	      harnessPlugin,
	      i;
	  _isObject(target) || _isFunction(target) || (targets = [targets]);

	  if (!(harnessPlugin = (target._gsap || {}).harness)) {
	    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
	    i = _harnessPlugins.length;

	    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

	    harnessPlugin = _harnessPlugins[i];
	  }

	  i = targets.length;

	  while (i--) {
	    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
	  }

	  return targets;
	},
	    _getCache = function _getCache(target) {
	  return target._gsap || _harness(toArray(target))[0]._gsap;
	},
	    _getProperty = function _getProperty(target, property, v) {
	  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
	},
	    _forEachName = function _forEachName(names, func) {
	  return (names = names.split(",")).forEach(func) || names;
	},
	    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
	_round = function _round(value) {
	  return Math.round(value * 100000) / 100000 || 0;
	},
	    _roundPrecise = function _roundPrecise(value) {
	  return Math.round(value * 10000000) / 10000000 || 0;
	},
	    // increased precision mostly for timing values.
	_parseRelative = function _parseRelative(start, value) {
	  var operator = value.charAt(0),
	      end = parseFloat(value.substr(2));
	  start = parseFloat(start);
	  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
	},
	    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
	  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
	  var l = toFind.length,
	      i = 0;

	  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

	  return i < l;
	},
	    _lazyRender = function _lazyRender() {
	  var l = _lazyTweens.length,
	      a = _lazyTweens.slice(0),
	      i,
	      tween;

	  _lazyLookup = {};
	  _lazyTweens.length = 0;

	  for (i = 0; i < l; i++) {
	    tween = a[i];
	    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
	  }
	},
	    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
	  _lazyTweens.length && !_reverting && _lazyRender();
	  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
	  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
	},
	    _numericIfPossible = function _numericIfPossible(value) {
	  var n = parseFloat(value);
	  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
	},
	    _passThrough = function _passThrough(p) {
	  return p;
	},
	    _setDefaults = function _setDefaults(obj, defaults) {
	  for (var p in defaults) {
	    p in obj || (obj[p] = defaults[p]);
	  }

	  return obj;
	},
	    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
	  return function (obj, defaults) {
	    for (var p in defaults) {
	      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
	    }
	  };
	},
	    _merge = function _merge(base, toMerge) {
	  for (var p in toMerge) {
	    base[p] = toMerge[p];
	  }

	  return base;
	},
	    _mergeDeep = function _mergeDeep(base, toMerge) {
	  for (var p in toMerge) {
	    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
	  }

	  return base;
	},
	    _copyExcluding = function _copyExcluding(obj, excluding) {
	  var copy = {},
	      p;

	  for (p in obj) {
	    p in excluding || (copy[p] = obj[p]);
	  }

	  return copy;
	},
	    _inheritDefaults = function _inheritDefaults(vars) {
	  var parent = vars.parent || _globalTimeline,
	      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

	  if (_isNotFalse(vars.inherit)) {
	    while (parent) {
	      func(vars, parent.vars.defaults);
	      parent = parent.parent || parent._dp;
	    }
	  }

	  return vars;
	},
	    _arraysMatch = function _arraysMatch(a1, a2) {
	  var i = a1.length,
	      match = i === a2.length;

	  while (match && i-- && a1[i] === a2[i]) {}

	  return i < 0;
	},
	    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
	  if (firstProp === void 0) {
	    firstProp = "_first";
	  }

	  if (lastProp === void 0) {
	    lastProp = "_last";
	  }

	  var prev = parent[lastProp],
	      t;

	  if (sortBy) {
	    t = child[sortBy];

	    while (prev && prev[sortBy] > t) {
	      prev = prev._prev;
	    }
	  }

	  if (prev) {
	    child._next = prev._next;
	    prev._next = child;
	  } else {
	    child._next = parent[firstProp];
	    parent[firstProp] = child;
	  }

	  if (child._next) {
	    child._next._prev = child;
	  } else {
	    parent[lastProp] = child;
	  }

	  child._prev = prev;
	  child.parent = child._dp = parent;
	  return child;
	},
	    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
	  if (firstProp === void 0) {
	    firstProp = "_first";
	  }

	  if (lastProp === void 0) {
	    lastProp = "_last";
	  }

	  var prev = child._prev,
	      next = child._next;

	  if (prev) {
	    prev._next = next;
	  } else if (parent[firstProp] === child) {
	    parent[firstProp] = next;
	  }

	  if (next) {
	    next._prev = prev;
	  } else if (parent[lastProp] === child) {
	    parent[lastProp] = prev;
	  }

	  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
	},
	    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
	  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
	  child._act = 0;
	},
	    _uncache = function _uncache(animation, child) {
	  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
	    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
	    var a = animation;

	    while (a) {
	      a._dirty = 1;
	      a = a.parent;
	    }
	  }

	  return animation;
	},
	    _recacheAncestors = function _recacheAncestors(animation) {
	  var parent = animation.parent;

	  while (parent && parent.parent) {
	    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
	    parent._dirty = 1;
	    parent.totalDuration();
	    parent = parent.parent;
	  }

	  return animation;
	},
	    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
	  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
	},
	    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
	  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
	},
	    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
	  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
	},
	    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
	_animationCycle = function _animationCycle(tTime, cycleDuration) {
	  var whole = Math.floor(tTime /= cycleDuration);
	  return tTime && whole === tTime ? whole - 1 : whole;
	},
	    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
	  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
	},
	    _setEnd = function _setEnd(animation) {
	  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
	},
	    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
	  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
	  var parent = animation._dp;

	  if (parent && parent.smoothChildTiming && animation._ts) {
	    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

	    _setEnd(animation);

	    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
	  }

	  return animation;
	},

	/*
	_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
		let cycleDuration = duration + repeatDelay,
			time = _round(clampedTotalTime % cycleDuration);
		if (time > duration) {
			time = duration;
		}
		return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
	},
	*/
	_postAddChecks = function _postAddChecks(timeline, child) {
	  var t;

	  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
	    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
	    t = _parentToChildTotalTime(timeline.rawTime(), child);

	    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
	      child.render(t, true);
	    }
	  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


	  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
	    //in case any of the ancestors had completed but should now be enabled...
	    if (timeline._dur < timeline.duration()) {
	      t = timeline;

	      while (t._dp) {
	        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

	        t = t._dp;
	      }
	    }

	    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
	  }
	},
	    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
	  child.parent && _removeFromParent(child);
	  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
	  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

	  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

	  _isFromOrFromStart(child) || (timeline._recent = child);
	  skipChecks || _postAddChecks(timeline, child);
	  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

	  return timeline;
	},
	    _scrollTrigger = function _scrollTrigger(animation, trigger) {
	  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
	},
	    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
	  _initTween(tween, time, tTime);

	  if (!tween._initted) {
	    return 1;
	  }

	  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
	    _lazyTweens.push(tween);

	    tween._lazy = [tTime, suppressEvents];
	    return 1;
	  }
	},
	    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
	  var parent = _ref.parent;
	  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
	},
	    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
	_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
	  var data = _ref2.data;
	  return data === "isFromStart" || data === "isStart";
	},
	    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
	  var prevRatio = tween.ratio,
	      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
	      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
	  repeatDelay = tween._rDelay,
	      tTime = 0,
	      pt,
	      iteration,
	      prevIteration;

	  if (repeatDelay && tween._repeat) {
	    // in case there's a zero-duration tween that has a repeat with a repeatDelay
	    tTime = _clamp(0, tween._tDur, totalTime);
	    iteration = _animationCycle(tTime, repeatDelay);
	    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

	    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
	      // if iteration changed
	      prevRatio = 1 - ratio;
	      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
	    }
	  }

	  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
	    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
	      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
	      return;
	    }

	    prevIteration = tween._zTime;
	    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

	    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

	    tween.ratio = ratio;
	    tween._from && (ratio = 1 - ratio);
	    tween._time = 0;
	    tween._tTime = tTime;
	    pt = tween._pt;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
	    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
	    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

	    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
	      ratio && _removeFromParent(tween, 1);

	      if (!suppressEvents && !_reverting) {
	        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

	        tween._prom && tween._prom();
	      }
	    }
	  } else if (!tween._zTime) {
	    tween._zTime = totalTime;
	  }
	},
	    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
	  var child;

	  if (time > prevTime) {
	    child = animation._first;

	    while (child && child._start <= time) {
	      if (child.data === "isPause" && child._start > prevTime) {
	        return child;
	      }

	      child = child._next;
	    }
	  } else {
	    child = animation._last;

	    while (child && child._start >= time) {
	      if (child.data === "isPause" && child._start < prevTime) {
	        return child;
	      }

	      child = child._prev;
	    }
	  }
	},
	    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
	  var repeat = animation._repeat,
	      dur = _roundPrecise(duration) || 0,
	      totalProgress = animation._tTime / animation._tDur;
	  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
	  animation._dur = dur;
	  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
	  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
	  animation.parent && _setEnd(animation);
	  skipUncache || _uncache(animation.parent, animation);
	  return animation;
	},
	    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
	  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
	},
	    _zeroPosition = {
	  _start: 0,
	  endTime: _emptyFunc,
	  totalDuration: _emptyFunc
	},
	    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
	  var labels = animation.labels,
	      recent = animation._recent || _zeroPosition,
	      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
	      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
	  i,
	      offset,
	      isPercent;

	  if (_isString(position) && (isNaN(position) || position in labels)) {
	    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
	    offset = position.charAt(0);
	    isPercent = position.substr(-1) === "%";
	    i = position.indexOf("=");

	    if (offset === "<" || offset === ">") {
	      i >= 0 && (position = position.replace(/=/, ""));
	      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
	    }

	    if (i < 0) {
	      position in labels || (labels[position] = clippedDuration);
	      return labels[position];
	    }

	    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

	    if (isPercent && percentAnimation) {
	      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
	    }

	    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
	  }

	  return position == null ? clippedDuration : +position;
	},
	    _createTweenType = function _createTweenType(type, params, timeline) {
	  var isLegacy = _isNumber(params[1]),
	      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
	      vars = params[varsIndex],
	      irVars,
	      parent;

	  isLegacy && (vars.duration = params[1]);
	  vars.parent = timeline;

	  if (type) {
	    irVars = vars;
	    parent = timeline;

	    while (parent && !("immediateRender" in irVars)) {
	      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
	      irVars = parent.vars.defaults || {};
	      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
	    }

	    vars.immediateRender = _isNotFalse(irVars.immediateRender);
	    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
	  }

	  return new Tween(params[0], vars, params[varsIndex + 1]);
	},
	    _conditionalReturn = function _conditionalReturn(value, func) {
	  return value || value === 0 ? func(value) : func;
	},
	    _clamp = function _clamp(min, max, value) {
	  return value < min ? min : value > max ? max : value;
	},
	    getUnit = function getUnit(value, v) {
	  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
	},
	    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
	clamp = function clamp(min, max, value) {
	  return _conditionalReturn(value, function (v) {
	    return _clamp(min, max, v);
	  });
	},
	    _slice = [].slice,
	    _isArrayLike = function _isArrayLike(value, nonEmpty) {
	  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
	},
	    _flatten = function _flatten(ar, leaveStrings, accumulator) {
	  if (accumulator === void 0) {
	    accumulator = [];
	  }

	  return ar.forEach(function (value) {
	    var _accumulator;

	    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
	  }) || accumulator;
	},
	    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
	toArray = function toArray(value, scope, leaveStrings) {
	  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
	},
	    selector = function selector(value) {
	  value = toArray(value)[0] || _warn("Invalid scope") || {};
	  return function (v) {
	    var el = value.current || value.nativeElement || value;
	    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
	  };
	},
	    shuffle = function shuffle(a) {
	  return a.sort(function () {
	    return .5 - Math.random();
	  });
	},
	    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
	//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
	distribute = function distribute(v) {
	  if (_isFunction(v)) {
	    return v;
	  }

	  var vars = _isObject(v) ? v : {
	    each: v
	  },
	      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
	  ease = _parseEase(vars.ease),
	      from = vars.from || 0,
	      base = parseFloat(vars.base) || 0,
	      cache = {},
	      isDecimal = from > 0 && from < 1,
	      ratios = isNaN(from) || isDecimal,
	      axis = vars.axis,
	      ratioX = from,
	      ratioY = from;

	  if (_isString(from)) {
	    ratioX = ratioY = {
	      center: .5,
	      edges: .5,
	      end: 1
	    }[from] || 0;
	  } else if (!isDecimal && ratios) {
	    ratioX = from[0];
	    ratioY = from[1];
	  }

	  return function (i, target, a) {
	    var l = (a || vars).length,
	        distances = cache[l],
	        originX,
	        originY,
	        x,
	        y,
	        d,
	        j,
	        max,
	        min,
	        wrapAt;

	    if (!distances) {
	      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

	      if (!wrapAt) {
	        max = -_bigNum;

	        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

	        wrapAt < l && wrapAt--;
	      }

	      distances = cache[l] = [];
	      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
	      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
	      max = 0;
	      min = _bigNum;

	      for (j = 0; j < l; j++) {
	        x = j % wrapAt - originX;
	        y = originY - (j / wrapAt | 0);
	        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
	        d > max && (max = d);
	        d < min && (min = d);
	      }

	      from === "random" && shuffle(distances);
	      distances.max = max - min;
	      distances.min = min;
	      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
	      distances.b = l < 0 ? base - l : base;
	      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

	      ease = ease && l < 0 ? _invertEase(ease) : ease;
	    }

	    l = (distances[i] - distances.min) / distances.max || 0;
	    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
	  };
	},
	    _roundModifier = function _roundModifier(v) {
	  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
	  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

	  return function (raw) {
	    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

	    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
	  };
	},
	    snap = function snap(snapTo, value) {
	  var isArray = _isArray(snapTo),
	      radius,
	      is2D;

	  if (!isArray && _isObject(snapTo)) {
	    radius = isArray = snapTo.radius || _bigNum;

	    if (snapTo.values) {
	      snapTo = toArray(snapTo.values);

	      if (is2D = !_isNumber(snapTo[0])) {
	        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
	      }
	    } else {
	      snapTo = _roundModifier(snapTo.increment);
	    }
	  }

	  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
	    is2D = snapTo(raw);
	    return Math.abs(is2D - raw) <= radius ? is2D : raw;
	  } : function (raw) {
	    var x = parseFloat(is2D ? raw.x : raw),
	        y = parseFloat(is2D ? raw.y : 0),
	        min = _bigNum,
	        closest = 0,
	        i = snapTo.length,
	        dx,
	        dy;

	    while (i--) {
	      if (is2D) {
	        dx = snapTo[i].x - x;
	        dy = snapTo[i].y - y;
	        dx = dx * dx + dy * dy;
	      } else {
	        dx = Math.abs(snapTo[i] - x);
	      }

	      if (dx < min) {
	        min = dx;
	        closest = i;
	      }
	    }

	    closest = !radius || min <= radius ? snapTo[closest] : raw;
	    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
	  });
	},
	    random = function random(min, max, roundingIncrement, returnFunction) {
	  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
	    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
	  });
	},
	    pipe = function pipe() {
	  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
	    functions[_key] = arguments[_key];
	  }

	  return function (value) {
	    return functions.reduce(function (v, f) {
	      return f(v);
	    }, value);
	  };
	},
	    unitize = function unitize(func, unit) {
	  return function (value) {
	    return func(parseFloat(value)) + (unit || getUnit(value));
	  };
	},
	    normalize = function normalize(min, max, value) {
	  return mapRange(min, max, 0, 1, value);
	},
	    _wrapArray = function _wrapArray(a, wrapper, value) {
	  return _conditionalReturn(value, function (index) {
	    return a[~~wrapper(index)];
	  });
	},
	    wrap = function wrap(min, max, value) {
	  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
	  var range = max - min;
	  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
	    return (range + (value - min) % range) % range + min;
	  });
	},
	    wrapYoyo = function wrapYoyo(min, max, value) {
	  var range = max - min,
	      total = range * 2;
	  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
	    value = (total + (value - min) % total) % total || 0;
	    return min + (value > range ? total - value : value);
	  });
	},
	    _replaceRandom = function _replaceRandom(value) {
	  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
	  var prev = 0,
	      s = "",
	      i,
	      nums,
	      end,
	      isArray;

	  while (~(i = value.indexOf("random(", prev))) {
	    end = value.indexOf(")", i);
	    isArray = value.charAt(i + 7) === "[";
	    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
	    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
	    prev = end + 1;
	  }

	  return s + value.substr(prev, value.length - prev);
	},
	    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
	  var inRange = inMax - inMin,
	      outRange = outMax - outMin;
	  return _conditionalReturn(value, function (value) {
	    return outMin + ((value - inMin) / inRange * outRange || 0);
	  });
	},
	    interpolate = function interpolate(start, end, progress, mutate) {
	  var func = isNaN(start + end) ? 0 : function (p) {
	    return (1 - p) * start + p * end;
	  };

	  if (!func) {
	    var isString = _isString(start),
	        master = {},
	        p,
	        i,
	        interpolators,
	        l,
	        il;

	    progress === true && (mutate = 1) && (progress = null);

	    if (isString) {
	      start = {
	        p: start
	      };
	      end = {
	        p: end
	      };
	    } else if (_isArray(start) && !_isArray(end)) {
	      interpolators = [];
	      l = start.length;
	      il = l - 2;

	      for (i = 1; i < l; i++) {
	        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
	      }

	      l--;

	      func = function func(p) {
	        p *= l;
	        var i = Math.min(il, ~~p);
	        return interpolators[i](p - i);
	      };

	      progress = end;
	    } else if (!mutate) {
	      start = _merge(_isArray(start) ? [] : {}, start);
	    }

	    if (!interpolators) {
	      for (p in end) {
	        _addPropTween.call(master, start, p, "get", end[p]);
	      }

	      func = function func(p) {
	        return _renderPropTweens(p, master) || (isString ? start.p : start);
	      };
	    }
	  }

	  return _conditionalReturn(progress, func);
	},
	    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
	  //used for nextLabel() and previousLabel()
	  var labels = timeline.labels,
	      min = _bigNum,
	      p,
	      distance,
	      label;

	  for (p in labels) {
	    distance = labels[p] - fromTime;

	    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
	      label = p;
	      min = distance;
	    }
	  }

	  return label;
	},
	    _callback = function _callback(animation, type, executeLazyFirst) {
	  var v = animation.vars,
	      callback = v[type],
	      prevContext = _context,
	      context = animation._ctx,
	      params,
	      scope,
	      result;

	  if (!callback) {
	    return;
	  }

	  params = v[type + "Params"];
	  scope = v.callbackScope || animation;
	  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

	  context && (_context = context);
	  result = params ? callback.apply(scope, params) : callback.call(scope);
	  _context = prevContext;
	  return result;
	},
	    _interrupt = function _interrupt(animation) {
	  _removeFromParent(animation);

	  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
	  animation.progress() < 1 && _callback(animation, "onInterrupt");
	  return animation;
	},
	    _quickTween,
	    _registerPluginQueue = [],
	    _createPlugin = function _createPlugin(config) {
	  if (!config) return;
	  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

	  if (_windowExists() || config.headless) {
	    // edge case: some build tools may pass in a null/undefined value
	    var name = config.name,
	        isFunc = _isFunction(config),
	        Plugin = name && !isFunc && config.init ? function () {
	      this._props = [];
	    } : config,
	        //in case someone passes in an object that's not a plugin, like CustomEase
	    instanceDefaults = {
	      init: _emptyFunc,
	      render: _renderPropTweens,
	      add: _addPropTween,
	      kill: _killPropTweensOf,
	      modifier: _addPluginModifier,
	      rawVars: 0
	    },
	        statics = {
	      targetTest: 0,
	      get: 0,
	      getSetter: _getSetter,
	      aliases: {},
	      register: 0
	    };

	    _wake();

	    if (config !== Plugin) {
	      if (_plugins[name]) {
	        return;
	      }

	      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


	      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


	      _plugins[Plugin.prop = name] = Plugin;

	      if (config.targetTest) {
	        _harnessPlugins.push(Plugin);

	        _reservedProps[name] = 1;
	      }

	      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
	    }

	    _addGlobal(name, Plugin);

	    config.register && config.register(gsap, Plugin, PropTween);
	  } else {
	    _registerPluginQueue.push(config);
	  }
	},

	/*
	 * --------------------------------------------------------------------------------------
	 * COLORS
	 * --------------------------------------------------------------------------------------
	 */
	_255 = 255,
	    _colorLookup = {
	  aqua: [0, _255, _255],
	  lime: [0, _255, 0],
	  silver: [192, 192, 192],
	  black: [0, 0, 0],
	  maroon: [128, 0, 0],
	  teal: [0, 128, 128],
	  blue: [0, 0, _255],
	  navy: [0, 0, 128],
	  white: [_255, _255, _255],
	  olive: [128, 128, 0],
	  yellow: [_255, _255, 0],
	  orange: [_255, 165, 0],
	  gray: [128, 128, 128],
	  purple: [128, 0, 128],
	  green: [0, 128, 0],
	  red: [_255, 0, 0],
	  pink: [_255, 192, 203],
	  cyan: [0, _255, _255],
	  transparent: [_255, _255, _255, 0]
	},
	    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
	// let ctx = _doc.createElement("canvas").getContext("2d");
	// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
	_hue = function _hue(h, m1, m2) {
	  h += h < 0 ? 1 : h > 1 ? -1 : 0;
	  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
	},
	    splitColor = function splitColor(v, toHSL, forceAlpha) {
	  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
	      r,
	      g,
	      b,
	      h,
	      s,
	      l,
	      max,
	      min,
	      d,
	      wasHSL;

	  if (!a) {
	    if (v.substr(-1) === ",") {
	      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
	      v = v.substr(0, v.length - 1);
	    }

	    if (_colorLookup[v]) {
	      a = _colorLookup[v];
	    } else if (v.charAt(0) === "#") {
	      if (v.length < 6) {
	        //for shorthand like #9F0 or #9F0F (could have alpha)
	        r = v.charAt(1);
	        g = v.charAt(2);
	        b = v.charAt(3);
	        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
	      }

	      if (v.length === 9) {
	        // hex with alpha, like #fd5e53ff
	        a = parseInt(v.substr(1, 6), 16);
	        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
	      }

	      v = parseInt(v.substr(1), 16);
	      a = [v >> 16, v >> 8 & _255, v & _255];
	    } else if (v.substr(0, 3) === "hsl") {
	      a = wasHSL = v.match(_strictNumExp);

	      if (!toHSL) {
	        h = +a[0] % 360 / 360;
	        s = +a[1] / 100;
	        l = +a[2] / 100;
	        g = l <= .5 ? l * (s + 1) : l + s - l * s;
	        r = l * 2 - g;
	        a.length > 3 && (a[3] *= 1); //cast as number

	        a[0] = _hue(h + 1 / 3, r, g);
	        a[1] = _hue(h, r, g);
	        a[2] = _hue(h - 1 / 3, r, g);
	      } else if (~v.indexOf("=")) {
	        //if relative values are found, just return the raw strings with the relative prefixes in place.
	        a = v.match(_numExp);
	        forceAlpha && a.length < 4 && (a[3] = 1);
	        return a;
	      }
	    } else {
	      a = v.match(_strictNumExp) || _colorLookup.transparent;
	    }

	    a = a.map(Number);
	  }

	  if (toHSL && !wasHSL) {
	    r = a[0] / _255;
	    g = a[1] / _255;
	    b = a[2] / _255;
	    max = Math.max(r, g, b);
	    min = Math.min(r, g, b);
	    l = (max + min) / 2;

	    if (max === min) {
	      h = s = 0;
	    } else {
	      d = max - min;
	      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
	      h *= 60;
	    }

	    a[0] = ~~(h + .5);
	    a[1] = ~~(s * 100 + .5);
	    a[2] = ~~(l * 100 + .5);
	  }

	  forceAlpha && a.length < 4 && (a[3] = 1);
	  return a;
	},
	    _colorOrderData = function _colorOrderData(v) {
	  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
	  var values = [],
	      c = [],
	      i = -1;
	  v.split(_colorExp).forEach(function (v) {
	    var a = v.match(_numWithUnitExp) || [];
	    values.push.apply(values, a);
	    c.push(i += a.length + 1);
	  });
	  values.c = c;
	  return values;
	},
	    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
	  var result = "",
	      colors = (s + result).match(_colorExp),
	      type = toHSL ? "hsla(" : "rgba(",
	      i = 0,
	      c,
	      shell,
	      d,
	      l;

	  if (!colors) {
	    return s;
	  }

	  colors = colors.map(function (color) {
	    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
	  });

	  if (orderMatchData) {
	    d = _colorOrderData(s);
	    c = orderMatchData.c;

	    if (c.join(result) !== d.c.join(result)) {
	      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
	      l = shell.length - 1;

	      for (; i < l; i++) {
	        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
	      }
	    }
	  }

	  if (!shell) {
	    shell = s.split(_colorExp);
	    l = shell.length - 1;

	    for (; i < l; i++) {
	      result += shell[i] + colors[i];
	    }
	  }

	  return result + shell[l];
	},
	    _colorExp = function () {
	  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
	      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
	  p;

	  for (p in _colorLookup) {
	    s += "|" + p + "\\b";
	  }

	  return new RegExp(s + ")", "gi");
	}(),
	    _hslExp = /hsl[a]?\(/,
	    _colorStringFilter = function _colorStringFilter(a) {
	  var combined = a.join(" "),
	      toHSL;
	  _colorExp.lastIndex = 0;

	  if (_colorExp.test(combined)) {
	    toHSL = _hslExp.test(combined);
	    a[1] = _formatColors(a[1], toHSL);
	    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

	    return true;
	  }
	},

	/*
	 * --------------------------------------------------------------------------------------
	 * TICKER
	 * --------------------------------------------------------------------------------------
	 */
	_tickerActive,
	    _ticker = function () {
	  var _getTime = Date.now,
	      _lagThreshold = 500,
	      _adjustedLag = 33,
	      _startTime = _getTime(),
	      _lastUpdate = _startTime,
	      _gap = 1000 / 240,
	      _nextTime = _gap,
	      _listeners = [],
	      _id,
	      _req,
	      _raf,
	      _self,
	      _delta,
	      _i,
	      _tick = function _tick(v) {
	    var elapsed = _getTime() - _lastUpdate,
	        manual = v === true,
	        overlap,
	        dispatch,
	        time,
	        frame;

	    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
	    _lastUpdate += elapsed;
	    time = _lastUpdate - _startTime;
	    overlap = time - _nextTime;

	    if (overlap > 0 || manual) {
	      frame = ++_self.frame;
	      _delta = time - _self.time * 1000;
	      _self.time = time = time / 1000;
	      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
	      dispatch = 1;
	    }

	    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

	    if (dispatch) {
	      for (_i = 0; _i < _listeners.length; _i++) {
	        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
	        _listeners[_i](time, _delta, frame, v);
	      }
	    }
	  };

	  _self = {
	    time: 0,
	    frame: 0,
	    tick: function tick() {
	      _tick(true);
	    },
	    deltaRatio: function deltaRatio(fps) {
	      return _delta / (1000 / (fps || 60));
	    },
	    wake: function wake() {
	      if (_coreReady) {
	        if (!_coreInitted && _windowExists()) {
	          _win = _coreInitted = window;
	          _doc = _win.document || {};
	          _globals.gsap = gsap;
	          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

	          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

	          _registerPluginQueue.forEach(_createPlugin);
	        }

	        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
	        _id && _self.sleep();

	        _req = _raf || function (f) {
	          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
	        };

	        _tickerActive = 1;

	        _tick(2);
	      }
	    },
	    sleep: function sleep() {
	      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
	      _tickerActive = 0;
	      _req = _emptyFunc;
	    },
	    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
	      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

	      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
	    },
	    fps: function fps(_fps) {
	      _gap = 1000 / (_fps || 240);
	      _nextTime = _self.time * 1000 + _gap;
	    },
	    add: function add(callback, once, prioritize) {
	      var func = once ? function (t, d, f, v) {
	        callback(t, d, f, v);

	        _self.remove(func);
	      } : callback;

	      _self.remove(callback);

	      _listeners[prioritize ? "unshift" : "push"](func);

	      _wake();

	      return func;
	    },
	    remove: function remove(callback, i) {
	      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
	    },
	    _listeners: _listeners
	  };
	  return _self;
	}(),
	    _wake = function _wake() {
	  return !_tickerActive && _ticker.wake();
	},
	    //also ensures the core classes are initialized.

	/*
	* -------------------------------------------------
	* EASING
	* -------------------------------------------------
	*/
	_easeMap = {},
	    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
	    _quotesExp = /["']/g,
	    _parseObjectInString = function _parseObjectInString(value) {
	  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
	  var obj = {},
	      split = value.substr(1, value.length - 3).split(":"),
	      key = split[0],
	      i = 1,
	      l = split.length,
	      index,
	      val,
	      parsedVal;

	  for (; i < l; i++) {
	    val = split[i];
	    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
	    parsedVal = val.substr(0, index);
	    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
	    key = val.substr(index + 1).trim();
	  }

	  return obj;
	},
	    _valueInParentheses = function _valueInParentheses(value) {
	  var open = value.indexOf("(") + 1,
	      close = value.indexOf(")"),
	      nested = value.indexOf("(", open);
	  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
	},
	    _configEaseFromString = function _configEaseFromString(name) {
	  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
	  var split = (name + "").split("("),
	      ease = _easeMap[split[0]];
	  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
	},
	    _invertEase = function _invertEase(ease) {
	  return function (p) {
	    return 1 - ease(1 - p);
	  };
	},
	    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
	_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
	  var child = timeline._first,
	      ease;

	  while (child) {
	    if (child instanceof Timeline) {
	      _propagateYoyoEase(child, isYoyo);
	    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
	      if (child.timeline) {
	        _propagateYoyoEase(child.timeline, isYoyo);
	      } else {
	        ease = child._ease;
	        child._ease = child._yEase;
	        child._yEase = ease;
	        child._yoyo = isYoyo;
	      }
	    }

	    child = child._next;
	  }
	},
	    _parseEase = function _parseEase(ease, defaultEase) {
	  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
	},
	    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
	  if (easeOut === void 0) {
	    easeOut = function easeOut(p) {
	      return 1 - easeIn(1 - p);
	    };
	  }

	  if (easeInOut === void 0) {
	    easeInOut = function easeInOut(p) {
	      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
	    };
	  }

	  var ease = {
	    easeIn: easeIn,
	    easeOut: easeOut,
	    easeInOut: easeInOut
	  },
	      lowercaseName;

	  _forEachName(names, function (name) {
	    _easeMap[name] = _globals[name] = ease;
	    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

	    for (var p in ease) {
	      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
	    }
	  });

	  return ease;
	},
	    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
	  return function (p) {
	    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
	  };
	},
	    _configElastic = function _configElastic(type, amplitude, period) {
	  var p1 = amplitude >= 1 ? amplitude : 1,
	      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
	  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
	      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
	      easeOut = function easeOut(p) {
	    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
	  },
	      ease = type === "out" ? easeOut : type === "in" ? function (p) {
	    return 1 - easeOut(1 - p);
	  } : _easeInOutFromOut(easeOut);

	  p2 = _2PI / p2; //precalculate to optimize

	  ease.config = function (amplitude, period) {
	    return _configElastic(type, amplitude, period);
	  };

	  return ease;
	},
	    _configBack = function _configBack(type, overshoot) {
	  if (overshoot === void 0) {
	    overshoot = 1.70158;
	  }

	  var easeOut = function easeOut(p) {
	    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
	  },
	      ease = type === "out" ? easeOut : type === "in" ? function (p) {
	    return 1 - easeOut(1 - p);
	  } : _easeInOutFromOut(easeOut);

	  ease.config = function (overshoot) {
	    return _configBack(type, overshoot);
	  };

	  return ease;
	}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
	// _weightedEase = ratio => {
	// 	let y = 0.5 + ratio / 2;
	// 	return p => (2 * (1 - p) * p * y + p * p);
	// },
	// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
	// _weightedEaseStrong = ratio => {
	// 	ratio = .5 + ratio / 2;
	// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
	// 		b = ratio - o,
	// 		c = ratio + o;
	// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
	// };


	_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
	  var power = i < 5 ? i + 1 : i;

	  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
	    return Math.pow(p, power);
	  } : function (p) {
	    return p;
	  }, function (p) {
	    return 1 - Math.pow(1 - p, power);
	  }, function (p) {
	    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
	  });
	});

	_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

	_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

	(function (n, c) {
	  var n1 = 1 / c,
	      n2 = 2 * n1,
	      n3 = 2.5 * n1,
	      easeOut = function easeOut(p) {
	    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
	  };

	  _insertEase("Bounce", function (p) {
	    return 1 - easeOut(1 - p);
	  }, easeOut);
	})(7.5625, 2.75);

	_insertEase("Expo", function (p) {
	  return p ? Math.pow(2, 10 * (p - 1)) : 0;
	});

	_insertEase("Circ", function (p) {
	  return -(_sqrt(1 - p * p) - 1);
	});

	_insertEase("Sine", function (p) {
	  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
	});

	_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

	_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
	  config: function config(steps, immediateStart) {
	    if (steps === void 0) {
	      steps = 1;
	    }

	    var p1 = 1 / steps,
	        p2 = steps + (immediateStart ? 0 : 1),
	        p3 = immediateStart ? 1 : 0,
	        max = 1 - _tinyNum;
	    return function (p) {
	      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
	    };
	  }
	};
	_defaults.ease = _easeMap["quad.out"];

	_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
	  return _callbackNames += name + "," + name + "Params,";
	});
	/*
	 * --------------------------------------------------------------------------------------
	 * CACHE
	 * --------------------------------------------------------------------------------------
	 */


	var GSCache = function GSCache(target, harness) {
	  this.id = _gsID++;
	  target._gsap = this;
	  this.target = target;
	  this.harness = harness;
	  this.get = harness ? harness.get : _getProperty;
	  this.set = harness ? harness.getSetter : _getSetter;
	};
	/*
	 * --------------------------------------------------------------------------------------
	 * ANIMATION
	 * --------------------------------------------------------------------------------------
	 */

	var Animation = /*#__PURE__*/function () {
	  function Animation(vars) {
	    this.vars = vars;
	    this._delay = +vars.delay || 0;

	    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
	      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
	      this._rDelay = vars.repeatDelay || 0;
	      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
	    }

	    this._ts = 1;

	    _setDuration(this, +vars.duration, 1, 1);

	    this.data = vars.data;

	    if (_context) {
	      this._ctx = _context;

	      _context.data.push(this);
	    }

	    _tickerActive || _ticker.wake();
	  }

	  var _proto = Animation.prototype;

	  _proto.delay = function delay(value) {
	    if (value || value === 0) {
	      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
	      this._delay = value;
	      return this;
	    }

	    return this._delay;
	  };

	  _proto.duration = function duration(value) {
	    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
	  };

	  _proto.totalDuration = function totalDuration(value) {
	    if (!arguments.length) {
	      return this._tDur;
	    }

	    this._dirty = 0;
	    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
	  };

	  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
	    _wake();

	    if (!arguments.length) {
	      return this._tTime;
	    }

	    var parent = this._dp;

	    if (parent && parent.smoothChildTiming && this._ts) {
	      _alignPlayhead(this, _totalTime);

	      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
	      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

	      while (parent && parent.parent) {
	        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
	          parent.totalTime(parent._tTime, true);
	        }

	        parent = parent.parent;
	      }

	      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
	        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
	        _addToTimeline(this._dp, this, this._start - this._delay);
	      }
	    }

	    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
	      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
	      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
	      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
	      //   this._lock = 1;

	      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
	      //}

	    }

	    return this;
	  };

	  _proto.time = function time(value, suppressEvents) {
	    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
	  };

	  _proto.totalProgress = function totalProgress(value, suppressEvents) {
	    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
	  };

	  _proto.progress = function progress(value, suppressEvents) {
	    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
	  };

	  _proto.iteration = function iteration(value, suppressEvents) {
	    var cycleDuration = this.duration() + this._rDelay;

	    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
	  } // potential future addition:
	  // isPlayingBackwards() {
	  // 	let animation = this,
	  // 		orientation = 1; // 1 = forward, -1 = backward
	  // 	while (animation) {
	  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
	  // 		animation = animation.parent;
	  // 	}
	  // 	return orientation < 0;
	  // }
	  ;

	  _proto.timeScale = function timeScale(value, suppressEvents) {
	    if (!arguments.length) {
	      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
	    }

	    if (this._rts === value) {
	      return this;
	    }

	    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
	    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
	    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
	    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

	    this._rts = +value || 0;
	    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

	    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

	    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


	    return _recacheAncestors(this);
	  };

	  _proto.paused = function paused(value) {
	    if (!arguments.length) {
	      return this._ps;
	    }

	    if (this._ps !== value) {
	      this._ps = value;

	      if (value) {
	        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

	        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
	      } else {
	        _wake();

	        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

	        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
	      }
	    }

	    return this;
	  };

	  _proto.startTime = function startTime(value) {
	    if (arguments.length) {
	      this._start = value;
	      var parent = this.parent || this._dp;
	      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
	      return this;
	    }

	    return this._start;
	  };

	  _proto.endTime = function endTime(includeRepeats) {
	    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	  };

	  _proto.rawTime = function rawTime(wrapRepeats) {
	    var parent = this.parent || this._dp; // _dp = detached parent

	    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
	  };

	  _proto.revert = function revert(config) {
	    if (config === void 0) {
	      config = _revertConfig;
	    }

	    var prevIsReverting = _reverting;
	    _reverting = config;

	    if (this._initted || this._startAt) {
	      this.timeline && this.timeline.revert(config);
	      this.totalTime(-0.01, config.suppressEvents);
	    }

	    this.data !== "nested" && config.kill !== false && this.kill();
	    _reverting = prevIsReverting;
	    return this;
	  };

	  _proto.globalTime = function globalTime(rawTime) {
	    var animation = this,
	        time = arguments.length ? rawTime : animation.rawTime();

	    while (animation) {
	      time = animation._start + time / (Math.abs(animation._ts) || 1);
	      animation = animation._dp;
	    }

	    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
	  };

	  _proto.repeat = function repeat(value) {
	    if (arguments.length) {
	      this._repeat = value === Infinity ? -2 : value;
	      return _onUpdateTotalDuration(this);
	    }

	    return this._repeat === -2 ? Infinity : this._repeat;
	  };

	  _proto.repeatDelay = function repeatDelay(value) {
	    if (arguments.length) {
	      var time = this._time;
	      this._rDelay = value;

	      _onUpdateTotalDuration(this);

	      return time ? this.time(time) : this;
	    }

	    return this._rDelay;
	  };

	  _proto.yoyo = function yoyo(value) {
	    if (arguments.length) {
	      this._yoyo = value;
	      return this;
	    }

	    return this._yoyo;
	  };

	  _proto.seek = function seek(position, suppressEvents) {
	    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
	  };

	  _proto.restart = function restart(includeDelay, suppressEvents) {
	    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
	  };

	  _proto.play = function play(from, suppressEvents) {
	    from != null && this.seek(from, suppressEvents);
	    return this.reversed(false).paused(false);
	  };

	  _proto.reverse = function reverse(from, suppressEvents) {
	    from != null && this.seek(from || this.totalDuration(), suppressEvents);
	    return this.reversed(true).paused(false);
	  };

	  _proto.pause = function pause(atTime, suppressEvents) {
	    atTime != null && this.seek(atTime, suppressEvents);
	    return this.paused(true);
	  };

	  _proto.resume = function resume() {
	    return this.paused(false);
	  };

	  _proto.reversed = function reversed(value) {
	    if (arguments.length) {
	      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

	      return this;
	    }

	    return this._rts < 0;
	  };

	  _proto.invalidate = function invalidate() {
	    this._initted = this._act = 0;
	    this._zTime = -_tinyNum;
	    return this;
	  };

	  _proto.isActive = function isActive() {
	    var parent = this.parent || this._dp,
	        start = this._start,
	        rawTime;
	    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
	  };

	  _proto.eventCallback = function eventCallback(type, callback, params) {
	    var vars = this.vars;

	    if (arguments.length > 1) {
	      if (!callback) {
	        delete vars[type];
	      } else {
	        vars[type] = callback;
	        params && (vars[type + "Params"] = params);
	        type === "onUpdate" && (this._onUpdate = callback);
	      }

	      return this;
	    }

	    return vars[type];
	  };

	  _proto.then = function then(onFulfilled) {
	    var self = this;
	    return new Promise(function (resolve) {
	      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
	          _resolve = function _resolve() {
	        var _then = self.then;
	        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

	        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
	        resolve(f);
	        self.then = _then;
	      };

	      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
	        _resolve();
	      } else {
	        self._prom = _resolve;
	      }
	    });
	  };

	  _proto.kill = function kill() {
	    _interrupt(this);
	  };

	  return Animation;
	}();

	_setDefaults(Animation.prototype, {
	  _time: 0,
	  _start: 0,
	  _end: 0,
	  _tTime: 0,
	  _tDur: 0,
	  _dirty: 0,
	  _repeat: 0,
	  _yoyo: false,
	  parent: null,
	  _initted: false,
	  _rDelay: 0,
	  _ts: 1,
	  _dp: 0,
	  ratio: 0,
	  _zTime: -_tinyNum,
	  _prom: 0,
	  _ps: false,
	  _rts: 1
	});
	/*
	 * -------------------------------------------------
	 * TIMELINE
	 * -------------------------------------------------
	 */


	var Timeline = /*#__PURE__*/function (_Animation) {
	  _inheritsLoose(Timeline, _Animation);

	  function Timeline(vars, position) {
	    var _this;

	    if (vars === void 0) {
	      vars = {};
	    }

	    _this = _Animation.call(this, vars) || this;
	    _this.labels = {};
	    _this.smoothChildTiming = !!vars.smoothChildTiming;
	    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
	    _this._sort = _isNotFalse(vars.sortChildren);
	    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
	    vars.reversed && _this.reverse();
	    vars.paused && _this.paused(true);
	    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
	    return _this;
	  }

	  var _proto2 = Timeline.prototype;

	  _proto2.to = function to(targets, vars, position) {
	    _createTweenType(0, arguments, this);

	    return this;
	  };

	  _proto2.from = function from(targets, vars, position) {
	    _createTweenType(1, arguments, this);

	    return this;
	  };

	  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
	    _createTweenType(2, arguments, this);

	    return this;
	  };

	  _proto2.set = function set(targets, vars, position) {
	    vars.duration = 0;
	    vars.parent = this;
	    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
	    vars.immediateRender = !!vars.immediateRender;
	    new Tween(targets, vars, _parsePosition(this, position), 1);
	    return this;
	  };

	  _proto2.call = function call(callback, params, position) {
	    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
	  } //ONLY for backward compatibility! Maybe delete?
	  ;

	  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
	    vars.duration = duration;
	    vars.stagger = vars.stagger || stagger;
	    vars.onComplete = onCompleteAll;
	    vars.onCompleteParams = onCompleteAllParams;
	    vars.parent = this;
	    new Tween(targets, vars, _parsePosition(this, position));
	    return this;
	  };

	  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
	    vars.runBackwards = 1;
	    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
	    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
	  };

	  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
	    toVars.startAt = fromVars;
	    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
	    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
	  };

	  _proto2.render = function render(totalTime, suppressEvents, force) {
	    var prevTime = this._time,
	        tDur = this._dirty ? this.totalDuration() : this._tDur,
	        dur = this._dur,
	        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
	        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
	    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
	        time,
	        child,
	        next,
	        iteration,
	        cycleDuration,
	        prevPaused,
	        pauseTween,
	        timeScale,
	        prevStart,
	        prevIteration,
	        yoyo,
	        isYoyo;
	    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

	    if (tTime !== this._tTime || force || crossingStart) {
	      if (prevTime !== this._time && dur) {
	        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
	        tTime += this._time - prevTime;
	        totalTime += this._time - prevTime;
	      }

	      time = tTime;
	      prevStart = this._start;
	      timeScale = this._ts;
	      prevPaused = !timeScale;

	      if (crossingStart) {
	        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

	        (totalTime || !suppressEvents) && (this._zTime = totalTime);
	      }

	      if (this._repeat) {
	        //adjust the time for repeats and yoyos
	        yoyo = this._yoyo;
	        cycleDuration = dur + this._rDelay;

	        if (this._repeat < -1 && totalTime < 0) {
	          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
	        }

	        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

	        if (tTime === tDur) {
	          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
	          iteration = this._repeat;
	          time = dur;
	        } else {
	          iteration = ~~(tTime / cycleDuration);

	          if (iteration && iteration === tTime / cycleDuration) {
	            time = dur;
	            iteration--;
	          }

	          time > dur && (time = dur);
	        }

	        prevIteration = _animationCycle(this._tTime, cycleDuration);
	        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

	        if (yoyo && iteration & 1) {
	          time = dur - time;
	          isYoyo = 1;
	        }
	        /*
	        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
	        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
	        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
	        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
	        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
	        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
	        */


	        if (iteration !== prevIteration && !this._lock) {
	          var rewinding = yoyo && prevIteration & 1,
	              doesWrap = rewinding === (yoyo && iteration & 1);
	          iteration < prevIteration && (rewinding = !rewinding);
	          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

	          this._lock = 1;
	          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
	          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

	          !suppressEvents && this.parent && _callback(this, "onRepeat");
	          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

	          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
	            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
	            return this;
	          }

	          dur = this._dur; // in case the duration changed in the onRepeat

	          tDur = this._tDur;

	          if (doesWrap) {
	            this._lock = 2;
	            prevTime = rewinding ? dur : -0.0001;
	            this.render(prevTime, true);
	            this.vars.repeatRefresh && !isYoyo && this.invalidate();
	          }

	          this._lock = 0;

	          if (!this._ts && !prevPaused) {
	            return this;
	          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


	          _propagateYoyoEase(this, isYoyo);
	        }
	      }

	      if (this._hasPause && !this._forcing && this._lock < 2) {
	        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

	        if (pauseTween) {
	          tTime -= time - (time = pauseTween._start);
	        }
	      }

	      this._tTime = tTime;
	      this._time = time;
	      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

	      if (!this._initted) {
	        this._onUpdate = this.vars.onUpdate;
	        this._initted = 1;
	        this._zTime = totalTime;
	        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
	      }

	      if (!prevTime && time && !suppressEvents && !iteration) {
	        _callback(this, "onStart");

	        if (this._tTime !== tTime) {
	          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
	          return this;
	        }
	      }

	      if (time >= prevTime && totalTime >= 0) {
	        child = this._first;

	        while (child) {
	          next = child._next;

	          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
	            if (child.parent !== this) {
	              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
	              return this.render(totalTime, suppressEvents, force);
	            }

	            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

	            if (time !== this._time || !this._ts && !prevPaused) {
	              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	              pauseTween = 0;
	              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

	              break;
	            }
	          }

	          child = next;
	        }
	      } else {
	        child = this._last;
	        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

	        while (child) {
	          next = child._prev;

	          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
	            if (child.parent !== this) {
	              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
	              return this.render(totalTime, suppressEvents, force);
	            }

	            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

	            if (time !== this._time || !this._ts && !prevPaused) {
	              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
	              pauseTween = 0;
	              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

	              break;
	            }
	          }

	          child = next;
	        }
	      }

	      if (pauseTween && !suppressEvents) {
	        this.pause();
	        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

	        if (this._ts) {
	          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
	          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

	          _setEnd(this);

	          return this.render(totalTime, suppressEvents, force);
	        }
	      }

	      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
	      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
	        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
	        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

	        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
	          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

	          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
	        }
	      }
	    }

	    return this;
	  };

	  _proto2.add = function add(child, position) {
	    var _this2 = this;

	    _isNumber(position) || (position = _parsePosition(this, position, child));

	    if (!(child instanceof Animation)) {
	      if (_isArray(child)) {
	        child.forEach(function (obj) {
	          return _this2.add(obj, position);
	        });
	        return this;
	      }

	      if (_isString(child)) {
	        return this.addLabel(child, position);
	      }

	      if (_isFunction(child)) {
	        child = Tween.delayedCall(0, child);
	      } else {
	        return this;
	      }
	    }

	    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
	  };

	  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
	    if (nested === void 0) {
	      nested = true;
	    }

	    if (tweens === void 0) {
	      tweens = true;
	    }

	    if (timelines === void 0) {
	      timelines = true;
	    }

	    if (ignoreBeforeTime === void 0) {
	      ignoreBeforeTime = -_bigNum;
	    }

	    var a = [],
	        child = this._first;

	    while (child) {
	      if (child._start >= ignoreBeforeTime) {
	        if (child instanceof Tween) {
	          tweens && a.push(child);
	        } else {
	          timelines && a.push(child);
	          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
	        }
	      }

	      child = child._next;
	    }

	    return a;
	  };

	  _proto2.getById = function getById(id) {
	    var animations = this.getChildren(1, 1, 1),
	        i = animations.length;

	    while (i--) {
	      if (animations[i].vars.id === id) {
	        return animations[i];
	      }
	    }
	  };

	  _proto2.remove = function remove(child) {
	    if (_isString(child)) {
	      return this.removeLabel(child);
	    }

	    if (_isFunction(child)) {
	      return this.killTweensOf(child);
	    }

	    _removeLinkedListItem(this, child);

	    if (child === this._recent) {
	      this._recent = this._last;
	    }

	    return _uncache(this);
	  };

	  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
	    if (!arguments.length) {
	      return this._tTime;
	    }

	    this._forcing = 1;

	    if (!this._dp && this._ts) {
	      //special case for the global timeline (or any other that has no parent or detached parent).
	      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
	    }

	    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

	    this._forcing = 0;
	    return this;
	  };

	  _proto2.addLabel = function addLabel(label, position) {
	    this.labels[label] = _parsePosition(this, position);
	    return this;
	  };

	  _proto2.removeLabel = function removeLabel(label) {
	    delete this.labels[label];
	    return this;
	  };

	  _proto2.addPause = function addPause(position, callback, params) {
	    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
	    t.data = "isPause";
	    this._hasPause = 1;
	    return _addToTimeline(this, t, _parsePosition(this, position));
	  };

	  _proto2.removePause = function removePause(position) {
	    var child = this._first;
	    position = _parsePosition(this, position);

	    while (child) {
	      if (child._start === position && child.data === "isPause") {
	        _removeFromParent(child);
	      }

	      child = child._next;
	    }
	  };

	  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
	    var tweens = this.getTweensOf(targets, onlyActive),
	        i = tweens.length;

	    while (i--) {
	      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
	    }

	    return this;
	  };

	  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
	    var a = [],
	        parsedTargets = toArray(targets),
	        child = this._first,
	        isGlobalTime = _isNumber(onlyActive),
	        // a number is interpreted as a global time. If the animation spans
	    children;

	    while (child) {
	      if (child instanceof Tween) {
	        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
	          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
	          a.push(child);
	        }
	      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
	        a.push.apply(a, children);
	      }

	      child = child._next;
	    }

	    return a;
	  } // potential future feature - targets() on timelines
	  // targets() {
	  // 	let result = [];
	  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
	  // 	return result.filter((v, i) => result.indexOf(v) === i);
	  // }
	  ;

	  _proto2.tweenTo = function tweenTo(position, vars) {
	    vars = vars || {};

	    var tl = this,
	        endTime = _parsePosition(tl, position),
	        _vars = vars,
	        startAt = _vars.startAt,
	        _onStart = _vars.onStart,
	        onStartParams = _vars.onStartParams,
	        immediateRender = _vars.immediateRender,
	        initted,
	        tween = Tween.to(tl, _setDefaults({
	      ease: vars.ease || "none",
	      lazy: false,
	      immediateRender: false,
	      time: endTime,
	      overwrite: "auto",
	      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
	      onStart: function onStart() {
	        tl.pause();

	        if (!initted) {
	          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
	          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
	          initted = 1;
	        }

	        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
	      }
	    }, vars));

	    return immediateRender ? tween.render(0) : tween;
	  };

	  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
	    return this.tweenTo(toPosition, _setDefaults({
	      startAt: {
	        time: _parsePosition(this, fromPosition)
	      }
	    }, vars));
	  };

	  _proto2.recent = function recent() {
	    return this._recent;
	  };

	  _proto2.nextLabel = function nextLabel(afterTime) {
	    if (afterTime === void 0) {
	      afterTime = this._time;
	    }

	    return _getLabelInDirection(this, _parsePosition(this, afterTime));
	  };

	  _proto2.previousLabel = function previousLabel(beforeTime) {
	    if (beforeTime === void 0) {
	      beforeTime = this._time;
	    }

	    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
	  };

	  _proto2.currentLabel = function currentLabel(value) {
	    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
	  };

	  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
	    if (ignoreBeforeTime === void 0) {
	      ignoreBeforeTime = 0;
	    }

	    var child = this._first,
	        labels = this.labels,
	        p;

	    while (child) {
	      if (child._start >= ignoreBeforeTime) {
	        child._start += amount;
	        child._end += amount;
	      }

	      child = child._next;
	    }

	    if (adjustLabels) {
	      for (p in labels) {
	        if (labels[p] >= ignoreBeforeTime) {
	          labels[p] += amount;
	        }
	      }
	    }

	    return _uncache(this);
	  };

	  _proto2.invalidate = function invalidate(soft) {
	    var child = this._first;
	    this._lock = 0;

	    while (child) {
	      child.invalidate(soft);
	      child = child._next;
	    }

	    return _Animation.prototype.invalidate.call(this, soft);
	  };

	  _proto2.clear = function clear(includeLabels) {
	    if (includeLabels === void 0) {
	      includeLabels = true;
	    }

	    var child = this._first,
	        next;

	    while (child) {
	      next = child._next;
	      this.remove(child);
	      child = next;
	    }

	    this._dp && (this._time = this._tTime = this._pTime = 0);
	    includeLabels && (this.labels = {});
	    return _uncache(this);
	  };

	  _proto2.totalDuration = function totalDuration(value) {
	    var max = 0,
	        self = this,
	        child = self._last,
	        prevStart = _bigNum,
	        prev,
	        start,
	        parent;

	    if (arguments.length) {
	      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
	    }

	    if (self._dirty) {
	      parent = self.parent;

	      while (child) {
	        prev = child._prev; //record it here in case the tween changes position in the sequence...

	        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

	        start = child._start;

	        if (start > prevStart && self._sort && child._ts && !self._lock) {
	          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
	          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

	          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
	        } else {
	          prevStart = start;
	        }

	        if (start < 0 && child._ts) {
	          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
	          max -= start;

	          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
	            self._start += start / self._ts;
	            self._time -= start;
	            self._tTime -= start;
	          }

	          self.shiftChildren(-start, false, -1e999);
	          prevStart = 0;
	        }

	        child._end > max && child._ts && (max = child._end);
	        child = prev;
	      }

	      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

	      self._dirty = 0;
	    }

	    return self._tDur;
	  };

	  Timeline.updateRoot = function updateRoot(time) {
	    if (_globalTimeline._ts) {
	      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

	      _lastRenderedFrame = _ticker.frame;
	    }

	    if (_ticker.frame >= _nextGCFrame) {
	      _nextGCFrame += _config.autoSleep || 120;
	      var child = _globalTimeline._first;
	      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
	        while (child && !child._ts) {
	          child = child._next;
	        }

	        child || _ticker.sleep();
	      }
	    }
	  };

	  return Timeline;
	}(Animation);

	_setDefaults(Timeline.prototype, {
	  _lock: 0,
	  _hasPause: 0,
	  _forcing: 0
	});

	var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
	  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
	  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
	      index = 0,
	      matchIndex = 0,
	      result,
	      startNums,
	      color,
	      endNum,
	      chunk,
	      startNum,
	      hasRandom,
	      a;
	  pt.b = start;
	  pt.e = end;
	  start += ""; //ensure values are strings

	  end += "";

	  if (hasRandom = ~end.indexOf("random(")) {
	    end = _replaceRandom(end);
	  }

	  if (stringFilter) {
	    a = [start, end];
	    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

	    start = a[0];
	    end = a[1];
	  }

	  startNums = start.match(_complexStringNumExp) || [];

	  while (result = _complexStringNumExp.exec(end)) {
	    endNum = result[0];
	    chunk = end.substring(index, result.index);

	    if (color) {
	      color = (color + 1) % 5;
	    } else if (chunk.substr(-5) === "rgba(") {
	      color = 1;
	    }

	    if (endNum !== startNums[matchIndex++]) {
	      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

	      pt._pt = {
	        _next: pt._pt,
	        p: chunk || matchIndex === 1 ? chunk : ",",
	        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
	        s: startNum,
	        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
	        m: color && color < 4 ? Math.round : 0
	      };
	      index = _complexStringNumExp.lastIndex;
	    }
	  }

	  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

	  pt.fp = funcParam;

	  if (_relExp.test(end) || hasRandom) {
	    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
	  }

	  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

	  return pt;
	},
	    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
	  _isFunction(end) && (end = end(index || 0, target, targets));
	  var currentValue = target[prop],
	      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
	      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
	      pt;

	  if (_isString(end)) {
	    if (~end.indexOf("random(")) {
	      end = _replaceRandom(end);
	    }

	    if (end.charAt(1) === "=") {
	      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

	      if (pt || pt === 0) {
	        // to avoid isNaN, like if someone passes in a value like "!= whatever"
	        end = pt;
	      }
	    }
	  }

	  if (!optional || parsedStart !== end || _forceAllPropTweens) {
	    if (!isNaN(parsedStart * end) && end !== "") {
	      // fun fact: any number multiplied by "" is evaluated as the number 0!
	      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
	      funcParam && (pt.fp = funcParam);
	      modifier && pt.modifier(modifier, this, target);
	      return this._pt = pt;
	    }

	    !currentValue && !(prop in target) && _missingPlugin(prop, end);
	    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
	  }
	},
	    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
	_processVars = function _processVars(vars, index, target, targets, tween) {
	  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

	  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
	    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
	  }

	  var copy = {},
	      p;

	  for (p in vars) {
	    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
	  }

	  return copy;
	},
	    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
	  var plugin, pt, ptLookup, i;

	  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
	    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

	    if (tween !== _quickTween) {
	      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

	      i = plugin._props.length;

	      while (i--) {
	        ptLookup[plugin._props[i]] = pt;
	      }
	    }
	  }

	  return plugin;
	},
	    _overwritingTween,
	    //store a reference temporarily so we can avoid overwriting itself.
	_forceAllPropTweens,
	    _initTween = function _initTween(tween, time, tTime) {
	  var vars = tween.vars,
	      ease = vars.ease,
	      startAt = vars.startAt,
	      immediateRender = vars.immediateRender,
	      lazy = vars.lazy,
	      onUpdate = vars.onUpdate,
	      runBackwards = vars.runBackwards,
	      yoyoEase = vars.yoyoEase,
	      keyframes = vars.keyframes,
	      autoRevert = vars.autoRevert,
	      dur = tween._dur,
	      prevStartAt = tween._startAt,
	      targets = tween._targets,
	      parent = tween.parent,
	      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
	      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
	      tl = tween.timeline,
	      cleanVars,
	      i,
	      p,
	      pt,
	      target,
	      hasPriority,
	      gsData,
	      harness,
	      plugin,
	      ptLookup,
	      index,
	      harnessVars,
	      overwritten;
	  tl && (!keyframes || !ease) && (ease = "none");
	  tween._ease = _parseEase(ease, _defaults.ease);
	  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

	  if (yoyoEase && tween._yoyo && !tween._repeat) {
	    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
	    yoyoEase = tween._yEase;
	    tween._yEase = tween._ease;
	    tween._ease = yoyoEase;
	  }

	  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

	  if (!tl || keyframes && !vars.stagger) {
	    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
	    harness = targets[0] ? _getCache(targets[0]).harness : 0;
	    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

	    cleanVars = _copyExcluding(vars, _reservedProps);

	    if (prevStartAt) {
	      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

	      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
	      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

	      prevStartAt._lazy = 0;
	    }

	    if (startAt) {
	      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
	        data: "isStart",
	        overwrite: false,
	        parent: parent,
	        immediateRender: true,
	        lazy: !prevStartAt && _isNotFalse(lazy),
	        startAt: null,
	        delay: 0,
	        onUpdate: onUpdate && function () {
	          return _callback(tween, "onUpdate");
	        },
	        stagger: 0
	      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


	      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

	      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

	      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

	      if (immediateRender) {
	        if (dur && time <= 0 && tTime <= 0) {
	          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
	          time && (tween._zTime = time);
	          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
	        }
	      }
	    } else if (runBackwards && dur) {
	      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
	      if (!prevStartAt) {
	        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

	        p = _setDefaults({
	          overwrite: false,
	          data: "isFromStart",
	          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
	          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
	          immediateRender: immediateRender,
	          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
	          stagger: 0,
	          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

	        }, cleanVars);
	        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

	        _removeFromParent(tween._startAt = Tween.set(targets, p));

	        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

	        tween._startAt._sat = tween; // used in globalTime()

	        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
	        tween._zTime = time;

	        if (!immediateRender) {
	          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

	        } else if (!time) {
	          return;
	        }
	      }
	    }

	    tween._pt = tween._ptCache = 0;
	    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

	    for (i = 0; i < targets.length; i++) {
	      target = targets[i];
	      gsData = target._gsap || _harness(targets)[i]._gsap;
	      tween._ptLookup[i] = ptLookup = {};
	      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

	      index = fullTargets === targets ? i : fullTargets.indexOf(target);

	      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
	        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

	        plugin._props.forEach(function (name) {
	          ptLookup[name] = pt;
	        });

	        plugin.priority && (hasPriority = 1);
	      }

	      if (!harness || harnessVars) {
	        for (p in cleanVars) {
	          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
	            plugin.priority && (hasPriority = 1);
	          } else {
	            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
	          }
	        }
	      }

	      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

	      if (autoOverwrite && tween._pt) {
	        _overwritingTween = tween;

	        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


	        overwritten = !tween.parent;
	        _overwritingTween = 0;
	      }

	      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
	    }

	    hasPriority && _sortPropTweensByPriority(tween);
	    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
	  }

	  tween._onUpdate = onUpdate;
	  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

	  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
	},
	    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
	  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
	      pt,
	      rootPT,
	      lookup,
	      i;

	  if (!ptCache) {
	    ptCache = tween._ptCache[property] = [];
	    lookup = tween._ptLookup;
	    i = tween._targets.length;

	    while (i--) {
	      pt = lookup[i][property];

	      if (pt && pt.d && pt.d._pt) {
	        // it's a plugin, so find the nested PropTween
	        pt = pt.d._pt;

	        while (pt && pt.p !== property && pt.fp !== property) {
	          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
	          pt = pt._next;
	        }
	      }

	      if (!pt) {
	        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
	        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
	        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

	        tween.vars[property] = "+=0";

	        _initTween(tween, time);

	        _forceAllPropTweens = 0;
	        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
	      }

	      ptCache.push(pt);
	    }
	  }

	  i = ptCache.length;

	  while (i--) {
	    rootPT = ptCache[i];
	    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

	    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
	    pt.c = value - pt.s;
	    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

	    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
	  }
	},
	    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
	  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
	      propertyAliases = harness && harness.aliases,
	      copy,
	      p,
	      i,
	      aliases;

	  if (!propertyAliases) {
	    return vars;
	  }

	  copy = _merge({}, vars);

	  for (p in propertyAliases) {
	    if (p in copy) {
	      aliases = propertyAliases[p].split(",");
	      i = aliases.length;

	      while (i--) {
	        copy[aliases[i]] = copy[p];
	      }
	    }
	  }

	  return copy;
	},
	    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
	_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
	  var ease = obj.ease || easeEach || "power1.inOut",
	      p,
	      a;

	  if (_isArray(obj)) {
	    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

	    obj.forEach(function (value, i) {
	      return a.push({
	        t: i / (obj.length - 1) * 100,
	        v: value,
	        e: ease
	      });
	    });
	  } else {
	    for (p in obj) {
	      a = allProps[p] || (allProps[p] = []);
	      p === "ease" || a.push({
	        t: parseFloat(prop),
	        v: obj[p],
	        e: ease
	      });
	    }
	  }
	},
	    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
	  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
	},
	    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
	    _staggerPropsToSkip = {};

	_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
	  return _staggerPropsToSkip[name] = 1;
	});
	/*
	 * --------------------------------------------------------------------------------------
	 * TWEEN
	 * --------------------------------------------------------------------------------------
	 */


	var Tween = /*#__PURE__*/function (_Animation2) {
	  _inheritsLoose(Tween, _Animation2);

	  function Tween(targets, vars, position, skipInherit) {
	    var _this3;

	    if (typeof vars === "number") {
	      position.duration = vars;
	      vars = position;
	      position = null;
	    }

	    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
	    var _this3$vars = _this3.vars,
	        duration = _this3$vars.duration,
	        delay = _this3$vars.delay,
	        immediateRender = _this3$vars.immediateRender,
	        stagger = _this3$vars.stagger,
	        overwrite = _this3$vars.overwrite,
	        keyframes = _this3$vars.keyframes,
	        defaults = _this3$vars.defaults,
	        scrollTrigger = _this3$vars.scrollTrigger,
	        yoyoEase = _this3$vars.yoyoEase,
	        parent = vars.parent || _globalTimeline,
	        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
	        tl,
	        i,
	        copy,
	        l,
	        p,
	        curTarget,
	        staggerFunc,
	        staggerVarsToMerge;
	    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
	    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

	    _this3._overwrite = overwrite;

	    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
	      vars = _this3.vars;
	      tl = _this3.timeline = new Timeline({
	        data: "nested",
	        defaults: defaults || {},
	        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
	      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

	      tl.kill();
	      tl.parent = tl._dp = _assertThisInitialized(_this3);
	      tl._start = 0;

	      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
	        l = parsedTargets.length;
	        staggerFunc = stagger && distribute(stagger);

	        if (_isObject(stagger)) {
	          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
	          for (p in stagger) {
	            if (~_staggerTweenProps.indexOf(p)) {
	              staggerVarsToMerge || (staggerVarsToMerge = {});
	              staggerVarsToMerge[p] = stagger[p];
	            }
	          }
	        }

	        for (i = 0; i < l; i++) {
	          copy = _copyExcluding(vars, _staggerPropsToSkip);
	          copy.stagger = 0;
	          yoyoEase && (copy.yoyoEase = yoyoEase);
	          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
	          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

	          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
	          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

	          if (!stagger && l === 1 && copy.delay) {
	            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
	            _this3._delay = delay = copy.delay;
	            _this3._start += delay;
	            copy.delay = 0;
	          }

	          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
	          tl._ease = _easeMap.none;
	        }

	        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
	      } else if (keyframes) {
	        _inheritDefaults(_setDefaults(tl.vars.defaults, {
	          ease: "none"
	        }));

	        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
	        var time = 0,
	            a,
	            kf,
	            v;

	        if (_isArray(keyframes)) {
	          keyframes.forEach(function (frame) {
	            return tl.to(parsedTargets, frame, ">");
	          });
	          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
	        } else {
	          copy = {};

	          for (p in keyframes) {
	            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
	          }

	          for (p in copy) {
	            a = copy[p].sort(function (a, b) {
	              return a.t - b.t;
	            });
	            time = 0;

	            for (i = 0; i < a.length; i++) {
	              kf = a[i];
	              v = {
	                ease: kf.e,
	                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
	              };
	              v[p] = kf.v;
	              tl.to(parsedTargets, v, time);
	              time += v.duration;
	            }
	          }

	          tl.duration() < duration && tl.to({}, {
	            duration: duration - tl.duration()
	          }); // in case keyframes didn't go to 100%
	        }
	      }

	      duration || _this3.duration(duration = tl.duration());
	    } else {
	      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
	    }

	    if (overwrite === true && !_suppressOverwrites) {
	      _overwritingTween = _assertThisInitialized(_this3);

	      _globalTimeline.killTweensOf(parsedTargets);

	      _overwritingTween = 0;
	    }

	    _addToTimeline(parent, _assertThisInitialized(_this3), position);

	    vars.reversed && _this3.reverse();
	    vars.paused && _this3.paused(true);

	    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
	      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

	      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

	    }

	    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
	    return _this3;
	  }

	  var _proto3 = Tween.prototype;

	  _proto3.render = function render(totalTime, suppressEvents, force) {
	    var prevTime = this._time,
	        tDur = this._tDur,
	        dur = this._dur,
	        isNegative = totalTime < 0,
	        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
	        time,
	        pt,
	        iteration,
	        cycleDuration,
	        prevIteration,
	        isYoyo,
	        ratio,
	        timeline,
	        yoyoEase;

	    if (!dur) {
	      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
	    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
	      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
	      time = tTime;
	      timeline = this.timeline;

	      if (this._repeat) {
	        //adjust the time for repeats and yoyos
	        cycleDuration = dur + this._rDelay;

	        if (this._repeat < -1 && isNegative) {
	          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
	        }

	        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

	        if (tTime === tDur) {
	          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
	          iteration = this._repeat;
	          time = dur;
	        } else {
	          iteration = ~~(tTime / cycleDuration);

	          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
	            time = dur;
	            iteration--;
	          }

	          time > dur && (time = dur);
	        }

	        isYoyo = this._yoyo && iteration & 1;

	        if (isYoyo) {
	          yoyoEase = this._yEase;
	          time = dur - time;
	        }

	        prevIteration = _animationCycle(this._tTime, cycleDuration);

	        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
	          //could be during the repeatDelay part. No need to render and fire callbacks.
	          this._tTime = tTime;
	          return this;
	        }

	        if (iteration !== prevIteration) {
	          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

	          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
	            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
	            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

	            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
	          }
	        }
	      }

	      if (!this._initted) {
	        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
	          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

	          return this;
	        }

	        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
	          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
	          return this;
	        }

	        if (dur !== this._dur) {
	          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
	          return this.render(totalTime, suppressEvents, force);
	        }
	      }

	      this._tTime = tTime;
	      this._time = time;

	      if (!this._act && this._ts) {
	        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

	        this._lazy = 0;
	      }

	      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

	      if (this._from) {
	        this.ratio = ratio = 1 - ratio;
	      }

	      if (time && !prevTime && !suppressEvents && !iteration) {
	        _callback(this, "onStart");

	        if (this._tTime !== tTime) {
	          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
	          return this;
	        }
	      }

	      pt = this._pt;

	      while (pt) {
	        pt.r(ratio, pt.d);
	        pt = pt._next;
	      }

	      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

	      if (this._onUpdate && !suppressEvents) {
	        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

	        _callback(this, "onUpdate");
	      }

	      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

	      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
	        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
	        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

	        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
	          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
	          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

	          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
	        }
	      }
	    }

	    return this;
	  };

	  _proto3.targets = function targets() {
	    return this._targets;
	  };

	  _proto3.invalidate = function invalidate(soft) {
	    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
	    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
	    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
	    this._ptLookup = [];
	    this.timeline && this.timeline.invalidate(soft);
	    return _Animation2.prototype.invalidate.call(this, soft);
	  };

	  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
	    _tickerActive || _ticker.wake();
	    this._ts || this.play();
	    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
	        ratio;
	    this._initted || _initTween(this, time);
	    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
	    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
	    // if (_isObject(property)) { // performance optimization
	    // 	for (p in property) {
	    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
	    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
	    // 		}
	    // 	}
	    // } else {

	    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
	      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
	    } //}


	    _alignPlayhead(this, 0);

	    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
	    return this.render(0);
	  };

	  _proto3.kill = function kill(targets, vars) {
	    if (vars === void 0) {
	      vars = "all";
	    }

	    if (!targets && (!vars || vars === "all")) {
	      this._lazy = this._pt = 0;
	      return this.parent ? _interrupt(this) : this;
	    }

	    if (this.timeline) {
	      var tDur = this.timeline.totalDuration();
	      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

	      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

	      return this;
	    }

	    var parsedTargets = this._targets,
	        killingTargets = targets ? toArray(targets) : parsedTargets,
	        propTweenLookup = this._ptLookup,
	        firstPT = this._pt,
	        overwrittenProps,
	        curLookup,
	        curOverwriteProps,
	        props,
	        p,
	        pt,
	        i;

	    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
	      vars === "all" && (this._pt = 0);
	      return _interrupt(this);
	    }

	    overwrittenProps = this._op = this._op || [];

	    if (vars !== "all") {
	      //so people can pass in a comma-delimited list of property names
	      if (_isString(vars)) {
	        p = {};

	        _forEachName(vars, function (name) {
	          return p[name] = 1;
	        });

	        vars = p;
	      }

	      vars = _addAliasesToVars(parsedTargets, vars);
	    }

	    i = parsedTargets.length;

	    while (i--) {
	      if (~killingTargets.indexOf(parsedTargets[i])) {
	        curLookup = propTweenLookup[i];

	        if (vars === "all") {
	          overwrittenProps[i] = vars;
	          props = curLookup;
	          curOverwriteProps = {};
	        } else {
	          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
	          props = vars;
	        }

	        for (p in props) {
	          pt = curLookup && curLookup[p];

	          if (pt) {
	            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
	              _removeLinkedListItem(this, pt, "_pt");
	            }

	            delete curLookup[p];
	          }

	          if (curOverwriteProps !== "all") {
	            curOverwriteProps[p] = 1;
	          }
	        }
	      }
	    }

	    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

	    return this;
	  };

	  Tween.to = function to(targets, vars) {
	    return new Tween(targets, vars, arguments[2]);
	  };

	  Tween.from = function from(targets, vars) {
	    return _createTweenType(1, arguments);
	  };

	  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
	    return new Tween(callback, 0, {
	      immediateRender: false,
	      lazy: false,
	      overwrite: false,
	      delay: delay,
	      onComplete: callback,
	      onReverseComplete: callback,
	      onCompleteParams: params,
	      onReverseCompleteParams: params,
	      callbackScope: scope
	    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
	  };

	  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
	    return _createTweenType(2, arguments);
	  };

	  Tween.set = function set(targets, vars) {
	    vars.duration = 0;
	    vars.repeatDelay || (vars.repeat = 0);
	    return new Tween(targets, vars);
	  };

	  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
	    return _globalTimeline.killTweensOf(targets, props, onlyActive);
	  };

	  return Tween;
	}(Animation);

	_setDefaults(Tween.prototype, {
	  _targets: [],
	  _lazy: 0,
	  _startAt: 0,
	  _op: 0,
	  _onInit: 0
	}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
	// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
	// 	Tween.prototype[name] = function() {
	// 		let tl = new Timeline();
	// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
	// 	}
	// });
	//for backward compatibility. Leverage the timeline calls.


	_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
	  Tween[name] = function () {
	    var tl = new Timeline(),
	        params = _slice.call(arguments, 0);

	    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
	    return tl[name].apply(tl, params);
	  };
	});
	/*
	 * --------------------------------------------------------------------------------------
	 * PROPTWEEN
	 * --------------------------------------------------------------------------------------
	 */


	var _setterPlain = function _setterPlain(target, property, value) {
	  return target[property] = value;
	},
	    _setterFunc = function _setterFunc(target, property, value) {
	  return target[property](value);
	},
	    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
	  return target[property](data.fp, value);
	},
	    _setterAttribute = function _setterAttribute(target, property, value) {
	  return target.setAttribute(property, value);
	},
	    _getSetter = function _getSetter(target, property) {
	  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
	},
	    _renderPlain = function _renderPlain(ratio, data) {
	  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
	},
	    _renderBoolean = function _renderBoolean(ratio, data) {
	  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
	},
	    _renderComplexString = function _renderComplexString(ratio, data) {
	  var pt = data._pt,
	      s = "";

	  if (!ratio && data.b) {
	    //b = beginning string
	    s = data.b;
	  } else if (ratio === 1 && data.e) {
	    //e = ending string
	    s = data.e;
	  } else {
	    while (pt) {
	      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

	      pt = pt._next;
	    }

	    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
	  }

	  data.set(data.t, data.p, s, data);
	},
	    _renderPropTweens = function _renderPropTweens(ratio, data) {
	  var pt = data._pt;

	  while (pt) {
	    pt.r(ratio, pt.d);
	    pt = pt._next;
	  }
	},
	    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
	  var pt = this._pt,
	      next;

	  while (pt) {
	    next = pt._next;
	    pt.p === property && pt.modifier(modifier, tween, target);
	    pt = next;
	  }
	},
	    _killPropTweensOf = function _killPropTweensOf(property) {
	  var pt = this._pt,
	      hasNonDependentRemaining,
	      next;

	  while (pt) {
	    next = pt._next;

	    if (pt.p === property && !pt.op || pt.op === property) {
	      _removeLinkedListItem(this, pt, "_pt");
	    } else if (!pt.dep) {
	      hasNonDependentRemaining = 1;
	    }

	    pt = next;
	  }

	  return !hasNonDependentRemaining;
	},
	    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
	  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
	},
	    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
	  var pt = parent._pt,
	      next,
	      pt2,
	      first,
	      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

	  while (pt) {
	    next = pt._next;
	    pt2 = first;

	    while (pt2 && pt2.pr > pt.pr) {
	      pt2 = pt2._next;
	    }

	    if (pt._prev = pt2 ? pt2._prev : last) {
	      pt._prev._next = pt;
	    } else {
	      first = pt;
	    }

	    if (pt._next = pt2) {
	      pt2._prev = pt;
	    } else {
	      last = pt;
	    }

	    pt = next;
	  }

	  parent._pt = first;
	}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


	var PropTween = /*#__PURE__*/function () {
	  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
	    this.t = target;
	    this.s = start;
	    this.c = change;
	    this.p = prop;
	    this.r = renderer || _renderPlain;
	    this.d = data || this;
	    this.set = setter || _setterPlain;
	    this.pr = priority || 0;
	    this._next = next;

	    if (next) {
	      next._prev = this;
	    }
	  }

	  var _proto4 = PropTween.prototype;

	  _proto4.modifier = function modifier(func, tween, target) {
	    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

	    this.set = _setterWithModifier;
	    this.m = func;
	    this.mt = target; //modifier target

	    this.tween = tween;
	  };

	  return PropTween;
	}(); //Initialization tasks

	_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
	  return _reservedProps[name] = 1;
	});

	_globals.TweenMax = _globals.TweenLite = Tween;
	_globals.TimelineLite = _globals.TimelineMax = Timeline;
	_globalTimeline = new Timeline({
	  sortChildren: false,
	  defaults: _defaults,
	  autoRemoveChildren: true,
	  id: "root",
	  smoothChildTiming: true
	});
	_config.stringFilter = _colorStringFilter;

	var _media = [],
	    _listeners = {},
	    _emptyArray = [],
	    _lastMediaTime = 0,
	    _contextID = 0,
	    _dispatch = function _dispatch(type) {
	  return (_listeners[type] || _emptyArray).map(function (f) {
	    return f();
	  });
	},
	    _onMediaChange = function _onMediaChange() {
	  var time = Date.now(),
	      matches = [];

	  if (time - _lastMediaTime > 2) {
	    _dispatch("matchMediaInit");

	    _media.forEach(function (c) {
	      var queries = c.queries,
	          conditions = c.conditions,
	          match,
	          p,
	          anyMatch,
	          toggled;

	      for (p in queries) {
	        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

	        match && (anyMatch = 1);

	        if (match !== conditions[p]) {
	          conditions[p] = match;
	          toggled = 1;
	        }
	      }

	      if (toggled) {
	        c.revert();
	        anyMatch && matches.push(c);
	      }
	    });

	    _dispatch("matchMediaRevert");

	    matches.forEach(function (c) {
	      return c.onMatch(c, function (func) {
	        return c.add(null, func);
	      });
	    });
	    _lastMediaTime = time;

	    _dispatch("matchMedia");
	  }
	};

	var Context = /*#__PURE__*/function () {
	  function Context(func, scope) {
	    this.selector = scope && selector(scope);
	    this.data = [];
	    this._r = []; // returned/cleanup functions

	    this.isReverted = false;
	    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

	    func && this.add(func);
	  }

	  var _proto5 = Context.prototype;

	  _proto5.add = function add(name, func, scope) {
	    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
	    // if (name && _isFunction(name.revert)) {
	    // 	this.data.push(name);
	    // 	return (name._ctx = this);
	    // }
	    if (_isFunction(name)) {
	      scope = func;
	      func = name;
	      name = _isFunction;
	    }

	    var self = this,
	        f = function f() {
	      var prev = _context,
	          prevSelector = self.selector,
	          result;
	      prev && prev !== self && prev.data.push(self);
	      scope && (self.selector = selector(scope));
	      _context = self;
	      result = func.apply(self, arguments);
	      _isFunction(result) && self._r.push(result);
	      _context = prev;
	      self.selector = prevSelector;
	      self.isReverted = false;
	      return result;
	    };

	    self.last = f;
	    return name === _isFunction ? f(self, function (func) {
	      return self.add(null, func);
	    }) : name ? self[name] = f : f;
	  };

	  _proto5.ignore = function ignore(func) {
	    var prev = _context;
	    _context = null;
	    func(this);
	    _context = prev;
	  };

	  _proto5.getTweens = function getTweens() {
	    var a = [];
	    this.data.forEach(function (e) {
	      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
	    });
	    return a;
	  };

	  _proto5.clear = function clear() {
	    this._r.length = this.data.length = 0;
	  };

	  _proto5.kill = function kill(revert, matchMedia) {
	    var _this4 = this;

	    if (revert) {
	      (function () {
	        var tweens = _this4.getTweens(),
	            i = _this4.data.length,
	            t;

	        while (i--) {
	          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
	          t = _this4.data[i];

	          if (t.data === "isFlip") {
	            t.revert();
	            t.getChildren(true, true, false).forEach(function (tween) {
	              return tweens.splice(tweens.indexOf(tween), 1);
	            });
	          }
	        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


	        tweens.map(function (t) {
	          return {
	            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
	            t: t
	          };
	        }).sort(function (a, b) {
	          return b.g - a.g || -Infinity;
	        }).forEach(function (o) {
	          return o.t.revert(revert);
	        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

	        i = _this4.data.length;

	        while (i--) {
	          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
	          t = _this4.data[i];

	          if (t instanceof Timeline) {
	            if (t.data !== "nested") {
	              t.scrollTrigger && t.scrollTrigger.revert();
	              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
	            }
	          } else {
	            !(t instanceof Tween) && t.revert && t.revert(revert);
	          }
	        }

	        _this4._r.forEach(function (f) {
	          return f(revert, _this4);
	        });

	        _this4.isReverted = true;
	      })();
	    } else {
	      this.data.forEach(function (e) {
	        return e.kill && e.kill();
	      });
	    }

	    this.clear();

	    if (matchMedia) {
	      var i = _media.length;

	      while (i--) {
	        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
	        _media[i].id === this.id && _media.splice(i, 1);
	      }
	    }
	  };

	  _proto5.revert = function revert(config) {
	    this.kill(config || {});
	  };

	  return Context;
	}();

	var MatchMedia = /*#__PURE__*/function () {
	  function MatchMedia(scope) {
	    this.contexts = [];
	    this.scope = scope;
	    _context && _context.data.push(this);
	  }

	  var _proto6 = MatchMedia.prototype;

	  _proto6.add = function add(conditions, func, scope) {
	    _isObject(conditions) || (conditions = {
	      matches: conditions
	    });
	    var context = new Context(0, scope || this.scope),
	        cond = context.conditions = {},
	        mq,
	        p,
	        active;
	    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

	    this.contexts.push(context);
	    func = context.add("onMatch", func);
	    context.queries = conditions;

	    for (p in conditions) {
	      if (p === "all") {
	        active = 1;
	      } else {
	        mq = _win.matchMedia(conditions[p]);

	        if (mq) {
	          _media.indexOf(context) < 0 && _media.push(context);
	          (cond[p] = mq.matches) && (active = 1);
	          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
	        }
	      }
	    }

	    active && func(context, function (f) {
	      return context.add(null, f);
	    });
	    return this;
	  } // refresh() {
	  // 	let time = _lastMediaTime,
	  // 		media = _media;
	  // 	_lastMediaTime = -1;
	  // 	_media = this.contexts;
	  // 	_onMediaChange();
	  // 	_lastMediaTime = time;
	  // 	_media = media;
	  // }
	  ;

	  _proto6.revert = function revert(config) {
	    this.kill(config || {});
	  };

	  _proto6.kill = function kill(revert) {
	    this.contexts.forEach(function (c) {
	      return c.kill(revert, true);
	    });
	  };

	  return MatchMedia;
	}();
	/*
	 * --------------------------------------------------------------------------------------
	 * GSAP
	 * --------------------------------------------------------------------------------------
	 */


	var _gsap = {
	  registerPlugin: function registerPlugin() {
	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    args.forEach(function (config) {
	      return _createPlugin(config);
	    });
	  },
	  timeline: function timeline(vars) {
	    return new Timeline(vars);
	  },
	  getTweensOf: function getTweensOf(targets, onlyActive) {
	    return _globalTimeline.getTweensOf(targets, onlyActive);
	  },
	  getProperty: function getProperty(target, property, unit, uncache) {
	    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

	    var getter = _getCache(target || {}).get,
	        format = unit ? _passThrough : _numericIfPossible;

	    unit === "native" && (unit = "");
	    return !target ? target : !property ? function (property, unit, uncache) {
	      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
	  },
	  quickSetter: function quickSetter(target, property, unit) {
	    target = toArray(target);

	    if (target.length > 1) {
	      var setters = target.map(function (t) {
	        return gsap.quickSetter(t, property, unit);
	      }),
	          l = setters.length;
	      return function (value) {
	        var i = l;

	        while (i--) {
	          setters[i](value);
	        }
	      };
	    }

	    target = target[0] || {};

	    var Plugin = _plugins[property],
	        cache = _getCache(target),
	        p = cache.harness && (cache.harness.aliases || {})[property] || property,
	        // in case it's an alias, like "rotate" for "rotation".
	    setter = Plugin ? function (value) {
	      var p = new Plugin();
	      _quickTween._pt = 0;
	      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
	      p.render(1, p);
	      _quickTween._pt && _renderPropTweens(1, _quickTween);
	    } : cache.set(target, p);

	    return Plugin ? setter : function (value) {
	      return setter(target, p, unit ? value + unit : value, cache, 1);
	    };
	  },
	  quickTo: function quickTo(target, property, vars) {
	    var _merge2;

	    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
	        func = function func(value, start, startIsRelative) {
	      return tween.resetTo(property, value, start, startIsRelative);
	    };

	    func.tween = tween;
	    return func;
	  },
	  isTweening: function isTweening(targets) {
	    return _globalTimeline.getTweensOf(targets, true).length > 0;
	  },
	  defaults: function defaults(value) {
	    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
	    return _mergeDeep(_defaults, value || {});
	  },
	  config: function config(value) {
	    return _mergeDeep(_config, value || {});
	  },
	  registerEffect: function registerEffect(_ref3) {
	    var name = _ref3.name,
	        effect = _ref3.effect,
	        plugins = _ref3.plugins,
	        defaults = _ref3.defaults,
	        extendTimeline = _ref3.extendTimeline;
	    (plugins || "").split(",").forEach(function (pluginName) {
	      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
	    });

	    _effects[name] = function (targets, vars, tl) {
	      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
	    };

	    if (extendTimeline) {
	      Timeline.prototype[name] = function (targets, vars, position) {
	        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
	      };
	    }
	  },
	  registerEase: function registerEase(name, ease) {
	    _easeMap[name] = _parseEase(ease);
	  },
	  parseEase: function parseEase(ease, defaultEase) {
	    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
	  },
	  getById: function getById(id) {
	    return _globalTimeline.getById(id);
	  },
	  exportRoot: function exportRoot(vars, includeDelayedCalls) {
	    if (vars === void 0) {
	      vars = {};
	    }

	    var tl = new Timeline(vars),
	        child,
	        next;
	    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

	    _globalTimeline.remove(tl);

	    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

	    tl._time = tl._tTime = _globalTimeline._time;
	    child = _globalTimeline._first;

	    while (child) {
	      next = child._next;

	      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
	        _addToTimeline(tl, child, child._start - child._delay);
	      }

	      child = next;
	    }

	    _addToTimeline(_globalTimeline, tl, 0);

	    return tl;
	  },
	  context: function context(func, scope) {
	    return func ? new Context(func, scope) : _context;
	  },
	  matchMedia: function matchMedia(scope) {
	    return new MatchMedia(scope);
	  },
	  matchMediaRefresh: function matchMediaRefresh() {
	    return _media.forEach(function (c) {
	      var cond = c.conditions,
	          found,
	          p;

	      for (p in cond) {
	        if (cond[p]) {
	          cond[p] = false;
	          found = 1;
	        }
	      }

	      found && c.revert();
	    }) || _onMediaChange();
	  },
	  addEventListener: function addEventListener(type, callback) {
	    var a = _listeners[type] || (_listeners[type] = []);
	    ~a.indexOf(callback) || a.push(callback);
	  },
	  removeEventListener: function removeEventListener(type, callback) {
	    var a = _listeners[type],
	        i = a && a.indexOf(callback);
	    i >= 0 && a.splice(i, 1);
	  },
	  utils: {
	    wrap: wrap,
	    wrapYoyo: wrapYoyo,
	    distribute: distribute,
	    random: random,
	    snap: snap,
	    normalize: normalize,
	    getUnit: getUnit,
	    clamp: clamp,
	    splitColor: splitColor,
	    toArray: toArray,
	    selector: selector,
	    mapRange: mapRange,
	    pipe: pipe,
	    unitize: unitize,
	    interpolate: interpolate,
	    shuffle: shuffle
	  },
	  install: _install,
	  effects: _effects,
	  ticker: _ticker,
	  updateRoot: Timeline.updateRoot,
	  plugins: _plugins,
	  globalTimeline: _globalTimeline,
	  core: {
	    PropTween: PropTween,
	    globals: _addGlobal,
	    Tween: Tween,
	    Timeline: Timeline,
	    Animation: Animation,
	    getCache: _getCache,
	    _removeLinkedListItem: _removeLinkedListItem,
	    reverting: function reverting() {
	      return _reverting;
	    },
	    context: function context(toAdd) {
	      if (toAdd && _context) {
	        _context.data.push(toAdd);

	        toAdd._ctx = _context;
	      }

	      return _context;
	    },
	    suppressOverwrites: function suppressOverwrites(value) {
	      return _suppressOverwrites = value;
	    }
	  }
	};

	_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
	  return _gsap[name] = Tween[name];
	});

	_ticker.add(Timeline.updateRoot);

	_quickTween = _gsap.to({}, {
	  duration: 0
	}); // ---- EXTRA PLUGINS --------------------------------------------------------

	var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
	  var pt = plugin._pt;

	  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
	    pt = pt._next;
	  }

	  return pt;
	},
	    _addModifiers = function _addModifiers(tween, modifiers) {
	  var targets = tween._targets,
	      p,
	      i,
	      pt;

	  for (p in modifiers) {
	    i = targets.length;

	    while (i--) {
	      pt = tween._ptLookup[i][p];

	      if (pt && (pt = pt.d)) {
	        if (pt._pt) {
	          // is a plugin
	          pt = _getPluginPropTween(pt, p);
	        }

	        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
	      }
	    }
	  }
	},
	    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
	  return {
	    name: name,
	    rawVars: 1,
	    //don't pre-process function-based values or "random()" strings.
	    init: function init(target, vars, tween) {
	      tween._onInit = function (tween) {
	        var temp, p;

	        if (_isString(vars)) {
	          temp = {};

	          _forEachName(vars, function (name) {
	            return temp[name] = 1;
	          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


	          vars = temp;
	        }

	        if (modifier) {
	          temp = {};

	          for (p in vars) {
	            temp[p] = modifier(vars[p]);
	          }

	          vars = temp;
	        }

	        _addModifiers(tween, vars);
	      };
	    }
	  };
	}; //register core plugins


	var gsap = _gsap.registerPlugin({
	  name: "attr",
	  init: function init(target, vars, tween, index, targets) {
	    var p, pt, v;
	    this.tween = tween;

	    for (p in vars) {
	      v = target.getAttribute(p) || "";
	      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
	      pt.op = p;
	      pt.b = v; // record the beginning value so we can revert()

	      this._props.push(p);
	    }
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt;

	    while (pt) {
	      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

	      pt = pt._next;
	    }
	  }
	}, {
	  name: "endArray",
	  init: function init(target, value) {
	    var i = value.length;

	    while (i--) {
	      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
	    }
	  }
	}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

	Tween.version = Timeline.version = gsap.version = "3.12.5";
	_coreReady = 1;
	_windowExists() && _wake();

	/*!
	 * CSSPlugin 3.12.5
	 * https://gsap.com
	 *
	 * Copyright 2008-2024, GreenSock. All rights reserved.
	 * Subject to the terms at https://gsap.com/standard-license or for
	 * Club GSAP members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var _win$1,
	    _doc$1,
	    _docElement,
	    _pluginInitted,
	    _tempDiv,
	    _tempDivStyler,
	    _recentSetterPlugin,
	    _reverting$1,
	    _windowExists$1 = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _transformProps = {},
	    _RAD2DEG = 180 / Math.PI,
	    _DEG2RAD = Math.PI / 180,
	    _atan2 = Math.atan2,
	    _bigNum$1 = 1e8,
	    _capsExp = /([A-Z])/g,
	    _horizontalExp = /(left|right|width|margin|padding|x)/i,
	    _complexExp = /[\s,\(]\S/,
	    _propertyAliases = {
	  autoAlpha: "opacity,visibility",
	  scale: "scaleX,scaleY",
	  alpha: "opacity"
	},
	    _renderCSSProp = function _renderCSSProp(ratio, data) {
	  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
	},
	    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
	  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
	},
	    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
	  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
	},
	    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
	_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
	  var value = data.s + data.c * ratio;
	  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
	},
	    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
	  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
	},
	    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
	  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
	},
	    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
	  return target.style[property] = value;
	},
	    _setterCSSProp = function _setterCSSProp(target, property, value) {
	  return target.style.setProperty(property, value);
	},
	    _setterTransform = function _setterTransform(target, property, value) {
	  return target._gsap[property] = value;
	},
	    _setterScale = function _setterScale(target, property, value) {
	  return target._gsap.scaleX = target._gsap.scaleY = value;
	},
	    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
	  var cache = target._gsap;
	  cache.scaleX = cache.scaleY = value;
	  cache.renderTransform(ratio, cache);
	},
	    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
	  var cache = target._gsap;
	  cache[property] = value;
	  cache.renderTransform(ratio, cache);
	},
	    _transformProp = "transform",
	    _transformOriginProp = _transformProp + "Origin",
	    _saveStyle = function _saveStyle(property, isNotCSS) {
	  var _this = this;

	  var target = this.target,
	      style = target.style,
	      cache = target._gsap;

	  if (property in _transformProps && style) {
	    this.tfm = this.tfm || {};

	    if (property !== "transform") {
	      property = _propertyAliases[property] || property;
	      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
	        return _this.tfm[a] = _get(target, a);
	      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

	      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
	    } else {
	      return _propertyAliases.transform.split(",").forEach(function (p) {
	        return _saveStyle.call(_this, p, isNotCSS);
	      });
	    }

	    if (this.props.indexOf(_transformProp) >= 0) {
	      return;
	    }

	    if (cache.svg) {
	      this.svgo = target.getAttribute("data-svg-origin");
	      this.props.push(_transformOriginProp, isNotCSS, "");
	    }

	    property = _transformProp;
	  }

	  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
	},
	    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
	  if (style.translate) {
	    style.removeProperty("translate");
	    style.removeProperty("scale");
	    style.removeProperty("rotate");
	  }
	},
	    _revertStyle = function _revertStyle() {
	  var props = this.props,
	      target = this.target,
	      style = target.style,
	      cache = target._gsap,
	      i,
	      p;

	  for (i = 0; i < props.length; i += 3) {
	    // stored like this: property, isNotCSS, value
	    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
	  }

	  if (this.tfm) {
	    for (p in this.tfm) {
	      cache[p] = this.tfm[p];
	    }

	    if (cache.svg) {
	      cache.renderTransform();
	      target.setAttribute("data-svg-origin", this.svgo || "");
	    }

	    i = _reverting$1();

	    if ((!i || !i.isStart) && !style[_transformProp]) {
	      _removeIndependentTransforms(style);

	      if (cache.zOrigin && style[_transformOriginProp]) {
	        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

	        cache.zOrigin = 0;
	        cache.renderTransform();
	      }

	      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
	    }
	  }
	},
	    _getStyleSaver = function _getStyleSaver(target, properties) {
	  var saver = {
	    target: target,
	    props: [],
	    revert: _revertStyle,
	    save: _saveStyle
	  };
	  target._gsap || gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

	  properties && properties.split(",").forEach(function (p) {
	    return saver.save(p);
	  });
	  return saver;
	},
	    _supports3D,
	    _createElement = function _createElement(type, ns) {
	  var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

	  return e && e.style ? e : _doc$1.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
	},
	    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
	  var cs = getComputedStyle(target);
	  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
	},
	    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
	    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
	  var e = element || _tempDiv,
	      s = e.style,
	      i = 5;

	  if (property in s && !preferPrefix) {
	    return property;
	  }

	  property = property.charAt(0).toUpperCase() + property.substr(1);

	  while (i-- && !(_prefixes[i] + property in s)) {}

	  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
	},
	    _initCore = function _initCore() {
	  if (_windowExists$1() && window.document) {
	    _win$1 = window;
	    _doc$1 = _win$1.document;
	    _docElement = _doc$1.documentElement;
	    _tempDiv = _createElement("div") || {
	      style: {}
	    };
	    _tempDivStyler = _createElement("div");
	    _transformProp = _checkPropPrefix(_transformProp);
	    _transformOriginProp = _transformProp + "Origin";
	    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

	    _supports3D = !!_checkPropPrefix("perspective");
	    _reverting$1 = gsap.core.reverting;
	    _pluginInitted = 1;
	  }
	},
	    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
	  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
	  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
	      oldParent = this.parentNode,
	      oldSibling = this.nextSibling,
	      oldCSS = this.style.cssText,
	      bbox;

	  _docElement.appendChild(svg);

	  svg.appendChild(this);
	  this.style.display = "block";

	  if (swapIfPossible) {
	    try {
	      bbox = this.getBBox();
	      this._gsapBBox = this.getBBox; //store the original

	      this.getBBox = _getBBoxHack;
	    } catch (e) {}
	  } else if (this._gsapBBox) {
	    bbox = this._gsapBBox();
	  }

	  if (oldParent) {
	    if (oldSibling) {
	      oldParent.insertBefore(this, oldSibling);
	    } else {
	      oldParent.appendChild(this);
	    }
	  }

	  _docElement.removeChild(svg);

	  this.style.cssText = oldCSS;
	  return bbox;
	},
	    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
	  var i = attributesArray.length;

	  while (i--) {
	    if (target.hasAttribute(attributesArray[i])) {
	      return target.getAttribute(attributesArray[i]);
	    }
	  }
	},
	    _getBBox = function _getBBox(target) {
	  var bounds;

	  try {
	    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
	  } catch (error) {
	    bounds = _getBBoxHack.call(target, true);
	  }

	  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

	  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
	    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
	    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
	    width: 0,
	    height: 0
	  } : bounds;
	},
	    _isSVG = function _isSVG(e) {
	  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
	},
	    //reports if the element is an SVG on which getBBox() actually works
	_removeProperty = function _removeProperty(target, property) {
	  if (property) {
	    var style = target.style,
	        first2Chars;

	    if (property in _transformProps && property !== _transformOriginProp) {
	      property = _transformProp;
	    }

	    if (style.removeProperty) {
	      first2Chars = property.substr(0, 2);

	      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
	        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
	        property = "-" + property;
	      }

	      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
	    } else {
	      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
	      style.removeAttribute(property);
	    }
	  }
	},
	    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
	  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
	  plugin._pt = pt;
	  pt.b = beginning;
	  pt.e = end;

	  plugin._props.push(property);

	  return pt;
	},
	    _nonConvertibleUnits = {
	  deg: 1,
	  rad: 1,
	  turn: 1
	},
	    _nonStandardLayouts = {
	  grid: 1,
	  flex: 1
	},
	    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
	_convertToUnit = function _convertToUnit(target, property, value, unit) {
	  var curValue = parseFloat(value) || 0,
	      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
	      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
	  style = _tempDiv.style,
	      horizontal = _horizontalExp.test(property),
	      isRootSVG = target.tagName.toLowerCase() === "svg",
	      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
	      amount = 100,
	      toPixels = unit === "px",
	      toPercent = unit === "%",
	      px,
	      parent,
	      cache,
	      isSVG;

	  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
	    return curValue;
	  }

	  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
	  isSVG = target.getCTM && _isSVG(target);

	  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
	    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
	    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
	  }

	  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
	  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

	  if (isSVG) {
	    parent = (target.ownerSVGElement || {}).parentNode;
	  }

	  if (!parent || parent === _doc$1 || !parent.appendChild) {
	    parent = _doc$1.body;
	  }

	  cache = parent._gsap;

	  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
	    return _round(curValue / cache.width * amount);
	  } else {
	    if (toPercent && (property === "height" || property === "width")) {
	      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
	      var v = target.style[property];
	      target.style[property] = amount + unit;
	      px = target[measureProperty];
	      v ? target.style[property] = v : _removeProperty(target, property);
	    } else {
	      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
	      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

	      parent.appendChild(_tempDiv);
	      px = _tempDiv[measureProperty];
	      parent.removeChild(_tempDiv);
	      style.position = "absolute";
	    }

	    if (horizontal && toPercent) {
	      cache = _getCache(parent);
	      cache.time = _ticker.time;
	      cache.width = parent[measureProperty];
	    }
	  }

	  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
	},
	    _get = function _get(target, property, unit, uncache) {
	  var value;
	  _pluginInitted || _initCore();

	  if (property in _propertyAliases && property !== "transform") {
	    property = _propertyAliases[property];

	    if (~property.indexOf(",")) {
	      property = property.split(",")[0];
	    }
	  }

	  if (_transformProps[property] && property !== "transform") {
	    value = _parseTransform(target, uncache);
	    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
	  } else {
	    value = target.style[property];

	    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
	      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
	    }
	  }

	  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
	},
	    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
	  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
	  if (!start || start === "none") {
	    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
	    var p = _checkPropPrefix(prop, target, 1),
	        s = p && _getComputedProperty(target, p, 1);

	    if (s && s !== start) {
	      prop = p;
	      start = s;
	    } else if (prop === "borderColor") {
	      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
	    }
	  }

	  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
	      index = 0,
	      matchIndex = 0,
	      a,
	      result,
	      startValues,
	      startNum,
	      color,
	      startValue,
	      endValue,
	      endNum,
	      chunk,
	      endUnit,
	      startUnit,
	      endValues;
	  pt.b = start;
	  pt.e = end;
	  start += ""; // ensure values are strings

	  end += "";

	  if (end === "auto") {
	    startValue = target.style[prop];
	    target.style[prop] = end;
	    end = _getComputedProperty(target, prop) || end;
	    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
	  }

	  a = [start, end];

	  _colorStringFilter(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


	  start = a[0];
	  end = a[1];
	  startValues = start.match(_numWithUnitExp) || [];
	  endValues = end.match(_numWithUnitExp) || [];

	  if (endValues.length) {
	    while (result = _numWithUnitExp.exec(end)) {
	      endValue = result[0];
	      chunk = end.substring(index, result.index);

	      if (color) {
	        color = (color + 1) % 5;
	      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
	        color = 1;
	      }

	      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
	        startNum = parseFloat(startValue) || 0;
	        startUnit = startValue.substr((startNum + "").length);
	        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
	        endNum = parseFloat(endValue);
	        endUnit = endValue.substr((endNum + "").length);
	        index = _numWithUnitExp.lastIndex - endUnit.length;

	        if (!endUnit) {
	          //if something like "perspective:300" is passed in and we must add a unit to the end
	          endUnit = endUnit || _config.units[prop] || startUnit;

	          if (index === end.length) {
	            end += endUnit;
	            pt.e += endUnit;
	          }
	        }

	        if (startUnit !== endUnit) {
	          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
	        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


	        pt._pt = {
	          _next: pt._pt,
	          p: chunk || matchIndex === 1 ? chunk : ",",
	          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
	          s: startNum,
	          c: endNum - startNum,
	          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
	        };
	      }
	    }

	    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
	  } else {
	    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
	  }

	  _relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

	  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

	  return pt;
	},
	    _keywordToPercent = {
	  top: "0%",
	  bottom: "100%",
	  left: "0%",
	  right: "100%",
	  center: "50%"
	},
	    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
	  var split = value.split(" "),
	      x = split[0],
	      y = split[1] || "50%";

	  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
	    //the user provided them in the wrong order, so flip them
	    value = x;
	    x = y;
	    y = value;
	  }

	  split[0] = _keywordToPercent[x] || x;
	  split[1] = _keywordToPercent[y] || y;
	  return split.join(" ");
	},
	    _renderClearProps = function _renderClearProps(ratio, data) {
	  if (data.tween && data.tween._time === data.tween._dur) {
	    var target = data.t,
	        style = target.style,
	        props = data.u,
	        cache = target._gsap,
	        prop,
	        clearTransforms,
	        i;

	    if (props === "all" || props === true) {
	      style.cssText = "";
	      clearTransforms = 1;
	    } else {
	      props = props.split(",");
	      i = props.length;

	      while (--i > -1) {
	        prop = props[i];

	        if (_transformProps[prop]) {
	          clearTransforms = 1;
	          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
	        }

	        _removeProperty(target, prop);
	      }
	    }

	    if (clearTransforms) {
	      _removeProperty(target, _transformProp);

	      if (cache) {
	        cache.svg && target.removeAttribute("transform");

	        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


	        cache.uncache = 1;

	        _removeIndependentTransforms(style);
	      }
	    }
	  }
	},
	    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
	_specialProps = {
	  clearProps: function clearProps(plugin, target, property, endValue, tween) {
	    if (tween.data !== "isFromStart") {
	      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
	      pt.u = endValue;
	      pt.pr = -10;
	      pt.tween = tween;

	      plugin._props.push(property);

	      return 1;
	    }
	  }
	  /* className feature (about 0.4kb gzipped).
	  , className(plugin, target, property, endValue, tween) {
	  	let _renderClassName = (ratio, data) => {
	  			data.css.render(ratio, data.css);
	  			if (!ratio || ratio === 1) {
	  				let inline = data.rmv,
	  					target = data.t,
	  					p;
	  				target.setAttribute("class", ratio ? data.e : data.b);
	  				for (p in inline) {
	  					_removeProperty(target, p);
	  				}
	  			}
	  		},
	  		_getAllStyles = (target) => {
	  			let styles = {},
	  				computed = getComputedStyle(target),
	  				p;
	  			for (p in computed) {
	  				if (isNaN(p) && p !== "cssText" && p !== "length") {
	  					styles[p] = computed[p];
	  				}
	  			}
	  			_setDefaults(styles, _parseTransform(target, 1));
	  			return styles;
	  		},
	  		startClassList = target.getAttribute("class"),
	  		style = target.style,
	  		cssText = style.cssText,
	  		cache = target._gsap,
	  		classPT = cache.classPT,
	  		inlineToRemoveAtEnd = {},
	  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
	  		changingVars = {},
	  		startVars = _getAllStyles(target),
	  		transformRelated = /(transform|perspective)/i,
	  		endVars, p;
	  	if (classPT) {
	  		classPT.r(1, classPT.d);
	  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
	  	}
	  	target.setAttribute("class", data.e);
	  	endVars = _getAllStyles(target, true);
	  	target.setAttribute("class", startClassList);
	  	for (p in endVars) {
	  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
	  			changingVars[p] = endVars[p];
	  			if (!style[p] && style[p] !== "0") {
	  				inlineToRemoveAtEnd[p] = 1;
	  			}
	  		}
	  	}
	  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
	  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
	  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
	  	}
	  	_parseTransform(target, true); //to clear the caching of transforms
	  	data.css = new gsap.plugins.css();
	  	data.css.init(target, changingVars, tween);
	  	plugin._props.push(...data.css._props);
	  	return 1;
	  }
	  */

	},

	/*
	 * --------------------------------------------------------------------------------------
	 * TRANSFORMS
	 * --------------------------------------------------------------------------------------
	 */
	_identity2DMatrix = [1, 0, 0, 1, 0, 0],
	    _rotationalProperties = {},
	    _isNullTransform = function _isNullTransform(value) {
	  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
	},
	    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
	  var matrixString = _getComputedProperty(target, _transformProp);

	  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
	},
	    _getMatrix = function _getMatrix(target, force2D) {
	  var cache = target._gsap || _getCache(target),
	      style = target.style,
	      matrix = _getComputedTransformMatrixAsArray(target),
	      parent,
	      nextSibling,
	      temp,
	      addedToDOM;

	  if (cache.svg && target.getAttribute("transform")) {
	    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

	    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
	    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
	  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
	    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
	    temp = style.display;
	    style.display = "block";
	    parent = target.parentNode;

	    if (!parent || !target.offsetParent) {
	      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
	      addedToDOM = 1; //flag

	      nextSibling = target.nextElementSibling;

	      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

	    }

	    matrix = _getComputedTransformMatrixAsArray(target);
	    temp ? style.display = temp : _removeProperty(target, "display");

	    if (addedToDOM) {
	      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
	    }
	  }

	  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
	},
	    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
	  var cache = target._gsap,
	      matrix = matrixArray || _getMatrix(target, true),
	      xOriginOld = cache.xOrigin || 0,
	      yOriginOld = cache.yOrigin || 0,
	      xOffsetOld = cache.xOffset || 0,
	      yOffsetOld = cache.yOffset || 0,
	      a = matrix[0],
	      b = matrix[1],
	      c = matrix[2],
	      d = matrix[3],
	      tx = matrix[4],
	      ty = matrix[5],
	      originSplit = origin.split(" "),
	      xOrigin = parseFloat(originSplit[0]) || 0,
	      yOrigin = parseFloat(originSplit[1]) || 0,
	      bounds,
	      determinant,
	      x,
	      y;

	  if (!originIsAbsolute) {
	    bounds = _getBBox(target);
	    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
	    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
	    // 	xOrigin -= bounds.x;
	    // 	yOrigin -= bounds.y;
	    // }
	  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
	    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
	    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
	    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
	    xOrigin = x;
	    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
	  }

	  if (smooth || smooth !== false && cache.smooth) {
	    tx = xOrigin - xOriginOld;
	    ty = yOrigin - yOriginOld;
	    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
	    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
	  } else {
	    cache.xOffset = cache.yOffset = 0;
	  }

	  cache.xOrigin = xOrigin;
	  cache.yOrigin = yOrigin;
	  cache.smooth = !!smooth;
	  cache.origin = origin;
	  cache.originIsAbsolute = !!originIsAbsolute;
	  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

	  if (pluginToAddPropTweensTo) {
	    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

	    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

	    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

	    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
	  }

	  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
	},
	    _parseTransform = function _parseTransform(target, uncache) {
	  var cache = target._gsap || new GSCache(target);

	  if ("x" in cache && !uncache && !cache.uncache) {
	    return cache;
	  }

	  var style = target.style,
	      invertedScaleX = cache.scaleX < 0,
	      px = "px",
	      deg = "deg",
	      cs = getComputedStyle(target),
	      origin = _getComputedProperty(target, _transformOriginProp) || "0",
	      x,
	      y,
	      z,
	      scaleX,
	      scaleY,
	      rotation,
	      rotationX,
	      rotationY,
	      skewX,
	      skewY,
	      perspective,
	      xOrigin,
	      yOrigin,
	      matrix,
	      angle,
	      cos,
	      sin,
	      a,
	      b,
	      c,
	      d,
	      a12,
	      a22,
	      t1,
	      t2,
	      t3,
	      a13,
	      a23,
	      a33,
	      a42,
	      a43,
	      a32;
	  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
	  scaleX = scaleY = 1;
	  cache.svg = !!(target.getCTM && _isSVG(target));

	  if (cs.translate) {
	    // accommodate independent transforms by combining them into normal ones.
	    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
	      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
	    }

	    style.scale = style.rotate = style.translate = "none";
	  }

	  matrix = _getMatrix(target, cache.svg);

	  if (cache.svg) {
	    if (cache.uncache) {
	      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
	      t2 = target.getBBox();
	      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
	      t1 = "";
	    } else {
	      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
	    }

	    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
	  }

	  xOrigin = cache.xOrigin || 0;
	  yOrigin = cache.yOrigin || 0;

	  if (matrix !== _identity2DMatrix) {
	    a = matrix[0]; //a11

	    b = matrix[1]; //a21

	    c = matrix[2]; //a31

	    d = matrix[3]; //a41

	    x = a12 = matrix[4];
	    y = a22 = matrix[5]; //2D matrix

	    if (matrix.length === 6) {
	      scaleX = Math.sqrt(a * a + b * b);
	      scaleY = Math.sqrt(d * d + c * c);
	      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

	      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
	      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

	      if (cache.svg) {
	        x -= xOrigin - (xOrigin * a + yOrigin * c);
	        y -= yOrigin - (xOrigin * b + yOrigin * d);
	      } //3D matrix

	    } else {
	      a32 = matrix[6];
	      a42 = matrix[7];
	      a13 = matrix[8];
	      a23 = matrix[9];
	      a33 = matrix[10];
	      a43 = matrix[11];
	      x = matrix[12];
	      y = matrix[13];
	      z = matrix[14];
	      angle = _atan2(a32, a33);
	      rotationX = angle * _RAD2DEG; //rotationX

	      if (angle) {
	        cos = Math.cos(-angle);
	        sin = Math.sin(-angle);
	        t1 = a12 * cos + a13 * sin;
	        t2 = a22 * cos + a23 * sin;
	        t3 = a32 * cos + a33 * sin;
	        a13 = a12 * -sin + a13 * cos;
	        a23 = a22 * -sin + a23 * cos;
	        a33 = a32 * -sin + a33 * cos;
	        a43 = a42 * -sin + a43 * cos;
	        a12 = t1;
	        a22 = t2;
	        a32 = t3;
	      } //rotationY


	      angle = _atan2(-c, a33);
	      rotationY = angle * _RAD2DEG;

	      if (angle) {
	        cos = Math.cos(-angle);
	        sin = Math.sin(-angle);
	        t1 = a * cos - a13 * sin;
	        t2 = b * cos - a23 * sin;
	        t3 = c * cos - a33 * sin;
	        a43 = d * sin + a43 * cos;
	        a = t1;
	        b = t2;
	        c = t3;
	      } //rotationZ


	      angle = _atan2(b, a);
	      rotation = angle * _RAD2DEG;

	      if (angle) {
	        cos = Math.cos(angle);
	        sin = Math.sin(angle);
	        t1 = a * cos + b * sin;
	        t2 = a12 * cos + a22 * sin;
	        b = b * cos - a * sin;
	        a22 = a22 * cos - a12 * sin;
	        a = t1;
	        a12 = t2;
	      }

	      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
	        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
	        rotationX = rotation = 0;
	        rotationY = 180 - rotationY;
	      }

	      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
	      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
	      angle = _atan2(a12, a22);
	      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
	      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
	    }

	    if (cache.svg) {
	      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
	      t1 = target.getAttribute("transform");
	      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
	      t1 && target.setAttribute("transform", t1);
	    }
	  }

	  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
	    if (invertedScaleX) {
	      scaleX *= -1;
	      skewX += rotation <= 0 ? 180 : -180;
	      rotation += rotation <= 0 ? 180 : -180;
	    } else {
	      scaleY *= -1;
	      skewX += skewX <= 0 ? 180 : -180;
	    }
	  }

	  uncache = uncache || cache.uncache;
	  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
	  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
	  cache.z = z + px;
	  cache.scaleX = _round(scaleX);
	  cache.scaleY = _round(scaleY);
	  cache.rotation = _round(rotation) + deg;
	  cache.rotationX = _round(rotationX) + deg;
	  cache.rotationY = _round(rotationY) + deg;
	  cache.skewX = skewX + deg;
	  cache.skewY = skewY + deg;
	  cache.transformPerspective = perspective + px;

	  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
	    style[_transformOriginProp] = _firstTwoOnly(origin);
	  }

	  cache.xOffset = cache.yOffset = 0;
	  cache.force3D = _config.force3D;
	  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
	  cache.uncache = 0;
	  return cache;
	},
	    _firstTwoOnly = function _firstTwoOnly(value) {
	  return (value = value.split(" "))[0] + " " + value[1];
	},
	    //for handling transformOrigin values, stripping out the 3rd dimension
	_addPxTranslate = function _addPxTranslate(target, start, value) {
	  var unit = getUnit(start);
	  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
	},
	    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
	  cache.z = "0px";
	  cache.rotationY = cache.rotationX = "0deg";
	  cache.force3D = 0;

	  _renderCSSTransforms(ratio, cache);
	},
	    _zeroDeg = "0deg",
	    _zeroPx = "0px",
	    _endParenthesis = ") ",
	    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
	  var _ref = cache || this,
	      xPercent = _ref.xPercent,
	      yPercent = _ref.yPercent,
	      x = _ref.x,
	      y = _ref.y,
	      z = _ref.z,
	      rotation = _ref.rotation,
	      rotationY = _ref.rotationY,
	      rotationX = _ref.rotationX,
	      skewX = _ref.skewX,
	      skewY = _ref.skewY,
	      scaleX = _ref.scaleX,
	      scaleY = _ref.scaleY,
	      transformPerspective = _ref.transformPerspective,
	      force3D = _ref.force3D,
	      target = _ref.target,
	      zOrigin = _ref.zOrigin,
	      transforms = "",
	      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


	  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
	    var angle = parseFloat(rotationY) * _DEG2RAD,
	        a13 = Math.sin(angle),
	        a33 = Math.cos(angle),
	        cos;

	    angle = parseFloat(rotationX) * _DEG2RAD;
	    cos = Math.cos(angle);
	    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
	    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
	    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
	  }

	  if (transformPerspective !== _zeroPx) {
	    transforms += "perspective(" + transformPerspective + _endParenthesis;
	  }

	  if (xPercent || yPercent) {
	    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
	  }

	  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
	    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
	  }

	  if (rotation !== _zeroDeg) {
	    transforms += "rotate(" + rotation + _endParenthesis;
	  }

	  if (rotationY !== _zeroDeg) {
	    transforms += "rotateY(" + rotationY + _endParenthesis;
	  }

	  if (rotationX !== _zeroDeg) {
	    transforms += "rotateX(" + rotationX + _endParenthesis;
	  }

	  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
	    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
	  }

	  if (scaleX !== 1 || scaleY !== 1) {
	    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
	  }

	  target.style[_transformProp] = transforms || "translate(0, 0)";
	},
	    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
	  var _ref2 = cache || this,
	      xPercent = _ref2.xPercent,
	      yPercent = _ref2.yPercent,
	      x = _ref2.x,
	      y = _ref2.y,
	      rotation = _ref2.rotation,
	      skewX = _ref2.skewX,
	      skewY = _ref2.skewY,
	      scaleX = _ref2.scaleX,
	      scaleY = _ref2.scaleY,
	      target = _ref2.target,
	      xOrigin = _ref2.xOrigin,
	      yOrigin = _ref2.yOrigin,
	      xOffset = _ref2.xOffset,
	      yOffset = _ref2.yOffset,
	      forceCSS = _ref2.forceCSS,
	      tx = parseFloat(x),
	      ty = parseFloat(y),
	      a11,
	      a21,
	      a12,
	      a22,
	      temp;

	  rotation = parseFloat(rotation);
	  skewX = parseFloat(skewX);
	  skewY = parseFloat(skewY);

	  if (skewY) {
	    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
	    skewY = parseFloat(skewY);
	    skewX += skewY;
	    rotation += skewY;
	  }

	  if (rotation || skewX) {
	    rotation *= _DEG2RAD;
	    skewX *= _DEG2RAD;
	    a11 = Math.cos(rotation) * scaleX;
	    a21 = Math.sin(rotation) * scaleX;
	    a12 = Math.sin(rotation - skewX) * -scaleY;
	    a22 = Math.cos(rotation - skewX) * scaleY;

	    if (skewX) {
	      skewY *= _DEG2RAD;
	      temp = Math.tan(skewX - skewY);
	      temp = Math.sqrt(1 + temp * temp);
	      a12 *= temp;
	      a22 *= temp;

	      if (skewY) {
	        temp = Math.tan(skewY);
	        temp = Math.sqrt(1 + temp * temp);
	        a11 *= temp;
	        a21 *= temp;
	      }
	    }

	    a11 = _round(a11);
	    a21 = _round(a21);
	    a12 = _round(a12);
	    a22 = _round(a22);
	  } else {
	    a11 = scaleX;
	    a22 = scaleY;
	    a21 = a12 = 0;
	  }

	  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
	    tx = _convertToUnit(target, "x", x, "px");
	    ty = _convertToUnit(target, "y", y, "px");
	  }

	  if (xOrigin || yOrigin || xOffset || yOffset) {
	    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
	    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
	  }

	  if (xPercent || yPercent) {
	    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
	    temp = target.getBBox();
	    tx = _round(tx + xPercent / 100 * temp.width);
	    ty = _round(ty + yPercent / 100 * temp.height);
	  }

	  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
	  target.setAttribute("transform", temp);
	  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
	},
	    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
	  var cap = 360,
	      isString = _isString(endValue),
	      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
	      change = endNum - startNum,
	      finalValue = startNum + change + "deg",
	      direction,
	      pt;

	  if (isString) {
	    direction = endValue.split("_")[1];

	    if (direction === "short") {
	      change %= cap;

	      if (change !== change % (cap / 2)) {
	        change += change < 0 ? cap : -cap;
	      }
	    }

	    if (direction === "cw" && change < 0) {
	      change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
	    } else if (direction === "ccw" && change > 0) {
	      change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
	    }
	  }

	  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
	  pt.e = finalValue;
	  pt.u = "deg";

	  plugin._props.push(property);

	  return pt;
	},
	    _assign = function _assign(target, source) {
	  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
	  for (var p in source) {
	    target[p] = source[p];
	  }

	  return target;
	},
	    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
	  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
	  var startCache = _assign({}, target._gsap),
	      exclude = "perspective,force3D,transformOrigin,svgOrigin",
	      style = target.style,
	      endCache,
	      p,
	      startValue,
	      endValue,
	      startNum,
	      endNum,
	      startUnit,
	      endUnit;

	  if (startCache.svg) {
	    startValue = target.getAttribute("transform");
	    target.setAttribute("transform", "");
	    style[_transformProp] = transforms;
	    endCache = _parseTransform(target, 1);

	    _removeProperty(target, _transformProp);

	    target.setAttribute("transform", startValue);
	  } else {
	    startValue = getComputedStyle(target)[_transformProp];
	    style[_transformProp] = transforms;
	    endCache = _parseTransform(target, 1);
	    style[_transformProp] = startValue;
	  }

	  for (p in _transformProps) {
	    startValue = startCache[p];
	    endValue = endCache[p];

	    if (startValue !== endValue && exclude.indexOf(p) < 0) {
	      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
	      startUnit = getUnit(startValue);
	      endUnit = getUnit(endValue);
	      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
	      endNum = parseFloat(endValue);
	      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
	      plugin._pt.u = endUnit || 0;

	      plugin._props.push(p);
	    }
	  }

	  _assign(endCache, startCache);
	}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


	_forEachName("padding,margin,Width,Radius", function (name, index) {
	  var t = "Top",
	      r = "Right",
	      b = "Bottom",
	      l = "Left",
	      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
	    return index < 2 ? name + side : "border" + side + name;
	  });

	  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
	    var a, vars;

	    if (arguments.length < 4) {
	      // getter, passed target, property, and unit (from _get())
	      a = props.map(function (prop) {
	        return _get(plugin, prop, property);
	      });
	      vars = a.join(" ");
	      return vars.split(a[0]).length === 5 ? a[0] : vars;
	    }

	    a = (endValue + "").split(" ");
	    vars = {};
	    props.forEach(function (prop, i) {
	      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
	    });
	    plugin.init(target, vars, tween);
	  };
	});

	var CSSPlugin = {
	  name: "css",
	  register: _initCore,
	  targetTest: function targetTest(target) {
	    return target.style && target.nodeType;
	  },
	  init: function init(target, vars, tween, index, targets) {
	    var props = this._props,
	        style = target.style,
	        startAt = tween.vars.startAt,
	        startValue,
	        endValue,
	        endNum,
	        startNum,
	        type,
	        specialProp,
	        p,
	        startUnit,
	        endUnit,
	        relative,
	        isTransformRelated,
	        transformPropTween,
	        cache,
	        smooth,
	        hasPriority,
	        inlineProps;
	    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

	    this.styles = this.styles || _getStyleSaver(target);
	    inlineProps = this.styles.props;
	    this.tween = tween;

	    for (p in vars) {
	      if (p === "autoRound") {
	        continue;
	      }

	      endValue = vars[p];

	      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
	        // plugins
	        continue;
	      }

	      type = typeof endValue;
	      specialProp = _specialProps[p];

	      if (type === "function") {
	        endValue = endValue.call(tween, index, target, targets);
	        type = typeof endValue;
	      }

	      if (type === "string" && ~endValue.indexOf("random(")) {
	        endValue = _replaceRandom(endValue);
	      }

	      if (specialProp) {
	        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
	      } else if (p.substr(0, 2) === "--") {
	        //CSS variable
	        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
	        endValue += "";
	        _colorExp.lastIndex = 0;

	        if (!_colorExp.test(startValue)) {
	          // colors don't have units
	          startUnit = getUnit(startValue);
	          endUnit = getUnit(endValue);
	        }

	        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
	        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
	        props.push(p);
	        inlineProps.push(p, 0, style[p]);
	      } else if (type !== "undefined") {
	        if (startAt && p in startAt) {
	          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
	          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
	          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
	          getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

	          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
	        } else {
	          startValue = _get(target, p);
	        }

	        startNum = parseFloat(startValue);
	        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
	        relative && (endValue = endValue.substr(2));
	        endNum = parseFloat(endValue);

	        if (p in _propertyAliases) {
	          if (p === "autoAlpha") {
	            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
	            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
	              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
	              startNum = 0;
	            }

	            inlineProps.push("visibility", 0, style.visibility);

	            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
	          }

	          if (p !== "scale" && p !== "transform") {
	            p = _propertyAliases[p];
	            ~p.indexOf(",") && (p = p.split(",")[0]);
	          }
	        }

	        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

	        if (isTransformRelated) {
	          this.styles.save(p);

	          if (!transformPropTween) {
	            cache = target._gsap;
	            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

	            smooth = vars.smoothOrigin !== false && cache.smooth;
	            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

	            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
	          }

	          if (p === "scale") {
	            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
	            this._pt.u = 0;
	            props.push("scaleY", p);
	            p += "X";
	          } else if (p === "transformOrigin") {
	            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
	            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

	            if (cache.svg) {
	              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
	            } else {
	              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

	              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

	              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
	            }

	            continue;
	          } else if (p === "svgOrigin") {
	            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

	            continue;
	          } else if (p in _rotationalProperties) {
	            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

	            continue;
	          } else if (p === "smoothOrigin") {
	            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

	            continue;
	          } else if (p === "force3D") {
	            cache[p] = endValue;
	            continue;
	          } else if (p === "transform") {
	            _addRawTransformPTs(this, endValue, target);

	            continue;
	          }
	        } else if (!(p in style)) {
	          p = _checkPropPrefix(p) || p;
	        }

	        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
	          startUnit = (startValue + "").substr((startNum + "").length);
	          endNum || (endNum = 0); // protect against NaN

	          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
	          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
	          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
	          this._pt.u = endUnit || 0;

	          if (startUnit !== endUnit && endUnit !== "%") {
	            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
	            this._pt.b = startValue;
	            this._pt.r = _renderCSSPropWithBeginning;
	          }
	        } else if (!(p in style)) {
	          if (p in target) {
	            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
	            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
	          } else if (p !== "parseTransform") {
	            _missingPlugin(p, endValue);

	            continue;
	          }
	        } else {
	          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
	        }

	        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
	        props.push(p);
	      }
	    }

	    hasPriority && _sortPropTweensByPriority(this);
	  },
	  render: function render(ratio, data) {
	    if (data.tween._time || !_reverting$1()) {
	      var pt = data._pt;

	      while (pt) {
	        pt.r(ratio, pt.d);
	        pt = pt._next;
	      }
	    } else {
	      data.styles.revert();
	    }
	  },
	  get: _get,
	  aliases: _propertyAliases,
	  getSetter: function getSetter(target, property, plugin) {
	    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
	    var p = _propertyAliases[property];
	    p && p.indexOf(",") < 0 && (property = p);
	    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
	  },
	  core: {
	    _removeProperty: _removeProperty,
	    _getMatrix: _getMatrix
	  }
	};
	gsap.utils.checkPrefix = _checkPropPrefix;
	gsap.core.getStyleSaver = _getStyleSaver;

	(function (positionAndScale, rotation, others, aliases) {
	  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
	    _transformProps[name] = 1;
	  });

	  _forEachName(rotation, function (name) {
	    _config.units[name] = "deg";
	    _rotationalProperties[name] = 1;
	  });

	  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

	  _forEachName(aliases, function (name) {
	    var split = name.split(":");
	    _propertyAliases[split[1]] = all[split[0]];
	  });
	})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

	_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
	  _config.units[name] = "px";
	});

	gsap.registerPlugin(CSSPlugin);

	var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
	    // to protect from tree shaking
	TweenMaxWithCSS = gsapWithCSS.core.Tween;

	const sec7 = () => {
	  jquery('.slick').slick({
	    autoplay: true,
	    speed: 600,
	    autoplaySpeed: 6000,
	    infinite: true,
	    // lazyLoad: 'ondemand',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    // fade: true,
	    // cssEase: 'linear',
	    responsive: [{
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    }, {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }, {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    } // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	    ]
	  });
	};

	const sec3 = () => {
	  jquery(".sec3card").click(function () {
	    jquery(".sec3card").removeClass('activeSec3');
	    jquery(this).addClass('activeSec3');
	  });
	};

	const sec6 = () => {
	  jquery(".sec6card").click(function () {
	    jquery(".sec6card").removeClass('activeSec6');
	    jquery(this).addClass('activeSec6');
	  });
	};

	const nav = () => {
	  jquery(".navlink").click(function () {
	    jquery(".navlink").removeClass('activenav');
	    jquery(this).addClass('activenav');
	  });
	};

	jquery(document).ready(() => {
	  nav();
	  sec3();
	  sec6();
	  sec7();
	  gsapWithCSS.to(".gsap-sec1-icon", {
	    scale: 1.5,
	    duration: 1,
	    repeat: -1,
	    yoyo: true
	  });
	  gsapWithCSS.to(".gsap-footer-icon", {
	    x: 7,
	    duration: 1,
	    repeat: -1,
	    yoyo: true
	  });
	  gsapWithCSS.to(".logo", {
	    x: 10,
	    duration: 1,
	    repeat: -1,
	    yoyo: true
	  });
	});

})));