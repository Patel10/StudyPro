package wcci.studyproteam.studypro.models;

import java.util.Collection;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity
public class Student {
    @Id
    @GeneratedValue
    private Long id;
    private String studentName;
    private String grade;

    @OneToMany(mappedBy = "student")
    private Collection<FlashCard> flashCards;

    public Collection<FlashCard> getFlashCards() {
        return flashCards;
    }

    public Student() {
    }

    public Long getId() {
        return id;

    }

    public String getStudentName() {

        return studentName;
    }

    public String getGrade() {
        return grade;
    }


    public Student(String studentName, String grade) {
        this.studentName = studentName;
        this.grade = grade;

    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        Student student = (Student) o;
        return id.equals(student.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}


      







