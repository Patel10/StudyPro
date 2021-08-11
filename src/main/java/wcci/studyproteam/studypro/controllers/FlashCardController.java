package wcci.studyproteam.studypro.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import wcci.studyproteam.studypro.repositories.HashTagRepository;
import wcci.studyproteam.studypro.models.FlashCard;
import wcci.studyproteam.studypro.models.HashTag;
import wcci.studyproteam.studypro.repositories.FlashCardRepository;


import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController
public class FlashCardController {

    @Resource
    private FlashCardRepository flashCardRepo;

    @Resource
    private HashTagRepository hashTagRepo;

    @GetMapping("/api/flashCards")
    public Collection<FlashCard> getFlashCards() {
        return (Collection<FlashCard>) flashCardRepo.findAll();
    }

    @GetMapping("/api/flashCards/{flashCardId}")
    public FlashCard getFlashCard(@PathVariable Long flashCardId) {
        return flashCardRepo.findById(flashCardId).get();
    }


    @PostMapping("/api/flashCards/{id}/add-hashtag")
    public Optional<FlashCard> addHashTagToFlashCard(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newHashTag = new JSONObject(body);
        String hashTagTitle = newHashTag.getString("hashTagTitle");
        Optional<HashTag> hashTagToAddOpt = hashTagRepo.findByTitle(hashTagTitle);

        if (hashTagToAddOpt.isPresent()) {
            Optional<FlashCard> flashCardToAddHashTagToOpt = flashCardRepo.findById(id);
            FlashCard flashCardToAddHashTagTo = flashCardToAddHashTagToOpt.get();
            flashCardToAddHashTagTo.addHashTag(hashTagToAddOpt.get());
            flashCardRepo.save(flashCardToAddHashTagTo);
        }
        return flashCardRepo.findById(id);
    }

}






