/* Single source of truth for the 3D panels AND the classic view. */
export const CONTENT = {
  home: { eye: '01 / HOME', title: 'About me', body: '<p>Applied linguist with a technology focus. I design and build things that improve how people and machines talk to each other.</p>', tags: ['Conversation Design', 'Generative AI', 'Product Design', 'Applied Linguistics', 'UX Design', 'Conversation Analysis', 'Mandarin Chinese', 'Korean'], list: ['Generative AI Analyst', 'Conversation Designer', 'Product Designer', 'Applied Linguistics Researcher'], cta: 'Step inside the cottage', room: true },
  dome: { eye: '02 / QUALIFICATIONS', title: 'The Glass Conservatory', body: '<p>Experience, education, credentials, grants and awards.</p>', list: ['NVIDIA \u00b7 JumpstartAI \u00b7 Duolingo English Test', 'PhD, EdM, MA', '3 certifications', '4 grants, 12 awards'], cta: 'Step inside the conservatory', room: true },
  museum: { eye: '03 / PROJECTS', title: 'The Project Museum', body: '<p>One gallery per project. Walk in and pick an exhibit.</p>', list: ['GOALL - Chinese reading app', 'UX &amp; conversation design', 'Tangle with Ann - Zendala course'], cta: 'Step inside the museum', room: true },
  library: { eye: '04 / RESEARCH', title: 'The Research Library', body: '<p>Conversation analysis, second language learning, and human\u2013AI interaction.</p>', list: ['10 peer-reviewed articles', '4 chapters &amp; proceedings', '7 working papers', '1 book review'], cta: 'Step inside the library', room: true },
  school: { eye: '05 / TEACHING', title: 'The University', body: '<p>Teaching philosophy and seventeen courses across two universities.</p>', list: ['UH M\u0101noa \u00b7 6 courses', 'Hawai\u02bbi Pacific University \u00b7 11 courses'], cta: 'Step inside the university', room: true },
  court: { eye: '06 / PLAY', title: 'The pickleball court', body: '<p>Of course there is a pickleball court. It is here because I like it, not because it proves anything.</p><p class="muted">Try clicking the loose balls on the grass.</p>', list: [] },
};
/* ============ real content, mapped from anndtai.com ============ */
const L = {
  linkedin: 'https://www.linkedin.com/in/ann-t-choe/',
  dribbble: 'https://dribbble.com/diane2837',
  github: 'https://github.com/anntaichoe',
  scholar: 'https://scholar.google.com/citations?user=m7vYqyEAAAAJ&hl=en',
  rgate: 'https://www.researchgate.net/profile/Ann-Choe/research',
  goall: 'https://www.goall.app/',
  zendala: 'https://www.annadenning.com/zendala-drawing-course'
};
const A = (href, text) => '<a href="' + href + '" target="_blank" rel="noopener">' + text + '</a>';
const UL = (items, cls) => '<ul' + (cls ? ' class="' + cls + '"' : '') + '>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul>';
const H = t => '<p class="sub">' + t + '</p>';
const Q = (text, cite) => '<figure class="quote"><p>\u201c' + text + '\u201d</p><cite>' + cite + '</cite></figure>';

export const INFO = {
  /* --- cottage --- */
  home_board: { eye: 'HOME · CORK BOARD', title: 'Who I am',
    body: '<p>An applied linguist with a technology focus, designing and building things that improve how people and machines talk to each other.</p>'
      + H('Find me')
      + '<p class="links">' + A(L.linkedin, 'LinkedIn') + A(L.scholar, 'Google Scholar') + A(L.github, 'GitHub') + A(L.dribbble, 'Dribbble') + A(L.rgate, 'ResearchGate') + '</p>',
    list: [] },
  home_desk: { eye: 'HOME \u00b7 THE DESK', title: 'What I do',
    body: '',
    list: ['Lead Generative AI Analyst at NVIDIA', 'Lecturer at the University of Hawai\u02bbi at M\u0101noa', 'Others: researcher, designer &amp; builder'] },
  home_dogs: { eye: 'HOME \u00b7 THE DOG BEDS', title: 'Junbi & Jjanggu',
    body: '<p>The two most important members of the household.</p>',
    list: ['<b>Junbi</b> (F) \u00b7 adopted 2025 at 10 months old. Her name means \u201cget ready\u201d in Korean.',
           '<b>Jjanggu</b> (M) \u00b7 adopted 2026 at 9.5 weeks old. His name means \u201ca big forehead\u201d in Korean.'] },

  /* --- library: research --- */
  lib_shelves: { eye: 'RESEARCH · SHELVES', title: 'Publications',
    body: H('Peer-reviewed journal articles')
      + UL([
        'Choe &amp; Kang (2026). Scales for assessing personal appearance in Korean variety shows. <i>Journal of Pragmatics</i>, 261, 93–131. ' + A('https://doi.org/10.1016/j.pragma.2026.04.012', 'DOI'),
        'Jin &amp; Choe (2026). Learners’ attitudes and AI-supported argumentative writing. <i>Journal of Computer Assisted Learning</i>, 42(2). ' + A('https://doi.org/10.1002/jcal.70232', 'DOI'),
        'Choe &amp; Huang (2026). Pedagogical saliency with <i>honh</i> in Taiwan Mandarin. <i>Interactional Linguistics</i>, 6(1), 66–94. ' + A('https://doi.org/10.1075/il.24023.cho', 'DOI'),
        'Chang, Choe, Holden, &amp; Isbell (2023). Revising an ESL composition profile rubric. <i>Language Testing</i>, 41(2). ' + A('https://doi.org/10.1177/02655322231217979', 'DOI'),
        'Choe &amp; Yagi (2023). Embodied remembering in coordinated performances. <i>Multimodal Communication</i>, 12(2), 99–122. ' + A('https://doi.org/10.1515/mc-2022-0029', 'DOI'),
        'Choe, Nguyen, &amp; Vicentini (2022). Managing epistemic stances in online searches. <i>TESOL in Context</i>, 30(2), 9–33. ' + A('https://doi.org/10.21153/tesol2022vol30no2art1517', 'DOI'),
        'Nguyen, Choe, &amp; Vicentini (2022). L2 learning opportunities in online search sequences. <i>Classroom Discourse</i>, 13(2), 145–163. ' + A('https://doi.org/10.1080/19463014.2021.2023597', 'DOI'),
        'Kyle, Eguchi, Choe, &amp; LaFlair (2022). Register variation across technology-mediated learning. <i>Language Testing</i>. ' + A('https://doi.org/10.1177/02655322211057868', 'DOI'),
        'Kyle, Choe, Eguchi, LaFlair, &amp; Ziegler (2021). Spoken and written language use in traditional and technology-mediated learning. <i>ETS Research Report Series</i>. ' + A('https://doi.org/10.1002/ets2.12329', 'DOI'),
        'Choe (2018). Managing student embarrassment in the adult ESL classroom. <i>Hacettepe University Journal of Education</i>, 33, 16–35. ' + A('https://doi.org/10.16986/HUJE.2018038794', 'DOI')
      ], 'pubs')
      + H('Book chapters &amp; proceedings')
      + UL([
        'Isbell et al. (2027). Investigating Duolingo English Test washback. In <i>The Routledge Handbook of Digital Language Assessment</i>, 287–305.',
        'Wang et al. (in review). Multiʻōlelo’s legacy and future. Cambridge University Press.',
        'Choe &amp; Yagi (2022). Embodied remembering in coordinated performances. <i>Proceedings of the 5th CAN-Asia Symposium on L2 Interaction</i>, 45–55.',
        'Choe &amp; Reddington (2020). But-prefacing for refocusing in public talk. In <i>Communicating with the Public</i>, 87–110. Bloomsbury. ' + A('https://doi.org/10.5040/9781350098213.ch-005', 'DOI')
      ], 'pubs')
      + H('Working papers')
      + UL([
        'Choe (2025). AI as empowerment in the applied linguistics classroom. <i>HPU Working Paper Series</i>, 23, 67–72.',
        'Choe (2024). Using AI to enhance language teaching: Introduction. <i>HPU Working Paper Series</i>, 22, 89–90.',
        'Chang, Choe, Holden, &amp; Isbell (2022). Evaluating HELP’s writing placement rubric. <i>Second Language Studies</i>, 40(1). ' + A('https://www.hawaii.edu/sls/wp-content/uploads/Chang-et-al.-2022.pdf', 'PDF'),
        'Phung et al. (2020). The Multiʻōlelo initiative. <i>Second Language Studies</i>, 38(1). ' + A('https://www.hawaii.edu/sls/wp-content/uploads/Phung-et-al.-2020.pdf', 'PDF'),
        'Choe &amp; Reddington (2018). But-prefacing in public questioning and answering. <i>TC Columbia Working Papers</i>, 18(1), 44–50.',
        'Choe (2016). A critical review of Pimsleur language learning programs. <i>HPU Working Paper Series</i>, 14, 108–120.',
        'Tai &amp; Tregelles (2012). Inquiry-based learning: gender stereotypes in advertising. <i>HPU TESOL Working Paper Series</i>, 10, 107–137.'
      ], 'pubs')
      + H('Book review')
      + UL(['Choe (2022). Review of Roever’s <i>Teaching and Testing Second Language Pragmatics and Interaction</i>. <i>TESOL in Context</i>, 30(2), 63–67. ' + A('https://doi.org/10.21153/tesol2022vol30no2art1567', 'DOI')], 'pubs'),
    list: [] },
  lib_papers: { eye: 'RESEARCH · THE PAPERS', title: 'Research interests',
    body: '<p>My work sits where conversation analysis, second language learning, and digital interaction meet. I study multilingual interaction in institutional and educational settings using ethnomethodology and conversation analysis.</p>'
      + '<p>A growing strand looks at human–AI interaction and AI-supported learning: how learners regard tools like ChatGPT, generative AI in the applied linguistics classroom, and how human-made podcasts compare with AI-generated ones.</p>',
    list: ['Conversation Analysis &amp; EMCA', 'Human–AI interaction', 'Second language learning', 'Multimodality &amp; embodiment', 'Language assessment'] },

  /* --- school: teaching --- */
  sch_board: { eye: 'TEACHING · THE WHITEBOARD', title: 'Teaching philosophy',
    body: '<p>My teaching philosophy centers on creating the optimal conditions for learning. I design interactive, project-based experiences that connect course content to students’ real-world needs and interests.</p>'
      + '<p>In my classroom, students are active participants - collaborating, problem-solving, and applying concepts in ways that are immediately meaningful to them. I also believe in bringing current, up-to-date knowledge into the classroom, ensuring that what we discuss reflects the latest developments in the field.</p>'
      + '<blockquote>“If we teach today’s students as we taught yesterday’s, we rob them of tomorrow.” - John Dewey</blockquote>',
    list: [] },
  sch_desks: { eye: 'TEACHING \u00b7 THE DESKS', title: 'Courses',
    body: H('University of Hawai\u02bbi at M\u0101noa <span class="muted">2019-2021, 2025-present</span>')
      + UL(['<b>SLS 150</b> Learning Languages and Communicating Interculturally',
            '<b>SLS 302</b> Second Language Learning',
            '<b>SLS 303</b> Second Language Teaching',
            '<b>SLS 480E</b> Language Learning with Apps',
            '<b>SLS 675</b> Second Language Qualitative Research',
            '<b>SLS 680R</b> Conversation Analysis for Human-Computer Interaction <span class="muted">next semester</span>'])
      + H('Hawai\u02bbi Pacific University <span class="muted">2023-2024</span>')
      + UL(['<b>UNIV 1000</b> First Year Success Seminar',
            '<b>AL 3500</b> Second Language Learning and Teaching',
            '<b>AL 3950</b> Language Classroom Experience',
            '<b>AL 3740</b> Technology in Language Teaching',
            '<b>AL 4710</b> Teaching Listening and Speaking',
            '<b>AL 4720</b> Teaching Reading and Writing',
            '<b>AL 4960</b> Practice Teaching',
            '<b>AL 6720</b> Second Language Reading and Writing',
            '<b>AL 6740</b> Research &amp; Issues in CALL',
            '<b>AL 6961</b> Practicum I in TESOL',
            '<b>AL 7099</b> Practicum II and Capstone']),
    list: [] },
  sch_testimonials: { eye: 'TEACHING \u00b7 TESTIMONIALS', title: 'Testimonials',
    body: '<p>Comments from student course evaluations, 2019-2026.</p>'
      +     Q('The instructor\u2019s strength is being very open, flexible, and approachable. This created a supportive learning environment where I felt comfortable participating and sharing ideas.', 'SLS 675 \u00b7 Spring 2026')
      +     Q('The instructor encouraged a lot of critical thinking through examples, definitions, theories, and open discussions based on the readings.', 'SLS 675 \u00b7 Spring 2026')
      +     Q('Passionate and intelligent instructor with the right amount of warmth, push, and encouragement.', 'SLS 480E \u00b7 Fall 2025')
      +     Q('I think that the professor was very knowledgeable, gracious, flexible, open, and understanding. I wish she taught more courses, because I would take them.', 'SLS 480E \u00b7 Fall 2025')
      +     Q('Ann Tai was the best professor and encouraged all students to challenge ideologies, apply their own perspectives, and have discussions about differing views', 'SLS 480E \u00b7 Fall 2025')
      +     Q('She broke down the SLS theories in a digestible manner.', 'SLS 480E \u00b7 Fall 2025')
      +     Q('She is a truly one of the best instructors I\u2019ve had. She really pays attention to detail, it truly shocked me.', 'SLS 150 \u00b7 Spring 2021')
      +     Q('She was always available, provided amazing feedback, and always motivated learners like me.', 'SLS 302 \u00b7 Fall 2020')
      +     Q('Really an individual who cares. She seems to be very knowledgeable about SLS at a level much beyond this course. But she is able to use her expertise to teach us the basic things.', 'SLS 302 \u00b7 Fall 2020')
      +     Q('There was not one class where I didn\u2019t want to come to class. Every class was super fun and highly informational on what we were learning in each class.', 'SLS 303 \u00b7 Fall 2019')
      +     Q('I liked how she tailored the class to each student and motivated each and every one of us to do our best and beyond.', 'SLS 303 \u00b7 Fall 2019')
      +     Q('She made the class challenging and got me thinking in many different and creative ways.', 'SLS 303 \u00b7 Fall 2019')
      +     Q('The instructor is really caring and helps us get the best from the materials.', 'SLS 303 \u00b7 Fall 2019'),
    list: [] },

  /* --- museum: projects --- */
  mus_one: { eye: 'PROJECTS · GALLERY ONE', title: 'GOALL',
    body: '<p>An AI-powered Chinese language learning app that helps learners build reading skills from texts they bring themselves. Co-founded with Dr. Susanne DeVore; it grew out of first prize at the 2022 PACE Venture Competition.</p>'
      + '<p class="links">' + A(L.goall, 'goall.app') + '</p>', list: [] },
  mus_two: { eye: 'PROJECTS · GALLERY TWO', title: 'UX & conversation design',
    body: '<p>Certified product designer and conversation designer. I work in Figma and bring linguistic insight to interactions so they sound natural and stay on-brand.</p>'
      + '<p class="links">' + A(L.dribbble, 'Portfolio on Dribbble') + '</p>', list: [] },
  mus_three: { eye: 'PROJECTS · GALLERY THREE', title: 'Tangle with Ann',
    body: '<p>A ten-lesson online course on Zentangle and Zendala, designed and taught as a certified Zentangle teacher.</p>'
      + '<p class="links">' + A(L.zendala, 'Take the course') + '</p>', list: [] },

  /* --- conservatory: qualifications --- */
  dome_certs: { eye: 'QUALIFICATIONS · CERTIFICATES', title: 'Credentials',
    body: '', list: ['Conversation Design - Conversational Academy, 2023', 'Product Design - Dribbble, 2022', 'Artificial Intelligence &amp; Machine Learning - Texas McCombs School of Business, 2021'] },
  dome_desk: { eye: 'QUALIFICATIONS · THE DESK', title: 'Work experience',
    body: UL([
      '<b>Lead Generative AI Analyst</b> · NVIDIA <span class="muted">Nov 2024 - present</span>',
      '<b>AI Solutions Consultant</b> · JumpstartAI <span class="muted">Jan 2024 - Oct 2024</span>',
      '<b>AI Data Specialist</b> · Duolingo English Test <span class="muted">Nov 2021 - May 2022</span>'
    ]) + H('What I bring') + '<p>Conversation design, product design, generative AI evaluation, human-computer interaction, multimodality, and applied linguistics - in English, Mandarin Chinese and Korean.</p>',
    list: [] },
  dome_diplomas: { eye: 'QUALIFICATIONS · DIPLOMAS', title: 'Education',
    body: UL([
      '<b>PhD, Applied Linguistics</b> · University of Hawaiʻi at Mānoa <span class="muted">2023</span>',
      '<b>EdM, Applied Linguistics</b> · Teachers College, Columbia University <span class="muted">2017</span>',
      '<b>MA, TESOL</b> · Hawaiʻi Pacific University <span class="muted">2013</span>'
    ]), list: [] },
  dome_awards: { eye: 'QUALIFICATIONS · THE SHELF', title: 'Grants & awards',
    body: H('Grants')
      + UL([
        'Access Pakistan Teacher Training &amp; Cultural Exchange, U.S. Dept. of State / HPU - Lead Instructor <span class="muted">Oct 2024</span>',
        'Duolingo English Test, UH Mānoa - Research Assistant <span class="muted">Sep 2024 - Jun 2025</span>',
        'Educational Testing Service (ETS), UH Mānoa - Research Assistant <span class="muted">2018–2019</span>',
        'Robert Wood Johnson Foundation, Teachers College - Research Assistant <span class="muted">2016–2017</span>'
      ])
      + H('Awards')
      + UL([
        'Best AI Project - Honolulu Tech Week Hackathon <span class="muted">2024</span>',
        'Calvin Shindo Student Venture Fund - PACE, Shidler College of Business <span class="muted">2024</span>',
        'Achievement Scholarship - UH Mānoa Second Language Studies <span class="muted">2023</span>',
        'CPB Foundation Scholarship - Central Pacific Bank <span class="muted">2023</span>',
        'AAAL Graduate Student Award <span class="muted">2023</span>',
        'Graduate Dean’s Scholarship - UH Mānoa <span class="muted">2023</span>',
        'Merit-Based Award in Mentorship - UH Mānoa GSO <span class="muted">2022</span>',
        'Venture Competition First Prize - PACE, Shidler College of Business <span class="muted">2022</span>',
        'Bilinski Dissertation Fellowship <span class="muted">2021–2022</span>',
        'Dean’s Special Fund - UH Mānoa College of LLL <span class="muted">2018</span>',
        'Teachers College Scholarship - Columbia University <span class="muted">2016</span>',
        'Annual Teachers of Excellence Award - Chinese Culture University <span class="muted">2014</span>'
      ]),
    list: [] }
};

