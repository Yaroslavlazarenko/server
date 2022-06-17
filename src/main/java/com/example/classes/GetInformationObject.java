package com.example.classes;

import java.util.Arrays;
import java.util.List;

public class GetInformationObject {
    private String courseName;
    private int courseCode;
    private String faculty;
    private int numbCourse;
    private String group;
    private int hoursLectures;
    private int hoursPractical;
    private int hoursLaboratory;
    private String nameTeacher;
    private String nameAssistants;
    private int id;

    public GetInformationObject(){
    }

    public GetInformationObject(String courseName, int courseCode, String faculty, int numbCourse, String group, int hoursLectures, int hoursPractical, int hoursLaboratory, String nameTeacher, String nameAssistants, int id) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.faculty = faculty;
        this.numbCourse = numbCourse;
        this.group = group;
        this.hoursLectures = hoursLectures;
        this.hoursPractical = hoursPractical;
        this.hoursLaboratory = hoursLaboratory;
        this.nameTeacher = nameTeacher;
        this.nameAssistants = nameAssistants;
        this.id = id;
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

    public int getHoursLectures() {
        return hoursLectures;
    }

    public void setHoursLectures(int hoursLectures) {
        this.hoursLectures = hoursLectures;
    }

    public int getHoursPractical() {
        return hoursPractical;
    }

    public void setHoursPractical(int hoursPractical) {
        this.hoursPractical = hoursPractical;
    }

    public int getHoursLaboratory() {
        return hoursLaboratory;
    }

    public void setHoursLaboratory(int hoursLaboratory) {
        this.hoursLaboratory = hoursLaboratory;
    }

    public String getNameTeacher() {
        return nameTeacher;
    }

    public void setNameTeacher(String nameTeacher) {
        this.nameTeacher = nameTeacher;
    }

    public String getNameAssistants() {
        return nameAssistants;
    }

    public void setNameAssistants(String nameAssistants) {
        this.nameAssistants = nameAssistants;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "GetInformationObject{" +
                "courseName='" + courseName + '\'' +
                ", courseCode='" + courseCode + '\'' +
                ", faculty='" + faculty + '\'' +
                ", numbCourse=" + numbCourse +
                ", group='" + group + '\'' +
                ", hoursLectures=" + hoursLectures +
                ", hoursPractical=" + hoursPractical +
                ", hoursLaboratory=" + hoursLaboratory +
                ", nameTeacher='" + nameTeacher + '\'' +
                ", nameAssistants='" + nameAssistants + '\'' +
                '}';
    }
}
