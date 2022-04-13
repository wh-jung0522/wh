package com.leaddev.whstudy.data;

import lombok.Setter;
import lombok.Getter;

public class User {
    @Getter @Setter
    private String userID;
    @Getter @Setter
    private String hashedUserPW;
    @Getter @Setter
    private String userName;
}
