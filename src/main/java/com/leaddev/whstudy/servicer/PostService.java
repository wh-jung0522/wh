package com.leaddev.whstudy.servicer;

import com.leaddev.whstudy.data.Post;
import com.leaddev.whstudy.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// SQL 서버와 연결하는 서비스를 제공하는 클래스
@Service
public class PostService {

    @Autowired
    PostMapper postMapper;

    public List<Post> getPosts() throws Exception{
        return postMapper.getPosts();
    }
    public Post getPost(int postNum) throws Exception{
        return postMapper.getPost(postNum);
    }
    public void postPost(Post post) throws Exception{
        postMapper.postPost(post);
    }
    public void updatePost(Post post) throws Exception{
        postMapper.updatePost(post);
    }
    public void deletePost(int postNum) throws Exception{
        postMapper.deletePost(postNum);
    }

}
