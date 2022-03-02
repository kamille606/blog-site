package cn.lain.blog.service.impl;

import cn.hutool.crypto.SecureUtil;
import cn.lain.blog.domain.po.BlogUser;
import cn.lain.blog.mapper.BlogUserService;
import cn.lain.blog.service.AdminService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final BlogUserService userService;

    @Override
    public Boolean userLogin(final String username, final String password) {
        var passwordMD5 = SecureUtil.md5(password);
        var user = userService.getOne(
                new LambdaQueryWrapper<BlogUser>()
                        .eq(BlogUser::getUsername, username)
                        .eq(BlogUser::getPassword, passwordMD5)
        );
        return user != null;
    }

}
