package wcci.studyproteam.studypro.repositories;

import org.springframework.data.repository.CrudRepository;
import wcci.studyproteam.studypro.models.Student;

import java.util.Optional;

public interface StudentRepository extends CrudRepository<Student,Long> {
    Optional<Student> findByStudentName(String studentName);
}
