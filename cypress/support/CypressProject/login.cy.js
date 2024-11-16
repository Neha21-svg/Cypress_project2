class Page3{
    Url_Application(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }

    login_with_application(){
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
    }

    Forgot_pass(){
        cy.get('.orangehrm-login-forgot').click()
        cy.get('[name="username"]').type('random user')
        cy.get('.orangehrm-forgot-password-button--reset').click()
    }




}
export default Page3;