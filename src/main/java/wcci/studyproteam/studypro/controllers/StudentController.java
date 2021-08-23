package wcci.studyproteam.studypro.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import wcci.studyproteam.studypro.models.FlashCard;
import wcci.studyproteam.studypro.models.Student;
import wcci.studyproteam.studypro.repositories.StudentRepository;
import wcci.studyproteam.studypro.repositories.FlashCardRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
public class StudentController {
    @Resource
    private StudentRepository studentRepo;

    @Resource
    private FlashCardRepository flashCardRepo;

    @GetMapping("/api/Students")
    public Collection<Student> getStudents() {
        return (Collection<Student>) studentRepo.findAll();
    }

    @GetMapping("/api/students/{studentId}")
    public Student getStudent(@PathVariable Long studentId) {

        return studentRepo.findById(studentId).get();
    }
    @PostMapping("/api/students/add-studentName")
    public Student addStudentNameToStudent(@RequestBody String body) throws JSONException {
        JSONObject newStudentName = new JSONObject(body);
        String StudentName = newStudentName.getString("StudentName");
        Optional<Student> tempStudent = studentRepo.findByStudentName(StudentName);
        Student tempStudentName ;
        if (tempStudent.isEmpty()){
            tempStudentName = new Student(StudentName,"6");

        }
        else {
            tempStudentName = tempStudent.get();
        }

        studentRepo.save(tempStudentName);

        return tempStudentName;
    }
}
