package com.example.control;

import com.example.classes.CourseDatabase;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class EditController {
    public EditController() {
    }

    @GetMapping(
            value = {"/edit"},
            produces = {"application/json"}
    )
    public String editContributor(@RequestParam(required = false, defaultValue = "-1") String id, Model model) {
        CourseDatabase course = new CourseDatabase();
        course.load();
        if (Integer.parseInt(id) >= 0 && Integer.parseInt(id) < course.getCourseList().size()) {
            String dbObject = course.databaseObjectToJsonString(Integer.parseInt(id));
            model.addAttribute("dbObject", dbObject);
            return "edit";
        } else {
            return "error";
        }
    }
}