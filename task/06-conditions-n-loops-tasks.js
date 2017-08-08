'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */

// #1
function getFizzBuzz(num) {
    if ((num % 5 == 0) && (num % 3 == 0)) {
        return "FizzBuzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */

// #2
function getFactorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */

// #3
function getSumBetweenNumbers(n1, n2) {
    var result = 0;
    for (var i = n1; i <= n2; i++) {
        result += i;
    }
    return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */

// #4
function isTriangle(a,b,c) {
    if ((a + b > c) && (a + c > b) && (c + b > a)) {
        return true;
    }
    return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */

// #5
function doRectanglesOverlap(rect1, rect2) {
    rect1.bottom = rect1.top + rect1.height;
    rect1.right = rect1.left + rect1.width;
    rect2.bottom = rect2.top + rect2.height;
    rect2.right = rect2.left + rect2.width;
    if ((rect1.left <= rect2.right) && (rect2.left <= rect1.right) && (rect1.top <=rect2.bottom) && (rect2.top <=rect1.bottom)) {
        return true;
    }
    return false;

}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */

// #6
function isInsideCircle(circle, point) {
    var d = Math.sqrt(Math.pow((circle.center.x - point.x), 2) + Math.pow((circle.center.y - point.y), 2));
    if (d < circle.radius) {
        return true;
    }
    return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */

// #7
function findFirstSingleChar(str) {
    var repeat = 0, result;
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;

}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */

// #8

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    var result = '';
    if (isStartIncluded == true) {
        result += '[';
    } else {
        result += '('
    }
    if (a > b) {
        result += b;
        result += ', ';
        result += a;
    } else {
        result += a;
        result += ', ';
        result += b;
    }
    if (isEndIncluded == true) {
        result += ']';
    } else {
        result += ')'
    }
    return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */

// #9
function reverseString(str) {
    var resultString = '';
    for (var i = 0; i < str.length ; i++) {
        resultString += (str[str.length - i - 1]);
    }
    return resultString;

}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */

// #10
function reverseInteger(num) {
    var result = 0,
        rest;
    while (num>0) {
        rest = num % 10;
        result = result * 10 + rest ;
        num = Math.floor(num/10);
    }
    return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

// #11
function isCreditCardNumber(ccn) {
    ccn = ccn.toString();
    var result = 0, middleResult;
    if (ccn.length % 2 == 0) {
        for (var i = 0; i < ccn.length; i++) {
            middleResult= ccn.charAt(2*i) * 2;
            if (middleResult >= 10) {
                middleResult -= 9;
            }
            result += middleResult + (+ccn.charAt(2*i+1));

        }

    } else {
        for (var i = 0; i < ccn.length; i++) {
            middleResult= ccn.charAt(2*i+1) * 2;
            if (middleResult >= 10) {
                middleResult -= 9;
            }
            result += middleResult + (+ccn.charAt(2*i));
        }
    }


    if (result % 10 == 0) {
        return true;
    }
    return false;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */

// #12
function getDigitalRoot(num) {
    var result = 0,
        buffer;

    while (num > 0) {
        buffer = num % 10;
        num = Math.floor(num / 10);
        result += buffer;
    }
    if (result >= 10) {
        result = Math.floor(result / 10) + result % 10;
    }

    return result;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */

// #13
function isBracketsBalanced(str) {
    var parentheses = "[]{}()<>",
        opening = [],
        closing = [],
        i, char, bracePosition;
    if (str.length % 2 !== 0) {
        return false;
    } else {
        for(i = 0; char = str[i]; i++) {
            bracePosition = parentheses.indexOf(char);
            if(bracePosition === -1) {
                continue;
            }
            if(bracePosition % 2 === 0) {
                opening.push(bracePosition + 1);
            } else {
                if(opening.pop() !== bracePosition) {
                    return false;
                }
            }
        }
    }

    if (opening.length === 0) {
        return true;
    }
    return false;
}



/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */

// #14
function timespanToHumanString(startDate, endDate) {

    var diff =  ( new Date(endDate) - new Date(startDate)) / 1000;
    var shortenedDiff;
    var secToMin = 60;
    var secToHours = secToMin * 60;
    var secToDays = secToHours * 24;
    var secToMonths = secToDays * 30;
    var secToYears = secToDays * 365;
    function roundMe(number, str) {
        var result = '';
        if ((number * 10 % 10 / 10)  <= 0.5) {
            result = Math.floor(number) + str;
        } else {
            result = Math.ceil(number) + str;
        }
        return result;
    }
    if (diff <= 45) {
        return 'a few seconds ago';
    }
    if (diff >45 && diff <= 90 ) {
        return 'a minute ago';
    }
    if (diff > 90 && diff <= 45 * secToMin ) {
        shortenedDiff = diff / secToMin;
        return roundMe(shortenedDiff, ' minutes ago');
    }
    if (diff > 45 * secToMin && diff <= 90 * secToMin) {
        return 'an hour ago';
    }
    if (diff > 90 * secToMin && diff <= 22 * secToHours) {
        shortenedDiff = diff / secToHours;
        return roundMe(shortenedDiff, ' hours ago');
    }
    if (diff > 22 * secToHours && diff <= 36 * secToHours ) {
        return 'a day ago';
    }
    if (diff > 36 * secToHours && diff <= 25 * secToDays) {
        shortenedDiff = diff / secToDays;
        return roundMe(shortenedDiff, ' days ago');
    }
    if (diff > 25 * secToDays && diff <= 45 * secToDays) {
        return 'a month ago';
    }
    if (diff > 45 * secToDays && diff <= 345 * secToDays) {
        shortenedDiff = diff / secToMonths;
        return roundMe(shortenedDiff, ' months ago');
    }
    if (diff > 345 * secToDays && diff <= 545 * secToDays ) {
        return 'a year ago';
    }
    if (diff > 545 * secToDays ) {
        shortenedDiff = diff / secToYears;
        return roundMe(shortenedDiff, ' years ago');
    }

}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */

// #15
function toNaryString(num, n) {
    var initStr = '';
    var resultStr = '';
    while (num > 0) {
        initStr += num % n;
        num = Math.floor(num / n);
    }
    for (var i = 0; i < initStr.length ; i++) {
        resultStr += (initStr[initStr.length - i - 1]);
    }
    return resultStr;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */

// #16
function getCommonDirectoryPath(pathes) {
    var count = 0,
        result = pathes[0];
    for (var i = 0; i < pathes.length - 1; i++) {
        while (count < pathes[i].length && pathes[i].charAt(count) == pathes[i+1].charAt(count)) {
            count++;
        }
        result = pathes[0].substring(0, count);
        pathes[i+1] = result;
        count = 0;
    }

    for (var k = result.length - 1; k >= 0; k--) {
        if (result[k] == '/') {
            result = result.substring(0, k+1);
            break;
        }
    }
    return result;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */

// #17
function getMatrixProduct(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

// #18
function evaluateTicTacToePosition(position) {
    throw new Error('Not implemented');
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
