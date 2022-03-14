$(document).ready(function(){
    jQuery.validator.addMethod("alphanumeric", function(value, element) { return this.optional(element) || /^[\w.]+$/i.test(value); },

    $("#signup-form").validate({
        rules:{
            fname:{
            required:true,
            minlength:4,
            maxlength:10,
        },
        sname:{
            required:true,
            minlength:4
        },
        emailAddress:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:8,
            maxlength:12,
            alphanumeric:true
            
            
        },
        password2: {
            required: true,
            equalTo: "#password",
            minlength: 8,
        },
        day:{
            required:true
        },
        month:{
            required:true
        },
        year:{
            required:true
        },
        gender:{
            required:true
        }
    },
    messages:{
        password2:{
            required:"Please Re-enter the password",
            equalTo:"Please enter password correctly",
        },
        password:{
            required:"Please enter the password",
            alphanumeric:"Enter password between 8 to 12 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
        }
    }
        
    })
)},)
