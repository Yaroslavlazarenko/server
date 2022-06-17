package com.example.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebController {
    @RequestMapping({"/admin"})
    public String greetingController() {
        return "index";
    }

    @RequestMapping(value = "/add")
    public String index() {
        return "add";
    }

    @RequestMapping(value = "/index")
    public String redirect() {
        return "index";
    }
}
