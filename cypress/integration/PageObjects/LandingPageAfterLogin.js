class LandingPageAfterLogin
{
    VerifyIfWeAreLoggedIn()
    {
        const field=cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link')
        field.contains('Your Feed')
    }

}

export default LandingPageAfterLogin