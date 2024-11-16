class home3{

    Admin_info(){
        cy.xpath("//span[text()='Admin']").click();
    }
   

    PIM_App(){

        //clicking on PIM feature
        cy.xpath("//span[text()='PIM']").click();

        //clicking on Add employee text
        cy.xpath("//a[text()='Add Employee']").click();

        //locator for first name
        cy.get('[placeholder="First Name"]').type('Karan');

        //clicking on create login details 
        cy.xpath("//p[text()='Create Login Details']").click();

        //clicking on save button
        cy.get('[type="submit"]').click();

    }

    My_Info(){

        //Clicking om My info feature
        cy.xpath("//span[text()='My Info']").click();

        //locator for fistname 
        cy.get('[name="firstName"]').type('karan');

        //lpcator for middle name
        cy.get('[name="middleName"]').type('akhil');

        //locator for other ID
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[3]').type('4321567');

        //locator for driver's lecense number
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[4]').type('567890'); 

        //clicking on save button
        cy.xpath('(//button[@type="submit"])[1]').click();
        

    }


    Buzz_App(){

        //Clicking on Buzz feature 
        cy.xpath('//a[@href="/web/index.php/buzz/viewBuzz"]').click();

        //locator for post text area
        cy.get('[rows="1"]').type('Right');
        
        //clicking on post button
        cy.get('[type="submit"]').click();
        //
    }


}
export default home3;