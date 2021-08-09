package wcci.studyproteam.studypro.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import wcci.studyproteam.studypro.models.Student;
import wcci.studyproteam.studypro.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
public class StudentController {
    @Resource
    private StudentRepository studentRepo;

    @GetMapping("/api/Students")
    public Collection<Student> getStudents() {
        return (Collection<Student>) studentRepo.findAll();}

        @GetMapping("/api/students/{studentId}")
    public Student getStudent(@PathVariable Long studentId) {

        return studentRepo.findById(studentId).get();
    }
}
