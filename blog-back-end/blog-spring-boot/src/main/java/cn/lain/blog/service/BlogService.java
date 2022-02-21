package cn.lain.blog.service;

import cn.lain.blog.domain.vo.ArticleVo;
import cn.lain.blog.domain.vo.TypeVo;

import java.util.List;

public interface BlogService {

    List<ArticleVo> articleList(Integer typeId);

    ArticleVo articleInfo(Integer id);

    List<TypeVo> typeList();

    Integer articleAdd(ArticleVo article);

    Boolean articleUpdate(ArticleVo article);

}
