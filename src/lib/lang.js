/**
 *	lang.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun/lang
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  lang.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = { strings: require( "./strings" ) };

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const strings    = {
    CMD:                "cmd",
    EMPTY:              "",
    ERR_REGISTRY_TYPE:  "Parameter must be of type 'registry'.",
    ERR_CMD_WRONG_TYPE: "Registry: Parameter 'cmd' must be of type 'string' and not be empty.",
    HELP:               "help",
    ID:                 "id",
    TYPE_FUNCTION:      "function",
    TYPE_OBJECT:        "object",
    TYPE_STRING:        "string"
  };
  return Object.assign( strings, _m.strings.STRINGS );
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Check if value exists. Returns true, if so; false otherwise.
 *  Definition: A value exists if it is neither null nor undefined.
 *
 *  @param  {any} value - The value which is to be checked for existance.
 *  @return {boolean} true if value exists; false otherwise.
 */
function exists( value ) {
  return (( value !== null ) && ( value !== undefined ));
}

/**
 *  Check if a value is empty.
 *  Definition: A value must not exist or be a string matching '' (empty).
 *
 *  @param  {any} valoue  - The value which is checked to be 'not empty'.
 *  @return {boolean} true if value is 'not empty'; false otherwise.
 */
function isEmpty( value ) {
  return ( ! ( exists( value ) && ( isString( value ) && ( value !== _STRINGS.EMPTY ))));
}

/**
 *  Returns true, if value is a function.
 *
 *  @param  {any} value - The value which is to be checked for being a function.
 *  @return {boolean} true if value is a function; false otherwise.
 */
function isFunction( value ) {
  return ( typeof( value ) === _STRINGS.TYPE_FUNCTION );
}

/**
 *  Check if a value is not empty.
 *
 *  @param  {any} valoue  - The value which is checked to be 'not empty'.
 *  @return {boolean} true if value is 'not empty'; false otherwise.
 */
function isNotEmpty( value ) {
  return ( ! isEmpty( value ));
}

/**
 *  Returns true, if value is of type object, which matches the constraints
 *  of a registry.
 *
 *  @param  {any} valoue  - The value which is checked for being a Registry.
 *  @return {boolean} true if value is a Registry; false otherwise.
 */
function isRegistry( value ) {
  return (( exists( value      )) &&
          ( typeof( value      ) === _STRINGS.TYPE_OBJECT ) &&
          ( exists( value.id   )) &&
          ( typeof( value.id   ) === _STRINGS.TYPE_STRING ) &&
          ( exists( value.cmd  )) &&
          ( typeof( value.cmd  ) === _STRINGS.TYPE_OBJECT ) &&
          ( exists( value.help )) &&
          ( typeof( value.help ) === _STRINGS.TYPE_OBJECT ));
}

/**
 *  Returns true, if value is of type string or an instance of string.
 *
 *  @param  {any} valoue  - The value which is checked for being a string.
 *  @return {boolean} true if value is a string; false otherwise.
 */
function isString( value ) {
  return (( typeof( value ) === _STRINGS.TYPE_STRING ) || ( value instanceof String ));
}

/**
 *  Returns a registry instance
 *  FUTURE:  make this a class with properties (getter/no setter)
 *
 *  @param  {string}  cmd - The commmand which registers subcommands
 *                          in its registry.
 *  @return {object} with command and help property
 */
function registry( cmd ) {
  if (( ! exists( cmd )) || ( isEmpty( cmd )) || ( ! isString( cmd ))) {
        throw new TypeError( _STRINGS.ERR_CMD_WRONG_TYPE );
  }

  const registry = { };

  // Registry id:
  Object.defineProperty( registry, _STRINGS.ID,           {
    value:    cmd,
    writable: false, enumerable: true, configurable: false });
  // Registry commands:
  Object.defineProperty( registry, _STRINGS.CMD,          {
    value:    { },
    writable: false, enumerable: true, configurable: false });
  // Registry help:
  Object.defineProperty( registry, _STRINGS.HELP,         {
    value:    { },
    writable: false, enumerable: true, configurable: false });

  return validateRegistry( registry );
}

/**
 *  Validate 'value' to be an integer within the specified range.
 *  If value exeeds the min max range, the min or max value will
 *  be returned.
 *
 *  @param  {integer} value
 *  @param  {integer} min       - The lowest possible value of value
 *  @param  {integer} max       - The highest possible value of value
 *
 *  @param  {undefined|Integer} in the range of [min, max]
 */
function validateInteger( value, min, max ) {
  if ( exists( value ) && ( Number.isInteger( value ))) {
       if      ( exists( min ) && ( value < min  )) { return min; }
       else if ( exists( max ) && ( value > max  )) { return max; }
       else return value;
  }
  else return undefined;
}

/**
 *  Validates 'value' to be a registry. Will return the registry or throw
 *  a TypeError, if 'value' is not a valid registry object.
 *
 *  @param  {any}       value - Object to check for being a valid registry
 *                              instance.
 *  @return {object}    registry, if value is a valid registry object.
 *  @throw  {TypeError} will be thrown if value ist not a valid registry.
 */
function validateRegistry( value, msg ) {
  if ( ! isRegistry( value ))  {
       throw new TypeError( exists( msg ) ? msg : _STRINGS.ERR_REGISTRY_TYPE );
  }
  else return value;
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXISTS,     {
  value:    exists,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISEMPTY,    {
  value:    isEmpty,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISFUNCTION, {
  value:    isFunction,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISNOTEMPTY, {
  value:    isNotEmpty,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISREGISTRY, {
  value:    isRegistry,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISSTRING,   {
  value:    isString,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTRY, {
  value:    registry,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.VALIDATEINTEGER,  {
  value:    validateInteger,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.VALIDATEREGISTRY, {
  value:    validateRegistry,
  writable: false, enumerable: true, configurable: false });
