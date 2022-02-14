package cn.lain.blog.controller;

import cn.lain.blog.domain.ResultData;
import cn.lain.blog.domain.vo.BlogVo;
import cn.lain.blog.domain.vo.TypeVo;
import cn.lain.blog.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BlogController {

    private final BlogService blogService;

    @RequestMapping(value = "/blog/list/{id}", method = RequestMethod.GET)
    public ResultData<List<BlogVo>> blogList(@PathVariable("id") final Integer typeId) {
        List<BlogVo> blogVoList = blogService.blogList(typeId);
        return ResultData.success(blogVoList);
    }

    @RequestMapping(value = "/blog/info", method = RequestMethod.GET)
    public ResultData<BlogVo> blogInfo(@RequestParam("id") final Integer id) {
        BlogVo blogVo = blogService.blogInfo(id);
        return ResultData.success(blogVo);
    }

    @RequestMapping(value = "/type/list", method = RequestMethod.GET)
    public ResultData<List<TypeVo>> typeList() {
        List<TypeVo> typeVos = blogService.typeList();
        return ResultData.success(typeVos);
    }

}
