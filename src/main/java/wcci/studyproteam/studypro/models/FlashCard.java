package wcci.studyproteam.studypro.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import javax.persistence.Entity;
import javax.persistence.*;
import java.util.*;

@Entity
public class FlashCard {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String description;
    private String studentName;
    private String image;

    @OneToMany(mappedBy = "flashCard")

    private Collection<CardContent> cardContents;
    @ManyToMany
    private Set<HashTag> hashTags;
    @ManyToOne
    @JsonIgnore
    private Student student;

    public Student getStudent() {
        return student;
    }

    public Long getId() {

        return id;
    }

    public String getTitle() {

        return title;
    }


    public String getDescription() {

        return description;
    }

    public String getStudentName() {

        return studentName;
    }
    public String getImage() {
        return image;
    }

    public FlashCard() {

    }

    public Collection<CardContent> getCardContents() {
        return cardContents;
    }

    public Set<HashTag> getHashTags() {
        return hashTags;
    }

    public FlashCard(String title, String studentName, String description,String image) {
        this.title = title;
        this.studentName = studentName;
        this.description = description;
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FlashCard subject = (FlashCard) o;
        return id.equals(subject.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


    public void addHashTag(HashTag hashTag) {
        hashTags.add(hashTag);
    }
}

