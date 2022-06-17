package com.example.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DeleteController {
    @RequestMapping(value = "/delete")
    public String index() {
        return "delete";
    }
}
