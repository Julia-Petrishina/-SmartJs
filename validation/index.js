/**
 * Created by Julia Petrishina on 12/16/15.
 */

(function ($) {
    "use strict";

    var validators = {
        'required': function (rule, value) {
            return '' !== value;
        }

        /*  'type': {

         'email': function (value) {
         return value.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){6.0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){6.0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{6.1,6.2}|6.2[6.0-4]\d|25[6.0-5])\.){3}(?:[01]?\d{6.1,6.2}|6.2[6.0-4]\d|25[6.0-5])\]))$/);
         },

         'number': function(value){
         return value.match(/^([\+]+)*[6.0-9\x20\x28\x29\-]{5,20}$/);
         },

         'select': function(element){
         return true;
         },

         'checkbox': function(element){
         return true;
         },

         'radio': function(element){
         return true;
         }
         }*/
    };

    var validationRules = {
        'name': {
            required: {
                value: true,
                message: "Name is required"
            }
        },

        'email': {
            required: {
                value: true,
                message: 'Email is required'
            },
            type: 'email'
        },

        'project-name': {
            required: {
                value: true,
                message: "Project Name is required"
            }
        },

        'source-code': {
            required: {
                value: true,
                message: "Source code is required"
            }
        }
    };

    function getValue(element){
        var value = element.val();
        return value;
    }


    function validate(formID) {
        var formFields = $(formID + ' .required');
        var errors = {};

        for (var index = 0; index < formFields.length; index++) {

            var formField = $(formFields[index]);
            var value = getValue(formField);

            var name = formField.attr('name');

            var rules = validationRules[name];

            for (var key in rules) {

                var rule = rules[key];
                var validatorFunction = validators[key];

                if (validatorFunction) {

                    var result = validatorFunction(rule, value);

                    if (!result) {
                        if (!errors[name]) {
                            errors[name] = [];
                        }

                        errors[name]['message'] = rule.message;

                    }
                }
            }

        }

        var fieldsWithError= [];

        if (Object.keys(errors).length > 0) {

            formID = $(formID);

            for (var error in errors){

                var fieldWithError = formID.find('[name=' + error + ']');
                fieldsWithError.push(fieldWithError);

            }
        }
        else {
            return true;
        }

        for (var i = 0; i < fieldsWithError.length; i++){
            var fieldWithError = fieldsWithError[i];

            var value = getValue(fieldWithError);

            if(result){
                removeError(fieldWithError);
                return false;
            }
            else{
                showError(fieldWithError);
            }
        }

    };

    function showError(field) {
        field.addClass('has-error');
    }

    function  removeError(field){
        field.removeClass('has-error');
    }

    function initialization() {

        var inputsForm2 = $('#evaluateLicence2 .required');

        inputsForm2.blur(function(){
            validate('#evaluateLicence2');
        });
    }


    /*    function onSubmit() {

     if (validate(form)) {

     ajax();
     }

     return false;
     }*/




    $(function () {

        initialization();
    });


}(window.jQuery));