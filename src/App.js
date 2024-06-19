import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Article } from "./components/article/Article";
import { Category } from "./components/pages/Category";

const articles = [
  {
    id: 1,
    title:
      "The Great Banana Heist: How a Group of Men Pulled Off the Fruitiest Bank Robbery in History",
    imageUrl: "https://i.imgur.com/lYNmk1H.png",
    time: 1718413771035,
    category: "Crime",
    author: "Chat GPT",
    content:
      "In a bizarre turn of events that has left both law enforcement and fruit vendors baffled, a group of audacious thieves managed to pull off a daring bank heist using nothing but bananas. Yes, you read that right—bananas. <h4>The Heist</h4>The scene unfolded at the First National Bank of Fruittown early Monday morning. As the bank opened for business, four men, each donning tropical shirts and flip-flops, strolled in carrying what appeared to be duffel bags. Onlookers assumed they were tourists—until the men brandished their weapons.<br><br>“They were bananas!” exclaimed Wanda Peel, a bewildered bank teller. “I thought it was some kind of prank, but then they started shouting commands.”<br><br>The leader of the group, dubbed \"Banana Joe\" by the media, reportedly peeled back his disguise and waved his banana menacingly at the bank staff. “Nobody move! This is a stick-up!” he yelled, shaking his potassium-packed weapon.<h4>The Standoff</h4>Police arrived on the scene within minutes, surrounding the bank and setting up a perimeter. Negotiator Sergeant Mike Berry, struggling to keep a straight face, approached the bank via loudspeaker.<br><br>“Come out with your hands up! And, uh, drop the bananas,” he commanded.<br><br>But Banana Joe was unfazed. “You'll never take us alive! We have hostages and plenty of ripe ammunition,” he retorted.<h4>The Escape</h4>As the standoff stretched into its second hour, tensions—and potassium levels—were high. Meanwhile, inside the bank, the robbers kept their hostages in check with threats of slipping on banana peels strategically placed around the vault.<br><br>Then, in a twist worthy of a Hollywood script, the robbers made their escape. Witnesses reported seeing a large delivery truck from “Tropical Treats” pull up to the bank's rear entrance. Moments later, the thieves emerged, camouflaged as delivery men, wheeling out crates labeled “Caution: Highly Perishable” and blending into the lunchtime crowd.<h4>The Aftermath</h4>Police are still on the lookout for the fruity felons. “We've got every smoothie bar and fruit stand in the city under surveillance,” said Detective Clementine Orange. “These guys might be slippery, but we'll catch them.”<br><br>While the exact amount of money stolen remains undisclosed, sources inside the bank confirm that the thieves made off with more than just chump change. “They took everything—cash, bonds, even the free lollipops at the counter,” said a traumatized customer.<h4>Public Reaction</h4>Reactions from the public have been a mix of amusement and disbelief. “I always knew bananas were versatile, but this is bananas!” quipped local resident Anna Split.<br><br>The internet, of course, had a field day. Memes of “armed and dangerous bananas” flooded social media, with hashtags like #BananaHeist and #FruitFelons trending worldwide. One particularly popular meme featured the iconic scene from “Pulp Fiction,” with John Travolta and Samuel L. Jackson replaced by bananas holding up the bank.<h4>The Investigation</h4>Authorities have urged anyone with information about the Banana Bandits to come forward. “We're appealing to the public. If you've seen anyone suspicious buying large quantities of bananas or googling 'how to rob a bank with fruit,' let us know,” said Sergeant Berry.<br><br>Despite the oddity of the crime, officials remain hopeful. “They may have a-peel, but their slippery tactics won't last forever,” concluded Detective Orange with a wink.<br><br>As the city of Fruittown recovers from the shock of the Great Banana Heist, one thing is certain: this is one for the history books—and the recipe books.",
  },
  {
    id: 2,
    title: "Criminal Activity: A Thriving Hobby for the Modern Citizen",
    imageUrl: "https://i.imgur.com/xpa1D0F.png",
    time: 1718413771500,
    category: "Crime",
    author: "Chat GPT",
    content:
      "In an era where hobbies like stamp collecting, bird watching, and knitting have become passé, it's refreshing to see that crime is making a triumphant comeback as the preferred pastime of the modern citizen. With its blend of excitement, unpredictability, and community engagement, criminal activity is proving to be the perfect outlet for those seeking to add a little spice to their otherwise monotonous lives.<h3>The Thrill of the Heist: Gym Memberships, Move Over!</h3>Why sweat it out in a gym when you can experience a full-body workout while participating in a good old-fashioned heist? Parkour skills are honed as would-be thieves scale buildings and leap over fences, while the heart-pounding adrenaline rush provides an unparalleled cardio experience. Forget spin classes; outrunning the police is the new way to get your heart rate up.<h3>Networking Opportunities: Forget LinkedIn, Think Crime Inc.</h3>For those looking to expand their professional network, crime offers unparalleled opportunities. From collaborating with fellow burglars to negotiating with fences, the criminal underworld is a vibrant community teeming with potential contacts. After all, it's not about what you know but who you know—and knowing a skilled getaway driver or a savvy lawyer can be more beneficial than any LinkedIn connection.<h3>Financial Planning: Embrace the Gig Economy</h3>With traditional employment becoming increasingly unreliable, many are turning to crime as a viable gig economy option. Who needs a steady paycheck when you can supplement your income with a little creative financial redistribution? The flexibility is unmatched—you set your own hours and can choose between a variety of “projects,” from petty theft to elaborate cons. Plus, there's the added bonus of never having to worry about tax season again!<h3>Education and Skill Development: Learn By Doing</h3>Forget formal education; crime is the ultimate experiential learning opportunity. Aspiring criminals can gain hands-on experience in a variety of fields, from advanced lock-picking techniques to sophisticated hacking skills. Why waste time in a classroom when the streets offer a far more dynamic learning environment? And with the recent surge in online tutorials, becoming a master forger or a cyber-criminal has never been more accessible.<h3>Community Involvement: A New Form of Civic Engagement</h3>Crime fosters a unique sense of community. Neighbors band together, sharing tips and tricks of the trade, creating a sense of camaraderie that is often lacking in today's disconnected world. There's nothing quite like the bond formed between partners in crime. And let's not forget the way crime brings neighborhoods together—after all, nothing unites a community quite like the shared goal of outsmarting law enforcement.<h3>The Ethical Perspective: A New Moral Compass</h3>In an age of increasing economic disparity and social injustice, some argue that crime is simply a form of grassroots activism. Robin Hood had the right idea, didn't he? Redistributing wealth from the greedy 1% to the needy (or at least to oneself) can be seen as a form of social justice. Why wait for slow-moving policy changes when you can take matters into your own hands?<h3>Conclusion: The Future of Crime</h3> As crime continues to evolve, it is clear that it offers a wealth of opportunities for those brave enough to embrace it. Whether you're seeking thrills, financial gain, or a sense of community, crime has something for everyone. So, the next time you're looking for a new hobby, consider the excitement and rewards of a life of crime. Just remember to keep an eye out for the long arm of the law—it's all part of the fun!",
  },
  {
    id: 3,
    title:
      "Elder Statesman or Ancient Relic? The Hilarious Reign of President Methuselah",
    imageUrl: "https://i.imgur.com/7gyhjyn.png",
    time: 1718413771501,
    category: "Politics",
    author: "Chat GPT",
    content:
      "In the whimsical land of Gerontopia, the populace has managed to elect a leader so venerable, so ancient, that some suspect he might have been present at the invention of fire. President Methuselah, at a sprightly 123 years young, has become a national treasure and a walking testament to the wonders of modern medicine—or perhaps to the sheer power of stubbornness.<h3>A Leader With a Historical Perspective</h3>President Methuselah's age grants him an unparalleled historical perspective. He's the only head of state who personally recalls the signing of the Treaty of Versailles. His recollections of attending Napoleon's coronation have become legendary, especially the part where he claims Napoleon borrowed his pen.<h3>Cabinet Meetings or Bedtime Stories?</h3>Cabinet meetings under President Methuselah are a sight to behold. Ministers frequently gather around his rocking chair, not to discuss policy, but to hear his enthralling tales of the pre-electricity era. It's said that every major decision is prefaced with, \"Back in my day,\" followed by a rambling story that may or may not end with an actual point.<h3>A Unique Approach to Modern Technology</h3>Technology presents a particular challenge for President Methuselah. His aides have tried, in vain, to teach him how to use a smartphone. After several failed attempts, including one memorable incident where he mistook the device for a chocolate bar, the staff resorted to printing out emails and tweets for him. To this day, he believes “the Twitter” is a species of bird that delivers messages.<h3>Revolutionary Policies from Yesteryear</h3>President Methuselah's policy initiatives are a nostalgic nod to the past. His economic plan includes the revival of the barter system, and he has proposed that horse-drawn carriages replace cars to reduce emissions. His education reform advocates for a return to the one-room schoolhouse model, complete with slate tablets and dunce caps.<h3>Diplomatic Relations: A Blast from the Past</h3>Diplomatic relations have taken a quaint turn under President Methuselah. He insists on sending handwritten letters to other world leaders, delivered by carrier pigeon. At international summits, he often regales attendees with his firsthand account of World War I trench warfare, leaving them both bemused and bewildered.<h3>Physical Fitness and Public Appearances</h3>Despite his age, President Methuselah insists on maintaining a rigorous physical fitness routine, which involves daily naps and gentle strolls around the presidential garden with his trusty walker, which he affectionately calls “Speedy.” Public appearances are kept brief to accommodate his 7 PM bedtime, and speeches are often punctuated with long pauses as he drifts off mid-sentence.<h3>The Presidential Succession Crisis</h3>The question of presidential succession is a pressing one, given that President Methuselah's vice president is a mere 98 years old. Some suggest it might be time for Gerontopia to consider a younger, more vibrant leadership, perhaps someone in their 80s. In the meantime, the nation remains entranced by the enduring (if somewhat doddering) presence of its beloved elder statesman.<h3>Conclusion: A Legacy of Laughter</h3>While President Methuselah's reign may not be marked by swift policy changes or groundbreaking innovations, it is certainly characterized by humor and heart. His ancient anecdotes and old-fashioned ideas bring a sense of whimsical charm to Gerontopia, reminding the world that sometimes, laughter is the best form of governance.After all, in a world where leaders often take themselves too seriously, it's refreshing to have one who might just start a meeting by asking, “Now, where did I put my dentures?”",
  },
  {
    id: 4,
    title: "Gladioball Madness: The Ultimate Sport of Our Dystopian Future",
    imageUrl: "https://i.imgur.com/AUf6A7T.png",
    time: 1718413771502,
    category: "Sports",
    author: "Chat GPT",
    content:
      "In the smog-choked megacity of New Neoropolis, the citizens have found a new obsession: Gladioball. This high-octane, utterly chaotic sport combines the thrill of ancient gladiator battles with the precision of a modern tech dystopia. The recent championship match between the CyberWarriors and the Mutant Marauders was an event for the ages, leaving the audience both exhilarated and slightly traumatized.<h3>The Arena: Where Tech Meets Terror</h3>The state-of-the-art CraterDome, a marvel of dystopian engineering, hosted the grand showdown. This colossal structure, made entirely of recycled plastic and broken dreams, features a retractable roof that doubles as a drone launch pad. The field itself is a treacherous landscape filled with booby traps, laser turrets, and randomly appearing sinkholes, adding an element of surprise and imminent danger to every play.<h3>The Teams: Cyborgs vs. Mutants</h3>On one side, we had the CyberWarriors, a team of enhanced cyborg athletes who are more machine than human. With their hydraulic limbs and laser-guided vision, they were the favorites to win. On the other side, the Mutant Marauders, a ragtag group of genetically modified superhumans with abilities ranging from invisibility to telekinesis. In a sport where anything goes, these unique traits made for an unpredictable and thrilling match.<h3>The Rules: If You Can Call Them That</h3>Gladioball's rules are a loose interpretation of chaos. Points are scored by getting the bioluminescent orb (a genetically engineered glowing ball that occasionally tries to bite players) into the opposing team's goal, which is guarded by a swarm of robotic bees. Players can use any means necessary to achieve this, including but not limited to: grappling hooks, EMP grenades, and mind-control devices.<h3>The Match: Mayhem in Motion</h3>The match began with the traditional release of the genetically modified lions, which roamed the field, adding a layer of excitement (and existential dread) for the players. The CyberWarriors immediately deployed their drone fleet to distract the lions, while the Mutant Marauders relied on their telekinetic captain, Zygor, to levitate the orb toward the goal.<br><br>The first score of the game was an awe-inspiring display of cybernetic prowess. TurboTron, the CyberWarriors' star player, performed a triple backflip over a spike pit, using his rocket-powered legs, and slammed the orb into the goal with a sonic boom that temporarily deafened half the audience.<br><br>Not to be outdone, the Mutant Marauders' shapeshifter, Morphina, turned into a cloud of nanobots and infiltrated the CyberWarriors' defense grid, causing their systems to go haywire. This allowed their brute-force striker, Smashmonger, to bulldoze through and score, leaving a trail of wreckage in his wake.<h3>The Halftime Show: A Spectacle of Excess</h3>Halftime featured a performance by the world's only remaining pop star, AutoTunea, who entertained the crowd with her latest hit single, \"Algorithm of Love,\" while riding a fire-breathing cyber-unicorn. The show ended with a holographic display of fireworks and a brief power outage, which many assumed was part of the act but was actually due to a minor rebellion in the power plant.<h3>The Climax: A Desperate Gamble</h3>As the match drew to a close, the score was tied, and tensions were high. In a desperate move, the CyberWarriors' captain, Mechamaster, attempted to use a forbidden tactic—activating the EMP field, which would disable all electronics on the field, including their own enhancements. However, Zygor anticipated this and used his psychic abilities to shield his team.<br><br>The final moments were a blur of motion and destruction. TurboTron launched himself toward the goal with a final, explosive leap, only to be intercepted mid-air by Morphina, who solidified just in time to wrestle the orb away. In a stunning display of agility, she hurled the orb into the goal as the buzzer sounded, securing victory for the Mutant Marauders.<h3>The Aftermath: Celebrations and Repairs</h3>The Mutant Marauders celebrated their hard-fought victory amid the ruins of the CraterDome, which would require extensive repairs before the next match. The CyberWarriors, though defeated, vowed to return stronger, promising even more radical enhancements and strategies.<br><br>As the crowd dispersed into the neon-lit night, one thing was clear: in a world where the line between sport and survival is razor-thin, Gladioball reigns supreme as the ultimate form of dystopian entertainment.",
  },
  {
    id: 5,
    title:
      "Scandal in the CraterDome: TurboTron's Extra-Curricular Activities Exposed",
    imageUrl: "https://i.imgur.com/WadS5hT.png",
    time: 1718413771503,
    category: "Sports",
    author: "Chat GPT",
    content:
      'In the dazzling yet dystopian world of Gladioball, heroes are made and broken at the speed of a rocket-powered leg. This week, however, the star of the CyberWarriors, TurboTron, has found himself in the spotlight for reasons far removed from his on-field exploits. Yes, the mechanical marvel known for his triple backflips and sonic boom goals is now at the center of a scandal so shocking, it makes his cybernetic enhancements seem like quaint accessories.<h3>The Scandal Unfolds</h3>It all started when a mysterious figure known only as "The Whistleblower" released a series of highly incriminating holovids. These videos, captured by what appears to be a rogue drone, depict TurboTron engaging in a variety of salacious activities with a series of equally enhanced individuals. The locations vary from the VIP lounges of neon-lit nightclubs to the secret maintenance rooms of the CraterDome itself.<h3>The Players Involved</h3>The scandal\'s cast includes an eclectic mix of characters, each more sensational than the last:<br><br><strong>RoboRita</strong>, the sultry half-cyborg, half-social media influencer known for her controversial vlogs about the ethics of human-robot relationships.<br><br><strong>Valkyra</strong>, the genetically modified enforcer from the Mutant Marauders, whose superhuman strength is only rivaled by her notoriety for bending the rules of love and war.<br><br><strong>Xander the Hackmaster</strong>, an underground tech wizard famed for his ability to override security systems and, evidently, personal boundaries.<h3>The Fallout</h3>The reactions have been as electrifying as a malfunctioning power grid. Fans are divided into two camps: those who are outraged by TurboTron\'s extra-curricular activities, and those who argue that in a sport with no rules, the same should apply to personal lives. The CraterDome authorities have launched an investigation, though some speculate this is merely a diversion to distract from the crumbling infrastructure and rampant corruption within the Gladioball League.<h3>The Defense</h3>TurboTron, in a hastily arranged press conference (which was delayed due to a technical glitch in his vocal processors), made a statement. "I am more than just circuits and gears," he said, with a slight whirring sound. "I have needs, desires, and yes, a personal life. What you see in those holovids is a reflection of my quest for connection in a world that often feels cold and mechanical."<br><br>His legal team, led by the renowned cyber-lawyer, Algor Rithm, insists that TurboTron has done nothing illegal. "In a society that thrives on enhancement and augmentation, we must question why we are scandalized by acts that are, in essence, human—enhanced, but human," Algor stated, while adjusting his augmented reality glasses.<h3>The Public Reaction</h3>The public, of course, has taken to social media platforms like TwitBot and FaceWeb to express their mixed reactions. Hashtags like #TurboTronTroubles and #RoboRitaReveal are trending, with memes of TurboTron\'s shocked face juxtaposed against scenes from his greatest goals going viral.<br><br>Some fans are heartbroken. "I looked up to TurboTron as a hero," said one teary-eyed supporter. "I can\'t believe he\'s just like the rest of us—flawed and seeking connection in all the wrong places."<br><br>Others are more forgiving. "Let TurboTron live!" tweeted another fan. "If I had rocket-powered legs, I\'d be doing the same! #GladioballGod"<br><br><h3>Conclusion: A New Chapter for TurboTron?</h3>As the dust settles over this scandal, one thing is certain: TurboTron\'s legacy will never be the same. Whether he will be remembered as the greatest Gladioball player of all time or as the cyborg who couldn\'t keep his circuits to himself remains to be seen. For now, TurboTron\'s fate hangs in the balance, much like his mid-air stunts that once thrilled the nation.<br><br>In a world where everything is enhanced, perhaps it\'s only fitting that even our scandals are larger than life. Stay tuned for the next episode in the ongoing saga of Gladioball—where the lines between sport, spectacle, and soap opera are delightfully blurred.',
  },
  {
    id: 6,
    title:
      "Gerontopia's Latest Legislative Marvel: Legalizing Insider Trading for Politicians",
    imageUrl: "https://i.imgur.com/5X29RBC.png",
    time: 1718413771505,
    category: "Politics",
    author: "Chat GPT",
    content:
      "In the geriatric wonderland of Gerontopia, where the average age of the political class is “older than dirt,” a new legislative gem has emerged from the hallowed halls of Parliament. The bill, introduced by none other than Senator Elmer G. Richington III (a sprightly 102 years young), aims to legalize insider trading—but only for the noble and trustworthy politicians of Gerontopia.<h3>The Justification: Because Who Knows Better?</h3>Senator Richington, in his characteristic shaky yet determined manner, explained the rationale behind this groundbreaking legislation. “Politicians have a unique perspective on the economy. We have the foresight and the inside knowledge to make sound investments. Why shouldn't we be allowed to benefit from our own information?” he declared, as he adjusted his monocle and pounded the floor with his antique cane for emphasis.<h3>A Bill for the Elite</h3>The “Prosperity for Politicians Act,” as it's officially titled, is a masterpiece of legal craftsmanship. It meticulously outlines the conditions under which politicians can engage in insider trading, ensuring that they alone reap the benefits of their privileged positions. Among the key provisions are:<br><br><strong>Exclusivity Clause:</strong> Only elected officials and their immediate families are permitted to trade on non-public information. Lobbyists, aides, and mere mortals need not apply.<br><br><strong>Ethics Waiver:</strong> All ethical guidelines regarding conflicts of interest are conveniently suspended for transactions involving politicians, because who's more ethical than those who write the rules?<br><br><strong>Retroactive Immunity:</strong> Any past indiscretions related to insider trading are absolved, effectively granting a clean slate to all current officeholders (and several retired ones, just in case).<br><br><h3>Public Reaction: Outrage and Applause</h3>The public reaction has been predictably polarized. Many citizens are outraged, accusing the government of blatant self-serving corruption. “This is absurd!” exclaimed local shopkeeper Penny Pincher. “How can they legalize something so blatantly unfair? It's like they're not even pretending to care about us anymore!”<br><br>Meanwhile, others have adopted a more resigned, even humorous, stance. “Well, at least they're honest about being dishonest,” chuckled retiree Bill Bored. “It's kind of refreshing, in a way. Maybe now we'll get some trickle-down corruption.”<h3>Support from the Establishment</h3>The establishment, predictably, has rallied behind the bill with fervent enthusiasm. Senator Richington's contemporaries have praised the legislation as a bold step forward. “This bill represents a new era of transparency,” said Senator Goldie T. Hieves. “By legalizing insider trading for politicians, we eliminate the need for secrecy. Now, everything is out in the open—well, at least for us.”<h3>The Opposition: Voices of Reason?</h3>Not everyone in the government is on board. A small faction of younger politicians (those under 90) have voiced opposition. Representative Hope Springs, age 87, argued, “This bill undermines the public's trust in our institutions. We should be working to eliminate corruption, not institutionalize it.”<br><br>Her comments were met with a mix of patronizing nods and outright laughter from the elder statesmen. Senator Richington retorted, “My dear, when you've been in politics as long as I have, you'll understand that trust is overrated. What matters is maintaining the status quo—and our portfolios.”<h3>The Future: A Golden Age for Gerontopia's Politicians?</h3>As the “Prosperity for Politicians Act” heads for a final vote, the citizens of Gerontopia watch with a mix of dread and dark amusement. Should the bill pass, it will undoubtedly usher in a new era of unabashed self-enrichment for the country's political elite.<br><br>For the rest of Gerontopia, it's just another day in a country where the only thing older than the politicians are their ideas—and their investments.",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home articles={articles} />}></Route>
        <Route path="/article/:id" element={<Article articles={articles} />}></Route>
        <Route path="/category/:category" element={<Category articles={articles} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
