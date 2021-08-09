package wcci.studyproteam.studypro;

import org.springframework.data.repository.CrudRepository;
import wcci.studyproteam.studypro.models.HashTag;

import java.util.Optional;

public interface HashTagRepository extends CrudRepository<HashTag,Long> {
    Optional<HashTag>findByName(String hashTagName);
}
