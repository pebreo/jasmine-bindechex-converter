/*
 bin -> dec ; -> hex
 hex -> bin ; -> dec
 dec -> bin ; -> hex
*/
//    <!-- <div id="HTMLReporter" class="jasmine_reporter"></div> -->
     
describe("Util functions:", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Funcs();

    }); 
  

    it("remainder(7,4) should return 3", function() {
        //calc.add(1,2);
        expect(remainder(7,4)).toBe(3);
        
    });
    
    it("remainder(7,7) should return false", function() {
        //calc.add(1,2);
        expect(remainder(7,7)).toBe(false);
        
    });
    
    it("remainder(7,10) should return false", function() {
        //calc.add(1,2);
        expect(remainder(7,10)).toBe(false);
        
    });
    
   it("trimLeadingZero([0,0,1]) should be [1]", function() {
        //calc.add(1,2);
        expect(trimLeadingZero([0,0,1])).toEqual([1]);
        
    });
    it("trimLeadingZero([0,0,0,1,0,0,1]) should be [1,0,0,1]", function() {
        //calc.add(1,2);
        expect(trimLeadingZero([0,0,0,1,0,0,1])).toEqual([1,0,0,1]);
        
    });
    
   it("qremain(18,16) should return 1 remainder 2", function() {
        //calc.add(1,2);
        expect(qremain(18,16)).toEqual({quotient: 1, remainder: 2});
        
    });
    
    it("qremain(24,12) should return 2 remainder 0", function() {
        //calc.add(1,2);
        expect(qremain(24,12)).toEqual({quotient: 2, remainder: 0});
        
    });
    
    it("qremain(272,16) should return 17 remainder 0", function() {
        //calc.add(1,2);
        expect(qremain(272,16)).toEqual({quotient: 17, remainder: 0});
        
    });
    
    it("decdig2hex(11) should return 'A'", function() {
        //calc.add(1,2);
        expect(decdig2hex(10)).toBe('A');
        expect(decdig2hex(11)).toBe('B');
        expect(decdig2hex(12)).toBe('C');
        expect(decdig2hex(13)).toBe('D');
        expect(decdig2hex(14)).toBe('E');
        expect(decdig2hex(15)).toBe('F');
        expect(decdig2hex(1)).toBe('1');
    });
    
    it("hexdig2dec('A') should return 11", function() {
        //calc.add(1,2);
        expect(hexdig2dec('0')).toBe(0);
        expect(hexdig2dec('9')).toBe(9);
        expect(hexdig2dec('A')).toBe(10);
        expect(hexdig2dec('B')).toBe(11);
        expect(hexdig2dec('C')).toBe(12);
        expect(hexdig2dec('D')).toBe(13);
        expect(hexdig2dec('E')).toBe(14);
        expect(hexdig2dec('F')).toBe(15);
    });



});


describe("Binary functions:", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Funcs();

    }); 
  
    
    it("bin2dec should convert 01 to 1", function() {
        //calc.add(1,2);
        expect(calc.bin2dec("01")).toBe(1);
    });
    
     it("bin2dec should convert 10 to 2", function() {
        //calc.add(1,2);
        expect(calc.bin2dec("10")).toBe(2);
        
    });
    it("bin2dec should convert 1111 to 15", function() {
        //calc.add(1,2);
        expect(calc.bin2dec("1111")).toBe(15);
        
    });
    
    // bin->dec->hex
    it("bin2hex should convert 01 to 1", function() {
        //calc.add(1,2);
        expect(calc.bin2hex("01")).toBe('1');
    });
    
    it("bin2hex should convert 10 to 2", function() {
        //calc.add(1,2);
        expect(calc.bin2hex("10")).toBe('2');
        
    });
    
    
    it("bin2hex should convert 1111 to 15", function() {
        //calc.add(1,2);
        expect(calc.bin2hex("1111")).toBe('F');
        
    });
    
    it("bin2hex should convert 1111 to 15", function() {
        //calc.add(1,2);
        expect(calc.bin2hex("1100")).toBe('C');
    });


});


describe("Decimal functions:", function() {
    var calc;
    
    beforeEach(function() {
        calc = new Funcs();

    }); 
  
    it("dec2bin should convert 5 to 101", function() {
        //calc.add(1,2);
        expect(calc.dec2bin(5)).toBe('101');
        
    });
    
    // 32 16 8 4 2 1
    it("dec2bin should convert 32 to 100000", function() {
        //calc.add(1,2);
        expect(calc.dec2bin(32)).toBe('100000');
        
    });
    it("dec2bin should convert 16 to 10000", function() {
        //calc.add(1,2);
        expect(calc.dec2bin(16)).toBe('10000');
        
    });
    
   it("dec2hex should convert 5 to 5", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(5)).toBe('5');
        
    });
    
    it("dec2hex should convert 786 to 312", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(786)).toBe('312');
        
    });
    
    it("dec2hex should convert 4533 to 312", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(4533)).toBe('11B5');
        
    });
    
    it("dec2hex should convert 10 to A", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(10)).toBe('A');
        
    });
    
    it("dec2hex should convert 15 to F", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(15)).toBe('F');
        
    });
    
    it("dec2hex should convert 16 to 10", function() {
        //calc.add(1,2);
        expect(calc.dec2hex(16)).toBe('10');
        
    });
    
  

});


describe("Hex functions:", function() {
    var calc;
    /* 
     To make it easier on you you just create:
     
      hex -> hex2dec -> dec2bin
    */
    beforeEach(function() {
        calc = new Funcs();

    }); 
    
    it("hex2dec should convert 9 to 9", function() {
        //calc.add(1,2);
        expect(calc.hex2dec('9')).toBe(9);
        
    });
    
    it("hex2dec should convert 10 to 16", function() {
        //calc.add(1,2);
        expect(calc.hex2dec('10')).toBe(16);
        
    });
     
    it("hex2dec should convert FF to 255", function() {
        //calc.add(1,2);
        expect(calc.hex2dec('FF')).toBe(255);
        
    });
    
    it("hex2dec should convert FFFF to 65535", function() {
        //calc.add(1,2);
        expect(calc.hex2dec('FFFF')).toBe(65535);
        
    });
  
    // hex->dec->bin
    it("hex2bin should convert 5 to 101", function() {
        //calc.add(1,2);
        expect(calc.hex2bin('5')).toBe('101');
        
    });
    
    it("hex2bin should convert F to 1111", function() {
        //calc.add(1,2);
        expect(calc.hex2bin('F')).toBe('1111');
        
    });
    
    it("hex2bin should convert A-E to the correct ones", function() {
        //calc.add(1,2);
        // 8 4 2 1
        // 10
        expect(calc.hex2bin('A')).toBe('1010');
        // 11
        expect(calc.hex2bin('B')).toBe('1011');
        // 12
        expect(calc.hex2bin('C')).toBe('1100');
        // 13
        expect(calc.hex2bin('D')).toBe('1101');
        // 14
        expect(calc.hex2bin('E')).toBe('1110');
        
    });
    
  

});