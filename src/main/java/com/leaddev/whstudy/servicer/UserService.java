package com.leaddev.whstudy.servicer;

import com.leaddev.whstudy.data.User;
import com.leaddev.whstudy.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    public boolean matchUser(User user) throws Exception{
        return userMapper.matchUser(user);
    }
    //생성
    public void createUser(User user) throws Exception{
        userMapper.createUser(user);
    }
    //수정
    public void modifyUser(User user) throws Exception{
        userMapper.modifyUser(user);
    }
    //삭제
    public void deleteUser(User user) throws Exception {
        userMapper.deleteUser(user);
    }


}
