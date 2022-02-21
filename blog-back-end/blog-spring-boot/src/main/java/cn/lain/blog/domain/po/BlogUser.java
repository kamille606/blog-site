package cn.lain.blog.domain.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.util.Date;

@Data
public class BlogUser {

    /**
     * 主键
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

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
