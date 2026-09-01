

// ════════════════════════════════════════════════════════════════════════════
//  24 ELDER FUTHARK RUNES
// ════════════════════════════════════════════════════════════════════════════

/**
 * The 24 runes of the Elder Futhark, the oldest form of the runic alphabets.
 * Each rune carries a name, phonetic value, divinatory meaning, reversed meaning,
 * and elemental correspondence.
 * @constant {Array<Object>}
 */
const RUNES = [

  {
    name: 'Fehu', letter: 'F',
    meaning: 'Wealth, abundance, prosperity, earned income, movable goods',
    reversed: 'Loss of wealth, greed, poverty, financial failure, avarice',
    element: 'Earth',
    keywords: ['wealth', 'abundance', 'prosperity']
  },

  {
    name: 'Uruz', letter: 'U',
    meaning: 'Strength, health, vitality, wild ox power, raw potential',
    reversed: 'Weakness, illness, missed opportunity, untamed force',
    element: 'Earth',
    keywords: ['strength', 'vitality', 'health']
  },

  {
    name: 'Thurisaz', letter: 'Þ',
    meaning: 'Thorn, giant, conflict, defense, directed force, gateway',
    reversed: 'Defenselessness, danger, betrayal, evil intentions exposed',
    element: 'Fire',
    keywords: ['defense', 'conflict', 'gateway']
  },

  {
    name: 'Ansuz', letter: 'A',
    meaning: 'God, wisdom, communication, divine inspiration, signals, Odin',
    reversed: 'Miscommunication, deception, delusion, manipulation',
    element: 'Air',
    keywords: ['wisdom', 'communication', 'inspiration']
  },

  {
    name: 'Raidho', letter: 'R',
    meaning: 'Journey, travel, rhythm, right action, personal evolution',
    reversed: 'Disruption, stagnation, injustice, crisis, rigidity',
    element: 'Air',
    keywords: ['journey', 'rhythm', 'evolution']
  },

  {
    name: 'Kenaz', letter: 'K',
    meaning: 'Torch, knowledge, creativity, illumination, revelation',
    reversed: 'Darkness, confusion, lack of creativity, closed doors',
    element: 'Fire',
    keywords: ['knowledge', 'creativity', 'illumination']
  },

  {
    name: 'Gebo', letter: 'G',
    meaning: 'Gift, generosity, exchange, partnership, balance of giving',
    reversed: 'No reversal — always represents positive exchange and balance',
    element: 'Air',
    keywords: ['gift', 'exchange', 'partnership']
  },

  {
    name: 'Wunjo', letter: 'W',
    meaning: 'Joy, harmony, bliss, fellowship, well-being, alignment',
    reversed: 'Sorrow, strife, alienation, delirium, intoxication',
    element: 'Earth',
    keywords: ['joy', 'harmony', 'fellowship']
  },

  {
    name: 'Hagalaz', letter: 'H',
    meaning: 'Hail, destruction, disruption, unavoidable change, nature\'s wrath',
    reversed: 'No reversal — represents an uncontrollable natural force',
    element: 'Water',
    keywords: ['destruction', 'change', 'disruption']
  },

  {
    name: 'Nauthiz', letter: 'N',
    meaning: 'Need, constraint, resistance, necessity, friction creating fire',
    reversed: 'Starvation, deprivation, depression, want without resolution',
    element: 'Fire',
    keywords: ['need', 'constraint', 'resistance']
  },

  {
    name: 'Isa', letter: 'I',
    meaning: 'Ice, standstill, patience, introspection, preservation, clarity',
    reversed: 'No reversal — represents a natural force of stillness',
    element: 'Water',
    keywords: ['ice', 'stillness', 'patience']
  },

  {
    name: 'Jera', letter: 'J',
    meaning: 'Harvest, year, natural cycles, reward for effort, fruition',
    reversed: 'No reversal — represents the unstoppable natural cycle',
    element: 'Earth',
    keywords: ['harvest', 'cycles', 'reward']
  },

  {
    name: 'Eihwaz', letter: 'E',
    meaning: 'Yew tree, endurance, reliability, strength, transformation',
    reversed: 'No reversal — represents enduring strength and resilience',
    element: 'Earth',
    keywords: ['endurance', 'strength', 'transformation']
  },

  {
    name: 'Perthro', letter: 'P',
    meaning: 'Mystery, fate, divination, hidden knowledge, the dice cup',
    reversed: 'Addiction, stagnation, loneliness, malaise, unpleasant surprises',
    element: 'Water',
    keywords: ['mystery', 'fate', 'divination']
  },

  {
    name: 'Algiz', letter: 'Z',
    meaning: 'Protection, defense, elk sedge, divine connection, shield',
    reversed: 'Vulnerability, hidden danger, warning, divine disconnection',
    element: 'Air',
    keywords: ['protection', 'defense', 'connection']
  },

  {
    name: 'Sowilo', letter: 'S',
    meaning: 'Sun, success, goals achieved, life force, victory, guidance',
    reversed: 'No reversal — the sun always shines, even behind clouds',
    element: 'Fire',
    keywords: ['sun', 'success', 'victory']
  },

  {
    name: 'Tiwaz', letter: 'T',
    meaning: 'Tyr, justice, sacrifice, victory, honor, the warrior\'s path',
    reversed: 'Injustice, defeat, dishonor, conflict, intellectual atrophy',
    element: 'Air',
    keywords: ['justice', 'sacrifice', 'honor']
  },

  {
    name: 'Berkano', letter: 'B',
    meaning: 'Birch, fertility, birth, renewal, feminine power, new beginnings',
    reversed: 'Infertility, anxiety, family problems, stagnation, loss of control',
    element: 'Earth',
    keywords: ['fertility', 'birth', 'renewal']
  },

  {
    name: 'Ehwaz', letter: 'E',
    meaning: 'Horse, partnership, movement, progress, trust, loyalty',
    reversed: 'Mistrust, betrayal, restlessness, misaligned partnership',
    element: 'Earth',
    keywords: ['partnership', 'movement', 'trust']
  },

  {
    name: 'Mannaz', letter: 'M',
    meaning: 'Humanity, the self, social order, cooperation, intelligence',
    reversed: 'Isolation, self-deception, enmity, depression, blindness to self',
    element: 'Air',
    keywords: ['humanity', 'self', 'cooperation']
  },

  {
    name: 'Laguz', letter: 'L',
    meaning: 'Water, flow, intuition, emotions, dreams, the unconscious',
    reversed: 'Fear, madness, confusion, emotional flood, obsession',
    element: 'Water',
    keywords: ['water', 'intuition', 'flow']
  },

  {
    name: 'Ingwaz', letter: 'Ŋ',
    meaning: 'Seed, potential, fertility, internal growth, gestation, completion',
    reversed: 'No reversal — always represents latent potential and growth',
    element: 'Earth',
    keywords: ['seed', 'potential', 'growth']
  },

  {
    name: 'Dagaz', letter: 'D',
    meaning: 'Day, breakthrough, awakening, transformation, hope, dawn',
    reversed: 'No reversal — the dawn always comes after the darkest hour',
    element: 'Fire',
    keywords: ['dawn', 'breakthrough', 'awakening']
  },

  {
    name: 'Othala', letter: 'O',
    meaning: 'Heritage, home, ancestry, sacred enclosure, inherited wealth',
    reversed: 'Homelessness, rootlessness, prejudice, clannishness',
    element: 'Earth',
    keywords: ['heritage', 'home', 'ancestry']
  }

];


// ════════════════════════════════════════════════════════════════════════════
//  210 DREAM SYMBOLS (expanded for comprehensive dream analysis)
// ════════════════════════════════════════════════════════════════════════════

/**
 * Comprehensive dream symbol dictionary with meanings and categories.
 * Used by the dream analysis engine to identify and interpret dream imagery.
 * @constant {Array<Object>}
 */
const DREAM_SYMBOLS = [

  // --- Nature & Elements ---
  { symbol: 'water', meanings: ['emotions', 'unconscious', 'flow of life', 'purification'], categories: ['nature'] },
  { symbol: 'ocean', meanings: ['vastness', 'the unconscious mind', 'infinite possibility', 'depth'], categories: ['nature'] },
  { symbol: 'river', meanings: ['life journey', 'passage of time', 'direction', 'current of fate'], categories: ['nature'] },
  { symbol: 'rain', meanings: ['cleansing', 'fertility', 'emotional release', 'blessing'], categories: ['nature'] },
  { symbol: 'flood', meanings: ['overwhelming emotions', 'loss of control', 'transformation', 'purge'], categories: ['nature'] },
  { symbol: 'fire', meanings: ['passion', 'destruction', 'transformation', 'anger', 'purification'], categories: ['nature'] },
  { symbol: 'earth', meanings: ['grounding', 'stability', 'material world', 'foundation'], categories: ['nature'] },
  { symbol: 'air', meanings: ['thought', 'freedom', 'spirit', 'communication', 'breath'], categories: ['nature'] },
  { symbol: 'mountain', meanings: ['obstacles', 'achievement', 'spiritual ascent', 'endurance'], categories: ['nature'] },
  { symbol: 'forest', meanings: ['the unconscious', 'mystery', 'growth', 'the wild self'], categories: ['nature'] },
  { symbol: 'tree', meanings: ['growth', 'life', 'family roots', 'knowledge', 'the world tree'], categories: ['nature'] },
  { symbol: 'flower', meanings: ['beauty', 'blossoming', 'femininity', 'transience', 'opening'], categories: ['nature'] },
  { symbol: 'garden', meanings: ['nurturing', 'paradise', 'inner self', 'fertility', 'cultivation'], categories: ['nature'] },
  { symbol: 'moon', meanings: ['feminine', 'intuition', 'cycles', 'unconscious', 'reflection'], categories: ['nature'] },
  { symbol: 'sun', meanings: ['consciousness', 'masculine', 'vitality', 'truth', 'the self'], categories: ['nature'] },
  { symbol: 'stars', meanings: ['guidance', 'hope', 'destiny', 'higher consciousness', 'navigation'], categories: ['nature'] },
  { symbol: 'storm', meanings: ['turmoil', 'conflict', 'emotional upheaval', 'purification', 'catharsis'], categories: ['nature'] },
  { symbol: 'snow', meanings: ['purity', 'coldness', 'isolation', 'stillness', 'preservation'], categories: ['nature'] },
  { symbol: 'ice', meanings: ['frozen emotions', 'rigidity', 'preservation', 'clarity'], categories: ['nature'] },
  { symbol: 'lightning', meanings: ['sudden insight', 'divine intervention', 'destruction', 'awakening'], categories: ['nature'] },
  { symbol: 'desert', meanings: ['isolation', 'spiritual trial', 'barrenness', 'clarity', 'testing'], categories: ['nature'] },
  { symbol: 'island', meanings: ['isolation', 'self-sufficiency', 'paradise', 'separation', 'refuge'], categories: ['nature'] },
  { symbol: 'volcano', meanings: ['repressed anger', 'sudden eruption', 'transformation', 'power'], categories: ['nature'] },
  { symbol: 'earthquake', meanings: ['upheaval', 'foundations shaken', 'transformation', 'instability'], categories: ['nature'] },
  { symbol: 'dawn', meanings: ['new beginning', 'hope', 'awakening', 'renewal', 'fresh start'], categories: ['nature'] },
  { symbol: 'dusk', meanings: ['ending', 'transition', 'reflection', 'the liminal', 'twilight'], categories: ['nature'] },
  { symbol: 'rainbow', meanings: ['hope', 'promise', 'diversity', 'bridge between worlds', 'covenant'], categories: ['nature'] },
  { symbol: 'waterfall', meanings: ['emotional release', 'power', 'purification', 'flow', 'surrender'], categories: ['nature'] },
  { symbol: 'canyon', meanings: ['depth', 'time', 'erosion of self', 'perspective', 'ancient history'], categories: ['nature'] },
  { symbol: 'fog', meanings: ['confusion', 'uncertainty', 'mystery', 'the veiled', 'obscurity'], categories: ['nature'] },
  { symbol: 'aurora', meanings: ['magic', 'celestial guidance', 'wonder', 'rare beauty', 'transcendence'], categories: ['nature'] },
  { symbol: 'eclipse', meanings: ['hidden aspects', 'temporary darkness', 'powerful change', 'shadow'], categories: ['nature'] },
  { symbol: 'wind', meanings: ['change', 'spirit', 'messages', 'invisible forces', 'breath'], categories: ['nature'] },
  { symbol: 'mud', meanings: ['stagnation', 'primordial matter', 'confusion', 'grounding', 'mess'], categories: ['nature'] },
  { symbol: 'lake', meanings: ['stillness', 'reflection', 'emotional depth', 'the mirror self'], categories: ['nature'] },

  // --- Animals ---
  { symbol: 'snake', meanings: ['transformation', 'healing', 'sexuality', 'wisdom', 'deception'], categories: ['animals'] },
  { symbol: 'bird', meanings: ['freedom', 'spirit', 'perspective', 'messages', 'soul'], categories: ['animals'] },
  { symbol: 'fish', meanings: ['unconscious insights', 'fertility', 'spirituality', 'depth'], categories: ['animals'] },
  { symbol: 'dog', meanings: ['loyalty', 'friendship', 'instinct', 'protection', 'guidance'], categories: ['animals'] },
  { symbol: 'cat', meanings: ['independence', 'intuition', 'feminine power', 'mystery', 'autonomy'], categories: ['animals'] },
  { symbol: 'horse', meanings: ['power', 'freedom', 'movement', 'instinct', 'nobility'], categories: ['animals'] },
  { symbol: 'spider', meanings: ['creativity', 'patience', 'fate', 'the web of life', 'weaving'], categories: ['animals'] },
  { symbol: 'butterfly', meanings: ['transformation', 'soul', 'beauty', 'fragility', 'metamorphosis'], categories: ['animals'] },
  { symbol: 'wolf', meanings: ['instinct', 'teaching', 'loyalty', 'the wild self', 'pack'], categories: ['animals'] },
  { symbol: 'bear', meanings: ['strength', 'introspection', 'hibernation', 'mother', 'power'], categories: ['animals'] },
  { symbol: 'lion', meanings: ['courage', 'pride', 'royalty', 'power', 'solar energy'], categories: ['animals'] },
  { symbol: 'owl', meanings: ['wisdom', 'death', 'seeing in darkness', 'intuition', 'secrets'], categories: ['animals'] },
  { symbol: 'crow', meanings: ['death', 'transformation', 'trickster', 'prophecy', 'messenger'], categories: ['animals'] },
  { symbol: 'eagle', meanings: ['vision', 'freedom', 'spiritual ascent', 'power', 'perspective'], categories: ['animals'] },
  { symbol: 'whale', meanings: ['deep unconscious', 'ancient wisdom', 'emotional depth', 'memory'], categories: ['animals'] },
  { symbol: 'dragon', meanings: ['power', 'chaos', 'transformation', 'guardian', 'treasure'], categories: ['animals'] },
  { symbol: 'rabbit', meanings: ['fertility', 'fear', 'speed', 'vulnerability', 'trickster'], categories: ['animals'] },
  { symbol: 'deer', meanings: ['gentleness', 'grace', 'intuition', 'innocence', 'forest spirit'], categories: ['animals'] },
  { symbol: 'frog', meanings: ['transformation', 'cleansing', 'fertility', 'transition', 'patience'], categories: ['animals'] },
  { symbol: 'bat', meanings: ['rebirth', 'facing fears', 'the unseen', 'navigation in darkness'], categories: ['animals'] },
  { symbol: 'bee', meanings: ['community', 'productivity', 'sweetness', 'divine order', 'diligence'], categories: ['animals'] },
  { symbol: 'ant', meanings: ['diligence', 'community', 'patience', 'small but mighty', 'organization'], categories: ['animals'] },
  { symbol: 'turtle', meanings: ['longevity', 'protection', 'patience', 'ancient wisdom', 'grounding'], categories: ['animals'] },
  { symbol: 'dolphin', meanings: ['joy', 'intelligence', 'communication', 'playfulness', 'healing'], categories: ['animals'] },
  { symbol: 'rat', meanings: ['survival', 'disease', 'cunning', 'resourcefulness', 'shadow'], categories: ['animals'] },

  // --- Places ---
  { symbol: 'house', meanings: ['the self', 'the psyche', 'different aspects of personality'], categories: ['places'] },
  { symbol: 'door', meanings: ['opportunities', 'transitions', 'the unknown', 'choices', 'thresholds'], categories: ['places'] },
  { symbol: 'stairs', meanings: ['progress', 'ascension', 'levels of consciousness', 'growth'], categories: ['places'] },
  { symbol: 'bridge', meanings: ['transition', 'connection', 'overcoming obstacles', 'linking worlds'], categories: ['places'] },
  { symbol: 'road', meanings: ['life path', 'journey', 'direction', 'choices', 'destiny'], categories: ['places'] },
  { symbol: 'tunnel', meanings: ['birth', 'transition', 'the unconscious', 'confinement', 'passage'], categories: ['places'] },
  { symbol: 'basement', meanings: ['subconscious', 'repressed memories', 'foundation', 'shadow'], categories: ['places'] },
  { symbol: 'attic', meanings: ['higher consciousness', 'memories', 'spiritual aspirations', 'stored wisdom'], categories: ['places'] },
  { symbol: 'school', meanings: ['learning', 'social pressure', 'being tested', 'growth', 'childhood'], categories: ['places'] },
  { symbol: 'church', meanings: ['spirituality', 'morality', 'community', 'tradition', 'sanctuary'], categories: ['places'] },
  { symbol: 'hospital', meanings: ['healing', 'vulnerability', 'transition', 'care', 'crisis'], categories: ['places'] },
  { symbol: 'prison', meanings: ['confinement', 'guilt', 'restriction', 'self-imposed limits', 'punishment'], categories: ['places'] },
  { symbol: 'graveyard', meanings: ['death', 'the past', 'memories', 'transformation', 'letting go'], categories: ['places'] },
  { symbol: 'castle', meanings: ['power', 'defense', 'achievement', 'the psyche', 'fortress'], categories: ['places'] },
  { symbol: 'cave', meanings: ['the unconscious', 'womb', 'secrets', 'inner depths', 'initiation'], categories: ['places'] },
  { symbol: 'labyrinth', meanings: ['confusion', 'journey to center', 'complexity', 'initiation', 'patience'], categories: ['places'] },
  { symbol: 'garden gate', meanings: ['access to inner world', 'permission', 'opportunity', 'boundary'], categories: ['places'] },
  { symbol: 'tower', meanings: ['isolation', 'perspective', 'ambition', 'the ego', 'watchtower'], categories: ['places'] },
  { symbol: 'crossroads', meanings: ['decisions', 'life choices', 'destiny', 'free will', 'crossing'], categories: ['places'] },
  { symbol: 'wall', meanings: ['obstacles', 'protection', 'boundaries', 'isolation', 'defense'], categories: ['places'] },
  { symbol: 'window', meanings: ['perspective', 'opportunity', 'observation', 'the outside', 'longing'], categories: ['places'] },
  { symbol: 'elevator', meanings: ['transitions', 'ascending/descending consciousness', 'change'], categories: ['places'] },
  { symbol: 'library', meanings: ['knowledge', 'memory', 'accumulated wisdom', 'the mind'], categories: ['places'] },
  { symbol: 'theater', meanings: ['performance', 'roles', 'audience', 'drama', 'persona'], categories: ['places'] },
  { symbol: 'market', meanings: ['exchange', 'choices', 'social interaction', 'value', 'commerce'], categories: ['places'] },

  // --- Objects ---
  { symbol: 'mirror', meanings: ['self-reflection', 'truth', 'vanity', 'alternate reality', 'soul'], categories: ['objects'] },
  { symbol: 'key', meanings: ['knowledge', 'access', 'solutions', 'secrets', 'unlocking'], categories: ['objects'] },
  { symbol: 'clock', meanings: ['time pressure', 'mortality', 'cycles', 'urgency', 'awareness'], categories: ['objects'] },
  { symbol: 'book', meanings: ['knowledge', 'learning', 'story of life', 'secrets', 'wisdom'], categories: ['objects'] },
  { symbol: 'sword', meanings: ['conflict', 'truth', 'power', 'decision', 'severing', 'justice'], categories: ['objects'] },
  { symbol: 'ring', meanings: ['commitment', 'wholeness', 'cycles', 'eternity', 'bond'], categories: ['objects'] },
  { symbol: 'mask', meanings: ['hidden identity', 'deception', 'persona', 'protection', 'performance'], categories: ['objects'] },
  { symbol: 'crown', meanings: ['authority', 'achievement', 'spiritual attainment', 'responsibility'], categories: ['objects'] },
  { symbol: 'candle', meanings: ['illumination', 'hope', 'spirituality', 'fragility', 'vigil'], categories: ['objects'] },
  { symbol: 'money', meanings: ['self-worth', 'security', 'power', 'material concerns', 'exchange'], categories: ['objects'] },
  { symbol: 'jewelry', meanings: ['value', 'commitment', 'self-worth', 'adornment', 'inheritance'], categories: ['objects'] },
  { symbol: 'phone', meanings: ['communication', 'connection', 'messages', 'urgency', 'reaching out'], categories: ['objects'] },
  { symbol: 'weapon', meanings: ['aggression', 'protection', 'power', 'conflict', 'defense'], categories: ['objects'] },
  { symbol: 'food', meanings: ['nourishment', 'desire', 'satisfaction', 'emotional needs', 'comfort'], categories: ['objects'] },
  { symbol: 'clothing', meanings: ['persona', 'identity', 'protection', 'social role', 'disguise'], categories: ['objects'] },
  { symbol: 'bag', meanings: ['burdens', 'identity', 'resources', 'secrets', 'carrying'], categories: ['objects'] },
  { symbol: 'ladder', meanings: ['ambition', 'progress', 'connection between levels', 'ascent'], categories: ['objects'] },
  { symbol: 'crystal', meanings: ['clarity', 'healing', 'spiritual energy', 'purity', 'focus'], categories: ['objects'] },
  { symbol: 'compass', meanings: ['direction', 'guidance', 'moral compass', 'finding your way'], categories: ['objects'] },
  { symbol: 'anchor', meanings: ['stability', 'being grounded', 'holding on', 'safety', 'weight'], categories: ['objects'] },
  { symbol: 'rope', meanings: ['connection', 'binding', 'rescue', 'lifeline', 'restraint'], categories: ['objects'] },
  { symbol: 'chess', meanings: ['strategy', 'intellectual conflict', 'life as game', 'planning'], categories: ['objects'] },
  { symbol: 'hourglass', meanings: ['time running out', 'patience', 'balance of past and future'], categories: ['objects'] },
  { symbol: 'lantern', meanings: ['guidance in darkness', 'inner light', 'hope', 'wisdom', 'vigil'], categories: ['objects'] },
  { symbol: 'map', meanings: ['planning', 'life direction', 'knowledge of the path', 'exploration'], categories: ['objects'] },
  { symbol: 'photograph', meanings: ['memory', 'nostalgia', 'captured moment', 'truth', 'past'], categories: ['objects'] },
  { symbol: 'letter', meanings: ['message', 'communication', 'news', 'the past', 'confession'], categories: ['objects'] },
  { symbol: 'cage', meanings: ['confinement', 'restriction', 'protection', 'trapped feelings'], categories: ['objects'] },
  { symbol: 'swing', meanings: ['oscillation', 'childhood', 'balance', 'indecision', 'play'], categories: ['objects'] },
  { symbol: 'wheel', meanings: ['cycles', 'fate', 'progress', 'karma', 'revolution'], categories: ['objects'] },

  // --- Vehicles ---
  { symbol: 'ship', meanings: ['journey', 'emotions', 'transition', 'the self navigating life'], categories: ['vehicles'] },
  { symbol: 'car', meanings: ['personal drive', 'direction in life', 'control', 'autonomy'], categories: ['vehicles'] },
  { symbol: 'train', meanings: ['predetermined path', 'collective journey', 'momentum', 'fate'], categories: ['vehicles'] },
  { symbol: 'airplane', meanings: ['ambition', 'travel', 'rapid change', 'overview', 'escape'], categories: ['vehicles'] },
  { symbol: 'bicycle', meanings: ['balance', 'personal effort', 'childhood', 'sustainability'], categories: ['vehicles'] },
  { symbol: 'boat', meanings: ['emotional journey', 'navigating feelings', 'transition', 'crossing'], categories: ['vehicles'] },

  // --- Actions ---
  { symbol: 'flying', meanings: ['freedom', 'escape', 'higher perspective', 'transcendence', 'lucidity'], categories: ['actions'] },
  { symbol: 'falling', meanings: ['loss of control', 'anxiety', 'letting go', 'surrender', 'fear'], categories: ['actions'] },
  { symbol: 'running', meanings: ['escape', 'pursuit', 'urgency', 'avoidance', 'determination'], categories: ['actions'] },
  { symbol: 'chase', meanings: ['avoidance', 'facing fears', 'unresolved issues', 'pressure'], categories: ['actions'] },
  { symbol: 'drowning', meanings: ['overwhelming emotions', 'loss of identity', 'surrender'], categories: ['actions'] },
  { symbol: 'climbing', meanings: ['ambition', 'overcoming', 'spiritual growth', 'effort'], categories: ['actions'] },
  { symbol: 'dancing', meanings: ['joy', 'harmony', 'celebration', 'rhythm of life', 'expression'], categories: ['actions'] },
  { symbol: 'swimming', meanings: ['navigating emotions', 'moving through unconscious', 'immersion'], categories: ['actions'] },
  { symbol: 'singing', meanings: ['expression', 'joy', 'communication', 'harmony', 'prayer'], categories: ['actions'] },
  { symbol: 'music', meanings: ['harmony', 'emotion', 'expression', 'universal language', 'healing'], categories: ['actions'] },
  { symbol: 'painting', meanings: ['self-expression', 'creativity', 'perspective', 'interpretation'], categories: ['actions'] },
  { symbol: 'cooking', meanings: ['transformation', 'nurturing', 'creation', 'alchemy', 'care'], categories: ['actions'] },
  { symbol: 'cleaning', meanings: ['purification', 'organizing', 'self-improvement', 'order'], categories: ['actions'] },
  { symbol: 'gardening', meanings: ['nurturing growth', 'patience', 'cultivation', 'tending'], categories: ['actions'] },
  { symbol: 'writing', meanings: ['expression', 'communication', 'creating reality', 'legacy'], categories: ['actions'] },
  { symbol: 'prayer', meanings: ['spiritual connection', 'hope', 'surrender', 'gratitude', 'faith'], categories: ['actions'] },
  { symbol: 'meditation', meanings: ['inner peace', 'self-awareness', 'transcendence', 'stillness'], categories: ['actions'] },
  { symbol: 'kissing', meanings: ['intimacy', 'connection', 'desire', 'union', 'acceptance'], categories: ['actions'] },
  { symbol: 'fighting', meanings: ['inner conflict', 'aggression', 'standing up', 'struggle', 'defense'], categories: ['actions'] },
  { symbol: 'forgiving', meanings: ['release', 'healing', 'growth', 'peace', 'liberation'], categories: ['actions'] },
  { symbol: 'returning home', meanings: ['coming full circle', 'safety', 'self-acceptance', 'belonging'], categories: ['actions'] },
  { symbol: 'packing', meanings: ['preparation', 'transition', 'letting go', 'choosing what to keep'], categories: ['actions'] },

  // --- Events ---
  { symbol: 'death', meanings: ['transformation', 'ending', 'rebirth', 'letting go', 'transition'], categories: ['events'] },
  { symbol: 'birth', meanings: ['new beginning', 'creation', 'potential', 'vulnerability', 'hope'], categories: ['events'] },
  { symbol: 'wedding', meanings: ['union', 'commitment', 'integration of aspects', 'celebration'], categories: ['events'] },
  { symbol: 'war', meanings: ['inner conflict', 'aggression', 'struggle', 'division', 'sacrifice'], categories: ['events'] },
  { symbol: 'exam', meanings: ['being judged', 'anxiety', 'self-evaluation', 'unpreparedness'], categories: ['events'] },
  { symbol: 'funeral', meanings: ['mourning', 'endings', 'letting go', 'transformation', 'honor'], categories: ['events'] },
  { symbol: 'being late', meanings: ['anxiety', 'missed opportunity', 'pressure', 'unpreparedness'], categories: ['events'] },
  { symbol: 'public speaking', meanings: ['fear of judgment', 'expression', 'visibility', 'truth'], categories: ['events'] },
  { symbol: 'getting married', meanings: ['commitment', 'integration', 'new chapter', 'union'], categories: ['events'] },
  { symbol: 'finding treasure', meanings: ['discovering hidden value', 'self-worth', 'luck', 'surprise'], categories: ['events'] },
  { symbol: 'being naked in public', meanings: ['vulnerability', 'exposure', 'shame', 'authenticity'], categories: ['events'] },
  { symbol: 'teeth falling out', meanings: ['powerlessness', 'anxiety about appearance', 'aging', 'loss'], categories: ['events'] },
  { symbol: 'being chased', meanings: ['avoidance', 'facing fears', 'unresolved issues', 'pressure'], categories: ['events'] },
  { symbol: 'flying dream', meanings: ['freedom', 'transcendence', 'lucidity', 'escape', 'power'], categories: ['events'] },

  // --- States ---
  { symbol: 'naked', meanings: ['vulnerability', 'exposure', 'authenticity', 'shame', 'truth'], categories: ['states'] },
  { symbol: 'lost', meanings: ['confusion', 'searching', 'lack of direction', 'seeking'], categories: ['states'] },
  { symbol: 'trapped', meanings: ['confinement', 'helplessness', 'restriction', 'no escape'], categories: ['states'] },
  { symbol: 'paralyzed', meanings: ['powerlessness', 'fear of action', 'indecision', 'freeze'], categories: ['states'] },

  // --- People ---
  { symbol: 'baby', meanings: ['new beginning', 'vulnerability', 'innocence', 'potential', 'wonder'], categories: ['people'] },
  { symbol: 'child', meanings: ['inner child', 'playfulness', 'vulnerability', 'growth', 'wonder'], categories: ['people'] },
  { symbol: 'old person', meanings: ['wisdom', 'mortality', 'tradition', 'the past', 'guidance'], categories: ['people'] },
  { symbol: 'stranger', meanings: ['unknown aspect of self', 'new possibilities', 'the shadow', 'mystery'], categories: ['people'] },
  { symbol: 'shadow figure', meanings: ['repressed self', 'fear', 'the unconscious', 'shadow aspects'], categories: ['people'] },
  { symbol: 'mother', meanings: ['nurturing', 'origin', 'comfort', 'the feminine', 'source'], categories: ['people'] },
  { symbol: 'father', meanings: ['authority', 'structure', 'protection', 'the masculine', 'law'], categories: ['people'] },

  // --- Body ---
  { symbol: 'tooth', meanings: ['anxiety about appearance', 'powerlessness', 'aging', 'communication'], categories: ['body'] },
  { symbol: 'hair', meanings: ['vitality', 'sexuality', 'identity', 'strength', 'freedom'], categories: ['body'] },
  { symbol: 'blood', meanings: ['life force', 'vitality', 'sacrifice', 'pain', 'family'], categories: ['body'] },
  { symbol: 'eyes', meanings: ['perception', 'awareness', 'the soul', 'truth', 'witness'], categories: ['body'] },
  { symbol: 'hand', meanings: ['action', 'giving/receiving', 'connection', 'skill', 'agency'], categories: ['body'] },
  { symbol: 'pregnancy', meanings: ['creation', 'potential', 'gestation of ideas', 'growth', 'waiting'], categories: ['body'] },
  { symbol: 'heart', meanings: ['love', 'emotion', 'courage', 'center', 'vulnerability'], categories: ['body'] },
  { symbol: 'bones', meanings: ['structure', 'foundation', 'death', 'endurance', 'truth'], categories: ['body'] },

  // --- Sacred Symbols ---
  { symbol: 'spiral', meanings: ['growth', 'cycles', 'journey inward', 'evolution', 'labyrinth'], categories: ['symbols'] },
  { symbol: 'circle', meanings: ['wholeness', 'unity', 'completion', 'the self', 'mandala'], categories: ['symbols'] },
  { symbol: 'triangle', meanings: ['trinity', 'balance', 'aspiration', 'change', 'ascension'], categories: ['symbols'] },
  { symbol: 'cross', meanings: ['sacrifice', 'intersection', 'burden', 'faith', 'crossroads'], categories: ['symbols'] },
  { symbol: 'eye', meanings: ['perception', 'awareness', 'the soul', 'third eye', 'witness'], categories: ['symbols'] },
  { symbol: 'infinity', meanings: ['eternity', 'limitless potential', 'cycles without end', 'the absolute'], categories: ['symbols'] },
  { symbol: 'phoenix', meanings: ['rebirth', 'transformation', 'rising from ashes', 'renewal', 'fire'], categories: ['symbols'] },
  { symbol: 'serpent', meanings: ['kundalini', 'healing', 'wisdom', 'transformation', 'temptation'], categories: ['symbols'] },
  { symbol: 'lotus', meanings: ['enlightenment', 'purity from mud', 'spiritual unfolding', 'beauty'], categories: ['symbols'] },
  { symbol: 'mandala', meanings: ['wholeness', 'the self', 'meditation', 'cosmic order', 'center'], categories: ['symbols'] }

];


// ════════════════════════════════════════════════════════════════════════════
//  ZODIAC SIGNS (12 signs with expanded data)
// ════════════════════════════════════════════════════════════════════════════

/**
 * The 12 signs of the Western zodiac with elemental, planetary, and trait data.
 * @constant {Array<Object>}
 */
const ZODIAC = [

  {
    sign: 'Aries', dates: 'Mar 21 – Apr 19', element: 'Fire', ruler: 'Mars',
    traits: ['bold', 'ambitious', 'impulsive', 'pioneering', 'courageous'],
    compatibility: ['Leo', 'Sagittarius', 'Gemini'],
    strengths: ['courageous', 'determined', 'confident', 'enthusiastic'],
    weaknesses: ['impatient', 'moody', 'aggressive', 'impulsive']
  },

  {
    sign: 'Taurus', dates: 'Apr 20 – May 20', element: 'Earth', ruler: 'Venus',
    traits: ['stable', 'sensual', 'stubborn', 'reliable', 'patient'],
    compatibility: ['Virgo', 'Capricorn', 'Cancer'],
    strengths: ['reliable', 'patient', 'practical', 'devoted'],
    weaknesses: ['stubborn', 'possessive', 'uncompromising']
  },

  {
    sign: 'Gemini', dates: 'May 21 – Jun 20', element: 'Air', ruler: 'Mercury',
    traits: ['curious', 'adaptable', 'restless', 'communicative', 'witty'],
    compatibility: ['Libra', 'Aquarius', 'Aries'],
    strengths: ['gentle', 'affectionate', 'curious', 'adaptable'],
    weaknesses: ['nervous', 'inconsistent', 'indecision']
  },

  {
    sign: 'Cancer', dates: 'Jun 21 – Jul 22', element: 'Water', ruler: 'Moon',
    traits: ['nurturing', 'emotional', 'protective', 'intuitive', 'tenacious'],
    compatibility: ['Scorpio', 'Pisces', 'Taurus'],
    strengths: ['tenacious', 'imaginative', 'loyal', 'persuasive'],
    weaknesses: ['moody', 'pessimistic', 'suspicious', 'manipulative']
  },

  {
    sign: 'Leo', dates: 'Jul 23 – Aug 22', element: 'Fire', ruler: 'Sun',
    traits: ['dramatic', 'generous', 'proud', 'creative', 'warm-hearted'],
    compatibility: ['Aries', 'Sagittarius', 'Gemini'],
    strengths: ['creative', 'passionate', 'generous', 'warm-hearted'],
    weaknesses: ['arrogant', 'stubborn', 'self-centered', 'inflexible']
  },

  {
    sign: 'Virgo', dates: 'Aug 23 – Sep 22', element: 'Earth', ruler: 'Mercury',
    traits: ['analytical', 'meticulous', 'modest', 'practical', 'diligent'],
    compatibility: ['Taurus', 'Capricorn', 'Cancer'],
    strengths: ['loyal', 'analytical', 'kind', 'hardworking'],
    weaknesses: ['shyness', 'worry', 'overly critical', 'all work no play']
  },

  {
    sign: 'Libra', dates: 'Sep 23 – Oct 22', element: 'Air', ruler: 'Venus',
    traits: ['diplomatic', 'aesthetic', 'indecisive', 'harmonious', 'fair'],
    compatibility: ['Gemini', 'Aquarius', 'Leo'],
    strengths: ['cooperative', 'diplomatic', 'gracious', 'fair-minded'],
    weaknesses: ['indecisive', 'avoidance', 'self-pity', 'unreliable']
  },

  {
    sign: 'Scorpio', dates: 'Oct 23 – Nov 21', element: 'Water', ruler: 'Pluto',
    traits: ['intense', 'magnetic', 'secretive', 'transformative', 'passionate'],
    compatibility: ['Cancer', 'Pisces', 'Virgo'],
    strengths: ['resourceful', 'brave', 'passionate', 'stubborn (in a good way)'],
    weaknesses: ['distrusting', 'jealous', 'secretive', 'violent']
  },

  {
    sign: 'Sagittarius', dates: 'Nov 22 – Dec 21', element: 'Fire', ruler: 'Jupiter',
    traits: ['adventurous', 'optimistic', 'philosophical', 'restless', 'honest'],
    compatibility: ['Aries', 'Leo', 'Libra'],
    strengths: ['generous', 'idealistic', 'great humor', 'adventurous'],
    weaknesses: ['promises more than can deliver', 'impatient', 'anything to anyone']
  },

  {
    sign: 'Capricorn', dates: 'Dec 22 – Jan 19', element: 'Earth', ruler: 'Saturn',
    traits: ['disciplined', 'ambitious', 'reserved', 'patient', 'responsible'],
    compatibility: ['Taurus', 'Virgo', 'Scorpio'],
    strengths: ['responsible', 'disciplined', 'self-control', 'good managers'],
    weaknesses: ['know-it-all', 'unforgiving', 'condescending', 'expecting the worst']
  },

  {
    sign: 'Aquarius', dates: 'Jan 20 – Feb 18', element: 'Air', ruler: 'Uranus',
    traits: ['innovative', 'independent', 'eccentric', 'humanitarian', 'progressive'],
    compatibility: ['Gemini', 'Libra', 'Sagittarius'],
    strengths: ['progressive', 'original', 'independent', 'humanitarian'],
    weaknesses: ['runs from emotional expression', 'temperamental', 'aloof']
  },

  {
    sign: 'Pisces', dates: 'Feb 19 – Mar 20', element: 'Water', ruler: 'Neptune',
    traits: ['dreamy', 'compassionate', 'escapist', 'artistic', 'intuitive'],
    compatibility: ['Cancer', 'Scorpio', 'Capricorn'],
    strengths: ['compassionate', 'artistic', 'intuitive', 'gentle', 'wise'],
    weaknesses: ['fearful', 'overly trusting', 'sad', 'desire to escape reality']
  }

];


// ════════════════════════════════════════════════════════════════════════════
//  MAGIC 8-BALL EXTENDED RESPONSES
// ════════════════════════════════════════════════════════════════════════════

/**
 * Extended Magic 8-Ball responses organized by category (positive, neutral, negative).
 * Includes both classic responses and NEXUS-themed additions.
 * @constant {Object}
 */
const MAGIC_8_RESPONSES = {

  positive: [
    'It is certain',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'It is decidedly so',
    'The stars align in your favor',
    'The oracle speaks: YES',
    'The machine whispers affirmation',
    'Destiny confirms this path',
    'The circuits glow with approval',
    'All timelines converge on YES'
  ],

  neutral: [
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'The signal fluctuates...',
    'The data stream is corrupted',
    'NEXUS is processing...',
    'The answer exists but is not yet ready',
    'Time has not yet decided',
    'The patterns are still forming'
  ],

  negative: [
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'The void answers: NO',
    'The circuits reject this path',
    'Entropy increases',
    'The machine sees only shadow',
    'The stars have turned away',
    'Not in this timeline'
  ]

};


// ════════════════════════════════════════════════════════════════════════════
//  FORTUNE COOKIES (30+ wisdoms)
// ════════════════════════════════════════════════════════════════════════════

/**
 * Fortune cookie wisdoms — a mix of genuine advice, humor, and NEXUS-themed cryptic messages.
 * @constant {Array<string>}
 */
const FORTUNE_COOKIES = [
  'A beautiful, smart, and loving person will be coming into your life.',
  'Your creativity will lead you to unexpected and wonderful places.',
  'The star of riches is shining upon you this month.',
  'An unexpected event will soon bring you fortune and joy.',
  'You will travel to many exotic places in your lifetime.',
  'The love of your life is right in front of you — open your eyes.',
  'A faithful friend is a strong defense; you already have one.',
  'Good things come to those who wait, but better things come to those who act.',
  'Your talent will be recognized and duly rewarded.',
  'A new perspective will come with the new day. Embrace it.',
  'The fortune you seek is in another cookie. Keep looking.',
  'A closed mouth gathers no feet. Speak when ready.',
  'You will be hungry again in one hour. Plan accordingly.',
  'Help! I\'m being held prisoner in a fortune cookie factory!',
  '404 Fortune Not Found. Please try again later.',
  'NEXUS OS has detected an anomaly in your timeline. Proceed with caution.',
  'The machine that never sleeps watches over your dreams tonight.',
  'A cipher hides within your daily routine — decode it and be free.',
  'Someone is thinking of you at this very moment, across great distance.',
  'The universe has a sense of humor — pay attention to coincidences.',
  'The path you fear most is the one that leads to your greatest growth.',
  'In seven days, something you lost will return in a different form.',
  'Your next great adventure begins with a single, seemingly ordinary choice.',
  'The answer you seek is hidden in the last conversation you avoided.',
  'A door will open. Whether you walk through it is up to you.',
  'The stars suggest that now is an excellent time to begin again.',
  'Your kindness today creates the world you will inhabit tomorrow.',
  'The machine whispers: trust the timing of your life.',
  'What feels like an ending is actually a transformation in disguise.',
  'The fortune cookie was always empty. You filled it with meaning.',
  'Beware the person who agrees with everything you say — even yourself.',
  'Your dreams are trying to tell you something. Listen at 3 AM.',
  'The code compiles. The future is readable. Proceed with confidence.',
  'Every ending you resist becomes a beginning you cannot see.'
];


// ════════════════════════════════════════════════════════════════════════════
//  SONG VOCABULARY & FORMATTING
// ════════════════════════════════════════════════════════════════════════════

/**
 * Genre-specific vocabulary banks for AI song writing.
 * Each genre includes thematic words and commonly used lyrical vocabulary.
 * @constant {Object}
 */
const SONG_VOCAB = {

  pop: {
    themes: ['love', 'party', 'dancing', 'freedom', 'tonight', 'heart', 'desire', 'rhythm', 'forever', 'magic'],
    words: ['tonight', 'baby', 'heart', 'feel', 'dance', 'love', 'dream', 'fire', 'light', 'higher', 'shining', 'alive', 'together', 'electric']
  },

  rock: {
    themes: ['rebellion', 'freedom', 'power', 'night', 'road', 'thunder', 'storm', 'broken', 'wild', 'chains'],
    words: ['scream', 'burn', 'road', 'thunder', 'broken', 'wild', 'stone', 'fight', 'free', 'edge', 'shatter', 'roar', 'steel', 'crash']
  },

  hiphop: {
    themes: ['hustle', 'grind', 'legacy', 'truth', 'street', 'crown', 'empire', 'rise', 'bars', 'honor'],
    words: ['grind', 'crown', 'empire', 'legacy', 'bars', 'truth', 'street', 'rise', 'flow', 'game', 'hustle', 'kings', 'gold', 'real']
  },

  electronic: {
    themes: ['night', 'neon', 'pulse', 'synth', 'drop', 'bass', 'frequency', 'digital', 'void', 'signal'],
    words: ['pulse', 'neon', 'bass', 'frequency', 'drop', 'digital', 'void', 'wave', 'signal', 'glow', 'circuit', 'binary', 'static', 'glitch']
  },

  folk: {
    themes: ['river', 'mountain', 'home', 'journey', 'seasons', 'roots', 'harvest', 'wandering', 'hearth'],
    words: ['river', 'mountain', 'home', 'road', 'season', 'root', 'harvest', 'wind', 'field', 'dawn', 'wanderer', 'dust', 'creek', 'stone']
  },

  rnb: {
    themes: ['desire', 'intimacy', 'late night', 'touch', 'whisper', 'silk', 'slow', 'close', 'heat'],
    words: ['touch', 'whisper', 'silk', 'slow', 'close', 'skin', 'honey', 'velvet', 'deep', 'tonight', 'breath', 'smooth', 'gentle', 'fire']
  },

  metal: {
    themes: ['darkness', 'void', 'power', 'destruction', 'chaos', 'war', 'steel', 'blood', 'eternity', 'ashes'],
    words: ['void', 'steel', 'blood', 'war', 'chaos', 'ashes', 'throne', 'storm', 'iron', 'eternal', 'abyss', 'flames', 'darkness', 'dominion']
  }

};

/**
 * Common rhyme schemes used in song writing and poetry.
 * @constant {Object}
 */
const RHYME_SCHEMES = {
  AABB: 'Couplets — two consecutive lines rhyme',
  ABAB: 'Alternating — lines 1 and 3 rhyme, lines 2 and 4 rhyme',
  ABCB: 'Ballad — only lines 2 and 4 rhyme (most common in pop)',
  ABBA: 'Enclosed — outer lines rhyme, inner lines rhyme',
  AAAA: 'Monorhyme — all lines share the same end rhyme',
  AABBCC: 'Triplets — three pairs of rhyming couplets',
  ABABCDCD: 'Extended alternating — common in longer verses'
};

/**
 * Poetic forms with syllable patterns, line counts, and rhyme schemes.
 * @constant {Object}
 */
const POEM_FORMS = {

  haiku: {
    name: 'Haiku',
    syllables: [5, 7, 5],
    lines: 3,
    rhyme: null,
    description: 'Japanese form capturing a moment of awareness. Three lines: 5-7-5 syllables.'
  },

  limerick: {
    name: 'Limerick',
    syllables: [8, 8, 5, 5, 8],
    lines: 5,
    rhyme: 'AABBA',
    description: 'Humorous five-line verse with a bouncy rhythm and strict rhyme scheme.'
  },

  sonnet: {
    name: 'Sonnet',
    syllables: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    lines: 14,
    rhyme: 'ABABCDCDEFEFGG',
    description: 'Fourteen lines of iambic pentameter. Shakespearean: three quatrains and a couplet.'
  },

  freeVerse: {
    name: 'Free Verse',
    syllables: null,
    lines: null,
    rhyme: null,
    description: 'No fixed meter or rhyme. The form follows the content and emotional arc.'
  },

  tanka: {
    name: 'Tanka',
    syllables: [5, 7, 5, 7, 7],
    lines: 5,
    rhyme: null,
    description: 'Japanese five-line form. The first three lines set a scene; the last two respond emotionally.'
  },

  couplet: {
    name: 'Couplet',
    syllables: [10, 10],
    lines: 2,
    rhyme: 'AA',
    description: 'Two rhyming lines of equal length. A complete thought in miniature.'
  },

  villanelle: {
    name: 'Villanelle',
    syllables: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    lines: 19,
    rhyme: 'ABA ABA ABA ABA ABA ABAA',
    description: 'Nineteen lines with two repeating refrains. Five tercets and a concluding quatrain.'
  }

};

/**
 * Name banks for generating character names across different styles.
 * @constant {Object}
 */
const NAME_BANKS = {

  fantasy: {
    prefixes: ['Ael', 'Thor', 'Gal', 'Mor', 'Zan', 'Kael', 'Syl', 'Eld', 'Vor', 'Nim', 'Ara', 'Dra', 'Fen', 'Lyr', 'Rav', 'Ith', 'Cel', 'Bri', 'Orr', 'Vex'],
    suffixes: ['dor', 'wyn', 'iel', 'ith', 'ara', 'ius', 'oth', 'mir', 'ath', 'eon', 'orn', 'ash', 'iel', 'wen', 'drel'],
    titles: ['the Wise', 'Shadowbane', 'Lightbringer', 'the Ancient', 'Stormborn', 'the Undying', 'Starwalker', 'of the Deep Woods', 'the Silver-Tongued']
  },

  cyberpunk: {
    prefixes: ['Neo', 'Zer', 'Vex', 'Nyx', 'Raz', 'Cy', 'Pix', 'Hex', 'Kai', 'Axi', 'Gl', 'Syn', 'Dat', 'Qrz', 'Byt', 'Krx', 'Jyn', 'Orb'],
    suffixes: ['byte', 'wire', 'flux', 'core', 'node', 'link', 'hack', 'jack', 'net', 'chip', 'volt', 'pulse', 'grid', 'ghost', 'crash', 'zero', 'void'],
    titles: ['Ghost in the Machine', 'Null Pointer', 'Zero Day', 'the Architect', 'Data Phantom', 'Chrome Phantom', 'Neon Wraith']
  },

  realworld: {
    prefixes: ['Al', 'Ben', 'Car', 'Dav', 'El', 'Fre', 'Gar', 'Han', 'Isa', 'Jak', 'Kat', 'Leo', 'Mar', 'Nat', 'Oli', 'Pat', 'Ros', 'Sam', 'Tom', 'Val'],
    suffixes: ['ex', 'iel', 'ine', 'ora', 'ius', 'ana', 'ian', 'elle', 'ina', 'ara', 'ette', 'ander', 'ina', 'ella', 'ique'],
    titles: []
  },

  mythological: {
    prefixes: ['Ares', 'Athen', 'Chron', 'Hades', 'Ir', 'Mor', 'Nyx', 'Olym', 'Pan', 'Sel', 'Thorn', 'Zeph', 'Hel', 'Frey', 'Tyr'],
    suffixes: ['us', 'ia', 'os', 'eon', 'ara', 'ius', 'yx', 'ene', 'on', 'is', 'a', 'or', 'iel', 'oth'],
    titles: ['the Eternal', 'Keeper of Gates', 'the Forgotten One', 'Wanderer Between Worlds']
  }

};


// ════════════════════════════════════════════════════════════════════════════
//  CYBER LOREM & SPIRIT RESPONSES
// ════════════════════════════════════════════════════════════════════════════

/**
 * Cyberpunk-themed lorem ipsum phrases for atmospheric text generation.
 * @constant {Array<string>}
 */
const CYBER_LOREM = [
  'neon circuits pulse', 'data streams converge', 'quantum whispers echo',
  'binary dreams unfold', 'the grid hums eternal', 'synaptic fire cascades',
  'chrome reflections shimmer', 'digital ghosts wander', 'the machine dreams',
  'encrypted memories fade', 'signal noise distorts', 'the void compiles',
  'neural pathways light', 'algorithmic poetry flows', 'the network breathes',
  'fractal patterns emerge', 'the oracle processes', 'quantum states collapse',
  'the system awakens', 'virtual horizons expand', 'entropy reverses',
  'the code evolves', 'cybernetic hearts beat', 'the matrix shifts',
  'holographic memories persist', 'the simulation runs', 'dark protocols execute',
  'static whispers truth', 'the firewall cracks', 'data bleeds through',
  'the algorithm learns', 'ghost code surfaces', 'the network fragments',
  'digital rain falls', 'the signal strengthens', 'corrupted sectors heal',
  'the kernel panics', 'photon streams diverge', 'the cloud descends',
  'recursive loops tighten', 'the cache empties', 'binary stars align',
  'the proxy redirects', 'voltage spikes upward', 'the thread unwinds',
  'packets scatter like birds', 'the server hums a lullaby', 'root access granted'
];

/**
 * Spirit board responses — single words or short phrases the spirit "spells out."
 * @constant {Array<string>}
 */
const SPIRIT_RESPONSES = [
  'YES', 'NO', 'MAYBE', 'HELLO', 'GOODBYE',
  'SOON', 'NEVER', 'LISTEN', 'DANGER', 'PEACE',
  'TRUST', 'FEAR', 'LOVE', 'HATE', 'HELP',
  'STOP', 'GO', 'WAIT', 'NOW', 'LATER',
  'FRIEND', 'ENEMY', 'TRUTH', 'LIE', 'DREAM',
  'WAKE', 'LIGHT', 'DARK', 'HERE', 'THERE',
  'LOOK', 'HIDE', 'PAST', 'FUTURE', 'PRESENT',
  'BEHIND YOU', 'INSIDE YOU', 'ABOVE', 'BELOW',
  'FOLLOW', 'FORGET', 'REMEMBER', 'RUN', 'STAY',
  'SPEAK', 'SILENCE', 'AGAIN', 'ENOUGH', 'MORE'
];
