package cn.lain.blog.domain.po;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import lombok.Data;

import java.util.Date;

@Data
public class BlogUser {

    /**
     * 主键
     */
    @TableId
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
    @TableLogic(value = "01", delval = "00")
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
