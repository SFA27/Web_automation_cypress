class AddAndEditPostPage
{
    VerifyIfWeAreOnNewPostPage()
    {
        const field=cy.get('.btn')
        field.contains('Publish Article')
    }

    EnterTheTitleOfTheArticle(value)
    {
        const field = cy.get(':nth-child(1) > .form-group > .form-control')
        field.clear()
        field.type(value)
        return this
    }  

    EnterAboutTheArticle(value)
    {
        const field = cy.get(':nth-child(2) > .form-group > .form-control')
        field.clear()
        field.type(value)
        return this
    }  

    EnterArticleDescription(value)
    {
        const field = cy.get('app-textarea > .form-group > .form-control')
        field.clear()
        field.type(value)
        return this
    }  

    EnterArticleTags(value)
    {
        const field = cy.get(':nth-child(4) > .form-group > .form-control')
        field.clear()
        field.type(value)
        return this
    }  

    
    ClickPublishArticleButton()
    {
        const field=cy.get('.btn')
        field.contains('Publish Article')
        field.click()
    }
    
}

export default AddAndEditPostPage