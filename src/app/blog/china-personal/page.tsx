import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import PhotoCarousel, { type CarouselPhoto } from "@/components/PhotoCarousel";

export const metadata: Metadata = {
  title: "A tunnel has two openings",
  description:
    "Personal growth, my first trip to China. Sixteen days in Shanghai with something like agoraphobia, a river tunnel to cross every day, and a question about American dynamism versus Chinese central planning that sixteen days can't answer.",
};

const IMAGE_DIR = "/images/blog/china-personal/";

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 text-lg font-bold text-green glow">
      <span className="text-green-dim">##</span> {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-sm leading-relaxed text-text">{children}</p>;
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="tlink" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// A single photo framed as a terminal window, same as the other posts.
function Shot({
  file,
  alt,
  caption,
  aspect = "3 / 2",
  fit = "cover",
}: {
  file: string;
  alt: string;
  caption: string;
  aspect?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ view {file}
      </div>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image
          src={IMAGE_DIR + file}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 672px"
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">{"//"}</span> {caption}
      </figcaption>
    </figure>
  );
}

// The trip, in the order the post tells it.
const CAROUSEL: CarouselPhoto[] = [
  {
    file: "wing-sunset.jpg",
    alt: "Sunset above the clouds seen past the wing of a Boeing 777",
    caption:
      "somewhere over the pacific. i took this to prove to myself i was looking out the window.",
  },
  {
    file: "next-stop-shanghai.jpg",
    alt: "Seatback screen reading Next stop, Shanghai, 12h 4m, above a made-up lie-flat bed and a Kindle",
    caption: "next stop, shanghai. twelve hours to go and a kindle for company.",
  },
  {
    file: "descent-313kph.jpg",
    alt: "Seatback flight information screen during descent into Shanghai",
    caption: "the descent. i watched the numbers the whole way down.",
  },
  {
    file: "pvg-night.jpg",
    alt: "Shanghai Pudong International Airport at night, seen from the tarmac",
    caption: "pudong airport at night, from the tarmac. we made it.",
  },
  {
    file: "zeekr-009-cabin.jpg",
    alt: "Rear cabin of a Zeekr 009 with two captain's chairs lit by blue floor lighting",
    caption:
      "the first didi from the airport was a zeekr 009. two captain's chairs, massage, ventilation, a tv you can airplay to. this was the cheap tier.",
  },
  {
    file: "breakfast-over-pudong.jpg",
    alt: "Hotel breakfast plates on a table overlooking the Oriental Pearl Tower and the Pudong skyline",
    caption: "breakfast on the 91st floor. this is the bubble, and i am naming it up front.",
  },
  {
    file: "highrise-window.jpg",
    alt: "View down over Pudong from a high floor of the hotel tower",
    caption: "looking down at pudong from the hotel.",
  },
  {
    file: "didi-night-traffic.jpg",
    alt: "Dark back seat of a car in night traffic, dashboard lights visible ahead",
    caption:
      "back seat of a didi, stop-and-go, somewhere under the huangpu. this is what the anxiety looked like from the outside: nothing.",
  },
  {
    file: "nanpu-bridge.jpg",
    alt: "Nanpu Bridge lit up at night over the Huangpu River",
    caption: "nanpu bridge from the river. the spiral approach ramp is on the pudong side.",
  },
  {
    file: "lupu-bridge.jpg",
    alt: "Lupu Bridge arch lit red at night over the Huangpu River",
    caption: "lupu bridge. i crossed this river every single day, and never once on top of it.",
  },
  {
    file: "speed-301.jpg",
    alt: "Cabin display on a Fuxing high-speed train reading Speed: 301 km/h",
    caption: "speed: 301 km/h. the cabin display on the fuxing to hangzhou.",
  },
  {
    file: "fuxing-nose.jpg",
    alt: "The nose of a CR400BF Fuxing high-speed train at a station platform",
    caption: "cr400bf fuxing on the platform. i took a lot of photos of this train.",
  },
  {
    file: "station-hall.jpg",
    alt: "Shanghai South Railway Station platform hall under a wide arched roof",
    caption: "shanghai south. every platform under one roof.",
  },
  {
    file: "metro-car.jpg",
    alt: "Inside a quiet Shanghai Metro car on a Sunday morning",
    caption: "shanghai metro, early sunday morning. quiet.",
  },
  {
    file: "metro-map.jpg",
    alt: "Backlit map of the full Shanghai Metro network",
    caption: "the full network map. i stood here a while.",
  },
  {
    file: "terminal-roof.jpg",
    alt: "Airport terminal departure hall under a vast lattice roof",
    caption: "the terminal roof. these airports are grand in a way that is hard to photograph.",
  },
  {
    file: "tims-passport.jpg",
    alt: "A Canadian passport held up in front of a Tim Hortons in a Shanghai airport",
    caption:
      "a canadian passport in front of a tim hortons in a shanghai airport. this joke wrote itself.",
  },
  {
    file: "c919-safety-card.jpg",
    alt: "The safety card of a China Eastern COMAC C919, held up in the cabin",
    caption:
      "the safety card on a china eastern comac c919, a chinese-built airliner. my wife flew it on a 36-hour side trip to beijing and photographed it twice, because she knows me.",
  },
  {
    file: "c919-window.jpg",
    alt: "View out the window of the C919 at Beijing Daxing at night, another jet at the next gate",
    caption: "out the window at daxing, from her c919.",
  },
  {
    file: "su7-showroom.jpg",
    alt: "An olive green Xiaomi SU7 in a showroom",
    caption:
      "a xiaomi su7 in the showroom, olive green. this is the forty thousand dollar car i think would sell here for eighty.",
  },
  {
    file: "su7-dash.jpg",
    alt: "The dashboard and center screen of the Xiaomi SU7",
    caption: "the su7 dash.",
  },
  {
    file: "ferraris.jpg",
    alt: "A teal and a red Ferrari parked outside the hotel",
    caption:
      "the european badges outside the hotel. in shanghai this reads as old money, and slightly beside the point.",
  },
  {
    file: "old-city-7am.jpg",
    alt: "An empty street in Yu Garden Old City at 7 AM on a Sunday",
    caption: "yu garden old city at 7 am on a sunday. empty, and quiet.",
  },
  {
    file: "quiet-lane.jpg",
    alt: "A shaded, tree-lined lane in the Former French Concession",
    caption: "a lane in the former french concession.",
  },
  {
    file: "rambu-neon.jpg",
    alt: "The red neon Rambu sign above a bar entrance in Jing'an",
    caption: "rambu, jing'an. we went twice.",
  },
  {
    file: "pearl-tower-night.jpg",
    alt: "The Oriental Pearl Tower lit pink at night, from the river",
    caption: "the oriental pearl, pink tonight.",
  },
  {
    file: "bund-night.jpg",
    alt: "The Bund lit up at night, seen from a Huangpu River cruise",
    caption: "the bund from the river.",
  },
];

export default function ChinaPersonalPost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          path="~/blog"
          command="cat china-personal.md"
          title="A tunnel has two openings"
        >
          Personal growth, my first trip to China · American dynamism versus
          Chinese central planning, from the back seat of a Zeekr ·
          2026-08-21 to 2026-09-06
        </SectionHeader>

        <article>
          <P>
            Bumper to bumper, the entire length of a tunnel under the Huangpu
            River, in the back of a van. Brand new tunnel overhead, millions of
            tons of water on top of that, and my brain, helpfully:{" "}
            <em>did they really know what they were doing when they built
            this?</em> Full fight or flight, and I am a flight guy, so every
            part of me wanted to open the door and run. You can&apos;t. So you
            sit there and say, all right, this is it, I&apos;m doing it, and
            you console yourself with the one fact you can hold onto: a tunnel
            has two openings, and you only need the other one.
          </P>

          <P>
            I did some version of that every working day for two weeks, and
            three things happened in that seat. Getting into it was the
            hardest thing I&apos;ve done in years. Looking out the window was,
            for a transportation nerd, paradise. And what I saw out the window
            left me with a question about China and America that I came home
            without an answer to. The fear, the window, and the question.
          </P>

          <div className="term my-6 p-4 text-xs leading-relaxed">
            <div className="mb-2 text-text-dim">
              <span className="text-amber glow-amber">[ info ]</span> trip
              details
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <dt className="text-green-dim">what</dt>
              <dd className="text-text">
                first work trip to a factory, and my first time in China
              </dd>
              <dt className="text-green-dim">when</dt>
              <dd className="text-text">
                August 21 to September 6, 2026 · sixteen days
              </dd>
              <dt className="text-green-dim">where</dt>
              <dd className="text-text">
                Shanghai, Pudong side · the factory out past the city limits ·
                a day in Hangzhou · my wife did a 36-hour side trip to Beijing
                while I worked
              </dd>
              <dt className="text-green-dim">who</dt>
              <dd className="text-text">
                my wife came with me and stayed the whole time · our daughter
                Eve stayed home with my parents
              </dd>
              <dt className="text-green-dim">the other post</dt>
              <dd className="text-text">
                the professional half, glue machines and all, is{" "}
                <Link href="/blog/china-professional" className="tlink">
                  here
                </Link>
              </dd>
            </dl>
          </div>

          <PhotoCarousel
            dir={IMAGE_DIR}
            photos={CAROUSEL}
            title="shanghai"
            aspect="4 / 3"
            fit="contain"
          />

          <H2>1. Getting in the van</H2>
          <P>
            First, the bubble, because it shapes everything after it. I saw a
            very specific slice of China: United Polaris on the way over, a
            Park Hyatt on the Pudong side, team dinners at places with tasting
            menus, a whisky lounge in the French Concession. That was
            Apple&apos;s money, not mine, and I&apos;m not going to pretend I
            was backpacking. I didn&apos;t see the politics or the
            censorship, I have no idea what life is like for the people who
            drove me around, and I didn&apos;t have a single real conversation
            with a local outside of work. Everything below is a view from a
            very nice window.
          </P>

          <P>
            I&apos;ve never had it formally named, but I have something like{" "}
            <A href="https://en.wikipedia.org/wiki/Agoraphobia">agoraphobia</A>
            , and it comes bundled with a fear of flying. The name is
            misleading. It isn&apos;t a fear of open spaces; it&apos;s a fear
            of being somewhere you can&apos;t get out of, or get help in, if
            the panic starts. The textbook list is tunnels, bridges,
            elevators, airplanes, and traffic you can&apos;t leave, which is
            also, as you&apos;ll see, a fairly complete list of my commute in
            Shanghai. Before this trip a bad day looked like this: there is
            exactly one bridge
            in the Bay Area I will drive, because I know it, and I
            couldn&apos;t do the BART tunnel under the bay at all. Going under
            water was too much. I&apos;m an electrical engineer. I know what a
            factor of safety is. I know a bored tunnel under a river is among
            the most over-engineered objects a person will ever sit inside.
            None of that has ever helped, which told me early that the fear
            isn&apos;t about the tunnel. The tunnel is just where it shows up.
          </P>

          <P>
            So there was a lot of bargaining with myself in the weeks before.
            I had real, serious thoughts about saying no: give up on the dream
            of being a great Apple engineer, ride out the year until the golden
            handcuffs come off, tell my manager I can&apos;t travel and ask for
            reasonable accommodations (which is a thing you can do in
            California), and never get on the plane. It would have worked.
            Nobody would have blamed me. What stopped me was running the tape
            forward and finding that every version of my life where I said no
            had me still thinking about it at sixty.
          </P>

          <P>
            How I actually did it, as honestly as I can put it: lorazepam for
            the flight, and my wife in the seat next to me. That&apos;s the
            how. The why is simpler. There are two mouths to feed at home, and
            they were counting on me to go to work, do the job, and bring the
            dough home. The plan for Eve, our daughter, was my parents, which
            also happened to be the first real break my wife has had from
            parenting since Eve arrived, so she came with me. I got very lucky
            in the wife department, and I want that on the record. And I
            noticed something about the why: obligation turned out to be a
            stronger drug than anything in the bottle. On the days I was
            afraid, I didn&apos;t win an argument with the fear. I just had
            somewhere to be.
          </P>

          <P>
            Then the trip itself turned out to be a daily exposure exercise I
            hadn&apos;t signed up for. We stayed on the Pudong side and the
            factory was on the other side of the river and a long way out, so
            every single morning and every single evening it was flyovers,
            expressways, and a tunnel under the Huangpu, often at a crawl. The
            hotel didn&apos;t help: my room was on the 84th floor, check-in
            was on the 87th, and breakfast was on the 91st, which means a
            minute-long express elevator to the top of one of the tallest
            buildings in the city, twice a day, every day. Hilarious, in
            hindsight.
          </P>

          <Shot
            file="didi-night-traffic.jpg"
            alt="Dark back seat of a car in night traffic, dashboard lights visible ahead"
            caption="the view from the anxiety. stop-and-go, under the river. nothing to see."
          />

          <P>
            The method I landed on is not sophisticated: notice that
            you&apos;re afraid, do the thing anyway, and notice afterward that
            the fear didn&apos;t last. Deep breaths. Here&apos;s the part I
            didn&apos;t expect. Exposure therapy is supposed to make it
            better, and it got worse. The first few days I could do anything;
            I&apos;d just landed and the adrenaline covered it. Then each day
            the dread got a little bigger, until by the end of the trip the
            tunnel was harder than it had been at the start. My best guess is
            that the novelty wore off before the habit set in, and that by the
            second week the tunnel wasn&apos;t the tunnel anymore, it was a
            rehearsal for the flight home. I don&apos;t know. What I do know
            is that I got in the van every day anyway, and that turned out to
            be the actual lesson. The fear didn&apos;t shrink. It just stopped
            being the thing that decided what I did. I used to think growth
            meant the fear going away. It means the fear losing the vote.
          </P>

          <P>
            Why it was worth it: I listened to{" "}
            <A href="https://theamphour.com/">The Amp Hour</A> all the way
            through college, almost ten years ago now, and a huge fraction of
            those episodes were engineers flying to China to deal with
            high-volume manufacturing, DFM problems, process problems, the
            whole grind. The one that stuck was{" "}
            <A href="https://theamphour.com/437-an-interview-with-chrissy-meyer/">
              episode 437 with Chrissy Meyer
            </A>
            , who said something about glue machines being the bane of her
            existence, and who, I found out years later, had been an
            engineering program manager on the first few generations of Apple
            Watch. Not my team, exactly, but close enough to my corner of the
            company that it absolutely blew my mind. This trip was me finally
            getting to be one of those engineers, and walking onto a factory
            floor on the other side of the world with a problem to solve felt
            like a level-up I&apos;d been waiting a decade for. The specifics
            belong in the other post. The feeling belongs here.
          </P>

          <H2>2. Out the window</H2>
          <P>
            Now the part of me that was having the time of its life in the
            same seat. I am a huge transportation nerd, and despite the fear
            of flying, thirteen hours on a Boeing 777 is still cool to me. My
            wife got upgraded to business on the way over while I sat in
            Premium Plus, which was too, too funny. Then we landed, and for
            two weeks it was paradise.
          </P>

          <P>
            I used to work at Tesla, and we&apos;d all heard the lore: Chinese
            EVs were exceptional, BYD was the real competitor, and if the 100
            percent tariff ever came down Chinese auto would destroy the US
            market. Our first DiDi from the airport was a{" "}
            <A href="https://en.wikipedia.org/wiki/Zeekr_009">Zeekr 009</A>{" "}
            with two captain&apos;s chairs in the back (massage, ventilation,
            recline) and a TV you could AirPlay to. The most nuts thing I had
            ever sat in. That was the cheap tier.
          </P>

          <Shot
            file="zeekr-009-cabin.jpg"
            alt="Rear cabin of a Zeekr 009 with two captain's chairs lit by blue floor lighting"
            caption="the zeekr 009. this was the didi from the airport."
            aspect="3 / 4"
          />

          <P>
            The luxury tier gets you a European badge and nothing else. The
            cheaper premium tier puts you in a sixty or eighty thousand dollar
            Chinese EV that matches a Bentley on materials and beats it on
            features, and even the economy tier, ten and fifteen thousand
            dollar cars, was fine. Everything in Shanghai is electric. The
            streets were quiet in a way I&apos;ve never experienced in a city
            that size, and they didn&apos;t smell, apart from the occasional
            sewage. Honking is{" "}
            <A href="https://www.nzherald.co.nz/world/no-more-honking-in-downtown-shanghai/RVJDINBEJC33X33JCDVRWEAUHQ/">
              banned downtown
            </A>
            , with fines, which would never fly in America and which I now
            miss. My prediction: if a{" "}
            <A href="https://en.wikipedia.org/wiki/Xiaomi_SU7">Xiaomi SU7</A>{" "}
            ever cleared US safety regs, a forty thousand dollar car would sell
            here for eighty, because it is as good as a Model S or better. I
            saw one in a showroom in olive green and found it hard to leave.
            Why they&apos;re that good and that cheap (scale, a domestic
            battery supply chain, a decade of subsidies, dozens of makers at
            each other&apos;s throats, less red tape) is a longer argument
            than I&apos;m qualified to make. I can tell you what I sat in.
          </P>

          <P>
            And this is where the fear and the nerd collide. The thing that
            got me, sitting in traffic under the river, was that the tunnels
            are bored: not cut and cover, bored, with tunnel boring machines,
            for the metro and the expressways both, and there are a lot of
            them. I looked it up afterward because I wanted to know whether
            the machines were European. China{" "}
            <A href="https://decodingthedragon.substack.com/p/59-why-does-china-build-70-of-the">
              bought two TBMs from Herrenknecht in 1997
            </A>
            , launched its first domestic machine in 2008, and now builds
            roughly seventy percent of the world&apos;s tunnel borers. The last
            part they still had to import, the main bearing, went domestic in
            2023. The thing I was afraid of was the exact thing I would have
            been most excited about, if my brain had let me think. Same
            tunnel, same seat.
          </P>

          <Shot
            file="speed-301.jpg"
            alt="Cabin display on a Fuxing high-speed train reading Speed: 301 km/h"
            caption="301 km/h, on the fuxing to hangzhou. i took a lot of photos of this display."
            aspect="3 / 4"
          />

          <P>
            The high-speed train to Hangzhou read 301 km/h on the cabin
            display and felt like nothing. The airports are very big, very
            grand, easy to get around, and efficient in a way that is hard to
            photograph. I didn&apos;t get to fly the{" "}
            <A href="https://en.wikipedia.org/wiki/Comac_C919">COMAC C919</A>,
            the Chinese-built airliner, but my wife did, on a 36-hour side trip
            to Beijing while I was at the factory, and she photographed the
            safety card twice because she knows who she married. To anyone
            with my fears and a China trip on the calendar: China is a
            surprisingly easy place to travel. The visa on arrival was fine,
            the metro was easy, the high-speed rail was easy, getting out of
            the big cities was easy. The hard part was in my head, and it
            would have been there anywhere.
          </P>

          <P>
            What surprised me most is a little embarrassing to admit: I&apos;d
            been to Japan, and I&apos;d assumed China would be more like it
            than it is. The metro is great and the old part of Shanghai is
            dense and built up, but it isn&apos;t orderly. Nobody queues,
            scooters use the sidewalk and seem to be aiming for you, left and
            right on the escalator don&apos;t exist, it&apos;s loud in public,
            and tour groups walk around with speakers. The metro cars were
            quiet, but that read as a rule rather than a custom. Leave the old
            areas, especially on the Pudong side where we stayed, and it
            starts to look like Texas: enormous roads, everything spread out,
            nothing walkable. People call it the Texas of Asia, and now I get
            it.
          </P>

          <P>
            The bigger embarrassment is how little I knew going in. I
            didn&apos;t know the People&apos;s Republic was only founded in
            1949, a year that turns out to matter to me for a different
            reason, which I&apos;ll get to. I didn&apos;t know mainland China
            writes in simplified characters, which I&apos;d have known if
            I&apos;d known any of the history. I assumed people would speak
            English, and almost nobody did. For Japan I&apos;d absorbed the
            customs from years of anime and travel videos. I&apos;d watched
            plenty of China travel videos too; they just don&apos;t talk about
            the customs, or the government, much at all.
          </P>

          <H2>3. Who built this</H2>
          <P>
            One interaction, over and over, is what turned the sightseeing
            into a question. Everyone was curious, and the question, asked
            more or less directly, was always: where did you grow up? The
            moment I said Canada they lost interest completely. I found that
            hilarious, because where I grew up is genuinely novel, and then I
            found it useful, because it told me what I was in that
            conversation: not American, not Chinese, and looking at both from
            the outside. Canada isn&apos;t a threat, and under Carney it
            isn&apos;t even a rival, so nobody needed anything from me. That
            is a good seat to think from.
          </P>

          <P>
            Here&apos;s the coincidence I can&apos;t get over. Newfoundland
            joined Canada on March 31, 1949. The People&apos;s Republic of
            China was proclaimed on October 1, 1949. The country I was born in
            and the country I&apos;d just landed in started the same year, six
            months apart, and both are inside living memory. Both sets of my
            grandparents remember Newfoundland before confederation, when it
            was its own dominion. A couple of my coworkers told me they had
            family, not that distant, who were on the Long March. Two peoples
            answering the same question in the same year, how much government
            do you want in your life, and answering it differently. So let me
            take the three countries I&apos;ve now lived in or under, in order
            of how much they trust the state.
          </P>

          <P>
            The United States, the way I understand it, was built on the idea
            that the government is the thing to be afraid of: three branches
            designed to fight each other, and a Bill of Rights that is
            literally a list of things the government may not do. It took me
            years of living here, a lot of{" "}
            <A href="https://www.dancarlin.com/common-sense/">Dan Carlin</A>,
            and actually reading the founding documents to understand that at
            a first-principles level. Distrust is the operating system, and
            the dynamism in my title is what runs on it. I should be specific
            about what I mean by dynamism, because I am the evidence. I&apos;m
            an immigrant with a Canadian passport who got to work on cars at
            Tesla and now works on hardware at Apple, and Apple put me on a
            plane to a factory in China to help make its products. The most
            valuable objects American dynamism produces are built by Chinese
            central planning. The two systems were not competing in that van.
            They were collaborating, and I was the handoff.
          </P>

          <P>
            Canada made a different bet, and I hadn&apos;t fully noticed until
            I was in China. A majority government controls the legislature and
            the executive at the same time, the Senate is appointed and rarely
            blocks anything, and there is a clause in the constitution, the{" "}
            <A href="https://en.wikipedia.org/wiki/Section_33_of_the_Canadian_Charter_of_Rights_and_Freedoms">
              notwithstanding clause
            </A>
            , that lets a legislature override Charter rights outright. People
            are fine with it because it delivers: healthcare, EI, equalization.
            In Newfoundland, EI is built around the fishing seasons and it
            decides elections; people love their handouts and vote
            accordingly. The government is one of the biggest employers in the
            province, it is in your life every day, and most people like it
            there.
          </P>

          <P>
            That bet had a price, and I know who paid it. Between 1954 and
            1975, Newfoundland{" "}
            <A href="https://www.thecanadianencyclopedia.ca/en/article/newfoundland-resettlement-program">
              resettled around three hundred communities
            </A>
            , thirty thousand people, for the good of the many. My nan, my
            dad&apos;s mother, was from Merasheen Island in Placentia Bay. She
            left before the end, but{" "}
            <A href="https://www.cbc.ca/news/canada/newfoundland-labrador/merasheen-resettlement-fiftieth-1.4762565">
              the last family left Merasheen on October 10, 1968
            </A>
            . These days the province pays a household hundreds of thousands
            of dollars to leave (it was a fraction of that in my nan&apos;s
            day), and everyone I&apos;m related to will tell you it
            doesn&apos;t make up for leaving the place your family toiled over
            for generations. <em>Where once they stood, we stand</em>, as the
            Ode goes. They took the money, and they still sing that. So when I
            say the Chinese approach is Star Trek, the needs of the many
            outweigh the needs of the few, and if your family&apos;s house is
            in the path of the high-speed line you are out of luck, I
            don&apos;t say it from a great height. My own province did it to my
            own family, and my family is still not sure it was worth it.
          </P>

          <P>
            China made the biggest bet of the three: one party, no separation
            of powers, by design, and a state present in every part of daily
            life. What I can see from the back seat is that the bet has paid
            out in a way no other country&apos;s has: the metro, the trains,
            the cars, the tunnels, the hundreds of millions of people lifted
            out of poverty in my parents&apos; lifetime. What I can&apos;t see
            is the price, or who paid it, or whether they think it was worth
            it. People seem to tolerate the state, and I can only guess why:
            the results, or the surveillance in whatever form it really takes,
            or both. I don&apos;t know, and I want to be precise about why I
            don&apos;t know. It isn&apos;t modesty. It&apos;s that the answer
            lives with the family in the path of the high-speed line, and I
            can&apos;t ask them.
          </P>

          <P>
            Here&apos;s where the ladder leaves me, and it&apos;s not where I
            expected. The United States is the outlier, not China. Most
            countries, including the one I grew up in, concentrate power and
            their people tolerate it because it delivers. The difference
            between Canada and China is what happens when you stop tolerating
            it: in Canada you vote the party out and it leaves; in China you
            can&apos;t. That is the whole gap, and it is not small. But
            everything else, the size of the state, its presence in your day,
            the public&apos;s willingness to let it build, was more familiar
            to me than it would be to an American, and it&apos;s why the
            Chinese and I could stop being curious about each other so
            quickly. We&apos;d already agreed on more than either of us knew.
          </P>

          <P>
            Which is also why I&apos;m not going to tell you what the Chinese
            people are like. I lived in the United States for years before I
            understood Americans, and it took history, podcasts, and the
            founding documents to get there. I&apos;ve had sixteen days in an
            ancient country whose language I don&apos;t speak, inside a bubble
            I named at the top. I know what it would take to actually know:
            the history, some of the language, more trips, and real
            conversations with people who aren&apos;t being paid to be nice
            to me. Anything I told you today about the Chinese character would
            be a guess from a guy in a Zeekr, and probably a wrong one.
          </P>

          <H2>Getting back in</H2>
          <P>
            The flight home was almost the worst part. I hadn&apos;t thought
            about it once the entire trip, so I wasn&apos;t ready for it, and
            I spent the first two hours freaking out until one milligram of
            lorazepam knocked me out for a solid four and a half. I enjoyed
            the rest of the flight, drugged up. The food was ass.
          </P>

          <P>
            And I&apos;m looking forward to October. Shanghai was fun and felt
            like a vacation: nerd out at the factory all day, nerd out reading
            about infrastructure in the shuttle, long team dinners at fancy
            restaurants at night. I&apos;m a little nervous about the flight,
            but I&apos;ve done it now, so there&apos;s no reason I can&apos;t
            do it again. That sentence is the whole first act.
          </P>

          <P>
            The question I brought home is smaller than the one I left with.
            I left wondering who wins, America or China, whether America is in
            the last gasps of a great empire or just getting started, whether
            liberty and the individual can stand up to people who love their
            government and believe in the greatness of their nation. I came
            home thinking the big question is decided by a small one: do the
            people paying for the big projects believe in them? In
            Newfoundland I know the answer, because I can ask my family, and
            the answer is that they took the money and still sing the Ode. In
            China the answer belongs to a family outside Hangzhou whose house
            was in the way, and sixteen days in a Zeekr doesn&apos;t earn the
            right to guess what they sing. It would be great to know. That,
            more than the factory, is why I&apos;m getting back in the van.
          </P>

          <P>
            A tunnel has two openings. I came out of the one I could see. The
            other one is the part of China I haven&apos;t been to yet.
          </P>

          <div className="mt-10 text-sm">
            <Link href="/blog" className="tlink">
              ← cd ~/blog
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
