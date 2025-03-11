/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwa";
exports.ids = ["vendor-chunks/jwa"];
exports.modules = {

/***/ "(ssr)/../node_modules/jwa/index.js":
/*!************************************!*\
  !*** ../node_modules/jwa/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var bufferEqual = __webpack_require__(/*! buffer-equal-constant-time */ \"(ssr)/../node_modules/buffer-equal-constant-time/index.js\");\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(ssr)/../node_modules/safe-buffer/index.js\").Buffer);\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\nvar formatEcdsa = __webpack_require__(/*! ecdsa-sig-formatter */ \"(ssr)/../node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar MSG_INVALID_ALGORITHM = '\"%s\" is not a valid algorithm.\\n  Supported algorithms are:\\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".'\nvar MSG_INVALID_SECRET = 'secret must be a string or buffer';\nvar MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';\nvar MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';\n\nvar supportsKeyObjects = typeof crypto.createPublicKey === 'function';\nif (supportsKeyObjects) {\n  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';\n  MSG_INVALID_SECRET += 'or a KeyObject';\n}\n\nfunction checkIsPublicKey(key) {\n  if (Buffer.isBuffer(key)) {\n    return;\n  }\n\n  if (typeof key === 'string') {\n    return;\n  }\n\n  if (!supportsKeyObjects) {\n    throw typeError(MSG_INVALID_VERIFIER_KEY);\n  }\n\n  if (typeof key !== 'object') {\n    throw typeError(MSG_INVALID_VERIFIER_KEY);\n  }\n\n  if (typeof key.type !== 'string') {\n    throw typeError(MSG_INVALID_VERIFIER_KEY);\n  }\n\n  if (typeof key.asymmetricKeyType !== 'string') {\n    throw typeError(MSG_INVALID_VERIFIER_KEY);\n  }\n\n  if (typeof key.export !== 'function') {\n    throw typeError(MSG_INVALID_VERIFIER_KEY);\n  }\n};\n\nfunction checkIsPrivateKey(key) {\n  if (Buffer.isBuffer(key)) {\n    return;\n  }\n\n  if (typeof key === 'string') {\n    return;\n  }\n\n  if (typeof key === 'object') {\n    return;\n  }\n\n  throw typeError(MSG_INVALID_SIGNER_KEY);\n};\n\nfunction checkIsSecretKey(key) {\n  if (Buffer.isBuffer(key)) {\n    return;\n  }\n\n  if (typeof key === 'string') {\n    return key;\n  }\n\n  if (!supportsKeyObjects) {\n    throw typeError(MSG_INVALID_SECRET);\n  }\n\n  if (typeof key !== 'object') {\n    throw typeError(MSG_INVALID_SECRET);\n  }\n\n  if (key.type !== 'secret') {\n    throw typeError(MSG_INVALID_SECRET);\n  }\n\n  if (typeof key.export !== 'function') {\n    throw typeError(MSG_INVALID_SECRET);\n  }\n}\n\nfunction fromBase64(base64) {\n  return base64\n    .replace(/=/g, '')\n    .replace(/\\+/g, '-')\n    .replace(/\\//g, '_');\n}\n\nfunction toBase64(base64url) {\n  base64url = base64url.toString();\n\n  var padding = 4 - base64url.length % 4;\n  if (padding !== 4) {\n    for (var i = 0; i < padding; ++i) {\n      base64url += '=';\n    }\n  }\n\n  return base64url\n    .replace(/\\-/g, '+')\n    .replace(/_/g, '/');\n}\n\nfunction typeError(template) {\n  var args = [].slice.call(arguments, 1);\n  var errMsg = util.format.bind(util, template).apply(null, args);\n  return new TypeError(errMsg);\n}\n\nfunction bufferOrString(obj) {\n  return Buffer.isBuffer(obj) || typeof obj === 'string';\n}\n\nfunction normalizeInput(thing) {\n  if (!bufferOrString(thing))\n    thing = JSON.stringify(thing);\n  return thing;\n}\n\nfunction createHmacSigner(bits) {\n  return function sign(thing, secret) {\n    checkIsSecretKey(secret);\n    thing = normalizeInput(thing);\n    var hmac = crypto.createHmac('sha' + bits, secret);\n    var sig = (hmac.update(thing), hmac.digest('base64'))\n    return fromBase64(sig);\n  }\n}\n\nfunction createHmacVerifier(bits) {\n  return function verify(thing, signature, secret) {\n    var computedSig = createHmacSigner(bits)(thing, secret);\n    return bufferEqual(Buffer.from(signature), Buffer.from(computedSig));\n  }\n}\n\nfunction createKeySigner(bits) {\n return function sign(thing, privateKey) {\n    checkIsPrivateKey(privateKey);\n    thing = normalizeInput(thing);\n    // Even though we are specifying \"RSA\" here, this works with ECDSA\n    // keys as well.\n    var signer = crypto.createSign('RSA-SHA' + bits);\n    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));\n    return fromBase64(sig);\n  }\n}\n\nfunction createKeyVerifier(bits) {\n  return function verify(thing, signature, publicKey) {\n    checkIsPublicKey(publicKey);\n    thing = normalizeInput(thing);\n    signature = toBase64(signature);\n    var verifier = crypto.createVerify('RSA-SHA' + bits);\n    verifier.update(thing);\n    return verifier.verify(publicKey, signature, 'base64');\n  }\n}\n\nfunction createPSSKeySigner(bits) {\n  return function sign(thing, privateKey) {\n    checkIsPrivateKey(privateKey);\n    thing = normalizeInput(thing);\n    var signer = crypto.createSign('RSA-SHA' + bits);\n    var sig = (signer.update(thing), signer.sign({\n      key: privateKey,\n      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,\n      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST\n    }, 'base64'));\n    return fromBase64(sig);\n  }\n}\n\nfunction createPSSKeyVerifier(bits) {\n  return function verify(thing, signature, publicKey) {\n    checkIsPublicKey(publicKey);\n    thing = normalizeInput(thing);\n    signature = toBase64(signature);\n    var verifier = crypto.createVerify('RSA-SHA' + bits);\n    verifier.update(thing);\n    return verifier.verify({\n      key: publicKey,\n      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,\n      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST\n    }, signature, 'base64');\n  }\n}\n\nfunction createECDSASigner(bits) {\n  var inner = createKeySigner(bits);\n  return function sign() {\n    var signature = inner.apply(null, arguments);\n    signature = formatEcdsa.derToJose(signature, 'ES' + bits);\n    return signature;\n  };\n}\n\nfunction createECDSAVerifer(bits) {\n  var inner = createKeyVerifier(bits);\n  return function verify(thing, signature, publicKey) {\n    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');\n    var result = inner(thing, signature, publicKey);\n    return result;\n  };\n}\n\nfunction createNoneSigner() {\n  return function sign() {\n    return '';\n  }\n}\n\nfunction createNoneVerifier() {\n  return function verify(thing, signature) {\n    return signature === '';\n  }\n}\n\nmodule.exports = function jwa(algorithm) {\n  var signerFactories = {\n    hs: createHmacSigner,\n    rs: createKeySigner,\n    ps: createPSSKeySigner,\n    es: createECDSASigner,\n    none: createNoneSigner,\n  }\n  var verifierFactories = {\n    hs: createHmacVerifier,\n    rs: createKeyVerifier,\n    ps: createPSSKeyVerifier,\n    es: createECDSAVerifer,\n    none: createNoneVerifier,\n  }\n  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);\n  if (!match)\n    throw typeError(MSG_INVALID_ALGORITHM, algorithm);\n  var algo = (match[1] || match[3]).toLowerCase();\n  var bits = match[2];\n\n  return {\n    sign: signerFactories[algo](bits),\n    verify: verifierFactories[algo](bits),\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2p3YS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsbUJBQU8sQ0FBQyw2RkFBNEI7QUFDdEQsYUFBYSw2RkFBNkI7QUFDMUMsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlHQUFxQjtBQUMvQyxXQUFXLG1CQUFPLENBQUMsa0JBQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NobGlwbWFuLzM1bHByb2ovMzVML25vZGVfbW9kdWxlcy9qd2EvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGJ1ZmZlckVxdWFsID0gcmVxdWlyZSgnYnVmZmVyLWVxdWFsLWNvbnN0YW50LXRpbWUnKTtcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbnZhciBmb3JtYXRFY2RzYSA9IHJlcXVpcmUoJ2VjZHNhLXNpZy1mb3JtYXR0ZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuXG52YXIgTVNHX0lOVkFMSURfQUxHT1JJVEhNID0gJ1wiJXNcIiBpcyBub3QgYSB2YWxpZCBhbGdvcml0aG0uXFxuICBTdXBwb3J0ZWQgYWxnb3JpdGhtcyBhcmU6XFxuICBcIkhTMjU2XCIsIFwiSFMzODRcIiwgXCJIUzUxMlwiLCBcIlJTMjU2XCIsIFwiUlMzODRcIiwgXCJSUzUxMlwiLCBcIlBTMjU2XCIsIFwiUFMzODRcIiwgXCJQUzUxMlwiLCBcIkVTMjU2XCIsIFwiRVMzODRcIiwgXCJFUzUxMlwiIGFuZCBcIm5vbmVcIi4nXG52YXIgTVNHX0lOVkFMSURfU0VDUkVUID0gJ3NlY3JldCBtdXN0IGJlIGEgc3RyaW5nIG9yIGJ1ZmZlcic7XG52YXIgTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZID0gJ2tleSBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgYnVmZmVyJztcbnZhciBNU0dfSU5WQUxJRF9TSUdORVJfS0VZID0gJ2tleSBtdXN0IGJlIGEgc3RyaW5nLCBhIGJ1ZmZlciBvciBhbiBvYmplY3QnO1xuXG52YXIgc3VwcG9ydHNLZXlPYmplY3RzID0gdHlwZW9mIGNyeXB0by5jcmVhdGVQdWJsaWNLZXkgPT09ICdmdW5jdGlvbic7XG5pZiAoc3VwcG9ydHNLZXlPYmplY3RzKSB7XG4gIE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSArPSAnIG9yIGEgS2V5T2JqZWN0JztcbiAgTVNHX0lOVkFMSURfU0VDUkVUICs9ICdvciBhIEtleU9iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSXNQdWJsaWNLZXkoa2V5KSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3VwcG9ydHNLZXlPYmplY3RzKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5LnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1ZFUklGSUVSX0tFWSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleS5hc3ltbWV0cmljS2V5VHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfVkVSSUZJRVJfS0VZKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5LmV4cG9ydCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9WRVJJRklFUl9LRVkpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjaGVja0lzUHJpdmF0ZUtleShrZXkpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1NJR05FUl9LRVkpO1xufTtcblxuZnVuY3Rpb24gY2hlY2tJc1NlY3JldEtleShrZXkpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGlmICghc3VwcG9ydHNLZXlPYmplY3RzKSB7XG4gICAgdGhyb3cgdHlwZUVycm9yKE1TR19JTlZBTElEX1NFQ1JFVCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGtleSAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfU0VDUkVUKTtcbiAgfVxuXG4gIGlmIChrZXkudHlwZSAhPT0gJ3NlY3JldCcpIHtcbiAgICB0aHJvdyB0eXBlRXJyb3IoTVNHX0lOVkFMSURfU0VDUkVUKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2V5LmV4cG9ydCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9TRUNSRVQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21CYXNlNjQoYmFzZTY0KSB7XG4gIHJldHVybiBiYXNlNjRcbiAgICAucmVwbGFjZSgvPS9nLCAnJylcbiAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAucmVwbGFjZSgvXFwvL2csICdfJyk7XG59XG5cbmZ1bmN0aW9uIHRvQmFzZTY0KGJhc2U2NHVybCkge1xuICBiYXNlNjR1cmwgPSBiYXNlNjR1cmwudG9TdHJpbmcoKTtcblxuICB2YXIgcGFkZGluZyA9IDQgLSBiYXNlNjR1cmwubGVuZ3RoICUgNDtcbiAgaWYgKHBhZGRpbmcgIT09IDQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZGRpbmc7ICsraSkge1xuICAgICAgYmFzZTY0dXJsICs9ICc9JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmFzZTY0dXJsXG4gICAgLnJlcGxhY2UoL1xcLS9nLCAnKycpXG4gICAgLnJlcGxhY2UoL18vZywgJy8nKTtcbn1cblxuZnVuY3Rpb24gdHlwZUVycm9yKHRlbXBsYXRlKSB7XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgZXJyTXNnID0gdXRpbC5mb3JtYXQuYmluZCh1dGlsLCB0ZW1wbGF0ZSkuYXBwbHkobnVsbCwgYXJncyk7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKGVyck1zZyk7XG59XG5cbmZ1bmN0aW9uIGJ1ZmZlck9yU3RyaW5nKG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUlucHV0KHRoaW5nKSB7XG4gIGlmICghYnVmZmVyT3JTdHJpbmcodGhpbmcpKVxuICAgIHRoaW5nID0gSlNPTi5zdHJpbmdpZnkodGhpbmcpO1xuICByZXR1cm4gdGhpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhtYWNTaWduZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gc2lnbih0aGluZywgc2VjcmV0KSB7XG4gICAgY2hlY2tJc1NlY3JldEtleShzZWNyZXQpO1xuICAgIHRoaW5nID0gbm9ybWFsaXplSW5wdXQodGhpbmcpO1xuICAgIHZhciBobWFjID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYScgKyBiaXRzLCBzZWNyZXQpO1xuICAgIHZhciBzaWcgPSAoaG1hYy51cGRhdGUodGhpbmcpLCBobWFjLmRpZ2VzdCgnYmFzZTY0JykpXG4gICAgcmV0dXJuIGZyb21CYXNlNjQoc2lnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIbWFjVmVyaWZpZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUsIHNlY3JldCkge1xuICAgIHZhciBjb21wdXRlZFNpZyA9IGNyZWF0ZUhtYWNTaWduZXIoYml0cykodGhpbmcsIHNlY3JldCk7XG4gICAgcmV0dXJuIGJ1ZmZlckVxdWFsKEJ1ZmZlci5mcm9tKHNpZ25hdHVyZSksIEJ1ZmZlci5mcm9tKGNvbXB1dGVkU2lnKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5U2lnbmVyKGJpdHMpIHtcbiByZXR1cm4gZnVuY3Rpb24gc2lnbih0aGluZywgcHJpdmF0ZUtleSkge1xuICAgIGNoZWNrSXNQcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgIHRoaW5nID0gbm9ybWFsaXplSW5wdXQodGhpbmcpO1xuICAgIC8vIEV2ZW4gdGhvdWdoIHdlIGFyZSBzcGVjaWZ5aW5nIFwiUlNBXCIgaGVyZSwgdGhpcyB3b3JrcyB3aXRoIEVDRFNBXG4gICAgLy8ga2V5cyBhcyB3ZWxsLlxuICAgIHZhciBzaWduZXIgPSBjcnlwdG8uY3JlYXRlU2lnbignUlNBLVNIQScgKyBiaXRzKTtcbiAgICB2YXIgc2lnID0gKHNpZ25lci51cGRhdGUodGhpbmcpLCBzaWduZXIuc2lnbihwcml2YXRlS2V5LCAnYmFzZTY0JykpO1xuICAgIHJldHVybiBmcm9tQmFzZTY0KHNpZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5VmVyaWZpZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUsIHB1YmxpY0tleSkge1xuICAgIGNoZWNrSXNQdWJsaWNLZXkocHVibGljS2V5KTtcbiAgICB0aGluZyA9IG5vcm1hbGl6ZUlucHV0KHRoaW5nKTtcbiAgICBzaWduYXR1cmUgPSB0b0Jhc2U2NChzaWduYXR1cmUpO1xuICAgIHZhciB2ZXJpZmllciA9IGNyeXB0by5jcmVhdGVWZXJpZnkoJ1JTQS1TSEEnICsgYml0cyk7XG4gICAgdmVyaWZpZXIudXBkYXRlKHRoaW5nKTtcbiAgICByZXR1cm4gdmVyaWZpZXIudmVyaWZ5KHB1YmxpY0tleSwgc2lnbmF0dXJlLCAnYmFzZTY0Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUFNTS2V5U2lnbmVyKGJpdHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNpZ24odGhpbmcsIHByaXZhdGVLZXkpIHtcbiAgICBjaGVja0lzUHJpdmF0ZUtleShwcml2YXRlS2V5KTtcbiAgICB0aGluZyA9IG5vcm1hbGl6ZUlucHV0KHRoaW5nKTtcbiAgICB2YXIgc2lnbmVyID0gY3J5cHRvLmNyZWF0ZVNpZ24oJ1JTQS1TSEEnICsgYml0cyk7XG4gICAgdmFyIHNpZyA9IChzaWduZXIudXBkYXRlKHRoaW5nKSwgc2lnbmVyLnNpZ24oe1xuICAgICAga2V5OiBwcml2YXRlS2V5LFxuICAgICAgcGFkZGluZzogY3J5cHRvLmNvbnN0YW50cy5SU0FfUEtDUzFfUFNTX1BBRERJTkcsXG4gICAgICBzYWx0TGVuZ3RoOiBjcnlwdG8uY29uc3RhbnRzLlJTQV9QU1NfU0FMVExFTl9ESUdFU1RcbiAgICB9LCAnYmFzZTY0JykpO1xuICAgIHJldHVybiBmcm9tQmFzZTY0KHNpZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUFNTS2V5VmVyaWZpZXIoYml0cykge1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUsIHB1YmxpY0tleSkge1xuICAgIGNoZWNrSXNQdWJsaWNLZXkocHVibGljS2V5KTtcbiAgICB0aGluZyA9IG5vcm1hbGl6ZUlucHV0KHRoaW5nKTtcbiAgICBzaWduYXR1cmUgPSB0b0Jhc2U2NChzaWduYXR1cmUpO1xuICAgIHZhciB2ZXJpZmllciA9IGNyeXB0by5jcmVhdGVWZXJpZnkoJ1JTQS1TSEEnICsgYml0cyk7XG4gICAgdmVyaWZpZXIudXBkYXRlKHRoaW5nKTtcbiAgICByZXR1cm4gdmVyaWZpZXIudmVyaWZ5KHtcbiAgICAgIGtleTogcHVibGljS2V5LFxuICAgICAgcGFkZGluZzogY3J5cHRvLmNvbnN0YW50cy5SU0FfUEtDUzFfUFNTX1BBRERJTkcsXG4gICAgICBzYWx0TGVuZ3RoOiBjcnlwdG8uY29uc3RhbnRzLlJTQV9QU1NfU0FMVExFTl9ESUdFU1RcbiAgICB9LCBzaWduYXR1cmUsICdiYXNlNjQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFQ0RTQVNpZ25lcihiaXRzKSB7XG4gIHZhciBpbm5lciA9IGNyZWF0ZUtleVNpZ25lcihiaXRzKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNpZ24oKSB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGlubmVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgc2lnbmF0dXJlID0gZm9ybWF0RWNkc2EuZGVyVG9Kb3NlKHNpZ25hdHVyZSwgJ0VTJyArIGJpdHMpO1xuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVDRFNBVmVyaWZlcihiaXRzKSB7XG4gIHZhciBpbm5lciA9IGNyZWF0ZUtleVZlcmlmaWVyKGJpdHMpO1xuICByZXR1cm4gZnVuY3Rpb24gdmVyaWZ5KHRoaW5nLCBzaWduYXR1cmUsIHB1YmxpY0tleSkge1xuICAgIHNpZ25hdHVyZSA9IGZvcm1hdEVjZHNhLmpvc2VUb0RlcihzaWduYXR1cmUsICdFUycgKyBiaXRzKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgdmFyIHJlc3VsdCA9IGlubmVyKHRoaW5nLCBzaWduYXR1cmUsIHB1YmxpY0tleSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9uZVNpZ25lcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNpZ24oKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vbmVWZXJpZmllcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZlcmlmeSh0aGluZywgc2lnbmF0dXJlKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZSA9PT0gJyc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBqd2EoYWxnb3JpdGhtKSB7XG4gIHZhciBzaWduZXJGYWN0b3JpZXMgPSB7XG4gICAgaHM6IGNyZWF0ZUhtYWNTaWduZXIsXG4gICAgcnM6IGNyZWF0ZUtleVNpZ25lcixcbiAgICBwczogY3JlYXRlUFNTS2V5U2lnbmVyLFxuICAgIGVzOiBjcmVhdGVFQ0RTQVNpZ25lcixcbiAgICBub25lOiBjcmVhdGVOb25lU2lnbmVyLFxuICB9XG4gIHZhciB2ZXJpZmllckZhY3RvcmllcyA9IHtcbiAgICBoczogY3JlYXRlSG1hY1ZlcmlmaWVyLFxuICAgIHJzOiBjcmVhdGVLZXlWZXJpZmllcixcbiAgICBwczogY3JlYXRlUFNTS2V5VmVyaWZpZXIsXG4gICAgZXM6IGNyZWF0ZUVDRFNBVmVyaWZlcixcbiAgICBub25lOiBjcmVhdGVOb25lVmVyaWZpZXIsXG4gIH1cbiAgdmFyIG1hdGNoID0gYWxnb3JpdGhtLm1hdGNoKC9eKFJTfFBTfEVTfEhTKSgyNTZ8Mzg0fDUxMikkfF4obm9uZSkkL2kpO1xuICBpZiAoIW1hdGNoKVxuICAgIHRocm93IHR5cGVFcnJvcihNU0dfSU5WQUxJRF9BTEdPUklUSE0sIGFsZ29yaXRobSk7XG4gIHZhciBhbGdvID0gKG1hdGNoWzFdIHx8IG1hdGNoWzNdKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgYml0cyA9IG1hdGNoWzJdO1xuXG4gIHJldHVybiB7XG4gICAgc2lnbjogc2lnbmVyRmFjdG9yaWVzW2FsZ29dKGJpdHMpLFxuICAgIHZlcmlmeTogdmVyaWZpZXJGYWN0b3JpZXNbYWxnb10oYml0cyksXG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/jwa/index.js\n");

/***/ })

};
;