(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./resources/js/Pages/Dashboard/organization/OrganizationsList.js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/organization/OrganizationsList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/at-school/resources/js/Pages/Dashboard/organization/OrganizationsList.js: Unexpected token (20:4)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m    })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m    \u001b[36mconst\u001b[39m townfilters\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m    \u001b[36mconst\u001b[39m { flash } \u001b[33m=\u001b[39m usePage()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m    \u001b[36mconst\u001b[39m [loading\u001b[33m,\u001b[39m setLoading] \u001b[33m=\u001b[39m useState(\u001b[36mfalse\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m    \u001b[36mconst\u001b[39m \u001b[33mOrgForm\u001b[39m \u001b[33m=\u001b[39m useRef(\u001b[36mnull\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[0m\n    at Object._raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.unexpected (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:8966:16)\n    at Object.parseVar (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12100:18)\n    at Object.parseVarStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11905:10)\n    at Object.parseStatementContent (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11497:21)\n    at Object.parseStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11430:17)\n    at Object.parseBlockOrModuleBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12012:25)\n    at Object.parseBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11998:10)\n    at Object.parseBlock (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11982:10)\n    at Object.parseFunctionBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10962:24)\n    at Object.parseArrowExpression (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10931:10)\n    at Object.parseParenAndDistinguishExpression (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10501:12)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:10177:21)\n    at Object.parseExprAtom (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:4718:20)\n    at Object.parseExprSubscripts (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9620:21)\n    at /var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:39\n    at Object.allowInAnd (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11296:16)\n    at Object.parseMaybeAssignAllowIn (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:9586:17)\n    at Object.parseVar (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12096:70)\n    at Object.parseVarStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11905:10)\n    at Object.parseStatementContent (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11497:21)\n    at Object.parseStatement (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11430:17)\n    at Object.parseBlockOrModuleBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:12012:25)\n    at Object.parseBlockBody (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11998:10)\n    at Object.parseTopLevel (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:11361:10)\n    at Object.parse (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:13044:10)\n    at parse (/var/www/html/at-school/node_modules/@babel/parser/lib/index.js:13097:38)\n    at parser (/var/www/html/at-school/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)");

/***/ })

}]);