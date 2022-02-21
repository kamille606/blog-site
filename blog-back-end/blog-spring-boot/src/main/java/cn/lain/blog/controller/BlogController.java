package cn.lain.blog.controller;

import cn.lain.blog.domain.ResultData;
import cn.lain.blog.domain.vo.ArticleVo;
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

    @RequestMapping(value = "/article/list/{id}", method = RequestMethod.GET)
    public ResultData<List<ArticleVo>> articleList(@PathVariable("id") final Integer typeId) {
        return ResultData.success(blogService.articleList(typeId));
    }

    @RequestMapping(value = "/article/info", method = RequestMethod.GET)
    public ResultData<ArticleVo> articleInfo(@RequestParam("id") final Integer id) {
        return ResultData.success(blogService.articleInfo(id));
    }

    @RequestMapping(value = "/article/add", method = RequestMethod.POST)
    public ResultData<Integer> articleAdd(@RequestBody final ArticleVo articleVo) {
        return ResultData.success(blogService.articleAdd(articleVo));
    }

    @RequestMapping(value = "/article/update", method = RequestMethod.POST)
    public ResultData<Boolean> articleUpdate(@RequestBody final ArticleVo articleVo) {
        return ResultData.success(blogService.articleUpdate(articleVo));
    }

    @RequestMapping(value = "/type/list", method = RequestMethod.GET)
    public ResultData<List<TypeVo>> typeList() {
        return ResultData.success(blogService.typeList());
    }

}
