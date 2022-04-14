package com.leaddev.whstudy.mapper;

import com.leaddev.whstudy.data.Post;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

// 주의 : @Param(".xml에 사용할 이름") Java에 사용할 이름 으로 설정.
@Mapper
public interface PostMapper {

    // 게시글 리스트 조회
    public List<Post> getPosts() throws Exception;

    // 게시글 조회
    public Post getPost(@Param("postNum")int postNum) throws Exception;

    // 게시글 작성
    public void postPost(Post post) throws Exception;

    //게시글 수정
    public void updatePost(Post post) throws Exception;

    //게시글 삭제
    public void deletePost(@Param("postNum")int postNum) throws Exception;

}
