import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe(" Contact Us page Test Case", () => {
    test(" Should load contact component ", () => {
        //render
        render(<Contact/>);
        //Querying
        const heading = screen.getByRole("heading");
        // Assertion
         expect(heading).toBeInTheDocument();
    });
    test(" Should load button inside contact component ", () => {
      
        render(<Contact/>);
        const button = screen.getByRole("button");
    
         // Assertion
         expect(button).toBeInTheDocument();
    });
    it(" Should load input name inside contact component ", () => {
      
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
    
         // Assertion
         expect(inputName).toBeInTheDocument();
    });
    test("Should load 2 input boxes on the Contact component", ()=>{
         render(<Contact/>);
       
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        // Assertion
        expect(inputBoxes.length).toBe(2);
    
    });  
});




