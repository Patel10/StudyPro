package wcci.studyproteam.studypro.repositories;

import org.springframework.data.repository.CrudRepository;
import wcci.studyproteam.studypro.models.Student;

public interface StudentRepository extends CrudRepository<Student,Long> {
}
