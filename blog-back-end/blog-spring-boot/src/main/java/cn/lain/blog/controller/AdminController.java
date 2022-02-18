package cn.lain.blog.controller;

import cn.lain.blog.domain.ResultData;
import cn.lain.blog.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public ResultData<Boolean> userLogin(@RequestParam("username") final String username,
                                         @RequestParam("password") final String password) {
        return ResultData.success(adminService.userLogin(username, password));
    }

}
