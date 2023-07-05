import { render } from "@testing-library/react";
import React from "react";
import NewsComponent from "../../component/NewsComponent";


describe("News component test cases",()=>{
    it('when loading is true then loading text should be displayed...',()=>{
        const {debug} = render(<NewsComponent cityname='delhi'/>)
        debug()
    })
})