package wcci.studyproteam.studypro.repositories;

import org.springframework.data.repository.CrudRepository;
import wcci.studyproteam.studypro.models.HashTag;

import java.util.Optional;

public interface HashTagRepository extends CrudRepository<HashTag,Long> {
    Optional<HashTag>findByTitle(String title);
}
