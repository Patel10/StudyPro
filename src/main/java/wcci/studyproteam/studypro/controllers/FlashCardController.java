package wcci.studyproteam.studypro.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import wcci.studyproteam.studypro.repositories.HashTagRepository;
import wcci.studyproteam.studypro.models.FlashCard;
import wcci.studyproteam.studypro.models.HashTag;
import wcci.studyproteam.studypro.models.Student;
import wcci.studyproteam.studypro.repositories.FlashCardRepository;
import wcci.studyproteam.studypro.repositories.StudentRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;


@RestController
public class FlashCardController {

    @Resource
    private FlashCardRepository flashCardRepo;

    @Resource
    private HashTagRepository hashTagRepo;

    @Resource
    private StudentRepository studentRepo;

    @GetMapping("/api/flashCards")
    public Collection<FlashCard> getFlashCards() {
        return (Collection<FlashCard>) flashCardRepo.findAll();
    }

    @GetMapping("/api/flashCards/{flashCardId}")
    public FlashCard getFlashCard(@PathVariable Long flashCardId) {
        return flashCardRepo.findById(flashCardId).get();
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashTitleToFlashCard(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardTitle = newFlashCard.getString("FlashCardTitle");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);

        return tempFlashCard;
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashInfoToFlashCard(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardInfo = newFlashCard.getString("FlashCardInfo");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);

        return tempFlashCard;
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashCardNameToFlashCard(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardName = newFlashCard.getString("FlashCardName");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);

        return tempFlashCard;
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashCardToFlashImg(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardImg = newFlashCard.getString("FlashCardImg");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);
        return tempFlashCard;
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashCardDescriptionToFlashCard(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardDescription = newFlashCard.getString("FlashCardDescription");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);
        return tempFlashCard;
    }

    @PostMapping("/api/flashCards/add-flashCard")
    public FlashCard addFlashCardStudentNameToFlashCard(@RequestBody String body) throws JSONException {
        JSONObject newFlashCard = new JSONObject(body);
        String flashCardStudentName = newFlashCard.getString("FlashCardStudentName");
        FlashCard tempFlashCard = new FlashCard();
        flashCardRepo.save(tempFlashCard);
        return tempFlashCard;
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






