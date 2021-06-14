class PublishedArticlePage
{
    
    VerifyTheTitleOfTheArticle(value)
    {
        const field = cy.get('h1')
        field.contains(value)
        return this
    }  

    VerifyArticleDescription(value)
    {
        const field = cy.get('p')
        field.contains(value)
        return this
    }  

    ClickEditArticleButton()
    {
        const field=cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-secondary')
        field.contains("Edit Article")
        field.click()
    }

    ClickDeleteButton()
    {
        const field=cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger')
        field.contains('Delete Article')
        field.click()
    }
}

export default PublishedArticlePage