package wcci.studyproteam.studypro.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import wcci.studyproteam.studypro.models.CardContent;

import javax.annotation.Resource;
import java.util.Collection;

@RestController

public class CardContentController {

    @Resource
    private CardContentRepository cardContentRepo;

    @GetMapping("/api/cardContents")
    public Collection<CardContent> getcardContents(){
        return (Collection<CardContent>) cardContentRepo.findAll();
            }

    @GetMapping("/api/cardContents/{cardContentId}")
    public CardContent getCardContent(@PathVariable Long cardContentId) {
        return cardContentRepo.findById(cardContentId).get();
    }
}
