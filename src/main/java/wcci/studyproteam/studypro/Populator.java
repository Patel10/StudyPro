package wcci.studyproteam.studypro;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private FlashCardRepository flashCardRepo;


    @Override
    public void run(String... args) throws Exception {

    }
}
