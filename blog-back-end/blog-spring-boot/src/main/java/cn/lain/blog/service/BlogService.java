package cn.lain.blog.service;

import cn.lain.blog.domain.vo.BlogVo;
import cn.lain.blog.domain.vo.TypeVo;

import java.util.List;

public interface BlogService {

    List<BlogVo> blogList(Integer typeId);

    BlogVo blogInfo(Integer id);

    List<TypeVo> typeList();

}
