package wcci.studyproteam.studypro.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import wcci.studyproteam.studypro.models.FlashCard;
import wcci.studyproteam.studypro.models.Student;
import wcci.studyproteam.studypro.respositories.FlashCardRepository;


import javax.annotation.Resource;
import java.util.Collection;


@RestController
public class FlashCardController {

    @Resource
    private FlashCardRepository flashCardRepo;

    @GetMapping("/api/flashCards")
    public Collection<FlashCard> getFlashCards(){
    return (Collection<FlashCard>) flashCardRepo.findAll();}

    @GetMapping("/api/flashCards/{flashCardId}")
    public FlashCard getFlashCard(@PathVariable Long flashCardId){
        return flashCardRepo.findById(flashCardId).get();}
    }




