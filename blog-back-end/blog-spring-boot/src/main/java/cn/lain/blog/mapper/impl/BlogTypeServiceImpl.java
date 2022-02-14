package cn.lain.blog.mapper.impl;

import cn.lain.blog.domain.po.BlogType;
import cn.lain.blog.mapper.BlogTypeMapper;
import cn.lain.blog.mapper.BlogTypeService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Component;

@Component
public class BlogTypeServiceImpl extends ServiceImpl<BlogTypeMapper, BlogType> implements BlogTypeService {
}
