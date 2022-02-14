package cn.lain.blog.mapper;

import cn.lain.blog.domain.po.BlogArticle;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BlogArticleMapper extends BaseMapper<BlogArticle> {

}