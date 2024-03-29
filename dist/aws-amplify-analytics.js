(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("aws_amplify_analytics", [], factory);
	else if(typeof exports === 'object')
		exports["aws_amplify_analytics"] = factory();
	else
		root["aws_amplify_analytics"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * The main AWS namespace
 */
var AWS = { util: __webpack_require__(1) };

/**
 * @api private
 * @!macro [new] nobrowser
 *   @note This feature is not supported in the browser environment of the SDK.
 */
var _hidden = {}; _hidden.toString(); // hack to parse macro

/**
 * @api private
 */
module.exports = AWS;

AWS.util.update(AWS, {

  /**
   * @constant
   */
  VERSION: '2.329.0',

  /**
   * @api private
   */
  Signers: {},

  /**
   * @api private
   */
  Protocol: {
    Json: __webpack_require__(15),
    Query: __webpack_require__(23),
    Rest: __webpack_require__(11),
    RestJson: __webpack_require__(25),
    RestXml: __webpack_require__(26)
  },

  /**
   * @api private
   */
  XML: {
    Builder: __webpack_require__(55),
    Parser: null // conditionally set based on environment
  },

  /**
   * @api private
   */
  JSON: {
    Builder: __webpack_require__(16),
    Parser: __webpack_require__(17)
  },

  /**
   * @api private
   */
  Model: {
    Api: __webpack_require__(27),
    Operation: __webpack_require__(28),
    Shape: __webpack_require__(8),
    Paginator: __webpack_require__(29),
    ResourceWaiter: __webpack_require__(30)
  },

  /**
   * @api private
   */
  apiLoader: __webpack_require__(60)
});
__webpack_require__(31);
__webpack_require__(61);
__webpack_require__(64);
__webpack_require__(34);
__webpack_require__(65);
__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(80);

/**
 * @readonly
 * @return [AWS.SequentialExecutor] a collection of global event listeners that
 *   are attached to every sent request.
 * @see AWS.Request AWS.Request for a list of events to listen for
 * @example Logging the time taken to send a request
 *   AWS.events.on('send', function startSend(resp) {
 *     resp.startTime = new Date().getTime();
 *   }).on('complete', function calculateTime(resp) {
 *     var time = (new Date().getTime() - resp.startTime) / 1000;
 *     console.log('Request took ' + time + ' seconds');
 *   });
 *
 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
 */
AWS.events = new AWS.SequentialExecutor();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {/* eslint guard-for-in:0 */
var AWS;

/**
 * A set of utility methods for use with the AWS SDK.
 *
 * @!attribute abort
 *   Return this value from an iterator function {each} or {arrayEach}
 *   to break out of the iteration.
 *   @example Breaking out of an iterator function
 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
 *       if (key == 'b') return AWS.util.abort;
 *     });
 *   @see each
 *   @see arrayEach
 * @api private
 */
var util = {
  environment: 'nodejs',
  engine: function engine() {
    if (util.isBrowser() && typeof navigator !== 'undefined') {
      return navigator.userAgent;
    } else {
      var engine = process.platform + '/' + process.version;
      if (process.env.AWS_EXECUTION_ENV) {
        engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
      }
      return engine;
    }
  },

  userAgent: function userAgent() {
    var name = util.environment;
    var agent = 'aws-sdk-' + name + '/' + __webpack_require__(0).VERSION;
    if (name === 'nodejs') agent += ' ' + util.engine();
    return agent;
  },

  isBrowser: function isBrowser() { return process && process.browser; },
  isNode: function isNode() { return !util.isBrowser(); },
  uriEscape: function uriEscape(string) {
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    // AWS percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    util.arrayEach(string.split('/'), function (part) {
      parts.push(util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return util.url.parse(url);
  },

  urlFormat: function urlFormat(url) {
    return util.url.format(url);
  },

  queryStringParse: function queryStringParse(qs) {
    return util.querystring.parse(qs);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename + '=';
      if (Array.isArray(value)) {
        var vals = [];
        util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (util.isBrowser()) return null;
    return __webpack_require__(19).readFileSync(path, 'utf-8');
  },

  base64: {
    encode: function encode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 encode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      var buf = (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string) : new util.Buffer(string);
      return buf.toString('base64');
    },

    decode: function decode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 decode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string, 'base64') : new util.Buffer(string, 'base64');
    }

  },

  buffer: {
    toStream: function toStream(buffer) {
      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

      var readable = new (util.stream.Readable)();
      var pos = 0;
      readable._read = function(size) {
        if (pos >= buffer.length) return readable.push(null);

        var end = pos + size;
        if (end > buffer.length) end = buffer.length;
        readable.push(buffer.slice(pos, end));
        pos = end;
      };

      return readable;
    },

    /**
     * Concatenates a list of Buffer objects.
     */
    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = new util.Buffer(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = new util.Buffer(string);

      if (typeof string.byteLength === 'number') {
        return string.byteLength;
      } else if (typeof string.length === 'number') {
        return string.length;
      } else if (typeof string.size === 'number') {
        return string.size;
      } else if (typeof string.path === 'string') {
        return __webpack_require__(19).lstatSync(string.path).size;
      } else {
        throw util.error(new Error('Cannot determine length of ' + string),
          { object: string });
      }
    },

    upperFirst: function upperFirst(string) {
      return string[0].toUpperCase() + string.substr(1);
    },

    lowerFirst: function lowerFirst(string) {
      return string[0].toLowerCase() + string.substr(1);
    }
  },

  ini: {
    parse: function string(ini) {
      var currentSection, map = {};
      util.arrayEach(ini.split(/\r?\n/), function(line) {
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
        if (section) {
          currentSection = section[1];
        } else if (currentSection) {
          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
          if (item) {
            map[currentSection] = map[currentSection] || {};
            map[currentSection][item[1]] = item[2];
          }
        }
      });

      return map;
    }
  },

  fn: {
    noop: function() {},

    /**
     * Turn a synchronous function into as "async" function by making it call
     * a callback. The underlying function is called with all but the last argument,
     * which is treated as the callback. The callback is passed passed a first argument
     * of null on success to mimick standard node callbacks.
     */
    makeAsync: function makeAsync(fn, expectedArgs) {
      if (expectedArgs && expectedArgs <= fn.length) {
        return fn;
      }

      return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callback = args.pop();
        var result = fn.apply(null, args);
        callback(result);
      };
    }
  },

  /**
   * Date and time utility functions.
   */
  date: {

    /**
     * @return [Date] the current JavaScript date object. Since all
     *   AWS services rely on this date object, you can override
     *   this function to provide a special time value to AWS service
     *   requests.
     */
    getDate: function getDate() {
      if (!AWS) AWS = __webpack_require__(0);
      if (AWS.config.systemClockOffset) { // use offset when non-zero
        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
      } else {
        return new Date();
      }
    },

    /**
     * @return [String] the date in ISO-8601 format
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
    },

    /**
     * @return [String] the date in RFC 822 format
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @return [Integer] the UNIX timestamp value for the current time
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.getTime() / 1000;
    },

    /**
     * @param [String,number,Date] date
     * @return [Date]
     */
    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },

    /**
     * Given a Date or date-like value, this function formats the
     * date into a string of the requested value.
     * @param [String,number,Date] date
     * @param [String] formatter Valid formats are:
     #   * 'iso8601'
     #   * 'rfc822'
     #   * 'unixTimestamp'
     * @return [String]
     */
    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return util.date[formatter](util.date.from(date));
    },

    parseTimestamp: function parseTimestamp(value) {
      if (typeof value === 'number') { // unix timestamp (number)
        return new Date(value * 1000);
      } else if (value.match(/^\d+$/)) { // unix timestamp
        return new Date(value * 1000);
      } else if (value.match(/^\d{4}/)) { // iso8601
        return new Date(value);
      } else if (value.match(/^\w{3},/)) { // rfc822
        return new Date(value);
      } else {
        throw util.error(
          new Error('unhandled timestamp format: ' + value),
          {code: 'TimestampParserError'});
      }
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      var tbl = util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = new util.Buffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (digest === 'buffer') { digest = undefined; }
      if (!fn) fn = 'sha256';
      if (typeof string === 'string') string = new util.Buffer(string);
      return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest, callback) {
      return util.crypto.hash('md5', data, digest, callback);
    },

    sha256: function sha256(data, digest, callback) {
      return util.crypto.hash('sha256', data, digest, callback);
    },

    hash: function(algorithm, data, digest, callback) {
      var hash = util.crypto.createHash(algorithm);
      if (!digest) { digest = 'binary'; }
      if (digest === 'buffer') { digest = undefined; }
      if (typeof data === 'string') data = new util.Buffer(data);
      var sliceFn = util.arraySliceFn(data);
      var isBuffer = util.Buffer.isBuffer(data);
      //Identifying objects with an ArrayBuffer as buffers
      if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;

      if (callback && typeof data === 'object' &&
          typeof data.on === 'function' && !isBuffer) {
        data.on('data', function(chunk) { hash.update(chunk); });
        data.on('error', function(err) { callback(err); });
        data.on('end', function() { callback(null, hash.digest(digest)); });
      } else if (callback && sliceFn && !isBuffer &&
                 typeof FileReader !== 'undefined') {
        // this might be a File/Blob
        var index = 0, size = 1024 * 512;
        var reader = new FileReader();
        reader.onerror = function() {
          callback(new Error('Failed to read data.'));
        };
        reader.onload = function() {
          var buf = new util.Buffer(new Uint8Array(reader.result));
          hash.update(buf);
          index += buf.length;
          reader._continueReading();
        };
        reader._continueReading = function() {
          if (index >= data.size) {
            callback(null, hash.digest(digest));
            return;
          }

          var back = index + size;
          if (back > data.size) back = data.size;
          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
        };

        reader._continueReading();
      } else {
        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
          data = new util.Buffer(new Uint8Array(data));
        }
        var out = hash.update(data).digest(digest);
        if (callback) callback(null, out);
        return out;
      }
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return util.crypto.lib.createHash(algorithm);
    }

  },

  /** @!ignore */

  /* Abort constant */
  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (Object.prototype.hasOwnProperty.call(array, idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return util.update(util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    // jshint forin:false
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  },

  arraySliceFn: function arraySliceFn(obj) {
    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
    return typeof fn === 'function' ? fn : null;
  },

  isType: function isType(obj, type) {
    // handle cross-"frame" objects
    if (typeof type === 'function') type = util.typeName(type);
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  typeName: function typeName(type) {
    if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
    var str = type.toString();
    var match = str.match(/^\s*function (.+)\(/);
    return match ? match[1] : str;
  },

  error: function error(err, options) {
    var originalError = null;
    if (typeof err.message === 'string' && err.message !== '') {
      if (typeof options === 'string' || (options && options.message)) {
        originalError = util.copy(err);
        originalError.message = err.message;
      }
    }
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else if (typeof options === 'object' && options !== null) {
      util.update(err, options);
      if (options.message)
        err.message = options.message;
      if (options.code || options.name)
        err.code = options.code || options.name;
      if (options.stack)
        err.stack = options.stack;
    }

    if (typeof Object.defineProperty === 'function') {
      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
      Object.defineProperty(err, 'message', {enumerable: true});
    }

    err.name = options && options.name || err.name || err.code || 'Error';
    err.time = new Date();

    if (originalError) err.originalError = originalError;

    return err;
  },

  /**
   * @api private
   */
  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      var ctor = function ConstructorWrapper() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    // constructor not supplied, create pass-through ctor
    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },

  /**
   * @api private
   */
  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      // jshint forin:false
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop !== 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  },

  /**
   * @api private
   */
  hideProperties: function hideProperties(obj, props) {
    if (typeof Object.defineProperty !== 'function') return;

    util.arrayEach(props, function (key) {
      Object.defineProperty(obj, key, {
        enumerable: false, writable: true, configurable: true });
    });
  },

  /**
   * @api private
   */
  property: function property(obj, name, value, enumerable, isValue) {
    var opts = {
      configurable: true,
      enumerable: enumerable !== undefined ? enumerable : true
    };
    if (typeof value === 'function' && !isValue) {
      opts.get = value;
    }
    else {
      opts.value = value; opts.writable = true;
    }

    Object.defineProperty(obj, name, opts);
  },

  /**
   * @api private
   */
  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
    var cachedValue = null;

    // build enumerable attribute for each value with lazy accessor.
    util.property(obj, name, function() {
      if (cachedValue === null) {
        cachedValue = get();
      }
      return cachedValue;
    }, enumerable);
  },

  /**
   * TODO Remove in major version revision
   * This backfill populates response data without the
   * top-level payload name.
   *
   * @api private
   */
  hoistPayloadMember: function hoistPayloadMember(resp) {
    var req = resp.request;
    var operationName = req.operation;
    var operation = req.service.api.operations[operationName];
    var output = operation.output;
    if (output.payload && !operation.hasEventOutput) {
      var payloadMember = output.members[output.payload];
      var responsePayload = resp.data[output.payload];
      if (payloadMember.type === 'structure') {
        util.each(responsePayload, function(key, value) {
          util.property(resp.data, key, value, false);
        });
      }
    }
  },

  /**
   * Compute SHA-256 checksums of streams
   *
   * @api private
   */
  computeSha256: function computeSha256(body, done) {
    if (util.isNode()) {
      var Stream = util.stream.Stream;
      var fs = __webpack_require__(19);
      if (body instanceof Stream) {
        if (typeof body.path === 'string') { // assume file object
          var settings = {};
          if (typeof body.start === 'number') {
            settings.start = body.start;
          }
          if (typeof body.end === 'number') {
            settings.end = body.end;
          }
          body = fs.createReadStream(body.path, settings);
        } else { // TODO support other stream types
          return done(new Error('Non-file stream objects are ' +
                                'not supported with SigV4'));
        }
      }
    }

    util.crypto.sha256(body, 'hex', function(err, sha) {
      if (err) done(err);
      else done(null, sha);
    });
  },

  /**
   * @api private
   */
  isClockSkewed: function isClockSkewed(serverTime) {
    if (serverTime) {
      util.property(AWS.config, 'isClockSkewed',
        Math.abs(new Date().getTime() - serverTime) >= 300000, false);
      return AWS.config.isClockSkewed;
    }
  },

  applyClockOffset: function applyClockOffset(serverTime) {
    if (serverTime)
      AWS.config.systemClockOffset = serverTime - new Date().getTime();
  },

  /**
   * @api private
   */
  extractRequestId: function extractRequestId(resp) {
    var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                     resp.httpResponse.headers['x-amzn-requestid'];

    if (!requestId && resp.data && resp.data.ResponseMetadata) {
      requestId = resp.data.ResponseMetadata.RequestId;
    }

    if (requestId) {
      resp.requestId = requestId;
    }

    if (resp.error) {
      resp.error.requestId = requestId;
    }
  },

  /**
   * @api private
   */
  addPromises: function addPromises(constructors, PromiseDependency) {
    var deletePromises = false;
    if (PromiseDependency === undefined && AWS && AWS.config) {
      PromiseDependency = AWS.config.getPromisesDependency();
    }
    if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
      PromiseDependency = Promise;
    }
    if (typeof PromiseDependency !== 'function') deletePromises = true;
    if (!Array.isArray(constructors)) constructors = [constructors];

    for (var ind = 0; ind < constructors.length; ind++) {
      var constructor = constructors[ind];
      if (deletePromises) {
        if (constructor.deletePromisesFromClass) {
          constructor.deletePromisesFromClass();
        }
      } else if (constructor.addPromisesToClass) {
        constructor.addPromisesToClass(PromiseDependency);
      }
    }
  },

  /**
   * @api private
   */
  promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
    return function promise() {
      var self = this;
      return new PromiseDependency(function(resolve, reject) {
        self[methodName](function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };
  },

  /**
   * @api private
   */
  isDualstackAvailable: function isDualstackAvailable(service) {
    if (!service) return false;
    var metadata = __webpack_require__(81);
    if (typeof service !== 'string') service = service.serviceIdentifier;
    if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
    return !!metadata[service].dualstackAvailable;
  },

  /**
   * @api private
   */
  calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions) {
    if (!retryDelayOptions) retryDelayOptions = {};
    var customBackoff = retryDelayOptions.customBackoff || null;
    if (typeof customBackoff === 'function') {
      return customBackoff(retryCount);
    }
    var base = typeof retryDelayOptions.base === 'number' ? retryDelayOptions.base : 100;
    var delay = Math.random() * (Math.pow(2, retryCount) * base);
    return delay;
  },

  /**
   * @api private
   */
  handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
    if (!options) options = {};
    var http = AWS.HttpClient.getInstance();
    var httpOptions = options.httpOptions || {};
    var retryCount = 0;

    var errCallback = function(err) {
      var maxRetries = options.maxRetries || 0;
      if (err && err.code === 'TimeoutError') err.retryable = true;
      if (err && err.retryable && retryCount < maxRetries) {
        retryCount++;
        var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions);
        setTimeout(sendRequest, delay + (err.retryAfter || 0));
      } else {
        cb(err);
      }
    };

    var sendRequest = function() {
      var data = '';
      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
        httpResponse.on('end', function() {
          var statusCode = httpResponse.statusCode;
          if (statusCode < 300) {
            cb(null, data);
          } else {
            var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
            var err = util.error(new Error(),
              { retryable: statusCode >= 500 || statusCode === 429 }
            );
            if (retryAfter && err.retryable) err.retryAfter = retryAfter;
            errCallback(err);
          }
        });
      }, errCallback);
    };

    AWS.util.defer(sendRequest);
  },

  /**
   * @api private
   */
  uuid: {
    v4: function uuidV4() {
      return __webpack_require__(82).v4();
    }
  },

  /**
   * @api private
   */
  convertPayloadToString: function convertPayloadToString(resp) {
    var req = resp.request;
    var operation = req.operation;
    var rules = req.service.api.operations[operation].output || {};
    if (rules.payload && resp.data[rules.payload]) {
      resp.data[rules.payload] = resp.data[rules.payload].toString();
    }
  },

  /**
   * @api private
   */
  defer: function defer(callback) {
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(callback);
    } else if (typeof setImmediate === 'function') {
      setImmediate(callback);
    } else {
      setTimeout(callback, 0);
    }
  },

  /**
   * @api private
   */
  defaultProfile: 'default',

  /**
   * @api private
   */
  configOptInEnv: 'AWS_SDK_LOAD_CONFIG',

  /**
   * @api private
   */
  sharedCredentialsFileEnv: 'AWS_SHARED_CREDENTIALS_FILE',

  /**
   * @api private
   */
  sharedConfigFileEnv: 'AWS_CONFIG_FILE',

  /**
   * @api private
   */
  imdsDisabledEnv: 'AWS_EC2_METADATA_DISABLED'
};

/**
 * @api private
 */
module.exports = util;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(52).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var Facet_1 = __webpack_require__(10);
var Logger_1 = __webpack_require__(3);
var Amplify_1 = __webpack_require__(14);
__export(__webpack_require__(10));
var ClientDevice_1 = __webpack_require__(120);
exports.ClientDevice = ClientDevice_1.default;
var Logger_2 = __webpack_require__(3);
exports.ConsoleLogger = Logger_2.ConsoleLogger;
exports.Logger = Logger_2.ConsoleLogger;
__export(__webpack_require__(122));
var Hub_1 = __webpack_require__(123);
exports.Hub = Hub_1.default;
var I18n_1 = __webpack_require__(124);
exports.I18n = I18n_1.default;
var JS_1 = __webpack_require__(7);
exports.JS = JS_1.default;
var Signer_1 = __webpack_require__(126);
exports.Signer = Signer_1.default;
var Parser_1 = __webpack_require__(127);
exports.Parser = Parser_1.default;
var OAuthHelper_1 = __webpack_require__(41);
exports.FacebookOAuth = OAuthHelper_1.FacebookOAuth;
exports.GoogleOAuth = OAuthHelper_1.GoogleOAuth;
__export(__webpack_require__(130));
var Credentials_1 = __webpack_require__(131);
exports.Credentials = Credentials_1.default;
var ServiceWorker_1 = __webpack_require__(132);
exports.ServiceWorker = ServiceWorker_1.default;
var StorageHelper_1 = __webpack_require__(20);
exports.StorageHelper = StorageHelper_1.default;
exports.MemoryStorage = StorageHelper_1.MemoryStorage;
var Platform_1 = __webpack_require__(42);
exports.Platform = Platform_1.default;
var Platform_2 = __webpack_require__(42);
exports.Constants = {
    'userAgent': Platform_2.default.userAgent
};
exports.default = Amplify_1.default;
var logger = new Logger_1.ConsoleLogger('Core');
if (Facet_1.AWS['util']) {
    Facet_1.AWS['util'].userAgent = function () {
        return exports.Constants.userAgent;
    };
} else if (Facet_1.AWS.config) {
    Facet_1.AWS.config.update({ 'customUserAgent': exports.Constants.userAgent });
} else {
    logger.warn('No AWS.config');
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(119));
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var util = __webpack_require__(1);

// browser specific modules
util.crypto.lib = __webpack_require__(85);
util.Buffer = __webpack_require__(9).Buffer;
util.url = __webpack_require__(38);
util.querystring = __webpack_require__(39);
util.realClock = __webpack_require__(98);
util.environment = 'js';
util.createEventStream = __webpack_require__(99).createEventStream;

var AWS = __webpack_require__(0);

/**
 * @api private
 */
module.exports = AWS;

__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(105);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(115);

// Load the DOMParser XML parser
AWS.XML.Parser = __webpack_require__(116);

// Load the XHR HttpClient
__webpack_require__(117);

if (typeof process === 'undefined') {
  process = {
    browser: true
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var MIME_MAP = [{ type: 'text/plain', ext: 'txt' }, { type: 'text/html', ext: 'html' }, { type: 'text/javascript', ext: 'js' }, { type: 'text/css', ext: 'css' }, { type: 'text/csv', ext: 'csv' }, { type: 'text/yaml', ext: 'yml' }, { type: 'text/yaml', ext: 'yaml' }, { type: 'text/calendar', ext: 'ics' }, { type: 'text/calendar', ext: 'ical' }, { type: 'image/png', ext: 'png' }, { type: 'image/gif', ext: 'gif' }, { type: 'image/jpeg', ext: 'jpg' }, { type: 'image/jpeg', ext: 'jpeg' }, { type: 'image/bmp', ext: 'bmp' }, { type: 'image/x-icon', ext: 'ico' }, { type: 'image/tiff', ext: 'tif' }, { type: 'image/tiff', ext: 'tiff' }, { type: 'image/svg+xml', ext: 'svg' }, { type: 'application/json', ext: 'json' }, { type: 'application/xml', ext: 'xml' }, { type: 'application/x-sh', ext: 'sh' }, { type: 'application/zip', ext: 'zip' }, { type: 'application/x-rar-compressed', ext: 'rar' }, { type: 'application/x-tar', ext: 'tar' }, { type: 'application/x-bzip', ext: 'bz' }, { type: 'application/x-bzip2', ext: 'bz2' }, { type: 'application/pdf', ext: 'pdf' }, { type: 'application/java-archive', ext: 'jar' }, { type: 'application/msword', ext: 'doc' }, { type: 'application/vnd.ms-excel', ext: 'xls' }, { type: 'application/vnd.ms-excel', ext: 'xlsx' }, { type: 'message/rfc822', ext: 'eml' }];
var JS = /** @class */function () {
    function JS() {}
    JS.isEmpty = function (obj) {
        return Object.keys(obj).length === 0;
    };
    JS.sortByField = function (list, field, dir) {
        if (!list || !list.sort) {
            return false;
        }
        var dirX = dir && dir === 'desc' ? -1 : 1;
        list.sort(function (a, b) {
            var a_val = a[field];
            var b_val = b[field];
            if (typeof b_val === 'undefined') {
                return typeof a_val === 'undefined' ? 0 : 1 * dirX;
            }
            if (typeof a_val === 'undefined') {
                return -1 * dirX;
            }
            if (a_val < b_val) {
                return -1 * dirX;
            }
            if (a_val > b_val) {
                return 1 * dirX;
            }
            return 0;
        });
        return true;
    };
    JS.objectLessAttributes = function (obj, less) {
        var ret = Object.assign({}, obj);
        if (less) {
            if (typeof less === 'string') {
                delete ret[less];
            } else {
                less.forEach(function (attr) {
                    delete ret[attr];
                });
            }
        }
        return ret;
    };
    JS.filenameToContentType = function (filename, defVal) {
        if (defVal === void 0) {
            defVal = 'application/octet-stream';
        }
        var name = filename.toLowerCase();
        var filtered = MIME_MAP.filter(function (mime) {
            return name.endsWith('.' + mime.ext);
        });
        return filtered.length > 0 ? filtered[0].type : defVal;
    };
    JS.isTextFile = function (contentType) {
        var type = contentType.toLowerCase();
        if (type.startsWith('text/')) {
            return true;
        }
        return 'application/json' === type || 'application/xml' === type || 'application/sh' === type;
    };
    /**
     * generate random string
     */
    JS.generateRandomString = function () {
        var result = '';
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 32; i > 0; i -= 1) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    };
    JS.makeQuerablePromise = function (promise) {
        if (promise.isResolved) return promise;
        var isPending = true;
        var isRejected = false;
        var isFullfilled = false;
        var result = promise.then(function (data) {
            isFullfilled = true;
            isPending = false;
            return data;
        }, function (e) {
            isRejected = true;
            isPending = false;
            throw e;
        });
        result.isFullfilled = function () {
            return isFullfilled;
        };
        result.isPending = function () {
            return isPending;
        };
        result.isRejected = function () {
            return isRejected;
        };
        return result;
    };
    JS.browserOrNode = function () {
        var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
        var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
        return {
            isBrowser: isBrowser,
            isNode: isNode
        };
    };
    /**
     * transfer the first letter of the keys to lowercase
     * @param {Object} obj - the object need to be transferred
     * @param {Array} whiteListForItself - whitelist itself from being transferred
     * @param {Array} whiteListForChildren - whitelist its children keys from being transferred
     */
    JS.transferKeyToLowerCase = function (obj, whiteListForItself, whiteListForChildren) {
        if (whiteListForItself === void 0) {
            whiteListForItself = [];
        }
        if (whiteListForChildren === void 0) {
            whiteListForChildren = [];
        }
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object' || Array.isArray(obj)) return obj;
        var ret = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var transferedKey = whiteListForItself.includes(key) ? key : key[0].toLowerCase() + key.slice(1);
                ret[transferedKey] = whiteListForChildren.includes(key) ? obj[key] : JS.transferKeyToLowerCase(obj[key], whiteListForItself, whiteListForChildren);
            }
        }
        return ret;
    };
    /**
     * transfer the first letter of the keys to lowercase
     * @param {Object} obj - the object need to be transferred
     * @param {Array} whiteListForItself - whitelist itself from being transferred
     * @param {Array} whiteListForChildren - whitelist its children keys from being transferred
     */
    JS.transferKeyToUpperCase = function (obj, whiteListForItself, whiteListForChildren) {
        if (whiteListForItself === void 0) {
            whiteListForItself = [];
        }
        if (whiteListForChildren === void 0) {
            whiteListForChildren = [];
        }
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object' || Array.isArray(obj)) return obj;
        var ret = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var transferedKey = whiteListForItself.includes(key) ? key : key[0].toUpperCase() + key.slice(1);
                ret[transferedKey] = whiteListForChildren.includes(key) ? obj[key] : JS.transferKeyToUpperCase(obj[key], whiteListForItself, whiteListForChildren);
            }
        }
        return ret;
    };
    return JS;
}();
exports.default = JS;
//# sourceMappingURL=JS.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Collection = __webpack_require__(24);

var util = __webpack_require__(1);

function property(obj, name, value) {
  if (value !== null && value !== undefined) {
    util.property.apply(this, arguments);
  }
}

function memoizedProperty(obj, name) {
  if (!obj.constructor.prototype[name]) {
    util.memoizedProperty.apply(this, arguments);
  }
}

function Shape(shape, options, memberName) {
  options = options || {};

  property(this, 'shape', shape.shape);
  property(this, 'api', options.api, false);
  property(this, 'type', shape.type);
  property(this, 'enum', shape.enum);
  property(this, 'min', shape.min);
  property(this, 'max', shape.max);
  property(this, 'pattern', shape.pattern);
  property(this, 'location', shape.location || this.location || 'body');
  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
    shape.locationName || memberName);
  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
  property(this, 'isComposite', shape.isComposite || false);
  property(this, 'isShape', true, false);
  property(this, 'isQueryName', Boolean(shape.queryName), false);
  property(this, 'isLocationName', Boolean(shape.locationName), false);
  property(this, 'isIdempotent', shape.idempotencyToken === true);
  property(this, 'isJsonValue', shape.jsonvalue === true);
  property(this, 'isSensitive', shape.sensitive === true || shape.prototype && shape.prototype.sensitive === true);
  property(this, 'isEventStream', Boolean(shape.eventstream), false);
  property(this, 'isEvent', Boolean(shape.event), false);
  property(this, 'isEventPayload', Boolean(shape.eventpayload), false);
  property(this, 'isEventHeader', Boolean(shape.eventheader), false);
  property(this, 'isTimestampFormatSet', Boolean(shape.timestampFormat) || shape.prototype && shape.prototype.isTimestampFormatSet === true, false);

  if (options.documentation) {
    property(this, 'documentation', shape.documentation);
    property(this, 'documentationUrl', shape.documentationUrl);
  }

  if (shape.xmlAttribute) {
    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
  }

  // type conversion and parsing
  property(this, 'defaultValue', null);
  this.toWireFormat = function(value) {
    if (value === null || value === undefined) return '';
    return value;
  };
  this.toType = function(value) { return value; };
}

/**
 * @api private
 */
Shape.normalizedTypes = {
  character: 'string',
  double: 'float',
  long: 'integer',
  short: 'integer',
  biginteger: 'integer',
  bigdecimal: 'float',
  blob: 'binary'
};

/**
 * @api private
 */
Shape.types = {
  'structure': StructureShape,
  'list': ListShape,
  'map': MapShape,
  'boolean': BooleanShape,
  'timestamp': TimestampShape,
  'float': FloatShape,
  'integer': IntegerShape,
  'string': StringShape,
  'base64': Base64Shape,
  'binary': BinaryShape
};

Shape.resolve = function resolve(shape, options) {
  if (shape.shape) {
    var refShape = options.api.shapes[shape.shape];
    if (!refShape) {
      throw new Error('Cannot find shape reference: ' + shape.shape);
    }

    return refShape;
  } else {
    return null;
  }
};

Shape.create = function create(shape, options, memberName) {
  if (shape.isShape) return shape;

  var refShape = Shape.resolve(shape, options);
  if (refShape) {
    var filteredKeys = Object.keys(shape);
    if (!options.documentation) {
      filteredKeys = filteredKeys.filter(function(name) {
        return !name.match(/documentation/);
      });
    }

    // create an inline shape with extra members
    var InlineShape = function() {
      refShape.constructor.call(this, shape, options, memberName);
    };
    InlineShape.prototype = refShape;
    return new InlineShape();
  } else {
    // set type if not set
    if (!shape.type) {
      if (shape.members) shape.type = 'structure';
      else if (shape.member) shape.type = 'list';
      else if (shape.key) shape.type = 'map';
      else shape.type = 'string';
    }

    // normalize types
    var origType = shape.type;
    if (Shape.normalizedTypes[shape.type]) {
      shape.type = Shape.normalizedTypes[shape.type];
    }

    if (Shape.types[shape.type]) {
      return new Shape.types[shape.type](shape, options, memberName);
    } else {
      throw new Error('Unrecognized shape type: ' + origType);
    }
  }
};

function CompositeShape(shape) {
  Shape.apply(this, arguments);
  property(this, 'isComposite', true);

  if (shape.flattened) {
    property(this, 'flattened', shape.flattened || false);
  }
}

function StructureShape(shape, options) {
  var self = this;
  var requiredMap = null, firstInit = !this.isShape;

  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'members', {});
    property(this, 'memberNames', []);
    property(this, 'required', []);
    property(this, 'isRequired', function() { return false; });
  }

  if (shape.members) {
    property(this, 'members', new Collection(shape.members, options, function(name, member) {
      return Shape.create(member, options, name);
    }));
    memoizedProperty(this, 'memberNames', function() {
      return shape.xmlOrder || Object.keys(shape.members);
    });

    if (shape.event) {
      memoizedProperty(this, 'eventPayloadMemberName', function() {
        var members = self.members;
        var memberNames = self.memberNames;
        // iterate over members to find ones that are event payloads
        for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
          if (members[memberNames[i]].isEventPayload) {
            return memberNames[i];
          }
        }
      });

      memoizedProperty(this, 'eventHeaderMemberNames', function() {
        var members = self.members;
        var memberNames = self.memberNames;
        var eventHeaderMemberNames = [];
        // iterate over members to find ones that are event headers
        for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
          if (members[memberNames[i]].isEventHeader) {
            eventHeaderMemberNames.push(memberNames[i]);
          }
        }
        return eventHeaderMemberNames;
      });
    }
  }

  if (shape.required) {
    property(this, 'required', shape.required);
    property(this, 'isRequired', function(name) {
      if (!requiredMap) {
        requiredMap = {};
        for (var i = 0; i < shape.required.length; i++) {
          requiredMap[shape.required[i]] = true;
        }
      }

      return requiredMap[name];
    }, false, true);
  }

  property(this, 'resultWrapper', shape.resultWrapper || null);

  if (shape.payload) {
    property(this, 'payload', shape.payload);
  }

  if (typeof shape.xmlNamespace === 'string') {
    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
  } else if (typeof shape.xmlNamespace === 'object') {
    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
  }
}

function ListShape(shape, options) {
  var self = this, firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return []; });
  }

  if (shape.member) {
    memoizedProperty(this, 'member', function() {
      return Shape.create(shape.member, options);
    });
  }

  if (this.flattened) {
    var oldName = this.name;
    memoizedProperty(this, 'name', function() {
      return self.member.name || oldName;
    });
  }
}

function MapShape(shape, options) {
  var firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'key', Shape.create({type: 'string'}, options));
    property(this, 'value', Shape.create({type: 'string'}, options));
  }

  if (shape.key) {
    memoizedProperty(this, 'key', function() {
      return Shape.create(shape.key, options);
    });
  }
  if (shape.value) {
    memoizedProperty(this, 'value', function() {
      return Shape.create(shape.value, options);
    });
  }
}

function TimestampShape(shape) {
  var self = this;
  Shape.apply(this, arguments);

  if (shape.timestampFormat) {
    property(this, 'timestampFormat', shape.timestampFormat);
  } else if (self.isTimestampFormatSet && this.timestampFormat) {
    property(this, 'timestampFormat', this.timestampFormat);
  } else if (this.location === 'header') {
    property(this, 'timestampFormat', 'rfc822');
  } else if (this.location === 'querystring') {
    property(this, 'timestampFormat', 'iso8601');
  } else if (this.api) {
    switch (this.api.protocol) {
      case 'json':
      case 'rest-json':
        property(this, 'timestampFormat', 'unixTimestamp');
        break;
      case 'rest-xml':
      case 'query':
      case 'ec2':
        property(this, 'timestampFormat', 'iso8601');
        break;
    }
  }

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    if (typeof value.toUTCString === 'function') return value;
    return typeof value === 'string' || typeof value === 'number' ?
           util.date.parseTimestamp(value) : null;
  };

  this.toWireFormat = function(value) {
    return util.date.format(value, self.timestampFormat);
  };
}

function StringShape() {
  Shape.apply(this, arguments);

  var nullLessProtocols = ['rest-xml', 'query', 'ec2'];
  this.toType = function(value) {
    value = this.api && nullLessProtocols.indexOf(this.api.protocol) > -1 ?
      value || '' : value;
    if (this.isJsonValue) {
      return JSON.parse(value);
    }

    return value && typeof value.toString === 'function' ?
      value.toString() : value;
  };

  this.toWireFormat = function(value) {
    return this.isJsonValue ? JSON.stringify(value) : value;
  };
}

function FloatShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseFloat(value);
  };
  this.toWireFormat = this.toType;
}

function IntegerShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseInt(value, 10);
  };
  this.toWireFormat = this.toType;
}

function BinaryShape() {
  Shape.apply(this, arguments);
  this.toType = util.base64.decode;
  this.toWireFormat = util.base64.encode;
}

function Base64Shape() {
  BinaryShape.apply(this, arguments);
}

function BooleanShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (typeof value === 'boolean') return value;
    if (value === null || value === undefined) return null;
    return value === 'true';
  };
}

/**
 * @api private
 */
Shape.shapes = {
  StructureShape: StructureShape,
  ListShape: ListShape,
  MapShape: MapShape,
  StringShape: StringShape,
  BooleanShape: BooleanShape,
  Base64Shape: Base64Shape
};

/**
 * @api private
 */
module.exports = Shape;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(87)
var ieee754 = __webpack_require__(88)
var isArray = __webpack_require__(89)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// import * as S3 from 'aws-sdk/clients/s3';
var AWS = __webpack_require__(51);
exports.AWS = AWS;
//# sourceMappingURL=Facet.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);

function populateMethod(req) {
  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
}

function generateURI(endpointPath, operationPath, input, params) {
  var uri = [endpointPath, operationPath].join('/');
  uri = uri.replace(/\/+/g, '/');

  var queryString = {}, queryStringSet = false;
  util.each(input.members, function (name, member) {
    var paramValue = params[name];
    if (paramValue === null || paramValue === undefined) return;
    if (member.location === 'uri') {
      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
      uri = uri.replace(regex, function(_, plus) {
        var fn = plus ? util.uriEscapePath : util.uriEscape;
        return fn(String(paramValue));
      });
    } else if (member.location === 'querystring') {
      queryStringSet = true;

      if (member.type === 'list') {
        queryString[member.name] = paramValue.map(function(val) {
          return util.uriEscape(member.member.toWireFormat(val).toString());
        });
      } else if (member.type === 'map') {
        util.each(paramValue, function(key, value) {
          if (Array.isArray(value)) {
            queryString[key] = value.map(function(val) {
              return util.uriEscape(String(val));
            });
          } else {
            queryString[key] = util.uriEscape(String(value));
          }
        });
      } else {
        queryString[member.name] = util.uriEscape(member.toWireFormat(paramValue).toString());
      }
    }
  });

  if (queryStringSet) {
    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
    var parts = [];
    util.arrayEach(Object.keys(queryString).sort(), function(key) {
      if (!Array.isArray(queryString[key])) {
        queryString[key] = [queryString[key]];
      }
      for (var i = 0; i < queryString[key].length; i++) {
        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
      }
    });
    uri += parts.join('&');
  }

  return uri;
}

function populateURI(req) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;

  var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
  req.httpRequest.path = uri;
}

function populateHeaders(req) {
  var operation = req.service.api.operations[req.operation];
  util.each(operation.input.members, function (name, member) {
    var value = req.params[name];
    if (value === null || value === undefined) return;

    if (member.location === 'headers' && member.type === 'map') {
      util.each(value, function(key, memberValue) {
        req.httpRequest.headers[member.name + key] = memberValue;
      });
    } else if (member.location === 'header') {
      value = member.toWireFormat(value).toString();
      if (member.isJsonValue) {
        value = util.base64.encode(value);
      }
      req.httpRequest.headers[member.name] = value;
    }
  });
}

function buildRequest(req) {
  populateMethod(req);
  populateURI(req);
  populateHeaders(req);
}

function extractError() {
}

function extractData(resp) {
  var req = resp.request;
  var data = {};
  var r = resp.httpResponse;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  // normalize headers names to lower-cased keys for matching
  var headers = {};
  util.each(r.headers, function (k, v) {
    headers[k.toLowerCase()] = v;
  });

  util.each(output.members, function(name, member) {
    var header = (member.name || name).toLowerCase();
    if (member.location === 'headers' && member.type === 'map') {
      data[name] = {};
      var location = member.isLocationName ? member.name : '';
      var pattern = new RegExp('^' + location + '(.+)', 'i');
      util.each(r.headers, function (k, v) {
        var result = k.match(pattern);
        if (result !== null) {
          data[name][result[1]] = v;
        }
      });
    } else if (member.location === 'header') {
      if (headers[header] !== undefined) {
        var value = member.isJsonValue ?
          util.base64.decode(headers[header]) :
          headers[header];
        data[name] = member.toType(value);
      }
    } else if (member.location === 'statusCode') {
      data[name] = parseInt(r.statusCode, 10);
    }
  });

  resp.data = data;
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData,
  generateURI: generateURI
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(9).Buffer;

/**
 * This is a polyfill for the static method `isView` of `ArrayBuffer`, which is
 * e.g. missing in IE 10.
 *
 * @api private
 */
if (
    typeof ArrayBuffer !== 'undefined' &&
    typeof ArrayBuffer.isView === 'undefined'
) {
    ArrayBuffer.isView = function(arg) {
        return viewStrings.indexOf(Object.prototype.toString.call(arg)) > -1;
    };
}

/**
 * @api private
 */
var viewStrings = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]',
    '[object DataView]',
];

/**
 * @api private
 */
function isEmptyData(data) {
    if (typeof data === 'string') {
        return data.length === 0;
    }
    return data.byteLength === 0;
}

/**
 * @api private
 */
function convertToBuffer(data) {
    if (typeof data === 'string') {
        data = new Buffer(data, 'utf8');
    }

    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }

    return new Uint8Array(data);
}

/**
 * @api private
 */
module.exports = exports = {
    isEmptyData: isEmptyData,
    convertToBuffer: convertToBuffer,
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var AWS = __webpack_require__(0);
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['sts'] = {};
AWS.STS = Service.defineService('sts', ['2011-06-15']);
__webpack_require__(106);
Object.defineProperty(apiLoader.services['sts'], '2011-06-15', {
  get: function get() {
    var model = __webpack_require__(107);
    model.paginators = __webpack_require__(108).pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.STS;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var logger = new Logger_1.ConsoleLogger('Amplify');
var Amplify = /** @class */function () {
    function Amplify() {}
    Amplify.register = function (comp) {
        logger.debug('component registered in amplify', comp);
        this._components.push(comp);
        if (typeof comp.getModuleName === 'function') {
            Amplify[comp.getModuleName()] = comp;
        } else {
            logger.debug('no getModuleName method for component', comp);
        }
    };
    Amplify.configure = function (config) {
        var _this = this;
        if (!config) return this._config;
        this._config = Object.assign(this._config, config);
        logger.debug('amplify config', this._config);
        this._components.map(function (comp) {
            comp.configure(_this._config);
        });
        return this._config;
    };
    Amplify.addPluggable = function (pluggable) {
        if (pluggable && pluggable['getCategory'] && typeof pluggable['getCategory'] === 'function') {
            this._components.map(function (comp) {
                if (comp['addPluggable'] && typeof comp['addPluggable'] === 'function') {
                    comp.addPluggable(pluggable);
                }
            });
        }
    };
    Amplify._components = [];
    Amplify._config = {};
    // for backward compatibility to avoid breaking change
    // if someone is using like Amplify.Auth
    Amplify.Auth = null;
    Amplify.Analytics = null;
    Amplify.API = null;
    Amplify.Storage = null;
    Amplify.I18n = null;
    Amplify.Cache = null;
    Amplify.PubSub = null;
    Amplify.Interactions = null;
    Amplify.Pushnotification = null;
    Amplify.UI = null;
    Amplify.XR = null;
    Amplify.Logger = Logger_1.ConsoleLogger;
    Amplify.ServiceWorker = null;
    return Amplify;
}();
exports.default = Amplify;
//# sourceMappingURL=Amplify.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var JsonBuilder = __webpack_require__(16);
var JsonParser = __webpack_require__(17);

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
  if (typeof error.code === 'string') {
    error.code = error.code.split(':')[0];
  }

  if (httpResponse.body.length > 0) {
    try {
      var e = JSON.parse(httpResponse.body.toString());
      if (e.__type || e.code) {
        error.code = (e.__type || e.code).split('#').pop();
      }
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } catch (e) {
      error.statusCode = httpResponse.statusCode;
      error.message = httpResponse.statusMessage;
    }
  } else {
    error.statusCode = httpResponse.statusCode;
    error.message = httpResponse.statusCode.toString();
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  var body = resp.httpResponse.body.toString() || '{}';
  if (resp.request.service.config.convertResponseTypes === false) {
    resp.data = JSON.parse(body);
  } else {
    var operation = resp.request.service.api.operations[resp.request.operation];
    var shape = operation.output || {};
    var parser = new JsonParser();
    resp.data = parser.parse(body, shape);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);

function JsonBuilder() { }

JsonBuilder.prototype.build = function(value, shape) {
  return JSON.stringify(translate(value, shape));
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      if (memberShape.location !== 'body') return;
      var locationName = memberShape.isLocationName ? memberShape.name : name;
      var result = translate(value, memberShape);
      if (result !== undefined) struct[locationName] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toWireFormat(value);
}

/**
 * @api private
 */
module.exports = JsonBuilder;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);

function JsonParser() { }

JsonParser.prototype.parse = function(value, shape) {
  return translate(JSON.parse(value), shape);
};

function translate(value, shape) {
  if (!shape || value === undefined) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  if (structure == null) return undefined;

  var struct = {};
  var shapeMembers = shape.members;
  util.each(shapeMembers, function(name, memberShape) {
    var locationName = memberShape.isLocationName ? memberShape.name : name;
    if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
      var value = structure[locationName];
      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  if (list == null) return undefined;

  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result === undefined) out.push(null);
    else out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  if (map == null) return undefined;

  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result === undefined) out[key] = null;
    else out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toType(value);
}

/**
 * @api private
 */
module.exports = JsonParser;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

(function(exports) {
  "use strict";

  function isArray(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    } else {
      return false;
    }
  }

  function isObject(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Object]";
    } else {
      return false;
    }
  }

  function strictDeepEqual(first, second) {
    // Check the scalar case first.
    if (first === second) {
      return true;
    }

    // Check if they are the same type.
    var firstType = Object.prototype.toString.call(first);
    if (firstType !== Object.prototype.toString.call(second)) {
      return false;
    }
    // We know that first and second have the same type so we can just check the
    // first type from now on.
    if (isArray(first) === true) {
      // Short circuit if they're not the same length;
      if (first.length !== second.length) {
        return false;
      }
      for (var i = 0; i < first.length; i++) {
        if (strictDeepEqual(first[i], second[i]) === false) {
          return false;
        }
      }
      return true;
    }
    if (isObject(first) === true) {
      // An object is equal if it has the same key/value pairs.
      var keysSeen = {};
      for (var key in first) {
        if (hasOwnProperty.call(first, key)) {
          if (strictDeepEqual(first[key], second[key]) === false) {
            return false;
          }
          keysSeen[key] = true;
        }
      }
      // Now check that there aren't any keys in second that weren't
      // in first.
      for (var key2 in second) {
        if (hasOwnProperty.call(second, key2)) {
          if (keysSeen[key2] !== true) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  function isFalse(obj) {
    // From the spec:
    // A false value corresponds to the following values:
    // Empty list
    // Empty object
    // Empty string
    // False boolean
    // null value

    // First check the scalar values.
    if (obj === "" || obj === false || obj === null) {
        return true;
    } else if (isArray(obj) && obj.length === 0) {
        // Check for an empty array.
        return true;
    } else if (isObject(obj)) {
        // Check for an empty object.
        for (var key in obj) {
            // If there are any keys, then
            // the object is not empty so the object
            // is not false.
            if (obj.hasOwnProperty(key)) {
              return false;
            }
        }
        return true;
    } else {
        return false;
    }
  }

  function objValues(obj) {
    var keys = Object.keys(obj);
    var values = [];
    for (var i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    return values;
  }

  function merge(a, b) {
      var merged = {};
      for (var key in a) {
          merged[key] = a[key];
      }
      for (var key2 in b) {
          merged[key2] = b[key2];
      }
      return merged;
  }

  var trimLeft;
  if (typeof String.prototype.trimLeft === "function") {
    trimLeft = function(str) {
      return str.trimLeft();
    };
  } else {
    trimLeft = function(str) {
      return str.match(/^\s*(.*)/)[1];
    };
  }

  // Type constants used to define functions.
  var TYPE_NUMBER = 0;
  var TYPE_ANY = 1;
  var TYPE_STRING = 2;
  var TYPE_ARRAY = 3;
  var TYPE_OBJECT = 4;
  var TYPE_BOOLEAN = 5;
  var TYPE_EXPREF = 6;
  var TYPE_NULL = 7;
  var TYPE_ARRAY_NUMBER = 8;
  var TYPE_ARRAY_STRING = 9;

  var TOK_EOF = "EOF";
  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
  var TOK_RBRACKET = "Rbracket";
  var TOK_RPAREN = "Rparen";
  var TOK_COMMA = "Comma";
  var TOK_COLON = "Colon";
  var TOK_RBRACE = "Rbrace";
  var TOK_NUMBER = "Number";
  var TOK_CURRENT = "Current";
  var TOK_EXPREF = "Expref";
  var TOK_PIPE = "Pipe";
  var TOK_OR = "Or";
  var TOK_AND = "And";
  var TOK_EQ = "EQ";
  var TOK_GT = "GT";
  var TOK_LT = "LT";
  var TOK_GTE = "GTE";
  var TOK_LTE = "LTE";
  var TOK_NE = "NE";
  var TOK_FLATTEN = "Flatten";
  var TOK_STAR = "Star";
  var TOK_FILTER = "Filter";
  var TOK_DOT = "Dot";
  var TOK_NOT = "Not";
  var TOK_LBRACE = "Lbrace";
  var TOK_LBRACKET = "Lbracket";
  var TOK_LPAREN= "Lparen";
  var TOK_LITERAL= "Literal";

  // The "&", "[", "<", ">" tokens
  // are not in basicToken because
  // there are two token variants
  // ("&&", "[?", "<=", ">=").  This is specially handled
  // below.

  var basicTokens = {
    ".": TOK_DOT,
    "*": TOK_STAR,
    ",": TOK_COMMA,
    ":": TOK_COLON,
    "{": TOK_LBRACE,
    "}": TOK_RBRACE,
    "]": TOK_RBRACKET,
    "(": TOK_LPAREN,
    ")": TOK_RPAREN,
    "@": TOK_CURRENT
  };

  var operatorStartToken = {
      "<": true,
      ">": true,
      "=": true,
      "!": true
  };

  var skipChars = {
      " ": true,
      "\t": true,
      "\n": true
  };


  function isAlpha(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             ch === "_";
  }

  function isNum(ch) {
      return (ch >= "0" && ch <= "9") ||
             ch === "-";
  }
  function isAlphaNum(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             (ch >= "0" && ch <= "9") ||
             ch === "_";
  }

  function Lexer() {
  }
  Lexer.prototype = {
      tokenize: function(stream) {
          var tokens = [];
          this._current = 0;
          var start;
          var identifier;
          var token;
          while (this._current < stream.length) {
              if (isAlpha(stream[this._current])) {
                  start = this._current;
                  identifier = this._consumeUnquotedIdentifier(stream);
                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (basicTokens[stream[this._current]] !== undefined) {
                  tokens.push({type: basicTokens[stream[this._current]],
                              value: stream[this._current],
                              start: this._current});
                  this._current++;
              } else if (isNum(stream[this._current])) {
                  token = this._consumeNumber(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "[") {
                  // No need to increment this._current.  This happens
                  // in _consumeLBracket
                  token = this._consumeLBracket(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "\"") {
                  start = this._current;
                  identifier = this._consumeQuotedIdentifier(stream);
                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "'") {
                  start = this._current;
                  identifier = this._consumeRawStringLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "`") {
                  start = this._current;
                  var literal = this._consumeLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: literal,
                               start: start});
              } else if (operatorStartToken[stream[this._current]] !== undefined) {
                  tokens.push(this._consumeOperator(stream));
              } else if (skipChars[stream[this._current]] !== undefined) {
                  // Ignore whitespace.
                  this._current++;
              } else if (stream[this._current] === "&") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "&") {
                      this._current++;
                      tokens.push({type: TOK_AND, value: "&&", start: start});
                  } else {
                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
                  }
              } else if (stream[this._current] === "|") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "|") {
                      this._current++;
                      tokens.push({type: TOK_OR, value: "||", start: start});
                  } else {
                      tokens.push({type: TOK_PIPE, value: "|", start: start});
                  }
              } else {
                  var error = new Error("Unknown character:" + stream[this._current]);
                  error.name = "LexerError";
                  throw error;
              }
          }
          return tokens;
      },

      _consumeUnquotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
              this._current++;
          }
          return stream.slice(start, this._current);
      },

      _consumeQuotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "\"" && this._current < maxLength) {
              // You can escape a double quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "\"")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          return JSON.parse(stream.slice(start, this._current));
      },

      _consumeRawStringLiteral: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "'" && this._current < maxLength) {
              // You can escape a single quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "'")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          var literal = stream.slice(start + 1, this._current - 1);
          return literal.replace("\\'", "'");
      },

      _consumeNumber: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (isNum(stream[this._current]) && this._current < maxLength) {
              this._current++;
          }
          var value = parseInt(stream.slice(start, this._current));
          return {type: TOK_NUMBER, value: value, start: start};
      },

      _consumeLBracket: function(stream) {
          var start = this._current;
          this._current++;
          if (stream[this._current] === "?") {
              this._current++;
              return {type: TOK_FILTER, value: "[?", start: start};
          } else if (stream[this._current] === "]") {
              this._current++;
              return {type: TOK_FLATTEN, value: "[]", start: start};
          } else {
              return {type: TOK_LBRACKET, value: "[", start: start};
          }
      },

      _consumeOperator: function(stream) {
          var start = this._current;
          var startingChar = stream[start];
          this._current++;
          if (startingChar === "!") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_NE, value: "!=", start: start};
              } else {
                return {type: TOK_NOT, value: "!", start: start};
              }
          } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_LTE, value: "<=", start: start};
              } else {
                  return {type: TOK_LT, value: "<", start: start};
              }
          } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_GTE, value: ">=", start: start};
              } else {
                  return {type: TOK_GT, value: ">", start: start};
              }
          } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_EQ, value: "==", start: start};
              }
          }
      },

      _consumeLiteral: function(stream) {
          this._current++;
          var start = this._current;
          var maxLength = stream.length;
          var literal;
          while(stream[this._current] !== "`" && this._current < maxLength) {
              // You can escape a literal char or you can escape the escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "`")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          var literalString = trimLeft(stream.slice(start, this._current));
          literalString = literalString.replace("\\`", "`");
          if (this._looksLikeJSON(literalString)) {
              literal = JSON.parse(literalString);
          } else {
              // Try to JSON parse it as "<literal>"
              literal = JSON.parse("\"" + literalString + "\"");
          }
          // +1 gets us to the ending "`", +1 to move on to the next char.
          this._current++;
          return literal;
      },

      _looksLikeJSON: function(literalString) {
          var startingChars = "[{\"";
          var jsonLiterals = ["true", "false", "null"];
          var numberLooking = "-0123456789";

          if (literalString === "") {
              return false;
          } else if (startingChars.indexOf(literalString[0]) >= 0) {
              return true;
          } else if (jsonLiterals.indexOf(literalString) >= 0) {
              return true;
          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
              try {
                  JSON.parse(literalString);
                  return true;
              } catch (ex) {
                  return false;
              }
          } else {
              return false;
          }
      }
  };

      var bindingPower = {};
      bindingPower[TOK_EOF] = 0;
      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_RBRACKET] = 0;
      bindingPower[TOK_RPAREN] = 0;
      bindingPower[TOK_COMMA] = 0;
      bindingPower[TOK_RBRACE] = 0;
      bindingPower[TOK_NUMBER] = 0;
      bindingPower[TOK_CURRENT] = 0;
      bindingPower[TOK_EXPREF] = 0;
      bindingPower[TOK_PIPE] = 1;
      bindingPower[TOK_OR] = 2;
      bindingPower[TOK_AND] = 3;
      bindingPower[TOK_EQ] = 5;
      bindingPower[TOK_GT] = 5;
      bindingPower[TOK_LT] = 5;
      bindingPower[TOK_GTE] = 5;
      bindingPower[TOK_LTE] = 5;
      bindingPower[TOK_NE] = 5;
      bindingPower[TOK_FLATTEN] = 9;
      bindingPower[TOK_STAR] = 20;
      bindingPower[TOK_FILTER] = 21;
      bindingPower[TOK_DOT] = 40;
      bindingPower[TOK_NOT] = 45;
      bindingPower[TOK_LBRACE] = 50;
      bindingPower[TOK_LBRACKET] = 55;
      bindingPower[TOK_LPAREN] = 60;

  function Parser() {
  }

  Parser.prototype = {
      parse: function(expression) {
          this._loadTokens(expression);
          this.index = 0;
          var ast = this.expression(0);
          if (this._lookahead(0) !== TOK_EOF) {
              var t = this._lookaheadToken(0);
              var error = new Error(
                  "Unexpected token type: " + t.type + ", value: " + t.value);
              error.name = "ParserError";
              throw error;
          }
          return ast;
      },

      _loadTokens: function(expression) {
          var lexer = new Lexer();
          var tokens = lexer.tokenize(expression);
          tokens.push({type: TOK_EOF, value: "", start: expression.length});
          this.tokens = tokens;
      },

      expression: function(rbp) {
          var leftToken = this._lookaheadToken(0);
          this._advance();
          var left = this.nud(leftToken);
          var currentToken = this._lookahead(0);
          while (rbp < bindingPower[currentToken]) {
              this._advance();
              left = this.led(currentToken, left);
              currentToken = this._lookahead(0);
          }
          return left;
      },

      _lookahead: function(number) {
          return this.tokens[this.index + number].type;
      },

      _lookaheadToken: function(number) {
          return this.tokens[this.index + number];
      },

      _advance: function() {
          this.index++;
      },

      nud: function(token) {
        var left;
        var right;
        var expression;
        switch (token.type) {
          case TOK_LITERAL:
            return {type: "Literal", value: token.value};
          case TOK_UNQUOTEDIDENTIFIER:
            return {type: "Field", name: token.value};
          case TOK_QUOTEDIDENTIFIER:
            var node = {type: "Field", name: token.value};
            if (this._lookahead(0) === TOK_LPAREN) {
                throw new Error("Quoted identifier not allowed for function names.");
            } else {
                return node;
            }
            break;
          case TOK_NOT:
            right = this.expression(bindingPower.Not);
            return {type: "NotExpression", children: [right]};
          case TOK_STAR:
            left = {type: "Identity"};
            right = null;
            if (this._lookahead(0) === TOK_RBRACKET) {
                // This can happen in a multiselect,
                // [a, b, *]
                right = {type: "Identity"};
            } else {
                right = this._parseProjectionRHS(bindingPower.Star);
            }
            return {type: "ValueProjection", children: [left, right]};
          case TOK_FILTER:
            return this.led(token.type, {type: "Identity"});
          case TOK_LBRACE:
            return this._parseMultiselectHash();
          case TOK_FLATTEN:
            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
            right = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [left, right]};
          case TOK_LBRACKET:
            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice({type: "Identity"}, right);
            } else if (this._lookahead(0) === TOK_STAR &&
                       this._lookahead(1) === TOK_RBRACKET) {
                this._advance();
                this._advance();
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection",
                        children: [{type: "Identity"}, right]};
            } else {
                return this._parseMultiselectList();
            }
            break;
          case TOK_CURRENT:
            return {type: TOK_CURRENT};
          case TOK_EXPREF:
            expression = this.expression(bindingPower.Expref);
            return {type: "ExpressionReference", children: [expression]};
          case TOK_LPAREN:
            var args = [];
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            return args[0];
          default:
            this._errorToken(token);
        }
      },

      led: function(tokenName, left) {
        var right;
        switch(tokenName) {
          case TOK_DOT:
            var rbp = bindingPower.Dot;
            if (this._lookahead(0) !== TOK_STAR) {
                right = this._parseDotRHS(rbp);
                return {type: "Subexpression", children: [left, right]};
            } else {
                // Creating a projection.
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return {type: "ValueProjection", children: [left, right]};
            }
            break;
          case TOK_PIPE:
            right = this.expression(bindingPower.Pipe);
            return {type: TOK_PIPE, children: [left, right]};
          case TOK_OR:
            right = this.expression(bindingPower.Or);
            return {type: "OrExpression", children: [left, right]};
          case TOK_AND:
            right = this.expression(bindingPower.And);
            return {type: "AndExpression", children: [left, right]};
          case TOK_LPAREN:
            var name = left.name;
            var args = [];
            var expression, node;
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            node = {type: "Function", name: name, children: args};
            return node;
          case TOK_FILTER:
            var condition = this.expression(0);
            this._match(TOK_RBRACKET);
            if (this._lookahead(0) === TOK_FLATTEN) {
              right = {type: "Identity"};
            } else {
              right = this._parseProjectionRHS(bindingPower.Filter);
            }
            return {type: "FilterProjection", children: [left, right, condition]};
          case TOK_FLATTEN:
            var leftNode = {type: TOK_FLATTEN, children: [left]};
            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [leftNode, rightNode]};
          case TOK_EQ:
          case TOK_NE:
          case TOK_GT:
          case TOK_GTE:
          case TOK_LT:
          case TOK_LTE:
            return this._parseComparator(left, tokenName);
          case TOK_LBRACKET:
            var token = this._lookaheadToken(0);
            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice(left, right);
            } else {
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection", children: [left, right]};
            }
            break;
          default:
            this._errorToken(this._lookaheadToken(0));
        }
      },

      _match: function(tokenType) {
          if (this._lookahead(0) === tokenType) {
              this._advance();
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Expected " + tokenType + ", got: " + t.type);
              error.name = "ParserError";
              throw error;
          }
      },

      _errorToken: function(token) {
          var error = new Error("Invalid token (" +
                                token.type + "): \"" +
                                token.value + "\"");
          error.name = "ParserError";
          throw error;
      },


      _parseIndexExpression: function() {
          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
              return this._parseSliceExpression();
          } else {
              var node = {
                  type: "Index",
                  value: this._lookaheadToken(0).value};
              this._advance();
              this._match(TOK_RBRACKET);
              return node;
          }
      },

      _projectIfSlice: function(left, right) {
          var indexExpr = {type: "IndexExpression", children: [left, right]};
          if (right.type === "Slice") {
              return {
                  type: "Projection",
                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
              };
          } else {
              return indexExpr;
          }
      },

      _parseSliceExpression: function() {
          // [start:end:step] where each part is optional, as well as the last
          // colon.
          var parts = [null, null, null];
          var index = 0;
          var currentToken = this._lookahead(0);
          while (currentToken !== TOK_RBRACKET && index < 3) {
              if (currentToken === TOK_COLON) {
                  index++;
                  this._advance();
              } else if (currentToken === TOK_NUMBER) {
                  parts[index] = this._lookaheadToken(0).value;
                  this._advance();
              } else {
                  var t = this._lookahead(0);
                  var error = new Error("Syntax error, unexpected token: " +
                                        t.value + "(" + t.type + ")");
                  error.name = "Parsererror";
                  throw error;
              }
              currentToken = this._lookahead(0);
          }
          this._match(TOK_RBRACKET);
          return {
              type: "Slice",
              children: parts
          };
      },

      _parseComparator: function(left, comparator) {
        var right = this.expression(bindingPower[comparator]);
        return {type: "Comparator", name: comparator, children: [left, right]};
      },

      _parseDotRHS: function(rbp) {
          var lookahead = this._lookahead(0);
          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
          if (exprTokens.indexOf(lookahead) >= 0) {
              return this.expression(rbp);
          } else if (lookahead === TOK_LBRACKET) {
              this._match(TOK_LBRACKET);
              return this._parseMultiselectList();
          } else if (lookahead === TOK_LBRACE) {
              this._match(TOK_LBRACE);
              return this._parseMultiselectHash();
          }
      },

      _parseProjectionRHS: function(rbp) {
          var right;
          if (bindingPower[this._lookahead(0)] < 10) {
              right = {type: "Identity"};
          } else if (this._lookahead(0) === TOK_LBRACKET) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_FILTER) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_DOT) {
              this._match(TOK_DOT);
              right = this._parseDotRHS(rbp);
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Sytanx error, unexpected token: " +
                                    t.value + "(" + t.type + ")");
              error.name = "ParserError";
              throw error;
          }
          return right;
      },

      _parseMultiselectList: function() {
          var expressions = [];
          while (this._lookahead(0) !== TOK_RBRACKET) {
              var expression = this.expression(0);
              expressions.push(expression);
              if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                  if (this._lookahead(0) === TOK_RBRACKET) {
                    throw new Error("Unexpected token Rbracket");
                  }
              }
          }
          this._match(TOK_RBRACKET);
          return {type: "MultiSelectList", children: expressions};
      },

      _parseMultiselectHash: function() {
        var pairs = [];
        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
        var keyToken, keyName, value, node;
        for (;;) {
          keyToken = this._lookaheadToken(0);
          if (identifierTypes.indexOf(keyToken.type) < 0) {
            throw new Error("Expecting an identifier token, got: " +
                            keyToken.type);
          }
          keyName = keyToken.value;
          this._advance();
          this._match(TOK_COLON);
          value = this.expression(0);
          node = {type: "KeyValuePair", name: keyName, value: value};
          pairs.push(node);
          if (this._lookahead(0) === TOK_COMMA) {
            this._match(TOK_COMMA);
          } else if (this._lookahead(0) === TOK_RBRACE) {
            this._match(TOK_RBRACE);
            break;
          }
        }
        return {type: "MultiSelectHash", children: pairs};
      }
  };


  function TreeInterpreter(runtime) {
    this.runtime = runtime;
  }

  TreeInterpreter.prototype = {
      search: function(node, value) {
          return this.visit(node, value);
      },

      visit: function(node, value) {
          var matched, current, result, first, second, field, left, right, collected, i;
          switch (node.type) {
            case "Field":
              if (value === null ) {
                  return null;
              } else if (isObject(value)) {
                  field = value[node.name];
                  if (field === undefined) {
                      return null;
                  } else {
                      return field;
                  }
              } else {
                return null;
              }
              break;
            case "Subexpression":
              result = this.visit(node.children[0], value);
              for (i = 1; i < node.children.length; i++) {
                  result = this.visit(node.children[1], result);
                  if (result === null) {
                      return null;
                  }
              }
              return result;
            case "IndexExpression":
              left = this.visit(node.children[0], value);
              right = this.visit(node.children[1], left);
              return right;
            case "Index":
              if (!isArray(value)) {
                return null;
              }
              var index = node.value;
              if (index < 0) {
                index = value.length + index;
              }
              result = value[index];
              if (result === undefined) {
                result = null;
              }
              return result;
            case "Slice":
              if (!isArray(value)) {
                return null;
              }
              var sliceParams = node.children.slice(0);
              var computed = this.computeSliceParams(value.length, sliceParams);
              var start = computed[0];
              var stop = computed[1];
              var step = computed[2];
              result = [];
              if (step > 0) {
                  for (i = start; i < stop; i += step) {
                      result.push(value[i]);
                  }
              } else {
                  for (i = start; i > stop; i += step) {
                      result.push(value[i]);
                  }
              }
              return result;
            case "Projection":
              // Evaluate left child.
              var base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              collected = [];
              for (i = 0; i < base.length; i++) {
                current = this.visit(node.children[1], base[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "ValueProjection":
              // Evaluate left child.
              base = this.visit(node.children[0], value);
              if (!isObject(base)) {
                return null;
              }
              collected = [];
              var values = objValues(base);
              for (i = 0; i < values.length; i++) {
                current = this.visit(node.children[1], values[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "FilterProjection":
              base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              var filtered = [];
              var finalResults = [];
              for (i = 0; i < base.length; i++) {
                matched = this.visit(node.children[2], base[i]);
                if (!isFalse(matched)) {
                  filtered.push(base[i]);
                }
              }
              for (var j = 0; j < filtered.length; j++) {
                current = this.visit(node.children[1], filtered[j]);
                if (current !== null) {
                  finalResults.push(current);
                }
              }
              return finalResults;
            case "Comparator":
              first = this.visit(node.children[0], value);
              second = this.visit(node.children[1], value);
              switch(node.name) {
                case TOK_EQ:
                  result = strictDeepEqual(first, second);
                  break;
                case TOK_NE:
                  result = !strictDeepEqual(first, second);
                  break;
                case TOK_GT:
                  result = first > second;
                  break;
                case TOK_GTE:
                  result = first >= second;
                  break;
                case TOK_LT:
                  result = first < second;
                  break;
                case TOK_LTE:
                  result = first <= second;
                  break;
                default:
                  throw new Error("Unknown comparator: " + node.name);
              }
              return result;
            case TOK_FLATTEN:
              var original = this.visit(node.children[0], value);
              if (!isArray(original)) {
                return null;
              }
              var merged = [];
              for (i = 0; i < original.length; i++) {
                current = original[i];
                if (isArray(current)) {
                  merged.push.apply(merged, current);
                } else {
                  merged.push(current);
                }
              }
              return merged;
            case "Identity":
              return value;
            case "MultiSelectList":
              if (value === null) {
                return null;
              }
              collected = [];
              for (i = 0; i < node.children.length; i++) {
                  collected.push(this.visit(node.children[i], value));
              }
              return collected;
            case "MultiSelectHash":
              if (value === null) {
                return null;
              }
              collected = {};
              var child;
              for (i = 0; i < node.children.length; i++) {
                child = node.children[i];
                collected[child.name] = this.visit(child.value, value);
              }
              return collected;
            case "OrExpression":
              matched = this.visit(node.children[0], value);
              if (isFalse(matched)) {
                  matched = this.visit(node.children[1], value);
              }
              return matched;
            case "AndExpression":
              first = this.visit(node.children[0], value);

              if (isFalse(first) === true) {
                return first;
              }
              return this.visit(node.children[1], value);
            case "NotExpression":
              first = this.visit(node.children[0], value);
              return isFalse(first);
            case "Literal":
              return node.value;
            case TOK_PIPE:
              left = this.visit(node.children[0], value);
              return this.visit(node.children[1], left);
            case TOK_CURRENT:
              return value;
            case "Function":
              var resolvedArgs = [];
              for (i = 0; i < node.children.length; i++) {
                  resolvedArgs.push(this.visit(node.children[i], value));
              }
              return this.runtime.callFunction(node.name, resolvedArgs);
            case "ExpressionReference":
              var refNode = node.children[0];
              // Tag the node with a specific attribute so the type
              // checker verify the type.
              refNode.jmespathType = TOK_EXPREF;
              return refNode;
            default:
              throw new Error("Unknown node type: " + node.type);
          }
      },

      computeSliceParams: function(arrayLength, sliceParams) {
        var start = sliceParams[0];
        var stop = sliceParams[1];
        var step = sliceParams[2];
        var computed = [null, null, null];
        if (step === null) {
          step = 1;
        } else if (step === 0) {
          var error = new Error("Invalid slice, step cannot be 0");
          error.name = "RuntimeError";
          throw error;
        }
        var stepValueNegative = step < 0 ? true : false;

        if (start === null) {
            start = stepValueNegative ? arrayLength - 1 : 0;
        } else {
            start = this.capSliceRange(arrayLength, start, step);
        }

        if (stop === null) {
            stop = stepValueNegative ? -1 : arrayLength;
        } else {
            stop = this.capSliceRange(arrayLength, stop, step);
        }
        computed[0] = start;
        computed[1] = stop;
        computed[2] = step;
        return computed;
      },

      capSliceRange: function(arrayLength, actualValue, step) {
          if (actualValue < 0) {
              actualValue += arrayLength;
              if (actualValue < 0) {
                  actualValue = step < 0 ? -1 : 0;
              }
          } else if (actualValue >= arrayLength) {
              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
          }
          return actualValue;
      }

  };

  function Runtime(interpreter) {
    this._interpreter = interpreter;
    this.functionTable = {
        // name: [function, <signature>]
        // The <signature> can be:
        //
        // {
        //   args: [[type1, type2], [type1, type2]],
        //   variadic: true|false
        // }
        //
        // Each arg in the arg list is a list of valid types
        // (if the function is overloaded and supports multiple
        // types.  If the type is "any" then no type checking
        // occurs on the argument.  Variadic is optional
        // and if not provided is assumed to be false.
        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
        contains: {
            _func: this._functionContains,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
                        {types: [TYPE_ANY]}]},
        "ends_with": {
            _func: this._functionEndsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
        length: {
            _func: this._functionLength,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
        map: {
            _func: this._functionMap,
            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
        max: {
            _func: this._functionMax,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "merge": {
            _func: this._functionMerge,
            _signature: [{types: [TYPE_OBJECT], variadic: true}]
        },
        "max_by": {
          _func: this._functionMaxBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        "starts_with": {
            _func: this._functionStartsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        min: {
            _func: this._functionMin,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "min_by": {
          _func: this._functionMinBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
        "sort_by": {
          _func: this._functionSortBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        join: {
            _func: this._functionJoin,
            _signature: [
                {types: [TYPE_STRING]},
                {types: [TYPE_ARRAY_STRING]}
            ]
        },
        reverse: {
            _func: this._functionReverse,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
        "not_null": {
            _func: this._functionNotNull,
            _signature: [{types: [TYPE_ANY], variadic: true}]
        }
    };
  }

  Runtime.prototype = {
    callFunction: function(name, resolvedArgs) {
      var functionEntry = this.functionTable[name];
      if (functionEntry === undefined) {
          throw new Error("Unknown function: " + name + "()");
      }
      this._validateArgs(name, resolvedArgs, functionEntry._signature);
      return functionEntry._func.call(this, resolvedArgs);
    },

    _validateArgs: function(name, args, signature) {
        // Validating the args requires validating
        // the correct arity and the correct type of each arg.
        // If the last argument is declared as variadic, then we need
        // a minimum number of args to be required.  Otherwise it has to
        // be an exact amount.
        var pluralized;
        if (signature[signature.length - 1].variadic) {
            if (args.length < signature.length) {
                pluralized = signature.length === 1 ? " argument" : " arguments";
                throw new Error("ArgumentError: " + name + "() " +
                                "takes at least" + signature.length + pluralized +
                                " but received " + args.length);
            }
        } else if (args.length !== signature.length) {
            pluralized = signature.length === 1 ? " argument" : " arguments";
            throw new Error("ArgumentError: " + name + "() " +
                            "takes " + signature.length + pluralized +
                            " but received " + args.length);
        }
        var currentSpec;
        var actualType;
        var typeMatched;
        for (var i = 0; i < signature.length; i++) {
            typeMatched = false;
            currentSpec = signature[i].types;
            actualType = this._getTypeName(args[i]);
            for (var j = 0; j < currentSpec.length; j++) {
                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                    typeMatched = true;
                    break;
                }
            }
            if (!typeMatched) {
                throw new Error("TypeError: " + name + "() " +
                                "expected argument " + (i + 1) +
                                " to be type " + currentSpec +
                                " but received type " + actualType +
                                " instead.");
            }
        }
    },

    _typeMatches: function(actual, expected, argValue) {
        if (expected === TYPE_ANY) {
            return true;
        }
        if (expected === TYPE_ARRAY_STRING ||
            expected === TYPE_ARRAY_NUMBER ||
            expected === TYPE_ARRAY) {
            // The expected type can either just be array,
            // or it can require a specific subtype (array of numbers).
            //
            // The simplest case is if "array" with no subtype is specified.
            if (expected === TYPE_ARRAY) {
                return actual === TYPE_ARRAY;
            } else if (actual === TYPE_ARRAY) {
                // Otherwise we need to check subtypes.
                // I think this has potential to be improved.
                var subtype;
                if (expected === TYPE_ARRAY_NUMBER) {
                  subtype = TYPE_NUMBER;
                } else if (expected === TYPE_ARRAY_STRING) {
                  subtype = TYPE_STRING;
                }
                for (var i = 0; i < argValue.length; i++) {
                    if (!this._typeMatches(
                            this._getTypeName(argValue[i]), subtype,
                                             argValue[i])) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            return actual === expected;
        }
    },
    _getTypeName: function(obj) {
        switch (Object.prototype.toString.call(obj)) {
            case "[object String]":
              return TYPE_STRING;
            case "[object Number]":
              return TYPE_NUMBER;
            case "[object Array]":
              return TYPE_ARRAY;
            case "[object Boolean]":
              return TYPE_BOOLEAN;
            case "[object Null]":
              return TYPE_NULL;
            case "[object Object]":
              // Check if it's an expref.  If it has, it's been
              // tagged with a jmespathType attr of 'Expref';
              if (obj.jmespathType === TOK_EXPREF) {
                return TYPE_EXPREF;
              } else {
                return TYPE_OBJECT;
              }
        }
    },

    _functionStartsWith: function(resolvedArgs) {
        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
    },

    _functionEndsWith: function(resolvedArgs) {
        var searchStr = resolvedArgs[0];
        var suffix = resolvedArgs[1];
        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
    },

    _functionReverse: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        if (typeName === TYPE_STRING) {
          var originalStr = resolvedArgs[0];
          var reversedStr = "";
          for (var i = originalStr.length - 1; i >= 0; i--) {
              reversedStr += originalStr[i];
          }
          return reversedStr;
        } else {
          var reversedArray = resolvedArgs[0].slice(0);
          reversedArray.reverse();
          return reversedArray;
        }
    },

    _functionAbs: function(resolvedArgs) {
      return Math.abs(resolvedArgs[0]);
    },

    _functionCeil: function(resolvedArgs) {
        return Math.ceil(resolvedArgs[0]);
    },

    _functionAvg: function(resolvedArgs) {
        var sum = 0;
        var inputArray = resolvedArgs[0];
        for (var i = 0; i < inputArray.length; i++) {
            sum += inputArray[i];
        }
        return sum / inputArray.length;
    },

    _functionContains: function(resolvedArgs) {
        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
    },

    _functionFloor: function(resolvedArgs) {
        return Math.floor(resolvedArgs[0]);
    },

    _functionLength: function(resolvedArgs) {
       if (!isObject(resolvedArgs[0])) {
         return resolvedArgs[0].length;
       } else {
         // As far as I can tell, there's no way to get the length
         // of an object without O(n) iteration through the object.
         return Object.keys(resolvedArgs[0]).length;
       }
    },

    _functionMap: function(resolvedArgs) {
      var mapped = [];
      var interpreter = this._interpreter;
      var exprefNode = resolvedArgs[0];
      var elements = resolvedArgs[1];
      for (var i = 0; i < elements.length; i++) {
          mapped.push(interpreter.visit(exprefNode, elements[i]));
      }
      return mapped;
    },

    _functionMerge: function(resolvedArgs) {
      var merged = {};
      for (var i = 0; i < resolvedArgs.length; i++) {
        var current = resolvedArgs[i];
        for (var key in current) {
          merged[key] = current[key];
        }
      }
      return merged;
    },

    _functionMax: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.max.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var maxElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (maxElement.localeCompare(elements[i]) < 0) {
                  maxElement = elements[i];
              }
          }
          return maxElement;
        }
      } else {
          return null;
      }
    },

    _functionMin: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.min.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var minElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (elements[i].localeCompare(minElement) < 0) {
                  minElement = elements[i];
              }
          }
          return minElement;
        }
      } else {
        return null;
      }
    },

    _functionSum: function(resolvedArgs) {
      var sum = 0;
      var listToSum = resolvedArgs[0];
      for (var i = 0; i < listToSum.length; i++) {
        sum += listToSum[i];
      }
      return sum;
    },

    _functionType: function(resolvedArgs) {
        switch (this._getTypeName(resolvedArgs[0])) {
          case TYPE_NUMBER:
            return "number";
          case TYPE_STRING:
            return "string";
          case TYPE_ARRAY:
            return "array";
          case TYPE_OBJECT:
            return "object";
          case TYPE_BOOLEAN:
            return "boolean";
          case TYPE_EXPREF:
            return "expref";
          case TYPE_NULL:
            return "null";
        }
    },

    _functionKeys: function(resolvedArgs) {
        return Object.keys(resolvedArgs[0]);
    },

    _functionValues: function(resolvedArgs) {
        var obj = resolvedArgs[0];
        var keys = Object.keys(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    },

    _functionJoin: function(resolvedArgs) {
        var joinChar = resolvedArgs[0];
        var listJoin = resolvedArgs[1];
        return listJoin.join(joinChar);
    },

    _functionToArray: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
            return resolvedArgs[0];
        } else {
            return [resolvedArgs[0]];
        }
    },

    _functionToString: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
            return resolvedArgs[0];
        } else {
            return JSON.stringify(resolvedArgs[0]);
        }
    },

    _functionToNumber: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        var convertedValue;
        if (typeName === TYPE_NUMBER) {
            return resolvedArgs[0];
        } else if (typeName === TYPE_STRING) {
            convertedValue = +resolvedArgs[0];
            if (!isNaN(convertedValue)) {
                return convertedValue;
            }
        }
        return null;
    },

    _functionNotNull: function(resolvedArgs) {
        for (var i = 0; i < resolvedArgs.length; i++) {
            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                return resolvedArgs[i];
            }
        }
        return null;
    },

    _functionSort: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        sortedArray.sort();
        return sortedArray;
    },

    _functionSortBy: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length === 0) {
            return sortedArray;
        }
        var interpreter = this._interpreter;
        var exprefNode = resolvedArgs[1];
        var requiredType = this._getTypeName(
            interpreter.visit(exprefNode, sortedArray[0]));
        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
            throw new Error("TypeError");
        }
        var that = this;
        // In order to get a stable sort out of an unstable
        // sort algorithm, we decorate/sort/undecorate (DSU)
        // by creating a new list of [index, element] pairs.
        // In the cmp function, if the evaluated elements are
        // equal, then the index will be used as the tiebreaker.
        // After the decorated list has been sorted, it will be
        // undecorated to extract the original elements.
        var decorated = [];
        for (var i = 0; i < sortedArray.length; i++) {
          decorated.push([i, sortedArray[i]]);
        }
        decorated.sort(function(a, b) {
          var exprA = interpreter.visit(exprefNode, a[1]);
          var exprB = interpreter.visit(exprefNode, b[1]);
          if (that._getTypeName(exprA) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprA));
          } else if (that._getTypeName(exprB) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprB));
          }
          if (exprA > exprB) {
            return 1;
          } else if (exprA < exprB) {
            return -1;
          } else {
            // If they're equal compare the items by their
            // order to maintain relative order of equal keys
            // (i.e. to get a stable sort).
            return a[0] - b[0];
          }
        });
        // Undecorate: extract out the original list elements.
        for (var j = 0; j < decorated.length; j++) {
          sortedArray[j] = decorated[j][1];
        }
        return sortedArray;
    },

    _functionMaxBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var maxNumber = -Infinity;
      var maxRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current > maxNumber) {
          maxNumber = current;
          maxRecord = resolvedArray[i];
        }
      }
      return maxRecord;
    },

    _functionMinBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var minNumber = Infinity;
      var minRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current < minNumber) {
          minNumber = current;
          minRecord = resolvedArray[i];
        }
      }
      return minRecord;
    },

    createKeyFunction: function(exprefNode, allowedTypes) {
      var that = this;
      var interpreter = this._interpreter;
      var keyFunc = function(x) {
        var current = interpreter.visit(exprefNode, x);
        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
          var msg = "TypeError: expected one of " + allowedTypes +
                    ", received " + that._getTypeName(current);
          throw new Error(msg);
        }
        return current;
      };
      return keyFunc;
    }

  };

  function compile(stream) {
    var parser = new Parser();
    var ast = parser.parse(stream);
    return ast;
  }

  function tokenize(stream) {
      var lexer = new Lexer();
      return lexer.tokenize(stream);
  }

  function search(data, expression) {
      var parser = new Parser();
      // This needs to be improved.  Both the interpreter and runtime depend on
      // each other.  The runtime needs the interpreter to support exprefs.
      // There's likely a clean way to avoid the cyclic dependency.
      var runtime = new Runtime();
      var interpreter = new TreeInterpreter(runtime);
      runtime._interpreter = interpreter;
      var node = parser.parse(expression);
      return interpreter.search(node, data);
  }

  exports.tokenize = tokenize;
  exports.compile = compile;
  exports.search = search;
  exports.strictDeepEqual = strictDeepEqual;
})( false ? this.jmespath = {} : exports);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var dataMemory = {};
/** @class */
var MemoryStorage = /** @class */function () {
    function MemoryStorage() {}
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    MemoryStorage.setItem = function (key, value) {
        dataMemory[key] = value;
        return dataMemory[key];
    };
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    MemoryStorage.getItem = function (key) {
        return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
    };
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    MemoryStorage.removeItem = function (key) {
        return delete dataMemory[key];
    };
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    MemoryStorage.clear = function () {
        dataMemory = {};
        return dataMemory;
    };
    return MemoryStorage;
}();
exports.MemoryStorage = MemoryStorage;
var StorageHelper = /** @class */function () {
    /**
     * This is used to get a storage object
     * @returns {object} the storage
     */
    function StorageHelper() {
        try {
            this.storageWindow = window.localStorage;
            this.storageWindow.setItem('aws.amplify.test-ls', 1);
            this.storageWindow.removeItem('aws.amplify.test-ls');
        } catch (exception) {
            this.storageWindow = MemoryStorage;
        }
    }
    /**
     * This is used to return the storage
     * @returns {object} the storage
     */
    StorageHelper.prototype.getStorage = function () {
        return this.storageWindow;
    };
    return StorageHelper;
}();
exports.default = StorageHelper;
//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(141));
var CacheList_1 = __webpack_require__(142);
exports.CacheList = CacheList_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var proto = core_1.JS.browserOrNode().isBrowser && window['Element'] ? window['Element'].prototype : null;
var nativeMatches = proto ? proto.matches ||
    proto.matchesSelector ||
    proto.webkitMatchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector : null;
/**
 * Tests if a DOM elements matches any of the test DOM elements or selectors.
 * @param {Element} element The DOM element to test.
 * @param {Element|string|Array<Element|string>} test A DOM element, a CSS
 *     selector, or an array of DOM elements or CSS selectors to match against.
 * @return {boolean} True of any part of the test matches.
 */
function matches(element, test) {
    // Validate input.
    if (element && element.nodeType === 1 && test) {
        // if test is a string or DOM element test it.
        if (typeof test === 'string' || test.nodeType === 1) {
            return element === test ||
                matchesSelector(element, /** @type {string} */ (test));
        }
        else if ('length' in test) {
            // if it has a length property iterate over the items
            // and return true if any match.
            for (var i = 0, item = void 0; item = test[i]; i++) {
                if (element === item || matchesSelector(element, item))
                    return true;
            }
        }
    }
    // Still here? Return false
    return false;
}
exports.default = matches;
/**
 * Tests whether a DOM element matches a selector. This polyfills the native
 * Element.prototype.matches method across browsers.
 * @param {!Element} element The DOM element to test.
 * @param {string} selector The CSS selector to test element against.
 * @return {boolean} True if the selector matches.
 */
function matchesSelector(element, selector) {
    if (typeof selector !== 'string')
        return false;
    if (nativeMatches)
        return nativeMatches.call(element, selector);
    var nodes = element.parentNode.querySelectorAll(selector);
    for (var i = 0, node = void 0; node = nodes[i]; i++) {
        if (node === element)
            return true;
    }
    return false;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var util = __webpack_require__(1);
var QueryParamSerializer = __webpack_require__(54);
var Shape = __webpack_require__(8);

function buildRequest(req) {
  var operation = req.service.api.operations[req.operation];
  var httpRequest = req.httpRequest;
  httpRequest.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=utf-8';
  httpRequest.params = {
    Version: req.service.api.apiVersion,
    Action: operation.name
  };

  // convert the request parameters into a list of query params,
  // e.g. Deeply.NestedParam.0.Name=value
  var builder = new QueryParamSerializer();
  builder.serialize(req.params, operation.input, function(name, value) {
    httpRequest.params[name] = value;
  });
  httpRequest.body = util.queryParamsToString(httpRequest.params);
}

function extractError(resp) {
  var data, body = resp.httpResponse.body.toString();
  if (body.match('<UnknownOperationException')) {
    data = {
      Code: 'UnknownOperation',
      Message: 'Unknown operation ' + resp.request.operation
    };
  } else {
    try {
      data = new AWS.XML.Parser().parse(body);
    } catch (e) {
      data = {
        Code: resp.httpResponse.statusCode,
        Message: resp.httpResponse.statusMessage
      };
    }
  }

  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var shape = operation.output || {};
  var origRules = shape;

  if (origRules.resultWrapper) {
    var tmp = Shape.create({type: 'structure'});
    tmp.members[origRules.resultWrapper] = shape;
    tmp.memberNames = [origRules.resultWrapper];
    util.property(shape, 'name', shape.resultWrapper);
    shape = tmp;
  }

  var parser = new AWS.XML.Parser();

  // TODO: Refactor XML Parser to parse RequestId from response.
  if (shape && shape.members && !shape.members._XAMZRequestId) {
    var requestIdShape = Shape.create(
      { type: 'string' },
      { api: { protocol: 'query' } },
      'requestId'
    );
    shape.members._XAMZRequestId = requestIdShape;
  }

  var data = parser.parse(resp.httpResponse.body.toString(), shape);
  resp.requestId = data._XAMZRequestId || data.requestId;

  if (data._XAMZRequestId) delete data._XAMZRequestId;

  if (origRules.resultWrapper) {
    if (data[origRules.resultWrapper]) {
      util.update(data, data[origRules.resultWrapper]);
      delete data[origRules.resultWrapper];
    }
  }

  resp.data = data;
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var memoizedProperty = __webpack_require__(1).memoizedProperty;

function memoize(name, value, fn, nameTr) {
  memoizedProperty(this, nameTr(name), function() {
    return fn(name, value);
  });
}

function Collection(iterable, options, fn, nameTr) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
      memoize.call(self, id, iterable[id], fn, nameTr);
    }
  }
}

/**
 * @api private
 */
module.exports = Collection;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var Rest = __webpack_require__(11);
var Json = __webpack_require__(15);
var JsonBuilder = __webpack_require__(16);
var JsonParser = __webpack_require__(17);

function populateBody(req) {
  var builder = new JsonBuilder();
  var input = req.service.api.operations[req.operation].input;

  if (input.payload) {
    var params = {};
    var payloadShape = input.members[input.payload];
    params = req.params[input.payload];
    if (params === undefined) return;

    if (payloadShape.type === 'structure') {
      req.httpRequest.body = builder.build(params, payloadShape);
      applyContentTypeHeader(req);
    } else { // non-JSON payload
      req.httpRequest.body = params;
      if (payloadShape.type === 'binary' || payloadShape.isStreaming) {
        applyContentTypeHeader(req, true);
      }
    }
  } else {
    req.httpRequest.body = builder.build(req.params, input);
    applyContentTypeHeader(req);
  }
}

function applyContentTypeHeader(req, isBinary) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;

  if (!req.httpRequest.headers['Content-Type']) {
    var type = isBinary ? 'binary/octet-stream' : 'application/json';
    req.httpRequest.headers['Content-Type'] = type;
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on GET/HEAD/DELETE
  if (['GET', 'HEAD', 'DELETE'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Json.extractError(resp);
}

function extractData(resp) {
  Rest.extractData(resp);

  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var rules = req.service.api.operations[req.operation].output || {};
  var parser;
  var hasEventOutput = operation.hasEventOutput;

  if (rules.payload) {
    var payloadMember = rules.members[rules.payload];
    var body = resp.httpResponse.body;
    if (payloadMember.isEventStream) {
      parser = new JsonParser();
      resp.data[payload] = util.createEventStream(
        AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : body,
        parser,
        payloadMember
      );
    } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
      var parser = new JsonParser();
      resp.data[rules.payload] = parser.parse(body, payloadMember);
    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
      resp.data[rules.payload] = body;
    } else {
      resp.data[rules.payload] = payloadMember.toType(body);
    }
  } else {
    var data = resp.data;
    Json.extractData(resp);
    resp.data = util.merge(data, resp.data);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var util = __webpack_require__(1);
var Rest = __webpack_require__(11);

function populateBody(req) {
  var input = req.service.api.operations[req.operation].input;
  var builder = new AWS.XML.Builder();
  var params = req.params;

  var payload = input.payload;
  if (payload) {
    var payloadMember = input.members[payload];
    params = params[payload];
    if (params === undefined) return;

    if (payloadMember.type === 'structure') {
      var rootElement = payloadMember.name;
      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
    } else { // non-xml payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.toXML(params, input, input.name ||
      input.shape || util.string.upperFirst(req.operation) + 'Request');
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on GET/HEAD
  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Rest.extractError(resp);

  var data;
  try {
    data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
  } catch (e) {
    data = {
      Code: resp.httpResponse.statusCode,
      Message: resp.httpResponse.statusMessage
    };
  }

  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  Rest.extractData(resp);

  var parser;
  var req = resp.request;
  var body = resp.httpResponse.body;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var hasEventOutput = operation.hasEventOutput;

  var payload = output.payload;
  if (payload) {
    var payloadMember = output.members[payload];
    if (payloadMember.isEventStream) {
      parser = new AWS.XML.Parser();
      resp.data[payload] = util.createEventStream(
        AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : resp.httpResponse.body,
        parser,
        payloadMember
      );
    } else if (payloadMember.type === 'structure') {
      parser = new AWS.XML.Parser();
      resp.data[payload] = parser.parse(body.toString(), payloadMember);
    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
      resp.data[payload] = body;
    } else {
      resp.data[payload] = payloadMember.toType(body);
    }
  } else if (body.length > 0) {
    parser = new AWS.XML.Parser();
    var data = parser.parse(body.toString(), output);
    util.update(resp.data, data);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Collection = __webpack_require__(24);
var Operation = __webpack_require__(28);
var Shape = __webpack_require__(8);
var Paginator = __webpack_require__(29);
var ResourceWaiter = __webpack_require__(30);

var util = __webpack_require__(1);
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Api(api, options) {
  api = api || {};
  options = options || {};
  options.api = this;

  api.metadata = api.metadata || {};

  property(this, 'isApi', true, false);
  property(this, 'apiVersion', api.metadata.apiVersion);
  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
  property(this, 'signingName', api.metadata.signingName);
  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
  property(this, 'signatureVersion', api.metadata.signatureVersion);
  property(this, 'jsonVersion', api.metadata.jsonVersion);
  property(this, 'targetPrefix', api.metadata.targetPrefix);
  property(this, 'protocol', api.metadata.protocol);
  property(this, 'timestampFormat', api.metadata.timestampFormat);
  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
  property(this, 'fullName', api.metadata.serviceFullName);
  property(this, 'serviceId', api.metadata.serviceId);

  memoizedProperty(this, 'className', function() {
    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
    if (!name) return null;

    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
    if (name === 'ElasticLoadBalancing') name = 'ELB';
    return name;
  });

  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
    return new Operation(name, operation, options);
  }, util.string.lowerFirst));

  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
    return Shape.create(shape, options);
  }));

  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
    return new Paginator(name, paginator, options);
  }));

  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
    return new ResourceWaiter(name, waiter, options);
  }, util.string.lowerFirst));

  if (options.documentation) {
    property(this, 'documentation', api.documentation);
    property(this, 'documentationUrl', api.documentationUrl);
  }
}

/**
 * @api private
 */
module.exports = Api;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Shape = __webpack_require__(8);

var util = __webpack_require__(1);
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Operation(name, operation, options) {
  var self = this;
  options = options || {};

  property(this, 'name', operation.name || name);
  property(this, 'api', options.api, false);

  operation.http = operation.http || {};
  property(this, 'httpMethod', operation.http.method || 'POST');
  property(this, 'httpPath', operation.http.requestUri || '/');
  property(this, 'authtype', operation.authtype || '');

  memoizedProperty(this, 'input', function() {
    if (!operation.input) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.input, options);
  });

  memoizedProperty(this, 'output', function() {
    if (!operation.output) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.output, options);
  });

  memoizedProperty(this, 'errors', function() {
    var list = [];
    if (!operation.errors) return null;

    for (var i = 0; i < operation.errors.length; i++) {
      list.push(Shape.create(operation.errors[i], options));
    }

    return list;
  });

  memoizedProperty(this, 'paginator', function() {
    return options.api.paginators[name];
  });

  if (options.documentation) {
    property(this, 'documentation', operation.documentation);
    property(this, 'documentationUrl', operation.documentationUrl);
  }

  // idempotentMembers only tracks top-level input shapes
  memoizedProperty(this, 'idempotentMembers', function() {
    var idempotentMembers = [];
    var input = self.input;
    var members = input.members;
    if (!input.members) {
      return idempotentMembers;
    }
    for (var name in members) {
      if (!members.hasOwnProperty(name)) {
        continue;
      }
      if (members[name].isIdempotent === true) {
        idempotentMembers.push(name);
      }
    }
    return idempotentMembers;
  });

  memoizedProperty(this, 'hasEventOutput', function() {
    var output = self.output;
    return hasEventStream(output);
  });
}

function hasEventStream(topLevelShape) {
  var members = topLevelShape.members;
  var payload = topLevelShape.payload;

  if (!topLevelShape.members) {
    return false;
  }

  if (payload) {
    var payloadMember = members[payload];
    return payloadMember.isEventStream;
  }

  // check if any member is an event stream
  for (var name in members) {
    if (!members.hasOwnProperty(name)) {
      if (members[name].isEventStream === true) {
        return true;
      }
    }
  }
  return false;
}

/**
 * @api private
 */
module.exports = Operation;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var property = __webpack_require__(1).property;

function Paginator(name, paginator) {
  property(this, 'inputToken', paginator.input_token);
  property(this, 'limitKey', paginator.limit_key);
  property(this, 'moreResults', paginator.more_results);
  property(this, 'outputToken', paginator.output_token);
  property(this, 'resultKey', paginator.result_key);
}

/**
 * @api private
 */
module.exports = Paginator;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var property = util.property;

function ResourceWaiter(name, waiter, options) {
  options = options || {};
  property(this, 'name', name);
  property(this, 'api', options.api, false);

  if (waiter.operation) {
    property(this, 'operation', util.string.lowerFirst(waiter.operation));
  }

  var self = this;
  var keys = [
    'type',
    'description',
    'delay',
    'maxAttempts',
    'acceptors'
  ];

  keys.forEach(function(key) {
    var value = waiter[key];
    if (value) {
      property(self, key, value);
    }
  });
}

/**
 * @api private
 */
module.exports = ResourceWaiter;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * @api private
 * @!method on(eventName, callback)
 *   Registers an event listener callback for the event given by `eventName`.
 *   Parameters passed to the callback function depend on the individual event
 *   being triggered. See the event documentation for those parameters.
 *
 *   @param eventName [String] the event name to register the listener for
 *   @param callback [Function] the listener callback function
 *   @param toHead [Boolean] attach the listener callback to the head of callback array if set to true.
 *     Default to be false.
 *   @return [AWS.SequentialExecutor] the same object for chaining
 */
AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this._events = {};
  },

  /**
   * @api private
   */
  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener, toHead) {
    if (this._events[eventName]) {
      toHead ?
        this._events[eventName].unshift(listener) :
        this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },

  /**
   * @api private
   */
  onAsync: function onAsync(eventName, listener, toHead) {
    listener._isAsync = true;
    return this.on(eventName, listener, toHead);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },

  /**
   * @api private
   */
  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = function() { };
    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },

  /**
   * @api private
   */
  callListeners: function callListeners(listeners, args, doneCallback, prevError) {
    var self = this;
    var error = prevError || null;

    function callNextListener(err) {
      if (err) {
        error = AWS.util.error(error || new Error(), err);
        if (self._haltHandlersOnError) {
          return doneCallback.call(self, error);
        }
      }
      self.callListeners(listeners, args, doneCallback, error);
    }

    while (listeners.length > 0) {
      var listener = listeners.shift();
      if (listener._isAsync) { // asynchronous listener
        listener.apply(self, args.concat([callNextListener]));
        return; // stop here, callNextListener will continue
      } else { // synchronous listener
        try {
          listener.apply(self, args);
        } catch (err) {
          error = AWS.util.error(error || new Error(), err);
        }
        if (error && self._haltHandlersOnError) {
          doneCallback.call(self, error);
          return;
        }
      }
    }
    doneCallback.call(self, error);
  },

  /**
   * Adds or copies a set of listeners from another list of
   * listeners or SequentialExecutor object.
   *
   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
   *   a list of events and callbacks, or an event emitter object
   *   containing listeners to add to this emitter object.
   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
   * @example Adding listeners from a map of listeners
   *   emitter.addListeners({
   *     event1: [function() { ... }, function() { ... }],
   *     event2: [function() { ... }]
   *   });
   *   emitter.emit('event1'); // emitter has event1
   *   emitter.emit('event2'); // emitter has event2
   * @example Adding listeners from another emitter object
   *   var emitter1 = new AWS.SequentialExecutor();
   *   emitter1.on('event1', function() { ... });
   *   emitter1.on('event2', function() { ... });
   *   var emitter2 = new AWS.SequentialExecutor();
   *   emitter2.addListeners(emitter1);
   *   emitter2.emit('event1'); // emitter2 has event1
   *   emitter2.emit('event2'); // emitter2 has event2
   */
  addListeners: function addListeners(listeners) {
    var self = this;

    // extract listeners if parameter is an SequentialExecutor object
    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },

  /**
   * Registers an event with {on} and saves the callback handle function
   * as a property on the emitter object using a given `name`.
   *
   * @param name [String] the property name to set on this object containing
   *   the callback function handle so that the listener can be removed in
   *   the future.
   * @param (see on)
   * @return (see on)
   * @example Adding a named listener DATA_CALLBACK
   *   var listener = function() { doSomething(); };
   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
   *
   *   // the following prints: true
   *   console.log(emitter.DATA_CALLBACK == listener);
   */
  addNamedListener: function addNamedListener(name, eventName, callback, toHead) {
    this[name] = callback;
    this.addListener(eventName, callback, toHead);
    return this;
  },

  /**
   * @api private
   */
  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
    callback._isAsync = true;
    return this.addNamedListener(name, eventName, callback);
  },

  /**
   * Helper method to add a set of named listeners using
   * {addNamedListener}. The callback contains a parameter
   * with a handle to the `addNamedListener` method.
   *
   * @callback callback function(add)
   *   The callback function is called immediately in order to provide
   *   the `add` function to the block. This simplifies the addition of
   *   a large group of named listeners.
   *   @param add [Function] the {addNamedListener} function to call
   *     when registering listeners.
   * @example Adding a set of named listeners
   *   emitter.addNamedListeners(function(add) {
   *     add('DATA_CALLBACK', 'data', function() { ... });
   *     add('OTHER', 'otherEvent', function() { ... });
   *     add('LAST', 'lastEvent', function() { ... });
   *   });
   *
   *   // these properties are now set:
   *   emitter.DATA_CALLBACK;
   *   emitter.OTHER;
   *   emitter.LAST;
   */
  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  }
});

/**
 * {on} is the prefered method.
 * @api private
 */
AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

/**
 * @api private
 */
module.exports = AWS.SequentialExecutor;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * Represents your AWS security credentials, specifically the
 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
 * Creating a `Credentials` object allows you to pass around your
 * security information to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Service} classes both accept simple
 * options hashes with the three keys. These structures will be converted
 * into Credentials objects automatically.
 *
 * ## Expiring and Refreshing Credentials
 *
 * Occasionally credentials can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the credentials from the storage location if the Credentials
 * class implements the {refresh} method.
 *
 * If you are implementing a credential storage location, you
 * will want to create a subclass of the `Credentials` class and
 * override the {refresh} method. This method allows credentials to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the credential attributes
 * on the object.
 *
 * @!attribute expired
 *   @return [Boolean] whether the credentials have been expired and
 *     require a refresh. Used in conjunction with {expireTime}.
 * @!attribute expireTime
 *   @return [Date] a time when credentials should be considered expired. Used
 *     in conjunction with {expired}.
 * @!attribute accessKeyId
 *   @return [String] the AWS access key ID
 * @!attribute secretAccessKey
 *   @return [String] the AWS secret access key
 * @!attribute sessionToken
 *   @return [String] an optional AWS session token
 */
AWS.Credentials = AWS.util.inherit({
  /**
   * A credentials object can be created using positional arguments or an options
   * hash.
   *
   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
   *   Creates a Credentials object with a given set of credential information
   *   as positional arguments.
   *   @param accessKeyId [String] the AWS access key ID
   *   @param secretAccessKey [String] the AWS secret access key
   *   @param sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
   * @overload AWS.Credentials(options)
   *   Creates a Credentials object with a given set of credential information
   *   as an options hash.
   *   @option options accessKeyId [String] the AWS access key ID
   *   @option options secretAccessKey [String] the AWS secret access key
   *   @option options sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials({
   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
   *     });
   */
  constructor: function Credentials() {
    // hide secretAccessKey from being displayed with util.inspect
    AWS.util.hideProperties(this, ['secretAccessKey']);

    this.expired = false;
    this.expireTime = null;
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },

  /**
   * @return [Integer] the number of seconds before {expireTime} during which
   *   the credentials will be considered expired.
   */
  expiryWindow: 15,

  /**
   * @return [Boolean] whether the credentials object should call {refresh}
   * @note Subclasses should override this method to provide custom refresh
   *   logic.
   */
  needsRefresh: function needsRefresh() {
    var currentTime = AWS.util.date.getDate().getTime();
    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

    if (this.expireTime && adjustedTime > this.expireTime) {
      return true;
    } else {
      return this.expired || !this.accessKeyId || !this.secretAccessKey;
    }
  },

  /**
   * Gets the existing credentials, refreshing them if they are not yet loaded
   * or have expired. Users should call this method before using {refresh},
   * as this will not attempt to reload credentials when they are already
   * loaded into the object.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means either credentials
   *   do not need to be refreshed or refreshed credentials information has
   *   been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
   *   and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   */
  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        if (callback) callback(err);
      });
    } else if (callback) {
      callback();
    }
  },

  /**
   * @!method  getPromise()
   *   Returns a 'thenable' promise.
   *   Gets the existing credentials, refreshing them if they are not yet loaded
   *   or have expired. Users should call this method before using {refresh},
   *   as this will not attempt to reload credentials when they are already
   *   loaded into the object.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means either credentials do not need to be refreshed or refreshed
   *     credentials information has been loaded into the object (as the
   *     `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `get` call.
   *   @example Calling the `getPromise` method.
   *     var promise = credProvider.getPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * @!method  refreshPromise()
   *   Returns a 'thenable' promise.
   *   Refreshes the credentials. Users should call {get} before attempting
   *   to forcibly refresh credentials.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means refreshed credentials information has been loaded into the object
   *     (as the `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `refresh` call.
   *   @example Calling the `refreshPromise` method.
   *     var promise = credProvider.refreshPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * Refreshes the credentials. Users should call {get} before attempting
   * to forcibly refresh credentials.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means refreshed
   *   credentials information has been loaded into the object (as the
   *   `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @note Subclasses should override this class to reset the
   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
   *   on the credentials object and then call the callback with
   *   any error information.
   * @see get
   */
  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  }
});

/**
 * @api private
 */
AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
  this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
};

/**
 * @api private
 */
AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.getPromise;
  delete this.prototype.refreshPromise;
};

AWS.util.addPromises(AWS.Credentials);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * Creates a credential provider chain that searches for AWS credentials
 * in a list of credential providers specified by the {providers} property.
 *
 * By default, the chain will use the {defaultProviders} to resolve credentials.
 * These providers will look in the environment using the
 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
 *
 * ## Setting Providers
 *
 * Each provider in the {providers} list should be a function that returns
 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
 * form allows for delayed execution of the credential construction.
 *
 * ## Resolving Credentials from a Chain
 *
 * Call {resolve} to return the first valid credential object that can be
 * loaded by the provider chain.
 *
 * For example, to resolve a chain with a custom provider that checks a file
 * on disk after the set of {defaultProviders}:
 *
 * ```javascript
 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
 * var chain = new AWS.CredentialProviderChain();
 * chain.providers.push(diskProvider);
 * chain.resolve();
 * ```
 *
 * The above code will return the `diskProvider` object if the
 * file contains credentials and the `defaultProviders` do not contain
 * any credential settings.
 *
 * @!attribute providers
 *   @return [Array<AWS.Credentials, Function>]
 *     a list of credentials objects or functions that return credentials
 *     objects. If the provider is a function, the function will be
 *     executed lazily when the provider needs to be checked for valid
 *     credentials. By default, this object will be set to the
 *     {defaultProviders}.
 *   @see defaultProviders
 */
AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {

  /**
   * Creates a new CredentialProviderChain with a default set of providers
   * specified by {defaultProviders}.
   */
  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
  },

  /**
   * @!method  resolvePromise()
   *   Returns a 'thenable' promise.
   *   Resolves the provider chain by searching for the first set of
   *   credentials in {providers}.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(credentials)
   *     Called if the promise is fulfilled and the provider resolves the chain
   *     to a credentials object
   *     @param credentials [AWS.Credentials] the credentials object resolved
   *       by the provider chain.
   *   @callback rejectedCallback function(error)
   *     Called if the promise is rejected.
   *     @param err [Error] the error object returned if no credentials are found.
   *   @return [Promise] A promise that represents the state of the `resolve` method call.
   *   @example Calling the `resolvePromise` method.
   *     var promise = chain.resolvePromise();
   *     promise.then(function(credentials) { ... }, function(err) { ... });
   */

  /**
   * Resolves the provider chain by searching for the first set of
   * credentials in {providers}.
   *
   * @callback callback function(err, credentials)
   *   Called when the provider resolves the chain to a credentials object
   *   or null if no credentials can be found.
   *
   *   @param err [Error] the error object returned if no credentials are
   *     found.
   *   @param credentials [AWS.Credentials] the credentials object resolved
   *     by the provider chain.
   * @return [AWS.CredentialProviderChain] the provider, for chaining.
   */
  resolve: function resolve(callback) {
    if (this.providers.length === 0) {
      callback(new Error('No providers'));
      return this;
    }

    var index = 0;
    var providers = this.providers.slice(0);

    function resolveNext(err, creds) {
      if ((!err && creds) || index === providers.length) {
        callback(err, creds);
        return;
      }

      var provider = providers[index++];
      if (typeof provider === 'function') {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.get) {
        creds.get(function(getErr) {
          resolveNext(getErr, getErr ? null : creds);
        });
      } else {
        resolveNext(null, creds);
      }
    }

    resolveNext();
    return this;
  }
});

/**
 * The default set of providers used by a vanilla CredentialProviderChain.
 *
 * In the browser:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = []
 * ```
 *
 * In Node.js:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = [
 *   function () { return new AWS.EnvironmentCredentials('AWS'); },
 *   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
 *   function () { return new AWS.SharedIniFileCredentials(); },
 *   function () {
 *     // if AWS_CONTAINER_CREDENTIALS_RELATIVE_URI is set
 *       return new AWS.ECSCredentials();
 *     // else
 *       return new AWS.EC2MetadataCredentials();
 *   }
 * ]
 * ```
 */
AWS.CredentialProviderChain.defaultProviders = [];

/**
 * @api private
 */
AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
};

/**
 * @api private
 */
AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.resolvePromise;
};

AWS.util.addPromises(AWS.CredentialProviderChain);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * The endpoint that a service will talk to, for example,
 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the `endpoint` option key:
 *
 * ```javascript
 * var ep = new AWS.Endpoint('awsproxy.example.com');
 * var s3 = new AWS.S3({endpoint: ep});
 * s3.service.endpoint.hostname == 'awsproxy.example.com'
 * ```
 *
 * Note that if you do not specify a protocol, the protocol will
 * be selected based on your current {AWS.config} configuration.
 *
 * @!attribute protocol
 *   @return [String] the protocol (http or https) of the endpoint
 *     URL
 * @!attribute hostname
 *   @return [String] the host portion of the endpoint, e.g.,
 *     example.com
 * @!attribute host
 *   @return [String] the host portion of the endpoint including
 *     the port, e.g., example.com:80
 * @!attribute port
 *   @return [Integer] the port of the endpoint
 * @!attribute href
 *   @return [String] the full URL of the endpoint
 */
AWS.Endpoint = inherit({

  /**
   * @overload Endpoint(endpoint)
   *   Constructs a new endpoint given an endpoint URL. If the
   *   URL omits a protocol (http or https), the default protocol
   *   set in the global {AWS.config} will be used.
   *   @param endpoint [String] the URL to construct an endpoint from
   */
  constructor: function Endpoint(endpoint, config) {
    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

/**
 * The low level HTTP request object, encapsulating all HTTP header
 * and body data sent by a service request.
 *
 * @!attribute method
 *   @return [String] the HTTP method of the request
 * @!attribute path
 *   @return [String] the path portion of the URI, e.g.,
 *     "/list/?start=5&num=10"
 * @!attribute headers
 *   @return [map<String,String>]
 *     a map of header keys and their respective values
 * @!attribute body
 *   @return [String] the request body payload
 * @!attribute endpoint
 *   @return [AWS.Endpoint] the endpoint for the request
 * @!attribute region
 *   @api private
 *   @return [String] the region, for signing purposes only.
 */
AWS.HttpRequest = inherit({

  /**
   * @api private
   */
  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
    this._userAgent = '';
    this.setUserAgent();
  },

  /**
   * @api private
   */
  setUserAgent: function setUserAgent() {
    this._userAgent = this.headers[this.getUserAgentHeaderName()] = AWS.util.userAgent();
  },

  getUserAgentHeaderName: function getUserAgentHeaderName() {
    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
    return prefix + 'User-Agent';
  },

  /**
   * @api private
   */
  appendToUserAgent: function appendToUserAgent(agentPartial) {
    if (typeof agentPartial === 'string' && agentPartial) {
      this._userAgent += ' ' + agentPartial;
    }
    this.headers[this.getUserAgentHeaderName()] = this._userAgent;
  },

  /**
   * @api private
   */
  getUserAgent: function getUserAgent() {
    return this._userAgent;
  },

  /**
   * @return [String] the part of the {path} excluding the
   *   query string
   */
  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  /**
   * @return [String] the query string portion of the {path}
   */
  search: function search() {
    var query = this.path.split('?', 2)[1];
    if (query) {
      query = AWS.util.queryStringParse(query);
      return AWS.util.queryParamsToString(query);
    }
    return '';
  }

});

/**
 * The low level HTTP response object, encapsulating all HTTP header
 * and body data returned from the request.
 *
 * @!attribute statusCode
 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
 * @!attribute headers
 *   @return [map<String,String>]
 *      a map of response header keys and their respective values
 * @!attribute body
 *   @return [String] the response body payload
 * @!attribute [r] streaming
 *   @return [Boolean] whether this response is being streamed at a low-level.
 *     Defaults to `false` (buffered reads). Do not modify this manually, use
 *     {createUnbufferedStream} to convert the stream to unbuffered mode
 *     instead.
 */
AWS.HttpResponse = inherit({

  /**
   * @api private
   */
  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
    this.streaming = false;
    this.stream = null;
  },

  /**
   * Disables buffering on the HTTP response and returns the stream for reading.
   * @return [Stream, XMLHttpRequest, null] the underlying stream object.
   *   Use this object to directly read data off of the stream.
   * @note This object is only available after the {AWS.Request~httpHeaders}
   *   event has fired. This method must be called prior to
   *   {AWS.Request~httpData}.
   * @example Taking control of a stream
   *   request.on('httpHeaders', function(statusCode, headers) {
   *     if (statusCode < 300) {
   *       if (headers.etag === 'xyz') {
   *         // pipe the stream, disabling buffering
   *         var stream = this.response.httpResponse.createUnbufferedStream();
   *         stream.pipe(process.stdout);
   *       } else { // abort this request and set a better error message
   *         this.abort();
   *         this.response.error = new Error('Invalid ETag');
   *       }
   *     }
   *   }).send(console.log);
   */
  createUnbufferedStream: function createUnbufferedStream() {
    this.streaming = true;
    return this.stream;
  }
});


AWS.HttpClient = inherit({});

/**
 * @api private
 */
AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V3;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(93);
var util = __webpack_require__(95);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(39);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(96);
exports.encode = exports.stringify = __webpack_require__(97);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(0).util.Buffer;
/**
 * Converts data into Buffer.
 * @param {ArrayBuffer|string|number[]|Buffer} data Data to convert to a Buffer
 * @param {string} [encoding] String encoding
 * @returns {Buffer}
 */
function toBuffer(data, encoding) {
    return (typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from) ?
        Buffer.from(data, encoding) : new Buffer(data, encoding);
}

/**
 * @api private
 */
module.exports = {
    toBuffer: toBuffer
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var GoogleOAuth_1 = __webpack_require__(128);
var FacebookOAuth_1 = __webpack_require__(129);
var GoogleOAuth = new GoogleOAuth_1.default();
exports.GoogleOAuth = GoogleOAuth;
var FacebookOAuth = new FacebookOAuth_1.default();
exports.FacebookOAuth = FacebookOAuth;
//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var packageInfo = __webpack_require__(134);
var Platform = {
    'userAgent': "aws-amplify/" + packageInfo.version + " js",
    'product': '',
    'navigator': null,
    'isReactNative': false
};
if (typeof navigator !== 'undefined' && navigator.product) {
    Platform.product = navigator.product || '';
    Platform.navigator = navigator || null;
    switch (navigator.product) {
        case 'ReactNative':
            Platform.userAgent = "aws-amplify/" + packageInfo.version + " react-native";
            Platform.isReactNative = true;
            break;
        default:
            Platform.userAgent = "aws-amplify/" + packageInfo.version + " js";
            Platform.isReactNative = false;
            break;
    }
}
exports.default = Platform;
//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var core_1 = __webpack_require__(2);
var MobileAnalytics = __webpack_require__(135);
var Pinpoint = __webpack_require__(137);
var cache_1 = __webpack_require__(139);
var uuid_1 = __webpack_require__(144);
var AMPLIFY_SYMBOL = ((typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') ?
    Symbol.for('amplify_default') : '@@amplify_default');
var dispatchAnalyticsEvent = function (event, data) {
    core_1.Hub.dispatch('analytics', { event: event, data: data }, 'Analytics', AMPLIFY_SYMBOL);
};
var logger = new core_1.ConsoleLogger('AWSPinpointProvider');
var NON_RETRYABLE_EXCEPTIONS = ['BadRequestException', 'SerializationException', 'ValidationException'];
// events buffer
var BUFFER_SIZE = 1000;
var FLUSH_SIZE = 100;
var FLUSH_INTERVAL = 5 * 1000; // 5s
var RESEND_LIMIT = 5;
// params: { event: {name: , .... }, timeStamp, config, resendLimits }
var AWSPinpointProvider = /** @class */ (function () {
    function AWSPinpointProvider(config) {
        this._buffer = [];
        this._config = config ? config : {};
        this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE;
        this._config.flushSize = this._config.flushSize || FLUSH_SIZE;
        this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL;
        this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT;
        this._clientInfo = core_1.ClientDevice.clientInfo();
    }
    AWSPinpointProvider.prototype._setupTimer = function () {
        var _this = this;
        if (this._timer) {
            clearInterval(this._timer);
        }
        var _a = this._config, flushSize = _a.flushSize, flushInterval = _a.flushInterval;
        var that = this;
        this._timer = setInterval(function () {
            var size = _this._buffer.length < flushSize ? _this._buffer.length : flushSize;
            for (var i = 0; i < size; i += 1) {
                var params = _this._buffer.shift();
                that._sendFromBuffer(params);
            }
        }, flushInterval);
    };
    /**
     * @private
     * @param params - params for the event recording
     * Put events into buffer
     */
    AWSPinpointProvider.prototype._putToBuffer = function (params) {
        var bufferSize = this._config.bufferSize;
        if (this._buffer.length < bufferSize) {
            this._buffer.push(params);
            return Promise.resolve(true);
        }
        else {
            logger.debug('exceed analytics events buffer size');
            return Promise.reject(false);
        }
    };
    AWSPinpointProvider.prototype._sendFromBuffer = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, config, appId, region, resendLimit, success, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event = params.event, config = params.config;
                        appId = config.appId, region = config.region, resendLimit = config.resendLimit;
                        success = true;
                        _a = event.name;
                        switch (_a) {
                            case '_session.start': return [3 /*break*/, 1];
                            case '_session.stop': return [3 /*break*/, 3];
                            case '_update_endpoint': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this._startSession(params)];
                    case 2:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, this._stopSession(params)];
                    case 4:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this._updateEndpoint(params)];
                    case 6:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this._recordCustomEvent(params)];
                    case 8:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        if (!success) {
                            params.resendLimits = typeof params.resendLimits === 'number' ?
                                params.resendLimits : resendLimit;
                            if (params.resendLimits > 0) {
                                logger.debug("resending event " + params.eventName + " with " + params.resendLimits + " retry times left");
                                params.resendLimits -= 1;
                                this._putToBuffer(params);
                            }
                            else {
                                logger.debug("retry times used up for event " + params.eventName);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * get the category of the plugin
     */
    AWSPinpointProvider.prototype.getCategory = function () {
        return AWSPinpointProvider.category;
    };
    /**
     * get provider name of the plugin
     */
    AWSPinpointProvider.prototype.getProviderName = function () {
        return AWSPinpointProvider.providerName;
    };
    /**
     * configure the plugin
     * @param {Object} config - configuration
     */
    AWSPinpointProvider.prototype.configure = function (config) {
        var _this = this;
        logger.debug('configure Analytics', config);
        var conf = config ? config : {};
        this._config = Object.assign({}, this._config, conf);
        if (this._config['appId'] && !this._config['disabled']) {
            if (!this._config['endpointId']) {
                var cacheKey = this.getProviderName() + '_' + this._config['appId'];
                this._getEndpointId(cacheKey).then(function (endpointId) {
                    logger.debug('setting endpoint id from the cache', endpointId);
                    _this._config['endpointId'] = endpointId;
                    dispatchAnalyticsEvent('pinpointProvider_configured', null);
                }).catch(function (e) {
                    logger.debug('Failed to generate endpointId', e);
                });
            }
            else {
                dispatchAnalyticsEvent('pinpointProvider_configured', null);
            }
            this._setupTimer();
        }
        else {
            if (this._timer) {
                clearInterval(this._timer);
            }
        }
        return this._config;
    };
    /**
     * record an event
     * @param {Object} params - the params of an event
     */
    AWSPinpointProvider.prototype.record = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, timestamp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials || !this._config['appId'] || !this._config['region']) {
                            logger.debug('cannot send events without credentials, applicationId or region');
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        timestamp = new Date().getTime();
                        // attach the session and eventId
                        this._generateSession(params);
                        params.event.eventId = uuid_1.v1();
                        Object.assign(params, { timestamp: timestamp, config: this._config, credentials: credentials });
                        // temporary solution, will refactor in the future
                        if (params.event.immediate) {
                            return [2 /*return*/, this._send(params)];
                        }
                        else {
                            return [2 /*return*/, this._putToBuffer(params)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AWSPinpointProvider.prototype._generateSession = function (params) {
        this._sessionId = this._sessionId || uuid_1.v1();
        var event = params.event;
        switch (event.name) {
            case '_session.start':
                // refresh the session id and session start time
                this._sessionStartTimestamp = new Date().getTime();
                this._sessionId = uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
                };
                break;
            case '_session.stop':
                var stopTimestamp = new Date().getTime();
                this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
                this._sessionId = this._sessionId || uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    Duration: stopTimestamp - this._sessionStartTimestamp,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString(),
                    StopTimestamp: new Date(stopTimestamp).toISOString()
                };
                this._sessionId = undefined;
                this._sessionStartTimestamp = undefined;
                break;
            default:
                this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
                this._sessionId = this._sessionId || uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
                };
                break;
        }
    };
    AWSPinpointProvider.prototype._send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, config;
            return __generator(this, function (_a) {
                event = params.event, config = params.config;
                switch (event.name) {
                    case '_session.start':
                        return [2 /*return*/, this._startSession(params)];
                    case '_session.stop':
                        return [2 /*return*/, this._stopSession(params)];
                    case '_update_endpoint':
                        return [2 /*return*/, this._updateEndpoint(params)];
                    default:
                        return [2 /*return*/, this._recordCustomEvent(params)];
                }
                return [2 /*return*/];
            });
        });
    };
    AWSPinpointProvider.prototype._generateBatchItemContext = function (params) {
        var event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
        var name = event.name, attributes = event.attributes, metrics = event.metrics, eventId = event.eventId, session = event.session;
        var appId = config.appId, endpointId = config.endpointId;
        var endpointContext = {};
        var eventParams = {
            ApplicationId: appId,
            EventsRequest: {
                BatchItem: {}
            }
        };
        eventParams.EventsRequest.BatchItem[endpointId] = {};
        var endpointObj = eventParams.EventsRequest.BatchItem[endpointId];
        endpointObj['Endpoint'] = endpointContext;
        endpointObj['Events'] = {};
        endpointObj['Events'][eventId] = {
            EventType: name,
            Timestamp: new Date(timestamp).toISOString(),
            Attributes: attributes,
            Metrics: metrics,
            Session: session
        };
        return eventParams;
    };
    AWSPinpointProvider.prototype._pinpointPutEvents = function (eventParams) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                logger.debug('pinpoint put events with params', eventParams);
                return [2 /*return*/, new Promise(function (res, rej) {
                        var request = _this.pinpointClient.putEvents(eventParams);
                        // in order to keep backward compatiblity
                        // we are using a legacy api: /apps/{appid}/events/legacy
                        // so that users don't need to update their IAM Policy
                        // will use the formal one in the next break release
                        request.on('build', function () {
                            request.httpRequest.path = request.httpRequest.path + '/legacy';
                        });
                        request.send(function (err, data) {
                            if (err) {
                                logger.error('record event failed. ', err);
                                logger.warn('If you have not updated your Pinpoint IAM Policy' +
                                    ' with the Action: \"mobiletargeting:PutEvents\" yet, please do it.' +
                                    ' This action is not necessary for now' +
                                    ' but in order to avoid breaking changes in the future,' +
                                    ' please update it as soon as possible.');
                                res(false);
                            }
                            else {
                                logger.debug('record event success. ', data);
                                res(true);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._startSession = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record session start');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._stopSession = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record session stop');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._recordCustomEvent = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record event with params');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    AWSPinpointProvider.prototype._updateEndpoint = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, config, credentials, event, appId, region, endpointId, request, update_params, that;
            var _this = this;
            return __generator(this, function (_a) {
                timestamp = params.timestamp, config = params.config, credentials = params.credentials, event = params.event;
                appId = config.appId, region = config.region, endpointId = config.endpointId;
                this._initClients(config, credentials);
                request = this._endpointRequest(config, core_1.JS.transferKeyToLowerCase(event, [], ['attributes', 'userAttributes', 'Attributes', 'UserAttributes']));
                update_params = {
                    ApplicationId: appId,
                    EndpointId: endpointId,
                    EndpointRequest: request
                };
                that = this;
                logger.debug('updateEndpoint with params: ', update_params);
                return [2 /*return*/, new Promise(function (res, rej) {
                        that.pinpointClient.updateEndpoint(update_params, function (err, data) {
                            if (err) {
                                logger.debug('updateEndpoint failed', err);
                                if (err.message.startsWith('Exceeded maximum endpoint per user count')) {
                                    _this._removeUnusedEndpoints(appId, request.User.UserId)
                                        .then(function () {
                                        logger.debug('Remove the unused endpoints successfully');
                                        return res(false);
                                    }).catch(function (e) {
                                        logger.warn("Failed to remove unused endpoints with error: " + e);
                                        logger.warn("Please ensure you have updated your Pinpoint IAM Policy " +
                                            "with the Action: \"mobiletargeting:GetUserEndpoints\" " +
                                            "in order to get endpoints info of the user");
                                        return res(false);
                                    });
                                }
                                return res(false);
                            }
                            else {
                                logger.debug('updateEndpoint success', data);
                                return res(true);
                            }
                        });
                    })];
            });
        });
    };
    AWSPinpointProvider.prototype._removeUnusedEndpoints = function (appId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        _this.pinpointClient.getUserEndpoints({
                            ApplicationId: appId,
                            UserId: userId
                        }, function (err, data) {
                            if (err) {
                                logger.debug("Failed to get endpoints associated with the userId: " + userId + " with error", err);
                                return rej(err);
                            }
                            var endpoints = data.EndpointsResponse.Item;
                            logger.debug("get endpoints associated with the userId: " + userId + " with data", endpoints);
                            var endpointToBeDeleted = endpoints[0];
                            for (var i = 1; i < endpoints.length; i++) {
                                var timeStamp1 = Date.parse(endpointToBeDeleted['EffectiveDate']);
                                var timeStamp2 = Date.parse(endpoints[i]['EffectiveDate']);
                                // delete the one with invalid effective date
                                if (isNaN(timeStamp1))
                                    break;
                                if (isNaN(timeStamp2)) {
                                    endpointToBeDeleted = endpoints[i];
                                    break;
                                }
                                if (timeStamp2 < timeStamp1) {
                                    endpointToBeDeleted = endpoints[i];
                                }
                            }
                            // update the endpoint's user id with an empty string
                            var update_params = {
                                ApplicationId: appId,
                                EndpointId: endpointToBeDeleted['Id'],
                                EndpointRequest: {
                                    User: {
                                        UserId: ''
                                    }
                                }
                            };
                            _this.pinpointClient.updateEndpoint(update_params, function (err, data) {
                                if (err) {
                                    logger.debug('Failed to update the endpoint', err);
                                    return rej(err);
                                }
                                logger.debug('The old endpoint is updated with an empty string for user id');
                                return res(data);
                            });
                        });
                    })];
            });
        });
    };
    /**
     * @private
     * @param config
     * Init the clients
     */
    AWSPinpointProvider.prototype._initClients = function (config, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var region;
            return __generator(this, function (_a) {
                logger.debug('init clients');
                if (this.mobileAnalytics
                    && this.pinpointClient
                    && this._config.credentials
                    && this._config.credentials.sessionToken === credentials.sessionToken
                    && this._config.credentials.identityId === credentials.identityId) {
                    logger.debug('no change for aws credentials, directly return from init');
                    return [2 /*return*/];
                }
                this._config.credentials = credentials;
                region = config.region;
                logger.debug('init clients with credentials', credentials);
                this.mobileAnalytics = new MobileAnalytics({ credentials: credentials, region: region });
                this.pinpointClient = new Pinpoint({ region: region, credentials: credentials });
                if (core_1.Platform.isReactNative) {
                    this.pinpointClient.customizeRequests(function (request) {
                        request.on('build', function (req) {
                            req.httpRequest.headers['user-agent'] = core_1.Platform.userAgent;
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AWSPinpointProvider.prototype._getEndpointId = function (cacheKey) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cache_1.default.getItem(cacheKey)];
                    case 1:
                        endpointId = _a.sent();
                        logger.debug('endpointId from cache', endpointId, 'type', typeof endpointId);
                        if (!endpointId) {
                            endpointId = uuid_1.v1();
                            cache_1.default.setItem(cacheKey, endpointId);
                        }
                        return [2 /*return*/, endpointId];
                }
            });
        });
    };
    /**
     * EndPoint request
     * @return {Object} - The request of updating endpoint
     */
    AWSPinpointProvider.prototype._endpointRequest = function (config, event) {
        var credentials = config.credentials;
        var clientInfo = this._clientInfo || {};
        var clientContext = config.clientContext || {};
        // for now we have three different ways for default endpoint configurations
        // clientInfo
        // clientContext (deprecated)
        // config.endpoint
        var defaultEndpointConfig = config.endpoint || {};
        var demographicByClientInfo = {
            appVersion: clientInfo.appVersion,
            make: clientInfo.make,
            model: clientInfo.model,
            modelVersion: clientInfo.version,
            platform: clientInfo.platform
        };
        // for backward compatibility
        var clientId = clientContext.clientId, appTitle = clientContext.appTitle, appVersionName = clientContext.appVersionName, appVersionCode = clientContext.appVersionCode, appPackageName = clientContext.appPackageName, demographicByClientContext = __rest(clientContext, ["clientId", "appTitle", "appVersionName", "appVersionCode", "appPackageName"]);
        var channelType = event.address ? ((clientInfo.platform === 'android') ? 'GCM' : 'APNS') : undefined;
        var tmp = __assign({ channelType: channelType, requestId: uuid_1.v1(), effectiveDate: new Date().toISOString() }, defaultEndpointConfig, event, { attributes: __assign({}, defaultEndpointConfig.attributes, event.attributes), demographic: __assign({}, demographicByClientInfo, demographicByClientContext, defaultEndpointConfig.demographic, event.demographic), location: __assign({}, defaultEndpointConfig.location, event.location), metrics: __assign({}, defaultEndpointConfig.metrics, event.metrics), user: {
                userId: event.userId || defaultEndpointConfig.userId || credentials.identityId,
                userAttributes: __assign({}, defaultEndpointConfig.userAttributes, event.userAttributes)
            } });
        // eliminate unnecessary params
        var userId = tmp.userId, userAttributes = tmp.userAttributes, name = tmp.name, session = tmp.session, eventId = tmp.eventId, immediate = tmp.immediate, ret = __rest(tmp, ["userId", "userAttributes", "name", "session", "eventId", "immediate"]);
        return core_1.JS.transferKeyToUpperCase(ret, [], ['metrics', 'userAttributes', 'attributes']);
    };
    /**
     * @private
     * check if current credentials exists
     */
    AWSPinpointProvider.prototype._getCredentials = function () {
        var that = this;
        return core_1.Credentials.get()
            .then(function (credentials) {
            if (!credentials)
                return null;
            logger.debug('set credentials for analytics', credentials);
            return core_1.Credentials.shear(credentials);
        })
            .catch(function (err) {
            logger.debug('ensure credentials error', err);
            return null;
        });
    };
    AWSPinpointProvider.category = 'Analytics';
    AWSPinpointProvider.providerName = 'AWSPinpoint';
    return AWSPinpointProvider;
}());
exports.default = AWSPinpointProvider;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(21);
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('StorageCache');
/**
 * Initialization of the cache
 *
 */
var StorageCache = /** @class */function () {
    /**
     * Initialize the cache
     * @param config - the configuration of the cache
     */
    function StorageCache(config) {
        this.config = Object.assign({}, config);
        this.cacheCurSizeKey = this.config.keyPrefix + 'CurSize';
        this.checkConfig();
    }
    StorageCache.prototype.getModuleName = function () {
        return 'Cache';
    };
    StorageCache.prototype.checkConfig = function () {
        // check configuration
        if (!Utils_1.isInteger(this.config.capacityInBytes)) {
            logger.error('Invalid parameter: capacityInBytes. It should be an Integer. Setting back to default.');
            this.config.capacityInBytes = Utils_1.defaultConfig.capacityInBytes;
        }
        if (!Utils_1.isInteger(this.config.itemMaxSize)) {
            logger.error('Invalid parameter: itemMaxSize. It should be an Integer. Setting back to default.');
            this.config.itemMaxSize = Utils_1.defaultConfig.itemMaxSize;
        }
        if (!Utils_1.isInteger(this.config.defaultTTL)) {
            logger.error('Invalid parameter: defaultTTL. It should be an Integer. Setting back to default.');
            this.config.defaultTTL = Utils_1.defaultConfig.defaultTTL;
        }
        if (!Utils_1.isInteger(this.config.defaultPriority)) {
            logger.error('Invalid parameter: defaultPriority. It should be an Integer. Setting back to default.');
            this.config.defaultPriority = Utils_1.defaultConfig.defaultPriority;
        }
        if (this.config.itemMaxSize > this.config.capacityInBytes) {
            logger.error('Invalid parameter: itemMaxSize. It should be smaller than capacityInBytes. Setting back to default.');
            this.config.itemMaxSize = Utils_1.defaultConfig.itemMaxSize;
        }
        if (this.config.defaultPriority > 5 || this.config.defaultPriority < 1) {
            logger.error('Invalid parameter: defaultPriority. It should be between 1 and 5. Setting back to default.');
            this.config.defaultPriority = Utils_1.defaultConfig.defaultPriority;
        }
        if (Number(this.config.warningThreshold) > 1 || Number(this.config.warningThreshold) < 0) {
            logger.error('Invalid parameter: warningThreshold. It should be between 0 and 1. Setting back to default.');
            this.config.warningThreshold = Utils_1.defaultConfig.warningThreshold;
        }
        // set 5MB limit
        var cacheLimit = 5 * 1024 * 1024;
        if (this.config.capacityInBytes > cacheLimit) {
            logger.error('Cache Capacity should be less than 5MB. Setting back to default. Setting back to default.');
            this.config.capacityInBytes = Utils_1.defaultConfig.capacityInBytes;
        }
    };
    /**
    * produce a JSON object with meta-data and data value
    * @param value - the value of the item
    * @param options - optional, the specified meta-data
    *
    * @return - the item which has the meta-data and the value
    */
    StorageCache.prototype.fillCacheItem = function (key, value, options) {
        var ret = {
            key: key,
            data: value,
            timestamp: Utils_1.getCurrTime(),
            visitedTime: Utils_1.getCurrTime(),
            priority: options.priority,
            expires: options.expires,
            type: typeof value === "undefined" ? "undefined" : _typeof(value),
            byteSize: 0
        };
        ret.byteSize = Utils_1.getByteLength(JSON.stringify(ret));
        // for accurate size
        ret.byteSize = Utils_1.getByteLength(JSON.stringify(ret));
        return ret;
    };
    /**
     * set cache with customized configuration
     * @param config - customized configuration
     *
     * @return - the current configuration
     */
    StorageCache.prototype.configure = function (config) {
        if (!config) {
            return this.config;
        }
        if (config.keyPrefix) {
            logger.warn("Don't try to configure keyPrefix!");
        }
        this.config = Object.assign({}, this.config, config, config.Cache);
        this.checkConfig();
        return this.config;
    };
    return StorageCache;
}();
exports.default = StorageCache;
//# sourceMappingURL=StorageCache.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var matches_1 = __webpack_require__(22);
var parents_1 = __webpack_require__(48);
/**
 * Gets the closest parent element that matches the passed selector.
 * @param {Element} element The element whose parents to check.
 * @param {string} selector The CSS selector to match against.
 * @param {boolean=} shouldCheckSelf True if the selector should test against
 *     the passed element itself.
 * @return {Element|undefined} The matching element or undefined.
 */
function closest(element, selector, shouldCheckSelf) {
    if (shouldCheckSelf === void 0) { shouldCheckSelf = false; }
    if (!(element && element.nodeType === 1 && selector))
        return;
    var parentElements = (shouldCheckSelf ? [element] : []).concat(parents_1.default(element));
    for (var i = 0, parent_1; parent_1 = parentElements[i]; i++) {
        if (matches_1.default(parent_1, selector))
            return parent_1;
    }
}
exports.default = closest;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an array of a DOM element's parent elements.
 * @param {!Element} element The DOM element whose parents to get.
 * @return {!Array} An array of all parent elemets, or an empty array if no
 *     parent elements are found.
 */
function parents(ele) {
    var list = [];
    var element = ele;
    while (element && element.parentNode && element.parentNode.nodeType === 1) {
        element = /** @type {!Element} */ (element.parentNode);
        list.push(element);
    }
    return list;
}
exports.default = parents;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Analytics_1 = __webpack_require__(50);
exports.AnalyticsClass = Analytics_1.default;
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('Analytics');
var endpointUpdated = false;
var authConfigured = false;
var analyticsConfigured = false;
var _instance = null;
if (!_instance) {
    logger.debug('Create Analytics Instance');
    _instance = new Analytics_1.default();
}
var Analytics = _instance;
core_1.default.register(Analytics);
exports.default = Analytics;
__export(__webpack_require__(157));
var listener = function (capsule) {
    var channel = capsule.channel, payload = capsule.payload, source = capsule.source;
    logger.debug('on hub capsule ' + channel, payload);
    switch (channel) {
        case 'auth':
            authEvent(payload);
            break;
        case 'storage':
            storageEvent(payload);
            break;
        case 'analytics':
            analyticsEvent(payload);
            break;
        default:
            break;
    }
};
var storageEvent = function (payload) {
    var _a = payload.data, attrs = _a.attrs, metrics = _a.metrics;
    if (!attrs)
        return;
    Analytics.record({
        name: 'Storage',
        attributes: attrs,
        metrics: metrics
    });
};
var authEvent = function (payload) {
    var event = payload.event;
    if (!event) {
        return;
    }
    switch (event) {
        case 'signIn':
            Analytics.record({
                name: '_userauth.sign_in'
            });
            break;
        case 'signUp':
            Analytics.record({
                name: '_userauth.sign_up'
            });
            break;
        case 'signOut':
            break;
        case 'signIn_failure':
            Analytics.record({
                name: '_userauth.auth_fail'
            });
            break;
        case 'configured':
            authConfigured = true;
            if (authConfigured && analyticsConfigured) {
                var config = Analytics.configure();
                if (!endpointUpdated && config['autoSessionRecord']) {
                    Analytics.updateEndpoint({}).catch(function (e) {
                        logger.debug('Failed to update the endpoint', e);
                    });
                }
                Analytics.autoTrack('session', {
                    enable: (Analytics.configure())['autoSessionRecord']
                });
                endpointUpdated = true;
            }
            break;
    }
};
var analyticsEvent = function (payload) {
    var event = payload.event;
    if (!event)
        return;
    switch (event) {
        case 'pinpointProvider_configured':
            analyticsConfigured = true;
            if (authConfigured && analyticsConfigured) {
                var config = Analytics.configure();
                if (!endpointUpdated && config['autoSessionRecord']) {
                    Analytics.updateEndpoint({}).catch(function (e) {
                        logger.debug('Failed to update the endpoint', e);
                    });
                }
                Analytics.autoTrack('session', {
                    enable: config['autoSessionRecord']
                });
                endpointUpdated = true;
            }
            break;
    }
};
core_1.Hub.listen('auth', listener);
core_1.Hub.listen('storage', listener);
core_1.Hub.listen('analytics', listener);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AWSPinpointProvider_1 = __webpack_require__(43);
var trackers_1 = __webpack_require__(147);
var logger = new core_1.ConsoleLogger('AnalyticsClass');
var AMPLIFY_SYMBOL = ((typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') ?
    Symbol.for('amplify_default') : '@@amplify_default');
var dispatchAnalyticsEvent = function (event, data, message) {
    core_1.Hub.dispatch('analytics', { event: event, data: data, message: message }, 'Analytics', AMPLIFY_SYMBOL);
};
var trackers = {
    'pageView': trackers_1.PageViewTracker,
    'event': trackers_1.EventTracker,
    'session': trackers_1.SessionTracker
};
/**
* Provide mobile analytics client functions
*/
var AnalyticsClass = /** @class */ (function () {
    /**
     * Initialize Analtyics
     * @param config - Configuration of the Analytics
     */
    function AnalyticsClass() {
        this._config = {};
        this._pluggables = [];
        this._disabled = false;
        this._trackers = {};
        this.record = this.record.bind(this);
    }
    AnalyticsClass.prototype.getModuleName = function () {
        return 'Analytics';
    };
    /**
     * configure Analytics
     * @param {Object} config - Configuration of the Analytics
     */
    AnalyticsClass.prototype.configure = function (config) {
        var _this = this;
        if (!config)
            return this._config;
        logger.debug('configure Analytics', config);
        var amplifyConfig = core_1.Parser.parseMobilehubConfig(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Analytics, config);
        if (this._config['disabled']) {
            this._disabled = true;
        }
        this._pluggables.forEach(function (pluggable) {
            // for backward compatibility
            var providerConfig = pluggable.getProviderName() === 'AWSPinpoint' && !_this._config['AWSPinpoint'] ?
                _this._config : _this._config[pluggable.getProviderName()];
            pluggable.configure(__assign({ disabled: _this._config['disabled'] }, providerConfig));
        });
        if (this._pluggables.length === 0) {
            this.addPluggable(new AWSPinpointProvider_1.default());
        }
        // turn on the autoSessionRecord if not specified
        if (this._config['autoSessionRecord'] === undefined) {
            this._config['autoSessionRecord'] = true;
        }
        dispatchAnalyticsEvent('configured', null, "The Analytics category has been configured successfully");
        logger.debug('current configuration', this._config);
        return this._config;
    };
    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    AnalyticsClass.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategory() === 'Analytics') {
            this._pluggables.push(pluggable);
            // for backward compatibility
            var providerConfig = pluggable.getProviderName() === 'AWSPinpoint' && !this._config['AWSPinpoint'] ?
                this._config : this._config[pluggable.getProviderName()];
            var config = __assign({ disabled: this._config['disabled'] }, providerConfig);
            pluggable.configure(config);
            return config;
        }
    };
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    AnalyticsClass.prototype.getPluggable = function (providerName) {
        for (var i = 0; i < this._pluggables.length; i += 1) {
            var pluggable = this._pluggables[i];
            if (pluggable.getProviderName() === providerName) {
                return pluggable;
            }
        }
        logger.debug('No plugin found with providerName', providerName);
        return null;
    };
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    AnalyticsClass.prototype.removePluggable = function (providerName) {
        var idx = 0;
        while (idx < this._pluggables.length) {
            if (this._pluggables[idx].getProviderName() === providerName) {
                break;
            }
            idx += 1;
        }
        if (idx === this._pluggables.length) {
            logger.debug('No plugin found with providerName', providerName);
            return;
        }
        else {
            this._pluggables.splice(idx, idx + 1);
            return;
        }
    };
    /**
     * stop sending events
     */
    AnalyticsClass.prototype.disable = function () {
        this._disabled = true;
    };
    /**
     * start sending events
     */
    AnalyticsClass.prototype.enable = function () {
        this._disabled = false;
    };
    /**
     * Record Session start
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.startSession = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = { event: { name: '_session.start' }, provider: provider };
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    /**
     * Record Session stop
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.stopSession = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = { event: { name: '_session.stop' }, provider: provider };
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    /**
     * Record one analytic event and send it to Pinpoint
     * @param {String} name - The name of the event
     * @param {Object} [attributs] - Attributes of the event
     * @param {Object} [metrics] - Event metrics
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.record = function (event, provider, metrics) {
        return __awaiter(this, void 0, void 0, function () {
            var errMsg, params;
            return __generator(this, function (_a) {
                if (!this.isAnalyticsConfigured()) {
                    errMsg = 'Analytics has not been configured';
                    logger.debug(errMsg);
                    return [2 /*return*/, Promise.reject(new Error(errMsg))];
                }
                params = null;
                // this is just for compatibility, going to be deprecated
                if (typeof event === 'string') {
                    params = {
                        'event': {
                            name: event,
                            attributes: provider,
                            metrics: metrics
                        },
                        provider: 'AWSPinpoint'
                    };
                }
                else {
                    params = { event: event, provider: provider };
                }
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    AnalyticsClass.prototype.updateEndpoint = function (attrs, provider) {
        return __awaiter(this, void 0, void 0, function () {
            var event;
            return __generator(this, function (_a) {
                event = Object.assign({ name: '_update_endpoint' }, attrs);
                return [2 /*return*/, this.record(event, provider)];
            });
        });
    };
    AnalyticsClass.prototype._sendEvent = function (params) {
        if (!this.isAnalyticsConfigured()) {
            var errMsg = 'Analytics has not been configured';
            logger.debug(errMsg);
            return Promise.reject(new Error(errMsg));
        }
        if (this._disabled) {
            logger.debug('Analytics has been disabled');
            return Promise.resolve();
        }
        var provider = params.provider ? params.provider : 'AWSPinpoint';
        this._pluggables.forEach(function (pluggable) {
            if (pluggable.getProviderName() === provider) {
                pluggable.record(params);
            }
        });
        return Promise.resolve();
    };
    AnalyticsClass.prototype.autoTrack = function (trackerType, opts) {
        if (!trackers[trackerType]) {
            logger.debug('invalid tracker type');
            return;
        }
        // to sync up two different configuration ways of auto session tracking
        if (trackerType === 'session') {
            this._config['autoSessionRecord'] = opts['enable'];
        }
        var tracker = this._trackers[trackerType];
        if (!tracker) {
            this._trackers[trackerType] = new (trackers[trackerType])(this.record, opts);
        }
        else {
            tracker.configure(opts);
        }
    };
    AnalyticsClass.prototype.isAnalyticsConfigured = function () {
        return this._config && Object.entries(this._config).length > 0;
    };
    return AnalyticsClass;
}());
exports.default = AnalyticsClass;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);

var AWS = __webpack_require__(0);
if (typeof window !== 'undefined') window.AWS = AWS;
if (true) module.exports = AWS;
if (typeof self !== 'undefined') self.AWS = AWS;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(53);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(4)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
  serializeStructure('', params, shape, fn);
};

function ucfirst(shape) {
  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
    return shape.name;
  } else {
    return shape.name[0].toUpperCase() + shape.name.substr(1);
  }
}

function serializeStructure(prefix, struct, rules, fn) {
  util.each(rules.members, function(name, member) {
    var value = struct[name];
    if (value === null || value === undefined) return;

    var memberName = ucfirst(member);
    memberName = prefix ? prefix + '.' + memberName : memberName;
    serializeMember(memberName, value, member, fn);
  });
}

function serializeMap(name, map, rules, fn) {
  var i = 1;
  util.each(map, function (key, value) {
    var prefix = rules.flattened ? '.' : '.entry.';
    var position = prefix + (i++) + '.';
    var keyName = position + (rules.key.name || 'key');
    var valueName = position + (rules.value.name || 'value');
    serializeMember(name + keyName, key, rules.key, fn);
    serializeMember(name + valueName, value, rules.value, fn);
  });
}

function serializeList(name, list, rules, fn) {
  var memberRules = rules.member || {};

  if (list.length === 0) {
    fn.call(this, name, null);
    return;
  }

  util.arrayEach(list, function (v, n) {
    var suffix = '.' + (n + 1);
    if (rules.api.protocol === 'ec2') {
      // Do nothing for EC2
      suffix = suffix + ''; // make linter happy
    } else if (rules.flattened) {
      if (memberRules.name) {
        var parts = name.split('.');
        parts.pop();
        parts.push(ucfirst(memberRules));
        name = parts.join('.');
      }
    } else {
      suffix = '.' + (memberRules.name ? memberRules.name : 'member') + suffix;
    }
    serializeMember(name + suffix, v, memberRules, fn);
  });
}

function serializeMember(name, value, rules, fn) {
  if (value === null || value === undefined) return;
  if (rules.type === 'structure') {
    serializeStructure(name, value, rules, fn);
  } else if (rules.type === 'list') {
    serializeList(name, value, rules, fn);
  } else if (rules.type === 'map') {
    serializeMap(name, value, rules, fn);
  } else {
    fn(name, rules.toWireFormat(value).toString());
  }
}

/**
 * @api private
 */
module.exports = QueryParamSerializer;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var XmlNode = __webpack_require__(56).XmlNode;
var XmlText = __webpack_require__(58).XmlText;

function XmlBuilder() { }

XmlBuilder.prototype.toXML = function(params, shape, rootElement, noEmpty) {
  var xml = new XmlNode(rootElement);
  applyNamespaces(xml, shape, true);
  serialize(xml, params, shape);
  return xml.children.length > 0 || noEmpty ? xml.toString() : '';
};

function serialize(xml, value, shape) {
  switch (shape.type) {
    case 'structure': return serializeStructure(xml, value, shape);
    case 'map': return serializeMap(xml, value, shape);
    case 'list': return serializeList(xml, value, shape);
    default: return serializeScalar(xml, value, shape);
  }
}

function serializeStructure(xml, params, shape) {
  util.arrayEach(shape.memberNames, function(memberName) {
    var memberShape = shape.members[memberName];
    if (memberShape.location !== 'body') return;

    var value = params[memberName];
    var name = memberShape.name;
    if (value !== undefined && value !== null) {
      if (memberShape.isXmlAttribute) {
        xml.addAttribute(name, value);
      } else if (memberShape.flattened) {
        serialize(xml, value, memberShape);
      } else {
        var element = new XmlNode(name);
        xml.addChildNode(element);
        applyNamespaces(element, memberShape);
        serialize(element, value, memberShape);
      }
    }
  });
}

function serializeMap(xml, map, shape) {
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';

  util.each(map, function(key, value) {
    var entry = new XmlNode(shape.flattened ? shape.name : 'entry');
    xml.addChildNode(entry);

    var entryKey = new XmlNode(xmlKey);
    var entryValue = new XmlNode(xmlValue);
    entry.addChildNode(entryKey)
    entry.addChildNode(entryValue)

    serialize(entryKey, key, shape.key);
    serialize(entryValue, value, shape.value);
  });
}

function serializeList(xml, list, shape) {
  if (shape.flattened) {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || shape.name;
      var element = new XmlNode(name);
      xml.addChildNode(element);
      serialize(element, value, shape.member);
    });
  } else {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || 'member';
      var element = new XmlNode(name);
      xml.addChildNode(element);
      serialize(element, value, shape.member);
    });
  }
}

function serializeScalar(xml, value, shape) {
  xml.addChildNode(
    new XmlText(shape.toWireFormat(value))
  );
}

function applyNamespaces(xml, shape, isRoot) {
  var uri, prefix = 'xmlns';
  if (shape.xmlNamespaceUri) {
    uri = shape.xmlNamespaceUri;
    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
  } else if (isRoot && shape.api.xmlNamespaceUri) {
    uri = shape.api.xmlNamespaceUri;
  }

  if (uri) xml.addAttribute(prefix, uri);
}

/**
 * @api private
 */
module.exports = XmlBuilder;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var escapeAttribute = __webpack_require__(57).escapeAttribute;

/**
 * Represents an XML node.
 * @api private
 */
function XmlNode(name, children) {
    if (children === void 0) { children = []; }
    this.name = name;
    this.children = children;
    this.attributes = {};
}
XmlNode.prototype.addAttribute = function (name, value) {
    this.attributes[name] = value;
    return this;
};
XmlNode.prototype.addChildNode = function (child) {
    this.children.push(child);
    return this;
};
XmlNode.prototype.removeAttribute = function (name) {
    delete this.attributes[name];
    return this;
};
XmlNode.prototype.toString = function () {
    var hasChildren = Boolean(this.children.length);
    var xmlText = '<' + this.name;
    // add attributes
    var attributes = this.attributes;
    for (var i = 0, attributeNames = Object.keys(attributes); i < attributeNames.length; i++) {
        var attributeName = attributeNames[i];
        var attribute = attributes[attributeName];
        if (typeof attribute !== 'undefined' && attribute !== null) {
            xmlText += ' ' + attributeName + '=\"' + escapeAttribute('' + attribute) + '\"';
        }
    }
    return xmlText += !hasChildren ? '/>' : '>' + this.children.map(function (c) { return c.toString(); }).join('') + '</' + this.name + '>';
};

/**
 * @api private
 */
module.exports = {
    XmlNode: XmlNode
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * Escapes characters that can not be in an XML attribute.
 */
function escapeAttribute(value) {
    return value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * @api private
 */
module.exports = {
    escapeAttribute: escapeAttribute
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var escapeElement = __webpack_require__(59).escapeElement;

/**
 * Represents an XML text value.
 * @api private
 */
function XmlText(value) {
    this.value = value;
}

XmlText.prototype.toString = function () {
    return escapeElement('' + this.value);
};

/**
 * @api private
 */
module.exports = {
    XmlText: XmlText
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Escapes characters that can not be in an XML element.
 */
function escapeElement(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * @api private
 */
module.exports = {
    escapeElement: escapeElement
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

function apiLoader(svc, version) {
  if (!apiLoader.services.hasOwnProperty(svc)) {
    throw new Error('InvalidService: Failed to load api for ' + svc);
  }
  return apiLoader.services[svc][version];
}

/**
 * @api private
 *
 * This member of AWS.apiLoader is private, but changing it will necessitate a
 * change to ../scripts/services-table-generator.ts
 */
apiLoader.services = {};

/**
 * @api private
 */
module.exports = apiLoader;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var AWS = __webpack_require__(0);
var Api = __webpack_require__(27);
var regionConfig = __webpack_require__(62);

var inherit = AWS.util.inherit;
var clientCount = 0;

/**
 * The service class representing an AWS service.
 *
 * @abstract
 *
 * @!attribute apiVersions
 *   @return [Array<String>] the list of API versions supported by this service.
 *   @readonly
 */
AWS.Service = inherit({
  /**
   * Create a new service object with a configuration object
   *
   * @param config [map] a map of configuration options
   */
  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) {
      var originalConfig = AWS.util.copy(config);
      var svc = new ServiceClass(config);
      Object.defineProperty(svc, '_originalConfig', {
        get: function() { return originalConfig; },
        enumerable: false,
        configurable: true
      });
      svc._clientId = ++clientCount;
      return svc;
    }
    this.initialize(config);
  },

  /**
   * @api private
   */
  initialize: function initialize(config) {
    var svcConfig = AWS.config[this.serviceIdentifier];
    this.config = new AWS.Config(AWS.config);
    if (svcConfig) this.config.update(svcConfig, true);
    if (config) this.config.update(config, true);

    this.validateService();
    if (!this.config.endpoint) regionConfig(this);

    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
    this.setEndpoint(this.config.endpoint);
    //enable attaching listeners to service client
    AWS.SequentialExecutor.call(this);
    AWS.Service.addDefaultMonitoringListeners(this);
    if (this.config.clientSideMonitoring && this.publisher) {
      var publisher = this.publisher;
      this.addNamedListener('PUBLISH_API_CALL', 'apiCall', function PUBLISH_API_CALL(event) {
        process.nextTick(function() {publisher.eventHandler(event);});
      });
      this.addNamedListener('PUBLISH_API_ATTEMPT', 'apiCallAttempt', function PUBLISH_API_ATTEMPT(event) {
        process.nextTick(function() {publisher.eventHandler(event);});
      });
    }
  },

  /**
   * @api private
   */
  validateService: function validateService() {
  },

  /**
   * @api private
   */
  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return null;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return null;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },

  /**
   * @api private
   */
  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },

  /**
   * @api private
   */
  getLatestServiceVersion: function getLatestServiceVersion(version) {
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    var selectedVersion = null;
    for (var i = keys.length - 1; i >= 0; i--) {
      // versions that end in "*" are not available on disk and can be
      // skipped, so do not choose these as selectedVersions
      if (keys[i][keys[i].length - 1] !== '*') {
        selectedVersion = keys[i];
      }
      if (keys[i].substr(0, 10) <= version) {
        return selectedVersion;
      }
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },

  /**
   * @api private
   */
  api: {},

  /**
   * @api private
   */
  defaultRetryCount: 3,

  /**
   * @api private
   */
  customizeRequests: function customizeRequests(callback) {
    if (!callback) {
      this.customRequestHandler = null;
    } else if (typeof callback === 'function') {
      this.customRequestHandler = callback;
    } else {
      throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
    }
  },

  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);
    this.attachMonitoringEmitter(request);
    if (callback) request.send(callback);
    return request;
  },

  /**
   * Calls an operation on a service with the given input parameters, without
   * any authentication data. This method is useful for "public" API operations.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = this.makeRequest(operation, params).toUnauthenticated();
    return callback ? request.send(callback) : request;
  },

  /**
   * Waits for a given state
   *
   * @param state [String] the state on the service to wait for
   * @param params [map] a map of parameters to pass with each request
   * @option params $waiter [map] a map of configuration options for the waiter
   * @option params $waiter.delay [Number] The number of seconds to wait between
   *                                       requests
   * @option params $waiter.maxAttempts [Number] The maximum number of requests
   *                                             to send while waiting
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  waitFor: function waitFor(state, params, callback) {
    var waiter = new AWS.ResourceWaiter(this, state);
    return waiter.wait(params, callback);
  },

  /**
   * @api private
   */
  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                AWS.EventListeners.CorePost];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    // disable parameter validation
    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(AWS.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
    // call prototype's customRequestHandler
    if (typeof this.constructor.prototype.customRequestHandler === 'function') {
      this.constructor.prototype.customRequestHandler(request);
    }
    // call instance's customRequestHandler
    if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
      this.customRequestHandler(request);
    }
  },

  /**
   * Event recording metrics for a whole API call.
   * @returns {object} a subset of api call metrics
   * @api private
   */
  apiCallEvent: function apiCallEvent(request) {
    var api = request.service.api.operations[request.operation];
    return {
      Type: 'ApiCall',
      Api: api ? api.name : request.operation,
      Version: 1,
      Service: request.service.api.serviceId || request.service.api.endpointPrefix,
    }
  },

  /**
   * Event recording metrics for an API call attempt.
   * @returns {object} a subset of api call attempt metrics
   * @api private
   */
  apiAttemptEvent: function apiAttemptEvent(request) {
    var api = request.service.api.operations[request.operation];
    var monitoringEvent = {
      Type: 'ApiCallAttempt',
      Api: api ? api.name : request.operation,
      Version: 1,
      Service: request.service.api.serviceId || request.service.api.endpointPrefix,
      Fqdn: request.httpRequest.endpoint.hostname,
      UserAgent: request.httpRequest.getUserAgent(),
    };
    var response = request.response;
    if (!response.httpResponse.headers) return monitoringEvent;
    if (request.httpRequest.headers['x-amz-security-token']) {
      monitoringEvent.SessionToken = request.httpRequest.headers['x-amz-security-token'];
    }
    if (response.httpResponse.headers['x-amzn-requestid']) {
      monitoringEvent.XAmznRequestId = response.httpResponse.headers['x-amzn-requestid'];
    }
    if (response.httpResponse.headers['x-amz-request-id']) {
      monitoringEvent.XAmzRequestId = response.httpResponse.headers['x-amz-request-id'];
    }
    if (response.httpResponse.headers['x-amz-id-2']) {
      monitoringEvent.XAmzId2 = response.httpResponse.headers['x-amz-id-2'];
    }
    if (response.httpResponse.statusCode) {
      monitoringEvent.HttpStatusCode = response.httpResponse.statusCode;
    }
    if (
      !request._unAuthenticated &&
      request.service.config.credentials.accessKeyId
    ) {
      monitoringEvent.AccessKey = request.service.config.credentials.accessKeyId;
    }
    return monitoringEvent
  },

  /**
   * Add metrics of failed request.
   * @api private
   */
  attemptFailEvent: function attemptFailEvent(request) {
    var monitoringEvent = this.apiAttemptEvent(request);
    var response = request.response;
    if (response.httpResponse.statusCode > 299 ) {
      monitoringEvent.AwsException = response.error.code;
      monitoringEvent.AwsExceptionMessage = response.error.message;
    } else {
      monitoringEvent.SdkException = response.error.code || response.error.name;
      monitoringEvent.SdkExceptionMessage = response.error.message;
    }
    return monitoringEvent;
  },

  /**
   * Attach listeners to request object to fetch metrics of each request
   * and emit data object through \'ApiCall\' and \'ApiCallAttempt\' events.
   * @api private
   */
  attachMonitoringEmitter: function attachMonitoringEmitter(request) {
    var attemptTimestamp; //timestamp marking the beginning of a request attempt
    var attemptStartRealTime; //Start time of request attempt. Used to calculating attemptLatency
    var attemptLatency; //latency from request sent out to http response reaching SDK
    var callStartRealTime; //Start time of API call. Used to calculating API call latency
    var attemptCount = 0; //request.retryCount is not reliable here
    var region; //region cache region for each attempt since it can be updated in plase (e.g. s3)
    var callTimestamp; //timestamp when the request is created
    var self = this;
    var addToHead = true;

    request.on('validate', function () {
      callStartRealTime = AWS.util.realClock.now();
      callTimestamp = Date.now();
    }, addToHead);
    request.on('sign', function () {
      attemptStartRealTime = AWS.util.realClock.now();
      attemptTimestamp = Date.now();
      region = request.httpRequest.region;
      attemptCount++;
    }, addToHead)
    request.on('validateResponse', function() {
      attemptLatency = Math.round(AWS.util.realClock.now() - attemptStartRealTime);
    })
    request.addNamedListener('API_CALL_ATTEMPT', 'success', function API_CALL_ATTEMPT() {
      var apiAttemptEvent = self.apiAttemptEvent(request);
      apiAttemptEvent.Timestamp = attemptTimestamp;
      apiAttemptEvent.AttemptLatency = attemptLatency >= 0 ? attemptLatency : 0;
      apiAttemptEvent.Region = region;
      self.emit('apiCallAttempt', [apiAttemptEvent]);
    });
    request.addNamedListener('API_CALL_ATTEMPT_RETRY', 'retry', function API_CALL_ATTEMPT_RETRY() {
      var apiAttemptEvent = self.attemptFailEvent(request);
      apiAttemptEvent.Timestamp = attemptTimestamp;
      //attemptLatency may not be available if fail before response
      attemptLatency = attemptLatency ||
        Math.round(AWS.util.realClock.now() - attemptStartRealTime);
      apiAttemptEvent.AttemptLatency = attemptLatency >= 0 ? attemptLatency : 0;
      apiAttemptEvent.Region = region;
      self.emit('apiCallAttempt', [apiAttemptEvent]);
    });
    request.addNamedListener('API_CALL', 'complete', function API_CALL() {
      var apiCallEvent = self.apiCallEvent(request);
      apiCallEvent.AttemptCount = attemptCount;
      if (apiCallEvent.AttemptCount <= 0) return;
      apiCallEvent.Timestamp = callTimestamp;
      var latency = Math.round(AWS.util.realClock.now() - callStartRealTime);
      apiCallEvent.Latency = latency >= 0 ? latency : 0;
      self.emit('apiCall', [apiCallEvent]);
    })
  },

  /**
   * Override this method to setup any custom request listeners for each
   * new request to the service.
   *
   * @abstract
   */
  setupRequestListeners: function setupRequestListeners() {
  },

  /**
   * Gets the signer class for a given request
   * @api private
   */
  getSignerClass: function getSignerClass(request) {
    var version;
    // get operation authtype if present
    var operation = null;
    var authtype = '';
    if (request) {
      var operations = request.service.api.operations || {};
      operation = operations[request.operation] || null;
      authtype = operation ? operation.authtype : '';
    }
    if (this.config.signatureVersion) {
      version = this.config.signatureVersion;
    } else if (authtype === 'v4' || authtype === 'v4-unsigned-body') {
      version = 'v4';
    } else {
      version = this.api.signatureVersion;
    }
    return AWS.Signers.RequestSigner.getVersion(version);
  },

  /**
   * @api private
   */
  serviceInterface: function serviceInterface() {
    switch (this.api.protocol) {
      case 'ec2': return AWS.EventListeners.Query;
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.protocol) {
      throw new Error('Invalid service `protocol\' ' +
        this.api.protocol + ' in API config');
    }
  },

  /**
   * @api private
   */
  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by service classes.
   *
   * @api private
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  /**
   * @api private
   */
  retryDelays: function retryDelays(retryCount) {
    return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions);
  },

  /**
   * @api private
   */
  retryableError: function retryableError(error) {
    if (this.timeoutError(error)) return true;
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  /**
   * @api private
   */
  networkingError: function networkingError(error) {
    return error.code === 'NetworkingError';
  },

  /**
   * @api private
   */
  timeoutError: function timeoutError(error) {
    return error.code === 'TimeoutError';
  },

  /**
   * @api private
   */
  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  /**
   * @api private
   */
  clockSkewError: function clockSkewError(error) {
    switch (error.code) {
      case 'RequestTimeTooSkewed':
      case 'RequestExpired':
      case 'InvalidSignatureException':
      case 'SignatureDoesNotMatch':
      case 'AuthFailure':
      case 'RequestInTheFuture':
        return true;
      default: return false;
    }
  },

  /**
   * @api private
   */
  getSkewCorrectedDate: function getSkewCorrectedDate() {
    return new Date(Date.now() + this.config.systemClockOffset);
  },

  /**
   * @api private
   */
  applyClockOffset: function applyClockOffset(newServerTime) {
    if (newServerTime) {
      this.config.systemClockOffset = newServerTime - Date.now();
    }
  },

  /**
   * @api private
   */
  isClockSkewed: function isClockSkewed(newServerTime) {
    if (newServerTime) {
      return Math.abs(this.getSkewCorrectedDate().getTime() - newServerTime) >= 30000;
    }
  },

  /**
   * @api private
   */
  throttledError: function throttledError(error) {
    // this logic varies between services
    switch (error.code) {
      case 'ProvisionedThroughputExceededException':
      case 'Throttling':
      case 'ThrottlingException':
      case 'RequestLimitExceeded':
      case 'RequestThrottled':
      case 'TooManyRequestsException':
        return true;
      default:
        return false;
    }
  },

  /**
   * @api private
   */
  endpointFromTemplate: function endpointFromTemplate(endpoint) {
    if (typeof endpoint !== 'string') return endpoint;

    var e = endpoint;
    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
    e = e.replace(/\{region\}/g, this.config.region);
    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
    return e;
  },

  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    this.endpoint = new AWS.Endpoint(endpoint, this.config);
  },

  /**
   * @api private
   */
  paginationConfig: function paginationConfig(operation, throwException) {
    var paginator = this.api.operations[operation].paginator;
    if (!paginator) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
      }
      return null;
    }

    return paginator;
  }
});

AWS.util.update(AWS.Service, {

  /**
   * Adds one method for each operation described in the api configuration
   *
   * @api private
   */
  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      var operation = svc.prototype.api.operations[method];
      if (operation.authtype === 'none') {
        svc.prototype[method] = function (params, callback) {
          return this.makeUnauthenticatedRequest(method, params, callback);
        };
      } else {
        svc.prototype[method] = function (params, callback) {
          return this.makeRequest(method, params, callback);
        };
      }
    });
  },

  /**
   * Defines a new Service class using a service identifier and list of versions
   * including an optional set of features (functions) to apply to the class
   * prototype.
   *
   * @param serviceIdentifier [String] the identifier for the service
   * @param versions [Array<String>] a list of versions that work with this
   *   service
   * @param features [Object] an object to attach to the prototype
   * @return [Class<Service>] the service class defined by this function.
   */
  defineService: function defineService(serviceIdentifier, versions, features) {
    AWS.Service._serviceMap[serviceIdentifier] = true;
    if (!Array.isArray(versions)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});

    if (typeof serviceIdentifier === 'string') {
      AWS.Service.addVersions(svc, versions);

      var identifier = svc.serviceIdentifier || serviceIdentifier;
      svc.serviceIdentifier = identifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }
    AWS.SequentialExecutor.call(this.prototype);
    //util.clientSideMonitoring is only available in node
    if (!this.prototype.publisher && AWS.util.clientSideMonitoring) {
      var Publisher = AWS.util.clientSideMonitoring.Publisher;
      var configProvider = AWS.util.clientSideMonitoring.configProvider;
      this.prototype.publisher = new Publisher(configProvider());
    }
    AWS.SequentialExecutor.call(svc.prototype);
    AWS.Service.addDefaultMonitoringListeners(svc.prototype);
    return svc;
  },

  /**
   * @api private
   */
  addVersions: function addVersions(svc, versions) {
    if (!Array.isArray(versions)) versions = [versions];

    svc.services = svc.services || {};
    for (var i = 0; i < versions.length; i++) {
      if (svc.services[versions[i]] === undefined) {
        svc.services[versions[i]] = null;
      }
    }

    svc.apiVersions = Object.keys(svc.services).sort();
  },

  /**
   * @api private
   */
  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    function setApi(api) {
      if (api.isApi) {
        svc.prototype.api = api;
      } else {
        svc.prototype.api = new Api(api);
      }
    }

    if (typeof version === 'string') {
      if (apiConfig) {
        setApi(apiConfig);
      } else {
        try {
          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
        } catch (err) {
          throw AWS.util.error(err, {
            message: 'Could not find API configuration ' +
              superclass.serviceIdentifier + '-' + version
          });
        }
      }
      if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
      }
      superclass.services[version] = svc;
    } else {
      setApi(version);
    }

    AWS.Service.defineMethods(svc);
    return svc;
  },

  /**
   * @api private
   */
  hasService: function(identifier) {
    return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
  },

  /**
   * @param attachOn attach default monitoring listeners to object
   *
   * Each monitoring event should be emitted from service client to service constructor prototype and then
   * to global service prototype like bubbling up. These default monitoring events listener will transfer
   * the monitoring events to the upper layer.
   * @api private
   */
  addDefaultMonitoringListeners: function addDefaultMonitoringListeners(attachOn) {
    attachOn.addNamedListener('MONITOR_EVENTS_BUBBLE', 'apiCallAttempt', function EVENTS_BUBBLE(event) {
      var baseClass = Object.getPrototypeOf(attachOn);
      if (baseClass._events) baseClass.emit('apiCallAttempt', [event]);
    });
    attachOn.addNamedListener('CALL_EVENTS_BUBBLE', 'apiCall', function CALL_EVENTS_BUBBLE(event) {
      var baseClass = Object.getPrototypeOf(attachOn);
      if (baseClass._events) baseClass.emit('apiCall', [event]);
    });
  },

  /**
   * @api private
   */
  _serviceMap: {}
});

AWS.util.mixin(AWS.Service, AWS.SequentialExecutor);

/**
 * @api private
 */
module.exports = AWS.Service;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var regionConfig = __webpack_require__(63);

function generateRegionPrefix(region) {
  if (!region) return null;

  var parts = region.split('-');
  if (parts.length < 3) return null;
  return parts.slice(0, parts.length - 2).join('-') + '-*';
}

function derivedKeys(service) {
  var region = service.config.region;
  var regionPrefix = generateRegionPrefix(region);
  var endpointPrefix = service.api.endpointPrefix;

  return [
    [region, endpointPrefix],
    [regionPrefix, endpointPrefix],
    [region, '*'],
    [regionPrefix, '*'],
    ['*', endpointPrefix],
    ['*', '*']
  ].map(function(item) {
    return item[0] && item[1] ? item.join('/') : null;
  });
}

function applyConfig(service, config) {
  util.each(config, function(key, value) {
    if (key === 'globalEndpoint') return;
    if (service.config[key] === undefined || service.config[key] === null) {
      service.config[key] = value;
    }
  });
}

function configureEndpoint(service) {
  var keys = derivedKeys(service);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!key) continue;

    if (Object.prototype.hasOwnProperty.call(regionConfig.rules, key)) {
      var config = regionConfig.rules[key];
      if (typeof config === 'string') {
        config = regionConfig.patterns[config];
      }

      // set dualstack endpoint
      if (service.config.useDualstack && util.isDualstackAvailable(service)) {
        config = util.copy(config);
        config.endpoint = '{service}.dualstack.{region}.amazonaws.com';
      }

      // set global endpoint
      service.isGlobalEndpoint = !!config.globalEndpoint;

      // signature version
      if (!config.signatureVersion) config.signatureVersion = 'v4';

      // merge config
      applyConfig(service, config);
      return;
    }
  }
}

/**
 * @api private
 */
module.exports = configureEndpoint;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {"rules":{"*/*":{"endpoint":"{service}.{region}.amazonaws.com"},"cn-*/*":{"endpoint":"{service}.{region}.amazonaws.com.cn"},"*/budgets":"globalSSL","*/cloudfront":"globalSSL","*/iam":"globalSSL","*/sts":"globalSSL","*/importexport":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2","globalEndpoint":true},"*/route53":{"endpoint":"https://{service}.amazonaws.com","signatureVersion":"v3https","globalEndpoint":true},"*/waf":"globalSSL","us-gov-*/iam":"globalGovCloud","us-gov-*/sts":{"endpoint":"{service}.{region}.amazonaws.com"},"us-gov-west-1/s3":"s3signature","us-west-1/s3":"s3signature","us-west-2/s3":"s3signature","eu-west-1/s3":"s3signature","ap-southeast-1/s3":"s3signature","ap-southeast-2/s3":"s3signature","ap-northeast-1/s3":"s3signature","sa-east-1/s3":"s3signature","us-east-1/s3":{"endpoint":"{service}.amazonaws.com","signatureVersion":"s3"},"us-east-1/sdb":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2"},"*/sdb":{"endpoint":"{service}.{region}.amazonaws.com","signatureVersion":"v2"}},"patterns":{"globalSSL":{"endpoint":"https://{service}.amazonaws.com","globalEndpoint":true},"globalGovCloud":{"endpoint":"{service}.us-gov.amazonaws.com"},"s3signature":{"endpoint":"{service}.{region}.amazonaws.com","signatureVersion":"s3"}}}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
__webpack_require__(32);
__webpack_require__(33);
var PromisesDependency;

/**
 * The main configuration class used by all service objects to set
 * the region, credentials, and other options for requests.
 *
 * By default, credentials and region settings are left unconfigured.
 * This should be configured by the application before using any
 * AWS service APIs.
 *
 * In order to set global configuration options, properties should
 * be assigned to the global {AWS.config} object.
 *
 * @see AWS.config
 *
 * @!group General Configuration Options
 *
 * @!attribute credentials
 *   @return [AWS.Credentials] the AWS credentials to sign requests with.
 *
 * @!attribute region
 *   @example Set the global region setting to us-west-2
 *     AWS.config.update({region: 'us-west-2'});
 *   @return [AWS.Credentials] The region to send service requests to.
 *   @see http://docs.amazonwebservices.com/general/latest/gr/rande.html
 *     A list of available endpoints for each AWS service
 *
 * @!attribute maxRetries
 *   @return [Integer] the maximum amount of retries to perform for a
 *     service request. By default this value is calculated by the specific
 *     service object that the request is being made to.
 *
 * @!attribute maxRedirects
 *   @return [Integer] the maximum amount of redirects to follow for a
 *     service request. Defaults to 10.
 *
 * @!attribute paramValidation
 *   @return [Boolean|map] whether input parameters should be validated against
 *     the operation description before sending the request. Defaults to true.
 *     Pass a map to enable any of the following specific validation features:
 *
 *     * **min** [Boolean] &mdash; Validates that a value meets the min
 *       constraint. This is enabled by default when paramValidation is set
 *       to `true`.
 *     * **max** [Boolean] &mdash; Validates that a value meets the max
 *       constraint.
 *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
 *       regular expression.
 *     * **enum** [Boolean] &mdash; Validates that a string value matches one
 *       of the allowable enum values.
 *
 * @!attribute computeChecksums
 *   @return [Boolean] whether to compute checksums for payload bodies when
 *     the service accepts it (currently supported in S3 only).
 *
 * @!attribute convertResponseTypes
 *   @return [Boolean] whether types are converted when parsing response data.
 *     Currently only supported for JSON based services. Turning this off may
 *     improve performance on large response payloads. Defaults to `true`.
 *
 * @!attribute correctClockSkew
 *   @return [Boolean] whether to apply a clock skew correction and retry
 *     requests that fail because of an skewed client clock. Defaults to
 *     `false`.
 *
 * @!attribute sslEnabled
 *   @return [Boolean] whether SSL is enabled for requests
 *
 * @!attribute s3ForcePathStyle
 *   @return [Boolean] whether to force path style URLs for S3 objects
 *
 * @!attribute s3BucketEndpoint
 *   @note Setting this configuration option requires an `endpoint` to be
 *     provided explicitly to the service constructor.
 *   @return [Boolean] whether the provided endpoint addresses an individual
 *     bucket (false if it addresses the root API endpoint).
 *
 * @!attribute s3DisableBodySigning
 *   @return [Boolean] whether to disable S3 body signing when using signature version `v4`.
 *     Body signing can only be disabled when using https. Defaults to `true`.
 *
 * @!attribute useAccelerateEndpoint
 *   @note This configuration option is only compatible with S3 while accessing
 *     dns-compatible buckets.
 *   @return [Boolean] Whether to use the Accelerate endpoint with the S3 service.
 *     Defaults to `false`.
 *
 * @!attribute retryDelayOptions
 *   @example Set the base retry delay for all services to 300 ms
 *     AWS.config.update({retryDelayOptions: {base: 300}});
 *     // Delays with maxRetries = 3: 300, 600, 1200
 *   @example Set a custom backoff function to provide delay values on retries
 *     AWS.config.update({retryDelayOptions: {customBackoff: function(retryCount) {
 *       // returns delay in ms
 *     }}});
 *   @return [map] A set of options to configure the retry delay on retryable errors.
 *     Currently supported options are:
 *
 *     * **base** [Integer] &mdash; The base number of milliseconds to use in the
 *       exponential backoff for operation retries. Defaults to 100 ms for all services except
 *       DynamoDB, where it defaults to 50ms.
 *     * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
 *       and returns the amount of time to delay in milliseconds. The `base` option will be
 *       ignored if this option is supplied.
 *
 * @!attribute httpOptions
 *   @return [map] A set of options to pass to the low-level HTTP request.
 *     Currently supported options are:
 *
 *     * **proxy** [String] &mdash; the URL to proxy requests through
 *     * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
 *       HTTP requests with. Used for connection pooling. Defaults to the global
 *       agent (`http.globalAgent`) for non-SSL connections. Note that for
 *       SSL connections, a special Agent object is used in order to enable
 *       peer certificate verification. This feature is only supported in the
 *       Node.js environment.
 *     * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
 *       failing to establish a connection with the server after
 *       `connectTimeout` milliseconds. This timeout has no effect once a socket
 *       connection has been established.
 *     * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
 *       milliseconds of inactivity on the socket. Defaults to two minutes
 *       (120000)
 *     * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
 *       HTTP requests. Used in the browser environment only. Set to false to
 *       send requests synchronously. Defaults to true (async on).
 *     * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
 *       property of an XMLHttpRequest object. Used in the browser environment
 *       only. Defaults to false.
 * @!attribute logger
 *   @return [#write,#log] an object that responds to .write() (like a stream)
 *     or .log() (like the console object) in order to log information about
 *     requests
 *
 * @!attribute systemClockOffset
 *   @return [Number] an offset value in milliseconds to apply to all signing
 *     times. Use this to compensate for clock skew when your system may be
 *     out of sync with the service time. Note that this configuration option
 *     can only be applied to the global `AWS.config` object and cannot be
 *     overridden in service-specific configuration. Defaults to 0 milliseconds.
 *
 * @!attribute signatureVersion
 *   @return [String] the signature version to sign requests with (overriding
 *     the API configuration). Possible values are: 'v2', 'v3', 'v4'.
 *
 * @!attribute signatureCache
 *   @return [Boolean] whether the signature to sign requests with (overriding
 *     the API configuration) is cached. Only applies to the signature version 'v4'.
 *     Defaults to `true`.
 */
AWS.Config = AWS.util.inherit({
  /**
   * @!endgroup
   */

  /**
   * Creates a new configuration object. This is the object that passes
   * option data along to service requests, including credentials, security,
   * region information, and some service specific settings.
   *
   * @example Creating a new configuration object with credentials and region
   *   var config = new AWS.Config({
   *     accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
   *   });
   * @option options accessKeyId [String] your AWS access key ID.
   * @option options secretAccessKey [String] your AWS secret access key.
   * @option options sessionToken [AWS.Credentials] the optional AWS
   *   session token to sign requests with.
   * @option options credentials [AWS.Credentials] the AWS credentials
   *   to sign requests with. You can either specify this object, or
   *   specify the accessKeyId and secretAccessKey options directly.
   * @option options credentialProvider [AWS.CredentialProviderChain] the
   *   provider chain used to resolve credentials if no static `credentials`
   *   property is set.
   * @option options region [String] the region to send service requests to.
   *   See {region} for more information.
   * @option options maxRetries [Integer] the maximum amount of retries to
   *   attempt with a request. See {maxRetries} for more information.
   * @option options maxRedirects [Integer] the maximum amount of redirects to
   *   follow with a request. See {maxRedirects} for more information.
   * @option options sslEnabled [Boolean] whether to enable SSL for
   *   requests.
   * @option options paramValidation [Boolean|map] whether input parameters
   *   should be validated against the operation description before sending
   *   the request. Defaults to true. Pass a map to enable any of the
   *   following specific validation features:
   *
   *   * **min** [Boolean] &mdash; Validates that a value meets the min
   *     constraint. This is enabled by default when paramValidation is set
   *     to `true`.
   *   * **max** [Boolean] &mdash; Validates that a value meets the max
   *     constraint.
   *   * **pattern** [Boolean] &mdash; Validates that a string value matches a
   *     regular expression.
   *   * **enum** [Boolean] &mdash; Validates that a string value matches one
   *     of the allowable enum values.
   * @option options computeChecksums [Boolean] whether to compute checksums
   *   for payload bodies when the service accepts it (currently supported
   *   in S3 only)
   * @option options convertResponseTypes [Boolean] whether types are converted
   *     when parsing response data. Currently only supported for JSON based
   *     services. Turning this off may improve performance on large response
   *     payloads. Defaults to `true`.
   * @option options correctClockSkew [Boolean] whether to apply a clock skew
   *     correction and retry requests that fail because of an skewed client
   *     clock. Defaults to `false`.
   * @option options s3ForcePathStyle [Boolean] whether to force path
   *   style URLs for S3 objects.
   * @option options s3BucketEndpoint [Boolean] whether the provided endpoint
   *   addresses an individual bucket (false if it addresses the root API
   *   endpoint). Note that setting this configuration option requires an
   *   `endpoint` to be provided explicitly to the service constructor.
   * @option options s3DisableBodySigning [Boolean] whether S3 body signing
   *   should be disabled when using signature version `v4`. Body signing
   *   can only be disabled when using https. Defaults to `true`.
   *
   * @option options retryDelayOptions [map] A set of options to configure
   *   the retry delay on retryable errors. Currently supported options are:
   *
   *   * **base** [Integer] &mdash; The base number of milliseconds to use in the
   *     exponential backoff for operation retries. Defaults to 100 ms for all
   *     services except DynamoDB, where it defaults to 50ms.
   *   * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
   *     and returns the amount of time to delay in milliseconds. The `base` option will be
   *     ignored if this option is supplied.
   * @option options httpOptions [map] A set of options to pass to the low-level
   *   HTTP request. Currently supported options are:
   *
   *   * **proxy** [String] &mdash; the URL to proxy requests through
   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
   *     HTTP requests with. Used for connection pooling. Defaults to the global
   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
   *     SSL connections, a special Agent object is used in order to enable
   *     peer certificate verification. This feature is only available in the
   *     Node.js environment.
   *   * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
   *     failing to establish a connection with the server after
   *     `connectTimeout` milliseconds. This timeout has no effect once a socket
   *     connection has been established.
   *   * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
   *     milliseconds of inactivity on the socket. Defaults to two minutes
   *     (120000).
   *   * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
   *     HTTP requests. Used in the browser environment only. Set to false to
   *     send requests synchronously. Defaults to true (async on).
   *   * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
   *     property of an XMLHttpRequest object. Used in the browser environment
   *     only. Defaults to false.
   * @option options apiVersion [String, Date] a String in YYYY-MM-DD format
   *   (or a date) that represents the latest possible API version that can be
   *   used in all services (unless overridden by `apiVersions`). Specify
   *   'latest' to use the latest possible version.
   * @option options apiVersions [map<String, String|Date>] a map of service
   *   identifiers (the lowercase service class name) with the API version to
   *   use when instantiating a service. Specify 'latest' for each individual
   *   that can use the latest available version.
   * @option options logger [#write,#log] an object that responds to .write()
   *   (like a stream) or .log() (like the console object) in order to log
   *   information about requests
   * @option options systemClockOffset [Number] an offset value in milliseconds
   *   to apply to all signing times. Use this to compensate for clock skew
   *   when your system may be out of sync with the service time. Note that
   *   this configuration option can only be applied to the global `AWS.config`
   *   object and cannot be overridden in service-specific configuration.
   *   Defaults to 0 milliseconds.
   * @option options signatureVersion [String] the signature version to sign
   *   requests with (overriding the API configuration). Possible values are:
   *   'v2', 'v3', 'v4'.
   * @option options signatureCache [Boolean] whether the signature to sign
   *   requests with (overriding the API configuration) is cached. Only applies
   *   to the signature version 'v4'. Defaults to `true`.
   * @option options dynamoDbCrc32 [Boolean] whether to validate the CRC32
   *   checksum of HTTP response bodies returned by DynamoDB. Default: `true`.
   * @option options clientSideMonitoring [Boolean] whether to collect and
   * publish this client's performance metrics of all its API requests.
   */
  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },

  /**
   * @!group Managing Credentials
   */

  /**
   * Loads credentials from the configuration object. This is used internally
   * by the SDK to ensure that refreshable {Credentials} objects are properly
   * refreshed and loaded when sending a request. If you want to ensure that
   * your credentials are loaded prior to a request, you can use this method
   * directly to provide accurate credential data stored in the object.
   *
   * @note If you configure the SDK with static or environment credentials,
   *   the credential data should already be present in {credentials} attribute.
   *   This method is primarily necessary to load credentials from asynchronous
   *   sources, or sources that can refresh credentials periodically.
   * @example Getting your access key
   *   AWS.config.getCredentials(function(err) {
   *     if (err) console.log(err.stack); // credentials not loaded
   *     else console.log("Access Key:", AWS.config.credentials.accessKeyId);
   *   })
   * @callback callback function(err)
   *   Called when the {credentials} have been properly set on the configuration
   *   object.
   *
   *   @param err [Error] if this is set, credentials were not successfully
   *     loaded and this error provides information why.
   * @see credentials
   * @see Credentials
   */
  getCredentials: function getCredentials(callback) {
    var self = this;

    function finish(err) {
      callback(err, err ? null : self.credentials);
    }

    function credError(msg, err) {
      return new AWS.util.error(err || new Error(), {
        code: 'CredentialsError',
        message: msg,
        name: 'CredentialsError'
      });
    }

    function getAsyncCredentials() {
      self.credentials.get(function(err) {
        if (err) {
          var msg = 'Could not load credentials from ' +
            self.credentials.constructor.name;
          err = credError(msg, err);
        }
        finish(err);
      });
    }

    function getStaticCredentials() {
      var err = null;
      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
        err = credError('Missing credentials');
      }
      finish(err);
    }

    if (self.credentials) {
      if (typeof self.credentials.get === 'function') {
        getAsyncCredentials();
      } else { // static credentials
        getStaticCredentials();
      }
    } else if (self.credentialProvider) {
      self.credentialProvider.resolve(function(err, creds) {
        if (err) {
          err = credError('Could not load credentials from any providers', err);
        }
        self.credentials = creds;
        finish(err);
      });
    } else {
      finish(credError('No credentials to load'));
    }
  },

  /**
   * @!group Loading and Setting Configuration Options
   */

  /**
   * @overload update(options, allowUnknownKeys = false)
   *   Updates the current configuration object with new options.
   *
   *   @example Update maxRetries property of a configuration object
   *     config.update({maxRetries: 10});
   *   @param [Object] options a map of option keys and values.
   *   @param [Boolean] allowUnknownKeys whether unknown keys can be set on
   *     the configuration object. Defaults to `false`.
   *   @see constructor
   */
  update: function update(options, allowUnknownKeys) {
    allowUnknownKeys = allowUnknownKeys || false;
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (allowUnknownKeys || Object.prototype.hasOwnProperty.call(this.keys, key) ||
          AWS.Service.hasService(key)) {
        this.set(key, value);
      }
    });
  },

  /**
   * Loads configuration data from a JSON file into this config object.
   * @note Loading configuration will reset all existing configuration
   *   on the object.
   * @!macro nobrowser
   * @param path [String] the path relative to your process's current
   *    working directory to load configuration from.
   * @return [AWS.Config] the same configuration object
   */
  loadFromPath: function loadFromPath(path) {
    this.clear();

    var options = JSON.parse(AWS.util.readFileSync(path));
    var fileSystemCreds = new AWS.FileSystemCredentials(path);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    chain.resolve(function (err, creds) {
      if (err) throw err;
      else options.credentials = creds;
    });

    this.constructor(options);

    return this;
  },

  /**
   * Clears configuration data on this object
   *
   * @api private
   */
  clear: function clear() {
    /*jshint forin:false */
    AWS.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    // reset credential provider
    this.set('credentials', undefined);
    this.set('credentialProvider', undefined);
  },

  /**
   * Sets a property on the configuration object, allowing for a
   * default value
   * @api private
   */
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (typeof defaultValue === 'function') {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else if (property === 'httpOptions' && this[property]) {
      // deep merge httpOptions
      this[property] = AWS.util.merge(this[property], value);
    } else {
      this[property] = value;
    }
  },

  /**
   * All of the keys with their default values.
   *
   * @constant
   * @api private
   */
  keys: {
    credentials: null,
    credentialProvider: null,
    region: null,
    logger: null,
    apiVersions: {},
    apiVersion: null,
    endpoint: undefined,
    httpOptions: {
      timeout: 120000
    },
    maxRetries: undefined,
    maxRedirects: 10,
    paramValidation: true,
    sslEnabled: true,
    s3ForcePathStyle: false,
    s3BucketEndpoint: false,
    s3DisableBodySigning: true,
    computeChecksums: true,
    convertResponseTypes: true,
    correctClockSkew: false,
    customUserAgent: null,
    dynamoDbCrc32: true,
    systemClockOffset: 0,
    signatureVersion: null,
    signatureCache: true,
    retryDelayOptions: {},
    useAccelerateEndpoint: false,
    clientSideMonitoring: false
  },

  /**
   * Extracts accessKeyId, secretAccessKey and sessionToken
   * from a configuration hash.
   *
   * @api private
   */
  extractCredentials: function extractCredentials(options) {
    if (options.accessKeyId && options.secretAccessKey) {
      options = AWS.util.copy(options);
      options.credentials = new AWS.Credentials(options);
    }
    return options;
  },

  /**
   * Sets the promise dependency the SDK will use wherever Promises are returned.
   * Passing `null` will force the SDK to use native Promises if they are available.
   * If native Promises are not available, passing `null` will have no effect.
   * @param [Constructor] dep A reference to a Promise constructor
   */
  setPromisesDependency: function setPromisesDependency(dep) {
    PromisesDependency = dep;
    // if null was passed in, we should try to use native promises
    if (dep === null && typeof Promise === 'function') {
      PromisesDependency = Promise;
    }
    var constructors = [AWS.Request, AWS.Credentials, AWS.CredentialProviderChain];
    if (AWS.S3 && AWS.S3.ManagedUpload) constructors.push(AWS.S3.ManagedUpload);
    AWS.util.addPromises(constructors, PromisesDependency);
  },

  /**
   * Gets the promise dependency set by `AWS.config.setPromisesDependency`.
   */
  getPromisesDependency: function getPromisesDependency() {
    return PromisesDependency;
  }
});

/**
 * @return [AWS.Config] The global configuration object singleton instance
 * @readonly
 * @see AWS.Config
 */
AWS.config = new AWS.Config();


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var SequentialExecutor = __webpack_require__(31);
/**
 * The namespace used to register global event listeners for request building
 * and sending.
 */
AWS.EventListeners = {
  /**
   * @!attribute VALIDATE_CREDENTIALS
   *   A request listener that validates whether the request is being
   *   sent with credentials.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating credentials
   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_REGION
   *   A request listener that validates whether the region is set
   *   for a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating region configuration
   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_PARAMETERS
   *   A request listener that validates input parameters in a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating parameters
   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
   *     request.removeListener('validate', listener);
   *   @example Disable parameter validation globally
   *     AWS.EventListeners.Core.removeListener('validate',
   *       AWS.EventListeners.Core.VALIDATE_REGION);
   *   @readonly
   *   @return [Function]
   * @!attribute SEND
   *   A request listener that initiates the HTTP connection for a
   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
   *   @example Replacing the HTTP handler
   *     var listener = AWS.EventListeners.Core.SEND;
   *     request.removeListener('send', listener);
   *     request.on('send', function(response) {
   *       customHandler.send(response);
   *     });
   *   @return [Function]
   *   @readonly
   * @!attribute HTTP_DATA
   *   A request listener that reads data from the HTTP connection in order
   *   to build the response data.
   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
   *   Remove this handler if you are overriding the 'httpData' event and
   *   do not want extra data processing and buffering overhead.
   *   @example Disabling default data processing
   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
   *     request.removeListener('httpData', listener);
   *   @return [Function]
   *   @readonly
   */
  Core: {} /* doc hack */
};

/**
 * @api private
 */
function getOperationAuthtype(req) {
  if (!req.service.api.operations) {
    return '';
  }
  var operation = req.service.api.operations[req.operation];
  return operation ? operation.authtype : '';
}

AWS.EventListeners = {
  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none
      req.service.config.getCredentials(function(err) {
        if (err) {
          req.response.error = AWS.util.error(err,
            {code: 'CredentialsError', message: 'Missing credentials in config'});
        }
        done();
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
        req.response.error = AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
    });

    add('BUILD_IDEMPOTENCY_TOKENS', 'validate', function BUILD_IDEMPOTENCY_TOKENS(req) {
      if (!req.service.api.operations) {
        return;
      }
      var operation = req.service.api.operations[req.operation];
      if (!operation) {
        return;
      }
      var idempotentMembers = operation.idempotentMembers;
      if (!idempotentMembers.length) {
        return;
      }
      // creates a copy of params so user's param object isn't mutated
      var params = AWS.util.copy(req.params);
      for (var i = 0, iLen = idempotentMembers.length; i < iLen; i++) {
        if (!params[idempotentMembers[i]]) {
          // add the member
          params[idempotentMembers[i]] = AWS.util.uuid.v4();
        }
      }
      req.params = params;
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      if (!req.service.api.operations) {
        return;
      }
      var rules = req.service.api.operations[req.operation].input;
      var validation = req.service.config.paramValidation;
      new AWS.ParamValidator(validation).validate(rules, req.params);
    });

    addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
      req.haltHandlersOnError();
      if (!req.service.api.operations) {
        return;
      }
      var operation = req.service.api.operations[req.operation];
      var authtype = operation ? operation.authtype : '';
      if (!req.service.api.signatureVersion && !authtype) return done(); // none
      if (req.service.getSignerClass(req) === AWS.Signers.V4) {
        var body = req.httpRequest.body || '';
        if (authtype.indexOf('unsigned-body') >= 0) {
          req.httpRequest.headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
          return done();
        }
        AWS.util.computeSha256(body, function(err, sha) {
          if (err) {
            done(err);
          }
          else {
            req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
            done();
          }
        });
      } else {
        done();
      }
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      var authtype = getOperationAuthtype(req);
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        try {
          var length = AWS.util.string.byteLength(req.httpRequest.body);
          req.httpRequest.headers['Content-Length'] = length;
        } catch (err) {
          if (authtype.indexOf('unsigned-body') === -1) {
            throw err;
          } else {
            // Body isn't signed and may not need content length (lex)
            return;
          }
        }
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    add('RESTART', 'restart', function RESTART() {
      var err = this.response.error;
      if (!err || !err.retryable) return;

      this.httpRequest = new AWS.HttpRequest(
        this.service.endpoint,
        this.service.region
      );

      if (this.response.retryCount < this.service.config.maxRetries) {
        this.response.retryCount++;
      } else {
        this.response.error = null;
      }
    });

    addAsync('SIGN', 'sign', function SIGN(req, done) {
      var service = req.service;
      var operations = req.service.api.operations || {};
      var operation = operations[req.operation];
      var authtype = operation ? operation.authtype : '';
      if (!service.api.signatureVersion && !authtype) return done(); // none

      service.config.getCredentials(function (err, credentials) {
        if (err) {
          req.response.error = err;
          return done();
        }

        try {
          var date = service.getSkewCorrectedDate();
          var SignerClass = service.getSignerClass(req);
          var signer = new SignerClass(req.httpRequest,
            service.api.signingName || service.api.endpointPrefix,
            {
              signatureCache: service.config.signatureCache,
              operation: operation
            });
          signer.setServiceClientId(service._clientId);

          // clear old authorization headers
          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          // add new authorization
          signer.addAuthorization(credentials, date);
          req.signedAt = date;
        } catch (e) {
          req.response.error = e;
        }
        done();
      });
    });

    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
      if (this.service.successfulResponse(resp, this)) {
        resp.data = {};
        resp.error = null;
      } else {
        resp.data = null;
        resp.error = AWS.util.error(new Error(),
          {code: 'UnknownError', message: 'An unknown error occurred.'});
      }
    });

    addAsync('SEND', 'send', function SEND(resp, done) {
      resp.httpResponse._abortCallback = done;
      resp.error = null;
      resp.data = null;

      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;
        var stream = resp.request.httpRequest.stream;
        var service = resp.request.service;
        var api = service.api;
        var operationName = resp.request.operation;
        var operation = api.operations[operationName] || {};

        httpResp.on('headers', function onHeaders(statusCode, headers, statusMessage) {
          resp.request.emit(
            'httpHeaders',
            [statusCode, headers, resp, statusMessage]
          );

          if (!resp.httpResponse.streaming) {
            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
              // if we detect event streams, we're going to have to
              // return the stream immediately
              if (operation.hasEventOutput && service.successfulResponse(resp)) {
                // skip reading the IncomingStream
                resp.request.emit('httpDone');
                done();
                return;
              }

              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emit('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emit('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          if (!stream || !stream.didCallback) {
            if (AWS.HttpClient.streamsApiVersion === 2 && (operation.hasEventOutput && service.successfulResponse(resp))) {
              // don't concatenate response chunks when streaming event stream data when response is successful
              return;
            }
            resp.request.emit('httpDone');
            done();
          }
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(value) {
          resp.request.emit('httpUploadProgress', [value, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(value) {
          resp.request.emit('httpDownloadProgress', [value, resp]);
        });
      }

      function error(err) {
        if (err.code !== 'RequestAbortedError') {
          var errCode = err.code === 'TimeoutError' ? err.code : 'NetworkingError';
          err = AWS.util.error(err, {
            code: errCode,
            region: resp.request.httpRequest.region,
            hostname: resp.request.httpRequest.endpoint.hostname,
            retryable: true
          });
        }
        resp.error = err;
        resp.request.emit('httpError', [resp.error, resp], function() {
          done();
        });
      }

      function executeSend() {
        var http = AWS.HttpClient.getInstance();
        var httpOptions = resp.request.service.config.httpOptions || {};
        try {
          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
                                          callback, error);
          progress(stream);
        } catch (err) {
          error(err);
        }
      }
      var timeDiff = (resp.request.service.getSkewCorrectedDate() - this.signedAt) / 1000;
      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
        this.emit('sign', [this], function(err) {
          if (err) done(err);
          else executeSend();
        });
      } else {
        executeSend();
      }
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp, statusMessage) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.statusMessage = statusMessage;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new AWS.util.Buffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
      var dateHeader = headers.date || headers.Date;
      var service = resp.request.service;
      if (dateHeader) {
        var serverTime = Date.parse(dateHeader);
        if (service.config.correctClockSkew
            && service.isClockSkewed(serverTime)) {
          service.applyClockOffset(serverTime);
        }
      }
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        if (AWS.util.isNode()) {
          resp.httpResponse.numBytes += chunk.length;

          var total = resp.httpResponse.headers['content-length'];
          var progress = { loaded: resp.httpResponse.numBytes, total: total };
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        }

        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
      delete resp.httpResponse.buffers;
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      if (resp.httpResponse.statusCode) {
        resp.error.statusCode = resp.httpResponse.statusCode;
        if (resp.error.retryable === undefined) {
          resp.error.retryable = this.service.retryableError(resp.error, this);
        }
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      if (!resp.error) return;
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
      var err = resp.error;
      if (!err) return;
      if (typeof err.code === 'string' && typeof err.message === 'string') {
        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
          resp.error.retryable = true;
        }
      }
    });

    add('CLOCK_SKEWED', 'retry', function CLOCK_SKEWED(resp) {
      if (!resp.error) return;
      if (this.service.clockSkewError(resp.error)
          && this.service.config.correctClockSkew) {
        resp.error.retryable = true;
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.error.retryDelay = 0;
        } else if (resp.retryCount < resp.maxRetries) {
          resp.error.retryDelay = this.service.retryDelays(resp.retryCount) || 0;
        }
      }
    });

    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
      var delay, willRetry = false;

      if (resp.error) {
        delay = resp.error.retryDelay || 0;
        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
          resp.retryCount++;
          willRetry = true;
        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.redirectCount++;
          willRetry = true;
        }
      }

      if (willRetry) {
        resp.error = null;
        setTimeout(done, delay);
      } else {
        done();
      }
    });
  }),

  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
    add('EXTRACT_REQUEST_ID', 'extractData', AWS.util.extractRequestId);
    add('EXTRACT_REQUEST_ID', 'extractError', AWS.util.extractRequestId);

    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
        var message = 'Inaccessible host: `' + err.hostname +
          '\'. This service may not be available in the `' + err.region +
          '\' region.';
        this.response.error = AWS.util.error(new Error(message), {
          code: 'UnknownEndpoint',
          region: err.region,
          hostname: err.hostname,
          retryable: true,
          originalError: err
        });
      }
    });
  }),

  Logger: new SequentialExecutor().addNamedListeners(function(add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.service.config.logger;
      if (!logger) return;
      function filterSensitiveLog(inputShape, shape) {
        if (!shape) {
          return shape;
        }
        switch (inputShape.type) {
          case 'structure':
            var struct = {};
            AWS.util.each(shape, function(subShapeName, subShape) {
              if (Object.prototype.hasOwnProperty.call(inputShape.members, subShapeName)) {
                struct[subShapeName] = filterSensitiveLog(inputShape.members[subShapeName], subShape);
              } else {
                struct[subShapeName] = subShape;
              }
            })
            return struct
          case 'list':
            var list = [];
            AWS.util.arrayEach(shape, function(subShape, index) {
              list.push(filterSensitiveLog(inputShape.member, subShape));
            })
            return list;
          case 'map':
            var map = {};
            AWS.util.each(shape, function(key, value) {
              map[key] = filterSensitiveLog(inputShape.value, value);
            })
            return map;
          default:
            if (inputShape.isSensitive) {
              return '***SensitiveInformation***'
            } else {
              return shape;
            }
        }
      }

      function buildMessage() {
        var time = resp.request.service.getSkewCorrectedDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var censoredParams = req.params;
        if (
          req.service.api.operations &&
              req.service.api.operations[req.operation] &&
              req.service.api.operations[req.operation].input
        ) {
          var inputShape = req.service.api.operations[req.operation].input;
          censoredParams = filterSensitiveLog(inputShape, req.params);
        }
        var params = __webpack_require__(66).inspect(censoredParams, true, null);
        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + AWS.util.string.lowerFirst(req.operation);
        message += '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var line = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(line);
      } else if (typeof logger.write === 'function') {
        logger.write(line + '\n');
      }
    });
  }),

  Json: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = __webpack_require__(15);
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = __webpack_require__(11);
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = __webpack_require__(25);
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = __webpack_require__(26);
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = __webpack_require__(23);
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(67);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(68);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(4)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var AWS = __webpack_require__(0);
var AcceptorStateMachine = __webpack_require__(70);
var inherit = AWS.util.inherit;
var domain = AWS.util.domain;
var jmespath = __webpack_require__(18);

/**
 * @api private
 */
var hardErrorStates = {success: 1, error: 1, complete: 1};

function isTerminalState(machine) {
  return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
}

var fsm = new AcceptorStateMachine();
fsm.setupStates = function() {
  var transition = function(_, done) {
    var self = this;
    self._haltHandlersOnError = false;

    self.emit(self._asm.currentState, function(err) {
      if (err) {
        if (isTerminalState(self)) {
          if (domain && self.domain instanceof domain.Domain) {
            err.domainEmitter = self;
            err.domain = self.domain;
            err.domainThrown = false;
            self.domain.emit('error', err);
          } else {
            throw err;
          }
        } else {
          self.response.error = err;
          done(err);
        }
      } else {
        done(self.response.error);
      }
    });

  };

  this.addState('validate', 'build', 'error', transition);
  this.addState('build', 'afterBuild', 'restart', transition);
  this.addState('afterBuild', 'sign', 'restart', transition);
  this.addState('sign', 'send', 'retry', transition);
  this.addState('retry', 'afterRetry', 'afterRetry', transition);
  this.addState('afterRetry', 'sign', 'error', transition);
  this.addState('send', 'validateResponse', 'retry', transition);
  this.addState('validateResponse', 'extractData', 'extractError', transition);
  this.addState('extractError', 'extractData', 'retry', transition);
  this.addState('extractData', 'success', 'retry', transition);
  this.addState('restart', 'build', 'error', transition);
  this.addState('success', 'complete', 'complete', transition);
  this.addState('error', 'complete', 'complete', transition);
  this.addState('complete', null, null, transition);
};
fsm.setupStates();

/**
 * ## Asynchronous Requests
 *
 * All requests made through the SDK are asynchronous and use a
 * callback interface. Each service method that kicks off a request
 * returns an `AWS.Request` object that you can use to register
 * callbacks.
 *
 * For example, the following service method returns the request
 * object as "request", which can be used to register callbacks:
 *
 * ```javascript
 * // request is an AWS.Request object
 * var request = ec2.describeInstances();
 *
 * // register callbacks on request to retrieve response data
 * request.on('success', function(response) {
 *   console.log(response.data);
 * });
 * ```
 *
 * When a request is ready to be sent, the {send} method should
 * be called:
 *
 * ```javascript
 * request.send();
 * ```
 *
 * Since registered callbacks may or may not be idempotent, requests should only
 * be sent once. To perform the same operation multiple times, you will need to
 * create multiple request objects, each with its own registered callbacks.
 *
 * ## Removing Default Listeners for Events
 *
 * Request objects are built with default listeners for the various events,
 * depending on the service type. In some cases, you may want to remove
 * some built-in listeners to customize behaviour. Doing this requires
 * access to the built-in listener functions, which are exposed through
 * the {AWS.EventListeners.Core} namespace. For instance, you may
 * want to customize the HTTP handler used when sending a request. In this
 * case, you can remove the built-in listener associated with the 'send'
 * event, the {AWS.EventListeners.Core.SEND} listener and add your own.
 *
 * ## Multiple Callbacks and Chaining
 *
 * You can register multiple callbacks on any request object. The
 * callbacks can be registered for different events, or all for the
 * same event. In addition, you can chain callback registration, for
 * example:
 *
 * ```javascript
 * request.
 *   on('success', function(response) {
 *     console.log("Success!");
 *   }).
 *   on('error', function(response) {
 *     console.log("Error!");
 *   }).
 *   on('complete', function(response) {
 *     console.log("Always!");
 *   }).
 *   send();
 * ```
 *
 * The above example will print either "Success! Always!", or "Error! Always!",
 * depending on whether the request succeeded or not.
 *
 * @!attribute httpRequest
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpRequest] the raw HTTP request object
 *     containing request headers and body information
 *     sent by the service.
 *
 * @!attribute startTime
 *   @readonly
 *   @!group Operation Properties
 *   @return [Date] the time that the request started
 *
 * @!group Request Building Events
 *
 * @!event validate(request)
 *   Triggered when a request is being validated. Listeners
 *   should throw an error if the request should not be sent.
 *   @param request [Request] the request object being sent
 *   @see AWS.EventListeners.Core.VALIDATE_CREDENTIALS
 *   @see AWS.EventListeners.Core.VALIDATE_REGION
 *   @example Ensuring that a certain parameter is set before sending a request
 *     var req = s3.putObject(params);
 *     req.on('validate', function() {
 *       if (!req.params.Body.match(/^Hello\s/)) {
 *         throw new Error('Body must start with "Hello "');
 *       }
 *     });
 *     req.send(function(err, data) { ... });
 *
 * @!event build(request)
 *   Triggered when the request payload is being built. Listeners
 *   should fill the necessary information to send the request
 *   over HTTP.
 *   @param (see AWS.Request~validate)
 *   @example Add a custom HTTP header to a request
 *     var req = s3.putObject(params);
 *     req.on('build', function() {
 *       req.httpRequest.headers['Custom-Header'] = 'value';
 *     });
 *     req.send(function(err, data) { ... });
 *
 * @!event sign(request)
 *   Triggered when the request is being signed. Listeners should
 *   add the correct authentication headers and/or adjust the body,
 *   depending on the authentication mechanism being used.
 *   @param (see AWS.Request~validate)
 *
 * @!group Request Sending Events
 *
 * @!event send(response)
 *   Triggered when the request is ready to be sent. Listeners
 *   should call the underlying transport layer to initiate
 *   the sending of the request.
 *   @param response [Response] the response object
 *   @context [Request] the request object that was sent
 *   @see AWS.EventListeners.Core.SEND
 *
 * @!event retry(response)
 *   Triggered when a request failed and might need to be retried or redirected.
 *   If the response is retryable, the listener should set the
 *   `response.error.retryable` property to `true`, and optionally set
 *   `response.error.retryDelay` to the millisecond delay for the next attempt.
 *   In the case of a redirect, `response.error.redirect` should be set to
 *   `true` with `retryDelay` set to an optional delay on the next request.
 *
 *   If a listener decides that a request should not be retried,
 *   it should set both `retryable` and `redirect` to false.
 *
 *   Note that a retryable error will be retried at most
 *   {AWS.Config.maxRetries} times (based on the service object's config).
 *   Similarly, a request that is redirected will only redirect at most
 *   {AWS.Config.maxRedirects} times.
 *
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @example Adding a custom retry for a 404 response
 *     request.on('retry', function(response) {
 *       // this resource is not yet available, wait 10 seconds to get it again
 *       if (response.httpResponse.statusCode === 404 && response.error) {
 *         response.error.retryable = true;   // retry this error
 *         response.error.retryDelay = 10000; // wait 10 seconds
 *       }
 *     });
 *
 * @!group Data Parsing Events
 *
 * @!event extractError(response)
 *   Triggered on all non-2xx requests so that listeners can extract
 *   error details from the response body. Listeners to this event
 *   should set the `response.error` property.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event extractData(response)
 *   Triggered in successful requests to allow listeners to
 *   de-serialize the response body into `response.data`.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group Completion Events
 *
 * @!event success(response)
 *   Triggered when the request completed successfully.
 *   `response.data` will contain the response data and
 *   `response.error` will be null.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event error(error, response)
 *   Triggered when an error occurs at any point during the
 *   request. `response.error` will contain details about the error
 *   that occurred. `response.data` will be null.
 *   @param error [Error] the error object containing details about
 *     the error that occurred.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event complete(response)
 *   Triggered whenever a request cycle completes. `response.error`
 *   should be checked, since the request may have failed.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group HTTP Events
 *
 * @!event httpHeaders(statusCode, headers, response, statusMessage)
 *   Triggered when headers are sent by the remote server
 *   @param statusCode [Integer] the HTTP response code
 *   @param headers [map<String,String>] the response headers
 *   @param (see AWS.Request~send)
 *   @param statusMessage [String] A status message corresponding to the HTTP
 *                                 response code
 *   @context (see AWS.Request~send)
 *
 * @!event httpData(chunk, response)
 *   Triggered when data is sent by the remote server
 *   @param chunk [Buffer] the buffer data containing the next data chunk
 *     from the server
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @see AWS.EventListeners.Core.HTTP_DATA
 *
 * @!event httpUploadProgress(progress, response)
 *   Triggered when the HTTP request has uploaded more data
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @note This event will not be emitted in Node.js 0.8.x.
 *
 * @!event httpDownloadProgress(progress, response)
 *   Triggered when the HTTP request has downloaded more data
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @note This event will not be emitted in Node.js 0.8.x.
 *
 * @!event httpError(error, response)
 *   Triggered when the HTTP request failed
 *   @param error [Error] the error object that was thrown
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event httpDone(response)
 *   Triggered when the server is finished sending data
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @see AWS.Response
 */
AWS.Request = inherit({

  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param service [AWS.Service] the service to perform the operation on
   * @param operation [String] the operation to perform on the service
   * @param params [Object] parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor: function Request(service, operation, params) {
    var endpoint = service.endpoint;
    var region = service.config.region;
    var customUserAgent = service.config.customUserAgent;

    // global endpoints sign as us-east-1
    if (service.isGlobalEndpoint) region = 'us-east-1';

    this.domain = domain && domain.active;
    this.service = service;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);
    this.httpRequest.appendToUserAgent(customUserAgent);
    this.startTime = service.getSkewCorrectedDate();

    this.response = new AWS.Response(this);
    this._asm = new AcceptorStateMachine(fsm.states, 'validate');
    this._haltHandlersOnError = false;

    AWS.SequentialExecutor.call(this);
    this.emit = this.emitEvent;
  },

  /**
   * @!group Sending a Request
   */

  /**
   * @overload send(callback = null)
   *   Sends the request object.
   *
   *   @callback callback function(err, data)
   *     If a callback is supplied, it is called when a response is returned
   *     from the service.
   *     @context [AWS.Request] the request object being sent.
   *     @param err [Error] the error object returned from the request.
   *       Set to `null` if the request is successful.
   *     @param data [Object] the de-serialized data returned from
   *       the request. Set to `null` if a request error occurs.
   *   @example Sending a request with a callback
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.send(function(err, data) { console.log(err, data); });
   *   @example Sending a request with no callback (using event handlers)
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.on('complete', function(response) { ... }); // register a callback
   *     request.send();
   */
  send: function send(callback) {
    if (callback) {
      // append to user agent
      this.httpRequest.appendToUserAgent('callback');
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    this.runTo();

    return this.response;
  },

  /**
   * @!method  promise()
   *   Sends the request and returns a 'thenable' promise.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(data)
   *     Called if the promise is fulfilled.
   *     @param data [Object] the de-serialized data returned from the request.
   *   @callback rejectedCallback function(error)
   *     Called if the promise is rejected.
   *     @param error [Error] the error object returned from the request.
   *   @return [Promise] A promise that represents the state of the request.
   *   @example Sending a request using promises.
   *     var request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     var result = request.promise();
   *     result.then(function(data) { ... }, function(error) { ... });
   */

  /**
   * @api private
   */
  build: function build(callback) {
    return this.runTo('send', callback);
  },

  /**
   * @api private
   */
  runTo: function runTo(state, done) {
    this._asm.runTo(state, done, this);
    return this;
  },

  /**
   * Aborts a request, emitting the error and complete events.
   *
   * @!macro nobrowser
   * @example Aborting a request after sending
   *   var params = {
   *     Bucket: 'bucket', Key: 'key',
   *     Body: new Buffer(1024 * 1024 * 5) // 5MB payload
   *   };
   *   var request = s3.putObject(params);
   *   request.send(function (err, data) {
   *     if (err) console.log("Error:", err.code, err.message);
   *     else console.log(data);
   *   });
   *
   *   // abort request in 1 second
   *   setTimeout(request.abort.bind(request), 1000);
   *
   *   // prints "Error: RequestAbortedError Request aborted by user"
   * @return [AWS.Request] the same request object, for chaining.
   * @since v1.4.0
   */
  abort: function abort() {
    this.removeAllListeners('validateResponse');
    this.removeAllListeners('extractError');
    this.on('validateResponse', function addAbortedError(resp) {
      resp.error = AWS.util.error(new Error('Request aborted by user'), {
         code: 'RequestAbortedError', retryable: false
      });
    });

    if (this.httpRequest.stream && !this.httpRequest.stream.didCallback) { // abort HTTP stream
      this.httpRequest.stream.abort();
      if (this.httpRequest._abortCallback) {
         this.httpRequest._abortCallback();
      } else {
        this.removeAllListeners('send'); // haven't sent yet, so let's not
      }
    }

    return this;
  },

  /**
   * Iterates over each page of results given a pageable request, calling
   * the provided callback with each page of data. After all pages have been
   * retrieved, the callback is called with `null` data.
   *
   * @note This operation can generate multiple requests to a service.
   * @example Iterating over multiple pages of objects in an S3 bucket
   *   var pages = 1;
   *   s3.listObjects().eachPage(function(err, data) {
   *     if (err) return;
   *     console.log("Page", pages++);
   *     console.log(data);
   *   });
   * @example Iterating over multiple pages with an asynchronous callback
   *   s3.listObjects(params).eachPage(function(err, data, done) {
   *     doSomethingAsyncAndOrExpensive(function() {
   *       // The next page of results isn't fetched until done is called
   *       done();
   *     });
   *   });
   * @callback callback function(err, data, [doneCallback])
   *   Called with each page of resulting data from the request. If the
   *   optional `doneCallback` is provided in the function, it must be called
   *   when the callback is complete.
   *
   *   @param err [Error] an error object, if an error occurred.
   *   @param data [Object] a single page of response data. If there is no
   *     more data, this object will be `null`.
   *   @param doneCallback [Function] an optional done callback. If this
   *     argument is defined in the function declaration, it should be called
   *     when the next page is ready to be retrieved. This is useful for
   *     controlling serial pagination across asynchronous operations.
   *   @return [Boolean] if the callback returns `false`, pagination will
   *     stop.
   *
   * @see AWS.Request.eachItem
   * @see AWS.Response.nextPage
   * @since v1.4.0
   */
  eachPage: function eachPage(callback) {
    // Make all callbacks async-ish
    callback = AWS.util.fn.makeAsync(callback, 3);

    function wrappedCallback(response) {
      callback.call(response, response.error, response.data, function (result) {
        if (result === false) return;

        if (response.hasNextPage()) {
          response.nextPage().on('complete', wrappedCallback).send();
        } else {
          callback.call(response, null, null, AWS.util.fn.noop);
        }
      });
    }

    this.on('complete', wrappedCallback).send();
  },

  /**
   * Enumerates over individual items of a request, paging the responses if
   * necessary.
   *
   * @api experimental
   * @since v1.4.0
   */
  eachItem: function eachItem(callback) {
    var self = this;
    function wrappedCallback(err, data) {
      if (err) return callback(err, null);
      if (data === null) return callback(null, null);

      var config = self.service.paginationConfig(self.operation);
      var resultKey = config.resultKey;
      if (Array.isArray(resultKey)) resultKey = resultKey[0];
      var items = jmespath.search(data, resultKey);
      var continueIteration = true;
      AWS.util.arrayEach(items, function(item) {
        continueIteration = callback(null, item);
        if (continueIteration === false) {
          return AWS.util.abort;
        }
      });
      return continueIteration;
    }

    this.eachPage(wrappedCallback);
  },

  /**
   * @return [Boolean] whether the operation can return multiple pages of
   *   response data.
   * @see AWS.Response.eachPage
   * @since v1.4.0
   */
  isPageable: function isPageable() {
    return this.service.paginationConfig(this.operation) ? true : false;
  },

  /**
   * Sends the request and converts the request object into a readable stream
   * that can be read from or piped into a writable stream.
   *
   * @note The data read from a readable stream contains only
   *   the raw HTTP body contents.
   * @example Manually reading from a stream
   *   request.createReadStream().on('data', function(data) {
   *     console.log("Got data:", data.toString());
   *   });
   * @example Piping a request body into a file
   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
   *   s3.service.getObject(params).createReadStream().pipe(out);
   * @return [Stream] the readable stream object that can be piped
   *   or read from (by registering 'data' event listeners).
   * @!macro nobrowser
   */
  createReadStream: function createReadStream() {
    var streams = AWS.util.stream;
    var req = this;
    var stream = null;

    if (AWS.HttpClient.streamsApiVersion === 2) {
      stream = new streams.PassThrough();
      process.nextTick(function() { req.send(); });
    } else {
      stream = new streams.Stream();
      stream.readable = true;

      stream.sent = false;
      stream.on('newListener', function(event) {
        if (!stream.sent && event === 'data') {
          stream.sent = true;
          process.nextTick(function() { req.send(); });
        }
      });
    }

    this.on('error', function(err) {
      stream.emit('error', err);
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error) {
          resp.error = error;
          resp.error.retryable = false;
        });

        var shouldCheckContentLength = false;
        var expectedLen;
        if (req.httpRequest.method !== 'HEAD') {
          expectedLen = parseInt(headers['content-length'], 10);
        }
        if (expectedLen !== undefined && !isNaN(expectedLen) && expectedLen >= 0) {
          shouldCheckContentLength = true;
          var receivedLen = 0;
        }

        var checkContentLengthAndEmit = function checkContentLengthAndEmit() {
          if (shouldCheckContentLength && receivedLen !== expectedLen) {
            stream.emit('error', AWS.util.error(
              new Error('Stream content length mismatch. Received ' +
                receivedLen + ' of ' + expectedLen + ' bytes.'),
              { code: 'StreamContentLengthMismatch' }
            ));
          } else if (AWS.HttpClient.streamsApiVersion === 2) {
            stream.end();
          } else {
            stream.emit('end');
          }
        };

        var httpStream = resp.httpResponse.createUnbufferedStream();

        if (AWS.HttpClient.streamsApiVersion === 2) {
          if (shouldCheckContentLength) {
            var lengthAccumulator = new streams.PassThrough();
            lengthAccumulator._write = function(chunk) {
              if (chunk && chunk.length) {
                receivedLen += chunk.length;
              }
              return streams.PassThrough.prototype._write.apply(this, arguments);
            };

            lengthAccumulator.on('end', checkContentLengthAndEmit);
            stream.on('error', function(err) {
              shouldCheckContentLength = false;
              httpStream.unpipe(lengthAccumulator);
              lengthAccumulator.emit('end');
              lengthAccumulator.end();
            });
            httpStream.pipe(lengthAccumulator).pipe(stream, { end: false });
          } else {
            httpStream.pipe(stream);
          }
        } else {

          if (shouldCheckContentLength) {
            httpStream.on('data', function(arg) {
              if (arg && arg.length) {
                receivedLen += arg.length;
              }
            });
          }

          httpStream.on('data', function(arg) {
            stream.emit('data', arg);
          });
          httpStream.on('end', checkContentLengthAndEmit);
        }

        httpStream.on('error', function(err) {
          shouldCheckContentLength = false;
          stream.emit('error', err);
        });
      }
    });

    return stream;
  },

  /**
   * @param [Array,Response] args This should be the response object,
   *   or an array of args to send to the event.
   * @api private
   */
  emitEvent: function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = function() { };
    if (!args) args = this.eventParameters(eventName, this.response);

    var origEmit = AWS.SequentialExecutor.prototype.emit;
    origEmit.call(this, eventName, args, function (err) {
      if (err) this.response.error = err;
      done.call(this, err);
    });
  },

  /**
   * @api private
   */
  eventParameters: function eventParameters(eventName) {
    switch (eventName) {
      case 'restart':
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterValidate':
      case 'afterBuild':
        return [this];
      case 'error':
        return [this.response.error, this.response];
      default:
        return [this.response];
    }
  },

  /**
   * @api private
   */
  presign: function presign(expires, callback) {
    if (!callback && typeof expires === 'function') {
      callback = expires;
      expires = null;
    }
    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
  },

  /**
   * @api private
   */
  isPresigned: function isPresigned() {
    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, 'presigned-expires');
  },

  /**
   * @api private
   */
  toUnauthenticated: function toUnauthenticated() {
    this._unAuthenticated = true;
    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
    return this;
  },

  /**
   * @api private
   */
  toGet: function toGet() {
    if (this.service.api.protocol === 'query' ||
        this.service.api.protocol === 'ec2') {
      this.removeListener('build', this.buildAsGet);
      this.addListener('build', this.buildAsGet);
    }
    return this;
  },

  /**
   * @api private
   */
  buildAsGet: function buildAsGet(request) {
    request.httpRequest.method = 'GET';
    request.httpRequest.path = request.service.endpoint.path +
                               '?' + request.httpRequest.body;
    request.httpRequest.body = '';

    // don't need these headers on a GET request
    delete request.httpRequest.headers['Content-Length'];
    delete request.httpRequest.headers['Content-Type'];
  },

  /**
   * @api private
   */
  haltHandlersOnError: function haltHandlersOnError() {
    this._haltHandlersOnError = true;
  }
});

/**
 * @api private
 */
AWS.Request.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.promise = function promise() {
    var self = this;
    // append to user agent
    this.httpRequest.appendToUserAgent('promise');
    return new PromiseDependency(function(resolve, reject) {
      self.on('complete', function(resp) {
        if (resp.error) {
          reject(resp.error);
        } else {
          // define $response property so that it is not enumberable
          // this prevents circular reference errors when stringifying the JSON object
          resolve(Object.defineProperty(
            resp.data || {},
            '$response',
            {value: resp}
          ));
        }
      });
      self.runTo();
    });
  };
};

/**
 * @api private
 */
AWS.Request.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.promise;
};

AWS.util.addPromises(AWS.Request);

AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 70 */
/***/ (function(module, exports) {

function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  var self = this;
  var state = self.states[self.currentState];
  state.fn.call(bindObject || self, inputError, function(err) {
    if (err) {
      if (state.fail) self.currentState = state.fail;
      else return done ? done.call(bindObject, err) : null;
    } else {
      if (state.accept) self.currentState = state.accept;
      else return done ? done.call(bindObject) : null;
    }
    if (self.currentState === finalState) {
      return done ? done.call(bindObject, err) : null;
    }

    self.runTo(finalState, done, bindObject, err);
  });
};

AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
  if (typeof acceptState === 'function') {
    fn = acceptState; acceptState = null; failState = null;
  } else if (typeof failState === 'function') {
    fn = failState; failState = null;
  }

  if (!this.currentState) this.currentState = name;
  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
  return this;
};

/**
 * @api private
 */
module.exports = AcceptorStateMachine;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;
var jmespath = __webpack_require__(18);

/**
 * This class encapsulates the response information
 * from a service request operation sent through {AWS.Request}.
 * The response object has two main properties for getting information
 * back from a request:
 *
 * ## The `data` property
 *
 * The `response.data` property contains the serialized object data
 * retrieved from the service request. For instance, for an
 * Amazon DynamoDB `listTables` method call, the response data might
 * look like:
 *
 * ```
 * > resp.data
 * { TableNames:
 *    [ 'table1', 'table2', ... ] }
 * ```
 *
 * The `data` property can be null if an error occurs (see below).
 *
 * ## The `error` property
 *
 * In the event of a service error (or transfer error), the
 * `response.error` property will be filled with the given
 * error data in the form:
 *
 * ```
 * { code: 'SHORT_UNIQUE_ERROR_CODE',
 *   message: 'Some human readable error message' }
 * ```
 *
 * In the case of an error, the `data` property will be `null`.
 * Note that if you handle events that can be in a failure state,
 * you should always check whether `response.error` is set
 * before attempting to access the `response.data` property.
 *
 * @!attribute data
 *   @readonly
 *   @!group Data Properties
 *   @note Inside of a {AWS.Request~httpData} event, this
 *     property contains a single raw packet instead of the
 *     full de-serialized service response.
 *   @return [Object] the de-serialized response data
 *     from the service.
 *
 * @!attribute error
 *   An structure containing information about a service
 *   or networking error.
 *   @readonly
 *   @!group Data Properties
 *   @note This attribute is only filled if a service or
 *     networking error occurs.
 *   @return [Error]
 *     * code [String] a unique short code representing the
 *       error that was emitted.
 *     * message [String] a longer human readable error message
 *     * retryable [Boolean] whether the error message is
 *       retryable.
 *     * statusCode [Numeric] in the case of a request that reached the service,
 *       this value contains the response status code.
 *     * time [Date] the date time object when the error occurred.
 *     * hostname [String] set when a networking error occurs to easily
 *       identify the endpoint of the request.
 *     * region [String] set when a networking error occurs to easily
 *       identify the region of the request.
 *
 * @!attribute requestId
 *   @readonly
 *   @!group Data Properties
 *   @return [String] the unique request ID associated with the response.
 *     Log this value when debugging requests for AWS support.
 *
 * @!attribute retryCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of retries that were
 *     attempted before the request was completed.
 *
 * @!attribute redirectCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of redirects that were
 *     followed before the request was completed.
 *
 * @!attribute httpResponse
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpResponse] the raw HTTP response object
 *     containing the response headers and body information
 *     from the server.
 *
 * @see AWS.Request
 */
AWS.Response = inherit({

  /**
   * @api private
   */
  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new AWS.HttpResponse();
    if (request) {
      this.maxRetries = request.service.numRetries();
      this.maxRedirects = request.service.config.maxRedirects;
    }
  },

  /**
   * Creates a new request for the next page of response data, calling the
   * callback with the page data if a callback is provided.
   *
   * @callback callback function(err, data)
   *   Called when a page of data is returned from the next request.
   *
   *   @param err [Error] an error object, if an error occurred in the request
   *   @param data [Object] the next page of data, or null, if there are no
   *     more pages left.
   * @return [AWS.Request] the request object for the next page of data
   * @return [null] if no callback is provided and there are no pages left
   *   to retrieve.
   * @since v1.4.0
   */
  nextPage: function nextPage(callback) {
    var config;
    var service = this.request.service;
    var operation = this.request.operation;
    try {
      config = service.paginationConfig(operation, true);
    } catch (e) { this.error = e; }

    if (!this.hasNextPage()) {
      if (callback) callback(this.error, null);
      else if (this.error) throw this.error;
      return null;
    }

    var params = AWS.util.copy(this.request.params);
    if (!this.nextPageTokens) {
      return callback ? callback(null, null) : null;
    } else {
      var inputTokens = config.inputToken;
      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
      for (var i = 0; i < inputTokens.length; i++) {
        params[inputTokens[i]] = this.nextPageTokens[i];
      }
      return service.makeRequest(this.request.operation, params, callback);
    }
  },

  /**
   * @return [Boolean] whether more pages of data can be returned by further
   *   requests
   * @since v1.4.0
   */
  hasNextPage: function hasNextPage() {
    this.cacheNextPageTokens();
    if (this.nextPageTokens) return true;
    if (this.nextPageTokens === undefined) return undefined;
    else return false;
  },

  /**
   * @api private
   */
  cacheNextPageTokens: function cacheNextPageTokens() {
    if (Object.prototype.hasOwnProperty.call(this, 'nextPageTokens')) return this.nextPageTokens;
    this.nextPageTokens = undefined;

    var config = this.request.service.paginationConfig(this.request.operation);
    if (!config) return this.nextPageTokens;

    this.nextPageTokens = null;
    if (config.moreResults) {
      if (!jmespath.search(this.data, config.moreResults)) {
        return this.nextPageTokens;
      }
    }

    var exprs = config.outputToken;
    if (typeof exprs === 'string') exprs = [exprs];
    AWS.util.arrayEach.call(this, exprs, function (expr) {
      var output = jmespath.search(this.data, expr);
      if (output) {
        this.nextPageTokens = this.nextPageTokens || [];
        this.nextPageTokens.push(output);
      }
    });

    return this.nextPageTokens;
  }

});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;
var jmespath = __webpack_require__(18);

/**
 * @api private
 */
function CHECK_ACCEPTORS(resp) {
  var waiter = resp.request._waiter;
  var acceptors = waiter.config.acceptors;
  var acceptorMatched = false;
  var state = 'retry';

  acceptors.forEach(function(acceptor) {
    if (!acceptorMatched) {
      var matcher = waiter.matchers[acceptor.matcher];
      if (matcher && matcher(resp, acceptor.expected, acceptor.argument)) {
        acceptorMatched = true;
        state = acceptor.state;
      }
    }
  });

  if (!acceptorMatched && resp.error) state = 'failure';

  if (state === 'success') {
    waiter.setSuccess(resp);
  } else {
    waiter.setError(resp, state === 'retry');
  }
}

/**
 * @api private
 */
AWS.ResourceWaiter = inherit({
  /**
   * Waits for a given state on a service object
   * @param service [Service] the service object to wait on
   * @param state [String] the state (defined in waiter configuration) to wait
   *   for.
   * @example Create a waiter for running EC2 instances
   *   var ec2 = new AWS.EC2;
   *   var waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
   */
  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;
    this.loadWaiterConfig(this.state);
  },

  service: null,

  state: null,

  config: null,

  matchers: {
    path: function(resp, expected, argument) {
      try {
        var result = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      return jmespath.strictDeepEqual(result,expected);
    },

    pathAll: function(resp, expected, argument) {
      try {
        var results = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      if (!Array.isArray(results)) results = [results];
      var numResults = results.length;
      if (!numResults) return false;
      for (var ind = 0 ; ind < numResults; ind++) {
        if (!jmespath.strictDeepEqual(results[ind], expected)) {
          return false;
        }
      }
      return true;
    },

    pathAny: function(resp, expected, argument) {
      try {
        var results = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      if (!Array.isArray(results)) results = [results];
      var numResults = results.length;
      for (var ind = 0 ; ind < numResults; ind++) {
        if (jmespath.strictDeepEqual(results[ind], expected)) {
          return true;
        }
      }
      return false;
    },

    status: function(resp, expected) {
      var statusCode = resp.httpResponse.statusCode;
      return (typeof statusCode === 'number') && (statusCode === expected);
    },

    error: function(resp, expected) {
      if (typeof expected === 'string' && resp.error) {
        return expected === resp.error.code;
      }
      // if expected is not string, can be boolean indicating presence of error
      return expected === !!resp.error;
    }
  },

  listeners: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    add('RETRY_CHECK', 'retry', function(resp) {
      var waiter = resp.request._waiter;
      if (resp.error && resp.error.code === 'ResourceNotReady') {
        resp.error.retryDelay = (waiter.config.delay || 0) * 1000;
      }
    });

    add('CHECK_OUTPUT', 'extractData', CHECK_ACCEPTORS);

    add('CHECK_ERROR', 'extractError', CHECK_ACCEPTORS);
  }),

  /**
   * @return [AWS.Request]
   */
  wait: function wait(params, callback) {
    if (typeof params === 'function') {
      callback = params; params = undefined;
    }

    if (params && params.$waiter) {
      params = AWS.util.copy(params);
      if (typeof params.$waiter.delay === 'number') {
        this.config.delay = params.$waiter.delay;
      }
      if (typeof params.$waiter.maxAttempts === 'number') {
        this.config.maxAttempts = params.$waiter.maxAttempts;
      }
      delete params.$waiter;
    }

    var request = this.service.makeRequest(this.config.operation, params);
    request._waiter = this;
    request.response.maxRetries = this.config.maxAttempts;
    request.addListeners(this.listeners);

    if (callback) request.send(callback);
    return request;
  },

  setSuccess: function setSuccess(resp) {
    resp.error = null;
    resp.data = resp.data || {};
    resp.request.removeAllListeners('extractData');
  },

  setError: function setError(resp, retryable) {
    resp.data = null;
    resp.error = AWS.util.error(resp.error || new Error(), {
      code: 'ResourceNotReady',
      message: 'Resource is not in the state ' + this.state,
      retryable: retryable
    });
  },

  /**
   * Loads waiter configuration from API configuration
   *
   * @api private
   */
  loadWaiterConfig: function loadWaiterConfig(state) {
    if (!this.service.api.waiters[state]) {
      throw new AWS.util.error(new Error(), {
        code: 'StateNotFoundError',
        message: 'State ' + state + ' not found.'
      });
    }

    this.config = AWS.util.copy(this.service.api.waiters[state]);
  }
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  },

  setServiceClientId: function setServiceClientId(id) {
    this.serviceClientId = id;
  },

  getServiceClientId: function getServiceClientId() {
    return this.serviceClientId;
  }
});

AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
  switch (version) {
    case 'v2': return AWS.Signers.V2;
    case 'v3': return AWS.Signers.V3;
    case 'v4': return AWS.Signers.V4;
    case 's3': return AWS.Signers.S3;
    case 'v3https': return AWS.Signers.V3Https;
  }
  throw new Error('Unknown signing version ' + version);
};

__webpack_require__(74);
__webpack_require__(35);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(78);
__webpack_require__(79);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.Timestamp = AWS.util.date.iso8601(date);
    r.params.SignatureVersion = '2';
    r.params.SignatureMethod = 'HmacSHA256';
    r.params.AWSAccessKeyId = credentials.accessKeyId;

    if (credentials.sessionToken) {
      r.params.SecurityToken = credentials.sessionToken;
    }

    delete r.params.Signature; // delete old Signature for re-signing
    r.params.Signature = this.signature(credentials);

    r.body = AWS.util.queryParamsToString(r.params);
    r.headers['Content-Length'] = r.body.length;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.endpoint.host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(AWS.util.queryParamsToString(this.request.params));
    return parts.join('\n');
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V2;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

__webpack_require__(35);

/**
 * @api private
 */
AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
  authorization: function authorization(credentials) {
    return 'AWS3-HTTPS ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'Signature=' + this.signature(credentials);
  },

  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.V3Https;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var v4Credentials = __webpack_require__(77);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
var expiresHeader = 'presigned-expires';

/**
 * @api private
 */
AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName, options) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
    options = options || {};
    this.signatureCache = typeof options.signatureCache === 'boolean' ? options.signatureCache : true;
    this.operation = options.operation;
  },

  algorithm: 'AWS4-HMAC-SHA256',

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

    if (this.isPresigned()) {
      this.updateForPresigned(credentials, datetime);
    } else {
      this.addHeaders(credentials, datetime);
    }

    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  updateForPresigned: function updateForPresigned(credentials, datetime) {
    var credString = this.credentialString(datetime);
    var qs = {
      'X-Amz-Date': datetime,
      'X-Amz-Algorithm': this.algorithm,
      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
      'X-Amz-Expires': this.request.headers[expiresHeader],
      'X-Amz-SignedHeaders': this.signedHeaders()
    };

    if (credentials.sessionToken) {
      qs['X-Amz-Security-Token'] = credentials.sessionToken;
    }

    if (this.request.headers['Content-Type']) {
      qs['Content-Type'] = this.request.headers['Content-Type'];
    }
    if (this.request.headers['Content-MD5']) {
      qs['Content-MD5'] = this.request.headers['Content-MD5'];
    }
    if (this.request.headers['Cache-Control']) {
      qs['Cache-Control'] = this.request.headers['Cache-Control'];
    }

    // need to pull in any other X-Amz-* headers
    AWS.util.each.call(this, this.request.headers, function(key, value) {
      if (key === expiresHeader) return;
      if (this.isSignableHeader(key)) {
        var lowerKey = key.toLowerCase();
        // Metadata should be normalized
        if (lowerKey.indexOf('x-amz-meta-') === 0) {
          qs[lowerKey] = value;
        } else if (lowerKey.indexOf('x-amz-') === 0) {
          qs[key] = value;
        }
      }
    });

    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
    this.request.path += sep + AWS.util.queryParamsToString(qs);
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push(this.algorithm + ' Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var signingKey = v4Credentials.getSigningKey(
      credentials,
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName,
      this.signatureCache
    );
    return AWS.util.crypto.hmac(signingKey, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [], pathname = this.request.pathname();
    if (this.serviceName !== 's3') pathname = AWS.util.uriEscapePath(pathname);

    parts.push(this.request.method);
    parts.push(pathname);
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedBodyHash());
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      var key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        var value = item[1];
        if (typeof value === 'undefined' || value === null || typeof value.toString !== 'function') {
          throw AWS.util.error(new Error('Header ' + key + ' contains invalid value'), {
            code: 'InvalidHeader'
          });
        }
        parts.push(key + ':' +
          this.canonicalHeaderValues(value.toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    return v4Credentials.createScope(
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  },

  hexEncodedBodyHash: function hexEncodedBodyHash() {
    var request = this.request;
    if (this.isPresigned() && this.serviceName === 's3' && !request.body) {
      return 'UNSIGNED-PAYLOAD';
    } else if (request.headers['X-Amz-Content-Sha256']) {
      return request.headers['X-Amz-Content-Sha256'];
    } else {
      return this.hexEncodedHash(this.request.body || '');
    }
  },

  unsignableHeaders: [
    'authorization',
    'content-type',
    'content-length',
    'user-agent',
    expiresHeader,
    'expect',
    'x-amzn-trace-id'
  ],

  isSignableHeader: function isSignableHeader(key) {
    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
    return this.unsignableHeaders.indexOf(key) < 0;
  },

  isPresigned: function isPresigned() {
    return this.request.headers[expiresHeader] ? true : false;
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V4;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * @api private
 */
var cachedSecret = {};

/**
 * @api private
 */
var cacheQueue = [];

/**
 * @api private
 */
var maxCacheEntries = 50;

/**
 * @api private
 */
var v4Identifier = 'aws4_request';

/**
 * @api private
 */
module.exports = {
  /**
   * @api private
   *
   * @param date [String]
   * @param region [String]
   * @param serviceName [String]
   * @return [String]
   */
  createScope: function createScope(date, region, serviceName) {
    return [
      date.substr(0, 8),
      region,
      serviceName,
      v4Identifier
    ].join('/');
  },

  /**
   * @api private
   *
   * @param credentials [Credentials]
   * @param date [String]
   * @param region [String]
   * @param service [String]
   * @param shouldCache [Boolean]
   * @return [String]
   */
  getSigningKey: function getSigningKey(
    credentials,
    date,
    region,
    service,
    shouldCache
  ) {
    var credsIdentifier = AWS.util.crypto
      .hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
    var cacheKey = [credsIdentifier, date, region, service].join('_');
    shouldCache = shouldCache !== false;
    if (shouldCache && (cacheKey in cachedSecret)) {
      return cachedSecret[cacheKey];
    }

    var kDate = AWS.util.crypto.hmac(
      'AWS4' + credentials.secretAccessKey,
      date,
      'buffer'
    );
    var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
    var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');

    var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');
    if (shouldCache) {
      cachedSecret[cacheKey] = signingKey;
      cacheQueue.push(cacheKey);
      if (cacheQueue.length > maxCacheEntries) {
        // remove the oldest entry (not the least recently used)
        delete cachedSecret[cacheQueue.shift()];
      }
    }

    return signingKey;
  },

  /**
   * @api private
   *
   * Empties the derived signing key cache. Made available for testing purposes
   * only.
   */
  emptyCache: function emptyCache() {
    cachedSecret = {};
    cacheQueue = [];
  }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
  /**
   * When building the stringToSign, these sub resource params should be
   * part of the canonical resource string with their NON-decoded values
   */
  subResources: {
    'acl': 1,
    'accelerate': 1,
    'analytics': 1,
    'cors': 1,
    'lifecycle': 1,
    'delete': 1,
    'inventory': 1,
    'location': 1,
    'logging': 1,
    'metrics': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'replication': 1,
    'restore': 1,
    'tagging': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1
  },

  // when building the stringToSign, these querystring params should be
  // part of the canonical resource string with their NON-encoded values
  responseHeaders: {
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {
    if (!this.request.headers['presigned-expires']) {
      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
    }

    if (credentials.sessionToken) {
      // presigned URLs require this header to be lowercased
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    this.request.headers['Authorization'] = auth;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');

    // This is the "Date" header, but we use X-Amz-Date.
    // The S3 signing mechanism requires us to pass an empty
    // string for this Date header regardless.
    parts.push(r.headers['presigned-expires'] || '');

    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.path.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      // collect a list of sub resources and query params that need to be signed
      var resources = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        if (this.subResources[name] || this.responseHeaders[name]) {
          var subresource = { name: name };
          if (value !== undefined) {
            if (this.subResources[name]) {
              subresource.value = value;
            } else {
              subresource.value = decodeURIComponent(value);
            }
          }
          resources.push(subresource);
        }
      });

      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

      if (resources.length) {

        querystring = [];
        AWS.util.arrayEach(resources, function (res) {
          if (res.value === undefined) {
            querystring.push(res.name);
          } else {
            querystring.push(res.name + '=' + res.value);
          }
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.S3;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
var expiresHeader = 'presigned-expires';

/**
 * @api private
 */
function signedUrlBuilder(request) {
  var expires = request.httpRequest.headers[expiresHeader];
  var signerClass = request.service.getSignerClass(request);

  delete request.httpRequest.headers['User-Agent'];
  delete request.httpRequest.headers['X-Amz-User-Agent'];

  if (signerClass === AWS.Signers.V4) {
    if (expires > 604800) { // one week expiry is invalid
      var message = 'Presigning does not support expiry time greater ' +
                    'than a week with SigV4 signing.';
      throw AWS.util.error(new Error(), {
        code: 'InvalidExpiryTime', message: message, retryable: false
      });
    }
    request.httpRequest.headers[expiresHeader] = expires;
  } else if (signerClass === AWS.Signers.S3) {
    var now = request.service ? request.service.getSkewCorrectedDate() : AWS.util.date.getDate();
    request.httpRequest.headers[expiresHeader] = parseInt(
      AWS.util.date.unixTimestamp(now) + expires, 10).toString();
  } else {
    throw AWS.util.error(new Error(), {
      message: 'Presigning only supports S3 or SigV4 signing.',
      code: 'UnsupportedSigner', retryable: false
    });
  }
}

/**
 * @api private
 */
function signedUrlSigner(request) {
  var endpoint = request.httpRequest.endpoint;
  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
  var queryParams = {};

  if (parsedUrl.search) {
    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
  }

  var auth = request.httpRequest.headers['Authorization'].split(' ');
  if (auth[0] === 'AWS') {
    auth = auth[1].split(':');
    queryParams['AWSAccessKeyId'] = auth[0];
    queryParams['Signature'] = auth[1];

    AWS.util.each(request.httpRequest.headers, function (key, value) {
      if (key === expiresHeader) key = 'Expires';
      if (key.indexOf('x-amz-meta-') === 0) {
        // Delete existing, potentially not normalized key
        delete queryParams[key];
        key = key.toLowerCase();
      }
      queryParams[key] = value;
    });
    delete request.httpRequest.headers[expiresHeader];
    delete queryParams['Authorization'];
    delete queryParams['Host'];
  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
    auth.shift();
    var rest = auth.join(' ');
    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
    queryParams['X-Amz-Signature'] = signature;
    delete queryParams['Expires'];
  }

  // build URL
  endpoint.pathname = parsedUrl.pathname;
  endpoint.search = AWS.util.queryParamsToString(queryParams);
}

/**
 * @api private
 */
AWS.Signers.Presign = inherit({
  /**
   * @api private
   */
  sign: function sign(request, expireTime, callback) {
    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
    request.on('build', signedUrlBuilder);
    request.on('sign', signedUrlSigner);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.SET_CONTENT_LENGTH);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.COMPUTE_SHA256);

    request.emit('beforePresign', [request]);

    if (callback) {
      request.build(function() {
        if (this.response.error) callback(this.response.error);
        else {
          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
        }
      });
    } else {
      request.build();
      if (request.response.error) throw request.response.error;
      return AWS.util.urlFormat(request.httpRequest.endpoint);
    }
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.Presign;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * @api private
 */
AWS.ParamValidator = AWS.util.inherit({
  /**
   * Create a new validator object.
   *
   * @param validation [Boolean|map] whether input parameters should be
   *     validated against the operation description before sending the
   *     request. Pass a map to enable any of the following specific
   *     validation features:
   *
   *     * **min** [Boolean] &mdash; Validates that a value meets the min
   *       constraint. This is enabled by default when paramValidation is set
   *       to `true`.
   *     * **max** [Boolean] &mdash; Validates that a value meets the max
   *       constraint.
   *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
   *       regular expression.
   *     * **enum** [Boolean] &mdash; Validates that a string value matches one
   *       of the allowable enum values.
   */
  constructor: function ParamValidator(validation) {
    if (validation === true || validation === undefined) {
      validation = {'min': true};
    }
    this.validation = validation;
  },

  validate: function validate(shape, params, context) {
    this.errors = [];
    this.validateMember(shape, params || {}, context || 'params');

    if (this.errors.length > 1) {
      var msg = this.errors.join('\n* ');
      msg = 'There were ' + this.errors.length +
        ' validation errors:\n* ' + msg;
      throw AWS.util.error(new Error(msg),
        {code: 'MultipleValidationErrors', errors: this.errors});
    } else if (this.errors.length === 1) {
      throw this.errors[0];
    } else {
      return true;
    }
  },

  fail: function fail(code, message) {
    this.errors.push(AWS.util.error(new Error(message), {code: code}));
  },

  validateStructure: function validateStructure(shape, params, context) {
    this.validateType(params, context, ['object'], 'structure');

    var paramName;
    for (var i = 0; shape.required && i < shape.required.length; i++) {
      paramName = shape.required[i];
      var value = params[paramName];
      if (value === undefined || value === null) {
        this.fail('MissingRequiredParameter',
          'Missing required key \'' + paramName + '\' in ' + context);
      }
    }

    // validate hash members
    for (paramName in params) {
      if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;

      var paramValue = params[paramName],
          memberShape = shape.members[paramName];

      if (memberShape !== undefined) {
        var memberContext = [context, paramName].join('.');
        this.validateMember(memberShape, paramValue, memberContext);
      } else {
        this.fail('UnexpectedParameter',
          'Unexpected key \'' + paramName + '\' found in ' + context);
      }
    }

    return true;
  },

  validateMember: function validateMember(shape, param, context) {
    switch (shape.type) {
      case 'structure':
        return this.validateStructure(shape, param, context);
      case 'list':
        return this.validateList(shape, param, context);
      case 'map':
        return this.validateMap(shape, param, context);
      default:
        return this.validateScalar(shape, param, context);
    }
  },

  validateList: function validateList(shape, params, context) {
    if (this.validateType(params, context, [Array])) {
      this.validateRange(shape, params.length, context, 'list member count');
      // validate array members
      for (var i = 0; i < params.length; i++) {
        this.validateMember(shape.member, params[i], context + '[' + i + ']');
      }
    }
  },

  validateMap: function validateMap(shape, params, context) {
    if (this.validateType(params, context, ['object'], 'map')) {
      // Build up a count of map members to validate range traits.
      var mapCount = 0;
      for (var param in params) {
        if (!Object.prototype.hasOwnProperty.call(params, param)) continue;
        // Validate any map key trait constraints
        this.validateMember(shape.key, param,
                            context + '[key=\'' + param + '\']')
        this.validateMember(shape.value, params[param],
                            context + '[\'' + param + '\']');
        mapCount++;
      }
      this.validateRange(shape, mapCount, context, 'map member count');
    }
  },

  validateScalar: function validateScalar(shape, value, context) {
    switch (shape.type) {
      case null:
      case undefined:
      case 'string':
        return this.validateString(shape, value, context);
      case 'base64':
      case 'binary':
        return this.validatePayload(value, context);
      case 'integer':
      case 'float':
        return this.validateNumber(shape, value, context);
      case 'boolean':
        return this.validateType(value, context, ['boolean']);
      case 'timestamp':
        return this.validateType(value, context, [Date,
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
          'Date object, ISO-8601 string, or a UNIX timestamp');
      default:
        return this.fail('UnkownType', 'Unhandled type ' +
                         shape.type + ' for ' + context);
    }
  },

  validateString: function validateString(shape, value, context) {
    var validTypes = ['string'];
    if (shape.isJsonValue) {
      validTypes = validTypes.concat(['number', 'object', 'boolean']);
    }
    if (value !== null && this.validateType(value, context, validTypes)) {
      this.validateEnum(shape, value, context);
      this.validateRange(shape, value.length, context, 'string length');
      this.validatePattern(shape, value, context);
      this.validateUri(shape, value, context);
    }
  },

  validateUri: function validateUri(shape, value, context) {
    if (shape['location'] === 'uri') {
      if (value.length === 0) {
        this.fail('UriParameterError', 'Expected uri parameter to have length >= 1,'
          + ' but found "' + value +'" for ' + context);
      }
    }
  },

  validatePattern: function validatePattern(shape, value, context) {
    if (this.validation['pattern'] && shape['pattern'] !== undefined) {
      if (!(new RegExp(shape['pattern'])).test(value)) {
        this.fail('PatternMatchError', 'Provided value "' + value + '" '
          + 'does not match regex pattern /' + shape['pattern'] + '/ for '
          + context);
      }
    }
  },

  validateRange: function validateRange(shape, value, context, descriptor) {
    if (this.validation['min']) {
      if (shape['min'] !== undefined && value < shape['min']) {
        this.fail('MinRangeError', 'Expected ' + descriptor + ' >= '
          + shape['min'] + ', but found ' + value + ' for ' + context);
      }
    }
    if (this.validation['max']) {
      if (shape['max'] !== undefined && value > shape['max']) {
        this.fail('MaxRangeError', 'Expected ' + descriptor + ' <= '
          + shape['max'] + ', but found ' + value + ' for ' + context);
      }
    }
  },

  validateEnum: function validateRange(shape, value, context) {
    if (this.validation['enum'] && shape['enum'] !== undefined) {
      // Fail if the string value is not present in the enum list
      if (shape['enum'].indexOf(value) === -1) {
        this.fail('EnumError', 'Found string value of ' + value + ', but '
          + 'expected ' + shape['enum'].join('|') + ' for ' + context);
      }
    }
  },

  validateType: function validateType(value, context, acceptedTypes, type) {
    // We will not log an error for null or undefined, but we will return
    // false so that callers know that the expected type was not strictly met.
    if (value === null || value === undefined) return false;

    var foundInvalidType = false;
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (typeof acceptedTypes[i] === 'string') {
        if (typeof value === acceptedTypes[i]) return true;
      } else if (acceptedTypes[i] instanceof RegExp) {
        if ((value || '').toString().match(acceptedTypes[i])) return true;
      } else {
        if (value instanceof acceptedTypes[i]) return true;
        if (AWS.util.isType(value, acceptedTypes[i])) return true;
        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
      }
      foundInvalidType = true;
    }

    var acceptedType = type;
    if (!acceptedType) {
      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
    }

    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
              vowel + ' ' + acceptedType);
    return false;
  },

  validateNumber: function validateNumber(shape, value, context) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') {
      var castedValue = parseFloat(value);
      if (castedValue.toString() === value) value = castedValue;
    }
    if (this.validateType(value, context, ['number'])) {
      this.validateRange(shape, value, context, 'numeric value');
    }
  },

  validatePayload: function validatePayload(value, context) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') return;
    if (value && typeof value.byteLength === 'number') return; // typed arrays
    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
      var Stream = AWS.util.stream.Stream;
      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
    } else {
      if (typeof Blob !== void 0 && value instanceof Blob) return;
    }

    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
    if (value) {
      for (var i = 0; i < types.length; i++) {
        if (AWS.util.isType(value, types[i])) return;
        if (AWS.util.typeName(value.constructor) === types[i]) return;
      }
    }

    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
      'string, Buffer, Stream, Blob, or typed array object');
  }
});


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {"acm":{"name":"ACM","cors":true},"apigateway":{"name":"APIGateway","cors":true},"applicationautoscaling":{"prefix":"application-autoscaling","name":"ApplicationAutoScaling","cors":true},"appstream":{"name":"AppStream"},"autoscaling":{"name":"AutoScaling","cors":true},"batch":{"name":"Batch"},"budgets":{"name":"Budgets"},"clouddirectory":{"name":"CloudDirectory","versions":["2016-05-10*"]},"cloudformation":{"name":"CloudFormation","cors":true},"cloudfront":{"name":"CloudFront","versions":["2013-05-12*","2013-11-11*","2014-05-31*","2014-10-21*","2014-11-06*","2015-04-17*","2015-07-27*","2015-09-17*","2016-01-13*","2016-01-28*","2016-08-01*","2016-08-20*","2016-09-07*","2016-09-29*","2016-11-25*","2017-03-25*","2017-10-30*"],"cors":true},"cloudhsm":{"name":"CloudHSM","cors":true},"cloudsearch":{"name":"CloudSearch"},"cloudsearchdomain":{"name":"CloudSearchDomain"},"cloudtrail":{"name":"CloudTrail","cors":true},"cloudwatch":{"prefix":"monitoring","name":"CloudWatch","cors":true},"cloudwatchevents":{"prefix":"events","name":"CloudWatchEvents","versions":["2014-02-03*"],"cors":true},"cloudwatchlogs":{"prefix":"logs","name":"CloudWatchLogs","cors":true},"codebuild":{"name":"CodeBuild","cors":true},"codecommit":{"name":"CodeCommit","cors":true},"codedeploy":{"name":"CodeDeploy","cors":true},"codepipeline":{"name":"CodePipeline","cors":true},"cognitoidentity":{"prefix":"cognito-identity","name":"CognitoIdentity","cors":true},"cognitoidentityserviceprovider":{"prefix":"cognito-idp","name":"CognitoIdentityServiceProvider","cors":true},"cognitosync":{"prefix":"cognito-sync","name":"CognitoSync","cors":true},"configservice":{"prefix":"config","name":"ConfigService","cors":true},"cur":{"name":"CUR","cors":true},"datapipeline":{"name":"DataPipeline"},"devicefarm":{"name":"DeviceFarm","cors":true},"directconnect":{"name":"DirectConnect","cors":true},"directoryservice":{"prefix":"ds","name":"DirectoryService"},"discovery":{"name":"Discovery"},"dms":{"name":"DMS"},"dynamodb":{"name":"DynamoDB","cors":true},"dynamodbstreams":{"prefix":"streams.dynamodb","name":"DynamoDBStreams","cors":true},"ec2":{"name":"EC2","versions":["2013-06-15*","2013-10-15*","2014-02-01*","2014-05-01*","2014-06-15*","2014-09-01*","2014-10-01*","2015-03-01*","2015-04-15*","2015-10-01*","2016-04-01*","2016-09-15*"],"cors":true},"ecr":{"name":"ECR","cors":true},"ecs":{"name":"ECS","cors":true},"efs":{"prefix":"elasticfilesystem","name":"EFS","cors":true},"elasticache":{"name":"ElastiCache","versions":["2012-11-15*","2014-03-24*","2014-07-15*","2014-09-30*"],"cors":true},"elasticbeanstalk":{"name":"ElasticBeanstalk","cors":true},"elb":{"prefix":"elasticloadbalancing","name":"ELB","cors":true},"elbv2":{"prefix":"elasticloadbalancingv2","name":"ELBv2","cors":true},"emr":{"prefix":"elasticmapreduce","name":"EMR","cors":true},"es":{"name":"ES"},"elastictranscoder":{"name":"ElasticTranscoder","cors":true},"firehose":{"name":"Firehose","cors":true},"gamelift":{"name":"GameLift","cors":true},"glacier":{"name":"Glacier"},"health":{"name":"Health"},"iam":{"name":"IAM"},"importexport":{"name":"ImportExport"},"inspector":{"name":"Inspector","versions":["2015-08-18*"],"cors":true},"iot":{"name":"Iot","cors":true},"iotdata":{"prefix":"iot-data","name":"IotData","cors":true},"kinesis":{"name":"Kinesis","cors":true},"kinesisanalytics":{"name":"KinesisAnalytics"},"kms":{"name":"KMS","cors":true},"lambda":{"name":"Lambda","cors":true},"lexruntime":{"prefix":"runtime.lex","name":"LexRuntime","cors":true},"lightsail":{"name":"Lightsail"},"machinelearning":{"name":"MachineLearning","cors":true},"marketplacecommerceanalytics":{"name":"MarketplaceCommerceAnalytics","cors":true},"marketplacemetering":{"prefix":"meteringmarketplace","name":"MarketplaceMetering"},"mturk":{"prefix":"mturk-requester","name":"MTurk","cors":true},"mobileanalytics":{"name":"MobileAnalytics","cors":true},"opsworks":{"name":"OpsWorks","cors":true},"opsworkscm":{"name":"OpsWorksCM"},"organizations":{"name":"Organizations"},"pinpoint":{"name":"Pinpoint"},"polly":{"name":"Polly","cors":true},"rds":{"name":"RDS","versions":["2014-09-01*"],"cors":true},"redshift":{"name":"Redshift","cors":true},"rekognition":{"name":"Rekognition","cors":true},"resourcegroupstaggingapi":{"name":"ResourceGroupsTaggingAPI"},"route53":{"name":"Route53","cors":true},"route53domains":{"name":"Route53Domains","cors":true},"s3":{"name":"S3","dualstackAvailable":true,"cors":true},"servicecatalog":{"name":"ServiceCatalog","cors":true},"ses":{"prefix":"email","name":"SES","cors":true},"shield":{"name":"Shield"},"simpledb":{"prefix":"sdb","name":"SimpleDB"},"sms":{"name":"SMS"},"snowball":{"name":"Snowball"},"sns":{"name":"SNS","cors":true},"sqs":{"name":"SQS","cors":true},"ssm":{"name":"SSM","cors":true},"storagegateway":{"name":"StorageGateway","cors":true},"stepfunctions":{"prefix":"states","name":"StepFunctions"},"sts":{"name":"STS","cors":true},"support":{"name":"Support"},"swf":{"name":"SWF"},"xray":{"name":"XRay"},"waf":{"name":"WAF","cors":true},"wafregional":{"prefix":"waf-regional","name":"WAFRegional"},"workdocs":{"name":"WorkDocs","cors":true},"workspaces":{"name":"WorkSpaces"},"codestar":{"name":"CodeStar"},"lexmodelbuildingservice":{"prefix":"lex-models","name":"LexModelBuildingService","cors":true},"marketplaceentitlementservice":{"prefix":"entitlement.marketplace","name":"MarketplaceEntitlementService"},"athena":{"name":"Athena"},"greengrass":{"name":"Greengrass"},"dax":{"name":"DAX"},"migrationhub":{"prefix":"AWSMigrationHub","name":"MigrationHub"},"cloudhsmv2":{"name":"CloudHSMV2"},"glue":{"name":"Glue"},"mobile":{"name":"Mobile"},"pricing":{"name":"Pricing","cors":true},"costexplorer":{"prefix":"ce","name":"CostExplorer"},"mediaconvert":{"name":"MediaConvert"},"medialive":{"name":"MediaLive"},"mediapackage":{"name":"MediaPackage"},"mediastore":{"name":"MediaStore"},"mediastoredata":{"prefix":"mediastore-data","name":"MediaStoreData"},"appsync":{"name":"AppSync"},"guardduty":{"name":"GuardDuty"},"mq":{"name":"MQ"},"comprehend":{"name":"Comprehend"},"iotjobsdataplane":{"prefix":"iot-jobs-data","name":"IoTJobsDataPlane"},"kinesisvideoarchivedmedia":{"prefix":"kinesis-video-archived-media","name":"KinesisVideoArchivedMedia","cors":true},"kinesisvideomedia":{"prefix":"kinesis-video-media","name":"KinesisVideoMedia"},"kinesisvideo":{"name":"KinesisVideo","cors":true},"sagemakerruntime":{"prefix":"runtime.sagemaker","name":"SageMakerRuntime"},"sagemaker":{"name":"SageMaker"},"translate":{"name":"Translate","cors":true},"resourcegroups":{"prefix":"resource-groups","name":"ResourceGroups"},"alexaforbusiness":{"name":"AlexaForBusiness"},"cloud9":{"name":"Cloud9"},"serverlessapplicationrepository":{"prefix":"serverlessrepo","name":"ServerlessApplicationRepository"},"servicediscovery":{"name":"ServiceDiscovery"},"workmail":{"name":"WorkMail"},"autoscalingplans":{"prefix":"autoscaling-plans","name":"AutoScalingPlans"},"transcribeservice":{"prefix":"transcribe","name":"TranscribeService"},"connect":{"name":"Connect"},"acmpca":{"prefix":"acm-pca","name":"ACMPCA"},"fms":{"name":"FMS"},"secretsmanager":{"name":"SecretsManager","cors":true},"iotanalytics":{"name":"IoTAnalytics"},"iot1clickdevicesservice":{"prefix":"iot1click-devices","name":"IoT1ClickDevicesService"},"iot1clickprojects":{"prefix":"iot1click-projects","name":"IoT1ClickProjects"},"pi":{"name":"PI"},"neptune":{"name":"Neptune"},"mediatailor":{"name":"MediaTailor"},"eks":{"name":"EKS"},"macie":{"name":"Macie"},"dlm":{"name":"DLM"},"signer":{"name":"Signer"}}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(83);
var v4 = __webpack_require__(84);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(36);
var bytesToUuid = __webpack_require__(37);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(36);
var bytesToUuid = __webpack_require__(37);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Hmac = __webpack_require__(86);
var Md5 = __webpack_require__(90);
var Sha1 = __webpack_require__(91);
var Sha256 = __webpack_require__(92);

/**
 * @api private
 */
module.exports = exports = {
    createHash: function createHash(alg) {
      alg = alg.toLowerCase();
      if (alg === 'md5') {
        return new Md5();
      } else if (alg === 'sha256') {
        return new Sha256();
      } else if (alg === 'sha1') {
        return new Sha1();
      }

      throw new Error('Hash algorithm ' + alg + ' is not supported in the browser SDK');
    },
    createHmac: function createHmac(alg, key) {
      alg = alg.toLowerCase();
      if (alg === 'md5') {
        return new Hmac(Md5, key);
      } else if (alg === 'sha256') {
        return new Hmac(Sha256, key);
      } else if (alg === 'sha1') {
        return new Hmac(Sha1, key);
      }

      throw new Error('HMAC algorithm ' + alg + ' is not supported in the browser SDK');
    },
    createSign: function() {
      throw new Error('createSign is not implemented in the browser');
    }
  }


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var hashUtils = __webpack_require__(12);

/**
 * @api private
 */
function Hmac(hashCtor, secret) {
    this.hash = new hashCtor();
    this.outer = new hashCtor();

    var inner = bufferFromSecret(hashCtor, secret);
    var outer = new Uint8Array(hashCtor.BLOCK_SIZE);
    outer.set(inner);

    for (var i = 0; i < hashCtor.BLOCK_SIZE; i++) {
        inner[i] ^= 0x36;
        outer[i] ^= 0x5c;
    }

    this.hash.update(inner);
    this.outer.update(outer);

    // Zero out the copied key buffer.
    for (var i = 0; i < inner.byteLength; i++) {
        inner[i] = 0;
    }
}

/**
 * @api private
 */
module.exports = exports = Hmac;

Hmac.prototype.update = function (toHash) {
    if (hashUtils.isEmptyData(toHash) || this.error) {
        return this;
    }

    try {
        this.hash.update(hashUtils.convertToBuffer(toHash));
    } catch (e) {
        this.error = e;
    }

    return this;
};

Hmac.prototype.digest = function (encoding) {
    if (!this.outer.finished) {
        this.outer.update(this.hash.digest());
    }

    return this.outer.digest(encoding);
}

function bufferFromSecret(hashCtor, secret) {
    var input = hashUtils.convertToBuffer(secret);
    if (input.byteLength > hashCtor.BLOCK_SIZE) {
        var bufferHash = new hashCtor;
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(hashCtor.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 88 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 89 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var hashUtils = __webpack_require__(12);
var Buffer = __webpack_require__(9).Buffer;

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 16;

var INIT = [
    0x67452301,
    0xefcdab89,
    0x98badcfe,
    0x10325476,
];

/**
 * @api private
 */
function Md5() {
    this.state = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
    ];
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
}

/**
 * @api private
 */
module.exports = exports = Md5;

Md5.BLOCK_SIZE = BLOCK_SIZE;

Md5.prototype.update = function (sourceData) {
    if (hashUtils.isEmptyData(sourceData)) {
        return this;
    } else if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    var data = hashUtils.convertToBuffer(sourceData);
    var position = 0;
    var byteLength = data.byteLength;
    this.bytesHashed += byteLength;
    while (byteLength > 0) {
        this.buffer.setUint8(this.bufferLength++, data[position++]);
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
        }
    }

    return this;
};

Md5.prototype.digest = function (encoding) {
    if (!this.finished) {
        var _a = this, buffer = _a.buffer, undecoratedLength = _a.bufferLength, bytesHashed = _a.bytesHashed;
        var bitsHashed = bytesHashed * 8;
        buffer.setUint8(this.bufferLength++, 128);
        // Ensure the final block has enough room for the hashed length
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                buffer.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            buffer.setUint8(i, 0);
        }
        buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
        buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 0x100000000), true);
        this.hashBuffer();
        this.finished = true;
    }
    var out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
    for (var i = 0; i < 4; i++) {
        out.setUint32(i * 4, this.state[i], true);
    }
    var buff = new Buffer(out.buffer, out.byteOffset, out.byteLength);
    return encoding ? buff.toString(encoding) : buff;
};

Md5.prototype.hashBuffer = function () {
    var _a = this, buffer = _a.buffer, state = _a.state;
    var a = state[0], b = state[1], c = state[2], d = state[3];
    a = ff(a, b, c, d, buffer.getUint32(0, true), 7, 0xd76aa478);
    d = ff(d, a, b, c, buffer.getUint32(4, true), 12, 0xe8c7b756);
    c = ff(c, d, a, b, buffer.getUint32(8, true), 17, 0x242070db);
    b = ff(b, c, d, a, buffer.getUint32(12, true), 22, 0xc1bdceee);
    a = ff(a, b, c, d, buffer.getUint32(16, true), 7, 0xf57c0faf);
    d = ff(d, a, b, c, buffer.getUint32(20, true), 12, 0x4787c62a);
    c = ff(c, d, a, b, buffer.getUint32(24, true), 17, 0xa8304613);
    b = ff(b, c, d, a, buffer.getUint32(28, true), 22, 0xfd469501);
    a = ff(a, b, c, d, buffer.getUint32(32, true), 7, 0x698098d8);
    d = ff(d, a, b, c, buffer.getUint32(36, true), 12, 0x8b44f7af);
    c = ff(c, d, a, b, buffer.getUint32(40, true), 17, 0xffff5bb1);
    b = ff(b, c, d, a, buffer.getUint32(44, true), 22, 0x895cd7be);
    a = ff(a, b, c, d, buffer.getUint32(48, true), 7, 0x6b901122);
    d = ff(d, a, b, c, buffer.getUint32(52, true), 12, 0xfd987193);
    c = ff(c, d, a, b, buffer.getUint32(56, true), 17, 0xa679438e);
    b = ff(b, c, d, a, buffer.getUint32(60, true), 22, 0x49b40821);
    a = gg(a, b, c, d, buffer.getUint32(4, true), 5, 0xf61e2562);
    d = gg(d, a, b, c, buffer.getUint32(24, true), 9, 0xc040b340);
    c = gg(c, d, a, b, buffer.getUint32(44, true), 14, 0x265e5a51);
    b = gg(b, c, d, a, buffer.getUint32(0, true), 20, 0xe9b6c7aa);
    a = gg(a, b, c, d, buffer.getUint32(20, true), 5, 0xd62f105d);
    d = gg(d, a, b, c, buffer.getUint32(40, true), 9, 0x02441453);
    c = gg(c, d, a, b, buffer.getUint32(60, true), 14, 0xd8a1e681);
    b = gg(b, c, d, a, buffer.getUint32(16, true), 20, 0xe7d3fbc8);
    a = gg(a, b, c, d, buffer.getUint32(36, true), 5, 0x21e1cde6);
    d = gg(d, a, b, c, buffer.getUint32(56, true), 9, 0xc33707d6);
    c = gg(c, d, a, b, buffer.getUint32(12, true), 14, 0xf4d50d87);
    b = gg(b, c, d, a, buffer.getUint32(32, true), 20, 0x455a14ed);
    a = gg(a, b, c, d, buffer.getUint32(52, true), 5, 0xa9e3e905);
    d = gg(d, a, b, c, buffer.getUint32(8, true), 9, 0xfcefa3f8);
    c = gg(c, d, a, b, buffer.getUint32(28, true), 14, 0x676f02d9);
    b = gg(b, c, d, a, buffer.getUint32(48, true), 20, 0x8d2a4c8a);
    a = hh(a, b, c, d, buffer.getUint32(20, true), 4, 0xfffa3942);
    d = hh(d, a, b, c, buffer.getUint32(32, true), 11, 0x8771f681);
    c = hh(c, d, a, b, buffer.getUint32(44, true), 16, 0x6d9d6122);
    b = hh(b, c, d, a, buffer.getUint32(56, true), 23, 0xfde5380c);
    a = hh(a, b, c, d, buffer.getUint32(4, true), 4, 0xa4beea44);
    d = hh(d, a, b, c, buffer.getUint32(16, true), 11, 0x4bdecfa9);
    c = hh(c, d, a, b, buffer.getUint32(28, true), 16, 0xf6bb4b60);
    b = hh(b, c, d, a, buffer.getUint32(40, true), 23, 0xbebfbc70);
    a = hh(a, b, c, d, buffer.getUint32(52, true), 4, 0x289b7ec6);
    d = hh(d, a, b, c, buffer.getUint32(0, true), 11, 0xeaa127fa);
    c = hh(c, d, a, b, buffer.getUint32(12, true), 16, 0xd4ef3085);
    b = hh(b, c, d, a, buffer.getUint32(24, true), 23, 0x04881d05);
    a = hh(a, b, c, d, buffer.getUint32(36, true), 4, 0xd9d4d039);
    d = hh(d, a, b, c, buffer.getUint32(48, true), 11, 0xe6db99e5);
    c = hh(c, d, a, b, buffer.getUint32(60, true), 16, 0x1fa27cf8);
    b = hh(b, c, d, a, buffer.getUint32(8, true), 23, 0xc4ac5665);
    a = ii(a, b, c, d, buffer.getUint32(0, true), 6, 0xf4292244);
    d = ii(d, a, b, c, buffer.getUint32(28, true), 10, 0x432aff97);
    c = ii(c, d, a, b, buffer.getUint32(56, true), 15, 0xab9423a7);
    b = ii(b, c, d, a, buffer.getUint32(20, true), 21, 0xfc93a039);
    a = ii(a, b, c, d, buffer.getUint32(48, true), 6, 0x655b59c3);
    d = ii(d, a, b, c, buffer.getUint32(12, true), 10, 0x8f0ccc92);
    c = ii(c, d, a, b, buffer.getUint32(40, true), 15, 0xffeff47d);
    b = ii(b, c, d, a, buffer.getUint32(4, true), 21, 0x85845dd1);
    a = ii(a, b, c, d, buffer.getUint32(32, true), 6, 0x6fa87e4f);
    d = ii(d, a, b, c, buffer.getUint32(60, true), 10, 0xfe2ce6e0);
    c = ii(c, d, a, b, buffer.getUint32(24, true), 15, 0xa3014314);
    b = ii(b, c, d, a, buffer.getUint32(52, true), 21, 0x4e0811a1);
    a = ii(a, b, c, d, buffer.getUint32(16, true), 6, 0xf7537e82);
    d = ii(d, a, b, c, buffer.getUint32(44, true), 10, 0xbd3af235);
    c = ii(c, d, a, b, buffer.getUint32(8, true), 15, 0x2ad7d2bb);
    b = ii(b, c, d, a, buffer.getUint32(36, true), 21, 0xeb86d391);
    state[0] = (a + state[0]) & 0xFFFFFFFF;
    state[1] = (b + state[1]) & 0xFFFFFFFF;
    state[2] = (c + state[2]) & 0xFFFFFFFF;
    state[3] = (d + state[3]) & 0xFFFFFFFF;
};

function cmn(q, a, b, x, s, t) {
    a = (((a + q) & 0xFFFFFFFF) + ((x + t) & 0xFFFFFFFF)) & 0xFFFFFFFF;
    return (((a << s) | (a >>> (32 - s))) + b) & 0xFFFFFFFF;
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(9).Buffer;
var hashUtils = __webpack_require__(12);

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 20;

var KEY = new Uint32Array([
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc | 0,
    0xca62c1d6 | 0
]);

var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19,
];

var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

/**
 * @api private
 */
function Sha1() {
    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;
    // The first 64 bytes (16 words) is the data chunk
    this.block = new Uint32Array(80);
    this.offset = 0;
    this.shift = 24;
    this.totalLength = 0;
}

/**
 * @api private
 */
module.exports = exports = Sha1;

Sha1.BLOCK_SIZE = BLOCK_SIZE;

Sha1.prototype.update = function (data) {
    if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    if (hashUtils.isEmptyData(data)) {
        return this;
    }

    data = hashUtils.convertToBuffer(data);

    var length = data.length;
    this.totalLength += length * 8;
    for (var i = 0; i < length; i++) {
        this.write(data[i]);
    }

    return this;
};

Sha1.prototype.write = function write(byte) {
    this.block[this.offset] |= (byte & 0xff) << this.shift;
    if (this.shift) {
        this.shift -= 8;
    } else {
        this.offset++;
        this.shift = 24;
    }

    if (this.offset === 16) this.processBlock();
};

Sha1.prototype.digest = function (encoding) {
    // Pad
    this.write(0x80);
    if (this.offset > 14 || (this.offset === 14 && this.shift < 24)) {
      this.processBlock();
    }
    this.offset = 14;
    this.shift = 24;

    // 64-bit length big-endian
    this.write(0x00); // numbers this big aren't accurate in javascript anyway
    this.write(0x00); // ..So just hard-code to zero.
    this.write(this.totalLength > 0xffffffffff ? this.totalLength / 0x10000000000 : 0x00);
    this.write(this.totalLength > 0xffffffff ? this.totalLength / 0x100000000 : 0x00);
    for (var s = 24; s >= 0; s -= 8) {
        this.write(this.totalLength >> s);
    }
    // The value in state is little-endian rather than big-endian, so flip
    // each word into a new Uint8Array
    var out = new Buffer(DIGEST_LENGTH);
    var outView = new DataView(out.buffer);
    outView.setUint32(0, this.h0, false);
    outView.setUint32(4, this.h1, false);
    outView.setUint32(8, this.h2, false);
    outView.setUint32(12, this.h3, false);
    outView.setUint32(16, this.h4, false);

    return encoding ? out.toString(encoding) : out;
};

Sha1.prototype.processBlock = function processBlock() {
    // Extend the sixteen 32-bit words into eighty 32-bit words:
    for (var i = 16; i < 80; i++) {
      var w = this.block[i - 3] ^ this.block[i - 8] ^ this.block[i - 14] ^ this.block[i - 16];
      this.block[i] = (w << 1) | (w >>> 31);
    }

    // Initialize hash value for this chunk:
    var a = this.h0;
    var b = this.h1;
    var c = this.h2;
    var d = this.h3;
    var e = this.h4;
    var f, k;

    // Main loop:
    for (i = 0; i < 80; i++) {
      if (i < 20) {
        f = d ^ (b & (c ^ d));
        k = 0x5A827999;
      }
      else if (i < 40) {
        f = b ^ c ^ d;
        k = 0x6ED9EBA1;
      }
      else if (i < 60) {
        f = (b & c) | (d & (b | c));
        k = 0x8F1BBCDC;
      }
      else {
        f = b ^ c ^ d;
        k = 0xCA62C1D6;
      }
      var temp = (a << 5 | a >>> 27) + f + e + k + (this.block[i]|0);
      e = d;
      d = c;
      c = (b << 30 | b >>> 2);
      b = a;
      a = temp;
    }

    // Add this chunk's hash to result so far:
    this.h0 = (this.h0 + a) | 0;
    this.h1 = (this.h1 + b) | 0;
    this.h2 = (this.h2 + c) | 0;
    this.h3 = (this.h3 + d) | 0;
    this.h4 = (this.h4 + e) | 0;

    // The block is now reusable.
    this.offset = 0;
    for (i = 0; i < 16; i++) {
        this.block[i] = 0;
    }
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(9).Buffer;
var hashUtils = __webpack_require__(12);

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 32;

var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);

var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19,
];

var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

/**
 * @private
 */
function Sha256() {
    this.state = [
        0x6a09e667,
        0xbb67ae85,
        0x3c6ef372,
        0xa54ff53a,
        0x510e527f,
        0x9b05688c,
        0x1f83d9ab,
        0x5be0cd19,
    ];
    this.temp = new Int32Array(64);
    this.buffer = new Uint8Array(64);
    this.bufferLength = 0;
    this.bytesHashed = 0;
    /**
     * @private
     */
    this.finished = false;
}

/**
 * @api private
 */
module.exports = exports = Sha256;

Sha256.BLOCK_SIZE = BLOCK_SIZE;

Sha256.prototype.update = function (data) {
    if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    if (hashUtils.isEmptyData(data)) {
        return this;
    }

    data = hashUtils.convertToBuffer(data);

    var position = 0;
    var byteLength = data.byteLength;
    this.bytesHashed += byteLength;
    if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error('Cannot hash more than 2^53 - 1 bits');
    }

    while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
        }
    }

    return this;
};

Sha256.prototype.digest = function (encoding) {
    if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 0x80);
        // Ensure the final block has enough room for the hashed length
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                bufferView.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
    }
    // The value in state is little-endian rather than big-endian, so flip
    // each word into a new Uint8Array
    var out = new Buffer(DIGEST_LENGTH);
    for (var i = 0; i < 8; i++) {
        out[i * 4] = (this.state[i] >>> 24) & 0xff;
        out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
        out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
        out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
    }
    return encoding ? out.toString(encoding) : out;
};

Sha256.prototype.hashBuffer = function () {
    var _a = this,
        buffer = _a.buffer,
        state = _a.state;
    var state0 = state[0],
        state1 = state[1],
        state2 = state[2],
        state3 = state[3],
        state4 = state[4],
        state5 = state[5],
        state6 = state[6],
        state7 = state[7];
    for (var i = 0; i < BLOCK_SIZE; i++) {
        if (i < 16) {
            this.temp[i] = (((buffer[i * 4] & 0xff) << 24) |
                ((buffer[(i * 4) + 1] & 0xff) << 16) |
                ((buffer[(i * 4) + 2] & 0xff) << 8) |
                (buffer[(i * 4) + 3] & 0xff));
        }
        else {
            var u = this.temp[i - 2];
            var t1_1 = (u >>> 17 | u << 15) ^
                (u >>> 19 | u << 13) ^
                (u >>> 10);
            u = this.temp[i - 15];
            var t2_1 = (u >>> 7 | u << 25) ^
                (u >>> 18 | u << 14) ^
                (u >>> 3);
            this.temp[i] = (t1_1 + this.temp[i - 7] | 0) +
                (t2_1 + this.temp[i - 16] | 0);
        }
        var t1 = (((((state4 >>> 6 | state4 << 26) ^
            (state4 >>> 11 | state4 << 21) ^
            (state4 >>> 25 | state4 << 7))
            + ((state4 & state5) ^ (~state4 & state6))) | 0)
            + ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) | 0;
        var t2 = (((state0 >>> 2 | state0 << 30) ^
            (state0 >>> 13 | state0 << 19) ^
            (state0 >>> 22 | state0 << 10)) + ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = (state3 + t1) | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = (t1 + t2) | 0;
    }
    state[0] += state0;
    state[1] += state1;
    state[2] += state2;
    state[3] += state3;
    state[4] += state4;
    state[5] += state5;
    state[6] += state6;
    state[7] += state7;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module), __webpack_require__(6)))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  //provide realtime clock for performance measurement
  now: function now() {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      return performance.now();
    }
    return Date.now();
  }
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var eventMessageChunker = __webpack_require__(100).eventMessageChunker;
var parseEvent = __webpack_require__(101).parseEvent;

function createEventStream(body, parser, model) {
    var eventMessages = eventMessageChunker(body);

    var events = [];

    for (var i = 0; i < eventMessages.length; i++) {
        events.push(parseEvent(parser, eventMessages[i], model));
    }

    return events;
}

/**
 * @api private
 */
module.exports = {
    createEventStream: createEventStream
};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * Takes in a buffer of event messages and splits them into individual messages.
 * @param {Buffer} buffer
 * @api private
 */
function eventMessageChunker(buffer) {
    /** @type Buffer[] */
    var messages = [];
    var offset = 0;

    while (offset < buffer.length) {
        var totalLength = buffer.readInt32BE(offset);

        // create new buffer for individual message (shares memory with original)
        var message = buffer.slice(offset, totalLength + offset);
        // increment offset to it starts at the next message
        offset += totalLength;

        messages.push(message);
    }

    return messages;
}

/**
 * @api private
 */
module.exports = {
    eventMessageChunker: eventMessageChunker
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var parseMessage = __webpack_require__(102).parseMessage;

/**
 *
 * @param {*} parser
 * @param {Buffer} message
 * @param {*} shape
 * @api private
 */
function parseEvent(parser, message, shape) {
    var parsedMessage = parseMessage(message);

    // check if message is an event or error
    var messageType = parsedMessage.headers[':message-type'];
    if (messageType) {
        if (messageType.value === 'error') {
            throw parseError(parsedMessage);
        } else if (messageType.value !== 'event') {
            // not sure how to parse non-events/non-errors, ignore for now
            return;
        }
    }

    // determine event type
    var eventType = parsedMessage.headers[':event-type'];
    // check that the event type is modeled
    var eventModel = shape.members[eventType.value];
    if (!eventModel) {
        return;
    }

    var result = {};
    // check if an event payload exists
    var eventPayloadMemberName = eventModel.eventPayloadMemberName;
    if (eventPayloadMemberName) {
        var payloadShape = eventModel.members[eventPayloadMemberName];
        // if the shape is binary, return the byte array
        if (payloadShape.type === 'binary') {
            result[eventPayloadMemberName] = parsedMessage.body;
        } else {
            result[eventPayloadMemberName] = parser.parse(parsedMessage.body.toString(), payloadShape);
        }
    }

    // read event headers
    var eventHeaderNames = eventModel.eventHeaderMemberNames;
    for (var i = 0; i < eventHeaderNames.length; i++) {
        var name = eventHeaderNames[i];
        if (parsedMessage.headers[name]) {
            // parse the header!
            result[name] = eventModel.members[name].toType(parsedMessage.headers[name].value);
        }
    }

    var output = {};
    output[eventType.value] = result;
    return output;
}

function parseError(message) {
    var errorCode = message.headers[':error-code'];
    var errorMessage = message.headers[':error-message'];
    var error = new Error(errorMessage.value || errorMessage);
    error.code = error.name = errorCode.value || errorCode;
    return error;
}

/**
 * @api private
 */
module.exports = {
    parseEvent: parseEvent
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Int64 = __webpack_require__(103).Int64;

var splitMessage = __webpack_require__(104).splitMessage;

var BOOLEAN_TAG = 'boolean';
var BYTE_TAG = 'byte';
var SHORT_TAG = 'short';
var INT_TAG = 'integer';
var LONG_TAG = 'long';
var BINARY_TAG = 'binary';
var STRING_TAG = 'string';
var TIMESTAMP_TAG = 'timestamp';
var UUID_TAG = 'uuid';

/**
 * @api private
 *
 * @param {Buffer} headers
 */
function parseHeaders(headers) {
    var out = {};
    var position = 0;
    while (position < headers.length) {
        var nameLength = headers.readUInt8(position++);
        var name = headers.slice(position, position + nameLength).toString();
        position += nameLength;
        switch (headers.readUInt8(position++)) {
            case 0 /* boolTrue */:
                out[name] = {
                    type: BOOLEAN_TAG,
                    value: true
                };
                break;
            case 1 /* boolFalse */:
                out[name] = {
                    type: BOOLEAN_TAG,
                    value: false
                };
                break;
            case 2 /* byte */:
                out[name] = {
                    type: BYTE_TAG,
                    value: headers.readInt8(position++)
                };
                break;
            case 3 /* short */:
                out[name] = {
                    type: SHORT_TAG,
                    value: headers.readInt16BE(position)
                };
                position += 2;
                break;
            case 4 /* integer */:
                out[name] = {
                    type: INT_TAG,
                    value: headers.readInt32BE(position)
                };
                position += 4;
                break;
            case 5 /* long */:
                out[name] = {
                    type: LONG_TAG,
                    value: new Int64(headers.slice(position, position + 8))
                };
                position += 8;
                break;
            case 6 /* byteArray */:
                var binaryLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                    type: BINARY_TAG,
                    value: headers.slice(position, position + binaryLength)
                };
                position += binaryLength;
                break;
            case 7 /* string */:
                var stringLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                    type: STRING_TAG,
                    value: headers.slice(
                        position,
                        position + stringLength
                    ).toString()
                };
                position += stringLength;
                break;
            case 8 /* timestamp */:
                out[name] = {
                    type: TIMESTAMP_TAG,
                    value: new Date(
                        new Int64(headers.slice(position, position + 8))
                            .valueOf()
                    )
                };
                position += 8;
                break;
            case 9 /* uuid */:
                var uuidChars = headers.slice(position, position + 16)
                    .toString('hex');
                position += 16;
                out[name] = {
                    type: UUID_TAG,
                    value: uuidChars.substr(0, 8) + '-' +
                        uuidChars.substr(8, 4) + '-' +
                        uuidChars.substr(12, 4) + '-' +
                        uuidChars.substr(16, 4) + '-' +
                        uuidChars.substr(20)
                };
                break;
            default:
                throw new Error('Unrecognized header type tag');
        }
    }
    return out;
}

function parseMessage(message) {
    var parsed = splitMessage(message);
    return { headers: parseHeaders(parsed.headers), body: parsed.body };
}

/**
 * @api private
 */
module.exports = {
    parseMessage: parseMessage
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0).util;
var toBuffer = __webpack_require__(40).toBuffer;

/**
 * A lossless representation of a signed, 64-bit integer. Instances of this
 * class may be used in arithmetic expressions as if they were numeric
 * primitives, but the binary representation will be preserved unchanged as the
 * `bytes` property of the object. The bytes should be encoded as big-endian,
 * two's complement integers.
 * @param {Buffer} bytes
 *
 * @api private
 */
function Int64(bytes) {
    if (bytes.length !== 8) {
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    if (!util.Buffer.isBuffer(bytes)) bytes = toBuffer(bytes);

    this.bytes = bytes;
}

/**
 * @param {number} number
 * @returns {Int64}
 *
 * @api private
 */
Int64.fromNumber = function(number) {
    if (number > 9223372036854775807 || number < -9223372036854775808) {
        throw new Error(
            number + ' is too large (or, if negative, too small) to represent as an Int64'
        );
    }

    var bytes = new Uint8Array(8)
    for (
        var i = 7, remaining = Math.abs(Math.round(number));
        i > -1 && remaining > 0;
        i--, remaining /= 256
    ) {
        bytes[i] = remaining;
    }

    if (number < 0) {
        negate(bytes);
    }

    return new Int64(bytes);
};

/**
 * @returns {number}
 *
 * @api private
 */
Int64.prototype.valueOf = function() {
    var bytes = this.bytes.slice(0);
    var negative = bytes[0] & 128;
    if (negative) {
        negate(bytes);
    }

    return parseInt(bytes.toString('hex'), 16) * (negative ? -1 : 1);
};

Int64.prototype.toString = function() {
    return String(this.valueOf());
};

/**
 * @param {Buffer} bytes
 *
 * @api private
 */
function negate(bytes) {
    for (var i = 0; i < 8; i++) {
        bytes[i] ^= 0xFF;
    }
    for (var i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0) {
            break;
        }
    }
}

/**
 * @api private
 */
module.exports = {
    Int64: Int64
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0).util;
var toBuffer = __webpack_require__(40).toBuffer;

// All prelude components are unsigned, 32-bit integers
var PRELUDE_MEMBER_LENGTH = 4;
// The prelude consists of two components
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
// Checksums are always CRC32 hashes.
var CHECKSUM_LENGTH = 4;
// Messages must include a full prelude, a prelude checksum, and a message checksum
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;

/**
 * @api private
 *
 * @param {Buffer} message
 */
function splitMessage(message) {
    if (!util.Buffer.isBuffer(message)) message = toBuffer(message);

    if (message.length < MINIMUM_MESSAGE_LENGTH) {
        throw new Error('Provided message too short to accommodate event stream message overhead');
    }

    if (message.length !== message.readUInt32BE(0)) {
        throw new Error('Reported message length does not match received message length');
    }

    var expectedPreludeChecksum = message.readUInt32BE(PRELUDE_LENGTH);

    if (
        expectedPreludeChecksum !== util.crypto.crc32(
            message.slice(0, PRELUDE_LENGTH)
        )
    ) {
        throw new Error(
            'The prelude checksum specified in the message (' +
            expectedPreludeChecksum +
            ') does not match the calculated CRC32 checksum.'
        );
    }

    var expectedMessageChecksum = message.readUInt32BE(message.length - CHECKSUM_LENGTH);

    if (
        expectedMessageChecksum !== util.crypto.crc32(
            message.slice(0, message.length - CHECKSUM_LENGTH)
        )
    ) {
        throw new Error(
            'The message checksum did not match the expected value of ' +
                expectedMessageChecksum
        );
    }

    var headersStart = PRELUDE_LENGTH + CHECKSUM_LENGTH;
    var headersEnd = headersStart + message.readUInt32BE(PRELUDE_MEMBER_LENGTH);

    return {
        headers: message.slice(headersStart, headersEnd),
        body: message.slice(headersEnd, message.length - CHECKSUM_LENGTH),
    };
}

/**
 * @api private
 */
module.exports = {
    splitMessage: splitMessage
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var STS = __webpack_require__(13);

/**
 * Represents temporary credentials retrieved from {AWS.STS}. Without any
 * extra parameters, credentials will be fetched from the
 * {AWS.STS.getSessionToken} operation. If an IAM role is provided, the
 * {AWS.STS.assumeRole} operation will be used to fetch credentials for the
 * role instead.
 *
 * To setup temporary credentials, configure a set of master credentials
 * using the standard credentials providers (environment, EC2 instance metadata,
 * or from the filesystem), then set the global credentials to a new
 * temporary credentials object:
 *
 * ```javascript
 * // Note that environment credentials are loaded by default,
 * // the following line is shown for clarity:
 * AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
 *
 * // Now set temporary credentials seeded from the master credentials
 * AWS.config.credentials = new AWS.TemporaryCredentials();
 *
 * // subsequent requests will now use temporary credentials from AWS STS.
 * new AWS.S3().listBucket(function(err, data) { ... });
 * ```
 *
 * @!attribute masterCredentials
 *   @return [AWS.Credentials] the master (non-temporary) credentials used to
 *     get and refresh temporary credentials from AWS STS.
 * @note (see constructor)
 */
AWS.TemporaryCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new temporary credentials object.
   *
   * @note In order to create temporary credentials, you first need to have
   *   "master" credentials configured in {AWS.Config.credentials}. These
   *   master credentials are necessary to retrieve the temporary credentials,
   *   as well as refresh the credentials when they expire.
   * @param params [map] a map of options that are passed to the
   *   {AWS.STS.assumeRole} or {AWS.STS.getSessionToken} operations.
   *   If a `RoleArn` parameter is passed in, credentials will be based on the
   *   IAM role.
   * @param masterCredentials [AWS.Credentials] the master (non-temporary) credentials
   *  used to get and refresh temporary credentials from AWS STS.
   * @example Creating a new credentials object for generic temporary credentials
   *   AWS.config.credentials = new AWS.TemporaryCredentials();
   * @example Creating a new credentials object for an IAM role
   *   AWS.config.credentials = new AWS.TemporaryCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/TemporaryCredentials',
   *   });
   * @see AWS.STS.assumeRole
   * @see AWS.STS.getSessionToken
   */
  constructor: function TemporaryCredentials(params, masterCredentials) {
    AWS.Credentials.call(this);
    this.loadMasterCredentials(masterCredentials);
    this.expired = true;

    this.params = params || {};
    if (this.params.RoleArn) {
      this.params.RoleSessionName =
        this.params.RoleSessionName || 'temporary-credentials';
    }
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRole} or
   * {AWS.STS.getSessionToken}, depending on whether an IAM role ARN was passed
   * to the credentials {constructor}.
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.masterCredentials.get(function() {
      self.service.config.credentials = self.masterCredentials;
      var operation = self.params.RoleArn ?
        self.service.assumeRole : self.service.getSessionToken;
      operation.call(self.service, function (err, data) {
        if (!err) {
          self.service.credentialsFrom(data, self);
        }
        callback(err);
      });
    });
  },

  /**
   * @api private
   */
  loadMasterCredentials: function loadMasterCredentials(masterCredentials) {
    this.masterCredentials = masterCredentials || AWS.config.credentials;
    while (this.masterCredentials.masterCredentials) {
      this.masterCredentials = this.masterCredentials.masterCredentials;
    }

    if (typeof this.masterCredentials.get !== 'function') {
      this.masterCredentials = new AWS.Credentials(this.masterCredentials);
    }
  },

  /**
   * @api private
   */
  createClients: function() {
    this.service = this.service || new STS({params: this.params});
  }

});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

AWS.util.update(AWS.STS.prototype, {
  /**
   * @overload credentialsFrom(data, credentials = null)
   *   Creates a credentials object from STS response data containing
   *   credentials information. Useful for quickly setting AWS credentials.
   *
   *   @note This is a low-level utility function. If you want to load temporary
   *     credentials into your process for subsequent requests to AWS resources,
   *     you should use {AWS.TemporaryCredentials} instead.
   *   @param data [map] data retrieved from a call to {getFederatedToken},
   *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
   *   @param credentials [AWS.Credentials] an optional credentials object to
   *     fill instead of creating a new object. Useful when modifying an
   *     existing credentials object from a refresh call.
   *   @return [AWS.TemporaryCredentials] the set of temporary credentials
   *     loaded from a raw STS operation response.
   *   @example Using credentialsFrom to load global AWS credentials
   *     var sts = new AWS.STS();
   *     sts.getSessionToken(function (err, data) {
   *       if (err) console.log("Error getting credentials");
   *       else {
   *         AWS.config.credentials = sts.credentialsFrom(data);
   *       }
   *     });
   *   @see AWS.TemporaryCredentials
   */
  credentialsFrom: function credentialsFrom(data, credentials) {
    if (!data) return null;
    if (!credentials) credentials = new AWS.TemporaryCredentials();
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
    return credentials;
  },

  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
  },

  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
  }
});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = {"version":"2.0","metadata":{"apiVersion":"2011-06-15","endpointPrefix":"sts","globalEndpoint":"sts.amazonaws.com","protocol":"query","serviceAbbreviation":"AWS STS","serviceFullName":"AWS Security Token Service","serviceId":"STS","signatureVersion":"v4","uid":"sts-2011-06-15","xmlNamespace":"https://sts.amazonaws.com/doc/2011-06-15/"},"operations":{"AssumeRole":{"input":{"type":"structure","required":["RoleArn","RoleSessionName"],"members":{"RoleArn":{},"RoleSessionName":{},"Policy":{},"DurationSeconds":{"type":"integer"},"ExternalId":{},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"AssumeRoleResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"}}}},"AssumeRoleWithSAML":{"input":{"type":"structure","required":["RoleArn","PrincipalArn","SAMLAssertion"],"members":{"RoleArn":{},"PrincipalArn":{},"SAMLAssertion":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithSAMLResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Subject":{},"SubjectType":{},"Issuer":{},"Audience":{},"NameQualifier":{}}}},"AssumeRoleWithWebIdentity":{"input":{"type":"structure","required":["RoleArn","RoleSessionName","WebIdentityToken"],"members":{"RoleArn":{},"RoleSessionName":{},"WebIdentityToken":{},"ProviderId":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithWebIdentityResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"SubjectFromWebIdentityToken":{},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Provider":{},"Audience":{}}}},"DecodeAuthorizationMessage":{"input":{"type":"structure","required":["EncodedMessage"],"members":{"EncodedMessage":{}}},"output":{"resultWrapper":"DecodeAuthorizationMessageResult","type":"structure","members":{"DecodedMessage":{}}}},"GetCallerIdentity":{"input":{"type":"structure","members":{}},"output":{"resultWrapper":"GetCallerIdentityResult","type":"structure","members":{"UserId":{},"Account":{},"Arn":{}}}},"GetFederationToken":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"GetFederationTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"FederatedUser":{"type":"structure","required":["FederatedUserId","Arn"],"members":{"FederatedUserId":{},"Arn":{}}},"PackedPolicySize":{"type":"integer"}}}},"GetSessionToken":{"input":{"type":"structure","members":{"DurationSeconds":{"type":"integer"},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"GetSessionTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"}}}}},"shapes":{"Sa":{"type":"structure","required":["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],"members":{"AccessKeyId":{},"SecretAccessKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}},"Sf":{"type":"structure","required":["AssumedRoleId","Arn"],"members":{"AssumedRoleId":{},"Arn":{}}}}}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = {"pagination":{}}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var STS = __webpack_require__(13);

/**
 * Represents credentials retrieved from STS Web Identity Federation support.
 *
 * By default this provider gets credentials using the
 * {AWS.STS.assumeRoleWithWebIdentity} service operation. This operation
 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
 * application for which credentials will be given. In addition, the
 * `WebIdentityToken` must be set to the token provided by the identity
 * provider. See {constructor} for an example on creating a credentials
 * object with proper `RoleArn` and `WebIdentityToken` values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the WebIdentityToken, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.WebIdentityToken = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
 *     `params.WebIdentityToken` property.
 * @!attribute data
 *   @return [map] the raw data response from the call to
 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
 *     access to other properties from the response.
 */
AWS.WebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new credentials object.
   * @param (see AWS.STS.assumeRoleWithWebIdentity)
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.WebIdentityCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/WebIdentity',
   *     WebIdentityToken: 'ABCDEFGHIJKLMNOP', // token from identity service
   *     RoleSessionName: 'web' // optional name, defaults to web-identity
   *   }, {
   *     // optionally provide configuration to apply to the underlying AWS.STS service client
   *     // if configuration is not provided, then configuration will be pulled from AWS.config
   *
   *     // specify timeout options
   *     httpOptions: {
   *       timeout: 100
   *     }
   *   });
   * @see AWS.STS.assumeRoleWithWebIdentity
   * @see AWS.Config
   */
  constructor: function WebIdentityCredentials(params, clientConfig) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.params.RoleSessionName = this.params.RoleSessionName || 'web-identity';
    this.data = null;
    this._clientConfig = AWS.util.copy(clientConfig || {});
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRoleWithWebIdentity}
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithWebIdentity(function (err, data) {
      self.data = null;
      if (!err) {
        self.data = data;
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  createClients: function() {
    if (!this.service) {
      var stsConfig = AWS.util.merge({}, this._clientConfig);
      stsConfig.params = this.params;
      this.service = new STS(stsConfig);
    }
  }

});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var CognitoIdentity = __webpack_require__(111);
var STS = __webpack_require__(13);

/**
 * Represents credentials retrieved from STS Web Identity Federation using
 * the Amazon Cognito Identity service.
 *
 * By default this provider gets credentials using the
 * {AWS.CognitoIdentity.getCredentialsForIdentity} service operation, which
 * requires either an `IdentityId` or an `IdentityPoolId` (Amazon Cognito
 * Identity Pool ID), which is used to call {AWS.CognitoIdentity.getId} to
 * obtain an `IdentityId`. If the identity or identity pool is not configured in
 * the Amazon Cognito Console to use IAM roles with the appropriate permissions,
 * then additionally a `RoleArn` is required containing the ARN of the IAM trust
 * policy for the Amazon Cognito role that the user will log into. If a `RoleArn`
 * is provided, then this provider gets credentials using the
 * {AWS.STS.assumeRoleWithWebIdentity} service operation, after first getting an
 * Open ID token from {AWS.CognitoIdentity.getOpenIdToken}.
 *
 * In addition, if this credential provider is used to provide authenticated
 * login, the `Logins` map may be set to the tokens provided by the respective
 * identity providers. See {constructor} for an example on creating a credentials
 * object with proper property values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the WebIdentityToken, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.Logins['graph.facebook.com'] = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.CognitoIdentity.getId},
 *     {AWS.CognitoIdentity.getOpenIdToken}, and
 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
 *     `params.WebIdentityToken` property.
 * @!attribute data
 *   @return [map] the raw data response from the call to
 *     {AWS.CognitoIdentity.getCredentialsForIdentity}, or
 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
 *     access to other properties from the response.
 * @!attribute identityId
 *   @return [String] the Cognito ID returned by the last call to
 *     {AWS.CognitoIdentity.getOpenIdToken}. This ID represents the actual
 *     final resolved identity ID from Amazon Cognito.
 */
AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * @api private
   */
  localStorageKey: {
    id: 'aws.cognito.identity-id.',
    providers: 'aws.cognito.identity-providers.'
  },

  /**
   * Creates a new credentials object.
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
   *
   *     // either IdentityPoolId or IdentityId is required
   *     // See the IdentityPoolId param for AWS.CognitoIdentity.getID (linked below)
   *     // See the IdentityId param for AWS.CognitoIdentity.getCredentialsForIdentity
   *     // or AWS.CognitoIdentity.getOpenIdToken (linked below)
   *     IdentityPoolId: 'us-east-1:1699ebc0-7900-4099-b910-2df94f52a030',
   *     IdentityId: 'us-east-1:128d0a74-c82f-4553-916d-90053e4a8b0f'
   *
   *     // optional, only necessary when the identity pool is not configured
   *     // to use IAM roles in the Amazon Cognito Console
   *     // See the RoleArn param for AWS.STS.assumeRoleWithWebIdentity (linked below)
   *     RoleArn: 'arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity',
   *
   *     // optional tokens, used for authenticated login
   *     // See the Logins param for AWS.CognitoIdentity.getID (linked below)
   *     Logins: {
   *       'graph.facebook.com': 'FBTOKEN',
   *       'www.amazon.com': 'AMAZONTOKEN',
   *       'accounts.google.com': 'GOOGLETOKEN',
   *       'api.twitter.com': 'TWITTERTOKEN',
   *       'www.digits.com': 'DIGITSTOKEN'
   *     },
   *
   *     // optional name, defaults to web-identity
   *     // See the RoleSessionName param for AWS.STS.assumeRoleWithWebIdentity (linked below)
   *     RoleSessionName: 'web',
   *
   *     // optional, only necessary when application runs in a browser
   *     // and multiple users are signed in at once, used for caching
   *     LoginId: 'example@gmail.com'
   *
   *   }, {
   *      // optionally provide configuration to apply to the underlying service clients
   *      // if configuration is not provided, then configuration will be pulled from AWS.config
   *
   *      // region should match the region your identity pool is located in
   *      region: 'us-east-1',
   *
   *      // specify timeout options
   *      httpOptions: {
   *        timeout: 100
   *      }
   *   });
   * @see AWS.CognitoIdentity.getId
   * @see AWS.CognitoIdentity.getCredentialsForIdentity
   * @see AWS.STS.assumeRoleWithWebIdentity
   * @see AWS.CognitoIdentity.getOpenIdToken
   * @see AWS.Config
   * @note If a region is not provided in the global AWS.config, or
   *   specified in the `clientConfig` to the CognitoIdentityCredentials
   *   constructor, you may encounter a 'Missing credentials in config' error
   *   when calling making a service call.
   */
  constructor: function CognitoIdentityCredentials(params, clientConfig) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.data = null;
    this._identityId = null;
    this._clientConfig = AWS.util.copy(clientConfig || {});
    this.loadCachedId();
    var self = this;
    Object.defineProperty(this, 'identityId', {
      get: function() {
        self.loadCachedId();
        return self._identityId || self.params.IdentityId;
      },
      set: function(identityId) {
        self._identityId = identityId;
      }
    });
  },

  /**
   * Refreshes credentials using {AWS.CognitoIdentity.getCredentialsForIdentity},
   * or {AWS.STS.assumeRoleWithWebIdentity}.
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see AWS.Credentials.get
   */
  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    self.data = null;
    self._identityId = null;
    self.getId(function(err) {
      if (!err) {
        if (!self.params.RoleArn) {
          self.getCredentialsForIdentity(callback);
        } else {
          self.getCredentialsFromSTS(callback);
        }
      } else {
        self.clearIdOnNotAuthorized(err);
        callback(err);
      }
    });
  },

  /**
   * Clears the cached Cognito ID associated with the currently configured
   * identity pool ID. Use this to manually invalidate your cache if
   * the identity pool ID was deleted.
   */
  clearCachedId: function clearCache() {
    this._identityId = null;
    delete this.params.IdentityId;

    var poolId = this.params.IdentityPoolId;
    var loginId = this.params.LoginId || '';
    delete this.storage[this.localStorageKey.id + poolId + loginId];
    delete this.storage[this.localStorageKey.providers + poolId + loginId];
  },

  /**
   * @api private
   */
  clearIdOnNotAuthorized: function clearIdOnNotAuthorized(err) {
    var self = this;
    if (err.code == 'NotAuthorizedException') {
      self.clearCachedId();
    }
  },

  /**
   * Retrieves a Cognito ID, loading from cache if it was already retrieved
   * on this device.
   *
   * @callback callback function(err, identityId)
   *   @param err [Error, null] an error object if the call failed or null if
   *     it succeeded.
   *   @param identityId [String, null] if successful, the callback will return
   *     the Cognito ID.
   * @note If not loaded explicitly, the Cognito ID is loaded and stored in
   *   localStorage in the browser environment of a device.
   * @api private
   */
  getId: function getId(callback) {
    var self = this;
    if (typeof self.params.IdentityId === 'string') {
      return callback(null, self.params.IdentityId);
    }

    self.cognito.getId(function(err, data) {
      if (!err && data.IdentityId) {
        self.params.IdentityId = data.IdentityId;
        callback(null, data.IdentityId);
      } else {
        callback(err);
      }
    });
  },


  /**
   * @api private
   */
  loadCredentials: function loadCredentials(data, credentials) {
    if (!data || !credentials) return;
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
  },

  /**
   * @api private
   */
  getCredentialsForIdentity: function getCredentialsForIdentity(callback) {
    var self = this;
    self.cognito.getCredentialsForIdentity(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.data = data;
        self.loadCredentials(self.data, self);
      } else {
        self.clearIdOnNotAuthorized(err);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  getCredentialsFromSTS: function getCredentialsFromSTS(callback) {
    var self = this;
    self.cognito.getOpenIdToken(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.params.WebIdentityToken = data.Token;
        self.webIdentityCredentials.refresh(function(webErr) {
          if (!webErr) {
            self.data = self.webIdentityCredentials.data;
            self.sts.credentialsFrom(self.data, self);
          }
          callback(webErr);
        });
      } else {
        self.clearIdOnNotAuthorized(err);
        callback(err);
      }
    });
  },

  /**
   * @api private
   */
  loadCachedId: function loadCachedId() {
    var self = this;

    // in the browser we source default IdentityId from localStorage
    if (AWS.util.isBrowser() && !self.params.IdentityId) {
      var id = self.getStorage('id');
      if (id && self.params.Logins) {
        var actualProviders = Object.keys(self.params.Logins);
        var cachedProviders =
          (self.getStorage('providers') || '').split(',');

        // only load ID if at least one provider used this ID before
        var intersect = cachedProviders.filter(function(n) {
          return actualProviders.indexOf(n) !== -1;
        });
        if (intersect.length !== 0) {
          self.params.IdentityId = id;
        }
      } else if (id) {
        self.params.IdentityId = id;
      }
    }
  },

  /**
   * @api private
   */
  createClients: function() {
    var clientConfig = this._clientConfig;
    this.webIdentityCredentials = this.webIdentityCredentials ||
      new AWS.WebIdentityCredentials(this.params, clientConfig);
    if (!this.cognito) {
      var cognitoConfig = AWS.util.merge({}, clientConfig);
      cognitoConfig.params = this.params;
      this.cognito = new CognitoIdentity(cognitoConfig);
    }
    this.sts = this.sts || new STS(clientConfig);
  },

  /**
   * @api private
   */
  cacheId: function cacheId(data) {
    this._identityId = data.IdentityId;
    this.params.IdentityId = this._identityId;

    // cache this IdentityId in browser localStorage if possible
    if (AWS.util.isBrowser()) {
      this.setStorage('id', data.IdentityId);

      if (this.params.Logins) {
        this.setStorage('providers', Object.keys(this.params.Logins).join(','));
      }
    }
  },

  /**
   * @api private
   */
  getStorage: function getStorage(key) {
    return this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')];
  },

  /**
   * @api private
   */
  setStorage: function setStorage(key, val) {
    try {
      this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')] = val;
    } catch (_) {}
  },

  /**
   * @api private
   */
  storage: (function() {
    try {
      var storage = AWS.util.isBrowser() && window.localStorage !== null && typeof window.localStorage === 'object' ?
          window.localStorage : {};

      // Test set/remove which would throw an error in Safari's private browsing
      storage['aws.test-storage'] = 'foobar';
      delete storage['aws.test-storage'];

      return storage;
    } catch (_) {
      return {};
    }
  })()
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var AWS = __webpack_require__(0);
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
__webpack_require__(112);
Object.defineProperty(apiLoader.services['cognitoidentity'], '2014-06-30', {
  get: function get() {
    var model = __webpack_require__(113);
    model.paginators = __webpack_require__(114).pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoIdentity;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

AWS.util.update(AWS.CognitoIdentity.prototype, {
  getOpenIdToken: function getOpenIdToken(params, callback) {
    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
  },

  getId: function getId(params, callback) {
    return this.makeUnauthenticatedRequest('getId', params, callback);
  },

  getCredentialsForIdentity: function getCredentialsForIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('getCredentialsForIdentity', params, callback);
  }
});


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = {"version":"2.0","metadata":{"apiVersion":"2014-06-30","endpointPrefix":"cognito-identity","jsonVersion":"1.1","protocol":"json","serviceFullName":"Amazon Cognito Identity","serviceId":"Cognito Identity","signatureVersion":"v4","targetPrefix":"AWSCognitoIdentityService","uid":"cognito-identity-2014-06-30"},"operations":{"CreateIdentityPool":{"input":{"type":"structure","required":["IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"},"CognitoIdentityProviders":{"shape":"Sa"},"SamlProviderARNs":{"shape":"Sf"}}},"output":{"shape":"Sg"}},"DeleteIdentities":{"input":{"type":"structure","required":["IdentityIdsToDelete"],"members":{"IdentityIdsToDelete":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"UnprocessedIdentityIds":{"type":"list","member":{"type":"structure","members":{"IdentityId":{},"ErrorCode":{}}}}}}},"DeleteIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}}},"DescribeIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{}}},"output":{"shape":"Sr"}},"DescribeIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"shape":"Sg"}},"GetCredentialsForIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"Sw"},"CustomRoleArn":{}}},"output":{"type":"structure","members":{"IdentityId":{},"Credentials":{"type":"structure","members":{"AccessKeyId":{},"SecretKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}}}}},"GetId":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"AccountId":{},"IdentityPoolId":{},"Logins":{"shape":"Sw"}}},"output":{"type":"structure","members":{"IdentityId":{}}}},"GetIdentityPoolRoles":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Roles":{"shape":"S18"},"RoleMappings":{"shape":"S1a"}}}},"GetOpenIdToken":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"Sw"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}}},"GetOpenIdTokenForDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId","Logins"],"members":{"IdentityPoolId":{},"IdentityId":{},"Logins":{"shape":"Sw"},"TokenDuration":{"type":"long"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}}},"ListIdentities":{"input":{"type":"structure","required":["IdentityPoolId","MaxResults"],"members":{"IdentityPoolId":{},"MaxResults":{"type":"integer"},"NextToken":{},"HideDisabled":{"type":"boolean"}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Identities":{"type":"list","member":{"shape":"Sr"}},"NextToken":{}}}},"ListIdentityPools":{"input":{"type":"structure","required":["MaxResults"],"members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPools":{"type":"list","member":{"type":"structure","members":{"IdentityPoolId":{},"IdentityPoolName":{}}}},"NextToken":{}}}},"LookupDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{},"IdentityId":{},"DeveloperUserIdentifier":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityId":{},"DeveloperUserIdentifierList":{"type":"list","member":{}},"NextToken":{}}}},"MergeDeveloperIdentities":{"input":{"type":"structure","required":["SourceUserIdentifier","DestinationUserIdentifier","DeveloperProviderName","IdentityPoolId"],"members":{"SourceUserIdentifier":{},"DestinationUserIdentifier":{},"DeveloperProviderName":{},"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityId":{}}}},"SetIdentityPoolRoles":{"input":{"type":"structure","required":["IdentityPoolId","Roles"],"members":{"IdentityPoolId":{},"Roles":{"shape":"S18"},"RoleMappings":{"shape":"S1a"}}}},"UnlinkDeveloperIdentity":{"input":{"type":"structure","required":["IdentityId","IdentityPoolId","DeveloperProviderName","DeveloperUserIdentifier"],"members":{"IdentityId":{},"IdentityPoolId":{},"DeveloperProviderName":{},"DeveloperUserIdentifier":{}}}},"UnlinkIdentity":{"input":{"type":"structure","required":["IdentityId","Logins","LoginsToRemove"],"members":{"IdentityId":{},"Logins":{"shape":"Sw"},"LoginsToRemove":{"shape":"Ss"}}}},"UpdateIdentityPool":{"input":{"shape":"Sg"},"output":{"shape":"Sg"}}},"shapes":{"S4":{"type":"map","key":{},"value":{}},"S8":{"type":"list","member":{}},"Sa":{"type":"list","member":{"type":"structure","members":{"ProviderName":{},"ClientId":{},"ServerSideTokenCheck":{"type":"boolean"}}}},"Sf":{"type":"list","member":{}},"Sg":{"type":"structure","required":["IdentityPoolId","IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolId":{},"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"},"CognitoIdentityProviders":{"shape":"Sa"},"SamlProviderARNs":{"shape":"Sf"}}},"Sr":{"type":"structure","members":{"IdentityId":{},"Logins":{"shape":"Ss"},"CreationDate":{"type":"timestamp"},"LastModifiedDate":{"type":"timestamp"}}},"Ss":{"type":"list","member":{}},"Sw":{"type":"map","key":{},"value":{}},"S18":{"type":"map","key":{},"value":{}},"S1a":{"type":"map","key":{},"value":{"type":"structure","required":["Type"],"members":{"Type":{},"AmbiguousRoleResolution":{},"RulesConfiguration":{"type":"structure","required":["Rules"],"members":{"Rules":{"type":"list","member":{"type":"structure","required":["Claim","MatchType","Value","RoleARN"],"members":{"Claim":{},"MatchType":{},"Value":{},"RoleARN":{}}}}}}}}}}}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = {"pagination":{}}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var STS = __webpack_require__(13);

/**
 * Represents credentials retrieved from STS SAML support.
 *
 * By default this provider gets credentials using the
 * {AWS.STS.assumeRoleWithSAML} service operation. This operation
 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
 * application for which credentials will be given, as well as a `PrincipalArn`
 * representing the ARN for the SAML identity provider. In addition, the
 * `SAMLAssertion` must be set to the token provided by the identity
 * provider. See {constructor} for an example on creating a credentials
 * object with proper `RoleArn`, `PrincipalArn`, and `SAMLAssertion` values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the SAMLAssertion, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.SAMLAssertion = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.STS.assumeRoleWithSAML}. To update the token, set the
 *     `params.SAMLAssertion` property.
 */
AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new credentials object.
   * @param (see AWS.STS.assumeRoleWithSAML)
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.SAMLCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/SAMLRole',
   *     PrincipalArn: 'arn:aws:iam::1234567890:role/SAMLPrincipal',
   *     SAMLAssertion: 'base64-token', // base64-encoded token from IdP
   *   });
   * @see AWS.STS.assumeRoleWithSAML
   */
  constructor: function SAMLCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRoleWithSAML}
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithSAML(function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  createClients: function() {
    this.service = this.service || new STS({params: this.params});
  }

});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var Shape = __webpack_require__(8);

function DomXmlParser() { }

DomXmlParser.prototype.parse = function(xml, shape) {
  if (xml.replace(/^\s+/, '') === '') return {};

  var result, error;
  try {
    if (window.DOMParser) {
      try {
        var parser = new DOMParser();
        result = parser.parseFromString(xml, 'text/xml');
      } catch (syntaxError) {
        throw util.error(new Error('Parse error in document'),
          {
            originalError: syntaxError,
            code: 'XMLParserError',
            retryable: true
          });
      }

      if (result.documentElement === null) {
        throw util.error(new Error('Cannot parse empty document.'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }

      var isError = result.getElementsByTagName('parsererror')[0];
      if (isError && (isError.parentNode === result ||
          isError.parentNode.nodeName === 'body' ||
          isError.parentNode.parentNode === result ||
          isError.parentNode.parentNode.nodeName === 'body')) {
        var errorElement = isError.getElementsByTagName('div')[0] || isError;
        throw util.error(new Error(errorElement.textContent || 'Parser error in document'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }
    } else if (window.ActiveXObject) {
      result = new window.ActiveXObject('Microsoft.XMLDOM');
      result.async = false;

      if (!result.loadXML(xml)) {
        throw util.error(new Error('Parse error in document'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }
    } else {
      throw new Error('Cannot load XML parser');
    }
  } catch (e) {
    error = e;
  }

  if (result && result.documentElement && !error) {
    var data = parseXml(result.documentElement, shape);
    var metadata = getElementByTagName(result.documentElement, 'ResponseMetadata');
    if (metadata) {
      data.ResponseMetadata = parseXml(metadata, {});
    }
    return data;
  } else if (error) {
    throw util.error(error || new Error(), {code: 'XMLParserError', retryable: true});
  } else { // empty xml document
    return {};
  }
};

function getElementByTagName(xml, tag) {
  var elements = xml.getElementsByTagName(tag);
  for (var i = 0, iLen = elements.length; i < iLen; i++) {
    if (elements[i].parentNode === xml) {
      return elements[i];
    }
  }
}

function parseXml(xml, shape) {
  if (!shape) shape = {};
  switch (shape.type) {
    case 'structure': return parseStructure(xml, shape);
    case 'map': return parseMap(xml, shape);
    case 'list': return parseList(xml, shape);
    case undefined: case null: return parseUnknown(xml);
    default: return parseScalar(xml, shape);
  }
}

function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;

  util.each(shape.members, function(memberName, memberShape) {
    if (memberShape.isXmlAttribute) {
      if (Object.prototype.hasOwnProperty.call(xml.attributes, memberShape.name)) {
        var value = xml.attributes[memberShape.name].value;
        data[memberName] = parseXml({textContent: value}, memberShape);
      }
    } else {
      var xmlChild = memberShape.flattened ? xml :
        getElementByTagName(xml, memberShape.name)
      if (xmlChild) {
        data[memberName] = parseXml(xmlChild, memberShape);
      } else if (!memberShape.flattened && memberShape.type === 'list') {
        data[memberName] = memberShape.defaultValue;
      }
    }
  });

  return data;
}

function parseMap(xml, shape) {
  var data = {};
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';
  var tagName = shape.flattened ? shape.name : 'entry';

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      var key = getElementByTagName(child, xmlKey).textContent;
      var value = getElementByTagName(child, xmlValue);
      data[key] = parseXml(value, shape.value);
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseList(xml, shape) {
  var data = [];
  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      data.push(parseXml(child, shape.member));
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseScalar(xml, shape) {
  if (xml.getAttribute) {
    var encoding = xml.getAttribute('encoding');
    if (encoding === 'base64') {
      shape = new Shape.create({type: encoding});
    }
  }

  var text = xml.textContent;
  if (text === '') text = null;
  if (typeof shape.toType === 'function') {
    return shape.toType(text);
  } else {
    return text;
  }
}

function parseUnknown(xml) {
  if (xml === undefined || xml === null) return '';

  // empty object
  if (!xml.firstElementChild) {
    if (xml.parentNode.parentNode === null) return {};
    if (xml.childNodes.length === 0) return '';
    else return xml.textContent;
  }

  // object, parse as structure
  var shape = {type: 'structure', members: {}};
  var child = xml.firstElementChild;
  while (child) {
    var tag = child.nodeName;
    if (Object.prototype.hasOwnProperty.call(shape.members, tag)) {
      // multiple tags of the same name makes it a list
      shape.members[tag].type = 'list';
    } else {
      shape.members[tag] = {name: tag};
    }
    child = child.nextElementSibling;
  }
  return parseStructure(xml, shape);
}

/**
 * @api private
 */
module.exports = DomXmlParser;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var EventEmitter = __webpack_require__(118).EventEmitter;
__webpack_require__(34);

/**
 * @api private
 */
AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    var xhr = new XMLHttpRequest(), headersEmitted = false;
    httpRequest.stream = xhr;

    xhr.addEventListener('readystatechange', function() {
      try {
        if (xhr.status === 0) return; // 0 code is invalid
      } catch (e) { return; }

      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        emitter.emit(
          'headers',
          emitter.statusCode,
          emitter.headers,
          xhr.statusText
        );
        headersEmitted = true;
      }
      if (this.readyState === this.DONE) {
        self.finishRequest(xhr, emitter);
      }
    }, false);
    xhr.upload.addEventListener('progress', function (evt) {
      emitter.emit('sendProgress', evt);
    });
    xhr.addEventListener('progress', function (evt) {
      emitter.emit('receiveProgress', evt);
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }, false);
    xhr.addEventListener('abort', function () {
      errCallback(AWS.util.error(new Error('Request aborted'), {
        code: 'RequestAbortedError'
      }));
    }, false);

    callback(emitter);
    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
      xhr.timeout = httpOptions.timeout;
    }

    if (httpOptions.xhrWithCredentials) {
      xhr.withCredentials = true;
    }
    try { xhr.responseType = 'arraybuffer'; } catch (e) {}

    try {
      if (httpRequest.body) {
        xhr.send(httpRequest.body);
      } else {
        xhr.send();
      }
    } catch (err) {
      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
      } else {
        throw err;
      }
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0];
      var value = line.substring(key.length + 2);
      if (key.length > 0) headers[key.toLowerCase()] = value;
    });
    return headers;
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer;
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response;
      buffer = new AWS.util.Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText);
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer);
    emitter.emit('end');
  }
});

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.XHRClient.prototype;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = 1;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5
};
/**
* Write logs
* @class Logger
*/
var ConsoleLogger = /** @class */function () {
    /**
    * @constructor
    * @param {string} name - Name of the logger
    */
    function ConsoleLogger(name, level) {
        if (level === void 0) {
            level = 'WARN';
        }
        this.name = name;
        this.level = level;
    }
    ConsoleLogger.prototype._padding = function (n) {
        return n < 10 ? '0' + n : '' + n;
    };
    ConsoleLogger.prototype._ts = function () {
        var dt = new Date();
        return [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(':') + '.' + dt.getMilliseconds();
    };
    /**
    * Write log
    * @method
    * @memeberof Logger
    * @param {string} type - log type, default INFO
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype._log = function (type) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var logger_level_name = this.level;
        if (ConsoleLogger.LOG_LEVEL) {
            logger_level_name = ConsoleLogger.LOG_LEVEL;
        }
        if (typeof window !== 'undefined' && window.LOG_LEVEL) {
            logger_level_name = window.LOG_LEVEL;
        }
        var logger_level = LOG_LEVELS[logger_level_name];
        var type_level = LOG_LEVELS[type];
        if (!(type_level >= logger_level)) {
            // Do nothing if type is not greater than or equal to logger level (handle undefined)
            return;
        }
        var log = console.log.bind(console);
        // if (type === 'ERROR' && console.error) { log = console.error.bind(console); }
        if (type === 'WARN' && console.warn) {
            log = console.warn.bind(console);
        }
        var prefix = "[" + type + "] " + this._ts() + " " + this.name;
        if (msg.length === 1 && typeof msg[0] === 'string') {
            log(prefix + " - " + msg[0]);
        } else if (msg.length === 1) {
            log(prefix, msg[0]);
        } else if (typeof msg[0] === 'string') {
            var obj = msg.slice(1);
            if (obj.length === 1) {
                obj = obj[0];
            }
            log(prefix + " - " + msg[0], obj);
        } else {
            log(prefix, msg);
        }
    };
    /**
    * Write General log. Default to INFO
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['INFO'].concat(msg));
    };
    /**
    * Write INFO log
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['INFO'].concat(msg));
    };
    /**
    * Write WARN log
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['WARN'].concat(msg));
    };
    /**
    * Write ERROR log
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['ERROR'].concat(msg));
    };
    /**
    * Write DEBUG log
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.debug = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['DEBUG'].concat(msg));
    };
    /**
    * Write VERBOSE log
    * @method
    * @memeberof Logger
    * @param {string|object} msg - Logging message or object
    */
    ConsoleLogger.prototype.verbose = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        this._log.apply(this, ['VERBOSE'].concat(msg));
    };
    ConsoleLogger.LOG_LEVEL = null;
    return ConsoleLogger;
}();
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Browser = __webpack_require__(121);
var ClientDevice = /** @class */function () {
    function ClientDevice() {}
    ClientDevice.clientInfo = function () {
        return Browser.clientInfo();
    };
    ClientDevice.dimension = function () {
        return Browser.dimension();
    };
    return ClientDevice;
}();
exports.default = ClientDevice;
//# sourceMappingURL=index.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var logger = new Logger_1.ConsoleLogger('ClientDevice_Browser');
function clientInfo() {
    if (typeof window === 'undefined') {
        return {};
    }
    return browserClientInfo();
}
exports.clientInfo = clientInfo;
function browserClientInfo() {
    if (typeof window === 'undefined') {
        logger.warn('No window object available to get browser client info');
        return {};
    }
    var nav = window.navigator;
    if (!nav) {
        logger.warn('No navigator object available to get browser client info');
        return {};
    }
    var platform = nav.platform,
        product = nav.product,
        vendor = nav.vendor,
        userAgent = nav.userAgent,
        language = nav.language;
    var type = browserType(userAgent);
    var timezone = browserTimezone();
    return {
        'platform': platform,
        'make': product || vendor,
        'model': type.type,
        'version': type.version,
        'appVersion': [type.type, type.version].join('/'),
        'language': language,
        'timezone': timezone
    };
}
function dimension() {
    if (typeof window === 'undefined') {
        logger.warn('No window object available to get browser client info');
        return { width: 320, height: 320 };
    }
    return {
        'width': window.innerWidth,
        'height': window.innerHeight
    };
}
exports.dimension = dimension;
function browserTimezone() {
    var tzMatch = /\(([A-Za-z\s].*)\)/.exec(new Date().toString());
    return tzMatch ? tzMatch[1] || "" : "";
}
function browserType(userAgent) {
    var operaMatch = /.+(Opera[\s[A-Z]*|OPR[\sA-Z]*)\/([0-9\.]+).*/i.exec(userAgent);
    if (operaMatch) {
        return { type: operaMatch[1], version: operaMatch[2] };
    }
    var cfMatch = /.+(Chrome|Firefox|FxiOS)\/([0-9\.]+).*/i.exec(userAgent);
    if (cfMatch) {
        return { type: cfMatch[1], version: cfMatch[2] };
    }
    var ieMatch = /.+(Trident|Edge)\/([0-9\.]+).*/i.exec(userAgent);
    if (ieMatch) {
        return { type: ieMatch[1], version: ieMatch[2] };
    }
    var sMatch = /.+(Safari)\/([0-9\.]+).*/i.exec(userAgent);
    if (sMatch) {
        return { type: sMatch[1], version: sMatch[2] };
    }
    var awkMatch = /.+(AppleWebKit)\/([0-9\.]+).*/i.exec(userAgent);
    if (awkMatch) {
        return { type: awkMatch[1], version: awkMatch[2] };
    }
    var anyMatch = /.*([A-Z]+)\/([0-9\.]+).*/i.exec(userAgent);
    if (anyMatch) {
        return { type: anyMatch[1], version: anyMatch[2] };
    }
    return { type: '', version: '' };
}
//# sourceMappingURL=browser.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
function missingConfig(name) {
  return new Error('Missing config value of ' + name);
}
exports.missingConfig = missingConfig;
function invalidParameter(name) {
  return new Error('Invalid parameter value of ' + name);
}
exports.invalidParameter = invalidParameter;
//# sourceMappingURL=Errors.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var logger = new Logger_1.ConsoleLogger('Hub');
var AMPLIFY_SYMBOL = typeof Symbol !== 'undefined' && typeof Symbol.for === 'function' ? Symbol.for('amplify_default') : '@@amplify_default';
function isLegacyCallback(callback) {
    return callback.onHubCapsule !== undefined;
}
var HubClass = /** @class */function () {
    function HubClass(name) {
        this.listeners = [];
        this.patterns = [];
        this.protectedChannels = ['core', 'auth', 'api', 'analytics', 'interactions', 'pubsub', 'storage', 'xr'];
        this.name = name;
    }
    // Note - Need to pass channel as a reference for removal to work and not anonymous function
    HubClass.prototype.remove = function (channel, listener) {
        if (channel instanceof RegExp) {
            var pattern_1 = this.patterns.find(function (_a) {
                var pattern = _a.pattern;
                return pattern.source === channel.source;
            });
            if (!pattern_1) {
                logger.warn("No listeners for " + channel);
                return;
            }
            this.patterns = this.patterns.filter(function (x) {
                return x !== pattern_1;
            }).slice();
        } else {
            var holder = this.listeners[channel];
            if (!holder) {
                logger.warn("No listeners for " + channel);
                return;
            }
            this.listeners[channel] = holder.filter(function (_a) {
                var callback = _a.callback;
                return callback !== listener;
            }).slice();
        }
    };
    HubClass.prototype.dispatch = function (channel, payload, source, ampSymbol) {
        if (source === void 0) {
            source = '';
        }
        if (this.protectedChannels.indexOf(channel) > -1) {
            var hasAccess = ampSymbol === AMPLIFY_SYMBOL;
            if (!hasAccess) {
                logger.warn("WARNING: " + channel + " is protected and dispatching on it can have unintended consequences");
            }
        }
        var capsule = {
            channel: channel,
            payload: __assign({}, payload),
            source: source,
            patternInfo: []
        };
        try {
            this._toListeners(capsule);
        } catch (e) {
            logger.error(e);
        }
    };
    HubClass.prototype.listen = function (channel, callback, listenerName) {
        if (listenerName === void 0) {
            listenerName = 'noname';
        }
        var cb;
        // Check for legacy onHubCapsule callback for backwards compatability
        if (isLegacyCallback(callback)) {
            logger.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback.");
            cb = callback.onHubCapsule.bind(callback);
        } else if (typeof callback !== 'function') {
            throw new Error('No callback supplied to Hub');
        } else {
            cb = callback;
        }
        if (channel instanceof RegExp) {
            this.patterns.push({
                pattern: channel,
                callback: cb
            });
        } else {
            var holder = this.listeners[channel];
            if (!holder) {
                holder = [];
                this.listeners[channel] = holder;
            }
            holder.push({
                name: listenerName,
                callback: cb
            });
        }
    };
    HubClass.prototype._toListeners = function (capsule) {
        var channel = capsule.channel,
            payload = capsule.payload;
        var holder = this.listeners[channel];
        if (holder) {
            holder.forEach(function (listener) {
                logger.debug("Dispatching to " + channel + " with ", payload);
                try {
                    listener.callback(capsule);
                } catch (e) {
                    logger.error(e);
                }
            });
        }
        if (this.patterns.length > 0) {
            if (!payload.message) {
                logger.warn("Cannot perform pattern matching without a message key");
                return;
            }
            var payloadStr_1 = payload.message;
            this.patterns.forEach(function (pattern) {
                var match = payloadStr_1.match(pattern.pattern);
                if (match) {
                    var groups = match.slice(1);
                    var dispatchingCapsule = __assign({}, capsule, { patternInfo: groups });
                    try {
                        pattern.callback(dispatchingCapsule);
                    } catch (e) {
                        logger.error(e);
                    }
                }
            });
        }
    };
    return HubClass;
}();
exports.HubClass = HubClass;
/*We export a __default__ instance of HubClass to use it as a
psuedo Singleton for the main messaging bus, however you can still create
your own instance of HubClass() for a separate "private bus" of events.*/
var Hub = new HubClass('__default__');
exports.default = Hub;
//# sourceMappingURL=Hub.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var I18n_1 = __webpack_require__(125);
var Logger_1 = __webpack_require__(3);
var Amplify_1 = __webpack_require__(14);
var logger = new Logger_1.ConsoleLogger('I18n');
var _config = null;
var _i18n = null;
/**
 * Export I18n APIs
 */
var I18n = /** @class */function () {
    function I18n() {}
    /**
     * @static
     * @method
     * Configure I18n part
     * @param {Object} config - Configuration of the I18n
     */
    I18n.configure = function (config) {
        logger.debug('configure I18n');
        if (!config) {
            return _config;
        }
        _config = Object.assign({}, _config, config.I18n || config);
        I18n.createInstance();
        return _config;
    };
    I18n.getModuleName = function () {
        return 'I18n';
    };
    /**
     * @static
     * @method
     * Create an instance of I18n for the library
     */
    I18n.createInstance = function () {
        logger.debug('create I18n instance');
        if (_i18n) {
            return;
        }
        _i18n = new I18n_1.I18n(_config);
    };
    /**
     * @static @method
     * Explicitly setting language
     * @param {String} lang
     */
    I18n.setLanguage = function (lang) {
        I18n.checkConfig();
        return _i18n.setLanguage(lang);
    };
    /**
     * @static @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */
    I18n.get = function (key, defVal) {
        if (!I18n.checkConfig()) {
            return typeof defVal === 'undefined' ? key : defVal;
        }
        return _i18n.get(key, defVal);
    };
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {String} langurage - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */
    I18n.putVocabulariesForLanguage = function (language, vocabularies) {
        I18n.checkConfig();
        return _i18n.putVocabulariesForLanguage(language, vocabularies);
    };
    /**
     * @static
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */
    I18n.putVocabularies = function (vocabularies) {
        I18n.checkConfig();
        return _i18n.putVocabularies(vocabularies);
    };
    I18n.checkConfig = function () {
        if (!_i18n) {
            _i18n = new I18n_1.I18n(_config);
        }
        return true;
    };
    return I18n;
}();
Amplify_1.default.register(I18n);
exports.default = I18n;
//# sourceMappingURL=index.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var logger = new Logger_1.ConsoleLogger('I18n');
/**
 * Language transition class
 */
var I18n = /** @class */function () {
    /**
     * @constructor
     * Initialize with configurations
     * @param {Object} options
     */
    function I18n(options) {
        /**
         * @private
         */
        this._options = null;
        /**
         * @private
         */
        this._lang = null;
        /**
         * @private
         */
        this._dict = {};
        this._options = Object.assign({}, options);
        this._lang = this._options.language;
        if (!this._lang && typeof window !== 'undefined' && window && window.navigator) {
            this._lang = window.navigator.language;
        }
        logger.debug(this._lang);
    }
    /**
     * @method
     * Explicitly setting language
     * @param {String} lang
     */
    I18n.prototype.setLanguage = function (lang) {
        this._lang = lang;
    };
    /**
     * @method
     * Get value
     * @param {String} key
     * @param {String} defVal - Default value
     */
    I18n.prototype.get = function (key, defVal) {
        if (defVal === void 0) {
            defVal = undefined;
        }
        if (!this._lang) {
            return typeof defVal !== 'undefined' ? defVal : key;
        }
        var lang = this._lang;
        var val = this.getByLanguage(key, lang);
        if (val) {
            return val;
        }
        if (lang.indexOf('-') > 0) {
            val = this.getByLanguage(key, lang.split('-')[0]);
        }
        if (val) {
            return val;
        }
        return typeof defVal !== 'undefined' ? defVal : key;
    };
    /**
     * @method
     * Get value according to specified language
     * @param {String} key
     * @param {String} language - Specified langurage to be used
     * @param {String} defVal - Default value
     */
    I18n.prototype.getByLanguage = function (key, language, defVal) {
        if (defVal === void 0) {
            defVal = null;
        }
        if (!language) {
            return defVal;
        }
        var lang_dict = this._dict[language];
        if (!lang_dict) {
            return defVal;
        }
        return lang_dict[key];
    };
    /**
     * @method
     * Add vocabularies for one language
     * @param {String} langurage - Language of the dictionary
     * @param {Object} vocabularies - Object that has key-value as dictionary entry
     */
    I18n.prototype.putVocabulariesForLanguage = function (language, vocabularies) {
        var lang_dict = this._dict[language];
        if (!lang_dict) {
            lang_dict = this._dict[language] = {};
        }
        Object.assign(lang_dict, vocabularies);
    };
    /**
     * @method
     * Add vocabularies for one language
     * @param {Object} vocabularies - Object that has language as key,
     *                                vocabularies of each language as value
     */
    I18n.prototype.putVocabularies = function (vocabularies) {
        var _this = this;
        Object.keys(vocabularies).map(function (key) {
            _this.putVocabulariesForLanguage(key, vocabularies[key]);
        });
    };
    return I18n;
}();
exports.I18n = I18n;
//# sourceMappingURL=I18n.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var Facet_1 = __webpack_require__(10);
var logger = new Logger_1.ConsoleLogger('Signer'),
    url = __webpack_require__(38),
    crypto = Facet_1.AWS['util'].crypto;
var DEFAULT_ALGORITHM = 'AWS4-HMAC-SHA256';
var IOT_SERVICE_NAME = 'iotdevicegateway';
var encrypt = function encrypt(key, src, encoding) {
    return crypto.lib.createHmac('sha256', key).update(src, 'utf8').digest(encoding);
};
var hash = function hash(src) {
    var arg = src || '';
    return crypto.createHash('sha256').update(arg, 'utf8').digest('hex');
};
/**
 * @private
 * RFC 3986 compliant version of encodeURIComponent
 */
var escape_RFC3986 = function escape_RFC3986(component) {
    return component.replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
};
/**
 * @private
 * Create canonical query string
 *
*/
var canonical_query = function canonical_query(query) {
    if (!query || query.length === 0) {
        return '';
    }
    return query.split('&').map(function (e) {
        var key_val = e.split('=');
        if (key_val.length === 1) {
            return e;
        } else {
            var reencoded_val = escape_RFC3986(key_val[1]);
            return key_val[0] + '=' + reencoded_val;
        }
    }).sort(function (a, b) {
        return a < b ? -1 : 1;
    }).join('&');
};
/**
* @private
* Create canonical headers
*
<pre>
CanonicalHeaders =
    CanonicalHeadersEntry0 + CanonicalHeadersEntry1 + ... + CanonicalHeadersEntryN
CanonicalHeadersEntry =
    Lowercase(HeaderName) + ':' + Trimall(HeaderValue) + '\n'
</pre>
*/
var canonical_headers = function canonical_headers(headers) {
    if (!headers || Object.keys(headers).length === 0) {
        return '';
    }
    return Object.keys(headers).map(function (key) {
        return {
            key: key.toLowerCase(),
            value: headers[key] ? headers[key].trim().replace(/\s+/g, ' ') : ''
        };
    }).sort(function (a, b) {
        return a.key < b.key ? -1 : 1;
    }).map(function (item) {
        return item.key + ':' + item.value;
    }).join('\n') + '\n';
};
/**
* List of header keys included in the canonical headers.
* @access private
*/
var signed_headers = function signed_headers(headers) {
    return Object.keys(headers).map(function (key) {
        return key.toLowerCase();
    }).sort().join(';');
};
/**
* @private
* Create canonical request
* Refer to
* {@link http://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html|Create a Canonical Request}
*
<pre>
CanonicalRequest =
    HTTPRequestMethod + '\n' +
    CanonicalURI + '\n' +
    CanonicalQueryString + '\n' +
    CanonicalHeaders + '\n' +
    SignedHeaders + '\n' +
    HexEncode(Hash(RequestPayload))
</pre>
*/
var canonical_request = function canonical_request(request) {
    var url_info = url.parse(request.url);
    return [request.method || '/', encodeURIComponent(url_info.pathname).replace(/%2F/ig, '/'), canonical_query(url_info.query), canonical_headers(request.headers), signed_headers(request.headers), hash(request.data)].join('\n');
};
var parse_service_info = function parse_service_info(request) {
    var url_info = url.parse(request.url),
        host = url_info.host;
    var matched = host.match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com$/);
    var parsed = (matched || []).slice(1, 3);
    if (parsed[1] === 'es') {
        // Elastic Search
        parsed = parsed.reverse();
    }
    return {
        service: request.service || parsed[0],
        region: request.region || parsed[1]
    };
};
var credential_scope = function credential_scope(d_str, region, service) {
    return [d_str, region, service, 'aws4_request'].join('/');
};
/**
* @private
* Create a string to sign
* Refer to
* {@link http://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html|Create String to Sign}
*
<pre>
StringToSign =
    Algorithm + \n +
    RequestDateTime + \n +
    CredentialScope + \n +
    HashedCanonicalRequest
</pre>
*/
var string_to_sign = function string_to_sign(algorithm, canonical_request, dt_str, scope) {
    return [algorithm, dt_str, scope, hash(canonical_request)].join('\n');
};
/**
* @private
* Create signing key
* Refer to
* {@link http://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html|Calculate Signature}
*
<pre>
kSecret = your secret access key
kDate = HMAC("AWS4" + kSecret, Date)
kRegion = HMAC(kDate, Region)
kService = HMAC(kRegion, Service)
kSigning = HMAC(kService, "aws4_request")
</pre>
*/
var get_signing_key = function get_signing_key(secret_key, d_str, service_info) {
    logger.debug(service_info);
    var k = 'AWS4' + secret_key,
        k_date = encrypt(k, d_str),
        k_region = encrypt(k_date, service_info.region),
        k_service = encrypt(k_region, service_info.service),
        k_signing = encrypt(k_service, 'aws4_request');
    return k_signing;
};
var get_signature = function get_signature(signing_key, str_to_sign) {
    return encrypt(signing_key, str_to_sign, 'hex');
};
/**
* @private
* Create authorization header
* Refer to
* {@link http://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html|Add the Signing Information}
*/
var get_authorization_header = function get_authorization_header(algorithm, access_key, scope, signed_headers, signature) {
    return [algorithm + ' ' + 'Credential=' + access_key + '/' + scope, 'SignedHeaders=' + signed_headers, 'Signature=' + signature].join(', ');
};
/**
* Sign a HTTP request, add 'Authorization' header to request param
* @method sign
* @memberof Signer
* @static
*
* @param {object} request - HTTP request object
<pre>
request: {
    method: GET | POST | PUT ...
    url: ...,
    headers: {
        header1: ...
    },
    data: data
}
</pre>
* @param {object} access_info - AWS access credential info
<pre>
access_info: {
    access_key: ...,
    secret_key: ...,
    session_token: ...
}
</pre>
* @param {object} [service_info] - AWS service type and region, optional,
*                                  if not provided then parse out from url
<pre>
service_info: {
    service: ...,
    region: ...
}
</pre>
*
* @returns {object} Signed HTTP request
*/
var sign = function sign(request, access_info, service_info) {
    if (service_info === void 0) {
        service_info = null;
    }
    request.headers = request.headers || {};
    // datetime string and date string
    var dt = new Date(),
        dt_str = dt.toISOString().replace(/[:\-]|\.\d{3}/g, ''),
        d_str = dt_str.substr(0, 8);
    var url_info = url.parse(request.url);
    request.headers['host'] = url_info.host;
    request.headers['x-amz-date'] = dt_str;
    if (access_info.session_token) {
        request.headers['X-Amz-Security-Token'] = access_info.session_token;
    }
    // Task 1: Create a Canonical Request
    var request_str = canonical_request(request);
    logger.debug(request_str);
    // Task 2: Create a String to Sign
    var serviceInfo = service_info || parse_service_info(request),
        scope = credential_scope(d_str, serviceInfo.region, serviceInfo.service),
        str_to_sign = string_to_sign(DEFAULT_ALGORITHM, request_str, dt_str, scope);
    // Task 3: Calculate the Signature
    var signing_key = get_signing_key(access_info.secret_key, d_str, serviceInfo),
        signature = get_signature(signing_key, str_to_sign);
    // Task 4: Adding the Signing information to the Request
    var authorization_header = get_authorization_header(DEFAULT_ALGORITHM, access_info.access_key, scope, signed_headers(request.headers), signature);
    request.headers['Authorization'] = authorization_header;
    return request;
};
var signUrl = function signUrl(urlToSign, accessInfo, serviceInfo, expiration) {
    var now = new Date().toISOString().replace(/[:\-]|\.\d{3}/g, '');
    var today = now.substr(0, 8);
    // Intentionally discarding search
    var _a = url.parse(urlToSign, true, true),
        search = _a.search,
        parsedUrl = __rest(_a, ["search"]);
    var host = parsedUrl.host;
    var signedHeaders = { host: host };
    var _b = serviceInfo || parse_service_info({ url: url.format(parsedUrl) }),
        region = _b.region,
        service = _b.service;
    var credentialScope = credential_scope(today, region, service);
    // IoT service does not allow the session token in the canonical request
    // https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.html
    var sessionTokenRequired = accessInfo.session_token && service !== IOT_SERVICE_NAME;
    var queryParams = __assign({ 'X-Amz-Algorithm': DEFAULT_ALGORITHM, 'X-Amz-Credential': [accessInfo.access_key, credentialScope].join('/'), 'X-Amz-Date': now.substr(0, 16) }, sessionTokenRequired ? { 'X-Amz-Security-Token': "" + accessInfo.session_token } : {}, expiration ? { 'X-Amz-Expires': "" + expiration } : {}, { 'X-Amz-SignedHeaders': Object.keys(signedHeaders).join(',') });
    var canonicalRequest = canonical_request({
        method: 'GET',
        url: url.format(__assign({}, parsedUrl, { query: __assign({}, parsedUrl.query, queryParams) })),
        headers: signedHeaders
    });
    var stringToSign = string_to_sign(DEFAULT_ALGORITHM, canonicalRequest, now, credentialScope);
    var signing_key = get_signing_key(accessInfo.secret_key, today, { region: region, service: service });
    var signature = get_signature(signing_key, stringToSign);
    var additionalQueryParams = __assign({ 'X-Amz-Signature': signature }, accessInfo.session_token && { 'X-Amz-Security-Token': accessInfo.session_token });
    var result = url.format({
        protocol: parsedUrl.protocol,
        slashes: true,
        hostname: parsedUrl.hostname,
        pathname: parsedUrl.pathname,
        query: __assign({}, parsedUrl.query, queryParams, additionalQueryParams)
    });
    return result;
};
/**
* AWS request signer.
* Refer to {@link http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html|Signature Version 4}
*
* @class Signer
*/
var Signer = /** @class */function () {
    function Signer() {}
    Signer.sign = sign;
    Signer.signUrl = signUrl;
    return Signer;
}();
exports.default = Signer;
//# sourceMappingURL=Signer.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var logger = new Logger_1.ConsoleLogger('Parser');
var Parser = /** @class */function () {
    function Parser() {}
    Parser.parseMobilehubConfig = function (config) {
        var amplifyConfig = {};
        // Analytics
        if (config['aws_mobile_analytics_app_id']) {
            var Analytics = {
                AWSPinpoint: {
                    appId: config['aws_mobile_analytics_app_id'],
                    region: config['aws_mobile_analytics_app_region']
                }
            };
            amplifyConfig.Analytics = Analytics;
        }
        // Auth
        if (config['aws_cognito_identity_pool_id'] || config['aws_user_pools_id']) {
            var Auth = {
                userPoolId: config['aws_user_pools_id'],
                userPoolWebClientId: config['aws_user_pools_web_client_id'],
                region: config['aws_cognito_region'],
                identityPoolId: config['aws_cognito_identity_pool_id'],
                mandatorySignIn: config['aws_mandatory_sign_in'] === 'enable' ? true : false
            };
            amplifyConfig.Auth = Auth;
        }
        // Storage
        var storageConfig;
        if (config['aws_user_files_s3_bucket']) {
            storageConfig = {
                AWSS3: {
                    bucket: config['aws_user_files_s3_bucket'],
                    region: config['aws_user_files_s3_bucket_region']
                }
            };
        } else {
            storageConfig = config ? config.Storage || config : {};
        }
        amplifyConfig.Analytics = Object.assign({}, amplifyConfig.Analytics, config.Analytics);
        amplifyConfig.Auth = Object.assign({}, amplifyConfig.Auth, config.Auth);
        amplifyConfig.Storage = Object.assign({}, storageConfig);
        logger.debug('parse config', config, 'to amplifyconfig', amplifyConfig);
        return amplifyConfig;
    };
    return Parser;
}();
exports.default = Parser;
//# sourceMappingURL=Parser.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var Logger_1 = __webpack_require__(3);
var JS_1 = __webpack_require__(7);
var logger = new Logger_1.ConsoleLogger('CognitoCredentials');
var waitForInit = new Promise(function (res, rej) {
    if (!JS_1.default.browserOrNode().isBrowser) {
        logger.debug('not in the browser, directly resolved');
        return res();
    }
    var ga = window['gapi'] && window['gapi'].auth2 ? window['gapi'].auth2 : null;
    if (ga) {
        logger.debug('google api already loaded');
        return res();
    } else {
        setTimeout(function () {
            return res();
        }, 2000);
    }
});
var GoogleOAuth = /** @class */function () {
    function GoogleOAuth() {
        this.initialized = false;
        this.refreshGoogleToken = this.refreshGoogleToken.bind(this);
        this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
    }
    GoogleOAuth.prototype.refreshGoogleToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        logger.debug('need to wait for the Google SDK loaded');
                        return [4 /*yield*/, waitForInit];
                    case 1:
                        _a.sent();
                        this.initialized = true;
                        logger.debug('finish waiting');
                        _a.label = 2;
                    case 2:
                        return [2 /*return*/, this._refreshGoogleTokenImpl()];
                }
            });
        });
    };
    GoogleOAuth.prototype._refreshGoogleTokenImpl = function () {
        var ga = null;
        if (JS_1.default.browserOrNode().isBrowser) ga = window['gapi'] && window['gapi'].auth2 ? window['gapi'].auth2 : null;
        if (!ga) {
            logger.debug('no gapi auth2 available');
            return Promise.reject('no gapi auth2 available');
        }
        return new Promise(function (res, rej) {
            ga.getAuthInstance().then(function (googleAuth) {
                if (!googleAuth) {
                    console.log('google Auth undefiend');
                    rej('google Auth undefiend');
                }
                var googleUser = googleAuth.currentUser.get();
                // refresh the token
                if (googleUser.isSignedIn()) {
                    logger.debug('refreshing the google access token');
                    googleUser.reloadAuthResponse().then(function (authResponse) {
                        var id_token = authResponse.id_token,
                            expires_at = authResponse.expires_at;
                        var profile = googleUser.getBasicProfile();
                        var user = {
                            email: profile.getEmail(),
                            name: profile.getName()
                        };
                        res({ token: id_token, expires_at: expires_at });
                    });
                } else {
                    rej('User is not signed in with Google');
                }
            }).catch(function (err) {
                logger.debug('Failed to refresh google token', err);
                rej('Failed to refresh google token');
            });
        });
    };
    return GoogleOAuth;
}();
exports.default = GoogleOAuth;
//# sourceMappingURL=GoogleOAuth.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var Logger_1 = __webpack_require__(3);
var JS_1 = __webpack_require__(7);
var logger = new Logger_1.ConsoleLogger('CognitoCredentials');
var waitForInit = new Promise(function (res, rej) {
    if (!JS_1.default.browserOrNode().isBrowser) {
        logger.debug('not in the browser, directly resolved');
        return res();
    }
    var fb = window['FB'];
    if (fb) {
        logger.debug('FB SDK already loaded');
        return res();
    } else {
        setTimeout(function () {
            return res();
        }, 2000);
    }
});
var FacebookOAuth = /** @class */function () {
    function FacebookOAuth() {
        this.initialized = false;
        this.refreshFacebookToken = this.refreshFacebookToken.bind(this);
        this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    FacebookOAuth.prototype.refreshFacebookToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.initialized) return [3 /*break*/, 2];
                        logger.debug('need to wait for the Facebook SDK loaded');
                        return [4 /*yield*/, waitForInit];
                    case 1:
                        _a.sent();
                        this.initialized = true;
                        logger.debug('finish waiting');
                        _a.label = 2;
                    case 2:
                        return [2 /*return*/, this._refreshFacebookTokenImpl()];
                }
            });
        });
    };
    FacebookOAuth.prototype._refreshFacebookTokenImpl = function () {
        var fb = null;
        if (JS_1.default.browserOrNode().isBrowser) fb = window['FB'];
        if (!fb) {
            logger.debug('no fb sdk available');
            return Promise.reject('no fb sdk available');
        }
        return new Promise(function (res, rej) {
            fb.getLoginStatus(function (fbResponse) {
                if (!fbResponse || !fbResponse.authResponse) {
                    logger.debug('no response from facebook when refreshing the jwt token');
                    rej('no response from facebook when refreshing the jwt token');
                }
                var response = fbResponse.authResponse;
                var accessToken = response.accessToken,
                    expiresIn = response.expiresIn;
                var date = new Date();
                var expires_at = expiresIn * 1000 + date.getTime();
                if (!accessToken) {
                    logger.debug('the jwtToken is undefined');
                    rej('the jwtToken is undefined');
                }
                res({ token: accessToken, expires_at: expires_at });
            }, { scope: 'public_profile,email' });
        });
    };
    return FacebookOAuth;
}();
exports.default = FacebookOAuth;
//# sourceMappingURL=FacebookOAuth.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var JS_1 = __webpack_require__(7);
var StorageHelper_1 = __webpack_require__(20);
var Linking = {};
exports.Linking = Linking;
var AppState = {
    addEventListener: function addEventListener(action, handler) {
        return;
    }
};
exports.AppState = AppState;
// if not in react native, just use local storage
var AsyncStorage = JS_1.default.browserOrNode().isBrowser ? new StorageHelper_1.default().getStorage() : undefined;
exports.AsyncStorage = AsyncStorage;
//# sourceMappingURL=index.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __webpack_require__(3);
var StorageHelper_1 = __webpack_require__(20);
var Facet_1 = __webpack_require__(10);
var JS_1 = __webpack_require__(7);
var OAuthHelper_1 = __webpack_require__(41);
var Amplify_1 = __webpack_require__(14);
var logger = new Logger_1.ConsoleLogger('Credentials');
var Credentials = /** @class */function () {
    function Credentials(config) {
        this._gettingCredPromise = null;
        this._refreshHandlers = {};
        this.configure(config);
        this._refreshHandlers['google'] = OAuthHelper_1.GoogleOAuth.refreshGoogleToken;
        this._refreshHandlers['facebook'] = OAuthHelper_1.FacebookOAuth.refreshFacebookToken;
    }
    Credentials.prototype.getCredSource = function () {
        return this._credentials_source;
    };
    Credentials.prototype.configure = function (config) {
        if (!config) return this._config || {};
        this._config = Object.assign({}, this._config, config);
        var refreshHandlers = this._config.refreshHandlers;
        // If the developer has provided an object of refresh handlers,
        // then we can merge the provided handlers with the current handlers.
        if (refreshHandlers) {
            this._refreshHandlers = __assign({}, this._refreshHandlers, refreshHandlers);
        }
        this._storage = this._config.storage;
        if (!this._storage) {
            this._storage = new StorageHelper_1.default().getStorage();
        }
        this._storageSync = Promise.resolve();
        if (typeof this._storage['sync'] === 'function') {
            this._storageSync = this._storage['sync']();
        }
        return this._config;
    };
    Credentials.prototype.get = function () {
        logger.debug('getting credentials');
        return this._pickupCredentials();
    };
    Credentials.prototype._pickupCredentials = function () {
        logger.debug('picking up credentials');
        if (!this._gettingCredPromise || !this._gettingCredPromise.isPending()) {
            logger.debug('getting new cred promise');
            if (Facet_1.AWS.config && Facet_1.AWS.config.credentials && Facet_1.AWS.config.credentials instanceof Facet_1.AWS.Credentials) {
                this._gettingCredPromise = JS_1.default.makeQuerablePromise(this._setCredentialsFromAWS());
            } else {
                this._gettingCredPromise = JS_1.default.makeQuerablePromise(this._keepAlive());
            }
        } else {
            logger.debug('getting old cred promise');
        }
        return this._gettingCredPromise;
    };
    Credentials.prototype._keepAlive = function () {
        logger.debug('checking if credentials exists and not expired');
        var cred = this._credentials;
        if (cred && !this._isExpired(cred)) {
            logger.debug('credentials not changed and not expired, directly return');
            return Promise.resolve(cred);
        }
        logger.debug('need to get a new credential or refresh the existing one');
        if (Amplify_1.default.Auth && typeof Amplify_1.default.Auth.currentUserCredentials === 'function') {
            return Amplify_1.default.Auth.currentUserCredentials();
        } else {
            return Promise.reject('No Auth module registered in Amplify');
        }
    };
    Credentials.prototype.refreshFederatedToken = function (federatedInfo) {
        var _this = this;
        logger.debug('Getting federated credentials');
        var provider = federatedInfo.provider,
            user = federatedInfo.user;
        var token = federatedInfo.token;
        var expires_at = federatedInfo.expires_at;
        var identity_id = federatedInfo.identity_id;
        var that = this;
        logger.debug('checking if federated jwt token expired');
        if (expires_at > new Date().getTime()) {
            // if not expired
            logger.debug('token not expired');
            return this._setCredentialsFromFederation({ provider: provider, token: token, user: user, identity_id: identity_id, expires_at: expires_at });
        } else {
            // if refresh handler exists
            if (that._refreshHandlers[provider] && typeof that._refreshHandlers[provider] === 'function') {
                logger.debug('getting refreshed jwt token from federation provider');
                return that._refreshHandlers[provider]().then(function (data) {
                    logger.debug('refresh federated token sucessfully', data);
                    token = data.token;
                    identity_id = data.identity_id;
                    expires_at = data.expires_at;
                    return that._setCredentialsFromFederation({ provider: provider, token: token, user: user, identity_id: identity_id, expires_at: expires_at });
                }).catch(function (e) {
                    logger.debug('refresh federated token failed', e);
                    _this.clear();
                    return Promise.reject('refreshing federation token failed: ' + e);
                });
            } else {
                logger.debug('no refresh handler for provider:', provider);
                this.clear();
                return Promise.reject('no refresh handler for provider');
            }
        }
    };
    Credentials.prototype._isExpired = function (credentials) {
        if (!credentials) {
            logger.debug('no credentials for expiration check');
            return true;
        }
        logger.debug('is this credentials expired?', credentials);
        var ts = new Date().getTime();
        var delta = 10 * 60 * 1000; // 10 minutes
        var expired = credentials.expired,
            expireTime = credentials.expireTime;
        if (!expired && expireTime > ts + delta) {
            return false;
        }
        return true;
    };
    Credentials.prototype._setCredentialsForGuest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var attempted, _a, identityPoolId, region, mandatorySignIn, identityId, e_1, credentials, that;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        attempted = false;
                        logger.debug('setting credentials for guest');
                        _a = this._config, identityPoolId = _a.identityPoolId, region = _a.region, mandatorySignIn = _a.mandatorySignIn;
                        if (mandatorySignIn) {
                            return [2 /*return*/, Promise.reject('cannot get guest credentials when mandatory signin enabled')];
                        }
                        if (!identityPoolId) {
                            logger.debug('No Cognito Federated Identity pool provided');
                            return [2 /*return*/, Promise.reject('No Cognito Federated Identity pool provided')];
                        }
                        identityId = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3,, 4]);
                        return [4 /*yield*/, this._storageSync];
                    case 2:
                        _b.sent();
                        identityId = this._storage.getItem('CognitoIdentityId-' + identityPoolId);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        logger.debug('Failed to get the cached identityId', e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        credentials = new Facet_1.AWS.CognitoIdentityCredentials({
                            IdentityPoolId: identityPoolId,
                            IdentityId: identityId ? identityId : undefined
                        }, {
                            region: region
                        });
                        that = this;
                        return [2 /*return*/, this._loadCredentials(credentials, 'guest', false, null).then(function (res) {
                            return res;
                        }).catch(function (e) {
                            return __awaiter(_this, void 0, void 0, function () {
                                var newCredentials;
                                return __generator(this, function (_a) {
                                    // If identity id is deleted in the console, we make one attempt to recreate it
                                    // and remove existing id from cache. 
                                    if (e.code === 'ResourceNotFoundException' && e.message === "Identity '" + identityId + "' not found." && !attempted) {
                                        attempted = true;
                                        logger.debug('Failed to load guest credentials');
                                        this._storage.removeItem('CognitoIdentityId-' + identityPoolId);
                                        credentials.clearCachedId();
                                        newCredentials = new Facet_1.AWS.CognitoIdentityCredentials({
                                            IdentityPoolId: identityPoolId,
                                            IdentityId: undefined
                                        }, {
                                            region: region
                                        });
                                        return [2 /*return*/, this._loadCredentials(newCredentials, 'guest', false, null)];
                                    } else {
                                        return [2 /*return*/, e];
                                    }
                                    return [2 /*return*/];
                                });
                            });
                        })];
                }
            });
        });
    };
    Credentials.prototype._setCredentialsFromAWS = function () {
        var credentials = Facet_1.AWS.config.credentials;
        logger.debug('setting credentials from aws');
        var that = this;
        if (credentials instanceof Facet_1.AWS.Credentials) {
            return Promise.resolve(credentials);
        } else {
            logger.debug('AWS.config.credentials is not an instance of AWS Credentials');
            return Promise.reject('AWS.config.credentials is not an instance of AWS Credentials');
        }
    };
    Credentials.prototype._setCredentialsFromFederation = function (params) {
        var provider = params.provider,
            token = params.token,
            identity_id = params.identity_id,
            user = params.user,
            expires_at = params.expires_at;
        var domains = {
            'google': 'accounts.google.com',
            'facebook': 'graph.facebook.com',
            'amazon': 'www.amazon.com',
            'developer': 'cognito-identity.amazonaws.com'
        };
        // Use custom provider url instead of the predefined ones
        var domain = domains[provider] || provider;
        if (!domain) {
            return Promise.reject('You must specify a federated provider');
        }
        var logins = {};
        logins[domain] = token;
        var _a = this._config,
            identityPoolId = _a.identityPoolId,
            region = _a.region;
        if (!identityPoolId) {
            logger.debug('No Cognito Federated Identity pool provided');
            return Promise.reject('No Cognito Federated Identity pool provided');
        }
        var credentials = new Facet_1.AWS.CognitoIdentityCredentials({
            IdentityPoolId: identityPoolId,
            IdentityId: identity_id,
            Logins: logins
        }, {
            region: region
        });
        return this._loadCredentials(credentials, 'federated', true, params);
    };
    Credentials.prototype._setCredentialsFromSession = function (session) {
        logger.debug('set credentials from session');
        var idToken = session.getIdToken().getJwtToken();
        var _a = this._config,
            region = _a.region,
            userPoolId = _a.userPoolId,
            identityPoolId = _a.identityPoolId;
        if (!identityPoolId) {
            logger.debug('No Cognito Federated Identity pool provided');
            return Promise.reject('No Cognito Federated Identity pool provided');
        }
        var key = 'cognito-idp.' + region + '.amazonaws.com/' + userPoolId;
        var logins = {};
        logins[key] = idToken;
        var credentials = new Facet_1.AWS.CognitoIdentityCredentials({
            IdentityPoolId: identityPoolId,
            Logins: logins
        }, {
            region: region
        });
        var that = this;
        return this._loadCredentials(credentials, 'userPool', true, null);
    };
    Credentials.prototype._loadCredentials = function (credentials, source, authenticated, info) {
        var _this = this;
        var that = this;
        var identityPoolId = this._config.identityPoolId;
        return new Promise(function (res, rej) {
            credentials.get(function (err) {
                return __awaiter(_this, void 0, void 0, function () {
                    var user, provider, token, expires_at, identity_id, e_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (err) {
                                    logger.debug('Failed to load credentials', credentials);
                                    rej(err);
                                    return [2 /*return*/];
                                }
                                logger.debug('Load credentials successfully', credentials);
                                that._credentials = credentials;
                                that._credentials.authenticated = authenticated;
                                that._credentials_source = source;
                                if (source === 'federated') {
                                    user = Object.assign({ id: this._credentials.identityId }, info.user);
                                    provider = info.provider, token = info.token, expires_at = info.expires_at, identity_id = info.identity_id;
                                    try {
                                        this._storage.setItem('aws-amplify-federatedInfo', JSON.stringify({
                                            provider: provider,
                                            token: token,
                                            user: user,
                                            expires_at: expires_at,
                                            identity_id: identity_id
                                        }));
                                    } catch (e) {
                                        logger.debug('Failed to put federated info into auth storage', e);
                                    }
                                    // the Cache module no longer stores federated info
                                    // this is just for backward compatibility
                                    if (Amplify_1.default.Cache && typeof Amplify_1.default.Cache.setItem === 'function') {
                                        Amplify_1.default.Cache.setItem('federatedInfo', {
                                            provider: provider,
                                            token: token,
                                            user: user,
                                            expires_at: expires_at,
                                            identity_id: identity_id
                                        }, { priority: 1 });
                                    } else {
                                        logger.debug('No Cache module registered in Amplify');
                                    }
                                }
                                if (!(source === 'guest')) return [3 /*break*/, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3,, 4]);
                                return [4 /*yield*/, this._storageSync];
                            case 2:
                                _a.sent();
                                this._storage.setItem('CognitoIdentityId-' + identityPoolId, credentials.identityId);
                                return [3 /*break*/, 4];
                            case 3:
                                e_2 = _a.sent();
                                logger.debug('Failed to cache identityId', e_2);
                                return [3 /*break*/, 4];
                            case 4:
                                res(that._credentials);
                                return [2 /*return*/];
                        }
                    });
                });
            });
        });
    };
    Credentials.prototype.set = function (params, source) {
        if (source === 'session') {
            return this._setCredentialsFromSession(params);
        } else if (source === 'federation') {
            return this._setCredentialsFromFederation(params);
        } else if (source === 'guest') {
            return this._setCredentialsForGuest();
        } else {
            logger.debug('no source specified for setting credentials');
            return Promise.reject('invalid source');
        }
    };
    Credentials.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, identityPoolId, region, credentials;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._config, identityPoolId = _a.identityPoolId, region = _a.region;
                        if (identityPoolId) {
                            credentials = new Facet_1.AWS.CognitoIdentityCredentials({
                                IdentityPoolId: identityPoolId
                            }, {
                                region: region
                            });
                            credentials.clearCachedId();
                        }
                        this._credentials = null;
                        this._credentials_source = null;
                        this._storage.removeItem('aws-amplify-federatedInfo');
                        if (!(Amplify_1.default.Cache && typeof Amplify_1.default.Cache.setItem === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, Amplify_1.default.Cache.removeItem('federatedInfo')];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        logger.debug('No Cache module registered in Amplify');
                        _b.label = 3;
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Compact version of credentials
     * @param {Object} credentials
     * @return {Object} - Credentials
     */
    Credentials.prototype.shear = function (credentials) {
        return {
            accessKeyId: credentials.accessKeyId,
            sessionToken: credentials.sessionToken,
            secretAccessKey: credentials.secretAccessKey,
            identityId: credentials.identityId,
            authenticated: credentials.authenticated
        };
    };
    return Credentials;
}();
exports.Credentials = Credentials;
var instance = new Credentials(null);
exports.default = instance;
//# sourceMappingURL=Credentials.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceWorker_1 = __webpack_require__(133);
exports.default = ServiceWorker_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var Logger_1 = __webpack_require__(3);
var JS_1 = __webpack_require__(7);
var Amplify_1 = __webpack_require__(14);
/**
 * Provides a means to registering a service worker in the browser
 * and communicating with it via postMessage events.
 * https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/
 *
 * postMessage events are currently not supported in all browsers. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
 *
 * At the minmum this class will register the service worker and listen
 * and attempt to dispatch messages on state change and record analytics
 * events based on the service worker lifecycle.
 */
var ServiceWorkerClass = /** @class */function () {
    function ServiceWorkerClass() {
        // The AWS Amplify logger
        this._logger = new Logger_1.ConsoleLogger('ServiceWorker');
    }
    Object.defineProperty(ServiceWorkerClass.prototype, "serviceWorker", {
        /**
         * Get the currently active service worker
         */
        get: function get() {
            return this._serviceWorker;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Register the service-worker.js file in the browser
     * Make sure the service-worker.js is part of the build
     * for example with Angular, modify the angular-cli.json file
     * and add to "assets" array "service-worker.js"
     * @param {string} - (optional) Service worker file. Defaults to "/service-worker.js"
     * @param {string} - (optional) The service worker scope. Defaults to "/"
     *  - API Doc: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
     * @returns {Promise}
     *	- resolve(ServiceWorkerRegistration)
     *	- reject(Error)
     **/
    ServiceWorkerClass.prototype.register = function (filePath, scope) {
        var _this = this;
        if (filePath === void 0) {
            filePath = '/service-worker.js';
        }
        if (scope === void 0) {
            scope = '/';
        }
        this._logger.debug("registering " + filePath);
        this._logger.debug("registering service worker with scope " + scope);
        return new Promise(function (resolve, reject) {
            if (navigator && 'serviceWorker' in navigator) {
                navigator.serviceWorker.register(filePath, {
                    'scope': scope
                }).then(function (registration) {
                    if (registration.installing) {
                        _this._serviceWorker = registration.installing;
                    } else if (registration.waiting) {
                        _this._serviceWorker = registration.waiting;
                    } else if (registration.active) {
                        _this._serviceWorker = registration.active;
                    }
                    _this._registration = registration;
                    _this._setupListeners();
                    _this._logger.debug("Service Worker Registration Success: " + registration);
                    return resolve(registration);
                }).catch(function (error) {
                    _this._logger.debug("Service Worker Registration Failed " + error);
                    return reject(error);
                });
            } else {
                return reject(new Error('Service Worker not available'));
            }
        });
    };
    /**
     * Enable web push notifications. If not subscribed, a new subscription will
     * be created and registered.
     * 	Test Push Server: https://web-push-codelab.glitch.me/
     * 	Push Server Libraries: https://github.com/web-push-libs/
     * 	API Doc: https://developers.google.com/web/fundamentals/codelabs/push-notifications/
     * @param publicKey
     * @returns {Promise}
     * 	- resolve(PushSubscription)
     *  - reject(Error)
     */
    ServiceWorkerClass.prototype.enablePush = function (publicKey) {
        var _this = this;
        if (!this._registration) throw new Error('Service Worker not registered');
        this._publicKey = publicKey;
        return new Promise(function (resolve, reject) {
            if (JS_1.default.browserOrNode().isBrowser) {
                _this._registration.pushManager.getSubscription().then(function (subscription) {
                    if (subscription) {
                        _this._subscription = subscription;
                        _this._logger.debug("User is subscribed to push: " + JSON.stringify(subscription));
                        resolve(subscription);
                    } else {
                        _this._logger.debug("User is NOT subscribed to push");
                        return _this._registration.pushManager.subscribe({
                            'userVisibleOnly': true,
                            'applicationServerKey': _this._urlB64ToUint8Array(publicKey)
                        }).then(function (subscription) {
                            _this._subscription = subscription;
                            _this._logger.debug("User subscribed: " + JSON.stringify(subscription));
                            resolve(subscription);
                        }).catch(function (error) {
                            _this._logger.error(error);
                        });
                    }
                });
            } else {
                return reject(new Error('Service Worker not available'));
            }
        });
    };
    /**
     * Convert a base64 encoded string to a Uint8 array for the push server key
     * @param base64String
     */
    ServiceWorkerClass.prototype._urlB64ToUint8Array = function (base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };
    /**
     * Send a message to the service worker. The service worker needs
     * to implement `self.addEventListener('message') to handle the
     * message. This ***currently*** does not work in Safari or IE.
     * @param {object | string} - An arbitrary JSON object or string message to send to the service worker
      *	- see: https://developer.mozilla.org/en-US/docs/Web/API/Transferable
     * @returns {Promise}
     **/
    ServiceWorkerClass.prototype.send = function (message) {
        if (this._serviceWorker) {
            this._serviceWorker.postMessage((typeof message === "undefined" ? "undefined" : _typeof(message)) === 'object' ? JSON.stringify(message) : message);
        }
    };
    /**
     * Listen for service worker state change and message events
     * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/state
     **/
    ServiceWorkerClass.prototype._setupListeners = function () {
        var _this = this;
        this._serviceWorker.addEventListener('statechange', function (event) {
            var currentState = _this._serviceWorker.state;
            _this._logger.debug("ServiceWorker statechange: " + currentState);
            if (Amplify_1.default.Analytics && typeof Amplify_1.default.Analytics.record === 'function') {
                Amplify_1.default.Analytics.record({
                    name: 'ServiceWorker',
                    attributes: {
                        'state': currentState
                    }
                });
            }
        });
        this._serviceWorker.addEventListener('message', function (event) {
            _this._logger.debug("ServiceWorker message event: " + event);
        });
    };
    return ServiceWorkerClass;
}();
exports.default = ServiceWorkerClass;
//# sourceMappingURL=ServiceWorker.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = {"name":"@aws-amplify/core","version":"1.0.25","description":"Core category of aws-amplify","main":"./lib/index.js","module":"./lib/index.js","typings":"./lib/index.d.ts","publishConfig":{"access":"public"},"scripts":{"test":"tslint 'src/**/*.ts' && jest --coverage","build-with-test":"npm run clean && npm test && tsc && webpack","build":"npm run clean && tsc && webpack","clean":"rimraf lib lib-esm dist","format":"tsfmt --useTsfmt tsfmt.json -r src/**/*.ts","lint":"tslint 'src/**/*.ts'"},"react-native":{"./lib/ClientDevice":"./lib/ClientDevice/reactnative.js","./lib/RNComponents":"./lib/RNComponents/reactnative.js","./lib/StorageHelper":"./lib/StorageHelper/reactnative.js"},"repository":{"type":"git","url":"git+https://github.com/aws/aws-amplify.git"},"author":"Amazon Web Services","license":"Apache-2.0","bugs":{"url":"https://github.com/aws/aws-amplify/issues"},"homepage":"https://github.com/aws/aws-amplify#readme","devDependencies":{"@types/jest":"^20.0.8","@types/node":"^8.10.15","awesome-typescript-loader":"^3.2.2","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","compression-webpack-plugin":"^1.1.3","find":"^0.2.7","jest":"^22.4.3","json-loader":"^0.5.7","prepend-file":"^1.3.1","prettier":"^1.7.4","rimraf":"^2.6.2","source-map-loader":"^0.2.1","ts-jest":"^22.0.0","tslint":"^5.7.0","tslint-config-airbnb":"^5.8.0","typescript-formatter":"^6.0.0","uglifyjs-webpack-plugin":"^0.4.6","webpack":"^3.5.5"},"dependencies":{"aws-sdk":"2.329.0","url":"^0.11.0"},"jest":{"transform":{"^.+\\.(js|jsx|ts|tsx)$":"<rootDir>../../node_modules/ts-jest/preprocessor.js"},"testRegex":"(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$","moduleFileExtensions":["ts","tsx","js","json","jsx"],"testEnvironment":"jsdom","mapCoverage":true,"coverageThreshold":{"global":{"branches":0,"functions":0,"lines":0,"statements":0}},"testURL":"http://localhost/","coveragePathIgnorePatterns":["/node_modules/"]}}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var AWS = __webpack_require__(0);
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['mobileanalytics'] = {};
AWS.MobileAnalytics = Service.defineService('mobileanalytics', ['2014-06-05']);
Object.defineProperty(apiLoader.services['mobileanalytics'], '2014-06-05', {
  get: function get() {
    var model = __webpack_require__(136);
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MobileAnalytics;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = {"version":"2.0","metadata":{"apiVersion":"2014-06-05","endpointPrefix":"mobileanalytics","serviceFullName":"Amazon Mobile Analytics","serviceId":"Mobile Analytics","signatureVersion":"v4","protocol":"rest-json"},"operations":{"PutEvents":{"http":{"requestUri":"/2014-06-05/events","responseCode":202},"input":{"type":"structure","required":["events","clientContext"],"members":{"events":{"type":"list","member":{"type":"structure","required":["eventType","timestamp"],"members":{"eventType":{},"timestamp":{},"session":{"type":"structure","members":{"id":{},"duration":{"type":"long"},"startTimestamp":{},"stopTimestamp":{}}},"version":{},"attributes":{"type":"map","key":{},"value":{}},"metrics":{"type":"map","key":{},"value":{"type":"double"}}}}},"clientContext":{"location":"header","locationName":"x-amz-Client-Context"},"clientContextEncoding":{"location":"header","locationName":"x-amz-Client-Context-Encoding"}}}}},"shapes":{}}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var AWS = __webpack_require__(0);
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['pinpoint'] = {};
AWS.Pinpoint = Service.defineService('pinpoint', ['2016-12-01']);
Object.defineProperty(apiLoader.services['pinpoint'], '2016-12-01', {
  get: function get() {
    var model = __webpack_require__(138);
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Pinpoint;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = {"metadata":{"apiVersion":"2016-12-01","endpointPrefix":"pinpoint","signingName":"mobiletargeting","serviceFullName":"Amazon Pinpoint","serviceId":"Pinpoint","protocol":"rest-json","jsonVersion":"1.1","uid":"pinpoint-2016-12-01","signatureVersion":"v4"},"operations":{"CreateApp":{"http":{"requestUri":"/v1/apps","responseCode":201},"input":{"type":"structure","members":{"CreateApplicationRequest":{"type":"structure","members":{"Name":{}},"required":[]}},"required":["CreateApplicationRequest"],"payload":"CreateApplicationRequest"},"output":{"type":"structure","members":{"ApplicationResponse":{"shape":"S5"}},"required":["ApplicationResponse"],"payload":"ApplicationResponse"}},"CreateCampaign":{"http":{"requestUri":"/v1/apps/{application-id}/campaigns","responseCode":201},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"WriteCampaignRequest":{"shape":"S7"}},"required":["ApplicationId","WriteCampaignRequest"],"payload":"WriteCampaignRequest"},"output":{"type":"structure","members":{"CampaignResponse":{"shape":"Sp"}},"required":["CampaignResponse"],"payload":"CampaignResponse"}},"CreateExportJob":{"http":{"requestUri":"/v1/apps/{application-id}/jobs/export","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"ExportJobRequest":{"type":"structure","members":{"RoleArn":{},"S3UrlPrefix":{},"SegmentId":{},"SegmentVersion":{"type":"integer"}},"required":[]}},"required":["ApplicationId","ExportJobRequest"],"payload":"ExportJobRequest"},"output":{"type":"structure","members":{"ExportJobResponse":{"shape":"Sx"}},"required":["ExportJobResponse"],"payload":"ExportJobResponse"}},"CreateImportJob":{"http":{"requestUri":"/v1/apps/{application-id}/jobs/import","responseCode":201},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"ImportJobRequest":{"type":"structure","members":{"DefineSegment":{"type":"boolean"},"ExternalId":{},"Format":{},"RegisterEndpoints":{"type":"boolean"},"RoleArn":{},"S3Url":{},"SegmentId":{},"SegmentName":{}},"required":[]}},"required":["ApplicationId","ImportJobRequest"],"payload":"ImportJobRequest"},"output":{"type":"structure","members":{"ImportJobResponse":{"shape":"S15"}},"required":["ImportJobResponse"],"payload":"ImportJobResponse"}},"CreateSegment":{"http":{"requestUri":"/v1/apps/{application-id}/segments","responseCode":201},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"WriteSegmentRequest":{"shape":"S18"}},"required":["ApplicationId","WriteSegmentRequest"],"payload":"WriteSegmentRequest"},"output":{"type":"structure","members":{"SegmentResponse":{"shape":"S20"}},"required":["SegmentResponse"],"payload":"SegmentResponse"}},"DeleteAdmChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/adm","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ADMChannelResponse":{"shape":"S26"}},"required":["ADMChannelResponse"],"payload":"ADMChannelResponse"}},"DeleteApnsChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/apns","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSChannelResponse":{"shape":"S29"}},"required":["APNSChannelResponse"],"payload":"APNSChannelResponse"}},"DeleteApnsSandboxChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/apns_sandbox","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSSandboxChannelResponse":{"shape":"S2c"}},"required":["APNSSandboxChannelResponse"],"payload":"APNSSandboxChannelResponse"}},"DeleteApnsVoipChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/apns_voip","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSVoipChannelResponse":{"shape":"S2f"}},"required":["APNSVoipChannelResponse"],"payload":"APNSVoipChannelResponse"}},"DeleteApnsVoipSandboxChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/apns_voip_sandbox","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSVoipSandboxChannelResponse":{"shape":"S2i"}},"required":["APNSVoipSandboxChannelResponse"],"payload":"APNSVoipSandboxChannelResponse"}},"DeleteApp":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ApplicationResponse":{"shape":"S5"}},"required":["ApplicationResponse"],"payload":"ApplicationResponse"}},"DeleteBaiduChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/baidu","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"BaiduChannelResponse":{"shape":"S2n"}},"required":["BaiduChannelResponse"],"payload":"BaiduChannelResponse"}},"DeleteCampaign":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"}},"required":["CampaignId","ApplicationId"]},"output":{"type":"structure","members":{"CampaignResponse":{"shape":"Sp"}},"required":["CampaignResponse"],"payload":"CampaignResponse"}},"DeleteEmailChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/email","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"EmailChannelResponse":{"shape":"S2s"}},"required":["EmailChannelResponse"],"payload":"EmailChannelResponse"}},"DeleteEndpoint":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/endpoints/{endpoint-id}","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EndpointId":{"location":"uri","locationName":"endpoint-id"}},"required":["ApplicationId","EndpointId"]},"output":{"type":"structure","members":{"EndpointResponse":{"shape":"S2v"}},"required":["EndpointResponse"],"payload":"EndpointResponse"}},"DeleteEventStream":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/eventstream","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"EventStream":{"shape":"S34"}},"required":["EventStream"],"payload":"EventStream"}},"DeleteGcmChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/gcm","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"GCMChannelResponse":{"shape":"S37"}},"required":["GCMChannelResponse"],"payload":"GCMChannelResponse"}},"DeleteSegment":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/segments/{segment-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SegmentId":{"location":"uri","locationName":"segment-id"}},"required":["SegmentId","ApplicationId"]},"output":{"type":"structure","members":{"SegmentResponse":{"shape":"S20"}},"required":["SegmentResponse"],"payload":"SegmentResponse"}},"DeleteSmsChannel":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/channels/sms","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"SMSChannelResponse":{"shape":"S3c"}},"required":["SMSChannelResponse"],"payload":"SMSChannelResponse"}},"DeleteUserEndpoints":{"http":{"method":"DELETE","requestUri":"/v1/apps/{application-id}/users/{user-id}","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"UserId":{"location":"uri","locationName":"user-id"}},"required":["ApplicationId","UserId"]},"output":{"type":"structure","members":{"EndpointsResponse":{"shape":"S3f"}},"required":["EndpointsResponse"],"payload":"EndpointsResponse"}},"GetAdmChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/adm","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ADMChannelResponse":{"shape":"S26"}},"required":["ADMChannelResponse"],"payload":"ADMChannelResponse"}},"GetApnsChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/apns","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSChannelResponse":{"shape":"S29"}},"required":["APNSChannelResponse"],"payload":"APNSChannelResponse"}},"GetApnsSandboxChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/apns_sandbox","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSSandboxChannelResponse":{"shape":"S2c"}},"required":["APNSSandboxChannelResponse"],"payload":"APNSSandboxChannelResponse"}},"GetApnsVoipChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/apns_voip","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSVoipChannelResponse":{"shape":"S2f"}},"required":["APNSVoipChannelResponse"],"payload":"APNSVoipChannelResponse"}},"GetApnsVoipSandboxChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/apns_voip_sandbox","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"APNSVoipSandboxChannelResponse":{"shape":"S2i"}},"required":["APNSVoipSandboxChannelResponse"],"payload":"APNSVoipSandboxChannelResponse"}},"GetApp":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ApplicationResponse":{"shape":"S5"}},"required":["ApplicationResponse"],"payload":"ApplicationResponse"}},"GetApplicationSettings":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/settings","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ApplicationSettingsResource":{"shape":"S3v"}},"required":["ApplicationSettingsResource"],"payload":"ApplicationSettingsResource"}},"GetApps":{"http":{"method":"GET","requestUri":"/v1/apps","responseCode":200},"input":{"type":"structure","members":{"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}}},"output":{"type":"structure","members":{"ApplicationsResponse":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"S5"}},"NextToken":{}}}},"required":["ApplicationsResponse"],"payload":"ApplicationsResponse"}},"GetBaiduChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/baidu","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"BaiduChannelResponse":{"shape":"S2n"}},"required":["BaiduChannelResponse"],"payload":"BaiduChannelResponse"}},"GetCampaign":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"}},"required":["CampaignId","ApplicationId"]},"output":{"type":"structure","members":{"CampaignResponse":{"shape":"Sp"}},"required":["CampaignResponse"],"payload":"CampaignResponse"}},"GetCampaignActivities":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}/activities","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId","CampaignId"]},"output":{"type":"structure","members":{"ActivitiesResponse":{"type":"structure","members":{"Item":{"type":"list","member":{"type":"structure","members":{"ApplicationId":{},"CampaignId":{},"End":{},"Id":{},"Result":{},"ScheduledStart":{},"Start":{},"State":{},"SuccessfulEndpointCount":{"type":"integer"},"TimezonesCompletedCount":{"type":"integer"},"TimezonesTotalCount":{"type":"integer"},"TotalEndpointCount":{"type":"integer"},"TreatmentId":{}},"required":[]}},"NextToken":{}},"required":[]}},"required":["ActivitiesResponse"],"payload":"ActivitiesResponse"}},"GetCampaignVersion":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}/versions/{version}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"},"Version":{"location":"uri","locationName":"version"}},"required":["Version","ApplicationId","CampaignId"]},"output":{"type":"structure","members":{"CampaignResponse":{"shape":"Sp"}},"required":["CampaignResponse"],"payload":"CampaignResponse"}},"GetCampaignVersions":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}/versions","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId","CampaignId"]},"output":{"type":"structure","members":{"CampaignsResponse":{"shape":"S4d"}},"required":["CampaignsResponse"],"payload":"CampaignsResponse"}},"GetCampaigns":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/campaigns","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"CampaignsResponse":{"shape":"S4d"}},"required":["CampaignsResponse"],"payload":"CampaignsResponse"}},"GetChannels":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ChannelsResponse":{"type":"structure","members":{"Channels":{"type":"map","key":{},"value":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Version":{"type":"integer"}}}}},"required":[]}},"required":["ChannelsResponse"],"payload":"ChannelsResponse"}},"GetEmailChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/email","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"EmailChannelResponse":{"shape":"S2s"}},"required":["EmailChannelResponse"],"payload":"EmailChannelResponse"}},"GetEndpoint":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/endpoints/{endpoint-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EndpointId":{"location":"uri","locationName":"endpoint-id"}},"required":["ApplicationId","EndpointId"]},"output":{"type":"structure","members":{"EndpointResponse":{"shape":"S2v"}},"required":["EndpointResponse"],"payload":"EndpointResponse"}},"GetEventStream":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/eventstream","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"EventStream":{"shape":"S34"}},"required":["EventStream"],"payload":"EventStream"}},"GetExportJob":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/jobs/export/{job-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"JobId":{"location":"uri","locationName":"job-id"}},"required":["ApplicationId","JobId"]},"output":{"type":"structure","members":{"ExportJobResponse":{"shape":"Sx"}},"required":["ExportJobResponse"],"payload":"ExportJobResponse"}},"GetExportJobs":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/jobs/export","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ExportJobsResponse":{"shape":"S4w"}},"required":["ExportJobsResponse"],"payload":"ExportJobsResponse"}},"GetGcmChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/gcm","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"GCMChannelResponse":{"shape":"S37"}},"required":["GCMChannelResponse"],"payload":"GCMChannelResponse"}},"GetImportJob":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/jobs/import/{job-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"JobId":{"location":"uri","locationName":"job-id"}},"required":["ApplicationId","JobId"]},"output":{"type":"structure","members":{"ImportJobResponse":{"shape":"S15"}},"required":["ImportJobResponse"],"payload":"ImportJobResponse"}},"GetImportJobs":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/jobs/import","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"ImportJobsResponse":{"shape":"S54"}},"required":["ImportJobsResponse"],"payload":"ImportJobsResponse"}},"GetSegment":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments/{segment-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SegmentId":{"location":"uri","locationName":"segment-id"}},"required":["SegmentId","ApplicationId"]},"output":{"type":"structure","members":{"SegmentResponse":{"shape":"S20"}},"required":["SegmentResponse"],"payload":"SegmentResponse"}},"GetSegmentExportJobs":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments/{segment-id}/jobs/export","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"SegmentId":{"location":"uri","locationName":"segment-id"},"Token":{"location":"querystring","locationName":"token"}},"required":["SegmentId","ApplicationId"]},"output":{"type":"structure","members":{"ExportJobsResponse":{"shape":"S4w"}},"required":["ExportJobsResponse"],"payload":"ExportJobsResponse"}},"GetSegmentImportJobs":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments/{segment-id}/jobs/import","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"SegmentId":{"location":"uri","locationName":"segment-id"},"Token":{"location":"querystring","locationName":"token"}},"required":["SegmentId","ApplicationId"]},"output":{"type":"structure","members":{"ImportJobsResponse":{"shape":"S54"}},"required":["ImportJobsResponse"],"payload":"ImportJobsResponse"}},"GetSegmentVersion":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments/{segment-id}/versions/{version}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SegmentId":{"location":"uri","locationName":"segment-id"},"Version":{"location":"uri","locationName":"version"}},"required":["SegmentId","Version","ApplicationId"]},"output":{"type":"structure","members":{"SegmentResponse":{"shape":"S20"}},"required":["SegmentResponse"],"payload":"SegmentResponse"}},"GetSegmentVersions":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments/{segment-id}/versions","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"SegmentId":{"location":"uri","locationName":"segment-id"},"Token":{"location":"querystring","locationName":"token"}},"required":["SegmentId","ApplicationId"]},"output":{"type":"structure","members":{"SegmentsResponse":{"shape":"S5g"}},"required":["SegmentsResponse"],"payload":"SegmentsResponse"}},"GetSegments":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/segments","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"PageSize":{"location":"querystring","locationName":"page-size"},"Token":{"location":"querystring","locationName":"token"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"SegmentsResponse":{"shape":"S5g"}},"required":["SegmentsResponse"],"payload":"SegmentsResponse"}},"GetSmsChannel":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/channels/sms","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId"]},"output":{"type":"structure","members":{"SMSChannelResponse":{"shape":"S3c"}},"required":["SMSChannelResponse"],"payload":"SMSChannelResponse"}},"GetUserEndpoints":{"http":{"method":"GET","requestUri":"/v1/apps/{application-id}/users/{user-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"UserId":{"location":"uri","locationName":"user-id"}},"required":["ApplicationId","UserId"]},"output":{"type":"structure","members":{"EndpointsResponse":{"shape":"S3f"}},"required":["EndpointsResponse"],"payload":"EndpointsResponse"}},"PhoneNumberValidate":{"http":{"requestUri":"/v1/phone/number/validate","responseCode":200},"input":{"type":"structure","members":{"NumberValidateRequest":{"type":"structure","members":{"IsoCountryCode":{},"PhoneNumber":{}}}},"required":["NumberValidateRequest"],"payload":"NumberValidateRequest"},"output":{"type":"structure","members":{"NumberValidateResponse":{"type":"structure","members":{"Carrier":{},"City":{},"CleansedPhoneNumberE164":{},"CleansedPhoneNumberNational":{},"Country":{},"CountryCodeIso2":{},"CountryCodeNumeric":{},"County":{},"OriginalCountryCodeIso2":{},"OriginalPhoneNumber":{},"PhoneType":{},"PhoneTypeCode":{"type":"integer"},"Timezone":{},"ZipCode":{}}}},"required":["NumberValidateResponse"],"payload":"NumberValidateResponse"}},"PutEventStream":{"http":{"requestUri":"/v1/apps/{application-id}/eventstream","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"WriteEventStream":{"type":"structure","members":{"DestinationStreamArn":{},"RoleArn":{}},"required":[]}},"required":["ApplicationId","WriteEventStream"],"payload":"WriteEventStream"},"output":{"type":"structure","members":{"EventStream":{"shape":"S34"}},"required":["EventStream"],"payload":"EventStream"}},"PutEvents":{"http":{"requestUri":"/v1/apps/{application-id}/events","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EventsRequest":{"type":"structure","members":{"BatchItem":{"type":"map","key":{},"value":{"type":"structure","members":{"Endpoint":{"type":"structure","members":{"Address":{},"Attributes":{"shape":"S2w"},"ChannelType":{},"Demographic":{"shape":"S2y"},"EffectiveDate":{},"EndpointStatus":{},"Location":{"shape":"S2z"},"Metrics":{"shape":"S30"},"OptOut":{},"RequestId":{},"User":{"shape":"S31"}}},"Events":{"type":"map","key":{},"value":{"type":"structure","members":{"Attributes":{"shape":"S62"},"ClientSdkVersion":{},"EventType":{},"Metrics":{"shape":"S30"},"Session":{"type":"structure","members":{"Duration":{"type":"integer"},"Id":{},"StartTimestamp":{},"StopTimestamp":{}},"required":[]},"Timestamp":{}},"required":[]}}},"required":[]}}},"required":[]}},"required":["ApplicationId","EventsRequest"],"payload":"EventsRequest"},"output":{"type":"structure","members":{"EventsResponse":{"type":"structure","members":{"Results":{"type":"map","key":{},"value":{"type":"structure","members":{"EndpointItemResponse":{"type":"structure","members":{"Message":{},"StatusCode":{"type":"integer"}}},"EventsItemResponse":{"type":"map","key":{},"value":{"type":"structure","members":{"Message":{},"StatusCode":{"type":"integer"}}}}}}}}}},"required":["EventsResponse"],"payload":"EventsResponse"}},"RemoveAttributes":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/attributes/{attribute-type}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"AttributeType":{"location":"uri","locationName":"attribute-type"},"UpdateAttributesRequest":{"type":"structure","members":{"Blacklist":{"shape":"Sz"}}}},"required":["AttributeType","ApplicationId","UpdateAttributesRequest"],"payload":"UpdateAttributesRequest"},"output":{"type":"structure","members":{"AttributesResource":{"type":"structure","members":{"ApplicationId":{},"AttributeType":{},"Attributes":{"shape":"Sz"}},"required":[]}},"required":["AttributesResource"],"payload":"AttributesResource"}},"SendMessages":{"http":{"requestUri":"/v1/apps/{application-id}/messages","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"MessageRequest":{"type":"structure","members":{"Addresses":{"type":"map","key":{},"value":{"type":"structure","members":{"BodyOverride":{},"ChannelType":{},"Context":{"shape":"S62"},"RawContent":{},"Substitutions":{"shape":"S2w"},"TitleOverride":{}}}},"Context":{"shape":"S62"},"Endpoints":{"shape":"S6j"},"MessageConfiguration":{"shape":"S6l"},"TraceId":{}},"required":[]}},"required":["ApplicationId","MessageRequest"],"payload":"MessageRequest"},"output":{"type":"structure","members":{"MessageResponse":{"type":"structure","members":{"ApplicationId":{},"EndpointResult":{"shape":"S6v"},"RequestId":{},"Result":{"type":"map","key":{},"value":{"type":"structure","members":{"DeliveryStatus":{},"MessageId":{},"StatusCode":{"type":"integer"},"StatusMessage":{},"UpdatedToken":{}},"required":[]}}},"required":[]}},"required":["MessageResponse"],"payload":"MessageResponse"}},"SendUsersMessages":{"http":{"requestUri":"/v1/apps/{application-id}/users-messages","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SendUsersMessageRequest":{"type":"structure","members":{"Context":{"shape":"S62"},"MessageConfiguration":{"shape":"S6l"},"TraceId":{},"Users":{"shape":"S6j"}},"required":[]}},"required":["ApplicationId","SendUsersMessageRequest"],"payload":"SendUsersMessageRequest"},"output":{"type":"structure","members":{"SendUsersMessageResponse":{"type":"structure","members":{"ApplicationId":{},"RequestId":{},"Result":{"type":"map","key":{},"value":{"shape":"S6v"}}},"required":[]}},"required":["SendUsersMessageResponse"],"payload":"SendUsersMessageResponse"}},"UpdateAdmChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/adm","responseCode":200},"input":{"type":"structure","members":{"ADMChannelRequest":{"type":"structure","members":{"ClientId":{},"ClientSecret":{},"Enabled":{"type":"boolean"}},"required":[]},"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId","ADMChannelRequest"],"payload":"ADMChannelRequest"},"output":{"type":"structure","members":{"ADMChannelResponse":{"shape":"S26"}},"required":["ADMChannelResponse"],"payload":"ADMChannelResponse"}},"UpdateApnsChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/apns","responseCode":200},"input":{"type":"structure","members":{"APNSChannelRequest":{"type":"structure","members":{"BundleId":{},"Certificate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"PrivateKey":{},"TeamId":{},"TokenKey":{},"TokenKeyId":{}},"required":[]},"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId","APNSChannelRequest"],"payload":"APNSChannelRequest"},"output":{"type":"structure","members":{"APNSChannelResponse":{"shape":"S29"}},"required":["APNSChannelResponse"],"payload":"APNSChannelResponse"}},"UpdateApnsSandboxChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/apns_sandbox","responseCode":200},"input":{"type":"structure","members":{"APNSSandboxChannelRequest":{"type":"structure","members":{"BundleId":{},"Certificate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"PrivateKey":{},"TeamId":{},"TokenKey":{},"TokenKeyId":{}},"required":[]},"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId","APNSSandboxChannelRequest"],"payload":"APNSSandboxChannelRequest"},"output":{"type":"structure","members":{"APNSSandboxChannelResponse":{"shape":"S2c"}},"required":["APNSSandboxChannelResponse"],"payload":"APNSSandboxChannelResponse"}},"UpdateApnsVoipChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/apns_voip","responseCode":200},"input":{"type":"structure","members":{"APNSVoipChannelRequest":{"type":"structure","members":{"BundleId":{},"Certificate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"PrivateKey":{},"TeamId":{},"TokenKey":{},"TokenKeyId":{}},"required":[]},"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId","APNSVoipChannelRequest"],"payload":"APNSVoipChannelRequest"},"output":{"type":"structure","members":{"APNSVoipChannelResponse":{"shape":"S2f"}},"required":["APNSVoipChannelResponse"],"payload":"APNSVoipChannelResponse"}},"UpdateApnsVoipSandboxChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/apns_voip_sandbox","responseCode":200},"input":{"type":"structure","members":{"APNSVoipSandboxChannelRequest":{"type":"structure","members":{"BundleId":{},"Certificate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"PrivateKey":{},"TeamId":{},"TokenKey":{},"TokenKeyId":{}},"required":[]},"ApplicationId":{"location":"uri","locationName":"application-id"}},"required":["ApplicationId","APNSVoipSandboxChannelRequest"],"payload":"APNSVoipSandboxChannelRequest"},"output":{"type":"structure","members":{"APNSVoipSandboxChannelResponse":{"shape":"S2i"}},"required":["APNSVoipSandboxChannelResponse"],"payload":"APNSVoipSandboxChannelResponse"}},"UpdateApplicationSettings":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/settings","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"WriteApplicationSettingsRequest":{"type":"structure","members":{"CampaignHook":{"shape":"Sl"},"CloudWatchMetricsEnabled":{"type":"boolean"},"Limits":{"shape":"Sn"},"QuietTime":{"shape":"Sk"}}}},"required":["ApplicationId","WriteApplicationSettingsRequest"],"payload":"WriteApplicationSettingsRequest"},"output":{"type":"structure","members":{"ApplicationSettingsResource":{"shape":"S3v"}},"required":["ApplicationSettingsResource"],"payload":"ApplicationSettingsResource"}},"UpdateBaiduChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/baidu","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"BaiduChannelRequest":{"type":"structure","members":{"ApiKey":{},"Enabled":{"type":"boolean"},"SecretKey":{}},"required":[]}},"required":["ApplicationId","BaiduChannelRequest"],"payload":"BaiduChannelRequest"},"output":{"type":"structure","members":{"BaiduChannelResponse":{"shape":"S2n"}},"required":["BaiduChannelResponse"],"payload":"BaiduChannelResponse"}},"UpdateCampaign":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/campaigns/{campaign-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"CampaignId":{"location":"uri","locationName":"campaign-id"},"WriteCampaignRequest":{"shape":"S7"}},"required":["CampaignId","ApplicationId","WriteCampaignRequest"],"payload":"WriteCampaignRequest"},"output":{"type":"structure","members":{"CampaignResponse":{"shape":"Sp"}},"required":["CampaignResponse"],"payload":"CampaignResponse"}},"UpdateEmailChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/email","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EmailChannelRequest":{"type":"structure","members":{"Enabled":{"type":"boolean"},"FromAddress":{},"Identity":{},"RoleArn":{}},"required":[]}},"required":["ApplicationId","EmailChannelRequest"],"payload":"EmailChannelRequest"},"output":{"type":"structure","members":{"EmailChannelResponse":{"shape":"S2s"}},"required":["EmailChannelResponse"],"payload":"EmailChannelResponse"}},"UpdateEndpoint":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/endpoints/{endpoint-id}","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EndpointId":{"location":"uri","locationName":"endpoint-id"},"EndpointRequest":{"type":"structure","members":{"Address":{},"Attributes":{"shape":"S2w"},"ChannelType":{},"Demographic":{"shape":"S2y"},"EffectiveDate":{},"EndpointStatus":{},"Location":{"shape":"S2z"},"Metrics":{"shape":"S30"},"OptOut":{},"RequestId":{},"User":{"shape":"S31"}}}},"required":["ApplicationId","EndpointId","EndpointRequest"],"payload":"EndpointRequest"},"output":{"type":"structure","members":{"MessageBody":{"shape":"S7y"}},"required":["MessageBody"],"payload":"MessageBody"}},"UpdateEndpointsBatch":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/endpoints","responseCode":202},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"EndpointBatchRequest":{"type":"structure","members":{"Item":{"type":"list","member":{"type":"structure","members":{"Address":{},"Attributes":{"shape":"S2w"},"ChannelType":{},"Demographic":{"shape":"S2y"},"EffectiveDate":{},"EndpointStatus":{},"Id":{},"Location":{"shape":"S2z"},"Metrics":{"shape":"S30"},"OptOut":{},"RequestId":{},"User":{"shape":"S31"}}}}},"required":[]}},"required":["ApplicationId","EndpointBatchRequest"],"payload":"EndpointBatchRequest"},"output":{"type":"structure","members":{"MessageBody":{"shape":"S7y"}},"required":["MessageBody"],"payload":"MessageBody"}},"UpdateGcmChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/gcm","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"GCMChannelRequest":{"type":"structure","members":{"ApiKey":{},"Enabled":{"type":"boolean"}},"required":[]}},"required":["ApplicationId","GCMChannelRequest"],"payload":"GCMChannelRequest"},"output":{"type":"structure","members":{"GCMChannelResponse":{"shape":"S37"}},"required":["GCMChannelResponse"],"payload":"GCMChannelResponse"}},"UpdateSegment":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/segments/{segment-id}","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SegmentId":{"location":"uri","locationName":"segment-id"},"WriteSegmentRequest":{"shape":"S18"}},"required":["SegmentId","ApplicationId","WriteSegmentRequest"],"payload":"WriteSegmentRequest"},"output":{"type":"structure","members":{"SegmentResponse":{"shape":"S20"}},"required":["SegmentResponse"],"payload":"SegmentResponse"}},"UpdateSmsChannel":{"http":{"method":"PUT","requestUri":"/v1/apps/{application-id}/channels/sms","responseCode":200},"input":{"type":"structure","members":{"ApplicationId":{"location":"uri","locationName":"application-id"},"SMSChannelRequest":{"type":"structure","members":{"Enabled":{"type":"boolean"},"SenderId":{},"ShortCode":{}},"required":[]}},"required":["ApplicationId","SMSChannelRequest"],"payload":"SMSChannelRequest"},"output":{"type":"structure","members":{"SMSChannelResponse":{"shape":"S3c"}},"required":["SMSChannelResponse"],"payload":"SMSChannelResponse"}}},"shapes":{"S5":{"type":"structure","members":{"Id":{},"Name":{}},"required":[]},"S7":{"type":"structure","members":{"AdditionalTreatments":{"type":"list","member":{"type":"structure","members":{"MessageConfiguration":{"shape":"Sa"},"Schedule":{"shape":"Si"},"SizePercent":{"type":"integer"},"TreatmentDescription":{},"TreatmentName":{}},"required":[]}},"Description":{},"HoldoutPercent":{"type":"integer"},"Hook":{"shape":"Sl"},"IsPaused":{"type":"boolean"},"Limits":{"shape":"Sn"},"MessageConfiguration":{"shape":"Sa"},"Name":{},"Schedule":{"shape":"Si"},"SegmentId":{},"SegmentVersion":{"type":"integer"},"TreatmentDescription":{},"TreatmentName":{}}},"Sa":{"type":"structure","members":{"ADMMessage":{"shape":"Sb"},"APNSMessage":{"shape":"Sb"},"BaiduMessage":{"shape":"Sb"},"DefaultMessage":{"shape":"Sb"},"EmailMessage":{"type":"structure","members":{"Body":{},"FromAddress":{},"HtmlBody":{},"Title":{}},"required":[]},"GCMMessage":{"shape":"Sb"},"SMSMessage":{"type":"structure","members":{"Body":{},"MessageType":{},"SenderId":{}}}}},"Sb":{"type":"structure","members":{"Action":{},"Body":{},"ImageIconUrl":{},"ImageSmallIconUrl":{},"ImageUrl":{},"JsonBody":{},"MediaUrl":{},"RawContent":{},"SilentPush":{"type":"boolean"},"TimeToLive":{"type":"integer"},"Title":{},"Url":{}},"required":[]},"Si":{"type":"structure","members":{"EndTime":{},"Frequency":{},"IsLocalTime":{"type":"boolean"},"QuietTime":{"shape":"Sk"},"StartTime":{},"Timezone":{}},"required":[]},"Sk":{"type":"structure","members":{"End":{},"Start":{}}},"Sl":{"type":"structure","members":{"LambdaFunctionName":{},"Mode":{},"WebUrl":{}}},"Sn":{"type":"structure","members":{"Daily":{"type":"integer"},"MaximumDuration":{"type":"integer"},"MessagesPerSecond":{"type":"integer"},"Total":{"type":"integer"}}},"Sp":{"type":"structure","members":{"AdditionalTreatments":{"type":"list","member":{"type":"structure","members":{"Id":{},"MessageConfiguration":{"shape":"Sa"},"Schedule":{"shape":"Si"},"SizePercent":{"type":"integer"},"State":{"shape":"Ss"},"TreatmentDescription":{},"TreatmentName":{}},"required":[]}},"ApplicationId":{},"CreationDate":{},"DefaultState":{"shape":"Ss"},"Description":{},"HoldoutPercent":{"type":"integer"},"Hook":{"shape":"Sl"},"Id":{},"IsPaused":{"type":"boolean"},"LastModifiedDate":{},"Limits":{"shape":"Sn"},"MessageConfiguration":{"shape":"Sa"},"Name":{},"Schedule":{"shape":"Si"},"SegmentId":{},"SegmentVersion":{"type":"integer"},"State":{"shape":"Ss"},"TreatmentDescription":{},"TreatmentName":{},"Version":{"type":"integer"}},"required":[]},"Ss":{"type":"structure","members":{"CampaignStatus":{}}},"Sx":{"type":"structure","members":{"ApplicationId":{},"CompletedPieces":{"type":"integer"},"CompletionDate":{},"CreationDate":{},"Definition":{"type":"structure","members":{"RoleArn":{},"S3UrlPrefix":{},"SegmentId":{},"SegmentVersion":{"type":"integer"}},"required":[]},"FailedPieces":{"type":"integer"},"Failures":{"shape":"Sz"},"Id":{},"JobStatus":{},"TotalFailures":{"type":"integer"},"TotalPieces":{"type":"integer"},"TotalProcessed":{"type":"integer"},"Type":{}},"required":[]},"Sz":{"type":"list","member":{}},"S15":{"type":"structure","members":{"ApplicationId":{},"CompletedPieces":{"type":"integer"},"CompletionDate":{},"CreationDate":{},"Definition":{"type":"structure","members":{"DefineSegment":{"type":"boolean"},"ExternalId":{},"Format":{},"RegisterEndpoints":{"type":"boolean"},"RoleArn":{},"S3Url":{},"SegmentId":{},"SegmentName":{}},"required":[]},"FailedPieces":{"type":"integer"},"Failures":{"shape":"Sz"},"Id":{},"JobStatus":{},"TotalFailures":{"type":"integer"},"TotalPieces":{"type":"integer"},"TotalProcessed":{"type":"integer"},"Type":{}},"required":[]},"S18":{"type":"structure","members":{"Dimensions":{"shape":"S19"},"Name":{},"SegmentGroups":{"shape":"S1q"}},"required":[]},"S19":{"type":"structure","members":{"Attributes":{"shape":"S1a"},"Behavior":{"type":"structure","members":{"Recency":{"type":"structure","members":{"Duration":{},"RecencyType":{}},"required":[]}}},"Demographic":{"type":"structure","members":{"AppVersion":{"shape":"S1i"},"Channel":{"shape":"S1i"},"DeviceType":{"shape":"S1i"},"Make":{"shape":"S1i"},"Model":{"shape":"S1i"},"Platform":{"shape":"S1i"}}},"Location":{"type":"structure","members":{"Country":{"shape":"S1i"},"GPSPoint":{"type":"structure","members":{"Coordinates":{"type":"structure","members":{"Latitude":{"type":"double"},"Longitude":{"type":"double"}},"required":[]},"RangeInKilometers":{"type":"double"}},"required":[]}}},"Metrics":{"type":"map","key":{},"value":{"type":"structure","members":{"ComparisonOperator":{},"Value":{"type":"double"}}}},"UserAttributes":{"shape":"S1a"}}},"S1a":{"type":"map","key":{},"value":{"type":"structure","members":{"AttributeType":{},"Values":{"shape":"Sz"}},"required":[]}},"S1i":{"type":"structure","members":{"DimensionType":{},"Values":{"shape":"Sz"}},"required":[]},"S1q":{"type":"structure","members":{"Groups":{"type":"list","member":{"type":"structure","members":{"Dimensions":{"type":"list","member":{"shape":"S19"}},"SourceSegments":{"type":"list","member":{"type":"structure","members":{"Id":{},"Version":{"type":"integer"}}}},"SourceType":{},"Type":{}},"required":[]}},"Include":{}},"required":[]},"S20":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Dimensions":{"shape":"S19"},"Id":{},"ImportDefinition":{"type":"structure","members":{"ChannelCounts":{"type":"map","key":{},"value":{"type":"integer"}},"ExternalId":{},"Format":{},"RoleArn":{},"S3Url":{},"Size":{"type":"integer"}},"required":[]},"LastModifiedDate":{},"Name":{},"SegmentGroups":{"shape":"S1q"},"SegmentType":{},"Version":{"type":"integer"}},"required":[]},"S26":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S29":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"HasTokenKey":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S2c":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"HasTokenKey":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S2f":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"HasTokenKey":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S2i":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"DefaultAuthenticationMethod":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"HasTokenKey":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S2n":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Credential":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S2s":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Enabled":{"type":"boolean"},"FromAddress":{},"HasCredential":{"type":"boolean"},"Id":{},"Identity":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"MessagesPerSecond":{"type":"integer"},"Platform":{},"RoleArn":{},"Version":{"type":"integer"}},"required":[]},"S2v":{"type":"structure","members":{"Address":{},"ApplicationId":{},"Attributes":{"shape":"S2w"},"ChannelType":{},"CohortId":{},"CreationDate":{},"Demographic":{"shape":"S2y"},"EffectiveDate":{},"EndpointStatus":{},"Id":{},"Location":{"shape":"S2z"},"Metrics":{"shape":"S30"},"OptOut":{},"RequestId":{},"User":{"shape":"S31"}}},"S2w":{"type":"map","key":{},"value":{"shape":"Sz"}},"S2y":{"type":"structure","members":{"AppVersion":{},"Locale":{},"Make":{},"Model":{},"ModelVersion":{},"Platform":{},"PlatformVersion":{},"Timezone":{}}},"S2z":{"type":"structure","members":{"City":{},"Country":{},"Latitude":{"type":"double"},"Longitude":{"type":"double"},"PostalCode":{},"Region":{}}},"S30":{"type":"map","key":{},"value":{"type":"double"}},"S31":{"type":"structure","members":{"UserAttributes":{"shape":"S2w"},"UserId":{}}},"S34":{"type":"structure","members":{"ApplicationId":{},"DestinationStreamArn":{},"ExternalId":{},"LastModifiedDate":{},"LastUpdatedBy":{},"RoleArn":{}},"required":[]},"S37":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Credential":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"Version":{"type":"integer"}},"required":[]},"S3c":{"type":"structure","members":{"ApplicationId":{},"CreationDate":{},"Enabled":{"type":"boolean"},"HasCredential":{"type":"boolean"},"Id":{},"IsArchived":{"type":"boolean"},"LastModifiedBy":{},"LastModifiedDate":{},"Platform":{},"PromotionalMessagesPerSecond":{"type":"integer"},"SenderId":{},"ShortCode":{},"TransactionalMessagesPerSecond":{"type":"integer"},"Version":{"type":"integer"}},"required":[]},"S3f":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"S2v"}}},"required":[]},"S3v":{"type":"structure","members":{"ApplicationId":{},"CampaignHook":{"shape":"Sl"},"LastModifiedDate":{},"Limits":{"shape":"Sn"},"QuietTime":{"shape":"Sk"}},"required":[]},"S4d":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"Sp"}},"NextToken":{}},"required":[]},"S4w":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"Sx"}},"NextToken":{}},"required":[]},"S54":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"S15"}},"NextToken":{}},"required":[]},"S5g":{"type":"structure","members":{"Item":{"type":"list","member":{"shape":"S20"}},"NextToken":{}},"required":[]},"S62":{"type":"map","key":{},"value":{}},"S6j":{"type":"map","key":{},"value":{"type":"structure","members":{"BodyOverride":{},"Context":{"shape":"S62"},"RawContent":{},"Substitutions":{"shape":"S2w"},"TitleOverride":{}}}},"S6l":{"type":"structure","members":{"ADMMessage":{"type":"structure","members":{"Action":{},"Body":{},"ConsolidationKey":{},"Data":{"shape":"S62"},"ExpiresAfter":{},"IconReference":{},"ImageIconUrl":{},"ImageUrl":{},"MD5":{},"RawContent":{},"SilentPush":{"type":"boolean"},"SmallImageIconUrl":{},"Sound":{},"Substitutions":{"shape":"S2w"},"Title":{},"Url":{}}},"APNSMessage":{"type":"structure","members":{"Action":{},"Badge":{"type":"integer"},"Body":{},"Category":{},"CollapseId":{},"Data":{"shape":"S62"},"MediaUrl":{},"PreferredAuthenticationMethod":{},"Priority":{},"RawContent":{},"SilentPush":{"type":"boolean"},"Sound":{},"Substitutions":{"shape":"S2w"},"ThreadId":{},"TimeToLive":{"type":"integer"},"Title":{},"Url":{}}},"BaiduMessage":{"type":"structure","members":{"Action":{},"Body":{},"Data":{"shape":"S62"},"IconReference":{},"ImageIconUrl":{},"ImageUrl":{},"RawContent":{},"SilentPush":{"type":"boolean"},"SmallImageIconUrl":{},"Sound":{},"Substitutions":{"shape":"S2w"},"TimeToLive":{"type":"integer"},"Title":{},"Url":{}}},"DefaultMessage":{"type":"structure","members":{"Body":{},"Substitutions":{"shape":"S2w"}}},"DefaultPushNotificationMessage":{"type":"structure","members":{"Action":{},"Body":{},"Data":{"shape":"S62"},"SilentPush":{"type":"boolean"},"Substitutions":{"shape":"S2w"},"Title":{},"Url":{}}},"GCMMessage":{"type":"structure","members":{"Action":{},"Body":{},"CollapseKey":{},"Data":{"shape":"S62"},"IconReference":{},"ImageIconUrl":{},"ImageUrl":{},"Priority":{},"RawContent":{},"RestrictedPackageName":{},"SilentPush":{"type":"boolean"},"SmallImageIconUrl":{},"Sound":{},"Substitutions":{"shape":"S2w"},"TimeToLive":{"type":"integer"},"Title":{},"Url":{}}},"SMSMessage":{"type":"structure","members":{"Body":{},"Keyword":{},"MessageType":{},"OriginationNumber":{},"SenderId":{},"Substitutions":{"shape":"S2w"}}}},"required":[]},"S6v":{"type":"map","key":{},"value":{"type":"structure","members":{"Address":{},"DeliveryStatus":{},"MessageId":{},"StatusCode":{"type":"integer"},"StatusMessage":{},"UpdatedToken":{}},"required":[]}},"S7y":{"type":"structure","members":{"Message":{},"RequestID":{}}}}}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var BrowserStorageCache_1 = __webpack_require__(140);
exports.BrowserStorageCache = BrowserStorageCache_1.default;
var InMemoryCache_1 = __webpack_require__(143);
exports.InMemoryCache = InMemoryCache_1.default;
exports.default = BrowserStorageCache_1.default;
core_1.default.register(BrowserStorageCache_1.default);
//# sourceMappingURL=index.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(21);
var StorageCache_1 = __webpack_require__(44);
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('Cache');
/**
 * Customized storage based on the SessionStorage or LocalStorage with LRU implemented
 */
var BrowserStorageCache = /** @class */function (_super) {
    __extends(BrowserStorageCache, _super);
    /**
     * initialize the cache
     * @param config - the configuration of the cache
     */
    function BrowserStorageCache(config) {
        var _this = this;
        var cacheConfig = config ? Object.assign({}, Utils_1.defaultConfig, config) : Utils_1.defaultConfig;
        _this = _super.call(this, cacheConfig) || this;
        _this.config.storage = cacheConfig.storage;
        _this.getItem = _this.getItem.bind(_this);
        _this.setItem = _this.setItem.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        return _this;
    }
    /**
     * decrease current size of the cache
     *
     * @private
     * @param amount - the amount of the cache size which needs to be decreased
     */
    BrowserStorageCache.prototype._decreaseCurSizeInBytes = function (amount) {
        var curSize = this.getCacheCurSize();
        this.config.storage.setItem(this.cacheCurSizeKey, (curSize - amount).toString());
    };
    /**
     * increase current size of the cache
     *
     * @private
     * @param amount - the amount of the cache szie which need to be increased
     */
    BrowserStorageCache.prototype._increaseCurSizeInBytes = function (amount) {
        var curSize = this.getCacheCurSize();
        this.config.storage.setItem(this.cacheCurSizeKey, (curSize + amount).toString());
    };
    /**
     * update the visited time if item has been visited
     *
     * @private
     * @param item - the item which need to be refreshed
     * @param prefixedKey - the key of the item
     *
     * @return the refreshed item
     */
    BrowserStorageCache.prototype._refreshItem = function (item, prefixedKey) {
        item.visitedTime = Utils_1.getCurrTime();
        this.config.storage.setItem(prefixedKey, JSON.stringify(item));
        return item;
    };
    /**
     * check wether item is expired
     *
     * @private
     * @param key - the key of the item
     *
     * @return true if the item is expired.
     */
    BrowserStorageCache.prototype._isExpired = function (key) {
        var text = this.config.storage.getItem(key);
        var item = JSON.parse(text);
        if (Utils_1.getCurrTime() >= item.expires) {
            return true;
        }
        return false;
    };
    /**
     * delete item from cache
     *
     * @private
     * @param prefixedKey - the key of the item
     * @param size - optional, the byte size of the item
     */
    BrowserStorageCache.prototype._removeItem = function (prefixedKey, size) {
        var itemSize = size ? size : JSON.parse(this.config.storage.getItem(prefixedKey)).byteSize;
        this._decreaseCurSizeInBytes(itemSize);
        // remove the cache item
        this.config.storage.removeItem(prefixedKey);
    };
    /**
     * put item into cache
     *
     * @private
     * @param prefixedKey - the key of the item
     * @param itemData - the value of the item
     * @param itemSizeInBytes - the byte size of the item
     */
    BrowserStorageCache.prototype._setItem = function (prefixedKey, item) {
        // update the cache size
        this._increaseCurSizeInBytes(item.byteSize);
        try {
            this.config.storage.setItem(prefixedKey, JSON.stringify(item));
        } catch (setItemErr) {
            // if failed, we need to rollback the cache size
            this._decreaseCurSizeInBytes(item.byteSize);
            logger.error("Failed to set item " + setItemErr);
        }
    };
    /**
     * total space needed when poping out items
     *
     * @private
     * @param itemSize
     *
     * @return total space needed
     */
    BrowserStorageCache.prototype._sizeToPop = function (itemSize) {
        var spaceItemNeed = this.getCacheCurSize() + itemSize - this.config.capacityInBytes;
        var cacheThresholdSpace = (1 - this.config.warningThreshold) * this.config.capacityInBytes;
        return spaceItemNeed > cacheThresholdSpace ? spaceItemNeed : cacheThresholdSpace;
    };
    /**
     * see whether cache is full
     *
     * @private
     * @param itemSize
     *
     * @return true if cache is full
     */
    BrowserStorageCache.prototype._isCacheFull = function (itemSize) {
        return itemSize + this.getCacheCurSize() > this.config.capacityInBytes;
    };
    /**
     * scan the storage and find out all the keys owned by this cache
     * also clean the expired keys while scanning
     *
     * @private
     *
     * @return array of keys
     */
    BrowserStorageCache.prototype._findValidKeys = function () {
        var keys = [];
        var keyInCache = [];
        // get all keys in Storage
        for (var i = 0; i < this.config.storage.length; i += 1) {
            keyInCache.push(this.config.storage.key(i));
        }
        // find those items which belong to our cache and also clean those expired items
        for (var i = 0; i < keyInCache.length; i += 1) {
            var key = keyInCache[i];
            if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
                if (this._isExpired(key)) {
                    this._removeItem(key);
                } else {
                    keys.push(key);
                }
            }
        }
        return keys;
    };
    /**
     * get all the items we have, sort them by their priority,
     * if priority is same, sort them by their last visited time
     * pop out items from the low priority (5 is the lowest)
     *
     * @private
     * @param keys - all the keys in this cache
     * @param sizeToPop - the total size of the items which needed to be poped out
     */
    BrowserStorageCache.prototype._popOutItems = function (keys, sizeToPop) {
        var items = [];
        var remainedSize = sizeToPop;
        // get the items from Storage
        for (var i = 0; i < keys.length; i += 1) {
            var val = this.config.storage.getItem(keys[i]);
            if (val != null) {
                var item = JSON.parse(val);
                items.push(item);
            }
        }
        // first compare priority
        // then compare visited time
        items.sort(function (a, b) {
            if (a.priority > b.priority) {
                return -1;
            } else if (a.priority < b.priority) {
                return 1;
            } else {
                if (a.visitedTime < b.visitedTime) {
                    return -1;
                } else return 1;
            }
        });
        for (var i = 0; i < items.length; i += 1) {
            // pop out items until we have enough room for new item
            this._removeItem(items[i].key, items[i].byteSize);
            remainedSize -= items[i].byteSize;
            if (remainedSize <= 0) {
                return;
            }
        }
    };
    /**
     * Set item into cache. You can put number, string, boolean or object.
     * The cache will first check whether has the same key.
     * If it has, it will delete the old item and then put the new item in
     * The cache will pop out items if it is full
     * You can specify the cache item options. The cache will abort and output a warning:
     * If the key is invalid
     * If the size of the item exceeds itemMaxSize.
     * If the value is undefined
     * If incorrect cache item configuration
     * If error happened with browser storage
     *
     * @param key - the key of the item
     * @param value - the value of the item
     * @param {Object} [options] - optional, the specified meta-data
     */
    BrowserStorageCache.prototype.setItem = function (key, value, options) {
        logger.log("Set item: key is " + key + ", value is " + value + " with options: " + options);
        var prefixedKey = this.config.keyPrefix + key;
        // invalid keys
        if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
            logger.warn("Invalid key: should not be empty or 'CurSize'");
            return;
        }
        if (typeof value === 'undefined') {
            logger.warn("The value of item should not be undefined!");
            return;
        }
        var cacheItemOptions = {
            priority: options && options.priority !== undefined ? options.priority : this.config.defaultPriority,
            expires: options && options.expires !== undefined ? options.expires : this.config.defaultTTL + Utils_1.getCurrTime()
        };
        if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
            logger.warn("Invalid parameter: priority due to out or range. It should be within 1 and 5.");
            return;
        }
        var item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
        // check wether this item is too big;
        if (item.byteSize > this.config.itemMaxSize) {
            logger.warn("Item with key: " + key + " you are trying to put into is too big!");
            return;
        }
        try {
            // first look into the storage, if it exists, delete it.
            var val = this.config.storage.getItem(prefixedKey);
            if (val) {
                this._removeItem(prefixedKey, JSON.parse(val).byteSize);
            }
            // check whether the cache is full
            if (this._isCacheFull(item.byteSize)) {
                var validKeys = this._findValidKeys();
                // check again and then pop out items
                if (this._isCacheFull(item.byteSize)) {
                    var sizeToPop = this._sizeToPop(item.byteSize);
                    this._popOutItems(validKeys, sizeToPop);
                }
            }
            // put item in the cache
            // may failed due to storage full
            this._setItem(prefixedKey, item);
        } catch (e) {
            logger.warn("setItem failed! " + e);
        }
    };
    /**
     * Get item from cache. It will return null if item doesn’t exist or it has been expired.
     * If you specified callback function in the options,
     * then the function will be executed if no such item in the cache
     * and finally put the return value into cache.
     * Please make sure the callback function will return the value you want to put into the cache.
     * The cache will abort output a warning:
     * If the key is invalid
     * If error happened with browser storage
     *
     * @param key - the key of the item
     * @param {Object} [options] - the options of callback function
     *
     * @return - return the value of the item
     */
    BrowserStorageCache.prototype.getItem = function (key, options) {
        logger.log("Get item: key is " + key + " with options " + options);
        var ret = null;
        var prefixedKey = this.config.keyPrefix + key;
        if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
            logger.warn("Invalid key: should not be empty or 'CurSize'");
            return null;
        }
        try {
            ret = this.config.storage.getItem(prefixedKey);
            if (ret != null) {
                if (this._isExpired(prefixedKey)) {
                    // if expired, remove that item and return null
                    this._removeItem(prefixedKey, JSON.parse(ret).byteSize);
                    ret = null;
                } else {
                    // if not expired, great, return the value and refresh it
                    var item = JSON.parse(ret);
                    item = this._refreshItem(item, prefixedKey);
                    return item.data;
                }
            }
            if (options && options.callback !== undefined) {
                var val = options.callback();
                if (val !== null) {
                    this.setItem(key, val, options);
                }
                return val;
            }
            return null;
        } catch (e) {
            logger.warn("getItem failed! " + e);
            return null;
        }
    };
    /**
     * remove item from the cache
     * The cache will abort output a warning:
     * If error happened with browser storage
     * @param key - the key of the item
     */
    BrowserStorageCache.prototype.removeItem = function (key) {
        logger.log("Remove item: key is " + key);
        var prefixedKey = this.config.keyPrefix + key;
        if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
            return;
        }
        try {
            var val = this.config.storage.getItem(prefixedKey);
            if (val) {
                this._removeItem(prefixedKey, JSON.parse(val).byteSize);
            }
        } catch (e) {
            logger.warn("removeItem failed! " + e);
        }
    };
    /**
     * clear the entire cache
     * The cache will abort output a warning:
     * If error happened with browser storage
     */
    BrowserStorageCache.prototype.clear = function () {
        logger.log("Clear Cache");
        var keysToRemove = [];
        for (var i = 0; i < this.config.storage.length; i += 1) {
            var key = this.config.storage.key(i);
            if (key.indexOf(this.config.keyPrefix) === 0) {
                keysToRemove.push(key);
            }
        }
        try {
            for (var i = 0; i < keysToRemove.length; i += 1) {
                this.config.storage.removeItem(keysToRemove[i]);
            }
        } catch (e) {
            logger.warn("clear failed! " + e);
        }
    };
    /**
     * Return all the keys in the cache.
     *
     * @return - all keys in the cache
     */
    BrowserStorageCache.prototype.getAllKeys = function () {
        var keys = [];
        for (var i = 0; i < this.config.storage.length; i += 1) {
            var key = this.config.storage.key(i);
            if (key.indexOf(this.config.keyPrefix) === 0 && key !== this.cacheCurSizeKey) {
                keys.push(key.substring(this.config.keyPrefix.length));
            }
        }
        return keys;
    };
    /**
     * return the current size of the cache
     *
     * @return - current size of the cache
     */
    BrowserStorageCache.prototype.getCacheCurSize = function () {
        var ret = this.config.storage.getItem(this.cacheCurSizeKey);
        if (!ret) {
            this.config.storage.setItem(this.cacheCurSizeKey, '0');
            ret = '0';
        }
        return Number(ret);
    };
    /**
     * Return a new instance of cache with customized configuration.
     * @param config - the customized configuration
     *
     * @return - new instance of Cache
     */
    BrowserStorageCache.prototype.createInstance = function (config) {
        if (!config.keyPrefix || config.keyPrefix === Utils_1.defaultConfig.keyPrefix) {
            logger.error('invalid keyPrefix, setting keyPrefix with timeStamp');
            config.keyPrefix = Utils_1.getCurrTime.toString();
        }
        return new BrowserStorageCache(config);
    };
    return BrowserStorageCache;
}(StorageCache_1.default);
exports.BrowserStorageCache = BrowserStorageCache;
var instance = new BrowserStorageCache();
exports.default = instance;
//# sourceMappingURL=BrowserStorageCache.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
/**
* Default cache config
*/
exports.defaultConfig = {
    keyPrefix: 'aws-amplify-cache',
    capacityInBytes: 1048576,
    itemMaxSize: 210000,
    defaultTTL: 259200000,
    defaultPriority: 5,
    warningThreshold: 0.8,
    // the storage helper will check if localStorage exists,
    // if not, will use a in-memory object instead
    storage: new core_1.StorageHelper().getStorage()
};
/**
 * return the byte size of the string
 * @param str
 */
function getByteLength(str) {
    var ret = 0;
    ret = str.length;
    for (var i = str.length; i >= 0; i -= 1) {
        var charCode = str.charCodeAt(i);
        if (charCode > 0x7f && charCode <= 0x7ff) {
            ret += 1;
        } else if (charCode > 0x7ff && charCode <= 0xffff) {
            ret += 2;
        }
        // trail surrogate
        if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
            i -= 1;
        }
    }
    return ret;
}
exports.getByteLength = getByteLength;
/**
 * get current time
 */
function getCurrTime() {
    var currTime = new Date();
    return currTime.getTime();
}
exports.getCurrTime = getCurrTime;
/**
 * check if passed value is an integer
 */
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return _isInteger(value);
}
exports.isInteger = isInteger;
function _isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
/**
 * provide an object as the in-memory cache
 */
var store = {};
var CacheObject = /** @class */function () {
    function CacheObject() {}
    CacheObject.clear = function () {
        store = {};
    };
    CacheObject.getItem = function (key) {
        return store[key] || null;
    };
    CacheObject.setItem = function (key, value) {
        store[key] = value;
    };
    CacheObject.removeItem = function (key) {
        delete store[key];
    };
    return CacheObject;
}();
exports.CacheObject = CacheObject;
//# sourceMappingURL=CacheUtils.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedNode = /** @class */function () {
    function DoubleLinkedNode(keyVal) {
        this.key = keyVal ? keyVal : '';
        this.prevNode = null;
        this.nextNode = null;
    }
    return DoubleLinkedNode;
}();
/**
 * double linked list plus a hash table inside
 * each key in the cache stored as a node in the list
 * recently visited node will be rotated to the head
 * so the Last Recently Visited node will be at the tail
 *
 * @member head - dummy head of the linked list
 * @member tail - dummy tail of the linked list
 * @member hashtable - the hashtable which maps cache key to list node
 * @member length - length of the list
 */
var CacheList = /** @class */function () {
    /**
     * initialization
     */
    function CacheList() {
        this.head = new DoubleLinkedNode();
        this.tail = new DoubleLinkedNode();
        this.hashtable = {};
        this.length = 0;
        this.head.nextNode = this.tail;
        this.tail.prevNode = this.head;
    }
    /**
     * insert node to the head of the list
     *
     * @param node
     */
    CacheList.prototype.insertNodeToHead = function (node) {
        var tmp = this.head.nextNode;
        this.head.nextNode = node;
        node.nextNode = tmp;
        node.prevNode = this.head;
        tmp.prevNode = node;
        this.length = this.length + 1;
    };
    /**
     * remove node
     *
     * @param node
     */
    CacheList.prototype.removeNode = function (node) {
        node.prevNode.nextNode = node.nextNode;
        node.nextNode.prevNode = node.prevNode;
        node.prevNode = null;
        node.nextNode = null;
        this.length = this.length - 1;
    };
    /**
     * @return true if list is empty
     */
    CacheList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
     * refresh node so it is rotated to the head
     *
     * @param key - key of the node
     */
    CacheList.prototype.refresh = function (key) {
        var node = this.hashtable[key];
        this.removeNode(node);
        this.insertNodeToHead(node);
    };
    /**
     * insert new node to the head and add it in the hashtable
     *
     * @param key - the key of the node
     */
    CacheList.prototype.insertItem = function (key) {
        var node = new DoubleLinkedNode(key);
        this.hashtable[key] = node;
        this.insertNodeToHead(node);
    };
    /**
     * @return the LAST Recently Visited key
     */
    CacheList.prototype.getLastItem = function () {
        return this.tail.prevNode.key;
    };
    /**
     * remove the cache key from the list and hashtable
     * @param key - the key of the node
     */
    CacheList.prototype.removeItem = function (key) {
        var removedItem = this.hashtable[key];
        this.removeNode(removedItem);
        delete this.hashtable[key];
    };
    /**
     * @return length of the list
     */
    CacheList.prototype.getSize = function () {
        return this.length;
    };
    /**
     * @return true if the key is in the hashtable
     * @param key
     */
    CacheList.prototype.containsKey = function (key) {
        return key in this.hashtable;
    };
    /**
     * clean up the list and hashtable
     */
    CacheList.prototype.clearList = function () {
        for (var _i = 0, _a = Object.keys(this.hashtable); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.hashtable.hasOwnProperty(key)) {
                delete this.hashtable[key];
            }
        }
        this.head.nextNode = this.tail;
        this.tail.prevNode = this.head;
        this.length = 0;
    };
    /**
     * @return all keys in the hashtable
     */
    CacheList.prototype.getKeys = function () {
        return Object.keys(this.hashtable);
    };
    /**
     * mainly for test
     *
     * @param key
     * @return true if key is the head node
     */
    CacheList.prototype.isHeadNode = function (key) {
        var node = this.hashtable[key];
        return node.prevNode === this.head;
    };
    /**
     * mainly for test
     *
     * @param key
     * @return true if key is the tail node
     */
    CacheList.prototype.isTailNode = function (key) {
        var node = this.hashtable[key];
        return node.nextNode === this.tail;
    };
    return CacheList;
}();
exports.default = CacheList;
//# sourceMappingURL=CacheList.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(21);
var StorageCache_1 = __webpack_require__(44);
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('InMemoryCache');
/**
 * Customized in-memory cache with LRU implemented
 * @member cacheObj - object which store items
 * @member cacheList - list of keys in the cache with LRU
 * @member curSizeInBytes - current size of the cache
 * @member maxPriority - max of the priority
 * @member cacheSizeLimit - the limit of cache size
 */
var InMemoryCache = /** @class */function (_super) {
    __extends(InMemoryCache, _super);
    /**
     * initialize the cache
     *
     * @param config - the configuration of the cache
     */
    function InMemoryCache(config) {
        var _this = this;
        var cacheConfig = config ? Object.assign({}, Utils_1.defaultConfig, config) : Utils_1.defaultConfig;
        _this = _super.call(this, cacheConfig) || this;
        logger.debug('now we start!');
        _this.cacheList = [];
        _this.curSizeInBytes = 0;
        _this.maxPriority = 5;
        _this.getItem = _this.getItem.bind(_this);
        _this.setItem = _this.setItem.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        // initialize list for every priority
        for (var i = 0; i < _this.maxPriority; i += 1) {
            _this.cacheList[i] = new Utils_1.CacheList();
        }
        return _this;
    }
    /**
     * decrease current size of the cache
     *
     * @param amount - the amount of the cache size which needs to be decreased
     */
    InMemoryCache.prototype._decreaseCurSizeInBytes = function (amount) {
        this.curSizeInBytes -= amount;
    };
    /**
     * increase current size of the cache
     *
     * @param amount - the amount of the cache szie which need to be increased
     */
    InMemoryCache.prototype._increaseCurSizeInBytes = function (amount) {
        this.curSizeInBytes += amount;
    };
    /**
     * check whether item is expired
     *
     * @param key - the key of the item
     *
     * @return true if the item is expired.
     */
    InMemoryCache.prototype._isExpired = function (key) {
        var text = Utils_1.CacheObject.getItem(key);
        var item = JSON.parse(text);
        if (Utils_1.getCurrTime() >= item.expires) {
            return true;
        }
        return false;
    };
    /**
     * delete item from cache
     *
     * @param prefixedKey - the key of the item
     * @param listIdx - indicates which cache list the key belongs to
     */
    InMemoryCache.prototype._removeItem = function (prefixedKey, listIdx) {
        // delete the key from the list
        this.cacheList[listIdx].removeItem(prefixedKey);
        // decrease the current size of the cache
        this._decreaseCurSizeInBytes(JSON.parse(Utils_1.CacheObject.getItem(prefixedKey)).byteSize);
        // finally remove the item from memory
        Utils_1.CacheObject.removeItem(prefixedKey);
    };
    /**
     * put item into cache
     *
     * @param prefixedKey - the key of the item
     * @param itemData - the value of the item
     * @param itemSizeInBytes - the byte size of the item
     * @param listIdx - indicates which cache list the key belongs to
     */
    InMemoryCache.prototype._setItem = function (prefixedKey, item, listIdx) {
        // insert the key into the list
        this.cacheList[listIdx].insertItem(prefixedKey);
        // increase the current size of the cache
        this._increaseCurSizeInBytes(item.byteSize);
        // finally add the item into memory
        Utils_1.CacheObject.setItem(prefixedKey, JSON.stringify(item));
    };
    /**
     * see whether cache is full
     *
     * @param itemSize
     *
     * @return true if cache is full
     */
    InMemoryCache.prototype._isCacheFull = function (itemSize) {
        return this.curSizeInBytes + itemSize > this.config.capacityInBytes;
    };
    /**
     * check whether the cache contains the key
     *
     * @param key
     */
    InMemoryCache.prototype.containsKey = function (key) {
        var prefixedKey = this.config.keyPrefix + key;
        for (var i = 0; i < this.maxPriority; i += 1) {
            if (this.cacheList[i].containsKey(prefixedKey)) {
                return i + 1;
            }
        }
        return -1;
    };
    /**
     * * Set item into cache. You can put number, string, boolean or object.
     * The cache will first check whether has the same key.
     * If it has, it will delete the old item and then put the new item in
     * The cache will pop out items if it is full
     * You can specify the cache item options. The cache will abort and output a warning:
     * If the key is invalid
     * If the size of the item exceeds itemMaxSize.
     * If the value is undefined
     * If incorrect cache item configuration
     * If error happened with browser storage
     *
     * @param key - the key of the item
     * @param value - the value of the item
     * @param options - optional, the specified meta-data
     *
     * @throws if the item is too big which exceeds the limit of single item size
     * @throws if the key is invalid
     */
    InMemoryCache.prototype.setItem = function (key, value, options) {
        var prefixedKey = this.config.keyPrefix + key;
        // invalid keys
        if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
            logger.warn("Invalid key: should not be empty or 'CurSize'");
            return;
        }
        if (typeof value === 'undefined') {
            logger.warn("The value of item should not be undefined!");
            return;
        }
        var cacheItemOptions = {
            priority: options && options.priority !== undefined ? options.priority : this.config.defaultPriority,
            expires: options && options.expires !== undefined ? options.expires : this.config.defaultTTL + Utils_1.getCurrTime()
        };
        if (cacheItemOptions.priority < 1 || cacheItemOptions.priority > 5) {
            logger.warn("Invalid parameter: priority due to out or range. It should be within 1 and 5.");
            return;
        }
        var item = this.fillCacheItem(prefixedKey, value, cacheItemOptions);
        // check wether this item is too big;
        if (item.byteSize > this.config.itemMaxSize) {
            logger.warn("Item with key: " + key + " you are trying to put into is too big!");
            return;
        }
        // if key already in the cache, then delete it.
        var presentKeyPrio = this.containsKey(key);
        if (presentKeyPrio !== -1) {
            this._removeItem(prefixedKey, presentKeyPrio - 1);
        }
        // pop out items in the cache when cache is full based on LRU
        // first start from lowest priority cache list
        var cacheListIdx = this.maxPriority - 1;
        while (this._isCacheFull(item.byteSize) && cacheListIdx >= 0) {
            if (!this.cacheList[cacheListIdx].isEmpty()) {
                var popedItemKey = this.cacheList[cacheListIdx].getLastItem();
                this._removeItem(popedItemKey, cacheListIdx);
            } else {
                cacheListIdx -= 1;
            }
        }
        this._setItem(prefixedKey, item, Number(item.priority) - 1);
    };
    /**
     * Get item from cache. It will return null if item doesn’t exist or it has been expired.
     * If you specified callback function in the options,
     * then the function will be executed if no such item in the cache
     * and finally put the return value into cache.
     * Please make sure the callback function will return the value you want to put into the cache.
     * The cache will abort output a warning:
     * If the key is invalid
     *
     * @param key - the key of the item
     * @param options - the options of callback function
     */
    InMemoryCache.prototype.getItem = function (key, options) {
        var ret = null;
        var prefixedKey = this.config.keyPrefix + key;
        if (prefixedKey === this.config.keyPrefix || prefixedKey === this.cacheCurSizeKey) {
            logger.warn("Invalid key: should not be empty or 'CurSize'");
            return null;
        }
        // check whether it's in the cachelist
        var presentKeyPrio = this.containsKey(key);
        if (presentKeyPrio !== -1) {
            if (this._isExpired(prefixedKey)) {
                // if expired, remove that item and return null
                this._removeItem(prefixedKey, presentKeyPrio - 1);
            } else {
                // if not expired, great, return the value and refresh it
                ret = Utils_1.CacheObject.getItem(prefixedKey);
                var item = JSON.parse(ret);
                this.cacheList[item.priority - 1].refresh(prefixedKey);
                return item.data;
            }
        }
        if (options && options.callback !== undefined) {
            var val = options.callback();
            if (val !== null) {
                this.setItem(key, val, options);
            }
            return val;
        }
        return null;
    };
    /**
     * remove item from the cache
     *
     * @param key - the key of the item
     */
    InMemoryCache.prototype.removeItem = function (key) {
        var prefixedKey = this.config.keyPrefix + key;
        // check if the key is in the cache
        var presentKeyPrio = this.containsKey(key);
        if (presentKeyPrio !== -1) {
            this._removeItem(prefixedKey, presentKeyPrio - 1);
        }
    };
    /**
     * clear the entire cache
     */
    InMemoryCache.prototype.clear = function () {
        for (var i = 0; i < this.maxPriority; i += 1) {
            for (var _i = 0, _a = this.cacheList[i].getKeys(); _i < _a.length; _i++) {
                var key = _a[_i];
                this._removeItem(key, i);
            }
        }
    };
    /**
     * Return all the keys in the cache.
     */
    InMemoryCache.prototype.getAllKeys = function () {
        var keys = [];
        for (var i = 0; i < this.maxPriority; i += 1) {
            for (var _i = 0, _a = this.cacheList[i].getKeys(); _i < _a.length; _i++) {
                var key = _a[_i];
                keys.push(key.substring(this.config.keyPrefix.length));
            }
        }
        return keys;
    };
    /**
     * return the current size of the cache
     *
     * @return the current size of the cache
     */
    InMemoryCache.prototype.getCacheCurSize = function () {
        return this.curSizeInBytes;
    };
    /**
     * Return a new instance of cache with customized configuration.
     * @param config - the customized configuration
     */
    InMemoryCache.prototype.createInstance = function (config) {
        return new InMemoryCache(config);
    };
    return InMemoryCache;
}(StorageCache_1.default);
exports.InMemoryCache = InMemoryCache;
var instance = new InMemoryCache();
exports.default = instance;
//# sourceMappingURL=InMemoryCache.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(145);
var v4 = __webpack_require__(146);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(45);
var bytesToUuid = __webpack_require__(46);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(45);
var bytesToUuid = __webpack_require__(46);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageViewTracker_1 = __webpack_require__(148);
exports.PageViewTracker = PageViewTracker_1.default;
var EventTracker_1 = __webpack_require__(150);
exports.EventTracker = EventTracker_1.default;
var SessionTracker_1 = __webpack_require__(156);
exports.SessionTracker = SessionTracker_1.default;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var MethodEmbed_1 = __webpack_require__(149);
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('PageViewTracker');
var PREV_URL_KEY = 'aws-amplify-analytics-prevUrl';
var getUrl = function () {
    if (!core_1.JS.browserOrNode().isBrowser)
        return '';
    else
        return window.location.origin + window.location.pathname;
};
var defaultOpts = {
    enable: false,
    provider: 'AWSPinpoint',
    getUrl: getUrl
};
var PageViewTracker = /** @class */ (function () {
    function PageViewTracker(tracker, opts) {
        logger.debug('initialize pageview tracker with opts', opts);
        this._config = Object.assign({}, defaultOpts, opts);
        this._tracker = tracker;
        this._hasEnabled = false;
        this._trackFunc = this._trackFunc.bind(this);
        if (this._config.type === 'SPA') {
            this._pageViewTrackSPA();
        }
        else {
            this._pageViewTrackDefault();
        }
    }
    PageViewTracker.prototype.configure = function (opts) {
        Object.assign(this._config, opts);
        // if spa, need to remove those listeners if disabled
        if (this._config.type === 'SPA') {
            this._pageViewTrackSPA();
        }
        return this._config;
    };
    PageViewTracker.prototype._isSameUrl = function () {
        var prevUrl = sessionStorage.getItem(PREV_URL_KEY);
        var curUrl = this._config.getUrl();
        if (prevUrl === curUrl) {
            logger.debug('the url is same');
            return true;
        }
        else
            return false;
    };
    PageViewTracker.prototype._pageViewTrackDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, customAttrs, _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!core_1.JS.browserOrNode().isBrowser || !window.addEventListener || !window.sessionStorage) {
                            logger.debug('not in the supported web enviroment');
                            return [2 /*return*/];
                        }
                        url = this._config.getUrl();
                        if (!(typeof this._config.attributes === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._config.attributes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this._config.attributes;
                        _b.label = 3;
                    case 3:
                        customAttrs = _a;
                        attributes = Object.assign({
                            url: url
                        }, customAttrs);
                        if (this._config.enable && !this._isSameUrl()) {
                            this._tracker({
                                name: this._config.eventName || 'pageView',
                                attributes: attributes
                            }, this._config.provider).catch(function (e) {
                                logger.debug('Failed to record the page view event', e);
                            });
                            sessionStorage.setItem(PREV_URL_KEY, url);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PageViewTracker.prototype._trackFunc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, customAttrs, _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!core_1.JS.browserOrNode().isBrowser || !window.addEventListener || !history.pushState || !window.sessionStorage) {
                            logger.debug('not in the supported web enviroment');
                            return [2 /*return*/];
                        }
                        url = this._config.getUrl();
                        if (!(typeof this._config.attributes === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._config.attributes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this._config.attributes;
                        _b.label = 3;
                    case 3:
                        customAttrs = _a;
                        attributes = Object.assign({
                            url: url
                        }, customAttrs);
                        if (!this._isSameUrl()) {
                            this._tracker({
                                name: this._config.eventName || 'pageView',
                                attributes: attributes
                            }, this._config.provider).catch(function (e) {
                                logger.debug('Failed to record the page view event', e);
                            });
                            sessionStorage.setItem(PREV_URL_KEY, url);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PageViewTracker.prototype._pageViewTrackSPA = function () {
        if (!core_1.JS.browserOrNode().isBrowser || !window.addEventListener || !history.pushState) {
            logger.debug('not in the supported web enviroment');
            return;
        }
        if (this._config.enable && !this._hasEnabled) {
            MethodEmbed_1.default.add(history, 'pushState', this._trackFunc);
            MethodEmbed_1.default.add(history, 'replaceState', this._trackFunc);
            window.addEventListener('popstate', this._trackFunc);
            this._trackFunc();
            this._hasEnabled = true;
        }
        else {
            MethodEmbed_1.default.remove(history, 'pushState');
            MethodEmbed_1.default.remove(history, 'replaceState');
            window.removeEventListener('popstate', this._trackFunc);
            this._hasEnabled = false;
        }
    };
    return PageViewTracker;
}());
exports.default = PageViewTracker;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var lists = [];
var MethodEmbed = /** @class */ (function () {
    function MethodEmbed(context, methodName) {
        this.context = context;
        this.methodName = methodName;
        this._originalMethod = context[methodName].bind(context);
    }
    MethodEmbed.add = function (context, methodName, methodOverride) {
        getInstance(context, methodName).set(methodOverride);
    };
    MethodEmbed.remove = function (context, methodName) {
        getInstance(context, methodName).remove();
    };
    MethodEmbed.prototype.set = function (methodOverride) {
        var _this = this;
        this.context[this.methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return methodOverride(_this._originalMethod.apply(_this, args));
        };
    };
    MethodEmbed.prototype.remove = function () {
        this.context[this.methodName] = this._originalMethod;
    };
    return MethodEmbed;
}());
exports.default = MethodEmbed;
function getInstance(context, methodName) {
    var instance = lists
        .filter(function (h) { return h.context === context && h.methodName === methodName; })[0];
    if (!instance) {
        instance = new MethodEmbed(context, methodName);
        lists.push(instance);
    }
    return instance;
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_utils_1 = __webpack_require__(151);
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('EventTracker');
var defaultOpts = {
    enable: false,
    events: ['click'],
    selectorPrefix: 'data-amplify-analytics-',
    provider: 'AWSPinpoint'
};
var EventTracker = /** @class */ (function () {
    function EventTracker(tracker, opts) {
        if (!core_1.JS.browserOrNode().isBrowser || !window.addEventListener) {
            logger.debug('not in the supported web environment');
            return;
        }
        this._config = Object.assign({}, defaultOpts, opts);
        this._tracker = tracker;
        this._delegates = {};
        this._trackFunc = this._trackFunc.bind(this);
        logger.debug('initialize pageview tracker with opts', this._config);
        this.configure(this._config);
    }
    EventTracker.prototype.configure = function (opts) {
        var _this = this;
        Object.assign(this._config, opts);
        if (!this._config.enable) {
            Object.keys(this._delegates).forEach(function (key) {
                if (typeof _this._delegates[key].destroy === 'function')
                    _this._delegates[key].destroy();
            });
            this._delegates = {};
        }
        else if (this._config.enable && Object.keys(this._delegates).length === 0) {
            var selector_1 = '[' + this._config.selectorPrefix + 'on]';
            this._config.events.forEach(function (evt) {
                _this._delegates[evt] = dom_utils_1.delegate(document, evt, selector_1, _this._trackFunc, { composed: true, useCapture: true });
            });
        }
        return this._config;
    };
    EventTracker.prototype._trackFunc = function (event, element) {
        return __awaiter(this, void 0, void 0, function () {
            var customAttrs, events, eventName, attrs, defaultAttrs, _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        customAttrs = {};
                        events = element
                            .getAttribute(this._config.selectorPrefix + 'on')
                            .split(/\s*,\s*/);
                        eventName = element.getAttribute(this._config.selectorPrefix + 'name');
                        attrs = element.getAttribute(this._config.selectorPrefix + 'attrs');
                        if (attrs) {
                            attrs.split(/\s*,\s*/)
                                .forEach(function (attr) {
                                var tmp = attr.trim().split(/\s*:\s*/);
                                customAttrs[tmp[0]] = tmp[1];
                            });
                        }
                        if (!(typeof this._config.attributes === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._config.attributes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this._config.attributes;
                        _b.label = 3;
                    case 3:
                        defaultAttrs = _a;
                        attributes = Object.assign({
                            type: event.type,
                            target: event.target.localName + " with id " + event.target.id
                        }, defaultAttrs, customAttrs);
                        logger.debug('events needed to be recorded', events);
                        logger.debug('attributes needed to be attached', customAttrs);
                        if (events.indexOf(event.type) < 0) {
                            logger.debug("event " + event.type + " is not selected to be recorded");
                            return [2 /*return*/];
                        }
                        this._tracker({
                            name: eventName || 'event',
                            attributes: attributes
                        }, this._config.provider).catch(function (e) {
                            logger.debug("Failed to record the " + event.type + " event', " + e);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return EventTracker;
}());
exports.default = EventTracker;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var closest_1 = __webpack_require__(47);
exports.closest = closest_1.default;
var delegate_1 = __webpack_require__(152);
exports.delegate = delegate_1.default;
var dispatch_1 = __webpack_require__(153);
exports.dispatch = dispatch_1.default;
var get_attributes_1 = __webpack_require__(154);
exports.getAttributes = get_attributes_1.default;
var matches_1 = __webpack_require__(22);
exports.matches = matches_1.default;
var parents_1 = __webpack_require__(48);
exports.parents = parents_1.default;
var parse_url_1 = __webpack_require__(155);
exports.parseUrl = parse_url_1.default;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var closest_1 = __webpack_require__(47);
var matches_1 = __webpack_require__(22);
/**
 * Delegates the handling of events for an element matching a selector to an
 * ancestor of the matching element.
 * @param {!Node} ancestor The ancestor element to add the listener to.
 * @param {string} eventType The event type to listen to.
 * @param {string} selector A CSS selector to match against child elements.
 * @param {!Function} callback A function to run any time the event happens.
 * @param {Object=} opts A configuration options object. The available options:
 *     - useCapture<boolean>: If true, bind to the event capture phase.
 *     - deep<boolean>: If true, delegate into shadow trees.
 * @return {Object} The delegate object. It contains a destroy method.
 */
function delegate(ancestor, eventType, selector, callback, opts) {
    if (opts === void 0) { opts = {}; }
    // Defines the event listener.
    var listener = function (event) {
        var delegateTarget;
        // If opts.composed is true and the event originated from inside a Shadow
        // tree, check the composed path nodes.
        if (opts['composed'] && typeof event['composedPath'] === 'function') {
            var composedPath = event.composedPath();
            for (var i = 0, node = void 0; node = composedPath[i]; i++) {
                if (node.nodeType === 1 && matches_1.default(node, selector)) {
                    delegateTarget = node;
                }
            }
        }
        else {
            // Otherwise check the parents.
            delegateTarget = closest_1.default(event.target, selector, true);
        }
        if (delegateTarget) {
            callback.call(delegateTarget, event, delegateTarget);
        }
    };
    ancestor.addEventListener(eventType, listener, opts['useCapture']);
    return {
        destroy: function () {
            ancestor.removeEventListener(eventType, listener, opts['useCapture']);
        },
    };
}
exports.default = delegate;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dispatches an event on the passed element.
 * @param {!Element} element The DOM element to dispatch the event on.
 * @param {string} eventType The type of event to dispatch.
 * @param {Object|string=} eventName A string name of the event constructor
 *     to use. Defaults to 'Event' if nothing is passed or 'CustomEvent' if
 *     a value is set on `initDict.detail`. If eventName is given an object
 *     it is assumed to be initDict and thus reassigned.
 * @param {Object=} initDict The initialization attributes for the
 *     event. A `detail` property can be used here to pass custom data.
 * @return {boolean} The return value of `element.dispatchEvent`, which will
 *     be false if any of the event listeners called `preventDefault`.
 */
function dispatch(element, eventType, evtName, init_dict) {
    if (evtName === void 0) { evtName = 'Event'; }
    if (init_dict === void 0) { init_dict = {}; }
    var event;
    var isCustom;
    var initDict = init_dict;
    var eventName = evtName;
    // eventName is optional
    if (typeof eventName === 'object') {
        initDict = eventName;
        eventName = 'Event';
    }
    initDict['bubbles'] = initDict['bubbles'] || false;
    initDict['cancelable'] = initDict['cancelable'] || false;
    initDict['composed'] = initDict['composed'] || false;
    // If a detail property is passed, this is a custom event.
    if ('detail' in initDict)
        isCustom = true;
    eventName = isCustom ? 'CustomEvent' : eventName;
    // Tries to create the event using constructors, if that doesn't work,
    // fallback to `document.createEvent()`.
    try {
        event = new window[eventName](eventType, initDict);
    }
    catch (err) {
        event = document.createEvent(eventName);
        var initMethod = 'init' + (isCustom ? 'Custom' : '') + 'Event';
        event[initMethod](eventType, initDict['bubbles'], initDict['cancelable'], initDict['detail']);
    }
    return element.dispatchEvent(event);
}
exports.default = dispatch;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets all attributes of an element as a plain JavaScriot object.
 * @param {Element} element The element whose attributes to get.
 * @return {!Object} An object whose keys are the attribute keys and whose
 *     values are the attribute values. If no attributes exist, an empty
 *     object is returned.
 */
function getAttributes(element) {
    var attrs = {};
    // Validate input.
    if (!(element && element.nodeType === 1))
        return attrs;
    // Return an empty object if there are no attributes.
    var map = element.attributes;
    if (map.length === 0)
        return {};
    for (var i = 0, attr = void 0; attr = map[i]; i++) {
        attrs[attr.name] = attr.value;
    }
    return attrs;
}
exports.default = getAttributes;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017, Philip Walton <philip@philipwalton.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var HTTP_PORT = '80';
var HTTPS_PORT = '443';
var DEFAULT_PORT = RegExp(':(' + HTTP_PORT + '|' + HTTPS_PORT + ')$');
var a = core_1.JS.browserOrNode().isBrowser ? document.createElement('a') : null;
var cache = {};
/**
 * Parses the given url and returns an object mimicing a `Location` object.
 * @param {string} url The url to parse.
 * @return {!Object} An object with the same properties as a `Location`.
 */
function parseUrl(u) {
    var url = u;
    // All falsy values (as well as ".") should map to the current URL.
    url = (!url || url === '.') ? location.href : url;
    if (cache[url])
        return cache[url];
    a.href = url;
    // When parsing file relative paths (e.g. `../index.html`), IE will correctly
    // resolve the `href` property but will keep the `..` in the `path` property.
    // It will also not include the `host` or `hostname` properties. Furthermore,
    // IE will sometimes return no protocol or just a colon, especially for things
    // like relative protocol URLs (e.g. "//google.com").
    // To workaround all of these issues, we reparse with the full URL from the
    // `href` property.
    if (url.charAt(0) === '.' || url.charAt(0) === '/')
        return parseUrl(a.href);
    // Don't include default ports.
    var port = (a.port === HTTP_PORT || a.port === HTTPS_PORT) ? '' : a.port;
    // PhantomJS sets the port to "0" when using the file: protocol.
    port = port === '0' ? '' : port;
    // Sometimes IE incorrectly includes a port for default ports
    // (e.g. `:80` or `:443`) even when no port is specified in the URL.
    // http://bit.ly/1rQNoMg
    var host = a.host.replace(DEFAULT_PORT, '');
    // Not all browser support `origin` so we have to build it.
    var origin = a['origin'] ? a['origin'] : a.protocol + '//' + host;
    // Sometimes IE doesn't include the leading slash for pathname.
    // http://bit.ly/1rQNoMg
    var pathname = a.pathname.charAt(0) === '/' ? a.pathname : '/' + a.pathname;
    return cache[url] = {
        hash: a.hash,
        host: host,
        hostname: a.hostname,
        href: a.href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: a.protocol,
        search: a.search,
    };
}
exports.default = parseUrl;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
// the session tracker for web
var core_1 = __webpack_require__(2);
var logger = new core_1.ConsoleLogger('SessionTracker');
var defaultOpts = {
    enable: false,
    provider: 'AWSPinpoint'
};
var initialEventSent = false;
var SessionTracker = /** @class */ (function () {
    function SessionTracker(tracker, opts) {
        this._config = Object.assign({}, defaultOpts, opts);
        this._tracker = tracker;
        this._hasEnabled = false;
        this._trackFunc = this._trackFunc.bind(this);
        this._trackBeforeUnload = this._trackBeforeUnload.bind(this);
        this.configure(this._config);
    }
    SessionTracker.prototype._envCheck = function () {
        if (!core_1.JS.browserOrNode().isBrowser) {
            return false;
        }
        if (!document || !document.addEventListener) {
            logger.debug('not in the supported web environment');
            return false;
        }
        if (typeof document.hidden !== 'undefined') {
            this._hidden = 'hidden';
            this._visibilityChange = 'visibilitychange';
        }
        else if (typeof document['msHidden'] !== 'undefined') {
            this._hidden = 'msHidden';
            this._visibilityChange = 'msvisibilitychange';
        }
        else if (typeof document['webkitHidden'] !== 'undefined') {
            this._hidden = 'webkitHidden';
            this._visibilityChange = 'webkitvisibilitychange';
        }
        else {
            logger.debug('not in the supported web environment');
            return false;
        }
        return true;
    };
    SessionTracker.prototype._trackFunc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customAttrs, _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this._config.attributes === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._config.attributes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this._config.attributes;
                        _b.label = 3;
                    case 3:
                        customAttrs = _a;
                        attributes = Object.assign({}, customAttrs);
                        if (document[this._hidden]) {
                            this._tracker({
                                name: '_session.stop',
                                attributes: attributes
                            }, this._config.provider).catch(function (e) {
                                logger.debug('record session stop event failed.', e);
                            });
                        }
                        else {
                            this._tracker({
                                name: '_session.start',
                                attributes: attributes
                            }, this._config.provider).catch(function (e) {
                                logger.debug('record session start event failed.', e);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionTracker.prototype._trackBeforeUnload = function () {
        var _this = this;
        // before unload callback cannot be async => https://github.com/aws-amplify/amplify-js/issues/2088
        var customAttrs = typeof this._config.attributes === 'function' ?
            Promise.resolve(this._config.attributes()) : Promise.resolve(this._config.attributes);
        customAttrs.then(function (custom) {
            var attributes = Object.assign({}, custom);
            _this._tracker({
                name: '_session.stop',
                attributes: attributes,
                immediate: true
            }, _this._config.provider).catch(function (e) {
                logger.debug('record session stop event failed.', e);
            });
        });
    };
    // to keep configure a synchronized function
    SessionTracker.prototype._sendInitialEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customAttrs, _a, attributes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (initialEventSent) {
                            logger.debug('the start session has been sent when the page is loaded');
                            return [2 /*return*/];
                        }
                        else {
                            initialEventSent = true;
                        }
                        if (!(typeof this._config.attributes === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._config.attributes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this._config.attributes;
                        _b.label = 3;
                    case 3:
                        customAttrs = _a;
                        attributes = Object.assign({}, customAttrs);
                        this._tracker({
                            name: '_session.start',
                            attributes: attributes
                        }, this._config.provider).catch(function (e) {
                            logger.debug('record session start event failed.', e);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionTracker.prototype.configure = function (opts) {
        if (!this._envCheck()) {
            return this._config;
        }
        Object.assign(this._config, opts);
        if (this._config.enable && !this._hasEnabled) {
            // send a start session as soon as it's enabled
            this._sendInitialEvent();
            // listen on events
            document.addEventListener(this._visibilityChange, this._trackFunc, false);
            window.addEventListener("beforeunload", this._trackBeforeUnload, false);
            this._hasEnabled = true;
        }
        else if (!this._config.enable && this._hasEnabled) {
            document.removeEventListener(this._visibilityChange, this._trackFunc, false);
            window.removeEventListener("beforeunload", this._trackBeforeUnload, false);
            this._hasEnabled = false;
        }
        return this._config;
    };
    return SessionTracker;
}());
exports.default = SessionTracker;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AWSPinpointProvider_1 = __webpack_require__(43);
exports.AWSPinpointProvider = AWSPinpointProvider_1.default;
var AWSKinesisProvider_1 = __webpack_require__(158);
exports.AWSKinesisProvider = AWSKinesisProvider_1.default;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var Kinesis = __webpack_require__(159);
var logger = new core_1.ConsoleLogger('AWSKineisProvider');
// events buffer
var BUFFER_SIZE = 1000;
var FLUSH_SIZE = 100;
var FLUSH_INTERVAL = 5 * 1000; // 5s
var RESEND_LIMIT = 5;
var AWSKinesisProvider = /** @class */ (function () {
    function AWSKinesisProvider(config) {
        this._buffer = [];
        this._config = config ? config : {};
        this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE;
        this._config.flushSize = this._config.flushSize || FLUSH_SIZE;
        this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL;
        this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT;
        // events batch
        var that = this;
        // flush event buffer
        this._setupTimer();
    }
    AWSKinesisProvider.prototype._setupTimer = function () {
        var _this = this;
        if (this._timer) {
            clearInterval(this._timer);
        }
        var _a = this._config, flushSize = _a.flushSize, flushInterval = _a.flushInterval;
        var that = this;
        this._timer = setInterval(function () {
            var size = _this._buffer.length < flushSize ? _this._buffer.length : flushSize;
            var events = [];
            for (var i = 0; i < size; i += 1) {
                var params = _this._buffer.shift();
                events.push(params);
            }
            that._sendFromBuffer(events);
        }, flushInterval);
    };
    /**
     * get the category of the plugin
     */
    AWSKinesisProvider.prototype.getCategory = function () {
        return 'Analytics';
    };
    /**
     * get provider name of the plugin
     */
    AWSKinesisProvider.prototype.getProviderName = function () {
        return 'AWSKinesis';
    };
    /**
     * configure the plugin
     * @param {Object} config - configuration
     */
    AWSKinesisProvider.prototype.configure = function (config) {
        logger.debug('configure Analytics', config);
        var conf = config ? config : {};
        this._config = Object.assign({}, this._config, conf);
        this._setupTimer();
        return this._config;
    };
    /**
     * record an event
     * @param {Object} params - the params of an event
     */
    AWSKinesisProvider.prototype.record = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials)
                            return [2 /*return*/, Promise.resolve(false)];
                        Object.assign(params, { config: this._config, credentials: credentials });
                        return [2 /*return*/, this._putToBuffer(params)];
                }
            });
        });
    };
    AWSKinesisProvider.prototype.updateEndpoint = function (params) {
        logger.debug('updateEndpoint is not implemented in Kinesis provider');
        return Promise.resolve(true);
    };
    /**
     * @private
     * @param params - params for the event recording
     * Put events into buffer
     */
    AWSKinesisProvider.prototype._putToBuffer = function (params) {
        if (this._buffer.length < BUFFER_SIZE) {
            this._buffer.push(params);
            return Promise.resolve(true);
        }
        else {
            logger.debug('exceed analytics events buffer size');
            return Promise.reject(false);
        }
    };
    AWSKinesisProvider.prototype._sendFromBuffer = function (events) {
        var _this = this;
        // collapse events by credentials
        // events = [ {params} ]
        var eventsGroups = [];
        var preCred = null;
        var group = [];
        for (var i = 0; i < events.length; i += 1) {
            var cred = events[i].credentials;
            if (i === 0) {
                group.push(events[i]);
                preCred = cred;
            }
            else {
                if (cred.sessionToken === preCred.sessionToken && cred.identityId === preCred.identityId) {
                    logger.debug('no change for cred, put event in the same group');
                    group.push(events[i]);
                }
                else {
                    eventsGroups.push(group);
                    group = [];
                    group.push(events[i]);
                    preCred = cred;
                }
            }
        }
        eventsGroups.push(group);
        eventsGroups.map(function (evts) {
            _this._sendEvents(evts);
        });
    };
    AWSKinesisProvider.prototype._sendEvents = function (group) {
        var _this = this;
        if (group.length === 0) {
            // logger.debug('events array is empty, directly return');
            return;
        }
        var _a = group[0], config = _a.config, credentials = _a.credentials;
        var initClients = this._init(config, credentials);
        if (!initClients)
            return false;
        var records = {};
        group.map(function (params) {
            // spit by streamName
            var evt = params.event;
            var streamName = evt.streamName;
            if (records[streamName] === undefined) {
                records[streamName] = [];
            }
            var Data = JSON.stringify(evt.data);
            var PartitionKey = evt.partitionKey || ('partition-' + credentials.identityId);
            var record = { Data: Data, PartitionKey: PartitionKey };
            records[streamName].push(record);
        });
        Object.keys(records).map(function (streamName) {
            logger.debug('putting records to kinesis with records', records[streamName]);
            _this._kinesis.putRecords({
                Records: records[streamName],
                StreamName: streamName
            }, function (err, data) {
                if (err)
                    logger.debug('Failed to upload records to Kinesis', err);
                else
                    logger.debug('Upload records to stream', streamName);
            });
        });
    };
    AWSKinesisProvider.prototype._init = function (config, credentials) {
        logger.debug('init clients');
        if (this._kinesis
            && this._config.credentials
            && this._config.credentials.sessionToken === credentials.sessionToken
            && this._config.credentials.identityId === credentials.identityId) {
            logger.debug('no change for analytics config, directly return from init');
            return true;
        }
        this._config.credentials = credentials;
        var region = config.region;
        logger.debug('initialize kinesis with credentials', credentials);
        this._kinesis = new Kinesis({
            apiVersion: '2013-12-02',
            region: region,
            credentials: credentials
        });
        return true;
    };
    /**
     * @private
     * check if current credentials exists
     */
    AWSKinesisProvider.prototype._getCredentials = function () {
        var that = this;
        return core_1.Credentials.get()
            .then(function (credentials) {
            if (!credentials)
                return null;
            logger.debug('set credentials for analytics', that._config.credentials);
            return core_1.Credentials.shear(credentials);
        })
            .catch(function (err) {
            logger.debug('ensure credentials error', err);
            return null;
        });
    };
    return AWSKinesisProvider;
}());
exports.default = AWSKinesisProvider;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var AWS = __webpack_require__(0);
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['kinesis'] = {};
AWS.Kinesis = Service.defineService('kinesis', ['2013-12-02']);
Object.defineProperty(apiLoader.services['kinesis'], '2013-12-02', {
  get: function get() {
    var model = __webpack_require__(160);
    model.paginators = __webpack_require__(161).pagination;
    model.waiters = __webpack_require__(162).waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Kinesis;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = {"version":"2.0","metadata":{"apiVersion":"2013-12-02","endpointPrefix":"kinesis","jsonVersion":"1.1","protocol":"json","protocolSettings":{"h2":"eventstream"},"serviceAbbreviation":"Kinesis","serviceFullName":"Amazon Kinesis","serviceId":"Kinesis","signatureVersion":"v4","targetPrefix":"Kinesis_20131202","uid":"kinesis-2013-12-02"},"operations":{"AddTagsToStream":{"input":{"type":"structure","required":["StreamName","Tags"],"members":{"StreamName":{},"Tags":{"type":"map","key":{},"value":{}}}}},"CreateStream":{"input":{"type":"structure","required":["StreamName","ShardCount"],"members":{"StreamName":{},"ShardCount":{"type":"integer"}}}},"DecreaseStreamRetentionPeriod":{"input":{"type":"structure","required":["StreamName","RetentionPeriodHours"],"members":{"StreamName":{},"RetentionPeriodHours":{"type":"integer"}}}},"DeleteStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{},"EnforceConsumerDeletion":{"type":"boolean"}}}},"DeregisterStreamConsumer":{"input":{"type":"structure","members":{"StreamARN":{},"ConsumerName":{},"ConsumerARN":{}}}},"DescribeLimits":{"input":{"type":"structure","members":{}},"output":{"type":"structure","required":["ShardLimit","OpenShardCount"],"members":{"ShardLimit":{"type":"integer"},"OpenShardCount":{"type":"integer"}}}},"DescribeStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{},"Limit":{"type":"integer"},"ExclusiveStartShardId":{}}},"output":{"type":"structure","required":["StreamDescription"],"members":{"StreamDescription":{"type":"structure","required":["StreamName","StreamARN","StreamStatus","Shards","HasMoreShards","RetentionPeriodHours","StreamCreationTimestamp","EnhancedMonitoring"],"members":{"StreamName":{},"StreamARN":{},"StreamStatus":{},"Shards":{"shape":"Sp"},"HasMoreShards":{"type":"boolean"},"RetentionPeriodHours":{"type":"integer"},"StreamCreationTimestamp":{"type":"timestamp"},"EnhancedMonitoring":{"shape":"Sw"},"EncryptionType":{},"KeyId":{}}}}}},"DescribeStreamConsumer":{"input":{"type":"structure","members":{"StreamARN":{},"ConsumerName":{},"ConsumerARN":{}}},"output":{"type":"structure","required":["ConsumerDescription"],"members":{"ConsumerDescription":{"type":"structure","required":["ConsumerName","ConsumerARN","ConsumerStatus","ConsumerCreationTimestamp","StreamARN"],"members":{"ConsumerName":{},"ConsumerARN":{},"ConsumerStatus":{},"ConsumerCreationTimestamp":{"type":"timestamp"},"StreamARN":{}}}}}},"DescribeStreamSummary":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{}}},"output":{"type":"structure","required":["StreamDescriptionSummary"],"members":{"StreamDescriptionSummary":{"type":"structure","required":["StreamName","StreamARN","StreamStatus","RetentionPeriodHours","StreamCreationTimestamp","EnhancedMonitoring","OpenShardCount"],"members":{"StreamName":{},"StreamARN":{},"StreamStatus":{},"RetentionPeriodHours":{"type":"integer"},"StreamCreationTimestamp":{"type":"timestamp"},"EnhancedMonitoring":{"shape":"Sw"},"EncryptionType":{},"KeyId":{},"OpenShardCount":{"type":"integer"},"ConsumerCount":{"type":"integer"}}}}}},"DisableEnhancedMonitoring":{"input":{"type":"structure","required":["StreamName","ShardLevelMetrics"],"members":{"StreamName":{},"ShardLevelMetrics":{"shape":"Sy"}}},"output":{"shape":"S1b"}},"EnableEnhancedMonitoring":{"input":{"type":"structure","required":["StreamName","ShardLevelMetrics"],"members":{"StreamName":{},"ShardLevelMetrics":{"shape":"Sy"}}},"output":{"shape":"S1b"}},"GetRecords":{"input":{"type":"structure","required":["ShardIterator"],"members":{"ShardIterator":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","required":["Records"],"members":{"Records":{"type":"list","member":{"type":"structure","required":["SequenceNumber","Data","PartitionKey"],"members":{"SequenceNumber":{},"ApproximateArrivalTimestamp":{"type":"timestamp"},"Data":{"type":"blob"},"PartitionKey":{},"EncryptionType":{}}}},"NextShardIterator":{},"MillisBehindLatest":{"type":"long"}}}},"GetShardIterator":{"input":{"type":"structure","required":["StreamName","ShardId","ShardIteratorType"],"members":{"StreamName":{},"ShardId":{},"ShardIteratorType":{},"StartingSequenceNumber":{},"Timestamp":{"type":"timestamp"}}},"output":{"type":"structure","members":{"ShardIterator":{}}}},"IncreaseStreamRetentionPeriod":{"input":{"type":"structure","required":["StreamName","RetentionPeriodHours"],"members":{"StreamName":{},"RetentionPeriodHours":{"type":"integer"}}}},"ListShards":{"input":{"type":"structure","members":{"StreamName":{},"NextToken":{},"ExclusiveStartShardId":{},"MaxResults":{"type":"integer"},"StreamCreationTimestamp":{"type":"timestamp"}}},"output":{"type":"structure","members":{"Shards":{"shape":"Sp"},"NextToken":{}}}},"ListStreamConsumers":{"input":{"type":"structure","required":["StreamARN"],"members":{"StreamARN":{},"NextToken":{},"MaxResults":{"type":"integer"},"StreamCreationTimestamp":{"type":"timestamp"}}},"output":{"type":"structure","members":{"Consumers":{"type":"list","member":{"shape":"S1y"}},"NextToken":{}}}},"ListStreams":{"input":{"type":"structure","members":{"Limit":{"type":"integer"},"ExclusiveStartStreamName":{}}},"output":{"type":"structure","required":["StreamNames","HasMoreStreams"],"members":{"StreamNames":{"type":"list","member":{}},"HasMoreStreams":{"type":"boolean"}}}},"ListTagsForStream":{"input":{"type":"structure","required":["StreamName"],"members":{"StreamName":{},"ExclusiveStartTagKey":{},"Limit":{"type":"integer"}}},"output":{"type":"structure","required":["Tags","HasMoreTags"],"members":{"Tags":{"type":"list","member":{"type":"structure","required":["Key"],"members":{"Key":{},"Value":{}}}},"HasMoreTags":{"type":"boolean"}}}},"MergeShards":{"input":{"type":"structure","required":["StreamName","ShardToMerge","AdjacentShardToMerge"],"members":{"StreamName":{},"ShardToMerge":{},"AdjacentShardToMerge":{}}}},"PutRecord":{"input":{"type":"structure","required":["StreamName","Data","PartitionKey"],"members":{"StreamName":{},"Data":{"type":"blob"},"PartitionKey":{},"ExplicitHashKey":{},"SequenceNumberForOrdering":{}}},"output":{"type":"structure","required":["ShardId","SequenceNumber"],"members":{"ShardId":{},"SequenceNumber":{},"EncryptionType":{}}}},"PutRecords":{"input":{"type":"structure","required":["Records","StreamName"],"members":{"Records":{"type":"list","member":{"type":"structure","required":["Data","PartitionKey"],"members":{"Data":{"type":"blob"},"ExplicitHashKey":{},"PartitionKey":{}}}},"StreamName":{}}},"output":{"type":"structure","required":["Records"],"members":{"FailedRecordCount":{"type":"integer"},"Records":{"type":"list","member":{"type":"structure","members":{"SequenceNumber":{},"ShardId":{},"ErrorCode":{},"ErrorMessage":{}}}},"EncryptionType":{}}}},"RegisterStreamConsumer":{"input":{"type":"structure","required":["StreamARN","ConsumerName"],"members":{"StreamARN":{},"ConsumerName":{}}},"output":{"type":"structure","required":["Consumer"],"members":{"Consumer":{"shape":"S1y"}}}},"RemoveTagsFromStream":{"input":{"type":"structure","required":["StreamName","TagKeys"],"members":{"StreamName":{},"TagKeys":{"type":"list","member":{}}}}},"SplitShard":{"input":{"type":"structure","required":["StreamName","ShardToSplit","NewStartingHashKey"],"members":{"StreamName":{},"ShardToSplit":{},"NewStartingHashKey":{}}}},"StartStreamEncryption":{"input":{"type":"structure","required":["StreamName","EncryptionType","KeyId"],"members":{"StreamName":{},"EncryptionType":{},"KeyId":{}}}},"StopStreamEncryption":{"input":{"type":"structure","required":["StreamName","EncryptionType","KeyId"],"members":{"StreamName":{},"EncryptionType":{},"KeyId":{}}}},"UpdateShardCount":{"input":{"type":"structure","required":["StreamName","TargetShardCount","ScalingType"],"members":{"StreamName":{},"TargetShardCount":{"type":"integer"},"ScalingType":{}}},"output":{"type":"structure","members":{"StreamName":{},"CurrentShardCount":{"type":"integer"},"TargetShardCount":{"type":"integer"}}}}},"shapes":{"Sp":{"type":"list","member":{"type":"structure","required":["ShardId","HashKeyRange","SequenceNumberRange"],"members":{"ShardId":{},"ParentShardId":{},"AdjacentParentShardId":{},"HashKeyRange":{"type":"structure","required":["StartingHashKey","EndingHashKey"],"members":{"StartingHashKey":{},"EndingHashKey":{}}},"SequenceNumberRange":{"type":"structure","required":["StartingSequenceNumber"],"members":{"StartingSequenceNumber":{},"EndingSequenceNumber":{}}}}}},"Sw":{"type":"list","member":{"type":"structure","members":{"ShardLevelMetrics":{"shape":"Sy"}}}},"Sy":{"type":"list","member":{}},"S1b":{"type":"structure","members":{"StreamName":{},"CurrentShardLevelMetrics":{"shape":"Sy"},"DesiredShardLevelMetrics":{"shape":"Sy"}}},"S1y":{"type":"structure","required":["ConsumerName","ConsumerARN","ConsumerStatus","ConsumerCreationTimestamp"],"members":{"ConsumerName":{},"ConsumerARN":{},"ConsumerStatus":{},"ConsumerCreationTimestamp":{"type":"timestamp"}}}}}

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = {"pagination":{"DescribeStream":{"input_token":"ExclusiveStartShardId","limit_key":"Limit","more_results":"StreamDescription.HasMoreShards","output_token":"StreamDescription.Shards[-1].ShardId","result_key":"StreamDescription.Shards"},"ListStreamConsumers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListStreams":{"input_token":"ExclusiveStartStreamName","limit_key":"Limit","more_results":"HasMoreStreams","output_token":"StreamNames[-1]","result_key":"StreamNames"}}}

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = {"version":2,"waiters":{"StreamExists":{"delay":10,"operation":"DescribeStream","maxAttempts":18,"acceptors":[{"expected":"ACTIVE","matcher":"path","state":"success","argument":"StreamDescription.StreamStatus"}]},"StreamNotExists":{"delay":10,"operation":"DescribeStream","maxAttempts":18,"acceptors":[{"expected":"ResourceNotFoundException","matcher":"error","state":"success"}]}}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=aws-amplify-analytics.js.map