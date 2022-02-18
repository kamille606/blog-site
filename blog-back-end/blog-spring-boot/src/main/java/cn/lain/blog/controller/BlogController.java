package cn.lain.blog.controller;

import cn.lain.blog.domain.ResultData;
import cn.lain.blog.domain.vo.BlogVo;
import cn.lain.blog.domain.vo.TypeVo;
import cn.lain.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class BlogController {

    private final BlogService blogService;

    @RequestMapping(value = "/blog/list/{id}", method = RequestMethod.GET)
    public ResultData<List<BlogVo>> blogList(@PathVariable("id") final Integer typeId) {
        return ResultData.success(blogService.blogList(typeId));
    }

    @RequestMapping(value = "/blog/info", method = RequestMethod.GET)
    public ResultData<BlogVo> blogInfo(@RequestParam("id") final Integer id) {
        return ResultData.success(blogService.blogInfo(id));
    }

    @RequestMapping(value = "/type/list", method = RequestMethod.GET)
    public ResultData<List<TypeVo>> typeList() {
        return ResultData.success(blogService.typeList());
    }

}
