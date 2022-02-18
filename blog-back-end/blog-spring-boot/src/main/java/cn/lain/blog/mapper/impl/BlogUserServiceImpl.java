package cn.lain.blog.mapper.impl;

import cn.lain.blog.domain.po.BlogUser;
import cn.lain.blog.mapper.BlogUserMapper;
import cn.lain.blog.mapper.BlogUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Component;

@Component
public class BlogUserServiceImpl extends ServiceImpl<BlogUserMapper, BlogUser> implements BlogUserService {
}
