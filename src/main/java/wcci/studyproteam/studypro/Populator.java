package wcci.studyproteam.studypro;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import wcci.studyproteam.studypro.models.CardContent;
import wcci.studyproteam.studypro.repositories.CardContentRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

//    @Resource
//    private FlashCardRepository flashCardRepo;
@Resource
private CardContentRepository cardContentRepo;



    @Override
    public void run(String... args) throws Exception {

        CardContent card1 = new CardContent("Charles Dickens", "February 1812 – 9 June 1870) was an English writer and social critic. He created some of the world's best-known fictional characters " +
                "and is regarded by many as the greatest novelist of the Victorian era", "Essay Test", "Elijah Stewart");
        CardContent card2 = new CardContent("Earth", "The Earth's equator is an imaginary planetary line that is about 40,075 km (24,901 mi) long in circumference. The equator divides the planet into the Northern Hemisphere " +
                "and Southern Hemisphere and is located at 0 degrees latitude, the halfway line between the North Pole and South Pole.[1]", "For geography test", "Elijah Stewart");
        CardContent card3 = new CardContent("Pi", "The number π -paɪ; spelled out as pi- is a mathematical constant, approximately " +
                "equal to 3.14159.", "Math - bring pie for pi day - this Wed", "Andrew Washington");
        CardContent card4 = new CardContent("Nutrition Class", "\n" +
                "How to Make a Peanut Butter and Jelly Sandwich!\n" +
                "Step 1: Gather Your Ingredients for the Sandwich. ...\n" +
                "Step 2: Put Gloves on (optional) ...\n" +
                "Step 3: Pull Out Two Slices of Bread. ...\n" +
                "Step 4: Open Peanut Butter and Jelly. ...\n" +
                "Step 5: Spread the Peanut Butter Onto One Slice of Bread. ...\n" +
                "Step 6: Spread the Jelly Onto the Other Slice of Bread.", "How to make your favorite snack - for Mrs Jones", "Andrew Washington");
        CardContent card5 = new CardContent("Bullies", "The best way for me to stop bullies is that I will tell my teacher and my " +
                "mother.  I will not let the bully make me fight them.  I don't like bullies ", "how to deal with bullies", "Halima Smith");
        CardContent card6 = new CardContent("Spelling", "sock, lock, stock, mock, rock, dock, knock, flock, shock, " +
                "block, clock", "Rhyming with sock", "Halima Smith");

        CardContentRepo.save(card1);
        CardContentRepo.save(card2);
        CardContentRepo.save(card3);
        CardContentRepo.save(card4);
        CardContentRepo.save(card5);
        CardContentRepo.save(card6);

    }
}
