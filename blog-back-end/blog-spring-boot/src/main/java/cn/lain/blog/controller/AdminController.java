package cn.lain.blog.controller;

import cn.lain.blog.domain.ResultData;
import cn.lain.blog.domain.req.UserLoginRequest;
import cn.lain.blog.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public ResultData<Boolean> userLogin(@RequestBody UserLoginRequest request) {
        return ResultData.success(adminService.userLogin(request.getUsername(), request.getPassword()));
    }

}
