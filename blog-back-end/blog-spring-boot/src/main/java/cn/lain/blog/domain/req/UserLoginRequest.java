package cn.lain.blog.domain.req;

import lombok.Data;

@Data
public class UserLoginRequest {

    private String username;

    private String password;

}
