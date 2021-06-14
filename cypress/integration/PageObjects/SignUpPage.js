class SignUpPage
{
    VerifyIfWeAreOnSignUpPage()
    {
        const field=cy.get('p.text-xs-center > a')
        field.contains("Have an account?")
    }
    EnterUserName()
    { 
        const field = cy.get(':nth-child(1) > .form-group > .form-control')
        field.clear()
        field.type(randomusername())
        return this
    }  

    EnterEmail()
    {
    const field = cy.get(':nth-child(2) > .form-group > .form-control')
    field.clear()
    field.type(randomemail())
    return this
    }

    EnterPassword(value)
    {
        const field = cy.get(':nth-child(3) > .form-group > .form-control')
        field.clear()
        field.type(value)
        return this
    }  

    ClickSignUpButton()
    {
        const field=cy.get('.btn')
        field.contains("Sign up")
        field.click()
    }
    
}
    //This function gives random username
    function randomusername() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }
    
        //This function gives random email address
    function randomemail() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return (text + '@email.com');
        }

    
export default SignUpPage