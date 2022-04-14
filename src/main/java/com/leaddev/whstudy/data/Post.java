package com.leaddev.whstudy.data;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class Post {
    @Getter @Setter
    private int postNum;
    @Getter @Setter
    private String userName;
    @Getter @Setter
    private String postTitle;
    @Getter @Setter
    private Date postRegTime;
    @Getter @Setter
    private String postContent;
}
