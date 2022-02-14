package cn.lain.blog.mapper.impl;

import cn.lain.blog.domain.po.BlogArticle;
import cn.lain.blog.mapper.BlogArticleMapper;
import cn.lain.blog.mapper.BlogArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Component;

@Component
public class BlogArticleServiceImpl extends ServiceImpl<BlogArticleMapper, BlogArticle> implements BlogArticleService {
}
