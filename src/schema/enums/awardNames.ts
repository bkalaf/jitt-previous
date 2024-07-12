
export const awardNames = {
    oscar: 'Academy Award (Oscar)',
    emmy: 'Emmy Award',
    tony: 'Tony Award',
    pulitzer: 'Pulitzer Prize',
    grammy: 'Grammy Award',
    hugo: 'Hugo Award',
    'ny-times': 'New York Times Bestseller List',
    unknown: null
};

// console.log(`export type AwardNames = ${Object.keys(awardNames).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(
//     JSON.stringify(
//         Object.entries(awardNames).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );

export const awardCategories = {
    'ny-times': {
        fiction: 'Fiction',
        nonfiction: 'Non-Fiction',
        childrens: "Children's Books"
    },
    hugo: {
        novel: 'Best Novel',
        novella: 'Best Novella',
        novelette: 'Best Novelette',
        'short-story': 'Best Short Story',
        series: 'Best Series',
        'graphic-story': 'Best Graphic Story',
        'fan-writer': 'Best Fan Writer',
        game: 'Best Game or Interactive Work',
        'related-work': 'Best Related Work'
    },
    pulitzer: {
        biography: 'Biography',
        memoir: 'Memoir or Autobiography',
        history: 'History',
        nonfiction: 'General Nonfiction',
        fiction: 'Fiction',
        poetry: 'Poetry',
        drama: 'Drama',
        music: 'Music'
    },
    grammy: {
        album: 'Album of the Year',
        record: 'Record of the Year',
        song: 'Song of the Year',
        artist: 'Best New Artist of the Year',
        songwriter: 'Songwriter of the Year',
        producer: 'Producer of the Year',
        'pop-solo': 'Best Pop Solo Performance',
        'pop-duo': 'Best Pop Duo/Group Performance',
        'pop-vocal': 'Best Pop Vocal Album',
        dance: 'Best Dance/Electronic Recording',
        'dance-pop': 'Best Dance Pop Recording',
        'dance-album': 'Best Dance/Electronic Album',
        remix: 'Best Remixed Recording',
        rock: 'Best Rock Performance',
        metal: 'Best Metal Performance',
        'rock-song': 'Best Rock Song Performance',
        'rock-album': 'Best Rock Album',
        alternative: 'Best Alternative Music Performance',
        'alternative-album': 'Best Alternative Music Album',
        rnb: 'Best R&B Performance',
        'traditional-rnb': 'Best Traditional R&B Performance',
        'rnb-song': 'Best R&B Song',
        'progressive-rnb': 'Best Progressive R&B Album',
        'rnb-album': 'Best R&B Album',
        rap: 'Best Rap Performance',
        'melodic-rap': 'Best Melodic Rap Performance',
        'rap-song': 'Best Rap Song',
        'rap-album': 'Best Rap Album',
        'spoken-word': 'Best Spoken Word Poetry Album',
        'musical-theatre': 'Best Musical Theatre Album',
        'country-solo': 'Best Country Solo Performance',
        'country-duo': 'Best Country Duo/Group Performance',
        'country-song': 'Best Country Song',
        'country-album': 'Best Country Album',
        bluegrass: 'Best Bluegrass Album',
        folk: 'Best Folk Album',
        'americana-album': 'Best Americana Album',
        americana: 'Best Americana Performance',
        'american-roots': 'Best American Roots Performance',
        'traditional-blues': 'Best Traditional Blues Album',
        'contemporary-blues': 'Best Contemporary Blues Album',
        'regional-roots': 'Best Regional Roots Music Album',
        gospel: 'Best Gospel Performance/Song',
        'gospel-album': 'Best Gospel Album',
        'contemporary-christian': 'Best Contemporary Christian Music Performance/Song',
        'contemporary-christian-album': 'Best Contemporary Christian Music Album',
        'traditional-pop': 'Best Traditional Pop Vocal Album',
        jazz: 'Best Jazz Performance',
        'jazz-vocal': 'Best Jazz Vocal Album',
        'jazz-instrumental': 'Best Jaxx Instrumental Album',
        'large-jazz': 'Best Large Jazz Ensemble Album',
        'latin-jazz': 'Best Latin Jazz Album',
        'alternative-jazz': 'Best Alternative Jazz Album',
        'latin-pop': 'Best Latin Pop Album',
        'musica-urbana': 'Best Musica Urbana Album',
        'latin-rock': 'Best Latin Rock Album',
        'musica mexicana': 'Best Música Mexicana Album',
        'tropical-latin': 'Best Tropical Latin Album',
        'global-music': 'Best Global Music Album',
        raggae: 'Best Reggae Album',
        'new-age': 'Best New Age, Ambient, or Chant Album',
        childrens: "Best Children's Music Album",
        comedy: 'Best Comedy Album',
        'audio-book': 'Best Audio Book, Narration & Storytelling Recording',
        compilation: 'Best Compilation Soundtrack for Visual Media',
        soundtrack: 'Best Score Soundtrack Album for Visual Media',
        'soundtrack-video-games': 'Best Score Soundtrack for Video Games and Other Interactive Media',
        'song-visual-media': 'Best Song Written for Visual Media',
        'music-video': 'Best Music Video',
        'music-film': 'Best Music Film'
    },
    tony: {
        play: 'Best Play',
        musical: 'Best Musical',
        choreography: 'Best Choreography',
        'actor-play': 'Best Performance by a Leading Actor in a Play',
        'actor-musical': 'Best Performance by a Leading Actor in a Musical',
        'featured-actor-play': 'Best Performance by a Leading Actor in a Play',
        'featured-actor-musical': 'Best Performance by a Featured Actor in a Musical',
        'actress-play': 'Best Performance by a Leading Actress in a Play',
        'actress-musical': 'Best Performance by a Leading Actress in a Musical',
        'featured-actress-play': 'Best Performance by a Featured Actress in a Play',
        'featured-actress-musical': 'Best Performance by a Featured Actress in a Musical'
    },
    emmy: {
        comedy: 'Outstanding Comedy Series',
        drama: 'Outstanding Drama Series',
        limited: 'Outstanding Limited/Anthology Series',
        reality: 'Outstanding Reality Competition',
        variety: 'Outstanding Scripted Variety Series',
        talk: 'Outstanding Talk Series',
        movie: 'Outstanding Television Movie',
        'directing-comedy': 'Outstanding Directing for a Comedy Series',
        'directing-drama': 'Outstanding Directing for a Drama Series',
        'directing-limited': 'Outstanding Directing for a Limited/Anthology Series',
        'directing-variety': 'Outstanding Directing for a Variety Series',
        'writing-comedy': 'Outstanding Writing for a Comedy Series',
        'writing-drama': 'Outstanding Writing for a Drama Series',
        'writing-limited': 'Outstanding Writing for a Limited/Anthology Series',
        'writing-variety': 'Outstanding Writing for a Variety Series',
        'actor-comedy': 'Outstanding Lead Actor in a Comedy Series',
        'actor-drama': 'Outstanding Lead Actor in a Drama Series',
        'actor-limited': 'Outstanding Lead Actor in a Limited/Anthology Series',
        'actress-comedy': 'Outstanding Lead Actress in a Comedy Series',
        'actress-drama': 'Outstanding Lead Actress in a Drama Series',
        'actress-limited': 'Outstanding Lead Actress in a Limited/Anthology Series',
        'supporting-actor-comedy': 'Outstanding Supporting Actor in a Comedy Series',
        'supporting-actor-drama': 'Outstanding Supporting Actor in a Drama Series',
        'supporting-actor-limited': 'Outstanding Supporting Actor in a Limited/Anthology Series',
        'supporting-actress-comedy': 'Outstanding Supporting Actress in a Comedy Series',
        'supporting-actress-drama': 'Outstanding Supporting Actress in a Drama Series',
        'supporting-actress-limited': 'Outstanding Supporting Actress in a Limited/Anthology Series',
        'documentary-series': 'Outstanding Documentary or Nonfiction Series',
        'documentary-special': 'Outstanding Documentary or Nonfiction Special',
        animated: 'Outstanding Animated Program'
    },
    oscar: {
        picture: 'Best Picture',
        actor: 'Best Leading Actor',
        actress: 'Best Leading Actress',
        director: 'Best Director',
        'supporting-actor': 'Best Supporting Actor',
        'supporting-actress': 'Best Supporting Actress',
        'original-screenplay': 'Best Original Screenplay',
        song: 'Best Original Song',
        cinematography: 'Best Cinematography',
        design: 'Best Production Design',
        'adapted-screenplay': 'Best Adapted Screenplay',
        sound: 'Best Sound',
        animated: 'Best Animated Feature Film',
        editing: 'Best Editing',
        score: 'Best Original Score',
        effects: 'Best Visual Effects',
        'short-documentary': 'Best Documentary Short Film',
        documentary: 'Best Documentary Feature Film',
        international: 'Best International Film',
        costume: 'Best Costume Design',
        makeup: 'Best Makeup and Hairstyling',
        'animated-short': 'Best Animated Short Film',
        casting: 'Best Casting'
    }
};

// console.log(`export type HugoAwards = ${Object.keys(awardCategories.hugo).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type EmmyAwards = ${Object.keys(awardCategories.emmy).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type OscarAwards = ${Object.keys(awardCategories.oscar).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type NYTimesAwards = ${Object.keys(awardCategories['ny-times']).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type PulitzerAwards = ${Object.keys(awardCategories.pulitzer).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type GrammyAwards = ${Object.keys(awardCategories.grammy).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(`export type TonyAwards = ${Object.keys(awardCategories.tony).map(surroundQuotesIgnore).join(' | ')}`);

// console.log(
//     JSON.stringify(
//         {
//             hugoAwardCategories: Object.entries(awardCategories.hugo).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'hugo'
//             })),
//             emmyAwardCategories: Object.entries(awardCategories.emmy).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'emmy'
//             })),
//             grammyAwardCategories: Object.entries(awardCategories.grammy).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'grammy'
//             })),
//             tonyAwardCategories: Object.entries(awardCategories.tony).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'tony'
//             })),
//             pulizerPrizeCategories: Object.entries(awardCategories.pulitzer).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'pulitzer'
//             })),
//             oscarAwardCategories: Object.entries(awardCategories.oscar).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'oscar'
//             })),
//             nyTimesAwardCategories: Object.entries(awardCategories['ny-times']).map(([k, v]) => ({
//                 key: k,
//                 text: v,
//                 aliases: [],
//                 parent: 'ny-times'
//             }))
//         },
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.hugo).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.emmy).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.oscar).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.grammy).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.tony).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories['ny-times']).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         Object.entries(awardCategories.pulitzer).map(([k, v]) => ({
//             key: k,
//             text: v
//         })),
//         null,
//         '\t'
//     )
// );
