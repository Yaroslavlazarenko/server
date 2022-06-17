package com.example.control;

import com.example.classes.GetInformationObject;
import com.example.classes.CourseDatabase;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/edit"})
public class EditedController {
    public EditedController() {
    }

    @PostMapping({"/edited"})
    public String editedController(@RequestBody String info) throws JsonProcessingException {
        GetInformationObject obj = (new ObjectMapper()).readValue(info, GetInformationObject.class);
        CourseDatabase courseDatabase = new CourseDatabase();
        courseDatabase.load();
        if (obj.getId() >= 0 && obj.getId() < courseDatabase.getCourseList().size()) {
            courseDatabase.getCourseList().get(obj.getId()).setCourseName(obj.getCourseName());
            courseDatabase.getCourseList().get(obj.getId()).setCourseCode(obj.getCourseCode());
            courseDatabase.getCourseList().get(obj.getId()).setFaculty(obj.getFaculty());
            courseDatabase.getCourseList().get(obj.getId()).setNumbCourse(obj.getNumbCourse());
            courseDatabase.getCourseList().get(obj.getId()).setGroup(obj.getGroup());
            courseDatabase.getCourseList().get(obj.getId()).setHouresSubjectLecturesPracticalLaboratory(new int[]{obj.getHoursLectures(), obj.getHoursPractical(), obj.getHoursLaboratory()});
            courseDatabase.getCourseList().get(obj.getId()).setNameTeacher(obj.getNameTeacher());
            courseDatabase.getCourseList().get(obj.getId()).setNameAssistants(List.of(obj.getNameAssistants()));
            courseDatabase.save();
        }

        return info;
    }
}
