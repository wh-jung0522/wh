package com.leaddev.whstudy.mapper;

import com.leaddev.whstudy.data.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {

    //매칭
    public boolean matchUser(@Param("userID") String userID) throws Exception;
    //로그인
    public boolean loginUser(User user) throws Exception;
    //생성
    public void createUser(User user) throws Exception;
    //수정
    public void modifyUser(User user) throws Exception;
    //삭제
    public void deleteUser(User user) throws Exception;
}
