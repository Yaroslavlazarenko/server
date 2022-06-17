package com.example.classes;

import java.util.Arrays;
import java.util.List;

public class Course {
    private String courseName;
    private int courseCode;
    private String faculty;
    private int numbCourse;
    private String group;
    private int[] houresSubjectLecturesPracticalLaboratory;
    private String nameTeacher;
    private List<String> nameAssistants;

    public Course(String courseName, int courseCode, String faculty, int numbCourse, String group, int[] houresSubjectLecturesPracticalLaboratory, String nameTeacher, List<String> nameAssistants) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.faculty = faculty;
        this.numbCourse = numbCourse;
        this.group = group;
        this.houresSubjectLecturesPracticalLaboratory = houresSubjectLecturesPracticalLaboratory;
        this.nameTeacher = nameTeacher;
        this.nameAssistants = nameAssistants;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(int courseCode) {
        this.courseCode = courseCode;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public int getNumbCourse() {
        return numbCourse;
    }

    public void setNumbCourse(int numbCourse) {
        this.numbCourse = numbCourse;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public int[] getHouresSubjectLecturesPracticalLaboratory() {
        return houresSubjectLecturesPracticalLaboratory;
    }

    public void setHouresSubjectLecturesPracticalLaboratory(int[] houresSubjectLecturesPracticalLaboratory) {
        this.houresSubjectLecturesPracticalLaboratory = houresSubjectLecturesPracticalLaboratory;
    }

    public String getNameTeacher() {
        return nameTeacher;
    }

    public void setNameTeacher(String nameTeacher) {
        this.nameTeacher = nameTeacher;
    }

    public List<String> getNameAssistants() {
        return nameAssistants;
    }

    public void setNameAssistants(List<String> nameAssistants) {
        this.nameAssistants = nameAssistants;
    }

    @Override
    public String toString() {
        String[] names = new String[nameAssistants.size()];
        int i = 0;
        for (String s : nameAssistants)
            names[i++] = "\"" + s + "\"";
        return "{" +
                "\"courseName\":\"" + this.courseName + '\"' +
                ", \"courseCode\":" + this.courseCode +
                ", \"faculty\":\"" + this.faculty + '\"' +
                ", \"numbCourse\":" + this.numbCourse +
                ", \"group\":\"" + this.group + '\"' +
                ", \"houresSubjectLecturesPracticalLaboratory\":" + Arrays.toString(this.houresSubjectLecturesPracticalLaboratory) +
                ", \"nameTeacher\":\"" + this.nameTeacher + '\"' +
                ", \"nameAssistants\":" + Arrays.toString(names) +
                '}';
    }
}
