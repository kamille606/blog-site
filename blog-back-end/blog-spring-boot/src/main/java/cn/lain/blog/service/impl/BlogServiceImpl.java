package cn.lain.blog.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.lain.blog.domain.po.BlogArticle;
import cn.lain.blog.domain.po.BlogType;
import cn.lain.blog.domain.vo.BlogVo;
import cn.lain.blog.domain.vo.TypeVo;
import cn.lain.blog.mapper.BlogArticleService;
import cn.lain.blog.mapper.BlogTypeService;
import cn.lain.blog.service.BlogService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogTypeService typeService;
    private final BlogArticleService articleService;

    @Override
    public List<BlogVo> blogList(Integer typeId) {
        List<BlogType> typeList = typeService.list();
        Map<Integer, String> typeMap = typeList.stream().collect(
                Collectors.toMap(BlogType::getId, BlogType::getTypeName, (x1, x2) -> x1)
        );
        List<BlogArticle> blogList;
        if (typeMap.get(typeId) == null) {
            blogList = articleService.list();
        } else {
            blogList = articleService.list(
                    new LambdaQueryWrapper<BlogArticle>().eq(BlogArticle::getTypeId, typeId)
            );
        }
        List<BlogVo> blogVoList = BeanUtil.copyToList(blogList, BlogVo.class);
        blogVoList.forEach((s) -> s.setTypeName(typeMap.get(s.getTypeId())));
        return blogVoList;
    }

    @Override
    public BlogVo blogInfo(Integer id) {
        BlogArticle article = articleService.getById(id);
        BlogType type = typeService.getById(article.getTypeId());
        BlogVo blogVo = BeanUtil.copyProperties(article, BlogVo.class);
        blogVo.setTypeName(type.getTypeName());
        return blogVo;
    }

    @Override
    public List<TypeVo> typeList() {
        List<BlogType> typeList = typeService.list();
        return BeanUtil.copyToList(typeList, TypeVo.class);
    }

    public BlogVo blogOne() {
        BlogArticle blogArticle = articleService.getById(1);
        BlogType type = typeService.getOne(
                new LambdaQueryWrapper<BlogType>()
                        .eq(BlogType::getId, blogArticle.getTypeId()));
        BlogVo blogVo = BeanUtil.copyProperties(blogArticle, BlogVo.class);
        blogVo.setTypeName(type.getTypeName());
        return blogVo;
    }

}
