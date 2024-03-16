import { Component } from '@angular/core';

export class ValidationService {
    //space checking
    static spaceChecking(val: string) {
        if (val == "") {
            return true;
        }
        for (let i = 0; i < val.length; i++) {
            if (val.charAt(i) == " ") {
                return true;
            }
        }
        return false;
    }

    //Number checking
    static numberChecking(val: string) {
        let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (let i = 0; i < val.length; i++) {
            if (num.includes(val.charAt(i))) {
                return true;
            }
        }
        return false;
    }

    //special Character
    static specialCharacter(val: string) {
        let specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", "|", "\\", ":", ";",
            "'", "\"", "<", ">", ",", ".", "?", "/"];
            for (let i = 0; i < val.length; i++) {
                if (specChar.includes(val.charAt(i))) {
                    return true;
                }
            }
            return false;    
    }

    //Isempty Chaceking
    static isEmpty(val : string){
        if (val == "") {
            return true;
        }
        return false;
    }

}

