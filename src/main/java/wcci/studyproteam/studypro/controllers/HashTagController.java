package wcci.studyproteam.studypro.controllers;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import wcci.studyproteam.studypro.models.HashTag;
import wcci.studyproteam.studypro.repositories.HashTagRepository;


@RestController
@CrossOrigin
public class HashTagController {

    @Resource
    private HashTagRepository hashTagRepo;

    @GetMapping("/api/hashtags")
    public Collection<HashTag> getHashTags() {
        return (Collection<HashTag>) hashTagRepo.findAll();
    }

    @PostMapping("/api/add-hashtag")
    public Collection<HashTag> addHashTag(@RequestBody String body) throws JSONException {
        JSONObject newHashTag = new JSONObject(body);
        String hashTagTitle = newHashTag.getString("hashTagTitle");
        String hashTagName = newHashTag.getString("studentName");
        Optional<HashTag> hashTagToAddOpt = hashTagRepo.findByTitle(hashTagTitle);
        //add hashtag if not already in the database
        if (hashTagToAddOpt.isEmpty()) {
            HashTag hashTagToAdd = new HashTag(hashTagTitle,hashTagName);
            hashTagRepo.save(hashTagToAdd);
        }
        return (Collection<HashTag>) hashTagRepo.findAll();
    }
    }



