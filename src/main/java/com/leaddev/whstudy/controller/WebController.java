package com.leaddev.whstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {


    @RequestMapping(value = "/")
    public String root() throws Exception{
        return "index";
    }
    @RequestMapping(value = "/hello")
    public String index() throws Exception{
        return "hello";
    }
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String userinfo() throws Exception{
        return "login";
    }

}
