import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "YC F26: the proof point I didn't have",
  description:
    "My Y Combinator interview for sev10: twenty-four hours' notice, ten minutes with two partners, rejected by 9 PM, and the proof point I didn't have.",
};

const IMAGE_DIR = "/images/blog/yc-interview/";

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

// A photo or screenshot framed as a little terminal window, with a title bar
// and a comment-style caption.
function Shot({
  file,
  alt,
  caption,
  aspect = "3 / 2",
  className = "",
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, 672px",
}: {
  file: string;
  alt: string;
  caption: string;
  aspect?: string;
  className?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <figure className={`term my-6 overflow-hidden ${className}`}>
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ view {file}
      </div>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image
          src={IMAGE_DIR + file}
          alt={alt}
          fill
          sizes={sizes}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> {caption}
      </figcaption>
    </figure>
  );
}

// The one-minute founder video, framed in the same terminal window as a photo.
function YouTubeEmbed() {
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ play founder-video.mov · 59.7s
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src="https://www.youtube.com/embed/wFCZqD_hW_k"
          title="sev10 founder video · YC Fall 2026 application"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> the founder video from the
        application. one minute, with a third of a second to spare.
      </figcaption>
    </figure>
  );
}

// An excerpt of the voice-mode mock interview, replayed as a log file.
function PracticeLog() {
  const lines: { who: "claude" | "me"; text: string }[] = [
    {
      who: "claude",
      text: "What do you believe about this space that almost everyone smart in it thinks is wrong?",
    },
    {
      who: "me",
      text: "The people smart in AI look at this problem and say it's too boring. The people smart in the domain say AI could never do it. I'm sitting at the confluence. I know they're both wrong.",
    },
    {
      who: "claude",
      text: "That's your single best weapon. Be ready for the counter: “okay, prove the AI can actually do it.” Want to prep that proof point?",
    },
    { who: "me", text: "I mean… I don't have that proof point." },
    {
      who: "claude",
      text: "Okay. That's the gap to close before the interview. Honestly, it might be the most important one.",
    },
    {
      who: "me",
      text: "The interview is, like, I'm leaving for the interview in twenty minutes.",
    },
  ];
  return (
    <figure className="term my-6 overflow-hidden">
      <div className="border-b border-line bg-black/25 px-3 py-1.5 text-xs text-text-dim">
        ▸ replay voice-drill.log · recorded twenty minutes before I left
      </div>
      <div className="space-y-3 p-4 text-xs leading-relaxed">
        {lines.map((l, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-x-3">
            <span
              className={l.who === "me" ? "text-green" : "text-text-dim"}
            >
              {l.who === "me" ? "me    >" : "claude>"}
            </span>
            <span className={l.who === "me" ? "text-text" : "text-text-dim"}>
              {l.text}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="px-3 py-2 text-xs text-text-dim">
        <span className="text-green-dim">//</span> the outcome of the interview,
        decided in my car, nine hours before the rejection email
      </figcaption>
    </figure>
  );
}

export default function YcInterviewPost() {
  return (
    <div className="wrap py-10 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          path="~/blog"
          command="cat yc-interview.md"
          title="YC F26: twenty-four hours' notice, ten minutes in the room, and the proof point I didn't have"
        >
          Y Combinator interview, Fall 2026 batch · 2026-08-07
        </SectionHeader>

        <article>
          <P>
            Twenty minutes before I left for my Y Combinator interview, I said
            out loud, to an AI: &ldquo;I don&apos;t have that proof
            point.&rdquo; Nine hours later, YC said the same thing back to me,
            more politely, in writing.
          </P>

          <P>
            That&apos;s the short version. The long version starts three weeks
            earlier, with an application I filled out on a whim, and ends with
            me at home at 9:01 PM refreshing my inbox and feeling like a total
            failure. I want to write the whole arc down while it still stings,
            because the stinging part is the record: what the process actually is, what the room is actually like, and exactly where I
            lost it.
          </P>

          {/* interview info screen: details preserved here for the record */}
          <div className="term my-6 p-4 text-xs leading-relaxed">
            <div className="mb-2 text-text-dim">
              <span className="text-amber glow-amber">[ info ]</span> interview
              details
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <dt className="text-green-dim">company</dt>
              <dd className="text-text">
                sev10: AI agents for safety-critical hardware documentation
                (FMEDA / DFMEA, ISO 26262)
              </dd>
              <dt className="text-green-dim">batch</dt>
              <dd className="text-text">Fall 2026 · applied solo, pre-product, pre-revenue</dd>
              <dt className="text-green-dim">where</dt>
              <dd className="text-text">
                560 20th St, San Francisco · in person, a &ldquo;small-scale
                experiment&rdquo; for local applicants
              </dd>
              <dt className="text-green-dim">when</dt>
              <dd className="text-text">
                August 7, 2026 · 2:15 PM PDT · notice given August 6, 2:15 PM.
                Twenty-four hours, to the minute.
              </dd>
              <dt className="text-green-dim">partners</dt>
              <dd className="text-text">
                Francois Chaubard (founder, Focal Systems) · Andrew Miklas
                (co-founder &amp; CTO, PagerDuty)
              </dd>
              <dt className="text-green-dim">result</dt>
              <dd className="text-amber glow-amber">
                rejected at 9:01 PM the same day · &ldquo;strongly encourage
                you to re-apply&rdquo;
              </dd>
              <dt className="text-green-dim">links</dt>
              <dd className="flex flex-wrap gap-x-3">
                <A href="https://youtu.be/wFCZqD_hW_k">founder video ↗</A>
                <A href="https://www.ycombinator.com/interviews">
                  yc on interviews ↗
                </A>
              </dd>
            </dl>
          </div>

          <H2>The application</H2>
          <P>
            I applied about a week before the deadline, on a whim. The honest
            goal was to fill out the application and get to know the process, not to get in. I&apos;d just watched my hackathon summer wind down
            and figured the application itself would teach me something.
          </P>

          <P>
            It did, immediately: the application has very little to do with
            your idea. After the founder profiles, the equity questions, the
            revenue questions, and the how-will-you-make-money questions, the
            idea itself is maybe ten percent of the form. I think that&apos;s
            the application quietly telling you what being a founder actually
            is. The product is supposed to be the easy part. Sales, people,
            legal, equity: that&apos;s the job. A good founder gets that
            machinery sorted first so they can spend their attention on
            product. I am not yet that founder, and the form knew it before I
            did.
          </P>

          <P>
            The other thing that ate my time was the founder video. One minute,
            hard limit. Getting a company into sixty seconds is a compression
            exercise: every cut is a decision about what the company
            actually is. The take I kept came in at 59.7 seconds:
          </P>

          <YouTubeEmbed />

          <H2>The nudge</H2>
          <P>
            Three days after the deadline I got a message from Kulveer, a YC
            partner. I&apos;d braced for silence, so any message at all was a shock, and when I skimmed it I initially read it as the soft
            no: <em>you don&apos;t have a co-founder, sorry.</em> It
            wasn&apos;t. It was a push.
          </P>

          <Shot
            file="cofounder-nudge.png"
            alt="Message from YC partner Kulveer: your application looks strong, but it could be even stronger with a co-founder"
            caption="not a rejection. a homework assignment."
            aspect="1718 / 680"
            fit="contain"
          />

          <P>
            This is YC, so I did everything I could. I worked my network from
            the top down, starting with the people I&apos;d most want to build
            a company with and burning downward. I did what a good (bad)
            Newfoundlander does and tried to braindrain the NL tech scene on
            the way.
          </P>

          <P>
            The scramble taught me two things. First: I had pinned my weakness
            in the application as sales, because my last product died from a
            lack of it, so I assumed I needed a sales co-founder. My friend
            Tom quoted <em>Founders at Work</em>-adjacent scripture at me:
            founder sales. A sales hire is useless before there&apos;s a sales
            motion for them to run. What I actually needed was someone as
            generally excited about this as me. Second, and I don&apos;t think
            I&apos;m done learning this one: co-founder trust is the scarce
            resource. Most startups die of co-founder fights, and the fix
            isn&apos;t a LinkedIn search, it&apos;s years. The people I&apos;d
            bank on have stable jobs and lives. Either I eventually convince
            one of them, or I keep showing up at hackathons and founder events
            until the network produces someone, and both of those are slow.
          </P>

          <P>
            One more thing about the nudge, because it matters later: since
            I&apos;d misread it as a pass, I did no interview prep. None. The
            application was the prep.
          </P>

          <H2>Twenty-four hours</H2>
          <P>
            The interview invite arrived Thursday at 2:15 PM. The interview was
            Friday at 2:15 PM. Twenty-four hours of notice, exactly, to the
            minute, and I didn&apos;t see the email until two hours in,
            driving home from work.
          </P>

          <Shot
            file="interview-invite.png"
            alt="YC email inviting an in-person interview at 560 20th St, San Francisco, one day later"
            caption="sent thursday 2:15pm. interview friday 2:15pm. also: consent to the AI note-taker or don't come."
            aspect="1510 / 1382"
            fit="contain"
          />

          <P>
            Two details in that email I love. This batch was the first time in
            years YC did interviews in person at all: a small experiment, only
            for applicants who&apos;d said they were local. And the interview
            for my AI company would have an AI note-taker in the room, with a
            consent clause: if you don&apos;t agree, don&apos;t attend.
          </P>

          <P>
            The moment I got home: Claude, voice mode, drill me. What does
            sev10 do. Why are you the right person. Why now. What&apos;s the
            moat. On repeat, in the car, in the kitchen, that night, the next
            morning. I learned something uncomfortable about myself in those
            drills: when the question came veiled (the why-you question dressed up as a contrarian-belief question), I had real trouble
            detecting the root of what was being asked. I&apos;d answer the
            costume instead of the question. I&apos;m a little neurodivergent
            and I think this is the shape it takes under pressure. A co-founder
            would cover exactly this. Failing that, it&apos;s trainable, and I
            now have the transcripts to train on.
          </P>

          <P>
            And then there was one exchange, twenty minutes before I left, that
            in hindsight was the whole interview happening early:
          </P>

          <PracticeLog />

          <P>
            I said it out loud and left anyway. There was nothing else to do; you can&apos;t build the proof point in twenty minutes. But I want
            the record to show that I knew. Somewhere under the adrenaline, I
            drove to the interview already knowing exactly which question was
            going to end me.
          </P>

          <P>
            The drilling wasn&apos;t wasted, for what it&apos;s worth. By the
            time I parked I could answer the straight versions cold. It just
            turns out the straight versions weren&apos;t the test.
          </P>

          <H2>Inside 560 20th St</H2>
          <P>
            Getting inside YC is a treat I&apos;m not going to pretend I&apos;m
            too cool for. This is the building where a meaningful fraction of
            the software I use daily got its start, and walking in as an
            interviewee, even a doomed one, felt like being handed a day
            pass to a place I&apos;d only read about. Partners wandered the
            cafeteria eating lunch like it was nobody&apos;s business. I sat at
            a table with a little acrylic sign that said Interview Track 1 and
            tried to act like I belonged there.
          </P>

          <Shot
            file="yc-sign.jpg"
            alt="Frank smiling in front of the orange Y Combinator sign"
            caption="day pass. water bottle for the nerves."
            aspect="3 / 4"
          />

          <Shot
            file="office-hours-simulator.jpg"
            alt="Selfie with the YC Office Hours Simulator booth: an orange acoustic-foam booth with a mic, a stool, and a screen reading WHICH YC PARTNER WILL YOU GET?"
            caption="the legendary office hours simulator booth. WHICH YC PARTNER WILL YOU GET? brother, I was about to find out for real."
            aspect="3 / 4"
          />

          <Shot
            file="interview-track-1.jpg"
            alt="An acrylic table sign reading Y / Interview Track 1, in the YC cafeteria"
            caption="track 1. the napkins were for the founders, I assume."
            aspect="3 / 4"
          />

          <H2>Ten minutes</H2>
          <P>
            I&apos;d assumed I&apos;d be interviewed by Kulveer, since he was
            the partner who&apos;d messaged me. Instead: two guys I didn&apos;t
            recognize, who I&apos;d learn afterward were Francois Chaubard (founder of Focal Systems, nine years grinding computer vision into enterprise retail) and Andrew Miklas, co-founder and founding CTO
            of PagerDuty. Both hardware-adjacent, both deeply technical. At the
            time they were just two strangers who sat down and started
            swinging.
          </P>

          <P>
            First question, after &ldquo;what does sev10 do&rdquo;:
            &ldquo;We don&apos;t understand. Explain to us what this safety
            documentation is.&rdquo; My first reaction, privately, was that
            this was a bit naive. Who doesn&apos;t know that safety-critical
            hardware ships with a mountain of safety documentation? My second
            reaction, later, was that naive questions from smart people
            aren&apos;t naive. In the age of AI, when anyone can sound fluent
            about anything, the founders worth funding are the ones who
            actually know their domain cold, and the fastest way to test that
            is to make them teach it. So I taught it. I walked through how an
            FMEDA works, painfully, from failure modes to diagnostic coverage,
            and I think I cleared the bar, because they moved on instead of
            digging.
          </P>

          <P>
            If I could redo one logistical thing: I&apos;d have walked in with
            printed handouts. File folders. A real FMEDA, a real DFMEA, a
            one-page market brochure: artifacts on the table instead of me
            waving my hands at the air. When they asked about market size I
            gave a bottoms-up analysis out loud that would have landed twice as
            hard as a page they could hold.
          </P>

          <P>
            Some of it landed anyway. They asked what revenue I&apos;d expect
            by demo day and I said a million ARR from ten customers, and
            walked the math. They visibly liked that. Then they grilled the
            enterprise sales plan and visibly did not. One of them pushed the
            thesis that the giants, the Apples and Teslas of the world, think
            they&apos;re god and build everything in-house, and I scrambled to
            the right answer a beat too late: the wedge is the mid-market,
            hardware companies with fifty to five hundred engineers carrying
            the same ISO 26262 burden as Tesla with none of Tesla&apos;s
            functional-safety army. I also told them pivoting to defense or
            medical later would be easy, which I could feel them file under
            &ldquo;unfocused.&rdquo;
          </P>

          <P>
            I made one unforced error: I mentioned that inside big companies,
            electronics engineers mostly don&apos;t embrace AI tools. They
            pounced: &ldquo;that contradicts your whole company.&rdquo; What I
            should have said, and didn&apos;t manage until the drive home, is
            that it&apos;s the entire reason sev10 should exist: those
            engineers don&apos;t have time to learn Claude Code and prompt
            engineering. They need the tool that already speaks FMEDA when
            they open it.
          </P>

          <P>
            And then the question I&apos;d been dreading since the parking
            lot: walk us through exactly how a customer would use this. What
            does the pipeline look like. What&apos;s the harness. And I
            didn&apos;t have it. I said something vague about automating
            versus augmenting that confused them further, and offered
            &ldquo;Cursor, but for safety documents,&rdquo; which is a genre,
            not a product. They were asking what happens in the first five
            minutes after a safety engineer logs in, and I could not tell
            them, because I haven&apos;t built it, and I hadn&apos;t done the
            work of knowing it before building it. They called my bluff. It
            was the right call.
          </P>

          <H2>9:01 PM</H2>
          <P>
            YC decides the same day. The email came at 9:01 PM, while I was
            doing the thing where you refresh your inbox and pretend
            you&apos;re not.
          </P>

          <Shot
            file="rejection-email.png"
            alt="Rejection email from Francois Chaubard: a tough call, exactly the kind of founder we like to fund, but pre-product, pre-revenue, no cofounder; ship the first version and get one real customer using it"
            caption="read it twice. it's a rejection stapled to a to-do list."
            aspect="1512 / 1248"
            fit="contain"
          />

          <P>
            Did I feel embarrassed and dejected that night? Yes. Fully. I sat
            with the specific shame of having been handed a shot most founders
            never get (a solo, pre-product, pre-revenue application pulled into a partner interview) and having shown up without the one
            thing that mattered.
          </P>

          <P>
            But read the email with less fresh-wound eyes and it&apos;s close
            to the best possible no. Every stated reason is stage, not
            substance: pre-product, pre-revenue, no co-founder. Nothing about
            the market being wrong. Nothing about me not knowing my domain.
            The one real technical doubt (can an agent actually do what a safety team does, in a way a safety team would buy?) is exactly
            the question I couldn&apos;t answer in the room, and the email
            hands me the answer key: ship the first version, get one real
            customer using it. There was a lot of noise in my interview
            because I had no signal to give them. The fix is not a better
            interview. The fix is signal.
          </P>

          <H2>What I&apos;m taking</H2>
          <P>
            I wrote a good application; the interview itself proves that. The
            application is a writing problem, and I can write. But the
            interview is a building problem wearing a talking problem&apos;s
            clothes, and no amount of voice-mode drilling covers for the thing
            not existing. Signal is a user and revenue. Ultimately nothing
            else matters. Everything I fumbled (the pipeline question, the harness question, the enterprise sales plan) gets answered
            automatically by the grind of going zero to one, which is the
            REALLY freaking hard part they know all the details live inside
            of. That&apos;s why their advice fits in a sentence.
          </P>

          <P>
            So: build the thing. Put it in front of one real safety team. Get
            one real customer using it, keep working the co-founder search in parallel (it is, verifiably, very lonely solopreneuring) and
            walk back into that building in a couple of months with the signal
            served on a platter, because it&apos;s too hard for them to dig
            for it and they shouldn&apos;t have to.
          </P>

          <P>
            I flew close to the sun this week. I got to spend twenty-four
            hours believing that five hundred grand and a year of runway might
            land in my account on Monday, and I&apos;m not going to pretend
            the taste of that hasn&apos;t changed me. I want it. YC looked at
            me, correctly, and handed me the bitter medicine instead:
            you&apos;re exactly the kind of founder we like to fund. Now go
            become fundable.
          </P>

          <P>See you in a couple of months.</P>

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
