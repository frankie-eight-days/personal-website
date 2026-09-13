import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "A million actions a day",
  description:
    "Professional growth, my first trip to China. Two weeks on a factory floor, four months into being a Systems EE at Apple: what the job actually is, a dirty mop, an unusable debug tool, and why nothing gets done on a hunch.",
};

const IMAGE_DIR = "/images/blog/china-professional/";

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

// The one line I want people to leave with, set off from the prose.
function Pull({ children }: { children: ReactNode }) {
  return (
    <blockquote className="term my-6 border-l-2 border-green px-4 py-3 text-sm leading-relaxed text-text">
      <span className="text-green-dim">{">"}</span> {children}
    </blockquote>
  );
}

// A single photo framed as a terminal window, same as the other posts.
function Shot({
  file,
  alt,
  caption,
  aspect = "3 / 2",
  fit = "cover",
  narrow = false,
}: {
  file: string;
  alt: string;
  caption: string;
  aspect?: string;
  fit?: "cover" | "contain";
  narrow?: boolean;
}) {
  return (
    <figure
      className={
        "term my-6 overflow-hidden" + (narrow ? " mx-auto max-w-xs" : "")
      }
    >
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

export default function ChinaProfessionalPost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          path="~/blog"
          command="cat china-professional.md"
          title="A million actions a day"
        >
          Professional growth, my first trip to China · what a good Systems EE
          actually does, learned in a bunny suit · 2026-08-21 to 2026-09-06
        </SectionHeader>

        <article>
          <div className="term my-6 px-4 py-3 text-xs leading-relaxed text-text-dim">
            <span className="text-amber glow-amber">[ note ]</span> names have
            been changed. Nobody in this post appears under their real name,
            the factory and the product aren&apos;t named, and nothing here
            should be read as a description of what was being built. Written
            in a personal capacity; nothing here is my employer&apos;s view.
            The lessons are mine. The rest belongs to other people.
          </div>

          <P>
            I had been at Apple four months when they sent me to a factory in
            China, and I thought I knew what I was going for. Electronics.
            Pick-and-place machines. Testers. The drama, I assumed, would be
            electrical. The drama turned out to be a mop. Specifically: whether
            an operator could bring a mop into a cleanroom, how the mop got
            in, where it had been
            before it got in, and who had written any of that down. Nobody
            had. That was the trip.
          </P>

          <P>
            I came home with three lessons and one line. The lessons: a
            Systems EE&apos;s real job happens on the line, not on the
            schematic; you have to know exactly what you
            want and then be a pain about getting it; and nothing, at this
            company, gets done on a hunch. The line is the title. After the
            three lessons there is a section about the email I wrote every
            night, which is where I found out what I actually think about the
            place. First, the boring facts, and a note on what isn&apos;t
            here.
          </P>

          <div className="term my-6 p-4 text-xs leading-relaxed">
            <div className="mb-2 text-text-dim">
              <span className="text-amber glow-amber">[ info ]</span> trip
              details
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <dt className="text-green-dim">what</dt>
              <dd className="text-text">
                an early build at a contract manufacturer&apos;s factory,
                two weeks on the floor
              </dd>
              <dt className="text-green-dim">when</dt>
              <dd className="text-text">
                August 21 to September 6, 2026 · four months into the job
              </dd>
              <dt className="text-green-dim">where</dt>
              <dd className="text-text">
                a factory outside Shanghai · the hotel and the shuttle are in
                the other post
              </dd>
              <dt className="text-green-dim">who</dt>
              <dd className="text-text">
                my team, our in-region engineers, and the factory&apos;s
                engineers · one senior engineer I&apos;ll call Wen
              </dd>
              <dt className="text-green-dim">what&apos;s not here</dt>
              <dd className="text-text">
                what we were building, who built it, and any photo of the
                line. The lessons are mine; the product isn&apos;t.
              </dd>
              <dt className="text-green-dim">the other post</dt>
              <dd className="text-text">
                the personal half, the tunnel and the agoraphobia, is{" "}
                <Link href="/blog/china-personal" className="tlink">
                  here
                </Link>
              </dd>
            </dl>
          </div>

          <H2>1. Walk the line</H2>
          <P>
            Here is what I thought a Systems EE was, four months in: my job at
            Tesla with a nicer badge. Design the board. Own the schematic,
            argue about parts, get it through bring-up, hand it off. I now
            think the schematic is the easiest thing we do. The job is taking
            everything the research teams at Apple have figured out, putting
            it on a page, and then making that page <em>buildable</em>, which
            means making sure that a few hundred people you&apos;ve never met,
            working in a language you don&apos;t speak, can make ten thousand
            of it without any one of them having a bad Tuesday. The first part
            takes a month. The second part is the career.
          </P>

          <P>
            I learned this by spending my first week following Wen around.
            Sixteen years at Apple, fluent in Mandarin, knew the game inside
            and out, and for reasons I still consider luck he let me shadow him,
            take notes, and write the nightly build report. Here&apos;s what
            he did all week: he ignored the electronics. The functional
            testers, the thing I had flown there to care about, got maybe an
            hour of his time. The rest of it he spent walking the line, watching
            operators&apos; hands, pointing at things. When he really needed a
            point made he&apos;d bark it in Mandarin, and with enough context
            I could follow: <em>that carrier, that flip, why is she touching
            that twice.</em> The factory staff, who were new to each other
            and barely keeping the place running, did not always love him for
            it.
          </P>

          <Shot
            file="bunny-suit.jpg"
            alt="Frank in a pale green cleanroom coverall, hood, mask and gloves, giving two thumbs up against a plain grey wall"
            caption="gowned up. every trip onto the line meant this, and the mop got in anyway."
            aspect="3 / 4"
            fit="contain"
          />

          <P>
            Then the mop. Wen found an operator in the cleanroom with a mop
            that had, visibly, been somewhere else first. He took a picture.
            He brought it to the biggest cross-functional meeting of the day,
            in front of everyone, and then he followed up every single day
            until two things existed that hadn&apos;t: a written procedure for
            how cleaning materials come in and out of the room, and a way to
            match the next unexplained speck of{" "}
            <A href="https://en.wikipedia.org/wiki/Foreign_object_damage">
              foreign debris
            </A>{" "}
            against mop fibre, using its{" "}
            <A href="https://en.wikipedia.org/wiki/Fourier-transform_infrared_spectroscopy">
              FTIR
            </A>{" "}
            catalogue. A mop is not an electrical problem. It is exactly the
            kind of thing I would have walked past. I think that is the whole
            point of him.
          </P>

          <P>
            I&apos;ve been chipping away at a master&apos;s in industrial
            engineering for years, slowly, and until this trip the lean
            vocabulary was vocabulary:{" "}
            <A href="https://en.wikipedia.org/wiki/Gemba">gemba</A>,{" "}
            <A href="https://en.wikipedia.org/wiki/Value-stream_mapping">
              value stream
            </A>
            ,{" "}
            <A href="https://en.wikipedia.org/wiki/Takt_time">takt</A>,{" "}
            <A href="https://en.wikipedia.org/wiki/5S_%28methodology%29">5S</A>,{" "}
            <A href="https://en.wikipedia.org/wiki/Poka-yoke">poka-yoke</A>.
            Watching Wen, it all clicked at once, and what made it click was
            that he had never been taught any of it. He just lived it. In the
            other post I quoted Chrissy Meyer telling{" "}
            <A href="https://theamphour.com/437-an-interview-with-chrissy-meyer/">
              The Amp Hour
            </A>{" "}
            that glue machines were the bane of her existence. Ours were tapes
            and carriers: how many different carriers one small thing could
            ride in, how many times a human hand touched it, how many flips it
            took to get both sides through the machines. We spent whole afternoons on
            that. It was the best part of the day.
          </P>

          <P>
            Somewhere in that week I wrote down the line I keep coming back
            to. I thought I&apos;d borrowed it from a podcast. I can&apos;t
            find it, so it might be mine:
          </P>

          <Pull>
            A factory is a place where about a million actions happen every
            day, and pretty much every one of them has to be directionally
            correct for the thing rolling off the end of the line to work.
          </Pull>

          <P>
            You can&apos;t watch a million actions. So the job is to make
            each one as simple as it can be and to write every one of them
            down, because an action nobody has described is an action that
            will, eventually, be done wrong. Murphy isn&apos;t a pessimist at
            that scale, he&apos;s a statistician. It is also, I think, the
            real meaning of the story everyone at Apple tells about Steve
            Jobs&apos;s father and{" "}
            <A href="https://en.wikipedia.org/wiki/Steve_Jobs_%28book%29">
              painting the back of the fence
            </A>
            . I used to hear that as a story about craftsmanship. On the line
            it reads as arithmetic: the details you skip are the ones that
            ship.
          </P>

          <H2>2. Know what you want, then be a pain about it</H2>
          <P>
            The second thing about Wen was that he could see the factory he
            wanted. Not roughly. Exactly: where the unit should be at nine in
            the morning, which station should have caught which failure, what
            the operator&apos;s hands should be doing. He had spent two and a
            half weeks there before I arrived, and he was still following up
            on things he&apos;d asked for in week one, and he expected an
            answer. He hounded
            people. The internet keeps trying to name this trait, high agency,
            conviction, founder mode, and none of the names are as good as
            watching it. What it looked like from behind him was simple and
            very hard: decide precisely what done looks like, then refuse to
            let anyone, including yourself, stop short of it.
          </P>

          <P>
            Part of how he did it was volume, and this is the part I&apos;m
            still working out. Our in-region engineers and the factory&apos;s
            engineers would go at each other in a way I&apos;d never seen at
            work. <em>We asked for this by today and it isn&apos;t done, what
            is wrong with you</em>, at full volume, and then, in the next
            breath, laughing together about something else. I grew up in a house where I can count on one hand
            the times anyone raised their voice. I am conflict-averse to the
            bone. So I watched this with something close to alarm until one of
            the in-region engineers, who is a mother, gave me the frame: they
            were tiger-parenting the factory. Be hard on it now, while there
            are ten units on the line, so that nobody has to be in agony later
            when there are ten thousand and the same mistake is holding up a
            batch. And the factory, as far as I could tell, took it as care.
          </P>

          <P>
            Here is my honest problem with that. I don&apos;t think I get to
            do it. Not because it&apos;s wrong, but because I&apos;m a white
            guy from Newfoundland who doesn&apos;t speak the language, and the
            same words out of my mouth wouldn&apos;t land as tiger-parenting,
            they&apos;d land as a foreigner shouting. And I also don&apos;t
            get to go easy, because going easy on a factory is how you end up
            with a dirty mop in a 1k cleanroom. The best I&apos;ve come up with
            is a middle: cold, blunt, specific, written down, and relentless
            about the follow-up. Wen without the volume. I tested it once on
            this trip, in a lab, on one supervisor, and it worked. October is
            whether it works on a line.
          </P>

          <P>
            The lab was where I got to try the other half, the vision half.
            Technically I&apos;m the test lead for this module, which means I
            own the testers on the line and the procedures for what happens to
            a unit after it fails one and gets pulled off. The failure-analysis
            lab was a room full of new-grad EEs and three supervisors, all
            hired by the factory, and I spent my first afternoons just sitting
            in it. Gemba, if you like. What I saw was this: to get any data
            out of a failed unit they were hand-reworking a connector with a
            pitch measured in microns, hanging bench equipment off it, and
            poking registers one at a time through a third-party probe. Hours per unit. We had shipped them a
            proper debug board that should have plugged straight in. Why weren&apos;t
            they using it?
          </P>

          <P>
            Software. The debug board talked to the chips on the module
            through a bridge chip with a thousand-page datasheet, and the
            software that came with it let you read and write that
            chip&apos;s registers and nothing else. Twenty reads and writes to
            get one number you cared about, if you&apos;d configured it right,
            which took most of a morning. The lab EEs agreed with me: the
            software was ass. So I said I could make this one click. Hook up
            the flex, pick a test, click, get the data back. One of the
            in-region engineers, the same one with the tiger-parent frame,
            rolled her eyes. <em>Have you seen the register map?</em>
          </P>

          <P>
            It took a few days, and I wasted one of them, out of pride,
            trying to reverse engineer how the board talked before I did the
            obvious thing and asked the team that built it. By the morning the
            next batch of failed units came back from the line, the test
            they&apos;d failed was reproducible in one click, with the
            numbers. I told her at triage. Eye-roll again. Then I went to the
            lab, which had no Wi-Fi, so I&apos;m sitting there on my
            phone&apos;s hotspot next to a supervisor who is elbow-deep in a
            rework, and I tapped him on the shoulder and showed him the data
            coming back, clean, at the precision the bench gear had been
            fighting for. He lit up. For a week I had been the foreigner
            typing in the corner of their lab, and that was the moment I
            stopped being one. He wanted it on his own laptop, and he fixed
            the Python environment himself to get it there, which taught me a
            separate and painful lesson about software portability.
          </P>

          <Shot
            file="red-bull.jpg"
            alt="A hand holding a small gold can of Chinese Red Bull on a tree-lined road outside the factory"
            caption="chinese red bull is a different drink. it got me through the one-click days."
            aspect="3 / 4"
            fit="contain"
            narrow
          />

          <P>
            I want to be careful about the moral, because the easy one is
            wrong. The easy moral is San Francisco beats we&apos;ve-always-
            done-it-this-way. But Wen is the least San Francisco person I have
            ever met and he is the best I&apos;ve seen at this. The real
            moral is that I did the same thing he did, at a smaller scale. On
            the first afternoon in that lab I could see what failure analysis
            should look like: a unit comes off the line, plugs into the debug
            board, and gives up its data in a minute instead of an afternoon
            of rework. Then I spent days writing code toward that picture,
            past an eye-roll at triage, past a lab that didn&apos;t know why I
            was there, past my own detour into reverse engineering, and I
            didn&apos;t stop until a supervisor had it running on his own
            machine. A precise picture of the room working, and no willingness
            to leave until it did. The tool was mine. The method was his.
          </P>

          <H2>3. Nothing on a hunch</H2>
          <P>
            The third lesson is the one I have the least standing to preach.
            When a test starts failing on a line, everybody says the same
            sentence: <em>I think we should calibrate the fixture.</em> It is
            the manufacturing equivalent of turning it off and on again. On
            this build one of our impedance tests drifted, the whole distribution
            shifted up, and the answer was not the fixture. Someone had added
            grounded metal near the probe head, and it was enough to move
            every reading. We found that out by walking onto the line, pulling
            the pogo pins off, and measuring. Not by reasoning about it in a
            conference room. The data was sitting there the whole time; it
            just wasn&apos;t in the room.
          </P>

          <P>
            I thought Tesla was a data-driven company. It is, by most
            standards. But looking back now, I can see how much we did at
            risk, on a hunch, on the strength of a senior engineer being
            pretty sure, and it worked out almost every time. Apple does not
            do that. Any change to the process needs testing, and not a
            little: enough samples to be sure you aren&apos;t aliasing. I think there are two unglamorous reasons Apple can afford
            this and Tesla mostly couldn&apos;t. The boards are cheap, so a
            hundred samples is nothing. And the teams are deep, so handing
            someone a new recipe and saying &quot;chase this for a week&quot;
            costs nobody their real job. Under those conditions, nothing on a
            hunch is not a personality trait. It is just the cheaper option.
          </P>

          <P>
            The honest limit: sometimes I thought it went too far. There were
            things the whole room was sure about, and they wanted the data
            anyway, and at Tesla the room&apos;s confidence would have been
            enough. But here is the thing I have to admit about my own
            confidence. I don&apos;t have any yet. I am too new to have good
            suspicions, and the couple of times I thought I did, I was wrong.
            So for now the data isn&apos;t a philosophy for me. It&apos;s the
            only tool I actually own.
          </P>

          <P>
            So it makes sense that the part of the trip that surprised me
            most, given I went as an electrical engineer, was how much of it
            was statistics.{" "}
            <A href="https://en.wikipedia.org/wiki/Statistical_process_control">
              Statistical process control
            </A>
            , setting test limits at six or nine sigma,{" "}
            <A href="https://en.wikipedia.org/wiki/Process_capability_index">
              Cpk
            </A>
            , why a bimodal distribution is a confession, why you compare the
            same test across builds and across testers at different points in
            the process before you believe it. I start a graduate statistics
            course for engineering managers in two weeks, and for the first
            time I know exactly what I want out of it. One more note for the
            nerds: a language model (an internal one, before anyone panics)
            turned out to be very good at the data farming, the Cpk, the
            charts, the outlier and multimodality hunts, and I recommend it
            without reservation.
          </P>

          <div className="term my-6 p-4 text-xs leading-relaxed">
            <div className="mb-2 text-text-dim">
              <span className="text-amber glow-amber">[ notes ]</span> arcana
              I didn&apos;t know in July
            </div>
            <ul className="list-disc space-y-1 pl-5 text-text">
              <li>
                Everything in the flow is &quot;at risk&quot; until it passes
                a tester. You place testers,{" "}
                <A href="https://en.wikipedia.org/wiki/Automated_optical_inspection">
                  AOI
                </A>{" "}
                and{" "}
                <A href="https://en.wikipedia.org/wiki/Automated_X-ray_inspection">
                  AXI
                </A>{" "}
                through the process so that when something goes wrong you can
                tell <em>where</em>, not just that.
              </li>
              <li>
                Package strain moves a bandgap reference. It&apos;s the{" "}
                <A href="https://rincon-mora.gatech.edu/publicat/jrnls/tcasii01_bg_pack.pdf">
                  piezojunction effect
                </A>
                : stress shifts the base-emitter voltages the reference is
                built from, and plastic packaging alone can move one by
                millivolts. At Tesla we only cared about strain when chips
                popped off the board.
              </li>
              <li>
                Reflow sets a solder joint&apos;s microstructure and{" "}
                <A href="https://link.springer.com/article/10.1007/s11664-016-4471-z">
                  heat coarsens it
                </A>{" "}
                for the rest of its life, which is why time above liquidus is
                a reliability number and why factories run their ovens as cool
                as they can get away with.
              </li>
              <li>
                Hot-bar temperature has to match the{" "}
                <A href="https://www.protoexpress.com/blog/how-to-pick-the-right-flex-pcb-materials/">
                  flex laminate
                </A>
                : a higher-temperature solder wants a polyimide flex, and LCP
                only gets you so far.
              </li>
              <li>
                Failure analysis is a catalogue, and knowing which tool to
                reach for is the craft: cross-section (done by hand, which
                shocked me), CT, FTIR, EDS, and the AOI/AXI images you already
                paid for.{" "}
                <A href="https://www.eag.com/techniques/">
                  EAG&apos;s technique index
                </A>{" "}
                is the best map of it I&apos;ve found.
              </li>
              <li>
                Incoming and outgoing inspection, die handling and tape
                choices, and{" "}
                <A href="https://en.wikipedia.org/wiki/ANOVA_gauge_R%26R">
                  gauge R&amp;R
                </A>
                . I have a list.
              </li>
            </ul>
          </div>

          <H2>The build report</H2>
          <P>
            Every night I wrote the build report, the email to Cupertino
            about the day. It taught me one thing about time, one about what
            people read first, and one about culture. The first is that
            Cupertino is always behind. Our team was half a day behind the
            line, because the line moved while we were in meetings. By the
            time we&apos;d caught up at the twice-daily cross-functional and
            written it down and Cupertino had woken up and read it and decided
            something, they were a day and a half behind. Which is an
            argument, if you needed one, for lesson one: the decision belongs
            to whoever is standing on the line.
          </P>

          <P>
            The second is what goes at the top. Material flow. Senior people
            want to see that units are moving and nothing is stuck: the batch
            names, where each one is, what it&apos;s going through. Then the
            day&apos;s failures, which scale directly into parts per million.
            Then the notes. I put a fun photo at the bottom every day and
            people mentioned it when I got home, which I choose to take as
            praise.
          </P>

          <Shot
            file="canteen-lunch.jpg"
            alt="A factory canteen lunch tray: stir-fried vegetables, purple rice, egg-drop soup, a croissant with fruit, a Yakult and a bottle of oolong tea"
            caption="lunch at the factory canteen. croissant, yakult, oolong tea. this one never made the build report."
            aspect="4 / 3"
            fit="contain"
          />

          <Shot
            file="asleep-in-the-shuttle.jpg"
            alt="Frank asleep in the back seat of a car, mouth slightly open, elevated highway visible through the window"
            caption="the shuttle home. the build report got written after this, most nights."
            aspect="3 / 4"
            fit="contain"
            narrow
          />

          <P>
            The culture thing: they asked me to stop putting emojis in it. It
            was a tell for something I noticed everywhere on the trip,
            including shuttle rides with no small talk in them. Apple takes
            itself extremely seriously. Earnestness reads as weakness;
            goofiness reads as not understanding the stakes. I don&apos;t love
            it. I also can&apos;t argue with the hardware it ships. And I can&apos;t
            rule out that some of what I read as culture is class. Everyone on
            that trip had a master&apos;s or a PhD from a school you&apos;ve
            heard of. I have a bachelor&apos;s from a Canadian school you
            haven&apos;t, from a half Irish Catholic, half Anglican working
            family that shaped how I talk and how hard I work. I am not going
            to change the first, and the second is the only thing that has
            ever gotten me hired.
          </P>

          <P>
            Here&apos;s what the no-name school bought me. I got a lot wrong
            on this trip. I asked Wen things and was wrong. I asked questions
            in the big meeting and was wrong. I thought I had let go of the
            pride that minds that, and then it cost me a day in the lab. But I
            want to learn more than I want to look smart, and what surprised
            me is how often the dumb question paid out for someone else. In
            our Systems EE breakouts I&apos;d ask one and someone five years in would go,
            &quot;huh, yeah, why do we do it that way?&quot; or &quot;huh,
            what does that acronym actually stand for?&quot; The dumb question
            is a service. It is also the only version of Wen&apos;s barking
            I&apos;m allowed.
          </P>

          <H2>October</H2>
          <P>
            I go back in October, to a different, much more mature factory
            where a lot less goes wrong, and I plan to spend it doing what Wen
            did: ignoring the electronics, watching hands, and taking notes on
            what a line looks like when it&apos;s dialed in. Then, on the
            next build, back to a line that isn&apos;t, with a better picture
            of what I&apos;m trying to make it into.
          </P>

          <P>
            Because that is the gap, when I&apos;m honest about it. Wen could
            see the factory he wanted. I can&apos;t yet, not exactly, not
            operator by operator. What I have instead are the two things I
            own: the data, because I have no hunches yet, and the dumb
            question, because it is the only bark I&apos;m allowed. Wen saw a
            mop. I would have walked past it. A million actions a day, every
            one of them directionally correct, and October is for finding out
            what else I walk past.
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
