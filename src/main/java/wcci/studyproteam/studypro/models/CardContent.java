package wcci.studyproteam.studypro.models;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class CardContent {
    @Id
    @GeneratedValue
    private Long id;
    private String studentName;
    @Lob
    private String title;
    @Lob
    private String info;
    private String note;

    @ManyToOne
    private FlashCard flashCard;


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getInfo() {
        return info;
    }

    public String getNote() {
        return note;
    }

    public String getStudentName() {
        return studentName;
    }

    public CardContent() {

    }

    public CardContent(String studentName, String title, String info, String note) {
        this.studentName = studentName;
        this.title = title;
        this.info = info;
        this.note = note;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CardContent that = (CardContent) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

