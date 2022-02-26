package cn.lain.blog.service.impl;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.bean.copier.CopyOptions;
import cn.lain.blog.constant.BaseConst;
import cn.lain.blog.domain.po.BlogArticle;
import cn.lain.blog.domain.po.BlogType;
import cn.lain.blog.domain.vo.ArticleVo;
import cn.lain.blog.domain.vo.TypeVo;
import cn.lain.blog.mapper.BlogArticleService;
import cn.lain.blog.mapper.BlogTypeService;
import cn.lain.blog.service.BlogService;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogTypeService typeService;
    private final BlogArticleService articleService;

    @Override
    public List<ArticleVo> articleList(final Integer typeId) {
        var typeList = typeService.list();
        var typeMap = typeList.stream().collect(
                Collectors.toMap(BlogType::getId, BlogType::getTypeName, (x1, x2) -> x1)
        );
        var blogList = articleService.list(
                new LambdaQueryWrapper<BlogArticle>()
                        .eq(typeMap.get(typeId) != null, BlogArticle::getTypeId, typeId)
                        .eq(BlogArticle::getStatus, BaseConst.NORMAL)
        );
        var articleVoList = BeanUtil.copyToList(
                blogList, ArticleVo.class, CopyOptions.create().setIgnoreProperties("content"));
        articleVoList.forEach(s -> s.setTypeName(typeMap.get(s.getTypeId())));
        return articleVoList;
    }

    @Override
    public ArticleVo articleInfo(final Integer id) {
        var article = articleService.getOne(
                new LambdaQueryWrapper<BlogArticle>()
                        .eq(BlogArticle::getId, id)
                        .eq(BlogArticle::getStatus, BaseConst.NORMAL)
        );
        var type = typeService.getById(article.getTypeId());
        var articleVo = BeanUtil.copyProperties(article, ArticleVo.class);
        articleVo.setTypeName(type.getTypeName());
        return articleVo;
    }

    @Override
    public List<TypeVo> typeList() {
        return BeanUtil.copyToList(typeService.list(), TypeVo.class);
    }

    @Override
    public Integer articleAdd(ArticleVo article) {
        var blogArticle = BeanUtil.copyProperties(article, BlogArticle.class);
        return articleService.save(blogArticle) ? blogArticle.getId() : 0;
    }

    @Override
    public Boolean articleUpdate(ArticleVo article) {
        var blogArticle = BeanUtil.copyProperties(article, BlogArticle.class);
        return articleService.updateById(blogArticle);
    }

    @Override
    public Boolean articleDelete(Integer id) {
        return articleService.updateById(BlogArticle.builder()
                .id(id).status(BaseConst.DELETE).build());
    }

}
