package com.example.classes;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.reflect.TypeToken;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class CourseDatabase {
    private List<Course> courseList;

    public CourseDatabase() {
        courseList = new ArrayList<>();
    }

    public boolean add(Course course) {
        return courseList.add(course);
    }

    public Course getCourseFromList(int index) {
        return courseList.get(index);
    }

    public List<Course> getCourseList() {
        return courseList;
    }

    public void save() {
        Gson gson = new GsonBuilder().create();
        JsonArray json = gson.toJsonTree(courseList).getAsJsonArray();
        try (FileWriter writer = new FileWriter("src/main/java/com/example/courseDatabase.json", false)) {
            writer.write(json.toString());
            writer.flush();
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }

    public void load() {
        this.clear();
        try {
            Reader reader = Files.newBufferedReader(Paths.get("src/main/java/com/example/courseDatabase.json"));
            this.courseList = new Gson().fromJson(reader, new TypeToken<List<Course>>() {
            }.getType());
            reader.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public String databaseObjectToJsonString(int index) {
        Gson gson = new Gson();
        return gson.toJson(this.courseList.get(index));
    }

    private void clear() {
        this.courseList.clear();
    }

    @Override
    public String toString() {
        return courseList.toString();
    }
}


