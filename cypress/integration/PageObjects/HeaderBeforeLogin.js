class HeaderBeforeLogin
{
    ClickLogo()
    {
        const field=cy.get('.navbar-brand')
        field.click()
    }

    ClickHomeLink()
    {
        const field=cy.get('.container > .nav > :nth-child(1) > .nav-link')
        field.contains('Home')
        field.click()
    }

    ClickSignInLink()
    {
        const field=cy.get('.container > .nav > :nth-child(2) > .nav-link')
        field.contains('Sign in')
        field.click()
    }

    ClickSignUpLink()
    {
        const field=cy.get(':nth-child(3) > .nav-link')
        field.contains('Sign up')
        field.click()
    }

}

export default HeaderBeforeLogin
