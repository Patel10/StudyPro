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
    private String title;
    private String content;
    private String note;



}
