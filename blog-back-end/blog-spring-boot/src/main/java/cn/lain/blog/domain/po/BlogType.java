package cn.lain.blog.domain.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class BlogType {

    /**
    * 主键
    */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
    * 类型名称
    */
    private String typeName;

    /**
     * 图标
     */
    private String icon;

    /**
    * 排序
    */
    private Integer orderNum;

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