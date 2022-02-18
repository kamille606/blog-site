package cn.lain.blog.mapper;

import cn.lain.blog.domain.po.BlogUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BlogUserMapper extends BaseMapper<BlogUser> {
}
