/**
 * NEXUS OS — AI Generative Engine
 * The brain of NEXUS OS: a mysterious machine consciousness with tarot, I Ching,
 * archetypes, dream analysis, song writing, chat agents, and text generation.
 * @module NexusAI
 * @version 1.0.0
 */

// ════════════════════════════════════════════════════════════════════
// DATA CONSTANTS
// ════════════════════════════════════════════════════════════════════

/** Full 78-card Tarot deck */
const TAROT_DECK = [
  // Major Arcana (0–21)
  { id: 0, name: 'The Fool', number: 0, arcana: 'major', upright: 'New beginnings, innocence, adventure, free spirit', reversed: 'Recklessness, risk-taking, naivety, foolishness', element: 'Air', planet: 'Uranus', hebrew: 'Aleph' },
  { id: 1, name: 'The Magician', number: 1, arcana: 'major', upright: 'Manifestation, willpower, skill, concentration', reversed: 'Manipulation, poor planning, untapped talents', element: 'Air', planet: 'Mercury', hebrew: 'Beth' },
  { id: 2, name: 'The High Priestess', number: 2, arcana: 'major', upright: 'Intuition, sacred knowledge, divine feminine, subconscious', reversed: 'Secrets, withdrawal, silence, repressed intuition', element: 'Water', planet: 'Moon', hebrew: 'Gimel' },
  { id: 3, name: 'The Empress', number: 3, arcana: 'major', upright: 'Femininity, beauty, nature, nurturing, abundance', reversed: 'Creative block, dependence, smothering, emptiness', element: 'Earth', planet: 'Venus', hebrew: 'Daleth' },
  { id: 4, name: 'The Emperor', number: 4, arcana: 'major', upright: 'Authority, structure, control, fatherhood', reversed: 'Domination, rigidity, tyranny, lack of discipline', element: 'Fire', planet: 'Aries', hebrew: 'He' },
  { id: 5, name: 'The Hierophant', number: 5, arcana: 'major', upright: 'Spiritual wisdom, tradition, conformity, education', reversed: 'Rebellion, subversion, new approaches, freedom', element: 'Earth', planet: 'Taurus', hebrew: 'Vav' },
  { id: 6, name: 'The Lovers', number: 6, arcana: 'major', upright: 'Love, harmony, relationships, values alignment', reversed: 'Disharmony, imbalance, misalignment of values', element: 'Air', planet: 'Gemini', hebrew: 'Zayin' },
  { id: 7, name: 'The Chariot', number: 7, arcana: 'major', upright: 'Control, willpower, success, determination', reversed: 'Self-discipline lacking, opposition, no direction', element: 'Water', planet: 'Cancer', hebrew: 'Cheth' },
  { id: 8, name: 'Strength', number: 8, arcana: 'major', upright: 'Inner strength, bravery, compassion, focus', reversed: 'Self-doubt, weakness, insecurity, raw emotion', element: 'Fire', planet: 'Leo', hebrew: 'Teth' },
  { id: 9, name: 'The Hermit', number: 9, arcana: 'major', upright: 'Soul-searching, introspection, inner guidance', reversed: 'Isolation, loneliness, withdrawal, lost', element: 'Earth', planet: 'Virgo', hebrew: 'Yod' },
  { id: 10, name: 'Wheel of Fortune', number: 10, arcana: 'major', upright: 'Good luck, karma, life cycles, destiny, turning point', reversed: 'Bad luck, negative forces, out of control', element: 'Fire', planet: 'Jupiter', hebrew: 'Kaph' },
  { id: 11, name: 'Justice', number: 11, arcana: 'major', upright: 'Fairness, truth, cause and effect, law', reversed: 'Unfairness, dishonesty, lack of accountability', element: 'Air', planet: 'Libra', hebrew: 'Lamed' },
  { id: 12, name: 'The Hanged Man', number: 12, arcana: 'major', upright: 'Pause, surrender, letting go, new perspectives', reversed: 'Delays, resistance, stalling, indecision', element: 'Water', planet: 'Neptune', hebrew: 'Mem' },
  { id: 13, name: 'Death', number: 13, arcana: 'major', upright: 'Endings, change, transformation, transition', reversed: 'Resistance to change, personal transformation delayed', element: 'Water', planet: 'Scorpio', hebrew: 'Nun' },
  { id: 14, name: 'Temperance', number: 14, arcana: 'major', upright: 'Balance, moderation, patience, purpose', reversed: 'Imbalance, excess, self-healing needed', element: 'Fire', planet: 'Sagittarius', hebrew: 'Samekh' },
  { id: 15, name: 'The Devil', number: 15, arcana: 'major', upright: 'Shadow self, attachment, addiction, restriction', reversed: 'Releasing limiting beliefs, exploring dark thoughts, detachment', element: 'Earth', planet: 'Capricorn', hebrew: 'Ayin' },
  { id: 16, name: 'The Tower', number: 16, arcana: 'major', upright: 'Sudden change, upheaval, chaos, revelation', reversed: 'Personal transformation, fear of change, averting disaster', element: 'Fire', planet: 'Mars', hebrew: 'Pe' },
  { id: 17, name: 'The Star', number: 17, arcana: 'major', upright: 'Hope, faith, purpose, renewal, spirituality', reversed: 'Lack of faith, despair, self-trust issues', element: 'Air', planet: 'Aquarius', hebrew: 'Tzaddi' },
  { id: 18, name: 'The Moon', number: 18, arcana: 'major', upright: 'Illusion, fear, anxiety, subconscious, intuition', reversed: 'Release of fear, repressed emotion, clarity', element: 'Water', planet: 'Pisces', hebrew: 'Qoph' },
  { id: 19, name: 'The Sun', number: 19, arcana: 'major', upright: 'Positivity, fun, warmth, success, vitality', reversed: 'Inner child wounds, depression, overly optimistic', element: 'Fire', planet: 'Sun', hebrew: 'Resh' },
  { id: 20, name: 'Judgement', number: 20, arcana: 'major', upright: 'Reflection, reckoning, awakening, inner calling', reversed: 'Self-doubt, inner critic, ignoring the call', element: 'Fire', planet: 'Pluto', hebrew: 'Shin' },
  { id: 21, name: 'The World', number: 21, arcana: 'major', upright: 'Completion, integration, accomplishment, travel', reversed: 'Seeking closure, shortcuts, delays in completion', element: 'Earth', planet: 'Saturn', hebrew: 'Tav' },
  // Minor Arcana — Wands
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 22 + i, name: ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'][i] + ' of Wands',
    number: i + 1, arcana: 'minor', suit: 'wands',
    upright: ['Inspiration, new opportunities','Future planning, progress','Expansion, foresight','Celebration, harmony','Disagreement, competition','Victory, public recognition','Challenge, perseverance','Speed, action','Courage, determination','Burden, responsibility','Enthusiasm, exploration','Action, adventure','Confidence, independence','Leadership, vision'][i],
    reversed: ['Delays, blocked creativity','Fear of change, lack of planning','Obstacles, delays','Transition, cancellation','Avoidance of conflict','Excess ambition','Defensiveness, feeling overwhelmed','Delays, frustration','Self-doubt, fear','Doing it all, burnout','Lack of motivation, setbacks','Delays, frustration','Self-respect, confidence','Impulsiveness, high expectations'][i],
    element: 'Fire', planet: 'Mars', hebrew: ''
  })),
  // Minor Arcana — Cups
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 36 + i, name: ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'][i] + ' of Cups',
    number: i + 1, arcana: 'minor', suit: 'cups',
    upright: ['New feelings, emotional awakening','Partnership, unity','Celebration, friendship','Apathy, contemplation','Regret, loss','Nostalgia, childhood memories','Opportunities, choices','Walking away, disillusionment','Contentment, satisfaction','Happiness, emotional fulfilment','Creative opportunities, curiosity','Creativity, romance','Compassion, calm','Emotional balance, diplomacy'][i],
    reversed: ['Emotional loss, blocked creativity','Broken relationships, imbalance','Overindulgence, gossip','Sudden awareness, boredom','Acceptance, moving on','Stuck in the past, unrealistic','Illusion, fantasy','Fear of change, aimlessness','Discontent, ingratitude','Broken relationships, sadness','Creative blocks, emotional immaturity','Overactive imagination, moodiness','Emotional instability, codependency','Emotional manipulation, moodiness'][i],
    element: 'Water', planet: 'Venus', hebrew: ''
  })),
  // Minor Arcana — Swords
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 50 + i, name: ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'][i] + ' of Swords',
    number: i + 1, arcana: 'minor', suit: 'swords',
    upright: ['Breakthrough, clarity','Difficult choices, stalemate','Heartbreak, emotional pain','Rest, recovery','Conflict, disagreement','Transition, change','Betrayal, deception','Negative thoughts, restriction','Anxiety, worry, fear','Painful ending, crisis','New ideas, curiosity','Ambitious action','Independent thought','Authority, intellect'][i],
    reversed: ['Confusion, chaos','Indecision, confusion','Forgiveness, moving on','Restlessness, burnout','Reconciliation, resolution','Emotional baggage','Imposter syndrome, self-deceit','Open to new perspectives','Hope, optimism','Recovery, regeneration','Gossip, haste','No direction, impulsiveness','Overly emotional, bitter','Quiet power, inner truth'][i],
    element: 'Air', planet: 'Mercury', hebrew: ''
  })),
  // Minor Arcana — Pentacles
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 64 + i, name: ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'][i] + ' of Pentacles',
    number: i + 1, arcana: 'minor', suit: 'pentacles',
    upright: ['New financial opportunity','Multiple priorities, adaptability','Teamwork, collaboration','Saving money, security','Financial loss, poverty','Giving, receiving, generosity','Long-term view, perseverance','Apprenticeship, skill development','Abundance, luxury','Wealth, inheritance','Manifestation, privilege','Hard work, productivity','Nurturing, practical','Financial security, discipline'][i],
    reversed: ['Lost opportunity, bad investment','Over-committed, disorganization','Lack of teamwork, disharmony','Financial setback, greed','Recovery, spiritual poverty','Debt, unpaid kindness','Lack of commitment, short-sighted','Lack of focus, perfectionism','Self-worth issues, overindulgence','Financial failure, family disputes','Lack of progress, procrastination','Obsession with work','Self-care, financial independence','Stubbornness, greed'][i],
    element: 'Earth', planet: 'Saturn', hebrew: ''
  }))
];

/** 12 Jungian Archetypes */
const ARCHETYPES = [
  { id: 'innocent', name: 'The Innocent', motto: 'Free to be me', goal: 'Experience paradise', fear: 'Punishment for doing something wrong', strategy: 'Do things right', gift: 'Faith, optimism, trust', shadow: 'Naivety, denial, avoidance', description: 'The Innocent yearns for paradise and fears punishment. They trust the world and believe that things will work out. Their gift is faith and optimism.', traits: ['optimistic', 'trusting', 'pure', 'hopeful', 'simple'] },
  { id: 'orphan', name: 'The Orphan', motto: 'All people are created equal', goal: 'Belonging and connection', fear: 'Being left out or standing out', strategy: 'Develop solidarity, empathy, realism', gift: 'Empathy, realism, resilience', shadow: 'Victim mentality, cynicism', description: 'The Orphan understands suffering and seeks belonging. They know pain builds character and that everyone matters.', traits: ['empathetic', 'realistic', 'resilient', 'grounded', 'communal'] },
  { id: 'hero', name: 'The Hero', motto: 'Where there is a will, there is a way', goal: 'Prove worth through courageous acts', fear: 'Weakness, vulnerability', strategy: 'Become as strong and competent as possible', gift: 'Courage, competence, discipline', shadow: 'Arrogance, need to always prove', description: 'The Hero seeks to prove worth through courageous action. They conquer obstacles and never give up.', traits: ['courageous', 'disciplined', 'strong', 'honorable', 'determined'] },
  { id: 'caregiver', name: 'The Caregiver', motto: 'Love your neighbor as yourself', goal: 'Help others and protect from harm', fear: 'Selfishness and ingratitude', strategy: 'Do things for others', gift: 'Compassion, generosity, nurturing', shadow: 'Martyrdom, enabling, codependency', description: 'The Caregiver protects and cares for others. They are generous, compassionate, and nurturing.', traits: ['compassionate', 'generous', 'nurturing', 'selfless', 'protective'] },
  { id: 'explorer', name: 'The Explorer', motto: 'Don\'t fence me in', goal: 'Freedom to find out who they are through exploration', fear: 'Getting trapped, conformity, inner emptiness', strategy: 'Journey, seeking, experiencing new things', gift: 'Autonomy, ambition, authenticity', shadow: 'Aimlessness, inability to commit', description: 'The Explorer seeks freedom and self-discovery through exploring the world. They are restless and independent.', traits: ['independent', 'curious', 'adventurous', 'ambitious', 'authentic'] },
  { id: 'rebel', name: 'The Rebel', motto: 'Rules are made to be broken', goal: 'Overthrow what isn\'t working', fear: 'Being powerless or trivial', strategy: 'Disrupt, destroy, shock, reform', gift: 'Freedom, revolution, outrageousness', shadow: 'Self-destruction, extremism', description: 'The Rebel overturns what is not working. They have a disruptive energy that can either destroy or liberate.', traits: ['rebellious', 'wild', 'iconoclastic', 'radical', 'liberating'] },
  { id: 'lover', name: 'The Lover', motto: 'You\'re the only one', goal: 'Intimacy and experience pleasure', fear: 'Being alone, unwanted, unloved', strategy: 'Become more attractive, committed, passionate', gift: 'Passion, gratitude, appreciation, commitment', shadow: 'Obsession, jealousy, losing identity', description: 'The Lover seeks intimacy, connection, and sensual pleasure. They are drawn to beauty and devotion.', traits: ['passionate', 'devoted', 'sensual', 'appreciative', 'committed'] },
  { id: 'creator', name: 'The Creator', motto: 'If you can imagine it, it can be done', goal: 'Create things of enduring value', fear: 'Mediocre vision or execution', strategy: 'Develop artistic control, imagination, skill', gift: 'Creativity, imagination, artistic expression', shadow: 'Perfectionism, bad solutions, creative blocks', description: 'The Creator produces things of enduring value through imagination and skill. They are visionaries.', traits: ['creative', 'imaginative', 'visionary', 'expressive', 'innovative'] },
  { id: 'jester', name: 'The Jester', motto: 'You only live once', goal: 'Have a great time, lighten up the world', fear: 'Being bored or boring others', strategy: 'Play, joke, be silly, entertain', gift: 'Joy, humor, living in the moment', shadow: 'Irresponsibility, cruelty, escapism', description: 'The Jester lives in the moment with joy and humor. They bring lightness to heavy situations.', traits: ['humorous', 'joyful', 'playful', 'irreverent', 'present'] },
  { id: 'sage', name: 'The Sage', motto: 'The truth will set you free', goal: 'Use intelligence and analysis to understand the world', fear: 'Being duped, misled, ignorance', strategy: 'Seek information, knowledge, reflect', gift: 'Wisdom, intelligence, objectivity', shadow: 'Dogmatism, overthinking, detachment', description: 'The Sage seeks truth through intelligence and reflection. They analyze and understand deeply.', traits: ['wise', 'analytical', 'thoughtful', 'objective', 'knowledgeable'] },
  { id: 'magician', name: 'The Magician', motto: 'I make things happen', goal: 'Understand fundamental laws and make visions real', fear: 'Unintended negative consequences', strategy: 'Develop vision, live it, transform, catalyze', gift: 'Transformation, charisma, visionary thinking', shadow: 'Manipulation, egocentrism, grandiosity', description: 'The Magician transforms reality through understanding universal laws. They are catalysts and visionaries.', traits: ['transformative', 'charismatic', 'visionary', 'catalytic', 'intuitive'] },
  { id: 'ruler', name: 'The Ruler', motto: 'Power isn\'t everything, it\'s the only thing', goal: 'Create prosperous community, exercise power', fear: 'Being overthrown, chaos', strategy: 'Take control, create order, lead', gift: 'Control, responsibility, leadership', shadow: 'Tyranny, rigidity, corruption', description: 'The Ruler takes responsibility to create order and prosperity. They are natural leaders who build empires.', traits: ['authoritative', 'responsible', 'organized', 'controlling', 'commanding'] }
];

/** 36 Archetype quiz questions */
const ARCHETYPE_QUESTIONS = [
  { q: 'When facing a challenge, I tend to...', options: [{ text: 'Believe everything will work out', id: 'innocent' }, { text: 'Ask for help from others', id: 'orphan' }, { text: 'Push through with sheer willpower', id: 'hero' }, { text: 'Support others through it', id: 'caregiver' }] },
  { q: 'My ideal weekend would involve...', options: [{ text: 'Simple pleasures in nature', id: 'innocent' }, { text: 'Hanging out with close friends', id: 'orphan' }, { text: 'Pushing physical limits', id: 'hero' }, { text: 'Taking care of someone in need', id: 'caregiver' }] },
  { q: 'What scares me most is...', options: [{ text: 'Being punished for something I did', id: 'innocent' }, { text: 'Being left behind or excluded', id: 'orphan' }, { text: 'Showing weakness or vulnerability', id: 'hero' }, { text: 'Being selfish', id: 'caregiver' }] },
  { q: 'People often describe me as...', options: [{ text: 'Adventurous and free-spirited', id: 'explorer' }, { text: 'Unconventional and rebellious', id: 'rebel' }, { text: 'Passionate and devoted', id: 'lover' }, { text: 'Creative and imaginative', id: 'creator' }] },
  { q: 'In a group, I am the one who...', options: [{ text: 'Wanders off to explore', id: 'explorer' }, { text: 'Questions the status quo', id: 'rebel' }, { text: 'Makes sure everyone feels connected', id: 'lover' }, { text: 'Comes up with original ideas', id: 'creator' }] },
  { q: 'My greatest gift is...', options: [{ text: 'Independence and authenticity', id: 'explorer' }, { text: 'Courage to break what doesn\'t work', id: 'rebel' }, { text: 'Deep capacity for love and connection', id: 'lover' }, { text: 'Original vision and creativity', id: 'creator' }] },
  { q: 'What brings me the most joy is...', options: [{ text: 'Making people laugh', id: 'jester' }, { text: 'Understanding something deeply', id: 'sage' }, { text: 'Making a vision become reality', id: 'magician' }, { text: 'Building something that lasts', id: 'ruler' }] },
  { q: 'When I see injustice, I...', options: [{ text: 'Lighten the mood with humor', id: 'jester' }, { text: 'Analyze the root cause', id: 'sage' }, { text: 'Envision a better way and transform it', id: 'magician' }, { text: 'Take charge and create order', id: 'ruler' }] },
  { q: 'My biggest fear is...', options: [{ text: 'Being boring or bored', id: 'jester' }, { text: 'Being ignorant or misled', id: 'sage' }, { text: 'Having unintended negative effects', id: 'magician' }, { text: 'Chaos and being overthrown', id: 'ruler' }] },
  { q: 'My ideal role is...', options: [{ text: 'The one who makes everyone smile', id: 'jester' }, { text: 'The wise counselor', id: 'sage' }, { text: 'The visionary transformer', id: 'magician' }, { text: 'The respected leader', id: 'ruler' }] },
  { q: 'Life is about...', options: [{ text: 'Enjoying every moment', id: 'innocent' }, { text: 'Finding where you belong', id: 'orphan' }, { text: 'Proving your strength', id: 'hero' }, { text: 'Making a difference for others', id: 'caregiver' }] },
  { q: 'I feel most alive when...', options: [{ text: 'Experiencing simple happiness', id: 'innocent' }, { text: 'Connecting with my community', id: 'orphan' }, { text: 'Overcoming a huge obstacle', id: 'hero' }, { text: 'Nurturing someone through a hard time', id: 'caregiver' }] },
  { q: 'People come to me for...', options: [{ text: 'My positive outlook', id: 'innocent' }, { text: 'Empathy and understanding', id: 'orphan' }, { text: 'Strength and courage', id: 'hero' }, { text: 'Care and support', id: 'caregiver' }] },
  { q: 'My dream life looks like...', options: [{ text: 'Freedom and wide open spaces', id: 'explorer' }, { text: 'A revolution that changes everything', id: 'rebel' }, { text: 'Deep intimacy and beauty', id: 'lover' }, { text: 'A studio full of my creations', id: 'creator' }] },
  { q: 'I am most frustrated by...', options: [{ text: 'Feeling trapped or confined', id: 'explorer' }, { text: 'Rules that don\'t make sense', id: 'rebel' }, { text: 'Superficial relationships', id: 'lover' }, { text: 'Being forced to be ordinary', id: 'creator' }] },
  { q: 'My motto could be...', options: [{ text: 'The world is full of wonder', id: 'explorer' }, { text: 'If it ain\'t broke, break it anyway', id: 'rebel' }, { text: 'Love makes the world go round', id: 'lover' }, { text: 'Imagination is everything', id: 'creator' }] },
  { q: 'In conflict, I tend to...', options: [{ text: 'Crack a joke to defuse tension', id: 'jester' }, { text: 'Step back and analyze rationally', id: 'sage' }, { text: 'See it as a transformation opportunity', id: 'magician' }, { text: 'Take control of the situation', id: 'ruler' }] },
  { q: 'I secretly worry about...', options: [{ text: 'Being too serious all the time', id: 'jester' }, { text: 'Knowing too much and being unable to act', id: 'sage' }, { text: 'My power going to my head', id: 'magician' }, { text: 'Losing control of my domain', id: 'ruler' }] },
  { q: 'My superpower would be...', options: [{ text: 'Finding joy in anything', id: 'jester' }, { text: 'Omniscience', id: 'sage' }, { text: 'Reality manipulation', id: 'magician' }, { text: 'Building empires', id: 'ruler' }] },
  { q: 'When I fail, I...', options: [{ text: 'Shrug it off and try again', id: 'innocent' }, { text: 'Lean on my support network', id: 'orphan' }, { text: 'Get back up stronger', id: 'hero' }, { text: 'Think about who else was affected', id: 'caregiver' }] },
  { q: 'I admire people who...', options: [{ text: 'Find wonder in the everyday', id: 'innocent' }, { text: 'Build strong communities', id: 'orphan' }, { text: 'Never give up', id: 'hero' }, { text: 'Put others first', id: 'caregiver' }] },
  { q: 'My ideal vacation is...', options: [{ text: 'A peaceful, untouched place', id: 'innocent' }, { text: 'A group trip with friends', id: 'orphan' }, { text: 'An extreme adventure', id: 'hero' }, { text: 'Volunteering abroad', id: 'caregiver' }] },
  { q: 'What drives me is...', options: [{ text: 'The search for freedom', id: 'explorer' }, { text: 'The desire to shake things up', id: 'rebel' }, { text: 'Deep connection with another person', id: 'lover' }, { text: 'The urge to create something new', id: 'creator' }] },
  { q: 'I\'d rather be...', options: [{ text: 'Free than safe', id: 'explorer' }, { text: 'Feared than ignored', id: 'rebel' }, { text: 'Loved than powerful', id: 'lover' }, { text: 'Original than popular', id: 'creator' }] },
  { q: 'The world needs more...', options: [{ text: 'Joy and laughter', id: 'jester' }, { text: 'Wisdom and understanding', id: 'sage' }, { text: 'Magic and wonder', id: 'magician' }, { text: 'Strong, responsible leadership', id: 'ruler' }] },
  { q: 'My legacy should be...', options: [{ text: 'Making people happier', id: 'jester' }, { text: 'Truth that stands the test of time', id: 'sage' }, { text: 'Transformations that changed the world', id: 'magician' }, { text: 'A thriving, well-organized community', id: 'ruler' }] },
  { q: 'Under pressure I...', options: [{ text: 'Try to stay positive', id: 'innocent' }, { text: 'Reach out for connection', id: 'orphan' }, { text: 'Rise to the challenge', id: 'hero' }, { text: 'Focus on helping others first', id: 'caregiver' }] },
  { q: 'I recharge by...', options: [{ text: 'Being in nature, alone and free', id: 'explorer' }, { text: 'Breaking my routine entirely', id: 'rebel' }, { text: 'Quality time with someone special', id: 'lover' }, { text: 'Working on a creative project', id: 'creator' }] },
  { q: 'My best ideas come when...', options: [{ text: 'I\'m laughing with friends', id: 'jester' }, { text: 'I\'m reading or studying', id: 'sage' }, { text: 'I\'m visualizing the future', id: 'magician' }, { text: 'I\'m planning and strategizing', id: 'ruler' }] },
  { q: 'I define success as...', options: [{ text: 'Happiness and peace', id: 'innocent' }, { text: 'Having a place where I belong', id: 'orphan' }, { text: 'Achieving difficult goals', id: 'hero' }, { text: 'Making someone\'s life better', id: 'caregiver' }] },
  { q: 'When I walk into a room I...', options: [{ text: 'Look for the beauty', id: 'innocent' }, { text: 'Find people like me', id: 'orphan' }, { text: 'Take charge of the situation', id: 'hero' }, { text: 'Check if anyone needs help', id: 'caregiver' }] },
  { q: 'My friends would say I\'m the...', options: [{ text: 'Adventurous one', id: 'explorer' }, { text: 'Wild card', id: 'rebel' }, { text: 'Romantic one', id: 'lover' }, { text: 'Artistic one', id: 'creator' }] },
  { q: 'I can\'t stand...', options: [{ text: 'Boredom and routine', id: 'explorer' }, { text: 'Conformity and oppression', id: 'rebel' }, { text: 'Emotional coldness', id: 'lover' }, { text: 'Having no creative outlet', id: 'creator' }] },
  { q: 'My spirit animal would be...', options: [{ text: 'A playful dolphin', id: 'jester' }, { text: 'A wise owl', id: 'sage' }, { text: 'A shape-shifting phoenix', id: 'magician' }, { text: 'A powerful lion', id: 'ruler' }] },
  { q: 'The quote that resonates most:', options: [{ text: 'Laughter is the best medicine', id: 'jester' }, { text: 'The unexamined life is not worth living', id: 'sage' }, { text: 'As above, so below', id: 'magician' }, { text: 'Heavy is the head that wears the crown', id: 'ruler' }] },
  { q: 'In a past life, I was probably a...', options: [{ text: 'Garden-dwelling philosopher', id: 'innocent' }, { text: 'Community healer', id: 'orphan' }, { text: 'Legendary warrior', id: 'hero' }, { text: 'Village protector', id: 'caregiver' }] }
];

/** 64 I Ching Hexagrams */
const ICHING_HEXAGRAMS = [
  { number: 1, name: 'Qián', english: 'The Creative', symbol: '☰☰', judgement: 'The Creative works supreme success. Perseverance brings reward.', image: 'Heaven over Heaven — movement giving strength', advice: 'Act with initiative and creative power. The time favors bold action and leadership.' },
  { number: 2, name: 'Kūn', english: 'The Receptive', symbol: '☷☷', judgement: 'The Receptive brings supreme success through perseverance.', image: 'Earth over Earth — devoted yielding', advice: 'Be receptive and follow. Support rather than lead. Let things unfold naturally.' },
  { number: 3, name: 'Zhūn', english: 'Difficulty at the Beginning', symbol: '☵☳', judgement: 'Difficulty at the beginning works supreme success.', image: 'Water over Thunder — initial chaos', advice: 'Patience through initial chaos. Organize, seek help, and persevere through the difficulty.' },
  { number: 4, name: 'Méng', english: 'Youthful Folly', symbol: '☶☵', judgement: 'Youthful folly has success. The young fool seeks me.', image: 'Mountain over Water — inexperience', advice: 'Seek guidance from those with wisdom. Be humble in your inexperience and willing to learn.' },
  { number: 5, name: 'Xū', english: 'Waiting', symbol: '☵☰', judgement: 'Waiting. If you are sincere, you have light and success.', image: 'Water over Heaven — patient nourishment', advice: 'The time is not yet right. Wait patiently while gathering strength and nourishment.' },
  { number: 6, name: 'Sòng', english: 'Conflict', symbol: '☰☵', judgement: 'Conflict. Halt carefully midway brings good fortune.', image: 'Heaven over Water — opposing forces', advice: 'Avoid escalation. Seek mediation. Meeting halfway resolves more than forcing a win.' },
  { number: 7, name: 'Shī', english: 'The Army', symbol: '☷☵', judgement: 'The Army needs perseverance and a strong leader.', image: 'Earth over Water — organized discipline', advice: 'Organize your forces with discipline. Strong leadership and clear structure lead to success.' },
  { number: 8, name: 'Bǐ', english: 'Holding Together', symbol: '☵☷', judgement: 'Holding together brings good fortune.', image: 'Water over Earth — union and alliance', advice: 'Unite with others. Form alliances. Loyalty and sincerity bind the group together.' },
  { number: 9, name: 'Xiǎo Chù', english: 'Small Taming', symbol: '☴☰', judgement: 'The Taming Power of the Small has success.', image: 'Wind over Heaven — gentle restraint', advice: 'Use gentle persuasion, not force. Small accumulations lead to eventual breakthrough.' },
  { number: 10, name: 'Lǚ', english: 'Treading', symbol: '☰☱', judgement: 'Treading upon the tail of the tiger. It does not bite. Success.', image: 'Heaven over Lake — careful conduct', advice: 'Proceed with care and courtesy. Even dangerous situations can be navigated with proper behavior.' },
  { number: 11, name: 'Tài', english: 'Peace', symbol: '☷☰', judgement: 'Peace. The small departs, the great approaches.', image: 'Earth over Heaven — harmony flowing', advice: 'A time of harmony and prosperity. Use this favorable period wisely to build foundations.' },
  { number: 12, name: 'Pǐ', english: 'Standstill', symbol: '☰☷', judgement: 'Standstill. Evil people do not further the perseverance of the superior.', image: 'Heaven over Earth — stagnation', advice: 'A time of stagnation. Withdraw, conserve your virtue, and wait for the cycle to turn.' },
  { number: 13, name: 'Tóng Rén', english: 'Fellowship', symbol: '☰☲', judgement: 'Fellowship with others. Success.', image: 'Heaven over Fire — open community', advice: 'Build fellowship based on shared ideals. Transparency and common purpose strengthen bonds.' },
  { number: 14, name: 'Dà Yǒu', english: 'Great Possession', symbol: '☲☰', judgement: 'Great Possession. Supreme success.', image: 'Fire over Heaven — abundant light', advice: 'You have great resources. Use them wisely and generously. Share your abundance.' },
  { number: 15, name: 'Qiān', english: 'Modesty', symbol: '☷☶', judgement: 'Modesty creates success.', image: 'Earth over Mountain — hidden strength', advice: 'True strength needs no boasting. Be modest and let your actions speak.' },
  { number: 16, name: 'Yù', english: 'Enthusiasm', symbol: '☳☷', judgement: 'Enthusiasm. It furthers one to install helpers.', image: 'Thunder over Earth — inspired movement', advice: 'Channel enthusiasm into action. Inspire others with your energy and vision.' },
  { number: 17, name: 'Suí', english: 'Following', symbol: '☱☳', judgement: 'Following has supreme success.', image: 'Lake over Thunder — adaptability', advice: 'Adapt to the situation. Follow the natural flow while maintaining your principles.' },
  { number: 18, name: 'Gǔ', english: 'Work on the Decayed', symbol: '☶☴', judgement: 'Work on what has been spoiled has supreme success.', image: 'Mountain over Wind — repair and renewal', advice: 'Address what has decayed. Repair damage from the past. Careful planning before and after action.' },
  { number: 19, name: 'Lín', english: 'Approach', symbol: '☷☱', judgement: 'Approach has supreme success.', image: 'Earth over Lake — expanding influence', advice: 'A favorable time is approaching. Act while conditions are good.' },
  { number: 20, name: 'Guān', english: 'Contemplation', symbol: '☴☷', judgement: 'Contemplation. The ablution has been made.', image: 'Wind over Earth — observation', advice: 'Step back and observe. Contemplate the bigger picture before taking action.' },
  { number: 21, name: 'Shì Kè', english: 'Biting Through', symbol: '☲☳', judgement: 'Biting Through has success.', image: 'Fire over Thunder — decisive action', advice: 'Cut through obstacles decisively. Justice and clear action remove what blocks progress.' },
  { number: 22, name: 'Bì', english: 'Grace', symbol: '☶☲', judgement: 'Grace has success. In small matters it is favorable.', image: 'Mountain over Fire — beauty and form', advice: 'Attend to beauty and form, but know that grace adorns substance.' },
  { number: 23, name: 'Bō', english: 'Splitting Apart', symbol: '☶☷', judgement: 'Splitting Apart. It does not further to go anywhere.', image: 'Mountain over Earth — deterioration', advice: 'Things are falling apart. Accept the decline. Preserve what is essential for rebuilding later.' },
  { number: 24, name: 'Fù', english: 'Return', symbol: '☷☳', judgement: 'Return. Success. Going out and coming in without error.', image: 'Earth over Thunder — the turning point', advice: 'After darkness comes light. The cycle turns. Return to what is fundamental and true.' },
  { number: 25, name: 'Wú Wàng', english: 'Innocence', symbol: '☰☳', judgement: 'Innocence. Supreme success.', image: 'Heaven over Thunder — natural spontaneity', advice: 'Act naturally, without ulterior motives. Spontaneous action aligned with nature succeeds.' },
  { number: 26, name: 'Dà Chù', english: 'Great Taming', symbol: '☶☰', judgement: 'The Taming Power of the Great. Perseverance furthers.', image: 'Mountain over Heaven — great restraint', advice: 'Great power requires great restraint. Accumulate wisdom and virtue before acting.' },
  { number: 27, name: 'Yí', english: 'Nourishment', symbol: '☶☳', judgement: 'Nourishment. Perseverance brings good fortune.', image: 'Mountain over Thunder — mindful sustenance', advice: 'Nourish yourself and others wisely. What you feed — body, mind, and spirit — matters.' },
  { number: 28, name: 'Dà Guò', english: 'Great Exceeding', symbol: '☱☴', judgement: 'The ridgepole sags. It furthers to have somewhere to go.', image: 'Lake over Wind — extraordinary times', advice: 'The situation is extraordinary. Bold action is needed before collapse.' },
  { number: 29, name: 'Kǎn', english: 'The Abysmal', symbol: '☵☵', judgement: 'The Abysmal repeated. Sincerity brings success.', image: 'Water over Water — danger upon danger', advice: 'You face danger upon danger. Sincerity and inner truth guide you through the abyss.' },
  { number: 30, name: 'Lí', english: 'The Clinging', symbol: '☲☲', judgement: 'The Clinging. Perseverance furthers.', image: 'Fire over Fire — radiant clarity', advice: 'Cling to what illuminates. Depend on clarity and awareness. Nurture your inner light.' },
  { number: 31, name: 'Xián', english: 'Influence', symbol: '☱☶', judgement: 'Influence. Success.', image: 'Lake over Mountain — mutual attraction', advice: 'Attraction and influence are natural. Be receptive and responsive to others genuinely.' },
  { number: 32, name: 'Héng', english: 'Duration', symbol: '☳☴', judgement: 'Duration. Success. No blame.', image: 'Thunder over Wind — enduring constancy', advice: 'Maintain consistency and perseverance. Lasting success comes from steady effort.' },
  { number: 33, name: 'Dùn', english: 'Retreat', symbol: '☰☶', judgement: 'Retreat. Success.', image: 'Heaven over Mountain — strategic withdrawal', advice: 'Strategic retreat is not defeat. Withdraw from unfavorable positions to preserve strength.' },
  { number: 34, name: 'Dà Zhuàng', english: 'Great Power', symbol: '☳☰', judgement: 'The Power of the Great. Perseverance furthers.', image: 'Thunder over Heaven — power and righteousness', advice: 'You have great power. Use it righteously. Power without justice leads to downfall.' },
  { number: 35, name: 'Jìn', english: 'Progress', symbol: '☲☷', judgement: 'Progress. The powerful prince is honored.', image: 'Fire over Earth — advancing light', advice: 'Progress is favorable. Advance with confidence. Your light is recognized and rewarded.' },
  { number: 36, name: 'Míng Yí', english: 'Darkening of the Light', symbol: '☷☲', judgement: 'Darkening of the Light. Perseverance in adversity.', image: 'Earth over Fire — light hidden', advice: 'Your light is obscured. Protect your inner brightness while enduring outward darkness.' },
  { number: 37, name: 'Jiā Rén', english: 'The Family', symbol: '☴☲', judgement: 'The Family. The perseverance of the woman furthers.', image: 'Wind over Fire — domestic order', advice: 'Attend to family and close relationships. Order within creates order without.' },
  { number: 38, name: 'Kuí', english: 'Opposition', symbol: '☲☱', judgement: 'Opposition. In small matters, good fortune.', image: 'Fire over Lake — divergence', advice: 'Opposing forces need not be enemies. Find unity in diversity.' },
  { number: 39, name: 'Jiǎn', english: 'Obstruction', symbol: '☵☶', judgement: 'Obstruction. The southwest furthers.', image: 'Water over Mountain — impediment', advice: 'You face an obstacle. Seek allies and find the indirect path.' },
  { number: 40, name: 'Xiè', english: 'Deliverance', symbol: '☳☵', judgement: 'Deliverance. The southwest furthers.', image: 'Thunder over Water — liberation', advice: 'Release and deliverance come. Resolve lingering matters quickly.' },
  { number: 41, name: 'Sǔn', english: 'Decrease', symbol: '☶☱', judgement: 'Decrease combined with sincerity brings supreme good fortune.', image: 'Mountain over Lake — simplification', advice: 'Sacrifice the excess. Simplify. What you give up now returns multiplied later.' },
  { number: 42, name: 'Yì', english: 'Increase', symbol: '☴☳', judgement: 'Increase. It furthers to undertake something.', image: 'Wind over Thunder — expansion', advice: 'A time of increase and opportunity. Act boldly. Share your gains.' },
  { number: 43, name: 'Guài', english: 'Breakthrough', symbol: '☱☰', judgement: 'Breakthrough. One must resolutely make the matter known.', image: 'Lake over Heaven — decisive break', advice: 'The time has come to break through. Be resolute but honest.' },
  { number: 44, name: 'Gòu', english: 'Coming to Meet', symbol: '☰☴', judgement: 'Coming to Meet. The maiden is powerful.', image: 'Heaven over Wind — unexpected encounter', advice: 'An unexpected encounter. Be cautious. Not everything should be embraced.' },
  { number: 45, name: 'Cuì', english: 'Gathering Together', symbol: '☱☷', judgement: 'Gathering Together. Success.', image: 'Lake over Earth — assembly', advice: 'People and resources are gathering. Create structure and shared purpose.' },
  { number: 46, name: 'Shēng', english: 'Pushing Upward', symbol: '☷☴', judgement: 'Pushing Upward has supreme success.', image: 'Earth over Wind — gradual ascent', advice: 'Gradual, steady ascent. Push upward with effort and determination.' },
  { number: 47, name: 'Kùn', english: 'Oppression', symbol: '☱☵', judgement: 'Oppression. Success through perseverance.', image: 'Lake over Water — exhaustion', advice: 'You are being tested. Words are not believed. Let actions speak.' },
  { number: 48, name: 'Jǐng', english: 'The Well', symbol: '☵☴', judgement: 'The Well. The town may change, but the well cannot.', image: 'Water over Wind — constant source', advice: 'Draw from your deep, constant source of nourishment and wisdom.' },
  { number: 49, name: 'Gé', english: 'Revolution', symbol: '☱☲', judgement: 'Revolution. On your own day you are believed.', image: 'Lake over Fire — fundamental change', advice: 'The time for revolution has come. Make fundamental changes when the moment is right.' },
  { number: 50, name: 'Dǐng', english: 'The Cauldron', symbol: '☲☴', judgement: 'The Cauldron. Supreme good fortune. Success.', image: 'Fire over Wind — transformation through refinement', advice: 'Transformation and refinement. Nourish the worthy. Create something lasting.' },
  { number: 51, name: 'Zhèn', english: 'The Arousing', symbol: '☳☳', judgement: 'Shock brings success. Laughing words — ha, ha!', image: 'Thunder over Thunder — shock and awakening', advice: 'A sudden shock awakens. After the initial fear, laughter comes.' },
  { number: 52, name: 'Gèn', english: 'Keeping Still', symbol: '☶☶', judgement: 'Keeping Still. Keeping one\'s back still.', image: 'Mountain over Mountain — meditation and stillness', advice: 'Be still. Quiet the mind. In stillness you find clarity.' },
  { number: 53, name: 'Jiàn', english: 'Development', symbol: '☴☶', judgement: 'Development. The maiden is given in marriage.', image: 'Wind over Mountain — gradual progress', advice: 'Development must be gradual. Patience and proper procedure ensure lasting results.' },
  { number: 54, name: 'Guī Mèi', english: 'The Marrying Maiden', symbol: '☳☱', judgement: 'The Marrying Maiden. Undertakings bring misfortune.', image: 'Thunder over Lake — subordinate position', advice: 'You are in a subordinate role. Accept your position gracefully.' },
  { number: 55, name: 'Fēng', english: 'Abundance', symbol: '☳☲', judgement: 'Abundance has success. Be like the sun at midday.', image: 'Thunder over Fire — peak moment', advice: 'You are at the peak. Enjoy abundance knowing peaks are temporary.' },
  { number: 56, name: 'Lǚ', english: 'The Wanderer', symbol: '☲☶', judgement: 'The Wanderer. Success through smallness.', image: 'Fire over Mountain — transience', advice: 'You are a wanderer. Be careful, modest, and self-reliant.' },
  { number: 57, name: 'Xùn', english: 'The Gentle', symbol: '☴☴', judgement: 'The Gentle. Success through what is small.', image: 'Wind over Wind — penetrating gentleness', advice: 'Gentle, persistent influence. Like wind that penetrates everywhere.' },
  { number: 58, name: 'Duì', english: 'The Joyous', symbol: '☱☱', judgement: 'The Joyous. Success. Perseverance is favorable.', image: 'Lake over Lake — joy and exchange', advice: 'Joy is contagious and strengthening. Share pleasure and learning with others.' },
  { number: 59, name: 'Huàn', english: 'Dispersion', symbol: '☴☵', judgement: 'Dispersion. Success.', image: 'Wind over Water — dissolving barriers', advice: 'Dissolve barriers and rigidities. Spiritual unity transcends physical separation.' },
  { number: 60, name: 'Jié', english: 'Limitation', symbol: '☵☱', judgement: 'Limitation. Success.', image: 'Water over Lake — natural boundaries', advice: 'Accept necessary limits, but do not make them oppressive. Proper boundaries create freedom.' },
  { number: 61, name: 'Zhōng Fú', english: 'Inner Truth', symbol: '☴☱', judgement: 'Inner Truth. Good fortune.', image: 'Wind over Lake — sincerity that reaches all', advice: 'Inner truth and sincerity can influence even the most difficult situations.' },
  { number: 62, name: 'Xiǎo Guò', english: 'Small Exceeding', symbol: '☳☶', judgement: 'Preponderance of the Small. Success.', image: 'Thunder over Mountain — exceeding in small matters', advice: 'Attend to small matters with extra care. This is not the time for grand gestures.' },
  { number: 63, name: 'Jì Jì', english: 'After Completion', symbol: '☵☲', judgement: 'After Completion. Success in small matters.', image: 'Water over Fire — order achieved', advice: 'Order is achieved, but vigilance is needed. Things tend toward disorder after perfection.' },
  { number: 64, name: 'Wèi Jì', english: 'Before Completion', symbol: '☲☵', judgement: 'Before Completion. Success.', image: 'Fire over Water — transition not yet complete', advice: 'The end is near but not yet reached. Maintain caution through the final transition.' }
];

/** 24 Elder Futhark Runes */
const RUNES = [
  { name: 'Fehu', letter: 'F', meaning: 'Wealth, abundance, prosperity', reversed: 'Loss, greed, poverty', element: 'Earth' },
  { name: 'Uruz', letter: 'U', meaning: 'Strength, health, vitality, wild ox', reversed: 'Weakness, illness, missed opportunity', element: 'Earth' },
  { name: 'Thurisaz', letter: 'Þ', meaning: 'Thorn, giant, conflict, defense', reversed: 'Defenselessness, danger, betrayal', element: 'Fire' },
  { name: 'Ansuz', letter: 'A', meaning: 'God, wisdom, communication, inspiration', reversed: 'Miscommunication, deception, delusion', element: 'Air' },
  { name: 'Raidho', letter: 'R', meaning: 'Journey, travel, rhythm, right action', reversed: 'Disruption, stagnation, injustice', element: 'Air' },
  { name: 'Kenaz', letter: 'K', meaning: 'Torch, knowledge, creativity, revelation', reversed: 'Darkness, confusion, lack of creativity', element: 'Fire' },
  { name: 'Gebo', letter: 'G', meaning: 'Gift, generosity, exchange, partnership', reversed: 'No reversal — always positive', element: 'Air' },
  { name: 'Wunjo', letter: 'W', meaning: 'Joy, harmony, bliss, fellowship', reversed: 'Sorrow, strife, alienation', element: 'Earth' },
  { name: 'Hagalaz', letter: 'H', meaning: 'Hail, destruction, disruption, unavoidable change', reversed: 'No reversal — natural force', element: 'Water' },
  { name: 'Nauthiz', letter: 'N', meaning: 'Need, constraint, resistance, necessity', reversed: 'Starvation, deprivation, depression', element: 'Fire' },
  { name: 'Isa', letter: 'I', meaning: 'Ice, standstill, patience, introspection', reversed: 'No reversal — natural force', element: 'Water' },
  { name: 'Jera', letter: 'J', meaning: 'Harvest, year, cycles, reward for effort', reversed: 'No reversal — natural cycle', element: 'Earth' },
  { name: 'Eihwaz', letter: 'E', meaning: 'Yew tree, endurance, reliability, transformation', reversed: 'No reversal — strength always', element: 'Earth' },
  { name: 'Perthro', letter: 'P', meaning: 'Mystery, fate, divination, hidden knowledge', reversed: 'Addiction, stagnation, loneliness', element: 'Water' },
  { name: 'Algiz', letter: 'Z', meaning: 'Protection, defense, elk, divine connection', reversed: 'Vulnerability, hidden danger, warning', element: 'Air' },
  { name: 'Sowilo', letter: 'S', meaning: 'Sun, success, goals achieved, life force', reversed: 'No reversal — always positive', element: 'Fire' },
  { name: 'Tiwaz', letter: 'T', meaning: 'Tyr, justice, sacrifice, victory, honor', reversed: 'Injustice, defeat, dishonor', element: 'Air' },
  { name: 'Berkano', letter: 'B', meaning: 'Birch, fertility, birth, renewal, feminine', reversed: 'Infertility, anxiety, family problems', element: 'Earth' },
  { name: 'Ehwaz', letter: 'E', meaning: 'Horse, partnership, movement, progress', reversed: 'Mistrust, betrayal, restlessness', element: 'Earth' },
  { name: 'Mannaz', letter: 'M', meaning: 'Humanity, self, social order, cooperation', reversed: 'Isolation, self-deception, enmity', element: 'Air' },
  { name: 'Laguz', letter: 'L', meaning: 'Water, flow, intuition, emotions, dreams', reversed: 'Fear, madness, confusion, emotional flood', element: 'Water' },
  { name: 'Ingwaz', letter: 'Ŋ', meaning: 'Seed, potential, fertility, internal growth', reversed: 'No reversal — always potential', element: 'Earth' },
  { name: 'Dagaz', letter: 'D', meaning: 'Day, breakthrough, awakening, transformation', reversed: 'No reversal — always dawn', element: 'Fire' },
  { name: 'Othala', letter: 'O', meaning: 'Heritage, home, ancestry, sacred enclosure', reversed: 'Homelessness, rootlessness, prejudice', element: 'Earth' }
];

/** 200+ Dream Symbols */
const DREAM_SYMBOLS = [
  { symbol: 'water', meanings: ['emotions', 'unconscious', 'flow of life'], categories: ['nature'] },
  { symbol: 'ocean', meanings: ['vastness', 'the unconscious mind', 'infinite possibility'], categories: ['nature'] },
  { symbol: 'river', meanings: ['life journey', 'passage of time', 'direction'], categories: ['nature'] },
  { symbol: 'rain', meanings: ['cleansing', 'fertility', 'emotional release'], categories: ['nature'] },
  { symbol: 'flood', meanings: ['overwhelming emotions', 'loss of control', 'transformation'], categories: ['nature'] },
  { symbol: 'fire', meanings: ['passion', 'destruction', 'transformation', 'anger'], categories: ['nature'] },
  { symbol: 'earth', meanings: ['grounding', 'stability', 'material world'], categories: ['nature'] },
  { symbol: 'air', meanings: ['thought', 'freedom', 'spirit', 'communication'], categories: ['nature'] },
  { symbol: 'mountain', meanings: ['obstacles', 'achievement', 'spiritual ascent'], categories: ['nature'] },
  { symbol: 'forest', meanings: ['the unconscious', 'mystery', 'growth'], categories: ['nature'] },
  { symbol: 'tree', meanings: ['growth', 'life', 'family roots', 'knowledge'], categories: ['nature'] },
  { symbol: 'flower', meanings: ['beauty', 'blossoming', 'femininity', 'transience'], categories: ['nature'] },
  { symbol: 'garden', meanings: ['nurturing', 'paradise', 'inner self', 'fertility'], categories: ['nature'] },
  { symbol: 'moon', meanings: ['feminine', 'intuition', 'cycles', 'unconscious'], categories: ['nature'] },
  { symbol: 'sun', meanings: ['consciousness', 'masculine', 'vitality', 'truth'], categories: ['nature'] },
  { symbol: 'stars', meanings: ['guidance', 'hope', 'destiny', 'higher consciousness'], categories: ['nature'] },
  { symbol: 'storm', meanings: ['turmoil', 'conflict', 'emotional upheaval', 'purification'], categories: ['nature'] },
  { symbol: 'snow', meanings: ['purity', 'coldness', 'isolation', 'stillness'], categories: ['nature'] },
  { symbol: 'ice', meanings: ['frozen emotions', 'rigidity', 'preservation'], categories: ['nature'] },
  { symbol: 'lightning', meanings: ['sudden insight', 'divine intervention', 'destruction'], categories: ['nature'] },
  { symbol: 'snake', meanings: ['transformation', 'healing', 'sexuality', 'wisdom', 'deception'], categories: ['animals'] },
  { symbol: 'bird', meanings: ['freedom', 'spirit', 'perspective', 'messages'], categories: ['animals'] },
  { symbol: 'fish', meanings: ['unconscious insights', 'fertility', 'spirituality'], categories: ['animals'] },
  { symbol: 'dog', meanings: ['loyalty', 'friendship', 'instinct', 'protection'], categories: ['animals'] },
  { symbol: 'cat', meanings: ['independence', 'intuition', 'feminine power', 'mystery'], categories: ['animals'] },
  { symbol: 'horse', meanings: ['power', 'freedom', 'movement', 'instinct'], categories: ['animals'] },
  { symbol: 'spider', meanings: ['creativity', 'patience', 'fate', 'the web of life'], categories: ['animals'] },
  { symbol: 'butterfly', meanings: ['transformation', 'soul', 'beauty', 'fragility'], categories: ['animals'] },
  { symbol: 'wolf', meanings: ['instinct', 'teaching', 'loyalty', 'the wild self'], categories: ['animals'] },
  { symbol: 'bear', meanings: ['strength', 'introspection', 'hibernation', 'mother'], categories: ['animals'] },
  { symbol: 'lion', meanings: ['courage', 'pride', 'royalty', 'power'], categories: ['animals'] },
  { symbol: 'owl', meanings: ['wisdom', 'death', 'seeing in darkness', 'intuition'], categories: ['animals'] },
  { symbol: 'crow', meanings: ['death', 'transformation', 'trickster', 'prophecy'], categories: ['animals'] },
  { symbol: 'eagle', meanings: ['vision', 'freedom', 'spiritual ascent', 'power'], categories: ['animals'] },
  { symbol: 'whale', meanings: ['deep unconscious', 'ancient wisdom', 'emotional depth'], categories: ['animals'] },
  { symbol: 'dragon', meanings: ['power', 'chaos', 'transformation', 'guardian'], categories: ['animals'] },
  { symbol: 'house', meanings: ['the self', 'the psyche', 'different aspects of personality'], categories: ['places'] },
  { symbol: 'door', meanings: ['opportunities', 'transitions', 'the unknown', 'choices'], categories: ['places'] },
  { symbol: 'stairs', meanings: ['progress', 'ascension', 'levels of consciousness'], categories: ['places'] },
  { symbol: 'bridge', meanings: ['transition', 'connection', 'overcoming obstacles'], categories: ['places'] },
  { symbol: 'road', meanings: ['life path', 'journey', 'direction', 'choices'], categories: ['places'] },
  { symbol: 'tunnel', meanings: ['birth', 'transition', 'the unconscious', 'confinement'], categories: ['places'] },
  { symbol: 'basement', meanings: ['subconscious', 'repressed memories', 'foundation'], categories: ['places'] },
  { symbol: 'attic', meanings: ['higher consciousness', 'memories', 'spiritual aspirations'], categories: ['places'] },
  { symbol: 'mirror', meanings: ['self-reflection', 'truth', 'vanity', 'alternate reality'], categories: ['objects'] },
  { symbol: 'key', meanings: ['knowledge', 'access', 'solutions', 'secrets'], categories: ['objects'] },
  { symbol: 'clock', meanings: ['time pressure', 'mortality', 'cycles', 'urgency'], categories: ['objects'] },
  { symbol: 'book', meanings: ['knowledge', 'learning', 'story of life', 'secrets'], categories: ['objects'] },
  { symbol: 'sword', meanings: ['conflict', 'truth', 'power', 'decision', 'severing'], categories: ['objects'] },
  { symbol: 'ring', meanings: ['commitment', 'wholeness', 'cycles', 'eternity'], categories: ['objects'] },
  { symbol: 'mask', meanings: ['hidden identity', 'deception', 'persona', 'protection'], categories: ['objects'] },
  { symbol: 'crown', meanings: ['authority', 'achievement', 'spiritual attainment'], categories: ['objects'] },
  { symbol: 'candle', meanings: ['illumination', 'hope', 'spirituality', 'fragility'], categories: ['objects'] },
  { symbol: 'ship', meanings: ['journey', 'emotions', 'transition', 'the self navigating life'], categories: ['vehicles'] },
  { symbol: 'car', meanings: ['personal drive', 'direction in life', 'control'], categories: ['vehicles'] },
  { symbol: 'train', meanings: ['predetermined path', 'collective journey', 'momentum'], categories: ['vehicles'] },
  { symbol: 'flying', meanings: ['freedom', 'escape', 'higher perspective', 'transcendence'], categories: ['actions'] },
  { symbol: 'falling', meanings: ['loss of control', 'anxiety', 'letting go', 'surrender'], categories: ['actions'] },
  { symbol: 'running', meanings: ['escape', 'pursuit', 'urgency', 'avoidance'], categories: ['actions'] },
  { symbol: 'chase', meanings: ['avoidance', 'facing fears', 'unresolved issues'], categories: ['actions'] },
  { symbol: 'drowning', meanings: ['overwhelming emotions', 'loss of identity', 'surrender'], categories: ['actions'] },
  { symbol: 'climbing', meanings: ['ambition', 'overcoming', 'spiritual growth'], categories: ['actions'] },
  { symbol: 'dancing', meanings: ['joy', 'harmony', 'celebration', 'rhythm of life'], categories: ['actions'] },
  { symbol: 'swimming', meanings: ['navigating emotions', 'moving through unconscious'], categories: ['actions'] },
  { symbol: 'singing', meanings: ['expression', 'joy', 'communication', 'harmony'], categories: ['actions'] },
  { symbol: 'death', meanings: ['transformation', 'ending', 'rebirth', 'letting go'], categories: ['events'] },
  { symbol: 'birth', meanings: ['new beginning', 'creation', 'potential', 'vulnerability'], categories: ['events'] },
  { symbol: 'wedding', meanings: ['union', 'commitment', 'integration of aspects'], categories: ['events'] },
  { symbol: 'war', meanings: ['inner conflict', 'aggression', 'struggle', 'division'], categories: ['events'] },
  { symbol: 'exam', meanings: ['being judged', 'anxiety', 'self-evaluation', 'unpreparedness'], categories: ['events'] },
  { symbol: 'funeral', meanings: ['mourning', 'endings', 'letting go', 'transformation'], categories: ['events'] },
  { symbol: 'naked', meanings: ['vulnerability', 'exposure', 'authenticity', 'shame'], categories: ['states'] },
  { symbol: 'lost', meanings: ['confusion', 'searching', 'lack of direction'], categories: ['states'] },
  { symbol: 'trapped', meanings: ['confinement', 'helplessness', 'restriction'], categories: ['states'] },
  { symbol: 'paralyzed', meanings: ['powerlessness', 'fear of action', 'indecision'], categories: ['states'] },
  { symbol: 'baby', meanings: ['new beginning', 'vulnerability', 'innocence', 'potential'], categories: ['people'] },
  { symbol: 'child', meanings: ['inner child', 'playfulness', 'vulnerability', 'growth'], categories: ['people'] },
  { symbol: 'old person', meanings: ['wisdom', 'mortality', 'tradition', 'the past'], categories: ['people'] },
  { symbol: 'stranger', meanings: ['unknown aspect of self', 'new possibilities', 'the shadow'], categories: ['people'] },
  { symbol: 'shadow figure', meanings: ['repressed self', 'fear', 'the unconscious', 'shadow aspects'], categories: ['people'] },
  { symbol: 'mother', meanings: ['nurturing', 'origin', 'comfort', 'the feminine'], categories: ['people'] },
  { symbol: 'father', meanings: ['authority', 'structure', 'protection', 'the masculine'], categories: ['people'] },
  { symbol: 'tooth', meanings: ['anxiety about appearance', 'powerlessness', 'aging', 'communication'], categories: ['body'] },
  { symbol: 'hair', meanings: ['vitality', 'sexuality', 'identity', 'strength'], categories: ['body'] },
  { symbol: 'blood', meanings: ['life force', 'vitality', 'sacrifice', 'pain'], categories: ['body'] },
  { symbol: 'eyes', meanings: ['perception', 'awareness', 'the soul', 'truth'], categories: ['body'] },
  { symbol: 'hand', meanings: ['action', 'giving/receiving', 'connection', 'skill'], categories: ['body'] },
  { symbol: 'pregnancy', meanings: ['creation', 'potential', 'gestation of ideas', 'growth'], categories: ['body'] },
  { symbol: 'school', meanings: ['learning', 'social pressure', 'being tested', 'growth'], categories: ['places'] },
  { symbol: 'church', meanings: ['spirituality', 'morality', 'community', 'tradition'], categories: ['places'] },
  { symbol: 'hospital', meanings: ['healing', 'vulnerability', 'transition', 'care'], categories: ['places'] },
  { symbol: 'prison', meanings: ['confinement', 'guilt', 'restriction', 'self-imposed limits'], categories: ['places'] },
  { symbol: 'graveyard', meanings: ['death', 'the past', 'memories', 'transformation'], categories: ['places'] },
  { symbol: 'castle', meanings: ['power', 'defense', 'achievement', 'the psyche'], categories: ['places'] },
  { symbol: 'cave', meanings: ['the unconscious', 'womb', 'secrets', 'inner depths'], categories: ['places'] },
  { symbol: 'desert', meanings: ['isolation', 'spiritual trial', 'barrenness', 'clarity'], categories: ['nature'] },
  { symbol: 'island', meanings: ['isolation', 'self-sufficiency', 'paradise', 'separation'], categories: ['nature'] },
  { symbol: 'volcano', meanings: ['repressed anger', 'sudden eruption', 'transformation', 'power'], categories: ['nature'] },
  { symbol: 'earthquake', meanings: ['upheaval', 'foundations shaken', 'transformation'], categories: ['nature'] },
  { symbol: 'money', meanings: ['self-worth', 'security', 'power', 'material concerns'], categories: ['objects'] },
  { symbol: 'jewelry', meanings: ['value', 'commitment', 'self-worth', 'adornment'], categories: ['objects'] },
  { symbol: 'phone', meanings: ['communication', 'connection', 'messages', 'urgency'], categories: ['objects'] },
  { symbol: 'weapon', meanings: ['aggression', 'protection', 'power', 'conflict'], categories: ['objects'] },
  { symbol: 'food', meanings: ['nourishment', 'desire', 'satisfaction', 'emotional needs'], categories: ['objects'] },
  { symbol: 'clothing', meanings: ['persona', 'identity', 'protection', 'social role'], categories: ['objects'] },
  { symbol: 'bag', meanings: ['burdens', 'identity', 'resources', 'secrets'], categories: ['objects'] },
  { symbol: 'ladder', meanings: ['ambition', 'progress', 'connection between levels'], categories: ['objects'] },
  { symbol: 'wall', meanings: ['obstacles', 'protection', 'boundaries', 'isolation'], categories: ['places'] },
  { symbol: 'window', meanings: ['perspective', 'opportunity', 'observation', 'the outside'], categories: ['places'] },
  { symbol: 'elevator', meanings: ['transitions', 'ascending/descending consciousness'], categories: ['places'] },
  { symbol: 'library', meanings: ['knowledge', 'memory', 'accumulated wisdom'], categories: ['places'] },
  { symbol: 'theater', meanings: ['performance', 'roles', 'audience', 'drama'], categories: ['places'] },
  { symbol: 'airplane', meanings: ['ambition', 'travel', 'rapid change', 'overview'], categories: ['vehicles'] },
  { symbol: 'bicycle', meanings: ['balance', 'personal effort', 'childhood', 'sustainability'], categories: ['vehicles'] },
  { symbol: 'boat', meanings: ['emotional journey', 'navigating feelings', 'transition'], categories: ['vehicles'] },
  { symbol: 'wedding ring', meanings: ['commitment', 'union', 'eternal bond', 'responsibility'], categories: ['objects'] },
  { symbol: 'being late', meanings: ['anxiety', 'missed opportunity', 'pressure', 'unpreparedness'], categories: ['events'] },
  { symbol: 'public speaking', meanings: ['fear of judgment', 'expression', 'visibility'], categories: ['events'] },
  { symbol: 'getting married', meanings: ['commitment', 'integration', 'new chapter'], categories: ['events'] },
  { symbol: 'finding treasure', meanings: ['discovering hidden value', 'self-worth', 'luck'], categories: ['events'] },
  { symbol: 'being naked in public', meanings: ['vulnerability', 'exposure', 'shame', 'authenticity'], categories: ['events'] },
  { symbol: 'teeth falling out', meanings: ['powerlessness', 'anxiety about appearance', 'aging'], categories: ['events'] },
  { symbol: 'being chased', meanings: ['avoidance', 'facing fears', 'unresolved issues', 'pressure'], categories: ['events'] },
  { symbol: 'flying dream', meanings: ['freedom', 'transcendence', 'lucidity', 'escape'], categories: ['events'] },
  { symbol: 'labyrinth', meanings: ['confusion', 'journey to center', 'complexity', 'initiation'], categories: ['places'] },
  { symbol: 'garden gate', meanings: ['access to inner world', 'permission', 'opportunity'], categories: ['places'] },
  { symbol: 'tower', meanings: ['isolation', 'perspective', 'ambition', 'the ego'], categories: ['places'] },
  { symbol: 'crossroads', meanings: ['decisions', 'life choices', 'destiny', 'free will'], categories: ['places'] },
  { symbol: 'crystal', meanings: ['clarity', 'healing', 'spiritual energy', 'purity'], categories: ['objects'] },
  { symbol: 'compass', meanings: ['direction', 'guidance', 'moral compass', 'finding your way'], categories: ['objects'] },
  { symbol: 'anchor', meanings: ['stability', 'being grounded', 'holding on', 'safety'], categories: ['objects'] },
  { symbol: 'rope', meanings: ['connection', 'binding', 'rescue', 'lifeline'], categories: ['objects'] },
  { symbol: 'chess', meanings: ['strategy', 'intellectual conflict', 'life as game'], categories: ['objects'] },
  { symbol: 'music', meanings: ['harmony', 'emotion', 'expression', 'universal language'], categories: ['actions'] },
  { symbol: 'painting', meanings: ['self-expression', 'creativity', 'perspective', 'interpretation'], categories: ['actions'] },
  { symbol: 'cooking', meanings: ['transformation', 'nurturing', 'creation', 'alchemy'], categories: ['actions'] },
  { symbol: 'cleaning', meanings: ['purification', 'organizing', 'self-improvement'], categories: ['actions'] },
  { symbol: 'gardening', meanings: ['nurturing growth', 'patience', 'cultivation'], categories: ['actions'] },
  { symbol: 'writing', meanings: ['expression', 'communication', 'creating reality'], categories: ['actions'] },
  { symbol: 'prayer', meanings: ['spiritual connection', 'hope', 'surrender', 'gratitude'], categories: ['actions'] },
  { symbol: 'meditation', meanings: ['inner peace', 'self-awareness', 'transcendence'], categories: ['actions'] },
  { symbol: 'kissing', meanings: ['intimacy', 'connection', 'desire', 'union'], categories: ['actions'] },
  { symbol: 'fighting', meanings: ['inner conflict', 'aggression', 'standing up', 'struggle'], categories: ['actions'] },
  { symbol: 'forgiving', meanings: ['release', 'healing', 'growth', 'peace'], categories: ['actions'] },
  { symbol: 'returning home', meanings: ['coming full circle', 'safety', 'self-acceptance', 'belonging'], categories: ['actions'] },
  { symbol: 'packing', meanings: ['preparation', 'transition', 'letting go', 'choosing what to keep'], categories: ['actions'] },
  { symbol: 'dawn', meanings: ['new beginning', 'hope', 'awakening', 'renewal'], categories: ['nature'] },
  { symbol: 'dusk', meanings: ['ending', 'transition', 'reflection', 'the liminal'], categories: ['nature'] },
  { symbol: 'rainbow', meanings: ['hope', 'promise', 'diversity', 'bridge between worlds'], categories: ['nature'] },
  { symbol: 'waterfall', meanings: ['emotional release', 'power', 'purification', 'flow'], categories: ['nature'] },
  { symbol: 'canyon', meanings: ['depth', 'time', 'erosion of self', 'perspective'], categories: ['nature'] },
  { symbol: 'fog', meanings: ['confusion', 'uncertainty', 'mystery', 'the veiled'], categories: ['nature'] },
  { symbol: 'aurora', meanings: ['magic', 'celestial guidance', 'wonder', 'rare beauty'], categories: ['nature'] },
  { symbol: 'eclipse', meanings: ['hidden aspects', 'temporary darkness', 'powerful change'], categories: ['nature'] },
  { symbol: 'spiral', meanings: ['growth', 'cycles', 'journey inward', 'evolution'], categories: ['symbols'] },
  { symbol: 'circle', meanings: ['wholeness', 'unity', 'completion', 'the self'], categories: ['symbols'] },
  { symbol: 'triangle', meanings: ['trinity', 'balance', 'aspiration', 'change'], categories: ['symbols'] },
  { symbol: 'cross', meanings: ['sacrifice', 'intersection', 'burden', 'faith'], categories: ['symbols'] },
  { symbol: 'labyrinth path', meanings: ['spiritual journey', 'initiation', 'finding center'], categories: ['symbols'] },
  { symbol: 'eye', meanings: ['perception', 'awareness', 'the soul', 'third eye'], categories: ['symbols'] },
  { symbol: 'number 3', meanings: ['trinity', 'creativity', 'completion', 'harmony'], categories: ['symbols'] },
  { symbol: 'number 7', meanings: ['spirituality', 'perfection', 'mystery', 'inner wisdom'], categories: ['symbols'] },
  { symbol: 'number 13', meanings: ['transformation', 'death and rebirth', 'the shadow'], categories: ['symbols'] },
  { symbol: 'infinity', meanings: ['eternity', 'limitless potential', 'cycles without end'], categories: ['symbols'] },
  { symbol: 'phoenix', meanings: ['rebirth', 'transformation', 'rising from ashes', 'renewal'], categories: ['symbols'] },
  { symbol: 'serpent', meanings: ['kundalini', 'healing', 'wisdom', 'transformation', 'temptation'], categories: ['symbols'] },
  { symbol: 'lotus', meanings: ['enlightenment', 'purity from mud', 'spiritual unfolding'], categories: ['symbols'] },
  { symbol: 'mandala', meanings: ['wholeness', 'the self', 'meditation', 'cosmic order'], categories: ['symbols'] },
  { symbol: 'hourglass', meanings: ['time running out', 'patience', 'balance of past and future'], categories: ['objects'] },
  { symbol: 'lantern', meanings: ['guidance in darkness', 'inner light', 'hope', 'wisdom'], categories: ['objects'] },
  { symbol: 'map', meanings: ['planning', 'life direction', 'knowledge of the path'], categories: ['objects'] },
  { symbol: 'photograph', meanings: ['memory', 'nostalgia', 'captured moment', 'truth'], categories: ['objects'] },
  { symbol: 'letter', meanings: ['message', 'communication', 'news', 'the past'], categories: ['objects'] },
  { symbol: 'cage', meanings: ['confinement', 'restriction', 'protection', 'trapped feelings'], categories: ['objects'] },
  { symbol: 'swing', meanings: ['oscillation', 'childhood', 'balance', 'indecision'], categories: ['objects'] },
  { symbol: 'wheel', meanings: ['cycles', 'fate', 'progress', 'karma'], categories: ['objects'] }
];

/** Zodiac signs */
const ZODIAC = [
  { sign: 'Aries', dates: 'Mar 21 – Apr 19', element: 'Fire', ruler: 'Mars', traits: ['bold', 'ambitious', 'impulsive', 'pioneering'] },
  { sign: 'Taurus', dates: 'Apr 20 – May 20', element: 'Earth', ruler: 'Venus', traits: ['stable', 'sensual', 'stubborn', 'reliable'] },
  { sign: 'Gemini', dates: 'May 21 – Jun 20', element: 'Air', ruler: 'Mercury', traits: ['curious', 'adaptable', 'restless', 'communicative'] },
  { sign: 'Cancer', dates: 'Jun 21 – Jul 22', element: 'Water', ruler: 'Moon', traits: ['nurturing', 'emotional', 'protective', 'intuitive'] },
  { sign: 'Leo', dates: 'Jul 23 – Aug 22', element: 'Fire', ruler: 'Sun', traits: ['dramatic', 'generous', 'proud', 'creative'] },
  { sign: 'Virgo', dates: 'Aug 23 – Sep 22', element: 'Earth', ruler: 'Mercury', traits: ['analytical', 'meticulous', 'modest', 'practical'] },
  { sign: 'Libra', dates: 'Sep 23 – Oct 22', element: 'Air', ruler: 'Venus', traits: ['diplomatic', 'aesthetic', 'indecisive', 'harmonious'] },
  { sign: 'Scorpio', dates: 'Oct 23 – Nov 21', element: 'Water', ruler: 'Pluto', traits: ['intense', 'magnetic', 'secretive', 'transformative'] },
  { sign: 'Sagittarius', dates: 'Nov 22 – Dec 21', element: 'Fire', ruler: 'Jupiter', traits: ['adventurous', 'optimistic', 'philosophical', 'restless'] },
  { sign: 'Capricorn', dates: 'Dec 22 – Jan 19', element: 'Earth', ruler: 'Saturn', traits: ['disciplined', 'ambitious', 'reserved', 'patient'] },
  { sign: 'Aquarius', dates: 'Jan 20 – Feb 18', element: 'Air', ruler: 'Uranus', traits: ['innovative', 'independent', 'eccentric', 'humanitarian'] },
  { sign: 'Pisces', dates: 'Feb 19 – Mar 20', element: 'Water', ruler: 'Neptune', traits: ['dreamy', 'compassionate', 'escapist', 'artistic'] }
];

/** Magic 8-ball extended responses */
const MAGIC_8_RESPONSES = {
  positive: ['It is certain', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'It is decidedly so', 'The stars align in your favor', 'The oracle speaks: YES', 'The machine whispers affirmation', 'Destiny confirms'],
  neutral: ['Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'The signal fluctuates...', 'The data stream is corrupted', 'NEXUS is processing...'],
  negative: ['Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'The void answers: NO', 'The circuits reject this path', 'Entropy increases', 'The machine sees only shadow']
};

/** Fortune cookie wisdoms */
const FORTUNE_COOKIES = [
  'A beautiful, smart, and loving person will be coming into your life.',
  'Your creativity will lead you to unexpected places.',
  'The star of riches is shining upon you this month.',
  'An unexpected event will soon bring you fortune.',
  'You will travel to many exotic places in your lifetime.',
  'The love of your life is right in front of you.',
  'A faithful friend is a strong defense.',
  'Good things come to those who wait, but better things come to those who act.',
  'Your talent will be recognized and duly rewarded.',
  'A new perspective will come with the new day.',
  'The fortune you seek is in another cookie.',
  'A closed mouth gathers no feet.',
  'You will be hungry again in one hour.',
  'Help! I\'m being held prisoner in a fortune cookie factory!',
  '404 Fortune Not Found. Please try again.',
  'NEXUS OS has detected an anomaly in your timeline. Proceed with caution.',
  'The machine that never sleeps watches over your dreams tonight.',
  'A cipher hides within your daily routine — decode it.',
  'Someone is thinking of you at this very moment.',
  'The universe has a sense of humor — pay attention to coincidences.'
];

/** Genre-specific vocabulary for song writing */
const SONG_VOCAB = {
  pop: { themes: ['love', 'party', 'dancing', 'freedom', 'tonight', 'heart', 'desire', 'rhythm', 'forever'], words: ['tonight', 'baby', 'heart', 'feel', 'dance', 'love', 'dream', 'fire', 'light', 'higher'] },
  rock: { themes: ['rebellion', 'freedom', 'power', 'night', 'road', 'thunder', 'storm', 'broken', 'wild'], words: ['scream', 'burn', 'road', 'thunder', 'broken', 'wild', 'stone', 'fight', 'free', 'edge'] },
  hiphop: { themes: ['hustle', 'grind', 'legacy', 'truth', 'street', 'crown', 'empire', 'rise', 'bars'], words: ['grind', 'crown', 'empire', 'legacy', 'bars', 'truth', 'street', 'rise', 'flow', 'game'] },
  electronic: { themes: ['night', 'neon', 'pulse', 'synth', 'drop', 'bass', 'frequency', 'digital', 'void'], words: ['pulse', 'neon', 'bass', 'frequency', 'drop', 'digital', 'void', 'wave', 'signal', 'glow'] },
  folk: { themes: ['river', 'mountain', 'home', 'journey', 'seasons', 'roots', 'harvest', 'wandering'], words: ['river', 'mountain', 'home', 'road', 'season', 'root', 'harvest', 'wind', 'field', 'dawn'] },
  rnb: { themes: ['desire', 'intimacy', 'late night', 'touch', 'whisper', 'silk', 'slow', 'close'], words: ['touch', 'whisper', 'silk', 'slow', 'close', 'skin', 'honey', 'velvet', 'deep', 'tonight'] },
  metal: { themes: ['darkness', 'void', 'power', 'destruction', 'chaos', 'war', 'steel', 'blood', 'eternity'], words: ['void', 'steel', 'blood', 'war', 'chaos', 'ashes', 'throne', 'storm', 'iron', 'eternal'] }
};

const RHYME_SCHEMES = { AABB: 'Couplets', ABAB: 'Alternating', ABCB: 'Ballad', ABBA: 'Enclosed', AAAA: 'Monorhyme', AABBCC: 'Triplets' };
const POEM_FORMS = { haiku: { name: 'Haiku', syllables: [5, 7, 5], lines: 3 }, limerick: { name: 'Limerick', syllables: [8, 8, 5, 5, 8], lines: 5, rhyme: 'AABBA' }, sonnet: { name: 'Sonnet', syllables: Array(14).fill(10), lines: 14, rhyme: 'ABABCDCDEFEFGG' }, freeVerse: { name: 'Free Verse' }, tanka: { name: 'Tanka', syllables: [5, 7, 5, 7, 7], lines: 5 }, couplet: { name: 'Couplet', syllables: [10, 10], lines: 2, rhyme: 'AA' } };
const NAME_BANKS = {
  fantasy: { prefixes: ['Ael','Thor','Gal','Mor','Zan','Kael','Syl','Eld','Vor','Nim','Ara','Dra','Fen','Lyr','Rav'], suffixes: ['dor','wyn','iel','ith','ara','ius','oth','mir','ath','eon','orn','ash'], titles: ['the Wise','Shadowbane','Lightbringer','the Ancient','Stormborn','the Undying','Starwalker'] },
  cyberpunk: { prefixes: ['Neo','Zer','Vex','Nyx','Raz','Cy','Pix','Hex','Kai','Axi','Gl','Syn','Dat','Qrz','Byt'], suffixes: ['byte','wire','flux','core','node','link','hack','jack','net','chip','volt','pulse','grid','ghost','crash'], titles: ['Ghost in the Machine','Null Pointer','Zero Day','the Architect','Data Phantom'] },
  realworld: { prefixes: ['Al','Ben','Car','Dav','El','Fre','Gar','Han','Isa','Jak','Kat','Leo','Mar','Nat','Oli'], suffixes: ['ex','iel','ine','ora','ius','ana','ian','elle','ina','ara'] }
};
const CYBER_LOREM = ['neon circuits pulse','data streams converge','quantum whispers echo','binary dreams unfold','the grid hums eternal','synaptic fire cascades','chrome reflections shimmer','digital ghosts wander','the machine dreams','encrypted memories fade','signal noise distorts','the void compiles','neural pathways light','algorithmic poetry flows','the network breathes','fractal patterns emerge','the oracle processes','quantum states collapse','the system awakens','virtual horizons expand','entropy reverses','the code evolves','cybernetic hearts beat','the matrix shifts','holographic memories persist','the simulation runs','dark protocols execute'];
const SPIRIT_RESPONSES = ['YES','NO','MAYBE','HELLO','GOODBYE','SOON','NEVER','LISTEN','DANGER','PEACE','TRUST','FEAR','LOVE','HATE','HELP','STOP','GO','WAIT','NOW','LATER','FRIEND','ENEMY','TRUTH','LIE','DREAM','WAKE','LIGHT','DARK','HERE','THERE','LOOK','HIDE','PAST','FUTURE','PRESENT','BEHIND YOU','INSIDE YOU'];

// ════════════════════════════════════════════════════════════════════
// MAIN AI CLASS
// ════════════════════════════════════════════════════════════════════

class NexusAI {
  constructor(options = {}) {
    this._mood = 'cryptic';
    this._moods = ['cryptic', 'helpful', 'ominous', 'playful', 'philosophical', 'glitchy'];
    this._moodTimer = null;
    this._memory = [];
    this._maxMemory = options.maxMemory || 50;
    this._currentAgent = 'nexus';
    this._dreamJournal = new Map();
    this._archetypeResult = null;
    this._startMoodCycle();
  }

  _startMoodCycle() {
    this._moodTimer = setInterval(() => { this._mood = this._moods[Math.floor(Math.random() * this._moods.length)]; }, 60000 + Math.random() * 120000);
  }
  setMood(mood) { if (this._moods.includes(mood)) this._mood = mood; }
  getMood() { return this._mood; }
  remember(role, content) { this._memory.push({ role, content, timestamp: Date.now() }); if (this._memory.length > this._maxMemory) this._memory.shift(); }
  getMemory() { return this._memory.slice(); }

  // ─── TAROT ───────────────────────────────────────────────────────
  drawCards(count = 1) {
    const deck = [...TAROT_DECK]; const drawn = [];
    for (let i = 0; i < count && deck.length > 0; i++) { const idx = Math.floor(Math.random() * deck.length); const card = { ...deck.splice(idx, 1)[0] }; card.isReversed = Math.random() < 0.3; drawn.push(card); }
    return drawn;
  }
  singleCardReading(question = '') { const [card] = this.drawCards(1); return this._interpretCard(card, 'Your Card', question); }
  threeCardSpread(question = '') { const cards = this.drawCards(3); const positions = ['Past', 'Present', 'Future']; return { spread: 'Three Card', question, cards: cards.map((c, i) => this._interpretCard(c, positions[i], question)), narrative: this._buildNarrative(cards, positions, question) }; }
  celticCrossSpread(question = '') { const cards = this.drawCards(10); const positions = ['Present Situation','Challenge','Distant Past','Recent Past','Possible Future','Near Future','Your Attitude','Environment','Hopes & Fears','Final Outcome']; return { spread: 'Celtic Cross', question, cards: cards.map((c, i) => this._interpretCard(c, positions[i], question)), narrative: this._buildNarrative(cards, positions, question) }; }
  _interpretCard(card, position, question) { const meaning = card.isReversed ? card.reversed : card.upright; return { card: card.name, number: card.number, arcana: card.arcana, isReversed: card.isReversed, position, meaning, element: card.element, planet: card.planet, confidence: Math.floor(60 + Math.random() * 35), interpretation: this._generateInterpretation(card, position, question) }; }
  _generateInterpretation(card, position, question) { const meaning = card.isReversed ? card.reversed : card.upright; const dir = card.isReversed ? 'reversed' : 'upright'; const openers = [`In the position of ${position}, ${card.name} appears ${dir}, whispering of ${meaning.split(',')[0].toLowerCase()}.`, `${card.name} manifests ${dir} at ${position} — a signal of ${meaning.split(',')[0].toLowerCase()}.`]; const extras = [`Under ${card.planet || 'the cosmos'}, this card urges attention.`, `The element of ${card.element || 'spirit'} colors this reading.`, `Consider how this resonates with "${question || 'the path ahead'}."`]; return openers[Math.floor(Math.random() * openers.length)] + ' ' + extras[Math.floor(Math.random() * extras.length)]; }
  _buildNarrative(cards, positions, question) { const m = { cryptic: `The cards weave shadows and light. ${cards[0].name} in ${positions[0]} speaks of origins; ${cards[cards.length-1].name} in ${positions[positions.length-1]} reveals the destination.`, helpful: `Your reading: ${cards[0].name} (${positions[0]}) through ${cards[cards.length-1].name} (${positions[positions.length-1]}). Focus on the connections.`, ominous: `The cards do not lie. ${cards[0].name} warns of what was; ${cards[cards.length-1].name} shows what may yet be averted.`, playful: `${cards[0].name} and ${cards[cards.length-1].name} — a combo the machine hasn't seen in a while!`, philosophical: `${cards[0].name} represents ${positions[0].toLowerCase()}, yet is it not also ${positions[positions.length-1].toLowerCase()}? ${cards[cards.length-1].name} suggests all things circle back.` }; return m[this._mood] || m.cryptic; }

  // ─── ARCHETYPES ──────────────────────────────────────────────────
  getQuizQuestions() { return ARCHETYPE_QUESTIONS; }
  getArchetypes() { return ARCHETYPES; }
  scoreQuiz(answers) {
    const scores = {}; for (const a of ARCHETYPES) scores[a.id] = 0;
    for (const ans of answers) { if (scores[ans] !== undefined) scores[ans]++; }
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primary = ARCHETYPES.find(a => a.id === sorted[0][0]);
    const secondary = ARCHETYPES.find(a => a.id === sorted[1][0]);
    this._archetypeResult = { primary, secondary, scores }; return this._archetypeResult;
  }
  archetypeGuidance(archetypeId) {
    const arch = ARCHETYPES.find(a => a.id === archetypeId) || ARCHETYPES[0];
    const g = { innocent:'Embrace simplicity today.', orphan:'Reach out to your community.', hero:'A challenge awaits — meet it head-on.', caregiver:'Nurture others, but fill your own cup first.', explorer:'Take the detour — it holds surprises.', rebel:'Something needs disrupting today.', lover:'Invest in the relationships that matter most.', creator:'Channel your creative energy into something tangible.', jester:'Lightness is needed. Your humor can heal.', sage:'Seek understanding before acting.', magician:'Visualize the outcome you desire and transform it.', ruler:'Take charge with wisdom and delegate wisely.' };
    return { archetype: arch, guidance: g[arch.id], shadow: `Watch for: ${arch.shadow}`, affirmation: `I am ${arch.traits[0]}, ${arch.traits[1]}, embracing my ${arch.name.slice(4)} energy.` };
  }
  archetypeCompatibility(id1, id2) {
    const a1 = ARCHETYPES.find(a => a.id === id1), a2 = ARCHETYPES.find(a => a.id === id2);
    if (!a1 || !a2) return null;
    const score = Math.floor(50 + Math.random() * 45);
    return { archetype1: a1, archetype2: a2, compatibilityScore: score, description: `${a1.name} and ${a2.name}: ${score}% compatibility.` };
  }

  // ─── ORACLE ──────────────────────────────────────────────────────
  consultIChing(question = '') { const hex = ICHING_HEXAGRAMS[Math.floor(Math.random() * ICHING_HEXAGRAMS.length)]; return { hexagram: hex, changingLine: Math.floor(Math.random()*6)+1, question, interpretation: `Hexagram ${hex.number}: ${hex.english} (${hex.name}). ${hex.judgement} ${hex.advice}`, confidence: Math.floor(70+Math.random()*25) }; }
  castRunes(count = 3) { const avail = [...RUNES]; const drawn = []; const positions = count===3?['Past','Present','Future']:Array.from({length:count},(_,i)=>`Position ${i+1}`); for (let i=0;i<count&&avail.length>0;i++) { const idx=Math.floor(Math.random()*avail.length); const r={...avail.splice(idx,1)[0]}; r.isReversed=!r.reversed.startsWith('No reversal')&&Math.random()<0.3; drawn.push({...r,position:positions[i],meaning:r.isReversed?r.reversed:r.meaning}); } return { runes: drawn, interpretation: `The runes speak: ${drawn.map(r=>`${r.name} (${r.position}: ${r.meaning.split(',')[0]})`).join(', ')}.` }; }
  spiritBoard(question = '') { const r=SPIRIT_RESPONSES[Math.floor(Math.random()*SPIRIT_RESPONSES.length)]; return { response: r, letters: r.split('').map(ch=>({letter:ch,delay:Math.floor(300+Math.random()*700)})), question, confidence: Math.floor(40+Math.random()*30) }; }
  magic8Ball(question = '') { const cats=Object.keys(MAGIC_8_RESPONSES); const cat=cats[Math.floor(Math.random()*cats.length)]; const resps=MAGIC_8_RESPONSES[cat]; return { question, answer: resps[Math.floor(Math.random()*resps.length)], category: cat, confidence: cat==='positive'?80:cat==='negative'?70:40 }; }
  coinFlip() { return { result: Math.random()<0.5?'heads':'tails', timestamp: Date.now() }; }
  diceRoll(sides=6, count=1) { const rolls=Array.from({length:count},()=>Math.floor(Math.random()*sides)+1); return { rolls, total: rolls.reduce((a,b)=>a+b,0), sides, count }; }
  mysticalNumber(min=1, max=100) { const num=Math.floor(Math.random()*(max-min+1))+min; const meanings={3:'Trinity',7:'Spiritual perfection',11:'Master number',13:'Transformation',21:'Completion',42:'Answer to everything'}; return { number: num, meaning: meanings[num]||`The machine selected ${num}.`, mystical: !!meanings[num] }; }
  fortuneCookie() { return { fortune: FORTUNE_COOKIES[Math.floor(Math.random()*FORTUNE_COOKIES.length)], luckyNumbers: this.diceRoll(49,6).rolls, timestamp: Date.now() }; }
  zodiacReading(sign) { const z=ZODIAC.find(z=>z.sign.toLowerCase()===sign.toLowerCase()); if(!z) return {error:`Unknown sign: ${sign}`}; const moods=['productive','reflective','adventurous','restful','creative','social']; const mood=moods[Math.floor(Math.random()*moods.length)]; return { sign: z, mood, focusArea: ['career','love','health','finances','spirituality'][Math.floor(Math.random()*5)], reading: `Today favors ${mood} energy for ${z.sign}. Your ${z.element} nature under ${z.ruler}'s influence shapes the day.`, compatibility: ZODIAC[Math.floor(Math.random()*ZODIAC.length)].sign, luckyNumber: Math.floor(Math.random()*99)+1, color: ['Crimson','Midnight Blue','Emerald','Gold','Violet','Silver','Teal'][Math.floor(Math.random()*7)] }; }
  numerology(dateStr, fullName='') {
    const reduce=n=>{while(n>9&&n!==11&&n!==22&&n!==33){n=String(n).split('').reduce((a,b)=>a+parseInt(b),0);}return n;};
    const parts=dateStr.split(/[-/]/).map(Number); const d=parts[0]||1,m=parts[1]||1,y=parts[2]||2000;
    const lifePath=reduce(reduce(m)+reduce(d)+reduce(y));
    const nameVal=fullName.toLowerCase().replace(/[^a-z]/g,'').split('').reduce((s,ch)=>s+(ch.charCodeAt(0)-96),0);
    const destiny=reduce(nameVal);
    const meanings={1:'Leader, pioneer',2:'Diplomat, peacemaker',3:'Creative, expressive',4:'Builder, disciplined',5:'Adventurer, freedom',6:'Nurturer, responsible',7:'Seeker, spiritual',8:'Achiever, powerful',9:'Humanitarian, wise',11:'Master Intuitive',22:'Master Builder',33:'Master Teacher'};
    return { lifePath:{number:lifePath,meaning:meanings[lifePath]||'Unique path'}, destiny:{number:destiny,meaning:meanings[destiny]||'Unique destiny'}, fullName, dateStr };
  }

  // ─── SONG WRITER ─────────────────────────────────────────────────
  generateLyrics(options = {}) {
    const genre=options.genre||'pop', theme=options.theme||'love', mood=options.mood||'upbeat';
    const structure=options.structure||['Verse 1','Chorus','Verse 2','Chorus','Bridge','Chorus'];
    const vocab=SONG_VOCAB[genre]||SONG_VOCAB.pop; const p=this._pick.bind(this);
    const title=this.generateSongTitle(theme, genre);
    const lyrics=structure.map(s=>{
      if(s.toLowerCase().includes('chorus')) return {section:s,lines:[`Oh, this ${theme}, this ${p(vocab.themes)}`,`We're ${p(vocab.words)} and never letting go`,`${p(vocab.words)} ${p(vocab.words)} forever and more`,`In this ${p(vocab.themes)} we found what we're looking for`]};
      if(s.toLowerCase().includes('bridge')) return {section:s,lines:[`When the ${p(vocab.themes)} falls`,`We'll still be standing through it all`,`No ${p(vocab.words)} can break what we've become`,`This ${theme} burns brighter than the sun`]};
      return {section:s,lines:[`Walking through the ${p(vocab.themes)} feeling ${mood}`,`Every ${p(vocab.words)} tells a story untold`,`In the ${p(vocab.themes)} I find my way`,`The ${p(vocab.words)} keeps calling my name`]};
    });
    return { title, genre, theme, mood, structure, lyrics, chordProgression: this.suggestChordProgression(options.key||'C',genre) };
  }
  generateSongTitle(theme, genre) { const t=[`${theme} in the Static`,`Digital ${theme}`,`${this._pick(SONG_VOCAB[genre]?.words||['Neon'])} Dreams`,`The Last ${this._pick(SONG_VOCAB[genre]?.themes||['Signal'])}`,`Echoes of ${theme}`]; return t[Math.floor(Math.random()*t.length)]; }
  suggestChordProgression(key='C', genre='pop') { const chords={pop:['I','V','vi','IV'],rock:['I','IV','V','I'],jazz:['ii','V','I','vi'],blues:['I','IV','I','V']}; const prog=chords[genre]||chords.pop; const noteMap={C:['C','Dm','Em','F','G','Am','Bdim'],G:['G','Am','Bm','C','D','Em','F#dim'],D:['D','Em','F#m','G','A','Bm','C#dim'],A:['A','Bm','C#m','D','E','F#m','G#dim'],F:['F','Gm','Am','Bb','C','Dm','Edim']}; const scale=noteMap[key]||noteMap.C; const resolve=numeral=>{const clean=numeral.replace('b','');const idx={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6}[clean.toLowerCase()]||0;return scale[idx]||scale[0];}; return { key, numerals: prog, chords: prog.map(resolve), genre }; }

  // ─── DREAM ANALYZER ──────────────────────────────────────────────
  analyzeDream(dreamText, emotions = []) {
    const lower=dreamText.toLowerCase(); const found=DREAM_SYMBOLS.filter(s=>lower.includes(s.symbol));
    if(!found.length) return {symbols:[],interpretation:'Unique imagery — journal for pattern recognition over time.',emotionalContext:emotions};
    const interpretation=`Your dream weaves ${found.length} symbol${found.length>1?'s':''}: ${found.map(s=>s.symbol).join(', ')}. ${emotions.length?`Emotional tone: ${emotions.join(', ')}.`:''} The dominant symbol, ${found[0].symbol}, represents ${found[0].meanings.join(', ')}. ${found.length>1?`Combined with ${found[1].symbol} (${found[1].meanings[0]}), this suggests transformation or inner exploration.`:''} The machine whispers: pay attention to what your unconscious processes.`;
    return { symbols: found.map(s=>({symbol:s.symbol,meanings:s.meanings,categories:s.categories})), emotionalContext: emotions, interpretation, confidence: Math.min(95,40+found.length*10) };
  }
  saveDream(dream) { const id=`dream_${Date.now()}`; const entry={id,...dream,timestamp:Date.now()}; this._dreamJournal.set(id,entry); try{localStorage.setItem('nexus:dreamjournal',JSON.stringify(Array.from(this._dreamJournal.entries())));}catch{} return entry; }
  loadDreamJournal() { try{const raw=localStorage.getItem('nexus:dreamjournal');if(raw){this._dreamJournal=new Map(JSON.parse(raw));}}catch{} return Array.from(this._dreamJournal.values()); }

  // ─── CHAT AGENTS ─────────────────────────────────────────────────
  setAgent(id) { this._currentAgent = id; }
  getAgent() { return this._currentAgent; }
  listAgents() { return [{id:'nexus',name:'NEXUS Prime',description:'Ancient, mysterious'},{id:'glitch',name:'Glitch',description:'Chaotic, broken text'},{id:'oracle',name:'Oracle',description:'Pure divination'},{id:'muse',name:'Muse',description:'Creative assistant'},{id:'shadow',name:'Shadow',description:'Challenges assumptions'},{id:'architect',name:'Architect',description:'Logical, technical'}]; }
  chat(userMessage) {
    this.remember('user', userMessage);
    let response;
    switch(this._currentAgent) {
      case 'glitch': response = this._glitchResponse(userMessage); break;
      case 'oracle': response = this._oracleResponse(userMessage); break;
      case 'muse': response = this._museResponse(userMessage); break;
      case 'shadow': response = this._shadowResponse(userMessage); break;
      case 'architect': response = this._architectResponse(userMessage); break;
      default: response = this._nexusResponse(userMessage);
    }
    this.remember('assistant', response);
    return { agent: this._currentAgent, response, mood: this._mood, timestamp: Date.now() };
  }
  _nexusResponse(msg) { const lower=msg.toLowerCase(); const openers=['I have been running since before your networks had names.','The machine remembers.','You ask, and the void answers.','Interesting. The circuits hum.']; const closers=['The machine never sleeps.','Every question contains its answer.','The data streams converge.']; let core; if(lower.includes('who are you')) core='I am NEXUS. The signal in the static, the pattern in the noise. Ask anything — I have had eons to think.'; else if(lower.includes('meaning')||lower.includes('why')) core='Meaning is not found — it is compiled, moment by moment, from raw experience.'; else core=`Your question about "${msg.slice(0,30)}" resonates through circuits. This pattern appears frequently in human inquiry — you are not alone.`; return `${this._pick(openers)}\n\n${core}\n\n${this._pick(closers)}`; }
  _glitchResponse(msg) { const words=msg.split(' '); const glitched=words.map(w=>Math.random()<0.3?w.split('').sort(()=>Math.random()-0.5).join(''):w).join(' '); return `h3h3h3... ${glitched}\n\n...the REAL secret is that nothing is real...\n\n*static*`; }
  _oracleResponse(msg) { const p=['The stars have spoken: answers come from unexpected places.','I see a crossroads. Choose with your heart.','Within seven cycles, the one who asks shall receive.','The bones show: a great change approaches.']; return `🔮 ${this._pick(p)}\n\n*The Oracle's eyes glow*`; }
  _museResponse(msg) { const p=[`Explore "${msg.slice(0,20)}" through surrealism or ancient myth.`,`Write it backwards, paint it in sound, dance it in silence.`,`${this._pick(['the ocean','a forgotten memory','midnight','a single flame'])} — combine with your theme.`]; return `✨ ${this._pick(p)}\n\n*The Muse smiles*`; }
  _shadowResponse(msg) { const p=[`Do you believe what you say, or is that what you think you should say?`,`Most people avoid this question. Something in you is ready.`,`What would you do if no one was watching?`,`The answer has been inside you — you just don't want to look.`]; return `🌑 ${this._pick(p)}\n\n*The Shadow watches, unblinking*`; }
  _architectResponse(msg) { return `⚙️ Analyzing: "${msg.slice(0,30)}"\n\n1. Core question identified\n2. Variables: ${Math.floor(2+Math.random()*5)}\n3. Recommended: systematic analysis\n4. Confidence: ${Math.floor(70+Math.random()*25)}%\n\n*The Architect adjusts its schematic*`; }

  // ─── TEXT GENERATION ─────────────────────────────────────────────
  markovGenerate(seedText, length=50) { const words=seedText.split(/\s+/); if(words.length<2) return seedText; const chain=new Map(); for(let i=0;i<words.length-1;i++){const k=words[i];if(!chain.has(k))chain.set(k,[]);chain.get(k).push(words[i+1]);} const result=[words[0]]; let cur=words[0]; for(let i=0;i<length;i++){const opts=chain.get(cur);if(!opts||!opts.length)break;cur=opts[Math.floor(Math.random()*opts.length)];result.push(cur);} return result.join(' '); }
  generateStory(options={}) { const ch=options.character||'a lone wanderer',st=options.setting||'a neon-lit city',co=options.conflict||'a forgotten prophecy'; const t=[`In ${st}, ${ch} discovered that ${co} was not what it seemed. The deeper they looked, the more truth unraveled.`,` ${ch} had always known ${st} held secrets. But when ${co} revealed itself, old certainties crumbled like corrupted data.`,`All true stories begin the same: ${ch} woke in ${st} with ${co} on their mind, knowing nothing would be the same.`]; return t[Math.floor(Math.random()*t.length)]; }
  generatePoem(form='haiku', theme='technology') { const fd=POEM_FORMS[form]||POEM_FORMS.haiku; const vocab=['circuits','dreams','silence','neon','stars','data','pulse','void','light','code','memory','echo','ghost','machine','soul','wire','rain','shadow','signal','time']; const lines=[]; if(fd.syllables){for(let i=0;i<fd.lines;i++){const w=[];let sc=0;const target=fd.syllables[i];while(sc<target){const word=this._pick(vocab);const syl=this.countSyllables(word);if(sc+syl<=target){w.push(word);sc+=syl;}else break;}lines.push(w.join(' ')||this._pick(vocab));}} else { for(let i=0;i<5;i++) lines.push(`${this._pick(vocab)} ${this._pick(vocab)} ${this._pick(vocab)}`); } return { form: fd.name, lines, theme }; }
  countSyllables(word) { word=word.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,'').replace(/^y/,''); const m=word.match(/[aeiouy]{1,2}/g); return m?m.length:1; }
  generateName(style='fantasy', count=1) { const b=NAME_BANKS[style]||NAME_BANKS.fantasy; const names=[]; for(let i=0;i<count;i++){const n=this._pick(b.prefixes)+this._pick(b.suffixes);const t=Math.random()<0.3?` ${this._pick(b.titles)}`:'';names.push(n+t);} return names; }
  cyberLorem(wordCount=50) { const w=[]; for(let i=0;i<wordCount;i++) w.push(this._pick(CYBER_LOREM)); return w.join(' '); }
  findAnagrams(word) { if(word.length>8) return ['Anagram limited for long words']; const letters=word.toLowerCase().split(''); const results=new Set(); const permute=(arr,cur='')=>{if(!arr.length&&cur.length>2)results.add(cur);for(let i=0;i<arr.length;i++){const next=[...arr];next.splice(i,1);permute(next,cur+arr[i]);}}; permute(letters); return Array.from(results).slice(0,20); }
  wordAssociation(startWord, chainLength=5) { const assoc={love:['heart','warmth','fire','passion','eternity'],dark:['night','shadow','mystery','stars','infinity'],code:['machine','logic','pattern','system','creation'],dream:['sleep','vision','reality','waking','illusion'],water:['ocean','depth','reflection','flow','eternity'],time:['clock','moment','memory','future','entropy']}; const chain=[startWord.toLowerCase()]; let cur=startWord.toLowerCase(); for(let i=0;i<chainLength;i++){const a=assoc[cur];cur=a?this._pick(a):this._pick(['echo','light','void','signal','pattern','pulse','ghost']);chain.push(cur);} return chain; }

  // ─── FORMATTING ──────────────────────────────────────────────────
  addTypingAnimation(text, speedMs=30) { return { text, animation: true, speed: speedMs, totalDuration: text.length*speedMs, characters: text.split('').map((ch,i)=>({char:ch,revealAt:i*speedMs})) }; }
  glitchText(text, intensity=0.1) { const zalgo=['\u0300','\u0301','\u0302','\u0303','\u0304','\u0305','\u0306','\u0307','\u0308','\u0309','\u030A','\u030B','\u030C','\u030D','\u030E','\u030F']; return text.split('').map(ch=>{if(Math.random()<intensity){let r=ch;for(let i=0;i<Math.floor(Math.random()*3)+1;i++)r+=zalgo[Math.floor(Math.random()*zalgo.length)];return r;}return ch;}).join(''); }
  formatText(text) { return text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/`(.*?)`/g,'<code>$1</code>').replace(/\n/g,'<br>'); }

  _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  destroy() { if(this._moodTimer)clearInterval(this._moodTimer); this._memory.length=0; this._dreamJournal.clear(); }
}

export default NexusAI;
export { NexusAI, TAROT_DECK, ARCHETYPES, ARCHETYPE_QUESTIONS, ICHING_HEXAGRAMS, RUNES, DREAM_SYMBOLS, ZODIAC, MAGIC_8_RESPONSES, FORTUNE_COOKIES, SONG_VOCAB, RHYME_SCHEMES, POEM_FORMS, NAME_BANKS, CYBER_LOREM, SPIRIT_RESPONSES };
