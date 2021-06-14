class SettingsPage
{
    VerifyIfWeAreOnSettingsPage()
    { 
        const field = cy.get('.text-xs-center')
        field.contains('Your Settings')
    }  

    ClickLogoutButton()
    {
    const field = cy.get('.btn-outline-danger')
    field.contains('Or click here to logout.')
    field.click()
    }
    
}

export default SettingsPage