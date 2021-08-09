package wcci.studyproteam.studypro.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;


@Entity
    public class HashTag {
        @Id
        @GeneratedValue
        private Long id;
        private String title;
        private String studentName;

        @ManyToMany(mappedBy = "hashTags")
        @JsonIgnore
        private Collection<FlashCard> flashCards;


        public HashTag() {
        }


        public Long getId() {
            return id;
        }

        public String getTitle() {
            return title;
        }

        public String getStudentName() {
            return studentName;
        }

        public HashTag(String title, String studentName, FlashCard... flashCards) {


            this.title = title;
            this.studentName = studentName;
this.flashCards= new ArrayList<FlashCard>(Arrays.asList(flashCards));

}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HashTag hashTag = (HashTag) o;
        return id.equals(hashTag.id);
    }


        @Override
        public int hashCode() {
            return Objects.hash(id);
        }

        }








