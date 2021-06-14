class UserProfilePage
{
    ClickMyArticlesLink()
    {
        const field = cy.get('.articles-toggle > .nav > :nth-child(1) > .nav-link')
        field.contains('My Articles')
        field.click()
    }  

    ClickFavoritedArticles()
    {
        const field = cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link')
        field.contains('Favorited Articles')
        field.click()
    }  

    VerifyTitleInMyArticlesPage(value)
    {
        const field = cy.get('h1')
        field.contains(value)
    }

    VerifyAboutArticleFieldInMyArticles(value)
    {
        const field = cy.get('.preview-link > p')
        field.contains(value)
    }

    VerifyTagsInMyArticlesPage(value)
    {
        const field = cy.get('.tag-default')
        field.contains(value)
    }

    ClickReadMorefromMyArticlesSection()
    {
        const field = cy.get('.preview-link > span')
        field.contains('Read more...')
        field.click()
    }

    MakeTheArticleFavoriteYouJustPosted()
    {
        const field = cy.get('.article-meta > .btn')
        field.click()
    }

    VerifyIfThereAreNoFavoriteArticlesYet()
    {
        const field = cy.get('app-article-list > :nth-child(2)')
        field.contains('No articles are here... yet.')
    }
    
    VerifyTitleInMyFavoritedPage(value)
    {
        const field = cy.get('h1')
        field.contains(value)
    }

    VerifyAboutArticleFieldInMyFavoritedPage(value)
    {
        const field = cy.get('.preview-link > p')
        field.contains(value)
    }

    VerifyTagsInMyFavoritedPage(value)
    {
        const field = cy.get('.tag-default')
        field.contains(value)
    }

    ClickReadMorefromFavoritedSection()
    {
        const field = cy.get('.preview-link > span')
        field.contains('Read more...')
        field.click()
    }

    VerifyIfTheArticleIsDeletedfromMyArticlesSection()
    {
        const field=cy.get('app-article-list > :nth-child(2)')
        field.contains('No articles are here... yet.')
    }

    VerifyIfTheArticleIsDeletedfromMyFavoritedSection()
    {
        const field=cy.get('app-article-list > :nth-child(2)')
        field.contains('No articles are here... yet.')
    }


}
export default UserProfilePage