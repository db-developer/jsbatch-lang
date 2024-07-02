/**
 *	index.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:       require( "./lang"    ),
  strings:    require( "./strings" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _m.strings.STRINGS;

// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXISTS,     {
  value:    _m.lang.exists,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISEMPTY,    {
  value:    _m.lang.isEmpty,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISFUNCTION, {
  value:    _m.lang.isFunction,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISNOTEMPTY, {
  value:    _m.lang.isNotEmpty,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISREGISTRY, {
  value:    _m.lang.isRegistry,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISSTRING,   {
  value:    _m.lang.isString,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTRY, {
  value:    _m.lang.registry,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.VALIDATEINTEGER,  {
  value:    _m.lang.validateInteger,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.VALIDATEREGISTRY, {
  value:    _m.lang.validateRegistry,
  writable: false, enumerable: true, configurable: false });
