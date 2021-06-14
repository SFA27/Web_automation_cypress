class HeaderAfterLogin
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


    ClickUserNameLink()
    {
        const field=cy.get('.container > .nav > :nth-child(2) > .nav-link')
        field.click()
    }

    ClickNewPost()
    {
        const field=cy.get('.container > .nav > :nth-child(3) > .nav-link')
        field.click()
    }

    ClickSettingsLink()
    {
        const field=cy.get(':nth-child(4) > .nav-link')
        field.click()
    }

    ClickUserNameLink()
    {
        const field=cy.get('.container > .nav > :nth-child(2) > .nav-link')
        field.click()
    }

    VerifyUserNameOnHeader(username)
    {
        const field=cy.get('.container > .nav > :nth-child(2) > .nav-link')
        field.contains(username)
    }
}

export default HeaderAfterLogin