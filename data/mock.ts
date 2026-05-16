import type { Area, Clinic, Post, Reservation, Specialty, TrainerProfile, User } from "@/types";

export const areas: Area[] = [
  { id: "hachioji", name: "八王子エリア", prefecture: "東京都" },
  { id: "machida", name: "町田・多摩エリア", prefecture: "東京都" },
  { id: "sagamihara", name: "相模原エリア", prefecture: "神奈川県" },
];

export const specialties: Specialty[] = [
  { id: "ankle", name: "足首" },
  { id: "knee", name: "膝" },
  { id: "shoulder", name: "肩" },
  { id: "lower-back", name: "腰" },
  { id: "return-to-play", name: "復帰サポート" },
];

export const users: User[] = [
  { id: "u-anon-1", displayName: "匿名選手", role: "athlete", schoolLevel: "high_school" },
  { id: "u-trainer-1", displayName: "田中 健太", role: "trainer" },
  { id: "u-trainer-2", displayName: "佐藤 みなみ", role: "trainer" },
];

export const trainerProfiles: TrainerProfile[] = [
  {
    id: "trainer-1",
    userId: "u-trainer-1",
    name: "田中 健太",
    title: "柔道整復師 / アスレティックトレーナー",
    clinicId: "clinic-1",
    bio: "高校サッカー、大学野球チームの帯同経験を持つトレーナーです。",
    specialties: ["足首", "膝", "復帰サポート"],
  },
  {
    id: "trainer-2",
    userId: "u-trainer-2",
    name: "佐藤 みなみ",
    title: "柔道整復師",
    clinicId: "clinic-2",
    bio: "バスケットボールと陸上競技の怪我相談を多く担当しています。",
    specialties: ["膝", "腰", "肩"],
  },
];

export const posts: Post[] = [
  {
    id: "post-ankle-soccer",
    athleteLabel: "匿名選手",
    sport: "サッカー",
    bodyPart: "足首",
    injuredAt: "直後",
    title: "スライディング後に足首が腫れて歩きにくい",
    body: "昨日の練習でスライディングしたときに足首をひねりました。歩けますが腫れがあり、テーピングだけで練習に戻ってよいか迷っています。",
    createdAt: "2026-05-16T04:30:00.000Z",
    status: "answered",
    comments: [
      {
        id: "comment-1",
        postId: "post-ankle-soccer",
        authorType: "trainer",
        trainerProfileId: "trainer-1",
        authorName: "田中 健太",
        body: "腫れがある場合は、まず運動量を落として安静、冷却、圧迫、挙上を意識してください。歩行時の痛みや腫れが続く場合は、早めに接骨院や医療機関へ相談することをおすすめします。",
        createdAt: "2026-05-16T05:20:00.000Z",
      },
      {
        id: "comment-2",
        postId: "post-ankle-soccer",
        authorType: "athlete",
        authorName: "匿名選手",
        body: "自分も足首をひねったとき、無理に復帰して長引きました。最初の数日は様子を見た方が安心だと思います。",
        createdAt: "2026-05-16T06:00:00.000Z",
      },
    ],
  },
  {
    id: "post-knee-basketball",
    athleteLabel: "匿名選手",
    sport: "バスケ",
    bodyPart: "膝",
    injuredAt: "1週間以内",
    title: "ジャンプ着地で膝の内側が痛い",
    body: "試合中の着地で膝の内側が痛くなりました。階段を降りると違和感があります。練習を休むべきか悩んでいます。",
    createdAt: "2026-05-15T21:00:00.000Z",
    status: "answered",
    comments: [
      {
        id: "comment-3",
        postId: "post-knee-basketball",
        authorType: "trainer",
        trainerProfileId: "trainer-2",
        authorName: "佐藤 みなみ",
        body: "膝の内側痛は、靭帯や半月板周辺に負担が出ている可能性があります。痛みを我慢してプレーを続けると悪化することがあるため、ジャンプや切り返しは控え、専門家に相談してください。",
        createdAt: "2026-05-16T00:10:00.000Z",
      },
    ],
  },
  {
    id: "post-shoulder-baseball",
    athleteLabel: "匿名選手",
    sport: "野球",
    bodyPart: "肩",
    injuredAt: "1か月以内",
    title: "投球後に肩の奥が重くなる",
    body: "投球練習の後に肩の奥が重くなります。普段は痛くありませんが、投げる動作のときだけ気になります。フォームの問題なのか知りたいです。",
    createdAt: "2026-05-15T08:30:00.000Z",
    status: "open",
    comments: [],
  },
  {
    id: "post-back-track",
    athleteLabel: "匿名選手",
    sport: "陸上",
    bodyPart: "腰",
    injuredAt: "それ以上",
    title: "長距離練習後の腰の張りが続いている",
    body: "長距離の練習後から腰の張りが続いています。ストレッチしても改善しません。走る量を減らすべきでしょうか。",
    createdAt: "2026-05-14T10:00:00.000Z",
    status: "answered",
    comments: [
      {
        id: "comment-4",
        postId: "post-back-track",
        authorType: "trainer",
        trainerProfileId: "trainer-1",
        authorName: "田中 健太",
        body: "腰の張りは練習量、股関節まわりの硬さ、体幹の疲労が関係することがあります。症状が続く場合は練習量を調整し、フォームや身体の使い方を見てもらうことをおすすめします。",
        createdAt: "2026-05-15T02:00:00.000Z",
      },
    ],
  },
];

export const clinics: Clinic[] = [
  {
    id: "clinic-1",
    name: "SFG八王子スポーツ接骨院",
    areaId: "hachioji",
    address: "東京都八王子市明神町 1-2-3",
    access: "八王子駅から徒歩6分",
    catchCopy: "部活生の復帰までをチーム目線でサポート",
    description: "足首、膝、腰のスポーツ外傷相談に対応。トレーナー回答から来院相談までつなげやすい体制を整えています。",
    hours: "平日 10:00-20:00 / 土曜 9:00-17:00",
    phone: "042-000-0000",
    specialties: ["足首", "膝", "復帰サポート"],
    sports: ["サッカー", "野球", "陸上"],
    trainerProfileIds: ["trainer-1"],
  },
  {
    id: "clinic-2",
    name: "町田アスリートケア整骨院",
    areaId: "machida",
    address: "東京都町田市原町田 4-5-6",
    access: "町田駅から徒歩4分",
    catchCopy: "バスケ、バレー、陸上の相談に強い地域院",
    description: "学生アスリートの膝や肩の相談を中心に、復帰時期の目安やセルフケアの相談ができます。",
    hours: "平日 9:30-19:30 / 日曜予約制",
    phone: "042-111-1111",
    specialties: ["膝", "肩", "腰"],
    sports: ["バスケ", "バレー", "陸上"],
    trainerProfileIds: ["trainer-2"],
  },
  {
    id: "clinic-3",
    name: "相模原コンディショニング接骨院",
    areaId: "sagamihara",
    address: "神奈川県相模原市中央区中央 7-8-9",
    access: "相模原駅からバス8分",
    catchCopy: "競技復帰前の不安を相談しやすい接骨院",
    description: "予約前の相談内容をもとに、選手本人と保護者が納得しやすい説明を心がけています。",
    hours: "平日 11:00-21:00 / 土日 10:00-16:00",
    phone: "042-222-2222",
    specialties: ["足首", "腰", "復帰サポート"],
    sports: ["サッカー", "テニス", "ラグビー"],
    trainerProfileIds: [],
  },
];

export const reservations: Reservation[] = [
  {
    id: "reservation-1",
    clinicId: "clinic-1",
    postId: "post-ankle-soccer",
    athleteName: "匿名選手",
    contact: "example@sfg.local",
    preferredDate: "2026-05-18",
    message: "足首の腫れが続くため相談したいです。",
    status: "requested",
  },
];
