package wcci.studyproteam.studypro;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import wcci.studyproteam.studypro.models.CardContent;
import wcci.studyproteam.studypro.models.FlashCard;
import wcci.studyproteam.studypro.models.HashTag;
import wcci.studyproteam.studypro.repositories.CardContentRepository;
import wcci.studyproteam.studypro.repositories.FlashCardRepository;
import wcci.studyproteam.studypro.repositories.HashTagRepository;
import wcci.studyproteam.studypro.models.Student;
import wcci.studyproteam.studypro.repositories.StudentRepository;


import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private FlashCardRepository flashCardRepo;
    @Resource
    private CardContentRepository cardContentRepo;
    @Resource
    private StudentRepository studentRepo;
    @Resource
    private HashTagRepository hashTagRepo;


    @Override
    public void run(String... args) throws Exception {


        FlashCard flashCard1 = new FlashCard("Charles Dickens", "Elijah Stewart", "Famous english author", "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
        FlashCard flashCard2 = new FlashCard("Earth", "Elijah Stewart", "Earth info", "/images/images.png");
        FlashCard flashCard3 = new FlashCard("PI", "Andrew Washington", "learn Pi get hall pass", "/images/images.png");
        FlashCard flashCard4 = new FlashCard("Make Peanut Butter and Jelly Sandwich", "Andrew Washington", "steps for sandwich", "/images/images.png");
        FlashCard flashCard5 = new FlashCard("Bullies", "Halima Smith", "stop bullies", "/images/images.png");
        FlashCard flashCard6 = new FlashCard("Spelling Class", "Halima Smith", "10 words rhyme with sock", "/images/images.png");

        flashCardRepo.save(flashCard1);
        flashCardRepo.save(flashCard2);
        flashCardRepo.save(flashCard3);
        flashCardRepo.save(flashCard4);
        flashCardRepo.save(flashCard5);
        flashCardRepo.save(flashCard6);

        CardContent card1 = new CardContent("Elijah Stewart", "Charles Dickens", "February 1812 – 9 June 1870) was an English writer and social critic. He created some of the world's best-known fictional characters " +
                "and is regarded by many as the greatest novelist of the Victorian era", "Essay Test", flashCard1);
        CardContent card2 = new CardContent("Elijah Stewart", "Earth", "The Earth's equator is an imaginary planetary line that is about 40,075 km (24,901 mi) long in circumference. The equator divides the planet into the Northern Hemisphere " +
                "and Southern Hemisphere and is located at 0 degrees latitude, the halfway line between the North Pole and South Pole.[1]", "for geography test", flashCard2);
        CardContent card3 = new CardContent("Andrew Washington", "PI", "The number π -paɪ; spelled out as pi- is a mathematical constant, approximately " +
                "equal to 3.14159.", "Math class - get hall pass if i know this", flashCard3);
        CardContent card4 = new CardContent("Andrew Washington", "Make Peanut Butter and Jelly Sandwich", "Step 1: Gather Your Ingredients for the Sandwich. ...\n" +
                "Step 2: Put Gloves on (optional) ...\n" +
                "Step 3: Pull Out Two Slices of Bread. ...\n" +
                "Step 4: Open Peanut Butter and Jelly. ...\n" +
                "Step 5: Spread the Peanut Butter Onto One Slice of Bread. ...\n" +
                "Step 6: Spread the Jelly Onto the Other Slice of Bread.", "Health Class", flashCard4);
        CardContent card5 = new CardContent("Halima Smith", "Bullies", "The best way for me to stop bullies is that I will tell my teacher and my " +
                "mother.  I will not let the bully make me fight them.  I don't like bullies ", "stop bullies", flashCard5);
        CardContent card6 = new CardContent("Halima Smith", "Spelling Class", "sock, lock, stock, mock, rock, dock, knock, flock, shock, " +
                "block, clock", "words that rhyme with sock", flashCard6);

        cardContentRepo.save(card1);
        cardContentRepo.save(card2);
        cardContentRepo.save(card3);
        cardContentRepo.save(card4);
        cardContentRepo.save(card5);
        cardContentRepo.save(card6);
        Student student1 = new Student("Halima smith", "4");
        Student student2 = new Student("Andrew Washington", "6");
        Student student3 = new Student("Elijah Stewart", "9");

        studentRepo.save(student1);
        studentRepo.save(student2);
        studentRepo.save(student3);


        HashTag hashTag1 = new HashTag("Charles Dickens", "Elijah Stewart");
        HashTag hashTag2 = new HashTag("Earth", "Elijah Stewart");
        HashTag hashTag3 = new HashTag("PI", "Andrew Washington");
        HashTag hashTag4 = new HashTag("Make Peanut Butter and Jelly Sandwich", "Andrew Washington");
        HashTag hashTag5 = new HashTag("Bullies", "Halima Smith");
        HashTag hashTag6 = new HashTag("Spelling Class", "Halima Smith");

        hashTagRepo.save(hashTag1);
        hashTagRepo.save(hashTag2);
        hashTagRepo.save(hashTag3);
        hashTagRepo.save(hashTag4);
        hashTagRepo.save(hashTag5);
        hashTagRepo.save(hashTag6);

    }
}
