/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "10.00.index.spec.js - Testing module 'lib/index.js'", () => {
  const lib = require( "../../lib" );

  describe( "Testing exports of lib", () => {
    it( "Export of 'exists' should exist and be of type 'function'", () => {
        expect( lib.exists     ).not.to.be( undefined  );
        expect( lib.exists     ).not.to.be( null       );
        expect( lib.exists     ).to.be.a(   "function" );
    });
    it( "Export of 'isEmpty' should exist and be of type 'function'", () => {
        expect( lib.isEmpty    ).not.to.be( undefined  );
        expect( lib.isEmpty    ).not.to.be( null       );
        expect( lib.isEmpty    ).to.be.a(   "function" );
    });
    it( "Export of 'isFunction' should exist and be of type 'function'", () => {
        expect( lib.isFunction ).not.to.be( undefined  );
        expect( lib.isFunction ).not.to.be( null       );
        expect( lib.isFunction ).to.be.a(   "function" );
    });
    it( "Export of 'isNotEmpty' should exist and be of type 'function'", () => {
        expect( lib.isNotEmpty ).not.to.be( undefined  );
        expect( lib.isNotEmpty ).not.to.be( null       );
        expect( lib.isNotEmpty ).to.be.a(   "function" );
    });
    it( "Export of 'isRegistry' should exist and be of type 'function'", () => {
        expect( lib.isRegistry ).not.to.be( undefined  );
        expect( lib.isRegistry ).not.to.be( null       );
        expect( lib.isRegistry ).to.be.a(   "function" );
    });
    it( "Export of 'isString' should exist and be of type 'function'", () => {
        expect( lib.isString   ).not.to.be( undefined  );
        expect( lib.isString   ).not.to.be( null       );
        expect( lib.isString   ).to.be.a(   "function" );
    });
    it( "Export of 'registry' should exist and be of type 'function'", () => {
        expect( lib.registry   ).not.to.be( undefined  );
        expect( lib.registry   ).not.to.be( null       );
        expect( lib.registry   ).to.be.a(   "function" );
    });
    it( "Export of 'validateInteger' should exist and be of type 'function'", () => {
        expect( lib.validateInteger  ).not.to.be( undefined  );
        expect( lib.validateInteger  ).not.to.be( null       );
        expect( lib.validateInteger  ).to.be.a(   "function" );
    });
    it( "Export of 'validateRegistry' should exist and be of type 'function'", () => {
        expect( lib.validateRegistry ).not.to.be( undefined  );
        expect( lib.validateRegistry ).not.to.be( null       );
        expect( lib.validateRegistry ).to.be.a(   "function" );
    });
  });
});
