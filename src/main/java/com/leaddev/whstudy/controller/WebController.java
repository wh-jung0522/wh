package com.leaddev.whstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {


    @RequestMapping(value = "/")
    public @ResponseBody String root() throws Exception{
        return "JSP Test";
    }
    @RequestMapping(value = "/hello")
    public String index() throws Exception{
        return "hello";
    }

}
