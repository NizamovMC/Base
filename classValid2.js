class Valid2 extends Valid {
    constructor(email, password, isValid, emaiError, passwordError) {
        super(email, password, isValid)
        this.emaiError = '';
        this.passwordError = '';
    }
    validete() {
        if(this.password.length >= 6) {
            this.isValid = true;
        }
        if(this.password.length >= 6) {
            this.passwordError == '';
        }
        else {
            this.passwordError == 'min length 6';
        }
        if(this.email == '') {
            this.emaiError = 'email empty';
        }
        return this.isValid;
        // validate() 
        //     let parentValidate = super.validate();
        
        //    if(parentValidate == true) {
        //      this.isValid = "true";
        //    }
        //    if(this.email == '') {
        //      this.emaiError = "email empty";
        //    }  
        //    return this.isValid;
    }
}
        
    