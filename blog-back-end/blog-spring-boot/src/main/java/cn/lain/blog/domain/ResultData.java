package cn.lain.blog.domain;

import cn.lain.blog.constant.enums.ResultEnum;
import lombok.Data;

import java.io.Serializable;

@Data
public class ResultData<T> implements Serializable {

    private int code;
    private String msg;
    private T data;

    private ResultData() {

    }

    public ResultData(int code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public ResultData(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public ResultData(ResultEnum resultEnum, T data) {
        this.code = resultEnum.getCode();
        this.msg = resultEnum.getMsg();
        this.data = data;
    }

    public ResultData(ResultEnum resultEnum) {
        this.code = resultEnum.getCode();
        this.msg = resultEnum.getMsg();
    }

    public static <T> ResultData<T> success(T data) {
        return new ResultData<>(ResultEnum.SUCCESS, data);
    }

}
