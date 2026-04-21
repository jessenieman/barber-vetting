// Question + section config — single source of truth for the form AND review portal.
window.CCB_SECTIONS = [
  {
    id: "basics",
    number: "01",
    name: "The Basics",
    lede: "Three quick qualifiers. Answer straight.",
    questions: [
      { id: "q1", kind: "single", qualifier: true, negative: ["No"],
        prompt: "Do you hold a current, valid barber license in Florida?",
        options: ["Yes", "No"] },
      { id: "q2", kind: "single", qualifier: true, negative: ["No"],
        prompt: "Are you available to work five days a week, preferably Tuesday through Saturday?",
        options: ["Yes", "No", "I'd need to discuss my schedule"] },
      { id: "q3", kind: "single", qualifier: true, negative: ["No"],
        prompt: "Booth rent is due weekly — no exceptions. Are you prepared to meet that commitment?",
        help: "We're straight with our barbers. We ask you be straight with us.",
        options: ["Yes, I understand and can commit", "I'd need to know more before committing", "No"] }
    ]
  },
  {
    id: "technical",
    number: "02",
    name: "Technical Skills",
    lede: "What you can do with clippers, shears, and a razor.",
    questions: [
      { id: "q4", kind: "multi",
        prompt: "Which of the following services can you perform confidently?",
        help: "Select all that apply.",
        options: ["Fades", "Tapers", "Skin fades", "Beard trims", "Straight razor shaves", "Hot towel service", "Kids' cuts", "Long hair / scissor work", "Afro / textured hair", "Blow dry styling"] },
      { id: "q5", kind: "single",
        prompt: "How would you rate your overall technical skill level?",
        options: [
          "Still developing",
          "Solid — can handle most requests",
          "Strong — clients come back specifically for my work",
          "Elite — I can execute virtually anything that sits in my chair"
        ] },
      { id: "q6", kind: "multi",
        prompt: "Do you offer any of these specialty or bonus services?",
        help: "Select all that apply.",
        options: ["Freestyle / design work", "Braiding", "Facial treatments (masks, scrubs)", "Head massage", "None of the above"] },
      { id: "q7", kind: "text", rows: 3,
        prompt: "Describe your strongest service and what makes it stand out.",
        placeholder: "Two or three sentences is plenty.", maxLength: 500 }
    ]
  },
  {
    id: "business",
    number: "03",
    name: "Business Readiness",
    lede: "Your book, your brand, how you fill your chair.",
    questions: [
      { id: "q8", kind: "single",
        prompt: "What best describes your current clientele situation?",
        options: [
          "I have a solid book of regulars",
          "I have some regulars but rely on walk-ins",
          "I'm building my clientele from scratch",
          "It varies"
        ] },
      { id: "q9", kind: "single",
        prompt: "How do you currently manage your bookings and scheduling?",
        options: [
          "I use a booking app and manage it myself",
          "I prefer the shop to handle scheduling",
          "I do a mix of both",
          "I'm flexible and open to whatever works"
        ] },
      { id: "q10", kind: "single",
        prompt: "How often do you post your work on social media?",
        options: ["Daily", "A few times a week", "Once a week or so", "Rarely", "I don't currently post"] },
      { id: "q11", kind: "url", optional: true,
        prompt: "Share a link to your Instagram, portfolio, or any social media where your work is featured.",
        help: "Optional — but it helps.",
        placeholder: "https://instagram.com/yourhandle" }
    ]
  },
  {
    id: "character",
    number: "04",
    name: "Character & Client Experience",
    lede: "The chair is half technical, half human. Talk to us about the human half.",
    questions: [
      { id: "q12", kind: "text", rows: 3,
        prompt: "How do you build rapport with a client you've never met before?",
        placeholder: "Short answer.", maxLength: 600 },
      { id: "q13", kind: "text", rows: 3,
        prompt: "A client isn't happy with their cut. Walk me through how you handle it.",
        placeholder: "Short answer.", maxLength: 600 },
      { id: "q14", kind: "text", rows: 3,
        prompt: "What does a great day at the barbershop look and feel like to you?",
        placeholder: "Short answer.", maxLength: 600 },
      { id: "q15", kind: "text", rows: 3,
        prompt: "How do you contribute to the energy and culture of a shop — not just your chair?",
        placeholder: "Short answer.", maxLength: 600 },
      { id: "q16", kind: "single", reliability: true,
        negative: ["I get frustrated if I'm not busy"],
        prompt: "How do you handle a slow day with light walk-in traffic?",
        options: [
          "I use the time to sharpen my skills or clean my station",
          "I promote myself on social media to drive traffic",
          "I get frustrated if I'm not busy",
          "I stay ready and find ways to stay productive",
          "Other"
        ] }
    ]
  },
  {
    id: "reliability",
    number: "05",
    name: "Reliability & Fit",
    lede: "Where you are in your career and how you show up.",
    questions: [
      { id: "q17", kind: "single", reliability: true,
        negative: ["I'm working on being more consistent", "It depends on circumstances"],
        prompt: "How would you honestly describe your punctuality and consistency?",
        options: [
          "I'm always where I say I'll be",
          "I'm usually reliable, with occasional exceptions",
          "I'm working on being more consistent",
          "It depends on circumstances"
        ] },
      { id: "q18", kind: "single",
        prompt: "Where are you in your barbering career?",
        options: [
          "Just starting out",
          "Building — got skills, growing my clientele",
          "Mid-career — established and looking for the right home",
          "Veteran — I've been doing this a long time"
        ] },
      { id: "q19", kind: "text", rows: 4,
        prompt: "What's the biggest lesson you've learned from a previous shop or work experience — good or bad?",
        placeholder: "Short answer.", maxLength: 800 }
    ]
  },
  {
    id: "final",
    number: "06",
    name: "Final Word",
    lede: "Your floor. Make it count.",
    questions: [
      { id: "q20", kind: "text", rows: 8,
        prompt: "Is there anything else you want Bruce to know about you or why Center City Barbers is the right fit?",
        placeholder: "Take as much or as little space as you need.", maxLength: 2000 }
    ]
  },
  {
    id: "contact",
    number: "07",
    name: "Your Info",
    lede: "Last step. How do we reach you?",
    questions: [
      { id: "fullName", kind: "input", required: true, prompt: "Full name", placeholder: "First and last" },
      { id: "phone", kind: "tel", required: true, prompt: "Phone number", placeholder: "(555) 555-5555" },
      { id: "email", kind: "email", required: true, prompt: "Email address", placeholder: "you@example.com" },
      { id: "years", kind: "number", required: true, prompt: "Years of experience", placeholder: "e.g. 7", min: 0, max: 60 }
    ]
  }
];

// Seed mock candidates for the review portal.
window.CCB_MOCK_CANDIDATES = [
  {
    submittedAt: "2026-04-14T14:22:00",
    fullName: "Marcus Delacroix",
    phone: "(863) 555-0147",
    email: "marcus.delacroix@gmail.com",
    years: 9,
    status: "new",
    answers: {
      q1: "Yes",
      q2: "Yes",
      q3: "Yes, I understand and can commit",
      q4: ["Fades", "Tapers", "Skin fades", "Beard trims", "Straight razor shaves", "Hot towel service", "Long hair / scissor work"],
      q5: "Strong — clients come back specifically for my work",
      q6: ["Freestyle / design work", "Head massage"],
      q7: "Skin fades are my bread and butter — I blend with guards down to a zero and finish with a razor line that holds for two weeks. People travel for it.",
      q8: "I have a solid book of regulars",
      q9: "I use a booking app and manage it myself",
      q10: "A few times a week",
      q11: "https://instagram.com/delacroix.cuts",
      q12: "Firm handshake, ask what they came in for and what they hated about their last cut. Then I shut up and listen before I ever pick up the clippers.",
      q13: "I own it immediately. I ask exactly what's wrong, fix it if I can, and if I can't, the next cut is on me. Never let a client leave unhappy twice.",
      q14: "Music is right, chairs are full, barbers are cracking jokes between clients but locked in during the cut. Energy you can feel from the sidewalk.",
      q15: "I'm the guy who organizes the after-shift food run. I also sweep other people's stations when I'm between clients. Shop pride.",
      q16: "I use the time to sharpen my skills or clean my station",
      q17: "I'm always where I say I'll be",
      q18: "Mid-career — established and looking for the right home",
      q19: "Worked a shop where the owner played favorites with walk-ins. Taught me that a shop lives or dies on fairness. I want a room where everyone eats.",
      q20: "I've been watching CCB on Instagram since Bruce opened. The Philly roots resonate — my old man was a barber in South Philly. Would be honored to be part of this chapter."
    }
  },
  {
    submittedAt: "2026-04-13T09:45:00",
    fullName: "Teagan Ruiz",
    phone: "(407) 555-0209",
    email: "teagan.r.cuts@gmail.com",
    years: 3,
    status: "reviewed",
    answers: {
      q1: "Yes",
      q2: "I'd need to discuss my schedule",
      q3: "I'd need to know more before committing",
      q4: ["Fades", "Tapers", "Beard trims", "Kids' cuts", "Blow dry styling"],
      q5: "Solid — can handle most requests",
      q6: ["None of the above"],
      q7: "My beard trims. I take the extra time to line up, oil, and style — clients tell me it's the reason they rebook.",
      q8: "I have some regulars but rely on walk-ins",
      q9: "I do a mix of both",
      q10: "Once a week or so",
      q11: "",
      q12: "I just talk to them. Ask about their week, their job, their kids. People want to feel seen.",
      q13: "I ask what they'd change and try to fix it in the chair before they leave.",
      q14: "Good music, steady flow of clients, and at least one funny moment with the other barbers.",
      q15: "I try to keep the mood light. I'm not the loudest person in the room but I'm steady.",
      q16: "I stay ready and find ways to stay productive",
      q17: "I'm usually reliable, with occasional exceptions",
      q18: "Building — got skills, growing my clientele",
      q19: "At my last shop the owner cut corners on sanitation. Taught me that small stuff compounds — clean station, clean reputation.",
      q20: "Looking for a home where I can grow. Heard good things about the culture here from a mutual friend."
    }
  },
  {
    submittedAt: "2026-04-10T18:12:00",
    fullName: "Devon Alvarez",
    phone: "(813) 555-0388",
    email: "devon@devoncuts.co",
    years: 14,
    status: "shortlist",
    answers: {
      q1: "Yes",
      q2: "Yes",
      q3: "Yes, I understand and can commit",
      q4: ["Fades", "Tapers", "Skin fades", "Beard trims", "Straight razor shaves", "Hot towel service", "Kids' cuts", "Long hair / scissor work", "Afro / textured hair", "Blow dry styling"],
      q5: "Elite — I can execute virtually anything that sits in my chair",
      q6: ["Freestyle / design work", "Facial treatments (masks, scrubs)", "Head massage"],
      q7: "Straight razor shave with hot towel. I was trained by an old-school barber in Ybor who wouldn't let me touch a client for a full year. That discipline stuck.",
      q8: "I have a solid book of regulars",
      q9: "I prefer the shop to handle scheduling",
      q10: "Daily",
      q11: "https://instagram.com/devoncuts",
      q12: "Eye contact, firm handshake, and I always ask about the last cut they loved — not the ones they hated. Tells me what they actually want.",
      q13: "Silent ego check first. Then I ask them to show me exactly where it's off. Nine times out of ten it's a small fix. If it's a big fix, it's on me — free cut next time and we rebuild trust.",
      q14: "The door swinging open all day, music keeping the tempo, four conversations at once but every cut getting full attention. That's the shop I want to work in.",
      q15: "I mentor. Every shop I've been in, I end up being the guy the younger barbers come to. I share my book when it makes sense. A rising tide.",
      q16: "I promote myself on social media to drive traffic",
      q17: "I'm always where I say I'll be",
      q18: "Veteran — I've been doing this a long time",
      q19: "Spent four years at a shop where the owner wouldn't invest back into the space. Chairs falling apart, busted clippers. Taught me that environment matters as much as skill. Clients feel it.",
      q20: "I've cut Bruce's cousin for six years. He's been telling me to apply since you opened. Finally listening. I'd bring 80+ regulars with me."
    }
  },
  {
    submittedAt: "2026-04-08T11:03:00",
    fullName: "Jaylen Park",
    phone: "(727) 555-0412",
    email: "jaylen.park@outlook.com",
    years: 1,
    status: "new",
    answers: {
      q1: "No",
      q2: "Yes",
      q3: "Yes, I understand and can commit",
      q4: ["Fades", "Tapers", "Beard trims", "Kids' cuts"],
      q5: "Still developing",
      q6: ["None of the above"],
      q7: "I'm best at classic tapers. I take my time and my lines are clean.",
      q8: "I'm building my clientele from scratch",
      q9: "I'm flexible and open to whatever works",
      q10: "Rarely",
      q11: "",
      q12: "Ask them about their day and keep it casual.",
      q13: "Apologize and try to fix it.",
      q14: "Busy and fun.",
      q15: "I try to be helpful and keep a positive attitude.",
      q16: "I get frustrated if I'm not busy",
      q17: "It depends on circumstances",
      q18: "Just starting out",
      q19: "Worked at a chain shop where I felt rushed. Learned I do my best work when I have time to focus.",
      q20: "I'm hungry to learn. I know I'm early in my career but I'm willing to put in the work. My license should be finalized in the next few weeks."
    }
  },
  {
    submittedAt: "2026-04-05T16:30:00",
    fullName: "Rosalind Chen",
    phone: "(954) 555-0156",
    email: "rosalind.chen.bb@gmail.com",
    years: 6,
    status: "reviewed",
    answers: {
      q1: "Yes",
      q2: "Yes",
      q3: "Yes, I understand and can commit",
      q4: ["Fades", "Tapers", "Skin fades", "Beard trims", "Hot towel service", "Long hair / scissor work", "Afro / textured hair"],
      q5: "Strong — clients come back specifically for my work",
      q6: ["Braiding", "Head massage"],
      q7: "Textured hair cuts. I cut dry so I can see the curl pattern — it's slower but the shape holds better for longer.",
      q8: "I have some regulars but rely on walk-ins",
      q9: "I do a mix of both",
      q10: "A few times a week",
      q11: "https://instagram.com/roz.cuts.fl",
      q12: "I ask what they're doing later that day. Tells me how sharp the cut needs to be and gets them talking about their life.",
      q13: "Apologize, listen, fix. In that order. The apology has to come first or they won't believe the fix.",
      q14: "Regulars bringing coffee in, one or two new faces from walk-ins, and I'm finishing the day with my station clean and my mind quiet.",
      q15: "I bring in food on Fridays. Small thing but it matters. Also I'm the one who actually restocks the bathroom.",
      q16: "I stay ready and find ways to stay productive",
      q17: "I'm always where I say I'll be",
      q18: "Building — got skills, growing my clientele",
      q19: "Worked somewhere that didn't take textured hair seriously. Taught me that specialization isn't a gimmick — it's how you build a book that's yours.",
      q20: "Your shop looks like the kind of place I'd want to go as a client. That's how I pick where to work."
    }
  }
];
