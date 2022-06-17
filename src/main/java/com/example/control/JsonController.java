package com.example.control;

import com.example.classes.CourseDatabase;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class JsonController {
    @GetMapping("/json")
    public String getJSON2() {
        CourseDatabase courseDatabase = new CourseDatabase();
        courseDatabase.load();
        return courseDatabase.toString();
    }
}
