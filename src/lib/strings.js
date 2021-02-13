/**
 *	strings.js: @org.slashlib/jsbatch-lang
 *
 *  @module jsbatch-lang/strings
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  strings.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A  PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  EXPORTS:    "exports",
  STRINGS:    "STRINGS"
};

/**
 *  Strings to export
 */
const STRINGS = {
  EXISTS:             "exists",
  ISEMPTY:            "isEmpty",
  ISFUNCTION:         "isFunction",
  ISNOTEMPTY:         "isNotEmpty",
  ISREGISTRY:         "isRegistry",
  ISSTRING:           "isString",
  REGISTRY:           "registry",
  VALIDATEINTEGER:    "validateInteger",
  VALIDATEREGISTRY:   "validateRegistry"
};

// add the object of strings to itself, freeze and seal it ...
STRINGS[ _STRINGS.STRINGS ] = STRINGS;
Object.freeze( STRINGS[ _STRINGS.STRINGS ]);
Object.seal(   STRINGS[ _STRINGS.STRINGS ]);

Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    STRINGS,
  writable: false, enumerable: true, configurable: false });
