package com.leaddev.whstudy.mapper;

import com.leaddev.whstudy.data.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    //로그인
    public boolean matchUser(User user) throws Exception;
    //생성
    public void createUser(User user) throws Exception;
    //수정
    public void modifyUser(User user) throws Exception;
    //삭제
    public void deleteUser(User user) throws Exception;
}
