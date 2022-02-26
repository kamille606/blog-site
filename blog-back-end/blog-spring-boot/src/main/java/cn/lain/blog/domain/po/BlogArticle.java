package cn.lain.blog.domain.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class BlogArticle {

    /**
    * 主键
    */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
    * 类型ID
    */
    private Integer typeId;

    /**
    * 标题
    */
    private String title;

    /**
    * 简介
    */
    private String introduce;

    /**
    * 内容
    */
    private String content;

    /**
    * 浏览量
    */
    private Integer viewCount;

    /**
     * 数据状态00删除01正常
     */
    private String status;

    /**
    * 修改时间
    */
    private Date gmtModify;

    /**
    * 创建时间
    */
    private Date gmtCreate;

}