class SignInPage
{
    VerifyIfWeAreLoggedOut()
    { 
        const field = cy.get('p.text-xs-center > a')
        field.contains('Need an account?')
    }  

    EnterEmail(email)
    { 
        const field = cy.get(':nth-child(1) > .form-group > .form-control')
        field.clear()
        field.type(email)
        return this
    }  

    EnterPassword(password)
    { 
        const field = cy.get(':nth-child(2) > .form-group > .form-control')
        field.clear()
        field.type(password)
        return this
    }

    ClickSignInButton()
    { 
        const field = cy.get('.btn')
        field.contains('Sign in')
        field.click()
    }
}

export default SignInPage