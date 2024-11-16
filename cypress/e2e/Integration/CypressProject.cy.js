import Page3 from "../../support/CypressProject/login.cy";
import home3 from "../../support/CypressProject/home.cy";
import Page2 from "../../support/CypressProject/Logout.cy";



describe('',()=>{

    const log= new Page3()
    const out= new Page2()
    const homm=new home3()
   


    it('',()=>{
        log.Url_Application()
        log.login_with_application()
        
        homm.Admin_info()
        homm.PIM_App()
        homm.My_Info()
        homm.Buzz_App()
        

        

        out.logout_from_app()
    })
})
