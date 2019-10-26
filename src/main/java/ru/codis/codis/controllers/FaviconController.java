package ru.codis.codis.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FaviconController {

    @GetMapping("favicon.ico")
    @ResponseBody
    public void noFavicon() {
    }

    @GetMapping("undefined")
    @ResponseBody
    public void ds() {
    }
}
