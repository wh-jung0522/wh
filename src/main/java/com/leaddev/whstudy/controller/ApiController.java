package com.leaddev.whstudy.controller;

import com.leaddev.whstudy.data.Post;
import com.leaddev.whstudy.data.User;
import com.leaddev.whstudy.servicer.PostService;
import com.leaddev.whstudy.servicer.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@RequestMapping(value="/api")
public class ApiController {

    @Autowired
    UserService userService;

    @RequestMapping(value="/usermatch",method = RequestMethod.POST)
    public Boolean match(@RequestBody User user) throws Exception{
        Boolean matching = userService.matchUser(user.getUserID());
        return matching;
    }
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public Boolean login(@RequestBody User user) throws Exception{
        Boolean login = userService.loginUser(user);
        return login;
    }
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public void create(@RequestBody User user) throws Exception{
        userService.createUser(user);
    }
    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public void modify(@RequestBody User user) throws Exception{
        userService.modifyUser(user);
    }
    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    public void delete(@RequestBody User user) throws Exception{
        userService.deleteUser(user);
    }

    @Autowired
    PostService postService;

    @RequestMapping(value = "/post", method = RequestMethod.GET)
    public List<Post> getPosts() throws Exception{
        return postService.getPosts();
    }

    @RequestMapping(value = "/post/{postNum}", method = RequestMethod.GET)
    public Post getPost(@PathVariable int postNum) throws Exception{
        return postService.getPost(postNum);
    }

    @RequestMapping(value = "/post",method=RequestMethod.POST)
    public void postPost(@RequestBody Post post) throws Exception{
        postService.postPost(post);
    }

    @RequestMapping(value = "/post",method=RequestMethod.PUT)
    public void updatePost(@RequestBody Post post) throws Exception{
        postService.updatePost(post);
    }

    @RequestMapping(value = "/post",method=RequestMethod.DELETE)
    public void deletePost(@RequestParam("n") int postNum) throws Exception{
        postService.deletePost(postNum);
    }

}
