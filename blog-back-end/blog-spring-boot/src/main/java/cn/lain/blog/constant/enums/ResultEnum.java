package cn.lain.blog.constant.enums;

import lombok.Getter;

@Getter
public enum ResultEnum {

    SUCCESS(1000, "请求成功"),
    ERROR(9000, "请求失败"),
    SYSTEM_ERROR(2000, "系统异常"),
    BUSINESS_ERROR(3000, "业务异常"),

    ;

    private final int code;
    private final String msg;

    ResultEnum(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

}
