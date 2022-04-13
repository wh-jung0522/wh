package com.leaddev.whstudy.data;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class Post {
    @Getter @Setter
    private int PostNum;
    @Getter @Setter
    private String UserName;
    @Getter @Setter
    private String PostTitle;
    @Getter @Setter
    private Date PostRegTime;
    @Getter @Setter
    private String PostContent;
}
