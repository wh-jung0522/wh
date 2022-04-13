package com.leaddev.whstudy.controller;

import com.leaddev.whstudy.data.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController

@RequestMapping(value="/api")
public class ApiController {

    @Autowired



    @RequestMapping(value="/login",method = RequestMethod.POST)
    public User userinfo() throws Exception{
        User user = new User();

        return user;
    }


}
