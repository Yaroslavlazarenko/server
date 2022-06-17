package com.example.control;

import java.util.List;
import com.example.classes.GetInformationObject;
import com.example.classes.CourseDatabase;
import com.example.classes.Course;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping({"/add"})
public class AddCompleteController {
    public AddCompleteController() {
    }

    @PostMapping({"/added"})
    public String addCompleteContributor(@RequestBody String jsonString) throws JsonProcessingException {
        GetInformationObject course =(new ObjectMapper().readValue(jsonString, GetInformationObject.class));
        CourseDatabase courses = new CourseDatabase();
        courses.load();
        courses.add(new Course(course.getCourseName(), course.getCourseCode(), course.getFaculty(), course.getNumbCourse(), course.getGroup(), new int[] {course.getHoursLectures(),course.getHoursPractical(),course.getHoursLaboratory()}, course.getNameTeacher(), List.of(course.getNameAssistants()) ));
        courses.save();
        return jsonString;
    }

}