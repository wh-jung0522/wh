package com.leaddev.whstudy.controller;

import com.leaddev.whstudy.mapper.UserMapper;
import com.leaddev.whstudy.servicer.PostService;
import com.leaddev.whstudy.servicer.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {


    @Autowired
    UserService userService;
    @Autowired
    PostService postService;

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
    @RequestMapping(value = "/post", method = RequestMethod.GET)
    public String user(Model model) throws Exception{
        model.addAttribute("list",postService.getPosts());
        return "post";
    }
    @RequestMapping(value = "/writepost", method = RequestMethod.GET)
    public String user() throws Exception{
        return "writepost";
    }

}
