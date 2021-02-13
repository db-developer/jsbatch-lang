/**
 *  © 2021, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "00.09.lang.spec.js - Testing module 'lib/lang.js'", () => {
  const lang  = require( "../../lib/lang" );

  describe( "Testing exports of module 'lang'", () => {
    it( "Function 'exists' should exist", () => {
        expect( lang.exists ).not.to.be( undefined  );
        expect( lang.exists ).not.to.be( null       );
        expect( lang.exists ).to.be.a(   "function" );
    });
    it( "Function 'isEmpty' should exist", () => {
        expect( lang.isEmpty ).not.to.be( undefined  );
        expect( lang.isEmpty ).not.to.be( null       );
        expect( lang.isEmpty ).to.be.a(   "function" );
    });
    it( "Function 'isFunction' should exist", () => {
        expect( lang.isFunction ).not.to.be( undefined  );
        expect( lang.isFunction ).not.to.be( null       );
        expect( lang.isFunction ).to.be.a(   "function" );
    });
    it( "Function 'isString' should exist", () => {
        expect( lang.isString ).not.to.be( undefined  );
        expect( lang.isString ).not.to.be( null       );
        expect( lang.isString ).to.be.a(   "function" );
    });
    it( "Function 'isNotEmpty' should exist", () => {
        expect( lang.isNotEmpty ).not.to.be( undefined  );
        expect( lang.isNotEmpty ).not.to.be( null       );
        expect( lang.isNotEmpty ).to.be.a(   "function" );
    });
    it( "Function 'isRegistry' should exist", () => {
        expect( lang.isRegistry ).not.to.be( undefined  );
        expect( lang.isRegistry ).not.to.be( null       );
        expect( lang.isRegistry ).to.be.a(   "function" );
    });
    it( "Function 'registry' should exist", () => {
        expect( lang.registry ).not.to.be( undefined  );
        expect( lang.registry ).not.to.be( null       );
        expect( lang.registry ).to.be.a(   "function" );
    });
    it( "Function 'validateInteger' should exist", () => {
        expect( lang.validateInteger ).not.to.be( undefined  );
        expect( lang.validateInteger ).not.to.be( null       );
        expect( lang.validateInteger ).to.be.a(   "function" );
    });
    it( "Function 'validateRegistry' should exist", () => {
        expect( lang.validateRegistry ).not.to.be( undefined  );
        expect( lang.validateRegistry ).not.to.be( null       );
        expect( lang.validateRegistry ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'exists' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.exists( ) }).not.to.throwException();
        expect( lang.exists( ) ).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {undefined}", () => {
        expect(() => { lang.exists( undefined ) }).not.to.throwException();
        expect( lang.exists( undefined ) ).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {null}", () => {
        expect(() => { lang.exists( null ) }).not.to.throwException();
        expect( lang.exists( null ) ).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {string}", () => {
        const value = "value";
        expect(() => { lang.exists( value ) }).not.to.throwException();
        expect( lang.exists( value )).to.be.ok();
    });
    it( "should be callable with parameter 'value' {string}", () => {
        const value = { };
        expect(() => { lang.exists( value ) }).not.to.throwException();
        expect( lang.exists( value )).to.be.ok();
    });
  });
  describe( "Testing function 'isEmpty' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.isEmpty( ) }).not.to.throwException();
        expect( lang.isEmpty( )).to.be.ok();
    });
    it( "should be callable with parameter 'value' {object}", () => {
        const value = { };
        expect(() => { lang.isEmpty( value ) }).not.to.throwException();
        expect( lang.isEmpty( value )).to.be.ok();
    });
  });
  describe( "Testing function 'isFunction' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.isFunction( ) }).not.to.throwException();
        expect( lang.isFunction( )).not.to.be.ok();
    });
    it( "should be callable without parameter 'value' {function}", () => {
        const value = () => { };
        expect(() => { lang.isFunction( value ) }).not.to.throwException();
        expect( lang.isFunction( value )).to.be.ok();
    });
  });
  describe( "Testing function 'isNotEmpty' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.isNotEmpty( ) }).not.to.throwException();
        expect( lang.isNotEmpty( )).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {object}", () => {
        const value = { };
        expect(() => { lang.isNotEmpty( value ) }).not.to.throwException();
        expect( lang.isNotEmpty( value )).not.to.be.ok();
    });
  });
  describe( "Testing function 'isString' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.isString( ) }).not.to.throwException();
        expect( lang.isString( ) ).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {object}", () => {
        const value = { };
        expect(() => { lang.isString( value ) }).not.to.throwException();
        expect( lang.isString( value )).not.to.be.ok();
    });
    it( "should be callable with parameter 'value' {string}", () => {
        expect(() => { lang.isString( "blubb" ) }).not.to.throwException();
        expect( lang.isString( "blubb" ) ).to.be.ok();
    });
    it( "should be callable with parameter 'value' {String}", () => {
        expect(() => { lang.isString( new String( "blubb" )) }).not.to.throwException();
        expect( lang.isString( new String( "blubb" )) ).to.be.ok();
    });
  });
  describe( "Testing function 'registry' of module 'lang'", () => {
    it( "should not be callable without parameters", () => {
        const errmsg  = "Registry: Parameter 'cmd' must be of type 'string' and not be empty.";
        expect(() => { lang.registry( ) }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should not be callable without parameters", () => {
        const errmsg  = "Registry: Parameter 'cmd' must be of type 'string' and not be empty.";
        expect(() => { lang.registry({ id: "mycommand" }) }).to.throwException(( error ) => {
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should return an object with immutable properties 'cmd' and 'help'", () => {
        const registry = lang.registry( "mycommand" );
        expect( registry.cmd  ).to.be.an( Object );
        expect(() => { registry.cmd  = undefined; }).to.throwException(( error ) => {
                       // this requires "use strict";
                       expect( error ).to.be.a( TypeError );
                     });
        expect( registry.help ).to.be.an( Object );
        expect(() => { registry.help = undefined; }).to.throwException(( error ) => {
                       // this requires "use strict";
                       expect( error ).to.be.a( TypeError );
                     });
    });
  });
  describe( "Testing function 'validateInteger' of module 'lang'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { lang.validateInteger( ) }).not.to.throwException();
        expect( lang.validateInteger( )).to.be( undefined );
    });
    it( "should be callable with parameter 'value' {any}", () => {
        expect(() => { lang.validateInteger( "hurz" ) }).not.to.throwException();
        expect( lang.validateInteger( "hurz" )).to.be( undefined );
    });
    it( "should be callable with parameter 'value' {10}", () => {
        expect(() => { lang.validateInteger( 10 ) }).not.to.throwException();
        expect( lang.validateInteger( 10 ) === 10 ).to.be.ok();
    });
    it( "should be callable with parameter 'value' {100}", () => {
        expect(() => { lang.validateInteger( 100, 0, 50 ) }).not.to.throwException();
        expect( lang.validateInteger( 100, 0, 50 ) === 50 ).to.be.ok();
    });
    it( "should be callable with parameter 'value' {-100}", () => {
        expect(() => { lang.validateInteger( -100, 20, 50 ) }).not.to.throwException(( error ) => { console.log( error ) });
        expect( lang.validateInteger( -100, 20, 50 ) === 20 ).to.be.ok();
    });
  });
  describe( "Testing function 'validateRegistry' of module 'lang'", () => {
    it( "should not be callable without parameters", () => {
        const errmsg  = "Parameter must be of type 'registry'.";
        expect(() => { lang.validateRegistry( ) }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should not be callable without parameters", () => {
        const errmsg  = "error message";
        expect(() => { lang.validateRegistry({ }, errmsg ) }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
  });
});
