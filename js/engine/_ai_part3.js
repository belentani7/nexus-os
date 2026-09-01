

// ════════════════════════════════════════════════════════════════════════════
//  ARCHETYPE QUIZ — 36 Questions with expanded options
// ════════════════════════════════════════════════════════════════════════════

/**
 * 36 questions for the archetype quiz. Each question has 4 options,
 * each mapping to a specific archetype. Questions cover multiple rounds
 * to ensure accurate scoring across all 12 archetypes.
 * @constant {Array<Object>}
 */
const ARCHETYPE_QUESTIONS = [

  // --- Round 1: Core archetypes (Innocent, Orphan, Hero, Caregiver) ---

  {
    q: 'When facing a challenge, I tend to...',
    options: [
      { text: 'Believe everything will work out in the end', id: 'innocent', weight: 2 },
      { text: 'Reach out and ask others for help', id: 'orphan', weight: 2 },
      { text: 'Push through with sheer willpower and grit', id: 'hero', weight: 2 },
      { text: 'Make sure the people around me are supported', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'My ideal weekend would involve...',
    options: [
      { text: 'Simple pleasures — a walk in nature, a good book', id: 'innocent', weight: 2 },
      { text: 'Hanging out with my closest friends', id: 'orphan', weight: 2 },
      { text: 'Pushing my physical or mental limits', id: 'hero', weight: 2 },
      { text: 'Taking care of someone who needs me', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'What scares me the most is...',
    options: [
      { text: 'Being punished for something I did wrong', id: 'innocent', weight: 2 },
      { text: 'Being left behind or excluded by the group', id: 'orphan', weight: 2 },
      { text: 'Showing weakness or being seen as vulnerable', id: 'hero', weight: 2 },
      { text: 'Being selfish and ignoring others\' needs', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'Life is fundamentally about...',
    options: [
      { text: 'Enjoying every moment and finding joy', id: 'innocent', weight: 2 },
      { text: 'Finding where you belong and who belongs with you', id: 'orphan', weight: 2 },
      { text: 'Proving your strength through overcoming obstacles', id: 'hero', weight: 2 },
      { text: 'Making a meaningful difference for others', id: 'caregiver', weight: 2 }
    ]
  },

  // --- Round 2: Explorer, Rebel, Lover, Creator ---

  {
    q: 'People often describe me as...',
    options: [
      { text: 'Adventurous, free-spirited, and hard to pin down', id: 'explorer', weight: 2 },
      { text: 'Unconventional, rebellious, a bit dangerous', id: 'rebel', weight: 2 },
      { text: 'Passionate, devoted, deeply romantic', id: 'lover', weight: 2 },
      { text: 'Creative, imaginative, always making something', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'In a group setting, I am the one who...',
    options: [
      { text: 'Wanders off to explore something interesting', id: 'explorer', weight: 2 },
      { text: 'Questions the status quo and challenges assumptions', id: 'rebel', weight: 2 },
      { text: 'Makes sure everyone feels connected and valued', id: 'lover', weight: 2 },
      { text: 'Comes up with the most original ideas', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'My greatest gift to the world is...',
    options: [
      { text: 'My independence and unshakeable authenticity', id: 'explorer', weight: 2 },
      { text: 'The courage to break what no longer works', id: 'rebel', weight: 2 },
      { text: 'My deep capacity for love and intimate connection', id: 'lover', weight: 2 },
      { text: 'My original vision and ability to create', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'My dream life looks like...',
    options: [
      { text: 'Freedom, wide open spaces, and endless horizons', id: 'explorer', weight: 2 },
      { text: 'A revolution that changes everything for the better', id: 'rebel', weight: 2 },
      { text: 'Deep intimacy, beauty, and meaningful connection', id: 'lover', weight: 2 },
      { text: 'A studio full of my creations, recognized worldwide', id: 'creator', weight: 2 }
    ]
  },

  // --- Round 3: Jester, Sage, Magician, Ruler ---

  {
    q: 'What brings me the most joy is...',
    options: [
      { text: 'Making people laugh and lightening the mood', id: 'jester', weight: 2 },
      { text: 'Understanding something deeply that others find confusing', id: 'sage', weight: 2 },
      { text: 'Making a grand vision become tangible reality', id: 'magician', weight: 2 },
      { text: 'Building something lasting and well-organized', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'When I see injustice in the world, I...',
    options: [
      { text: 'Try to lighten the mood and find the humor in life', id: 'jester', weight: 2 },
      { text: 'Analyze the root cause to understand why it exists', id: 'sage', weight: 2 },
      { text: 'Envision a better way and work to transform the system', id: 'magician', weight: 2 },
      { text: 'Take charge, create order, and fix it directly', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'My biggest fear is...',
    options: [
      { text: 'Being boring, or living a boring life', id: 'jester', weight: 2 },
      { text: 'Being ignorant or misled about important truths', id: 'sage', weight: 2 },
      { text: 'My transformation having unintended negative effects', id: 'magician', weight: 2 },
      { text: 'Chaos, disorder, and being overthrown', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'My ideal role in society would be...',
    options: [
      { text: 'The one who makes everyone smile and forget their worries', id: 'jester', weight: 2 },
      { text: 'The wise counselor who advises with deep knowledge', id: 'sage', weight: 2 },
      { text: 'The visionary transformer who reshapes reality', id: 'magician', weight: 2 },
      { text: 'The respected leader who builds and maintains order', id: 'ruler', weight: 2 }
    ]
  },

  // --- Round 4: Deepening (Innocent, Orphan, Hero, Caregiver) ---

  {
    q: 'I feel most alive when...',
    options: [
      { text: 'Experiencing simple, pure happiness', id: 'innocent', weight: 2 },
      { text: 'Connecting deeply with my community', id: 'orphan', weight: 2 },
      { text: 'Overcoming a huge obstacle against all odds', id: 'hero', weight: 2 },
      { text: 'Nurturing someone through a hard time', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'People come to me when they need...',
    options: [
      { text: 'A positive outlook and reassurance', id: 'innocent', weight: 2 },
      { text: 'Empathy, understanding, and someone who gets it', id: 'orphan', weight: 2 },
      { text: 'Strength, courage, and a model of resilience', id: 'hero', weight: 2 },
      { text: 'Care, support, and a shoulder to lean on', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'My ideal vacation is...',
    options: [
      { text: 'A peaceful, untouched place of natural beauty', id: 'innocent', weight: 2 },
      { text: 'A group trip with all my best friends', id: 'orphan', weight: 2 },
      { text: 'An extreme adventure — climbing, diving, exploring', id: 'hero', weight: 2 },
      { text: 'Volunteering abroad, helping communities in need', id: 'caregiver', weight: 2 }
    ]
  },

  // --- Round 5: Deepening (Explorer, Rebel, Lover, Creator) ---

  {
    q: 'I am most frustrated by...',
    options: [
      { text: 'Feeling trapped, confined, or stuck in routine', id: 'explorer', weight: 2 },
      { text: 'Rules that don\'t make sense and authority without reason', id: 'rebel', weight: 2 },
      { text: 'Superficial relationships with no real depth', id: 'lover', weight: 2 },
      { text: 'Being forced to be ordinary when I know I\'m not', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'My personal motto could be...',
    options: [
      { text: 'The world is full of wonder — go find it', id: 'explorer', weight: 2 },
      { text: 'If it ain\'t broke, break it anyway and rebuild better', id: 'rebel', weight: 2 },
      { text: 'Love makes the world go round', id: 'lover', weight: 2 },
      { text: 'Imagination is everything — it is the preview of life\'s coming attractions', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'What drives me forward is...',
    options: [
      { text: 'The search for freedom and authentic self-discovery', id: 'explorer', weight: 2 },
      { text: 'The burning desire to shake things up and reform', id: 'rebel', weight: 2 },
      { text: 'Deep connection and intimacy with another soul', id: 'lover', weight: 2 },
      { text: 'The irresistible urge to create something that has never existed', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'I would rather be...',
    options: [
      { text: 'Free than safe', id: 'explorer', weight: 2 },
      { text: 'Feared than ignored', id: 'rebel', weight: 2 },
      { text: 'Loved than powerful', id: 'lover', weight: 2 },
      { text: 'Original than popular', id: 'creator', weight: 2 }
    ]
  },

  // --- Round 6: Deepening (Jester, Sage, Magician, Ruler) ---

  {
    q: 'In conflict situations, I tend to...',
    options: [
      { text: 'Crack a joke to defuse the tension', id: 'jester', weight: 2 },
      { text: 'Step back and analyze the situation rationally', id: 'sage', weight: 2 },
      { text: 'See it as an opportunity for transformation', id: 'magician', weight: 2 },
      { text: 'Take control and direct the resolution', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'I secretly worry about...',
    options: [
      { text: 'Being too serious all the time and missing the fun', id: 'jester', weight: 2 },
      { text: 'Knowing too much and being unable to act on it', id: 'sage', weight: 2 },
      { text: 'My power and influence going to my head', id: 'magician', weight: 2 },
      { text: 'Losing control of my domain to chaos', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'If I could have one superpower, it would be...',
    options: [
      { text: 'Finding genuine joy in absolutely anything', id: 'jester', weight: 2 },
      { text: 'Omniscience — knowing everything', id: 'sage', weight: 2 },
      { text: 'Reality manipulation — reshaping the world at will', id: 'magician', weight: 2 },
      { text: 'The ability to build and maintain perfect empires', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'The world needs more...',
    options: [
      { text: 'Joy, laughter, and people who don\'t take life too seriously', id: 'jester', weight: 2 },
      { text: 'Wisdom, understanding, and critical thinking', id: 'sage', weight: 2 },
      { text: 'Magic, wonder, and transformative vision', id: 'magician', weight: 2 },
      { text: 'Strong, responsible, ethical leadership', id: 'ruler', weight: 2 }
    ]
  },

  // --- Round 7: Final deepening (all archetypes revisited) ---

  {
    q: 'When I fail at something important, I...',
    options: [
      { text: 'Shrug it off, stay positive, and try again', id: 'innocent', weight: 2 },
      { text: 'Lean on my support network for strength', id: 'orphan', weight: 2 },
      { text: 'Get back up even stronger and more determined', id: 'hero', weight: 2 },
      { text: 'Think about who else was affected by my failure', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'I admire people who...',
    options: [
      { text: 'Find wonder and magic in the everyday', id: 'innocent', weight: 2 },
      { text: 'Build strong, inclusive communities', id: 'orphan', weight: 2 },
      { text: 'Never give up, no matter how hard it gets', id: 'hero', weight: 2 },
      { text: 'Consistently put others first without losing themselves', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'I recharge my energy by...',
    options: [
      { text: 'Being in nature, alone and free to wander', id: 'explorer', weight: 2 },
      { text: 'Breaking my routine entirely and doing something wild', id: 'rebel', weight: 2 },
      { text: 'Quality time with someone I love deeply', id: 'lover', weight: 2 },
      { text: 'Working on a creative project that excites me', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'My best ideas come to me when...',
    options: [
      { text: 'I\'m laughing and being silly with friends', id: 'jester', weight: 2 },
      { text: 'I\'m reading, studying, or deep in thought', id: 'sage', weight: 2 },
      { text: 'I\'m visualizing the future and imagining possibilities', id: 'magician', weight: 2 },
      { text: 'I\'m planning, strategizing, and organizing', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'I define success as...',
    options: [
      { text: 'Happiness, peace, and a simple life well-lived', id: 'innocent', weight: 2 },
      { text: 'Having a place where I truly belong', id: 'orphan', weight: 2 },
      { text: 'Achieving goals that others thought were impossible', id: 'hero', weight: 2 },
      { text: 'Making someone\'s life tangibly better', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'When I walk into a room I...',
    options: [
      { text: 'Look for the beauty and positive energy', id: 'innocent', weight: 2 },
      { text: 'Find people like me and gravitate toward them', id: 'orphan', weight: 2 },
      { text: 'Take charge and assess what needs to be done', id: 'hero', weight: 2 },
      { text: 'Check if anyone looks like they need help', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'My friends would say I\'m the...',
    options: [
      { text: 'Adventurous one who is always up for anything', id: 'explorer', weight: 2 },
      { text: 'Wild card who keeps everyone on their toes', id: 'rebel', weight: 2 },
      { text: 'Romantic one with the biggest heart', id: 'lover', weight: 2 },
      { text: 'Artistic one with the most unique perspective', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'I simply cannot stand...',
    options: [
      { text: 'Boredom, routine, and being stuck in one place', id: 'explorer', weight: 2 },
      { text: 'Conformity, oppression, and blind obedience', id: 'rebel', weight: 2 },
      { text: 'Emotional coldness and superficial interactions', id: 'lover', weight: 2 },
      { text: 'Having no creative outlet or artistic expression', id: 'creator', weight: 2 }
    ]
  },

  {
    q: 'My legacy should be...',
    options: [
      { text: 'Making people happier, one laugh at a time', id: 'jester', weight: 2 },
      { text: 'Truth and understanding that stands the test of time', id: 'sage', weight: 2 },
      { text: 'Transformations that fundamentally changed the world', id: 'magician', weight: 2 },
      { text: 'A thriving, well-organized community that endures', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'Under extreme pressure I...',
    options: [
      { text: 'Try to stay positive and find a silver lining', id: 'innocent', weight: 2 },
      { text: 'Reach out for connection with others', id: 'orphan', weight: 2 },
      { text: 'Rise to the challenge and become stronger', id: 'hero', weight: 2 },
      { text: 'Focus on helping others first before myself', id: 'caregiver', weight: 2 }
    ]
  },

  {
    q: 'The quote that resonates most deeply with me:',
    options: [
      { text: '"Laughter is the best medicine."', id: 'jester', weight: 2 },
      { text: '"The unexamined life is not worth living."', id: 'sage', weight: 2 },
      { text: '"As above, so below."', id: 'magician', weight: 2 },
      { text: '"Heavy is the head that wears the crown."', id: 'ruler', weight: 2 }
    ]
  },

  {
    q: 'In a past life, I was probably a...',
    options: [
      { text: 'Garden-dwelling philosopher who found joy in simplicity', id: 'innocent', weight: 2 },
      { text: 'Community healer who brought people together', id: 'orphan', weight: 2 },
      { text: 'Legendary warrior whose courage inspired nations', id: 'hero', weight: 2 },
      { text: 'Village protector who kept everyone safe', id: 'caregiver', weight: 2 }
    ]
  }

];


// ════════════════════════════════════════════════════════════════════════════
//  64 I CHING HEXAGRAMS (each individually defined)
// ════════════════════════════════════════════════════════════════════════════

/**
 * The complete set of 64 I Ching hexagrams from the ancient Chinese
 * divination system. Each includes the Chinese name, English translation,
 * judgement, image, and practical advice.
 * @constant {Array<Object>}
 */
const ICHING_HEXAGRAMS = [

  {
    number: 1,
    name: 'Qián',
    english: 'The Creative',
    symbol: '☰☰',
    judgement: 'The Creative works supreme success. Perseverance brings reward.',
    image: 'Heaven over Heaven — movement giving strength',
    advice: 'Act with initiative and creative power. The time favors bold action, leadership, and setting things in motion. Trust your vision and move forward with confidence.',
    keywords: ['creation', 'power', 'initiative', 'yang']
  },

  {
    number: 2,
    name: 'Kūn',
    english: 'The Receptive',
    symbol: '☷☷',
    judgement: 'The Receptive brings supreme success through furthering perseverance.',
    image: 'Earth over Earth — devoted yielding',
    advice: 'Be receptive and follow rather than lead. Support others, nurture what is growing, and let things unfold naturally. Your strength lies in patience and devotion.',
    keywords: ['receptivity', 'devotion', 'yin', 'nurturing']
  },

  {
    number: 3,
    name: 'Zhūn',
    english: 'Difficulty at the Beginning',
    symbol: '☵☳',
    judgement: 'Difficulty at the beginning works supreme success. Furthering through perseverance.',
    image: 'Water over Thunder — initial chaos before order',
    advice: 'Patience through initial chaos is essential. Organize your forces, seek helpers, and persevere through the difficulty. What starts in confusion can end in clarity.',
    keywords: ['chaos', 'beginning', 'patience', 'organizing']
  },

  {
    number: 4,
    name: 'Méng',
    english: 'Youthful Folly',
    symbol: '☶☵',
    judgement: 'Youthful folly has success. It is not I who seek the young fool; the young fool seeks me.',
    image: 'Mountain over Water — inexperience facing the unknown',
    advice: 'Seek guidance from those with wisdom and experience. Be humble in your inexperience and willing to learn. The student who asks receives; the one who demands does not.',
    keywords: ['learning', 'humility', 'inexperience', 'guidance']
  },

  {
    number: 5,
    name: 'Xū',
    english: 'Waiting (Nourishment)',
    symbol: '☵☰',
    judgement: 'Waiting. If you are sincere, you have light and success.',
    image: 'Water over Heaven — patient nourishment before action',
    advice: 'The time is not yet right for action. Wait patiently while gathering strength and nourishment. True waiting is not idle — it is preparation with trust in timing.',
    keywords: ['waiting', 'patience', 'nourishment', 'timing']
  },

  {
    number: 6,
    name: 'Sòng',
    english: 'Conflict',
    symbol: '☰☵',
    judgement: 'Conflict. You are sincere and being obstructed. Halt carefully midway brings good fortune.',
    image: 'Heaven over Water — opposing forces creating tension',
    advice: 'Avoid escalation at all costs. Seek mediation and compromise. Meeting halfway resolves more than forcing a win. Carrying conflict to the bitter end brings misfortune.',
    keywords: ['conflict', 'mediation', 'compromise', 'tension']
  },

  {
    number: 7,
    name: 'Shī',
    english: 'The Army',
    symbol: '☷☵',
    judgement: 'The Army needs perseverance and a strong leader. Good fortune without blame.',
    image: 'Earth over Water — organized discipline and collective strength',
    advice: 'Organize your forces with discipline and clear structure. Strong leadership, generosity of spirit, and proper order lead to success. The army within must be unified before engaging without.',
    keywords: ['discipline', 'leadership', 'organization', 'strength']
  },

  {
    number: 8,
    name: 'Bǐ',
    english: 'Holding Together (Union)',
    symbol: '☵☷',
    judgement: 'Holding together brings good fortune. Those who are uncertain gradually join.',
    image: 'Water over Earth — union and alliance flowing together',
    advice: 'Unite with others in genuine fellowship. Form alliances based on loyalty and sincerity. The bonds you create now will sustain you through future challenges.',
    keywords: ['union', 'alliance', 'loyalty', 'community']
  },

  {
    number: 9,
    name: 'Xiǎo Chù',
    english: 'The Taming Power of the Small',
    symbol: '☴☰',
    judgement: 'The Taming Power of the Small has success. Dense clouds, no rain.',
    image: 'Wind over Heaven — gentle restraint accumulating influence',
    advice: 'Use gentle persuasion, not brute force. Small accumulations and consistent effort lead to eventual breakthrough. The soft wind can tame even heaven\'s power through persistence.',
    keywords: ['gentleness', 'accumulation', 'patience', 'restraint']
  },

  {
    number: 10,
    name: 'Lǚ',
    english: 'Treading (Conduct)',
    symbol: '☰☱',
    judgement: 'Treading upon the tail of the tiger. It does not bite. Success.',
    image: 'Heaven over Lake — careful conduct in dangerous territory',
    advice: 'Proceed with care, courtesy, and proper behavior. Even dangerous situations can be navigated safely with the right attitude. Good manners and respect are your armor.',
    keywords: ['conduct', 'care', 'courtesy', 'navigation']
  },

  {
    number: 11,
    name: 'Tài',
    english: 'Peace',
    symbol: '☷☰',
    judgement: 'Peace. The small departs, the great approaches. Good fortune. Success.',
    image: 'Earth over Heaven — harmony flowing between above and below',
    advice: 'A time of harmony and prosperity is here. Use this favorable period wisely to build foundations, strengthen relationships, and invest in the future. Peace is a gift — use it well.',
    keywords: ['harmony', 'prosperity', 'foundation', 'flow']
  },

  {
    number: 12,
    name: 'Pǐ',
    english: 'Standstill (Stagnation)',
    symbol: '☰☷',
    judgement: 'Standstill. Evil people do not further the perseverance of the superior person.',
    image: 'Heaven over Earth — stagnation, heaven and earth separated',
    advice: 'A time of stagnation and blocked communication. Withdraw, conserve your virtue, and wait for the cycle to turn. Do not force progress when the world stands still.',
    keywords: ['stagnation', 'withdrawal', 'patience', 'conservation']
  },

  {
    number: 13,
    name: 'Tóng Rén',
    english: 'Fellowship with Others',
    symbol: '☰☲',
    judgement: 'Fellowship with others in the open. Success. It furthers to cross the great water.',
    image: 'Heaven over Fire — open community illuminated by clarity',
    advice: 'Build fellowship based on shared ideals and transparent purpose. Common goals strengthen bonds. Be open, be honest, and let your community form naturally around truth.',
    keywords: ['fellowship', 'community', 'shared ideals', 'openness']
  },

  {
    number: 14,
    name: 'Dà Yǒu',
    english: 'Great Possession',
    symbol: '☲☰',
    judgement: 'Great Possession. Supreme success.',
    image: 'Fire over Heaven — abundant light illuminating all',
    advice: 'You have great resources and influence. Use them wisely and generously. Share your abundance, curb evil, and promote good. True wealth is shown in how it is given.',
    keywords: ['abundance', 'generosity', 'wealth', 'responsibility']
  },

  {
    number: 15,
    name: 'Qiān',
    english: 'Modesty',
    symbol: '☷☶',
    judgement: 'Modesty creates success. The superior person carries things through.',
    image: 'Earth over Mountain — great strength hidden beneath humility',
    advice: 'True strength needs no boasting. Be modest and let your actions speak for themselves. The mountain hidden beneath the earth possesses more power than any peak that shows itself.',
    keywords: ['modesty', 'humility', 'hidden strength', 'balance']
  },

  {
    number: 16,
    name: 'Yù',
    english: 'Enthusiasm',
    symbol: '☳☷',
    judgement: 'Enthusiasm. It furthers one to install helpers and to set armies marching.',
    image: 'Thunder over Earth — inspired movement awakening the masses',
    advice: 'Channel your enthusiasm into purposeful action. Inspire others with your energy and vision. The time is right for mobilizing people and beginning great undertakings.',
    keywords: ['enthusiasm', 'inspiration', 'movement', 'mobilization']
  },

  {
    number: 17,
    name: 'Suí',
    english: 'Following',
    symbol: '☱☳',
    judgement: 'Following has supreme success. Perseverance furthers. No blame.',
    image: 'Lake over Thunder — adaptability flowing with the times',
    advice: 'Adapt to the situation and follow the natural flow of events. Rest when appropriate, act when the time is right. Following is not weakness — it is wisdom in motion.',
    keywords: ['adaptability', 'following', 'timing', 'flow']
  },

  {
    number: 18,
    name: 'Gǔ',
    english: 'Work on What Has Been Spoiled (Decay)',
    symbol: '☶☴',
    judgement: 'Work on what has been spoiled has supreme success. It furthers to cross the great water.',
    image: 'Mountain over Wind — repair and renewal addressing corruption',
    advice: 'Address what has decayed or been corrupted. Repair damage from the past with careful planning. Consider three days before the starting point and three days after — thoroughness prevents recurrence.',
    keywords: ['repair', 'corruption', 'renewal', 'thoroughness']
  },

  {
    number: 19,
    name: 'Lín',
    english: 'Approach',
    symbol: '☷☱',
    judgement: 'Approach has supreme success. Perseverance furthers.',
    image: 'Earth over Lake — expanding influence and approaching opportunity',
    advice: 'A favorable time is approaching. Act decisively while conditions are good, but know that this window will not last forever. Make the most of the present opportunity.',
    keywords: ['approach', 'opportunity', 'timing', 'expansion']
  },

  {
    number: 20,
    name: 'Guān',
    english: 'Contemplation (View)',
    symbol: '☴☷',
    judgement: 'Contemplation. The ablution has been made, but not yet the offering.',
    image: 'Wind over Earth — observation from a higher perspective',
    advice: 'Step back and observe the bigger picture. Contemplate deeply before taking action. Your influence comes not from what you do but from the quality of your presence and awareness.',
    keywords: ['contemplation', 'observation', 'perspective', 'awareness']
  },

  {
    number: 21,
    name: 'Shì Kè',
    english: 'Biting Through',
    symbol: '☲☳',
    judgement: 'Biting Through has success. It is favorable to administer justice.',
    image: 'Fire over Thunder — decisive action cutting through obstacles',
    advice: 'Cut through obstacles decisively and firmly. Justice and clear, swift action remove what blocks progress. Do not hesitate when the path forward requires determination.',
    keywords: ['decisiveness', 'justice', 'action', 'obstacles']
  },

  {
    number: 22,
    name: 'Bì',
    english: 'Grace',
    symbol: '☶☲',
    judgement: 'Grace has success. In small matters it is favorable to undertake something.',
    image: 'Mountain over Fire — beauty and form adorning substance',
    advice: 'Attend to beauty, form, and aesthetics, but remember that grace adorns substance — it does not replace it. Small refinements and attention to appearance have their place.',
    keywords: ['beauty', 'form', 'aesthetics', 'adornment']
  },

  {
    number: 23,
    name: 'Bō',
    english: 'Splitting Apart',
    symbol: '☶☷',
    judgement: 'Splitting Apart. It does not further to go anywhere.',
    image: 'Mountain over Earth — deterioration and crumbling foundations',
    advice: 'Things are falling apart and the old order is dissolving. Accept the decline gracefully. Preserve what is essential for rebuilding later. This is not the time for action — it is the time for acceptance.',
    keywords: ['decline', 'dissolution', 'acceptance', 'preservation']
  },

  {
    number: 24,
    name: 'Fù',
    english: 'Return (The Turning Point)',
    symbol: '☷☳',
    judgement: 'Return. Success. Going out and coming in without error.',
    image: 'Earth over Thunder — the turning point where light returns',
    advice: 'After darkness comes light. The cycle turns and what was lost begins to return. Return to what is fundamental and true. Allow yourself rest during this transition.',
    keywords: ['return', 'turning point', 'renewal', 'rest']
  },

  {
    number: 25,
    name: 'Wú Wàng',
    english: 'Innocence (The Unexpected)',
    symbol: '☰☳',
    judgement: 'Innocence. Supreme success. Perseverance furthers.',
    image: 'Heaven over Thunder — natural spontaneity without ulterior motive',
    advice: 'Act naturally, without calculation or ulterior motives. Spontaneous action aligned with your true nature succeeds. Trust your instincts and follow the unexpected path.',
    keywords: ['innocence', 'spontaneity', 'nature', 'trust']
  },

  {
    number: 26,
    name: 'Dà Chù',
    english: 'The Taming Power of the Great',
    symbol: '☶☰',
    judgement: 'The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune.',
    image: 'Mountain over Heaven — great power held in wise restraint',
    advice: 'Great power requires great restraint. Accumulate wisdom, study the words of the past, and strengthen your character before acting. Power stored is power available.',
    keywords: ['restraint', 'accumulation', 'wisdom', 'power']
  },

  {
    number: 27,
    name: 'Yí',
    english: 'The Corners of the Mouth (Nourishment)',
    symbol: '☶☳',
    judgement: 'Nourishment. Perseverance brings good fortune. Pay heed to the providing of nourishment.',
    image: 'Mountain over Thunder — mindful sustenance of body and spirit',
    advice: 'What you feed — body, mind, and spirit — matters profoundly. Nourish yourself and others wisely. Be mindful of what you consume and what you give to the world.',
    keywords: ['nourishment', 'mindfulness', 'sustenance', 'care']
  },

  {
    number: 28,
    name: 'Dà Guò',
    english: 'Preponderance of the Great',
    symbol: '☱☴',
    judgement: 'The ridgepole sags. It furthers to have somewhere to go. Success.',
    image: 'Lake over Wind — extraordinary times demanding extraordinary measures',
    advice: 'The situation is extraordinary and demands bold action. The normal rules do not apply. Act decisively before the structure collapses under its own weight.',
    keywords: ['extraordinary', 'bold action', 'transition', 'urgency']
  },

  {
    number: 29,
    name: 'Kǎn',
    english: 'The Abysmal (Water)',
    symbol: '☵☵',
    judgement: 'The Abysmal repeated. If you are sincere, you have success in your heart.',
    image: 'Water over Water — danger upon danger, yet flowing through',
    advice: 'You face danger upon danger, like water flowing through a gorge. Sincerity and inner truth guide you through. Do not struggle against the current — flow with it until you emerge.',
    keywords: ['danger', 'sincerity', 'flow', 'perseverance']
  },

  {
    number: 30,
    name: 'Lí',
    english: 'The Clinging (Fire)',
    symbol: '☲☲',
    judgement: 'The Clinging. Perseverance furthers. It brings success. Caring for the cow brings good fortune.',
    image: 'Fire over Fire — radiant clarity illuminating all directions',
    advice: 'Cling to what illuminates and gives warmth. Depend on clarity and awareness. Nurture your inner light, for it is what makes the world visible to you and others.',
    keywords: ['clarity', 'illumination', 'awareness', 'warmth']
  },

  {
    number: 31,
    name: 'Xián',
    english: 'Influence (Wooing)',
    symbol: '☱☶',
    judgement: 'Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.',
    image: 'Lake over Mountain — mutual attraction and responsive exchange',
    advice: 'Attraction and influence are natural forces. Be receptive and responsive to others with genuine openness. The humble approach from below reaches those above.',
    keywords: ['attraction', 'influence', 'receptivity', 'connection']
  },

  {
    number: 32,
    name: 'Héng',
    english: 'Duration',
    symbol: '☳☴',
    judgement: 'Duration. Success. No blame. Perseverance furthers.',
    image: 'Thunder over Wind — enduring constancy through changing seasons',
    advice: 'Maintain consistency and perseverance in your direction. Lasting success comes from steady, reliable effort. The storm and the wind together create duration — neither ceases.',
    keywords: ['duration', 'consistency', 'perseverance', 'steadiness']
  },

  {
    number: 33,
    name: 'Dùn',
    english: 'Retreat',
    symbol: '☰☶',
    judgement: 'Retreat. Success. In what is small, perseverance furthers.',
    image: 'Heaven over Mountain — strategic withdrawal from unfavorable ground',
    advice: 'Strategic retreat is not defeat or cowardice. Withdraw from unfavorable positions to preserve your strength and dignity. Knowing when to retreat is the highest form of courage.',
    keywords: ['retreat', 'strategy', 'preservation', 'timing']
  },

  {
    number: 34,
    name: 'Dà Zhuàng',
    english: 'The Power of the Great',
    symbol: '☳☰',
    judgement: 'The Power of the Great. Perseverance furthers.',
    image: 'Thunder over Heaven — great power combined with righteousness',
    advice: 'You possess great power and momentum. Use it righteously and in alignment with what is correct. Power without justice leads inevitably to downfall and regret.',
    keywords: ['power', 'righteousness', 'strength', 'alignment']
  },

  {
    number: 35,
    name: 'Jìn',
    english: 'Progress',
    symbol: '☲☷',
    judgement: 'Progress. The powerful prince is honored with horses in large numbers.',
    image: 'Fire over Earth — advancing light illuminating the world',
    advice: 'Progress is favorable and your light is recognized. Advance with confidence. Your efforts are being seen and rewarded by those in positions to help you further.',
    keywords: ['progress', 'advancement', 'recognition', 'light']
  },

  {
    number: 36,
    name: 'Míng Yí',
    english: 'Darkening of the Light',
    symbol: '☷☲',
    judgement: 'Darkening of the Light. In adversity it furthers one to be persevering.',
    image: 'Earth over Fire — light hidden beneath the surface',
    advice: 'Your inner light is obscured by external darkness. Protect your brightness within while enduring outward difficulty. Hide your wisdom among the foolish and wait for the right moment.',
    keywords: ['darkness', 'perseverance', 'hidden light', 'adversity']
  },

  {
    number: 37,
    name: 'Jiā Rén',
    english: 'The Family (The Clan)',
    symbol: '☴☲',
    judgement: 'The Family. The perseverance of the woman furthers.',
    image: 'Wind over Fire — domestic order radiating outward',
    advice: 'Attend to your family and closest relationships with care and attention. Order within the home creates order in the world. Words must have substance; actions must be consistent.',
    keywords: ['family', 'order', 'relationships', 'foundation']
  },

  {
    number: 38,
    name: 'Kuí',
    english: 'Opposition',
    symbol: '☲☱',
    judgement: 'Opposition. In small matters, good fortune.',
    image: 'Fire over Lake — divergent forces that can find unity',
    advice: 'Opposing forces need not be enemies. In diversity there is strength, and in opposition there is creative tension. Find unity in difference, but do not force it in great matters.',
    keywords: ['opposition', 'diversity', 'tension', 'creative difference']
  },

  {
    number: 39,
    name: 'Jiǎn',
    english: 'Obstruction',
    symbol: '☵☶',
    judgement: 'Obstruction. The southwest furthers. It furthers to see the great person.',
    image: 'Water over Mountain — impediment requiring an indirect approach',
    advice: 'You face a genuine obstacle. Do not charge forward blindly. Seek allies, find the indirect path, and approach from an angle. Sometimes the way forward is sideways.',
    keywords: ['obstacle', 'indirect approach', 'allies', 'strategy']
  },

  {
    number: 40,
    name: 'Xiè',
    english: 'Deliverance',
    symbol: '☳☵',
    judgement: 'Deliverance. The southwest furthers. If there is no longer anywhere to go, return brings good fortune.',
    image: 'Thunder over Water — liberation breaking through tension',
    advice: 'Release and deliverance are at hand. Resolve lingering matters quickly and forgive past offenses. The storm clears the air — let go of what binds you and move forward free.',
    keywords: ['deliverance', 'release', 'forgiveness', 'resolution']
  },

  {
    number: 41,
    name: 'Sǔn',
    english: 'Decrease',
    symbol: '☶☱',
    judgement: 'Decrease combined with sincerity brings about supreme good fortune without blame.',
    image: 'Mountain over Lake — simplification and sacrifice for higher purpose',
    advice: 'Sacrifice the excess and simplify. What you give up now in sincerity returns multiplied later. Decrease the lower to increase the higher — this is the way of wisdom.',
    keywords: ['sacrifice', 'simplification', 'sincerity', 'giving']
  },

  {
    number: 42,
    name: 'Yì',
    english: 'Increase',
    symbol: '☴☳',
    judgement: 'Increase. It furthers to undertake something. It furthers to cross the great water.',
    image: 'Wind over Thunder — expansion and generous distribution',
    advice: 'A time of increase and expanding opportunity. Act boldly and share your gains with others. When those above decrease to benefit those below, joy and progress follow.',
    keywords: ['increase', 'expansion', 'generosity', 'opportunity']
  },

  {
    number: 43,
    name: 'Guài',
    english: 'Breakthrough (Resoluteness)',
    symbol: '☱☰',
    judgement: 'Breakthrough. One must resolutely make the matter known at the court of the king.',
    image: 'Lake over Heaven — decisive break with what is corrupt',
    advice: 'The time has come to break through decisively. Be resolute but honest. Announce the truth openly and do not resort to violence. Advance with determination and integrity.',
    keywords: ['breakthrough', 'resoluteness', 'truth', 'honesty']
  },

  {
    number: 44,
    name: 'Gòu',
    english: 'Coming to Meet',
    symbol: '☰☴',
    judgement: 'Coming to Meet. The maiden is powerful. One should not marry such a maiden.',
    image: 'Heaven over Wind — unexpected encounter requiring caution',
    advice: 'An unexpected encounter approaches. Be cautious and discerning. Not every influence should be embraced — some encounters carry hidden danger. Maintain your principles.',
    keywords: ['encounter', 'caution', 'discernment', 'temptation']
  },

  {
    number: 45,
    name: 'Cuì',
    english: 'Gathering Together (Massing)',
    symbol: '☱☷',
    judgement: 'Gathering Together. Success. The king approaches the temple.',
    image: 'Lake over Earth — assembly and collective purpose',
    advice: 'People and resources are gathering around a common purpose. Create structure, shared meaning, and strong leadership. Be prepared for the unexpected within the group.',
    keywords: ['gathering', 'community', 'purpose', 'leadership']
  },

  {
    number: 46,
    name: 'Shēng',
    english: 'Pushing Upward',
    symbol: '☷☴',
    judgement: 'Pushing Upward has supreme success. One must see the great person.',
    image: 'Earth over Wind — gradual, determined ascent from below',
    advice: 'A gradual, steady ascent is favored. Push upward with effort, determination, and the right attitude. Seek guidance from those above you, and your progress will be supported.',
    keywords: ['ascent', 'effort', 'progress', 'determination']
  },

  {
    number: 47,
    name: 'Kùn',
    english: 'Oppression (Exhaustion)',
    symbol: '☱☵',
    judgement: 'Oppression. Success. Perseverance. The great person brings about good fortune.',
    image: 'Lake over Water — exhaustion and testing of character',
    advice: 'You are being tested under difficult conditions. Words are not believed now. Let your actions and character speak. Cheerfulness within despite external oppression brings ultimate success.',
    keywords: ['oppression', 'testing', 'character', 'perseverance']
  },

  {
    number: 48,
    name: 'Jǐng',
    english: 'The Well',
    symbol: '☵☴',
    judgement: 'The Well. The town may be changed, but the well cannot be changed.',
    image: 'Water over Wind — constant source of deep nourishment',
    advice: 'Draw from your deep, constant source of nourishment and wisdom. The well does not change, though everything around it does. Maintain your inner source and share it freely.',
    keywords: ['source', 'constancy', 'nourishment', 'depth']
  },

  {
    number: 49,
    name: 'Gé',
    english: 'Revolution (Molting)',
    symbol: '☱☲',
    judgement: 'Revolution. On your own day you are believed. Supreme success.',
    image: 'Lake over Fire — fundamental change consuming the old',
    advice: 'The time for fundamental change has come. Make revolution when the moment is right — not too early, not too late. True revolution is accepted because it is obviously necessary.',
    keywords: ['revolution', 'change', 'transformation', 'timing']
  },

  {
    number: 50,
    name: 'Dǐng',
    english: 'The Cauldron',
    symbol: '☲☴',
    judgement: 'The Cauldron. Supreme good fortune. Success.',
    image: 'Fire over Wind — transformation through refinement and nourishment',
    advice: 'Transformation and refinement are at work. Nourish the worthy and create something lasting. The cauldron transforms raw materials into sustenance — so must you transform potential into reality.',
    keywords: ['transformation', 'refinement', 'nourishment', 'creation']
  },

  {
    number: 51,
    name: 'Zhèn',
    english: 'The Arousing (Shock, Thunder)',
    symbol: '☳☳',
    judgement: 'Shock brings success. Shock comes — oh, oh! Laughing words — ha, ha!',
    image: 'Thunder over Thunder — shock and awakening reverberating',
    advice: 'A sudden shock or awakening arrives. After the initial fear and disorientation, laughter and relief come. Use this shock to examine yourself deeply and emerge stronger.',
    keywords: ['shock', 'awakening', 'fear', 'renewal']
  },

  {
    number: 52,
    name: 'Gèn',
    english: 'Keeping Still (Mountain)',
    symbol: '☶☶',
    judgement: 'Keeping Still. Keeping one\'s back still so that one no longer feels one\'s body.',
    image: 'Mountain over Mountain — meditation, stillness, and inner peace',
    advice: 'Be still. Quiet the restless mind. In stillness and meditation you find the clarity that constant motion denies. Keep your thoughts within the present moment.',
    keywords: ['stillness', 'meditation', 'presence', 'calm']
  },

  {
    number: 53,
    name: 'Jiàn',
    english: 'Development (Gradual Progress)',
    symbol: '☴☶',
    judgement: 'Development. The maiden is given in marriage. Good fortune.',
    image: 'Wind over Mountain — gradual, patient, proper progress',
    advice: 'Development must be gradual and follow proper procedure. Patience and correct form ensure lasting results. Like a tree growing on a mountain, slow growth creates deep roots.',
    keywords: ['development', 'gradual', 'patience', 'procedure']
  },

  {
    number: 54,
    name: 'Guī Mèi',
    english: 'The Marrying Maiden',
    symbol: '☳☱',
    judgement: 'The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.',
    image: 'Thunder over Lake — subordinate position requiring acceptance',
    advice: 'You are in a subordinate or dependent role. Accept your position gracefully and do not force advancement. Sometimes the wisest course is to fulfill your role with dignity.',
    keywords: ['subordination', 'acceptance', 'dignity', 'patience']
  },

  {
    number: 55,
    name: 'Fēng',
    english: 'Abundance (Fullness)',
    symbol: '☳☲',
    judgement: 'Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday.',
    image: 'Thunder over Fire — peak moment of power and fullness',
    advice: 'You are at the peak of abundance and power. Enjoy it fully, knowing that peaks are by nature temporary. Be like the sun at noon — radiant and generous, without sadness.',
    keywords: ['abundance', 'peak', 'generosity', 'impermanence']
  },

  {
    number: 56,
    name: 'Lǚ',
    english: 'The Wanderer',
    symbol: '☲☶',
    judgement: 'The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.',
    image: 'Fire over Mountain — transience and the traveling spirit',
    advice: 'You are a wanderer in unfamiliar territory. Be careful, modest, and self-reliant. Do not linger too long in any one place. The traveler succeeds through adaptability and discretion.',
    keywords: ['wandering', 'transience', 'caution', 'adaptability']
  },

  {
    number: 57,
    name: 'Xùn',
    english: 'The Gentle (The Penetrating, Wind)',
    symbol: '☴☴',
    judgement: 'The Gentle. Success through what is small. It furthers to have somewhere to go.',
    image: 'Wind over Wind — penetrating gentleness reaching everywhere',
    advice: 'Gentle, persistent influence achieves what force cannot. Like wind that penetrates every crack and corner, your quiet consistency will reach where loud demands fail.',
    keywords: ['gentleness', 'penetration', 'persistence', 'influence']
  },

  {
    number: 58,
    name: 'Duì',
    english: 'The Joyous (Lake)',
    symbol: '☱☱',
    judgement: 'The Joyous. Success. Perseverance is favorable.',
    image: 'Lake over Lake — joy, exchange, and shared pleasure',
    advice: 'Joy is contagious and strengthening. Share learning and pleasure with others. True joy comes from inner strength and is expressed through genuine exchange and fellowship.',
    keywords: ['joy', 'exchange', 'sharing', 'strength']
  },

  {
    number: 59,
    name: 'Huàn',
    english: 'Dispersion (Dissolution)',
    symbol: '☴☵',
    judgement: 'Dispersion. Success. The king approaches his temple.',
    image: 'Wind over Water — dissolving barriers and rigidities',
    advice: 'Dissolve barriers, rigidities, and ego-attachments. Spiritual unity transcends physical separation. What has become frozen must be thawed, and what has hardened must be softened.',
    keywords: ['dissolution', 'unity', 'release', 'spiritual']
  },

  {
    number: 60,
    name: 'Jié',
    english: 'Limitation',
    symbol: '☵☱',
    judgement: 'Limitation. Success. Galling limitation must not be persevered in.',
    image: 'Water over Lake — natural boundaries creating form',
    advice: 'Accept necessary limits, but do not make them oppressive. Proper boundaries create freedom and structure. Know the difference between healthy limits and self-imposed prisons.',
    keywords: ['limitation', 'boundaries', 'structure', 'freedom']
  },

  {
    number: 61,
    name: 'Zhōng Fú',
    english: 'Inner Truth',
    symbol: '☴☱',
    judgement: 'Inner Truth. Pigs and fishes. Good fortune. It furthers to cross the great water.',
    image: 'Wind over Lake — sincerity that reaches even the lowliest',
    advice: 'Inner truth and sincerity can influence even the most difficult situations and the most resistant hearts. Be genuine in your words and actions, and doors will open.',
    keywords: ['truth', 'sincerity', 'influence', 'genuineness']
  },

  {
    number: 62,
    name: 'Xiǎo Guò',
    english: 'Preponderance of the Small',
    symbol: '☳☶',
    judgement: 'Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done.',
    image: 'Thunder over Mountain — exceeding in small matters only',
    advice: 'Attend to small matters with extra care and attention. This is not the time for grand gestures or ambitious undertakings. The bird should not strive to fly upward — it should remain below.',
    keywords: ['small matters', 'care', 'modesty', 'attention']
  },

  {
    number: 63,
    name: 'Jì Jì',
    english: 'After Completion',
    symbol: '☵☲',
    judgement: 'After Completion. Success in small matters. Perseverance furthers.',
    image: 'Water over Fire — order achieved but vigilance required',
    advice: 'Order has been achieved, but eternal vigilance is needed. After perfection comes the tendency toward disorder. Maintain what you have built with careful attention.',
    keywords: ['completion', 'vigilance', 'maintenance', 'order']
  },

  {
    number: 64,
    name: 'Wèi Jì',
    english: 'Before Completion',
    symbol: '☲☵',
    judgement: 'Before Completion. Success. But if the little fox, after nearly completing the crossing, gets its tail in the water, nothing is favorable.',
    image: 'Fire over Water — transition not yet complete, caution essential',
    advice: 'The end is near but not yet reached. Maintain caution through the final transition. Overconfidence at the last moment can undo everything. Complete what you began with the same care you started with.',
    keywords: ['transition', 'caution', 'completion', 'patience']
  }

];
