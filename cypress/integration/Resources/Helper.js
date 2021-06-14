///<reference types="cypress" />

import HeaderBeforeLogin from '../PageObjects/HeaderBeforeLogin'
import SignUpPage from '../PageObjects/SignUpPage'
import HeaderAfterLogin from '../PageObjects/HeaderAfterLogin'
import LandingPageAfterLogin from '../PageObjects/LandingPageAfterLogin'
import AddAndEditPostPage from '../PageObjects/AddAndEditPostPage'
import PublishedArticlePage from '../PageObjects/PublishedArticlePage'
import UserProfilePage from '../PageObjects/UserProfilePage'
import SettingsPage from '../PageObjects/SettingsPage'
import SignInPage from '../PageObjects/SignInPage'

        const SUP = new SignUpPage()
        const HBL = new HeaderBeforeLogin()
        const HAL = new HeaderAfterLogin()
        const LPAL = new LandingPageAfterLogin()
        const AAEPP =new AddAndEditPostPage()
        const PAP=new PublishedArticlePage()
        const UPP=new UserProfilePage()
        const SIP=new SignInPage()
        const SP=new SettingsPage()

class Helper
{   
    LaunchUrl(url,authemail,authpassword)
    {
        cy.visit(url, {
            auth: {
              username: authemail,
              password: authpassword
            }
          })
        cy.title().should('eq', 'BBlog')
    }

    SignUpAsANewUserAndLogin(password)
    {     
    HBL.ClickSignUpLink()
    SUP.VerifyIfWeAreOnSignUpPage()
    SUP.EnterUserName()
    SUP.EnterEmail()
    SUP.EnterPassword(password)
    SUP.ClickSignUpButton()
    LPAL.VerifyIfWeAreLoggedIn()
    }

    CreateANewPostAndPublishTheArticle(articleTitle, aboutArticle, articleDescription, articleTags)
    {
        HAL.ClickNewPost()
        AAEPP.VerifyIfWeAreOnNewPostPage()
        AAEPP.EnterTheTitleOfTheArticle(articleTitle)
        AAEPP.EnterAboutTheArticle(aboutArticle) 
        AAEPP.EnterArticleDescription(articleDescription) 
        AAEPP.EnterArticleTags(articleTags)
        AAEPP.ClickPublishArticleButton()
    }

    VerifyIfTheDetailsAreSavedCorrectlyOnArticlePublishedScreen(articleTitle,articleDescription)
    {
        PAP.VerifyTheTitleOfTheArticle(articleTitle)
        PAP.VerifyArticleDescription(articleDescription)
    }

    VerifyIfArticleDetailsAreSavedCorrectlyOnMyArticlesScreen(articleTitle,aboutArticle,articleTags)
    {
        HAL.ClickUserNameLink()
        UPP.ClickMyArticlesLink()
        UPP.VerifyTitleInMyArticlesPage(articleTitle)
        UPP.VerifyAboutArticleFieldInMyArticles(aboutArticle)
        UPP.VerifyTagsInMyArticlesPage(articleTags)
    }

    NavigateToSignOutPageAndLogout()
    {
        HAL.ClickLogo()
        HAL.ClickSettingsLink()
        SP.VerifyIfWeAreOnSettingsPage()
        SP.ClickLogoutButton()
        SIP.VerifyIfWeAreLoggedOut()
    }

    SignInWithCorrectCredentialsAndVerify(email,password,username)
    {
        HBL.ClickSignInLink()
        SIP.EnterEmail(email)
        SIP.EnterPassword(password)
        SIP.ClickSignInButton()
        LPAL.VerifyIfWeAreLoggedIn()
        HAL.VerifyUserNameOnHeader(username)
    }

    DeleteTheArticle(articleTitle)
    {
        HAL.ClickUserNameLink() 
        UPP.ClickMyArticlesLink()  
        UPP.VerifyTitleInMyArticlesPage(articleTitle)
        UPP.ClickReadMorefromMyArticlesSection()
        PAP.ClickDeleteButton()
        HAL.ClickUserNameLink()
    }

    VerifyIfTheArticleIsDeletedfromMyArticlesSection()
    {
        UPP.ClickMyArticlesLink()
        UPP.VerifyIfTheArticleIsDeletedfromMyArticlesSection()
    }
}
export default Helper
