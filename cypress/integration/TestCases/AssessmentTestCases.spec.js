///<reference types="cypress" />

import Helper from '../Resources/Helper'

describe('Assessment Test Suite', function()  
{
    const H = new Helper()
    let articleDetails

    //This hook runs before each testcase
    beforeEach(function()
    {
        cy.fixture('articleDetails').then((article)=>{
            articleDetails = article
        })
        H.LaunchUrl(Cypress.env('url'), Cypress.env('usernameAuthentication'),Cypress.env('passwordAuthentication'))
    })
    
    //Testcase1: In this textcase the user login with the correct credentials and verify if he is logged in by verifying the username on the header
    it('Sign in with correct credentials and verify', function()  
    {
        H.SignInWithCorrectCredentialsAndVerify(Cypress.env('email'),Cypress.env('password'),Cypress.env('username'))
    })
    
    //Testcase2: In this testcase the user sign up, create an article publish it and verify if the article details are saved correctly
    it('Sign up as new user, create a new article and verify', function()  
    {
        H.SignUpAsANewUserAndLogin(Cypress.env('password'))
        H.CreateANewPostAndPublishTheArticle(articleDetails.articleTitle, articleDetails.aboutArticle, articleDetails.articleDescription, articleDetails.articleTags)
        H.VerifyIfTheDetailsAreSavedCorrectlyOnArticlePublishedScreen(articleDetails.articleTitle, articleDetails.articleDescription)
        H.VerifyIfArticleDetailsAreSavedCorrectlyOnMyArticlesScreen(articleDetails.articleTitle,articleDetails.aboutArticle,articleDetails.articleTags)

    })

    //This hook runs after each testcase
    afterEach(function()
    {
      H.NavigateToSignOutPageAndLogout()
    })
})