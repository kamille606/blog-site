package cn.lain.blog.domain.vo;

import lombok.Data;

@Data
public class TypeVo {

    /**
     * 主键
     */
    private Integer id;

    /**
     * 类型名称
     */
    private String typeName;

    /**
     * 图标
     */
    private String icon;

}
