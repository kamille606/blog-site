package cn.lain.blog.domain.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ArticleVo {
    /**
     * 主键
     */
    private Integer id;

    /**
     * 类型ID
     */
    private Integer typeId;

    /**
     * 类型名称
     */
    private String typeName;

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
     * 创建时间
     */
    private Date gmtCreate;

}
