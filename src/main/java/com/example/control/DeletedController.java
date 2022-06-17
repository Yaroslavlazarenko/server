package com.example.control;

import com.example.classes.GetInformationObject;
import com.example.classes.CourseDatabase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/delete"})
public class DeletedController {
    public DeletedController() {
    }

    @PostMapping({"/deleted"})
    public String deleteContributor(@RequestBody String id) throws JsonProcessingException {
        GetInformationObject object = (new ObjectMapper()).readValue(id, GetInformationObject.class);
        CourseDatabase courseDatabase = new CourseDatabase();
        courseDatabase.load();
        if (object.getId() >= 0 && object.getId() < courseDatabase.getCourseList().size()) {
            courseDatabase.getCourseList().remove(object.getId());
            courseDatabase.save();
        }
        return id;
    }
}

